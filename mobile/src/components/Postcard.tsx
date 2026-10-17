import { StyleSheet, View } from 'react-native';
import { destinationCaptions } from '../content/destinations';
import {
  countryById,
  palette,
  sceneFor,
  space,
  STOP_PAINTINGS,
} from '../theme';
import { PlaceArt } from './PlaceArt';
import { Display, Txt } from './Text';

/** A painting mounted on ivory stock; the stamp records chapter collection. */
export function Postcard({
  chapterId,
  number,
  compact = false,
}: {
  readonly chapterId: string;
  readonly number: number;
  readonly compact?: boolean;
}) {
  const scene = sceneFor(chapterId);
  // Stops share captions with the original painting they show.
  const caption =
    destinationCaptions[chapterId] ??
    destinationCaptions[STOP_PAINTINGS[chapterId] ?? ''] ??
    countryById(scene.country).name;
  return (
    <View style={styles.card} testID={`postcard-${chapterId}`}>
      <View style={compact ? styles.band : styles.painting}>
        <PlaceArt scene={scene} variant={compact ? 'band' : 'full'} />
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
        {!compact && (
          <Txt variant="body" color={palette.ink}>
            {caption}
          </Txt>
        )}
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
  painting: { aspectRatio: 2 / 3, overflow: 'hidden' },
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
