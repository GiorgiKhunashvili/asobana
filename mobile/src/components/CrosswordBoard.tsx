import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
  ZoomIn,
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
  /** Colour of found cells; usually the chapter scene's accent. */
  readonly accent?: string;
}

const GAP = 4;
/** Large enough that a short, square board fills a phone's width. */
const MAX_CELL = 84;
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
  accent = palette.turquoise,
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
          accent={accent}
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
  accent,
  remindToken,
  celebrateToken,
  celebrateDelay,
}: {
  cell: CrosswordCell;
  size: number;
  revealDelay: number;
  source: 'word' | 'hint';
  accent: string;
  remindToken: number;
  celebrateToken: number;
  celebrateDelay: number;
}) {
  const revealed = cell.status === 'revealed';
  // Only cells revealed while this board is on screen play the entrance.
  const [lockedAtMount] = useState(!revealed);
  /*
   * Every animated value below rests at its initial value (scale 1, opacity
   * 0). The revealed look itself is static React styling, mounted with the
   * cell's enamel, so a revealed letter can never be left invisible by an
   * interrupted or reset animation.
   */
  const pop = useSharedValue(1);
  const flash = useSharedValue(0);
  const gilded = useSharedValue(0);
  const previous = useRef(cell.status);

  useEffect(() => {
    const was = previous.current;
    previous.current = cell.status;
    if (was !== 'locked' || cell.status !== 'revealed') return;
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
  }, [cell.status, revealDelay, source, flash, gilded]);

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
  const gold = useAnimatedStyle(() => ({ opacity: gilded.get() }));
  const ring = useAnimatedStyle(() => ({ opacity: flash.get() }));
  const fontSize = Math.round(size * 0.56);

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
          borderRadius: corner(size),
        },
        frame,
      ]}
    >
      {revealed && (
        <Animated.View
          {...(lockedAtMount
            ? {
                entering: ZoomIn.delay(revealDelay)
                  .springify()
                  .damping(12)
                  .stiffness(180),
              }
            : {})}
          style={[styles.enamel, { backgroundColor: accent }]}
        >
          <Animated.View style={[styles.enamel, styles.gold, gold]} />
          {cell.letter !== null && (
            <Animated.Text
              maxFontSizeMultiplier={1}
              style={[
                styles.letter,
                { fontSize, lineHeight: size },
                letterLift(fontSize),
              ]}
            >
              {cell.letter}
            </Animated.Text>
          )}
        </Animated.View>
      )}
      <Animated.View
        pointerEvents="none"
        style={[styles.ring, { borderRadius: corner(size) - 1 }, ring]}
      />
    </Animated.View>
  );
});

/** Corners grow with the cell so large tiles stay as soft as small ones. */
const corner = (size: number) => Math.max(radius.cell, Math.round(size * 0.16));

const styles = StyleSheet.create({
  // Flat tiles: frosted white when empty, solid scene colour edge to edge when
  // found. No outlines, gloss or bevels.
  cell: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enamel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gold: { backgroundColor: palette.gold },
  letter: {
    fontFamily: fonts.textBold,
    color: '#FFFFFF',
    textAlign: 'center',
    includeFontPadding: false,
  },
  ring: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 2.5,
    borderColor: palette.goldLight,
  },
});
