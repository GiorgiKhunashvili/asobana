import { catalog } from '../src/content/catalog';
import { destinationCaptions } from '../src/content/destinations';
import { STOP_PAINTINGS } from '../src/theme';

// The same lookup Postcard uses: a stop's own caption, else its painting's.
const captionOf = (chapterId: string) =>
  destinationCaptions[chapterId] ??
  destinationCaptions[STOP_PAINTINGS[chapterId] ?? ''];

test('every journey stop has its own short postcard caption', () => {
  const captions = catalog.chapters.map((chapter) => {
    const caption = captionOf(chapter.id);
    expect(caption).toBeDefined();
    // One sentence that wraps to at most three lines on a 320-point phone.
    expect(caption).toMatch(/^[^.]+\.$/);
    expect(caption!.length).toBeLessThanOrEqual(64);
    return caption;
  });
  expect(captions).toHaveLength(69);
  expect(new Set(captions).size).toBe(captions.length);
});
