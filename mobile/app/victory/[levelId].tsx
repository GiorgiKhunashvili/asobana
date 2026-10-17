import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  ZoomIn,
} from 'react-native-reanimated';
import { PrimaryButton, SecondaryButton } from '../../src/components/Buttons';
import { CoinBadge, CoinGlyph } from '../../src/components/CoinBadge';
import { Postcard } from '../../src/components/Postcard';
import { BonusMeter } from '../../src/components/BonusMeter';
import { VictoryLogo } from '../../src/components/Logo';
import { Screen, TopBar } from '../../src/components/Screen';
import { Display, Txt } from '../../src/components/Text';
import { catalog } from '../../src/content/catalog';
import { BONUS_GOAL, freeCellHints } from '../../src/engine/bonusRewards';
import { selectPostcards } from '../../src/engine/postcards';
import { routes, singleParam, toJourney } from '../../src/navigation/routes';
import { gameStore, useGameStore } from '../../src/state/gameStore';
import { nextUnfinished } from '../../src/screens/nextLevel';
import {
  countryOf,
  levelLabel,
  levelTone,
  onScene,
  palette,
  space,
} from '../../src/theme';

/** Reward from the batch that completed this level, if that is how we got here. */
function freshReward(levelId: string | null): number | null {
  const completed = gameStore
    .getState()
    .eventBatch.events.find(
      (event) => event.type === 'level-completed' && event.levelId === levelId,
    );
  return completed?.type === 'level-completed' ? completed.reward : null;
}

export default function Victory() {
  const params = useLocalSearchParams<{ levelId: string }>();
  const id = singleParam(params.levelId);
  const game = useGameStore((state) => state.game);
  const [reward] = useState(() => freshReward(id));
  const { width } = useWindowDimensions();
  const tone = levelTone(id);
  if (!game || !id || !game.progress[id]?.completed)
    return (
      <Screen tone={tone} header={<TopBar />}>
        <View style={styles.center}>
          <Txt style={styles.centered}>ჯერ ეს დონე გაიარე.</Txt>
          <SecondaryButton
            label="მოგზაურობა"
            icon="route"
            onPress={toJourney}
          />
        </View>
      </Screen>
    );
  const index = catalog.levels.findIndex((level) => level.id === id);
  const level = catalog.levels[index];
  // Where the player goes on: the first unfinished level, not merely the next number.
  const nextLevel = nextUnfinished(game);
  const next = nextLevel?.id ?? null;
  const progress = game.progress[id];
  const emblem = Math.min(width * 0.46, 190);
  const chapterCard = selectPostcards(game, catalog).find(
    (card) => card.chapterId === level?.chapterId,
  );
  const chapterEnd = !catalog.levels
    .slice(index + 1)
    .some((entry) => entry.chapterId === level?.chapterId);
  const showCard = chapterEnd && chapterCard?.collected;
  const nextChapter = catalog.levels.find(
    (entry) => entry.id === next,
  )?.chapterId;
  const newCountry =
    chapterEnd &&
    nextChapter &&
    countryOf(nextChapter) !== countryOf(level?.chapterId)
      ? countryOf(nextChapter)
      : null;
  return (
    <Screen
      tone={tone}
      veil={0.15}
      glowY={0.3}
      header={
        <TopBar
          trailing={
            <CoinBadge
              coins={game.coins}
              onPress={() => router.push('/coins')}
            />
          }
        />
      }
      contentStyle={styles.content}
    >
      {showCard ? (
        <View style={styles.postcard}>
          <Txt variant="bodyStrong" color={palette.goldLight}>
            {reward !== null
              ? 'ახალი ბარათი შენს ალბომში!'
              : 'ბარათი შენს ალბომშია'}
          </Txt>
          <Postcard
            chapterId={chapterCard.chapterId}
            number={chapterCard.number}
            compact
          />
          <SecondaryButton
            label="ბარათის ნახვა"
            testID="victory-postcard"
            onPress={() => router.push(routes.postcard(chapterCard.chapterId))}
          />
        </View>
      ) : (
        <View style={styles.emblem}>
          <VictoryLogo size={emblem} accent={tone.scene.accent} />
        </View>
      )}
      <Animated.View
        entering={FadeInDown.delay(220).duration(500)}
        style={styles.title}
      >
        <Display variant="eyebrow" color={palette.goldLight} style={onScene}>
          {`დონე ${index + 1}`}
        </Display>
        <Display
          variant="hero"
          color={palette.goldLight}
          testID="victory-title"
          style={onScene}
        >
          გილოცავ!
        </Display>
        <Txt variant="bodyStrong" style={[styles.centered, onScene]}>
          {`${levelLabel(id)} გავლილია`}
        </Txt>
        {Boolean(progress?.bonusWords.length) && (
          <Txt variant="caption" style={onScene}>
            ბონუს სიტყვები: {progress?.bonusWords.length}
          </Txt>
        )}
      </Animated.View>
      {reward !== null && reward > 0 && (
        <Animated.View
          entering={ZoomIn.delay(520).springify().damping(15)}
          accessible
          accessibilityLabel={`ჯილდო ${reward} მონეტა`}
          style={styles.reward}
        >
          <CoinGlyph size={26} />
          <Txt variant="number" color={palette.ink} style={styles.rewardText}>
            +{reward}
          </Txt>
        </Animated.View>
      )}
      <BonusMeter
        progress={game.bonusRewards.totalFound % BONUS_GOAL}
        freeHints={freeCellHints(game)}
        compact
      />
      <Animated.View
        entering={FadeInUp.delay(760).duration(500)}
        style={styles.actions}
      >
        {newCountry && (
          <Txt
            variant="bodyStrong"
            color={palette.goldLight}
            style={[styles.centered, onScene]}
            testID="victory-new-country"
          >
            {`ახალი ქვეყანა: ${newCountry.name}!`}
          </Txt>
        )}
        {next ? (
          <PrimaryButton
            label="შემდეგი დონე"
            detail={`დონე ${nextLevel?.number ?? ''}`}
            testID="victory-next"
            onPress={() => router.replace(routes.game(next))}
          />
        ) : (
          <Animated.View entering={FadeIn.delay(760)} style={styles.finale}>
            <Txt
              variant="bodyStrong"
              color={palette.goldLight}
              style={styles.centered}
            >
              მოგზაურობა დასრულდა — ყველა დონე გავლილია.
            </Txt>
          </Animated.View>
        )}
        <SecondaryButton
          label="მოგზაურობა"
          icon="route"
          testID="victory-journey"
          onPress={toJourney}
        />
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  postcard: {
    width: '100%',
    maxWidth: 400,
    gap: space.sm,
    alignItems: 'center',
    marginBottom: space.xl,
  },
  content: { justifyContent: 'center', alignItems: 'center', gap: space.lg },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.lg,
  },
  centered: { textAlign: 'center' },
  emblem: { marginTop: -space.xl },
  title: { alignItems: 'center', gap: space.xs, marginTop: -space.xl },
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg,
    paddingVertical: space.sm,
    borderRadius: 999,
    backgroundColor: palette.gold,
    borderWidth: 2,
    borderColor: palette.goldLight,
  },
  rewardText: { fontSize: 22, lineHeight: 28 },
  actions: {
    alignSelf: 'stretch',
    gap: space.md,
    maxWidth: 440,
    width: '100%',
  },
  finale: { paddingVertical: space.sm },
});
