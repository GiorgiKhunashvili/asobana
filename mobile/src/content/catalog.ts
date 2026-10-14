import rawPack from '../../../content/levels/beta.v2.json';
import rawVocabulary from '../../../content/dictionaries/beta-ka.json';
import rawLegacyPack from '../../../content/levels/prototype.v1.json';
import { parsePack } from '../engine/validation';
export const vocabulary: ReadonlySet<string> = new Set(
  rawVocabulary.entries.map((entry) => entry.word),
);
export const catalog = parsePack(rawPack, vocabulary);
/** Exact historical definitions are required to validate and upgrade old saves. */
export const previousCatalogs = [parsePack(rawLegacyPack, vocabulary)];
