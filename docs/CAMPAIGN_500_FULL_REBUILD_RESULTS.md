# Full 500-level rebuild: repetition results

> **Draft only. Nothing has been applied.** Active revision 28 (345 levels) and all production content are unchanged. Using this would rebuild levels 1–345 too, so it would need a new content revision with save migration before release.

**Rebuilding all 500 levels with the same 2,195 approved words and today's rules lowers lifetime repetition from 33.36% to 23.80%.** No rule changes: 5 tiles in levels 1–5, 6 tiles in 6–25, 7 tiles from 26, and at most five rows (36 pt iPhone SE cells). **Allowing six rows from level 26 lowers it further to 21.76%**, but breaks the 36 pt iPhone SE rule (34 pt cells) and needs an owner decision.

## Results

| Plan                                | Levels rebuilt | Board limit       | Tiles           | Distinct required words | Repeated occurrences | Lifetime repetition |
| ----------------------------------- | -------------- | ----------------- | --------------- | ----------------------: | -------------------: | ------------------: |
| Earlier seven-tile draft            | 346–500        | 5 × 7             | 5 / 6 / 7       |                    1610 |                  890 |              35.60% |
| Earlier eight-tile draft (your 33%) | 346–500        | 5 × 7             | 7 or 8 from 346 |                    1666 |                  834 |              33.36% |
| Earlier six-row draft               | 346–500        | 6 × 7 from 346    | 7 or 8 from 346 |                    1932 |                  568 |              22.72% |
| **Full rebuild, today's rules**     | **1–500**      | **5 × 7**         | **5 / 6 / 7**   |                **1905** |              **595** |          **23.80%** |
| **Full rebuild, six rows**          | **1–500**      | **6 × 7 from 26** | **5 / 6 / 7**   |                **1956** |              **544** |          **21.76%** |

Lifetime repetition = repeated occurrences ÷ 2,500 required answers. A repeated occurrence is any use of a word after its first appearance; bonus words are not counted.

Both full rebuilds use the same 2,195 approvals, five 3–6-letter answers per board and the 75-level gap. Almost every board is new: only 8 (five rows) and 4 (six rows) of the 500 boards have the same answers as a current revision 28 board.

## Why repetition cannot go much lower without new words

| Word length | Approved | Times used (5 rows) | Repeats (5 rows) | Never used (5 rows) | Times used (6 rows) | Repeats (6 rows) | Never used (6 rows) |
| ----------: | -------: | ------------------: | ---------------: | ------------------: | ------------------: | ---------------: | ------------------: |
|   3 letters |       62 |                 223 |              161 |                   0 |                 166 |              104 |                   0 |
|   4 letters |      504 |                 845 |              348 |                   7 |                 868 |              373 |                   9 |
|   5 letters |      733 |                 763 |               82 |                  52 |                 732 |               59 |                  60 |
|   6 letters |      896 |                 669 |                4 |                 231 |                 734 |                8 |                 170 |

- **Repeats sit in short connector words.** A seven-tile wheel rarely contains two or three six-letter words, so most boards hold one long word plus 3- and 4-letter connectors. There are only 62 three-letter and 504 four-letter approvals, so connectors repeat.
- **Six-letter words are used about once each**, but many stay unused. Once connectors appear across the campaign, the 75-level gap blocks almost every slot for boards that would need them again.
- **43 six-letter words cannot appear on any board** under the 7-tile limit with five rows (four of them can with six rows). Their letters form too few other approved words to fill five answers: აშკარა, ბეჭედი, გუგული, დუდუკი, ელვარე, ვალუტა, ვიზიტი, ზაზუნა, ზერელე, თუნუქი, კულული, მებაჟე, მებაღე, მეკვლე, მეტოქე, მეჩეთი, მეჭეჭი, მუწუკი, მუხუდო, მღვიმე, მშვიდი, პატარა, პეპელა, პუნქტი, საუნჯე, ტუტუცი, უტაქტო, ფინიში, ფუღურო, ქუთუთო, ყადაღა, ყაყაჩო, შედეგი, შუქურა, ჩონჩხი, ჩოჩორი, ცერეცო, წიწაკა, ჭაღარა, ჭყინტი, ხუჭუჭა, ჯეჯილი, ჰუმუსი.
- **Upper bound.** Even ignoring order, the 75-level gap and pacing, and allowing fractional boards, the candidate boards can cover at most 2006 words with five rows (19.77% repetition) and 2047 with six rows (18.14%). The plans reach 1905 and 1956, about 4 points above these optimistic bounds.

## What each step contributed

