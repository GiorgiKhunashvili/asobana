import { readFileSync } from 'node:fs';
import { vocabulary } from '../mobile/src/content/catalog';
import { parsePack } from '../mobile/src/engine/validation';
const path = process.argv[2];
if (!path)
  throw new Error(
    'Usage: node --import tsx scripts/validate-draft.ts <draft.json>',
  );
const pack = parsePack(
  JSON.parse(readFileSync(path, 'utf8')) as unknown,
  vocabulary,
  false,
);
if (pack.levels.some((level) => level.reviewStatus !== 'generated-draft'))
  throw new Error('Expected a draft pack');
console.log(
  `TypeScript accepted ${pack.levels.length} Python-generated draft level(s). Editorial review still required.`,
);
