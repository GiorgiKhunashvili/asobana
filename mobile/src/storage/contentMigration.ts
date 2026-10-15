import type { GameState, LevelPack, LevelProgress } from '../models/types';
import { DEFAULT_ECONOMY, revealedCells } from '../engine/game';
import { solutionCells, wordCells } from '../engine/grid';
import { ContentError, object } from '../engine/validation';
import { parseSnapshot } from './snapshot';

/** Validate the exact old catalog before applying a supported content upgrade. */
export function restoreContent(
  value: unknown,
  pack: LevelPack,
  previousPacks: readonly LevelPack[],
): { state: GameState; migrated: boolean } {
  const raw = object(value, 'save');
  if (raw.packId === pack.id && raw.contentRevision === pack.revision)
    return { state: parseSnapshot(value, pack), migrated: false };
  const previous = previousPacks.find(
    (candidate) =>
      candidate.id === raw.packId && candidate.revision === raw.contentRevision,
  );
  if (
    previous?.id === 'geowords-prototype' &&
    previous.id === pack.id &&
    (([1, 2].includes(previous.revision) && pack.revision === 3) ||
      ([1, 2, 3].includes(previous.revision) && pack.revision === 4) ||
      ([1, 2, 3, 4].includes(previous.revision) && pack.revision === 5))
  )
    return {
      state: migrateTopics(parseSnapshot(value, previous), previous, pack),
      migrated: true,
    };
  if (
    !previous ||
    previous.id !== pack.id ||
    previous.id !== 'geowords-prototype' ||
    previous.revision !== 1 ||
    pack.revision !== 2
  )
    throw new ContentError('Unsupported content upgrade; save retained');
  const oldState = parseSnapshot(value, previous);
  // Appending content must preserve the old sequential unlock order and answers.
  for (const [index, oldLevel] of previous.levels.entries()) {
    const level = pack.levels[index];
    if (
      !level ||
      level.id !== oldLevel.id ||
      level.chapterId !== oldLevel.chapterId ||
      oldLevel.words.some(
        (word) => !level.words.some((next) => next.answer === word.answer),
      ) ||
      oldLevel.bonusWords.some((word) => !level.bonusWords.includes(word))
    )
      throw new ContentError('Incompatible content upgrade; save retained');
  }
  const progress: Record<string, LevelProgress> = {};
  for (const [id, saved] of Object.entries(oldState.progress)) {
    const oldLevel = previous.levels.find((level) => level.id === id)!;
    const level = pack.levels.find((level) => level.id === id)!;
    const solvedWordIds: string[] = [];
    const hints = new Set<string>();
    for (const oldWord of oldLevel.words) {
      const nextWord = level.words.find(
        (word) => word.answer === oldWord.answer,
      )!;
      if (saved.solvedWordIds.includes(oldWord.id))
        solvedWordIds.push(nextWord.id);
      // A paid crossing hint may move to two cells. Keep both letters by position.
      const nextCells = wordCells(nextWord);
      wordCells(oldWord).forEach((cell, index) => {
        if (saved.revealedCellIds.includes(cell.id))
          hints.add(nextCells[index]!.id);
      });
    }
    const updated = {
      ...saved,
      solvedWordIds,
      revealedCellIds: [...hints],
    };
    const visible = revealedCells(level, updated);
    const solved = level.words
      .filter(
        (word) =>
          saved.completed ||
          wordCells(word).every((cell) => visible.has(cell.id)),
      )
      .map((word) => word.id);
    // Completed levels stay completed, without awarding coins again.
    progress[id] = {
      ...updated,
      solvedWordIds: solved,
      completed: solved.length === level.words.length,
    };
  }
  return {
    state: parseSnapshot(
      { ...oldState, contentRevision: pack.revision, progress },
      pack,
    ),
    migrated: true,
  };
}

/** Reauthored boards retain earned progress by spelling, then by word count. */
function migrateTopics(
  state: GameState,
  previous: LevelPack,
  pack: LevelPack,
): GameState {
  for (const [index, level] of previous.levels.entries()) {
    if (pack.levels[index]?.id !== level.id)
      throw new ContentError('Incompatible content upgrade; save retained');
  }
  const progress: Record<string, LevelProgress> = {};
  let coins = state.coins;
  for (const [id, saved] of Object.entries(state.progress)) {
    const oldLevel = previous.levels.find((level) => level.id === id)!;
    const level = pack.levels.find((level) => level.id === id)!;
    const solved = new Set(
      level.words
        .filter(
          (word) =>
            saved.completed ||
            oldLevel.words.some(
              (old) =>
                old.answer === word.answer &&
                saved.solvedWordIds.includes(old.id),
            ),
        )
        .map((word) => word.id),
    );
    // A removed answer still earns one solved word on the replacement board.
    for (const word of level.words) {
      if (solved.size >= saved.solvedWordIds.length) break;
      solved.add(word.id);
    }
    const hints = new Set<string>();
    for (const old of oldLevel.words) {
      const next = level.words.find((word) => word.answer === old.answer);
      if (!next) continue;
      const nextCells = wordCells(next);
      wordCells(old).forEach((cell, index) => {
        if (saved.revealedCellIds.includes(cell.id))
          hints.add(nextCells[index]!.id);
      });
    }
    const updated = {
      ...saved,
      solvedWordIds: [...solved],
      revealedCellIds: [...hints],
      // Coins already earned from retired bonuses remain in the balance.
      bonusWords: saved.bonusWords.filter((word) =>
        level.bonusWords.includes(word),
      ),
    };
    const visible = revealedCells(level, updated);
    // Transfer remaining paid cell credits to hidden cells in reading order.
    for (const cell of solutionCells(level)) {
      if (hints.size >= saved.revealedCellIds.length) break;
      if (!visible.has(cell.id)) hints.add(cell.id);
    }
    updated.revealedCellIds = [...hints];
    const finalVisible = revealedCells(level, updated);
    updated.solvedWordIds = level.words
      .filter((word) =>
        wordCells(word).every((cell) => finalVisible.has(cell.id)),
      )
      .map((word) => word.id);
    updated.completed = updated.solvedWordIds.length === level.words.length;
    // A shorter replacement may finish a partial board; pay its reward once.
    if (updated.completed && !saved.completed)
      coins += DEFAULT_ECONOMY.completionReward;
    progress[id] = updated;
  }
  return parseSnapshot(
    { ...state, contentRevision: pack.revision, coins, progress },
    pack,
  );
}
