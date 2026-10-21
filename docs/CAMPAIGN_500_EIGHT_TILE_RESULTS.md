# Eight-tile experiment: 500-level comparison

**Lifetime repetition changed from 35.60% to 33.36%: a reduction of 2.24 percentage points.** This is a validated draft only; nothing has been applied.

Both drafts contain 500 boards and 2,500 required answer slots, use only the same 2,195 approvals, and preserve the original 345 required boards. Of the 155 additions, **55 use eight tiles and 100 retain seven tiles**. The first eight-tile board is level 346. Answers remain 3–6 letters; every board still has exactly five answers.

| Measure                                               | Previous seven-tile draft | Eight tiles allowed later |
| ----------------------------------------------------- | ------------------------: | ------------------------: |
| Distinct required words                               |                      1610 |                      1666 |
| Repeated answer occurrences                           |                       890 |                       834 |
| Approved words still unused                           |                       585 |                       529 |
| Maximum appearances of a word                         |                         4 |                         4 |
| Minimum repeat gap                                    |                        75 |                        75 |
| Median repeat gap                                     |                       209 |                       215 |
| Reused answer-pair occurrences in additions           |                         0 |                         0 |
| Added boards reusing a group of three answers         |                         0 |                         0 |
| Unique exact grid patterns                            |                       473 |                       468 |
| Lifetime repetition                                   |                    35.60% |                    33.36% |
| Mean repetition within every rolling 100-level window |                     0.33% |                     0.41% |
| Highest repetition within a rolling 100-level window  |                     2.40% |                     2.40% |
| Repetition inside the last 100 levels                 |                     0.20% |                     0.00% |

## What the percentage measures

The new draft has **2,500 answer occurrences**, including the first appearance of **1666 different words**. The other **834** occurrences are repeats after a word's first required appearance.

**834 ÷ 2,500 × 100 = 33.36%.** Bonus words are excluded. This does not mean that percentage of boards are duplicates: both drafts have unique answer sets and wheels.

The experiment uses **56 more distinct approved words** than the previous draft. It did not lower the percentage by removing answers or shortening the campaign.

## Vocabulary by length

| Length | Previously used distinct words | Now used | Previously unused | Now unused | Previous repeated occurrences | Now repeated |
| -----: | -----------------------------: | -------: | ----------------: | ---------: | ----------------------------: | -----------: |
|      3 |                             62 |       62 |                 0 |          0 |                           115 |          113 |
|      4 |                            500 |      502 |                 4 |          2 |                           505 |          482 |
|      5 |                            699 |      717 |                34 |         16 |                           263 |          234 |
|      6 |                            349 |      385 |               547 |        511 |                             7 |            5 |

## How often individual words appear

| Total appearances | Previous draft: number of words | New draft: number of words |
| ----------------: | ------------------------------: | -------------------------: |
|                 0 |                             585 |                        529 |
|                 1 |                             891 |                        965 |
|                 2 |                             551 |                        574 |
|                 3 |                             165 |                        121 |
|                 4 |                               3 |                          6 |

Appearances include the first use. Four appearances means three repeats after the first.

| Example word | Appearances | Exact level positions | Gaps          |
| ------------ | ----------: | --------------------- | ------------- |
| ავი          |           4 | 13, 135, 255, 467     | 122, 120, 212 |
| ალი          |           4 | 41, 217, 293, 407     | 176, 76, 114  |
| მზა          |           4 | 12, 195, 382, 498     | 183, 187, 116 |
| მთა          |           4 | 5, 147, 252, 373      | 142, 105, 121 |
| სია          |           4 | 18, 105, 216, 293     | 87, 111, 77   |
| ურო          |           4 | 37, 237, 399, 483     | 200, 162, 84  |
| აბი          |           3 | 101, 278, 403         | 177, 125      |
| ადათი        |           3 | 252, 374, 484         | 122, 110      |
| ავზი         |           3 | 7, 228, 433           | 221, 205      |
| აკნე         |           3 | 104, 281, 485         | 177, 204      |

[Full word-frequency ledger](CAMPAIGN_500_EIGHT_TILE_FREQUENCIES.md).

## Phone geometry and difficulty

At the existing minimum wheel diameter of **245 pt**, eight tiles retain **44.1 pt** touch diameters, with **25.1 pt** minimum clearance between touch circles. Center hit tests, bounds and separation pass using the actual unmodified wheel functions. Selected visual halos also remain separated. Checks cover wheel diameters 245, 260, 280 and 300 pt.

Board dimensions, density and the minimum 36 pt projected board-cell size remain unchanged. This is a geometry check, not a native-device or gesture-comfort playtest.

The existing difficulty heuristic averages **69.6 → 73.4** across the 155 additions. Eight tiles contribute eight additional heuristic points for otherwise identical answers; the selected words also affect the score. Stop peaks/recovery and maximum upward jumps still pass. Perceived difficulty needs playtesting.

## Validation and limitations

All 500 boards pass Python and TypeScript campaign checks and solve through the game engine. The only edits to copied validator code permit seven or eight tiles at level 346 onward; the original production source is unchanged. Negative tests reject an eight-tile wheel earlier, a nine-tile wheel later, and a required-answer variant repeated after only 74 levels. A 75-level interval is accepted. All approved-word, exclusion, five-answer, length, pacing, layout and bonus checks remain.

The variety checks still reject repeated answer triples, six-or-more shared wheel tiles within ten levels, repeated grid patterns inside a new five-level stop and identical grid patterns on adjacent stop boundaries. Pair reuse and concentrated individual-word use retain the previous objective weights. A second rebuild reproduces the draft exactly.

All **198 production files** covered by the initial content/source snapshot retain their hashes. The production reviewed-only loader rejects this draft. No new destinations, artwork, production content, save migration, export or TestFlight upload has been applied.

The search is bounded and selection operates five levels at a time. It demonstrates a feasible improvement, not the best mathematically possible result. Seven-tile candidates were retained unchanged; two additional eight-tile searches sampled novelty-rich and compact combinations. Human playtesting remains necessary before choosing this rule for production.

[Exact metrics, source-patch records and draft hash](CAMPAIGN_500_EIGHT_TILE_RESULTS.json) · [All 155 proposed additions](CAMPAIGN_500_EIGHT_TILE_BOARDS.md).
