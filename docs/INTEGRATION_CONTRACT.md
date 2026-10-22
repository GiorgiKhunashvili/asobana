# Asobana engine ↔ presentation contract v1

This is the handoff to Claude Code. Public contracts live in
`mobile/src/models/types.ts`, `mobile/src/engine/index.ts`,
`mobile/src/state/createGameStore.ts`, `mobile/src/components/useLetterWheel.ts`
and `mobile/src/navigation/routes.ts`. These source types are authoritative.
Claude's components (`docs/UI_DESIGN_SYSTEM.md`) build on these contracts.

## Revision 13 journey content handoff

The catalog has 240 levels in 48 stops. Exact chapter IDs, Georgian titles and
ordering live in [`content/journey-v13.json`](../content/journey-v13.json); use
that table for maps, artwork and chapter navigation. Five levels belong to each
stop. Country/map presentation remains Claude's responsibility. Words stay
Georgian throughout the journey; a destination does not constrain board vocabulary.
Existing painting/caption registries still use the ten historical IDs and need
Claude's new-stop integration; the content change does not supply 48 paintings.

Level IDs `ka-001` through `ka-050` retain their ordinal positions; new levels run
through `ka-240`. Continuing words retain IDs on the same board. Saves from
revisions 1–12 retain completion, partial solved credits, coins, paid hints,
settings and lifetime bonus rewards. Obsolete board bonus spellings are retired
without subtracting already-earned rewards. A completed revision-12 campaign
unlocks `ka-051` after migration.

For revision 12, ordinal chapter groups map as follows:

| Old chapter ID | New stop     | Levels |
| -------------- | ------------ | ------ |
| weather        | tbilisi      | 1–5    |
| animals        | mtskheta     | 6–10   |
| family         | ananuri      | 11–15  |
| body           | kazbegi      | 16–20  |
| plants         | tusheti      | 21–25  |
| landscape      | sighnaghi    | 26–30  |
| food           | david-gareja | 31–35  |
| home           | uplistsikhe  | 36–40  |
| numbers        | borjomi      | 41–45  |
| music          | vardzia      | 46–50  |

This is progress mapping by level position. Previously earned destination art
keeps its original identity through optional durable
`GameState.legacyPostcardChapterIds`. `selectPostcards` returns the 48 current
cards (`legacy: false`), followed by earned historical cards (`legacy: true`).
Legacy cards are already collected, never `next`, and use their original art IDs.
Their `number` is their historical number, not a journey position. Use `chapterId`
as the stable key and `legacy` when separating the collections. Do not relabel an
old Kazbegi painting as Tbilisi simply because level progress maps to stop 1.

Required spellings and accepted variants have a global minimum gap of 75 levels;
bonuses do not affect this gap. The runtime still recognizes all eligible formable
bonuses, with the existing meter and reward behavior. The new standard-Georgian
policy removes reviewed nonstandard substitutions and `რული` from current play.

## Ownership and imports

Claude owns theme, typography, visual components/screens, appearance and visual
animations. Codex owns model/schema changes, rules, input recognition, persistence,
state adapter, route validation and platform integrations. Do not mutate engine
state or edit content to suit visual layouts. Propose contract extensions when needed.
No theme files existed at initialization; no final design system has been created.

## Content structures

```ts
import type { Level, LetterTile } from '../models/types';

const tiles: readonly LetterTile[] = [
  { id: 'tile-1', letter: 'მ' },
  { id: 'tile-2', letter: 'ზ' },
  { id: 'tile-3', letter: 'ე' },
];
const example: Level = {
  schemaVersion: 1,
  id: 'example-001',
  chapterId: 'beginning',
  title: 'მზე',
  tiles,
  grid: { rows: 2, columns: 3 },
  words: [
    {
      id: 'word-1',
      answer: 'მზე',
      acceptedAnswers: ['მზე'],
      row: 0,
      column: 0,
      direction: 'across',
    },
    {
      id: 'word-2',
      answer: 'მე',
      acceptedAnswers: ['მე'],
      row: 0,
      column: 0,
      direction: 'down',
    },
  ],
  bonusWords: [],
  difficulty: { tier: 'easy', score: 10 },
  hints: { allowCell: true, allowWord: true },
  reviewStatus: 'prototype-reference-checked',
};
```

