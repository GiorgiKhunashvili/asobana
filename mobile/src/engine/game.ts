import type {
  Economy,
  GameCommand,
  GameEvent,
  GameState,
  Level,
  LevelPack,
  LevelProgress,
  RejectionReason,
  Transition,
} from '../models/types';
import { solutionCells, wordCells } from './grid';
import { isGeorgianWord, normalizeWord } from './georgian';
import { BONUS_GOAL, freeCellHints } from './bonusRewards';
export const DEFAULT_ECONOMY: Economy = Object.freeze({
  initialCoins: 100,
  completionReward: 25,
  bonusReward: 3,
  cellHintCost: 15,
  wordHintCost: 40,
});
export function emptyProgress(): LevelProgress {
  return {
    solvedWordIds: [],
    revealedCellIds: [],
    bonusWords: [],
    hintsUsed: 0,
    completed: false,
  };
}
export function initialState(
  pack: LevelPack,
  economy: Economy = DEFAULT_ECONOMY,
): GameState {
  const first = pack.levels[0];
  if (!first) throw new Error('Empty pack');
  return {
    schemaVersion: 1,
    packId: pack.id,
    contentRevision: pack.revision,
    currentLevelId: first.id,
    coins: economy.initialCoins,
    bonusRewards: { totalFound: 0, hintsSpent: 0 },
    progress: {},
    settings: { sound: true, haptics: true },
  };
}
export function isUnlocked(
  state: GameState,
  pack: LevelPack,
  levelId: string,
): boolean {
  const index = pack.levels.findIndex((level) => level.id === levelId);
  return (
    index >= 0 &&
    pack.levels
      .slice(0, index)
      .every((level) => state.progress[level.id]?.completed)
  );
}
export function nextLevelId(pack: LevelPack, levelId: string): string | null {
  const index = pack.levels.findIndex((level) => level.id === levelId);
  return index < 0 ? null : (pack.levels[index + 1]?.id ?? null);
}
export function revealedCells(
  level: Level,
  progress: LevelProgress,
): Set<string> {
  const ids = new Set(progress.revealedCellIds);
  for (const word of level.words)
    if (progress.solvedWordIds.includes(word.id))
      for (const cell of wordCells(word)) ids.add(cell.id);
  return ids;
}
function reject(
  state: GameState,
  reason: RejectionReason,
  word = '',
): Transition {
  return { state, events: [{ type: 'word-rejected', reason, word }] };
}
function finish(
  state: GameState,
  progress: LevelProgress,
  level: Level,
  pack: LevelPack,
  events: GameEvent[],
  economy: Economy,
): Transition {
  const before = state.progress[level.id] ?? emptyProgress();
  const visibleBefore = revealedCells(level, before);
  const visible = revealedCells(level, progress);
  const solved = level.words
    .filter((word) => wordCells(word).every((cell) => visible.has(cell.id)))
    .map((word) => word.id);
  const completed = solved.length === level.words.length;
  for (const word of level.words)
    if (solved.includes(word.id) && !before.solvedWordIds.includes(word.id))
      events.push({
        type: 'word-found',
        levelId: level.id,
        wordId: word.id,
        word: word.answer,
      });
  const newlyRevealed = [...visible].filter((id) => !visibleBefore.has(id));
  if (newlyRevealed.length)
    events.push({
      type: 'cells-revealed',
      levelId: level.id,
      cellIds: newlyRevealed,
      source: events.some((event) => event.type === 'hint-used')
        ? 'hint'
        : 'word',
    });
  const reward = completed && !before.completed ? economy.completionReward : 0;
  if (completed && !before.completed)
    events.push({
      type: 'level-completed',
      levelId: level.id,
      reward,
      nextLevelId: nextLevelId(pack, level.id),
    });
  return {
    state: {
      ...state,
      coins: state.coins + reward,
      progress: {
        ...state.progress,
        [level.id]: { ...progress, solvedWordIds: solved, completed },
      },
    },
    events,
  };
}
/** Requires a validated catalog/state. Commands cannot grant free coins or skip locks. */
export function transition(
  state: GameState,
  command: GameCommand,
  pack: LevelPack,
  economy: Economy = DEFAULT_ECONOMY,
): Transition {
  if (command.type === 'settings')
    return {
      state: { ...state, settings: { ...command.settings } },
      events: [{ type: 'settings-changed' }],
    };
  const level = pack.levels.find((level) => level.id === command.levelId);
  if (!level || !isUnlocked(state, pack, command.levelId))
    return reject(state, 'level-locked');
  if (command.type === 'open-level') {
    if (state.currentLevelId === level.id) return { state, events: [] };
    return {
      state: { ...state, currentLevelId: level.id },
      events: [{ type: 'level-opened', levelId: level.id }],
    };
  }
  if (state.currentLevelId !== level.id) return reject(state, 'wrong-level');
  const progress = state.progress[level.id] ?? emptyProgress();
  if (command.type === 'submit') {
    if (
      command.tileIds.length < 2 ||
      command.tileIds.length > level.tiles.length ||
      new Set(command.tileIds).size !== command.tileIds.length
    )
      return reject(state, 'invalid-selection');
    const tiles = command.tileIds.map((id) =>
      level.tiles.find((tile) => tile.id === id),
    );
    if (tiles.some((tile) => !tile)) return reject(state, 'invalid-selection');
    const word = normalizeWord(
      tiles.map((tile) => tile?.letter ?? '').join(''),
    );
    if (!isGeorgianWord(word)) return reject(state, 'invalid-word', word);
    const target = level.words.find((target) =>
      target.acceptedAnswers.includes(word),
    );
    if (target && progress.solvedWordIds.includes(target.id))
      return reject(state, 'duplicate-word', word);
    if (progress.bonusWords.includes(word))
      return reject(state, 'duplicate-word', word);
    if (progress.completed) return reject(state, 'level-complete', word);
    if (target)
      return finish(
        state,
        { ...progress, solvedWordIds: [...progress.solvedWordIds, target.id] },
        level,
        pack,
        [],
        economy,
      );
    if (level.bonusWords.includes(word)) {
      const totalFound = state.bonusRewards.totalFound + 1;
      return finish(
        {
          ...state,
          coins: state.coins + economy.bonusReward,
          bonusRewards: { ...state.bonusRewards, totalFound },
        },
        { ...progress, bonusWords: [...progress.bonusWords, word] },
        level,
        pack,
        [
          { type: 'bonus-found', word, reward: economy.bonusReward },
          ...(totalFound % BONUS_GOAL === 0
            ? [{ type: 'bonus-hint-earned' as const }]
            : []),
        ],
        economy,
      );
    }
    return reject(state, 'invalid-word', word);
  }
  if (progress.completed) return reject(state, 'level-complete');
  const useFreeHint = command.kind === 'cell' && freeCellHints(state) > 0;
  const cost = useFreeHint
    ? 0
    : command.kind === 'cell'
      ? economy.cellHintCost
      : economy.wordHintCost;
  if (
    !(command.kind === 'cell' ? level.hints.allowCell : level.hints.allowWord)
  )
    return reject(state, 'hint-unavailable');
  if (state.coins < cost) return reject(state, 'insufficient-coins');
  const visible = revealedCells(level, progress);
  const hidden = solutionCells(level).find((cell) => !visible.has(cell.id));
  const word = level.words.find(
    (word) => !progress.solvedWordIds.includes(word.id),
  );
  if (!hidden || !word) return reject(state, 'hint-unavailable');
  const updated =
    command.kind === 'cell'
      ? {
          ...progress,
          revealedCellIds: [...progress.revealedCellIds, hidden.id],
          hintsUsed: progress.hintsUsed + 1,
        }
      : {
          ...progress,
          solvedWordIds: [...progress.solvedWordIds, word.id],
          hintsUsed: progress.hintsUsed + 1,
        };
  return finish(
    {
      ...state,
      coins: state.coins - cost,
      bonusRewards: {
        ...state.bonusRewards,
        hintsSpent: state.bonusRewards.hintsSpent + (useFreeHint ? 1 : 0),
      },
    },
    updated,
    level,
    pack,
    [{ type: 'hint-used', kind: command.kind, cost }],
    economy,
  );
}
