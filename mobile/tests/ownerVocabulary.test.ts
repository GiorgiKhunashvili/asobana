import { transition } from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';
import review from '../../content/dictionaries/everyday-targets-v15.json';
import expandedReview from '../../content/dictionaries/everyday-targets-v16.json';
import manifest from '../../content/levels/discovery.v28.recipes.json';
import {
  catalog,
  vocabulary,
  vocabularyForRevision,
  previousCatalogs,
} from '../src/content/catalog';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';

const removed =
  'ბალონი ბაჟე გარაჟი ზუსტად კარგად კასეტი უცებ ფანარი შიგნით ძალიან ხშირად ჯიპი'.split(
    ' ',
  );

test('v16 promotes the exact reviewed complement and preserves 47 bonus-only words', () => {
  const { reviewedBonusWords, approvedBonusWords, bonusOnlyWords } =
    expandedReview.ownerReview;
  expect(reviewedBonusWords).toHaveLength(372);
  expect(approvedBonusWords).toHaveLength(325);
  expect(bonusOnlyWords).toHaveLength(47);
  expect(new Set(approvedBonusWords)).toEqual(
    new Set(
      reviewedBonusWords.filter((word) => !bonusOnlyWords.includes(word)),
    ),
  );
  expect(requiredWordsForRevision(16).size).toBe(1091);
  for (const word of approvedBonusWords) {
    expect(requiredWordsForRevision(16).has(word)).toBe(true);
    expect(vocabularyForRevision(16).has(word)).toBe(true);
  }
  for (const word of bonusOnlyWords) {
    expect(vocabulary.has(word)).toBe(true);
    expect(requiredWordsForRevision(16).has(word)).toBe(false);
    for (const role of ['answer', 'variant']) {
      const level = catalog.levels[0]!;
      const poisoned = {
        ...level,
        words: level.words.map((target, index) =>
          index
            ? target
            : {
                ...target,
                answer: role === 'answer' ? word : target.answer,
                acceptedAnswers:
                  role === 'variant'
                    ? [...target.acceptedAnswers, word]
                    : target.acceptedAnswers,
              },
        ),
      };
      expect(() =>
        validateWide(
          { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
          vocabulary,
          manifest.familiarity,
        ),
      ).toThrow('bonus-only');
    }
  }
  const answers = new Set(
    catalog.levels.flatMap((level) =>
      level.words.flatMap((word) => [word.answer, ...word.acceptedAnswers]),
    ),
  );
  expect(answers.size).toBeGreaterThan(680);
  expect(
    approvedBonusWords.filter((word) => answers.has(word)).length,
  ).toBeGreaterThan(0);
});

test('full-pool review excludes 53 and promotes exactly 325 from v16', () => {
  const rejected = (
    'ათასი ათი ასე ასი აქეთ აქვე ახლა ახლოს ახლო ბლოგი გარე დღეს ერთი ექვსი ' +
    'ზევით ზემოთ ისე ისევ იქვე იქით კარგი კევი კვლავ კიდევ მაღლა მაშინ მერე ' +
    'მეტად ნელა ოდნავ ოთხი ორი ორმოცი ოცი რვა სამი სამოცი სულ უკვე უფრო ' +
    'ქვედა ქვევით ქვემოთ შვიდი შიგ შიდა შინ ჩქარა ცუდად ცხრა წინ ხუთი ჯერ'
  ).split(' ');
  expect(new Set(rejected).size).toBe(53);
  const currentRequired = requiredWordsForRevision(15);
  for (const word of rejected) {
    expect(currentRequired.has(word)).toBe(true);
    expect(vocabularyForRevision(15).has(word)).toBe(true);
    expect(requiredWordsForRevision(16).has(word)).toBe(false);
    expect(vocabularyForRevision(16).has(word)).toBe(false);
  }
  expect(requiredWordsForRevision(16)).toEqual(
    new Set([
      ...[...currentRequired].filter((word) => !rejected.includes(word)),
      ...expandedReview.ownerReview.approvedBonusWords,
    ]),
  );
  expect(vocabularyForRevision(16)).toEqual(
    new Set(
      [...vocabularyForRevision(15)].filter((word) => !rejected.includes(word)),
    ),
  );
  for (const word of ['თელა', 'რაზა', 'ურცი', 'ფეხები']) {
    expect(vocabularyForRevision(16).has(word)).toBe(true);
    expect(requiredWordsForRevision(16).has(word)).toBe(false);
  }
});

test('owner exclusions apply to all roles from v15, with the other 140 still approved', () => {
  expect(requiredWordsForRevision(15).size).toBe(819);
  expect(review.ownerReview.excludedWords).toEqual(removed);
  expect(review.ownerReview.approvedUnusedWords).toHaveLength(140);
  for (const word of removed) {
    expect(vocabularyForRevision(14).has(word)).toBe(true);
    expect(requiredWordsForRevision(14).has(word)).toBe(true);
    expect(vocabulary.has(word)).toBe(false);
    expect(requiredWordsForRevision(15).has(word)).toBe(false);
    for (const role of ['answer', 'variant', 'bonus']) {
      const level = catalog.levels[0]!;
      const poisoned = {
        ...level,
        bonusWords:
          role === 'bonus' ? [...level.bonusWords, word] : level.bonusWords,
        words: level.words.map((target, index) =>
          index
            ? target
            : {
                ...target,
                answer: role === 'answer' ? word : target.answer,
                acceptedAnswers:
                  role === 'variant'
                    ? [...target.acceptedAnswers, word]
                    : target.acceptedAnswers,
              },
        ),
      };
      expect(() =>
        validateWide(
          { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
          vocabulary,
          manifest.familiarity,
        ),
      ).toThrow('owner exclusions');
    }
  }
  for (const word of review.ownerReview.approvedUnusedWords)
    expect(requiredWordsForRevision(15).has(word)).toBe(true);
  const words = new Set(
    catalog.levels.flatMap((level) => level.words.map((word) => word.answer)),
  );
  const previous = previousCatalogs.find((pack) => pack.revision === 14)!;
  const oldWords = new Set(
    previous.levels.flatMap((level) => level.words.map((word) => word.answer)),
  );
  expect(words.size).toBeGreaterThan(oldWords.size);
  expect(
    review.ownerReview.approvedUnusedWords.some((word) => words.has(word)),
  ).toBe(true);
});

test.each([
  { revision: 14, scenario: 'partial' },
  { revision: 14, scenario: 'complete' },
  { revision: 15, scenario: 'partial' },
  { revision: 15, scenario: 'complete' },
  { revision: 16, scenario: 'partial' },
  { revision: 16, scenario: 'complete' },
  { revision: 17, scenario: 'partial' },
  { revision: 17, scenario: 'complete' },
  { revision: 18, scenario: 'partial' },
  { revision: 18, scenario: 'complete' },
  { revision: 19, scenario: 'partial' },
  { revision: 19, scenario: 'complete' },
])(
  'v$revision $scenario progress and journey postcards survive current migration and restart',
  async ({ revision, scenario }) => {
    const previous = previousCatalogs.find(
      (pack) => pack.revision === revision,
    )!;
    const hintLimit =
      revision === 19
        ? 1502
        : revision === 18
          ? 1460
          : revision === 17
            ? 1418
            : revision === 16
              ? 1376
              : revision === 15
                ? 1334
                : 1292;
    const index = previous.levels.findIndex(
      (level, index) =>
        index >= 5 &&
        level.bonusWords.length > 0 &&
        level.words.some(
          (word) =>
            !catalog.levels[index]!.words.some(
              (next) => next.answer === word.answer,
            ),
        ),
    );
    expect(index).toBeGreaterThanOrEqual(0);
    const level = previous.levels[index]!;
    let old = reachLevel(index, previous);
    if (scenario === 'partial') {
      const retired = level.words.find(
        (word) =>
          !catalog.levels[index]!.words.some(
            (next) => next.answer === word.answer,
          ),
      )!;
      old = submit(old, level, retired.answer, previous).state;
      old = transition(
        old,
        { type: 'hint', levelId: level.id, kind: 'cell' },
        previous,
      ).state;
      const bonus = level.bonusWords[0]!;
      old = submit(old, level, bonus, previous).state;
    } else {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    old = {
      ...old,
      progress: {
        ...old.progress,
        'ka-001': { ...old.progress['ka-001']!, hintsUsed: hintLimit },
        ...(scenario === 'partial'
          ? { [level.id]: { ...old.progress[level.id]!, hintsUsed: hintLimit } }
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
      expect(upgraded.state.progress['ka-001']!.hintsUsed).toBe(hintLimit);
      expect(upgraded.state.coins).toBe(old.coins);
      expect(upgraded.state.currentLevelId).toBe(old.currentLevelId);
      expect(upgraded.state.settings).toEqual(old.settings);
      expect(upgraded.state.bonusRewards).toEqual(old.bonusRewards);
      expect(
        upgraded.state.progress[level.id]!.bonusWords.some((word) =>
          removed.includes(word),
        ),
      ).toBe(false);
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
        expect(hinted.progress[level.id]!.hintsUsed).toBe(hintLimit + 1);
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
