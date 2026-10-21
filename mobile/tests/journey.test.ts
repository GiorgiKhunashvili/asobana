import manifest from '../../content/levels/discovery.v10.recipes.json';
import {
  catalog,
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import { validateWide } from '../src/content/wide';
import { freeCellHints } from '../src/engine/bonusRewards';
import { initialState, transition } from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import { selectGameplay } from '../src/engine/selectors';
import type { LevelPack } from '../src/models/types';
import { createGameStore } from '../src/state/createGameStore';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit, tilesFor } from './helpers';
import { TestSqlite } from './sqliteAdapter';

function findBonuses(count: number, pack: LevelPack = catalog) {
  let state = initialState(pack);
  for (const level of pack.levels) {
    state = transition(
      state,
      { type: 'open-level', levelId: level.id },
      pack,
    ).state;
    for (const word of level.bonusWords) {
      const before = state;
      const result = submit(state, level, word, pack);
      state = result.state;
      if (state.bonusRewards.totalFound === count)
        return { before, result, level, word };
    }
    for (const word of level.words)
      state = submit(state, level, word.answer, pack).state;
  }
  throw new Error('Insufficient bonus words in fixture');
}

test('ten bonus finds across levels award exactly one free hint; duplicates do not advance it', () => {
  const { before, result, level, word } = findBonuses(10);
  expect(before.bonusRewards.totalFound).toBe(9);
  expect(freeCellHints(before)).toBe(0);
  expect(result.events).toContainEqual({ type: 'bonus-hint-earned' });
  expect(result.state.coins).toBe(before.coins + 3);
  expect(selectGameplay(result.state, catalog)).toMatchObject({
    bonusMeter: 0,
    freeCellHints: 1,
    cellHintCost: 0,
  });
  expect(submit(result.state, level, word).state).toBe(result.state);
  const broke = { ...result.state, coins: 0 };
  expect(selectGameplay(broke, catalog).canUseCellHint).toBe(true);
  const wrongKind = transition(
    broke,
    { type: 'hint', levelId: level.id, kind: 'word' },
    catalog,
  );
  expect(wrongKind.state).toBe(broke);
  const hinted = transition(
    broke,
    { type: 'hint', levelId: level.id, kind: 'cell' },
    catalog,
  );
  expect(hinted.events).toContainEqual({
    type: 'hint-used',
    kind: 'cell',
    cost: 0,
  });
  expect(hinted.state.coins).toBe(0);
  expect(freeCellHints(hinted.state)).toBe(0);
  expect(parseSnapshot(hinted.state, catalog)).toEqual(hinted.state);
  const again = transition(
    hinted.state,
    { type: 'hint', levelId: level.id, kind: 'cell' },
    catalog,
  );
  expect(again.state).toBe(hinted.state);
  expect(freeCellHints(findBonuses(20).result.state)).toBe(2);
});

test('failed writes do not award a hint; concurrent duplicates and restarts cannot award twice', async () => {
  const { before, level, word } = findBonuses(10);
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repo = createSqliteRepository(db, catalog, previousCatalogs);
    await repo.save(before, 0);
    const store = createGameStore(catalog, async () => repo);
    await store.getState().initialize();
    const save = jest.spyOn(repo, 'save');
    save.mockRejectedValueOnce(new Error('Disk full'));
    const command = {
      type: 'submit' as const,
      levelId: level.id,
      tileIds: tilesFor(level, word),
    };
    await expect(store.getState().dispatch(command)).rejects.toThrow(
      'Disk full',
    );
    expect(store.getState().game).toEqual(before);
    await Promise.all([
      store.getState().dispatch(command),
      store.getState().dispatch(command),
    ]);
    expect(store.getState().game!.bonusRewards).toEqual({
      totalFound: 10,
      hintsSpent: 0,
    });
    await store
      .getState()
      .dispatch({ type: 'hint', levelId: level.id, kind: 'cell' });
    const reopened = createGameStore(catalog, async () => repo);
    await reopened.getState().initialize();
    expect(reopened.getState().game).toEqual(store.getState().game);
    expect(freeCellHints(reopened.getState().game!)).toBe(0);
  } finally {
    db.close();
  }
});

