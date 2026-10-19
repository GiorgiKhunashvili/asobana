import batch from '../../docs/VOCABULARY_EXPANSION_BATCH_04.json';
import manifest from '../../content/levels/discovery.v19.recipes.json';
import {
  catalog as activeCatalog,
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import {
  excludedWordsForRevision,
  requiredWordsForRevision,
} from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';
import { canFormWord } from '../src/engine/georgian';

const catalog = previousCatalogs.find((pack) => pack.revision === 19)!;
const vocabulary = vocabularyForRevision(19);
const rejected =
  'აირი ბოხი ზეპირი მოდემი მოვალე მტრული რძიანი საცალო საცოლე სიდიდე სრიალა უგონო უშაქრო უცხიმო უძირო უძლური შაურმა ცვლადი წრიული'.split(
    ' ',
  );

test('v19 approves exactly 129 new words and excludes the 19 rejected proposals', () => {
  const additions = batch.entries
    .filter((entry) => entry.ownerDecision === 'required-eligible')
    .map((entry) => entry.word);
  expect(additions).toHaveLength(129);
  expect(
    new Set(
      batch.entries
        .filter((entry) => entry.ownerDecision === 'excluded')
        .map((entry) => entry.word),
    ),
  ).toEqual(new Set(rejected));
  expect(vocabularyForRevision(18).size).toBe(1470);
  expect(vocabulary).toEqual(
    new Set([...vocabularyForRevision(18), ...additions]),
  );
  expect(requiredWordsForRevision(19)).toEqual(
    new Set([...requiredWordsForRevision(18), ...additions]),
  );
  expect(requiredWordsForRevision(19).size).toBe(1481);
  for (const word of rejected) {
    expect(excludedWordsForRevision(18).has(word)).toBe(false);
    expect(excludedWordsForRevision(19).has(word)).toBe(true);
    expect(vocabulary.has(word)).toBe(false);
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
          new Set([...vocabulary, ...rejected]),
          manifest.familiarity,
        ),
      ).toThrow('owner exclusions');
    }
  }
});

test('v19 uses more distinct words while recognizing every eligible formable bonus', () => {
  const old = previousCatalogs.find((pack) => pack.revision === 18)!;
  const unique = (pack: typeof activeCatalog) =>
    new Set(
      pack.levels.flatMap((level) => level.words.map((word) => word.answer)),
    );
  expect(unique(catalog).size).toBeGreaterThan(unique(old).size);
  expect(catalog.levels).toHaveLength(240);
  for (const level of catalog.levels) {
    const accepted = new Set(
      level.words.flatMap((word) => word.acceptedAnswers),
    );
    expect(new Set(level.bonusWords)).toEqual(
      new Set(
        [...vocabulary].filter(
          (word) =>
            !accepted.has(word) &&
            canFormWord(
              word,
              level.tiles.map((tile) => tile.letter),
            ),
        ),
      ),
    );
  }
});
