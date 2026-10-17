import manifest from '../../content/levels/discovery.v13.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { validateWide } from '../src/content/wide';
import { excludedWords } from '../src/content/wordPolicy';
import { canFormWord } from '../src/engine/georgian';
import { initialState, transition } from '../src/engine/game';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

test('pronouns cannot appear as targets, accepted variants or bonus words', () => {
  const pronouns =
    'ეგ ეს ვინ თქვენ იგი ის ისინი მათი მე მისი რა რაიმე რამე შენ შენი ჩემი ჩვენ ჩვენი'.split(
      ' ',
    );
  for (const word of pronouns) {
    expect(excludedWords.has(word)).toBe(true);
    expect(vocabulary.has(word)).toBe(false);
  }
  // This homograph is the noun "head" in our dictionary, and remains playable.
  expect(vocabulary.has('თავი')).toBe(true);
  for (const level of catalog.levels) {
    const words = [
      ...level.words.flatMap((word) => word.acceptedAnswers),
      ...level.bonusWords,
    ];
    expect(words.some((word) => excludedWords.has(word))).toBe(false);
  }
  expect(() =>
    validateWide(
      {
        ...catalog,
        levels: [
          { ...catalog.levels[0]!, bonusWords: ['მათი'] },
          ...catalog.levels.slice(1),
        ],
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('Pronouns');
});

test('a formable excluded pronoun is rejected by gameplay without earning coins', () => {
  const index = catalog.levels.findIndex((level) =>
    canFormWord(
      'ის',
      level.tiles.map((tile) => tile.letter),
    ),
  );
  expect(index).toBeGreaterThanOrEqual(0);
  const state = reachLevel(index);
  const result = submit(state, catalog.levels[index]!, 'ის');
  expect(result.state).toBe(state);
  expect(result.events).toContainEqual({
    type: 'word-rejected',
    reason: 'invalid-word',
    word: 'ის',
  });
});

test('a shipped v6 save migrates once, retaining paid hints and coins from a retired pronoun bonus', async () => {
  const previous = previousCatalogs[5]!;
  expect(previous.revision).toBe(6);
  const level = previous.levels[1]!;
  expect(level.bonusWords).toContain('ის');
  let old = submit(reachLevel(1, previous), level, 'ის', previous).state;
  old = transition(
    old,
    { type: 'hint', levelId: level.id, kind: 'cell' },
    previous,
  ).state;
  old = parseSnapshot(
    {
      ...old,
      progress: {
        ...old.progress,
        [level.id]: { ...old.progress[level.id]!, hintsUsed: 956 },
      },
    },
    previous,
  );
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    await createSqliteRepository(db, previous).save(old, 0);
    const repo = createSqliteRepository(db, catalog, previousCatalogs);
    const migrated = (await repo.load())!;
    expect(migrated.revision).toBe(2);
    expect(migrated.state.contentRevision).toBe(13);
    expect(migrated.state.currentLevelId).toBe(old.currentLevelId);
    expect(migrated.state.coins).toBe(old.coins);
    expect(migrated.state.progress['ka-001']!.completed).toBe(true);
    const progress = migrated.state.progress[level.id]!;
    expect(progress.bonusWords).not.toContain('ის');
    expect(progress.hintsUsed).toBe(956);
    expect(progress.revealedCellIds.length).toBeGreaterThanOrEqual(
      old.progress[level.id]!.revealedCellIds.length,
    );
    expect(await repo.load()).toEqual(migrated);
  } finally {
    db.close();
  }
});

test('the historical pack still validates pronoun answers needed to read old saves', () => {
  const previous = previousCatalogs[5]!;
  const level = previous.levels[0]!;
  expect(level.words.some((word) => word.answer === 'მათი')).toBe(true);
  const result = submit(initialState(previous), level, 'მათი', previous);
  expect(result.state.progress[level.id]!.solvedWordIds).toHaveLength(1);
  expect(parseSnapshot(result.state, previous)).toEqual(result.state);
});
