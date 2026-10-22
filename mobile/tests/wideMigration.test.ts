import { catalog, previousCatalogs } from '../src/content/catalog';
import { initialState, revealedCells, transition } from '../src/engine/game';
import { selectGameplay } from '../src/engine/selectors';
import { restoreContent } from '../src/storage/contentMigration';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

const previous = previousCatalogs()[4]!;

test.each(['untouched', 'partial', 'hinted', 'completed', 'final'] as const)(
  'real revision 5 %s save upgrades once with credits intact',
  async (scenario) => {
    const index = scenario === 'final' ? 49 : scenario === 'untouched' ? 0 : 21;
    const oldLevel = previous.levels[index]!;
    let old =
      scenario === 'untouched'
        ? initialState(previous)
        : reachLevel(index, previous);
    if (scenario === 'partial')
      old = submit(old, oldLevel, oldLevel.words[0]!.answer, previous).state;
    if (scenario === 'hinted') {
      old = transition(
        old,
        { type: 'hint', levelId: oldLevel.id, kind: 'word' },
        previous,
      ).state;
      old = transition(
        old,
        { type: 'hint', levelId: oldLevel.id, kind: 'cell' },
        previous,
      ).state;
      old = {
        ...old,
        progress: {
          ...old.progress,
          'ka-001': { ...old.progress['ka-001']!, hintsUsed: 914 },
        },
      };
    }
    if (scenario === 'completed' || scenario === 'final') {
      for (const word of oldLevel.words)
        old = submit(old, oldLevel, word.answer, previous).state;
      old = submit(old, oldLevel, oldLevel.bonusWords[0]!, previous).state;
    }
    old = parseSnapshot(old, previous);
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const repo = createSqliteRepository(db, catalog, previousCatalogs());
      const upgraded = (await repo.load())!;
      const state = upgraded.state;
      expect(state.contentRevision).toBe(catalog.revision);
      expect(upgraded.revision).toBe(2);
      expect(state.currentLevelId).toBe(old.currentLevelId);
      expect(state.settings).toEqual(old.settings);
      expect(state.coins).toBeGreaterThanOrEqual(old.coins);
      for (const [id, saved] of Object.entries(old.progress)) {
        const next = state.progress[id]!;
        expect(next.solvedWordIds.length).toBeGreaterThanOrEqual(
          saved.solvedWordIds.length,
        );
        expect(next.hintsUsed).toBe(saved.hintsUsed);
        const level = catalog.levels.find((entry) => entry.id === id)!;
        if (!next.completed)
          expect(next.revealedCellIds.length).toBeGreaterThanOrEqual(
            saved.revealedCellIds.length,
          );
        else expect(revealedCells(level, next).size).toBeGreaterThan(0);
        if (saved.completed) expect(next.completed).toBe(true);
      }
      if (scenario === 'untouched')
        expect(state.progress).toEqual(old.progress);
      if (scenario === 'completed' || scenario === 'final') {
        expect(state.coins).toBe(old.coins);
        const level = catalog.levels[index]!;
        expect(submit(state, level, level.words[0]!.answer).state.coins).toBe(
          old.coins,
        );
      }
      if (scenario === 'final')
        expect(selectGameplay(state, catalog).nextLevelId).toBe('ka-051');
      expect(await repo.load()).toEqual(upgraded);
      expect(restoreContent(state, catalog, previousCatalogs())).toEqual({
        state,
        migrated: false,
      });
    } finally {
      db.close();
    }
  },
);

test('unsupported content remains byte-for-byte on disk after a failed v6 load', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const payload = JSON.stringify({
      ...initialState(previous),
      contentRevision: 999,
    });
    await db.runAsync(
      'INSERT INTO game_snapshot (id, revision, payload, save_format) VALUES (1, 8, ?, 1)',
      payload,
    );
    await expect(
      createSqliteRepository(db, catalog, previousCatalogs()).load(),
    ).rejects.toThrow('save retained');
    expect(
      await db.getFirstAsync(
        'SELECT payload, revision FROM game_snapshot WHERE id = 1',
      ),
    ).toEqual({ payload, revision: 8 });
  } finally {
    db.close();
  }
});
