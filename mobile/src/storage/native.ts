import { openDatabaseAsync } from 'expo-sqlite';
import { catalog, previousCatalogs } from '../content/catalog';
import { createSqliteRepository, migrateDatabase } from './repository';
export async function openGameRepository() {
  const database = await openDatabaseAsync('asobana.db');
  try {
    await migrateDatabase(database);
    return createSqliteRepository(database, catalog, previousCatalogs);
  } catch (error) {
    await database.closeAsync();
    throw error;
  }
}
