import { router, useFocusEffect } from 'expo-router';
import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type RefObject,
} from 'react';
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
import { CoachMarks } from '../components/CoachMarks';
import { CoinBadge, CoinGlyph } from '../components/CoinBadge';
import { BonusMeter } from '../components/BonusMeter';
import { CrosswordBoard } from '../components/CrosswordBoard';
import { Icon } from '../components/Icon';
import { LetterWheel, wheelSize } from '../components/LetterWheel';
import { Screen, TopBar } from '../components/Screen';
import { Txt } from '../components/Text';
import { STRIP_HEIGHT } from '../components/WordStrip';
import { catalog } from '../content/catalog';
import { isUnlocked } from '../engine/game';
import { selectGameplay } from '../engine/selectors';
import type { GameCommand, GameplayView } from '../models/types';
import { routes, toJourney } from '../navigation/routes';
import { tileHaptic } from '../services/feedback';
import { gameStore, useGameStore } from '../state/gameStore';
import {
  levelLabel,
  levelTone,
  motion,
  onScene,
  palette,
  space,
} from '../theme';
import { nextUnfinished } from './nextLevel';
import { boardMoment, celebrationLength, stripFeedback } from './presentEvents';
import { tutorialSteps, type TutorialAnchor } from './tutorial';

const BAR = 60;
/** Topic line plus the word-progress lozenges under it. */
const TITLE = 50;
const PROGRESS = 18;
const MAX_CONTENT = 520;
/** The tutorial waits for the screen to finish sliding in, so its rings land on the controls. */
const TUTORIAL_DELAY = 600;

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
            label="მოგზაურობა"
            icon="route"
            onPress={toJourney}
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
      next={game ? nextUnfinished(game) : null}
      tutorial={game?.tutorialSeen === false}
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
  next,
  tutorial,
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
  /** Where "continue" leads when a finished level is opened to look back. */
  next: ReturnType<typeof nextUnfinished>;
  /** The save has not recorded the first-time tutorial as seen. */
  tutorial: boolean;
  onSubmit: (tileIds: readonly string[]) => void;
}) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const content = Math.min(width - space.md * 2, MAX_CONTENT);
  const wheel = wheelSize(content, width, height);
  // The board takes every point the header, strip and wheel leave over.
  const boardHeight =
    height -
    insets.top -
    insets.bottom -
    BAR -
    TITLE -
    STRIP_HEIGHT -
    wheel -
    space.sm -
    space.xs * 2;
  // Saves take milliseconds; controls ignore presses meanwhile instead of dimming.
  const hint = (kind: 'cell' | 'word') => {
    if (!busy) send({ type: 'hint', levelId: model.levelId, kind });
  };
  const coaching = useTutorial(tutorial && !model.completed && !celebrating);
  const [{ anchors, steps }] = useState(createTutorial);
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
              onPress={() => router.push('/coins')}
            />
          }
        />
      }
      contentStyle={styles.content}
    >
      <View style={styles.title}>
        <Txt
          accessibilityRole="header"
          testID="level-topic"
          variant="heading"
          numberOfLines={1}
          style={[styles.topic, onScene]}
        >
          {levelLabel(model.levelId) || model.title}
        </Txt>
        <Progress
          found={model.foundWords}
          total={model.totalWords}
          bonus={model.bonusCount}
          bonusMeter={model.bonusMeter}
          freeHints={model.freeCellHints}
          accent={tone.scene.accent}
          bonusRef={anchors.bonus}
        />
      </View>
      <View
        style={[styles.boardArea, { minHeight: Math.max(boardHeight, 120) }]}
      >
        <CrosswordBoard
          cells={model.cells}
          grid={model.grid}
          maxWidth={content}
          maxHeight={Math.max(boardHeight, 120)}
          moment={moment}
          accent={tone.scene.accent}
        />
      </View>
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
      {model.completed && !celebrating ? (
        // Opened again to look back: the solved board, then on to the real next level.
        <Animated.View
          key="review"
          entering={FadeIn.duration(motion.slow)}
          style={[styles.complete, { width: content }]}
        >
          <Txt variant="bodyStrong" style={onScene}>
            ეს დონე უკვე გავლილია
          </Txt>
          {next ? (
            <PrimaryButton
              label="გაგრძელება"
              detail={`დონე ${next.number} · ${levelLabel(next.id)}`}
              testID="review-continue"
              onPress={() => router.replace(routes.game(next.id))}
              style={styles.wide}
            />
          ) : null}
          <SecondaryButton
            label="მოგზაურობა"
            icon="route"
            testID="review-journey"
            onPress={toJourney}
            style={styles.wide}
          />
        </Animated.View>
      ) : model.completed ? (
        <Animated.View
          key="complete"
          entering={FadeIn.delay(celebrating ? 500 : 0).duration(motion.slow)}
          style={[styles.complete, { width: content }]}
        >
          <Txt variant="bodyStrong" style={onScene}>
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
            accent={tone.scene.accent}
            disabled={busy}
            onSubmit={onSubmit}
            onTileEntered={tileHaptic}
            feedback={feedback}
            idleHint={
              model.foundWords + model.bonusCount === 0
                ? 'შეაერთე ასოები'
                : null
            }
            anchors={{
              disc: anchors.wheel,
              inputMode: anchors.inputMode,
              leadingTop: anchors.wordHint,
              leadingBottom: anchors.cellHint,
            }}
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
                  label={
                    model.freeCellHints > 0
                      ? `ასოს უფასო მინიშნება, დარჩენილია ${model.freeCellHints}`
                      : `ასოს მინიშნება, ${model.cellHintCost} მონეტა`
                  }
                  icon="hintLetter"
                  testID="hint-cell"
                  disabled={!model.canUseCellHint}
                  onPress={() => hint('cell')}
                  badge={
                    model.freeCellHints > 0 ? (
                      <View style={[styles.price, styles.freePrice]}>
                        <Txt
                          variant="caption"
                          style={styles.priceText}
                          numberOfLines={1}
                        >
                          უფასო
                        </Txt>
                      </View>
                    ) : (
                      <Price amount={model.cellHintCost} />
                    )
                  }
                />
              ),
            }}
          />
        </Animated.View>
      )}
      {coaching.active && <CoachMarks steps={steps} onDone={coaching.finish} />}
    </Screen>
  );
}

