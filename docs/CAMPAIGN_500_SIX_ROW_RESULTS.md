# Six-row experiment: 500-level comparison

> **Draft for an owner decision. It breaks the current iPhone SE rule.** A 6 × 7 board projects to **34.0 pt** cells on iPhone SE, below the production **36 pt** minimum (5 × 7 boards project to 41.6 pt). Nothing has been applied: active revision 28 (345 levels), production gates, dictionaries and content are unchanged.

**With six rows allowed from level 346 and 7 or 8 tiles, lifetime repetition is 22.72%**, against 33.36% for the eight-tile draft and 26.64% for the same bound-aware search limited to five rows (the earlier five-row bound-aware estimate was 30.24%). The sixth row itself is worth **3.92 percentage points** over the five-row control (3.68–4.12 across the sensitivity reruns below). With **7 tiles only**, repetition is **30.08%** against 32.80% for the five-row control (earlier estimate 33.08%), a sixth-row effect of **2.72 points** (2.16–2.72).

The price is board size and difficulty. **128 of the 155 added boards** use six rows in the 7-or-8-tile draft (101 with 7 tiles only). Six-letter answers are now 456 of the 775 added answers (7 or 8 tiles; 290 with 7 tiles), and 175 of them run down. With 7 or 8 allowed, every one of the 155 added boards uses eight tiles in both bound-aware drafts, and the difficulty heuristic averages 85.7 (range 78–92) against 69.6 for levels 296–345.

All drafts keep the first 345 required boards exactly, use only the same 2,195 approvals, and have 500 boards with five 3–6-letter answers each (2,500 required slots).

## Repetition

| Draft (levels 346–500)                          | Board limit | Tiles      | Distinct required words | Repeated occurrences | Unused approvals | Lifetime repetition | Six-row boards |
| ----------------------------------------------- | ----------- | ---------- | ----------------------: | -------------------: | ---------------: | ------------------: | -------------: |
| Seven-tile draft (greedy layouts)               | 5 × 7       | 7          |                    1610 |                  890 |              585 |              35.60% |              0 |
| Eight-tile draft (greedy layouts)               | 5 × 7       | 7 or 8     |                    1666 |                  834 |              529 |              33.36% |              0 |
| Bound-aware control, this run                   | 5 × 7       | 7          |                    1680 |                  820 |              515 |              32.80% |              0 |
| Bound-aware control, this run                   | 5 × 7       | 7 or 8     |                    1834 |                  666 |              361 |              26.64% |              0 |
| **Six rows allowed**                            | **6 × 7**   | **7**      |                    1748 |                  752 |              447 |              30.08% |            101 |
| **Six rows allowed**                            | **6 × 7**   | **7 or 8** |                    1932 |                  568 |              263 |              22.72% |            128 |
| Earlier bound-aware estimate (not rebuilt here) | 5 × 7       | 7          |                       — |                    — |                — |              33.08% |              0 |
| Earlier bound-aware estimate (not rebuilt here) | 5 × 7       | 7 or 8     |                       — |                    — |                — |              30.24% |              0 |

Lifetime repetition = repeated occurrences ÷ 2,500. A repeated occurrence is any required use of a word after its first required appearance. Bonus words are excluded.

The bound-aware five-row control is stronger than the earlier estimate for 7 or 8 tiles because this run searched all qualifying wheels; for 7 tiles only the two agree closely. Compare the six-row result with the control from the same run: that difference isolates the sixth row.

**Sensitivity.** The stop-by-stop selection is a heuristic, so each pool was also rerun on three random 90% subsamples with the same selection:

| Variant                     | Full pool | 90% subsamples         |        Range |
| --------------------------- | --------: | ---------------------- | -----------: |
| 5-row control, 7 tiles      |    32.80% | 32.56%, 32.48%, 32.56% | 32.48–32.80% |
| 6 rows, 7 tiles             |    30.08% | 30.32%, 30.28%, 30.20% | 30.08–30.32% |
| 5-row control, 7 or 8 tiles |    26.64% | 26.76%, 26.52%, 26.72% | 26.52–26.76% |
| 6 rows, 7 or 8 tiles        |    22.72% | 22.64%, 22.84%, 22.72% | 22.64–22.84% |

The ranges do not overlap, so the sixth-row gain is well above the selection noise (about ±0.2 points).

| Additional measure                               | 5-row control, 7 | 6 rows, 7 | 5-row control, 7 or 8 | 6 rows, 7 or 8 |
| ------------------------------------------------ | ---------------: | --------: | --------------------: | -------------: |
| New distinct words introduced in levels 346–500  |              266 |       334 |                   420 |            518 |
| Maximum appearances of one word                  |                4 |         4 |                     4 |              4 |
| Minimum repeat gap (levels)                      |               75 |        75 |                    75 |             75 |
| Median repeat gap (levels)                       |            211.5 |       209 |                   217 |            222 |
| Highest repetition in a rolling 100-level window |            2.40% |     2.40% |                 2.40% |          2.40% |
| Added boards reusing an answer pair              |                0 |         0 |                     0 |              0 |
| Added boards reusing an answer triple            |                0 |         0 |                     0 |              0 |
| Mean difficulty heuristic, levels 346–500        |             71.8 |      73.6 |                  82.8 |           85.7 |

