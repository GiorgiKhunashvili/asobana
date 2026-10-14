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
import { Rosette } from '../../src/components/Rosette';
import { Screen, TopBar } from '../../src/components/Screen';
import { Display, Txt } from '../../src/components/Text';
import { catalog } from '../../src/content/catalog';
import { nextLevelId } from '../../src/engine/game';
import { routes, singleParam } from '../../src/navigation/routes';
import { gameStore, useGameStore } from '../../src/state/gameStore';
import { levelTone, palette, space } from '../../src/theme';

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
            label="მთავარი"
            icon="home"
            onPress={() => router.replace('/')}
          />
        </View>
      </Screen>
    );
  const index = catalog.levels.findIndex((level) => level.id === id);
  const level = catalog.levels[index];
  const next = nextLevelId(catalog, id);
  const progress = game.progress[id];
  const emblem = Math.min(width * 0.78, 320);
  return (
    <Screen
      tone={tone}
      glowY={0.3}
      header={
        <TopBar
          trailing={
            <CoinBadge
              coins={game.coins}
              onPress={() => router.push('/shop')}
            />
          }
        />
      }
      contentStyle={styles.content}
    >
      <Animated.View
        entering={ZoomIn.springify().damping(18).stiffness(120)}
        style={styles.emblem}
      >
        <Rosette size={emblem} period={28} rays />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(220).duration(500)}
        style={styles.title}
      >
        <Display variant="eyebrow" color={palette.gold}>
          {`დონე ${index + 1}`}
        </Display>
        <Display
          variant="hero"
          color={palette.goldLight}
          testID="victory-title"
        >
          გილოცავ!
        </Display>
        <Txt variant="bodyStrong" style={styles.centered}>
          {`„${level?.title ?? ''}“ გავლილია`}
        </Txt>
        {Boolean(progress?.bonusWords.length) && (
          <Txt variant="caption" color={palette.textMuted}>
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
      <Animated.View
        entering={FadeInUp.delay(760).duration(500)}
        style={styles.actions}
      >
        {next ? (
          <PrimaryButton
            label="შემდეგი დონე"
            detail={`დონე ${index + 2}`}
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
              ამ კრებულის ყველა დონე გავლილია.
            </Txt>
          </Animated.View>
        )}
        <View style={styles.row}>
          <SecondaryButton
            label="თავები"
            icon="grid"
            testID="victory-chapters"
            style={styles.half}
            onPress={() => router.replace('/chapters')}
          />
          <SecondaryButton
            label="მთავარი"
            icon="home"
            testID="victory-home"
            style={styles.half}
            onPress={() => router.replace('/')}
          />
        </View>
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
  row: { flexDirection: 'row', gap: space.md },
  half: { flex: 1 },
});
