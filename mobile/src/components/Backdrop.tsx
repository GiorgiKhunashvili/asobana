import {
  Canvas,
  Circle,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  vec,
} from '@shopify/react-native-skia';
import { memo, useMemo } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import type { Tone } from '../theme';

const CELL = 34;
const star = (x: number, y: number, s: number) =>
  `M${x - s} ${y - s}h${2 * s}v${2 * s}h${-2 * s}z` +
  `M${x} ${y - s * 1.42}L${x + s * 1.42} ${y}L${x} ${y + s * 1.42}L${x - s * 1.42} ${y}z`;

/**
 * Enamel ground: a fired gradient, a soft kiln glow where play happens and a
 * faint lattice of gold-wire stars. Static; drawn once per size and tone.
 */
export const Backdrop = memo(function Backdrop({
  tone,
  glowY = 0.62,
}: {
  readonly tone: Tone;
  readonly glowY?: number;
}) {
  const { width, height } = useWindowDimensions();
  const lattice = useMemo(() => {
    let lines = '';
    let stars = '';
    for (let k = -height; k < width + height; k += CELL * 2) {
      lines += `M${k} 0L${k + height} ${height}M${k} ${height}L${k + height} 0`;
    }
    for (let y = 0; y <= height + CELL; y += CELL * 2)
      for (
        let x = (y / CELL) % 4 === 0 ? 0 : CELL;
        x <= width + CELL;
        x += CELL * 2
      )
        stars += star(x, y, 2.6);
    return { lines, stars };
  }, [width, height]);
  return (
    <Canvas
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={[tone.ground[0], tone.ground[1]]}
        />
      </Rect>
      <Circle cx={width / 2} cy={height * glowY} r={width * 0.95}>
        <RadialGradient
          c={vec(width / 2, height * glowY)}
          r={width * 0.95}
          colors={[`${tone.glow}55`, `${tone.glow}00`]}
        />
      </Circle>
      <Path
        path={lattice.lines}
        color="rgba(227, 182, 90, 0.045)"
        style="stroke"
        strokeWidth={1}
      />
      <Path path={lattice.stars} color="rgba(227, 182, 90, 0.11)" />
    </Canvas>
  );
});
