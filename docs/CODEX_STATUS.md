# Codex status

Updated: 2026-10-17 (Asia/Tbilisi). **Milestone A prototype implemented.**
Core gameplay and save/resume are verified in automated tests and native emulator
flows. This is not a production-store release or a hardware performance sign-off.

## Latest: revision 13 journey campaign (local; not uploaded)

- Builds 240 levels in the exact 48 journey stops, five answers per board. The
  owner's 75-level repeat gap replaces campaign-wide uniqueness: 1,200 answer
  slots use 589 distinct spellings, with the shortest actual gap exactly 75.
- Expands the everyday target bank from 778 to 869: 95 approvals, minus four
  newly excluded targets. Adds 79 reference entries and promotes 16 existing
  dictionary words. Records 24 held candidates and individual source decisions.
- Excludes six reviewed barbarisms and owner-excluded `რული` from targets,
  variants and bonuses. Historical provenance and packs remain unchanged.
- Includes 459 five-letter and 74 six-letter answer slots; longer answers start
  at levels 3 and 18. Keeps original physical gates, 5/6/7-tile progression,
  chapter challenge/recovery waves and a maximum ten-point upward score change.
- Saves from revisions 1–12 retain earned progress and rewards. Original earned
  postcards persist separately from the 48 current cards, including SQLite
  restart; finishing the previous 50 levels unlocks level 51.
- Validation: root check, 172 Jest / 84 Pytest tests, all 240 engine solves,
  TypeScript, ESLint, Prettier, Ruff, Mypy and iOS export pass. No new native-device
  playtest or TestFlight upload.
