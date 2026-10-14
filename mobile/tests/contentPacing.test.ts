import expandedVocabulary from '../../content/dictionaries/expanded-ka.json';
import legacyVocabulary from '../../content/dictionaries/beta-ka.json';
import manifest from '../../content/levels/themed.v4.recipes.json';
import oldManifest from '../../content/levels/themed.v3.recipes.json';
import { catalog, previousCatalogs } from '../src/content/catalog';
import { validatePacing } from '../src/content/pacing';
import type { LevelPack } from '../src/models/types';

function repetition(pack: LevelPack) {
  const targets = pack.levels.flatMap((level) =>
    level.words.map((word) => word.answer),
  );
  const adjacent = pack.levels.reduce(
    (count, level, index) =>
      count +
      level.words.filter((word) =>
        pack.levels[index - 1]?.words.some(
          (previous) => previous.answer === word.answer,
        ),
      ).length,
    0,
  );
  return {
    unique: new Set(targets).size,
    repeats: targets.length - new Set(targets).size,
    adjacent,
  };
}

test('expanded vocabulary has reference attribution and every topic gains playable words', () => {
  expect(
    expandedVocabulary.entries.length - legacyVocabulary.entries.length,
  ).toBe(173);
  const known = new Map(
    legacyVocabulary.entries.map((entry) => [entry.word, entry]),
  );
  for (const entry of expandedVocabulary.entries) {
    expect(entry.sourceUrl).toContain(`oldid=${entry.sourceRevision}`);
    expect(entry.sourceRevision).toBeGreaterThan(0);
    expect(entry.gloss.trim()).not.toBe('');
    expect(entry.reviewStatus).toBe('prototype-reference-checked');
    if (known.has(entry.word)) expect(entry).toEqual(known.get(entry.word));
  }
  for (const topic of manifest.topics) {
    const old = oldManifest.topics.find((item) => item.id === topic.id)!;
    expect(topic.words.length).toBeGreaterThan(old.words.length);
    const levels = catalog.levels.filter(
      (level) => level.chapterId === topic.id,
    );
    expect(levels).toHaveLength(5);
    const introduced = new Set(
      levels
        .flatMap((level) => level.words.map((word) => word.answer))
        .filter((word) => !old.words.includes(word)),
    );
    expect(introduced.size).toBeGreaterThanOrEqual(4);
  }
});

test('the actual campaign adds variety, rather than only expanding unused dictionary entries', () => {
  const old = repetition(previousCatalogs[2]!);
  const current = repetition(catalog);
  expect(current.unique).toBeGreaterThanOrEqual(140);
  expect(current.unique).toBeGreaterThan(old.unique);
  expect(current.repeats).toBeLessThan(old.repeats / 2);
  expect(current.adjacent).toBeLessThanOrEqual(1);
  expect(
    catalog.levels.filter((level) => level.words.length >= 4),
  ).toHaveLength(15);
});

test('difficulty rises within each topic without reducing target count or excessive repetition', () => {
  expect(() => validatePacing(catalog, manifest.familiarity)).not.toThrow();
  for (const topic of catalog.chapters) {
    const levels = catalog.levels.filter(
      (level) => level.chapterId === topic.id,
    );
    expect(levels[0]!.words).toHaveLength(3);
    expect(levels.at(-1)!.words.length).toBeGreaterThanOrEqual(4);
    expect(
      levels.at(-1)!.difficulty.score - levels[0]!.difficulty.score,
    ).toBeGreaterThanOrEqual(15);
    const uses = new Map<string, number>();
    levels.forEach((level, index) => {
      for (const word of level.words)
        uses.set(word.answer, (uses.get(word.answer) ?? 0) + 1);
      if (index > 0) {
        expect(level.difficulty.score).toBeGreaterThan(
          levels[index - 1]!.difficulty.score,
        );
        expect(level.words.length).toBeGreaterThanOrEqual(
          levels[index - 1]!.words.length,
        );
      }
    });
    expect(Math.max(...uses.values())).toBeLessThanOrEqual(2);
  }
});

test('invalid difficulty edits and reversed progression cannot enter the catalog', () => {
  const changed = {
    ...catalog.levels[0]!,
    difficulty: { ...catalog.levels[0]!.difficulty, score: 1 },
  };
  expect(() =>
    validatePacing(
      { ...catalog, levels: [changed, ...catalog.levels.slice(1)] },
      manifest.familiarity,
    ),
  ).toThrow('Difficulty');
  expect(() =>
    validatePacing(
      {
        ...catalog,
        levels: [
          catalog.levels[0]!,
          catalog.levels[2]!,
          catalog.levels[1]!,
          ...catalog.levels.slice(3),
        ],
      },
      manifest.familiarity,
    ),
  ).toThrow('gradually');
  expect(() => validatePacing(catalog, {})).toThrow('familiarity');
});

test('bonuses never give away upcoming answers or repeat the immediately preceding board', () => {
  const used = new Set<string>();
  for (const [index, level] of catalog.levels.entries()) {
    for (const bonus of level.bonusWords) {
      expect(used.has(bonus)).toBe(false);
      const nearbyAndFuture = catalog.levels.slice(Math.max(0, index - 1));
      expect(
        nearbyAndFuture.some((next) =>
          next.words.some((word) => word.answer === bonus),
        ),
      ).toBe(false);
      used.add(bonus);
    }
  }
  expect(used.size).toBeGreaterThan(0);
  const changed = {
    ...catalog.levels[0]!,
    bonusWords: [catalog.levels[1]!.words[0]!.answer],
  };
  expect(() =>
    validatePacing(
      { ...catalog, levels: [changed, ...catalog.levels.slice(1)] },
      manifest.familiarity,
    ),
  ).toThrow('future target');
});
