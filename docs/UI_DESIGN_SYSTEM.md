# Asobana design system — მინანქარი (Minankari)

Claude owns this file, `mobile/src/theme`, the visual components in
`mobile/src/components` (except the Codex-owned `useLetterWheel.ts` and
`GestureScrollContext.ts`), `mobile/src/screens` and the route screens'
presentation. The final product name is **Asobana**, displayed as **ასობანა**
in the Georgian interface. It replaces the working name GeoWords and the home
screen placeholder "ქართული სიტყვები".

## Logo (2026-10-17)

The owner selected concept **01**: a rounded **A** whose three terminals connect
through a word-tracing path. The app icon is gold `#E3B65A` on navy `#0B294B`;
the light-surface logo reverses the emphasis to a navy A with a gold path. The
Latin **Asobana** wordmark is shared across international advertising, while
the Georgian home-screen title remains **ასობანა**.

`scripts/build-branding.cjs` generates the vector/PNG masters in
`mobile/assets/branding/` and `mobile/assets/icon.*`. See the
[asset notes](../mobile/assets/README.md) for variants and regeneration.

### Logo motion (`src/components/Logo.tsx`)

The mark is drawn live in Skia from the same vector paths, because it is itself
a word being found: three letter-dots joined by one swipe. It replaced the
earlier enamel rosette on home and victory.

- **Home intro** (`HomeLogo`, first home visit of each launch, about 2.5 s, tap
  to skip), in the logo's own colours only: the gold A forms (slight overshoot),
  its navy dots pop in like wheel letters, the navy swipe draws its two strokes
  across the gold, the gold glows once and a light sweep crosses it. The name
  ასობანა appears letter by letter from `INTRO_TITLE_DELAY`, and the tagline
  follows on a dusk pill so it reads on the brightest skies. (A first version
  traced the swipe in the game's pomegranate cord colour; on the logo that read
  as a foreign colour.)
- **Home idle:** a spark runs the swipe every 4.2 s, lighting each dot as it
  passes, with a slow light sweep every other spark.
- **Launch:** the native splash (`expo-splash-screen` in `mobile/app.json`) is
  navy `#0B294B` with `branding/splash-lockup.png`: the mark (160 pt) above the
  name ასობანა in gold-light display letters, 260 x 200 pt, built by
  `scripts/build-splash.py`. The root layout keeps it until its first frame,
  then fades it (250 ms) into the loading view, which rebuilds the lockup in the
  same place (the live mark plus `splash-name.png`, the same name pixels), so
  the only visible change is the spark starting. Expo Go shows its own loader
  instead; the native splash appears only in builds.
- **Loading** (`LoadingLogo`): the spark loops along the swipe instead of a
  spinner while fonts and the save load. The view stays at least 800 ms, so the
  studio credit below it can be read.
- **Studio credit** (`StudioCredit`): the Spilo Games logo in ivory, 124 pt wide
  at the bottom of the loading view, and 132 pt in Settings above the game name
  and version. One template for every Spilo game: the game's colour and mark in
  the centre, the studio at the bottom, with no extra screen or wait.
- **Victory** (`VictoryLogo`): the A grows in, the dots pop and the swipe
  traces in the stop's accent, then 18 gold, ivory and accent tiles burst from
  the dots. Stop endings still show the earned postcard instead.
- A soft dusk shadow keeps the mark readable on bright paintings. Loops stop
  while home is hidden; with Reduce Motion the mark is static.

## Concept

Georgian cloisonné enamel (ტიხრული მინანქარი): thin gold wire partitions filled
with fired enamel. The idea maps directly onto the game:

- **Crossword cells are cloisons.** Empty cells are ivory wells edged in gold
  wire; a found word is fired into them as turquoise enamel.
- **The wheel is an ivory medallion** in a gold rim, with large ink letters
  set directly on it (design A, 2026-10-15): the clearest thing on the screen.
  Tracing draws a pomegranate cord; chosen letters turn into pomegranate discs.
- **Victory traces the logo:** the A forms and its swipe is drawn in the
  place's accent, bursting into small gold letter tiles (see Logo motion).

## Scenes (2026-10-15)