IDs are stable lowercase ASCII identifiers. Coordinates are zero-based. Dimensions
are 1–20; wheels have 2–8 tiles. Every tile has a unique ID, even repeated letters.
Words use NFC lowercase modern Georgian, 2–16 code points. v1 accepted answers
contain exactly the grid spelling; Unicode casing is normalized before comparison.
Bonus words are an explicit verified list, not every possible permutation.

`LevelPack` has `schemaVersion: 1`, `id`, integer `revision`, ordered `chapters`
(`id`, `title`) and ordered `levels`. Order determines linear progression across
chapters. `parsePack(unknown, vocabulary)` validates everything and rejects draft
levels. The JSON schema is in `content/schemas/level-pack.v1.schema.json`; runtime
validators additionally enforce multisets, connected intersections and no unlisted
crossword runs. Content revision changes require a save migration, never an
implicit reset. Generated drafts do not carry editorial approval.

## Pure engine APIs

```ts
import { initialState, transition, selectGameplay } from '../engine';
import { catalog } from '../content/catalog';

const initial = initialState(catalog);
const result = transition(
  initial,
  {
    type: 'submit',
    levelId: 'ka-001',
    tileIds: ['tile-1', 'tile-2', 'tile-3'],
  },
  catalog,
);
const view = selectGameplay(result.state, catalog);
// result.state is a new immutable snapshot; initial was not changed.
// result.events describe committed-effect candidates. Save before displaying success.
```

`transition(state, command, catalog, economy?)` returns `{ state, events }`.
Commands are:

- `open-level { levelId }`: verifies lock and changes persisted current level.
- `submit { levelId, tileIds }`: rejects unknown/reused tiles, short selections,
  invalid words, duplicates, stale level submissions and completed levels.
- `hint { levelId, kind: 'cell' | 'word' }`: deterministic first hidden cell or
  first unsolved word in content order. Spends only when permitted and affordable.
- `settings { settings: { sound, haptics } }`: persists preferences.

Rejected actions preserve the state reference. Completion reward is paid once.
Fully visible crossing words are completed automatically. Cell hints remain saved;
solved words reveal their full cells. Bonuses earn a configurable reward once per
level before completion. The last level's next ID is `null`.
`DEFAULT_ECONOMY` is 200 initial coins, 20 completion reward, 3 bonus reward,
20 cell hint and 50 word hint. Product changes belong in the economy configuration,
never in a component. The store currently uses the default configuration.

The owner approved these prices on 2026-10-19. Every ten bonus words still earns
one free letter hint. The 200-coin starting balance applies only to a new game or
an explicit reset: existing saves retain their exact balance and all progress,
paid hints, bonus credits and postcards. No economy migration or content revision
is needed; future rewards and purchases use the current prices without repricing
past actions. Optional rewarded ads award 50 coins (75 before 2026-10-22) through
a separate, persisted claim; gameplay commands cannot directly grant ad coins. The
level-complete screen's optional ad pays `LEVEL_DOUBLE_COINS` (the completion
reward, 20) once per finished level through the same kind of claim.

`mobile/tests/economy.test.ts` covers new-game/reset balances, exact affordability
boundaries, unchanged existing balances (including zero), and old-price saves
from revisions 25 and 26 through real SQLite close/reopen. It checks retained
paid hints, free bonus hints, completed stops, partial progress and postcards,
then verifies that future purchases use the new prices and survive another restart.

### Rewarded ads

`src/ads/rewardedAds.ts` owns one controller shared across screen mounts. The coins
screen loads an ad and requires an explicit watch press. An unaffordable hint
keeps its letter/word icon while its price pill turns gold and reads `▶ +50` with
a coin (`↻ +50` for a save-only retry); the spoken label names the ad, the reward
and the hint price. It bounces once on becoming unaffordable (respecting reduced
motion). That press
calls `watch(signal)` directly from gameplay: a ready ad presents immediately;
otherwise it waits for loading without requiring another press or navigation.
`useHintRewardedAd` preloads when coins are low and cancels a pending watch on
navigation, a level change, backgrounding or explicit cancellation. A timeout or
error never schedules a later surprise ad. Failed earned saves offer save-only
retry. A free bonus hint still works directly, and the reward never auto-buys a
hint. Content-disabled hints and completed levels remain unavailable.

Only `EARNED_REWARD` calls `gameStore.claimAdReward(claimId)`. One UUID belongs to
one presentation; retries reuse that UUID, while another ad receives a new UUID.
The fixed reward is `REWARDED_AD_COINS = 50`, independent of the ad unit's reward
payload (set to 1 in AdMob). Closing early, loading, showing or a timeout alone grants nothing.

