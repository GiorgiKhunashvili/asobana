import policy from '../../content/dictionaries/word-policy.json';
import manifest from '../../content/levels/discovery.v30.recipes.json';
import {
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

const removed =
  'თურქი შვედი ფრანგი არაბი სომეხი აფხაზი ოსი აზიელი გურული სვანი აზიური ინდური'.split(
    ' ',
  );
const catalog = previousCatalogs().find((pack) => pack.revision === 30)!;
const vocabulary = vocabularyForRevision(30);
const previous = previousCatalogs().find((pack) => pack.revision === 29)!;

test('the exact 12 origin labels leave every current role while historical packs and countries remain', () => {
  expect(catalog.revision).toBe(30);
  expect(requiredWordsForRevision(30).size).toBe(2306);
  expect(vocabulary.size).toBe(2424);
  expect(
    policy.excludedCategories.find((c) => c.id === 'owner-origin-label-review')
      ?.words,
  ).toEqual([...removed].sort());
  for (const word of removed) {
    expect(vocabulary.has(word)).toBe(false);
    expect(requiredWordsForRevision(30).has(word)).toBe(false);
    expect(vocabularyForRevision(29).has(word)).toBe(true);
    expect(requiredWordsForRevision(29).has(word)).toBe(true);
  }
  for (const word of ['დანია', 'ჩილე', 'ჩეხეთი', 'კანადა'])
    expect(requiredWordsForRevision(30).has(word)).toBe(true);
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

test('retired bonus discoveries retain earned coins and lifetime bonus credits', async () => {
  const index = previous.levels.findIndex((level) =>
    level.bonusWords.some((word) => removed.includes(word)),
  );
  expect(index).toBeGreaterThanOrEqual(0);
  const level = previous.levels[index]!;
  const retired = level.bonusWords.find((word) => removed.includes(word))!;
  const old = submit(
    reachLevel(index, previous),
    level,
    retired,
    previous,
  ).state;
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    await createSqliteRepository(db, previous).save(old, 0);
    const repo = createSqliteRepository(db, catalog, previousCatalogs());
    const migrated = (await repo.load())!.state;
    expect(migrated.coins).toBe(old.coins);
    expect(migrated.bonusRewards).toEqual(old.bonusRewards);
    expect(migrated.progress[level.id]!.bonusWords).not.toContain(retired);
    expect(
      submit(migrated, catalog.levels[index]!, retired, catalog).state.coins,
    ).toBe(old.coins);
    expect(
      (await createSqliteRepository(db, catalog, previousCatalogs()).load())!
        .state,
    ).toEqual(migrated);
  } finally {
    db.close();
  }
});

test.each(['partial', 'complete'] as const)(
  'revision-29 %s saves retain removed-answer credits, paid hints and rewards after reopening',
  async (scenario) => {
    const index = 40;
    const level = previous.levels[index]!;
    let old = submit(
      reachLevel(index, previous),
      level,
      'თურქი',
      previous,
    ).state;
    old = transition(
      old,
      { type: 'hint', levelId: level.id, kind: 'cell' },
      previous,
    ).state;
    if (scenario === 'complete') {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const oldRepo = createSqliteRepository(db, previous);
      await oldRepo.save(old, 0);
      if (scenario === 'complete')
        await oldRepo.claimLevelDouble(level.id, 'v29-level-bonus');
      await oldRepo.claimAdReward('v29-receipt');
      old = (await oldRepo.load())!.state;
      const repo = createSqliteRepository(db, catalog, previousCatalogs());
      const upgraded = (await repo.load())!;
      const state = upgraded.state;
      const before = old.progress[level.id]!;
      const after = state.progress[level.id]!;
      expect(state.contentRevision).toBe(30);
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
      expect((await repo.claimAdReward('v29-receipt')).state.coins).toBe(
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
