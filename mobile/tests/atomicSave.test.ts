import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { initialState } from '../src/engine/game';
import { catalog } from '../src/content/catalog';
import { parseSnapshot } from '../src/storage/snapshot';
import {
  createSqliteRepository,
  migrateDatabase,
  StaleSaveError,
} from '../src/storage/repository';
import { TestSqlite } from './sqliteAdapter';

test('a missing snapshot only accepts revision zero; stale and future revisions never write', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repo = createSqliteRepository(db, catalog);
    const state = initialState(catalog);
    await expect(repo.save(state, 4)).rejects.toBeInstanceOf(StaleSaveError);
    expect(await repo.load()).toBeNull();
    expect(await repo.save(state, 0)).toBe(1);
    for (const revision of [0, 2, 100])
      await expect(
        repo.save({ ...state, coins: 999 }, revision),
      ).rejects.toBeInstanceOf(StaleSaveError);
    expect(await repo.load()).toEqual({ state, revision: 1 });
    const next = { ...state, coins: 137 };
    expect(await repo.save(next, 1)).toBe(2);
    await expect(repo.save(state, 1)).rejects.toBeInstanceOf(StaleSaveError);
    expect(await repo.load()).toEqual({ state: next, revision: 2 });
  } finally {
    db.close();
  }
});

test('two independent SQLite connections with the same expected revision have exactly one winner', async () => {
  const folder = mkdtempSync(join(tmpdir(), 'asobana-cas-'));
  const path = join(folder, 'game.db');
  const first = new TestSqlite(path);
  let second: TestSqlite | undefined;
  try {
    await migrateDatabase(first);
    second = new TestSqlite(path);
    const a = createSqliteRepository(first, catalog);
    const b = createSqliteRepository(second, catalog);
    const state = initialState(catalog);
    for (let revision = 0; revision < 5; revision++) {
      const contenders = [
        { ...state, coins: 100 + revision },
        { ...state, coins: 200 + revision },
      ];
      const results = await Promise.allSettled([
        a.save(contenders[0]!, revision),
        b.save(contenders[1]!, revision),
      ]);
      const winner = results.findIndex(
        (result) => result.status === 'fulfilled',
      );
      expect(
        results.filter((result) => result.status === 'fulfilled'),
      ).toHaveLength(1);
      const loser = results[1 - winner]!;
      expect(loser.status === 'rejected' && loser.reason).toBeInstanceOf(
        StaleSaveError,
      );
      expect(await b.load()).toEqual({
        state: contenders[winner],
        revision: revision + 1,
      });
    }
    second.close();
    second = undefined;
    const reopened = new TestSqlite(path);
    try {
      expect(
        (await createSqliteRepository(reopened, catalog).load())?.revision,
      ).toBe(5);
    } finally {
      reopened.close();
    }
  } finally {
    second?.close();
    first.close();
    rmSync(folder, { recursive: true, force: true });
  }
});

test.each(['INSERT', 'UPDATE'] as const)(
  'failed %s leaves payload and revision intact and permits a retry',
  async (operation) => {
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const repo = createSqliteRepository(db, catalog);
      const state = initialState(catalog);
      const revision = operation === 'UPDATE' ? await repo.save(state, 0) : 0;
      const previous = await repo.load();
      await db.execAsync(
        `CREATE TRIGGER fail_save BEFORE ${operation} ON game_snapshot BEGIN SELECT RAISE(ABORT, 'write failed'); END;`,
      );
      const next = { ...state, coins: 137 };
      await expect(repo.save(next, revision)).rejects.toThrow('write failed');
      expect(await repo.load()).toEqual(previous);
      await db.execAsync('DROP TRIGGER fail_save');
      expect(await repo.save(next, revision)).toBe(revision + 1);
      expect(await repo.load()).toEqual({
        state: parseSnapshot(next, catalog),
        revision: revision + 1,
      });
    } finally {
      db.close();
    }
  },
);

test('an older normal save cannot erase a reward receipt or credited balance', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repo = createSqliteRepository(db, catalog);
    const state = initialState(catalog);
    await repo.save(state, 0);
    const earned = await repo.claimAdReward('earned-before-save');
    await expect(repo.save({ ...state, coins: 180 }, 1)).rejects.toBeInstanceOf(
      StaleSaveError,
    );
    expect(await repo.load()).toEqual({
      state: earned.state,
      revision: earned.revision,
    });
    const next = {
      ...earned.state,
      settings: { sound: false, haptics: false },
    };
    const revision = await repo.save(next, earned.revision);
    const duplicate = await repo.claimAdReward('earned-before-save');
    expect(duplicate).toEqual({ state: next, revision, granted: false });
    expect(
      await db.getFirstAsync(
        'SELECT COUNT(*) AS count FROM rewarded_ad_claims',
      ),
    ).toEqual({ count: 1 });
  } finally {
    db.close();
  }
});
