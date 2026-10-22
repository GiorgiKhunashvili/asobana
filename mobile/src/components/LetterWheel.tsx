import { Canvas, Circle, Path, Skia } from '@shopify/react-native-skia';
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import type { WheelSelection, WheelTile } from '../engine/wheel';
import type { LetterTile } from '../models/types';
import { fonts, letterLift, motion, palette, type Tone } from '../theme';
import { RoundButton } from './Buttons';
import { Icon } from './Icon';
import { useLetterWheel, type LetterWheelProps } from './useLetterWheel';
import { WordStrip, type StripFeedback } from './WordStrip';

export interface LetterWheelViewProps extends LetterWheelProps {
  /** Kept for API compatibility; the light wheel reads the same on every ground. */
  readonly tone?: Tone;
  /** Width of the whole control area; the disc is `size` and sits centered. */
  readonly width?: number;
  readonly feedback?: StripFeedback | null;
  readonly idleHint?: string | null;
  /** Found-word colour for the strip; usually the chapter scene's accent. */
  readonly accent?: string;
  /** Controls beside the disc on the left (e.g. hints). */
  readonly leading?: { readonly top?: ReactNode; readonly bottom?: ReactNode };
  /** Handles on the disc and side controls, for the tutorial's rings. */
  readonly anchors?: {
    readonly disc?: RefObject<View | null>;
    readonly inputMode?: RefObject<View | null>;
    readonly leadingTop?: RefObject<View | null>;
    readonly leadingBottom?: RefObject<View | null>;
  };
}

/** Wheel diameter for a screen: about two thirds of its width, never so small
 * that the adapter's touch circles drop below 44 pt (radius = 9% of size). */
export function wheelSize(content: number, width: number, height: number) {
  return Math.round(
    Math.max(245, Math.min(300, content * 0.7, width * 0.66, height * 0.31)),
  );
}

const SELECTED_SCALE = 1.06;
/** Longest a submitted word waits in the strip for its result. */
const PENDING_MS = 4000;
/** The selection disc is drawn this much larger than the touch circle. */
const HALO = 4;
const HUB = 52;
const shuffleTransition = LinearTransition.springify()
  .damping(17)
  .stiffness(170);

/**
 * Letter wheel: an ivory enamel medallion with large ink letters, the clearest
 * thing on the screen. Tracing draws a pomegranate cord between chosen letters.
 * Input recognition is the Codex-owned `useLetterWheel` adapter; only
 * appearance lives here.
 */
