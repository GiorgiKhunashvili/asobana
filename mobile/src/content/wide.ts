import journey from '../../../content/journey-v13.json';
import type { Level, LevelPack } from '../models/types';
import { solutionCells } from '../engine/grid';
import { ContentError, parsePack } from '../engine/validation';
import { validateDiscovery } from './discovery';
import {
  requiredWordsForRevision,
  excludedWordsForRevision,
} from './wordPolicy';

export const BOARD_AREAS = {
  'iPhone SE': [351, 224],
  'iPhone 17': [378, 335],
  'iPhone 17 Pro Max': [416, 392],
  'iPad Pro 11': [520, 672],
} as const;

/** Content projection: deliberately independent of Claude-owned UI code. */
export function projectBoard(
  grid: Level['grid'],
  device: keyof typeof BOARD_AREAS,
) {
  const [width, height] = BOARD_AREAS[device];
  const { rows, columns } = grid;
  const cell = Math.min(
    84,
    (width - 4 * (columns - 1)) / columns,
    (height - 4 * (rows - 1)) / rows,
  );
  const renderedCell = Math.max(26, Math.floor(cell));
  return {
    cell,
    widthPercent: (100 * (columns * cell + 4 * (columns - 1))) / width,
    renderedCell,
    renderedWidthPercent:
      (100 * (columns * renderedCell + 4 * (columns - 1))) / width,
  };
}

export function validateWide(
  pack: LevelPack,
  vocabulary: ReadonlySet<string>,
  familiarity: Readonly<Record<string, number>>,
): void {
  const excludedWords = excludedWordsForRevision(pack.revision);
  const everydayRequiredWords = requiredWordsForRevision(pack.revision);
  if (
    pack.id !== 'geowords-prototype' ||
    ![6, 7, 8, 9, 10, 11, 12, 13].includes(pack.revision)
  )
    throw new ContentError(
      'Wide campaign requires stable pack identity and revision 6, 7, 8, 9, 10, 11, 12 or 13',
    );
  const chapterIds = [
    'weather',
    'animals',
    'family',
    'body',
    'plants',
    'landscape',
    'food',
    'home',
    'numbers',
    'music',
  ];
  if (
    pack.chapters.map((chapter) => chapter.id).join(',') !==
    (pack.revision >= 13
      ? journey.chapters.map((chapter) => chapter.id)
      : chapterIds
    ).join(',')
  )
    throw new ContentError('Chapter IDs/order changed');
  if (
    pack.revision >= 13 &&
    pack.chapters.some(
      (chapter, index) => chapter.title !== journey.chapters[index]?.title,
    )
  )
    throw new ContentError('Journey chapter titles changed');
  if (
    pack.revision >= 7 &&
    pack.levels.some((level) =>
      [
        ...level.words.flatMap((word) => [
          word.answer,
          ...word.acceptedAnswers,
        ]),
        ...level.bonusWords,
      ].some((word) => excludedWords.has(word)),
    )
  )
    throw new ContentError(
      'Pronouns, verb/action forms, name-only entries, barbarisms and owner exclusions are excluded from targets and bonuses',
    );
  validateDiscovery(pack, vocabulary, familiarity);
  if (pack.revision >= 10) {
    for (let start = 0; start < pack.levels.length; start += 5) {
      const scores = pack.levels
        .slice(start, start + 5)
        .map((level) => level.difficulty.score);
      if (scores[2] !== Math.max(...scores) || scores[2]! - scores[3]! < 2)
        throw new ContentError(
          'Each chapter needs a challenge followed by recovery',
        );
    }
    if (
      pack.levels.some(
        (level, index) =>
          index > 0 &&
          level.difficulty.score - pack.levels[index - 1]!.difficulty.score >
            10,
      )
    )
      throw new ContentError('Pacing jump exceeds ten points');
  }
  for (const [index, level] of pack.levels.entries()) {
    const { rows, columns } = level.grid;
    if (columns < 5 || columns > 7 || rows > Math.floor(columns / 1.15))
      throw new ContentError(`${level.id}: board must be wide`);
    if (index >= 5 && columns < 6)
      throw new ContentError(
        'Five-column introduction boards only belong in levels 1–5',
      );
    if (projectBoard(level.grid, 'iPhone SE').cell < 36)
      throw new ContentError(`${level.id}: SE cells below 36 pt`);
    // This release needs no two-letter connector exceptions.
    if (
      level.words.some(
        (word) => word.answer.length < 3 || word.answer.length > 6,
      )
    )
      throw new ContentError(
        'Wide targets must be 3–6 letters; no two-letter targets',
      );
    const cells = solutionCells(level);
    if (
      Math.min(...cells.map((cell) => cell.row)) !== 0 ||
      Math.max(...cells.map((cell) => cell.row)) !== rows - 1 ||
      Math.min(...cells.map((cell) => cell.column)) !== 0 ||
      Math.max(...cells.map((cell) => cell.column)) !== columns - 1
    )
      throw new ContentError('Wide bounding box must be tight');
    const density = cells.length / (rows * columns);
    if (density < 0.35 || density > 0.65)
      throw new ContentError('Wide crossword density must be 35–65%');
  }
  const firstSix = pack.levels.findIndex((level) => level.tiles.length === 6);
  if (
    pack.revision < 11 &&
    (firstSix !== 21 || pack.levels[firstSix]!.difficulty.score >= 65)
  )
    throw new ContentError(
      'Introduce six tiles at level 22 below hard difficulty',
    );
  const answers = pack.levels.flatMap((level) =>
    level.words.map((word) => word.answer),
  );
  if (
    answers.filter((word) => word.length >= 4 && word.length <= 5).length <=
    answers.length / 2
  )
    throw new ContentError('Most targets must be four or five letters');
  if (pack.revision >= 11) validateWordLengths(pack);
  if (
    pack.revision >= 12 &&
    pack.levels.some((level) =>
      level.words.some((word) =>
        word.acceptedAnswers.some(
          (answer) => !everydayRequiredWords.has(answer),
        ),
      ),
    )
  )
    throw new ContentError(
      'Required answers must use the everyday-word allowlist',
    );
  // Enforce crossing connectivity and unlisted runs even outside the catalog loader.
  parsePack(pack, vocabulary, false);
}

