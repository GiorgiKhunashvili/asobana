import { openDatabaseAsync } from 'expo-sqlite';
import { catalog, previousCatalogs } from '../content/catalog';
import { createSqliteRepository, migrateDatabase } from './repository';
export async function openGameRepository() {
  // The store serializes saves on this private connection. Do not share a
  // cached native handle with a second repository or unrelated transaction.
  const database = await openDatabaseAsync('asobana.db', {
    useNewConnection: true,
  });
  try {
    await migrateDatabase(database);
    return createSqliteRepository(database, catalog, previousCatalogs);
  } catch (error) {
    await database.closeAsync();
    throw error;
  }
}
