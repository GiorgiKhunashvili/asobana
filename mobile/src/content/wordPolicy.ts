import targetedReview from '../../../content/dictionaries/everyday-targets-v28.json';
import octoberReview from '../../../content/dictionaries/everyday-targets-v27.json';
import batchSevenReview from '../../../content/dictionaries/everyday-targets-v26.json';
import batchSixReview from '../../../content/dictionaries/everyday-targets-v25.json';
import replacementReview from '../../../content/dictionaries/everyday-targets-v24.json';
import batchFiveReview from '../../../content/dictionaries/everyday-targets-v20.json';
import batchFourReview from '../../../content/dictionaries/everyday-targets-v19.json';
import batchThreeReview from '../../../content/dictionaries/everyday-targets-v18.json';
import expansionReview from '../../../content/dictionaries/everyday-targets-v17.json';
import policy from '../../../content/dictionaries/word-policy.json';
import everydayReview from '../../../content/dictionaries/everyday-targets-v12.json';
import journeyReview from '../../../content/dictionaries/everyday-targets-v13.json';
import ownerReview from '../../../content/dictionaries/everyday-targets-v15.json';
import expandedOwnerReview from '../../../content/dictionaries/everyday-targets-v16.json';
import singularReview from '../../../content/dictionaries/everyday-targets-v14.json';

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

export const excludedWords = excludedWordsForRevision(28);

/** Target-only exclusions never remove valid optional bonus spellings. */
export function excludedRequiredWordsForRevision(
  revision: number,
): ReadonlySet<string> {
  return new Set(
    policy.requiredExcludedCategories
      .filter((category) => category.sinceRevision <= revision)
      .flatMap((category) => category.words),
  );
}

/** This allowlist applies only to required answers, never to optional bonuses. */
export function requiredWordsForRevision(
  revision: number,
): ReadonlySet<string> {
  const excluded = excludedWordsForRevision(revision);
  const requiredExcluded = excludedRequiredWordsForRevision(revision);
  const review =
    revision >= 28
      ? targetedReview
      : revision >= 27
        ? octoberReview
        : revision >= 26
          ? batchSevenReview
          : revision >= 25
            ? batchSixReview
            : revision >= 24
              ? replacementReview
              : revision >= 20
                ? batchFiveReview
                : revision >= 19
                  ? batchFourReview
                  : revision >= 18
                    ? batchThreeReview
                    : revision >= 17
                      ? expansionReview
                      : revision >= 16
                        ? expandedOwnerReview
                        : revision >= 15
                          ? ownerReview
                          : revision >= 14
                            ? singularReview
                            : revision >= 13
                              ? journeyReview
                              : everydayReview;
  return new Set(
    review.entries
      .map((entry) => entry.word)
      .filter((word) => !excluded.has(word) && !requiredExcluded.has(word)),
  );
}

export const everydayRequiredWords = requiredWordsForRevision(28);
