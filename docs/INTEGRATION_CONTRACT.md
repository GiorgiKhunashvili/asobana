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
`DEFAULT_ECONOMY` is 100 initial coins, 25 completion reward, 3 bonus reward,
15 cell hint and 40 word hint. Product changes belong in the economy configuration,
never in a component. The store currently uses the default configuration.

## Saved game and progression

`GameState` contains `schemaVersion`, `packId`, `contentRevision`,
`currentLevelId`, `coins`, `settings`, and `progress` keyed by level ID.
Each `LevelProgress` has `solvedWordIds`, `revealedCellIds`, `bonusWords`,
`hintsUsed` and `completed`. Missing entries mean untouched levels.

Unlocked levels and chapter counts are derived by `selectLevels` and
`selectChapters`; do not keep a second UI progression state. Persisted snapshots
include completion, so replay never earns a second completion reward. Completed
levels remain viewable. Coins are nonnegative integers. `parseSnapshot` validates
restoration against the exact catalog. Bad or newer saves surface a load error and
remain on disk. SQLite schema migrations are separate from content/save migrations.

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
coins/progression. No ads, purchases, authentication or analytics SDKs are installed.

## Navigation contracts

| Route                   | Parameters | Guard                      |
| ----------------------- | ---------- | -------------------------- |
| `/`                     | none       | Initialization complete    |
| `/chapters`             | none       | Loaded catalog             |
| `/chapters/[chapterId]` | chapterId  | Must exist in catalog      |
| `/game/[levelId]`       | levelId    | Must exist and be unlocked |
| `/victory/[levelId]`    | levelId    | Must have saved completion |
| `/settings`             | none       | Initialized game           |
| `/shop`                 | none       | Informational coin screen  |

Use `routes.game(id)`, `routes.chapter(id)`, `routes.victory(id)` from
`src/navigation/routes.ts`. `singleParam` rejects array/missing parameters. URLs
contain no answers or state snapshots. Navigation into a level persists an
`open-level` command before rendering its controls; locked deep links never unlock
content. Next-level navigation follows the engine's next ID.

## Handoff verification

Run `npm run check` and Python checks in the README after changing integrations.
The UI cannot be considered native-verified based on component mocks alone. Preserve
Georgian font coverage, offline assets, safe areas, accessible button roles, readable
errors and minimum 44-point touch targets when changing presentation.
