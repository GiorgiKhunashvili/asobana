import batch from '../../docs/VOCABULARY_EXPANSION_BATCH_05.json';
import manifest from '../../content/levels/discovery.v20.recipes.json';
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

const catalog = previousCatalogs().find((pack) => pack.revision === 20)!;
const vocabulary = vocabularyForRevision(20);
const rejected =
  'აქტი ბაგა დომენი დუღაბი ეჟვანი ლაქი პწკარი სამთო ტირიფი ფლანგი ყანჩა ყულფი'.split(
    ' ',
  );

test('v20 approves exactly 88 new words and excludes the 12 rejected proposals', () => {
  const additions = batch.entries
    .filter((entry) => entry.ownerDecision === 'required-eligible')
    .map((entry) => entry.word);
  expect(additions).toHaveLength(88);
  expect(
    new Set(
      batch.entries
        .filter((entry) => entry.ownerDecision === 'excluded')
        .map((entry) => entry.word),
    ),
  ).toEqual(new Set(rejected));
  expect(vocabularyForRevision(19).size).toBe(1599);
  expect(vocabulary).toEqual(
    new Set([...vocabularyForRevision(19), ...additions]),
  );
  expect(requiredWordsForRevision(20)).toEqual(
    new Set([...requiredWordsForRevision(19), ...additions]),
  );
  expect(requiredWordsForRevision(20).size).toBe(1569);
  for (const word of rejected) {
    expect(excludedWordsForRevision(19).has(word)).toBe(false);
    expect(excludedWordsForRevision(20).has(word)).toBe(true);
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

test('v20 uses more distinct words while recognizing every eligible formable bonus', () => {
  const old = previousCatalogs().find((pack) => pack.revision === 19)!;
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
