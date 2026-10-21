import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { catalog, previousCatalogs } from '../src/content/catalog';
import { initialState, transition } from '../src/engine/game';
import { freeCellHints } from '../src/engine/bonusRewards';
import { selectPostcards } from '../src/engine/postcards';
import { selectGameplay } from '../src/engine/selectors';
import type { Economy, GameCommand } from '../src/models/types';
import { createGameStore } from '../src/state/createGameStore';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { tilesFor } from './helpers';
import { TestSqlite } from './sqliteAdapter';

const previousEconomy: Economy = {
  initialCoins: 100,
  completionReward: 25,
  bonusReward: 3,
  cellHintCost: 15,
  wordHintCost: 40,
};

test('new games start with 200 coins and an explicit reset uses the new balance', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repository = createSqliteRepository(db, catalog);
    const store = createGameStore(catalog, async () => repository);
    await store.getState().initialize();
    expect(store.getState().game?.coins).toBe(200);
    await store.getState().dispatch({
      type: 'hint',
      levelId: catalog.levels[0]!.id,
      kind: 'cell',
    });
    expect(store.getState().game?.coins).toBe(180);
    await store.getState().reset();
    const restored = createGameStore(catalog, async () => repository);
    await restored.getState().initialize();
    expect(restored.getState().game).toEqual(initialState(catalog));
    expect(restored.getState().game?.coins).toBe(200);
  } finally {
    db.close();
  }
});

test.each([0, 37, 100, 387])(
  'loading an existing %i-coin balance does not top up or reprice it',
  async (coins) => {
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const repository = createSqliteRepository(db, catalog);
      const saved = { ...initialState(catalog, previousEconomy), coins };
      await repository.save(saved, 0);
      const store = createGameStore(catalog, async () => repository);
      await store.getState().initialize();
      expect(store.getState().game).toEqual(saved);
      expect(await repository.load()).toEqual({ state: saved, revision: 1 });
    } finally {
      db.close();
    }
  },
);

test.each([
  { kind: 'cell' as const, cost: 20 },
  { kind: 'word' as const, cost: 50 },
])(
  '$kind hint affordability and debit agree at the $cost-coin boundary',
  ({ kind, cost }) => {
    const levelId = catalog.levels[0]!.id;
    const low = { ...initialState(catalog), coins: cost - 1 };
    const command = { type: 'hint' as const, levelId, kind };
    const rejected = transition(low, command, catalog);
    expect(rejected.state).toBe(low);
    expect(rejected.events).toContainEqual({
      type: 'word-rejected',
      reason: 'insufficient-coins',
      word: '',
    });
    const enough = { ...low, coins: cost };
    const flag = kind === 'cell' ? 'canUseCellHint' : 'canUseWordHint';
    expect(selectGameplay(low, catalog)[flag]).toBe(false);
    expect(selectGameplay(enough, catalog)[flag]).toBe(true);
    const bought = transition(enough, command, catalog);
    expect(bought.state.coins).toBe(0);
    expect(bought.events).toContainEqual({ type: 'hint-used', kind, cost });
  },
);

