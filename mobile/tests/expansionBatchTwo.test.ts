import batch from '../../docs/VOCABULARY_EXPANSION_BATCH_02.json';
import {
  catalog,
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { canFormWord } from '../src/engine/georgian';

test('v17 adds exactly the 130 approved senses without changing historical vocabularies', () => {
  const additions = batch.entries.map((entry) => entry.word);
  expect(new Set(additions).size).toBe(130);
  const previous = vocabularyForRevision(16);
  const current = vocabularyForRevision(17);
  expect(previous.size).toBe(1209);
  expect(current).toEqual(new Set([...previous, ...additions]));
  expect(requiredWordsForRevision(17)).toEqual(
    new Set([...requiredWordsForRevision(16), ...additions]),
  );
  expect(requiredWordsForRevision(17).size).toBe(1221);
  for (const entry of batch.entries) {
    expect(entry.ownerDecision).toBe('required-eligible');
    expect(previous.has(entry.word)).toBe(false);
  }
  const historical = previousCatalogs.find((pack) => pack.revision === 17)!;
  const old = previousCatalogs.find((pack) => pack.revision === 16)!;
  const unique = (pack: typeof catalog) =>
    new Set(
      pack.levels.flatMap((level) => level.words.map((word) => word.answer)),
    );
  expect(unique(historical).size).toBeGreaterThan(unique(old).size);
  expect(historical.levels).toHaveLength(240);
  for (const level of historical.levels) {
    const accepted = new Set(
      level.words.flatMap((word) => word.acceptedAnswers),
    );
    expect(new Set(level.bonusWords)).toEqual(
      new Set(
        [...current].filter(
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
