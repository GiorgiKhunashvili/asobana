import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { catalog, previousCatalogs } from '../src/content/catalog';
import { initialState } from '../src/engine/game';
import { selectGameplay } from '../src/engine/selectors';
import { createGameStore } from '../src/state/createGameStore';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { TestSqlite } from './sqliteAdapter';

test('duplicate reward callbacks, queued purchases, reopen and reset cannot credit a claim twice', async () => {
  const folder = mkdtempSync(join(tmpdir(), 'asobana-ads-'));
  const path = join(folder, 'game.db');
  let db = new TestSqlite(path);
  try {
    await migrateDatabase(db);
    let repo = createSqliteRepository(db, catalog);
    let store = createGameStore(catalog, async () => repo);
    await store.getState().initialize();
    await Promise.all([
      store.getState().claimAdReward('same-ad'),
      store.getState().dispatch({
        type: 'hint',
        kind: 'cell',
        levelId: catalog.levels[0]!.id,
      }),
      store.getState().claimAdReward('same-ad'),
    ]);
    expect(store.getState().game?.coins).toBe(255); // 200 + 75 - 20
    const saved = store.getState().game;
    db.close();
    db = new TestSqlite(path);
    await migrateDatabase(db);
    repo = createSqliteRepository(db, catalog);
    store = createGameStore(catalog, async () => repo);
    await store.getState().initialize();
    await store.getState().claimAdReward('same-ad');
    expect(store.getState().game).toEqual(saved);
    await store.getState().claimAdReward('next-ad');
    expect(store.getState().game?.coins).toBe(330);
    await store.getState().reset();
    await store.getState().claimAdReward('same-ad');
    expect(store.getState().game?.coins).toBe(200);
    expect(
      await db.getFirstAsync(
        'SELECT COUNT(*) AS count FROM rewarded_ad_claims',
      ),
    ).toEqual({ count: 2 });
  } finally {
    db.close();
    rmSync(folder, { recursive: true, force: true });
  }
});

test('failed coin write rolls back the receipt, publishes no reward, and can be retried once', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repo = createSqliteRepository(db, catalog);
    const store = createGameStore(catalog, async () => repo);
    await store.getState().initialize();
    const before = store.getState().game;
    await db.execAsync(
      "CREATE TRIGGER fail_reward BEFORE UPDATE ON game_snapshot BEGIN SELECT RAISE(ABORT, 'Disk full'); END;",
    );
    await expect(store.getState().claimAdReward('retry-ad')).rejects.toThrow(
      'Disk full',
    );
    expect(store.getState().game).toBe(before);
    expect(store.getState().busy).toBe(false);
    expect((await repo.load())?.state).toEqual(before);
    expect(
      await db.getFirstAsync(
        'SELECT COUNT(*) AS count FROM rewarded_ad_claims',
      ),
    ).toEqual({ count: 0 });
    await db.execAsync('DROP TRIGGER fail_reward');
    await store.getState().claimAdReward('retry-ad');
    await store.getState().claimAdReward('retry-ad');
    expect(store.getState().game?.coins).toBe(275);
    expect(store.getState().error).toBeNull();
  } finally {
    db.close();
  }
});

test('version 2 database migration leaves the old snapshot untouched; receipts survive content upgrades', async () => {
  const db = new TestSqlite();
  try {
    const previous = previousCatalogs.find((pack) => pack.revision === 25)!;
    const old = { ...initialState(previous), coins: 37 };
    await db.execAsync(
      'CREATE TABLE game_snapshot (id INTEGER PRIMARY KEY, revision INTEGER NOT NULL, payload TEXT NOT NULL, save_format INTEGER NOT NULL DEFAULT 1); PRAGMA user_version = 2;',
    );
    await db.runAsync(
      'INSERT INTO game_snapshot VALUES(1, 7, ?, 1)',
      JSON.stringify(old),
    );
    await migrateDatabase(db);
    await migrateDatabase(db);
    expect(
      await db.getFirstAsync('SELECT payload, revision FROM game_snapshot'),
    ).toEqual({ payload: JSON.stringify(old), revision: 7 });
    expect(await db.getFirstAsync('PRAGMA user_version')).toEqual({
      user_version: 3,
    });
    const receipt = await createSqliteRepository(db, previous).claimAdReward(
      'before-content-upgrade',
    );
    expect(receipt.state.coins).toBe(112);
    const current = createSqliteRepository(db, catalog, previousCatalogs);
    const migrated = await current.load();
    expect(migrated?.state.contentRevision).toBe(28);
    const duplicate = await current.claimAdReward('before-content-upgrade');
    expect(duplicate.granted).toBe(false);
    expect(duplicate.state).toEqual(migrated?.state);
    expect(duplicate.revision).toBe(migrated?.revision);
    await expect(current.claimAdReward('')).rejects.toThrow(
      'Invalid ad reward claim',
    );
  } finally {
    db.close();
  }
});

test('reward transaction reads the latest saved progress even if the calling store was stale', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repo = createSqliteRepository(db, catalog);
    const first = createGameStore(catalog, async () => repo);
    const second = createGameStore(catalog, async () => repo);
    await first.getState().initialize();
    await second.getState().initialize();
    await first
      .getState()
      .dispatch({ type: 'hint', kind: 'cell', levelId: catalog.levels[0]!.id });
    await second.getState().claimAdReward('other-store-ad');
    expect(second.getState().game?.coins).toBe(255);
    expect(second.getState().game?.progress).toEqual(
      first.getState().game?.progress,
    );
  } finally {
    db.close();
  }
});

test('only affordable-coin shortages offer ads; free hints and content restrictions still apply', () => {
  const broke = { ...initialState(catalog), coins: 0 };
  expect(selectGameplay(broke, catalog)).toMatchObject({
    canGetCoinsForCellHint: true,
    canGetCoinsForWordHint: true,
  });
  const free = { ...broke, bonusRewards: { totalFound: 10, hintsSpent: 0 } };
  expect(selectGameplay(free, catalog)).toMatchObject({
    canUseCellHint: true,
    canGetCoinsForCellHint: false,
  });
  const restricted = {
    ...catalog,
    levels: catalog.levels.map((level) => ({
      ...level,
      hints: { allowCell: false, allowWord: false },
    })),
  };
  expect(selectGameplay(broke, restricted)).toMatchObject({
    canUseCellHint: false,
    canUseWordHint: false,
    canGetCoinsForCellHint: false,
    canGetCoinsForWordHint: false,
  });
});
