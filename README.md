# Asobana

Offline Georgian crossword prototype for iOS and Android. Connect wheel letters,
find target and bonus words, spend coins on hints, complete levels and resume from
local SQLite. Content revision 29 has 500 wide, connected, mixed-topic puzzles
across 100 journey stops, with five answers per board and five to seven wheel tiles.
Required spellings and accepted variants may repeat only at least 75 levels apart;
there are no two-letter targets. The reference dictionary has 2,568 entries /
2,436 eligible words, while the separate everyday-target allowlist has 2,318 non-plural words.
Pronouns, excluded verbs/action forms, name-only entries, reviewed barbarisms and
owner-excluded words cannot appear as targets or bonuses. Valid rare words remain
optional bonuses; verified plural nouns are also bonus-only, never required
answers or variants. Every eligible formable extra is recognized. Campaign
selection prioritizes using more distinct approved words to reduce repetition.
See [the campaign rules](docs/DISCOVERY_CONTENT.md) and
[the vocabulary review and all 500 boards](docs/VOCABULARY_REVIEW_V29.md).
Five-letter answers begin at level 3 and six-letter answers at level 16; every
board from level 26 has at least two longer answers. The journey map, destination
paintings and screen integration use the exact 100 stop IDs in
`content/journey-v29.json`. Malta, Tunisia, Spain, Portugal, Morocco, France, Switzerland,
Germany and Austria extend the original Italy route.
Each chapter builds toward a challenge and follows it with a gentler board.
Completing a chapter collects its illustrated destination postcard in the travel
album. Every ten bonus finds earns a free letter hint, carried across levels and
spent before coins. Previous progress and earned rewards survive content updates.
The interface is an original Georgian cloisonné-enamel design with bundled
Georgian fonts ([design system](docs/UI_DESIGN_SYSTEM.md)). The game is named
**Asobana**, displayed as **ასობანა** in the Georgian interface.

## Requirements

