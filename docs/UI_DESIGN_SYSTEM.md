# Asobana design system — მინანქარი (Minankari)

Claude owns this file, `mobile/src/theme`, the visual components in
`mobile/src/components` (except the Codex-owned `useLetterWheel.ts` and
`GestureScrollContext.ts`), `mobile/src/screens` and the route screens'
presentation. The final product name is **Asobana**, displayed as **ასობანა**
in the Georgian interface. It replaces the working name GeoWords and the home
screen placeholder "ქართული სიტყვები".

## Logo (2026-10-17)

The owner selected concept **01**: a rounded **A** whose three terminals connect
through a word-tracing path. The app icon is gold `#E3B65A` on the game's night
violet `#120C24`, with the swipe cut in the same violet; it was navy `#0B294B`
until the owner changed it on 2026-10-24 to match the splash and the game. The
advertising variants keep navy, and the light-surface logo reverses the emphasis
to a navy A with a gold path. The Latin **Asobana** wordmark is shared across
international advertising, while the Georgian home-screen title remains **ასობანა**.

`scripts/build-branding.cjs` generates the vector/PNG masters in
`mobile/assets/branding/` and `mobile/assets/icon.*`. See the
[asset notes](../mobile/assets/README.md) for variants and regeneration.

### Logo motion (`src/components/Logo.tsx`)

The mark is drawn live in Skia from the same vector paths, because it is itself
a word being found: three letter-dots joined by one swipe. It replaced the
earlier enamel rosette on home and victory.

