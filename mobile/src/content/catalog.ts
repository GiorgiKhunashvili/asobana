import rawPack from '../../../content/levels/themed.v4.json';
import rawThemedPack from '../../../content/levels/themed.v3.json';
import rawBetaPack from '../../../content/levels/beta.v2.json';
import topicManifest from '../../../content/levels/themed.v4.recipes.json';
import rawVocabulary from '../../../content/dictionaries/expanded-ka.json';
import rawLegacyPack from '../../../content/levels/prototype.v1.json';
import { parsePack } from '../engine/validation';
import { validateTopics } from './topics';
import { validatePacing } from './pacing';
export const vocabulary: ReadonlySet<string> = new Set(
  rawVocabulary.entries.map((entry) => entry.word),
);
export const catalog = parsePack(rawPack, vocabulary);
export const topics = topicManifest.topics;
validateTopics(catalog, topics);
validatePacing(catalog, topicManifest.familiarity);
/** Exact historical definitions are required to validate and upgrade old saves. */
export const previousCatalogs = [
  parsePack(rawLegacyPack, vocabulary),
  parsePack(rawBetaPack, vocabulary),
  parsePack(rawThemedPack, vocabulary),
];
