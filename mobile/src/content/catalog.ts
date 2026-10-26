import reviewedVocabulary from '../../../content/dictionaries/discovery-v31-ka.json';
import originVocabulary from '../../../content/dictionaries/discovery-v30-ka.json';
import rawOriginPack from '../../../content/levels/discovery.v30.json';
import rawCentralEuropePack from '../../../content/levels/discovery.v29.json';
import centralEuropeVocabulary from '../../../content/dictionaries/discovery-v29-ka.json';
import rawTargetedPack from '../../../content/levels/discovery.v28.json';
import targetedVocabulary from '../../../content/dictionaries/discovery-v28-ka.json';
import rawOctoberPack from '../../../content/levels/discovery.v27.json';
import octoberVocabulary from '../../../content/dictionaries/discovery-v27-ka.json';
import rawBatchSevenPack from '../../../content/levels/discovery.v26.json';
import batchSevenVocabulary from '../../../content/dictionaries/discovery-v26-ka.json';
import batchSixVocabulary from '../../../content/dictionaries/discovery-v25-ka.json';
import replacementVocabulary from '../../../content/dictionaries/discovery-v24-ka.json';
import rawPack from '../../../content/levels/discovery.v31.json';
import rawBatchSixPack from '../../../content/levels/discovery.v25.json';
import rawReplacementPack from '../../../content/levels/discovery.v24.json';
import rawSpainPack from '../../../content/levels/discovery.v23.json';
import rawTunisiaPack from '../../../content/levels/discovery.v22.json';
import rawMaltaPack from '../../../content/levels/discovery.v21.json';
import rawBatchFivePack from '../../../content/levels/discovery.v20.json';
import rawBatchFourPack from '../../../content/levels/discovery.v19.json';
import rawBatchThreePack from '../../../content/levels/discovery.v18.json';
import rawBatchTwoPack from '../../../content/levels/discovery.v17.json';
import rawBonusPromotionPack from '../../../content/levels/discovery.v16.json';
import rawOwnerPack from '../../../content/levels/discovery.v15.json';
import rawSingularPack from '../../../content/levels/discovery.v14.json';
import rawPluralPack from '../../../content/levels/discovery.v13.json';
import rawEverydayPack from '../../../content/levels/discovery.v12.json';
import rawLongWordPack from '../../../content/levels/discovery.v11.json';
import rawJourneyPack from '../../../content/levels/discovery.v10.json';
import rawExpandedDiscoveryPack from '../../../content/levels/discovery.v9.json';
import rawUniquePack from '../../../content/levels/discovery.v8.json';
import rawPronounPack from '../../../content/levels/discovery.v7.json';
import rawWidePack from '../../../content/levels/discovery.v6.json';
import rawDiscoveryPack from '../../../content/levels/discovery.v5.json';
import rawExpandedPack from '../../../content/levels/themed.v4.json';
import rawThemedPack from '../../../content/levels/themed.v3.json';
import rawBetaPack from '../../../content/levels/beta.v2.json';
import rawVocabulary from '../../../content/dictionaries/discovery-v9-ka.json';
import batchFiveVocabulary from '../../../content/dictionaries/discovery-v20-ka.json';
import batchFourVocabulary from '../../../content/dictionaries/discovery-v19-ka.json';
import batchThreeVocabulary from '../../../content/dictionaries/discovery-v18-ka.json';
import expandedVocabulary from '../../../content/dictionaries/discovery-v17-ka.json';
import journeyVocabulary from '../../../content/dictionaries/discovery-v13-ka.json';
import rawLegacyPack from '../../../content/levels/prototype.v1.json';
import type { LevelPack } from '../models/types';
import { parsePack } from '../engine/validation';
import { excludedWordsForRevision } from './wordPolicy';
export function vocabularyForRevision(revision: number): ReadonlySet<string> {
  const excluded = excludedWordsForRevision(revision);
  const entries =
    revision >= 31
      ? reviewedVocabulary.entries
      : revision >= 30
        ? originVocabulary.entries
        : revision >= 29
          ? centralEuropeVocabulary.entries
          : revision >= 28
            ? targetedVocabulary.entries
            : revision >= 27
              ? octoberVocabulary.entries
              : revision >= 26
                ? batchSevenVocabulary.entries
                : revision >= 25
                  ? batchSixVocabulary.entries
                  : revision >= 24
                    ? replacementVocabulary.entries
                    : revision >= 20
                      ? batchFiveVocabulary.entries
                      : revision >= 19
                        ? batchFourVocabulary.entries
                        : revision >= 18
                          ? batchThreeVocabulary.entries
                          : revision >= 17
                            ? expandedVocabulary.entries
                            : revision >= 13
                              ? journeyVocabulary.entries
                              : rawVocabulary.entries;
  return new Set(
    entries.map((entry) => entry.word).filter((word) => !excluded.has(word)),
  );
}
export const vocabulary = vocabularyForRevision(rawPack.revision);
/** Parsed at launch, structure only. The full release gates (`validateWide`)
 * run on this exact pack in `npm run check` and the campaign tests; on Android
 * they added about two seconds to every start. */
export const catalog = parsePack(rawPack, vocabulary);
let previous: readonly LevelPack[] | undefined;
/** Exact historical definitions are required to validate and upgrade old saves.
 * Parsed on first use, once, so a launch with a current save skips them. */
export function previousCatalogs(): readonly LevelPack[] {
  if (previous) return previous;
  const historicalVocabulary: ReadonlySet<string> = new Set(
    rawVocabulary.entries.map((entry) => entry.word),
  );
  previous = [
    parsePack(rawLegacyPack, historicalVocabulary),
    parsePack(rawBetaPack, historicalVocabulary),
    parsePack(rawThemedPack, historicalVocabulary),
    parsePack(rawExpandedPack, historicalVocabulary),
    parsePack(rawDiscoveryPack, historicalVocabulary),
    parsePack(rawWidePack, historicalVocabulary),
    parsePack(rawPronounPack, historicalVocabulary),
    parsePack(rawUniquePack, historicalVocabulary),
    parsePack(rawExpandedDiscoveryPack, historicalVocabulary),
    parsePack(rawJourneyPack, historicalVocabulary),
    parsePack(rawLongWordPack, historicalVocabulary),
    parsePack(rawEverydayPack, historicalVocabulary),
    parsePack(rawPluralPack, vocabularyForRevision(13)),
    parsePack(rawSingularPack, vocabularyForRevision(14)),
    parsePack(rawOwnerPack, vocabularyForRevision(15)),
    parsePack(rawBonusPromotionPack, vocabularyForRevision(16)),
    parsePack(rawBatchTwoPack, vocabularyForRevision(17)),
    parsePack(rawBatchThreePack, vocabularyForRevision(18)),
    parsePack(rawBatchFourPack, vocabularyForRevision(19)),
    parsePack(rawBatchFivePack, vocabularyForRevision(20)),
    parsePack(rawMaltaPack, vocabularyForRevision(21)),
    parsePack(rawTunisiaPack, vocabularyForRevision(22)),
    parsePack(rawSpainPack, vocabularyForRevision(23)),
    parsePack(rawReplacementPack, vocabularyForRevision(24)),
    parsePack(rawBatchSixPack, vocabularyForRevision(25)),
    parsePack(rawBatchSevenPack, vocabularyForRevision(26)),
    parsePack(rawOctoberPack, vocabularyForRevision(27)),
    parsePack(rawTargetedPack, vocabularyForRevision(28)),
    parsePack(rawCentralEuropePack, vocabularyForRevision(29)),
    parsePack(rawOriginPack, vocabularyForRevision(30)),
  ];
  return previous;
}