## Length mix of the 155 additions

Each variant adds 775 required answers. The second table counts words that first appear in levels 346–500.

| Answer length | Eight-tile draft | 5-row control, 7 | 6 rows, 7 | 5-row control, 7 or 8 | 6 rows, 7 or 8 |
| ------------: | ---------------: | ---------------: | --------: | --------------------: | -------------: |
|     3 letters |               48 |               43 |        30 |                    29 |             12 |
|     4 letters |              299 |              268 |       256 |                   200 |            149 |
|     5 letters |              264 |              259 |       199 |                   224 |            158 |
|     6 letters |              164 |              205 |       290 |                   322 |            456 |

| Newly introduced words | Eight-tile draft | 5-row control, 7 | 6 rows, 7 | 5-row control, 7 or 8 | 6 rows, 7 or 8 |
| ---------------------: | ---------------: | ---------------: | --------: | --------------------: | -------------: |
|              3 letters |                0 |                0 |         0 |                     0 |              0 |
|              4 letters |               13 |                8 |         8 |                    14 |             12 |
|              5 letters |               80 |               63 |        58 |                    88 |             77 |
|              6 letters |              159 |              195 |       268 |                   318 |            429 |
|                  Total |              252 |              266 |       334 |                   420 |            518 |

| Approved words never used in 500 levels | Eight-tile draft | 5-row control, 7 | 6 rows, 7 | 5-row control, 7 or 8 | 6 rows, 7 or 8 |
| --------------------------------------: | ---------------: | ---------------: | --------: | --------------------: | -------------: |
|                               3 letters |                0 |                0 |         0 |                     0 |              0 |
|                               4 letters |                2 |                7 |         7 |                     1 |              3 |
|                               5 letters |               16 |               33 |        38 |                     8 |             19 |
|                               6 letters |              511 |              475 |       402 |                   352 |            241 |

## Boards by number of six-letter answers

| Six-letter answers on the board | Eight-tile draft | 5-row control, 7 | 6 rows, 7 | 5-row control, 7 or 8 | 6 rows, 7 or 8 |
| ------------------------------: | ---------------: | ---------------: | --------: | --------------------: | -------------: |
|                               0 |               39 |               18 |         5 |                     2 |              0 |
|                               1 |               77 |               75 |        44 |                    25 |             11 |
|                               2 |               30 |               56 |        75 |                    87 |             36 |
|                               3 |                9 |                6 |        28 |                    41 |             63 |
|                               4 |                0 |                0 |         3 |                     0 |             41 |
|                               5 |                0 |                0 |         0 |                     0 |              4 |
| Six-letter answers running down |                0 |                0 |       103 |                     0 |            175 |

Grid sizes used by the additions:

| Grid (rows × columns) | Eight-tile draft | 5-row control, 7 | 6 rows, 7 | 5-row control, 7 or 8 | 6 rows, 7 or 8 |
| --------------------- | ---------------: | ---------------: | --------: | --------------------: | -------------: |
| 4 × 7                 |                0 |                0 |         1 |                     0 |              0 |
| 5 × 6                 |               39 |               17 |         8 |                     7 |              3 |
| 5 × 7                 |              116 |              138 |        45 |                   148 |             24 |
| 6 × 7                 |                0 |                0 |       101 |                     0 |            128 |

Wheel sizes in the additions: 6 rows, 7 or 8: 155 × 8 tiles; 5-row control, 7 or 8: 155 × 8 tiles. The 7-tile variants use seven tiles throughout.

## Phone cell sizes

Content projection from the unmodified `project_board`/`projectBoard` model (board areas 351 × 224, 378 × 335 and 416 × 392 pt; 4 pt gaps). `CrosswordBoard` sizes cells with the same formula from the space actually available on screen, which was not measured here (for example with the new test banner). Only iPhone SE falls below 36 pt.

| Grid (rows × columns) | iPhone SE | iPhone 17 | iPhone 17 Pro Max |
| --------------------- | --------: | --------: | ----------------: |
| 5 × 6                 |  41.60 pt |  59.67 pt |          66.00 pt |
| 5 × 7                 |  41.60 pt |  50.57 pt |          56.00 pt |
| 6 × 7                 |  34.00 pt |  50.57 pt |          56.00 pt |

A sixth row cuts the iPhone SE cell from 41.6 pt to 34.0 pt (height-limited). iPhone 17 stays width-limited at 50.57 pt for both 5 × 7 and 6 × 7, so only small phones lose cell size. These are model numbers, not device renders or playtests.

