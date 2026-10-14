import type { LevelPack } from '../models/types';
import { ContentError } from '../engine/validation';

export interface Topic {
  readonly id: string;
  readonly title: string;
  readonly words: readonly string[];
}

/** Vocabulary validity alone does not make an answer relevant to a topic. */
export function validateTopics(
  pack: LevelPack,
  topics: readonly Topic[],
): void {
  for (const chapter of pack.chapters) {
    const topic = topics.find((topic) => topic.id === chapter.id);
    if (!topic || topic.title !== chapter.title)
      throw new ContentError(`Unknown topic: ${chapter.id}`);
  }
  for (const level of pack.levels) {
    const topic = topics.find((topic) => topic.id === level.chapterId);
    if (!topic || level.title !== topic.title)
      throw new ContentError(`Missing topic heading: ${level.id}`);
    for (const word of [
      ...level.words.map((word) => word.answer),
      ...level.bonusWords,
    ]) {
      if (!topic.words.includes(word))
        throw new ContentError(`Off-topic answer in ${level.id}: ${word}`);
    }
  }
}
