import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { render } from '@testing-library/react-native';
import { Image, Platform, StyleSheet, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { CoinGlyph } from '../src/components/CoinBadge';
import { Icon } from '../src/components/Icon';
import { gameplayIconAssets } from '../src/components/gameplayIconAssets';
import { palette } from '../src/theme';

jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

afterEach(() => jest.restoreAllMocks());

test('common Android board icons draw images with their requested tint and size', () => {
  jest.replaceProperty(Platform, 'OS', 'android');
  for (const name of Object.keys(
    gameplayIconAssets,
  ) as (keyof typeof gameplayIconAssets)[]) {
    const tree = render(
      <Icon name={name} size={26} color="rgba(27,24,56,0.6)" />,
    );
    expect(tree.UNSAFE_queryAllByType(Svg)).toHaveLength(0);
    const image = tree.UNSAFE_getByType(Image);
    expect(StyleSheet.flatten(image.props.style)).toMatchObject({
      width: 26,
      height: 26,
      tintColor: 'rgba(27,24,56,0.6)',
    });
    expect(image.props.fadeDuration).toBe(0);
    expect(tree.UNSAFE_getByType(View).props).toMatchObject({
      pointerEvents: 'none',
      accessibilityElementsHidden: true,
      importantForAccessibility: 'no-hide-descendants',
    });
    tree.unmount();
  }
});

test('large, custom-stroke and uncached icons retain exact vector drawing', () => {
  jest.replaceProperty(Platform, 'OS', 'android');
  for (const props of [
    { name: 'back' as const, size: 48 },
    { name: 'shuffle' as const, strokeWidth: 2.6 },
    { name: 'star' as const, size: 24 },
  ]) {
    const tree = render(<Icon {...props} color="#123456" />);
    expect(tree.UNSAFE_queryAllByType(Image)).toHaveLength(0);
    expect(tree.UNSAFE_getByType(Svg)).toBeTruthy();
    if (props.strokeWidth)
      expect(tree.UNSAFE_getAllByType(Path)[0]!.props.strokeWidth).toBe(2.6);
    tree.unmount();
  }
});

test('iOS keeps the vector controls and coin', () => {
  jest.replaceProperty(Platform, 'OS', 'ios');
  const tree = render(
    <View>
      <Icon name="shuffle" color="red" />
      <CoinGlyph />
    </View>,
  );
  expect(tree.UNSAFE_queryAllByType(Image)).toHaveLength(0);
  expect(tree.UNSAFE_getAllByType(Svg)).toHaveLength(2);
});

test('Android price and balance coins use separate images; other sizes stay vector', () => {
  jest.replaceProperty(Platform, 'OS', 'android');
  for (const size of [12, 20]) {
    const tree = render(<CoinGlyph size={size} />);
    expect(tree.UNSAFE_queryAllByType(Svg)).toHaveLength(0);
    const image = tree.UNSAFE_getByType(Image);
    expect(StyleSheet.flatten(image.props.style)).toEqual({
      width: size,
      height: size,
    });
    expect(image.props.fadeDuration).toBe(0);
    tree.unmount();
  }
  const large = render(<CoinGlyph size={64} />);
  expect(large.UNSAFE_queryAllByType(Image)).toHaveLength(0);
  const circles = large.UNSAFE_getAllByType(Circle);
  expect(circles[0]!.props.fill).toBe(palette.goldDeep);
  expect(circles[1]!.props.fill).toBe(palette.gold);
  expect(circles[2]!.props.strokeWidth).toBe(3.2);
});

test('every pre-rendered control ships all four correctly sized PNG densities', () => {
  const entries = [
    ...Object.keys(gameplayIconAssets).map((name) => [name, 32] as const),
    ['coin-12', 12] as const,
    ['coin-20', 20] as const,
  ];
  for (const [name, size] of entries) {
    for (const scale of [1, 2, 3, 4]) {
      const suffix = scale === 1 ? '' : `@${scale}x`;
      const bytes = readFileSync(
        resolve(__dirname, `../assets/ui-icons/${name}${suffix}.png`),
      );
      expect(bytes.subarray(1, 4).toString()).toBe('PNG');
      expect(bytes.readUInt32BE(16)).toBe(size * scale);
      expect(bytes.readUInt32BE(20)).toBe(size * scale);
      // RGBA, including transparent pixels around the artwork.
      expect(bytes[25]).toBe(6);
    }
  }
});

test('pre-rendered assets match the current vector sources and generated manifest', () => {
  const root = resolve(__dirname, '../..');
  const directory = resolve(root, 'mobile/assets/ui-icons');
  const manifest: {
    sources: Record<string, string>;
    images: Record<string, string>;
  } = JSON.parse(readFileSync(resolve(directory, 'manifest.json'), 'utf8'));
  const digest = (path: string) =>
    createHash('sha256').update(readFileSync(path)).digest('hex');
  for (const [file, hash] of Object.entries(manifest.sources))
    expect(digest(resolve(root, file))).toBe(hash);
  for (const [file, hash] of Object.entries(manifest.images))
    expect(digest(resolve(directory, file))).toBe(hash);
});
