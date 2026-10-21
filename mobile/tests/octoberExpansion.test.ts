import review from '../../docs/VOCABULARY_EXPANSION_REVIEW_2026_10_20.json';
import manifest from '../../content/levels/discovery.v27.recipes.json';
import {
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';
const catalog = previousCatalogs.find((p) => p.revision === 27)!;
const vocabulary = vocabularyForRevision(27);

test('revision 27 applies the exact October approvals and keeps rare words optional', () => {
  expect(catalog.revision).toBe(27);
  expect(requiredWordsForRevision(27)).toEqual(
    new Set([...requiredWordsForRevision(26), ...review.approvedWords]),
  );
  expect(requiredWordsForRevision(27).size).toBe(1997);
  expect(vocabulary.size).toBe(2115);
  const bonuses = (revision: number) =>
    new Set(
      [...vocabularyForRevision(revision)].filter(
        (w) => !requiredWordsForRevision(revision).has(w),
      ),
    );
  expect(bonuses(27)).toEqual(bonuses(26));
  expect(bonuses(27).size).toBe(118);
  const answers = catalog.levels.flatMap((l) => l.words.map((w) => w.answer));
  expect(answers).toHaveLength(1475);
  expect(new Set(answers).size).toBe(1281);
  for (const w of ['მენჯი', 'მუნჯი', 'ციკანი', 'კალათა', 'კრიჭა', 'ნეკა'])
    expect(requiredWordsForRevision(27).has(w)).toBe(true);
  for (const w of [...review.excludedWords, ...review.notApprovedWords])
    expect(vocabulary.has(w)).toBe(false);
});

test('every October exclusion is rejected in answers, variants and bonuses', () => {
  for (const spelling of review.excludedWords) {
    for (const role of ['answer', 'variant', 'bonus']) {
      const level = catalog.levels[0]!;
      const poisoned = {
        ...level,
        words: level.words.map((word, i) =>
          i
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
          role === 'bonus' ? [...level.bonusWords, spelling] : level.bonusWords,
      };
      expect(() =>
        validateWide(
          { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
          new Set([...vocabulary, spelling]),
          manifest.familiarity,
        ),
      ).toThrow();
    }
  }
});
