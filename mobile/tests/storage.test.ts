import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { catalog, submit } from './legacyHelpers';
import { initialState, transition } from '../src/engine/game';
import {
  createSqliteRepository,
  migrateDatabase,
  StaleSaveError,
} from '../src/storage/repository';
import { TestSqlite } from './sqliteAdapter';
test('real SQLite migrate, atomic save, close/reopen, CAS and settings restore', async () => {
  const folder = mkdtempSync(join(tmpdir(), 'geowords-'));
  const path = join(folder, 'game.db');
  let db = new TestSqlite(path);
  try {
    await migrateDatabase(db);
    await migrateDatabase(db);
    let repository = createSqliteRepository(db, catalog);
    expect(await repository.load()).toBeNull();
    let state = initialState(catalog);
    let revision = await repository.save(state, 0);
    state = submit(state, catalog.levels[0]!, 'მზე').state;
    state = transition(
      state,
      { type: 'hint', levelId: state.currentLevelId, kind: 'cell' },
      catalog,
    ).state;
    state = transition(
      state,
      { type: 'settings', settings: { sound: false, haptics: true } },
      catalog,
    ).state;
    revision = await repository.save(state, revision);
    db.close();
    db = new TestSqlite(path);
    repository = createSqliteRepository(db, catalog);
    await migrateDatabase(db);
    expect(await repository.load()).toEqual({ state, revision });
    await expect(
      repository.save(initialState(catalog), 1),
    ).rejects.toBeInstanceOf(StaleSaveError);
    expect(await repository.load()).toEqual({ state, revision });
    await expect(
      repository.save({ ...state, coins: -1 }, revision),
    ).rejects.toThrow();
    expect(await repository.load()).toEqual({ state, revision });
  } finally {
    db.close();
    rmSync(folder, { recursive: true, force: true });
  }
});
test('migration from v1 preserves payload and future databases are rejected', async () => {
  const db = new TestSqlite();
  try {
    await db.execAsync(
      'CREATE TABLE game_snapshot (id INTEGER PRIMARY KEY, revision INTEGER NOT NULL, payload TEXT NOT NULL); PRAGMA user_version = 1;',
    );
    const state = initialState(catalog);
    await db.runAsync(
      'INSERT INTO game_snapshot VALUES(1, 1, ?)',
      JSON.stringify(state),
    );
    await migrateDatabase(db);
    expect((await createSqliteRepository(db, catalog).load())?.state).toEqual(
      state,
    );
    await db.execAsync('PRAGMA user_version = 99');
    await expect(migrateDatabase(db)).rejects.toThrow('newer');
    expect(await db.getFirstAsync('PRAGMA user_version')).toEqual({
      user_version: 99,
    });
  } finally {
    db.close();
  }
});
test('actual rollback after write failure preserves previous coins/progress', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repository = createSqliteRepository(db, catalog);
    const state = initialState(catalog);
    await repository.save(state, 0);
    await expect(
      db.withExclusiveTransactionAsync(async (tx) => {
        await tx.runAsync(
          'UPDATE game_snapshot SET payload = ? WHERE id = 1',
          '{}',
        );
        throw new Error('Interrupted write');
      }),
    ).rejects.toThrow('Interrupted');
    expect((await repository.load())?.state).toEqual(state);
  } finally {
    db.close();
  }
});
test('corrupt data is surfaced and never overwritten by loading', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    await db.runAsync(
      'INSERT INTO game_snapshot VALUES(1, 1, ?, 1)',
      '{broken',
    );
    await expect(createSqliteRepository(db, catalog).load()).rejects.toThrow();
    expect(
      (
        await db.getFirstAsync<{ payload: string }>(
          'SELECT payload FROM game_snapshot',
        )
      )?.payload,
    ).toBe('{broken');
  } finally {
    db.close();
  }
});
