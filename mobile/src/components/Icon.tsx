import { Image, Platform, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { gameplayIconAssets } from './gameplayIconAssets';

import { ICONS, type IconName, type Part } from './iconPaths';
export { STAR8, type IconName } from './iconPaths';

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
  const bitmap =
    Platform.OS === 'android' && strokeWidth === 2 && size <= 32
      ? gameplayIconAssets[name]
      : undefined;
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ width: size, height: size }}
    >
      {/* Common Android controls reuse density-specific images instead of
          rasterizing SVG paths on the main thread as each board opens. */}
      {bitmap ? (
        <Image
          source={bitmap}
          fadeDuration={0}
          resizeMode="contain"
          style={{ width: size, height: size, tintColor: color }}
        />
      ) : (
        <Svg width={size} height={size} viewBox="0 0 24 24">
          {parts.map((part) =>
            part.fill ? (
              <Path key={part.d} d={part.d} fill={color} />
            ) : (
              <Path
                key={part.d}
                d={part.d}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ),
          )}
        </Svg>
      )}
    </View>
  );
}
