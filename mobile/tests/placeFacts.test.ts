import { catalog } from '../src/content/catalog';
import { destinationCaptions, placeFacts } from '../src/content/destinations';

test('every journey stop has one short fact of its own', () => {
  const ids = catalog.chapters.map((chapter) => chapter.id);
  expect(Object.keys(placeFacts).sort()).toEqual([...ids].sort());
  const facts = ids.map((id) => {
    const fact = placeFacts[id]!;
    // One sentence that fits the place sheet and the victory card.
    expect(fact).toMatch(/\.$/);
    expect(fact.length).toBeLessThanOrEqual(110);
    // A fact says something the postcard caption does not.
    expect(fact).not.toBe(destinationCaptions[id]);
    return fact;
  });
  expect(new Set(facts).size).toBe(facts.length);
});