export function LetterWheel(props: LetterWheelViewProps) {
  const { tiles, size, leading } = props;
  // Room beside the disc for the side controls.
  const width = props.width ?? size + 120;
  const disabled = Boolean(props.disabled);
  const [tapMode, setTapMode] = useState(false);
  const [tapIds, setTapIds] = useState<readonly string[]>([]);
  const { onSubmit, onTileEntered } = props;
  // The word just submitted stays in the strip until its own result arrives.
  // Saving takes a moment, and meanwhile the strip fell back to the previous
  // outcome: an old red "not here" made a correct word look rejected.
  const feedbackKey = props.feedback?.key;
  const latestKey = useRef(feedbackKey);
  useEffect(() => {
    latestKey.current = feedbackKey;
  }, [feedbackKey]);
  const [pending, setPending] = useState<{
    readonly letters: readonly string[];
    readonly after: number | undefined;
    readonly tiles: readonly LetterTile[];
  } | null>(null);
  const submit = useCallback(
    (ids: readonly string[]) => {
      setPending({
        letters: ids.map(
          (id) => tiles.find((tile) => tile.id === id)?.letter ?? '',
        ),
        after: latestKey.current,
        tiles,
      });
      onSubmit(ids);
    },
    [tiles, onSubmit],
  );
  // A save that fails publishes no result; let the strip move on regardless.
  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => setPending(null), PENDING_MS);
    return () => clearTimeout(timer);
  }, [pending]);
  const wheel = useLetterWheel({
    tiles,
    size,
    onSubmit: submit,
    disabled: disabled || tapMode,
    ...(props.onTileEntered ? { onTileEntered: props.onTileEntered } : {}),
  });
  const { selection, pointer, layout } = wheel;
  const fontSize = Math.round(size * 0.15);
  // One calm colour per scene for the cord, chosen letters and found cells.
  const accent = props.accent ?? palette.pomegranate;

  const cord = useDerivedValue(() => {
    const path = Skia.PathBuilder.Make();
    const ids = selection.get().tileIds;
    ids.forEach((id, index) => {
      const tile = layout.find((candidate) => candidate.id === id);
      if (!tile) return;
      if (index === 0) path.moveTo(tile.x, tile.y);
      else path.lineTo(tile.x, tile.y);
    });
    if (selection.get().active && ids.length)
      path.lineTo(pointer.get().x, pointer.get().y);
    return path.detach();
  }, [layout]);
  const tapCord = useMemo(() => {
    const path = Skia.PathBuilder.Make();
    tapIds.forEach((id, index) => {
      const tile = layout.find((candidate) => candidate.id === id);
      if (!tile) return;
      if (index === 0) path.moveTo(tile.x, tile.y);
      else path.lineTo(tile.x, tile.y);
    });
    return path.detach();
  }, [tapIds, layout]);
  const tipX = useDerivedValue(() => pointer.get().x);
  const tipY = useDerivedValue(() => pointer.get().y);
  const tipOpacity = useDerivedValue(() => (selection.get().active ? 1 : 0));

  const submitTaps = useCallback(() => {
    if (tapIds.length < 2) return;
    submit(tapIds);
    setTapIds([]);
  }, [submit, tapIds]);
  const tapLetter = useCallback(
    (id: string) => {
      setTapIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
      onTileEntered?.(id);
    },
    [onTileEntered],
  );
  const traced = useMemo(
    () =>
      tapMode
        ? tapIds.map((id) => tiles.find((tile) => tile.id === id)?.letter ?? '')
        : Array.from(wheel.preview),
    [tapMode, tapIds, tiles, wheel.preview],
  );
  const letters =
    traced.length === 0 &&
    pending !== null &&
    pending.after === feedbackKey &&
    pending.tiles === tiles
      ? pending.letters
      : traced;
  const center = size / 2;

  return (
    <View style={{ width, alignItems: 'center' }}>
      <WordStrip
        letters={letters}
        feedback={props.feedback ?? null}
        idleHint={
          tapMode ? 'შეეხე ასოებს თანმიმდევრობით' : (props.idleHint ?? null)
        }
        width={width}
        {...(props.accent ? { accent: props.accent } : {})}
        {...(tapMode
          ? { onClear: () => setTapIds([]), onSubmit: submitTaps }
          : {})}
      />
      <View style={{ width, height: size }}>
        <View
          ref={props.anchors?.disc}
          collapsable={false}
          style={[
            styles.disc,
            { left: (width - size) / 2, width: size, height: size },
          ]}
        >
          <Plate size={size} />
          <Canvas pointerEvents="none" style={StyleSheet.absoluteFill}>
            <Path
              path={tapMode ? tapCord : cord}
              color={accent}
              style="stroke"
              strokeWidth={9}
              strokeCap="round"
              strokeJoin="round"
            />
            {!tapMode && (
              <Circle
                cx={tipX}
                cy={tipY}
                r={7}
                color={accent}
                opacity={tipOpacity}
              />
            )}
          </Canvas>
          {tapMode ? (
            layout.map((tile) => (
              <TapTile
                key={tile.id}
                tile={tile}
                fontSize={fontSize}
                accent={accent}
                index={tiles.findIndex((source) => source.id === tile.id)}
                selected={tapIds.includes(tile.id)}
                disabled={disabled}
                onPress={tapLetter}
              />
            ))
          ) : (
            <GestureDetector gesture={wheel.gesture}>
              <View testID="letter-wheel" style={StyleSheet.absoluteFill}>
                {layout.map((tile) => (
                  <WheelLetter
                    key={tile.id}
                    tile={tile}
                    fontSize={fontSize}
                    accent={accent}
                    selection={selection}
                  />
                ))}
              </View>
            </GestureDetector>
          )}
          {/* Above the gesture view, so a tap on the hub never starts a trace. */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="ასოების არევა"
            hitSlop={4}
            testID="shuffle"
            onPress={() => {
              // Ignored while disabled (a save in flight) without dimming the control.
              if (disabled) return;
              setTapIds([]);
              wheel.shuffle();
            }}
            style={({ pressed }) => [
              styles.hub,
              { left: center - HUB / 2, top: center - HUB / 2 },
              pressed && styles.hubPressed,
            ]}
          >
            <Icon name="shuffle" size={24} color="rgba(27, 24, 56, 0.6)" />
          </Pressable>
        </View>
        {leading?.top && (
          <View
            ref={props.anchors?.leadingTop}
            collapsable={false}
            style={[styles.side, styles.top, styles.left]}
          >
            {leading.top}
          </View>
        )}
        {leading?.bottom && (
          <View
            ref={props.anchors?.leadingBottom}
            collapsable={false}
            style={[styles.side, styles.bottom, styles.left]}
          >
            {leading.bottom}
          </View>
        )}
        <View
          ref={props.anchors?.inputMode}
          collapsable={false}
          style={[styles.side, styles.bottom, styles.right]}
        >
          <RoundButton
            label={tapMode ? 'ბორბლით შეყვანა' : 'შეხებით შეყვანა'}
            accessibilityHint={
              tapMode
                ? 'ასოების გავლება ბორბალზე'
                : 'ასოების არჩევა სათითაოდ შეხებით'
            }
            icon={tapMode ? 'wheel' : 'keypad'}
            active={tapMode}
            testID="input-mode"
            onPress={() => {
              setTapMode(!tapMode);
              setTapIds([]);
              wheel.cancel();
            }}
          />
        </View>
      </View>
    </View>
  );
}

