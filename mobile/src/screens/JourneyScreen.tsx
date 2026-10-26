import { router, useIsFocused } from 'expo-router';
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  AccessibilityInfo,
  BackHandler,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  type LayoutChangeEvent,
  type ListRenderItem,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  Keyframe,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EnamelBackdrop } from '../components/Backdrop';
import {
  PrimaryButton,
  RoundButton,
  SecondaryButton,
} from '../components/Buttons';
import { CoinBadge } from '../components/CoinBadge';
import { Icon } from '../components/Icon';
import { PlaceArt } from '../components/PlaceArt';
import { PlaceFact } from '../components/PlaceFact';
import { Display, Txt } from '../components/Text';
import { catalog } from '../content/catalog';
import { selectPostcards } from '../engine/postcards';
import { selectChapters, selectLevels } from '../engine/selectors';
import { routes } from '../navigation/routes';
import { blockedHaptic } from '../services/feedback';
import { nextUnfinished } from './nextLevel';
import { useFocusedGame } from '../state/useFocusedGame';
import {
  COUNTRIES,
  countryOf,
  fonts,
  levelLabel,
  palette,
  sceneFor,
  space,
  type Country,
  type Scene,
} from '../theme';

/** Path geometry, in points. Rows have fixed heights so the list can jump. */
const HEADER = 112;
const HEADER_GAP = 36;
const NODE = 64;
const NODE_CURRENT = 82;
const STEP = 92;
const BUBBLE_ROOM = 46;
const ROW_END = 44;
const DIVIDER = 76;
const COUNTRY_CARD = 268;
const COUNTRY_ART = 112;
const PLACE_ART = 150;
const ZIG = [0, 46, 70, 46, 0, -46] as const;

const GROUND = {
  ground: ['#231A3E', palette.night] as const,
  glow: '#5B47A8',
};

type Level = ReturnType<typeof selectLevels>[number];
type Chapter = ReturnType<typeof selectChapters>[number];
type Card = ReturnType<typeof selectPostcards>[number];
type NodeState = 'done' | 'current' | 'open' | 'locked';

interface StopRow {
  readonly kind: 'stop';
  readonly key: string;
  readonly chapter: Chapter;
  readonly number: number;
  readonly country: Country;
  readonly scene: Scene;
  readonly levels: readonly Level[];
  readonly card: Card | undefined;
  readonly currentIndex: number;
  readonly side: 1 | -1;
}
interface CountryRow {
  readonly kind: 'country';
  readonly key: string;
  readonly country: Country;
  readonly number: number;
  readonly first: boolean;
  readonly unlocked: boolean;
  readonly completed: number;
  readonly scene: Scene;
}
type Row = StopRow | CountryRow;
/** What a tap on something still locked was aimed at. */
type Blocked =
  | { readonly kind: 'level' }
  | { readonly kind: 'card'; readonly remaining: number }
  | { readonly kind: 'country' };
type OnBlocked = (what: Blocked) => void;

/** How long a "still locked" note stays up. */
const NOTICE_MS = 2200;
/** Room the floating continue button takes above the bottom bar. */
const CONTINUE_ROOM = 84;

function rowHeight(row: Row) {
  if (row.kind === 'country')
    return (row.first ? space.lg : DIVIDER) + COUNTRY_CARD + space.xl;
  return (
    HEADER +
    HEADER_GAP +
    NODE / 2 +
    (ZIG.length - 1) * STEP +
    NODE / 2 +
    ROW_END +
    (row.currentIndex >= 0 ? BUBBLE_ROOM : 0)
  );
}

/** Vertical centre of the n-th node inside a stop row. */
function nodeY(row: StopRow, index: number) {
  const bubble = row.currentIndex >= 0 && index >= row.currentIndex;
  return (
    HEADER + HEADER_GAP + NODE / 2 + index * STEP + (bubble ? BUBBLE_ROOM : 0)
  );
}

