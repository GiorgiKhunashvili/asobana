# Remaining extension capacity — revision 28

**Recommendation: 10–15 more levels for a modest repetition increase.** A tested 15-level append reaches 360 levels at 19.61%, compared with the active 18.03%. Another 50 levels is feasible, reaching 395 at 23.04%. These are demonstrated outcomes from a bounded search, not hard limits.

The 661 unused approvals contain **568 six-letter words, 80 five-letter words and 13 four-letter words**. Many need previously used short partners to form five-answer boards on seven tiles. The 50-board trial introduces 106 unused words across 250 new slots; the other 144 slots are repeats.

| Extra levels | Total levels | Distinct words | Repeated slots | Overall repetition |
| -----------: | -----------: | -------------: | -------------: | -----------------: |
|            0 |          345 |           1414 |            311 |             18.03% |
|            5 |          350 |           1425 |            325 |             18.57% |
|           10 |          355 |           1437 |            338 |             19.04% |
|           15 |          360 |           1447 |            353 |             19.61% |
|           20 |          365 |           1457 |            368 |             20.16% |
|           25 |          370 |           1470 |            380 |             20.54% |
|           30 |          375 |           1480 |            395 |             21.07% |
|           35 |          380 |           1490 |            410 |             21.58% |
|           40 |          385 |           1500 |            425 |             22.08% |
|           45 |          390 |           1510 |            440 |             22.56% |
|           50 |          395 |           1520 |            455 |             23.04% |

Repetition means occurrences after a spelling’s first required appearance divided by all required answer slots. Bonus appearances do not count.

## Validation

All 395 boards passed the unchanged Python and TypeScript gates in a copied runtime and were solved with the game engine. Minimum repeat gap: 75 levels. The first 345 boards, including their bonuses, remain identical apart from draft review status. All active content JSON and catalog hashes are unchanged; the production loader rejects the unreviewed draft. Synthetic chapter labels exist only in the sandbox.

The focused search added two boards to the existing 226,200 candidates. Stop selection optimized new vocabulary before reuse concentration, retaining spacing, unique wheels, layout, word lengths and difficulty pacing. More search might improve these numbers.

[Exact checkpoints and recipes](CAMPAIGN_EXTENSION_CAPACITY_V28.json). Local scripts, draft and logs are in `artifacts/capacity-v28/`. No extra destinations or levels have been applied to the game.
