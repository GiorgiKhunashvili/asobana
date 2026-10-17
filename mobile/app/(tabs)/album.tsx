import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SecondaryButton } from '../../src/components/Buttons';
import { Icon } from '../../src/components/Icon';
import { PlaceArt } from '../../src/components/PlaceArt';
import { Postcard } from '../../src/components/Postcard';
import { Screen, TopBar } from '../../src/components/Screen';
import { Display, Txt } from '../../src/components/Text';
import { catalog } from '../../src/content/catalog';
import { selectPostcards } from '../../src/engine/postcards';
import { routes } from '../../src/navigation/routes';
import { progressTone } from '../../src/screens/nextLevel';
import { useGameStore } from '../../src/state/gameStore';
import { COUNTRIES, palette, sceneFor, space } from '../../src/theme';

type Card = ReturnType<typeof selectPostcards>[number];

function OpenCard({ card }: { readonly card: Card }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${sceneFor(card.chapterId).place}, ბარათის ნახვა`}
      testID={`open-postcard-${card.chapterId}`}
      onPress={() => router.push(routes.postcard(card.chapterId))}
      style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
    >
      <Postcard chapterId={card.chapterId} number={card.number} compact />
    </Pressable>
  );
}

export default function Postcards() {
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  const all = selectPostcards(game, catalog);
  const cards = all.filter((card) => !card.legacy);
  const legacy = all.filter((card) => card.legacy);
  const collected = cards.filter((card) => card.collected).length;
  const next = cards.find((card) => card.next);
  return (
    <Screen
      tone={progressTone(game)}
      veil={0.65}
      tabbed
      header={<TopBar title="ალბომი" onBack={null} />}
      contentStyle={styles.content}
    >
      <Display variant="title">მოგზაურობის ალბომი</Display>
      <Txt>{`${collected}/${cards.length} ბარათი შეგროვებულია`}</Txt>
      <Txt variant="caption">
        გაიარე ადგილის ხუთივე დონე და შეინახე მისი ბარათი შენს ალბომში.
      </Txt>
      {next ? (
        <View style={styles.next}>
          <Txt variant="bodyStrong" color={palette.goldLight}>
            {`შემდეგი: ${sceneFor(next.chapterId).place}`}
          </Txt>
          <Txt variant="caption">{`ბარათამდე დარჩა ${next.remaining} დონე`}</Txt>
          <SecondaryButton
            label="მოგზაურობის გაგრძელება"
            icon="route"
            onPress={() => router.navigate('/')}
          />
        </View>
      ) : (
        <Txt variant="bodyStrong" color={palette.goldLight}>
          ყველა ბარათი შენია!
        </Txt>
      )}
      {COUNTRIES.map((country) => {
        const own = cards.filter((card) =>
          country.chapterIds.includes(card.chapterId),
        );
        const reached = own.some((card) => card.collected || card.next);
        const done = own.filter((card) => card.collected).length;
        if (!reached)
          return (
            <View
              key={country.id}
              style={styles.closed}
              testID={`album-country-${country.id}`}
            >
              <Icon name="lock" size={18} color={palette.textMuted} />
              <Txt color={palette.textMuted} style={styles.flex}>
                {country.name}
              </Txt>
              <Txt variant="caption" color={palette.textMuted}>
                {`${own.length} ბარათი`}
              </Txt>
            </View>
          );
        return (
          <View
            key={country.id}
            style={styles.country}
            testID={`album-country-${country.id}`}
          >
            <View style={styles.countryHead}>
              <Display variant="heading" style={styles.flex}>
                {country.name}
              </Display>
              <Txt variant="caption" color={palette.goldLight}>
                {`${done}/${own.length}`}
              </Txt>
            </View>
            {own.map((card) =>
              card.collected ? (
                <OpenCard key={card.chapterId} card={card} />
              ) : (
                <View
                  key={card.chapterId}
                  style={styles.locked}
                  testID={`locked-postcard-${card.chapterId}`}
                >
                  {card.next && <PlaceArt scene={sceneFor(card.chapterId)} />}
                  <View style={styles.lockedLabel}>
                    <Display variant="heading">
                      {sceneFor(card.chapterId).place}
                    </Display>
                    <Txt variant="caption">{`ადგილი ${card.number} · ${card.remaining} დონე დარჩა`}</Txt>
                  </View>
                </View>
              ),
            )}
          </View>
        );
      })}
      {legacy.length > 0 && (
        <View style={styles.country} testID="album-legacy">
          <View style={styles.countryHead}>
            <Display variant="heading" style={styles.flex}>
              ძველი ბარათები
            </Display>
            <Txt variant="caption" color={palette.goldLight}>
              {legacy.length}
            </Txt>
          </View>
          <Txt variant="caption">
            ბარათები, რომლებიც მოგზაურობამდე შეაგროვე. ისინი შენთან რჩება.
          </Txt>
          {legacy.map((card) => (
            <OpenCard key={card.chapterId} card={card} />
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: space.md,
    paddingTop: space.sm,
    maxWidth: 560,
    width: '100%',
    alignSelf: 'center',
  },
  flex: { flex: 1 },
  next: { gap: space.sm, paddingVertical: space.md },
  country: { gap: space.md, marginTop: space.md },
  countryHead: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  closed: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 52,
    paddingHorizontal: space.lg,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: palette.hairline,
  },
  locked: {
    minHeight: 96,
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: palette.hairline,
    borderRadius: 5,
  },
  lockedLabel: {
    flex: 1,
    justifyContent: 'center',
    gap: space.xs,
    padding: space.lg,
    backgroundColor: palette.scrim,
  },
});