export function JourneyScreen() {
  const focused = useIsFocused();
  const game = useFocusedGame(focused);
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [sheet, setSheet] = useState(false);
  /** The stop whose sheet is open, by ID so it follows fresh progress. */
  const [placeId, setPlaceId] = useState<string | null>(null);
  /** True while the player's next level is scrolled out of view. */
  const [away, setAway] = useState(false);
  const [notice, setNotice] = useState<{ key: number; text: string } | null>(
    null,
  );
  const list = useRef<FlatList<Row>>(null);
  const scrolled = useRef(false);
  const viewport = useRef(0);

  const data = useMemo(() => {
    if (!game) return null;
    const levels = selectLevels(game, catalog);
    const chapters = selectChapters(game, catalog);
    const cards = selectPostcards(game, catalog).filter((card) => !card.legacy);
    const current = nextUnfinished(game);
    const rows: Row[] = [];
    let previous: Country | null = null;
    chapters.forEach((chapter, index) => {
      const country = countryOf(chapter.id);
      if (country !== previous) {
        const stops = chapters.filter((item) =>
          country.chapterIds.includes(item.id),
        );
        rows.push({
          kind: 'country',
          key: `country-${country.id}`,
          country,
          number: COUNTRIES.indexOf(country) + 1,
          first: previous === null,
          unlocked: chapter.unlocked,
          completed: stops.filter(
            (stop) => stop.completedLevels === stop.totalLevels,
          ).length,
          scene: sceneFor(chapter.id),
        });
        previous = country;
      }
      const own = levels.filter((level) => level.chapterId === chapter.id);
      rows.push({
        kind: 'stop',
        key: chapter.id,
        chapter,
        number: index + 1,
        country,
        scene: sceneFor(chapter.id),
        levels: own,
        card: cards.find((card) => card.chapterId === chapter.id),
        currentIndex: own.findIndex((level) => level.id === current?.id),
        side: index % 2 === 0 ? 1 : -1,
      });
    });
    const heights = rows.map(rowHeight);
    const offsets = heights.map((_, i) =>
      heights.slice(0, i).reduce((sum, h) => sum + h, 0),
    );
    const currentRow = rows.findIndex(
      (row) => row.kind === 'stop' && row.currentIndex >= 0,
    );
    const here = rows[currentRow];
    const focus =
      here?.kind === 'stop'
        ? offsets[currentRow]! + nodeY(here, here.currentIndex)
        : 0;
    const stopTop = here ? offsets[currentRow]! : 0;
    const country = here ? here.country : COUNTRIES[COUNTRIES.length - 1]!;
    const countryStops = chapters.filter((chapter) =>
      country.chapterIds.includes(chapter.id),
    );
    return {
      rows,
      heights,
      offsets,
      current,
      focus,
      stopTop,
      country,
      countryDone: countryStops.filter(
        (stop) => stop.completedLevels === stop.totalLevels,
      ).length,
      countryTotal: countryStops.length,
      chapters,
      levelsDone: levels.filter((level) => level.completed).length,
      levelsTotal: levels.length,
    };
  }, [game]);

  const getItemLayout = useCallback(
    (_: ArrayLike<Row> | null | undefined, index: number) => ({
      length: data?.heights[index] ?? 0,
      offset: data?.offsets[index] ?? 0,
      index,
    }),
    [data],
  );
  // Locked things answer a tap with what opens them, rather than nothing.
  const nextNumber = data?.current?.number ?? null;
  const blocked = useCallback<OnBlocked>(
    (what) => {
      const text =
        what.kind === 'card'
          ? `ბარათამდე დარჩა ${what.remaining} დონე`
          : what.kind === 'country'
            ? 'გაიხსნება წინა ქვეყნის შემდეგ'
            : nextNumber
              ? `ჯერ გაიარე დონე ${nextNumber}`
              : 'ეს დონე ჯერ ჩაკეტილია';
      blockedHaptic();
      AccessibilityInfo.announceForAccessibility(text);
      setNotice((last) => ({ key: (last?.key ?? 0) + 1, text }));
    },
    [nextNumber],
  );
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(null), NOTICE_MS);
    return () => clearTimeout(timer);
  }, [notice]);

  const renderItem = useCallback<ListRenderItem<Row>>(
    ({ item }) =>
      item.kind === 'stop' ? (
        <StopSection
          row={item}
          width={width}
          onBlocked={blocked}
          onOpen={setPlaceId}
        />
      ) : (
        <CountrySection row={item} width={width} />
      ),
    [width, blocked],
  );

  // The continue button shows only while the next level is out of view.
  const scrollY = useRef(0);
  const track = useCallback(() => {
    if (!data?.current || !viewport.current) return setAway(false);
    const node = space.sm + data.focus;
    const y = scrollY.current;
    const out =
      node + NODE_CURRENT / 2 < y ||
      node - NODE_CURRENT / 2 > y + viewport.current - CONTINUE_ROOM;
    setAway(out);
  }, [data]);
  useEffect(track, [track]);
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollY.current = event.nativeEvent.contentOffset.y;
      track();
    },
    [track],
  );

  // Open at the player's next level rather than at the start of the journey.
  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      viewport.current = event.nativeEvent.layout.height;
      if (scrolled.current || !data) return track();
      scrolled.current = true;
      // Show the stop's painting too when its next level still fits below it.
      const fromHeader = data.stopTop - space.sm;
      const offset = Math.max(
        0,
        data.focus + NODE_CURRENT - fromHeader < viewport.current
          ? fromHeader
          : data.focus - viewport.current * 0.55,
      );
      list.current?.scrollToOffset({ offset, animated: false });
      scrollY.current = offset;
      track();
    },
    [data, track],
  );

  if (!game || !data) return null;
  const current = data.current;
  const place = data.rows.find(
    (row): row is StopRow => row.kind === 'stop' && row.chapter.id === placeId,
  );
  const sheetOpen = sheet || Boolean(place);
  const jumpTo = (country: Country) => {
    const index = data.rows.findIndex(
      (row) => row.kind === 'country' && row.country === country,
    );
    setSheet(false);
    if (index >= 0)
      list.current?.scrollToOffset({
        offset: data.offsets[index]!,
        animated: true,
      });
  };
  return (
    <View style={styles.root}>
      <EnamelBackdrop tone={GROUND} glowY={0.45} />
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`${data.country.name}, ${data.countryDone} / ${data.countryTotal} ადგილი. მოგზაურობის ნახვა`}
          testID="journey-pill"
          onPress={() => setSheet(true)}
          style={({ pressed }) => [styles.pill, pressed && styles.pressed]}
        >
          <Icon name="route" size={20} color={palette.goldLight} />
          <Txt variant="label" numberOfLines={1} style={styles.pillName}>
            {data.country.name}
          </Txt>
          <Txt
            variant="caption"
            color={palette.goldLight}
            style={[styles.bold, styles.pillCount]}
          >
            {`${data.countryDone}/${data.countryTotal}`}
          </Txt>
          <View style={styles.mini}>
            <View
              style={[
                styles.miniFill,
                {
                  width: `${(100 * data.countryDone) / Math.max(1, data.countryTotal)}%`,
                },
              ]}
            />
          </View>
        </Pressable>
        <CoinBadge coins={game.coins} onPress={() => router.push('/coins')} />
      </View>
      <FlatList
        ref={list}
        data={data.rows}
        keyExtractor={(row) => row.key}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        onLayout={onLayout}
        onScroll={onScroll}
        scrollEventThrottle={64}
        initialNumToRender={3}
        maxToRenderPerBatch={2}
        windowSize={5}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: space.sm,
          paddingBottom: space.xl + CONTINUE_ROOM,
        }}
        testID="journey-path"
      />
      {away && current && (
        <Animated.View
          entering={FadeInDown.duration(220)}
          exiting={FadeOut.duration(160)}
          style={styles.continue}
        >
          <PrimaryButton
            label="გაგრძელება"
            detail={`დონე ${current.number} · ${levelLabel(current.id)}`}
            icon="play"
            testID="path-continue"
            onPress={() => router.push(routes.game(current.id))}
          />
        </Animated.View>
      )}
      {sheet && (
        <JourneySheet
          chapters={data.chapters}
          current={data.country}
          levelsDone={data.levelsDone}
          levelsTotal={data.levelsTotal}
          onClose={() => setSheet(false)}
          onJump={jumpTo}
          onBlocked={blocked}
        />
      )}
      {place && (
        <PlaceSheet
          row={place}
          width={width}
          onClose={() => setPlaceId(null)}
        />
      )}
      {notice && (
        <Animated.View
          key={notice.key}
          entering={FadeInDown.duration(200)}
          exiting={FadeOut.duration(200)}
          pointerEvents="none"
          testID="path-notice"
          style={[
            styles.notice,
            {
              bottom:
                away && current && !sheetOpen
                  ? CONTINUE_ROOM + space.sm
                  : space.lg,
            },
          ]}
        >
          <Icon name="lock" size={18} color={palette.goldLight} />
          <Txt variant="label">{notice.text}</Txt>
        </Animated.View>
      )}
    </View>
  );
}

