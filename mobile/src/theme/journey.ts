import { catalog } from '../content/catalog';

/**
 * Countries of the journey, in travel order. Presentation only: content owns
 * the 59 stops (see content/journey-v23.json); this groups them for the path,
 * dividers and the journey overview, and colours stops that have no painting.
 */
export interface Country {
  readonly id: string;
  readonly name: string;
  /** Short "from … to …" line for the overview. */
  readonly route: string;
  readonly chapterIds: readonly string[];
  /** Deep colour for found cells and chips when a stop has no painting yet. */
  readonly accent: string;
  /** Placeholder painting: sky gradient (top, horizon) and three hill tones. */
  readonly sky: readonly [string, string];
  readonly hills: readonly [string, string, string];
}

export const COUNTRIES: readonly Country[] = [
  {
    id: 'georgia',
    name: 'საქართველო',
    route: 'თბილისიდან ბათუმამდე',
    chapterIds: [
      'tbilisi',
      'mtskheta',
      'ananuri',
      'kazbegi',
      'tusheti',
      'sighnaghi',
      'david-gareja',
      'uplistsikhe',
      'borjomi',
      'vardzia',
      'katskhi',
      'racha',
      'kutaisi-gelati',
      'svaneti',
      'martvili',
      'zugdidi',
      'makhuntseti',
      'batumi',
    ],
    accent: '#3B3A6E',
    sky: ['#7C6AA8', '#F3B98E'],
    hills: ['#8A9A78', '#5E7158', '#3E5040'],
  },
  {
    id: 'turkey',
    name: 'თურქეთი',
    route: 'ტაო-კლარჯეთიდან სტამბოლამდე',
    chapterIds: [
      'tao-klarjeti',
      'sumela',
      'cappadocia',
      'pamukkale',
      'ephesus',
      'istanbul',
    ],
    accent: '#6E3A33',
    sky: ['#86608A', '#F2B07E'],
    hills: ['#C4927A', '#9A6A5A', '#6E4A48'],
  },
  {
    id: 'bulgaria',
    name: 'ბულგარეთი',
    route: 'პლოვდივი, პეტრიწონი, რილა',
    chapterIds: ['plovdiv', 'petritsoni', 'rila'],
    accent: '#2F5A4A',
    sky: ['#5F7898', '#EBC59A'],
    hills: ['#7E9A76', '#5D7A5A', '#3E5747'],
  },
  {
    id: 'greece',
    name: 'საბერძნეთი',
    route: 'თესალონიკიდან კორფუმდე',
    chapterIds: [
      'thessaloniki',
      'iviron-athos',
      'meteora',
      'volos-iolcos',
      'delphi',
      'athens',
      'santorini',
      'corfu',
    ],
    accent: '#1F5F8E',
    sky: ['#4A7DB0', '#F7CFA0'],
    hills: ['#D9CBB5', '#A8B8C4', '#6E8CA4'],
  },
  {
    id: 'balkans',
    name: 'ბალკანეთი',
    route: 'ბუტრინტიდან პლიტვიცემდე',
    chapterIds: [
      'butrint',
      'gjirokaster',
      'berat',
      'ohrid',
      'kotor',
      'dubrovnik',
      'split',
      'plitvice',
    ],
    accent: '#2B5560',
    sky: ['#56709A', '#F0B98F'],
    hills: ['#8EA486', '#6F8B6A', '#435C55'],
  },
  {
    id: 'italy',
    name: 'იტალია',
    route: 'ვენეციიდან ტაორმინამდე',
    chapterIds: ['venice', 'florence', 'rome', 'amalfi', 'taormina'],
    accent: '#7A3E2A',
    sky: ['#9A6278', '#F6C08A'],
    hills: ['#C2B07A', '#A99A62', '#6E6A44'],
  },
  {
    id: 'malta',
    name: 'მალტა',
    route: 'ვალეტიდან მდინამდე',
    chapterIds: ['valletta', 'mdina'],
    accent: '#275E69',
    sky: ['#859AC8', '#ECC39C'],
    hills: ['#C8AD79', '#A38B68', '#64735B'],
  },
  {
    id: 'tunisia',
    name: 'ტუნისი',
    route: 'კართაგენიდან ელ-ჯემამდე',
    chapterIds: ['carthage', 'sidi-bou-said', 'el-jem'],
    accent: '#846038',
    sky: ['#9BACC6', '#EBC9A5'],
    hills: ['#CCA36D', '#AF8456', '#7F7554'],
  },
  {
    id: 'spain',
    name: 'ესპანეთი',
    route: 'ბარსელონიდან სევილიამდე',
    chapterIds: [
      'barcelona',
      'valencia',
      'madrid',
      'granada',
      'cordoba',
      'seville',
    ],
    accent: '#8D4A3F',
    sky: ['#9D9DC4', '#F0C5A1'],
    hills: ['#C99970', '#A77760', '#63765D'],
  },
];

const byChapter = new Map(
  COUNTRIES.flatMap((country) =>
    country.chapterIds.map((id) => [id, country] as const),
  ),
);

/** Country of a stop; stops outside the table fall back to the first country. */
export function countryOf(chapterId: string | null | undefined): Country {
  return (chapterId && byChapter.get(chapterId)) || COUNTRIES[0]!;
}

export function countryById(id: string): Country {
  return COUNTRIES.find((country) => country.id === id) ?? COUNTRIES[0]!;
}

/** Georgian title of a stop as content names it. */
export function stopTitle(chapterId: string): string | undefined {
  return catalog.chapters.find((chapter) => chapter.id === chapterId)?.title;
}

/** The stop a level belongs to and its step there, e.g. ყაზბეგი, 3 of 5. */
export function placeOfLevel(levelId: string | null | undefined) {
  const level = catalog.levels.find((entry) => entry.id === levelId);
  if (!level) return null;
  const own = catalog.levels.filter(
    (entry) => entry.chapterId === level.chapterId,
  );
  return {
    place: stopTitle(level.chapterId) ?? '',
    step: own.indexOf(level) + 1,
    steps: own.length,
  };
}

/**
 * How a level is named on screen: by its place and step ("ყაზბეგი · 3/5").
 * Content titles are numbered placeholders ("აღმოჩენა 18") and stay unshown.
 */
export function levelLabel(levelId: string | null | undefined): string {
  const place = placeOfLevel(levelId);
  return place ? `${place.place} · ${place.step}/${place.steps}` : '';
}