Database version 3 adds `rewarded_ad_claims` without changing existing snapshots.
`GameRepository.claimAdReward` reads the latest saved game and inserts the unique
receipt plus the updated coin balance in one exclusive SQLite transaction. A
duplicate returns the current saved state without another credit or revision
bump. A failed write rolls back both changes. The store serializes claims with
game commands and publishes balances only after commit. Receipts are retained
through content upgrades and explicit game resets.

The shared controller survives navigation away and offers a save-only retry after
a storage failure. This is client-side deduplication, not server-side fraud
verification. A reward not committed before process termination cannot be
recovered from AdMob by this client alone; pending failed claims are in memory.
Production reward recovery/verification requires a separately designed server
flow. `src/ads/adUnits.ts` picks the units: the owner's live iOS and Android
banner and rewarded units only in release builds with `ASOBANA_LIVE_ADS=1` (the
EAS `production` profile), and Google's `TestIds` everywhere else, including the
`beta` profile used for TestFlight and Play testing. `loadNativeAdsSdk` runs Google's UMP consent flow
(`src/ads/consent.ts`) before initializing the SDK and requests no ads until
`canRequestAds`; the root layout starts it once the first screen appears, and
Settings reopens the consent form where the law requires it. Ads stay
non-personalized with no App Tracking Transparency prompt. Store privacy
disclosures remain to be filled in. See the native checklist for verification.

### Gameplay test banner

`GameBannerAd` is the gameplay `Screen`'s footer: a 76-point slot outside the
scroll view and letter-wheel gesture area, with a divider, 17 points above the
creative and 8 below. Gameplay subtracts that space from the board budget without
reducing the wheel or hint touch targets. The footer stays inside the bottom safe
area. Loading, failures and offline/unsupported builds keep the same space so
controls do not jump.

The 320×50 banner itself is `SharedGameBanner`, rendered once in the root layout
over that slot. A footer asks for it while its route is focused and neither the
tutorial nor a hint rewarded ad is showing; without a request it is hidden
(transparent, no touches). It is first mounted 0.8 s after the first request, once
the screen's transition has finished, and then reused across level changes and the
victory screen; it unmounts after 30 s without a request and while the app is
inactive. On a Samsung Galaxy A07 a new banner per level cost a ~134 ms web-view
first draw in the transition and ad-SDK lock waits of up to 117 ms on taps; the
shared banner removed both from level changes. There is no manual refresh timer.
`nativeAdsSdk` guards Expo Go/web and shares initialization with rewarded ads.
Banners never call reward or save APIs.

### Level-complete "×2" ad

`src/ads/levelRewardAds.ts` owns a second controller from the same
`createRewardedAds`, so the coin and doubling placements never show or retry each
other's rewards. Its target is a level ID, bound when the ad is presented: the
earned claim and any save-only retry pay for that level even if the player has
moved on. The snapshot carries that `target` once an ad has been presented.

The victory screen shows a gold `▶ ×2` pill (`↻ ×2` for a save-only retry) beside
the reward only when it was reached by finishing the level on the board (the
`level-completed` event in the latest batch), the level is completed and not yet
doubled, and ads are available. Reopening a finished level shows no offer.
`useLevelRewardAd` preloads while the offer is visible; one press calls
`watch(signal, levelId)`. A waiting press shows a cancel control and is cancelled
by leaving the screen or backgrounding. "Next level" stays the primary button.
After the claim commits, the pill becomes a `✓ ×2` tag and the reward reads +40.

Only `EARNED_REWARD` calls `gameStore.claimLevelDouble(levelId, claimId)`.
`GameRepository.claimLevelDouble` shares the receipt transaction above: it pays
`LEVEL_DOUBLE_COINS` and appends the level to `doubledRewardLevelIds` only if the
receipt is new, the level is completed and not already listed. Otherwise it
returns the saved state with `granted: false` and records no receipt. Duplicate
callbacks, a second ad, restarts and reopening never pay a level twice.

## Saved game and progression

`GameState` contains `schemaVersion`, `packId`, `contentRevision`,
`currentLevelId`, `coins`, `settings`, `tutorialSeen` and `progress` keyed by
level ID.
Each `LevelProgress` has `solvedWordIds`, `revealedCellIds`, `bonusWords`,
`hintsUsed` and `completed`. Missing entries mean untouched levels.

