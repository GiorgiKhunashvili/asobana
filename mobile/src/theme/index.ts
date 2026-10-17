/**
 * Minankari (Georgian cloisonné enamel) design tokens.
 * Gold wire separates fields of fired enamel: crossword cells are cloisons,
 * the traced word is the wire, and a found word fills its cells with enamel.
 */
import { catalog } from '../content/catalog';
import { sceneFor, type Scene } from './scenes';

export const palette = {
  gold: '#E3B65A',
  goldLight: '#FFE6A6',
  goldDeep: '#9C6E1F',
  ivory: '#F8F0DE',
  ivoryShade: '#E2D2B0',
  /** The letter wheel's face: ivory enamel a shade warmer than the cells. */
  parchment: '#F4EAD3',
  parchmentRing: 'rgba(156, 110, 31, 0.32)',
  ink: '#1B1838',
  pomegranate: '#C8334E',
  pomegranateLight: '#FF9AA9',
  turquoise: '#23A094',
  turquoiseLight: '#5CD1C3',
  turquoiseDeep: '#13675F',
  text: '#F8F0DE',
  textMuted: 'rgba(248, 240, 222, 0.68)',
  hairline: 'rgba(227, 182, 90, 0.38)',
  scrim: 'rgba(5, 8, 22, 0.55)',
  /** Dusk shade laid over paintings (as rgb, so screens can choose the opacity). */
  dusk: '18, 12, 36',
} as const;

/** Keeps light text readable wherever it sits directly on a painting. */
export const onScene = {
  textShadowColor: 'rgba(18, 12, 36, 0.65)',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 6,
} as const;

/**
 * Each chapter has a painted Georgian scene and an enamel ground that shows
 * while the painting decodes or where no painting fits (cards, fallbacks).
 */
export interface Tone {
  readonly ground: readonly [string, string];
  readonly raised: string;
  readonly glow: string;
  readonly scene: Scene;
}
const GROUNDS: readonly Omit<Tone, 'scene'>[] = [
  // ლაჟვარდი · lapis
  { ground: ['#1B3373', '#0A1433'], raised: '#24418E', glow: '#3A64C8' },
  // საფერავი · saperavi
  { ground: ['#4C1A43', '#1C0819'], raised: '#5E2455', glow: '#9C3B7E' },
  // ზურმუხტი · emerald
  { ground: ['#124A40', '#05201B'], raised: '#1A5C50', glow: '#2E9C86' },
  // ქარვა · amber
  { ground: ['#5A3514', '#22130A'], raised: '#6E4420', glow: '#C07A2E' },
];

const tones = new Map<string, Tone>();

/** Stable per chapter, so memoised backdrops do not redraw on every render. */
export function chapterTone(chapterId: string | null | undefined): Tone {
  const index = Math.max(
    0,
    catalog.chapters.findIndex((chapter) => chapter.id === chapterId),
  );
  const key = chapterId ?? `#${index}`;
  let tone = tones.get(key);
  if (!tone) {
    const ground = GROUNDS[index % GROUNDS.length] ?? GROUNDS[0]!;
    tone = { ...ground, scene: sceneFor(chapterId) };
    tones.set(key, tone);
  }
  return tone;
}

export function levelTone(levelId: string | null | undefined): Tone {
  return chapterTone(
    catalog.levels.find((level) => level.id === levelId)?.chapterId,
  );
}

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
export const radius = { cell: 7, card: 18, pill: 999 } as const;
/** Minimum interactive size in points. */
export const touch = 48;

export const motion = {
  fast: 120,
  base: 220,
  slow: 420,
  /** Delay between consecutive cells while a word is fired into the grid. */
  cellStagger: 75,
  /** Time for the last fired cell to settle before the completion wave. */
  revealSettle: 380,
  /** Diagonal delay of the completion wave across the board. */
  waveStagger: 65,
  /** Pause after the wave before moving on to the victory screen. */
  victoryPause: 900,
  spring: { damping: 13, stiffness: 190, mass: 0.9 },
} as const;

export * from './typography';
export { SCENES, STOP_PAINTINGS, sceneFor, type Scene } from './scenes';
export {
  COUNTRIES,
  countryById,
  countryOf,
  levelLabel,
  placeOfLevel,
  stopTitle,
  type Country,
} from './journey';
