import policy from '../../../content/dictionaries/word-policy.json';
import everydayReview from '../../../content/dictionaries/everyday-targets-v12.json';
import journeyReview from '../../../content/dictionaries/everyday-targets-v13.json';

/** Editorial exclusions apply to new play; historical packs retain their words. */
export function excludedWordsForRevision(
  revision: number,
): ReadonlySet<string> {
  return new Set(
    policy.excludedCategories
      .filter((category) => category.sinceRevision <= revision)
      .flatMap((category) => category.words),
  );
}

export const excludedWords = excludedWordsForRevision(13);

/** This allowlist applies only to required answers, never to optional bonuses. */
export function requiredWordsForRevision(
  revision: number,
): ReadonlySet<string> {
  const excluded = excludedWordsForRevision(revision);
  const review = revision >= 13 ? journeyReview : everydayReview;
  return new Set(
    review.entries
      .map((entry) => entry.word)
      .filter((word) => !excluded.has(word)),
  );
}

export const everydayRequiredWords = requiredWordsForRevision(13);