Unlocked levels and chapter counts are derived by `selectLevels` and
`selectChapters`; do not keep a second UI progression state. Persisted snapshots
include completion, so replay never earns a second completion reward. Completed
levels remain viewable. Coins are nonnegative integers. `parseSnapshot` validates
restoration against the exact catalog. Bad or newer saves surface a load error and
remain on disk. SQLite schema migrations are separate from content/save migrations.

`tutorialSeen` records that the first-time board tutorial was finished or skipped.
New games start with `false`; the `{ type: 'tutorial', seen }` command sets it
through the normal queued commit, and repeating the same value writes nothing.
Snapshots from before the field get `true` when any level has a solved word, a
bonus word or a completion, otherwise `false`; like missing bonus counters, the
filled-in field is written back once on load. Content migrations carry it across,
and `reset()` returns it to `false` with the rest of `initialState`. The save
schema version stays 1; older builds ignore the field.

Optional `doubledRewardLevelIds` lists completed levels whose reward a watched
ad already doubled. It is absent until the first doubling, so existing snapshots
load unchanged without a write-back or database migration. `parseSnapshot`
rejects duplicates and IDs that are not completed levels. Content migrations
carry it across (level IDs are stable), and `reset()` clears it with the rest of
the game; receipts from before a reset still cannot pay again.

## UI-facing models and callbacks

`selectGameplay` returns `GameplayView`: level/title/grid/tiles/cells, balance,
found/total words, bonus count, hint usage, completion, next ID, hint costs and
`canUseCellHint`/`canUseWordHint`. A `CrosswordCell` has:

```ts
interface CrosswordCell {
  readonly id: string; // "row:column"
  readonly row: number;
  readonly column: number;
  readonly wordIds: readonly string[];
  readonly status: 'locked' | 'revealed';
  readonly letter: string | null; // hidden answer never provided here
}
```

Empty grid locations have no cell entry. Arrange cells using coordinates; never
infer word direction from render order. Disable gameplay inputs while `busy`.
Use `useMemo` for array/object selectors rather than returning a new object directly
from a Zustand selector. Stable primitive and reference selectors prevent update loops.

A working component adapter is in `mobile/src/screens/GameplayScreen.tsx`.
The same connection pattern, using the shipped components with their defaults, is:

```tsx
import { useCallback, useMemo } from 'react';
import { catalog } from '../content/catalog';
import { selectGameplay } from '../engine';
import { gameStore, useGameStore } from '../state/gameStore';
import { CrosswordBoard } from '../components/CrosswordBoard';
import { LetterWheel } from '../components/LetterWheel';

export function ConnectedGame() {
  const game = useGameStore((s) => s.game);
  const busy = useGameStore((s) => s.busy);
  const view = useMemo(
    () => (game ? selectGameplay(game, catalog) : null),
    [game],
  );
  const levelId = view?.levelId;
  const onSubmit = useCallback(
    (tileIds: readonly string[]) => {
      if (!levelId) return;
      void gameStore
        .getState()
        .dispatch({ type: 'submit', levelId, tileIds })
        .catch(() => undefined); // display store.error in your screen
    },
    [levelId],
  );
  if (!view) return null;
  return (
    <>
      <CrosswordBoard cells={view.cells} grid={view.grid} />
      <LetterWheel
        key={view.levelId}
        tiles={view.tiles}
        size={280}
        disabled={busy || view.completed}
        onSubmit={onSubmit}
      />
    </>
  );
}
```

`createGameStore` is dependency-injected for testing. `initialize` loads or creates
one snapshot. `dispatch` queues commands, commits SQLite, then publishes state and
events. A save failure rejects the promise, sets `error` and keeps the last committed
state. A rejection never poisons later commands. Do not swallow errors without
presenting `store.error`; success animations must wait for the published event batch.
`reset()` goes through the same queue: it saves `initialState(pack)` with the player's
current sound/haptics settings, then publishes it with an empty event batch. Settings
offers it behind a confirmation; it is never triggered automatically.

## Letter-wheel gestures and visual customization

`useLetterWheel(props)` is the Codex-owned adapter. Mount it with a key equal to the
level ID when levels change. Input props: `tiles`, `size`, `disabled`,
`onSubmit(tileIds)` and optional `onTileEntered(tileId)`.
It returns `layout` (tile ID/letter/x/y/radius), Reanimated `selection` and `pointer`
shared values, low-frequency text `preview`, RNGH `gesture`, `shuffle()` and `cancel()`.

