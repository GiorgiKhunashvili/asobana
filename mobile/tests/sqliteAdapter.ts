import { createRequire } from 'node:module';
import type { SqlDatabase, SqlTransaction } from '../src/storage/repository';
// Load the real built-in SQLite module, bypassing Jest's native-module resolver.
interface Connection {
  exec(sql: string): void;
  prepare(sql: string): {
    get(...params: (string | number | null)[]): unknown;
    run(...params: (string | number | null)[]): { changes: number | bigint };
  };
  close(): void;
}
const { DatabaseSync } = createRequire(__filename)('node:sqlite') as {
  DatabaseSync: new (path: string) => Connection;
};
export class TestSqlite implements SqlDatabase {
  private readonly connection: Connection;
  constructor(path = ':memory:') {
    this.connection = new DatabaseSync(path);
  }
  async execAsync(sql: string): Promise<void> {
    this.connection.exec(sql);
  }
  async getFirstAsync<T>(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<T | null> {
    return (
      (this.connection.prepare(sql).get(...params) as T | undefined) ?? null
    );
  }
  async runAsync(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<{ changes: number }> {
    return {
      changes: Number(this.connection.prepare(sql).run(...params).changes),
    };
  }
  async withExclusiveTransactionAsync(
    task: (tx: SqlTransaction) => Promise<void>,
  ): Promise<void> {
    this.connection.exec('BEGIN IMMEDIATE');
    try {
      await task(this);
      this.connection.exec('COMMIT');
    } catch (error) {
      this.connection.exec('ROLLBACK');
      throw error;
    }
  }
  close(): void {
    this.connection.close();
  }
}
