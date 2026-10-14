import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { previousCatalogs } from '../src/content/catalog';
import {
  initialState,
  isUnlocked,
  revealedCells,
  transition,
} from '../src/engine/game';
import { wordCells } from '../src/engine/grid';
import { restoreContent } from '../src/storage/contentMigration';
import {
  createSqliteRepository,
  migrateDatabase,
  StaleSaveError,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { createGameStore } from '../src/state/createGameStore';
import { reachLevel, submit } from './legacyHelpers';
import { TestSqlite } from './sqliteAdapter';

const legacy = previousCatalogs[0]!;
const catalog = previousCatalogs[1]!;

test('a paid old crossing hint reveals both retained letters when the new grid separates them', () => {
  const oldLevel = legacy.levels[3]!;
  let state = reachLevel(3);
  for (let index = 0; index < 6; index++)
    state = transition(
      state,
      { type: 'hint', levelId: oldLevel.id, kind: 'cell' },
      legacy,
    ).state;
  const oldCrossing = wordCells(oldLevel.words[0]!)[2]!.id;
  expect(wordCells(oldLevel.words[1]!)[3]!.id).toBe(oldCrossing);
  expect(state.progress[oldLevel.id]!.revealedCellIds).toContain(oldCrossing);
  const upgraded = restoreContent(state, catalog, previousCatalogs).state;
  const level = catalog.levels[3]!;
  const first = level.words.find(
    (word) => word.answer === oldLevel.words[0]!.answer,
  )!;
  const second = level.words.find(
    (word) => word.answer === oldLevel.words[1]!.answer,
  )!;
  const cells = [wordCells(first)[2]!.id, wordCells(second)[3]!.id];
  expect(new Set(cells).size).toBe(2);
  const progress = upgraded.progress[level.id]!;
  for (const cell of cells) expect(progress.revealedCellIds).toContain(cell);
  expect(progress.hintsUsed).toBe(6);
  expect(upgraded.coins).toBe(state.coins);
});

test('completed prototype levels retain coins and unlock the new fifth level', () => {
  let state = reachLevel(3);
  for (const word of legacy.levels[3]!.words)
    state = submit(state, legacy.levels[3]!, word.answer).state;
  const before = JSON.stringify(state);
  const restored = restoreContent(state, catalog, previousCatalogs);
  expect(restored.migrated).toBe(true);
  expect(JSON.stringify(state)).toBe(before);
  expect(restored.state.coins).toBe(state.coins);
  expect(restored.state.currentLevelId).toBe(state.currentLevelId);
  expect(restored.state.settings).toEqual(state.settings);
  for (const level of catalog.levels.slice(0, 4)) {
    expect(restored.state.progress[level.id]?.completed).toBe(true);
    expect(restored.state.progress[level.id]?.solvedWordIds).toHaveLength(4);
  }
  expect(isUnlocked(restored.state, catalog, 'ka-005')).toBe(true);
  expect(isUnlocked(restored.state, catalog, 'ka-006')).toBe(false);
  expect(restoreContent(restored.state, catalog, previousCatalogs)).toEqual({
    state: restored.state,
    migrated: false,
  });
});

test.each([0, 1, 2, 3])(
  'partial level %i retains solved answers, paid hints, bonuses and settings after rearrangement',
  (index) => {
    const oldLevel = legacy.levels[index]!;
    let state = reachLevel(index);
    if (oldLevel.bonusWords[0])
      state = submit(state, oldLevel, oldLevel.bonusWords[0]).state;
    state = transition(
      state,
      { type: 'hint', levelId: oldLevel.id, kind: 'cell' },
      legacy,
    ).state;
    state = submit(state, oldLevel, oldLevel.words[0]!.answer).state;
    state = transition(
      state,
      { type: 'settings', settings: { sound: false, haptics: false } },
      legacy,
    ).state;
    const saved = state.progress[oldLevel.id]!;
    const upgraded = restoreContent(state, catalog, previousCatalogs).state;
    const level = catalog.levels[index]!;
    const progress = upgraded.progress[level.id]!;
    expect(upgraded.coins).toBe(state.coins);
    expect(upgraded.settings).toEqual(state.settings);
    expect(progress.bonusWords).toEqual(saved.bonusWords);
    expect(progress.hintsUsed).toBe(saved.hintsUsed);
    expect(progress.completed).toBe(false);
    const visible = revealedCells(level, progress);
    for (const oldWord of oldLevel.words) {
      const nextWord = level.words.find(
        (word) => word.answer === oldWord.answer,
      )!;
      if (saved.solvedWordIds.includes(oldWord.id))
        expect(progress.solvedWordIds).toContain(nextWord.id);
      wordCells(oldWord).forEach((cell, position) => {
        if (saved.revealedCellIds.includes(cell.id))
          expect(visible.has(wordCells(nextWord)[position]!.id)).toBe(true);
      });
    }
    expect(parseSnapshot(upgraded, catalog)).toEqual(upgraded);
  },
);

test('SQLite upgrade commits once, resumes in a new store and rejects stale writers', async () => {
  const folder = mkdtempSync(join(tmpdir(), 'geowords-beta-'));
  const path = join(folder, 'game.db');
  let db = new TestSqlite(path);
  try {
    await migrateDatabase(db);
    const old = createSqliteRepository(db, legacy);
    const state = submit(reachLevel(1), legacy.levels[1]!, 'მადა').state;
    await old.save(state, 0);
    const repo = createSqliteRepository(db, catalog, previousCatalogs);
    const restored = (await repo.load())!;
    expect(restored.revision).toBe(2);
    expect(restored.state.coins).toBe(state.coins);
    expect(await repo.load()).toEqual(restored);
    await expect(old.save(state, 1)).rejects.toBeInstanceOf(StaleSaveError);
    db.close();
    db = new TestSqlite(path);
    const store = createGameStore(catalog, async () =>
      createSqliteRepository(db, catalog, previousCatalogs),
    );
    await store.getState().initialize();
    expect(store.getState().status).toBe('ready');
    expect(store.getState().game).toEqual(restored.state);
    await store.getState().dispatch({
      type: 'settings',
      settings: { sound: false, haptics: true },
    });
    expect(
      (await createSqliteRepository(db, catalog, previousCatalogs).load())
        ?.revision,
    ).toBe(3);
  } finally {
    db.close();
    rmSync(folder, { recursive: true, force: true });
  }
});

test.each([
  { ...initialState(legacy), contentRevision: 99 },
  { ...initialState(legacy), packId: 'another-pack' },
  { ...initialState(legacy), coins: -1 },
  { ...initialState(legacy), currentLevelId: 'ka-004' },
])(
  'unsupported or corrupt old saves stay byte-for-byte intact %#',
  async (state) => {
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const payload = JSON.stringify(state);
      await db.runAsync(
        'INSERT INTO game_snapshot VALUES(1, 4, ?, 1)',
        payload,
      );
      await expect(
        createSqliteRepository(db, catalog, previousCatalogs).load(),
      ).rejects.toThrow();
      expect(
        await db.getFirstAsync('SELECT payload, revision FROM game_snapshot'),
      ).toEqual({ payload, revision: 4 });
    } finally {
      db.close();
    }
  },
);

