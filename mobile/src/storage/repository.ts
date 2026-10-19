import type { GameState, LevelPack } from '../models/types';
import { parseSnapshot } from './snapshot';
import { restoreContent } from './contentMigration';
import { LEVEL_DOUBLE_COINS, REWARDED_AD_COINS } from '../engine/adRewards';
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
  claimAdReward(claimId: string): Promise<SavedGame & { granted: boolean }>;
  /** Pays a finished level's completion reward again, at most once per level. */
  claimLevelDouble(
    levelId: string,
    claimId: string,
  ): Promise<SavedGame & { granted: boolean }>;
}
export class StaleSaveError extends Error {
  constructor() {
    super(
      'Progress changed in another writer. Restart to reload the latest save.',
    );
  }
}
export const DATABASE_VERSION = 3;
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
    if (version < 3)
      await tx.execAsync(
        'CREATE TABLE rewarded_ad_claims (claim_id TEXT PRIMARY KEY NOT NULL); PRAGMA user_version = 3;',
      );
  });
}
export function createSqliteRepository(
  database: SqlDatabase,
  pack: LevelPack,
  previousPacks: readonly LevelPack[] = [],
): GameRepository {
  /** Credits an earned ad once. `apply` returns null when nothing is owed. */
  async function claim(
    claimId: string,
    apply: (state: GameState) => GameState | null,
  ): Promise<SavedGame & { granted: boolean }> {
    if (!/^[a-zA-Z0-9-]{1,128}$/.test(claimId))
      throw new Error('Invalid ad reward claim');
    let result: (SavedGame & { granted: boolean }) | undefined;
    // Read the authoritative balance inside the same transaction as the receipt.
    // Receipts survive content migrations, app restarts and explicit game resets.
    await database.withExclusiveTransactionAsync(async (tx) => {
      const row = await tx.getFirstAsync<{
        payload: string;
        revision: number;
        save_format: number;
      }>(
        'SELECT payload, revision, save_format FROM game_snapshot WHERE id = 1',
      );
      if (
        !row ||
        row.save_format !== 1 ||
        !Number.isSafeInteger(row.revision) ||
        row.revision < 1
      )
        throw new Error('Missing or corrupt saved progress');
      const state = parseSnapshot(JSON.parse(row.payload) as unknown, pack);
      const claimed = await tx.getFirstAsync<{ claim_id: string }>(
        'SELECT claim_id FROM rewarded_ad_claims WHERE claim_id = ?',
        claimId,
      );
      const next = claimed ? null : apply(state);
      if (!next) {
        result = { state, revision: row.revision, granted: false };
        return;
      }
      const updated = parseSnapshot(next, pack);
      const revision = row.revision + 1;
      if (!Number.isSafeInteger(revision))
        throw new Error('Invalid save revision');
      await tx.runAsync(
        'INSERT INTO rewarded_ad_claims (claim_id) VALUES (?)',
        claimId,
      );
      await tx.runAsync(
        'UPDATE game_snapshot SET payload = ?, revision = ? WHERE id = 1',
        JSON.stringify(updated),
        revision,
      );
      result = { state: updated, revision, granted: true };
    });
    if (!result) throw new Error('Reward transaction did not complete');
    return result;
  }
  return {
    claimAdReward(claimId) {
      return claim(claimId, (state) => ({
        ...state,
        coins: state.coins + REWARDED_AD_COINS,
      }));
    },
    async claimLevelDouble(levelId, claimId) {
      if (!pack.levels.some((level) => level.id === levelId))
        throw new Error('Unknown level for a doubled reward');
      return claim(claimId, (state) => {
        const doubled = state.doubledRewardLevelIds ?? [];
        // A reopened or replayed level, or a second ad, never pays twice.
        if (!state.progress[levelId]?.completed || doubled.includes(levelId))
          return null;
        return {
          ...state,
          coins: state.coins + LEVEL_DOUBLE_COINS,
          doubledRewardLevelIds: [...doubled, levelId],
        };
      });
    },
    async load() {
      let loaded: SavedGame | null = null;
      await database.withExclusiveTransactionAsync(async (tx) => {
        const row = await tx.getFirstAsync<{
          payload: string;
          revision: number;
          save_format: number;
        }>(
          'SELECT payload, revision, save_format FROM game_snapshot WHERE id = 1',
        );
        if (!row) return;
        if (
          row.save_format !== 1 ||
          !Number.isSafeInteger(row.revision) ||
          row.revision < 1
        )
          throw new Error('Unsupported or corrupt saved progress');
        const restored = restoreContent(
          JSON.parse(row.payload) as unknown,
          pack,
          previousPacks,
        );
        const revision = row.revision + (restored.migrated ? 1 : 0);
        if (!Number.isSafeInteger(revision))
          throw new Error('Invalid save revision');
        if (restored.migrated)
          await tx.runAsync(
            'UPDATE game_snapshot SET payload = ?, revision = ? WHERE id = 1',
            JSON.stringify(restored.state),
            revision,
          );
        loaded = { state: restored.state, revision };
      });
      return loaded;
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
