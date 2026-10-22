import { memo, useMemo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import { PlaceArt } from './PlaceArt';
import { palette, type Scene, type Tone } from '../theme';

const CELL = 34;
const star = (x: number, y: number, s: number) =>
  `M${x - s} ${y - s}h${2 * s}v${2 * s}h${-2 * s}z` +
  `M${x} ${y - s * 1.42}L${x + s * 1.42} ${y}L${x} ${y + s * 1.42}L${x - s * 1.42} ${y}z`;
const dusk = (alpha: number) => `rgba(${palette.dusk}, ${alpha})`;
const DUSK = dusk(1);

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
      {/* SVG draws inside the view tree; a full-screen Skia canvas was an extra
          texture layer composited on every Android frame. */}
      <Svg style={StyleSheet.absoluteFill} width={width} height={height}>
        <Defs>
          <LinearGradient id="top" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={DUSK} stopOpacity={0.5} />
            <Stop offset="1" stopColor={DUSK} stopOpacity={0} />
          </LinearGradient>
          <LinearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={DUSK} stopOpacity={0} />
            <Stop offset="1" stopColor={DUSK} stopOpacity={0.32} />
          </LinearGradient>
        </Defs>
        {veil > 0 && (
          <Rect x={0} y={0} width={width} height={height} fill={dusk(veil)} />
        )}
        <Rect
          x={0}
          y={0}
          width={width}
          height={height * 0.24}
          fill="url(#top)"
        />
        <Rect
          x={0}
          y={height * 0.72}
          width={width}
          height={height * 0.28}
          fill="url(#bottom)"
        />
      </Svg>
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
    <View
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={tone.ground[0]} />
            <Stop offset="1" stopColor={tone.ground[1]} />
          </LinearGradient>
          <RadialGradient
            id="glow"
            cx={width / 2}
            cy={height * glowY}
            r={width * 0.95}
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor={tone.glow} stopOpacity={0x55 / 255} />
            <Stop offset="1" stopColor={tone.glow} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#ground)" />
        <Circle
          cx={width / 2}
          cy={height * glowY}
          r={width * 0.95}
          fill="url(#glow)"
        />
        <Path
          d={lattice.lines}
          fill="none"
          stroke="rgba(227, 182, 90, 0.045)"
          strokeWidth={1}
        />
        <Path d={lattice.stars} fill="rgba(227, 182, 90, 0.11)" />
      </Svg>
    </View>
  );
}
