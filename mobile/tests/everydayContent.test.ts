import review from '../../content/dictionaries/everyday-targets-v12.json';
import ownerReview from '../../content/dictionaries/everyday-targets-v16.json';
import oldManifest from '../../content/levels/discovery.v11.recipes.json';
import manifest from '../../content/levels/discovery.v31.recipes.json';
import {
  catalog,
  previousCatalogs,
  vocabulary,
  vocabularyForRevision,
} from '../src/content/catalog';
import {
  everydayRequiredWords,
  excludedWords,
  excludedRequiredWordsForRevision,
  requiredWordsForRevision,
} from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';
import { hitTest, layoutWheel } from '../src/engine/wheel';
import { reachLevel, submit } from './helpers';

test('every previous answer has an explicit review and every new answer is approved', () => {
  const previousAnswers = previousCatalogs()[10]!
    .levels.flatMap((level) => level.words.map((word) => word.answer))
    .sort();
  expect(
    review.previousCampaignReview.map((entry) => entry.word).sort(),
  ).toEqual(previousAnswers);
  expect(new Set(review.entries.map((entry) => entry.word)).size).toBe(
    review.entries.length,
  );
  const demoted = review.previousCampaignReview
    .filter((entry) => entry.decision === 'bonus-only')
    .map((entry) => entry.word);
  expect(demoted).toHaveLength(88);
  for (const word of [...demoted, 'ურცი', 'რაზა', 'თელა']) {
    expect(requiredWordsForRevision(12).has(word)).toBe(false);
    if (everydayRequiredWords.has(word))
      expect(ownerReview.ownerReview.approvedBonusWords).toContain(word);
    expect(vocabulary.has(word)).toBe(!excludedWords.has(word));
  }
  for (const word of ['ურცი', 'რაზა', 'თელა'])
    expect(everydayRequiredWords.has(word)).toBe(false);
  for (const word of everydayRequiredWords) {
    expect(vocabulary.has(word)).toBe(true);
    expect(excludedWords.has(word)).toBe(false);
  }
  const answers = catalog.levels.flatMap((level) =>
    level.words.flatMap((word) => word.acceptedAnswers),
  );
  expect(answers).toHaveLength(2500);
  expect(new Set(answers).size).toBeGreaterThanOrEqual(375);
  expect(answers.every((answer) => everydayRequiredWords.has(answer))).toBe(
    true,
  );
  // Old puzzles cannot silently pass a new release just because their words exist.
  expect(() =>
    validateWide(
      { ...previousCatalogs()[10]!, revision: 12 },
      vocabularyForRevision(12),
      oldManifest.familiarity,
    ),
  ).toThrow('everyday-word allowlist');
});

test('rare valid words earn optional bonus rewards but cannot become required variants', () => {
  const index = catalog.levels.findIndex((level) =>
    level.bonusWords.some(
      (word) =>
        !everydayRequiredWords.has(word) &&
        !excludedRequiredWordsForRevision(catalog.revision).has(word),
    ),
  );
  expect(index).toBeGreaterThanOrEqual(0);
  const level = catalog.levels[index]!;
  const bonus = level.bonusWords.find(
    (word) =>
      !everydayRequiredWords.has(word) &&
      !excludedRequiredWordsForRevision(catalog.revision).has(word),
  )!;
  const before = reachLevel(index);
  const result = submit(before, level, bonus);
  expect(result.events).toContainEqual({
    type: 'bonus-found',
    word: bonus,
    reward: 3,
  });
  expect(result.state.coins).toBe(before.coins + 3);
  expect(result.state.progress[level.id]!.solvedWordIds).toEqual([]);
  expect(submit(result.state, level, bonus).state).toBe(result.state);
  expect(() =>
    validateWide(
      {
        ...catalog,
        levels: catalog.levels.map((entry, i) =>
          i === index
            ? {
                ...entry,
                words: entry.words.map((word, n) =>
                  n === 0
                    ? {
                        ...word,
                        acceptedAnswers: [...word.acceptedAnswers, bonus],
                      }
                    : word,
                ),
              }
            : entry,
        ),
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('everyday-word allowlist');
});

test('seven-tile wheels start after level 25 and retain distinct 44-point touch targets', () => {
  expect(
    catalog.levels.slice(0, 25).every((level) => level.tiles.length <= 6),
  ).toBe(true);
  const later = catalog.levels.filter((level) => level.tiles.length === 7);
  expect(later.length).toBeGreaterThan(0);
  for (const level of later) {
    const layout = layoutWheel(level.tiles, 245);
    for (const tile of layout) {
      expect(2 * tile.radius).toBeGreaterThanOrEqual(44);
      expect(hitTest(tile, layout)).toBe(tile.id);
      expect(tile.x - tile.radius).toBeGreaterThanOrEqual(0);
      expect(tile.x + tile.radius).toBeLessThanOrEqual(245);
      expect(tile.y - tile.radius).toBeGreaterThanOrEqual(0);
      expect(tile.y + tile.radius).toBeLessThanOrEqual(245);
      for (const other of layout.filter((other) => other.id !== tile.id))
        expect(Math.hypot(tile.x - other.x, tile.y - other.y)).toBeGreaterThan(
          tile.radius + other.radius,
        );
    }
  }
});