- Node.js 22.13+ (22 LTS recommended) and npm.
- Python 3.12+; generator tooling uses Python 3.13 with [uv](https://docs.astral.sh/uv/).
- An SDK 57 development build on iOS/Android for AdMob test ads. Gameplay also
  works in compatible Expo Go, where ads are shown as unavailable.
- Xcode/iOS simulator or Android SDK/emulator for local native testing.

Selected stack: Expo SDK 57, React Native 0.86.3, React 19.2.3, strict TypeScript,
Expo Router, Skia, Gesture Handler, Reanimated/Worklets, Zustand and Expo SQLite.
Native versions were installed from SDK 57's compatibility map using `expo install`.
The npm lockfile pins the complete tree. Gameplay needs no backend; optional
Ads require internet. Development and `beta` (tester) builds show Google's demo
ads; only `production` EAS builds (`ASOBANA_LIVE_ADS=1`) request the live units.

## Install and play

```sh
npm ci
npm run ios
# Or npm run android. The first run builds the native development client.
# For subsequent runs with that client installed:
npm start
```

`npm run ios` and `npm run android` build and open the native development client.
Rebuild after adding native packages or changing AdMob app IDs. To use Expo Go
for gameplay only, run `npx expo start --go` from `mobile`. If localhost resolves
to IPv6 while the client requests 127.0.0.1, use:

```sh
cd mobile
NODE_OPTIONS=--dns-result-order=ipv4first npx expo start --localhost --ios
```

Open გაგრძელება (Continue) or თავები (Chapters). Drag from one letter to another,
then release. Each tile can be used once per attempt; repeated letters have separate
tiles. Shuffle changes their order. The keypad button beside the wheel switches to
tap mode: tap letters in order, then the check in the wheel's hub; ✕ clears.
Find every crossword word to unlock the next level. Bonuses are optional. Hints
reveal a cell or word and deduct the displayed price. Progress and settings commit
before success feedback, so force-close/reopen resumes the last committed state.
The coins screen offers an optional rewarded ad for 50 coins. An unaffordable
hint keeps its icon and its price pill turns gold (`▶ +50`); tapping it opens the ad
directly on the board, without visiting the coins screen. Ads preload when coins
are low, and a pending watch can be cancelled. Watching an ad never purchases a
hint automatically.
The level-complete screen offers an optional gold `▶ ×2` pill beside a reward
just earned: watching its ad pays the level's 20 completion coins again (40 in
total), once per level. Continuing to the next level stays the primary action.
Rewards commit once per claim, including after restart. There are no purchases.
See [AdMob native testing](docs/NATIVE_TEST_CHECKLIST.md#admob-demo-ads) for setup,
failure cases and the remaining production requirements.

## Tests and checks

From the repository root:

```sh
npm run check                 # strict types, ESLint, Jest, content solve, Prettier
npm test                     # pure engine, wheel, real SQLite/store and UI tests
npm run validate:content      # validate and solve every bundled level
cd mobile
npx expo install --check
npx expo-doctor
npx expo export --platform ios --platform android
```

Jest uses Expo's preset and React Native Testing Library. Storage tests use Node's
real built-in SQLite (Node 22), including disk close/reopen, migration and rollback.
UI animation/platform effects are mocked in component tests; native gesture and
performance checks require the simulator/device checklist. Exporting both native
bundles does not prove native interaction or release-build correctness.

## Python generator

```sh
cd puzzle-generator
uv sync --locked
uv run pytest
uv run ruff check .
uv run ruff format --check .
uv run mypy src
uv run python -m asobana_generator --allow-prototype --seed 42
# exports ../artifacts/draft.v1.json and ../artifacts/draft.v1.review.json
cd ..
node --import tsx scripts/validate-draft.ts artifacts/draft.v1.json
```

`--dictionary`, `--output`, `--seed` and `--max-words` customize the run. Without
`--allow-prototype`, vocabulary must be explicitly `editorially-approved`.
Candidate ingestion never grants approval. Output always remains `generated-draft`;
it cannot be bundled for play without a separate editorial promotion and review
provenance. Generation is seeded, input-order independent and bounded, using a
simple connected crossword search with multiset wheels. It is a foundation, not a
large-scale content optimizer. Runtime code has no third-party Python dependencies.

## Collaboration and architecture

- [AI contributor instructions and word-generation rules](AGENTS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Claude integration contract](docs/INTEGRATION_CONTRACT.md)
- [Development plan](docs/DEVELOPMENT_PLAN.md)
- [Current implementation and verification status](docs/CODEX_STATUS.md)
- [Design system and presentation](docs/UI_DESIGN_SYSTEM.md)
- [Vocabulary provenance and license](content/dictionaries/README.md)
- [Expanded campaign, pacing and save migration](docs/EXPANDED_CONTENT.md)
- [Native test checklist](docs/NATIVE_TEST_CHECKLIST.md)

The separately requested `GEOWORDS_PRODUCT_AND_ENGINEERING_SPEC.md` was absent.
The pasted implementation brief is the requirements baseline; reconcile the missing
spec before expanding product scope. Database corruption or newer save/content
versions show an error and preserve the data; nothing is reset automatically.
To start over, use Settings → პროგრესის განულება (after a confirmation it returns to
level 1 with the starting coins; sound and haptics settings stay).

## Repository

`mobile/app` holds Router routes; `mobile/src/engine` is pure rules;
`models`, `content`, `storage`, `state`, `services` and `navigation` provide stable
interfaces; `theme`, `components` and `screens` are Claude-owned presentation.
`content` contains vocabulary, packs and JSON schemas. `puzzle-generator` contains
Python tooling and tests. The GitHub Actions workflow is configured to run both stacks and validate Python
exports with the TypeScript loader. It has not been executed on GitHub yet. Native smoke flows are in `mobile/e2e`.
