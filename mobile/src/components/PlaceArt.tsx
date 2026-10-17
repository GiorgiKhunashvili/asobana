import {
  Canvas,
  Circle,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  vec,
} from '@shopify/react-native-skia';
import { memo, useMemo, useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import { countryById, type Scene } from '../theme';
import { CoverImage } from './CoverImage';

interface Size {
  readonly width: number;
  readonly height: number;
}

/**
 * A stop's painting, cropped to fill its box: the horizon `band` for cards,
 * the full portrait for backdrops. Stops whose painting has not arrived yet get
 * a quiet painted landscape in their country's colours instead.
 */
export function PlaceArt({
  scene,
  variant = 'band',
  size,
}: {
  readonly scene: Scene;
  readonly variant?: 'band' | 'full';
  readonly size?: Size;
}) {
  const source = variant === 'band' ? (scene.band ?? scene.image) : scene.image;
  if (source) return <CoverImage source={source} {...(size && { size })} />;
  return (
    <Placeholder
      sceneId={scene.id}
      countryId={scene.country}
      horizon={variant === 'band' ? 0.5 : 0.64}
      {...(size && { size })}
    />
  );
}

/** Deterministic 0–1 values per stop, so each placeholder differs a little. */
function seeded(id: string) {
  let h = 2166136261;
  for (const c of id) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (k: number) => {
    const x = Math.sin(h * 0.0001 + k * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };
}

function ridge(
  w: number,
  h: number,
  base: number,
  amp: number,
  r: (k: number) => number,
  k: number,
) {
  const steps = 4;
  let d = `M0 ${h}L0 ${base}`;
  let prevX = 0;
  for (let i = 1; i <= steps; i++) {
    const x = (w * i) / steps;
    const peak = base - amp * (0.4 + r(k + i) * 0.9);
    const y = base - amp * 0.15 * (r(k + i + 7) - 0.5);
    d += `Q${prevX + (x - prevX) / 2} ${peak} ${x} ${y}`;
    prevX = x;
  }
  return `${d}L${w} ${h}Z`;
}

const Placeholder = memo(function Placeholder({
  sceneId,
  countryId,
  horizon,
  size,
}: {
  readonly sceneId: string;
  readonly countryId: string;
  readonly horizon: number;
  readonly size?: Size;
}) {
  const [measured, setMeasured] = useState<Size | null>(null);
  const box = size ?? measured;
  const country = countryById(countryId);
  const art = useMemo(() => {
    if (!box) return null;
    const { width: w, height: h } = box;
    const r = seeded(sceneId);
    const y0 = h * horizon;
    const amp = Math.min(h * 0.22, w * 0.18);
    return {
      w,
      h,
      y0,
      sun: {
        x: w * (0.25 + r(1) * 0.5),
        y: y0 - amp * 0.9,
        r: Math.min(w, h) * 0.08,
      },
      far: ridge(w, h, y0, amp * 0.9, r, 10),
      mid: ridge(w, h, y0 + h * 0.08, amp * 0.7, r, 20),
      near: ridge(w, h, y0 + h * 0.17, amp * 0.55, r, 30),
    };
  }, [box, sceneId, horizon]);
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (width !== measured?.width || height !== measured?.height)
      setMeasured({ width, height });
  };
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      onLayout={size ? undefined : onLayout}
      style={[StyleSheet.absoluteFill, { backgroundColor: country.sky[1] }]}
    >
      {art && (
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={art.w} height={art.h}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, art.y0)}
              colors={[country.sky[0], country.sky[1]]}
            />
          </Rect>
          <Circle cx={art.sun.x} cy={art.sun.y} r={art.sun.r * 3}>
            <RadialGradient
              c={vec(art.sun.x, art.sun.y)}
              r={art.sun.r * 3}
              colors={['rgba(255, 236, 200, 0.55)', 'rgba(255, 236, 200, 0)']}
            />
          </Circle>
          <Circle
            cx={art.sun.x}
            cy={art.sun.y}
            r={art.sun.r}
            color="rgba(255, 240, 214, 0.85)"
          />
          <Path path={art.far} color={country.hills[0]} opacity={0.75} />
          <Path path={art.mid} color={country.hills[1]} opacity={0.9} />
          <Path path={art.near} color={country.hills[2]} />
        </Canvas>
      )}
    </View>
  );
});
