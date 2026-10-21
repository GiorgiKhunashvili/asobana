# Expanded-vocabulary generation trial — 2026-10-20

**Draft only. The playable catalog remains revision 26.** The owner authorized
a generation trial after reviewing the new words, without waiting for exactly
2,000 approvals. The audited pool contains **1,997 individually approved words**:
1,720 existing approvals plus 277 new ones. Three more would reach the planning target.

The [complete decision ledger](VOCABULARY_EXPANSION_REVIEW_2026_10_20.json)
records every batch, 93 explicit exclusions, 41 unapproved alternatives, source
provenance and the replacement clarifications. `კალათა` and `მენჯი` were already
approved and are not counted twice. `ციკანი` and `ნეკა` are new. `კრიჭა` stays
approved; the owner excluded only `კროჭა`.

## Measured comparison

| Measure                        | Active v26 | Expanded-pool draft |
| ------------------------------ | ---------: | ------------------: |
| Levels / stops                 |   295 / 59 |            295 / 59 |
| Required answer slots          |      1,475 |               1,475 |
| Approved vocabulary            |      1,720 |               1,997 |
| Distinct required words        |      1,233 |               1,281 |
| Repeated slots after first use |        242 |                 194 |
| Repeated share of all slots    |     16.41% |              13.15% |
| Unused approved words          |        487 |                 716 |
| Minimum repeat gap             |         75 |                  76 |

The draft removes **48 repeated slots**
(**19.8% fewer repetitions**). A repeated slot means
an occurrence after a spelling's first required use anywhere in the campaign.
Bonus appearances are excluded from this calculation.

It uses **85 of the 277 additions**, plus
**39 previously unused baseline approvals**.
Required answer sets change on **255 boards**.
Unused approvals remain available for future combinations and bonus recognition;
a large word count alone does not guarantee compatible wheels and readable
five-answer layouts. This trial does not increase the number of levels.

| Uses per word | Active v26 word count | Draft word count |
| ------------- | --------------------: | ---------------: |
| 1             |                  1003 |             1097 |
| 2             |                   220 |              175 |
| 3             |                     8 |                8 |
| 4             |                     2 |                1 |

## Search and limitations

The bounded search retained existing boards and explored 27,044 letter wheels
around the new approvals, producing **202,449 candidate boards**
covering **1,925 approved spellings**. Individual-board improvement
and overlapping section optimizations prioritize distinct words, then reduce
concentrated reuse and prefer longer gaps. This is a measured feasible result,
not proof of a global optimum or of how much further search could improve it.

The trial uses exact copies of the current Python generator, official
`scripts/rebuild-wide-content.py`, TypeScript policy/gates and game engine.
Only copied vocabulary/policy inputs and recipes differ. The scratch format
revision stays 26 for compatibility with those unchanged gates; it is **not**
a new published revision or a replacement for historical v26.
All levels remain `generated-draft`, and the reviewed-only loader rejects them.
A future release must receive a new revision, review digest, catalog and save
migration integration together.

## Verification

- Every one of the 1,475 required slots and accepted variants was audited against
  the approved sense and source. No rejected or unapproved proposal is playable.
- Python and TypeScript release gates passed without modification: 75-level
  spacing, unique wheels, five answers, 3–6-letter limits, length progression,
  chapter pacing, exact tile counts, connected crossings, no accidental runs,
  density and phone-size constraints.
- Every eligible formable bonus was checked for exact inclusion.
- All 295 draft boards were solved through the TypeScript game engine.
- The official rebuild reproduced the audited draft byte-for-byte.
- All **104 existing content JSON files**, including
  the active policy, retained their SHA-256 hashes. Copied validator and generator
  sources match the originals.
- `npm run check` passed: 327 tests across 42 suites, type checking, lint,
  all 295 active boards validated and solved, and formatting.
- `uv run pytest`: 146 passed. Ruff lint and formatting passed; mypy passed
  for all 13 source files.

No bundled mobile content changed, so no iOS export or TestFlight upload was
needed. These checks are not native-device playtesting or a claim of additional
native-speaker review.

## Local artifacts and reproduction

All trial scripts, copied inputs, logs and outputs are in
`artifacts/vocabulary-trial-1997/` (ignored research artifacts). Important files:

- `statistics.json`: complete comparison, used/unused additions and changed boards.
- `answer-audit.json`: all 1,475 targets, meanings, source URLs and levels.
- `draft.json`: the unpromoted 295-board trial.
- `runtime/content/levels/discovery.v26.recipes.json`: selected trial recipes.
- `historical-hashes.json`: integrity snapshot of existing content.

From the repository root, reproduce the selected draft with:

```sh
PYTHONPATH=artifacts/vocabulary-trial-1997/runtime/puzzle-generator/src \
  puzzle-generator/.venv/bin/python \
  artifacts/vocabulary-trial-1997/runtime/scripts/rebuild-wide-content.py \
  --revision 26 --output artifacts/vocabulary-trial-1997/official-draft.json
```

Audited draft SHA-256: `6928a6482471ae68aeec97d02e7d1e0a9b83e17d28640e269c113b74cf90e237`.

## Approved additions and their use

