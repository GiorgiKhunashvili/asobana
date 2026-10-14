import { memo, useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { CrosswordCell, Level } from '../models/types';
import { fonts, letterLift, motion, palette, radius } from '../theme';

/**
 * One committed event batch, translated into what the board should animate.
 * `sequence` is the store's batch sequence and doubles as the animation token.
 */
export interface BoardMoment {
  readonly sequence: number;
  /** Newly revealed cells, in firing order. */
  readonly revealed: readonly string[];
  readonly source: 'word' | 'hint';
  /** Cells of an already-found word the player traced again. */
  readonly remind: readonly string[];
  readonly celebrate: boolean;
}

export interface CrosswordBoardProps {
  readonly cells: readonly CrosswordCell[];
  readonly grid: Level['grid'];
  /** Space available to the board; cells are sized to fit both bounds. */
  readonly maxWidth?: number;
  readonly maxHeight?: number;
  readonly moment?: BoardMoment | null;
}

const GAP = 5;
const MAX_CELL = 58;
const MIN_CELL = 26;

export function boardCellSize(
  grid: Level['grid'],
  maxWidth: number,
  maxHeight = Infinity,
): number {
  const byWidth = (maxWidth - GAP * (grid.columns - 1)) / grid.columns;
  const byHeight = (maxHeight - GAP * (grid.rows - 1)) / grid.rows;
  return Math.max(MIN_CELL, Math.floor(Math.min(MAX_CELL, byWidth, byHeight)));
}

export function CrosswordBoard({
  cells,
  grid,
  maxWidth = 360,
  maxHeight,
  moment,
}: CrosswordBoardProps) {
  const size = boardCellSize(grid, maxWidth, maxHeight);
  const timing = useMemo(() => {
    const order = new Map<string, number>();
    moment?.revealed.forEach((id, index) => order.set(id, index));
    const lastReveal = Math.max(0, (moment?.revealed.length ?? 0) - 1);
    return {
      order,
      remind: new Set(moment?.remind ?? []),
      wave: lastReveal * motion.cellStagger + motion.revealSettle,
    };
  }, [moment]);
  return (
    <View
      accessibilityLabel="კროსვორდი"
      testID="crossword"
      style={{
        width: grid.columns * size + GAP * (grid.columns - 1),
        height: grid.rows * size + GAP * (grid.rows - 1),
        alignSelf: 'center',
      }}
    >
      {cells.map((cell) => (
        <Cell
          key={cell.id}
          cell={cell}
          size={size}
          revealDelay={(timing.order.get(cell.id) ?? 0) * motion.cellStagger}
          source={moment?.source ?? 'word'}
          remindToken={timing.remind.has(cell.id) ? (moment?.sequence ?? 0) : 0}
          celebrateToken={moment?.celebrate ? moment.sequence : 0}
          celebrateDelay={
            timing.wave + (cell.row + cell.column) * motion.waveStagger
          }
        />
      ))}
    </View>
  );
}

const Cell = memo(function Cell({
  cell,
  size,
  revealDelay,
  source,
  remindToken,
  celebrateToken,
  celebrateDelay,
}: {
  cell: CrosswordCell;
  size: number;
  revealDelay: number;
  source: 'word' | 'hint';
  remindToken: number;
  celebrateToken: number;
  celebrateDelay: number;
}) {
  const revealed = cell.status === 'revealed';
  // Starts filled for cells already revealed on mount; only transitions animate.
  const fill = useSharedValue(revealed ? 1 : 0);
  const pop = useSharedValue(1);
  const flash = useSharedValue(0);
  const gilded = useSharedValue(0);
  const previous = useRef(cell.status);

  useEffect(() => {
    const was = previous.current;
    previous.current = cell.status;
    if (was !== 'locked' || cell.status !== 'revealed') return;
    fill.set(
      withDelay(revealDelay, withSpring(1, { damping: 12, stiffness: 180 })),
    );
    flash.set(
      withDelay(
        revealDelay,
        withSequence(
          withTiming(1, { duration: 90 }),
          withTiming(0, { duration: 560 }),
        ),
      ),
    );
    if (source === 'hint')
      gilded.set(
        withSequence(
          withTiming(1, { duration: 0 }),
          withDelay(revealDelay + 650, withTiming(0, { duration: 700 })),
        ),
      );
  }, [cell.status, revealDelay, source, fill, flash, gilded]);

  useEffect(() => {
    if (!remindToken) return;
    pop.set(
      withSequence(
        withTiming(1.12, { duration: 110 }),
        withSpring(1, motion.spring),
      ),
    );
    flash.set(
      withSequence(
        withTiming(1, { duration: 90 }),
        withTiming(0, { duration: 700 }),
      ),
    );
  }, [remindToken, pop, flash]);

  useEffect(() => {
    if (!celebrateToken) return;
    pop.set(
      withDelay(
        celebrateDelay,
        withSequence(
          withTiming(1.16, { duration: 150 }),
          withSpring(1, motion.spring),
        ),
      ),
    );
    gilded.set(
      withDelay(
        celebrateDelay,
        withSequence(
          withTiming(1, { duration: 150 }),
          withTiming(0, { duration: 900 }),
        ),
      ),
    );
  }, [celebrateToken, celebrateDelay, pop, gilded]);

  const frame = useAnimatedStyle(() => ({ transform: [{ scale: pop.get() }] }));
  const enamel = useAnimatedStyle(() => ({
    opacity: Math.min(1, fill.get() * 1.6),
    transform: [{ scale: 0.25 + 0.75 * fill.get() }],
    backgroundColor: interpolateColor(
      gilded.get(),
      [0, 1],
      [palette.turquoise, palette.gold],
    ),
  }));
  const letter = useAnimatedStyle(() => ({
    opacity: Math.max(0, (fill.get() - 0.35) / 0.65),
    transform: [{ scale: 0.6 + 0.4 * fill.get() }],
  }));
  const ring = useAnimatedStyle(() => ({ opacity: flash.get() }));

  return (
    <Animated.View
      testID={`cell-${cell.id}`}
      accessible
      accessibilityLabel={`რიგი ${cell.row + 1}, სვეტი ${cell.column + 1}, ${cell.letter ?? 'ცარიელი'}`}
      style={[
        styles.cell,
        {
          left: cell.column * (size + GAP),
          top: cell.row * (size + GAP),
          width: size,
          height: size,
        },
        frame,
      ]}
    >
      <View style={styles.well} />
      <Animated.View style={[styles.enamel, enamel]}>
        <View style={styles.shine} />
      </Animated.View>
      {cell.letter !== null && (
        <Animated.Text
          maxFontSizeMultiplier={1}
          style={[
            styles.letter,
            { fontSize: Math.round(size * 0.54), lineHeight: size },
            letterLift(Math.round(size * 0.54)),
            letter,
          ]}
        >
          {cell.letter}
        </Animated.Text>
      )}
      <Animated.View pointerEvents="none" style={[styles.ring, ring]} />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  cell: {
    position: 'absolute',
    borderRadius: radius.cell,
    borderWidth: 1.5,
    borderColor: palette.gold,
    backgroundColor: palette.ivory,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  well: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '78%',
    backgroundColor: 'rgba(156, 110, 31, 0.12)',
  },
  enamel: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  shine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '72%',
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
  },
  letter: {
    fontFamily: fonts.textBold,
    color: palette.ivory,
    textAlign: 'center',
    includeFontPadding: false,
    textShadowColor: 'rgba(8, 40, 37, 0.45)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  ring: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: radius.cell - 1,
    borderWidth: 3,
    borderColor: palette.goldLight,
  },
});
