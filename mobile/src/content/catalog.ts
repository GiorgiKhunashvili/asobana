import rawPack from '../../../content/levels/prototype.v1.json';
import rawVocabulary from '../../../content/dictionaries/prototype-ka.json';
import { parsePack } from '../engine/validation';
export const vocabulary: ReadonlySet<string> = new Set(
  rawVocabulary.entries.map((entry) => entry.word),
);
export const catalog = parsePack(rawPack, vocabulary);