- **Home intro and idle (removed 2026-10-17).** The home screen traced the
  logo on each launch and ran an idle spark. The owner dropped the home screen
  for the path (see [Navigation](#navigation-2026-10-17)), and `HomeLogo` went
  with it; the launch lockup below is now the logo moment.
- **Launch:** the native splash (`expo-splash-screen` in `mobile/app.json`) is
  the app's night violet `#120C24` (`palette.night`, also the bars, the journey
  ground and the background between screens) with `branding/splash-lockup.png`:
  the mark (160 pt) above the name ასობანა in gold-light display letters,
  260 x 200 pt, built by `scripts/build-splash.py`. Its swipe and dots are cut
  in the same violet (`branding/mark-splash.*`), as the icon's are; the owner
  chose on 2026-10-23 to keep the game violet and match the splash to it rather
  than recolour the game navy, and on 2026-10-24 moved the app icon to the same
  violet. The root layout keeps it until its first frame, then fades it
  (250 ms) into the loading view, which rebuilds the lockup in the same place
  (the live mark plus `splash-name.png`, the same name pixels), so the only
  visible change is the spark starting. Expo Go shows its own loader
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
- A soft dusk shadow keeps the mark readable on bright paintings. With Reduce
  Motion the mark is static.

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
- **Composition.** Text-heavy screens (album, settings, coins) veil the
  painting; the board and victory leave the landmark visible.
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
- **Chrome.** A country pill (name, `done/total` stops and a thin progress
  line) that opens the journey sheet, and coins. The bottom bar belongs to the
  tab layout (see [Navigation](#navigation-2026-10-17)). The mark at the right
  of each stop header (lock, postcard, check) is status only.
- **Place sheet.** Tapping a stop header opens its sheet: the painting, the
  stop's levels and postcard progress and its "იცოდი?" fact
  ([Place facts](PLACE_FACTS.md)), with "გაგრძელება" when its next level is the
  player's and "ბარათის ნახვა" once its card is collected. Stops not reached yet
  show a veiled painting and "ჯერ არ ჩასულხარ" and keep their fact for the
  arrival. The same fact (`PlaceFact`) appears on victory after a stop's first
  level, the arrival.
- **Postcard page** (`StampedPostcard`, owner's pick of three styles on
  2026-10-17). A collected card is a large postage stamp tilted on the veiled
  painting: perforated paper (outline computed with Skia's path API, drawn in
  SVG), the card number on the painting, the
  place in Mtavruli on the stamp's foot and an ivory postmark (country, stop
  number, wavy lines) over its top right corner. The caption sits below, and the
  fact is written on a paper note held by a strip of tape. It echoes the stamps
  beside each stop on the path. The album and victory keep the compact
  `Postcard` (painting band, place, number). Rejected: a two-sided card that
  flips to show the fact, and a full-screen travel poster.
- **Journey sheet.** Stops and levels completed overall, then the six countries
  on a dashed line with progress, "შენ აქ ხარ" on the current one and locks
  ahead. Tapping an open country scrolls the path to it.
- **Behaviour.** Rows have fixed heights (`getItemLayout`), so the path opens at
  the current stop's header when its next level fits on screen, otherwise centred
  on that level. Pulse and bubble loops stop when the path is hidden or reduced
  motion is on. Locked level titles stay hidden; coins show numbers only.
- **Locked taps answer.** A locked level, postcard or country shakes (levels and
  postcards), gives a warning haptic and shows a short note above the bar for
  2.2 s, also announced to VoiceOver: "ჯერ გაიარე დონე N" (N is the next level;
  levels unlock in order), "ბარათამდე დარჩა N დონე", "გაიხსნება წინა ქვეყნის
  შემდეგ". Locked coins stay up when pressed instead of sinking.
- **Continue button.** While the next level is scrolled out of view, a gold
  "გაგრძელება · დონე 18 · ყაზბეგი · 3/5" button floats above the bar and opens
  it. It replaced home's continue button.
- **Elsewhere.** The album groups cards by country, folds unreached countries into one line and
  lists earned pre-journey postcards as "ძველი ბარათები". Victory announces
  "ახალი ქვეყანა: …" after the last stop of a country; copy says "ადგილი"
  (place) where it said "თავი" (chapter).

### Navigation (2026-10-17)

The owner chose one structure: launch lockup, then the path as the main screen.

- **Tabs** (`app/(tabs)`, `src/components/TabBar.tsx`): მოგზაურობა (the path,
  `/`), ალბომი (`/album`) and პარამეტრები (`/settings`) share the enamel bar.
  Switching tabs keeps each screen, including the path's scroll position. The
  tab screens have no back button and use `Screen`'s `tabbed` mode, which
  leaves the home-indicator inset to the bar.
- **Over the tabs**, full screen, with a back arrow: the board, victory, a
  single postcard and the coins page (`/coins`, opened from the coin badge).
  `toJourney()` closes whatever is open and returns to the path; victory's
  "მოგზაურობა" and the board's look-back and locked messages use it.
- **Removed:** the home screen, its "მთავარი" buttons, the per-stop level grid
  (`/chapters/[chapterId]`) and the "მაღაზია" tab. Nothing is sold, so the
  coins page stays an explanation titled "მონეტები" until purchases are decided.

### The player's place and level names

- **Continue always means the real next level.** The engine moves its current
  level to any level the player opens, including a finished one.
  `nextUnfinished()` (`src/screens/nextLevel.ts`) keeps the player's place:
  the current level while it is unfinished, otherwise the first open unfinished
  level. The path's continue button, victory's next level, the path's pulsing
  level and the backgrounds of album, coins and settings all use it.
- **Finished levels open to look back.** The solved board is shown with
  "ეს დონე უკვე გავლილია", a "გაგრძელება" button to the real next level and a
  way back to the journey. They are not replayed (that would need engine rules
  for rewards and progress).
- **Levels are named by place and step:** `levelLabel()` gives
  "ყაზბეგი · 3/5". Content titles are numbered placeholders ("აღმოჩენა 18") and
  are not shown on the path, above the board or on victory.

### First-time tutorial (2026-10-17)

Four coach marks over the real board (`src/components/CoachMarks.tsx`, copy in
`src/screens/tutorial.ts`). The approved Georgian copy has not been reviewed by
a native speaker. Prices come from `DEFAULT_ECONOMY`.

- **When:** on an unsolved board while the save's `tutorialSeen` is false (for a
  new player, level 1), 600 ms after the screen opens so the rings measure the
  controls at rest. Never on a solved board, which has no wheel.
- **Steps:** the wheel and shuffle hub; both hint buttons with their prices; the
  tap-input toggle; the bonus meter. The screen dims around a gold pill ring and
  an ivory card sits on the side with more room. "გამოტოვება" ends it on any
  step; "შემდეგი", then "დავიწყოთ". Finishing or skipping saves it as seen and
  closes the overlay at once, even if the save fails.
- **Again:** Settings → "როგორ ვითამაშოთ" → "სწავლების ჩვენება" clears the flag
  and opens the player's next unfinished level. It is disabled once all 240
  levels are done.
- **Path:** the existing "დაწყება" bubble over the current coin already points
  new players at level 1, so the tutorial adds nothing to the path.
- **Accessibility:** the steps run in a `Modal` (VoiceOver stays on the card).
  Each step's heading reads "ნაბიჯი 1 / 4. …" and receives focus. The veil and
  ring are hidden from assistive technology. Steps only fade.

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

## Drawing: cheapest primitive for each job

Measured on Android in October 2026, each drawing primitive has its own cost:

- A Skia `<Canvas>` is its own `TextureView`, a layer the GPU composites on every
  frame. The game screen once had 11 of them; Samsung testing reported lag.
- A `react-native-svg` view is rasterized **in software on the main thread** into a
  bitmap as its screen appears, then uploaded. Harmless at icon size; a
  full-screen SVG is about 15 MB per screen and made every "გაგრძელება" stutter.
- Native views (`experimental_backgroundImage` linear/radial gradients, borders,
  `borderRadius`, `<Image resizeMode="repeat">` tiles) are drawn by the GPU with
  no extra layer or bitmap.

So: large static surfaces (backdrops, the wheel plate and its shadow) use native
views; small static art (icons, coins, postcard stamps and postmarks) uses SVG;
Skia only draws what follows a gesture or animation every frame (the wheel's cord,
the live loading mark, the coach-mark spotlight). Skia's path API without a
canvas may still compute geometry, e.g. the stamp's perforated outline exported
with `toSVGString()`. The enamel lattice is a tile from
`scripts/build-lattice.py`. `mobile/tests/drawingCost.test.tsx` guards the
backdrops and the plate.

## Components

- `Screen` / `TopBar` — backdrop, safe areas, and the native-gesture-wrapped
  `ScrollView` the wheel blocks while tracing (contract requirement; keep it).
- `Backdrop` — enamel ground from native gradients (gradient, kiln glow) and a
  repeating wire-star lattice tile; on scenes, native dusk gradients over the
  painting.
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
  `CoinGlyph`, `Icon` (SVG line icons, no icon font), `LoadingLogo` /
  `VictoryLogo`, `Postcard`, `StampedPostcard`, `PlaceFact`, `TabBar`,
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
is the non-gesture input; the first-time tutorial points it out. Controls do not dim during sub-second saves; they
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
