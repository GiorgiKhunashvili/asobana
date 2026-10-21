import review from '../../content/dictionaries/everyday-targets-v14.json';
import manifest from '../../content/levels/discovery.v29.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';
import { transition } from '../src/engine/game';
import { canFormWord } from '../src/engine/georgian';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

const plurals = new Set(review.pluralReview.map((entry) => entry.word));

test('plurals are bonus-only from v14 and vocabulary coverage improves', () => {
  expect(catalog.revision).toBe(29);
  expect(requiredWordsForRevision(14).size).toBe(831);
  for (const word of plurals) {
    expect(vocabulary.has(word)).toBe(true);
    expect(requiredWordsForRevision(13).has(word)).toBe(true);
    expect(requiredWordsForRevision(14).has(word)).toBe(false);
  }
  const answers = catalog.levels.flatMap((level) =>
    level.words.flatMap((word) => [word.answer, ...word.acceptedAnswers]),
  );
  expect(answers.some((word) => plurals.has(word))).toBe(false);
  const previous = previousCatalogs.find((pack) => pack.revision === 13)!;
  const oldWords = new Set(
    previous.levels.flatMap((level) => level.words.map((word) => word.answer)),
  );
  expect(new Set(answers).size).toBeGreaterThan(oldWords.size);
  expect(new Set(answers).size).toBeGreaterThanOrEqual(679);
  for (const role of ['answer', 'variant'] as const) {
    const level = catalog.levels[0]!;
    const poisoned = {
      ...level,
      words: level.words.map((word, index) =>
        index
          ? word
          : {
              ...word,
              answer: role === 'answer' ? 'ქვები' : word.answer,
              acceptedAnswers:
                role === 'variant'
                  ? [...word.acceptedAnswers, 'ქვები']
                  : word.acceptedAnswers,
            },
      ),
    };
    expect(() =>
      validateWide(
        { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
        vocabulary,
        manifest.familiarity,
      ),
    ).toThrow('Plural nouns and owner-reserved words are bonus-only');
  }
});

test('a formable plural earns one bonus reward without solving a target', () => {
  // A fixed wheel keeps this reward test independent of campaign optimization.
  // Recompute its bonus list with the current eligible vocabulary.
  const historical = previousCatalogs.find((pack) => pack.revision === 18)!;
  const source = historical.levels.find((level) =>
    level.bonusWords.some((word) => plurals.has(word)),
  )!;
  expect(source).toBeDefined();
  const accepted = new Set(
    source.words.flatMap((word) => word.acceptedAnswers),
  );
  const level = {
    ...source,
    bonusWords: [...vocabulary].filter(
      (word) =>
        !accepted.has(word) &&
        canFormWord(
          word,
          source.tiles.map((tile) => tile.letter),
        ),
    ),
  };
  const fixture = { ...catalog, levels: [level] };
  const state = reachLevel(0, fixture);
  const plural = level.bonusWords.find((word) => plurals.has(word))!;
  expect(plural).toBeDefined();
  expect(vocabulary.has(plural)).toBe(true);
  expect(requiredWordsForRevision(catalog.revision).has(plural)).toBe(false);
  const result = submit(state, level, plural, fixture);
  expect(result.events).toContainEqual({
    type: 'bonus-found',
    word: plural,
    reward: 3,
  });
  expect(result.state.coins).toBe(state.coins + 3);
  expect(result.state.progress[level.id]!.solvedWordIds).toEqual([]);
  expect(submit(result.state, level, plural, fixture).state).toBe(result.state);
});

test.each(['partial', 'complete'] as const)(
  'v13 %s progress and journey postcards survive current migration and restart',
  async (scenario) => {
    const previous = previousCatalogs.find((pack) => pack.revision === 13)!;
    const index = 70;
    const level = previous.levels[index]!;
    let old = reachLevel(index, previous);
    expect(level.words.some((word) => plurals.has(word.answer))).toBe(true);
    if (scenario === 'partial') {
      const plural = level.words.find((word) => plurals.has(word.answer))!;
      old = submit(old, level, plural.answer, previous).state;
      old = transition(
        old,
        { type: 'hint', levelId: level.id, kind: 'cell' },
        previous,
      ).state;
      if (level.bonusWords[0])
        old = submit(old, level, level.bonusWords[0], previous).state;
    } else {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    old = {
      ...old,
      progress: {
        ...old.progress,
        'ka-001': { ...old.progress['ka-001']!, hintsUsed: 1250 },
        ...(scenario === 'partial'
          ? { [level.id]: { ...old.progress[level.id]!, hintsUsed: 1250 } }
          : {}),
      },
    };
    const cards = selectPostcards(old, previous)
      .filter((card) => card.collected)
      .map((card) => card.chapterId);
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const repo = createSqliteRepository(db, catalog, previousCatalogs);
      const upgraded = (await repo.load())!;
      expect(upgraded.state.contentRevision).toBe(catalog.revision);
      expect(upgraded.state.progress['ka-001']!.hintsUsed).toBe(1250);
      expect(upgraded.state.coins).toBe(old.coins);
      expect(upgraded.state.currentLevelId).toBe(old.currentLevelId);
      expect(upgraded.state.settings).toEqual(old.settings);
      expect(upgraded.state.bonusRewards).toEqual(old.bonusRewards);
      expect(upgraded.state.progress[level.id]!.hintsUsed).toBe(
        old.progress[level.id]!.hintsUsed,
      );
      expect(
        upgraded.state.progress[level.id]!.solvedWordIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.solvedWordIds.length);
      expect(
        upgraded.state.progress[level.id]!.revealedCellIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.revealedCellIds.length);
      for (const [id, progress] of Object.entries(old.progress))
        if (progress.completed)
          expect(upgraded.state.progress[id]!.completed).toBe(true);
      expect(
        selectPostcards(upgraded.state, catalog)
          .filter((card) => card.collected)
          .map((card) => card.chapterId),
      ).toEqual(expect.arrayContaining(cards));
      expect(
        await createSqliteRepository(db, catalog, previousCatalogs).load(),
      ).toEqual(upgraded);
      if (scenario === 'partial') {
        const hinted = transition(
          upgraded.state,
          { type: 'hint', levelId: level.id, kind: 'cell' },
          catalog,
        ).state;
        expect(hinted.progress[level.id]!.hintsUsed).toBe(1251);
        await repo.save(hinted, upgraded.revision);
        const restarted = await createSqliteRepository(
          db,
          catalog,
          previousCatalogs,
        ).load();
        expect(restarted!.state).toEqual(hinted);
      }
    } finally {
      db.close();
    }
  },
);
