import type { GameState, LevelPack, LevelProgress } from '../models/types';
import { revealedCells } from '../engine/game';
import { wordCells } from '../engine/grid';
import { ContentError, object } from '../engine/validation';
import { parseSnapshot } from './snapshot';

/** The only supported content upgrade: the original four levels to the beta pack. */
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
