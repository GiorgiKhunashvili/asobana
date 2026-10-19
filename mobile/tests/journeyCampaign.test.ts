import journey from '../../content/journey-v23.json';
import manifest from '../../content/levels/discovery.v26.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { validateRequiredGap } from '../src/content/discovery';
import { validateWide } from '../src/content/wide';
import { isUnlocked, transition } from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import { parseSnapshot } from '../src/storage/snapshot';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

test('journey contains 59 exact stops, 295 boards and a global 75-level cooldown', () => {
  expect(catalog.chapters).toEqual(journey.chapters);
  expect(catalog.levels).toHaveLength(295);
  const seen = new Map<string, number>();
  let repeats = 0;
  for (const [index, level] of catalog.levels.entries()) {
    expect(level.chapterId).toBe(journey.chapters[Math.floor(index / 5)]!.id);
    expect(level.words).toHaveLength(5);
    for (const word of level.words) {
      for (const answer of word.acceptedAnswers) {
        if (seen.has(answer)) {
          expect(index - seen.get(answer)!).toBeGreaterThanOrEqual(75);
          repeats++;
        }
        seen.set(answer, index);
      }
    }
  }
  expect(repeats).toBeGreaterThan(0);
  expect(() =>
    validateWide(catalog, vocabulary, manifest.familiarity),
  ).not.toThrow();
  expect(() =>
    validateWide(
      {
        ...catalog,
        chapters: catalog.chapters.map((chapter, index) =>
          index === 0 ? { ...chapter, title: 'incorrect stop' } : chapter,
        ),
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('Journey chapter titles');
});

test('required variants share the cooldown, with exact boundary and within-board checks', () => {
  const word = catalog.levels[0]!.words[0]!;
  const other = catalog.levels[0]!.words[1]!;
  const last = new Map<string, number>();
  validateRequiredGap([word], 9, last);
  expect(() => validateRequiredGap([word], 83, last)).toThrow('75-level gap');
  expect(() => validateRequiredGap([word], 84, last)).not.toThrow();
  const variant = {
    ...other,
    acceptedAnswers: [...other.acceptedAnswers, word.answer],
  };
  expect(() => validateRequiredGap([variant], 85, last)).toThrow(
    '75-level gap',
  );
  expect(() => validateRequiredGap([word, variant], 159, last)).toThrow(
    'within a board',
  );
});

test.each(['partial', 'complete'] as const)(
  'v12 %s save retains credits and original postcards across restart',
  async (scenario) => {
    const previous = previousCatalogs.find((pack) => pack.revision === 12)!;
    const index = scenario === 'partial' ? 16 : 49;
    const level = previous.levels[index]!;
    let old = reachLevel(index, previous);
    if (scenario === 'partial') {
      expect(level.bonusWords).toContain('რული');
      old = submit(old, level, 'რული', previous).state;
      old = submit(old, level, level.words[0]!.answer, previous).state;
      old = transition(
        old,
        { type: 'hint', levelId: level.id, kind: 'cell' },
        previous,
      ).state;
    } else {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    old = {
      ...old,
      bonusRewards: { totalFound: 23, hintsSpent: 1 },
      progress: {
        ...old.progress,
        'ka-001': { ...old.progress['ka-001']!, hintsUsed: 1208 },
      },
    };
    const originalCards = selectPostcards(old, previous)
      .filter((card) => card.collected)
      .map((card) => card.chapterId);
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const upgraded = (await createSqliteRepository(
        db,
        catalog,
        previousCatalogs,
      ).load())!;
      const state = upgraded.state;
      expect(state.contentRevision).toBe(catalog.revision);
      expect(state.currentLevelId).toBe(old.currentLevelId);
      expect(state.coins).toBe(old.coins);
      expect(state.settings).toEqual(old.settings);
      expect(state.bonusRewards).toEqual(old.bonusRewards);
      expect(state.legacyPostcardChapterIds).toEqual(originalCards);
      expect(
        selectPostcards(state, catalog)
          .filter((card) => card.collected)
          .map((card) => card.chapterId),
      ).toEqual(expect.arrayContaining(originalCards));
      expect(state.progress['ka-001']!.hintsUsed).toBe(1208);
      expect(
        state.progress[level.id]!.solvedWordIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.solvedWordIds.length);
      expect(state.progress[level.id]!.hintsUsed).toBe(
        old.progress[level.id]!.hintsUsed,
      );
      expect(
        state.progress[level.id]!.revealedCellIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.revealedCellIds.length);
      expect(state.progress[level.id]!.bonusWords).not.toContain('რული');
      for (const [id, progress] of Object.entries(old.progress))
        if (progress.completed)
          expect(state.progress[id]!.completed).toBe(true);
      if (scenario === 'complete') {
        expect(isUnlocked(state, catalog, 'ka-051')).toBe(true);
        expect(isUnlocked(state, catalog, 'ka-052')).toBe(false);
        expect(
          submit(
            state,
            catalog.levels[49]!,
            catalog.levels[49]!.words[0]!.answer,
          ).state.coins,
        ).toBe(old.coins);
      }
      expect(
        await createSqliteRepository(db, catalog, previousCatalogs).load(),
      ).toEqual(upgraded);
      expect(parseSnapshot(state, catalog)).toEqual(state);
    } finally {
      db.close();
    }
  },
);

test('legacy postcard metadata rejects unknown IDs and duplicates', () => {
  const state = reachLevel(0);
  for (const ids of [['unknown'], ['weather', 'weather']])
    expect(() =>
      parseSnapshot({ ...state, legacyPostcardChapterIds: ids }, catalog),
    ).toThrow();
});

test('excluded spellings cannot return as targets, variants or bonuses', () => {
  for (const excluded of [
    'რული',
    'კრანი',
    'მაიკა',
    'ბინტი',
    'ბლინი',
    'ვედრო',
    'კაშნე',
  ]) {
    expect(vocabulary.has(excluded)).toBe(false);
    for (const role of ['answer', 'variant', 'bonus'] as const) {
      const first = catalog.levels[0]!;
      const poisoned = {
        ...first,
        bonusWords:
          role === 'bonus' ? [...first.bonusWords, excluded] : first.bonusWords,
        words: first.words.map((word, index) =>
          index === 0 && role !== 'bonus'
            ? {
                ...word,
                answer: role === 'answer' ? excluded : word.answer,
                acceptedAnswers: [...word.acceptedAnswers, excluded],
              }
            : word,
        ),
      };
      expect(() =>
        validateWide(
          { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
          new Set([...vocabulary, excluded]),
          manifest.familiarity,
        ),
      ).toThrow('excluded');
    }
  }
  for (const rare of ['ურცი', 'რაზა', 'თელა'])
    expect(vocabulary.has(rare)).toBe(true);
});

test.each([13, 14])(
  'continuing answers retain IDs from v%i to its successor',
  (revision) => {
    const previous = previousCatalogs.find(
      (pack) => pack.revision === revision,
    )!;
    const successor = [catalog, ...previousCatalogs].find(
      (pack) => pack.revision === revision + 1,
    )!;
    for (const [index, level] of previous.levels.entries())
      for (const word of level.words) {
        const next = successor.levels[index]!.words.find(
          (candidate) => candidate.answer === word.answer,
        );
        if (next) expect(next.id).toBe(word.id);
      }
  },
);
