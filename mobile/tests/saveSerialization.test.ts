import { catalog } from '../src/content/catalog';
import { emptyProgress, initialState } from '../src/engine/game';
import { solutionCells } from '../src/engine/grid';
import { parseSnapshot } from '../src/storage/snapshot';
import {
  createSqliteRepository,
  migrateDatabase,
  type SqlDatabase,
} from '../src/storage/repository';
import type { GameState } from '../src/models/types';
import { TestSqlite } from './sqliteAdapter';
import journey from '../../content/journey-v13.json';

const first = catalog.levels[0]!;
function fixture(): GameState {
  return {
    ...initialState(catalog),
    currentLevelId: catalog.levels[1]!.id,
    coins: 137,
    bonusRewards: { totalFound: 12, hintsSpent: 1 },
    tutorialSeen: true,
    settings: { sound: false, haptics: true },
    legacyPostcardChapterIds: [journey.legacyChapterIds[0]!],
    doubledRewardLevelIds: [first.id],
    progress: {
      [first.id]: {
        ...emptyProgress(),
        solvedWordIds: first.words.map((word) => word.id),
        revealedCellIds: [solutionCells(first)[0]!.id],
        bonusWords: [first.bonusWords[0]!],
        hintsUsed: 2,
        completed: true,
      },
    },
  };
}

function deferred() {
  let resolve!: () => void;
  const promise = new Promise<void>((done) => {
    resolve = done;
  });
  return { promise, resolve };
}

test('pending saves own their validated data even if every caller-owned field changes', async () => {
  const db = new TestSqlite();
  const entered = deferred();
  const gate = deferred();
  try {
    await migrateDatabase(db);
    const delayed: SqlDatabase = {
      execAsync: db.execAsync.bind(db),
      async getFirstAsync<T>(
        sql: string,
        ...params: (string | number | null)[]
      ) {
        entered.resolve();
        await gate.promise;
        return db.getFirstAsync<T>(sql, ...params);
      },
      async runAsync(sql, ...params) {
        entered.resolve();
        await gate.promise;
        return db.runAsync(sql, ...params);
      },
      async withExclusiveTransactionAsync(task) {
        entered.resolve();
        await gate.promise;
        await db.withExclusiveTransactionAsync(task);
      },
    };
    const repository = createSqliteRepository(delayed, catalog);
    const input = fixture();
    const expected = parseSnapshot(input, catalog);
    const saving = repository.save(input, 0);
    await entered.promise;
    const progress = input.progress[first.id]!;
    (progress.solvedWordIds as string[]).splice(0);
    (progress.revealedCellIds as string[]).push('99:99');
    (progress.bonusWords as string[]).push('not-a-bonus');
    Object.assign(progress, { completed: false, hintsUsed: 999999 });
    Object.assign(input.settings, { sound: true, haptics: false });
    Object.assign(input.bonusRewards, { totalFound: 0, hintsSpent: 99 });
    (input.legacyPostcardChapterIds as string[]).push('not-a-postcard');
    (input.doubledRewardLevelIds as string[]).push('not-a-level');
    Object.assign(input, { coins: -1, currentLevelId: 'not-a-level' });
    delete (input.progress as Record<string, unknown>)[first.id];
    gate.resolve();
    expect(await saving).toBe(1);
    const row = await db.getFirstAsync<{ payload: string; revision: number }>(
      'SELECT payload, revision FROM game_snapshot WHERE id=1',
    );
    expect(row).toEqual({ payload: JSON.stringify(expected), revision: 1 });
    expect(await repository.load()).toEqual({ state: expected, revision: 1 });
    // A later call must validate the now-corrupt input afresh, not trust a cache.
    await expect(repository.save(input, 1)).rejects.toThrow();
    expect(await repository.load()).toEqual({ state: expected, revision: 1 });
  } finally {
    gate.resolve();
    db.close();
  }
});

test('serialization uses only normalized fields, ignoring caller JSON hooks and circular extras', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const input = fixture();
    const expected = parseSnapshot(input, catalog);
    const hook = jest.fn(() => ({ coins: 999999 }));
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    Object.assign(input, { toJSON: hook, debug: circular });
    Object.assign(input.progress[first.id]!, { toJSON: hook, debug: circular });
    Object.assign(input.progress[first.id]!.solvedWordIds, { toJSON: hook });
    Object.assign(input.progress[first.id]!.revealedCellIds, { toJSON: hook });
    Object.assign(input.progress[first.id]!.bonusWords, { toJSON: hook });
    Object.assign(input.settings, { toJSON: hook });
    Object.assign(input.bonusRewards, { toJSON: hook });
    Object.assign(input.legacyPostcardChapterIds!, { toJSON: hook });
    Object.assign(input.doubledRewardLevelIds!, { toJSON: hook });
    const repository = createSqliteRepository(db, catalog);
    await repository.save(input, 0);
    expect(hook).not.toHaveBeenCalled();
    expect(await repository.load()).toEqual({ state: expected, revision: 1 });
    expect(
      (
        await db.getFirstAsync<{ payload: string }>(
          'SELECT payload FROM game_snapshot',
        )
      )?.payload,
    ).toBe(JSON.stringify(expected));
  } finally {
    db.close();
  }
});

test('legacy optional fields normalize before serialization without losing progress or bonus credit', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const input = fixture();
    const raw = input as unknown as Record<string, unknown>;
    delete raw.bonusRewards;
    delete raw.tutorialSeen;
    delete raw.doubledRewardLevelIds;
    delete raw.legacyPostcardChapterIds;
    const repository = createSqliteRepository(db, catalog);
    await repository.save(input, 0);
    const loaded = await repository.load();
    expect(loaded?.state).toEqual({
      ...input,
      bonusRewards: { totalFound: 1, hintsSpent: 0 },
      tutorialSeen: true,
    });
    expect(loaded?.state.progress[first.id]!.hintsUsed).toBe(2);
    expect(loaded?.state.coins).toBe(137);
  } finally {
    db.close();
  }
});
