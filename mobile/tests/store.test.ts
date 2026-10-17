import { catalog, tilesFor } from './legacyHelpers';
import { initialState } from '../src/engine/game';
import { createGameStore } from '../src/state/createGameStore';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { TestSqlite } from './sqliteAdapter';
test('queued commands commit once; a new store resumes with rewards/unlocks', async () => {
  const db = new TestSqlite();
  await migrateDatabase(db);
  const repository = createSqliteRepository(db, catalog);
  const store = createGameStore(catalog, async () => repository);
  try {
    await Promise.all([
      store.getState().initialize(),
      store.getState().initialize(),
    ]);
    const level = catalog.levels[0]!;
    await Promise.all([
      store.getState().dispatch({
        type: 'submit',
        levelId: level.id,
        tileIds: tilesFor(level, 'მზე'),
      }),
      store.getState().dispatch({
        type: 'submit',
        levelId: level.id,
        tileIds: tilesFor(level, 'მე'),
      }),
      store.getState().dispatch({
        type: 'submit',
        levelId: level.id,
        tileIds: tilesFor(level, 'მე'),
      }),
    ]);
    expect(store.getState().game?.coins).toBe(125);
    expect(store.getState().busy).toBe(false);
    const restored = createGameStore(catalog, async () => repository);
    await restored.getState().initialize();
    expect(restored.getState().game).toEqual(store.getState().game);
  } finally {
    db.close();
  }
});
test('failed save neither publishes progress nor poisons the command queue', async () => {
  const db = new TestSqlite();
  await migrateDatabase(db);
  const repository = createSqliteRepository(db, catalog);
  const save = jest.spyOn(repository, 'save');
  const store = createGameStore(catalog, async () => repository);
  try {
    await store.getState().initialize();
    const before = store.getState().game;
    save.mockRejectedValueOnce(new Error('Disk full'));
    const level = catalog.levels[0]!;
    const command = {
      type: 'submit' as const,
      levelId: level.id,
      tileIds: tilesFor(level, 'მზე'),
    };
    await expect(store.getState().dispatch(command)).rejects.toThrow(
      'Disk full',
    );
    expect(store.getState().game).toBe(before);
    expect(store.getState().error).toBe('Disk full');
    expect(store.getState().eventBatch.sequence).toBe(0);
    await store.getState().dispatch(command);
    expect(store.getState().game?.progress[level.id]?.solvedWordIds).toEqual([
      'word-1',
    ]);
    expect(store.getState().error).toBeNull();
  } finally {
    db.close();
  }
});
test('initialization failure preserves data and permits retry', async () => {
  const getRepository = jest
    .fn()
    .mockRejectedValueOnce(new Error('Database unavailable'));
  const store = createGameStore(catalog, getRepository);
  await store.getState().initialize();
  expect(store.getState().status).toBe('error');
  expect(store.getState().game).toBeNull();
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    getRepository.mockResolvedValue(createSqliteRepository(db, catalog));
    await store.getState().initialize();
    expect(store.getState().status).toBe('ready');
  } finally {
    db.close();
  }
});
test('reset waits for queued commands, keeps preferences and survives restart', async () => {
  const db = new TestSqlite();
  await migrateDatabase(db);
  const repository = createSqliteRepository(db, catalog);
  const store = createGameStore(catalog, async () => repository);
  try {
    await store.getState().initialize();
    const level = catalog.levels[0]!;
    const settings = { sound: false, haptics: true };
    const queued = [
      store.getState().dispatch({ type: 'settings', settings }),
      store.getState().dispatch({
        type: 'submit',
        levelId: level.id,
        tileIds: tilesFor(level, 'მზე'),
      }),
      store.getState().dispatch({
        type: 'submit',
        levelId: level.id,
        tileIds: tilesFor(level, 'მე'),
      }),
    ];
    await Promise.all([...queued, store.getState().reset()]);
    expect(store.getState().game).toEqual({
      ...initialState(catalog),
      settings,
    });
    expect(store.getState().eventBatch.events).toEqual([]);
    const restored = createGameStore(catalog, async () => repository);
    await restored.getState().initialize();
    expect(restored.getState().game).toEqual(store.getState().game);
  } finally {
    db.close();
  }
});
test('a failed reset keeps committed progress', async () => {
  const db = new TestSqlite();
  await migrateDatabase(db);
  const repository = createSqliteRepository(db, catalog);
  const store = createGameStore(catalog, async () => repository);
  try {
    await store.getState().initialize();
    const level = catalog.levels[0]!;
    await store.getState().dispatch({
      type: 'submit',
      levelId: level.id,
      tileIds: tilesFor(level, 'მზე'),
    });
    const before = store.getState().game;
    jest
      .spyOn(repository, 'save')
      .mockRejectedValueOnce(new Error('Disk full'));
    await expect(store.getState().reset()).rejects.toThrow('Disk full');
    expect(store.getState().game).toBe(before);
    expect(store.getState().error).toBe('Disk full');
    const restored = createGameStore(catalog, async () => repository);
    await restored.getState().initialize();
    expect(restored.getState().game).toEqual(before);
  } finally {
    db.close();
  }
});
