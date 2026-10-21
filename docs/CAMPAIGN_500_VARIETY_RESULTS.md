# 500-level variety experiment

**Result: a validated 500-level draft, with 155 additions to the existing 345 boards. Nothing has been applied to the game.** Only the 2,195 owner-approved words were eligible; skipped batch 07 was not used.

The new objective favors different word combinations, longer repeat gaps and varied letter wheels and grid patterns. A control draft uses the old objective of maximizing lifetime distinct words on the same candidate pool.

| Measure                                              | Variety draft | Old-objective control |
| ---------------------------------------------------- | ------------: | --------------------: |
| Levels                                               |           500 |                   500 |
| Required answer slots                                |          2500 |                  2500 |
| Distinct words used                                  |          1610 |                  1687 |
| Approved words unused                                |           585 |                   508 |
| Maximum appearances of any word                      |             4 |                     5 |
| Minimum repeat gap                                   |            75 |                    75 |
| Median repeat gap                                    |           209 |                   185 |
| Reused answer-pair occurrences in the 155 additions  |             0 |                    67 |
| New boards reusing an earlier group of three answers |             0 |                     9 |
| Unique exact grid patterns across 500 boards         |           473 |                   466 |
| Lifetime repeated-answer slots                       |        35.60% |                32.52% |
| Repetition inside the final 100 levels               |         0.20% |                 2.40% |

The variety draft uses 77 fewer distinct words than the control, but removes all reused answer pairs from the additions, avoids a few words carrying as much of the reuse, and increases the median repeat gap by 24 levels. These are measurable differences; player-perceived freshness still requires playtesting.

## Word frequency

Appearances include the first use. Four appearances means three repeats after the first.

| Appearances across 500 levels | Number of words |
| ----------------------------: | --------------: |
|       0 (approved but unused) |             585 |
|                             1 |             891 |
|                             2 |             551 |
|                             3 |             165 |
|                             4 |               3 |

**Only three words appear four times. No word appears five times or more.**

| Word | Appearances | Exact levels      | Gaps between appearances |
| ---- | ----------: | ----------------- | ------------------------ |
| ალი  |           4 | 41, 217, 293, 393 | 176, 76, 100             |
| ერი  |           4 | 8, 277, 385, 493  | 269, 108, 108            |
| სია  |           4 | 18, 105, 216, 293 | 87, 111, 77              |
| აბი  |           3 | 101, 278, 386     | 177, 108                 |
| ავზი |           3 | 7, 228, 406       | 221, 178                 |
| ავი  |           3 | 13, 135, 255      | 122, 120                 |
| აკნე |           3 | 104, 281, 427     | 177, 146                 |
| ალფა |           3 | 100, 265, 459     | 165, 194                 |

[Full frequency ledger: all 1,610 used words and their level positions](CAMPAIGN_500_WORD_FREQUENCIES.md).

## What 35.6% means

- 500 levels × 5 required answers = **2,500 answer slots**.
- **1,610** slots are the first appearance of a word.
- The remaining **890** slots are later appearances of those words.
- **890 ÷ 2,500 × 100 = 35.6%** lifetime repetition.

This does not mean 35.6% of boards are duplicates. All 500 answer sets and letter wheels are unique. Bonus words are excluded from this metric.

Within levels 401–500 there are 500 answer slots and 499 distinct words, so only one occurrence repeats a word from within that same window: **1 ÷ 500 = 0.2%**. Words seen before level 401 do not count as repeats for this local calculation. Every consecutive 75-level window contains 375 distinct required words.

## Variety and vocabulary use

- Each added board shares at most **one required answer** with any earlier board, including the original 345 and other additions.
- No added board has a seven-tile wheel sharing six or more tiles with any of the previous ten boards.
- Each added five-level stop has five different exact grid patterns; no adjacent boundary boards have identical patterns.
- There are **473 exact grid patterns across 500 boards**; 144 shapes in the extension were absent from the first 345.
- The extension introduces **196 previously unused words**: 160 from the active unused pool and 36 from the 120 pending approvals. It leaves 585 approvals unused. Eligibility for the trial does not mean every new approval can be used in a board.

## Validation and scope

Both 500-level drafts passed the unchanged copied Python and TypeScript vocabulary, spacing, progression, pacing, layout, density and phone-size gates. All 500 boards in each draft were solved with the game engine. Accepted variants are included in the 75-level gap audit. All 41 recent explicit exclusions are enforced for required words, variants and bonuses.

A second rebuild reproduced the variety draft byte-for-byte. The production reviewed-only loader rejects the drafts. Validator source files match production, and all 116 production content/catalog hashes remain unchanged.

The first 345 required boards, tiles, IDs, layouts and difficulty are preserved. Bonus recognition expands only inside isolated trial copies. The additional 31 stops have placeholder labels, with no destinations or artwork selected. No app export, device playtest, deployment or TestFlight upload was performed.

Selection used a bounded pool of 231,699 candidate boards and optimized one five-level stop at a time. This is a feasible validated result, not a proof of global optimality.

[All 500 boards and answer sets](CAMPAIGN_500_BOARD_REVIEW.md) · [Exact metrics, frequencies and draft hashes](CAMPAIGN_500_VARIETY_RESULTS.json).