test('old saves receive bonus credit before retired markers are filtered, once in SQLite', async () => {
  const old = findBonuses(12, previousCatalogs[8]!).result.state;
  const { bonusRewards: _rewards, ...legacy } = old;
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    await db.runAsync(
      'INSERT INTO game_snapshot (id, revision, payload, save_format) VALUES (1, 1, ?, 1)',
      JSON.stringify(legacy),
    );
    const repo = createSqliteRepository(db, catalog, previousCatalogs);
    const saved = (await repo.load())!;
    expect(saved.revision).toBe(2);
    expect(saved.state.bonusRewards).toEqual({ totalFound: 12, hintsSpent: 0 });
    expect(saved.state.coins).toBe(old.coins);
    expect(
      selectPostcards(saved.state, catalog).filter(
        (card) => card.collected && card.legacy,
      ).length,
    ).toBe(
      selectPostcards(old, previousCatalogs[8]!).filter(
        (card) => card.collected,
      ).length,
    );
    expect(await repo.load()).toEqual(saved);
  } finally {
    db.close();
  }
});

test('corrupt bonus counters are rejected and credits remain valid across content migration', () => {
  const state = findBonuses(10).result.state;
  for (const bonusRewards of [
    null,
    { totalFound: 9, hintsSpent: 0 },
    { totalFound: 10, hintsSpent: 2 },
    { totalFound: 10, hintsSpent: -1 },
    { totalFound: 10.5, hintsSpent: 0 },
  ])
    expect(() => parseSnapshot({ ...state, bonusRewards }, catalog)).toThrow();
});

test('postcards unlock at chapter completion, with the next destination previewed', () => {
  const fresh = selectPostcards(initialState(catalog), catalog);
  expect(fresh.filter((card) => card.collected)).toHaveLength(0);
  expect(fresh.filter((card) => card.next).map((card) => card.number)).toEqual([
    1,
  ]);
  const before = reachLevel(4);
  expect(selectPostcards(before, catalog)[0]).toMatchObject({
    collected: false,
    remaining: 1,
  });
  const done = reachLevel(5);
  expect(selectPostcards(done, catalog)[0]).toMatchObject({
    collected: true,
    remaining: 0,
  });
  expect(selectPostcards(done, catalog)[1]).toMatchObject({
    collected: false,
    next: true,
  });
  let complete = reachLevel(catalog.levels.length - 1);
  for (const word of catalog.levels[catalog.levels.length - 1]!.words)
    complete = submit(
      complete,
      catalog.levels[catalog.levels.length - 1]!,
      word.answer,
    ).state;
  const album = selectPostcards(parseSnapshot(complete, catalog), catalog);
  expect(album.filter((card) => card.collected)).toHaveLength(100);
  expect(album.some((card) => card.next)).toBe(false);
});

test('pacing keeps all unique answers and enforces a recovery after every chapter challenge', () => {
  const previous = previousCatalogs[8]!;
  const journey = previousCatalogs[9]!;
  const words = (pack: LevelPack) =>
    pack.levels
      .flatMap((level) => level.words.map((word) => word.answer))
      .sort();
  expect(words(journey)).toEqual(words(previous));
  expect(new Set(words(journey)).size).toBe(250);
  expect(journey.levels[22]!.difficulty.score).toBeLessThan(
    previous.levels[22]!.difficulty.score,
  );
  expect(() =>
    validateWide(journey, vocabularyForRevision(10), manifest.familiarity),
  ).not.toThrow();
  const scores = journey.levels.map((level) => level.difficulty.score);
  for (let i = 0; i < 50; i += 5) {
    expect(scores[i + 2]).toBe(Math.max(...scores.slice(i, i + 5)));
    expect(scores[i + 2]! - scores[i + 3]!).toBeGreaterThanOrEqual(2);
  }
  expect(
    Math.max(...scores.slice(1).map((score, i) => score - scores[i]!)),
  ).toBeLessThanOrEqual(10);
});
