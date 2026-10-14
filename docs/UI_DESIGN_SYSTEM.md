# GeoWords design system — მინანქარი (Minankari)

Claude owns this file, `mobile/src/theme`, the visual components in
`mobile/src/components` (except the Codex-owned `useLetterWheel.ts` and
`GestureScrollContext.ts`), `mobile/src/screens` and the route screens'
presentation. Final branding is still undecided: "ქართული სიტყვები" and the
working name GeoWords are placeholders that live in screen copy only.

## Concept

Georgian cloisonné enamel (ტიხრული მინანქარი): thin gold wire partitions filled
with fired enamel. The idea maps directly onto the game:

- **Crossword cells are cloisons.** Empty cells are ivory wells edged in gold
  wire; a found word is fired into them as turquoise enamel.
- **The traced word is the wire.** Dragging across the wheel draws a molten
  gold wire (three stacked strokes: deep, body, highlight) between letters.
- **The wheel is a medallion.** Gold partitions run from the hub to every
  letter, so each letter sits in its own compartment.
- **Victory is a goldsmith's rosette:** a seven-bladed whirl after the borjgali
  sun, ringed with granulation beads, with slow counter-rotating light rays.

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
- `CrosswordBoard` — cells sized to the space given (26–58 pt); `BoardMoment`
  drives reveal order, hint gilding, duplicate reminders and the victory wave.
- `LetterWheel` — enamel plate, gold wire, tiles, corner controls and
  `WordStrip`; tap mode reuses the same disc with tappable tiles and a hub
  submit. Hit geometry is the adapter's `layout`; tile decoration matches it.
- `WordStrip` — traced letters as ivory chips; the last committed outcome stays
  (bright for 1.6 s, then dimmed) until the next trace.
- `PrimaryButton`, `SecondaryButton`, `RoundButton`, `Card`, `CoinBadge`,
  `CoinGlyph`, `Icon` (Skia line icons, no icon font), `Rosette`, `Txt`, `Display`.

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
