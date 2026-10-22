import { PathOp, Skia } from '@shopify/react-native-skia';
import { useMemo } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { destinationCaptions, placeFacts } from '../content/destinations';
import {
  countryById,
  fonts,
  onScene,
  palette,
  sceneFor,
  space,
  STOP_PAINTINGS,
  toMtavruli,
  type Scene,
} from '../theme';
import { PlaceArt } from './PlaceArt';
import { Display, Txt } from './Text';

const PAPER = '#FBF4E4';
/** Mtavruli in the condensed display face runs about this many ems a letter. */
const EM_PER_LETTER = 0.68;

/**
 * The largest size, up to `max`, at which `text` fits in `room` points;
 * `perLetter` (ems) allows for letter spacing at small sizes.
 */
function fit(
  text: string,
  room: number,
  max: number,
  perLetter = EM_PER_LETTER,
) {
  return Math.min(max, Math.floor(room / (text.length * perLetter)));
}
const STAMP_PAPER = '#FFFDF7';
const STAMP_EDGE = '#D9C49A';

/** A stop's caption, else the caption of the original painting it shows. */
export function postcardCaption(chapterId: string): string {
  return (
    destinationCaptions[chapterId] ??
    destinationCaptions[STOP_PAINTINGS[chapterId] ?? ''] ??
    countryById(sceneFor(chapterId).country).name
  );
}

/**
 * A collected postcard as a large postage stamp: the painting on perforated
 * paper, its number and place, franked with the country's postmark, and the
 * place's "იცოდი?" fact on a note taped beneath. It echoes the stamps beside
 * each stop on the journey path.
 */
export function StampedPostcard({
  chapterId,
  number,
}: {
  readonly chapterId: string;
  readonly number: number;
}) {
  const scene = sceneFor(chapterId);
  const country = countryById(scene.country).name;
  const fact = placeFacts[chapterId];
  const { width: screen } = useWindowDimensions();
  const width = Math.min(screen - 2 * space.xl - 8, 360);
  return (
    <View style={styles.root} testID={`postcard-${chapterId}`}>
      <View
        style={[styles.tilt, { width }]}
        accessible
        accessibilityRole="image"
        accessibilityLabel={`${scene.place}, ბარათი ${number}, ${country}`}
      >
        <Stamp scene={scene} width={width} number={number} />
        <View style={styles.postmark}>
          <Postmark top={country} bottom={`ადგილი ${number}`} />
        </View>
      </View>
      <Txt variant="body" style={[onScene, styles.caption]}>
        {postcardCaption(chapterId)}
      </Txt>
      {fact && (
        <View
          style={styles.note}
          accessible
          accessibilityLabel={`იცოდი? ${fact}`}
          testID="place-fact"
        >
          <View style={styles.tape} />
          <Display variant="eyebrow" color={scene.accent}>
            იცოდი?
          </Display>
          <Text style={styles.fact}>{fact}</Text>
        </View>
      )}
    </View>
  );
}

/** Perforated stamp paper around the painting, its number and place name. */
function Stamp({
  scene,
  width,
  number,
}: {
  scene: Scene;
  width: number;
  number: number;
}) {
  const margin = Math.round(width * 0.06);
  const foot = Math.round(width * 0.16);
  const art = { width: width - 2 * margin, height: Math.round(width * 1.12) };
  const height = art.height + margin + foot;
  const hole = width * 0.022;
  // Paper with round bites along every edge, like a stamp torn from a sheet.
  const paper = useMemo(() => {
    const step = hole * 3.2;
    const sheet = Skia.PathBuilder.Make()
      .addRect(Skia.XYWHRect(0, 0, width, height))
      .detach();
    const holes = Skia.PathBuilder.Make();
    const across = Math.round(width / step);
    const down = Math.round(height / step);
    for (let i = 0; i <= across; i++) {
      holes.addCircle((i * width) / across, 0, hole);
      holes.addCircle((i * width) / across, height, hole);
    }
    for (let j = 0; j <= down; j++) {
      holes.addCircle(0, (j * height) / down, hole);
      holes.addCircle(width, (j * height) / down, hole);
    }
    // Skia computes the exact outline; SVG draws it inside the view tree (a
    // Skia canvas per stamp was its own texture layer on Android).
    return Skia.Path.MakeFromOp(
      sheet,
      holes.detach(),
      PathOp.Difference,
    )?.toSVGString();
  }, [width, height, hole]);
  return (
    <View style={{ width, height }}>
      {paper && (
        <Svg style={StyleSheet.absoluteFill} width={width} height={height}>
          <Path d={paper} fill={STAMP_PAPER} />
          <Path d={paper} fill="none" stroke={STAMP_EDGE} strokeWidth={1} />
        </Svg>
      )}
      <View
        style={[styles.art, { left: margin, top: margin, ...art }]}
        importantForAccessibility="no-hide-descendants"
      >
        <PlaceArt scene={scene} variant="full" size={art} />
      </View>
      <Text
        style={[styles.value, onScene, { left: margin + 10, top: margin + 6 }]}
      >
        {String(number).padStart(2, '0')}
      </Text>
      <View style={[styles.label, { height: foot }]}>
        <Text
          numberOfLines={1}
          style={[
            styles.labelText,
            {
              color: scene.accent,
              fontSize: fit(scene.place, width - 2 * space.lg, 26),
            },
          ]}
        >
          {toMtavruli(scene.place)}
        </Text>
      </View>
    </View>
  );
}

