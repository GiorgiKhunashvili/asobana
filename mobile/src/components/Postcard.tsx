import { StyleSheet, View } from 'react-native';
import { palette, sceneFor, space } from '../theme';
import { PlaceArt } from './PlaceArt';
import { Display, Txt } from './Text';

/**
 * A collected card in the album and on victory: the painting's band on ivory
 * stock, the place and its number. The full card is `StampedPostcard`.
 */
export function Postcard({
  chapterId,
  number,
}: {
  readonly chapterId: string;
  readonly number: number;
}) {
  const scene = sceneFor(chapterId);
  return (
    <View style={styles.card} testID={`postcard-${chapterId}`}>
      <View style={styles.band}>
        <PlaceArt scene={scene} variant="band" />
      </View>
      <View style={styles.caption}>
        <View style={styles.title}>
          <Display variant="heading" color={palette.ink} style={styles.place}>
            {scene.place}
          </Display>
          <View
            style={[styles.stamp, { borderColor: scene.accent }]}
            accessibilityLabel={`შეგროვებული ბარათი ${number}`}
          >
            <Txt variant="number" color={scene.accent}>
              {String(number).padStart(2, '0')}
            </Txt>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 7,
    backgroundColor: palette.ivory,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: palette.ivoryShade,
    width: '100%',
  },
  band: { height: 112, overflow: 'hidden' },
  caption: { padding: space.sm, gap: space.sm },
  title: { flexDirection: 'row', gap: space.sm, alignItems: 'center' },
  place: { flex: 1 },
  stamp: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-8deg' }],
  },
});
