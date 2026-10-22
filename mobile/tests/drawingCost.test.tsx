import { render } from '@testing-library/react-native';
import { Backdrop, EnamelBackdrop } from '../src/components/Backdrop';
import { LetterWheel } from '../src/components/LetterWheel';
import { catalog } from '../src/content/catalog';
import { levelTone } from '../src/theme';

jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('@shopify/react-native-skia', () => {
  const builder = {
    moveTo: () => builder,
    lineTo: () => builder,
    detach: () => ({}),
  };
  const Nothing = () => null;
  return {
    Canvas: Nothing,
    Circle: Nothing,
    Path: Nothing,
    Skia: { PathBuilder: { Make: () => builder } },
  };
});

/** Large static surfaces use native gradients, borders and tiles: on Android a
 * Skia canvas is a texture layer on every frame, and an SVG is rasterized in
 * software on the main thread as its screen appears (a full-screen one is
 * about 15 MB), which made "გაგრძელება" stutter. */
const drawing = (tree: unknown) => JSON.stringify(tree);

test('backdrops draw with native gradients, no SVG', async () => {
  const scene = await render(<Backdrop tone={levelTone('ka-001')} />);
  expect(drawing(scene.toJSON())).not.toMatch(/RNSVG/);
  expect(drawing(scene.toJSON())).toMatch(/linear-gradient\(to bottom/);
  // The journey's own ground: gradient, kiln glow and the lattice tile.
  const enamel = await render(
    <EnamelBackdrop
      tone={{ ground: ['#2A1A4A', '#140C24'], glow: '#3A64C8' }}
      glowY={0.45}
    />,
  );
  expect(drawing(enamel.toJSON())).not.toMatch(/RNSVG/);
  expect(drawing(enamel.toJSON())).toMatch(/radial-gradient\(circle/);
  expect(drawing(enamel.toJSON())).toMatch(/"resizeMode":"repeat"/);
});

test("the wheel's plate and shadow are native views", async () => {
  const level = catalog.levels[0]!;
  const wheel = await render(
    <LetterWheel
      tiles={level.tiles}
      size={280}
      width={360}
      tone={levelTone(level.id)}
      onSubmit={jest.fn()}
    />,
  );
  const tree = drawing(wheel.toJSON());
  expect(tree).toMatch(/radial-gradient\(circle 156px at 156px 160px/);
  // Only the small icons (shuffle, input mode) remain SVG.
  expect(
    tree.match(/"RNSVGSvgView[A-Za-z]*"/g)?.length ?? 0,
  ).toBeLessThanOrEqual(2);
});
