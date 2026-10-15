import type { Level, LevelPack } from '../models/types';
import { canFormWord } from '../engine/georgian';
import { ContentError } from '../engine/validation';

export function discoveryDifficulty(
  level: Level,
  familiarity: Readonly<Record<string, number>>,
): Level['difficulty'] {
  const words = level.words.map((word) => word.answer);
  if (words.some((word) => ![1, 2].includes(familiarity[word] ?? 0)))
    throw new ContentError('Missing familiar-word estimate');
  const score = Math.min(
    100,
    (level.tiles.length - 4) * 15 +
      (words.length - 4) * 8 +
      2 * Math.max(...words.map((word) => word.length)) +
      words.reduce(
        (sum, word) =>
          sum + 2 * (word.length - 2) + 5 * (familiarity[word]! - 1),
        0,
      ),
  );
  return { score, tier: score < 45 ? 'easy' : score < 65 ? 'medium' : 'hard' };
}

/** Release constraints for the mixed-topic campaign, independent of old packs. */
export function validateDiscovery(
  pack: LevelPack,
  vocabulary: ReadonlySet<string>,
  familiarity: Readonly<Record<string, number>>,
): void {
  if (pack.levels.length !== 50 || pack.chapters.length !== 10)
    throw new ContentError('Discovery requires 50 levels in ten chapters');
  const wheels = new Set<string>();
  const signatures = new Set<string>();
  const uses = new Map<string, number>();
  let chapterUses = new Map<string, number>();
  let previous = new Set<string>();
  for (const [index, level] of pack.levels.entries()) {
    const chapter = pack.chapters[Math.floor(index / 5)]!;
    if (index % 5 === 0) chapterUses = new Map();
    if (
      level.id !== `ka-${String(index + 1).padStart(3, '0')}` ||
      level.chapterId !== chapter.id ||
      level.title !== (index === 0 ? 'დასაწყისი' : `აღმოჩენა ${index + 1}`)
    )
      throw new ContentError('Discovery identities or chapter order changed');
    const words = level.words.map((word) => word.answer);
    if (!(index < 10 ? [4, 5] : [5]).includes(words.length))
      throw new ContentError(
        'Discovery requires four or five targets, then five',
      );
    const letters = level.tiles.map((tile) => tile.letter);
    const wheel = [...letters].sort().join('');
    const allowed = index < 20 ? [5] : index >= 30 && index < 40 ? [6] : [5, 6];
    if (!allowed.includes(letters.length))
      throw new ContentError('Wheel exceeds its progression stage');
    const required = new Map<string, number>();
    for (const word of words) {
      const counts = new Map<string, number>();
      for (const letter of word)
        counts.set(letter, (counts.get(letter) ?? 0) + 1);
      for (const [letter, count] of counts)
        required.set(letter, Math.max(required.get(letter) ?? 0, count));
    }
    const needed = [...required]
      .flatMap(([letter, count]) => Array<string>(count).fill(letter))
      .sort()
      .join('');
    if (needed !== wheel)
      throw new ContentError(
        'Wheel must match target multiplicities without padding',
      );
    if (Math.max(level.grid.rows, level.grid.columns) > 7)
      throw new ContentError('Discovery grid exceeds seven rows or columns');
    if (
      words.filter((word) => word.length === 2).length > 1 ||
      words.includes('აი')
    )
      throw new ContentError('Too many short or particle targets');
    const signature = [...words].sort().join(',');
    if (wheels.has(wheel) || signatures.has(signature))
      throw new ContentError('Repeated discovery wheel or answer set');
    wheels.add(wheel);
    signatures.add(signature);
    if (words.filter((word) => previous.has(word)).length > 1)
      throw new ContentError('Adjacent boards repeat too many answers');
    previous = new Set(words);
    for (const word of words) {
      const total = (uses.get(word) ?? 0) + 1;
      const local = (chapterUses.get(word) ?? 0) + 1;
      if (total > 7 || local > 2)
        throw new ContentError('Discovery answers repeat too often');
      uses.set(word, total);
      chapterUses.set(word, local);
    }
    const bonuses = [...vocabulary]
      .filter((word) => !words.includes(word) && canFormWord(word, letters))
      .sort();
    if (
      !bonuses.length ||
      JSON.stringify(level.bonusWords) !== JSON.stringify(bonuses)
    )
      throw new ContentError(
        'Bonus list must include every verified formable extra',
      );
    const difficulty = discoveryDifficulty(level, familiarity);
    if (
      level.difficulty.score !== difficulty.score ||
      level.difficulty.tier !== difficulty.tier
    )
      throw new ContentError('Difficulty does not match discovery puzzle');
  }
  for (const [start, end] of [
    [20, 30],
    [40, 50],
  ] as const) {
    const sizes = new Set(
      pack.levels.slice(start, end).map((level) => level.tiles.length),
    );
    if (!sizes.has(5) || !sizes.has(6))
      throw new ContentError('Mixed stages require both five and six tiles');
  }
}
