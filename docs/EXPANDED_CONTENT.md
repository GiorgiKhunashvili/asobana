# Expanded campaign — revision 4

Historical reference: the active campaign is now [revision 5](DISCOVERY_CONTENT.md).

The 50-level campaign now has five levels per topic, broader vocabulary and a
gentle-to-harder sequence within each topic. A new topic starts with an introductory
board; difficulty is deliberately not monotonic across chapter boundaries.
Topic headings and the eight-tile/seven-by-seven grid limits are unchanged.

## Measured changes from revision 3

| Measure                                                   | Revision 3 | Revision 4 |
| --------------------------------------------------------- | ---------: | ---------: |
| Reference dictionary entries                              |        147 |        320 |
| Distinct crossword answers in the campaign                |         78 |        142 |
| Total crossword answer slots                              |        158 |        170 |
| Repeated target occurrences beyond their first appearance |         80 |         28 |
| Shared targets between consecutive levels                 |         39 |          1 |
| Three-answer boards                                       |         44 |         35 |
| Four-answer boards                                        |          4 |         10 |
| Five-answer boards                                        |          2 |          5 |

Repeat occurrences fell by 65% while the number of answer slots grew. Vocabulary
was expanded in every topic, and every topic actually uses at least four newly
introduced words. Additional verified words remain available for future layouts.

| Topic          | Previous pool | Expanded pool | Distinct targets | Difficulty scores, in order |
| -------------- | ------------: | ------------: | ---------------: | --------------------------- |
| Weather        |             7 |            19 |               14 | 48, 61, 65, 70, 74          |
| Animals        |            12 |            36 |               17 | 43, 50, 58, 65, 76          |
| Family         |             5 |            14 |               12 | 49, 59, 62, 69, 77          |
| Body           |            14 |            37 |               16 | 46, 50, 58, 68, 76          |
| Plants         |            11 |            34 |               16 | 41, 49, 58, 71, 86          |
| Landscape      |            10 |            26 |               15 | 46, 55, 60, 68, 77          |
| Food and drink |             8 |            29 |               15 | 53, 54, 60, 67, 75          |
| Home and yard  |            10 |            32 |               14 | 47, 50, 63, 69, 75          |
| Numbers        |             5 |            19 |               15 | 41, 51, 57, 69, 80          |
| Music          |             5 |            25 |               11 | 51, 62, 65, 67, 68          |

## Content and pacing rules

`content/levels/themed.v4.recipes.json` contains the curated topic pools,
familiarity estimates and selected answer sets/seeds. Both Python authoring and
the mobile catalog enforce these rules:

- Each topic has five levels, opening with three answers and no advanced-rated word.
- Scores strictly increase within a topic, by at most 15 points per level.
- Target count never decreases within a topic. Each topic finishes with four or
  five answers.
- A target appears at most twice in a topic; adjacent boards share at most one
  target. The bundled campaign has only one such shared target overall.
- Bonus words fit the topic, appear as a bonus only once, and cannot reveal any
  current/future target or repeat a target from the immediately preceding level.
  The two remaining bonuses recall earlier words with a gap.

The difficulty score combines tile count, target count, longest-word length,
total letters beyond two per answer, and familiarity estimates:

`min(100, 4 × tiles + 3 × targets + 2 × longest + Σ(length − 2) + 5 × Σ(familiarity − 1))`

Familiarity ranges from 1 (familiar) to 3 (advanced). These are assistant estimates,
not native-speaker judgments or measured word frequencies. Scores are a transparent
authoring heuristic, not a tested prediction of solve time. Native Georgian review
and playtesting should refine them. The ordering changes the actual puzzles;
scores are recomputed from their contents rather than assigned by level number.

## Reference and layout review

`content/dictionaries/expanded-ka.json` contains the 173 new words plus all
unchanged historical entries. Source Georgian definitions and topic senses were
checked individually against Wiktionary revisions on 2026-10-14. Exact revision
URLs, short glosses and CC BY-SA 4.0 attribution are recorded per entry. Missing
entries were omitted; no inferred spellings or unsupported definitions were added.
See [vocabulary provenance](../content/dictionaries/README.md).

All 50 text grid layouts, target lists and the two bonuses were inspected before
promotion. Status remains `prototype-reference-checked`; no native-speaker
editorial approval is claimed. The rebuild tool always exports `generated-draft`
and never overwrites the playable pack or grants approval.

```sh
puzzle-generator/.venv/bin/python scripts/rebuild-themed-content.py
npm run check
puzzle-generator/.venv/bin/pytest puzzle-generator
puzzle-generator/.venv/bin/ruff check puzzle-generator scripts/rebuild-themed-content.py
puzzle-generator/.venv/bin/ruff format --check puzzle-generator scripts/rebuild-themed-content.py
puzzle-generator/.venv/bin/mypy puzzle-generator/src
```

Draft output is `artifacts/themed-draft.v4.json`. Reproduction tests compare all
content to the bundled pack while retaining draft status. Regression tests also
measure vocabulary coverage, repeated targets, adjacent overlap, gradual ordering,
bonus spoilers, and attribution. Historical packs stay immutable.

## Existing saves

Revisions 1, 2 and 3 migrate directly to revision 4 using their exact historical
catalogs. All sequential level IDs remain stable; chapter boundaries now fall
every five levels. Completed levels, earned coins, settings and current level
are retained. Partial answers and paid hints transfer using the
[existing credit rules](THEMED_CONTENT.md#existing-saves). Newly completed partial
boards receive their first completion reward once, in the migration transaction.
Historical hint counts can exceed the size of a replacement board.

Tests cover every old partial board, all completed campaigns, revision 3 upgrades,
idempotent reopening, stale writers and failed-write rollback. Native device
playtesting and native Georgian editorial review remain outstanding.

## Verification on 2026-10-14

- `npm run check`: strict types, lint, 92 Jest tests, all 50 campaign solves and formatting passed.
- Python: 56 tests, Ruff lint/format checks and strict Mypy passed.
- iOS and Android Hermes exports succeeded with revision 4 bundled.
- No native device or simulator run was performed for this revision.