/** Room around the disc for its soft shadow on the painting. */
const SHADOW = 16;

/** Gaussian falloff of the old Skia BlurMask (sigma 10) around the shadow's
 * edge: offsets in sigmas from the edge and the remaining share of its alpha. */
const SHADOW_FALLOFF = [
  [-2, 0.977],
  [-1, 0.841],
  [0, 0.5],
  [1, 0.159],
  [2, 0.023],
] as const;
const SHADOW_SIGMA = 10;
const SHADOW_ALPHA = 0.35;

/** Static medallion: ivory enamel face, gold rim wire and a fine inner ring.
 * Plain views with a native radial-gradient shadow: drawn by the GPU, unlike a
 * Skia canvas (an extra texture layer every Android frame) or an SVG
 * (rasterized in software on the main thread as each level opened).
 * Android caches only this static, bounded layer: the shadow/plate no longer
 * need to be shaded on every shuffle or swipe frame. At the A07's wheel size
 * it costs about 1.3 MiB, released with the view. Letters and the cord remain
 * outside the cache. Memoization also skips React work while tracing words. */
const Plate = memo(function Plate({ size }: { size: number }) {
  const c = size / 2 + SHADOW;
  const edge = size / 2 - 4;
  const outer = edge + 2 * SHADOW_SIGMA;
  const stops = [[-Infinity, 1] as const, ...SHADOW_FALLOFF]
    .map(
      ([sigmas, share]) =>
        `rgba(40, 22, 30, ${(SHADOW_ALPHA * share).toFixed(4)}) ${(
          Math.max(0, (edge + sigmas * SHADOW_SIGMA) / outer) * 100
        ).toFixed(2)}%`,
    )
    .join(', ');
  return (
    <View
      pointerEvents="none"
      renderToHardwareTextureAndroid
      testID="wheel-plate"
      style={{
        position: 'absolute',
        left: -SHADOW,
        top: -SHADOW,
        width: size + SHADOW * 2,
        height: size + SHADOW * 2,
      }}
    >
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: size + SHADOW * 2,
          height: size + SHADOW * 2,
          experimental_backgroundImage: `radial-gradient(circle ${outer}px at ${c}px ${c + 4}px, ${stops})`,
        }}
      />
      <View
        pointerEvents="none"
        style={[
          styles.ring,
          {
            left: SHADOW + 2,
            top: SHADOW + 2,
            width: size - 4,
            height: size - 4,
            borderRadius: size / 2 - 2,
            backgroundColor: palette.parchment,
            opacity: 0.9,
          },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.ring,
          {
            left: SHADOW,
            top: SHADOW,
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 4,
            borderColor: palette.gold,
          },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.ring,
          {
            left: SHADOW + 10.4,
            top: SHADOW + 10.4,
            width: size - 20.8,
            height: size - 20.8,
            borderRadius: size / 2 - 10.4,
            borderWidth: 1.2,
            borderColor: palette.parchmentRing,
          },
        ]}
      />
    </View>
  );
});

