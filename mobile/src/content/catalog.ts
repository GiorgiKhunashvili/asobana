import rawPack from '../../../content/levels/discovery.v5.json';
import rawExpandedPack from '../../../content/levels/themed.v4.json';
import rawThemedPack from '../../../content/levels/themed.v3.json';
import rawBetaPack from '../../../content/levels/beta.v2.json';
import manifest from '../../../content/levels/discovery.v5.recipes.json';
import rawVocabulary from '../../../content/dictionaries/discovery-ka.json';
import rawLegacyPack from '../../../content/levels/prototype.v1.json';
import { parsePack } from '../engine/validation';
import { validateDiscovery } from './discovery';
export const vocabulary: ReadonlySet<string> = new Set(
  rawVocabulary.entries.map((entry) => entry.word),
);
export const catalog = parsePack(rawPack, vocabulary);
validateDiscovery(catalog, vocabulary, manifest.familiarity);
/** Exact historical definitions are required to validate and upgrade old saves. */
export const previousCatalogs = [
  parsePack(rawLegacyPack, vocabulary),
  parsePack(rawBetaPack, vocabulary),
  parsePack(rawThemedPack, vocabulary),
  parsePack(rawExpandedPack, vocabulary),
];
