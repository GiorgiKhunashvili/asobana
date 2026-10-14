import { Canvas, Circle, Group, Path, vec } from '@shopify/react-native-skia';
import { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { useIsFocused } from 'expo-router';
import {
  cancelAnimation,
  Easing,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { palette } from '../theme';

const ARMS = 7;
const BEADS = 28;
const RAYS = 16;

function rotate(x: number, y: number, angle: number): [number, number] {
  return [
    x * Math.cos(angle) - y * Math.sin(angle),
    x * Math.sin(angle) + y * Math.cos(angle),
  ];
}

/** Seven curved blades turning about a hub, in the manner of the borjgali sun. */
function whirlPath(c: number, r: number): string {
  // One blade in unit space: leaves the hub, sweeps out and hooks back.
  const blade: [number, number][] = [
    [0.16, 0.0],
    [0.42, -0.06],
    [0.7, -0.2],
    [0.92, -0.52],
    [0.66, -0.4],
    [0.4, -0.3],
    [0.12, -0.14],
  ];
  let d = '';
  for (let arm = 0; arm < ARMS; arm++) {
    const angle = (arm / ARMS) * Math.PI * 2;
    const p = blade.map(([x, y]) =>
      rotate(x * r, y * r, angle).map((v) => v + c),
    );
    const [a, b1, b2, tip, k1, k2, end] = p as [number, number][];
    d += `M${a![0]} ${a![1]}C${b1![0]} ${b1![1]} ${b2![0]} ${b2![1]} ${tip![0]} ${tip![1]}`;
    d += `C${k1![0]} ${k1![1]} ${k2![0]} ${k2![1]} ${end![0]} ${end![1]}Z`;
  }
  return d;
}

function raysPath(c: number, inner: number, outer: number): string {
  let d = '';
  for (let i = 0; i < RAYS; i++) {
    const angle = (i / RAYS) * Math.PI * 2;
    const spread = Math.PI / RAYS / 2.4;
    const [x1, y1] = rotate(inner, 0, angle - spread);
    const [x2, y2] = rotate(outer, 0, angle);
    const [x3, y3] = rotate(inner, 0, angle + spread);
    d += `M${x1 + c} ${y1 + c}L${x2 + c} ${y2 + c}L${x3 + c} ${y3 + c}Z`;
  }
  return d;
}

/** Turns queued per run; long enough to look endless, and resumable in place. */
const TURNS = 1000;

/**
 * Gold rosette medallion: whirl, hub, a granulation ring of beads and optional
 * light rays. `period` is seconds per turn; 0 keeps it still. It also rests
 * while its screen is covered (so it never costs frames during play) and when
 * the system asks for reduced motion.
 */
export function Rosette({
  size,
  period = 0,
  rays = false,
}: {
  readonly size: number;
  readonly period?: number;
  readonly rays?: boolean;
}) {
  const c = size / 2;
  const r = rays ? size * 0.3 : size * 0.46;
  const turn = useSharedValue(0);
  const focused = useIsFocused();
  const reduced = useReducedMotion();
  const spinning = Boolean(period) && focused && !reduced;
  useEffect(() => {
    if (!spinning) return;
    // Linear run from the current angle, so pausing and resuming never jumps.
    turn.set(
      withTiming(turn.get() + TURNS, {
        duration: period * 1000 * TURNS,
        easing: Easing.linear,
      }),
    );
    return () => cancelAnimation(turn);
  }, [spinning, period, turn]);
  const spin = useDerivedValue(() => [{ rotate: turn.get() * Math.PI * 2 }]);
  const counter = useDerivedValue(() => [{ rotate: -turn.get() * Math.PI }]);
  const shapes = useMemo(
    () => ({
      whirl: whirlPath(c, r * 0.78),
      rays: raysPath(c, r * 1.12, c),
      beads: Array.from({ length: BEADS }, (_, i) =>
        rotate(r * 0.92, 0, (i / BEADS) * Math.PI * 2).map((v) => v + c),
      ),
    }),
    [c, r],
  );
  const origin = vec(c, c);
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ width: size, height: size }}
    >
      <Canvas style={{ width: size, height: size }}>
        {rays && (
          <Group origin={origin} transform={counter}>
            <Path path={shapes.rays} color="rgba(255, 230, 166, 0.16)" />
          </Group>
        )}
        <Circle cx={c} cy={c} r={r} color={palette.ink} />
        <Circle
          cx={c}
          cy={c}
          r={r}
          color={palette.gold}
          style="stroke"
          strokeWidth={Math.max(2, r * 0.05)}
        />
        <Circle
          cx={c}
          cy={c}
          r={r * 0.84}
          color="rgba(227, 182, 90, 0.5)"
          style="stroke"
          strokeWidth={1}
        />
        {shapes.beads.map(([x, y], i) => (
          <Circle
            key={i}
            cx={x!}
            cy={y!}
            r={Math.max(1.4, r * 0.032)}
            color={palette.goldLight}
          />
        ))}
        <Group origin={origin} transform={spin}>
          <Path path={shapes.whirl} color={palette.gold} />
          <Path
            path={shapes.whirl}
            color={palette.goldDeep}
            style="stroke"
            strokeWidth={1}
          />
        </Group>
        <Circle cx={c} cy={c} r={r * 0.13} color={palette.pomegranate} />
        <Circle
          cx={c}
          cy={c}
          r={r * 0.13}
          color={palette.goldLight}
          style="stroke"
          strokeWidth={1.5}
        />
      </Canvas>
    </View>
  );
}