test.each([catalog, previousCatalogs.find((pack) => pack.revision === 25)!])(
  'old-price revision $revision save keeps balances, paid hints, bonuses and postcards after reopen',
  async (previous) => {
    const folder = mkdtempSync(join(tmpdir(), 'asobana-economy-'));
    const path = join(folder, 'game.db');
    let db = new TestSqlite(path);
    try {
      await migrateDatabase(db);
      let old = initialState(previous, previousEconomy);
      const oldAction = (command: GameCommand) => {
        const result = transition(old, command, previous, previousEconomy);
        expect(
          result.events.some((event) => event.type === 'word-rejected'),
        ).toBe(false);
        old = result.state;
      };
      // Buy a letter at the former price before earning any free hint credits.
      oldAction({ type: 'hint', levelId: old.currentLevelId, kind: 'cell' });
      expect(old.coins).toBe(85);
      // Whole stops whose bonus words earn at least two free letters.
      let played = 0;
      for (let total = 0; played % 5 !== 0 || total < 20; played++)
        total += previous.levels[played]!.bonusWords.length;
      for (const level of previous.levels.slice(0, played)) {
        oldAction({ type: 'open-level', levelId: level.id });
        for (const bonus of level.bonusWords)
          oldAction({
            type: 'submit',
            levelId: level.id,
            tileIds: tilesFor(level, bonus),
          });
        for (const word of level.words)
          if (!old.progress[level.id]?.solvedWordIds.includes(word.id))
            oldAction({
              type: 'submit',
              levelId: level.id,
              tileIds: tilesFor(level, word.answer),
            });
      }
      const partial = previous.levels[played]!;
      oldAction({ type: 'open-level', levelId: partial.id });
      oldAction({ type: 'hint', levelId: partial.id, kind: 'word' });
      expect(freeCellHints(old)).toBeGreaterThan(1);
      oldAction({ type: 'hint', levelId: partial.id, kind: 'cell' });
      oldAction({
        type: 'settings',
        settings: { sound: false, haptics: false },
      });
      oldAction({ type: 'tutorial', seen: true });
      expect(old.coins).toBe(
        100 + played * 25 + old.bonusRewards.totalFound * 3 - 15 - 40,
      );
      expect(old.progress[partial.id]?.completed).toBe(false);
      const postcards = selectPostcards(old, previous).filter(
        (card) => card.collected,
      );
      expect(postcards).toHaveLength(played / 5);
      await createSqliteRepository(db, previous).save(old, 0);

      db.close();
      db = new TestSqlite(path);
      await migrateDatabase(db);
      const repository = createSqliteRepository(db, catalog, previousCatalogs);
      const store = createGameStore(catalog, async () => repository);
      await store.getState().initialize();
      const loaded = store.getState().game!;
      expect(loaded.coins).toBe(old.coins);
      expect(loaded.bonusRewards).toEqual(old.bonusRewards);
      expect(loaded.settings).toEqual(old.settings);
      expect(loaded.tutorialSeen).toBe(true);
      expect(loaded.currentLevelId).toBe(partial.id);
      expect(loaded.progress[partial.id]?.hintsUsed).toBe(
        old.progress[partial.id]?.hintsUsed,
      );
      expect(
        loaded.progress[partial.id]?.solvedWordIds.length,
      ).toBeGreaterThanOrEqual(old.progress[partial.id]!.solvedWordIds.length);
      expect(
        loaded.progress[partial.id]?.revealedCellIds.length,
      ).toBeGreaterThanOrEqual(
        old.progress[partial.id]!.revealedCellIds.length,
      );
      expect(
        selectPostcards(loaded, catalog).filter((card) => card.collected),
      ).toEqual(postcards);
      for (const level of catalog.levels.slice(0, played))
        expect(loaded.progress[level.id]?.completed).toBe(true);
      if (previous.revision === catalog.revision) expect(loaded).toEqual(old);

      // Retained bonus hints are still free; subsequent paid actions use new prices.
      await store
        .getState()
        .dispatch({ type: 'hint', levelId: partial.id, kind: 'cell' });
      expect(store.getState().game?.coins).toBe(old.coins);
      expect(freeCellHints(store.getState().game!)).toBe(
        freeCellHints(old) - 1,
      );
      await store
        .getState()
        .dispatch({ type: 'hint', levelId: partial.id, kind: 'word' });
      expect(store.getState().eventBatch.events).toContainEqual({
        type: 'hint-used',
        kind: 'word',
        cost: 50,
      });
      const expected = store.getState().game;

      db.close();
      db = new TestSqlite(path);
      await migrateDatabase(db);
      const restarted = createGameStore(catalog, async () =>
        createSqliteRepository(db, catalog, previousCatalogs),
      );
      await restarted.getState().initialize();
      expect(restarted.getState().game).toEqual(expected);
    } finally {
      db.close();
      rmSync(folder, { recursive: true, force: true });
    }
  },
);