`Screen` (`src/components/Screen.tsx`) wraps its React Native ScrollView in a native gesture and
provides `GestureScrollContext`. The wheel blocks that native gesture during input.
Preserve this relationship (or an equivalent RNGH external-gesture relationship)
when replacing screen containers; a plain competing scroll view can cancel tracing.
The adapter marks every callback explicitly as a worklet. Do not capture the full
adapter object in another worklet: it contains a non-transferable gesture object.
Destructure only shared values and plain tile geometry for Skia/animated callbacks.

Claude can replace `LetterWheel.tsx` and use `GestureDetector` with the returned
`gesture`. Draw the path from shared values with Skia; read selected tile IDs in
animated styles. Do not publish pointer movement to React/Zustand. Only tile-entry
preview/haptic notifications and release submission cross to JS. Never submit by
concatenated characters: pass selected unique tile IDs in order.

The pure rules also export `layoutWheel`, `hitTest`, `advanceSelection`,
`selectionWord` and seeded `shuffleTiles`. `GestureSelectionEvent` is `begin`/`move`
with local `{x,y}`, or `release`/`cancel`. The native adapter manually activates only for a single touch beginning on a tile;
empty-space touches yield to scrolling. Begin must hit a tile; entering a previously
selected tile is ignored; release submits 2+ tiles once; failure/cancellation submits
nothing. No backtracking in v1. Shuffle/cancel clear the active selection. Shuffling
changes positions only; IDs and letters stay paired. Tap mode is an accessible
alternative with explicit Submit/Clear. The release position is sampled too. Stress-test fast swipes on hardware before
performance sign-off.

## Animation and platform event contract

The store publishes `eventBatch: { sequence, events }` after a successful save.
Sequence increases for every processed command, including rejections; batches are
transient and not replayed on app restart. Consume each sequence once with a ref
or a store subscription. Screen entry should establish a baseline sequence to avoid
replaying events from an earlier screen. Events are:

| Event              | Payload                                  | Presentation use                |
| ------------------ | ---------------------------------------- | ------------------------------- |
| `word-found`       | levelId, wordId, word                    | Discovery animation             |
| `word-rejected`    | reason, word                             | Gentle error/duplicate feedback |
| `cells-revealed`   | levelId, cellIds, source (`word`/`hint`) | Reveal sequence                 |
| `bonus-found`      | word, reward                             | Bonus feedback                  |
| `hint-used`        | kind, cost                               | Hint effect and balance update  |
| `level-completed`  | levelId, reward, nextLevelId or null     | Victory effects                 |
| `level-opened`     | levelId                                  | Reset screen transient state    |
| `settings-changed` | no extra fields                          | Preference acknowledgement      |

An action may produce several events: completion can follow cell reveal and word
found. Drive coin text from the committed model, not incremental animation arithmetic.
Animation duration never gates rules or persistence. Cancel screen-local effects on
unmount. Haptics and bundled synthesized sounds are handled in `services/feedback.ts`;
UI animations may subscribe independently. Platform effects failing must not affect
coins/progression. The AdMob SDK supplies optional demo rewarded ads; purchases,
authentication and analytics SDKs are not installed.

## Navigation contracts

| Route                    | Parameters | Guard                                    |
| ------------------------ | ---------- | ---------------------------------------- |
| `/`                      | none       | Initialization complete; the path (tab)  |
| `/album`                 | none       | Initialized game (tab)                   |
| `/settings`              | none       | Initialized game (tab)                   |
| `/postcards/[chapterId]` | chapterId  | Shows the card only once it is collected |
| `/game/[levelId]`        | levelId    | Must exist and be unlocked               |
| `/victory/[levelId]`     | levelId    | Must have saved completion               |
| `/coins`                 | none       | Informational coin screen                |

Use `routes.game(id)`, `routes.postcard(id)`, `routes.victory(id)` and
`toJourney()` from `src/navigation/routes.ts`. `singleParam` rejects array/missing parameters. URLs
contain no answers or state snapshots. Navigation into a level persists an
`open-level` command before rendering its controls; locked deep links never unlock
content. Next-level navigation follows the engine's next ID.

## Handoff verification

