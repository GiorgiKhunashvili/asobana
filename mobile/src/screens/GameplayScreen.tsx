import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  PrimaryButton,
  RoundButton,
  SecondaryButton,
} from '../components/Buttons';
import { CoinBadge, CoinGlyph } from '../components/CoinBadge';
import { CrosswordBoard } from '../components/CrosswordBoard';
import { Icon } from '../components/Icon';
import { LetterWheel } from '../components/LetterWheel';
import { Screen, TopBar } from '../components/Screen';
import { Txt } from '../components/Text';
import { catalog } from '../content/catalog';
import { isUnlocked } from '../engine/game';
import { selectGameplay } from '../engine/selectors';
import type { GameCommand, GameplayView } from '../models/types';
import { routes } from '../navigation/routes';
import { tileHaptic } from '../services/feedback';
import { gameStore, useGameStore } from '../state/gameStore';
import { levelTone, motion, palette, space } from '../theme';
import { boardMoment, celebrationLength, stripFeedback } from './presentEvents';

const BAR = 60;
const TOPIC = 48;
const STATUS = 34;
const STRIP = 72;
const MAX_CONTENT = 520;

function send(command: GameCommand): void {
  // The store keeps `error` set for failed saves; the screen renders it.
  void gameStore
    .getState()
    .dispatch(command)
    .catch(() => undefined);
}

export function GameplayScreen({ levelId }: { levelId: string | null }) {
  const game = useGameStore((state) => state.game);
  const busy = useGameStore((state) => state.busy);
  const error = useGameStore((state) => state.error);
  const batch = useGameStore((state) => state.eventBatch);
  // Events committed before this screen opened are not replayed.
  const [baseline] = useState(() => gameStore.getState().eventBatch.sequence);
  const unlocked = Boolean(
    game && levelId && isUnlocked(game, catalog, levelId),
  );
  useEffect(() => {
    if (unlocked && levelId && game?.currentLevelId !== levelId)
      send({ type: 'open-level', levelId });
  }, [unlocked, levelId, game?.currentLevelId]);
  const model = useMemo(
    () =>
      game && game.currentLevelId === levelId
        ? selectGameplay(game, catalog)
        : null,
    [game, levelId],
  );
  const tone = levelTone(levelId);
  const fresh = batch.sequence > baseline ? batch : null;
  const cells = model?.cells;
  const moment = useMemo(
    () => (fresh && cells ? boardMoment(fresh, cells) : null),
    [fresh, cells],
  );
  const feedback = useMemo(
    () => (fresh ? stripFeedback(fresh) : null),
    [fresh],
  );

  // A completion committed on this screen fires the board, then hands off to victory.
  const [celebration, setCelebration] = useState<number | null>(null);
  const completedHere = Boolean(
    fresh?.events.some(
      (event) => event.type === 'level-completed' && event.levelId === levelId,
    ),
  );
  // Latched during render so a later batch cannot cancel the hand-off.
  if (completedHere && celebration === null && model)
    setCelebration(celebrationLength(moment, model.grid));
  useFocusEffect(
    useCallback(() => {
      if (celebration === null || !levelId) return;
      const timer = setTimeout(
        () => router.replace(routes.victory(levelId)),
        celebration,
      );
      return () => clearTimeout(timer);
    }, [celebration, levelId]),
  );

  const submit = useCallback(
    (tileIds: readonly string[]) => {
      if (levelId) send({ type: 'submit', levelId, tileIds });
    },
    [levelId],
  );

  if (!unlocked)
    return (
      <Screen tone={tone} header={<TopBar />}>
        <View style={styles.message}>
          <Icon name="lock" size={40} color={palette.gold} />
          <Txt variant="bodyStrong" style={styles.centerText}>
            ეს დონე ჯერ ჩაკეტილია. გაიარე წინა დონეები.
          </Txt>
          <SecondaryButton
            label="მთავარი"
            icon="home"
            onPress={() => router.replace('/')}
          />
        </View>
      </Screen>
    );
  if (!model)
    return (
      <Screen tone={tone} header={<TopBar />}>
        <View style={styles.message}>
          {error ? (
            <>
              <Txt accessibilityRole="alert" style={styles.centerText}>
                დონე ვერ გაიხსნა: {error}
              </Txt>
              <PrimaryButton
                label="ხელახლა ცდა"
                onPress={() => levelId && send({ type: 'open-level', levelId })}
              />
            </>
          ) : (
            <ActivityIndicator color={palette.gold} size="large" />
          )}
        </View>
      </Screen>
    );
  return (
    <GameLayout
      model={model}
      levelNumber={
        catalog.levels.findIndex((level) => level.id === model.levelId) + 1
      }
      tone={tone}
      busy={busy}
      error={error}
      moment={moment}
      feedback={feedback}
      celebrating={celebration !== null}
      onSubmit={submit}
    />
  );
}

