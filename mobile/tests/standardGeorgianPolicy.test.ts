import dictionary from '../../content/dictionaries/discovery-v9-ka.json';
import { excludedWordsForRevision } from '../src/content/wordPolicy';

test('revision 13 excludes reviewed barbarisms and the owner-excluded homograph', () => {
  const historical = excludedWordsForRevision(12);
  const current = excludedWordsForRevision(13);
  for (const word of [
    'რული',
    'კრანი',
    'მაიკა',
    'ბინტი',
    'ბლინი',
    'ვედრო',
    'კაშნე',
  ]) {
    expect(historical.has(word)).toBe(false);
    expect(current.has(word)).toBe(true);
  }
  for (const word of ['საჭე', 'ონკანი', 'მაისური', 'ბანკი'])
    expect(current.has(word)).toBe(false);
  // Preserve the actual historical sense rather than rewriting its provenance.
  expect(dictionary.entries.find((entry) => entry.word === 'რული')?.gloss).toBe(
    'nap',
  );
});
