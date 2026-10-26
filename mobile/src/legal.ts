/**
 * Store-required links and the credits the bundled content's licences ask for
 * (content/dictionaries/README.md, assets/fonts/OFL.txt).
 */

/**
 * The live policy on the studio site (the spilo-games-website project; English
 * at /en/asobana/privacy/). Both stores require it and Apple also wants it
 * inside the app; Settings shows the link while this is set.
 */
export const PRIVACY_POLICY_URL: string | null =
  'https://spilogames.ge/asobana/privacy/';

export interface Credit {
  readonly title: string;
  readonly lines: readonly string[];
  readonly links: readonly { readonly label: string; readonly url: string }[];
}

/** Shown on the licenses screen: source, authors, changes and licence for each. */
export const CREDITS: readonly Credit[] = [
  {
    title: 'სიტყვები',
    lines: [
      'სიტყვები და მათი მოკლე ინგლისური განმარტებები აღებულია Wiktionary-დან.',
      'ავტორები: Wiktionary-ის მონაწილეები (Wiktionary contributors).',
      'ცვლილებები: სიტყვები შევარჩიეთ და შევამოწმეთ, განმარტებები შევამოკლეთ.',
      'ასობანას სიტყვების სია იმავე ლიცენზიით ვრცელდება: CC BY-SA 4.0.',
    ],
    links: [
      { label: 'Wiktionary', url: 'https://en.wiktionary.org/' },
      {
        label: 'CC BY-SA 4.0',
        url: 'https://creativecommons.org/licenses/by-sa/4.0/',
      },
    ],
  },
  {
    title: 'სიტყვების სიხშირე',
    lines: [
      'სიტყვების შერჩევისას გამოვიყენეთ Spoken Georgian Frequency List v2026.07.',
      'ავტორები: Lasse N., Tamar N. (EasyGeorgian Research).',
      'ლიცენზია: CC BY 4.0.',
    ],
    links: [
      {
        label: 'EasyGeorgian',
        url: 'https://easygeorgian.com/spoken-georgian-frequency/',
      },
      {
        label: 'CC BY 4.0',
        url: 'https://creativecommons.org/licenses/by/4.0/',
      },
    ],
  },
  {
    title: 'შრიფტი',
    lines: [
      'თამაშის შრიფტები მიღებულია Noto Sans Georgian-იდან.',
      'Copyright 2022 The Noto Project Authors.',
      'ლიცენზია: SIL Open Font License 1.1.',
    ],
    links: [
      {
        label: 'Noto Sans Georgian',
        url: 'https://github.com/notofonts/georgian',
      },
      { label: 'SIL OFL 1.1', url: 'https://openfontlicense.org/' },
    ],
  },
];