/* ------------------------------------------------------------------ rows */

const StopSection = memo(function StopSection({
  row,
  width,
  onBlocked,
  onOpen,
}: {
  row: StopRow;
  width: number;
  onBlocked: OnBlocked;
  onOpen: (chapterId: string) => void;
}) {
  const cx = width / 2;
  const k = Math.min(1.25, width / 402);
  const xOf = (index: number) => cx + ZIG[index]! * k * row.side;
  const done = row.levels.filter((level) => level.completed).length;
  const first = row.levels[0]?.number ?? 0;
  const last = row.levels[row.levels.length - 1]?.number ?? 0;
  const locked = !row.chapter.unlocked;
  const states: NodeState[] = row.levels.map((level, index) =>
    level.completed
      ? 'done'
      : index === row.currentIndex
        ? 'current'
        : level.unlocked
          ? 'open'
          : 'locked',
  );
  const cardState: NodeState = row.card?.collected ? 'done' : 'locked';
  const points = [...states, cardState].map((state, index) => ({
    x: xOf(index),
    y: nodeY(row, index),
    state,
  }));
  return (
    <View style={{ height: rowHeight(row) }}>
      <Pressable
        style={({ pressed }) => [
          styles.header,
          locked && styles.headerLocked,
          pressed && styles.pressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel={`ადგილი ${row.number}, ${row.chapter.title}, ${done} / ${row.levels.length} დონე${locked ? ', ჩაკეტილია' : ''}`}
        accessibilityHint="ადგილის შესახებ"
        testID={`stop-${row.chapter.id}`}
        onPress={() => onOpen(row.chapter.id)}
      >
        <PlaceArt
          scene={row.scene}
          size={{ width: width - 2 * space.lg, height: HEADER }}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: locked
                ? 'rgba(18, 12, 36, 0.7)'
                : `${row.scene.accent}A6`,
            },
          ]}
        />
        <View style={styles.headerText}>
          <Display
            variant="eyebrow"
            color={palette.goldLight}
            numberOfLines={1}
          >
            {`ადგილი ${row.number} · ${row.country.name}`}
          </Display>
          <Display variant="heading" numberOfLines={1} style={styles.shadow}>
            {row.chapter.title}
          </Display>
          <Txt variant="caption" style={styles.shadow}>
            {locked
              ? `დონე ${first}–${last}`
              : `დონე ${first}–${last} · ${done}/${row.levels.length}`}
          </Txt>
        </View>
        {/* Status only; the whole card opens the place sheet. */}
        <View style={styles.headerMark} pointerEvents="none">
          <Icon
            name={locked ? 'lock' : row.card?.collected ? 'check' : 'card'}
            size={26}
            color={palette.goldLight}
          />
        </View>
      </Pressable>
      {points.slice(1).map((point, index) => {
        const from = points[index]!;
        const lit = point.state === 'done' || point.state === 'current';
        return [0.36, 0.5, 0.64].map((t) => (
          <View
            key={`${index}-${t}`}
            style={[
              styles.dot,
              lit && styles.dotLit,
              {
                left: from.x + (point.x - from.x) * t - 3,
                top: from.y + (point.y - from.y) * t - 3,
              },
            ]}
          />
        ));
      })}
      {row.levels.map((level, index) => (
        <PathNode
          key={level.id}
          x={points[index]!.x}
          y={points[index]!.y}
          state={states[index]!}
          label={level.number}
          accent={row.scene.accent}
          accessibilityLabel={`დონე ${level.number}${
            level.completed ? ', გავლილია' : level.unlocked ? '' : ', ჩაკეტილია'
          }`}
          testID={`level-${level.id}`}
          onPress={
            level.unlocked
              ? () => router.push(routes.game(level.id))
              : () => onBlocked({ kind: 'level' })
          }
        />
      ))}
      <PostcardNode
        x={points[ZIG.length - 1]!.x}
        y={points[ZIG.length - 1]!.y}
        collected={Boolean(row.card?.collected)}
        place={row.chapter.title}
        testID={`path-postcard-${row.chapter.id}`}
        onPress={
          row.card?.collected
            ? () => router.push(routes.postcard(row.chapter.id))
            : () =>
                onBlocked({
                  kind: 'card',
                  remaining: row.card?.remaining ?? row.levels.length,
                })
        }
      />
      {(row.card?.collected || row.currentIndex >= 0) && (
        <Stamp
          scene={row.scene}
          collected={Boolean(row.card?.collected)}
          remaining={row.card?.remaining ?? 0}
          left={row.side === 1 ? space.xl : width - space.xl - STAMP_W}
          top={nodeY(row, 1) - 30}
          side={row.side}
        />
      )}
    </View>
  );
});

