# Themed campaign — revision 3

Historical reference: the active campaign is now
[expanded revision 4](EXPANDED_CONTENT.md). This file describes the original
themed pack retained for save migration.

All 50 puzzles now have a semantic topic. Chapters, level titles, and the heading
above the gameplay board use the same Georgian topic name. Targets and bonuses
must belong to the topic's explicit word pool; a shared letter alone is no longer
enough to select an answer. The runtime catalog and the Python authoring pipeline
both reject off-topic entries.

The campaign contains 44 three-answer, four four-answer, and two five-answer
puzzles. The earlier four-to-five minimum produced unrelated filler when combined
with an eight-tile wheel. The themed pack keeps the eight-tile and seven-by-seven
grid limits, with three related answers where a larger coherent set cannot fit.
Every answer set is distinct. The small verified vocabulary still means related
words recur between levels; expanding vocabulary can improve variety later.

| Levels | Topic        | Meaning                |
| ------ | ------------ | ---------------------- |
| 1–5    | ამინდი       | Weather                |
| 6–12   | ცხოველები    | Animals                |
| 13–14  | ოჯახი        | Family                 |
| 15–21  | სხეული       | Body                   |
| 22–28  | მცენარეები   | Plants and their parts |
| 29–33  | ბუნება       | Natural landscape      |
| 34–36  | საკვები      | Food and drink         |
| 37–43  | სახლი და ეზო | Home and yard          |
| 44–47  | რიცხვები     | Numbers                |
| 48–50  | მუსიკა       | Music                  |

## Review and reproduction

`content/levels/themed.v3.recipes.json` stores the curated topic pools and selected
answer sets/seeds. All words reuse the reference-checked entries and source
attribution in `content/dictionaries/beta-ka.json`; no unverified vocabulary was
added. On 2026-10-14 the topic memberships, target/bonus lists and all 50 text
grid layouts were inspected. Review status remains `prototype-reference-checked`,
not native-speaker editorial approval.

```sh
puzzle-generator/.venv/bin/python scripts/rebuild-themed-content.py
npm run check
puzzle-generator/.venv/bin/pytest puzzle-generator
puzzle-generator/.venv/bin/ruff check puzzle-generator scripts/rebuild-themed-content.py
puzzle-generator/.venv/bin/mypy puzzle-generator/src
```

Rebuilding writes `artifacts/themed-draft.v3.json`. It always produces drafts,
never grants approval, and does not replace the bundled reviewed pack. Tests
compare every chapter, title, word, tile, grid, bonus and difficulty to the active
pack while retaining draft status.

## Existing saves

Exact revisions 1 and 2 remain available solely for old-save validation and
migration. Revision 3 retains all 50 sequential level IDs. Completed levels stay
completed and never pay their reward twice. Coins, settings and current level ID
are retained; chapter membership changes to the new topic.

On a partial board, matching solved spellings are retained first. Retired answers
transfer to solved-word credits on the replacement board. Paid cell hints retain
matching letter positions where possible, then transfer to hidden cells in reading
order. Historical hint usage is retained even if the replacement board is smaller.
Earned bonus coins remain; retired bonus spellings leave the found-bonus list.
If transferred progress finishes a shorter board, its first completion reward is
paid once in the same migration transaction. Reopening cannot pay it again.

Corrupt/unknown saves and changes to the sequential level identities fail without
rewriting the save. SQLite migration stays atomic, rejects stale writers and
rolls back on a failed write. The migration tests cover both historical revisions,
every old partial board, completed campaigns, and failed-write retries.

The historical Maestro flows contain old answer sequences. Native device layout
and gesture verification for revision 3 remains separate from component tests
and engine solves.

## Verification on 2026-10-14

- `npm run check`: types, lint, 84 Jest tests, all 50 campaign solves, formatting.
- Python: 52 tests, Ruff checks/formatting and strict Mypy.
- Hermes exports succeeded for both iOS and Android.
- No revision 3 native device or simulator run was performed.
