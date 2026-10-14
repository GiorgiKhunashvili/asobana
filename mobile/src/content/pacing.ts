import type { LevelPack } from '../models/types';
import { ContentError } from '../engine/validation';

/** Mirrors authoring rules so unreviewed pacing edits cannot slip into a release. */
export function validatePacing(
  pack: LevelPack,
  familiarity: Readonly<Record<string, number>>,
): void {
  const lastTarget = new Map(
    pack.levels.flatMap((level, index) =>
      level.words.map((word) => [word.answer, index] as const),
    ),
  );
  const indices = new Map(pack.levels.map((level, index) => [level.id, index]));
  const bonuses = new Set<string>();
  for (const chapter of pack.chapters) {
    const levels = pack.levels.filter(
      (level) => level.chapterId === chapter.id,
    );
    if (levels.length !== 5)
      throw new ContentError('Each topic requires five levels');
    const uses = new Map<string, number>();
    for (const [index, level] of levels.entries()) {
      const words = level.words.map((word) => word.answer);
      if (words.some((word) => ![1, 2, 3].includes(familiarity[word] ?? 0)))
        throw new ContentError('Missing familiarity estimate');
      const score = Math.min(
        100,
        4 * level.tiles.length +
          3 * words.length +
          2 * Math.max(...words.map((word) => word.length)) +
          words.reduce(
            (sum, word) => sum + word.length - 2 + 5 * (familiarity[word]! - 1),
            0,
          ),
      );
      const tier = score < 45 ? 'easy' : score < 65 ? 'medium' : 'hard';
      if (level.difficulty.score !== score || level.difficulty.tier !== tier)
        throw new ContentError(
          'Difficulty does not match puzzle and familiarity',
        );
      for (const word of words) {
        const count = (uses.get(word) ?? 0) + 1;
        if (count > 2)
          throw new ContentError('A topic target repeats more than twice');
        uses.set(word, count);
      }
      const previous = levels[index - 1];
      if (previous) {
        const delta = score - previous.difficulty.score;
        if (delta < 1 || delta > 15)
          throw new ContentError('Topic difficulty must rise gradually');
        if (words.length < previous.words.length)
          throw new ContentError('Target count must not decrease');
        if (
          previous.words.filter((word) => words.includes(word.answer)).length >
          1
        )
          throw new ContentError('Adjacent levels repeat too many answers');
      } else if (words.some((word) => familiarity[word]! > 2)) {
        throw new ContentError('Topic opener contains advanced vocabulary');
      }
      for (const bonus of level.bonusWords) {
        if (
          (lastTarget.get(bonus) ?? -2) >= indices.get(level.id)! - 1 ||
          bonuses.has(bonus)
        )
          throw new ContentError(
            'Bonus repeats a recent answer or reveals a future target',
          );
        bonuses.add(bonus);
      }
    }
  }
}