function CountrySection({ row, width }: { row: CountryRow; width: number }) {
  return (
    <View style={{ height: rowHeight(row) }}>
      {!row.first && (
        <View style={styles.divider}>
          <View style={styles.dash} />
          <View style={styles.ship}>
            <Icon name="route" size={24} color={palette.goldLight} />
          </View>
          <View style={styles.dash} />
        </View>
      )}
      <View
        style={[styles.country, { marginTop: row.first ? space.lg : 0 }]}
        accessibilityRole="header"
        accessibilityLabel={`ქვეყანა ${row.number}: ${row.country.name}, ${row.country.chapterIds.length} ადგილი${row.unlocked ? '' : ', ჩაკეტილია'}`}
        testID={`country-${row.country.id}`}
      >
        <View style={styles.countryArt}>
          <PlaceArt
            scene={row.scene}
            size={{ width: width - 2 * space.lg, height: COUNTRY_ART }}
          />
          {!row.unlocked && <View style={styles.countryVeil} />}
        </View>
        <View style={styles.countryBody}>
          <Display variant="eyebrow" color={palette.gold}>
            {`ქვეყანა ${row.number} · ${COUNTRIES.length}-დან`}
          </Display>
          <Display variant="title">{row.country.name}</Display>
          <Txt variant="caption" color={palette.textMuted} numberOfLines={2}>
            {`${row.country.chapterIds.length} ადგილი · ${row.country.chapterIds.length * 5} დონე · ${row.country.route}`}
          </Txt>
          {row.unlocked ? (
            <Txt
              variant="caption"
              color={palette.goldLight}
              style={styles.bold}
            >
              {`${row.completed}/${row.country.chapterIds.length} ადგილი გავლილია`}
            </Txt>
          ) : (
            <View style={styles.note}>
              <Icon name="lock" size={16} color={palette.goldLight} />
              <Txt
                variant="caption"
                color={palette.goldLight}
                style={styles.bold}
              >
                გაიხსნება წინა ქვეყნის შემდეგ
              </Txt>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

/* ------------------------------------------------------------------ nodes */

const DEPTH = 6;
const FACES: Record<NodeState, { face: string; depth: string; ring?: string }> =
  {
    done: {
      face: '#ECBE55',
      depth: palette.goldDeep,
      ring: 'rgba(255, 236, 190, 0.8)',
    },
    current: { face: '#FBF1DC', depth: '#B99A5C', ring: palette.gold },
    open: { face: palette.ivory, depth: '#B99A5C' },
    locked: { face: '#3A3157', depth: '#221B39' },
  };

/** A locked coin shakes its head when tapped. */
const SHAKE = new Keyframe({
  0: { transform: [{ translateX: 0 }] },
  20: { transform: [{ translateX: -7 }] },
  50: { transform: [{ translateX: 7 }] },
  75: { transform: [{ translateX: -4 }] },
  100: { transform: [{ translateX: 0 }] },
}).duration(280);

/**
 * A raised enamel button: a face over a darker rim that it sinks into when
 * pressed. Locked coins stay up and shake instead.
 */
function Coin({
  width,
  height,
  radius,
  state,
  ringWidth = 1.5,
  accessibilityLabel,
  testID,
  onPress,
  children,
}: {
  width: number;
  height: number;
  radius: number;
  state: NodeState;
  ringWidth?: number;
  accessibilityLabel: string;
  testID: string;
  onPress: (() => void) | null;
  children: ReactNode;
}) {
  const look = FACES[state];
  const locked = state === 'locked';
  // Each tap on a locked coin remounts it, which replays the shake.
  const [shakes, setShakes] = useState(0);
  return (
    <Animated.View key={shakes} {...(shakes > 0 && { entering: SHAKE })}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{
          disabled: locked || !onPress,
          selected: state === 'current',
        }}
        disabled={!onPress}
        testID={testID}
        onPress={
          onPress &&
          (() => {
            if (locked) setShakes((count) => count + 1);
            onPress();
          })
        }
        style={{ width, height: height + DEPTH }}
      >
        {({ pressed }) => (
          <>
            <View
              style={[
                styles.coin,
                {
                  width,
                  height,
                  borderRadius: radius,
                  top: DEPTH,
                  backgroundColor: look.depth,
                },
              ]}
            />
            <View
              style={[
                styles.coin,
                styles.coinFace,
                {
                  width,
                  height,
                  borderRadius: radius,
                  top: pressed && !locked ? DEPTH - 2 : 0,
                  backgroundColor: look.face,
                  borderColor: look.ring ?? 'transparent',
                  borderWidth: look.ring ? ringWidth : 0,
                },
              ]}
            >
              {children}
            </View>
          </>
        )}
      </Pressable>
    </Animated.View>
  );
}

function PathNode({
  x,
  y,
  state,
  label,
  accent,
  accessibilityLabel,
  testID,
  onPress,
}: {
  x: number;
  y: number;
  state: NodeState;
  label: number;
  accent: string;
  accessibilityLabel: string;
  testID: string;
  onPress: (() => void) | null;
}) {
  const size = state === 'current' ? NODE_CURRENT : NODE;
  return (
    <View
      style={[styles.nodeBox, { left: x - size / 2, top: y - size / 2 }]}
      pointerEvents="box-none"
      // A stable handle on the next level for the device flows in e2e/.
      {...(state === 'current' && { testID: 'path-current' })}
    >
      {state === 'current' && <Pulse size={size} />}
      {state === 'current' && <Bubble size={size} />}
      <Coin
        width={size}
        height={size}
        radius={size / 2}
        state={state}
        ringWidth={state === 'current' ? 4 : 1.5}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        onPress={onPress}
      >
        {state === 'done' ? (
          <CheckMark color="#6B4510" />
        ) : state === 'current' ? (
          <PlayMark color={accent} />
        ) : (
          <Txt
            variant="number"
            color={state === 'open' ? palette.ink : '#A79CC6'}
            style={styles.nodeNumber}
          >
            {label}
          </Txt>
        )}
      </Coin>
    </View>
  );
}

function PostcardNode({
  x,
  y,
  collected,
  place,
  testID,
  onPress,
}: {
  x: number;
  y: number;
  collected: boolean;
  place: string;
  testID: string;
  onPress: (() => void) | null;
}) {
  return (
    <View style={[styles.nodeBox, { left: x - 35, top: y - 26 }]}>
      <Coin
        width={70}
        height={52}
        radius={18}
        state={collected ? 'done' : 'locked'}
        accessibilityLabel={`${place}, ბარათი${collected ? '' : ', ჯერ არ არის შეგროვებული'}`}
        testID={testID}
        onPress={onPress}
      >
        <CardMark color={collected ? '#6B4510' : '#8A7FB0'} />
      </Coin>
    </View>
  );
}

/*
 * Coin glyphs are plain views: a path shows hundreds of coins, and a Skia
 * canvas per glyph made the list slow to mount.
 */
function CheckMark({ color }: { color: string }) {
  return <View style={[styles.check, { borderColor: color }]} />;
}

function PlayMark({ color }: { color: string }) {
  return <View style={[styles.play, { borderLeftColor: color }]} />;
}

function CardMark({ color }: { color: string }) {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={[styles.cardSun, { backgroundColor: color }]} />
      <View style={[styles.cardHill, { left: 2, backgroundColor: color }]} />
      <View style={[styles.cardHill, { left: 11, backgroundColor: color }]} />
    </View>
  );
}

const STAMP_W = 92;
const STAMP_ART = { width: STAMP_W - 18, height: 90 };

function Stamp({
  scene,
  collected,
  remaining,
  left,
  top,
  side,
}: {
  scene: Scene;
  collected: boolean;
  remaining: number;
  left: number;
  top: number;
  side: 1 | -1;
}) {
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[
        styles.stamp,
        { left, top, transform: [{ rotate: `${side * -6}deg` }] },
      ]}
    >
      <View style={[styles.stampPaper, !collected && styles.stampEmpty]}>
        {collected ? (
          <View style={styles.stampArt}>
            <PlaceArt scene={scene} size={STAMP_ART} />
          </View>
        ) : (
          <View style={[styles.stampArt, styles.stampUnknown]}>
            <Display variant="title" color="rgba(167, 156, 198, 0.7)">
              ?
            </Display>
          </View>
        )}
      </View>
      <Txt
        variant="caption"
        color={collected ? palette.goldLight : '#A79CC6'}
        style={[styles.stampCaption, styles.bold]}
        numberOfLines={1}
      >
        {collected ? 'შეგროვდა' : `${remaining} დონე დარჩა`}
      </Txt>
    </View>
  );
}

