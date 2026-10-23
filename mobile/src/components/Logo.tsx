import {
  BlurMask,
  Canvas,
  Circle,
  FillType,
  Group,
  LinearGradient,
  Path,
  Rect,
  RoundedRect,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import { useEffect } from 'react';
import { View } from 'react-native';
import {
  cancelAnimation,
  Easing,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { palette } from '../theme';

/*
 * The Asobana mark, drawn from its vector master (mobile/assets/branding):
 * a gold A whose swipe joins three letter-dots, the word-finding gesture.
 * The swipe takes the colour of the ground behind it, as the icon's navy does.
 * Coordinates are in the master's 512-unit square.
 */
const BODY =
  'M105 438C70 438 49 402 67 370L213 92C233 54 279 54 299 92L445 370C463 402 442 438 407 438C386 438 371 426 362 407L329 342C301 310 211 310 183 342L150 407C141 426 126 438 105 438Z' +
  'M206 258L256 160L306 258Q256 250 206 258Z';
const CORD_1 = 'M256 112L407 394';
const CORD_2 = 'M105 394C140 315 180 282 232 282H347';
const DOTS = [
  [256, 112],
  [407, 394],
  [105, 394],
] as const;
const UNIT = 512;

// Even-odd keeps the A's counter open, so the light sweep skips it.
const svgBody = Skia.Path.MakeFromSVGString(BODY);
const bodyPath = svgBody
  ? Skia.PathBuilder.MakeFromPath(svgBody)
      .setFillType(FillType.EvenOdd)
      .detach()
  : null;

/** Evenly spaced points along the swipe (first stroke, then the second). */
function sampleTrack(count: number) {
  const dense: [number, number][] = [];
  for (let i = 0; i <= 40; i++)
    dense.push([256 + (151 * i) / 40, 112 + (282 * i) / 40]);
  const split = dense.length;
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    const a = (1 - t) ** 3;
    const b = 3 * (1 - t) ** 2 * t;
    const c = 3 * (1 - t) * t ** 2;
    const d = t ** 3;
    dense.push([
      a * 105 + b * 140 + c * 180 + d * 232,
      a * 394 + b * 315 + c * 282 + d * 282,
    ]);
  }
  for (let i = 1; i <= 16; i++) dense.push([232 + (115 * i) / 16, 282]);
  const lengths = [0];
  for (let i = 1; i < dense.length; i++) {
    const jump = i === split; // the swipe lifts between the two strokes
    const [x0, y0] = dense[i - 1]!;
    const [x1, y1] = dense[i]!;
    lengths.push(lengths[i - 1]! + (jump ? 0 : Math.hypot(x1 - x0, y1 - y0)));
  }
  const total = lengths[lengths.length - 1]!;
  const xs: number[] = [];
  const ys: number[] = [];
  let j = 1;
  for (let k = 0; k < count; k++) {
    const at = (total * k) / (count - 1);
    while (j < lengths.length - 1 && lengths[j]! < at) j++;
    const span = lengths[j]! - lengths[j - 1]! || 1;
    const f = Math.min(1, Math.max(0, (at - lengths[j - 1]!) / span));
    xs.push(dense[j - 1]![0] + (dense[j]![0] - dense[j - 1]![0]) * f);
    ys.push(dense[j - 1]![1] + (dense[j]![1] - dense[j - 1]![1]) * f);
  }
  return { xs, ys };
}
const TRACK = sampleTrack(96);

function seg(t: number, start: number, duration: number) {
  'worklet';
  return Math.min(1, Math.max(0, (t - start) / duration));
}
function easeOut(u: number) {
  'worklet';
  return 1 - (1 - u) ** 3;
}
function easeInOut(u: number) {
  'worklet';
  return u < 0.5 ? 4 * u ** 3 : 1 - (-2 * u + 2) ** 3 / 2;
}
/** 0 → 1.25 → 1, like a wheel letter popping in. */
function pop(u: number) {
  'worklet';
  if (u <= 0) return 0;
  return u < 0.6 ? 1.25 * easeOut(u / 0.6) : 1.25 - (0.25 * (u - 0.6)) / 0.4;
}
function trackPoint(u: number) {
  'worklet';
  const index = Math.min(1, Math.max(0, u)) * (TRACK.xs.length - 1);
  const i = Math.min(TRACK.xs.length - 2, Math.max(0, Math.floor(index)));
  const f = Math.min(1, Math.max(0, index - i));
  return {
    x: TRACK.xs[i]! + (TRACK.xs[i + 1]! - TRACK.xs[i]!) * f,
    y: TRACK.ys[i]! + (TRACK.ys[i + 1]! - TRACK.ys[i]!) * f,
  };
}

type Animated<T> = T | SharedValue<T>;

interface DotLook {
  readonly scale: Animated<number>;
  readonly r: Animated<number>;
  readonly color: Animated<string>;
}

/** Draws the mark; every part can be driven by an animated value. */
function MarkCanvas({
  size,
  pad = 0,
  bodyOpacity = 1,
  bodyScale = 1,
  bodyColor = palette.gold,
  cordColor = palette.night,
  cordEnds = [1, 1],
  dots,
  sweepX,
  spark,
  burst,
  burstColors,
}: {
  readonly size: number;
  readonly pad?: number;
  readonly bodyOpacity?: Animated<number>;
  readonly bodyScale?: Animated<number>;
  readonly bodyColor?: Animated<string>;
  readonly cordColor?: Animated<string>;
  readonly cordEnds?: readonly [Animated<number>, Animated<number>];
  readonly dots: readonly [DotLook, DotLook, DotLook];
  readonly sweepX?: SharedValue<number>;
  readonly spark?: {
    readonly x: SharedValue<number>;
    readonly y: SharedValue<number>;
    readonly opacity: SharedValue<number>;
  };
  readonly burst?: SharedValue<number>;
  readonly burstColors?: readonly string[];
}) {
  const k = size / UNIT;
  const bodyTransform = useDerivedValue(() => [
    {
      scale: typeof bodyScale === 'number' ? bodyScale : bodyScale.get(),
    },
  ]);
  const sweepTransform = useDerivedValue(() => [
    { translateX: sweepX ? sweepX.get() : -400 },
  ]);
  return (
    <Canvas style={{ width: size + 2 * pad, height: size + 2 * pad }}>
      <Group
        transform={[{ translateX: pad }, { translateY: pad }, { scale: k }]}
      >
        <Group
          origin={vec(256, 300)}
          transform={bodyTransform}
          opacity={bodyOpacity}
        >
          {/* Soft shadow, so the mark holds on bright paintings. */}
          <Group transform={[{ translateY: 10 }]}>
            <Path path={BODY} fillType="evenOdd" color="rgba(18, 12, 36, 0.45)">
              <BlurMask blur={18} style="normal" />
            </Path>
          </Group>
          <Path path={BODY} fillType="evenOdd" color={bodyColor} />
          {sweepX && bodyPath && (
            <Group clip={bodyPath}>
              <Group transform={sweepTransform}>
                <Rect x={0} y={0} width={150} height={UNIT}>
                  <LinearGradient
                    start={vec(0, 0)}
                    end={vec(150, 0)}
                    colors={[
                      'rgba(255,255,255,0)',
                      'rgba(255,255,255,0.5)',
                      'rgba(255,255,255,0)',
                    ]}
                  />
                </Rect>
              </Group>
            </Group>
          )}
        </Group>
        <Path
          path={CORD_1}
          style="stroke"
          strokeWidth={22}
          strokeCap="round"
          color={cordColor}
          end={cordEnds[0]}
        />
        <Path
          path={CORD_2}
          style="stroke"
          strokeWidth={22}
          strokeCap="round"
          strokeJoin="round"
          color={cordColor}
          end={cordEnds[1]}
        />
        {DOTS.map(([cx, cy], i) => (
          <Dot key={i} cx={cx} cy={cy} look={dots[i]!} />
        ))}
        {spark && (
          <Group opacity={spark.opacity}>
            <Circle
              cx={spark.x}
              cy={spark.y}
              r={28}
              color="rgba(255, 230, 166, 0.28)"
            />
            <Circle
              cx={spark.x}
              cy={spark.y}
              r={13}
              color={palette.goldLight}
            />
          </Group>
        )}
        {burst &&
          Array.from({ length: 18 }, (_, i) => (
            <Tile
              key={i}
              index={i}
              progress={burst}
              color={
                (burstColors ?? TILE_COLORS)[
                  i % (burstColors ?? TILE_COLORS).length
                ]!
              }
            />
          ))}
      </Group>
    </Canvas>
  );
}

function Dot({ cx, cy, look }: { cx: number; cy: number; look: DotLook }) {
  const transform = useDerivedValue(() => [
    { scale: typeof look.scale === 'number' ? look.scale : look.scale.get() },
  ]);
  return (
    <Group origin={vec(cx, cy)} transform={transform}>
      <Circle cx={cx} cy={cy} r={look.r} color={look.color} />
    </Group>
  );
}

const TILE_COLORS = [palette.goldLight, palette.gold, palette.ivory];

/** A small letter tile flung out from a dot when a level is won. */
function Tile({
  index,
  progress,
  color,
}: {
  index: number;
  progress: SharedValue<number>;
  color: string;
}) {
  const [cx, cy] = DOTS[index % 3]!;
  const angle = (index / 18) * Math.PI * 2;
  const reach = 120 + (index % 4) * 36;
  const spin = (index % 2 ? 1 : -1) * 2.1;
  const lag = (index % 5) * 0.06;
  const transform = useDerivedValue(() => {
    const p = easeOut(
      Math.min(1, Math.max(0, (progress.get() - lag) / (1 - lag))),
    );
    return [
      { translateX: Math.cos(angle) * reach * p },
      { translateY: Math.sin(angle) * reach * p },
      { rotate: spin * p },
    ];
  });
  const opacity = useDerivedValue(() => {
    const p = progress.get();
    return p <= lag ? 0 : Math.max(0, 1 - (p - lag) / (1 - lag));
  });
  return (
    <Group origin={vec(cx, cy)} transform={transform} opacity={opacity}>
      <RoundedRect
        x={cx - 16}
        y={cy - 16}
        width={32}
        height={32}
        r={7}
        color={color}
      />
    </Group>
  );
}

/**
 * A spark that runs the whole swipe in `run` ms, once every `period` ms, while
 * `running` is 1.
 */
function useSpark(
  loop: SharedValue<number>,
  running: SharedValue<number>,
  period: number,
  run: number,
) {
  const u = useDerivedValue(() => {
    if (!running.get()) return -1;
    const k = loop.get() % period;
    return k < run ? k / run : -1;
  });
  const x = useDerivedValue(() => (u.get() < 0 ? -100 : trackPoint(u.get()).x));
  const y = useDerivedValue(() => (u.get() < 0 ? -100 : trackPoint(u.get()).y));
  const opacity = useDerivedValue<number>(() => (u.get() < 0 ? 0 : 1));
  return { x, y, opacity };
}

/* ------------------------------------------------------------------ loading */

const STILL: readonly [DotLook, DotLook, DotLook] = [
  { scale: 1, r: 32, color: palette.night },
  { scale: 1, r: 32, color: palette.night },
  { scale: 1, r: 32, color: palette.night },
];

/** Loading indicator: a spark loops along the swipe instead of a spinner. */
export function LoadingLogo({ size }: { readonly size: number }) {
  const reduced = useReducedMotion();
  const loop = useSharedValue(0);
  const running = useSharedValue(reduced ? 0 : 1);
  useEffect(() => {
    if (reduced) return;
    loop.set(
      withRepeat(
        withTiming(1600, { duration: 1600, easing: Easing.linear }),
        -1,
      ),
    );
    return () => cancelAnimation(loop);
  }, [loop, reduced]);
  const spark = useSpark(loop, running, 1600, 1600);
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel="იტვირთება"
      testID="loading-logo"
    >
      <MarkCanvas size={size} pad={size * 0.08} dots={STILL} spark={spark} />
    </View>
  );
}

