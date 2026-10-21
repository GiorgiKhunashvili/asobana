# Extension trial with 2,195 approved words

**Recommendation: 20 extra levels, reaching 365 at 19.78% overall repetition (+1.75 percentage points).** The tested cutoff within one percentage point is 10 extra levels. These are demonstrated choices, not hard capacity limits.

The trial uses all 120 approved additions from targeted batches 03–06. The 50 candidates in batch 07 were skipped and are not used. There are 781 initially unused approved words. Active revision 28 remains unchanged.

| Extra levels | Total | Distinct required words | Repetition | Increase (percentage points) |
| -----------: | ----: | ----------------------: | ---------: | ---------------------------: |
|            0 |   345 |                    1414 |     18.03% |                            — |
|            5 |   350 |                    1429 |     18.34% |                        +0.31 |
|           10 |   355 |                    1444 |     18.65% |                        +0.62 |
|           15 |   360 |                    1454 |     19.22% |                        +1.19 |
|           20 |   365 |                    1464 |     19.78% |                        +1.75 |
|           25 |   370 |                    1477 |     20.16% |                        +2.13 |
|           30 |   375 |                    1486 |     20.75% |                        +2.72 |
|           35 |   380 |                    1496 |     21.26% |                        +3.23 |
|           40 |   385 |                    1506 |     21.77% |                        +3.74 |
|           45 |   390 |                    1516 |     22.26% |                        +4.23 |
|           50 |   395 |                    1526 |     22.73% |                        +4.71 |
|           55 |   400 |                    1536 |     23.20% |                        +5.17 |
|           60 |   405 |                    1546 |     23.65% |                        +5.63 |
|           65 |   410 |                    1556 |     24.10% |                        +6.07 |
|           70 |   415 |                    1566 |     24.53% |                        +6.50 |
|           75 |   420 |                    1576 |     24.95% |                        +6.92 |
|           80 |   425 |                    1586 |     25.36% |                        +7.34 |
|           85 |   430 |                    1596 |     25.77% |                        +7.74 |
|           90 |   435 |                    1602 |     26.34% |                        +8.32 |
|           95 |   440 |                    1609 |     26.86% |                        +8.83 |
|          100 |   445 |                    1617 |     27.33% |                        +9.30 |

Repetition counts required occurrences after each spelling's first appearance, divided by all answer slots. Bonus words do not count. Rows show the best validated checkpoint from two independently validated alternatives; they are not necessarily prefixes of one campaign.

## Recommended extension

The 100 additional answer slots introduce **50 distinct previously unused words**: **30 from the active unused pool and 20 from the 120 pending approvals**. The other 50 slots repeat required spellings, respecting the 75-level gap. This leaves **731 approved words unused**.

## Verification and limitations

All boards in both variants passed the unchanged copied Python and TypeScript validation gates and were solved with the game engine. Both preserve the original 345 required boards, tiles, IDs, layouts and difficulty; bonus recognition expands in the trial. Validator source files match production byte-for-byte. All 41 recent explicit exclusions are enforced for required answers, variants and bonuses in the copied runtimes.

The production reviewed-only loader rejects both drafts. All 116 production content/catalog hashes remain unchanged. No destinations, artwork or new levels have been applied to the game.

The bounded search retained 231,699 candidate boards. Selection prioritizes distinct words while retaining five answers, unique wheels, long-answer progression, six-letter pacing, chapter peak/recovery, density and phone readability. Time-limited search does not establish the global optimum.

[Exact metrics, recipes and draft hashes](CAMPAIGN_EXTENSION_TRIAL_2195.json). Trial scripts and outputs are under `artifacts/extension-trial-2195/`.