- Claude's map, paintings and presentation integration remain pending. Existing
  presentation still uses the historical art registry; see the
  [handoff contract](INTEGRATION_CONTRACT.md#revision-13-journey-content-handoff).
- [Full vocabulary review, sources and all 240 boards](VOCABULARY_REVIEW_V13.md).

## Historical: revision 12 everyday-word review (TestFlight build 9 available)

- Reviews every one of the previous 250 required answers. Moves 88 questionable
  required words to bonus-only eligibility; reauthors boards with 250 unique
  approved answers, 74 five-letter and 21 six-letter words.
- Enforces a separate everyday-required allowlist in Python and TypeScript,
  including accepted variants. Rare words remain optional bonuses; grammar and
  name-only exclusions remain. All dictionary entries retain their provenance.
- Keeps five tiles for levels 1–5 and six for 6–25; later levels use seven tiles
  to fit everyday combinations. Target words remain at most six letters.
- Migrates revisions 1–11 with rewards/progress intact. 161 Jest / 80 Pytest tests,
  50 engine solves, static checks and iOS export pass. No new native device run.
- Version **0.1.0 (9)** shipped to TestFlight on 2026-10-16; Apple confirms
  **VALID / IN_BETA_TESTING**. See [release details](TESTFLIGHT.md).
- [Full word-by-word review](VOCABULARY_REVIEW_V12.md).

## Historical: revision 11 longer-word campaign (local; not uploaded)

- Rebuilds all 50 level recipes with 250 unique answers, including 59 five-letter
  and 19 six-letter words. Longer words begin at levels 3 and 18 respectively;
  every level from 26 has at least two. Existing grammar/name policy remains.
- Enforces actual word-length progression alongside connected, readable layouts
  and chapter challenge/recovery waves; keeps historical packs immutable.
- Migrates revisions 1–10, including current TestFlight level-25 saves, with
  completion, solved credits, hints, coins, postcards and bonus rewards intact.
- Validation: 154 Jest / 78 Pytest tests, all 50 engine solves, TypeScript,
  ESLint, Prettier, Ruff, Mypy and iOS export. No new native run or TestFlight upload.
- [Campaign notes](DISCOVERY_CONTENT.md) and [level/sense review](LEVELS_V11.md).

## Historical: revision 10 pacing, postcards and bonus rewards

- Reorders all 50 reviewed boards into challenge/recovery chapter waves while
  preserving all 250 unique required answers and the 1,202-word playable pool.
  Largest estimated upward difficulty jump falls from 39 to 7 points.
- Adds an offline destination postcard album using all ten existing paintings,
  chapter-completion rewards, next-destination previews and full-card views.
- Every ten bonus finds earns a persistent free letter hint, spent before coins.
  Existing per-word coins remain. Old saves receive credit for recorded bonuses;
  all prior content revisions migrate with progress and paid hints preserved.
- Validation: 148 Jest tests, 76 Pytest tests, all 50 engine solves, TypeScript,
  ESLint, Prettier, Ruff, strict Mypy and iOS export pass.
- Isolated iPhone 17 native flow passes bonus reward/consumption, chapter
  postcard unlock, full-card navigation and album collection.
- Shipped to TestFlight as **0.1.0 (8)** on 2026-10-16. Apple confirms
  **VALID / IN_BETA_TESTING**. See [release details](TESTFLIGHT.md).

## Historical: revision 9 expands ordinary vocabulary and excludes name-only entries

- Adds 686 reference-checked noun/adjective senses: 1,233 reference entries,
  1,202 playable words. Historical entries are preserved with exact source links.
- Blocks known name-only spellings while retaining ordinary meanings of name
  homographs, per owner clarification. Pronouns, finite verbs and seven verbal
  action forms are excluded from active targets, variants and bonuses.
- Refreshes eight boards with 23 new required spellings; all 250 required answers
  across 50 boards remain unique. All eligible formable bonuses remain accepted.
- Preserves revisions 1–8 and migrates saved progress, coins and paid hints to 9.
- Validation: 137 Jest tests, 75 Pytest tests, TypeScript, ESLint, Prettier, Ruff,
  strict Mypy, all 50 engine solves and iOS bundle export pass.
- Source change only; no TestFlight build/upload for revision 9.

## Historical: revision 8 removes conjugated verbs and repeated required answers

- Adds 126 individually reference-checked noun/adjective/adverb senses, preserving
  the original 421 entries: 547 total, 523 eligible after category exclusions.
- Rebuilds 50 boards with five answers each and **250 unique required spellings**.
  Five/six tile wheels and wide phone layouts remain; optional bonuses continue
  to recognize all eligible formable words.
- Excludes seven conjugated verb forms, including `იდო` and `არის`, from all
  answers, accepted variants and bonuses. Pronoun exclusions remain.
- Preserves historical revisions 1–7 and migrates saves with earned credits intact.
- Validation: 131 Jest tests, 73 Pytest tests, TypeScript, ESLint, Prettier, Ruff,
  strict Mypy and all 50 engine solves pass. iOS bundle export succeeds.
- Source change only; no new TestFlight build/upload for revision 8.

## Historical: revision 7 excludes pronouns

- Excludes pronouns from active targets, accepted variants and bonus words using
  the shared `content/dictionaries/word-policy.json`; 404 eligible dictionary words.
- Keeps 50 levels and 252 targets (150 distinct). Fourteen replacement layouts,
  36 unchanged layouts; existing wheel sizes, identities and repetition limits.
- Historical revisions 1–6 remain immutable and migrate to 7 with earned coins,
  completed boards, solved-word credits and paid hints preserved.
- Shipped to TestFlight as 0.1.0 (7).

## Latest: revision 6 wide crossword campaign

- All 50 boards use six or seven columns, connected crossings and tight bounds;
  target count is five or six, with zero two-letter targets. 252 answer slots,
  153 distinct targets and 154 bonus opportunities from the unchanged dictionary.
- All boards reach 100% iPhone 17 / Pro Max width in the supplied continuous model;
  unchanged renderer rounding gives 98.94% on iPhone 17. Minimum SE cell is 41 pt.
- Revisions 1–5 upgrade to 6 while retaining coins, completion and partial/hint
  credits. IDs/order stay stable. Digest-bound explicit promotion reproduces the
  reviewed pack byte-for-byte; ordinary generation still exports drafts.
- `npm run check` passes: 116 Jest tests / 14 suites, all 50 engine solves and
  TypeScript/ESLint/Prettier. 67 Pytest tests, Ruff and strict Mypy pass.
- Claude-owned components/screens/theme/app files remain unchanged from the start
  of this rebuild. Existing user changes remain in the working tree.
- Native screenshot evidence and the 12 stale historical Maestro flows are recorded
  in [mobile/e2e/README.md](../mobile/e2e/README.md). No new Android-native run.
- No new TestFlight build/upload. Full comparison, constraints, recipes and device
  projections: [DISCOVERY_CONTENT.md](DISCOVERY_CONTENT.md).

## Historical: revision 5 discovery rebuild

- Revision 5: all 50 levels rebuilt, 5 physical tiles through level 20,
  gradual 5–6-tile stages after that, and no seven/eight-tile wheels.
- Four introductory boards have four answers; the other 46 have five. Mixed
  vocabulary provides 246 answer slots, 151 distinct targets, 50 distinct wheels,
  and 127 bonus opportunities. Every verified formable extra is recognized.
- 421 reference-checked dictionary entries with exact source links; assistant
  reference/layout review complete, native Georgian editorial review pending.
- UI implementation, economy and hints preserved. Direct save upgrades from all
  four historical revisions retain coins, completions, partial credits, paid hints,
  unlocks and settings; SQLite rollback and close/reopen verified.
- 101 Jest / 12 suites, 60 Pytest, complete engine solves, TS/ESLint/Prettier,
  Ruff/Mypy and both iOS/Android Hermes exports pass.
- iPhone simulator retained 192 coins and partial level 8 progress; bonus +3,
  duplicate rejection, completion +25 and level 9 unlock verified. A clean reload
  restored 220 coins, all five solved answers and the bonus. Shared content now
  has an explicit Metro watcher. No new Android-native run.
- Source rebuild only; TestFlight 0.1.0 (2) still runs revision 4. See
  [DISCOVERY_CONTENT.md](DISCOVERY_CONTENT.md) for all 50 reviewed recipes and limits.

## Latest: second TestFlight build

- Source commit `c6eb3d1`, content revision 4: 50 themed levels, 320 reference-checked
  dictionary entries and gradual difficulty progression. Current target counts are
  35 three-answer, ten four-answer and five five-answer boards.
- Preflight passed: 92 Jest tests / ten suites, 56 Pytest tests, strict TypeScript,
  ESLint, all 50 engine solves and Prettier.
- **GeoWords 0.1.0 (2) is available in TestFlight.** EAS build/submission finished;
  Apple confirmed `VALID / IN_BETA_TESTING`, verified on 2026-10-15. Uploaded
  2026-10-14 at 19:14:54 Asia/Tbilisi. Same app identity and signing as build 1.
- Signed IPA inspection verified version/build, offline Hermes bundle, all four
  Georgian fonts and permission settings; Xcode 26.6 / iOS 26.5 SDK, iOS 16.4 minimum.
- Archive verification matched the current content, UI and save-migration source.
  Existing root-level Expo/EAS files reference another workspace project; this
  release used the established `mobile/` project and preserved those files.
- Build/submission links and evidence: [TESTFLIGHT.md](TESTFLIGHT.md).

## Latest: first TestFlight upload

- **GeoWords 0.1.0 (1) is ready for internal TestFlight testing.** Apple confirmed
  `VALID` and `READY_FOR_BETA_TESTING`; EAS build and submission both finished.
  Uploaded on 2026-10-14 at 12:03:19 Asia/Tbilisi.
- Store-signed IPA built using Xcode 26.6 and iOS 26.5 SDK, minimum iOS 16.4.
  Binary inspection confirmed embedded offline Hermes bundle, all four Georgian
  fonts, correct version/bundle ID and no recording/background-audio permission.
- App ID `6822637685`, bundle `dev.geowords.prototype`, Dinein group developer team.
  Internal `Team (Expo)` group and owner access created. Store record temporarily
  named `GeoWords (dca1bf)` because the original name was taken; installed name
  remains `GeoWords`. External testing/public App Store release not submitted.
- EAS production/store profile, remote build numbering, opaque rosette app icon,
  encryption declaration and reusable submission configuration saved. See
  [TESTFLIGHT.md](TESTFLIGHT.md) for dashboard links, evidence and next uploads.
- Signed build includes Claude's current uncommitted UI from the uploaded working
  tree. Those UI files remain intact and outside the release-config commit.

## Latest: 50-level beta content

- Active content revision 2 contains **50 levels**, each with **4–5 crossword
  answers**: 15 levels with four answers and 35 with five. Bonus words are separate.
- 137 distinct target words, 147 reference-checked dictionary entries with source
  revisions and CC BY-SA attribution, ten chapters and grids no larger than 7 × 7.
- Original four puzzles expanded while retaining IDs and old answers. Transactional
  save upgrade preserves coins, completed levels, partial answers, paid hints,
  bonuses, settings and unlocks. No repeat rewards; unknown/corrupt saves retained.
- Recorded recipes reproduce all 50 layouts but always export drafts. Python/TS
  validators and complete engine solve pass; Georgian native editorial review and
  difficulty tuning remain pending. See [BETA_CONTENT.md](BETA_CONTENT.md).
- Claude's UI integration is present in the working tree; it is preserved separately
  from this content/storage work. Its completion-feedback test now solves every
  current target rather than the original two tutorial answers.
- Current automated results: **72 Jest tests / 7 suites**, **49 Pytest tests**;
  strict TS, ESLint, Ruff and Mypy pass. iOS/Android Hermes bundles produced.
  The earlier verification table is historical revision 1 testing.
- iPhone 17 Pro / iOS 26.5 / Expo Go: old four-completion save upgraded from
  revision 1 to 2, preserving **191 coins** and all four completions. The new fifth
  level counted four crossword answers and a separate bonus; completion produced
  **219 coins**, unlocked ka-006, and process restart restored that level/balance.
  Debug evidence: `artifacts/maestro-beta-upgrade-final`. This native beta check used
  tap input; larger five-answer boards were validated/solved in engine tests.
  Initial runs needed a Metro cache refresh and IPv4 localhost binding.
  No new Android-native beta flow was run; the Android export passed.

## Completed

- Expo SDK 57.0.28 / RN 0.86.3 / React 19.2.3 application with strict TypeScript,
  Router, Skia, Gesture Handler, Reanimated/Worklets, Zustand and Expo SQLite.
- Pure immutable engine: Georgian Unicode normalization, multiset letter checking,
  intersecting crosswords, target/bonus/duplicate handling, reveals, hints, coins,
  completion rewards exactly once, sequential level/chapter unlocking and replay.
- Versioned pack schema, structural/semantic validators and bundled content loader.
- Fifty mechanically validated and solvable levels with four or five targets each.
  Assistant reference/layout review, per-entry Wiktionary attribution and CC BY-SA
  license recorded. Native Georgian editorial approval remains pending.
- Unique tile IDs, circular geometry, deterministic shuffle/selection, UI-thread
  path updates, native release/cancel handling and accessible tap input.
- Native input claims drags only when a single touch starts on a letter. Empty
  wheel areas yield to scrolling; external native-scroll relationships prevent
  scrolling from stealing letter traces. Worklets capture plain geometry/shared
  values, not the non-transferable gesture adapter. Tap mode hides the wheel.
- SQLite WAL, exclusive transactions, schema migrations 0 → 1 → 2, validated
  snapshots and revision checks against stale writes. Commands commit before
  publishing success; failed saves preserve prior state and allow later retry.
- Temporary home/chapter/level/game/victory/settings/coin screens, bundled Georgian
  font, original synthesized sounds and optional haptic event adapter.
- Typed Python 3.12+ generator foundation, tested with Python 3.13.15: candidate
  ingestion separate from review, approved-input gate, seeded connected layouts,
  multiset wheels, difficulty scoring, draft JSON export and manual-review reports.
- Architecture, development plan, source requirements baseline, Claude integration
  contract with working TypeScript examples, run/test instructions and native flows.
- npm/uv lockfiles, Jest/RNTL/Pytest, ESLint/Prettier, Ruff/Mypy and CI workflow.

## Historical prototype verification (content revision 1)

| Check                                          | Result                                                                                                                                                                                                                                                         |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run check`                                | Strict types, ESLint, Jest, content solve and Prettier passing                                                                                                                                                                                                 |
| Jest                                           | 52 tests passing in 5 suites                                                                                                                                                                                                                                   |
| Real SQLite tests                              | Disk close/reopen, migration, stale writer, failed transaction rollback, corrupt-save preservation and queued-store restore passing                                                                                                                            |
| Pytest                                         | 46 tests passing, including 25 reproducible generation seeds                                                                                                                                                                                                   |
| Ruff / Mypy                                    | Formatting/lint and strict typing passing                                                                                                                                                                                                                      |
| Cross-language export                          | Seed-42 Python draft parsed by the TypeScript validator; still rejected as playable content                                                                                                                                                                    |
| Expo Doctor                                    | 21/21 checks passing                                                                                                                                                                                                                                           |
| `expo install --check`                         | Compatible package versions, up to date                                                                                                                                                                                                                        |
| Native exports                                 | iOS and Android Hermes bundles produced with local content/font/audio assets                                                                                                                                                                                   |
| Lockfile check                                 | `npm ci --dry-run --ignore-scripts` succeeded; a fresh full install was not re-run during native testing                                                                                                                                                       |
| iPhone 17 Pro / iOS 26.5 / Expo Go 57.0.9      | Home/game startup, native correct/duplicate/invalid swipes, word reveal, first-level completion/reward/unlock, repeated-letter answers, bonus reward, paid hint, process termination/reopen, chapter unlock and all four levels through final victory verified |
| Pixel 10 Pro Android emulator / Expo Go 57.0.9 | Home/game startup, correct and duplicate swipes, word reveal, completion/reward/unlock, process termination/reopen and final gesture activation verified                                                                                                       |

On iOS, the restart flow restored level ka-002 with **113 coins, one solved word,
one bonus and the revealed hint cell**. Completing its repeated-letter answer then
produced **138 coins** and unlocked ka-003. Android restored ka-002 with **125 coins**
after the first level's completion. Android Expo Go restores the active route
rather than necessarily returning to Home; the test checks saved gameplay directly.
The full iOS pack flow ended with **191 coins** after four completions, two bonuses
and one paid hint; final victory correctly omitted a next-level action.
Native debug reports/screenshots are preserved under ignored `artifacts/maestro-*`.

## Decisions and resolved integration issues

- Repository was empty; no existing user code or Claude visual files were overwritten.
- `GEOWORDS_PRODUCT_AND_ENGINEERING_SPEC.md` was not supplied or found. The user's
  pasted brief is preserved as `docs/REQUEST_BRIEF.md` and used as the baseline.
- Verified stable Expo dependencies using official docs, registry and the SDK map.
  Broad npm peer ranges introduced duplicate React; workspace overrides now pin
  React/React DOM to 19.2.3, and the renderer/testing-library versions match it.
- Native testing identified a worklet capture error and scroll/input competition.
  Both were corrected and verified; only low-frequency preview/haptic events and
  release submission reach JS. No touch movement writes to Zustand or SQLite.
- Empty-space touch activation and compact tap controls were added during native
  verification. The final adapter uses explicit worklet markers and release sampling.
- Prototype vocabulary is **reference-checked, not native-speaker editorial approval**.
  Generation always exports drafts and never promotes content automatically.
- Initial coins/rewards/hint costs live in `DEFAULT_ECONOMY` (100 / 25 / 3 / 15 / 40).
- No backend, account, payment, advertising or analytics integrations were added.

## Remaining / limitations

- Reconcile the missing full product spec and decide final branding.
- Claude visual integration is mostly complete in the working tree; finish native
  presentation QA using `INTEGRATION_CONTRACT.md`.
- Native-speaker editorial review and content licensing review before a larger release.
- Physical iOS/Android devices, measured 60 FPS/frame timing, haptic behavior,
  audio quality and accessibility audits have not been signed off.
- Store-signed iOS build and internal TestFlight distribution are verified.
  Physical-device install, airplane-mode cold startup and the full device matrix
  remain unverified. Android standalone signing and public App Store distribution
  remain pending. The iOS IPA embeds the game bundle and font/audio assets.
- Native save error/disk-full injection was tested with real SQLite/store tests,
  not by exhausting simulator storage. SQLite DB migrations and content revision
  1 → 2 upgrade are implemented. Future content upgrades require explicit support.
- GitHub Actions is configured but not executed remotely; no GitHub repository,
  push or PR was requested or created.
- Known transitive npm advisories remain (five underlying advisory families;
  counts include dependent packages). Non-breaking audit fixes did not resolve
  them. Forced recommendations would break Expo compatibility. See `DEPENDENCIES.md`
  and recheck supported patches before release. No zero-advisory claim is made.

## Claude handoff

Start with `docs/INTEGRATION_CONTRACT.md`. Own visual components, theme, typography
and presentation animations; preserve the Codex-owned gesture/state/storage APIs.
Use `GameplayView`, queued store callbacks and committed event batches. No internal
engine knowledge is needed. Work may proceed without waiting for a backend or final
art direction. Run the documented checks and native flow sequence after integration.
