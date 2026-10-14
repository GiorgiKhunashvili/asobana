import type { BoardMoment } from '../components/CrosswordBoard';
import type { StripFeedback } from '../components/WordStrip';
import type {
  CrosswordCell,
  GameEvent,
  RejectionReason,
} from '../models/types';
import type { EventBatch } from '../state/createGameStore';
import { motion } from '../theme';

const NOTICE: Partial<Record<RejectionReason, string>> = {
  'insufficient-coins': 'მონეტები არ გყოფნის',
  'hint-unavailable': 'მინიშნება ახლა მიუწვდომელია',
  'level-locked': 'ეს დონე ჯერ ჩაკეტილია',
  'level-complete': 'დონე უკვე გავლილია',
};

function find<T extends GameEvent['type']>(
  events: readonly GameEvent[],
  type: T,
): Extract<GameEvent, { type: T }> | undefined {
  return events.find((event) => event.type === type) as
    Extract<GameEvent, { type: T }> | undefined;
}

/** Order along a word: rows grow downward, columns rightward. */
const byPosition = (a: CrosswordCell, b: CrosswordCell) =>
  a.row + a.column - (b.row + b.column) || a.row - b.row;

/** Cells of a fully visible word spelling `word`, using only UI-facing cells. */
export function cellsSpelling(
  cells: readonly CrosswordCell[],
  word: string,
): string[] {
  const words = new Map<string, CrosswordCell[]>();
  for (const cell of cells)
    for (const id of cell.wordIds)
      words.set(id, [...(words.get(id) ?? []), cell]);
  for (const members of words.values()) {
    const ordered = [...members].sort(byPosition);
    if (ordered.map((cell) => cell.letter ?? '\u0000').join('') === word)
      return ordered.map((cell) => cell.id);
  }
  return [];
}

export function boardMoment(
  batch: EventBatch,
  cells: readonly CrosswordCell[],
): BoardMoment | null {
  const revealed = find(batch.events, 'cells-revealed');
  const rejected = find(batch.events, 'word-rejected');
  const celebrate = Boolean(find(batch.events, 'level-completed'));
  const byId = new Map(cells.map((cell) => [cell.id, cell]));
  const fired = (revealed?.cellIds ?? [])
    .map((id) => byId.get(id))
    .filter((cell): cell is CrosswordCell => Boolean(cell))
    .sort(byPosition)
    .map((cell) => cell.id);
  const remind =
    rejected?.reason === 'duplicate-word'
      ? cellsSpelling(cells, rejected.word)
      : [];
  if (!fired.length && !remind.length && !celebrate) return null;
  return {
    sequence: batch.sequence,
    revealed: fired,
    source: revealed?.source ?? 'word',
    remind,
    celebrate,
  };
}

export function stripFeedback(batch: EventBatch): StripFeedback | null {
  const key = batch.sequence;
  const bonus = find(batch.events, 'bonus-found');
  if (bonus)
    return {
      key,
      kind: 'bonus',
      word: bonus.word,
      caption: `ბონუს სიტყვა +${bonus.reward}`,
    };
  const found = find(batch.events, 'word-found');
  if (found)
    return find(batch.events, 'hint-used')
      ? { key, kind: 'found', word: found.word, caption: 'მინიშნებით' }
      : { key, kind: 'found', word: found.word };
  const rejected = find(batch.events, 'word-rejected');
  if (!rejected) return null;
  if (rejected.reason === 'duplicate-word')
    return {
      key,
      kind: 'duplicate',
      word: rejected.word,
      caption: 'უკვე ნაპოვნია',
    };
  if (rejected.reason === 'invalid-word')
    return {
      key,
      kind: 'invalid',
      word: rejected.word,
      caption: 'ეს სიტყვა აქ არ არის',
    };
  return {
    key,
    kind: 'notice',
    caption: NOTICE[rejected.reason] ?? 'სცადე თავიდან',
  };
}

/** How long the board needs to finish firing and celebrating before victory. */
export function celebrationLength(
  moment: BoardMoment | null,
  grid: { readonly rows: number; readonly columns: number },
): number {
  const reveal =
    Math.max(0, (moment?.revealed.length ?? 1) - 1) * motion.cellStagger +
    motion.revealSettle;
  const wave = (grid.rows + grid.columns - 2) * motion.waveStagger;
  return reveal + wave + motion.victoryPause;
}
