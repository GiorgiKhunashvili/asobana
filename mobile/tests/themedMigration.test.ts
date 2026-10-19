import { catalog, previousCatalogs } from '../src/content/catalog';
import { initialState, revealedCells, transition } from '../src/engine/game';
import { restoreContent } from '../src/storage/contentMigration';
import {
  createSqliteRepository,
  migrateDatabase,
  StaleSaveError,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

describe.each(previousCatalogs)(
  'discovery upgrade from revision $revision',
  (previous) => {
    test('completed levels and earned coins remain intact', () => {
      let state = reachLevel(previous.levels.length - 1, previous);
      const last = previous.levels.at(-1)!;
      for (const word of last.words)
        state = submit(state, last, word.answer, previous).state;
      const before = JSON.stringify(state);
      const result = restoreContent(state, catalog, previousCatalogs);
      expect(JSON.stringify(state)).toBe(before);
      expect(result.state.coins).toBe(state.coins);
      expect(result.state.currentLevelId).toBe(state.currentLevelId);
      for (const old of previous.levels)
        expect(result.state.progress[old.id]?.completed).toBe(true);
      expect(restoreContent(result.state, catalog, previousCatalogs)).toEqual({
        state: result.state,
        migrated: false,
      });
    });

    test('every partial board keeps solved-word credits, hint benefit and settings', () => {
      for (const [index, old] of previous.levels.entries()) {
        let state = { ...reachLevel(index, previous), coins: 1000 };
        for (const bonus of old.bonusWords)
          state = submit(state, old, bonus, previous).state;
        state = transition(
          state,
          { type: 'hint', levelId: old.id, kind: 'cell' },
          previous,
        ).state;
        state = submit(state, old, old.words[0]!.answer, previous).state;
        state = transition(
          state,
          { type: 'settings', settings: { sound: false, haptics: false } },
          previous,
        ).state;
        const saved = state.progress[old.id]!;
        const upgraded = restoreContent(state, catalog, previousCatalogs).state;
        const level = catalog.levels[index]!;
        const current = upgraded.progress[level.id]!;
        expect(current.solvedWordIds.length).toBeGreaterThanOrEqual(
          Math.min(saved.solvedWordIds.length, level.words.length),
        );
        expect(current.hintsUsed).toBe(saved.hintsUsed);
        expect(revealedCells(level, current).size).toBeGreaterThan(0);
        expect(upgraded.settings).toEqual(state.settings);
        expect(upgraded.coins).toBe(
          state.coins + (current.completed && !saved.completed ? 20 : 0),
        );
        expect(parseSnapshot(upgraded, catalog)).toEqual(upgraded);
      }
    });

    test('SQLite migrates once and rolls back a failed write without losing the old save', async () => {
      const db = new TestSqlite();
      try {
        await migrateDatabase(db);
        const oldRepo = createSqliteRepository(db, previous);
        const state = reachLevel(1, previous);
        await oldRepo.save(state, 0);
        await db.execAsync(
          "CREATE TRIGGER fail_topics BEFORE UPDATE ON game_snapshot BEGIN SELECT RAISE(ABORT, 'Disk full'); END;",
        );
        const repo = createSqliteRepository(db, catalog, previousCatalogs);
        await expect(repo.load()).rejects.toThrow('Disk full');
        expect(
          (
            await db.getFirstAsync<{ payload: string }>(
              'SELECT payload FROM game_snapshot',
            )
          )?.payload,
        ).toBe(JSON.stringify(state));
        await db.execAsync('DROP TRIGGER fail_topics');
        const migrated = (await repo.load())!;
        expect(migrated.revision).toBe(2);
        expect(migrated.state.contentRevision).toBe(catalog.revision);
        expect(await repo.load()).toEqual(migrated);
        await expect(oldRepo.save(state, 1)).rejects.toBeInstanceOf(
          StaleSaveError,
        );
      } finally {
        db.close();
      }
    });
  },
);

test('completion credits from a longer old board pay once and hints survive smaller boards', () => {
  const previous = previousCatalogs[1]!;
  const target = previousCatalogs[2]!;
  const old = previous.levels[0]!;
  let state = { ...initialState(previous), coins: 1000 };
  for (let i = 0; i < 3; i++)
    state = transition(
      state,
      { type: 'hint', levelId: old.id, kind: 'word' },
      previous,
    ).state;
  expect(state.progress[old.id]?.completed).toBe(false);
  const upgraded = restoreContent(state, target, previousCatalogs).state;
  expect(upgraded.progress[old.id]?.completed).toBe(true);
  expect(upgraded.coins).toBe(state.coins + 20);
  expect(restoreContent(upgraded, target, previousCatalogs).state.coins).toBe(
    upgraded.coins,
  );
});

test('unknown revisions, corrupt saves and reordered level identities are rejected', () => {
  const old = initialState(previousCatalogs[1]!);
  expect(() =>
    restoreContent({ ...old, contentRevision: 99 }, catalog, previousCatalogs),
  ).toThrow('Unsupported');
  expect(() =>
    restoreContent({ ...old, coins: -1 }, catalog, previousCatalogs),
  ).toThrow();
  expect(() =>
    restoreContent(
      old,
      { ...catalog, levels: [...catalog.levels].reverse() },
      previousCatalogs,
    ),
  ).toThrow('Incompatible');
});