Run `npm run check` and Python checks in the README after changing integrations.
The UI cannot be considered native-verified based on component mocks alone. Preserve
Georgian font coverage, offline assets, safe areas, accessible button roles, readable
errors and minimum 44-point touch targets when changing presentation.

## Revision 14: non-plural campaign and lower repetition

The active catalog imports `discovery.v14.json` and its matching recipes. All
240 ordinal level IDs, the pack ID, 48 stop definitions and save identifiers remain
stable. Revision 13 is appended to `previousCatalogs` using its exact revision-13
vocabulary; it is not revalidated under the new plural policy. Direct upgrades
from revisions 1–13 preserve completed levels, partial solved credits, coins,
paid hints, bonus rewards, settings, and original/journey postcards. Revision-13
journey chapter IDs are checked against the same positions during migration.

A plural formerly required on a partially solved board retains a solved-word
credit after replacement. Valid plurals remain bonuses; a bonus cannot solve a
target or pay twice on one board. Continuing answers keep their revision-13 word
IDs at the same level. Paid-hint compatibility is 1,292 (1,250 plus 42).

Plural decisions are explicit and revision-scoped in `word-policy.json`; both
Python and TypeScript reject them in required answers and variants. The reference
dictionary and journey definitions keep their v13 filenames because they are
unchanged. See the [campaign review](VOCABULARY_REVIEW_V14.md) for measured coverage,
validation and limitations, and [the full owner list](VOCABULARY_OWNER_REVIEW_V14.md)
for pending vocabulary review. No native-device test or upload is implied.

## Revision 15: owner vocabulary review

The active catalog imports `discovery.v15.json` with matching recipes. The exact
revision-14 pack is appended to `previousCatalogs`, validated against revision-14
vocabulary. Revisions 1–14 migrate directly to revision 15 while preserving
completion, solved credits, paid hints, coins, settings, postcards and lifetime
bonus rewards, including after SQLite restart. Continuing words keep IDs on the
same level. The hint compatibility bound is 1,334 (1,292 plus 42).

The twelve explicit owner exclusions start at revision 15 and apply to every
gameplay role. None appeared as required answers or bonuses in the revision-14
campaign, but future generation and runtime validation must still reject them.
The other 140 words from the unused list remain owner-approved for required use;
all inherited rules, including plural bonus-only treatment and the 75-level gap,
remain enforced. See [the current review](VOCABULARY_REVIEW_V15.md) for exact
coverage results and [the owner list](VOCABULARY_OWNER_REVIEW_V15.md) for review
status. Historical revision-14 files are unchanged.

## Revision 16: owner-reviewed bonus promotions

The active catalog imports `discovery.v16.json` and matching recipes. Exactly 325
of the owner-reviewed 372 bonus spellings become required-eligible; the other 47
remain bonus-only, including accepted variants. The 53 full-pool removals are
excluded from all roles. The allowlist has 1,091 words and the playable vocabulary
has 1,209, with 118 bonus-only spellings. The 240 boards use 865 distinct answers;
335 of 1,200 answer slots are repeats, always at least 75 levels apart.

Revisions 1–15 migrate directly to revision 16 with historical packs intact.
Completion, partial solved credits, coins, paid hints, postcards and lifetime bonus
rewards survive restart. Revision 16 accepts up to 1,376 historical hint credits,
including revision 15’s 1,334 plus one replacement board. The first five-letter
answer remains at level 3, the first six-letter answer at level 18. Existing
journey IDs, rendering dimensions, wheel sizes and progression rules are unchanged.

## Revision 17 expansion compatibility

The active catalog and recipes use revision 17, with `discovery-v17-ka.json` for
its vocabulary. Revisions 13–16 continue using their exact revision-13 reference
dictionary; older revisions retain their previous source. The new reference adds
exactly 130 owner-approved noun/adjective senses, giving 1,339 playable words and
a required allowlist of 1,221. Every previous exclusion and bonus-only reservation
remains enforced. Historical revision 16 is included in `previousCatalogs`.

Migration from revisions 1–16 preserves completed levels, partial solved credits,
coins, paid hints, settings, postcards and lifetime bonus rewards through SQLite
restart. The revision-17 hint ceiling is 1,418, retaining revision 16's 1,376 plus
a full replacement board. The campaign still has 240 levels in 48 stops; the
1,500-word goal does not authorize a level-count change. Exact coverage, audit
and validation results are recorded in `VOCABULARY_REVIEW_V17.md`.

## Revision 18 expansion compatibility

