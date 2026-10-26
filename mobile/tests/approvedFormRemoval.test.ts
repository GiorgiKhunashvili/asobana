import policy from '../../content/dictionaries/word-policy.json';
import manifest from '../../content/levels/discovery.v31.recipes.json';
import {
  catalog,
  vocabulary,
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';
import { DEFAULT_ECONOMY, transition } from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

const removed = ['მოგრძო', 'უკვალო', 'უკუდო'];
const previous = previousCatalogs().find((pack) => pack.revision === 30)!;

test('the exact three form-audit removals leave every current role while other approvals remain', () => {
  expect(catalog.revision).toBe(31);
  expect(requiredWordsForRevision(31).size).toBe(2303);
  expect(vocabulary.size).toBe(2421);
  expect(
    policy.excludedCategories.find((c) => c.id === 'owner-approved-form-review')
      ?.words,
  ).toEqual([...removed].sort());
  for (const word of removed) {
    expect(vocabulary.has(word)).toBe(false);
    expect(requiredWordsForRevision(31).has(word)).toBe(false);
    expect(vocabularyForRevision(30).has(word)).toBe(true);
    expect(requiredWordsForRevision(30).has(word)).toBe(true);
  }
  for (const word of ['უარესი', 'უფროსი', 'უბრალო', 'უმანკო', 'უფასო'])
    expect(requiredWordsForRevision(31).has(word)).toBe(true);
  for (const level of catalog.levels) {
    expect(
      [
        ...level.bonusWords,
        ...level.words.flatMap((w) => w.acceptedAnswers),
      ].some((w) => removed.includes(w)),
    ).toBe(false);
  }
  expect(() =>
    validateWide(catalog, vocabulary, manifest.familiarity),
  ).not.toThrow();
});

test('a permissive supplied dictionary cannot restore an excluded target, variant or bonus', () => {
  const first = catalog.levels[0]!;
  for (const spelling of removed) {
    for (const role of ['answer', 'variant', 'bonus'] as const) {
      const poisoned = {
        ...first,
        words: first.words.map((word, index) =>
          index
            ? word
            : {
                ...word,
                answer: role === 'answer' ? spelling : word.answer,
                acceptedAnswers:
                  role === 'variant'
                    ? [...word.acceptedAnswers, spelling]
                    : word.acceptedAnswers,
              },
        ),
        bonusWords:
          role === 'bonus' ? [...first.bonusWords, spelling] : first.bonusWords,
      };
      expect(() =>
        validateWide(
          { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
          new Set([...vocabulary, spelling]),
          manifest.familiarity,
        ),
      ).toThrow('owner exclusions');
    }
  }
});

test.each([
  { index: 8, removedAnswer: 'უკუდო', complete: false },
  { index: 125, removedAnswer: 'უკვალო', complete: true },
  { index: 241, removedAnswer: 'მოგრძო', complete: false },
])(
  'revision-30 save at $index retains credits, hints and rewards after reopening',
  async ({ index, removedAnswer, complete }) => {
    const level = previous.levels[index]!;
    let old = submit(
      reachLevel(index, previous),
      level,
      removedAnswer,
      previous,
    ).state;
    old = transition(
      old,
      { type: 'hint', levelId: level.id, kind: 'cell' },
      previous,
    ).state;
    if (complete) {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const oldRepo = createSqliteRepository(db, previous);
      await oldRepo.save(old, 0);
      if (complete) await oldRepo.claimLevelDouble(level.id, 'v30-level-bonus');
      await oldRepo.claimAdReward('v30-receipt');
      old = (await oldRepo.load())!.state;
      const repo = createSqliteRepository(db, catalog, previousCatalogs());
      const upgraded = (await repo.load())!;
      const state = upgraded.state;
      const before = old.progress[level.id]!;
      const after = state.progress[level.id]!;
      expect(state.contentRevision).toBe(31);
      expect(state.currentLevelId).toBe(old.currentLevelId);
      expect(state.bonusRewards).toEqual(old.bonusRewards);
      expect(after.solvedWordIds.length).toBeGreaterThanOrEqual(
        before.solvedWordIds.length,
      );
      expect(after.hintsUsed).toBe(before.hintsUsed);
      if (!after.completed)
        expect(after.revealedCellIds.length).toBeGreaterThanOrEqual(
          before.revealedCellIds.length,
        );
      expect(state.coins).toBe(
        old.coins +
          (after.completed && !before.completed
            ? DEFAULT_ECONOMY.completionReward
            : 0),
      );
      expect(state.doubledRewardLevelIds).toEqual(old.doubledRewardLevelIds);
      expect(
        selectPostcards(state, catalog)
          .filter((c) => c.collected)
          .map((c) => c.chapterId),
      ).toEqual(
        expect.arrayContaining(
          selectPostcards(old, previous)
            .filter((c) => c.collected)
            .map((c) => c.chapterId),
        ),
      );
      expect((await repo.claimAdReward('v30-receipt')).state.coins).toBe(
        state.coins,
      );
      expect(
        (await createSqliteRepository(db, catalog, previousCatalogs()).load())!
          .state,
      ).toEqual(state);
    } finally {
      db.close();
    }
  },
);