## Gates and what changed

The experiment copies the Python and TypeScript runtime into `artifacts/campaign-500-six-rows/extension-runtime`. Only these copied checks change, and only for levels 346–500:

- The iPhone SE cell check accepts 34 pt instead of 36 pt (`wide.py`, `wide.ts`). The aspect check `rows ≤ floor(columns / 1.15)` is unchanged: it already allows six rows at seven columns (floor(7 / 1.15) = 6) and still limits six-column boards to five rows, so square 6 × 6 boards stay rejected.
- 7 or 8 tiles are accepted (the same copied change as the eight-tile trial). The 7-tile variants simply use seven-tile candidates only.
- A trial-only bound-aware layout search (`bounded.py`) is added, and the copied `rebuild_wide` uses it for recipes that carry `maxRows`.

Every other rule is enforced unchanged: the 2,195 approvals and all exclusions, five answers of 3–6 letters, the 75-level gap including variants, unique answer sets and wheels, stop pacing (peak on the third board, recovery of at least two points, upward jumps of at most ten), at least one six-letter board per stop, density 35–65%, tight connected layouts with no accidental runs, and the variety checks (no reused answer triples, at most five shared tiles with any of the previous ten wheels, five distinct grid patterns per added stop, no identical adjacent grid pattern).

## Method

- **Candidates.** Every earlier greedy 5-row candidate (198,243 seven-tile and 12,861 eight-tile boards) stays in the pool. Two bound-aware searches add boards over the same family of wheels: exact 7- and 8-tile unions of two approved words, at least one unused by levels 1–345, richest unused vocabulary first. In each wheel, five-answer combinations are ranked by unused words, then six-letter answers; up to 40 are tried and 20 kept. The five-row control skips combinations with more than three six-letter answers (they cannot fit in five rows) and searches 5 × 7 layouts. The six-row search tries 5 × 7 first and 6 × 7 only when five rows fail, so every six-row board genuinely needs the sixth row. The five-row search visited 115,481 wheels and kept 1,554,837 boards; the six-row search visited 115,481 wheels and kept 1,240,053 five-row and 758,754 six-row boards (all 115,481 qualifying wheels; both searches finished well inside their 50-minute cap).
- **Layout search.** Depth-first search that adds one crossing word at a time, prunes every partial layout whose bounding box exceeds the allowed rows/columns or that fails `valid_layout`, backtracks to the next crossing instead of discarding the board, and memoizes visited partial layouts (20,000-node budget; in a check of 1,500 random combinations, no combination without a layout found one with an unlimited budget). A finished layout must also meet the column, aspect and density rules. The greedy `generate_level` remains unchanged and still rebuilds every greedy candidate and all of levels 1–345.
- **Selection.** The eight-tile `select.py` is reused with identical ranking, objective weights, CP-SAT stop model, pacing and variety constraints; only the pool changes. The six-row pool is a superset of the five-row control pool. As a regression check, this copy reproduces the earlier seven-tile (35.60%) and eight-tile (33.36%) selections exactly from their pools.

## Validation

All four variants rebuild through the copied Python gates and pass the copied TypeScript gates; all 500 boards of each solve through the game engine, and the production reviewed-only loader rejects every draft. Python and TypeScript negative tests reject six rows before level 346 (SE cells below 36 pt), seven rows or a square 6 × 6 board later, eight tiles early, nine tiles later and a 74-level variant gap (75 is accepted). Rebuilds are deterministic (draft SHA-256 values are in the JSON). All 210 production content, generator, app-source and script files hashed before the experiment are unchanged, and the copied runtime differs from production only by the recorded patches.

## Limitations

- This is a draft for an owner decision. Allowing it would require changing the 36 pt iPhone SE rule; 34 pt cells have not been checked on a device, in a screenshot or in a playtest, and touch comfort and legibility on small phones are unverified.
- The search is bounded (two-word wheel family, 40 tries and 20 kept boards per wheel, layout node budget) and selection is greedy by stop, so these are achievable values, not optimal ones. The five-row control and the six-row run share the same pool construction and selection, so their difference isolates the sixth row better than either absolute number.
- The difficulty heuristic rises with longer answers and eight tiles: levels 346–500 average 85.7 with six rows and 7 or 8 tiles (82.8 for the five-row control, 73.6 with six rows and 7 tiles only) against 69.6 for levels 296–345 (maximum 76 in levels 1–345). Pacing gates still pass, but perceived difficulty needs playtesting.
- The stops after level 345 are placeholders. No destinations, artwork, production dictionary, campaign revision, save migration, app export or TestFlight build was created.

[Exact metrics, patch records and draft hashes](CAMPAIGN_500_SIX_ROW_RESULTS.json) · Scripts and drafts: `artifacts/campaign-500-six-rows/`.