The active catalog and recipes use revision 18 and `discovery-v18-ka.json`.
Revision 17 retains its revision-17 reference, revisions 13–16 retain revision 13,
and earlier catalogs keep their historical vocabulary. Batch 03 adds exactly
131 approved spellings; nine rejected spellings are excluded from all roles.
The active required allowlist contains 1,352 words and the playable pool 1,470.
All earlier exclusions and bonus-only restrictions remain enforced.

Revision 17 joins `previousCatalogs`; migration supports revisions 1–17 while
retaining completion, partial solved credits, coins, paid hints, postcards and
lifetime bonus rewards across SQLite restart. The hint compatibility bound is
1,460 (the prior 1,418 plus a replacement board). The campaign remains at 240
levels and 48 stops. See `VOCABULARY_REVIEW_V18.md` for exact results and checks.

## Revision 19 expansion compatibility

The active catalog uses `discovery.v19.json`, its matching recipes and
`discovery-v19-ka.json`. Revision 18 is retained in `previousCatalogs` with its
original vocabulary. Python and TypeScript select the revision-19 allowlist and
enforce all 19 new owner exclusions for targets, variants and bonuses.

Exactly 129 new approved senses bring the main pool to 1,481. Campaign coverage
is 1036 distinct words across 1,200 answer slots; repeated slots total 164.
All 240 levels and 48 stops, policy checks, progression and pacing gates remain.
Migration accepts revisions 1–18 and preserves completed and partial progress,
coins, paid hints, postcards and lifetime bonus rewards, including restart.
Revision 19 permits up to 1,502 historical hint credits per level (revision 18's
1,460 plus one replacement board); historical bounds are unchanged. See
`VOCABULARY_REVIEW_V19.md` for measured results, verification and limitations.

## Revision 20 expansion compatibility

The active catalog uses `discovery.v20.json`, its matching recipes and
`discovery-v20-ka.json`. Revision 19 is retained in `previousCatalogs` with its
original vocabulary. Python and TypeScript select the revision-20 allowlist and
enforce all 12 new owner exclusions for targets, variants and bonuses.

Exactly 88 new approved senses bring the main pool to 1,569. Campaign coverage
is 1069 distinct words across 1,200 answer slots; repeated slots total 131.
All 240 levels and 48 stops, policy checks, progression and pacing gates remain.
Migration accepts revisions 1–19 and preserves completed and partial progress,
coins, paid hints, postcards and lifetime bonus rewards, including restart.
Revision 20 permits up to 1,544 historical hint credits per level (revision 19's
1,502 plus one replacement board); historical bounds are unchanged. See
`VOCABULARY_REVIEW_V20.md` for measured results, verification and limitations.

## Revision 21: append Malta

The active catalog is `discovery.v21.json` with matching recipes and review digest.
It reuses the revision-20 vocabulary and allowlist and adds `journey-v21.json`:
Valletta 241–245 and Mdina 246–250 after Taormina. All original 240 levels, word IDs,
bonus words, chapter IDs and layouts remain unchanged. Historical validation uses
`journey-v13.json` for revisions 13–20; revision 21 requires exactly 250 levels and
50 stops. Shared grammar, gap, progression, pacing and screen-fit gates are unchanged.

Migration accepts revisions 1–20 and preserves completed and partial progress,
coins, hints, bonus counters, settings and postcards through restart. The hint
bound remains 1,544. Completing level 240 unlocks level 241, and the two new
postcards are earned after levels 245 and 250. Malta is registered in `COUNTRIES`;
Valletta and Mdina each have a bundled portrait, card strip, caption and an
owner-approved fact. See `MALTA_ARTWORK.md` for assets and generation prompts and
`VOCABULARY_REVIEW_V21.md` for measured vocabulary use and validation.

## Revision 22: append Tunisia

The active catalog is `discovery.v22.json` with matching recipes and reviewed digest.
It reuses the revision-20 vocabulary and allowlist. `journey-v22.json` adds Carthage
251–255, Sidi Bou Said 256–260 and El Jem 261–265 after Malta, for 265 boards and
53 stops. All first 250 boards, word IDs, bonuses, chapter IDs and layouts remain
unchanged. Historical validation uses the 240-level route for revisions 13–20
and `journey-v21.json` for revision 21. Shared policy and release gates are unchanged.

