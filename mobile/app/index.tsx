import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { PrimaryButton, SecondaryButton } from '../src/components/Buttons';
import { CoinBadge } from '../src/components/CoinBadge';
import { HomeLogo, INTRO_TITLE_DELAY } from '../src/components/Logo';
import { Screen, TopBar } from '../src/components/Screen';
import { Display, Txt } from '../src/components/Text';
import { catalog } from '../src/content/catalog';
import { nextUnfinished, progressTone } from '../src/screens/nextLevel';
import { selectPostcards } from '../src/engine/postcards';
import { routes } from '../src/navigation/routes';
import { useGameStore } from '../src/state/gameStore';
import { levelLabel, onScene, palette, space } from '../src/theme';

const NAME = 'ასობანა';
/** The logo traces itself on the first home visit of each launch only. */
let introPlayed = false;

/** The name appears letter by letter as the logo's intro completes. */
function Name({ animate }: { readonly animate: boolean }) {
  return (
    <View
      accessible
      accessibilityRole="header"
      accessibilityLabel={NAME}
      style={styles.name}
    >
      {Array.from(NAME, (letter, i) => (
        <Animated.View
          key={i}
          {...(animate && {
            entering: FadeInDown.delay(INTRO_TITLE_DELAY + i * 90).duration(
              380,
            ),
          })}
        >
          <Display variant="hero" color={palette.goldLight} style={onScene}>
            {letter}
          </Display>
        </Animated.View>
      ))}
    </View>
  );
}

export default function Home() {
  const game = useGameStore((state) => state.game);
  const [intro] = useState(() => {
    const first = !introPlayed;
    introPlayed = true;
    return first;
  });
  if (!game) return null;
  const next = nextUnfinished(game);
  const cards = selectPostcards(game, catalog).filter((card) => !card.legacy);
  const collected = cards.filter((card) => card.collected).length;
  return (
    <Screen
      tone={progressTone(game)}
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
      {/* Title in the sky, actions on the foreground; the landmark shows between. */}
      <View style={styles.emblem}>
        <HomeLogo size={132} intro={intro} />
      </View>
      <View style={styles.title}>
        <Name animate={intro} />
        {/* On a dusk pill: plain text vanishes on the brightest skies. */}
        <Animated.View
          entering={FadeIn.delay(
            intro ? INTRO_TITLE_DELAY + 650 : 120,
          ).duration(500)}
          style={styles.tagline}
        >
          <Txt variant="label" style={styles.centered}>
            შეაერთე ასოები და შეავსე კროსვორდი.
          </Txt>
        </Animated.View>
      </View>
      <Animated.View
        entering={FadeInDown.delay(260).duration(500)}
        style={styles.actions}
      >
        {next ? (
          <PrimaryButton
            label="გაგრძელება"
            detail={`დონე ${next.number} · ${levelLabel(next.id)}`}
            testID="home-continue"
            onPress={() => router.push(routes.game(next.id))}
          />
        ) : (
          <PrimaryButton
            label="ყველა დონე გავლილია"
            detail="მოგზაურობის ნახვა"
            testID="home-continue"
            onPress={() => router.push('/chapters')}
          />
        )}
        <View style={styles.row}>
          <SecondaryButton
            label="მოგზაურობა"
            icon="route"
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
        <SecondaryButton
          label={`მოგზაურობის ალბომი · ${collected}/${cards.length}`}
          icon="card"
          testID="home-postcards"
          onPress={() => router.push('/postcards')}
        />
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: space.md, paddingTop: space.md, paddingBottom: space.xl },
  emblem: { alignItems: 'center' },
  name: { flexDirection: 'row', justifyContent: 'center', gap: 2 },
  title: { alignItems: 'center', gap: space.xs },
  centered: { textAlign: 'center' },
  tagline: {
    marginTop: space.sm,
    paddingHorizontal: space.lg,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(18, 12, 36, 0.5)',
  },
  actions: {
    gap: space.md,
    width: '100%',
    maxWidth: 440,
    alignSelf: 'center',
    marginTop: 'auto',
  },
  row: { flexDirection: 'row', gap: space.md },
  half: { flex: 1 },
});
