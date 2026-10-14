import type { CrosswordWord, Level } from '../models/types';
export interface SolutionCell {
  id: string;
  row: number;
  column: number;
  letter: string;
  wordIds: string[];
  directions: CrosswordWord['direction'][];
}
export function cellId(row: number, column: number): string {
  return `${row}:${column}`;
}
export function wordCells(
  word: CrosswordWord,
): { id: string; row: number; column: number; letter: string }[] {
  return Array.from(word.answer).map((letter, index) => {
    const row = word.row + (word.direction === 'down' ? index : 0);
    const column = word.column + (word.direction === 'across' ? index : 0);
    return { id: cellId(row, column), row, column, letter };
  });
}
export function solutionCells(level: Level): SolutionCell[] {
  const cells = new Map<string, SolutionCell>();
  for (const word of level.words) {
    for (const cell of wordCells(word)) {
      const existing = cells.get(cell.id);
      if (existing) {
        existing.wordIds.push(word.id);
        existing.directions.push(word.direction);
      } else
        cells.set(cell.id, {
          ...cell,
          wordIds: [word.id],
          directions: [word.direction],
        });
    }
  }
  return [...cells.values()].sort(
    (a, b) => a.row - b.row || a.column - b.column,
  );
}
