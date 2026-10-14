import type { TextStyle } from 'react-native';

/**
 * Static instances of Noto Sans Georgian (OFL 1.1), bundled for offline use.
 * Weights are separate families: never set `fontWeight`, or Android synthesizes.
 */
export const fonts = {
  text: 'GeoText-Regular',
  textSemiBold: 'GeoText-SemiBold',
  textBold: 'GeoText-Bold',
  display: 'GeoDisplay-CondensedBlack',
} as const;

export const fontAssets = {
  [fonts.text]: require('../../assets/fonts/GeoText-Regular.ttf'),
  [fonts.textSemiBold]: require('../../assets/fonts/GeoText-SemiBold.ttf'),
  [fonts.textBold]: require('../../assets/fonts/GeoText-Bold.ttf'),
  [fonts.display]: require('../../assets/fonts/GeoDisplay-Black.ttf'),
};

/**
 * Mtavruli is the Georgian titling form. Display text is set in it the way
 * signage and inscriptions are; the readable Mkhedruli stays the accessible name.
 */
export function toMtavruli(text: string): string {
  let result = '';
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    const mapped =
      (code >= 0x10d0 && code <= 0x10fa) || (code >= 0x10fd && code <= 0x10ff)
        ? code + 0xbc0
        : code;
    result += String.fromCodePoint(mapped);
  }
  return result;
}

/**
 * Mkhedruli's optical centre is the middle of its x-height band, which sits
 * 11.5% of the font size below the centre of a line box (Noto metrics:
 * ascent 1068, descent 292, x-height 546). Lift single letters by this much.
 */
export function letterLift(fontSize: number) {
  return { position: 'relative', top: -0.115 * fontSize } as const;
}

/** Mtavruli has no descenders, so display lines can sit tighter than body text. */
export const type = {
  hero: {
    fontFamily: fonts.display,
    fontSize: 46,
    lineHeight: 50,
    letterSpacing: 1.5,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 1.2,
  },
  heading: {
    fontFamily: fonts.display,
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 1,
  },
  eyebrow: {
    fontFamily: fonts.textSemiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.6,
  },
  body: { fontFamily: fonts.text, fontSize: 16, lineHeight: 25 },
  bodyStrong: { fontFamily: fonts.textSemiBold, fontSize: 16, lineHeight: 25 },
  label: { fontFamily: fonts.textSemiBold, fontSize: 15, lineHeight: 22 },
  caption: { fontFamily: fonts.text, fontSize: 13, lineHeight: 19 },
  number: { fontFamily: fonts.textBold, fontSize: 17, lineHeight: 22 },
} as const satisfies Record<string, TextStyle>;

export type TypeVariant = keyof typeof type;