/** Loops only while the path is on screen (hidden stack screens keep animating). */
function useLoop(
  start: (t: ReturnType<typeof useSharedValue<number>>) => void,
) {
  const reduced = useReducedMotion();
  const focused = useIsFocused();
  const t = useSharedValue(0);
  useEffect(() => {
    if (reduced || !focused) {
      cancelAnimation(t);
      t.set(0);
      return;
    }
    start(t);
    // `start` is a stable module-level description of the loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, focused, t]);
  return { t, reduced };
}

const pulseLoop = (t: ReturnType<typeof useSharedValue<number>>) =>
  t.set(
    withRepeat(
      withTiming(1, { duration: 2200, easing: Easing.out(Easing.quad) }),
      -1,
    ),
  );
const bobLoop = (t: ReturnType<typeof useSharedValue<number>>) =>
  t.set(
    withRepeat(
      withSequence(
        withTiming(1, { duration: 800, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 800, easing: Easing.inOut(Easing.quad) }),
      ),
      -1,
    ),
  );

function Pulse({ size }: { size: number }) {
  const { t, reduced } = useLoop(pulseLoop);
  const style = useAnimatedStyle(() => ({
    opacity: reduced ? 0.6 : 1 - t.get(),
    transform: [{ scale: 0.95 + t.get() * 0.45 }],
  }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.pulse,
        {
          width: size + 20,
          height: size + 20,
          borderRadius: (size + 20) / 2,
          left: -10,
          top: -10,
        },
        style,
      ]}
    />
  );
}

function Bubble({ size }: { size: number }) {
  const { t } = useLoop(bobLoop);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: -t.get() * 5 }],
  }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.bubble, { bottom: size + 6, left: size / 2 - 60 }, style]}
    >
      <View style={styles.bubbleBody}>
        <Txt variant="label" color={palette.ink}>
          დაწყება
        </Txt>
      </View>
      <View style={styles.bubbleTail} />
    </Animated.View>
  );
}