/** Visual circle around a letter, centred on the adapter's touch circle. */
function halo(tile: WheelTile) {
  const r = tile.radius + HALO;
  return {
    left: tile.x - r,
    top: tile.y - r,
    width: r * 2,
    height: r * 2,
    borderRadius: r,
  };
}

function letterStyle(tile: WheelTile, fontSize: number) {
  return {
    fontSize,
    lineHeight: (tile.radius + HALO) * 2,
    ...letterLift(fontSize),
  };
}

function WheelLetter({
  tile,
  fontSize,
  accent,
  selection,
}: {
  tile: WheelTile;
  fontSize: number;
  accent: string;
  selection: SharedValue<WheelSelection>;
}) {
  const clear = `${accent}00`;
  const face = useAnimatedStyle(() => {
    const selected = selection.get().tileIds.includes(tile.id);
    return {
      backgroundColor: withTiming(selected ? accent : clear, {
        duration: motion.fast,
      }),
      transform: [
        { scale: withSpring(selected ? SELECTED_SCALE : 1, motion.spring) },
      ],
    };
  });
  const ink = useAnimatedStyle(() => ({
    color: selection.get().tileIds.includes(tile.id)
      ? palette.ivory
      : palette.ink,
  }));
  return (
    <Animated.View
      pointerEvents="none"
      layout={shuffleTransition}
      style={[styles.letterSlot, halo(tile), face]}
    >
      <Animated.Text
        maxFontSizeMultiplier={1}
        style={[styles.letter, letterStyle(tile, fontSize), ink]}
      >
        {tile.letter}
      </Animated.Text>
    </Animated.View>
  );
}

function TapTile({
  tile,
  fontSize,
  accent,
  index,
  selected,
  disabled,
  onPress,
}: {
  tile: WheelTile;
  fontSize: number;
  accent: string;
  index: number;
  selected: boolean;
  disabled: boolean;
  onPress: (id: string) => void;
}) {
  return (
    <Animated.View
      layout={shuffleTransition}
      style={[styles.letterSlot, halo(tile)]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${tile.letter} (${index + 1})`}
        accessibilityState={{ disabled: disabled || selected, selected }}
        disabled={disabled || selected}
        onPress={() => onPress(tile.id)}
        testID={`tap-tile-${tile.id}`}
        style={[
          styles.tapFace,
          { borderRadius: tile.radius + HALO },
          selected && [styles.tapSelected, { backgroundColor: accent }],
        ]}
      >
        <Animated.Text
          maxFontSizeMultiplier={1}
          style={[
            styles.letter,
            letterStyle(tile, fontSize),
            { color: selected ? palette.ivory : palette.ink },
          ]}
        >
          {tile.letter}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  ring: { position: 'absolute', left: 0, top: 0 },
  disc: { position: 'absolute', top: 0 },
  letterSlot: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapFace: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapSelected: {
    transform: [{ scale: SELECTED_SCALE }],
  },
  letter: {
    fontFamily: fonts.textBold,
    textAlign: 'center',
    includeFontPadding: false,
  },
  hub: {
    position: 'absolute',
    width: HUB,
    height: HUB,
    borderRadius: HUB / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(27, 24, 56, 0.05)',
    borderWidth: 1.2,
    borderColor: 'rgba(27, 24, 56, 0.16)',
  },
  hubPressed: { transform: [{ scale: 0.92 }] },
  side: { position: 'absolute' },
  top: { top: 8 },
  bottom: { bottom: 18 },
  left: { left: 0 },
  right: { right: 0 },
});
