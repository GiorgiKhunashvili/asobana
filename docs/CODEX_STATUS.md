# Codex status

Updated: 2026-10-14 (Asia/Tbilisi). **Milestone A prototype implemented.**
Core gameplay and save/resume are verified in automated tests and native emulator
flows. This is not a production-store release or a hardware performance sign-off.

## Completed

- Expo SDK 57.0.28 / RN 0.86.3 / React 19.2.3 application with strict TypeScript,
  Router, Skia, Gesture Handler, Reanimated/Worklets, Zustand and Expo SQLite.
- Pure immutable engine: Georgian Unicode normalization, multiset letter checking,
  intersecting crosswords, target/bonus/duplicate handling, reveals, hints, coins,
  completion rewards exactly once, sequential level/chapter unlocking and replay.
- Versioned pack schema, structural/semantic validators and bundled content loader.
- Four manually authored, mechanically validated and solvable levels using ten
  individually reference-checked Georgian words. Per-entry Wiktionary attribution
  and CC BY-SA license recorded. No fake words or unreviewed generated levels bundled.
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

## Verification actually performed

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
- Claude should implement final theme/screens/visual animations using
  `INTEGRATION_CONTRACT.md`; current views are temporary functional presentation.
- Native-speaker editorial review and content licensing review before a larger release.
- Physical iOS/Android devices, measured 60 FPS/frame timing, haptic behavior,
  audio quality and accessibility audits have not been signed off.
- Standalone signed release builds, airplane-mode cold startup without Expo Go,
  app-store distribution and full device matrix remain unverified. No runtime game
  logic or bundled content requires internet; Expo Go still requires its dev server.
- Native save error/disk-full injection was tested with real SQLite/store tests,
  not by exhausting simulator storage. SQLite DB migrations are implemented;
  changed content revisions are intentionally rejected until an explicit save
  migration is added. No released older content exists yet.
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
