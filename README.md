# GeoWords

Offline Georgian crossword prototype for iOS and Android. Connect wheel letters,
find target and bonus words, spend coins on hints, complete levels and resume from
local SQLite. Four manually authored levels use ten reference-checked Georgian
words. The interface is an original Georgian cloisonné-enamel design with bundled
Georgian fonts ([design system](docs/UI_DESIGN_SYSTEM.md)); final branding is open.

## Requirements

- Node.js 22.13+ (22 LTS recommended) and npm.
- Python 3.12+; generator tooling uses Python 3.13 with [uv](https://docs.astral.sh/uv/).
- Expo Go compatible with SDK 57, or a development build, on iOS/Android.
- Xcode/iOS simulator or Android SDK/emulator for local native testing.

Selected stack: Expo SDK 57, React Native 0.86.3, React 19.2.3, strict TypeScript,
Expo Router, Skia, Gesture Handler, Reanimated/Worklets, Zustand and Expo SQLite.
Native versions were installed from SDK 57's compatibility map using `expo install`.
The npm lockfile pins the complete tree. No backend or online services are required.

## Install and play

```sh
npm ci
npm start
# Press i for the iOS simulator or a for Android, or scan in compatible Expo Go.
```

`npm run ios` and `npm run android` also start Expo and open the selected platform.
If localhost resolves to IPv6 while Expo Go requests 127.0.0.1, use:

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
The coin screen is informational; there are no purchases or ads.

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
uv run python -m geowords_generator --allow-prototype --seed 42
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

- [Architecture](docs/ARCHITECTURE.md)
- [Claude integration contract](docs/INTEGRATION_CONTRACT.md)
- [Development plan](docs/DEVELOPMENT_PLAN.md)
- [Current implementation and verification status](docs/CODEX_STATUS.md)
- [Design system and presentation](docs/UI_DESIGN_SYSTEM.md)
- [Vocabulary provenance and license](content/dictionaries/README.md)
- [Native test checklist](docs/NATIVE_TEST_CHECKLIST.md)

The separately requested `GEOWORDS_PRODUCT_AND_ENGINEERING_SPEC.md` was absent.
The pasted implementation brief is the requirements baseline; reconcile the missing
spec before expanding product scope. Database corruption or newer save/content
versions show an error and preserve the data. There is no destructive reset flow.

## Repository

`mobile/app` holds Router routes; `mobile/src/engine` is pure rules;
`models`, `content`, `storage`, `state`, `services` and `navigation` provide stable
interfaces; `theme`, `components` and `screens` are Claude-owned presentation.
`content` contains vocabulary, packs and JSON schemas. `puzzle-generator` contains
Python tooling and tests. The GitHub Actions workflow is configured to run both stacks and validate Python
exports with the TypeScript loader. It has not been executed on GitHub yet. Native smoke flows are in `mobile/e2e`.