/* ------------------------------------------------------------------ victory */

const WIN = { end: 2100 } as const;

/**
 * Victory emblem: the A forms, its swipe traces in the place's accent colour,
 * and its dots burst into small gold letter tiles.
 */
export function VictoryLogo({
  size,
  accent,
}: {
  readonly size: number;
  readonly accent: string;
}) {
  const reduced = useReducedMotion();
  const clock = useSharedValue<number>(reduced ? WIN.end : 0);
  useEffect(() => {
    if (reduced) return;
    clock.set(
      withTiming(WIN.end, { duration: WIN.end, easing: Easing.linear }),
    );
    return () => cancelAnimation(clock);
  }, [clock, reduced]);
  const grow = useDerivedValue(() => seg(clock.get(), 0, 600));
  const bodyOpacity = useDerivedValue(() => Math.min(1, grow.get() / 0.7));
  const bodyScale = useDerivedValue(() => {
    const u = grow.get();
    return u < 0.7
      ? 0.6 + 0.46 * easeOut(u / 0.7)
      : 1.06 - (0.06 * (u - 0.7)) / 0.3;
  });
  const cord1 = useDerivedValue(() => easeInOut(seg(clock.get(), 450, 380)));
  const cord2 = useDerivedValue(() => easeInOut(seg(clock.get(), 700, 420)));
  const sweepX = useDerivedValue(() => {
    const u = seg(clock.get(), 1200, 800);
    return u <= 0 ? -400 : -200 + u * 900;
  });
  const burst = useDerivedValue(() => seg(clock.get(), 1050, 1000));
  const d0 = useDerivedValue(() => pop(seg(clock.get(), 300, 380)));
  const d1 = useDerivedValue(() => pop(seg(clock.get(), 440, 380)));
  const d2 = useDerivedValue(() => pop(seg(clock.get(), 580, 380)));
  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel="ასობანა"
      testID="victory-logo"
    >
      <MarkCanvas
        size={size}
        pad={size * 0.32}
        bodyOpacity={bodyOpacity}
        bodyScale={bodyScale}
        cordColor={accent}
        cordEnds={[cord1, cord2]}
        dots={[
          { scale: d0, r: 32, color: accent },
          { scale: d1, r: 32, color: accent },
          { scale: d2, r: 32, color: accent },
        ]}
        sweepX={sweepX}
        burst={burst}
        burstColors={[palette.goldLight, palette.gold, palette.ivory, accent]}
      />
    </View>
  );
}
