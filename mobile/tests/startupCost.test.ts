import type { LevelPack } from '../src/models/types';

/** Importing the catalog is the work every launch does before the first frame.
 * On Android the full release gates took ~2.2 s and the 28 historical packs
 * another ~0.6 s on an emulator, several times that on phones. The gates run in
 * `npm run check` and the campaign tests instead; old packs load only for an
 * old save. */
test('launch parses only the current pack and skips the release gates', () => {
  const parsed: number[] = [];
  const validateWide = jest.fn();
  let catalog!: typeof import('../src/content/catalog');
  jest.isolateModules(() => {
    jest.doMock('../src/content/wide', () => ({
      ...jest.requireActual('../src/content/wide'),
      validateWide,
    }));
    jest.doMock('../src/engine/validation', () => {
      const actual = jest.requireActual('../src/engine/validation');
      return {
        ...actual,
        parsePack: (...args: Parameters<typeof actual.parsePack>) => {
          const pack: LevelPack = actual.parsePack(...args);
          parsed.push(pack.revision);
          return pack;
        },
      };
    });
    catalog = require('../src/content/catalog');
  });
  expect(validateWide).not.toHaveBeenCalled();
  expect(parsed).toEqual([catalog.catalog.revision]);
  // Asking for the historical packs parses them once, on demand.
  const previous = catalog.previousCatalogs();
  expect(previous).toHaveLength(28);
  expect(catalog.previousCatalogs()).toBe(previous);
  expect(parsed).toHaveLength(29);
});

test("Android's splash is the mark alone, at the loading view's size", () => {
  // Android 12+ masks its splash icon to a centred 192 dp circle on a 288 dp
  // canvas. The full lockup lost its first and last letters there; the mark at
  // 160 dp reaches at most 78 dp from the centre, inside the 96 dp radius.
  const app = require('../app.json');
  const [, splash] = app.expo.plugins.find(
    (plugin: unknown) =>
      Array.isArray(plugin) && plugin[0] === 'expo-splash-screen',
  );
  expect(splash.android).toEqual({
    image: './assets/branding/mark-dark.png',
    imageWidth: 160,
  });
  expect(splash.image).toBe('./assets/branding/splash-lockup.png');
});
