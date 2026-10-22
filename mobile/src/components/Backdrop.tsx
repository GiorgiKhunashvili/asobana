import { memo } from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { PlaceArt } from './PlaceArt';
import { palette, type Scene, type Tone } from '../theme';

const dusk = (alpha: number) => `rgba(${palette.dusk}, ${alpha})`;
/** Faint gold-wire lattice, one repeating tile (scripts/build-lattice.py). */
const LATTICE = require('../../assets/branding/lattice.png');

/*
 * Backdrops use React Native's own gradients (`experimental_backgroundImage`)
 * and a repeating tile, which the GPU draws directly. A full-screen Skia canvas
 * was an extra texture layer on every Android frame, and a full-screen SVG was
 * rasterized in software on the main thread each time a screen appeared.
 */

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
      {veil > 0 && (
        <View
          style={[StyleSheet.absoluteFill, { backgroundColor: dusk(veil) }]}
        />
      )}
      <View
        style={[
          styles.band,
          {
            top: 0,
            height: height * 0.24,
            experimental_backgroundImage: `linear-gradient(to bottom, ${dusk(0.5)}, ${dusk(0)})`,
          },
        ]}
      />
      <View
        style={[
          styles.band,
          {
            top: height * 0.72,
            height: height * 0.28,
            experimental_backgroundImage: `linear-gradient(to bottom, ${dusk(0)}, ${dusk(0.32)})`,
          },
        ]}
      />
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
  const { width } = useWindowDimensions();
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[
        StyleSheet.absoluteFill,
        {
          experimental_backgroundImage: `linear-gradient(to bottom, ${tone.ground[0]}, ${tone.ground[1]})`,
        },
      ]}
    >
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            experimental_backgroundImage: `radial-gradient(circle ${Math.round(width * 0.95)}px at 50% ${Math.round(glowY * 100)}%, ${tone.glow}55, ${tone.glow}00)`,
          },
        ]}
      />
      <Image
        source={LATTICE}
        resizeMode="repeat"
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  band: { position: 'absolute', left: 0, right: 0 },
});
