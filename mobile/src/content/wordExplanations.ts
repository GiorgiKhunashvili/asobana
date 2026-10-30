import data from '../../../content/word-explanations.json';

const explanations: Readonly<Record<string, string>> = data.explanations;

/**
 * Short Georgian explanation of a required answer, keyed by spelling so it
 * applies to any board. Reviewed in docs/WORD_EXPLANATIONS_BATCH_0*.md.
 */
export function explanationOf(word: string): string | null {
  return explanations[word] ?? null;
}

export function hasExplanation(word: string): boolean {
  return explanationOf(word) !== null;
}
