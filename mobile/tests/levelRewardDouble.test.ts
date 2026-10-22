import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { catalog, previousCatalogs } from '../src/content/catalog';
import { LEVEL_DOUBLE_COINS } from '../src/engine/adRewards';
import { DEFAULT_ECONOMY } from '../src/engine/game';
import { createGameStore } from '../src/state/createGameStore';
import {
  DATABASE_VERSION,
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel } from './helpers';
import { TestSqlite } from './sqliteAdapter';

async function open(path = ':memory:') {
  const db = new TestSqlite(path);
  await migrateDatabase(db);
  const repo = createSqliteRepository(db, catalog, previousCatalogs());
  const store = createGameStore(catalog, async () => repo);
  return { db, repo, store };
}
const receipts = (db: TestSqlite) =>
  db.getFirstAsync('SELECT COUNT(*) AS count FROM rewarded_ad_claims');

test('doubling pays the completion reward once more', () => {
  expect(LEVEL_DOUBLE_COINS).toBe(DEFAULT_ECONOMY.completionReward);
  expect(LEVEL_DOUBLE_COINS).toBe(20);
});

test('a finished level doubles once across duplicate callbacks, other ads, restarts and reopening', async () => {
  const folder = mkdtempSync(join(tmpdir(), 'asobana-double-'));
  const path = join(folder, 'game.db');
  let { db, repo, store } = await open(path);
  try {
    const finished = reachLevel(2); // ka-001 and ka-002 finished; ka-003 open.
    await repo.save(finished, 0);
    await store.getState().initialize();
    await Promise.all([
      store.getState().claimLevelDouble('ka-001', 'double-ad'),
      store.getState().claimLevelDouble('ka-001', 'double-ad'),
      store.getState().claimLevelDouble('ka-001', 'second-ad'),
    ]);
    expect(store.getState().game?.coins).toBe(finished.coins + 20);
    expect(store.getState().game?.doubledRewardLevelIds).toEqual(['ka-001']);
    // An unfinished level has no completion reward to double.
    await store.getState().claimLevelDouble('ka-003', 'early-ad');
    await expect(
      store.getState().claimLevelDouble('nowhere', 'stray-ad'),
    ).rejects.toThrow('Unknown level for a doubled reward');
    const saved = store.getState().game!;
    expect(saved.coins).toBe(finished.coins + 20);
    db.close();
    ({ db, repo, store } = await open(path));
    await store.getState().initialize();
    expect(store.getState().game).toEqual(saved);
    await store.getState().claimLevelDouble('ka-001', 'after-restart-ad');
    expect(store.getState().game).toEqual(saved);
    await store.getState().dispatch({ type: 'open-level', levelId: 'ka-001' });
    await store.getState().claimLevelDouble('ka-001', 'reopened-ad');
    expect(store.getState().game?.coins).toBe(saved.coins);
    await store.getState().claimLevelDouble('ka-002', 'other-level-ad');
    expect(store.getState().game?.coins).toBe(saved.coins + 20);
    expect(store.getState().game?.doubledRewardLevelIds).toEqual([
      'ka-001',
      'ka-002',
    ]);
    // Only paid claims leave receipts.
    expect(await receipts(db)).toEqual({ count: 2 });
  } finally {
    db.close();
    rmSync(folder, { recursive: true, force: true });
  }
});

test('a failed doubling write keeps the balance without a receipt; its retry pays once', async () => {
  const { db, repo, store } = await open();
  try {
    await repo.save(reachLevel(1), 0);
    await store.getState().initialize();
    const before = store.getState().game!;
    await db.execAsync(
      "CREATE TRIGGER fail_reward BEFORE UPDATE ON game_snapshot BEGIN SELECT RAISE(ABORT, 'Disk full'); END;",
    );
    await expect(
      store.getState().claimLevelDouble('ka-001', 'retry-ad'),
    ).rejects.toThrow('Disk full');
    expect(store.getState().game).toBe(before);
    expect((await repo.load())?.state).toEqual(before);
    expect(await receipts(db)).toEqual({ count: 0 });
    await db.execAsync('DROP TRIGGER fail_reward');
    await store.getState().claimLevelDouble('ka-001', 'retry-ad');
    await store.getState().claimLevelDouble('ka-001', 'retry-ad');
    expect(store.getState().game?.coins).toBe(before.coins + 20);
    expect(store.getState().error).toBeNull();
  } finally {
    db.close();
  }
});

test('a reset clears doublings with the rest of the game; old claims never pay into it', async () => {
  const { db, repo, store } = await open();
  try {
    await repo.save(reachLevel(1), 0);
    await store.getState().initialize();
    await store.getState().claimLevelDouble('ka-001', 'first-game-ad');
    await store.getState().reset();
    expect(store.getState().game?.coins).toBe(200);
    expect(store.getState().game?.doubledRewardLevelIds).toBeUndefined();
    // The old claim cannot pay into the new game.
    await store.getState().claimLevelDouble('ka-001', 'first-game-ad');
    expect(store.getState().game?.coins).toBe(200);
  } finally {
    db.close();
  }
});

test('saves without doublings load unchanged; doublings survive content upgrades and are validated', async () => {
  expect(DATABASE_VERSION).toBe(3); // No database migration is needed.
  const plain = reachLevel(3); // ka-001…ka-003 finished; ka-004 open.
  const loaded = parseSnapshot(JSON.parse(JSON.stringify(plain)), catalog);
  expect(loaded).toEqual(plain);
  expect('doubledRewardLevelIds' in loaded).toBe(false);
  expect(() =>
    parseSnapshot({ ...plain, doubledRewardLevelIds: ['ka-004'] }, catalog),
  ).toThrow('Doubled reward for an unfinished level');
  expect(() =>
    parseSnapshot({ ...plain, doubledRewardLevelIds: ['nowhere'] }, catalog),
  ).toThrow('Doubled reward for an unfinished level');
  expect(() =>
    parseSnapshot(
      { ...plain, doubledRewardLevelIds: ['ka-001', 'ka-001'] },
      catalog,
    ),
  ).toThrow();
  expect(() =>
    parseSnapshot({ ...plain, doubledRewardLevelIds: 'ka-001' }, catalog),
  ).toThrow();

  const { db } = await open();
  try {
    const previous = previousCatalogs().find((pack) => pack.revision === 25)!;
    const old = {
      ...reachLevel(3, previous),
      coins: 61,
      bonusRewards: { totalFound: 12, hintsSpent: 1 },
      doubledRewardLevelIds: ['ka-002'],
    };
    await createSqliteRepository(db, previous).save(old, 0);
    const current = createSqliteRepository(db, catalog, previousCatalogs());
    const migrated = (await current.load())!.state;
    expect(migrated.contentRevision).toBe(catalog.revision);
    expect(migrated.coins).toBe(61);
    expect(migrated.bonusRewards).toEqual(old.bonusRewards);
    expect(migrated.currentLevelId).toBe('ka-004');
    expect(
      Object.entries(migrated.progress)
        .filter(([, level]) => level.completed)
        .map(([id]) => id),
    ).toEqual(['ka-001', 'ka-002', 'ka-003']);
    expect(migrated.doubledRewardLevelIds).toEqual(['ka-002']);
    const again = await current.claimLevelDouble('ka-002', 'after-upgrade-ad');
    expect(again.granted).toBe(false);
    expect(again.state).toEqual(migrated);
  } finally {
    db.close();
  }
});
