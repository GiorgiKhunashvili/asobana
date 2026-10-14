import { openDatabaseAsync } from 'expo-sqlite';
import { catalog } from '../content/catalog';
import { createSqliteRepository, migrateDatabase } from './repository';
export async function openGameRepository() {
  const database = await openDatabaseAsync('geowords.db');
  try {
    await migrateDatabase(database);
    return createSqliteRepository(database, catalog);
  } catch (error) {
    await database.closeAsync();
    throw error;
  }
}
