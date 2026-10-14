import {
  Canvas,
  Circle,
  Group,
  Path,
  RadialGradient,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import { useCallback, useMemo, useState, type ReactNode } from 'react';
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
import {
  chapterTone,
  fonts,
  letterLift,
  motion,
  palette,
  type Tone,
} from '../theme';
import { RoundButton } from './Buttons';
import { Icon, STAR8 } from './Icon';
import { useLetterWheel, type LetterWheelProps } from './useLetterWheel';
import { WordStrip, type StripFeedback } from './WordStrip';

export interface LetterWheelViewProps extends LetterWheelProps {
  /** Enamel ground of the current chapter; defaults to the first chapter's. */
  readonly tone?: Tone;
  /** Width of the whole control area; the disc is `size` and sits centered. */
  readonly width?: number;
  readonly feedback?: StripFeedback | null;
  readonly idleHint?: string | null;
  /** Controls for the free corners left of the disc (e.g. hints). */
  readonly leading?: { readonly top?: ReactNode; readonly bottom?: ReactNode };
}

const SELECTED_SCALE = 1.13;
const shuffleTransition = LinearTransition.springify()
  .damping(17)
  .stiffness(170);

/**
 * Cloisonné letter wheel. Gold wire partitions run from the center to each
 * letter; tracing draws a molten gold wire between letters. Input recognition
 * is the Codex-owned `useLetterWheel` adapter; only appearance lives here.
 */
export function LetterWheel(props: LetterWheelViewProps) {
  const { tiles, size, leading } = props;
  const tone = props.tone ?? chapterTone(null);
  // Room beside the disc for the corner controls.
  const width = props.width ?? size + 120;
  const disabled = Boolean(props.disabled);
  const [tapMode, setTapMode] = useState(false);
  const [tapIds, setTapIds] = useState<readonly string[]>([]);
  const wheel = useLetterWheel({
    tiles,
    size,
    onSubmit: props.onSubmit,
    disabled: disabled || tapMode,
    ...(props.onTileEntered ? { onTileEntered: props.onTileEntered } : {}),
  });
  const { selection, pointer, layout } = wheel;

  const wire = useDerivedValue(() => {
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
  const tapWire = useMemo(() => {
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
  const tipOpacity = useDerivedValue(() =>
    selection.get().active ? withTiming(1, { duration: 80 }) : 0,
  );

  const submitTaps = useCallback(() => {
    props.onSubmit(tapIds);
    setTapIds([]);
  }, [props, tapIds]);
  const tapLetter = useCallback(
    (id: string) => {
      setTapIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
      props.onTileEntered?.(id);
    },
    [props],
  );
  const letters = useMemo(
    () =>
      tapMode
        ? tapIds.map((id) => tiles.find((tile) => tile.id === id)?.letter ?? '')
        : Array.from(wheel.preview),
    [tapMode, tapIds, tiles, wheel.preview],
  );
  const center = size / 2;
  const hub = size * 0.15;

  return (
    <View style={{ width, alignItems: 'center' }}>
      <WordStrip
        letters={letters}
        feedback={props.feedback ?? null}
        idleHint={
          tapMode ? 'შეეხე ასოებს თანმიმდევრობით' : (props.idleHint ?? null)
        }
        width={Math.min(width, size + 40)}
        {...(tapMode ? { onClear: () => setTapIds([]) } : {})}
      />
      <View style={{ width, height: size }}>
        <View
          style={[
            styles.disc,
            { left: (width - size) / 2, width: size, height: size },
          ]}
        >
          <Plate size={size} tone={tone} layout={layout} hub={hub} />
          <Canvas pointerEvents="none" style={StyleSheet.absoluteFill}>
            <Path
              path={tapMode ? tapWire : wire}
              color={palette.goldDeep}
              style="stroke"
              strokeWidth={11}
              strokeCap="round"
              strokeJoin="round"
            />
            <Path
              path={tapMode ? tapWire : wire}
              color={palette.gold}
              style="stroke"
              strokeWidth={6.5}
              strokeCap="round"
              strokeJoin="round"
            />
            <Path
              path={tapMode ? tapWire : wire}
              color={palette.goldLight}
              style="stroke"
              strokeWidth={2}
              strokeCap="round"
              strokeJoin="round"
            />
            {!tapMode && (
              <Circle
                cx={tipX}
                cy={tipY}
                r={7}
                color={palette.goldLight}
                opacity={tipOpacity}
              />
            )}
          </Canvas>
          {tapMode ? (
            <>
              {layout.map((tile) => (
                <TapTile
                  key={tile.id}
                  tile={tile}
                  index={tiles.findIndex((source) => source.id === tile.id)}
                  selected={tapIds.includes(tile.id)}
                  disabled={disabled}
                  onPress={tapLetter}
                />
              ))}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="შემოწმება"
                accessibilityState={{ disabled: disabled || tapIds.length < 2 }}
                disabled={disabled || tapIds.length < 2}
                onPress={submitTaps}
                testID="tap-submit"
                style={({ pressed }) => [
                  styles.submit,
                  {
                    left: center - hub,
                    top: center - hub,
                    width: hub * 2,
                    height: hub * 2,
                    borderRadius: hub,
                  },
                  tapIds.length < 2 && styles.submitIdle,
                  pressed && styles.submitPressed,
                ]}
              >
                <Icon
                  name="check"
                  size={hub}
                  color={tapIds.length < 2 ? palette.textMuted : palette.ivory}
                  strokeWidth={2.6}
                />
              </Pressable>
            </>
          ) : (
            <GestureDetector gesture={wheel.gesture}>
              <View testID="letter-wheel" style={StyleSheet.absoluteFill}>
                {layout.map((tile) => (
                  <WheelTileView
                    key={tile.id}
                    tile={tile}
                    selection={selection}
                  />
                ))}
              </View>
            </GestureDetector>
          )}
        </View>
        {leading?.top && (
          <View style={[styles.corner, styles.top, styles.left]}>
            {leading.top}
          </View>
        )}
        {leading?.bottom && (
          <View style={[styles.corner, styles.bottom, styles.left]}>
            {leading.bottom}
          </View>
        )}
        <View style={[styles.corner, styles.top, styles.right]}>
          <RoundButton
            label="ასოების არევა"
            icon="shuffle"
            testID="shuffle"
            onPress={() => {
              // Ignored while disabled (a save in flight) without dimming the control.
              if (disabled) return;
              setTapIds([]);
              wheel.shuffle();
            }}
          />
        </View>
        <View style={[styles.corner, styles.bottom, styles.right]}>
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

/** Static enamel plate: rim wires, partitions to each letter and the hub star. */
function Plate({
  size,
  tone,
  layout,
  hub,
}: {
  size: number;
  tone: Tone;
  layout: readonly WheelTile[];
  hub: number;
}) {
  const c = size / 2;
  const partitions = useMemo(
    () =>
      layout
        .map((tile) => {
          const dx = tile.x - c;
          const dy = tile.y - c;
          const length = Math.hypot(dx, dy) || 1;
          const ux = dx / length;
          const uy = dy / length;
          const end = length - tile.radius - 5;
          return `M${c + ux * (hub + 4)} ${c + uy * (hub + 4)}L${c + ux * end} ${c + uy * end}`;
        })
        .join(''),
    [layout, c, hub],
  );
  const star = hub * 0.9;
  return (
    <Canvas pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Circle cx={c} cy={c} r={c - 1}>
        <RadialGradient
          c={vec(c, c * 0.8)}
          r={c * 1.1}
          colors={[tone.raised, tone.ground[1]]}
        />
      </Circle>
      <Circle
        cx={c}
        cy={c}
        r={c - 2}
        color={palette.gold}
        style="stroke"
        strokeWidth={2.5}
      />
      <Circle
        cx={c}
        cy={c}
        r={c - 8}
        color="rgba(227, 182, 90, 0.45)"
        style="stroke"
        strokeWidth={1}
      />
      <Path
        path={partitions}
        color="rgba(227, 182, 90, 0.42)"
        style="stroke"
        strokeWidth={1.2}
      />
      <Circle
        cx={c}
        cy={c}
        r={hub}
        color="rgba(227, 182, 90, 0.55)"
        style="stroke"
        strokeWidth={1.4}
      />
      <Group
        transform={[
          { translateX: c - star / 2 },
          { translateY: c - star / 2 },
          { scale: star / 24 },
        ]}
      >
        <Path path={STAR8} color={palette.gold} opacity={0.75} />
      </Group>
    </Canvas>
  );
}

function tileFrame(tile: WheelTile) {
  return {
    left: tile.x - tile.radius,
    top: tile.y - tile.radius,
    width: tile.radius * 2,
    height: tile.radius * 2,
    borderRadius: tile.radius,
  };
}

function WheelTileView({
  tile,
  selection,
}: {
  tile: WheelTile;
  selection: SharedValue<WheelSelection>;
}) {
  const face = useAnimatedStyle(() => {
    const selected = selection.get().tileIds.includes(tile.id);
    return {
      backgroundColor: withTiming(
        selected ? palette.pomegranate : palette.ivory,
        {
          duration: motion.fast,
        },
      ),
      borderColor: selected ? palette.goldLight : palette.gold,
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
      style={[styles.tile, tileFrame(tile), face]}
    >
      <Animated.Text
        maxFontSizeMultiplier={1}
        style={[styles.letter, letterSize(tile), ink]}
      >
        {tile.letter}
      </Animated.Text>
    </Animated.View>
  );
}

function TapTile({
  tile,
  index,
  selected,
  disabled,
  onPress,
}: {
  tile: WheelTile & LetterTile;
  index: number;
  selected: boolean;
  disabled: boolean;
  onPress: (id: string) => void;
}) {
  return (
    <Animated.View
      layout={shuffleTransition}
      style={[styles.tapSlot, tileFrame(tile)]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${tile.letter} (${index + 1})`}
        accessibilityState={{ disabled: disabled || selected, selected }}
        disabled={disabled || selected}
        onPress={() => onPress(tile.id)}
        testID={`tap-tile-${tile.id}`}
        style={[
          styles.tile,
          styles.tapFace,
          { borderRadius: tile.radius },
          selected && styles.tileSelected,
        ]}
      >
        <Animated.Text
          maxFontSizeMultiplier={1}
          style={[
            styles.letter,
            letterSize(tile),
            { color: selected ? palette.ivory : palette.ink },
          ]}
        >
          {tile.letter}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
}

const letterSize = (tile: WheelTile) => {
  const fontSize = Math.round(tile.radius * 1.08);
  // The face has a 2pt border on each side; centre within the inner box.
  return { fontSize, lineHeight: tile.radius * 2 - 4, ...letterLift(fontSize) };
};

const styles = StyleSheet.create({
  disc: { position: 'absolute', top: 0 },
  tile: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: palette.gold,
    backgroundColor: palette.ivory,
  },
  tapSlot: { position: 'absolute' },
  tapFace: { position: 'relative', flex: 1 },
  tileSelected: {
    backgroundColor: palette.pomegranate,
    borderColor: palette.goldLight,
    transform: [{ scale: SELECTED_SCALE }],
  },
  letter: {
    fontFamily: fonts.textBold,
    textAlign: 'center',
    includeFontPadding: false,
  },
  submit: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.pomegranate,
    borderWidth: 2,
    borderColor: palette.goldLight,
  },
  submitIdle: { backgroundColor: palette.ink, borderColor: palette.hairline },
  submitPressed: { transform: [{ scale: 0.92 }] },
  corner: { position: 'absolute' },
  top: { top: 2 },
  bottom: { bottom: 14 },
  left: { left: 0 },
  right: { right: 0 },
});