export function printProjections(pack: LevelPack): void {
  for (const level of pack.levels) {
    const sizes = (['iPhone 17', 'iPhone SE'] as const).map((device) => {
      const p = projectBoard(level.grid, device);
      return (
        `${device}: ${p.cell.toFixed(2)} pt / ${p.widthPercent.toFixed(2)}% ` +
        `(rounded ${p.renderedCell} pt / ${p.renderedWidthPercent.toFixed(2)}%)`
      );
    });
    console.log(
      `${level.id} ${level.grid.columns}×${level.grid.rows} | ${sizes.join(' | ')}`,
    );
  }
}

/** Check answer lengths explicitly: six tiles do not imply a six-letter answer. */
export function validateWordLengths(pack: LevelPack): void {
  const lengths = pack.levels.map((level) =>
    level.words.map((word) => word.answer.length),
  );
  if (lengths.slice(0, 15).some((sizes) => sizes.includes(6)))
    throw new ContentError('Six-letter answers begin in levels 16–25');
  if (!lengths.slice(0, 5).some((sizes) => sizes.includes(5)))
    throw new ContentError(
      'Introduce a five-letter answer in the first chapter',
    );
  lengths.forEach((sizes, index) => {
    const minimum = index < 5 ? 0 : index < 25 ? 1 : 2;
    if (sizes.filter((size) => size >= 5).length < minimum)
      throw new ContentError(
        `${pack.levels[index]!.id}: missing longer answers for its stage`,
      );
  });
  for (const [start, end, minimum] of [
    [15, 25, 4],
    [25, 40, 8],
    [40, 50, 7],
  ] as const)
    if (
      lengths.slice(start, end).filter((sizes) => sizes.includes(6)).length <
      minimum
    )
      throw new ContentError('Stage needs more six-letter answers');
  if (pack.revision >= 13) {
    for (let start = 50; start < lengths.length; start += 5)
      if (
        lengths.slice(start, start + 5).filter((sizes) => sizes.includes(6))
          .length < 1
      )
        throw new ContentError(
          'Journey stops need at least one six-letter board',
        );
  }
}
