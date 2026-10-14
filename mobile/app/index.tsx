import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { PrimaryButton, SecondaryButton } from '../src/components/Buttons';
import { CoinBadge } from '../src/components/CoinBadge';
import { Rosette } from '../src/components/Rosette';
import { Screen, TopBar } from '../src/components/Screen';
import { Display, Txt } from '../src/components/Text';
import { catalog } from '../src/content/catalog';
import { selectLevels } from '../src/engine/selectors';
import { routes } from '../src/navigation/routes';
import { useGameStore } from '../src/state/gameStore';
import { levelTone, palette, space } from '../src/theme';

export default function Home() {
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  const levels = selectLevels(game, catalog);
  const current = levels.find((level) => level.id === game.currentLevelId);
  const finished = levels.every((level) => level.completed);
  return (
    <Screen
      tone={levelTone(game.currentLevelId)}
      glowY={0.3}
      header={
        <TopBar
          onBack={null}
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
      <Animated.View entering={FadeIn.duration(600)} style={styles.emblem}>
        <Rosette size={168} period={60} />
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(120).duration(500)}
        style={styles.title}
      >
        <Display variant="hero" style={styles.centered}>
          ქართული
        </Display>
        <Display variant="hero" color={palette.gold} style={styles.centered}>
          სიტყვები
        </Display>
        <Txt color={palette.textMuted} style={[styles.centered, styles.lede]}>
          შეაერთე ასოები და შეავსე კროსვორდი.
        </Txt>
      </Animated.View>
      <Animated.View
        entering={FadeInDown.delay(260).duration(500)}
        style={styles.actions}
      >
        {finished ? (
          <PrimaryButton
            label="ყველა დონე გავლილია"
            detail="დონეების ნახვა"
            testID="home-continue"
            onPress={() => router.push('/chapters')}
          />
        ) : (
          <PrimaryButton
            label="გაგრძელება"
            {...(current && {
              detail: `დონე ${current.number} · ${current.title}`,
            })}
            testID="home-continue"
            onPress={() => router.push(routes.game(game.currentLevelId))}
          />
        )}
        <View style={styles.row}>
          <SecondaryButton
            label="თავები"
            icon="grid"
            testID="home-chapters"
            style={styles.half}
            onPress={() => router.push('/chapters')}
          />
          <SecondaryButton
            label="პარამეტრები"
            icon="sliders"
            testID="home-settings"
            style={styles.half}
            onPress={() => router.push('/settings')}
          />
        </View>
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    gap: space.xl,
    paddingBottom: space.xxl,
  },
  emblem: { alignItems: 'center' },
  title: { alignItems: 'center', gap: space.xs },
  centered: { textAlign: 'center' },
  lede: { marginTop: space.sm },
  actions: { gap: space.md, width: '100%', maxWidth: 440, alignSelf: 'center' },
  row: { flexDirection: 'row', gap: space.md },
  half: { flex: 1 },
});
