import rawPack from '../../../content/levels/discovery.v13.json';
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
import manifest from '../../../content/levels/discovery.v13.recipes.json';
import rawVocabulary from '../../../content/dictionaries/discovery-v9-ka.json';
import journeyVocabulary from '../../../content/dictionaries/discovery-v13-ka.json';
import rawLegacyPack from '../../../content/levels/prototype.v1.json';
import { parsePack } from '../engine/validation';
import { validateWide } from './wide';
import { excludedWordsForRevision } from './wordPolicy';
const historicalVocabulary: ReadonlySet<string> = new Set(
  rawVocabulary.entries.map((entry) => entry.word),
);
export function vocabularyForRevision(revision: number): ReadonlySet<string> {
  const excluded = excludedWordsForRevision(revision);
  const entries =
    revision >= 13 ? journeyVocabulary.entries : rawVocabulary.entries;
  return new Set(
    entries.map((entry) => entry.word).filter((word) => !excluded.has(word)),
  );
}
export const vocabulary = vocabularyForRevision(rawPack.revision);
export const catalog = parsePack(rawPack, vocabulary);
validateWide(catalog, vocabulary, manifest.familiarity);
/** Exact historical definitions are required to validate and upgrade old saves. */
export const previousCatalogs = [
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
];
