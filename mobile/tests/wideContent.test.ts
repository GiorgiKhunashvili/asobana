import { discoveryDifficulty } from '../src/content/discovery';
import manifest from '../../content/levels/discovery.v29.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { projectBoard, validateWide } from '../src/content/wide';
import { solutionCells } from '../src/engine/grid';
import type { Level } from '../src/models/types';

test('the journey preserves historical level IDs in order while assigning the new stops', () => {
  const previous = previousCatalogs[11]!;
  expect(previous.revision).toBe(12);
  expect(catalog.levels.slice(0, 50).map((level) => level.id)).toEqual(
    previous.levels.map((level) => level.id),
  );
  expect(catalog.chapters).toHaveLength(100);
  expect(catalog.chapters[0]!.id).toBe('tbilisi');
});

test('every board fills both large phones, stays legible on SE and contains only longer targets', () => {
  for (const level of catalog.levels) {
    for (const device of ['iPhone 17', 'iPhone 17 Pro Max'] as const) {
      expect(projectBoard(level.grid, device).widthPercent).toBeCloseTo(100);
      expect(
        projectBoard(level.grid, device).renderedWidthPercent,
      ).toBeGreaterThanOrEqual(98);
    }
    expect(
      projectBoard(level.grid, 'iPhone SE').renderedCell,
    ).toBeGreaterThanOrEqual(36);
    expect(
      level.words.every(
        (word) => word.answer.length >= 3 && word.answer.length <= 6,
      ),
    ).toBe(true);
    const cells = solutionCells(level);
    for (const word of level.words)
      expect(
        cells.some(
          (cell) => cell.wordIds.includes(word.id) && cell.wordIds.length === 2,
        ),
      ).toBe(true);
  }
});

test('projection catches the SE 7×6 trap and distinguishes renderer rounding', () => {
  expect(projectBoard({ columns: 7, rows: 6 }, 'iPhone SE').renderedCell).toBe(
    34,
  );
  expect(projectBoard({ columns: 7, rows: 5 }, 'iPhone SE').cell).toBeCloseTo(
    41.6,
  );
  expect(projectBoard({ columns: 7, rows: 5 }, 'iPhone 17').cell).toBeCloseTo(
    354 / 7,
  );
  expect(
    projectBoard({ columns: 4, rows: 7 }, 'iPhone 17').widthPercent,
  ).toBeLessThan(51);
});

const first = catalog.levels[0]!;
function check(level: Level) {
  validateWide(
    { ...catalog, levels: [level, ...catalog.levels.slice(1)] },
    vocabulary,
    manifest.familiarity,
  );
}

test('shape, SE size and empty border regressions fail the release gate', () => {
  expect(() => check({ ...first, grid: { columns: 4, rows: 7 } })).toThrow(
    'wide',
  );
  expect(() => check({ ...first, grid: { columns: 7, rows: 6 } })).toThrow(
    '36 pt',
  );
  const borderBase = catalog.levels.find(
    (level) => level.grid.rows < 5 && level.grid.columns >= 6,
  )!;
  expect(() =>
    validateWide(
      {
        ...catalog,
        levels: catalog.levels.map((level) =>
          level.id === borderBase.id
            ? {
                ...level,
                grid: { ...level.grid, rows: level.grid.rows + 1 },
                words: level.words.map((word) => ({
                  ...word,
                  row: word.row + 1,
                })),
              }
            : level,
        ),
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('tight');
});

test('a separated word cannot pass the wide release gate', () => {
  const level = catalog.levels[21]!;
  const moved = level.words.find((word) => word.direction === 'across')!;
  // Move a real placed word so its crossings become invalid on any reviewed layout.
  const words = level.words.map((word) =>
    word.id === moved.id
      ? { ...word, row: (word.row + 1) % level.grid.rows }
      : word,
  );
  expect(words).not.toEqual(level.words);
  expect(() =>
    validateWide(
      {
        ...catalog,
        levels: catalog.levels.map((entry) =>
          entry.id === level.id ? { ...level, words } : entry,
        ),
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow();
});

test('a two-letter answer cannot be smuggled in as a registered accidental run', () => {
  // Shortening a target lowers its difficulty by two. Keep chapter pacing valid
  // so the fixture reaches the target-length gate rather than a pacing error.
  const base = catalog.levels.find(
    (level, index) =>
      index % 5 !== 2 &&
      (catalog.levels[index + 1]?.difficulty.score ?? 0) <=
        level.difficulty.score + 8 &&
      level.words.some((word) => word.answer === 'აბი'),
  )!;
  expect(base).toBeDefined();
  const words = base.words.map((word) =>
    word.answer === 'აბი'
      ? { ...word, answer: 'ია', acceptedAnswers: ['ია'] }
      : word,
  );
  const familiarity = { ...manifest.familiarity, ია: 1 };
  const level = {
    ...base,
    words,
    bonusWords: base.bonusWords
      .filter((word) => word !== 'ია')
      .concat('აბი')
      .sort(),
  };
  const difficulty = discoveryDifficulty(level, familiarity, catalog.revision);
  expect(() =>
    validateWide(
      {
        ...catalog,
        levels: catalog.levels.map((entry) =>
          entry.id === base.id ? { ...level, difficulty } : entry,
        ),
      },
      vocabulary,
      familiarity,
    ),
  ).toThrow('no two-letter targets');
});