/* ------------------------------------------------------------------ chrome */

function JourneySheet({
  chapters,
  current,
  levelsDone,
  levelsTotal,
  onClose,
  onJump,
  onBlocked,
}: {
  chapters: readonly Chapter[];
  current: Country;
  levelsDone: number;
  levelsTotal: number;
  onClose: () => void;
  onJump: (country: Country) => void;
  onBlocked: OnBlocked;
}) {
  const stopsDone = chapters.filter(
    (chapter) => chapter.completedLevels === chapter.totalLevels,
  ).length;
  return (
    <Sheet title="შენი მოგზაურობა" testID="journey-sheet" onClose={onClose}>
      <View style={styles.sum}>
        <Txt variant="caption">{`${stopsDone} / ${chapters.length} ადგილი`}</Txt>
        <Txt variant="caption">{`${levelsDone} / ${levelsTotal} დონე`}</Txt>
      </View>
      <View style={styles.big}>
        <View
          style={[
            styles.bigFill,
            {
              width: `${Math.max(2, (100 * levelsDone) / Math.max(1, levelsTotal))}%`,
            },
          ]}
        />
      </View>
      <View style={styles.legs}>
        <View style={styles.legLine} />
        {COUNTRIES.map((country) => {
          const stops = chapters.filter((chapter) =>
            country.chapterIds.includes(chapter.id),
          );
          const done = stops.filter(
            (stop) => stop.completedLevels === stop.totalLevels,
          ).length;
          const open = stops.some((stop) => stop.unlocked);
          const here = country === current;
          return (
            <Pressable
              key={country.id}
              accessibilityRole="button"
              accessibilityLabel={`${country.name}, ${done} / ${stops.length} ადგილი${open ? '' : ', ჩაკეტილია'}${here ? ', შენ აქ ხარ' : ''}`}
              accessibilityState={{ disabled: !open }}
              testID={`journey-country-${country.id}`}
              onPress={() =>
                open ? onJump(country) : onBlocked({ kind: 'country' })
              }
              style={({ pressed }) => [styles.leg, pressed && styles.pressed]}
            >
              <View
                style={[
                  styles.legDot,
                  here && styles.legDotHere,
                  open && !here && styles.legDotOpen,
                ]}
              >
                <Icon
                  name={here ? 'route' : open ? 'check' : 'lock'}
                  size={18}
                  color={
                    here ? palette.ink : open ? palette.goldLight : '#A79CC6'
                  }
                />
              </View>
              <View style={styles.legBody}>
                <View style={styles.legTitle}>
                  <Txt
                    variant="bodyStrong"
                    color={open ? palette.text : palette.textMuted}
                  >
                    {country.name}
                  </Txt>
                  {here && (
                    <View style={styles.here}>
                      <Txt
                        variant="caption"
                        color={palette.ink}
                        style={styles.bold}
                      >
                        შენ აქ ხარ
                      </Txt>
                    </View>
                  )}
                </View>
                <Txt
                  variant="caption"
                  color={palette.textMuted}
                  numberOfLines={2}
                >
                  {`${stops.length} ადგილი · ${country.route}`}
                </Txt>
                {open && (
                  <View style={styles.legBar}>
                    <View
                      style={[
                        styles.legFill,
                        {
                          width: `${(100 * done) / Math.max(1, stops.length)}%`,
                        },
                      ]}
                    />
                  </View>
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
    </Sheet>
  );
}

/**
 * Bottom sheet over the path: dimmed backdrop, title row and close button.
 * Fifteen countries outgrow a phone screen, so the sheet stops short of the top
 * and its body scrolls under the title: the close button and a strip of
 * backdrop stay reachable. Android's back button closes it too.
 */
function Sheet({
  title,
  eyebrow,
  testID,
  onClose,
  children,
}: {
  title: string;
  eyebrow?: string;
  testID: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        onClose();
        return true;
      },
    );
    return () => subscription.remove();
  }, [onClose]);
  return (
    <View style={StyleSheet.absoluteFill}>
      <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.dim}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="დახურვა"
          style={StyleSheet.absoluteFill}
          onPress={onClose}
        />
      </Animated.View>
      <Animated.View
        entering={SlideInDown.springify().damping(18)}
        exiting={SlideOutDown}
        style={styles.sheet}
        testID={testID}
        accessibilityViewIsModal
      >
        <View style={styles.sheetHead}>
          <View style={styles.sheetTitle}>
            {eyebrow && (
              <Display variant="eyebrow" color={palette.gold} numberOfLines={1}>
                {eyebrow}
              </Display>
            )}
            <Display variant="title" color={palette.goldLight}>
              {title}
            </Display>
          </View>
          <RoundButton
            label="დახურვა"
            icon="close"
            size={40}
            onPress={onClose}
          />
        </View>
        <ScrollView
          style={styles.sheetBody}
          showsVerticalScrollIndicator={false}
          testID={`${testID}-body`}
        >
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
}

/**
 * A stop up close: its painting, progress and, once the player has arrived,
 * its "იცოდი?" fact, with ways on to its next level or its postcard.
 */
function PlaceSheet({
  row,
  width,
  onClose,
}: {
  row: StopRow;
  width: number;
  onClose: () => void;
}) {
  const arrived = row.chapter.unlocked;
  const done = row.levels.filter((level) => level.completed).length;
  const first = row.levels[0]?.number ?? 0;
  const last = row.levels[row.levels.length - 1]?.number ?? 0;
  const next = row.currentIndex >= 0 ? row.levels[row.currentIndex] : null;
  const collected = Boolean(row.card?.collected);
  const go = (to: () => void) => () => {
    onClose();
    to();
  };
  return (
    <Sheet
      title={row.chapter.title}
      eyebrow={`ადგილი ${row.number} · ${row.country.name}`}
      testID="place-sheet"
      onClose={onClose}
    >
      <View style={styles.place}>
        <View style={styles.placeArt}>
          <PlaceArt
            scene={row.scene}
            size={{ width: width - 2 * space.xl, height: PLACE_ART }}
          />
          {!arrived && <View style={styles.countryVeil} />}
        </View>
        <View>
          <Txt variant="caption" color={palette.textMuted}>
            {arrived
              ? `დონე ${first}–${last} · ${done}/${row.levels.length} გავლილია`
              : `დონე ${first}–${last}`}
          </Txt>
          {arrived && (
            <Txt variant="caption" color={palette.textMuted}>
              {collected
                ? 'ბარათი შეგროვდა'
                : `ბარათამდე დარჩა ${row.card?.remaining ?? row.levels.length} დონე`}
            </Txt>
          )}
        </View>
        {arrived ? (
          <PlaceFact chapterId={row.chapter.id} />
        ) : (
          <View style={styles.note}>
            <Icon name="lock" size={16} color={palette.goldLight} />
            <Txt variant="bodyStrong" color={palette.goldLight}>
              ჯერ არ ჩასულხარ
            </Txt>
          </View>
        )}
        {next && (
          <PrimaryButton
            label="გაგრძელება"
            detail={`დონე ${next.number} · ${levelLabel(next.id)}`}
            icon="play"
            testID="place-continue"
            onPress={go(() => router.push(routes.game(next.id)))}
          />
        )}
        {collected && (
          <SecondaryButton
            label="ბარათის ნახვა"
            icon="card"
            testID="place-postcard"
            onPress={go(() => router.push(routes.postcard(row.chapter.id)))}
          />
        )}
      </View>
    </Sheet>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: palette.night },
  pressed: { opacity: 0.8 },
  bold: { fontFamily: fonts.textBold },
  shadow: {
    textShadowColor: 'rgba(18, 12, 36, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg,
    paddingBottom: space.sm,
    backgroundColor: palette.night,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(227, 182, 90, 0.18)',
  },
  pill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    height: 44,
    paddingHorizontal: space.md,
    borderRadius: 22,
    backgroundColor: '#2A1F45',
    borderWidth: 1.5,
    borderColor: 'rgba(227, 182, 90, 0.55)',
  },
  pillName: { flexShrink: 1 },
  pillCount: { marginLeft: 'auto' },
  mini: {
    position: 'absolute',
    left: 22,
    right: 22,
    bottom: 5,
    height: 3,
    borderRadius: 2,
    backgroundColor: 'rgba(248, 240, 222, 0.16)',
    overflow: 'hidden',
  },
  miniFill: { height: '100%', borderRadius: 4, backgroundColor: palette.gold },

  header: {
    position: 'absolute',
    left: space.lg,
    right: space.lg,
    top: 0,
    height: HEADER,
    borderRadius: 22,
    overflow: 'hidden',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 230, 166, 0.45)',
  },
  headerLocked: { borderColor: 'rgba(167, 156, 198, 0.35)' },
  headerText: { paddingLeft: space.lg, paddingRight: 76, gap: 2 },
  headerMark: {
    position: 'absolute',
    right: space.lg + 4,
    opacity: 0.9,
  },
  dot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(167, 156, 198, 0.45)',
  },
  dotLit: { backgroundColor: palette.gold },
  nodeBox: { position: 'absolute' },
  coin: { position: 'absolute', left: 0 },
  coinFace: { alignItems: 'center', justifyContent: 'center' },
  nodeNumber: { fontSize: 19, lineHeight: 24 },
  check: {
    width: 12,
    height: 22,
    marginTop: -6,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderRadius: 1.5,
    transform: [{ rotate: '45deg' }],
  },
  play: {
    width: 0,
    height: 0,
    marginLeft: 6,
    borderLeftWidth: 22,
    borderTopWidth: 13,
    borderBottomWidth: 13,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  card: {
    width: 30,
    height: 23,
    borderWidth: 2.4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  cardSun: {
    position: 'absolute',
    right: 4,
    top: 3,
    width: 5,
    height: 5,
    borderRadius: 3,
  },
  cardHill: {
    position: 'absolute',
    bottom: -7,
    width: 12,
    height: 12,
    transform: [{ rotate: '45deg' }],
  },
  pulse: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'rgba(255, 230, 166, 0.75)',
  },
  bubble: { position: 'absolute', width: 120, alignItems: 'center' },
  bubbleBody: {
    paddingHorizontal: space.lg,
    paddingVertical: 7,
    borderRadius: 14,
    backgroundColor: palette.ivory,
    borderBottomWidth: 3,
    borderBottomColor: '#B99A5C',
  },
  bubbleTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#B99A5C',
  },
  stamp: { position: 'absolute', width: STAMP_W, alignItems: 'center' },
  stampPaper: {
    width: STAMP_W,
    height: 108,
    padding: 7,
    backgroundColor: '#FBF4E4',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D9C49A',
  },
  stampEmpty: {
    backgroundColor: '#2A2245',
    borderColor: 'rgba(167, 156, 198, 0.5)',
  },
  stampArt: { flex: 1, overflow: 'hidden' },
  stampUnknown: { alignItems: 'center', justifyContent: 'center' },
  stampCaption: { marginTop: space.xs, width: 120, textAlign: 'center' },

  divider: {
    height: DIVIDER,
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    paddingHorizontal: space.lg,
  },
  dash: {
    flex: 1,
    borderTopWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(227, 182, 90, 0.5)',
  },
  ship: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2A1F45',
    borderWidth: 2,
    borderColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  country: {
    marginHorizontal: space.lg,
    height: COUNTRY_CARD,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#221A3A',
    borderWidth: 1.5,
    borderColor: 'rgba(227, 182, 90, 0.45)',
  },
  countryArt: { height: COUNTRY_ART, overflow: 'hidden' },
  countryVeil: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(18, 12, 36, 0.55)',
  },
  countryBody: { padding: space.lg, gap: 2 },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    marginTop: space.xs,
  },

  continue: {
    position: 'absolute',
    left: space.lg,
    right: space.lg,
    bottom: space.md,
    alignItems: 'center',
  },
  notice: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg,
    paddingVertical: space.sm + 2,
    borderRadius: 999,
    backgroundColor: '#2A1F45',
    borderWidth: 1.5,
    borderColor: 'rgba(227, 182, 90, 0.55)',
  },

  dim: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(8, 5, 16, 0.62)' },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // Leaves the status bar and the top bar dimmed above it, tappable to close.
    maxHeight: '85%',
    paddingHorizontal: space.xl,
    paddingTop: space.lg,
    paddingBottom: space.xl + space.md,
    backgroundColor: '#1E1733',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1.5,
    borderColor: 'rgba(227, 182, 90, 0.45)',
  },
  sheetHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: space.md,
  },
  sheetTitle: { flex: 1 },
  sheetBody: { flexGrow: 0, flexShrink: 1 },
  place: { gap: space.md, marginTop: space.md },
  placeArt: { height: PLACE_ART, borderRadius: 18, overflow: 'hidden' },
  sum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: space.sm,
  },
  big: {
    height: 10,
    borderRadius: 5,
    marginTop: space.sm,
    backgroundColor: 'rgba(248, 240, 222, 0.14)',
    overflow: 'hidden',
  },
  bigFill: { height: '100%', borderRadius: 5, backgroundColor: palette.gold },
  legs: { marginTop: space.lg },
  legLine: {
    position: 'absolute',
    left: 21,
    top: 30,
    bottom: 40,
    borderLeftWidth: 2.5,
    borderStyle: 'dashed',
    borderColor: 'rgba(227, 182, 90, 0.4)',
  },
  leg: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 68,
  },
  legDot: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2E2650',
    borderWidth: 2,
    borderColor: 'rgba(167, 156, 198, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legDotOpen: { borderColor: palette.gold },
  legDotHere: {
    backgroundColor: palette.gold,
    borderColor: palette.goldLight,
    borderWidth: 3,
  },
  legBody: { flex: 1, gap: 2 },
  legTitle: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  here: {
    paddingHorizontal: space.sm,
    borderRadius: 9,
    backgroundColor: palette.goldLight,
  },
  legBar: {
    height: 7,
    width: 150,
    borderRadius: 4,
    marginTop: 4,
    backgroundColor: 'rgba(248, 240, 222, 0.14)',
    overflow: 'hidden',
  },
  legFill: { height: '100%', borderRadius: 4, backgroundColor: palette.gold },
});