test('failed migration writes roll back and incompatible target/order changes are rejected', async () => {
  const state = reachLevel(1);
  const incompatible = { ...catalog, levels: [...catalog.levels].reverse() };
  expect(() => restoreContent(state, incompatible, previousCatalogs)).toThrow(
    'Incompatible',
  );
  const removed = {
    ...catalog,
    levels: [
      { ...catalog.levels[0]!, words: catalog.levels[0]!.words.slice(1) },
      ...catalog.levels.slice(1),
    ],
  };
  expect(() => restoreContent(state, removed, previousCatalogs)).toThrow(
    'Incompatible',
  );
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    await createSqliteRepository(db, legacy).save(state, 0);
    await db.execAsync(
      "CREATE TRIGGER fail_upgrade BEFORE UPDATE ON game_snapshot BEGIN SELECT RAISE(ABORT, 'Disk full'); END;",
    );
    await expect(
      createSqliteRepository(db, catalog, previousCatalogs).load(),
    ).rejects.toThrow('Disk full');
    expect(
      (
        await db.getFirstAsync<{ payload: string }>(
          'SELECT payload FROM game_snapshot',
        )
      )?.payload,
    ).toBe(JSON.stringify(state));
    await db.execAsync('DROP TRIGGER fail_upgrade');
    expect(
      (await createSqliteRepository(db, catalog, previousCatalogs).load())
        ?.revision,
    ).toBe(2);
  } finally {
    db.close();
  }
});
