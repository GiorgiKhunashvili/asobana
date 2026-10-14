import rawPack from '../../content/levels/prototype.v1.json';
import rawVocabulary from '../../content/dictionaries/prototype-ka.json';
import { parsePack } from '../src/engine/validation';
import type { GameState, Level } from '../src/models/types';
import { reachLevel as reach, submit as send } from './helpers';
export { tilesFor } from './helpers';
// Stable small fixtures isolate rule tests from campaign content changes.
export const vocabulary = new Set(
  rawVocabulary.entries.map((entry) => entry.word),
);
export const catalog = parsePack(rawPack, vocabulary);
export const reachLevel = (index: number) => reach(index, catalog);
export const submit = (state: GameState, level: Level, word: string) =>
  send(state, level, word, catalog);
