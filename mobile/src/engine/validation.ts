import type { Level, LevelPack } from '../models/types';
import { canFormWord, isGeorgianWord, normalizeWord } from './georgian';
import { wordCells } from './grid';

export class ContentError extends Error {}
export function object(value: unknown, name: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new ContentError(`${name}: expected object`);
  return value as Record<string, unknown>;
}
export function array(value: unknown, name: string): unknown[] {
  if (!Array.isArray(value)) throw new ContentError(`${name}: expected array`);
  return value;
}
export function string(value: unknown, name: string): string {
  if (typeof value !== 'string' || !value.trim())
    throw new ContentError(`${name}: expected nonempty string`);
  return value;
}
export function integer(
  value: unknown,
  name: string,
  min = 0,
  max = 1_000_000_000,
): number {
  if (
    typeof value !== 'number' ||
    !Number.isSafeInteger(value) ||
    value < min ||
    value > max
  )
    throw new ContentError(`${name}: invalid integer`);
  return value;
}
export function boolean(value: unknown, name: string): boolean {
  if (typeof value !== 'boolean')
    throw new ContentError(`${name}: expected boolean`);
  return value;
}
export function unique(values: readonly string[], name: string): void {
  if (new Set(values).size !== values.length)
    throw new ContentError(`${name}: duplicate values`);
}
function identifier(value: unknown, name: string): string {
  const id = string(value, name);
  if (!/^[a-z0-9][a-z0-9-]{0,63}$/.test(id))
    throw new ContentError(`${name}: invalid ID`);
  return id;
}
export function parseLevel(
  value: unknown,
  vocabulary: ReadonlySet<string>,
): Level {
  const raw = object(value, 'level');
  if (raw.schemaVersion !== 1)
    throw new ContentError('Unsupported level schema');
  const grid = object(raw.grid, 'grid');
  const difficulty = object(raw.difficulty, 'difficulty');
  const hints = object(raw.hints, 'hints');
  const tiles = array(raw.tiles, 'tiles').map((value) => {
    const tile = object(value, 'tile');
    const letter = string(tile.letter, 'letter');
    if (!isGeorgianWord(letter, 1, 1) || normalizeWord(letter) !== letter)
      throw new ContentError('Tile must be one canonical Georgian letter');
    return { id: identifier(tile.id, 'tile.id'), letter };
  });
  if (tiles.length < 2 || tiles.length > 8)
    throw new ContentError('Wheel requires 2–8 tiles');
  unique(
    tiles.map((tile) => tile.id),
    'tile IDs',
  );
  const words = array(raw.words, 'words').map((value) => {
    const word = object(value, 'word');
    const answer = string(word.answer, 'answer');
    if (
      !isGeorgianWord(answer) ||
      normalizeWord(answer) !== answer ||
      !vocabulary.has(answer)
    )
      throw new ContentError(`Unverified target: ${answer}`);
    const acceptedAnswers = array(word.acceptedAnswers, 'acceptedAnswers').map(
      (answer) => string(answer, 'accepted answer'),
    );
    // v1 deliberately supports only the exact grid spelling; aliases need a future schema.
    if (acceptedAnswers.length !== 1 || acceptedAnswers[0] !== answer)
      throw new ContentError('Accepted answer must equal grid spelling');
    if (word.direction !== 'across' && word.direction !== 'down')
      throw new ContentError('Invalid direction');
    return {
      id: identifier(word.id, 'word.id'),
      answer,
      acceptedAnswers,
      direction: word.direction as 'across' | 'down',
      row: integer(word.row, 'row', 0, 19),
      column: integer(word.column, 'column', 0, 19),
    };
  });
  if (!words.length || words.length > 30)
    throw new ContentError('Level requires 1–30 words');
  unique(
    words.map((word) => word.id),
    'word IDs',
  );
  unique(
    words.map((word) => word.answer),
    'answers',
  );
  const bonusWords = array(raw.bonusWords, 'bonusWords').map((value) =>
    string(value, 'bonus word'),
  );
  unique(bonusWords, 'bonus words');
  for (const word of [...words.map((word) => word.answer), ...bonusWords]) {
    if (
      !isGeorgianWord(word) ||
      normalizeWord(word) !== word ||
      !vocabulary.has(word) ||
      !canFormWord(
        word,
        tiles.map((tile) => tile.letter),
      )
    )
      throw new ContentError(`Unplayable word: ${word}`);
  }
  if (bonusWords.some((bonus) => words.some((word) => word.answer === bonus)))
    throw new ContentError('Target cannot also be bonus');
  if (!['easy', 'medium', 'hard'].includes(String(difficulty.tier)))
    throw new ContentError('Invalid difficulty tier');
  if (
    !['prototype-reference-checked', 'generated-draft'].includes(
      String(raw.reviewStatus),
    )
  )
    throw new ContentError('Invalid review status');
  const level: Level = {
    schemaVersion: 1,
    id: identifier(raw.id, 'level.id'),
    chapterId: identifier(raw.chapterId, 'chapterId'),
    title: string(raw.title, 'title'),
    tiles,
    grid: {
      rows: integer(grid.rows, 'rows', 1, 20),
      columns: integer(grid.columns, 'columns', 1, 20),
    },
    words,
    bonusWords,
    difficulty: {
      tier: difficulty.tier as Level['difficulty']['tier'],
      score: integer(difficulty.score, 'score', 0, 100),
    },
    hints: {
      allowCell: boolean(hints.allowCell, 'allowCell'),
      allowWord: boolean(hints.allowWord, 'allowWord'),
    },
    reviewStatus: raw.reviewStatus as Level['reviewStatus'],
  };
  const cells = new Map<
    string,
    { letter: string; direction: string; wordId: string }[]
  >();
  const neighbors = new Map(words.map((word) => [word.id, new Set<string>()]));
  for (const word of words)
    for (const cell of wordCells(word)) {
      if (cell.row >= level.grid.rows || cell.column >= level.grid.columns)
        throw new ContentError('Word outside grid');
      const occupants = cells.get(cell.id) ?? [];
      for (const occupant of occupants) {
        if (occupant.letter !== cell.letter)
          throw new ContentError('Conflicting intersection');
        if (occupant.direction === word.direction)
          throw new ContentError('Overlapping parallel words');
        neighbors.get(word.id)?.add(occupant.wordId);
        neighbors.get(occupant.wordId)?.add(word.id);
      }
      occupants.push({
        letter: cell.letter,
        direction: word.direction as 'across' | 'down',
        wordId: word.id,
      });
      cells.set(cell.id, occupants);
    }
  const first = words[0];
  const connected = new Set<string>();
  const visit = (id: string): void => {
    if (connected.has(id)) return;
    connected.add(id);
    neighbors.get(id)?.forEach(visit);
  };
  if (first) visit(first.id);
  if (connected.size !== words.length)
    throw new ContentError('Disconnected crossword');
  // No unlisted runs/side contacts: each horizontal or vertical run of 2+ cells is a target.
  for (const direction of ['across', 'down'] as const)
    for (const key of cells.keys()) {
      const [row = 0, column = 0] = key.split(':').map(Number);
      const dr = direction === 'down' ? 1 : 0,
        dc = direction === 'across' ? 1 : 0;
      if (cells.has(`${row - dr}:${column - dc}`)) continue;
      let length = 0;
      while (cells.has(`${row + dr * length}:${column + dc * length}`))
        length++;
      if (
        length > 1 &&
        !words.some(
          (word) =>
            word.direction === direction &&
            word.row === row &&
            word.column === column &&
            Array.from(word.answer).length === length,
        )
      )
        throw new ContentError('Unlisted crossword run or side contact');
    }
  return level;
}
export function parsePack(
  value: unknown,
  vocabulary: ReadonlySet<string>,
  playable = true,
): LevelPack {
  const raw = object(value, 'pack');
  if (raw.schemaVersion !== 1)
    throw new ContentError('Unsupported pack schema');
  const chapters = array(raw.chapters, 'chapters').map((value) => {
    const chapter = object(value, 'chapter');
    return {
      id: identifier(chapter.id, 'chapter.id'),
      title: string(chapter.title, 'chapter.title'),
    };
  });
  unique(
    chapters.map((chapter) => chapter.id),
    'chapter IDs',
  );
  const levels = array(raw.levels, 'levels').map((level) =>
    parseLevel(level, vocabulary),
  );
  if (!levels.length) throw new ContentError('Empty level pack');
  unique(
    levels.map((level) => level.id),
    'level IDs',
  );
  for (const level of levels) {
    if (!chapters.some((chapter) => chapter.id === level.chapterId))
      throw new ContentError('Unknown chapter');
    if (playable && level.reviewStatus === 'generated-draft')
      throw new ContentError('Draft content cannot be played');
  }
  if (
    chapters.some(
      (chapter) => !levels.some((level) => level.chapterId === chapter.id),
    )
  )
    throw new ContentError('Empty chapter');
  return {
    schemaVersion: 1,
    id: identifier(raw.id, 'pack.id'),
    revision: integer(raw.revision, 'revision', 1),
    chapters,
    levels,
  };
}
