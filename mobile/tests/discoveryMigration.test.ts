import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { catalog, previousCatalogs } from '../src/content/catalog';
import { transition } from '../src/engine/game';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

test('the shipped revision 4 save upgrades atomically and survives closing SQLite', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'geowords-discovery-'));
  const path = join(directory, 'save.db');
  const previous = previousCatalogs[3]!;
  const level = previous.levels[21]!;
  let state = { ...reachLevel(21, previous), coins: 1000 };
  state = transition(
    state,
    { type: 'hint', levelId: level.id, kind: 'cell' },
    previous,
  ).state;
  state = submit(state, level, level.words[0]!.answer, previous).state;
  state = transition(
    state,
    { type: 'settings', settings: { sound: false, haptics: false } },
    previous,
  ).state;
  // Historical counters remain valid even when replacement boards are smaller.
  state = {
    ...state,
    progress: {
      ...state.progress,
      'ka-001': { ...state.progress['ka-001']!, hintsUsed: 860 },
    },
  };
  let db = new TestSqlite(path);
  try {
    await migrateDatabase(db);
    await createSqliteRepository(db, previous).save(
      parseSnapshot(state, previous),
      0,
    );
    const upgraded = (await createSqliteRepository(
      db,
      catalog,
      previousCatalogs,
    ).load())!;
    expect(upgraded.revision).toBe(2);
    expect(upgraded.state.contentRevision).toBe(catalog.revision);
    expect(upgraded.state.coins).toBe(state.coins);
    expect(upgraded.state.currentLevelId).toBe(level.id);
    expect(upgraded.state.settings).toEqual(state.settings);
    expect(upgraded.state.progress['ka-001']).toMatchObject({
      completed: true,
      hintsUsed: 860,
    });
    expect(upgraded.state.progress[level.id]!.hintsUsed).toBe(
      state.progress[level.id]!.hintsUsed,
    );
    db.close();
    db = new TestSqlite(path);
    expect(
      await createSqliteRepository(db, catalog, previousCatalogs).load(),
    ).toEqual(upgraded);
  } finally {
    db.close();
    rmSync(directory, { recursive: true, force: true });
  }
});