| Word   | Approved meaning                        | Draft levels | Source                                                                                                       |
| ------ | --------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------ |
| ავანსი | advance payment                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%95%E1%83%90%E1%83%9C%E1%83%A1%E1%83%98)              |
| ათეული | group of ten                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%97%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98)              |
| აკაცია | acacia tree                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%99%E1%83%90%E1%83%AA%E1%83%98%E1%83%90)              |
| ალუჩა  | cherry plum                             | 150          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A9%E1%83%90)                       |
| ალქაჯი | witch; evil female spirit               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9A%E1%83%A5%E1%83%90%E1%83%AF%E1%83%98)              |
| ამაგი  | care and effort devoted to someone      | 211          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9B%E1%83%90%E1%83%92%E1%83%98)                       |
| ამალა  | entourage                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9B%E1%83%90%E1%83%9A%E1%83%90)                       |
| ამაო   | futile                                  | 211          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9B%E1%83%90%E1%83%9D)                                |
| ამპულა | medicine ampoule                        | 23           | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9B%E1%83%9E%E1%83%A3%E1%83%9A%E1%83%90)              |
| ანტენა | antenna                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9C%E1%83%A2%E1%83%94%E1%83%9C%E1%83%90)              |
| აპკი   | membrane                                | 128          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9E%E1%83%99%E1%83%98)                                |
| ასეული | group of one hundred                    | 30           | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A1%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98)              |
| ატელიე | tailor's or artist's workshop           | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A2%E1%83%94%E1%83%9A%E1%83%98%E1%83%94)              |
| აშკარა | obvious                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A8%E1%83%99%E1%83%90%E1%83%A0%E1%83%90)              |
| ბაია   | buttercup flower                        | 70           | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%98%E1%83%90/1)                              |
| ბალადა | ballad                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%9A%E1%83%90%E1%83%93%E1%83%90)              |
| ბარაქა | abundance                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%A0%E1%83%90%E1%83%A5%E1%83%90)              |
| ბატუტი | trampoline                              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A2%E1%83%98)              |
| ბებერი | old; aged                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%94%E1%83%91%E1%83%94%E1%83%A0%E1%83%98)              |
| ბეჯითი | diligent                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%94%E1%83%AF%E1%83%98%E1%83%97%E1%83%98)              |
| ბიბლია | Bible                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%98%E1%83%91%E1%83%9A%E1%83%98%E1%83%90)              |
| ბილწი  | obscene; foul                           | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%98%E1%83%9A%E1%83%AC%E1%83%98)                       |
| ბიჭუნა | little boy                              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%98%E1%83%AD%E1%83%A3%E1%83%9C%E1%83%90)              |
| ბლანტი | viscous                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%90%E1%83%9C%E1%83%A2%E1%83%98)              |
| ბლუზა  | blouse                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%A3%E1%83%96%E1%83%90)                       |
| ბოდიში | apology                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%93%E1%83%98%E1%83%A8%E1%83%98)              |
| ბორში  | borscht                                 | 120          | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%A8%E1%83%98)                       |
| ბოჩოლა | calf; affectionate term                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A9%E1%83%9D%E1%83%9A%E1%83%90)              |
| ბრიყვი | foolish                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A0%E1%83%98%E1%83%A7%E1%83%95%E1%83%98)              |
| ბუნაგი | animal's den                            | 101          | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A3%E1%83%9C%E1%83%90%E1%83%92%E1%83%98)              |
| ბურუსი | mist                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A3%E1%83%A0%E1%83%A3%E1%83%A1%E1%83%98)              |
| ბღუჯა  | handful                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A6%E1%83%A3%E1%83%AF%E1%83%90)                       |
| გეზი   | direction; course                       | 15           | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%94%E1%83%96%E1%83%98)                                |
| გესლი  | venom                                   | 121          | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%94%E1%83%A1%E1%83%9A%E1%83%98)                       |
| გირაო  | bail; security deposit                  | 238          | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%98%E1%83%A0%E1%83%90%E1%83%9D)                       |
| გისოსი | window bar; grille bar                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%98%E1%83%A1%E1%83%9D%E1%83%A1%E1%83%98)              |
| გოგონა | girl                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%9D%E1%83%92%E1%83%9D%E1%83%9C%E1%83%90)              |
| გორილა | gorilla                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%9D%E1%83%A0%E1%83%98%E1%83%9A%E1%83%90)              |
| გრიმი  | stage makeup                            | 92           | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A0%E1%83%98%E1%83%9B%E1%83%98)                       |
| გუაში  | gouache paint                           | 209          | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A3%E1%83%90%E1%83%A8%E1%83%98)                       |
| გუგული | cuckoo                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A3%E1%83%92%E1%83%A3%E1%83%9A%E1%83%98)              |
| გუთანი | plough                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A3%E1%83%97%E1%83%90%E1%83%9C%E1%83%98)              |
| დედანი | original document                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9C%E1%83%98)              |
| დევიზი | motto                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%94%E1%83%95%E1%83%98%E1%83%96%E1%83%98)              |
| დეკანი | faculty dean                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%94%E1%83%99%E1%83%90%E1%83%9C%E1%83%98)              |
| დილეგი | dungeon                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%98%E1%83%9A%E1%83%94%E1%83%92%E1%83%98)              |
| დონორი | donor                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%9D%E1%83%9C%E1%83%9D%E1%83%A0%E1%83%98)              |
| დორბლი | drool                                   | 48           | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%9D%E1%83%A0%E1%83%91%E1%83%9A%E1%83%98)              |
| დოსიე  | dossier                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%9D%E1%83%A1%E1%83%98%E1%83%94)                       |
| დუდუკი | duduki wind instrument                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%A3%E1%83%93%E1%83%A3%E1%83%99%E1%83%98)              |
| დღიური | diary                                   | Unused       | [Source](https://en.wiktionary.org/w/index.php?title=დღიური&oldid=84114709)                                  |
| ეთიკა  | ethics                                  | 240          | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%97%E1%83%98%E1%83%99%E1%83%90)                       |
| ელდა   | sudden fright                           | 235          | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%93%E1%83%90)                                |
| ელენთა | spleen                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%94%E1%83%9C%E1%83%97%E1%83%90)              |
| ეული   | solitary                                | 30, 280      | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98)                                |
| ეშხი   | charm                                   | 187          | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%A8%E1%83%AE%E1%83%98)                                |
| ვალეტი | jack; playing card                      | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%9A%E1%83%94%E1%83%A2%E1%83%98)              |
| ვალუტა | currency                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A2%E1%83%90)              |
| ვანილი | vanilla                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%9C%E1%83%98%E1%83%9A%E1%83%98)              |
| ვარამი | sorrow                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%A0%E1%83%90%E1%83%9B%E1%83%98)              |
| ვეება  | huge                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%94%E1%83%94%E1%83%91%E1%83%90)                       |
| ვერძი  | ram                                     | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%94%E1%83%A0%E1%83%AB%E1%83%98)                       |
| ვიზიტი | official visit                          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%98%E1%83%96%E1%83%98%E1%83%A2%E1%83%98)              |
| ვისკი  | whisky                                  | 273          | [Source](https://dlab.ug.edu.ge/synonym/detail/4119/%E1%83%95%E1%83%98%E1%83%A1%E1%83%99%E1%83%98)           |
| ზამში  | suede                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%90%E1%83%9B%E1%83%A8%E1%83%98)                       |
| ზანტი  | sluggish                                | 170          | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%90%E1%83%9C%E1%83%A2%E1%83%98)                       |
| ზენიტი | zenith                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%94%E1%83%9C%E1%83%98%E1%83%A2%E1%83%98)              |
| ზერელე | superficial                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%94%E1%83%A0%E1%83%94%E1%83%9A%E1%83%94)              |
| ზოდი   | metal ingot                             | 20           | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%9D%E1%83%93%E1%83%98)                                |
| ზუთხი  | sturgeon                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%A3%E1%83%97%E1%83%AE%E1%83%98)                       |
| ზურნა  | zurna wind instrument                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%90)                       |
| იდეალი | ideal; model of perfection              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%93%E1%83%94%E1%83%90%E1%83%9A%E1%83%98)              |
| ირიბი  | slanted; indirect                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%A0%E1%83%98%E1%83%91%E1%83%98)                       |
| ისლამი | Islam                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%A1%E1%83%9A%E1%83%90%E1%83%9B%E1%83%98)              |
| კაიუტა | ship's cabin                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%90%E1%83%98%E1%83%A3%E1%83%A2%E1%83%90)              |
| კარეტა | enclosed horse-drawn carriage           | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%90%E1%83%A0%E1%83%94%E1%83%A2%E1%83%90)              |
| კვერნა | marten                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%95%E1%83%94%E1%83%A0%E1%83%9C%E1%83%90)              |
| კრედო  | creed                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A0%E1%83%94%E1%83%93%E1%83%9D)                       |
| კრიალა | shiny                                   | 93           | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A0%E1%83%98%E1%83%90%E1%83%9A%E1%83%90)              |
| კრიჭა  | upper and lower jaws together           | 31           | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A0%E1%83%98%E1%83%AD%E1%83%90)                       |
| კრუიზი | sea cruise                              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A0%E1%83%A3%E1%83%98%E1%83%96%E1%83%98)              |
| კულონი | pendant                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A3%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98/1)            |
| კუპე   | train compartment                       | 267          | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A3%E1%83%9E%E1%83%94)                                |
| კურო   | bull                                    | 120          | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A3%E1%83%A0%E1%83%9D)                                |
| ლაბადა | light overcoat; cloak                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%90%E1%83%91%E1%83%90%E1%83%93%E1%83%90)              |
| ლაგუნა | lagoon                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%90%E1%83%92%E1%83%A3%E1%83%9C%E1%83%90)              |
| ლავიწი | collarbone                              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%90%E1%83%95%E1%83%98%E1%83%AC%E1%83%98)              |
| ლანდი  | shadowy figure                          | 35, 235      | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%90%E1%83%9C%E1%83%93%E1%83%98)                       |
| ლელო   | try; rugby score                        | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%94%E1%83%9A%E1%83%9D)                                |
| ლენჩი  | fool; dimwit                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%94%E1%83%9C%E1%83%A9%E1%83%98)                       |
| ლეში   | animal carcass                          | 126          | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%94%E1%83%A8%E1%83%98)                                |
| ლიანა  | climbing vine                           | 35           | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%98%E1%83%90%E1%83%9C%E1%83%90)                       |
| ლირიკა | lyric poetry                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%98%E1%83%A0%E1%83%98%E1%83%99%E1%83%90)              |
| ლიფი   | bra                                     | 284          | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%98%E1%83%A4%E1%83%98)                                |
| ლოგინი | bedding                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98%E1%83%9C%E1%83%98)              |
| ლორწო  | mucus                                   | 262          | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%9D%E1%83%A0%E1%83%AC%E1%83%9D)                       |
| ლუპა   | magnifying glass                        | 23           | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%A3%E1%83%9E%E1%83%90)                                |
| მაზუთი | heavy fuel oil                          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%96%E1%83%A3%E1%83%97%E1%83%98)              |
| მათარა | water flask                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%97%E1%83%90%E1%83%A0%E1%83%90)              |
| მამაცი | brave                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%9B%E1%83%90%E1%83%AA%E1%83%98)              |
| მარდი  | agile                                   | 252          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%93%E1%83%98)                       |
| მაყარი | wedding attendant                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A7%E1%83%90%E1%83%A0%E1%83%98)              |
| მებაჟე | customs officer                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%91%E1%83%90%E1%83%9F%E1%83%94)              |
| მებაღე | gardener                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%91%E1%83%90%E1%83%A6%E1%83%94)              |
| მედუზა | jellyfish                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%93%E1%83%A3%E1%83%96%E1%83%90)              |
| მეკვლე | first New Year visitor                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%99%E1%83%95%E1%83%9A%E1%83%94)              |
| მერანი | swift riding horse                      | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A0%E1%83%90%E1%83%9C%E1%83%98)              |
| მერხი  | school desk                             | 214          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A0%E1%83%AE%E1%83%98)                       |
| მესია  | messiah; savior                         | 76           | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A1%E1%83%98%E1%83%90)                       |
| მეტოქე | opponent                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A2%E1%83%9D%E1%83%A5%E1%83%94)              |
| მეუფე  | lord; title of a bishop                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A3%E1%83%A4%E1%83%94)                       |
| მეუღლე | spouse                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A3%E1%83%A6%E1%83%9A%E1%83%94)              |
| მეჩეთი | mosque                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A9%E1%83%94%E1%83%97%E1%83%98)              |
| მეჭეჭი | wart                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%AD%E1%83%94%E1%83%AD%E1%83%98)              |
| მიმოზა | mimosa plant                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%98%E1%83%9B%E1%83%9D%E1%83%96%E1%83%90)              |
| მონობა | slavery                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%9C%E1%83%9D%E1%83%91%E1%83%90)              |
| მორგი  | morgue                                  | 238          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%A0%E1%83%92%E1%83%98)                       |
| მოხელე | public official                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%AE%E1%83%94%E1%83%9A%E1%83%94)              |
| მული   | husband's sister                        | 280          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A3%E1%83%9A%E1%83%98)                                |
| მუნჯი  | unable to speak                         | 91           | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A3%E1%83%9C%E1%83%AF%E1%83%98)                       |
| მუხუდო | chickpea                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A3%E1%83%AE%E1%83%A3%E1%83%93%E1%83%9D)              |
| მღვრიე | murky                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A6%E1%83%95%E1%83%A0%E1%83%98%E1%83%94)              |
| მშვიდი | calm                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A8%E1%83%95%E1%83%98%E1%83%93%E1%83%98)              |
| მცველი | guard                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%AA%E1%83%95%E1%83%94%E1%83%9A%E1%83%98)              |
| მცნება | commandment                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%AA%E1%83%9C%E1%83%94%E1%83%91%E1%83%90)              |
| ნადუღი | whey cheese                             | 87           | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%90%E1%83%93%E1%83%A3%E1%83%A6%E1%83%98)              |
| ნაზავი | mixture                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%90%E1%83%96%E1%83%90%E1%83%95%E1%83%98)              |
| ნაკელი | manure                                  | 260          | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%90%E1%83%99%E1%83%94%E1%83%9A%E1%83%98)              |
| ნაკეცი | fold; crease                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%90%E1%83%99%E1%83%94%E1%83%AA%E1%83%98)              |
| ნაკვთი | facial or bodily feature                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%90%E1%83%99%E1%83%95%E1%83%97%E1%83%98)              |
| ნაჭუჭი | eggshell; nutshell                      | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%90%E1%83%AD%E1%83%A3%E1%83%AD%E1%83%98)              |
| ნედლი  | fresh; not dried                        | 235          | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%94%E1%83%93%E1%83%9A%E1%83%98)                       |
| ნეკა   | little finger or little toe             | 260          | [Source](https://dlab.ug.edu.ge/synonym/detail/12601/%E1%83%9C%E1%83%94%E1%83%99%E1%83%90)                   |
| ნეტარი | blissful; blessed                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%94%E1%83%A2%E1%83%90%E1%83%A0%E1%83%98)              |
| ნიანგი | crocodile                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%90%E1%83%9C%E1%83%92%E1%83%98)              |
| ნისია  | credit; payment owed later              | 123          | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%A1%E1%83%98%E1%83%90)                       |
| ნოველა | short prose story                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%9D%E1%83%95%E1%83%94%E1%83%9A%E1%83%90)              |
| ნორჩი  | young; tender                           | 279          | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%9D%E1%83%A0%E1%83%A9%E1%83%98)                       |
| ობიანი | moldy                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%91%E1%83%98%E1%83%90%E1%83%9C%E1%83%98)              |
| ომბალო | pennyroyal herb                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%9B%E1%83%91%E1%83%90%E1%83%9A%E1%83%9D)              |
| ორგანი | organ; musical instrument               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A0%E1%83%92%E1%83%90%E1%83%9C%E1%83%98/1)            |
| ორგული | disloyal                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A0%E1%83%92%E1%83%A3%E1%83%9A%E1%83%98)              |
| პაიკი  | chess pawn                              | 128          | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%90%E1%83%98%E1%83%99%E1%83%98)                       |
| პატარა | small                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%90%E1%83%A2%E1%83%90%E1%83%A0%E1%83%90)              |
| პეპელა | butterfly                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%94%E1%83%9E%E1%83%94%E1%83%9A%E1%83%90)              |
| პიესა  | stage play                              | 76           | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%98%E1%83%94%E1%83%A1%E1%83%90)                       |
| პითონი | python snake                            | Unused       | [Source](https://en.wiktionary.org/w/index.php?title=პითონი&oldid=84096918)                                  |
| პიჟამა | pajamas; singular Georgian garment noun | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%98%E1%83%9F%E1%83%90%E1%83%9B%E1%83%90)              |
| პირმშო | firstborn child                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%98%E1%83%A0%E1%83%9B%E1%83%A8%E1%83%9D)              |
| პიჯაკი | suit jacket                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%98%E1%83%AF%E1%83%90%E1%83%99%E1%83%98)              |
| პლაზმა | plasma                                  | Unused       | [Source](https://en.wiktionary.org/w/index.php?title=პლაზმა&oldid=84100736)                                  |
| პუნქტი | numbered clause                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%A5%E1%83%A2%E1%83%98)              |
| რითმა  | rhyme                                   | 252          | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%98%E1%83%97%E1%83%9B%E1%83%90)                       |
| რტო    | branch                                  | 219          | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%A2%E1%83%9D)                                         |
| რულონი | roll of paper or fabric                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%A3%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98)              |
| რჩეული | chosen; select                          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%A9%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98)              |
| რჯული  | religious faith                         | 89           | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%AF%E1%83%A3%E1%83%9A%E1%83%98)                       |
| სააქაო | earthly world                           | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%90%E1%83%A5%E1%83%90%E1%83%9D)              |
| საბაჟო | customs office                          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9F%E1%83%9D)              |
| საელჩო | embassy                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%94%E1%83%9A%E1%83%A9%E1%83%9D)              |
| საეჭვო | suspicious                              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%94%E1%83%AD%E1%83%95%E1%83%9D)              |
| სავანა | savanna                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%95%E1%83%90%E1%83%9C%E1%83%90)              |
| საზრდო | nourishment                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%96%E1%83%A0%E1%83%93%E1%83%9D)              |
| საიქიო | afterlife                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%98%E1%83%A5%E1%83%98%E1%83%9D)              |
| საკაცე | stretcher                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%99%E1%83%90%E1%83%AA%E1%83%94)              |
| სალტე  | metal hoop                              | 223          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%9A%E1%83%A2%E1%83%94)                       |
| სანაყი | mortar-and-pestle crushing tool         | 264          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%A7%E1%83%98)              |
| სასიძო | prospective son-in-law                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A1%E1%83%98%E1%83%AB%E1%83%9D)              |
| სატირა | satire                                  | 173          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A2%E1%83%98%E1%83%A0%E1%83%90)              |
| საუნჯე | treasure                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A3%E1%83%9C%E1%83%AF%E1%83%94)              |
| საქმრო | fiancé                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A5%E1%83%9B%E1%83%A0%E1%83%9D)              |
| საცეცი | tentacle; singular lemma                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%AA%E1%83%94%E1%83%AA%E1%83%98)              |
| საცივი | poultry dish with walnut sauce          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%AA%E1%83%98%E1%83%95%E1%83%98)              |
| საცხი  | ointment                                | 94           | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%AA%E1%83%AE%E1%83%98)                       |
| საწური | strainer                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%AC%E1%83%A3%E1%83%A0%E1%83%98)              |
| საჭე   | steering wheel                          | 30           | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%AD%E1%83%94)                                |
| სეიფი  | safe for valuables                      | 6            | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%98%E1%83%A4%E1%83%98)                       |
| სელაპი | seal; animal                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%9A%E1%83%90%E1%83%9E%E1%83%98)              |
| სელი   | flax                                    | 8, 223       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%9A%E1%83%98)                                |
| სიგარა | cigar                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%98%E1%83%92%E1%83%90%E1%83%A0%E1%83%90)              |
| სიგელი | certificate of recognition              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%98%E1%83%92%E1%83%94%E1%83%9A%E1%83%98)              |
| სიკეთე | kindness                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%98%E1%83%99%E1%83%94%E1%83%97%E1%83%94)              |
| სილაღე | carefree joy                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%98%E1%83%9A%E1%83%90%E1%83%A6%E1%83%94)              |
| სინუსი | sine                                    | Unused       | [Source](https://en.wiktionary.org/w/index.php?title=სინუსი&oldid=87901196)                                  |
| სკა    | beehive                                 | 179          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%99%E1%83%90)                                         |
| სლენგი | slang                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9A%E1%83%94%E1%83%9C%E1%83%92%E1%83%98)              |
| სნეული | ill                                     | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9C%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98)              |
| სოია   | soybean                                 | 211          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9D%E1%83%98%E1%83%90)                                |
| სონატა | sonata                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9D%E1%83%9C%E1%83%90%E1%83%A2%E1%83%90)              |
| სოსისი | sausage                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9D%E1%83%A1%E1%83%98%E1%83%A1%E1%83%98)              |
| სტეიკი | steak                                   | Unused       | [Source](https://dlab.ug.edu.ge/synonym/detail/18652/%E1%83%A1%E1%83%A2%E1%83%94%E1%83%98%E1%83%99%E1%83%98) |
| სუსხი  | biting cold                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A3%E1%83%A1%E1%83%AE%E1%83%98)                       |
| ტანადი | well-proportioned in build              | 70           | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%90%E1%83%9C%E1%83%90%E1%83%93%E1%83%98)              |
| ტევადი | spacious                                | 243          | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%95%E1%83%90%E1%83%93%E1%83%98)              |
| ტერასა | terrace; attached veranda               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%A0%E1%83%90%E1%83%A1%E1%83%90)              |
| ტიკი   | leather wineskin                        | 128          | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%98%E1%83%99%E1%83%98)                                |
| ტიპაჟი | character type                          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%98%E1%83%9E%E1%83%90%E1%83%9F%E1%83%98)              |
| ტიტული | title                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%98%E1%83%A2%E1%83%A3%E1%83%9A%E1%83%98)              |
| ტუსაღი | prisoner                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%A3%E1%83%A1%E1%83%90%E1%83%A6%E1%83%98)              |
| უბადლო | matchless                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%91%E1%83%90%E1%83%93%E1%83%9A%E1%83%9D)              |
| უდრეკი | resolute                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%93%E1%83%A0%E1%83%94%E1%83%99%E1%83%98)              |
| უზნეო  | immoral; ill-behaved                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%96%E1%83%9C%E1%83%94%E1%83%9D)                       |
| ულაყი  | stallion                                | 160          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%9A%E1%83%90%E1%83%A7%E1%83%98)                       |
| უნაბი  | jujube fruit                            | 101          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%9C%E1%83%90%E1%83%91%E1%83%98)                       |
| უტაქტო | tactless                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A2%E1%83%90%E1%83%A5%E1%83%A2%E1%83%9D)              |
| უტვინო | foolish                                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A2%E1%83%95%E1%83%98%E1%83%9C%E1%83%9D)              |
| უტყვი  | silent                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A2%E1%83%A7%E1%83%95%E1%83%98)                       |
| უფალი  | lord                                    | 284          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A4%E1%83%90%E1%83%9A%E1%83%98)                       |
| უქნარა | lazy                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A5%E1%83%9C%E1%83%90%E1%83%A0%E1%83%90)              |
| უღელი  | yoke for oxen                           | 280          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A6%E1%83%94%E1%83%9A%E1%83%98)                       |
| უღრანი | dense; impenetrable forest              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A6%E1%83%A0%E1%83%90%E1%83%9C%E1%83%98)              |
| უწესო  | improper                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%AC%E1%83%94%E1%83%A1%E1%83%9D)                       |
| უხამსი | obscene; indecent                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%AE%E1%83%90%E1%83%9B%E1%83%A1%E1%83%98)              |
| ფანდი  | trick; wrestling maneuver               | 249          | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%90%E1%83%9C%E1%83%93%E1%83%98)                       |
| ფარაჯა | military overcoat                       | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%90%E1%83%A0%E1%83%90%E1%83%AF%E1%83%90)              |
| ფარეხი | sheepfold                               | 187          | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%90%E1%83%A0%E1%83%94%E1%83%AE%E1%83%98)              |
| ფეიხოა | feijoa fruit                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%94%E1%83%98%E1%83%AE%E1%83%9D%E1%83%90)              |
| ფიასკო | fiasco                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%98%E1%83%90%E1%83%A1%E1%83%99%E1%83%9D)              |
| ფინიში | finish line                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%98%E1%83%9C%E1%83%98%E1%83%A8%E1%83%98)              |
| ფოიე   | foyer                                   | 6, 137       | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%9D%E1%83%98%E1%83%94)                                |
| ფოლგა  | metal foil                              | 100          | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%9D%E1%83%9A%E1%83%92%E1%83%90)                       |
| ფუღურო | hollow in a tree                        | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%A3%E1%83%A6%E1%83%A3%E1%83%A0%E1%83%9D)              |
| ქანცი  | strength; stamina                       | 14           | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%90%E1%83%9C%E1%83%AA%E1%83%98)                       |
| ქელეხი | funeral meal                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%94%E1%83%9A%E1%83%94%E1%83%AE%E1%83%98)              |
| ქერტლი | dandruff                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%94%E1%83%A0%E1%83%A2%E1%83%9A%E1%83%98)              |
| ქეჩო   | scruff of an animal's neck              | 257          | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%94%E1%83%A9%E1%83%9D)                                |
| ქუთუთო | eyelid                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%A3%E1%83%97%E1%83%A3%E1%83%97%E1%83%9D)              |
| ღაბაბი | flesh hanging beneath the chin          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%90%E1%83%91%E1%83%90%E1%83%91%E1%83%98)              |
| ღინღლი | soft down                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%98%E1%83%9C%E1%83%A6%E1%83%9A%E1%83%98)              |
| ღორღი  | rubble; broken stone                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%9D%E1%83%A0%E1%83%A6%E1%83%98)                       |
| ყადაღა | legal seizure of property               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A7%E1%83%90%E1%83%93%E1%83%90%E1%83%A6%E1%83%90)              |
| ყუნწი  | fruit stalk                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A7%E1%83%A3%E1%83%9C%E1%83%AC%E1%83%98)                       |
| შაკიკი | migraine                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%90%E1%83%99%E1%83%98%E1%83%99%E1%83%98)              |
| შალითა | protective fabric cover                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%90%E1%83%9A%E1%83%98%E1%83%97%E1%83%90)              |
| შამანი | shaman                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%90%E1%83%9B%E1%83%90%E1%83%9C%E1%83%98)              |
| შარჟი  | humorous caricature                     | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%90%E1%83%A0%E1%83%9F%E1%83%98)                       |
| შარფი  | scarf                                   | 187          | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%90%E1%83%A0%E1%83%A4%E1%83%98)                       |
| შედეგი | result                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%94%E1%83%93%E1%83%94%E1%83%92%E1%83%98)              |
| შიფერი | roofing slate                           | Unused       | [Source](https://en.wiktionary.org/w/index.php?title=შიფერი&oldid=84120538)                                  |
| შოთი   | traditional long Georgian bread         | 26           | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%9D%E1%83%97%E1%83%98)                                |
| შტრიხი | drawn stroke                            | 36           | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%A2%E1%83%A0%E1%83%98%E1%83%AE%E1%83%98)              |
| შუადღე | noon                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%A3%E1%83%90%E1%83%93%E1%83%A6%E1%83%94)              |
| ჩიბუხი | smoking pipe                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%98%E1%83%91%E1%83%A3%E1%83%AE%E1%83%98)              |
| ჩოხა   | traditional Georgian garment            | 9            | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%9D%E1%83%AE%E1%83%90)                                |
| ჩრჩილი | moth                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%A0%E1%83%A9%E1%83%98%E1%83%9A%E1%83%98)              |
| ცერეცო | culinary herb                           | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%94%E1%83%A0%E1%83%94%E1%83%AA%E1%83%9D)              |
| ციგა   | sled                                    | 101          | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%98%E1%83%92%E1%83%90)                                |
| ციკანი | young goat                              | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%98%E1%83%99%E1%83%90%E1%83%9C%E1%83%98)              |
| ციტატა | quotation                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%98%E1%83%A2%E1%83%90%E1%83%A2%E1%83%90)              |
| ცუგა   | dog; affectionate term                  | 101          | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%A3%E1%83%92%E1%83%90)                                |
| ძონძი  | rag                                     | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AB%E1%83%9D%E1%83%9C%E1%83%AB%E1%83%98)                       |
| წალამი | vine prunings                           | 133          | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%90%E1%83%9A%E1%83%90%E1%83%9B%E1%83%98)              |
| წიაღი  | interior; depths                        | 288          | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%98%E1%83%90%E1%83%A6%E1%83%98)                       |
| წილადი | fraction                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%98%E1%83%9A%E1%83%90%E1%83%93%E1%83%98)              |
| წუმპე  | stagnant dirty pool                     | 292          | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%A3%E1%83%9B%E1%83%9E%E1%83%94)                       |
| წუნია  | fussy                                   | 90           | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%A3%E1%83%9C%E1%83%98%E1%83%90)                       |
| წუწკი  | greedy for food                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%A3%E1%83%AC%E1%83%99%E1%83%98)                       |
| წყლული | ulcer                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%A7%E1%83%9A%E1%83%A3%E1%83%9A%E1%83%98)              |
| ჭორფლი | freckle; singular or mass lemma         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AD%E1%83%9D%E1%83%A0%E1%83%A4%E1%83%9A%E1%83%98)              |
| ხაზინა | treasury                                | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%90%E1%83%96%E1%83%98%E1%83%9C%E1%83%90)              |
| ხალასი | pure; genuine                           | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%90%E1%83%9A%E1%83%90%E1%83%A1%E1%83%98)              |
| ხვედრი | fate; lot                               | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%95%E1%83%94%E1%83%93%E1%83%A0%E1%83%98)              |
| ხვეული | curly                                   | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%95%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98)              |
| ხინჯი  | flaw                                    | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%98%E1%83%9C%E1%83%AF%E1%83%98)                       |
| ხიფათი | danger                                  | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%98%E1%83%A4%E1%83%90%E1%83%97%E1%83%98)              |
| ხორკლი | small rough bump on the skin            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%9D%E1%83%A0%E1%83%99%E1%83%9A%E1%83%98)              |
| ხორხი  | larynx                                  | 277          | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%9D%E1%83%A0%E1%83%AE%E1%83%98)                       |
| ხუმარა | jocular; fond of joking                 | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%A3%E1%83%9B%E1%83%90%E1%83%A0%E1%83%90)              |
| ხუჭუჭა | curly-haired                            | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%A3%E1%83%AD%E1%83%A3%E1%83%AD%E1%83%90)              |
| ჯავრი  | worry; resentment                       | 31, 194      | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%90%E1%83%95%E1%83%A0%E1%83%98)                       |
| ჯალათი | executioner                             | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%90%E1%83%9A%E1%83%90%E1%83%97%E1%83%98)              |
| ჯემი   | jam                                     | 76           | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%94%E1%83%9B%E1%83%98)                                |
| ჯემპრი | jumper; sweater                         | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%94%E1%83%9B%E1%83%9E%E1%83%A0%E1%83%98)              |
| ჯეჯილი | young cereal growth                     | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%94%E1%83%AF%E1%83%98%E1%83%9A%E1%83%98)              |
| ჯიბრი  | spite; rivalry                          | Unused       | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%98%E1%83%91%E1%83%A0%E1%83%98)                       |
| ჯმუხი  | stocky                                  | 112          | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%9B%E1%83%A3%E1%83%AE%E1%83%98)                       |
| ჰუმუსი | hummus                                  | Unused       | [Source](https://en.wiktionary.org/w/index.php?title=ჰუმუსი&oldid=84103173)                                  |

## Draft board audit

| Level | Wheel   | Required answers                   |
| ----- | ------- | ---------------------------------- |
| 1     | კოირჭ   | კოჭი, რკო, ჭოკი, როკი, ჭორი        |
| 2     | რაფაფ   | არფა, რაფა, ფარა, ფაფა, აფრა       |
| 3     | ვლიაშ   | შალი, ვილა, შავი, ვაშლი, ვალი      |
| 4     | აჩიქრ   | ჩია, ქირა, ქარი, რქა, ჩქარი        |
| 5     | ამსათ   | მთა, ასთმა, მასა, თასმა, თმა       |
| 6     | ფოესიი  | ოსი, ოფისი, ფისო, სეიფი, ფოიე      |
| 7     | ზლიანვ  | ვიზა, ვაზი, ლინზა, ნაზი, ავზი      |
| 8     | რიესქლ  | სქელი, ქერი, ერი, სელი, რელსი      |
| 9     | ოთაჩხი  | ოთახი, ჩოხა, თიხა, თხა, თოხი       |
| 10    | ძღეაირ  | ღერძი, ღერი, ღარი, რძე, ძერა       |
| 11    | ულდბეი  | ლუდი, დუელი, ბუდე, ბედი, უბე       |
| 12    | აზფრმი  | ზარი, რაზმი, ფარი, ფირმა, მზა      |
| 13    | თიოვლა  | თოვლი, თოლია, თივა, ავი, ოვალი     |
| 14    | ქლციან  | ქანცი, ცალი, ცილა, ნალი, ქალი      |
| 15    | იაენგზ  | გენი, გენია, ზეგ, გაზი, გეზი       |
| 16    | იმერქუ  | მერი, მური, ურემი, მუქი, უქმე      |
| 17    | ოიჟლობ  | ობოლი, ჟოლო, ბოლი, ობი, ლობიო      |
| 18    | სხიამლ  | მსხალი, ხმალი, სახლი, ხალი, სია    |
| 19    | რასკფე  | ერა, კაფე, სარკე, კერა, ფრესკა     |
| 20    | გზაიდო  | იოგა, ოდა, გზა, ზოდი, ზოგადი       |
| 21    | ლკიტედ  | კლიტე, ეტლი, კლდე, კეტი, კიდე      |
| 22    | აზიონკ  | ზონა, კანი, კინო, კონა, კაზინო     |
| 23    | აუმპალ  | ლუპა, მალა, პუმა, ამპულა, ლამა     |
| 24    | შუიტმა  | ტაში, მუშტი, მუშა, აუტი, ტუში      |
| 25    | რლაქიუ  | ქილა, ქალური, ქულა, ქურა, ლუქი     |
| 26    | შათქინო | შნო, შოთი, ნაშთი, ქოთანი, ქონი     |
| 27    | ირალოზე | ლაზერი, რალი, ეზო, ზოლი, ეროზია    |
| 28    | ტრიიოსპ | პოსტი, პირი, სპირტი, სპორტი, სიო   |
| 29    | ლიმაუჭკ | ჭია, ჭკუა, კაუჭი, მუჭა, ლუკმა      |
| 30    | სიჭეაულ | ასული, ეული, საჭე, ასეული, ასლი    |
| 31    | ავკჯიჭრ | კვირა, ჯარი, ჯვარი, ჯავრი, კრიჭა   |
| 32    | ახირუმჩ | ჩუმი, მუხა, ხმაური, ჩარხი, ურჩი    |
| 33    | ოროაიტბ | ბორტი, ბოროტი, რობოტი, ორბიტა, ტბა |
| 34    | ჯლერბიი | ბერი, ლეიბი, ჯებირი, რბილი, ჯიბე   |
| 35    | ქადალნი | ლიანა, დალაქი, ქადა, ლაქა, ლანდი   |
| 36    | ტხშირჩი | ჩიხი, ჩხირი, ხშირი, შტრიხი, ჩირი   |
| 37    | ორმყუწა | ურო, ყრუ, წყარო, აწმყო, მუყაო      |
| 38    | ირკეტპო | პორტი, კოპი, ტრიო, პოკერი, პოეტი   |
| 39    | ოლსოითბ | ლოთი, ბოლო, სითბო, სოიო, ბოთლი     |
| 40    | ირაბდაკ | კაბა, კადრი, კარი, არაბი, ბარდა    |
| 41    | ლიატპემ | მელა, ეტაპი, მეტალი, ტემპი, ალი    |
| 42    | შშორაიდ | დროშა, შარდი, შაში, შოშია, რადიო   |
| 43    | უოგრლუი | გოლი, გურული, უგულო, რგოლი, ურიგო  |
| 44    | გვეუხლი | გველი, გლუვი, გული, ხელი, გლეხი    |
| 45    | ლიქოჩრო | ლოქო, ლორი, ქლორი, ქოჩორი, ოქრო    |
| 46    | იმტვორე | ევრო, მორევი, ტომი, მტვერი, ტირე   |
| 47    | ღლვედიე | ღვედი, დევი, ველი, ღელე, ლეღვი     |
| 48    | ბიროლად | როლი, დოლარი, ლორდი, დოლი, დორბლი  |
| 49    | იფეანრდ | ფრე, დენი, ფერადი, ნარდი, ფენა     |
| 50    | არიბოდკ | კობრა, კობრი, აკორდი, კოდი, დრო    |
| 51    | ქბაანეო | ნება, ქონება, აბანო, ექო, ბანქო    |
| 52    | მეოარფლ | ფერმა, ფორმა, ალოე, მოლარე, მალე   |
| 53    | ნავმწჟე | მჟავე, ვენა, წნევა, მწვანე, ამწე   |
| 54    | ვშდზოუა | შუა, დოზა, შოუ, უზადო, უდავო       |
| 55    | უვიცჭფი | უვიცი, ფიცი, ფუჭი, ფიჭვი, ცივი     |
| 56    | მვჩააჟი | მაჩვი, მჟავა, ჩაი, აჩმა, ვაჟი      |
| 57    | იტაფლირ | ფილტრი, ფირი, ლირა, ტარიფი, ლიტრი  |
| 58    | ვალემიკ | ელვა, მკლავი, კვალი, კვამლი, მაკე  |
| 59    | რაონოგმ | ნორმა, ორგანო, ორმო, მანგო, მონა   |
| 60    | ძკაირნუ | უნარი, ურნა, კუნძი, უკან, ნუკრი    |
| 61    | ჭრიიბლე | ჭრილი, ბელი, ჭრელი, ბეჭი, ბიჭი     |
| 62    | რთუიწაბ | ბარი, ბურთი, წარბი, უარი, წუთი     |
| 63    | არდგიმა | მაგიდა, დრამა, დარი, არმია, მარაგი |
| 64    | ფდსნაუა | დანა, ფაუნა, დაფნა, საუნა, დაფა    |
| 65    | მგლიძაე | გამძლე, მგელი, ძეგლი, ძმა, გემი    |
| 66    | არაყმიმ | მამრი, მყარი, ამაყი, იარა, არაყი   |
| 67    | ბდლბეია | ბადე, ბებია, ლედი, ბელადი, იდეა    |
| 68    | ვიტკირტ | კიტრი, კივი, კრივი, ტიტრი, კვირტი  |
| 69    | ნსტოიტე | ნესტო, ტესტი, ტონი, ტოტი, სონეტი   |
| 70    | აიტნადბ | ბატი, ბანდა, ნაბადი, ტანადი, ბაია  |
| 71    | ძუნლესი | ძნელი, ნული, სუნი, სუნელი, სიძე    |
| 72    | იბრაუღზ | ზღარბი, ღუზა, აუზი, ბურღი, ბაღი    |
| 73    | ალბწიღი | იღბალი, ღილი, წაბლი, წილი, იღლია   |
| 74    | ციმხლეჭ | ცხელი, მჭლე, ხმელი, ციხე, მხეცი    |
| 75    | აიუსრლფ | ლაფი, სული, სუფრა, ფარული, სრული   |
| 76    | იაპესმჯ | პიესა, სპა, ჯემი, მსაჯი, მესია     |
| 77    | აარლვძჰ | ლავა, ძრავა, ჰავა, ჰალვა, ძალა     |
| 78    | ჰიბენკო | ჰობი, ჰოკეი, ბეკონი, კიბო, კიბე    |
| 79    | რდკციაუ | ცრუ, კაცური, ცუდი, ურიკა, რუკა     |
| 80    | იშტიჯბუ | ჯიში, ბიტი, ჯიუტი, ბუშტი, შუბი     |
| 81    | იკრიხუდ | ხიდი, კიდური, ხრიკი, რუხი, კუდი    |
| 82    | იხკრეუშ | უხეში, შრე, ხრეში, კეხი, კრუხი     |
| 83    | რეგაგომ | გორა, გარემო, გოგრა, გეგმა, გემო   |
| 84    | კროტაუი | ტარო, კორტი, ტურა, ტური, კარტი     |
| 85    | ისოლკოა | სოკო, სოლო, კლასი, სკოლა, სილა     |
| 86    | ოტაინხე | ტანი, ტონა, ენოტი, ნატეხი, ნოხი    |
| 87    | გუდაღნი | ნადუღი, გუდა, ნაღდი, გუნდი, გუნდა  |
| 88    | ზმიაგლა | ლამაზი, ლიგა, მაგია, გამა, ლაგამი  |
| 89    | ეჯირულყ | ყელი, ლურჯი, ყურე, რჯული, რიყე     |
| 90    | ნგუაძწი | წუნი, წუნია, განძი, ძუნწი, ძუა     |
| 91    | უინჯმაჯ | ჯანი, მინა, ჯუჯა, მუნჯი, მიჯნა     |
| 92    | წმრგიინ | გრიმი, რიგი, რინგი, წიგნი, მწირი   |
| 93    | იკრამალ | მარკა, კრიალა, კამა, კალამი, რკალი |
| 94    | მციხისა | ცხიმი, ხმა, საცხი, მაისი, მისია    |
| 95    | ოკჭითუნ | კუჭი, უთო, უნიჭო, კუნთი, თოკი      |
| 96    | თგერდაი | დარგი, ადრე, ერთად, გერი, გარეთ    |
| 97    | ომიბებრ | ომი, ბრბო, ბომბი, ბებო, რომბი      |
| 98    | რიალიეძ | ლარი, რძალი, ძილი, ძელი, ძლიერი    |
| 99    | რიკშმკო | რომი, შოკი, შორი, კომში, კოშკი     |
| 100   | ორაგლფა | ფლორა, ფოლგა, ალფა, რაფა, გრაფა    |
| 101   | გნუაბიც | აბი, ბუნაგი, ციგა, უნაბი, ცუგა     |
| 102   | უბზმბაა | ბაბუა, ბამბა, ბზა, მუზა, ბაზა      |
| 103   | ასომაკრ | საამო, მასრა, კომა, კარმა, საკმაო  |
| 104   | ნაიცესკ | კაცი, კეცი, სცენა, აკნე, ანკესი    |
| 105   | ტვასეჟი | სვეტი, ჟესტი, სია, სტაჟი, ვატი     |
| 106   | მიიატჩპ | ჩიპი, ტიპი, ტაიმი, მატჩი, ჩიტი     |
| 107   | ახკათჩნ | ჩანთა, ხანა, თანხა, კათხა, თხა     |
| 108   | კურეისი | რეისი, რისკი, სუკი, კისერი, კურსი  |
| 109   | ყაიდლაბ | დაბლა, ყალბი, ყდა, დაბა, დაბალი    |
| 110   | ძარმვიი | ვირი, მძივი, ძირი, ძვირი, ძმარი    |
| 111   | ისაღთნა | საათი, ღია, ასანთი, თაღი, თასი     |
| 112   | ჩტუხჯმი | ჯმუხი, მუხტი, ჩუმი, ტუჩი, უმი      |
| 113   | მქეცალი | აქლემი, ცელქი, ლექცია, ცელი, ქილა  |
| 114   | ხფლაივხ | ხახვი, ხალხი, ფხა, ვაფლი, ხვალ     |
| 115   | რტააზიფ | ტაფა, ფაზა, ფრაზა, აზარტი, აზრი    |
| 116   | იოთეძარ | თეორია, თეძო, რძე, ძია, თერძი      |
| 117   | უდძიქრო | ქუდი, ქორი, ქურდი, ძიუდო, დოქი     |
| 118   | თაფრბაო | თარო, ფართო, ფრთა, ბაფთა, თაობა    |
| 119   | თირჭვეწ | ეჭვი, წევრი, წვეთი, ჭერი, თვე      |
| 120   | შკბიროუ | კუბო, კურო, ბიურო, ბორში, კუბი     |
| 121   | გისლესქ | სქესი, ქსელი, გესლი, სისქე, ლექსი  |
| 122   | რაკდავი | კარავი, ვადა, ავდარი, ვარდი, კრავი |
| 123   | ამზსინი | ზიანი, მზიანი, მიზანი, ნისია, ზმნა |
| 124   | რმიათეტ | მეტრი, მერია, თემა, თეატრი, მტერი  |
| 125   | ოსპუიცლ | სპილო, პულსი, ცოლი, ცული, პლუსი    |
| 126   | იშვჩილე | შვილი, ჩვილი, ელჩი, შველი, ლეში    |
| 127   | ასთიუით | თითი, თათი, თუთია, თუთა, სათუთი    |
| 128   | აპიკკიტ | ტკიპა, აპკი, კაპიკი, ტიკი, პაიკი   |
| 129   | ნღეორივ | ღონე, ღორი, ნერვი, ღვინო, ღერო     |
| 130   | თვიეზმი | მზე, მითი, ზეთი, თევზი, ზეიმი      |
| 131   | იექაჭჯვ | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     |
| 132   | იეაშხმშ | შაშხი, შხამი, ხამი, ხაში, შეშა     |
| 133   | აპამლიწ | წამალი, ლამპა, წალამი, მიწა, პალმა |
| 134   | ფიოტთლო | ფოთოლი, ფოტო, თოფი, ფლოტი, ტოლი    |
| 135   | ტყვვასი | ტყავი, ტყვია, ყვავი, ავი, სიტყვა   |
| 136   | ილვტოყე | ტყე, ტყვე, ყველი, ვეტო, ვოლტი      |
| 137   | ნოფთდეი | ფოიე, დენთი, ფონდი, თონე, დონე     |
| 138   | მეადიილ | მალე, მედალი, დილა, იმედი, დილემა  |
| 139   | ვაიგმთხ | თავი, თახვი, თივა, გვამი, თაგვი    |
| 140   | ლოიააკკ | კალია, კილო, კოკა, კაკალი, კაკაო   |
| 141   | აიბრჭნკ | ბანკი, კანჭი, რკინა, ჭარბი, ბინა   |
| 142   | ომწეარმ | მოწმე, მწარე, წრე, ერა, მოწამე     |
| 143   | აქჩეტმს | სექტა, სქემა, მჩატე, ჩექმა, საქმე  |
| 144   | ჯიუხვირ | ჯიხვი, ჯიხური, იხვი, უხვი, რუჯი    |
| 145   | ლეფებნი | ელფი, ნეფე, ფენი, ბლეფი, ბნელი     |
| 146   | სრეგაიბ | რაგბი, ბაგე, გერბი, ბასრი, ბგერა   |
| 147   | დაიმწთვ | წამი, მწვადი, მთა, დათვი, წვიმა    |
| 148   | აიესცრპ | პიცა, რეპი, საცერი, სერია, პრესა   |
| 149   | ფლიათვჭ | ფლავი, ფიჭა, თვალი, თაფლი, ჭავლი   |
| 150   | ახიუაჩლ | ხალი, ალუჩა, ხალიჩა, ჩალა, ახალი   |
| 151   | ტინსეილ | ნისლი, სტილი, ლენტი, ნესტი, ნელი   |
| 152   | ოხასჭებ | ხბო, ხეობა, საბჭო, ხაჭო, სახე      |
| 153   | ცმალბიო | ობი, ბიცოლა, ბალი, ალბომი, ცომი    |
| 154   | სიწვეფლ | ფილე, წელი, წესი, სველი, ფესვი     |
| 155   | ოაქიტმლ | ოლქი, მატლი, ოქმი, ტოლმა, ატომი    |
| 156   | აკაიენრ | კერა, ენა, ეკრანი, არენა, ნაკერი   |
| 157   | ქაიიდედ | დედა, დეიდა, დიდი, დიადი, ქედი     |
| 158   | ჯფრიაუგ | ჯგუფი, აგური, ფიგურა, გრაფი, უჯრა  |
| 159   | აქიბუჩნ | ქანჩი, უბანი, ბუჩქი, ბანი, ქუჩა    |
| 160   | აიყფულწ | ლუწი, ფილა, ფული, წყალი, ულაყი     |
| 161   | სზუსტოი | ზუსტი, ტუზი, სიო, სუსტი, სოუსი     |
| 162   | იღდჭაემ | მჭადი, მედია, ღამე, ჭაღი, დღე      |
| 163   | პიდემლო | მოდელი, პლედი, ლოდი, მდელო, ლომი   |
| 164   | იმტბნუო | ტუმბო, ბუმი, ტონი, ბუნტი, ტომი     |
| 165   | ვყილკიც | ციყვი, კვიცი, ციკლი, კივი, ცვილი   |
| 166   | იაოქფსტ | ქაფი, ფაქტი, ქოსა, ქაოსი, ფოსტა    |
| 167   | ფბრმძაი | ბიძა, მძაფრი, ძაბრი, ძაფი, ბრმა    |
| 168   | ანიმლიფ | ფინალი, ლაიმი, ფილმი, მილი, ფაილი  |
| 169   | პაოურაზ | პოზა, პაუზა, პროზა, უაზრო, აურა    |
| 170   | ინვტზია | ტვინი, ტივი, ვაზი, ნიავი, ზანტი    |
| 171   | ლხეიითს | თხილი, სითხე, ხილი, თესლი, თხელი   |
| 172   | დიხალჯო | ჯოხი, დახლი, ჯილდო, ოჯახი, ჯადო    |
| 173   | ტრასაიკ | ასაკი, კარატი, კატა, კასრი, სატირა |
| 174   | ზეავდას | ავად, ვაზა, სადავე, ზედა, სევდა    |
| 175   | გოარისჭ | გოჭი, საჭირო, ასო, გორა, გარსი     |
| 176   | ნგიიავთ | ნავი, ნივთი, გვიან, ნავთი, იგავი   |
| 177   | იიჯმინს | სინჯი, სიმი, ჯინი, ჯინსი, იმიჯი    |
| 178   | ოიასკდი | დისკო, აიკიდო, დისკი, კოდი, იოდი   |
| 179   | აცდნოკს | სოდა, კონა, ცოდნა, სკა, სანდო      |
| 180   | ბოიკილი | იოლი, ბილიკი, კბილი, ბოლი, ბლოკი   |
| 181   | იოტტრამ | ტოტი, მარტი, ტორტი, მორი, ტომატი   |
| 182   | ხიაზლჯმ | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     |
| 183   | ადოუიმმ | ოდა, მუმია, მუდამ, აუდიო, მიდამო   |
| 184   | პტშტიხა | ტახტი, შტატი, შხაპი, ხატი, ტიტა    |
| 185   | ძამლიღო | ძმა, ალღო, ლაღი, ძაღლი, მძღოლი     |
| 186   | ბვყალათ | ლავა, თავლა, ბალთა, ალყა, ყავა     |
| 187   | ხიაშეფრ | ფეხი, ფარეხი, ფრე, შარფი, ეშხი     |
| 188   | ამფმალი | მამალი, მამა, მაფია, ფიალა, ლამა   |
| 189   | მიუზბოლ | ბუზი, ზოლი, ზომბი, ბლუზი, ბმული    |
| 190   | ონრიედპ | ორდენი, დრონი, დრო, დეპო, პონი     |
| 191   | ღარპსიი | ღარი, ღიპი, ღირსი, ისარი, საღი     |
| 192   | იზსნვშა | ნაზი, ნიშა, სვანი, საშვი, შანსი    |
| 193   | ნკტპიუა | კანი, კნუტი, პიტნა, კუპატი, ტანკი  |
| 194   | გაორჯივ | ჯოგი, ჯავრი, გროვა, გვარი, ჯორი    |
| 195   | რემხზაც | მხარე, ზეცა, ცხარე, მახე, მზა      |
| 196   | ლაუოკინ | ნაკლი, უკან, უნაკლო, კლანი, კლონი  |
| 197   | უყენმის | სუნი, მენიუ, ნემსი, მსუყე, მყესი   |
| 198   | მილბთეი | ბილეთი, ილეთი, ლეიბი, მთელი, თბილი |
| 199   | რგაბნიჟ | ჟანრი, რანგი, ბარი, ჟანგი, ბირჟა   |
| 200   | აგმარიტ | გრამი, გიტარა, იარა, მაგარი, ატამი |
| 201   | ლპოტაცი | ტილო, პლატო, ცოტა, ცილა, პალტო     |
| 202   | ნკძიაავ | ნაძვი, აკვანი, ძია, კვანძი, ანძა   |
| 203   | იორნიფა | ნიორი, რაიონი, ფარი, ფრანი, ოინი   |
| 204   | ლიტუკპი | კლიპი, კულტი, ტიპი, პიკი, პულტი    |
| 205   | თრიხაჯვ | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   |
| 206   | იზტებარ | ბრაზი, ბზარი, ბეტა, ბატი, ზებრა    |
| 207   | იექქშურ | შური, შრე, ქურქი, ქერქი, შუქი      |
| 208   | იტვფილა | ლიფტი, ფილტვი, ვატი, ლაფი, იაფი    |
| 209   | გიუანშო | უშნო, გუაში, ნუში, გუშინ, იოგა     |
| 210   | ფტბაიოშ | შობა, ფობია, ტაში, ბოტი, შტაბი     |
| 211   | ოსგაამი | მაგია, საამო, სოია, ამაგი, ამაო    |
| 212   | აიჯიტსქ | სტიქია, საიტი, ქისა, ჯიქი, ტაქსი   |
| 213   | აიმაქთრ | ქარი, არმია, ქათამი, ქრთამი, ქმარი |
| 214   | ხლეირმც | ცელი, ცრემლი, მერხი, მხეცი, მცირე  |
| 215   | რლგაიბი | გრილი, ბრალი, ბარგი, ბაგირი, რიგი  |
| 216   | ტლასადი | ატლასი, დასი, სია, დასტა, სტადია   |
| 217   | ისოლაწნ | საწოლი, ალი, წონა, სალონი, ასლი    |
| 218   | იჯკრაბა | ჯარი, კაბა, აბჯარი, იჯარა, აჯიკა   |
| 219   | ტლორაუბ | რტო, ტაბლო, ტბა, უბრალო, ტაბუ      |
| 220   | რპტიაას | სპა, სარი, პასტა, პარტია, ტარი     |
| 221   | ილდგოამ | გოლი, დოლი, მადლი, მოდა, დოგმა     |
| 222   | რათხფია | არფა, არხი, ხათრი, აფთარი, თიხა    |
| 223   | იეალტკს | ეკალი, საკეტი, სალტე, სელი, ელიტა  |
| 224   | ვრაიიქჩ | ჩირი, ჩვარი, რქა, არქივი, ჩირქი    |
| 225   | ცდნიხაე | დენი, ცხადი, ცხენი, ხედი, იდეა     |
| 226   | აგიაულლ | გული, გალია, ლიგა, ლულა, ალალი     |
| 227   | კიტოზვა | ზავი, ვიზა, კვოტა, აზოტი, კოვზი    |
| 228   | იაზღშრვ | ავზი, ზარი, ზღვარი, შვრია, ზღვა    |
| 229   | ჭსივალვ | ჭვავი, ვალი, სილა, ვალსი, სვავი    |
| 230   | ცფხრიიო | ცოფი, ფიცი, ხორცი, ციფრი, ფიცხი    |
| 231   | პკრიაჟლ | ლირა, პარკი, პლაჟი, კაჟი, ლარი     |
| 232   | დბიგიენ | ბინდი, გედი, გიდი, ბედი, ბენდი     |
| 233   | სნყიაფო | ფისო, ფონი, ფსონი, ნაყოფი, ფასი    |
| 234   | ობერძკი | კერძი, ერბო, კერძო, კიბე, ბოძი     |
| 235   | ნეადიულ | დუელი, ელდა, ნედლი, ლანდი, ნული    |
| 236   | ეროვბწი | წებო, ბევრი, წვერი, ბეწვი, ბერი    |
| 237   | აუღორმა | მარაო, ღრმა, ღამურა, ურო, ღრუ      |
| 238   | ომგაზირ | მორგი, გირაო, გზა, გაზი, ორმაგი    |
| 239   | ლიგოფორ | გოლფი, ოფლი, რგოლი, როლი, ლოგო     |
| 240   | მკეათიჩ | კამეჩი, თმა, თემი, ეთიკა, ჩეკი     |
| 241   | უსკიამზ | სკამი, აუზი, მუსიკა, კუზი, მაუსი   |
| 242   | ყაჭბიაყ | ყაბაყი, ყბა, ბაყაყი, ჭია, ბაჭია    |
| 243   | შეადივტ | ტევადი, შვედი, დევი, ეშვი, დიეტა   |
| 244   | ყმეირწფ | მყიფე, მწერი, ფერი, მწიფე, წრე     |
| 245   | აზვადნა | დანა, დავა, ანდაზა, ავაზა, ვაზნა   |
| 246   | იბვშქვა | ბავშვი, ქვა, შავი, ქვაბი, ქვიშა    |
| 247   | რუგიიზპ | პრიზი, პირი, ზურგი, გრიპი, პური    |
| 248   | იაარნჯმ | მაჯა, მარანი, ჯარიმა, მანია, მინა  |
| 249   | წფმიანდ | წმინდა, ნამი, წინდა, ფანდი, წამი   |
| 250   | ისამოზბ | საზომი, სამბო, ბასი, ზომა, ბზა     |
| 251   | ჭაონრიი | ნიჭი, ჭირი, ჭორი, ირონია, ნაოჭი    |
| 252   | მითადარ | მთა, მარდი, მადა, ადათი, რითმა     |
| 253   | აერმლიშ | მარში, მლაშე, მშრალი, რალი, მელა   |
| 254   | ილქთრყუ | ყური, თურქი, ყუთი, რთული, ყრუ      |
| 255   | ესვახსი | სესხი, ავი, ხავსი, სესია, სავსე    |
| 256   | ფმაირხუ | მუხა, მხარი, ხურმა, ხარი, ხუფი     |
| 257   | პერაქჩო | ქერა, ქეჩო, ეპოქა, ოპერა, ექო      |
| 258   | ცხივიეს | ციხე, სხივი, ხევი, სიცივე, სიცხე   |
| 259   | შლივაუშ | შაში, შუა, შუშა, შაშვი, ულვაში     |
| 260   | ივლკენა | ვაკე, ლეკვი, ნაკელი, ნეკა, ნელი    |
| 261   | ატაერფკ | რაკეტა, ფარა, აფრა, კეფა, კარატე   |
| 262   | ლოწსრიო | სწორი, ლორწო, სორო, სოიო, სოლო     |
| 263   | რკამხცი | მარცხი, კრახი, ხმა, კარი, მკაცრი   |
| 264   | ყირსნაა | არაყი, რასა, სანაყი, ყანა, არსი    |
| 265   | აიაშვლფ | ვაშლი, აფიშა, ლავაში, შალი, ალფა   |
| 266   | ინახდურ | ხურდა, რაუნდი, რუხი, უარი, ხუნდი   |
| 267   | რპუკდეი | კიდე, პიურე, პუდრი, კუპე, კუდი     |
| 268   | ერმატონ | ნორმა, მარტო, ტარო, მონეტა, მეტრო  |
| 269   | ყიიდრნა | რაინდი, ყადრი, ნადირი, ყდა, დარი   |
| 270   | გტმიეირ | მერი, ირემი, გმირი, გემი, რიტმი    |
| 271   | გფთოასუ | სუფთა, უთო, უფასო, ასო, გუფთა      |
| 272   | ბიოკოჭლ | კოჭი, ბოჭკო, კოჭლი, ობოლი, ბოლოკი  |
| 273   | კიივსრც | ვისკი, კვიცი, სკივრი, კრივი, ცირკი |
| 274   | ივაძძელ | ძვალი, ვილა, ძველი, ძიძა, ველი     |
| 275   | ღტხლააი | ღია, იახტა, ხატი, ტალღა, ტალახი    |
| 276   | რშისიოფ | შორი, ოსი, შიფრი, შორს, სიროფი     |
| 277   | როხქიეხ | ერი, ქერი, ქოხი, ხერხი, ხორხი      |
| 278   | ჩიაბონრ | ბორანი, რანჩო, აბი, ბარონი, ბარი   |
| 279   | ინყაოჩრ | ჩია, ნორჩი, ჩაი, ყორანი, ყოჩი      |
| 280   | იემიულღ | უღელი, ღილი, ღუმელი, ეული, მული    |
| 281   | ნიეოკან | ნეონი, აკნე, კანონი, კინო, ნეკნი   |
| 282   | ებლუშკი | შუბი, კლუბი, კლიშე, ბელი, შუბლი    |
| 283   | რტეცგნი | გერი, ცენტრი, ნერგი, ცენტი, ტირე   |
| 284   | იდალფიუ | იაფი, ლუდი, უფალი, ფულადი, ლიფი    |
| 285   | ეცირაჰუ | ჰერცი, ერა, უეცარი, ცრუ, ჰაერი     |
| 286   | სუდოლირ | სურდო, დროული, სული, ორსული, სიო   |
| 287   | რლგიკაო | რკალი, გორაკი, რკო, როკი, ლოგიკა   |
| 288   | წნიღაილ | ანწლი, ნალი, წიაღი, ნაწილი, წილი   |
| 289   | დღევბიო | ვიდეო, ღვედი, ღობე, დოღი, დღე      |
| 290   | რბიტშოლ | ტრიო, ლორი, შოლტი, შტო, ბროლი      |
| 291   | სნეგვია | გენი, ვეგანი, ენა, ნესვი, სიგანე   |
| 292   | წმაუეპო | პუმა, პოემა, უმწეო, წუმპე, ამწე    |
| 293   | საეხიბლ | სახელი, სია, სიახლე, ალი, საბელი   |
| 294   | უმციცხო | უცხო, ცოცხი, მოხუცი, უმი, ომი      |
| 295   | ღოჭმიაბ | ჭაობი, ბოღმა, ჭაღი, ღომი, ობი      |
