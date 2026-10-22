import dictionary from '../../content/dictionaries/discovery-v9-ka.json';
import oldDictionary from '../../content/dictionaries/discovery-v8-ka.json';
import manifest from '../../content/levels/discovery.v29.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { validateWide } from '../src/content/wide';
import {
  excludedWords,
  excludedWordsForRevision,
} from '../src/content/wordPolicy';
import { transition } from '../src/engine/game';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

test('expanded ordinary senses are reviewed and used in the campaign', () => {
  const historical = new Set(oldDictionary.entries.map((entry) => entry.word));
  const additions = dictionary.entries.filter(
    (entry) => !historical.has(entry.word),
  );
  expect(additions).toHaveLength(686);
  expect(vocabulary.size).toBe(2436);
  for (const entry of additions) {
    expect(['noun', 'adjective']).toContain(
      'partOfSpeech' in entry ? entry.partOfSpeech : undefined,
    );
    expect(excludedWordsForRevision(9).has(entry.word)).toBe(false);
  }
  for (const word of ['წიგნი', 'სკოლა', 'კოვზი', 'ქოლგა'])
    expect(vocabulary.has(word)).toBe(true);
  const oldAnswers = new Set(
    previousCatalogs()[7]!.levels.flatMap((level) =>
      level.words.map((word) => word.answer),
    ),
  );
  const newAnswers = catalog.levels
    .flatMap((level) => level.words.map((word) => word.answer))
    .filter((word) => !oldAnswers.has(word));
  expect(newAnswers.length).toBeGreaterThanOrEqual(20);
});

test('name-only entries and action forms are blocked while ordinary homographs remain', () => {
  for (const word of [
    'გიორგი',
    'ნინო',
    'დავით',
    'კოცნა',
    'მზერა',
    'სვლა',
    'სმა',
    'წერა',
    'ჭამა',
    'ხილვა',
  ]) {
    expect(excludedWords.has(word)).toBe(true);
    expect(vocabulary.has(word)).toBe(false);
  }
  for (const word of ['ია', 'ნელი', 'მერი', 'მელანი', 'ნუკრი', 'იმედი']) {
    expect(excludedWords.has(word)).toBe(false);
    expect(vocabulary.has(word)).toBe(true);
  }
  for (const level of catalog.levels) {
    for (const word of [
      ...level.bonusWords,
      ...level.words.flatMap((word) => word.acceptedAnswers),
    ])
      expect(excludedWords.has(word)).toBe(false);
  }
  for (const field of ['bonus', 'variant'] as const) {
    const first = catalog.levels[0]!;
    const poisoned = {
      ...catalog,
      levels: [
        {
          ...first,
          bonusWords:
            field === 'bonus'
              ? [...first.bonusWords, 'ნინო']
              : first.bonusWords,
          words: first.words.map((word, index) =>
            field === 'variant' && index === 0
              ? { ...word, acceptedAnswers: [...word.acceptedAnswers, 'ნინო'] }
              : word,
          ),
        },
        ...catalog.levels.slice(1),
      ],
    };
    expect(() =>
      validateWide(
        poisoned,
        new Set([...vocabulary, 'ნინო']),
        manifest.familiarity,
      ),
    ).toThrow('name-only');
  }
});

test('revision 8 save migrates a removed action answer and paid hint exactly once', async () => {
  const previous = previousCatalogs()[7]!;
  expect(previous.revision).toBe(8);
  const index = previous.levels.findIndex((level) =>
    level.words.some((word) => word.answer === 'სვლა'),
  );
  expect(index).toBeGreaterThanOrEqual(0);
  const level = previous.levels[index]!;
  let old = submit(reachLevel(index, previous), level, 'სვლა', previous).state;
  old = transition(
    old,
    { type: 'hint', levelId: level.id, kind: 'cell' },
    previous,
  ).state;
  expect(old.progress[level.id]!.revealedCellIds.length).toBeGreaterThan(0);
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    await createSqliteRepository(db, previous).save(old, 0);
    const repo = createSqliteRepository(db, catalog, previousCatalogs());
    const upgraded = (await repo.load())!;
    expect(upgraded.state.contentRevision).toBe(catalog.revision);
    expect(upgraded.state.coins).toBe(old.coins);
    expect(upgraded.state.currentLevelId).toBe(old.currentLevelId);
    expect(upgraded.state.settings).toEqual(old.settings);
    const progress = upgraded.state.progress[level.id]!;
    expect(progress.solvedWordIds.length).toBeGreaterThanOrEqual(
      old.progress[level.id]!.solvedWordIds.length,
    );
    expect(progress.revealedCellIds.length).toBeGreaterThanOrEqual(
      old.progress[level.id]!.revealedCellIds.length,
    );
    expect(progress.hintsUsed).toBe(old.progress[level.id]!.hintsUsed);
    for (const [id, saved] of Object.entries(old.progress))
      if (saved.completed)
        expect(upgraded.state.progress[id]!.completed).toBe(true);
    expect(await repo.load()).toEqual(upgraded);
  } finally {
    db.close();
  }
});
