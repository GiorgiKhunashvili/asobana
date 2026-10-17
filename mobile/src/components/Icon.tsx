import { Canvas, Group, Path } from '@shopify/react-native-skia';
import { View } from 'react-native';

interface Part {
  readonly d: string;
  readonly fill?: boolean;
}
const dot = (x: number, y: number, r = 1.8) =>
  `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
/** Eight-pointed star of two squares, a common Caucasian ornament. */
export const STAR8 = 'M7 7h10v10H7z M12 4.9L19.1 12L12 19.1L4.9 12z';

/** 24×24 line icons drawn for this game; no icon font or external asset. */
const ICONS = {
  back: [{ d: 'M14.5 5L7.5 12l7 7' }],
  check: [{ d: 'M5 12.5l4.5 4.5L19 7.5' }],
  close: [{ d: 'M6.5 6.5l11 11M17.5 6.5l-11 11' }],
  lock: [
    { d: 'M8.5 11V8.2a3.5 3.5 0 0 1 7 0V11' },
    { d: 'M6 10.5h12v9.5H6z', fill: true },
  ],
  shuffle: [
    { d: 'M3.5 7h3c4.5 0 6.5 10 11 10h3' },
    { d: 'M3.5 17h3c1.6 0 2.9-1.4 4-3.2M13.3 10.2C14.4 8.4 15.8 7 17.5 7h3' },
    { d: 'M18 4.5L20.5 7 18 9.5M18 14.5l2.5 2.5-2.5 2.5' },
  ],
  keypad: [
    { d: [6, 12, 18].map((x) => dot(x, 8.5)).join(''), fill: true },
    { d: [6, 12, 18].map((x) => dot(x, 13.5)).join(''), fill: true },
    { d: 'M7.5 19h9' },
  ],
  wheel: [
    { d: 'M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0-17' },
    {
      d: dot(12, 7.2) + dot(7.2, 12) + dot(16.8, 12) + dot(12, 16.8),
      fill: true,
    },
  ],
  hintLetter: [
    { d: 'M5 5h14v14H5z' },
    {
      d: 'M12 7.6l1.3 3.1 3.1 1.3-3.1 1.3-1.3 3.1-1.3-3.1-3.1-1.3 3.1-1.3z',
      fill: true,
    },
  ],
  hintWord: [
    { d: 'M1.8 8h6.4v8H1.8zM8.8 8h6.4v8H8.8zM15.8 8h6.4v8h-6.4z' },
    {
      d: 'M12 9.6l.8 1.6 1.6.8-1.6.8-.8 1.6-.8-1.6-1.6-.8 1.6-.8z',
      fill: true,
    },
  ],
  grid: [{ d: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z' }],
  sliders: [
    { d: 'M4 7.5h9M17 7.5h3M4 16.5h3M11 16.5h9' },
    {
      d: 'M15 5.5a2 2 0 1 0 0 4a2 2 0 1 0 0-4M9 14.5a2 2 0 1 0 0 4a2 2 0 1 0 0-4',
    },
  ],
  sound: [
    { d: 'M4 9.5h3.5L12 5.5v13l-4.5-4H4z', fill: true },
    { d: 'M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11' },
  ],
  haptics: [{ d: 'M8.5 4h7v16h-7zM4.5 9v6M19.5 9v6' }],
  home: [{ d: 'M4 11.5L12 5l8 6.5V20H4z' }],
  restart: [{ d: 'M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 3.8v3.9h-3.9' }],
  star: [{ d: STAR8, fill: true }],
  route: [
    { d: dot(6, 18, 2.4), fill: true },
    { d: 'M18 3.6a2.4 2.4 0 1 0 0 4.8a2.4 2.4 0 1 0 0-4.8' },
    { d: 'M8.6 17.2c6.2 0 1.6-9.4 7-10.6' },
  ],
  card: [
    { d: 'M3.5 5.5h17v13h-17z' },
    { d: 'M6 16l4.5-4.5 3 3 2.5-2.5 2.5 2.5' },
    { d: dot(16.2, 9.2, 1.6), fill: true },
  ],
  bag: [{ d: 'M5.5 9h13l-1.2 11H6.7zM9 9V7.5a3 3 0 0 1 6 0V9' }],
  play: [{ d: 'M8.5 5.5v13l10.5-6.5z', fill: true }],
} satisfies Record<string, readonly Part[]>;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 24,
  color,
  strokeWidth = 2,
}: {
  readonly name: IconName;
  readonly size?: number;
  readonly color: string;
  readonly strokeWidth?: number;
}) {
  const parts: readonly Part[] = ICONS[name];
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ width: size, height: size }}
    >
      <Canvas style={{ width: size, height: size }}>
        <Group transform={[{ scale: size / 24 }]}>
          {parts.map((part) => (
            <Path
              key={part.d}
              path={part.d}
              color={color}
              style={part.fill ? 'fill' : 'stroke'}
              strokeWidth={strokeWidth}
              strokeCap="round"
              strokeJoin="round"
            />
          ))}
        </Group>
      </Canvas>
    </View>
  );
}
