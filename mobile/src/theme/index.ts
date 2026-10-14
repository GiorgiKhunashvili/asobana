/**
 * Minankari (Georgian cloisonné enamel) design tokens.
 * Gold wire separates fields of fired enamel: crossword cells are cloisons,
 * the traced word is the wire, and a found word fills its cells with enamel.
 */
import { catalog } from '../content/catalog';

export const palette = {
  gold: '#E3B65A',
  goldLight: '#FFE6A6',
  goldDeep: '#9C6E1F',
  ivory: '#F8F0DE',
  ivoryShade: '#E2D2B0',
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
} as const;

/** Each chapter is fired on its own enamel ground. Cycles for future chapters. */
export interface Tone {
  readonly ground: readonly [string, string];
  readonly raised: string;
  readonly glow: string;
}
const TONES: readonly Tone[] = [
  // ლაჟვარდი · lapis
  { ground: ['#1B3373', '#0A1433'], raised: '#24418E', glow: '#3A64C8' },
  // საფერავი · saperavi
  { ground: ['#4C1A43', '#1C0819'], raised: '#5E2455', glow: '#9C3B7E' },
  // ზურმუხტი · emerald
  { ground: ['#124A40', '#05201B'], raised: '#1A5C50', glow: '#2E9C86' },
  // ქარვა · amber
  { ground: ['#5A3514', '#22130A'], raised: '#6E4420', glow: '#C07A2E' },
];

export function chapterTone(chapterId: string | null | undefined): Tone {
  const index = catalog.chapters.findIndex(
    (chapter) => chapter.id === chapterId,
  );
  return TONES[Math.max(0, index) % TONES.length] ?? TONES[0]!;
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