/** Handles on the controls the tutorial rings, and its steps pointing at them. */
function createTutorial() {
  const anchors = {
    wheel: createRef<View>(),
    wordHint: createRef<View>(),
    cellHint: createRef<View>(),
    inputMode: createRef<View>(),
    bonus: createRef<View>(),
  };
  const targets: Record<TutorialAnchor, RefObject<View | null>[]> = {
    wheel: [anchors.wheel],
    hints: [anchors.wordHint, anchors.cellHint],
    inputMode: [anchors.inputMode],
    bonus: [anchors.bonus],
  };
  return {
    anchors,
    steps: tutorialSteps().map((step) => ({
      ...step,
      targets: targets[step.anchor],
    })),
  };
}

/**
 * First-time coach marks: they start once the board is idle and end for good
 * when finished or skipped. The overlay closes at once, even if the save fails.
 */
function useTutorial(pending: boolean) {
  const [ready, setReady] = useState(false);
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => setReady(true), TUTORIAL_DELAY);
    return () => clearTimeout(timer);
  }, [pending]);
  const finish = useCallback(() => {
    setClosed(true);
    send({ type: 'tutorial', seen: true });
  }, []);
  return { active: pending && ready && !closed, finish };
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

/** One lozenge per crossword word, filled in the scene accent once found. */
function Progress({
  found,
  total,
  bonus,
  bonusMeter,
  freeHints,
  accent,
  bonusRef,
}: {
  found: number;
  total: number;
  bonus: number;
  bonusMeter: number;
  freeHints: number;
  accent: string;
  bonusRef: RefObject<View | null>;
}) {
  return (
    <View testID="word-progress" style={styles.progress}>
      <View
        accessible
        accessibilityLabel={`${found}/${total} სიტყვა · ბონუსი ${bonus}`}
        style={styles.lozenges}
      >
        {Array.from({ length: total }, (_, index) => (
          <View
            key={index}
            style={[
              styles.lozenge,
              index < found && { backgroundColor: accent },
            ]}
          />
        ))}
      </View>
      <View ref={bonusRef} collapsable={false}>
        <BonusMeter progress={bonusMeter} freeHints={freeHints} compact />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    paddingHorizontal: space.md,
    paddingBottom: space.sm,
  },
  title: { height: TITLE, alignSelf: 'stretch', alignItems: 'center' },
  topic: { textAlign: 'center' },
  boardArea: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingVertical: space.xs,
  },
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.lg,
  },
  centerText: { textAlign: 'center' },
  progress: {
    height: PROGRESS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.md,
  },
  lozenges: { flexDirection: 'row', gap: 7 },
  lozenge: {
    width: 11,
    height: 11,
    transform: [{ rotate: '45deg' }],
    borderWidth: 1.5,
    borderColor: palette.ivory,
    backgroundColor: 'rgba(18, 12, 36, 0.3)',
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
  freePrice: { width: 68, paddingHorizontal: 4, justifyContent: 'center' },
});
