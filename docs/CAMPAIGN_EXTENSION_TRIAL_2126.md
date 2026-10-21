# Extension trial with 2,126 approved words

**Recommendation: 20 extra levels, reaching 365 at 19.84% overall repetition (+1.81 percentage points).** For an increase below one percentage point, the tested cutoff is 10 extra levels at 18.70%. These are demonstrated choices, not hard capacity limits.

The owner approved 41 words from targeted batch 04 and rejected nine. Combined with the previous ten approvals, this adds 51 words to the existing 2,075, leaving 712 initially unused approvals. Playable revision 28 is unchanged.

| Extra levels | Total | Distinct required words | Repetition | Increase (percentage points) |
| -----------: | ----: | ----------------------: | ---------: | ---------------------------: |
|            0 |   345 |                    1414 |     18.03% |                            — |
|            5 |   350 |                    1429 |     18.34% |                        +0.31 |
|           10 |   355 |                    1443 |     18.70% |                        +0.68 |
|           15 |   360 |                    1453 |     19.28% |                        +1.25 |
|           20 |   365 |                    1463 |     19.84% |                        +1.81 |
|           25 |   370 |                    1476 |     20.22% |                        +2.19 |
|           30 |   375 |                    1485 |     20.80% |                        +2.77 |
|           35 |   380 |                    1495 |     21.32% |                        +3.29 |
|           40 |   385 |                    1505 |     21.82% |                        +3.79 |
|           45 |   390 |                    1515 |     22.31% |                        +4.28 |
|           50 |   395 |                    1525 |     22.78% |                        +4.76 |
|           55 |   400 |                    1535 |     23.25% |                        +5.22 |
|           60 |   405 |                    1545 |     23.70% |                        +5.67 |
|           65 |   410 |                    1555 |     24.15% |                        +6.12 |
|           70 |   415 |                    1565 |     24.58% |                        +6.55 |
|           75 |   420 |                    1575 |     25.00% |                        +6.97 |
|           80 |   425 |                    1583 |     25.51% |                        +7.48 |
|           85 |   430 |                    1591 |     26.00% |                        +7.97 |
|           90 |   435 |                    1597 |     26.57% |                        +8.55 |
|           95 |   440 |                    1602 |     27.18% |                        +9.15 |
|          100 |   445 |                    1609 |     27.69% |                        +9.66 |

Repetition counts required occurrences after each spelling's first appearance, divided by all answer slots. Bonus words do not count. The 25-level checkpoint is a separate jointly selected alternative; other rows are prefixes of the validated 100-level trial.

## Recommended 20-level extension

Its 100 answer slots introduce **49 distinct previously unused words**: **31 from the old unused pool and 18 from the 51 new approvals**. The other 51 slots reuse words from the original campaign, always at least 75 levels apart. It leaves **663 approvals unused**. Exact recipes are preserved in the JSON report.

## Validation and scope

All **445 boards** in the 100-level trial and all **370 boards** in the separate 25-level variant passed the unchanged copied Python and TypeScript gates and were solved with the game engine. Both preserve the first 345 required boards, tiles, IDs, layouts and difficulty. Trial bonus recognition expands. The minimum required-word repeat gap is 75 in both trials.

The copied runtimes enforce the nine new exclusions for required answers, variants and bonuses. Their validator source files match production byte-for-byte. Production content and catalog hashes remain unchanged; the reviewed-only production loader rejects both generated drafts.

The search retained **230,580 candidate boards**, including 4,378 more than the preceding capacity pool. Selection maximized new required spellings before reducing reuse concentration, preserving unique wheels, five answers, long-answer progression, six-letter pacing, stop peaks/recovery, density and phone readability. A larger 25-level selection improved that checkpoint by one distinct word. These bounded searches do not prove a global optimum.

No campaign, new destination or artwork has been applied. The approved words and individual sources are recorded in the review documents; production integration remains pending.

[Exact metrics, recipes and draft hashes](CAMPAIGN_EXTENSION_TRIAL_2126.json). Reproducible trial files are under `artifacts/extension-trial-2126/`.