function GameLayout({
  model,
  levelNumber,
  tone,
  busy,
  error,
  moment,
  feedback,
  celebrating,
  onSubmit,
}: {
  model: GameplayView;
  levelNumber: number;
  tone: ReturnType<typeof levelTone>;
  busy: boolean;
  error: string | null;
  moment: ReturnType<typeof boardMoment>;
  feedback: ReturnType<typeof stripFeedback>;
  celebrating: boolean;
  onSubmit: (tileIds: readonly string[]) => void;
}) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const content = Math.min(width - space.lg * 2, MAX_CONTENT);
  const wheel = Math.round(Math.min(content - 40, height * 0.4, 330));
  const boardHeight =
    height -
    insets.top -
    insets.bottom -
    BAR -
    TOPIC -
    STATUS -
    STRIP -
    wheel -
    space.xl * 3;
  // Saves take milliseconds; controls ignore presses meanwhile instead of dimming.
  const hint = (kind: 'cell' | 'word') => {
    if (!busy) send({ type: 'hint', levelId: model.levelId, kind });
  };
  return (
    <Screen
      tone={tone}
      glowY={0.7}
      header={
        <TopBar
          title={`დონე ${levelNumber}`}
          trailing={
            <CoinBadge
              coins={model.coins}
              onPress={() => router.push('/shop')}
            />
          }
        />
      }
      contentStyle={styles.content}
    >
      <Txt
        accessibilityRole="header"
        testID="level-topic"
        variant="heading"
        color={palette.goldLight}
        style={styles.topic}
      >
        {model.title}
      </Txt>
      <View
        style={[styles.boardArea, { minHeight: Math.max(boardHeight, 120) }]}
      >
        <CrosswordBoard
          cells={model.cells}
          grid={model.grid}
          maxWidth={content}
          maxHeight={Math.max(boardHeight - space.md * 2, 120)}
          moment={moment}
        />
      </View>
      <Progress
        found={model.foundWords}
        total={model.totalWords}
        bonus={model.bonusCount}
      />
      {error && (
        <Animated.View entering={FadeInDown} style={styles.error}>
          <Txt
            accessibilityRole="alert"
            variant="label"
            color={palette.pomegranateLight}
          >
            შენახვა ვერ მოხერხდა. წინა პროგრესი უსაფრთხოდაა — სცადე ხელახლა.
          </Txt>
          <Txt variant="caption" color={palette.textMuted}>
            {error}
          </Txt>
        </Animated.View>
      )}
      {model.completed ? (
        <Animated.View
          key="complete"
          entering={FadeIn.delay(celebrating ? 500 : 0).duration(motion.slow)}
          style={[styles.complete, { width: content }]}
        >
          <Txt variant="bodyStrong" color={palette.goldLight}>
            დონე გავლილია
          </Txt>
          <PrimaryButton
            label="გაგრძელება"
            testID="level-continue"
            onPress={() => router.replace(routes.victory(model.levelId))}
            style={styles.wide}
          />
        </Animated.View>
      ) : (
        <Animated.View key="play" exiting={FadeOut.duration(motion.base)}>
          <LetterWheel
            key={model.levelId}
            tiles={model.tiles}
            size={wheel}
            width={content}
            tone={tone}
            disabled={busy}
            onSubmit={onSubmit}
            onTileEntered={tileHaptic}
            feedback={feedback}
            idleHint={
              model.foundWords + model.bonusCount === 0
                ? 'შეაერთე ასოები'
                : null
            }
            leading={{
              top: (
                <RoundButton
                  label={`სიტყვის მინიშნება, ${model.wordHintCost} მონეტა`}
                  icon="hintWord"
                  testID="hint-word"
                  disabled={!model.canUseWordHint}
                  onPress={() => hint('word')}
                  badge={<Price amount={model.wordHintCost} />}
                />
              ),
              bottom: (
                <RoundButton
                  label={`ასოს მინიშნება, ${model.cellHintCost} მონეტა`}
                  icon="hintLetter"
                  testID="hint-cell"
                  disabled={!model.canUseCellHint}
                  onPress={() => hint('cell')}
                  badge={<Price amount={model.cellHintCost} />}
                />
              ),
            }}
          />
        </Animated.View>
      )}
    </Screen>
  );
}

function Price({ amount }: { amount: number }) {
  return (
    <View style={styles.price}>
      <CoinGlyph size={12} />
      <Txt variant="caption" style={styles.priceText}>
        {amount}
      </Txt>
    </View>
  );
}

/** One enamel lozenge per crossword word; bonus words keep their own tally. */
function Progress({
  found,
  total,
  bonus,
}: {
  found: number;
  total: number;
  bonus: number;
}) {
  return (
    <View
      accessible
      accessibilityLabel={`${found}/${total} სიტყვა · ბონუსი ${bonus}`}
      testID="word-progress"
      style={styles.progress}
    >
      <View style={styles.lozenges}>
        {Array.from({ length: total }, (_, index) => (
          <View
            key={index}
            style={[styles.lozenge, index < found && styles.lozengeFound]}
          />
        ))}
      </View>
      {bonus > 0 && (
        <Animated.View entering={FadeIn} style={styles.bonus}>
          <Icon name="star" size={14} color={palette.gold} />
          <Txt variant="caption" color={palette.goldLight}>
            ბონუსი {bonus}
          </Txt>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: { alignItems: 'center', paddingBottom: space.md },
  topic: {
    alignSelf: 'stretch',
    textAlign: 'center',
    minHeight: TOPIC,
    paddingVertical: space.sm,
  },
  boardArea: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingVertical: space.md,
  },
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.lg,
  },
  centerText: { textAlign: 'center' },
  progress: {
    height: STATUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.md,
  },
  lozenges: { flexDirection: 'row', gap: 7 },
  lozenge: {
    width: 10,
    height: 10,
    transform: [{ rotate: '45deg' }],
    borderWidth: 1.5,
    borderColor: palette.gold,
  },
  lozengeFound: {
    backgroundColor: palette.turquoise,
    borderColor: palette.goldLight,
  },
  bonus: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  error: {
    alignSelf: 'stretch',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: palette.pomegranate,
    backgroundColor: 'rgba(200, 51, 78, 0.16)',
    padding: space.md,
    gap: 2,
  },
  complete: { alignItems: 'center', gap: space.lg, paddingTop: space.xl },
  wide: { alignSelf: 'stretch' },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 999,
    backgroundColor: palette.ink,
    borderWidth: 1,
    borderColor: palette.gold,
  },
  priceText: { fontSize: 11, lineHeight: 15 },
});