Every chapter plays over a painted place (`src/theme/scenes.ts`): Kazbegi,
Tusheti, old Tbilisi, Katskhi Pillar, Kakheti, a stone bridge, Mtskheta, Ananuri,
a palace garden and Batumi. The paintings set a calm golden-hour tone; the enamel
ground remains for loading. Since revision 13 each painting belongs to the
journey stop it shows, and stops without one use a placeholder (see
[Journey path](#journey-path-2026-10-17)).

- **Readable on any painting.** `Backdrop` adds a dusk gradient under the top bar
  and above the bottom controls; `veil` darkens text-heavy screens (chapters 0.35,
  settings and coins 0.55). Light text on paintings uses the `onScene` shadow;
  short strip text sits on a dusk pill; secondary buttons are frosted dusk.
- **Crossword matches its scene.** Empty cells are frosted warm-white tiles with
  a shadowed lower edge. Found cells, found-word chips, progress lozenges, the
  tracing cord and chosen letters share the scene's `accent`, a deep colour picked
  from the painting (Kazbegi dusk indigo, Kakheti saperavi, Tbilisi brick, ...).
  The wheel is a 90% ivory disc with a soft shadow, so the painting breathes through.
- **Composition.** Home puts the title in the sky and the actions on the
  foreground, leaving the landmark visible between them. Chapter cards show each
  chapter's horizon strip.
- **`CoverImage`.** React Native's `cover` mode mis-crops these large bundled
  images on iOS (it showed a zoomed corner), so images are laid out with an
  explicit aspect-correct frame.
- **Assets.** `scripts/build-scenes.py` turns the PNG masters into the bundled
  JPEGs. To add or replace a scene, update `docs/SCENE_BRIEF.md`, regenerate, rebuild,
  and pick its accent from the painting.

## Journey path (2026-10-17)

Revision 13 turns the campaign into a journey of 48 stops in six countries
(Georgia, Turkey, Bulgaria, Greece, the western Balkans, Italy), five levels each.
The chapter list became a scrolling path (`src/screens/JourneyScreen.tsx`, route
`/chapters`), chosen over a geographic map after map mocks in relief, cartoon
and painted styles all read as atlases rather than as a game.

- **Rows.** Each country opens with a card (number, stop and level counts, route,
  progress or lock). Each stop is a section: its painting as a header (stop
  number, country, title, levels and progress), five level coins on a zigzag of
  dotted links, and a postcard coin at the end. Sides alternate per stop. A
  dashed divider separates countries.
- **Coins.** Raised enamel buttons, a face over a darker rim (`Coin`): gold with
  a check when finished; the next level larger, ivory in a gold ring with a play
  mark, a pulse ring and a bobbing "დაწყება" bubble; future levels slate with
  their number. The postcard coin opens the collected card.
- **Stamps.** Beside a finished stop, its painting as a perforated stamp
  ("შეგროვდა"); beside the current stop, a "?" stamp counting the levels left.
- **Chrome.** Home button, a country pill (name, `done/total` stops and a thin
  progress line) that opens the journey sheet, and coins. A bottom bar links the
  journey, album, shop and settings; it pushes routes rather than hosting tabs.
- **Journey sheet.** Stops and levels completed overall, then the six countries
  on a dashed line with progress, "შენ აქ ხარ" on the current one and locks
  ahead. Tapping an open country scrolls the path to it.
- **Behaviour.** Rows have fixed heights (`getItemLayout`), so the path opens at
  the current stop's header when its next level fits on screen, otherwise centred
  on that level. Pulse and bubble loops stop when the path is hidden or reduced
  motion is on. Locked level titles stay hidden; coins show numbers only.
- **Elsewhere.** Home links "მოგზაურობა" and counts album cards out of 48. The
  album groups cards by country, folds unreached countries into one line and
  lists earned pre-journey postcards as "ძველი ბარათები". Victory announces
  "ახალი ქვეყანა: …" after the last stop of a country; copy says "ადგილი"
  (place) where it said "თავი" (chapter).

### Stop paintings and placeholders

`src/theme/journey.ts` groups the 48 stop IDs from `content/journey-v13.json`
into countries and gives each country an accent and placeholder palette.
`sceneFor(id)` in `src/theme/scenes.ts` resolves, in order: a painting registered
under the ID; an original painting mapped through `STOP_PAINTINGS` (by what it
shows: Kazbegi, Tusheti, Tbilisi, Katskhi, Sighnaghi for Kakheti, Makhuntseti,
Mtskheta, Ananuri, Zugdidi for the palace garden, Batumi); otherwise a placeholder
scene in the country's colours. `PlaceArt` draws a painting cropped to its box, or
for placeholders a quiet Skia landscape (sky gradient, sun, three hill ridges,
varied per stop). Backdrops, headers, stamps and postcards all use it, so a
missing painting never breaks a screen and never shows another place's art.
Earned legacy postcards keep their historical IDs and original paintings.

Since 2026-10-17 all 48 stops have a painting: the ten originals plus 38 painted
from `artifacts/journey-paintings-brief.md` and registered under their stop IDs.
Placeholders remain only as a safety net. Each new stop's `accent` was picked by
hand from its painting (automatic picks came out uniformly brown on these warm
paintings), checked as white letters on found cells over the painting's sky, and
varied so neighbouring stops differ: for example Svaneti slate blue, Martvili
emerald, Pamukkale plum, Santorini Aegean blue, Florence terracotta. `sky` is the
painting's average sky colour from `scripts/build-scenes.py`.

To replace or add a stop painting: save the master as
`artifacts/scenes/NN-<stop id>.png` (names as in the brief), run
`uv run --with pillow python -I scripts/build-scenes.py` (existing JPEGs are kept;
`--force` rebuilds them), then add or update the `SCENES` entry under the stop ID
with `require`d images, the printed `sky` colour and an accent picked by eye.

## Tokens (`mobile/src/theme`)

| Token                             | Value                       | Use                                    |
| --------------------------------- | --------------------------- | -------------------------------------- |
| `gold` / `goldLight` / `goldDeep` | #E3B65A / #FFE6A6 / #9C6E1F | Wire, rims, primary action, highlights |
| `ivory` / `ivoryShade`            | #F8F0DE / #E2D2B0           | Empty cells, letter tiles, text        |
| `ink`                             | #1B1838                     | Letters on ivory, label on gold        |
| `turquoise` (+ light, deep)       | #23A094                     | Found-word enamel, progress            |
| `pomegranate` (+ light)           | #C8334E                     | Selected letters, tap submit, errors   |
| `textMuted`, `hairline`           | ivory 68%, gold 38%         | Secondary text, card edges             |

Each chapter is fired on its own ground (`chapterTone(chapterId)`, cycling):
lapis, saperavi, emerald, amber. `levelTone(levelId)` resolves a level's ground.
Spacing (`space`), radii (`radius`), the 48 pt `touch` minimum and all
choreography timings (`motion`) are tokens too; components never hard-code them.

## Typography

All faces are static instances of **Noto Sans Georgian 2.005** (OFL 1.1), bundled
under `mobile/assets/fonts` and loaded with `useFonts(fontAssets)` before any
screen renders. No runtime font fetch. Each weight is its own family, so styles
never set `fontWeight` (Android would synthesize bold).

| Family                      | Instance          | Role                                   |
| --------------------------- | ----------------- | -------------------------------------- |
| `GeoDisplay-CondensedBlack` | wght 900, wdth 75 | Display lines, numerals                |
| `GeoText-Bold`              | wght 700          | Letters in tiles, cells, chips; counts |
| `GeoText-SemiBold`          | wght 600          | Labels, buttons, eyebrows              |
| `GeoText-Regular`           | wght 400          | Body and captions                      |

Display text is set in **Mtavruli**, the Georgian titling script, through
`<Display>` / `toMtavruli()`. Screen readers and test selectors receive the
original Mkhedruli as the accessible name. Eyebrows ("ᲓᲝᲜᲔ 2") use small
tracked Mtavruli. Game words are always rendered in Mkhedruli exactly as the
engine provides them; Mtavruli is never fed back into the engine.

Single letters are optically centred with `letterLift(fontSize)`: Mkhedruli's
visual centre is the middle of its x-height band, 11.5% of the font size below
the line-box centre (ascent 1068, descent 292, x-height 546). Every instance
keeps all 33 modern letters plus the full Mkhedruli and Mtavruli blocks.
Regenerate with `uv run --with fonttools python -I scripts/instance-fonts.py`.

## Components

- `Screen` / `TopBar` — backdrop, safe areas, and the native-gesture-wrapped
  `ScrollView` the wheel blocks while tracing (contract requirement; keep it).
- `Backdrop` — static Skia ground: gradient, kiln glow, faint wire-star lattice.
- `CrosswordBoard` — cells sized to the space given (26–84 pt, 4 pt gaps,
  corners scaling with the cell); `BoardMoment` drives reveal order, hint
  gilding, duplicate reminders and the victory wave.
- `LetterWheel` — ivory medallion, pomegranate cord, letters at 15% of the
  diameter, shuffle in the hub (drawn above the gesture view, so tapping it never
  starts a trace), hints on the left, input-mode toggle on the right.
  `wheelSize()` keeps the disc at about two thirds of the screen width (245–300
  pt) so the adapter's touch circles (9% of the diameter) stay at least 44 pt.
  Selection discs are drawn 4 pt larger than the touch circles; hit geometry is
  the adapter's `layout`. Tap mode uses the same disc with tappable letters.
- `WordStrip` — 52 pt; traced letters as ivory chips; in tap mode ✕ (clear) and
  ✓ (submit) flank them. The last committed outcome stays (bright for 1.6 s,
  then dimmed) until the next trace.

### Game screen budget

The board gets every point the rest leaves: top bar 60, topic and progress 50,
strip 52, wheel `wheelSize()`, 12 pt side gutters. On a 402×874 pt iPhone the
board area is about 340 pt tall (it was 146 pt before design A), which takes the
median cell from 26 to 56 pt in the current pack. Grid shape still decides how
much of the width a level fills: square and wide grids fill it, tall grids
(e.g. 7 rows × 3–4 columns) are height-bound at about half the width. Generator
or content changes (prefer columns ≥ rows, or transpose tall layouts) fix that.

- `PlaceArt` — a stop's painting cropped to its box, or its placeholder landscape.
- `PrimaryButton`, `SecondaryButton`, `RoundButton`, `Card`, `CoinBadge`,
  `CoinGlyph`, `Icon` (Skia line icons, no icon font), `HomeLogo` /
  `LoadingLogo` / `VictoryLogo`, `Postcard`,
  `BonusMeter`, `Txt`, `Display`.

## Motion and the event contract

Animations start only from committed event batches (`eventBatch`), translated by
`screens/presentEvents.ts`. A screen ignores batches older than its mount.

| Batch contents                      | Presentation                                                 |
| ----------------------------------- | ------------------------------------------------------------ |
| `word-found` + `cells-revealed`     | Cells fire in reading order (75 ms stagger), gold ring flash |
| `cells-revealed` with source `hint` | Cell fires gold, holds, cools to turquoise                   |
| `bonus-found`                       | Gold chips, "ბონუს სიტყვა +3", coin badge pulse              |
| `word-rejected` duplicate           | Board rings the existing word; muted chips, "უკვე ნაპოვნია"  |
| `word-rejected` invalid             | Pomegranate chips shake, "ეს სიტყვა აქ არ არის"              |
| other rejections                    | One-line notice (e.g. "მონეტები არ გყოფნის")                 |
| `level-completed`                   | Wheel fades out, diagonal gold wave, then the victory route  |
| coin change                         | Badge pulses; the number is always the committed balance     |

The hand-off to `/victory/[levelId]` happens after `celebrationLength()` and only
while the game screen is focused; the "გაგრძელება" button skips the wait. The
victory screen shows the reward only when the completing batch is still current,
so revisiting a completed level never replays a reward. Animation duration never
gates rules or persistence. Reanimated respects the system reduce-motion setting.

## Accessibility

Buttons expose roles, names (with prices for hints) and disabled/selected states.
Cells read "რიგი 1, სვეტი 3, ე" or "ცარიელი"; hidden answers never reach the UI.
Outcomes are announced and stay readable in the strip. Tap mode (corner toggle)
is the non-gesture input. Controls do not dim during sub-second saves; they
ignore presses instead. Minimum targets are 44–54 pt.

## Verification (2026-10-14)

- `npm run check` passes: strict types, ESLint, 57 Jest tests (7 presentation),
  content solve and Prettier.
- iOS 26.5, iPhone 17 simulator, Expo Go 57.0.9: the full Maestro sequence in
  `NATIVE_TEST_CHECKLIST.md` passed uninterrupted on a fresh device, including
  swipe, duplicate, invalid, tap mode, bonus, paid hint, cold restart restoring
  113 coins / 1 word / 1 bonus, chapter unlock, an empty-space drag that selects
  nothing, and the final victory without a next-level action.
- Frame captures confirmed the wire trace, word firing, hint gilding, duplicate
  reminder, completion wave and the victory entrance.
- Android (Pixel 10 Pro emulator, Expo Go): home and game screens render with
  the bundled fonts and Skia drawing. The Android Maestro flows were updated for
  the new UI with coordinates measured from that screen, but **not re-run**: the
  emulator held an in-progress save and became unresponsive under load.
- Not yet done: physical devices, frame-time profiling, VoiceOver/TalkBack
  passes, small-phone (SE) and tablet layout review.