const MARK = 112;

/** A round cancellation: two rings, country and stop, wavy lines trailing off. */
function Postmark({ top, bottom }: { top: string; bottom: string }) {
  const r = MARK / 2;
  const waves = useMemo(() => {
    let d = '';
    for (let k = 0; k < 4; k++) {
      d += `M${MARK + 4} ${r - 18 + k * 12}`;
      for (let x = 0; x < 5; x++) d += ' q 9 -7 18 0 t 18 0';
    }
    return d;
  }, [r]);
  return (
    <View pointerEvents="none" style={styles.mark}>
      <Svg style={StyleSheet.absoluteFill}>
        <Circle
          cx={r}
          cy={r}
          r={r - 2}
          fill="none"
          stroke={palette.ivory}
          strokeWidth={2.5}
        />
        <Circle
          cx={r}
          cy={r}
          r={r - 10}
          fill="none"
          stroke={palette.ivory}
          strokeWidth={1.2}
        />
        <Path d={waves} fill="none" stroke={palette.ivory} strokeWidth={2} />
      </Svg>
      <View style={styles.markText}>
        <Text
          numberOfLines={1}
          style={[styles.markTop, { fontSize: fit(top, MARK - 28, 13, 0.8) }]}
        >
          {toMtavruli(top)}
        </Text>
        <View style={styles.markRule} />
        <Text numberOfLines={1} style={styles.markBottom}>
          {bottom}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { alignItems: 'center', gap: space.lg, paddingTop: space.lg },
  tilt: { transform: [{ rotate: '-2.5deg' }] },
  // Over the stamp's top right corner, its waves running off the page.
  postmark: { position: 'absolute', right: -180, top: -30, zIndex: 2 },
  caption: {
    color: palette.text,
    textAlign: 'center',
    paddingHorizontal: space.md,
  },
  note: {
    alignSelf: 'stretch',
    marginHorizontal: space.sm,
    gap: space.xs,
    padding: space.lg,
    backgroundColor: PAPER,
    borderRadius: 2,
    transform: [{ rotate: '1.2deg' }],
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  tape: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    width: 92,
    height: 24,
    backgroundColor: 'rgba(222, 201, 152, 0.82)',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'rgba(160, 136, 88, 0.35)',
    transform: [{ rotate: '-3deg' }],
  },
  fact: {
    fontFamily: fonts.textSemiBold,
    fontSize: 19,
    lineHeight: 29,
    color: palette.ink,
  },
  art: { position: 'absolute', overflow: 'hidden' },
  value: {
    position: 'absolute',
    fontFamily: fonts.display,
    fontSize: 34,
    lineHeight: 38,
    color: PAPER,
  },
  label: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: space.md,
  },
  labelText: {
    fontFamily: fonts.display,
    lineHeight: 30,
    letterSpacing: 1.5,
  },
  mark: {
    width: MARK + 190,
    height: MARK,
    opacity: 0.82,
    transform: [{ rotate: '-14deg' }],
  },
  markText: {
    position: 'absolute',
    width: MARK,
    height: MARK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    gap: 3,
  },
  markTop: {
    fontFamily: fonts.display,
    letterSpacing: 0.5,
    color: palette.ivory,
  },
  markRule: {
    height: 1.2,
    alignSelf: 'stretch',
    opacity: 0.8,
    backgroundColor: palette.ivory,
  },
  markBottom: {
    fontFamily: fonts.textSemiBold,
    fontSize: 10,
    color: palette.ivory,
  },
});