1. **Plan all 500 levels together** with the bound-aware layout search and today's rules: 25.72%.
2. **Value rare and six-letter words more**, weaken the usage-spreading penalty, and rerun with extra weight for words left out: 23.80% (best of 13 five-row runs, which range 23.80–25.72%).
3. **Allow six rows from level 26**: 21.76% (six-row runs range 21.76–22.72%).
4. **Tried without gain:** a larger candidate pool (up to 40 boards per wheel instead of 15) and re-optimizing 50-level blocks jointly with CP-SAT. Most blocks were already optimal, so the plans are at a plateau for this vocabulary and these rules.

## Six-letter words and board shapes

| Measure                                              | Full rebuild, 5 rows | Full rebuild, 6 rows |
| ---------------------------------------------------- | -------------------: | -------------------: |
| Boards with 0 six-letter answers                     |                   73 |                   75 |
| Boards with 1 six-letter answer                      |                  212 |                  184 |
| Boards with 2 six-letter answers                     |                  188 |                  184 |
| Boards with 3 six-letter answers                     |                   27 |                   46 |
| Boards with 4 six-letter answers                     |                    0 |                   11 |
| Boards with 5 six-letter answers                     |                    0 |                    0 |
| Six-letter answers running down                      |                    0 |                  225 |
| Six-row boards                                       |                    0 |                  245 |
| Smallest iPhone SE cell                              |              41.6 pt |              34.0 pt |
| Smallest iPhone 17 cell                              |             50.57 pt |             50.57 pt |
| Four- or five-letter answers (rule: more than 1,250) |                 1608 |                 1600 |
| Maximum appearances of one word                      |                    7 |                    6 |
| Words used 4 or more times                           |                   50 |                   26 |
| Median repeat gap (levels)                           |                  171 |                198.5 |
| Boards reusing an answer pair                        |                    0 |                    0 |

## Difficulty

| Levels  | Current revision 28 (mean, range) | Full rebuild, 5 rows | Full rebuild, 6 rows |
| ------- | --------------------------------- | -------------------- | -------------------- |
| 1–5     | 44.8 (42–48)                      | 43.6 (40–48)         | 43.2 (42–44)         |
| 6–25    | 56.8 (54–62)                      | 56.8 (50–66)         | 56.8 (50–64)         |
| 26–100  | 69.4 (62–76)                      | 71.7 (64–78)         | 72.6 (64–82)         |
| 101–345 | 69.3 (64–76)                      | 71.8 (62–80)         | 72.6 (62–80)         |
| 346–500 | —                                 | 71.3 (64–78)         | 71.5 (62–82)         |

Trade-off: to fit more different words, a few short connector words repeat more often. The earlier drafts used no word more than 4 times; here 50 words (five rows) and 26 words (six rows) appear 4 or more times, always at least 75 levels apart.

The difficulty heuristic rises because boards hold more long answers. Stop pacing rules still pass; perceived difficulty needs playtesting.

## Rules kept and validation

- Same 2,195 approved words and all exclusions; five answers of 3–6 letters; the 75-level gap including variants; unique wheels and answer sets.
- Today's tile progression (5 / 6 / 7 tiles), five-letter answers in levels 1–5, no six-letter answers before level 16, the six-letter board counts per stage and stop, at least one or two long answers per board, and more than 1,250 four- or five-letter answers.
- Stop pacing, density 35–65%, tight connected layouts, plus the experiment's variety rules: no reused answer triples, at most five shared tiles with any wheel within ten levels, five different grid patterns per stop, and no identical adjacent patterns.
- Both drafts rebuild deterministically through copied Python checks and pass the copied TypeScript checks; all 500 levels solve in the game engine, and the production reviewed-only loader rejects them. In the five-row runtime the app's TypeScript source is byte-for-byte production; only a 500-level journey copy and the bound-aware layout search used for rebuilding were added. The six-row runtime also lowers the SE minimum to 34 pt from level 26.
- Negative tests reject six rows wherever 36 pt applies, seven rows, square 6 × 6 boards, eight tiles in any stage and a 74-level repeat. All 210 production content, generator, app-source and script files are unchanged.

## Limitations

- These are drafts for review. Rebuilding levels 1–345 changes boards testers have not reached yet; a release would need a new content revision, save migration and new review of every board.
- The search and planner are heuristics (bounded candidate pools, stop-by-stop planning, single-board and 50-level block improvement). The bound above shows how much room could remain in theory; reaching it is unlikely.
- Six rows break the 36 pt iPhone SE rule and have not been checked on a device or simulator.
- The new stops after level 345 are placeholders without destinations or artwork.

[Exact metrics, settings, bounds and draft hashes](CAMPAIGN_500_FULL_REBUILD_RESULTS.json) · Scripts, plans and drafts: `artifacts/campaign-500-full/`.
