import type { GameState, LevelPack } from '../models/types';
import { parseSnapshot } from './snapshot';
export interface SqlTransaction {
  execAsync(sql: string): Promise<void>;
  getFirstAsync<T>(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<T | null>;
  runAsync(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<{ changes: number }>;
}
export interface SqlDatabase extends SqlTransaction {
  withExclusiveTransactionAsync(
    task: (transaction: SqlTransaction) => Promise<void>,
  ): Promise<void>;
}
export interface SavedGame {
  readonly state: GameState;
  readonly revision: number;
}
export interface GameRepository {
  load(): Promise<SavedGame | null>;
  save(state: GameState, expectedRevision: number): Promise<number>;
}
export class StaleSaveError extends Error {
  constructor() {
    super(
      'Progress changed in another writer. Restart to reload the latest save.',
    );
  }
}
export const DATABASE_VERSION = 2;
export async function migrateDatabase(database: SqlDatabase): Promise<void> {
  await database.execAsync(
    'PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;',
  );
  await database.withExclusiveTransactionAsync(async (tx) => {
    const row = await tx.getFirstAsync<{ user_version: number }>(
      'PRAGMA user_version',
    );
    let version = row?.user_version ?? 0;
    if (version > DATABASE_VERSION)
      throw new Error('Database is newer than this app. Upgrade required.');
    if (version < 1) {
      await tx.execAsync(
        'CREATE TABLE game_snapshot (id INTEGER PRIMARY KEY CHECK (id = 1), revision INTEGER NOT NULL CHECK (revision > 0), payload TEXT NOT NULL); PRAGMA user_version = 1;',
      );
      version = 1;
    }
    if (version < 2)
      await tx.execAsync(
        'ALTER TABLE game_snapshot ADD COLUMN save_format INTEGER NOT NULL DEFAULT 1; PRAGMA user_version = 2;',
      );
  });
}
export function createSqliteRepository(
  database: SqlDatabase,
  pack: LevelPack,
): GameRepository {
  return {
    async load() {
      const row = await database.getFirstAsync<{
        payload: string;
        revision: number;
        save_format: number;
      }>(
        'SELECT payload, revision, save_format FROM game_snapshot WHERE id = 1',
      );
      if (!row) return null;
      if (
        row.save_format !== 1 ||
        !Number.isSafeInteger(row.revision) ||
        row.revision < 1
      )
        throw new Error('Unsupported or corrupt saved progress');
      return {
        state: parseSnapshot(JSON.parse(row.payload) as unknown, pack),
        revision: row.revision,
      };
    },
    async save(state, expectedRevision) {
      const validated = parseSnapshot(state, pack);
      if (!Number.isSafeInteger(expectedRevision) || expectedRevision < 0)
        throw new Error('Invalid save revision');
      const revision = expectedRevision + 1;
      await database.withExclusiveTransactionAsync(async (tx) => {
        const row = await tx.getFirstAsync<{ revision: number }>(
          'SELECT revision FROM game_snapshot WHERE id = 1',
        );
        if ((row?.revision ?? 0) !== expectedRevision)
          throw new StaleSaveError();
        await tx.runAsync(
          'INSERT INTO game_snapshot (id, revision, payload, save_format) VALUES (1, ?, ?, 1) ON CONFLICT(id) DO UPDATE SET revision = excluded.revision, payload = excluded.payload, save_format = excluded.save_format',
          revision,
          JSON.stringify(validated),
        );
      });
      return revision;
    },
  };
}