Migration accepts revisions 1–21 and retains completed and partial progress,
coins, paid hints, bonus counters, settings and postcards through SQLite restart.
The hint ceiling remains 1,544. Completing level 250 unlocks 251; the new postcards
are earned after levels 255, 260 and 265. Tunisia is registered in `COUNTRIES`;
each of its three stops has a bundled portrait, card strip, caption and approved
fact. See `TUNISIA_ARTWORK.md` and `VOCABULARY_REVIEW_V22.md` for assets, prompts,
vocabulary usage and validation results.

## Revision 23: append Spain

The active catalog is `discovery.v23.json`, with matching deterministic recipes and
reviewed digest. It reuses revision-20 vocabulary. `journey-v23.json` appends six stops:
Barcelona 266–270, Valencia 271–275, Madrid 276–280, Granada 281–285, Córdoba 286–290
and Seville 291–295. All first 265 boards and 53 chapters match revision 22 exactly.
Runtime and generator select the appropriate historical route by revision.

Migration accepts revisions 1–22 and preserves completed and partial solved credits,
coins, paid hints, bonus rewards, settings and postcards across restart. The hint
compatibility ceiling remains 1,544. Completing 265 unlocks 266; the new levels
unlock sequentially and award postcards at 270, 275, 280, 285, 290 and 295.
Spain is registered in `COUNTRIES`; all six stops have a portrait, card crop, caption
and owner-approved fact. Tests cover partial and complete v22 upgrades, restart,
all new levels, asset loading, vocabulary rules and the global 75-level repeat gap.
See `VOCABULARY_REVIEW_V23.md` and `SPAIN_ARTWORK.md` for measured results and assets.

## Revision 24: replace owner-rejected vocabulary

The active catalog, recipes and reviewed digest are `discovery.v24.*`; vocabulary
uses `discovery-v24-ka.json` and `everyday-targets-v24.json`. The route, 295 levels,
59 chapter identities, artwork and approved facts remain unchanged. Rebuilding
may change existing boards; historical packs through v23 remain immutable.
The main pool stays at 1,569 after 29 removals and 29 approved additions.

Migrate saves from revisions 1–23 with completed levels, partial solved credits,
paid hints, coins, settings, postcards and lifetime bonus rewards preserved.
The snapshot hint-credit ceiling is 1,586 (previous 1,544 plus a replacement
board's cell capacity). The v23 partial/complete migration regression includes
removed answers, the historical ceiling, a subsequent paid hint and SQLite reload.
See `VOCABULARY_REVIEW_V24.md` for measured results and validation.

## Revision 25: approved batch-six expansion

The active pack, recipes and reviewed digest are `discovery.v25.*`; vocabulary
uses `discovery-v25-ka.json` and `everyday-targets-v25.json`. Exactly 76 approved
senses expand the main pool to 1,645; all 24 rejected proposals are excluded from
required answers, variants and bonuses. The 295 levels, 59 chapter identities,
route `journey-v23.json`, facts and artwork are unchanged; answer sets are rebuilt
to increase distinct coverage. Historical packs through v24 remain immutable.

Migration accepts revisions 1–24 and preserves completed boards, partial solved
credits, paid hints, coins, settings, postcards and lifetime bonus rewards across
restart. The hint-credit ceiling is 1,628 (previous 1,586 plus one board's cell
capacity). The v24 partial/complete SQLite regression covers changed answers,
historical maximum hint credits, a subsequent paid hint and reload. See
`VOCABULARY_REVIEW_V25.md` for actual repetition measurements and validation.

## Revision 26: approved batch-seven expansion

The active pack, recipes and reviewed digest are `discovery.v26.*`; vocabulary
uses `discovery-v26-ka.json` and `everyday-targets-v26.json`. Exactly 75 approved
senses expand the main pool to 1,720; all 25 rejected proposals are excluded from
required answers, variants and bonuses. The 295 levels, 59 chapter identities,
route `journey-v23.json`, facts and artwork remain; answer sets are rebuilt
to increase distinct coverage. Historical packs through v25 remain immutable.

Migration accepts revisions 1–25 and preserves completed boards, partial solved
credits, paid hints, coins, settings, postcards and lifetime bonus rewards across
restart. The hint-credit ceiling is 1,670 (previous 1,628 plus one board's cell
capacity). The v25 partial/complete SQLite regression covers changed answers,
historical maximum hint credits, a subsequent paid hint and reload. See
`VOCABULARY_REVIEW_V26.md` for actual repetition measurements and validation.
