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
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { PlaceArt } from './PlaceArt';
import { palette, type Scene, type Tone } from '../theme';

const CELL = 34;
const star = (x: number, y: number, s: number) =>
  `M${x - s} ${y - s}h${2 * s}v${2 * s}h${-2 * s}z` +
  `M${x} ${y - s * 1.42}L${x + s * 1.42} ${y}L${x} ${y + s * 1.42}L${x - s * 1.42} ${y}z`;
const dusk = (alpha: number) => `rgba(${palette.dusk}, ${alpha})`;

/**
 * Chapter background. Normally the chapter's painted Georgian scene, with a soft
 * dusk gradient under the top bar and above the bottom controls; `veil` darkens
 * the whole painting for screens that are mostly text and cards.
 */
export const Backdrop = memo(function Backdrop({
  tone,
  glowY = 0.62,
  veil = 0,
}: {
  readonly tone: Tone;
  readonly glowY?: number;
  readonly veil?: number;
}) {
  return tone.scene ? (
    <SceneBackdrop scene={tone.scene} veil={veil} />
  ) : (
    <EnamelBackdrop tone={tone} glowY={glowY} />
  );
});

function SceneBackdrop({ scene, veil }: { scene: Scene; veil: number }) {
  const { width, height } = useWindowDimensions();
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[StyleSheet.absoluteFill, { backgroundColor: scene.sky }]}
    >
      <PlaceArt scene={scene} variant="full" size={{ width, height }} />
      <Canvas style={StyleSheet.absoluteFill}>
        {veil > 0 && (
          <Rect x={0} y={0} width={width} height={height} color={dusk(veil)} />
        )}
        <Rect x={0} y={0} width={width} height={height * 0.24}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(0, height * 0.24)}
            colors={[dusk(0.5), dusk(0)]}
          />
        </Rect>
        <Rect x={0} y={height * 0.72} width={width} height={height * 0.28}>
          <LinearGradient
            start={vec(0, height * 0.72)}
            end={vec(0, height)}
            colors={[dusk(0), dusk(0.32)]}
          />
        </Rect>
      </Canvas>
    </View>
  );
}

/** Enamel ground: gradient, kiln glow and a faint lattice of gold-wire stars. */
export function EnamelBackdrop({
  tone,
  glowY,
}: {
  tone: Pick<Tone, 'ground' | 'glow'>;
  glowY: number;
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
}
