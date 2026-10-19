# Journey vocabulary and campaign review — revision 23

The owner authorized 30 Spain levels after Tunisia on 2026-10-18:
**Barcelona (ბარსელონა), 266–270; Valencia (ვალენსია), 271–275;
Madrid (მადრიდი), 276–280; Granada (გრანადა), 281–285;
Córdoba (კორდობა), 286–290; Seville (სევილია), 291–295**.
All first 265 boards, including answers, layouts, IDs and bonuses, remain exactly
as revision 22. All 84 pre-existing content JSON files, including dictionaries,
packs and route manifests, are unchanged.

The vocabulary remains at **1,569 approved main words**. The revision-20 reference
has 1,790 entries and recognizes 1,687 eligible words, including 118 additional
bonus-only spellings. No new vocabulary approvals are assumed.

## Measured results

| Measure                                | Before (v22) | Spain expansion (v23) |
| -------------------------------------- | -----------: | --------------------: |
| Levels                                 |          265 |                   295 |
| Stops                                  |           53 |                    59 |
| Required answer slots                  |        1,325 |                 1,475 |
| Distinct required spellings            |        1,126 |                 1,187 |
| Unused approved words                  |          443 |                   382 |
| Repeated slots beyond first appearance |          199 |                   288 |
| Minimum repeat gap                     |           75 |                    75 |

**61 previously unused approved words** enter required play: at least two
per new board, with three on one board. The 150 Spain answers are all distinct
from each other: 61 were unused and 89 appeared earlier. Of those 89, 63 become
second occurrences and 26 become third occurrences; none becomes a fourth.
The closest Spain reuse is 75 levels after its earlier appearance.

Appending Spain adds 89 repeated appearances; it does not reduce the absolute
repeat count in the preserved earlier campaign. Frequencies across the full
campaign are **937 words used once, 212 twice, 38 three times,
and 0 four times**. Bonus appearances are excluded and do not reset the gap.

| Spain stop | Levels  | Previously unused words |
| ---------- | ------- | ----------------------: |
| ბარსელონა  | 266–270 |                      10 |
| ვალენსია   | 271–275 |                      10 |
| მადრიდი    | 276–280 |                      11 |
| გრანადა    | 281–285 |                      10 |
| კორდობა    | 286–290 |                      10 |
| სევილია    | 291–295 |                      10 |

## Search and review

The append-only search explored **66,149 candidate wheels** containing unused
approved words, retaining compatible existing boards and testing new layouts.
373 wheels could form at least five approved answers with at least two unused
words and two long answers. Eligible five-word combinations were attempted with
seeds 1–32; the ten wheels offering three unused words received additional layout
attempts through seed 1,024.

The resulting pool contains **31,141 valid candidates**:
27,817 with no unused words, 2,863 with one, 460 with two, and one with three.
Thirty boards therefore have a coverage ceiling of 61 within this pool, and the
selected campaign reaches it. This is a bounded search, not a proof over every
possible layout. The joint solver reports OPTIMAL for the weighted objective
within the 461 candidates offering at least two unused words per board.

Joint selection enforces history, duplicate wheels, word uniqueness, all transitions,
third-board peaks, fourth-board recovery and a six-letter board in every stop.
The objective prioritizes unused-word coverage, then avoids adding third/fourth
uses, then prefers longer gaps. Search recipes and results are preserved under
`artifacts/next-country-v22/` and `artifacts/journey-v23/` locally.

All 1,475 required slots and variants were checked against the explicit allowlist,
recorded meanings and exclusions. All 150 new answers were individually reviewed
against their existing approved senses and source provenance; see the complete
appended-answer audit below. No variants beyond canonical spellings were added.
Every eligible formable bonus is recognized. Plurals and reserved rare words stay
bonus-only, and all-play exclusions remain excluded. All 295 boards pass the
existing gap, wheel, length, crossword, density, phone-size and pacing gates.
Difficulty estimates do not replace playtesting or a native-speaker review.

## Compatibility and artwork

`content/journey-v23.json` defines the 295-level route. Revision-aware validators
retain the original 240-level route for revisions 13–20, Malta's 250-level route
for revision 21, and Tunisia's 265-level route for revision 22. Revision 23 reuses
the revision-20 vocabulary and policy. Saves from revisions 1–22 are supported.
Existing completed boards, partial solved credits, paid hints, coins, settings,
postcards and lifetime bonus rewards survive migration and restart. The hint
compatibility ceiling stays at 1,544 because old boards are unchanged. Completing
level 265 unlocks level 266; Spain unlocks sequentially, with six new postcards.

Six generated portraits and card crops are registered in the country, scene and
postcard systems. See [artwork and exact prompts](SPAIN_ARTWORK.md). All six
short facts were source-checked and explicitly owner-approved on 2026-10-18;
see [place facts](PLACE_FACTS.md).

## Reproducibility and validation

Reviewed draft SHA-256: `ebede623bac2e990edc35c7e5b25360f138ff77ff5c809a041346964ae15c92d`.

Rebuild with `scripts/rebuild-wide-content.py --revision 23`. Promotion requires
this exact audited digest and `--promote-reviewed --output content/levels/discovery.v23.json`.
Checked-in recipes reproduce the result without ignored search artifacts.

Validation completed on 2026-10-18:

- `npm run check`: passed TypeScript, ESLint, **264 tests in 34 suites**, the
  content solver for **all 295 levels**, and Prettier.
- `uv run pytest`: **140 passed**, including deterministic revision-23 rebuilding,
  old-route validation, vocabulary/bonus coverage and all unchanged release gates.
- `uv run ruff check .`, `uv run ruff format --check .` and `uv run mypy src`: passed.
- `npx expo export --platform ios`: passed with all twelve Spain JPEGs bundled.
- All 84 pre-existing content JSON files and all 106 older JPEG assets retain
  their original SHA-256 hashes. The first 265 boards remain exactly unchanged.
- Save tests cover partial and complete v22 upgrades, paid hints, coins, bonus
  credits, postcards, sequential unlocks and repository reload after migration.

Logs are preserved locally under `artifacts/journey-v23/`. Artwork was inspected
as full portraits and card crops. Content validation did not include a native-device
test. The owner subsequently requested a release: the campaign was built locally
and uploaded as **0.1.0 (12)** on 2026-10-18; see [TESTFLIGHT.md](TESTFLIGHT.md) for
Apple's processing status. Automatic difficulty estimates still require playtesting.

## Previously unused words now used (61)

| Word   | Meaning           | New level | Source                                                                                          |
| ------ | ----------------- | --------: | ----------------------------------------------------------------------------------------------- |
| ავაზა  | cheetah           |       295 | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)                      |
| ავარია | accident          |       295 | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031)                     |
| ბაყაყი | frog              |       281 | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131)                     |
| ბოროტი | evil; wicked      |       267 | [source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020)                     |
| ბუტკო  | pistil            |       291 | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)                      |
| გორაკი | hillock           |       282 | [source](https://en.wiktionary.org/w/index.php?title=გორაკი&oldid=85057574)                     |
| დივანი | sofa              |       287 | [source](https://en.wiktionary.org/w/index.php?title=დივანი&oldid=84114587)                     |
| დროული | timely            |       293 | [source](https://en.wiktionary.org/w/index.php?title=დროული&oldid=84090042)                     |
| ექთანი | nurse             |       271 | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646)                     |
| ვეგანი | vegan             |       283 | [source](https://en.wiktionary.org/w/index.php?title=ვეგანი&oldid=85113988)                     |
| თამამი | bold; confident   |       270 | [source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182)                     |
| თანხა  | amount of money   |       288 | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)                      |
| კამათი | argument          |       270 | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005)                     |
| კენკრა | berry             |       275 | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952)                     |
| კლანჭი | claw              |       266 | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695)                     |
| კლონი  | clone             |       266 | [source](https://en.wiktionary.org/w/index.php?title=კლონი&oldid=84099156)                      |
| კურკა  | fruit stone       |       275 | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)                      |
| ლიმონი | lemon             |       269 | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519)                     |
| ლოგიკა | logic             |       282 | [source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159)                     |
| მარანი | wine cellar       |       273 | [source](https://en.wiktionary.org/w/index.php?title=მარანი&oldid=84116688)                     |
| მარცხი | failure; defeat   |       284 | [source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693)                     |
| მაჩვი  | badger            |       294 | [source](https://en.wiktionary.org/w/index.php?title=მაჩვი&oldid=84116792)                      |
| მაწონი | matsoni yogurt    |       278 | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051)                     |
| მზიანი | sunny             |       277 | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151)                     |
| მთიანი | mountainous       |       277 | [source](https://en.wiktionary.org/w/index.php?title=მთიანი&oldid=88592489)                     |
| მოდური | fashionable       |       293 | [source](https://en.wiktionary.org/w/index.php?title=მოდური&oldid=84088886)                     |
| მჟავა  | acid              |       294 | [source](https://en.wiktionary.org/w/index.php?title=მჟავა&oldid=84117295)                      |
| მწნილი | pickled food      |       269 | [source](https://en.wiktionary.org/w/index.php?title=მწნილი&oldid=84100246)                     |
| ნაგავი | rubbish           |       289 | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259)                     |
| ნაგაზი | sheepdog          |       289 | [source](https://en.wiktionary.org/w/index.php?title=ნაგაზი&oldid=87732950)                     |
| ნაერთი | compound          |       271 | [source](https://en.wiktionary.org/w/index.php?title=ნაერთი&oldid=84100263)                     |
| ნაღდი  | cash              |       292 | [source](https://en.wiktionary.org/w/index.php?title=ნაღდი&oldid=84117574)                      |
| ნაღები | cream             |       290 | [source](https://en.wiktionary.org/w/index.php?title=ნაღები&oldid=84096713)                     |
| ნახატი | picture           |       288 | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603)                     |
| პარტია | political party   |       272 | [source](https://en.wiktionary.org/w/index.php?title=პარტია&oldid=88896345)                     |
| პასტა  | paste             |       272 | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)                      |
| რაუნდი | round             |       274 | [source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282)                     |
| რობოტი | robot             |       267 | [source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728)                     |
| რომანი | novel             |       278 | [source](https://en.wiktionary.org/w/index.php?title=რომანი&oldid=84101101)                     |
| სადენი | electrical wire   |       292 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
| სიგანე | width             |       283 | [source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409)                     |
| სიროფი | syrup             |       279 | [source](https://en.wiktionary.org/w/index.php?title=სიროფი&oldid=84101529)                     |
| სპორტი | sport             |       280 | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224)                     |
| სფერო  | sphere; field     |       279 | [source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)                      |
| სწორი  | correct; straight |       280 | [source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)                      |
| ტუმბო  | pump              |       291 | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)                      |
| უეცარი | sudden            |       276 | [source](https://en.wiktionary.org/w/index.php?title=უეცარი&oldid=84089033)                     |
| ქათამი | chicken           |       268 | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996)                     |
| ქრთამი | bribe             |       268 | [source](https://en.wiktionary.org/w/index.php?title=ქრთამი&oldid=92921065)                     |
| ყაბაყი | zucchini          |       281 | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258)                     |
| შინდი  | cornelian cherry  |       287 | [source](https://en.wiktionary.org/w/index.php?title=შინდი&oldid=87901604)                      |
| ცენტი  | cent              |       285 | [source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)                      |
| ცენტრი | center            |       285 | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748)                     |
| ცნება  | concept           |       290 | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)                      |
| ცხვარი | sheep             |       284 | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538)                     |
| ძეხვი  | sausage           |       286 | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)                      |
| ხვრელი | hole              |       286 | [source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623)                     |
| ხუნდი  | shackle           |       274 | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)                      |
| ჯარიმა | fine; penalty     |       273 | [source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221)                     |
| ჰაერი  | air               |       276 | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)                      |
| ჰერცი  | hertz             |       276 | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)                      |

## All 150 appended required answers and variants

Each accepted variant equals its canonical answer. All rows retain their existing
owner-approved everyday sense; no plural or bonus-only sense is promoted.

| Level | Word   | Meaning             | Earlier required level | Source                                                                                          |
| ----: | ------ | ------------------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
|   266 | კლონი  | clone               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=კლონი&oldid=84099156)                      |
|   266 | კლანჭი | claw                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695)                     |
|   266 | ჭოკი   | pole                | 16                     | [source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)                       |
|   266 | ნაკლი  | defect              | 188                    | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)                      |
|   266 | კილო   | kilo                | 186                    | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)                       |
|   267 | ბორტი  | side of a ship      | 133                    | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98)          |
|   267 | ბოროტი | evil; wicked        | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020)                     |
|   267 | რობოტი | robot               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728)                     |
|   267 | ორბიტა | orbit               | 133                    | [source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483)                     |
|   267 | ტბა    | lake                | 36, 150                | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)                        |
|   268 | ქარი   | wind                | 4                      | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)                       |
|   268 | არმია  | army                | 23, 148                | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)                      |
|   268 | ქათამი | chicken             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996)                     |
|   268 | ქრთამი | bribe               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ქრთამი&oldid=92921065)                     |
|   268 | ქმარი  | husband             | 23                     | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)                      |
|   269 | ლიმონი | lemon               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519)                     |
|   269 | იოლი   | easy                | 178                    | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)                       |
|   269 | მწნილი | pickled food        | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მწნილი&oldid=84100246)                     |
|   269 | ომი    | war                 | 44, 153                | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)                        |
|   269 | მილი   | tube; mile          | 94                     | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)                       |
|   270 | თამამი | bold; confident     | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182)                     |
|   270 | კამა   | dill                | 78                     | [source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)                       |
|   270 | მთა    | mountain, hill      | 72, 152                | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)                        |
|   270 | კამათი | argument            | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005)                     |
|   270 | მამა   | father              | 63                     | [source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)                       |
|   271 | თექა   | felt                | 152                    | [source](https://en.wiktionary.org/w/index.php?title=თექა&oldid=84115581)                       |
|   271 | ექთანი | nurse               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646)                     |
|   271 | რქა    | horn, antler        | 4, 189                 | [source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)                        |
|   271 | ქერა   | blond               | 196                    | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)                       |
|   271 | ნაერთი | compound            | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ნაერთი&oldid=84100263)                     |
|   272 | პარტია | political party     | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=პარტია&oldid=88896345)                     |
|   272 | არსი   | essence             | 121                    | [source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)                       |
|   272 | რასა   | race (human group)  | 140                    | [source](https://en.wiktionary.org/w/index.php?title=რასა&oldid=68803154)                       |
|   272 | პასტა  | paste               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)                      |
|   272 | სპა    | spa                 | 106                    | [source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)                        |
|   273 | მაჯა   | wrist               | 170                    | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)                       |
|   273 | მარანი | wine cellar         | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მარანი&oldid=84116688)                     |
|   273 | ჯარიმა | fine; penalty       | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221)                     |
|   273 | მანია  | mania               | 98                     | [source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)                      |
|   273 | მინა   | glass (material)    | 21, 98                 | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)                       |
|   274 | ხურდა  | small change        | 134                    | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)                      |
|   274 | რაუნდი | round               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282)                     |
|   274 | რუხი   | gray/grey           | 9, 142                 | [source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)                       |
|   274 | უარი   | refusal             | 151                    | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)                       |
|   274 | ხუნდი  | shackle             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)                      |
|   275 | აკნე   | acne                | 28, 161                | [source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)                       |
|   275 | კენკრა | berry               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952)                     |
|   275 | ურნა   | urn                 | 33                     | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)                       |
|   275 | კურკა  | fruit stone         | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)                      |
|   275 | რუკა   | map                 | 118                    | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)                       |
|   276 | ჰერცი  | hertz               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)                      |
|   276 | ერა    | era                 | 2, 201                 | [source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)                        |
|   276 | უეცარი | sudden              | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=უეცარი&oldid=84089033)                     |
|   276 | ცრუ    | false, phony        | 9, 134                 | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)                        |
|   276 | ჰაერი  | air                 | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)                      |
|   277 | ზიანი  | damage              | 40                     | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)                      |
|   277 | მზიანი | sunny               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151)                     |
|   277 | მთიანი | mountainous         | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მთიანი&oldid=88592489)                     |
|   277 | ნაზი   | gentle; tender      | 40                     | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)                       |
|   277 | თმა    | hair                | 21, 163                | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)                        |
|   278 | მონა   | slave               | 175                    | [source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)                       |
|   278 | მაწონი | matsoni yogurt      | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051)                     |
|   278 | ნორმა  | norm; standard      | 175                    | [source](https://en.wiktionary.org/w/index.php?title=ნორმა&oldid=87787628)                      |
|   278 | რომანი | novel               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=რომანი&oldid=84101101)                     |
|   278 | მორი   | log, timber         | 138                    | [source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)                       |
|   279 | სფერო  | sphere; field       | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)                      |
|   279 | ფერი   | color, hue          | 62, 184                | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)                       |
|   279 | რეისი  | scheduled journey   | 27                     | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)                      |
|   279 | ფირი   | film                | 50                     | [source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)                       |
|   279 | სიროფი | syrup               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=სიროფი&oldid=84101529)                     |
|   280 | სწორი  | correct; straight   | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)                      |
|   280 | პორტი  | port                | 34                     | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)                      |
|   280 | სპორტი | sport               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224)                     |
|   280 | ოსპი   | lentil              | 116                    | [source](https://en.wiktionary.org/w/index.php?title=ოსპი&oldid=81817269)                       |
|   280 | სიო    | breeze              | 65, 194                | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)                        |
|   281 | ყაბაყი | zucchini            | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258)                     |
|   281 | ყბა    | jaw                 | 31                     | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)                        |
|   281 | ბაყაყი | frog                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131)                     |
|   281 | ჭია    | worm                | 7, 112                 | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)                        |
|   281 | ბაჭია  | young rabbit        | 164                    | [source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)                      |
|   282 | რკალი  | hoop, ring          | 130                    | [source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)                      |
|   282 | გორაკი | hillock             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=გორაკი&oldid=85057574)                     |
|   282 | რკო    | acorn               | 16, 103                | [source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)                        |
|   282 | როკი   | rock music          | 133                    | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)                       |
|   282 | ლოგიკა | logic               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159)                     |
|   283 | გენი   | gene                | 28                     | [source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)                       |
|   283 | ვეგანი | vegan               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ვეგანი&oldid=85113988)                     |
|   283 | ენა    | language; tongue    | 18, 156                | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)                        |
|   283 | ნესვი  | melon               | 59                     | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)                      |
|   283 | სიგანე | width               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409)                     |
|   284 | ხარი   | ox, bull            | 61, 204                | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)                       |
|   284 | ცხვარი | sheep               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538)                     |
|   284 | მარცხი | failure; defeat     | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693)                     |
|   284 | არხი   | canal               | 134                    | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)                       |
|   284 | ხმა    | voice, sound        | 177                    | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)                        |
|   285 | გერი   | stepchild           | 107                    | [source](https://en.wiktionary.org/w/index.php?title=გერი&oldid=92197067)                       |
|   285 | ცენტრი | center              | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748)                     |
|   285 | ნერგი  | sapling             | 28                     | [source](https://en.wiktionary.org/w/index.php?title=ნერგი&oldid=91680451)                      |
|   285 | ცენტი  | cent                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)                      |
|   285 | ტირე   | dash                | 87, 184                | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)                       |
|   286 | ძველი  | old                 | 59                     | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)                      |
|   286 | ძეხვი  | sausage             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)                      |
|   286 | ხვრელი | hole                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623)                     |
|   286 | რძე    | milk                | 120, 210               | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)                        |
|   286 | ველი   | field               | 35                     | [source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)                       |
|   287 | ნიავი  | breeze              | 212                    | [source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%90%E1%83%95%E1%83%98)          |
|   287 | დივანი | sofa                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=დივანი&oldid=84114587)                     |
|   287 | ნავი   | boat                | 185                    | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)                       |
|   287 | შინდი  | cornelian cherry    | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=შინდი&oldid=87901604)                      |
|   287 | ნიშა   | niche               | 64, 166                | [source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)                       |
|   288 | ნახატი | picture             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603)                     |
|   288 | თანხა  | amount of money     | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)                      |
|   288 | ტანი   | body                | 213                    | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)                       |
|   288 | იახტა  | yacht               | 60                     | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)                      |
|   288 | თიხა   | clay                | 6                      | [source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)                       |
|   289 | ნაგაზი | sheepdog            | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ნაგაზი&oldid=87732950)                     |
|   289 | გზა    | way, path, road     | 12, 176                | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)                        |
|   289 | ვაზა   | vase                | 207                    | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)                       |
|   289 | ვიზა   | visa                | 102                    | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)                       |
|   289 | ნაგავი | rubbish             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259)                     |
|   290 | ნაღები | cream               | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ნაღები&oldid=84096713)                     |
|   290 | ნება   | will                | 92                     | [source](https://en.wiktionary.org/w/index.php?title=ნება&oldid=84096905)                       |
|   290 | ცნება  | concept             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)                      |
|   290 | ბინა   | apartment           | 85, 188                | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)                       |
|   290 | ბაღი   | garden              | 85                     | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)                       |
|   291 | ტუმბო  | pump                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)                      |
|   291 | ბუკი   | trumpet             | 155                    | [source](https://en.wiktionary.org/w/index.php?title=ბუკი&oldid=88002801)                       |
|   291 | ბუტკო  | pistil              | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)                      |
|   291 | კიბო   | barnacle; cancer    | 203                    | [source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)                       |
|   291 | ტომი   | tribe; volume       | 153                    | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)                       |
|   292 | ნაღდი  | cash                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ნაღდი&oldid=84117574)                      |
|   292 | დენი   | electric current    | 199                    | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)                       |
|   292 | ღია    | open                | 60, 147                | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)                        |
|   292 | დასი   | troupe, group       | 145                    | [source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)                       |
|   292 | სადენი | electrical wire     | Previously unused      | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
|   293 | მური   | soot                | 214                    | [source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)                       |
|   293 | დროული | timely              | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=დროული&oldid=84090042)                     |
|   293 | მოდური | fashionable         | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მოდური&oldid=84088886)                     |
|   293 | ურო    | hammer              | 15, 103                | [source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)                        |
|   293 | რომი   | rum                 | 132                    | [source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)                       |
|   294 | ვაჟი   | son                 | 24                     | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)                       |
|   294 | მაჩვი  | badger              | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მაჩვი&oldid=84116792)                      |
|   294 | მჟავა  | acid                | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=მჟავა&oldid=84117295)                      |
|   294 | ავი    | wicked, evil        | 19, 206                | [source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)                        |
|   294 | აჩმა   | achma cheese pastry | 39                     | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)                       |
|   295 | ავაზა  | cheetah             | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)                      |
|   295 | ზავი   | truce               | 102, 215               | [source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)                       |
|   295 | ავარია | accident            | Previously unused      | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031)                     |
|   295 | აზრი   | thought, opinion    | 43                     | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)                       |
|   295 | ავზი   | tank, sink          | 12                     | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)                       |

## All 295 boards

| Level | Stop           | Required answers                   | Previously unused answers in Spain | Wheel   | Grid | Difficulty |
| ----: | -------------- | ---------------------------------- | ---------------------------------- | ------- | ---- | ---------: |
|     1 | tbilisi        | ვადა, ყავა, ყდა, დავა, ავად        | —                                  | ყავდა   | 7×5  |         42 |
|     2 | tbilisi        | კერა, კეფა, ფრე, ერა, კაფე         | —                                  | ერკფა   | 6×4  |         40 |
|     3 | tbilisi        | შალი, ვილა, შავი, ვაშლი, ვალი      | —                                  | ვლიაშ   | 7×5  |         48 |
|     4 | tbilisi        | ქირა, ქარი, ჩაი, რქა, ჩქარი        | —                                  | ჩაქრი   | 6×5  |         44 |
|     5 | tbilisi        | ობი, როლი, ბოლი, ლორი, ბროლი       | —                                  | რლბიო   | 7×5  |         46 |
|     6 | mtskheta       | თხა, ოთახი, თახვი, თოხი, თიხა      | —                                  | ოთავიხ  | 6×5  |         56 |
|     7 | mtskheta       | ჭია, კაუჭი, მუჭა, ჭკუა, კუჭი       | —                                  | აიჭკუმ  | 6×5  |         54 |
|     8 | mtskheta       | ზარი, რაზმი, ფარი, ფირმა, მზა      | —                                  | აზფრმი  | 7×5  |         56 |
|     9 | mtskheta       | ხორცი, რუხი, ცური, უცხო, ცრუ       | —                                  | ორიუხც  | 7×5  |         54 |
|    10 | mtskheta       | ქილა, ქალი, ქოლგა, გოლი, ოლქი      | —                                  | გაილოქ  | 7×4  |         56 |
|    11 | ananuri        | შუა, შუბი, ბატი, ტაბუ, ბუშტი       | —                                  | აშტუბი  | 6×5  |         54 |
|    12 | ananuri        | ვაზი, ზვავი, ავზი, გზა, გაზი       | —                                  | ზვაგვი  | 7×5  |         54 |
|    13 | ananuri        | დაფა, ფარა, ფარდა, არფა, გრაფა     | —                                  | აარდფგ  | 6×5  |         58 |
|    14 | ananuri        | ლავა, ქვა, ჰავა, ჰალვა, ქალა       | —                                  | ჰქლავა  | 7×5  |         54 |
|    15 | ananuri        | ურო, ურდო, ქუდი, ქურდი, დოქი       | —                                  | დუიქრო  | 7×5  |         54 |
|    16 | kazbegi        | ჭოკი, ჭორი, კორტი, რკო, კოჭი       | —                                  | რკტიოჭ  | 7×5  |         54 |
|    17 | kazbegi        | შტო, ცოლი, ტილო, შოლტი, ტოლი       | —                                  | ტლშიოც  | 7×5  |         54 |
|    18 | kazbegi        | ვენა, მავნე, მწვანე, ამწე, ენა     | —                                  | ვაწმენ  | 7×5  |         60 |
|    19 | kazbegi        | თოვლი, თოლია, თივა, ავი, ოვალი     | —                                  | თიოვლა  | 7×5  |         58 |
|    20 | kazbegi        | ასო, დროშა, სოდა, შორს, დრო        | —                                  | რსოდაშ  | 7×5  |         52 |
|    21 | tusheti        | თემა, მანეთი, მინა, ნამი, თმა      | —                                  | აენმით  | 6×5  |         58 |
|    22 | tusheti        | თემი, ზეიმი, მზე, მითი, ზეთი       | —                                  | ითემზი  | 7×5  |         54 |
|    23 | tusheti        | იარა, არმია, ქამარი, ქმარი, არია   | —                                  | აირაქმ  | 7×5  |         64 |
|    24 | tusheti        | ვაჟი, კავი, კვირა, კაჟი, კრავი     | —                                  | კიჟვრა  | 6×5  |         58 |
|    25 | tusheti        | ლომი, მოდული, უმი, დოლი, ლოდი      | —                                  | ოლუიდმ  | 7×5  |         58 |
|    26 | sighnaghi      | ლობიო, ობოლი, ოქრო, ქორი, ლოქო     | —                                  | ქლოროიბ | 6×5  |         66 |
|    27 | sighnaghi      | რისკი, რეისი, კისერი, კირი, ჩეკი   | —                                  | იკჩისერ | 7×5  |         72 |
|    28 | sighnaghi      | ნერგი, ნაკერი, გენი, აკნე, რკინა   | —                                  | ნკიაეგრ | 7×5  |         72 |
|    29 | sighnaghi      | ქუჩა, ტაქსი, ჩუსტი, ქისა, ტუჩი     | —                                  | ქუიტსაჩ | 7×5  |         66 |
|    30 | sighnaghi      | ანემია, მენჯი, ჯამი, მიჯნა, ჯანი   | —                                  | ნიამეაჯ | 6×5  |         72 |
|    31 | david-gareja   | ყბა, აბი, საბანი, ყანა, ყასაბი     | —                                  | ყანბაის | 6×5  |         68 |
|    32 | david-gareja   | საშიში, შაში, შიში, შოშია, სია     | —                                  | ასშშოიი | 6×5  |         68 |
|    33 | david-gareja   | უნარი, გუდა, ურნა, ნარდი, გუნდი    | —                                  | გადურინ | 7×5  |         68 |
|    34 | david-gareja   | ტრიო, პორტი, სორო, პოსტი, სოიო     | —                                  | ტსპოირო | 7×5  |         66 |
|    35 | david-gareja   | ღვედი, დევი, ველი, ღელე, ლეღვი     | —                                  | ღლვედიე | 7×5  |         66 |
|    36 | uplistsikhe    | ტანგო, ტბა, ტონა, ბატონი, გობი     | —                                  | ბტგიანო | 6×5  |         68 |
|    37 | uplistsikhe    | უვიცი, ფიცი, ფუჭი, ფიჭვი, ცივი     | —                                  | უვიცჭფი | 7×5  |         66 |
|    38 | uplistsikhe    | ფერმა, ფორმა, ალოე, მოლარე, მალე   | —                                  | მეოარფლ | 7×5  |         72 |
|    39 | uplistsikhe    | ასთმა, თასმა, მასა, ჩანთა, აჩმა    | —                                  | აასმჩთნ | 7×5  |         68 |
|    40 | uplistsikhe    | ნაზი, მიზანი, ზმნა, ზიანი, ჰიმნი   | —                                  | ნჰაიიზმ | 7×5  |         72 |
|    41 | borjomi        | მელა, ეტაპი, მეტალი, ტემპი, ალი    | —                                  | ლიატპემ | 6×5  |         70 |
|    42 | borjomi        | ბალი, ბალთა, ბაფთა, თაფლი, ალფა    | —                                  | ალთაბფი | 7×5  |         68 |
|    43 | borjomi        | ფაზა, აზრი, ფრაზა, ბაზარი, ბზარი   | —                                  | აფბიარზ | 7×5  |         72 |
|    44 | borjomi        | ომი, ალბომი, ზომბი, ზოლი, ზომა     | —                                  | ლზიმობა | 6×5  |         68 |
|    45 | borjomi        | პროზა, უაზრო, ეზო, პოზა, ოპერა     | —                                  | ოეპაზურ | 7×5  |         66 |
|    46 | vardzia        | ტიტრი, ვირი, კრივი, კვირტი, კივი   | —                                  | ვტირკიტ | 7×5  |         72 |
|    47 | vardzia        | გმირი, რიგი, რინგი, წიგნი, მწირი   | —                                  | წმრგიინ | 7×5  |         70 |
|    48 | vardzia        | მტერი, მეტრი, მტრედი, დიეტა, იდეა  | —                                  | რიდატმე | 7×5  |         74 |
|    49 | vardzia        | ლარი, რძალი, ძილი, ძელი, ძლიერი    | —                                  | რიალიეძ | 7×5  |         70 |
|    50 | vardzia        | ფილტრი, ფირი, ლირა, ტარიფი, ლიტრი  | —                                  | იტაფლირ | 6×5  |         74 |
|    51 | katskhi        | ცელი, მცირე, კრემი, ერი, ცრემლი    | —                                  | მლცკიერ | 6×5  |         70 |
|    52 | katskhi        | ლუდი, ბუდე, უბე, იუბილე, დუელი     | —                                  | იდიუებლ | 6×5  |         68 |
|    53 | katskhi        | ფაფა, რაფა, ფაფარი, ჯარი, იჯარა    | —                                  | არაჯიფფ | 6×5  |         70 |
|    54 | katskhi        | ოფლი, ვოლტი, ფეტვი, ელფი, ვეტო     | —                                  | ოტვეილფ | 7×5  |         66 |
|    55 | katskhi        | ბაბუა, ბამბა, ბზა, მუზა, ბაზა      | —                                  | უბზმბაა | 6×5  |         64 |
|    56 | racha          | ლუწი, ლინზა, აუზი, ანწლი, ნალი     | —                                  | ზანუწლი | 7×5  |         66 |
|    57 | racha          | მუხტი, მუშტი, მუშა, აუტი, შხამი    | —                                  | უხიშტმა | 7×5  |         68 |
|    58 | racha          | ამპერი, მერია, რეპი, პაპი, პრემია  | —                                  | მაპრიპე | 7×5  |         74 |
|    59 | racha          | ძველი, ძნელი, ნელი, სიძე, ნესვი    | —                                  | ძიევნლს | 7×5  |         68 |
|    60 | racha          | ღია, იახტა, ხალი, ტალღა, ტალახი    | —                                  | ღტხლააი | 7×5  |         70 |
|    61 | kutaisi-gelati | ხატი, ხროვა, ავტორი, ხარი, ტარი    | —                                  | ვხტოირა | 7×5  |         70 |
|    62 | kutaisi-gelati | ფერი, ფუნტი, ტური, ფენი, ტურნე     | —                                  | ეურტინფ | 7×5  |         66 |
|    63 | kutaisi-gelati | მალა, მალამო, მამა, კოალა, კომა    | —                                  | აომლკმა | 6×5  |         70 |
|    64 | kutaisi-gelati | ნაშთი, ნიშა, ქონი, ქოთანი, შნო     | —                                  | შიანქოთ | 7×5  |         68 |
|    65 | kutaisi-gelati | ზუსტი, ტუზი, სიო, სუსტი, სოუსი     | —                                  | სზუსტოი | 6×5  |         66 |
|    66 | svaneti        | პიურე, ტყუპი, ყურე, ყური, რიყე     | —                                  | უიტრყეპ | 7×5  |         66 |
|    67 | svaneti        | ნეფე, კონა, ოკეანე, ფენა, კანოე    | —                                  | ფაკეონე | 6×5  |         70 |
|    68 | svaneti        | ლაგამი, ლამა, მაგია, ლიგა, მამალი  | —                                  | ილმმაგა | 7×5  |         74 |
|    69 | svaneti        | ბელი, ბნელი, კენჭი, კიბე, ბეჭი     | —                                  | ნელკჭბი | 7×5  |         66 |
|    70 | svaneti        | ჯოგი, ჯორი, გვარი, იოგა, გროვა     | —                                  | იგოარჯვ | 6×5  |         66 |
|    71 | martvili       | გამძლე, მგელი, ძეგლი, ძმა, გემი    | —                                  | მგლიძაე | 7×5  |         70 |
|    72 | martvili       | წავი, მწვადი, მთა, დათვი, წვიმა    | —                                  | დაიმწთვ | 7×5  |         70 |
|    73 | martvili       | რაგბი, ბაგე, გერბი, ბასრი, ბგერა   | —                                  | სრეგაიბ | 7×5  |         70 |
|    74 | martvili       | დედა, დეიდა, დიდი, დიადი, ქედი     | —                                  | ქაიიდედ | 7×5  |         66 |
|    75 | martvili       | ოქმი, მისია, სიმი, ქიმია, მაისი    | —                                  | ამიქიოს | 7×5  |         68 |
|    76 | zugdidi        | ძროხა, თარო, ფხა, ფართო, ფრთა      | —                                  | თოძარხფ | 7×4  |         64 |
|    77 | zugdidi        | ბიძა, მძაფრი, ძაბრი, ძაფი, ბრმა    | —                                  | ფბრმძაი | 7×5  |         70 |
|    78 | zugdidi        | კამა, კალია, ლამპა, პალმა, კალამი  | —                                  | აილამკპ | 7×5  |         74 |
|    79 | zugdidi        | ჯგუფი, აგური, რუჯი, ფიგურა, უჯრა   | —                                  | რუფგაჯი | 7×5  |         72 |
|    80 | zugdidi        | ბოთლი, ბოსელი, ობი, თესლი, სითბო   | —                                  | ითოლესბ | 7×5  |         72 |
|    81 | makhuntseti    | შვილი, ჩვილი, ელჩი, შველი, ეშვი    | —                                  | ჩვლშეიი | 7×5  |         68 |
|    82 | makhuntseti    | კოდი, ოფისი, ფისი, დისკი, დისკო    | —                                  | კდფსიიო | 7×5  |         68 |
|    83 | makhuntseti    | მარკა, მწარე, წრე, კამერა, კერა    | —                                  | ეამარკწ | 7×5  |         70 |
|    84 | makhuntseti    | ნუკრი, კუნძი, უკან, ძუა, აკრი      | —                                  | ნუიძაკრ | 7×5  |         64 |
|    85 | makhuntseti    | ბანი, ბაღი, ნიღაბი, ბინა, უბანი    | —                                  | უიანიღბ | 6×5  |         70 |
|    86 | batumi         | ყრუ, წყარო, აწმყო, მუყაო, მურა     | —                                  | აყრუმოწ | 7×5  |         66 |
|    87 | batumi         | ექიმი, ირემი, ტირე, ქერი, რიტმი    | —                                  | ქეტრიმი | 7×5  |         68 |
|    88 | batumi         | იღბალი, ღილი, წაბლი, წილი, იღლია   | —                                  | ალბწიღი | 6×5  |         72 |
|    89 | batumi         | უხეში, შრე, ხრეში, კეხი, კრუხი     | —                                  | იხკრეუშ | 6×5  |         66 |
|    90 | batumi         | მხეცი, ცომი, ცხელი, ხმელი, ციხე    | —                                  | ლიეოხმც | 7×5  |         68 |
|    91 | tao-klarjeti   | ფილე, წელი, წესი, სველი, ფესვი     | —                                  | სიწვეფლ | 7×5  |         66 |
|    92 | tao-klarjeti   | წონა, ბანქო, წებო, ქონება, ნება    | —                                  | წქნეაობ | 7×5  |         70 |
|    93 | tao-klarjeti   | დაბლა, ყალბი, ყდა, დაბა, დაბალი    | —                                  | ყაიდლაბ | 7×5  |         70 |
|    94 | tao-klarjeti   | ხიბლი, ხილი, ბმული, მუხლი, მილი    | —                                  | ლუიხიმბ | 7×5  |         68 |
|    95 | tao-klarjeti   | ხბო, ხეობა, საბჭო, ხაჭო, სახე      | —                                  | ოხასჭებ | 7×5  |         64 |
|    96 | sumela         | გორა, გარემო, გოგრა, გეგმა, გემო   | —                                  | რეგაგომ | 7×5  |         72 |
|    97 | sumela         | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი    | —                                  | ივაყტეს | 7×5  |         70 |
|    98 | sumela         | მანია, მადა, მინა, ნადიმი, ამინდი  | —                                  | აიანდიმ | 7×5  |         74 |
|    99 | sumela         | ეკალი, ვაკე, ჭავლი, ეჭვი, ელვა     | —                                  | ლივაჭეკ | 7×5  |         66 |
|   100 | sumela         | კალთა, კალა, კათხა, თავლა, ხვალ    | —                                  | ლახვთკა | 7×5  |         68 |
|   101 | cappadocia     | ქურა, ასლი, სრული, ქულა, ქუსლი     | —                                  | ლქსაიურ | 6×5  |         66 |
|   102 | cappadocia     | ზღვარი, ჩვარი, ვიზა, ზღვა, ზავი    | —                                  | ჩზავრიღ | 6×5  |         70 |
|   103 | cappadocia     | კურსი, რკო, უფროსი, ურო, ფოკუსი    | —                                  | უორსიფკ | 7×5  |         70 |
|   104 | cappadocia     | სხივი, საიტი, ტივი, ხავსი, იხვი    | —                                  | აივხისტ | 6×5  |         68 |
|   105 | cappadocia     | ტაბლო, ტაში, შტაბი, შობა, შტო      | —                                  | ოიტლშაბ | 7×5  |         64 |
|   106 | pamukkale      | სპა, მაუსი, უმი, პუმა, პასუხი      | —                                  | იპასმუხ | 7×5  |         66 |
|   107 | pamukkale      | დარგი, ადრე, ერთად, გერი, გარეთ    | —                                  | თგერდაი | 6×5  |         68 |
|   108 | pamukkale      | ნიორი, რაიონი, ფარი, ფრანი, ოინი   | —                                  | იორნიფა | 6×5  |         72 |
|   109 | pamukkale      | ოდა, ზონა, სანდო, დოზა, უზადო      | —                                  | ასნდზუო | 6×5  |         64 |
|   110 | pamukkale      | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     | —                                  | იექაჭჯვ | 7×5  |         66 |
|   111 | ephesus        | ბიჭი, კანჭი, ნიჭი, აბი, ბანკი      | —                                  | კიჭბანი | 7×5  |         64 |
|   112 | ephesus        | ჭვავი, ჭია, სვავი, ფიჭა, ფასი      | —                                  | ვჭფივსა | 7×5  |         64 |
|   113 | ephesus        | თუთია, ბასი, საბუთი, თუთა, თათი    | —                                  | ბსთაუით | 7×5  |         70 |
|   114 | ephesus        | კოპი, პოეტი, ეტლი, კლიტე, კეტი     | —                                  | ლიოეპტკ | 7×5  |         66 |
|   115 | ephesus        | ნული, კუნთი, კლოუნი, კინო, უთო     | —                                  | ნითლკოუ | 7×5  |         68 |
|   116 | istanbul       | პულსი, პლუსი, სპილო, ყლუპი, ოსპი   | —                                  | სიპყულო | 7×5  |         70 |
|   117 | istanbul       | მჭადი, მედია, ღამე, ჭაღი, დღე      | —                                  | იღდჭაემ | 7×5  |         64 |
|   118 | istanbul       | რუკა, ტურა, კარატი, კატა, კარტი    | —                                  | უიაარკტ | 6×5  |         70 |
|   119 | istanbul       | დაფნა, პანდა, პაპა, დანა, დაფა     | —                                  | ნფპადპა | 7×5  |         66 |
|   120 | istanbul       | თეორია, თეძო, რძე, ძია, თერძი      | —                                  | იოთეძარ | 7×5  |         66 |
|   121 | plovdiv        | სურათი, სარი, სუფთა, სუფრა, არსი   | —                                  | ისრუაფთ | 6×5  |         72 |
|   122 | plovdiv        | პლატო, ტოლმა, ლომი, პალტო, მატლი   | —                                  | ტლაიომპ | 7×5  |         70 |
|   123 | plovdiv        | მალე, მედალი, დილა, იმედი, დილემა  | —                                  | მეადიილ | 6×5  |         74 |
|   124 | plovdiv        | მამრი, მყარი, ამაყი, იარა, არაყი   | —                                  | არაყმიმ | 7×5  |         70 |
|   125 | plovdiv        | ასო, კლასი, სკოლა, სილა, სოკო      | —                                  | ოკოლსაი | 7×5  |         64 |
|   126 | petritsoni     | ტრიო, ღერო, ღომი, მეტრი, მეტრო     | —                                  | მოიტრღე | 7×5  |         66 |
|   127 | petritsoni     | ქურქი, ქერქი, შური, შუქი, ერი      | —                                  | ურეშქიქ | 7×5  |         64 |
|   128 | petritsoni     | პარკი, კარი, პარიკი, ჩიპი, პირი    | —                                  | პიიჩრაკ | 7×5  |         70 |
|   129 | petritsoni     | ჯოხი, დახლი, ჯილდო, ოჯახი, ჯადო    | —                                  | დიხალჯო | 6×5  |         68 |
|   130 | petritsoni     | ცული, რკალი, ცილა, ურიკა, ცალი     | —                                  | იკუალცრ | 7×5  |         66 |
|   131 | rila           | გველი, გლუვი, გული, ხელი, გლეხი    | —                                  | გვეუხლი | 7×5  |         68 |
|   132 | rila           | რომი, შოკი, შორი, კომში, კოშკი     | —                                  | რიკშმკო | 7×5  |         66 |
|   133 | rila           | ბორტი, ორბიტა, როკი, ტარო, კობრა   | —                                  | იბაოტკრ | 7×5  |         72 |
|   134 | rila           | ცუდი, ცრუ, ცხადი, ხურდა, არხი      | —                                  | უადცხრი | 7×5  |         64 |
|   135 | rila           | ფულადი, ფილა, ულუფა, ლუდი, ფული    | —                                  | ულფიდაუ | 6×5  |         70 |
|   136 | thessaloniki   | წუნი, ხევი, უხვი, წნეხი, წვენი     | —                                  | ნვუეწხი | 7×5  |         66 |
|   137 | thessaloniki   | ყელი, ყველი, ლეკვი, კიდე, კლდე     | —                                  | ყვდეკილ | 7×5  |         66 |
|   138 | thessaloniki   | მარტო, მორი, ტორტი, ტომატი, ტოტი   | —                                  | ტოარმიტ | 7×5  |         72 |
|   139 | thessaloniki   | ღონე, ღორი, ევრო, ნერვი, ღვინო     | —                                  | ღიევონრ | 7×5  |         66 |
|   140 | thessaloniki   | საამო, აფრა, რასა, მარაო, მასრა    | —                                  | ამაფრსო | 7×5  |         68 |
|   141 | iviron-athos   | ბავშვი, ქვა, შავი, ქვაბი, ქვიშა    | —                                  | იბვშქვა | 7×5  |         70 |
|   142 | iviron-athos   | ხიდი, კიდური, ხრიკი, რუხი, კუდი    | —                                  | იკრიხუდ | 7×5  |         70 |
|   143 | iviron-athos   | ახალი, ლაჩარი, ჩალა, ლირა, ხალიჩა  | —                                  | ხრაჩაილ | 6×5  |         74 |
|   144 | iviron-athos   | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     | —                                  | ხიაზლჯმ | 7×5  |         66 |
|   145 | iviron-athos   | ატლასი, დასი, სია, დასტა, სტადია   | —                                  | ტლასადი | 7×5  |         72 |
|   146 | meteora        | ჭირი, ჭერი, ჭრელი, ჭრილი, მჭლე     | —                                  | იმლრეჭი | 7×5  |         66 |
|   147 | meteora        | საათი, ღია, ასანთი, თაღი, თასი     | —                                  | ისაღთნა | 7×5  |         68 |
|   148 | meteora        | მაგიდა, დრამა, დარი, არმია, მარაგი | —                                  | არდგიმა | 7×5  |         76 |
|   149 | meteora        | ცოფი, ფიცი, ხორცი, ციფრი, ფიცხი    | —                                  | ცფხრიიო | 6×5  |         68 |
|   150 | meteora        | ტაიმი, ტბა, ბაიტი, მატჩი, ბატი     | —                                  | ჩიაბმიტ | 6×5  |         66 |
|   151 | volos-iolcos   | ბარი, ბურთი, წარბი, უარი, წუთი     | —                                  | რთუიწაბ | 7×5  |         66 |
|   152 | volos-iolcos   | ეპოქა, ექო, თექა, მთა, პოემა       | —                                  | თქომეპა | 7×5  |         62 |
|   153 | volos-iolcos   | ატომი, ემოცია, ცოტა, ომი, ტომი     | —                                  | ეტცმიოა | 7×5  |         68 |
|   154 | volos-iolcos   | ნოხი, ტენი, ტონი, ენოტი, ნესტო     | —                                  | სნხიეტო | 7×5  |         66 |
|   155 | volos-iolcos   | ბზიკი, ბლუზი, კლუბი, ბუკი, კუზი    | —                                  | იილკზბუ | 7×5  |         68 |
|   156 | delphi         | მანერა, ანძა, ენა, ძერა, არენა     | —                                  | მარაძნე | 6×5  |         68 |
|   157 | delphi         | ადათი, დალაქი, ქადა, ლაქა, ქალი    | —                                  | დაითქლა | 6×5  |         70 |
|   158 | delphi         | ბილეთი, ილეთი, ლეიბი, რბილი, თბილი | —                                  | რილბთეი | 7×5  |         76 |
|   159 | delphi         | გრილი, ბრალი, ბარგი, ბაგირი, რიგი  | —                                  | რლგაიბი | 7×5  |         74 |
|   160 | delphi         | კირი, კიტრი, პიკი, კუპრი, ტიპი     | —                                  | პიკტური | 7×5  |         66 |
|   161 | athens         | კაცი, კეცი, სცენა, აკნე, ანკესი    | —                                  | ნაიცესკ | 7×5  |         70 |
|   162 | athens         | ნაოჭი, უნიჭო, ჭკუა, კოჭა, კუჭი     | —                                  | ოაკჭიუნ | 7×5  |         66 |
|   163 | athens         | მკლავი, კვალი, კვამლი, თმა, ალი    | —                                  | ლკივთმა | 7×5  |         70 |
|   164 | athens         | ჭალა, არია, ჭარბი, ლარი, ბაჭია     | —                                  | ბრაჭაილ | 7×5  |         66 |
|   165 | athens         | თვალი, ძვალი, ძიძა, ვალი, თავი     | —                                  | ლთძვაძი | 6×5  |         66 |
|   166 | santorini      | ჯიში, ნიშა, ჯინსი, შანსი, ჯანი     | —                                  | ჯშნიასი | 7×5  |         66 |
|   167 | santorini      | ჯიბე, ბევრი, წვერი, ბერი, ბეწვი    | —                                  | ჯწივბრე | 7×5  |         68 |
|   168 | santorini      | მარში, მლაშე, მშრალი, შალი, მელა   | —                                  | აერმლიშ | 7×5  |         72 |
|   169 | santorini      | ნისლი, სტილი, ლენტი, ნესტი, ნელი   | —                                  | ტინსეილ | 7×5  |         70 |
|   170 | santorini      | მაჯა, აჯიკა, მსაჯი, სკამი, ასაკი   | —                                  | აიკაჯსმ | 7×5  |         70 |
|   171 | corfu          | ჩუმი, მურა, ხმაური, ჩარხი, ურჩი    | —                                  | იამხჩრუ | 6×5  |         70 |
|   172 | corfu          | სუნი, მენიუ, ნემსი, მსუყე, მუსი    | —                                  | უყენმის | 7×5  |         68 |
|   173 | corfu          | კანი, კნუტი, პიტნა, კუპატი, ტანკი  | —                                  | ნკტპიუა | 7×5  |         74 |
|   174 | corfu          | შაშვი, შაშხი, შუშა, შუა, ხაში      | —                                  | შუაშივხ | 7×5  |         64 |
|   175 | corfu          | ნორმა, ორგანო, ორმო, მანგო, მონა   | —                                  | რაონოგმ | 6×5  |         72 |
|   176 | butrint        | ზეგ, გზა, თაგვი, თევზი, გაზეთი     | —                                  | ზაგთივე | 7×5  |         68 |
|   177 | butrint        | ცხარე, ხმა, ზეცა, მხარე, მახე      | —                                  | მერაცხზ | 7×5  |         64 |
|   178 | butrint        | იოლი, ბილიკი, კბილი, ბოლი, ბლოკი   | —                                  | ბოიკილი | 7×5  |         72 |
|   179 | butrint        | სეზონი, ოზონი, სოიო, ეზო, ზნე      | —                                  | ეზონოსი | 7×5  |         66 |
|   180 | butrint        | ბადე, ზებრა, ზედა, იდეა, ბრაზი     | —                                  | ერიდაზბ | 7×5  |         66 |
|   181 | gjirokaster    | წრე, ვიწრო, წვეთი, თვე, წევრი      | —                                  | ვთრეიწო | 7×5  |         64 |
|   182 | gjirokaster    | ვირი, მძივი, ძირი, ძვირი, ძმარი    | —                                  | ძარმვიი | 7×5  |         68 |
|   183 | gjirokaster    | ფიალა, ლავაში, აფიშა, ალფა, ფლავი  | —                                  | ვიშაფალ | 7×5  |         74 |
|   184 | gjirokaster    | ფერი, ფეხი, ხერხი, ტერფი, ტირე     | —                                  | ფრხიეხტ | 7×5  |         66 |
|   185 | gjirokaster    | ნავთი, იგავი, ნავი, ნივთი, თივა    | —                                  | ნათვიიგ | 7×5  |         68 |
|   186 | berat          | მოკლე, თოკი, მთელი, კილო, კომლი    | —                                  | ლიკმოთე | 7×5  |         68 |
|   187 | berat          | ყრუ, ყუთი, ლურჯი, რუჯი, რთული      | —                                  | ირთულყჯ | 7×5  |         64 |
|   188 | berat          | ბანაკი, ბინა, კაბინა, კაბა, ნაკლი  | —                                  | ნკალაბი | 6×5  |         74 |
|   189 | berat          | ძალა, ძრავა, ლავა, ქარვა, რქა      | —                                  | ლქაძვრა | 7×5  |         64 |
|   190 | berat          | შნო, გუშინ, ნუგეში, ნუში, უშნო     | —                                  | ენოიგუშ | 7×5  |         68 |
|   191 | ohrid          | კოჭი, ბოჭკო, ბოლოკი, ბოლო, ლობიო   | —                                  | ბჭოლიკო | 7×5  |         72 |
|   192 | ohrid          | ლიფტი, ფაილი, ფილმი, იაფი, ლაიმი   | —                                  | იფმლიტა | 7×5  |         70 |
|   193 | ohrid          | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   | —                                  | თრიხაჯვ | 7×5  |         72 |
|   194 | ohrid          | ქოხი, სქესი, სესხი, სისქე, სიო     | —                                  | ხსესიოქ | 7×5  |         66 |
|   195 | ohrid          | ციყვი, კვიცი, ციკლი, კივი, ცვილი   | —                                  | ვყილკიც | 7×5  |         70 |
|   196 | kotor          | ქერა, ღამე, ღრმა, საქმე, სქემა     | —                                  | სამღექრ | 7×5  |         66 |
|   197 | kotor          | თონე, ფენი, ფონდი, დენთი, დონე     | —                                  | ეფთიდნო | 7×5  |         66 |
|   198 | kotor          | იოგა, დოგმა, მოდა, ზოგადი, ზომა    | —                                  | დმგოაზი | 6×5  |         70 |
|   199 | kotor          | ციხე, ცხენი, ხედი, დენი, სიცხე     | —                                  | სიხედცნ | 6×5  |         66 |
|   200 | kotor          | ბურღი, ბუზი, ზღარბი, ბზა, ღუზა     | —                                  | ზრიუაღბ | 6×5  |         68 |
|   201 | dubrovnik      | შრე, ერა, შვრია, ვეშაპი, პეშვი     | —                                  | ევრაიშპ | 6×5  |         68 |
|   202 | dubrovnik      | ალყა, კალა, კოალა, ლოყა, კაკაო     | —                                  | ალაყკოკ | 7×5  |         66 |
|   203 | dubrovnik      | ჰობი, ჰოკეი, ბეკონი, კიბო, კიბე    | —                                  | ჰიბენკო | 6×5  |         70 |
|   204 | dubrovnik      | მუხა, მხარი, ხურმა, ხარი, ხუფი     | —                                  | ფმაირხუ | 7×5  |         66 |
|   205 | dubrovnik      | პრიზი, პირი, ზურგი, გრიპი, პური    | —                                  | რუგიიზპ | 7×5  |         68 |
|   206 | split          | ავი, ვერსია, სარი, სავსე, სესია    | —                                  | სიარვსე | 7×5  |         70 |
|   207 | split          | ავად, ვაზა, სადავე, სევდა, დავა    | —                                  | ავასეზდ | 6×5  |         70 |
|   208 | split          | ფოთოლი, ფოტო, თოფი, ფლოტი, ტოლი    | —                                  | ფიოტთლო | 7×5  |         70 |
|   209 | split          | ბინდი, გედი, გიდი, ბედი, ბენდი     | —                                  | დბიგიენ | 7×5  |         66 |
|   210 | split          | კერძი, კერძო, რძე, ერბო, ბოძი      | —                                  | ობიძერკ | 7×5  |         64 |
|   211 | plitvice       | ფლეიტა, ელიტა, ფილე, ელფი, ტაფა    | —                                  | ფტიეალა | 7×5  |         70 |
|   212 | plitvice       | ტივი, ტყავი, ყინვა, ნიავი, ტვინი   | —                                  | ნტვაიიყ | 7×5  |         70 |
|   213 | plitvice       | წმინდა, მიწა, წინდა, ტანი, წამი    | —                                  | ტწამიდნ | 6×5  |         70 |
|   214 | plitvice       | ღმერთი, ღრუ, თემი, ურემი, მური     | —                                  | მღერუით | 6×5  |         68 |
|   215 | plitvice       | ზავი, ვაზი, კვოტა, კოვზი, აზოტი    | —                                  | იზატოვკ | 7×5  |         68 |
|   216 | venice         | ვალსი, ქვა, ქვისლი, ქლიავი, სილა   | —                                  | ივალქის | 7×5  |         72 |
|   217 | venice         | ქაფი, ფაქტი, ქოსა, ქაოსი, ფოსტა    | —                                  | იაოქფსტ | 7×5  |         68 |
|   218 | venice         | პიცა, რეპი, საცერი, სერია, პრესა   | —                                  | აიესცრპ | 6×5  |         72 |
|   219 | venice         | სქელი, ქსელი, ლექსი, სული, მუქი    | —                                  | ქლეისმუ | 7×5  |         68 |
|   220 | venice         | მოდელი, პლედი, ლოდი, მდელო, ლომი   | —                                  | პიდემლო | 6×5  |         72 |
|   221 | florence       | ერი, მეფე, მწიფე, მწერი, ფრე       | —                                  | ფიმრეწე | 7×5  |         62 |
|   222 | florence       | უმი, მუდამ, ჩუმად, ჩაი, მუმია      | —                                  | დმმჩაუი | 7×5  |         64 |
|   223 | florence       | ხალხი, სახლი, მსხალი, ასლი, ხამი   | —                                  | ისამლხხ | 7×5  |         72 |
|   224 | florence       | ფისი, ფონი, ფსონი, ოინი, სინჯი     | —                                  | ჯისოფინ | 6×5  |         66 |
|   225 | florence       | ღარი, ღიპი, ღირსი, ისარი, საღი     | —                                  | ღარპსიი | 7×5  |         66 |
|   226 | rome           | გოჭი, საჭირო, ასო, გორა, გარსი     | —                                  | გოარისჭ | 6×5  |         68 |
|   227 | rome           | ძმა, ალღო, ლაღი, ძაღლი, მძღოლი     | —                                  | ძამლიღო | 7×5  |         68 |
|   228 | rome           | სარკე, ტარი, კასრი, კეტი, საკეტი   | —                                  | იტსეკრა | 7×5  |         72 |
|   229 | rome           | გული, გალია, ლიგა, ლულა, ალალი     | —                                  | აგიაულლ | 7×5  |         66 |
|   230 | rome           | ჟანრი, რანგი, ბარი, ჟანგი, ბირჟა   | —                                  | რგაბნიჟ | 7×5  |         70 |
|   231 | amalfi         | გოლი, ოფლი, რგოლი, გოლფი, ფლორა    | —                                  | რფლოაიგ | 7×5  |         68 |
|   232 | amalfi         | მერი, მყესი, სიღრმე, რიყე, ღერი    | —                                  | რმღსიყე | 7×5  |         70 |
|   233 | amalfi         | გრამი, გიტარა, იარა, მაგარი, ატამი | —                                  | აგმარიტ | 7×5  |         76 |
|   234 | amalfi         | რადიო, როიალი, დოლარი, ოდა, იოდი   | —                                  | რდლოაიი | 7×5  |         72 |
|   235 | amalfi         | თხილი, სითხე, ხილი, თესლი, თხელი   | —                                  | ლხეიითს | 7×5  |         70 |
|   236 | taormina       | ძია, ჰანგი, განძი, ნაძვი, გვიან    | —                                  | ჰვაგნიძ | 7×5  |         68 |
|   237 | taormina       | ტახტი, შტატი, შხაპი, ხატი, ტიტა    | —                                  | პტშტიხა | 7×5  |         68 |
|   238 | taormina       | ორდენი, დრონი, დრო, დეპო, პონი     | —                                  | ონრიედპ | 6×5  |         68 |
|   239 | taormina       | კუბი, ბიურო, კუბო, კობრი, ბრბო     | —                                  | კუბობირ | 7×5  |         66 |
|   240 | taormina       | ჩიხი, ჩხირი, ხისტი, ჩირი, ჩიტი     | —                                  | სხტირჩი | 6×5  |         66 |
|   241 | valletta       | ობი, აბი, ბანანი, აბანო, ანბანი    | —                                  | ნობაიან | 7×5  |         70 |
|   242 | valletta       | ცხვირი, ცხიმი, რიცხვი, ცივი, იხვი  | —                                  | რვმიიხც | 7×5  |         74 |
|   243 | valletta       | კარავი, ვადა, ავდარი, ვარდი, კრავი | —                                  | რაკდავი | 7×5  |         76 |
|   244 | valletta       | დარაჯი, ბარდა, აბჯარი, არია, დაბა  | —                                  | ირადჯბა | 7×5  |         74 |
|   245 | valletta       | რაინდი, ყადრი, ნადირი, ყდა, დარი   | —                                  | ყიიდრნა | 7×5  |         72 |
|   246 | mdina          | სახელი, სია, სიახლე, ალი, საბელი   | —                                  | საეხიბლ | 7×5  |         72 |
|   247 | mdina          | ტენი, ნესტი, ტესტი, ტენტი, ჟესტი   | —                                  | იჟსენტტ | 7×5  |         70 |
|   248 | mdina          | მჟავე, ვენა, წნევა, მწვანე, ამწე   | —                                  | ნავმწჟე | 6×5  |         72 |
|   249 | mdina          | ურდო, ლორი, ორსული, როლი, სურდო    | —                                  | ლრიდოსუ | 7×5  |         70 |
|   250 | mdina          | მზა, ზარალი, მალა, ლამაზი, ზარი    | —                                  | იალარმზ | 7×5  |         70 |
|   251 | carthage       | საუნა, მუსი, ნამუსი, მასა, ნამი    | —                                  | აამსუინ | 7×5  |         70 |
|   252 | carthage       | ღვედი, ვიდეო, დღე, დევი, ღობე      | —                                  | ოიდბევღ | 6×5  |         64 |
|   253 | carthage       | ნაჭერი, რკინა, ეკრანი, ჭერი, კარი  | —                                  | აიკენრჭ | 7×5  |         74 |
|   254 | carthage       | წყალი, ანწლი, ნალი, ნაწილი, წილი   | —                                  | ნიიწლაყ | 7×5  |         72 |
|   255 | carthage       | კლიპი, ტიპი, პილოტი, ტილო, კოპი    | —                                  | პოკილტი | 6×5  |         70 |
|   256 | sidi-bou-said  | კვირა, ცირკი, კვარცი, აკრი, კავი   | —                                  | აივრციკ | 7×5  |         72 |
|   257 | sidi-bou-said  | შუბი, კლუბი, კლიშე, ბელი, შუბლი    | —                                  | ებლუშკი | 7×5  |         68 |
|   258 | sidi-bou-said  | ბადე, ბალეტი, დიეტა, დეტალი, დილა  | —                                  | ედლიბტა | 7×5  |         74 |
|   259 | sidi-bou-said  | ქანჩი, უბანი, ბუჩქი, ბანი, ქუჩა    | —                                  | აქიბუჩნ | 7×5  |         68 |
|   260 | sidi-bou-said  | უბე, ბაგე, ბგერა, ბეღურა, გუბე     | —                                  | ბერგაუღ | 7×5  |         68 |
|   261 | el-jem         | თითი, თათი, თუთია, თუთა, სათუთი    | —                                  | ასთიუით | 7×5  |         70 |
|   262 | el-jem         | ნეკნი, კანოე, კანონი, კინო, კონა   | —                                  | კნნეაოი | 7×5  |         72 |
|   263 | el-jem         | რაკეტა, ფარა, აფრა, კეფა, კარატე   | —                                  | ატაერფკ | 7×5  |         72 |
|   264 | el-jem         | ჭაობი, ცალი, ცილა, ბიცოლა, ბალი    | —                                  | ცბლჭიოა | 6×5  |         70 |
|   265 | el-jem         | ქილა, აქცია, ლაქა, ქალა, ქალაქი    | —                                  | იცქლაქა | 7×5  |         70 |
|   266 | barcelona      | კლონი, კლანჭი, ჭოკი, ნაკლი, კილო   | კლონი, კლანჭი                      | კალჭოინ | 7×5  |         72 |
|   267 | barcelona      | ბორტი, ბოროტი, რობოტი, ორბიტა, ტბა | ბოროტი, რობოტი                     | ოროაიტბ | 7×5  |         76 |
|   268 | barcelona      | ქარი, არმია, ქათამი, ქრთამი, ქმარი | ქათამი, ქრთამი                     | აიმაქთრ | 7×5  |         76 |
|   269 | barcelona      | ლიმონი, იოლი, მწნილი, ომი, მილი    | ლიმონი, მწნილი                     | წმიოლინ | 6×5  |         70 |
|   270 | barcelona      | თამამი, კამა, მთა, კამათი, მამა    | თამამი, კამათი                     | ათამმკი | 7×5  |         70 |
|   271 | valencia       | თექა, ექთანი, რქა, ქერა, ნაერთი    | ექთანი, ნაერთი                     | არქნიეთ | 7×5  |         70 |
|   272 | valencia       | პარტია, არსი, რასა, პასტა, სპა     | პარტია, პასტა                      | ტპსაარი | 7×5  |         68 |
|   273 | valencia       | მაჯა, მარანი, ჯარიმა, მანია, მინა  | მარანი, ჯარიმა                     | იაარნჯმ | 6×5  |         74 |
|   274 | valencia       | ხურდა, რაუნდი, რუხი, უარი, ხუნდი   | რაუნდი, ხუნდი                      | ინახდურ | 7×5  |         72 |
|   275 | valencia       | აკნე, კენკრა, ურნა, კურკა, რუკა    | კენკრა, კურკა                      | კკუენრა | 7×5  |         70 |
|   276 | madrid         | ჰერცი, ერა, უეცარი, ცრუ, ჰაერი     | ჰერცი, უეცარი, ჰაერი               | ეცირაჰუ | 6×5  |         68 |
|   277 | madrid         | ზიანი, მზიანი, მთიანი, ნაზი, თმა   | მზიანი, მთიანი                     | თიმიზნა | 7×5  |         72 |
|   278 | madrid         | მონა, მაწონი, ნორმა, რომანი, მორი  | მაწონი, რომანი                     | წოიამრნ | 7×5  |         74 |
|   279 | madrid         | სფერო, ფერი, რეისი, ფირი, სიროფი   | სფერო, სიროფი                      | სრეოიფი | 6×5  |         72 |
|   280 | madrid         | სწორი, პორტი, სპორტი, ოსპი, სიო    | სწორი, სპორტი                      | იტრწპოს | 7×5  |         70 |
|   281 | granada        | ყაბაყი, ყბა, ბაყაყი, ჭია, ბაჭია    | ყაბაყი, ბაყაყი                     | ყაჭბიაყ | 7×5  |         70 |
|   282 | granada        | რკალი, გორაკი, რკო, როკი, ლოგიკა   | გორაკი, ლოგიკა                     | რლგიკაო | 7×5  |         72 |
|   283 | granada        | გენი, ვეგანი, ენა, ნესვი, სიგანე   | ვეგანი, სიგანე                     | სნეგვია | 7×5  |         72 |
|   284 | granada        | ხარი, ცხვარი, მარცხი, არხი, ხმა    | ცხვარი, მარცხი                     | აცმვრხი | 7×5  |         70 |
|   285 | granada        | გერი, ცენტრი, ნერგი, ცენტი, ტირე   | ცენტრი, ცენტი                      | რტეცგნი | 7×5  |         72 |
|   286 | cordoba        | ძველი, ძეხვი, ხვრელი, რძე, ველი    | ძეხვი, ხვრელი                      | რეხილძვ | 7×5  |         70 |
|   287 | cordoba        | ნიავი, დივანი, ნავი, შინდი, ნიშა   | დივანი, შინდი                      | აიიდშვნ | 7×5  |         72 |
|   288 | cordoba        | ნახატი, თანხა, ტანი, იახტა, თიხა   | ნახატი, თანხა                      | ტნხიაათ | 6×5  |         72 |
|   289 | cordoba        | ნაგაზი, გზა, ვაზა, ვიზა, ნაგავი    | ნაგაზი, ნაგავი                     | ვზიაანგ | 7×5  |         70 |
|   290 | cordoba        | ნაღები, ნება, ცნება, ბინა, ბაღი    | ნაღები, ცნება                      | ებნღცაი | 7×5  |         70 |
|   291 | seville        | ტუმბო, ბუკი, ბუტკო, კიბო, ტომი     | ტუმბო, ბუტკო                       | ოიბკმტუ | 7×5  |         66 |
|   292 | seville        | ნაღდი, დენი, ღია, დასი, სადენი     | ნაღდი, სადენი                      | ნიდეასღ | 7×5  |         68 |
|   293 | seville        | მური, დროული, მოდური, ურო, რომი    | დროული, მოდური                     | დმლრუიო | 7×5  |         70 |
|   294 | seville        | ვაჟი, მაჩვი, მჟავა, ავი, აჩმა      | მაჩვი, მჟავა                       | მვჩააჟი | 7×5  |         64 |
|   295 | seville        | ავაზა, ზავი, ავარია, აზრი, ავზი    | ავაზა, ავარია                      | ვაიაზარ | 7×5  |         70 |

## Remaining unused approved words (382)

| Word   | Meaning                      | Source                                                                                          |
| ------ | ---------------------------- | ----------------------------------------------------------------------------------------------- |
| აბზაცი | paragraph                    | [source](https://en.wiktionary.org/w/index.php?title=აბზაცი&oldid=91914485)                     |
| აგენტი | agent                        | [source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114)                     |
| ადგილი | place                        | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114)                     |
| ადვილი | easy                         | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563)                     |
| აივანი | balcony                      | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190)                     |
| აკვანი | cradle                       | [source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814)                     |
| ალიონი | dawn                         | [source](https://en.wiktionary.org/w/index.php?title=ალიონი&oldid=84112474)                     |
| ალმასი | diamond                      | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482)                     |
| ამბავი | story, news                  | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516)                     |
| ანდაზა | proverb                      | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575)                     |
| ანკეტა | questionnaire                | [source](https://en.wiktionary.org/w/index.php?title=ანკეტა&oldid=84112645)                     |
| ანონსი | announcement                 | [source](https://en.wiktionary.org/w/index.php?title=ანონსი&oldid=84097349)                     |
| არსება | creature; being              | [source](https://en.wiktionary.org/w/index.php?title=არსება&oldid=88400654)                     |
| არქივი | archive                      | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427)                     |
| არწივი | eagle                        | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068)                     |
| ასკილი | dog rose                     | [source](https://en.wiktionary.org/w/index.php?title=ასკილი&oldid=88091340)                     |
| აფთარი | hyena                        | [source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116)                     |
| აქლემი | camel                        | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908)                     |
| აღვირი | bridle                       | [source](https://en.wiktionary.org/w/index.php?title=აღვირი&oldid=92127736)                     |
| აღლუმი | parade                       | [source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A6%E1%83%9A%E1%83%A3%E1%83%9B%E1%83%98) |
| ბადაგი | grape syrup                  | [source](https://en.wiktionary.org/w/index.php?title=ბადაგი&oldid=92290638)                     |
| ბალახი | grass                        | [source](https://en.wiktionary.org/w/index.php?title=ბალახი&oldid=85585178)                     |
| ბალიში | pillow, cushion              | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170)                     |
| ბანერი | advertising banner           | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%9C%E1%83%94%E1%83%A0%E1%83%98) |
| ბარათი | card; letter                 | [source](https://en.wiktionary.org/w/index.php?title=ბარათი&oldid=85067525)                     |
| ბარტყი | chick                        | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362)                     |
| ბაქანი | platform                     | [source](https://en.wiktionary.org/w/index.php?title=ბაქანი&oldid=84113388)                     |
| ბაღჩა  | small garden                 | [source](https://en.wiktionary.org/w/index.php?title=ბაღჩა&oldid=84915794)                      |
| ბაწარი | string, cord                 | [source](https://en.wiktionary.org/w/index.php?title=ბაწარი&oldid=92228016)                     |
| ბებია  | grandmother, grannie, granny | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)                      |
| ბერეტი | beret                        | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646)                     |
| ბეტონი | concrete                     | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651)                     |
| ბეღელი | granary                      | [source](https://en.wiktionary.org/w/index.php?title=ბეღელი&oldid=84113473)                     |
| ბეჭედი | ring                         | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424)                     |
| ბირთვი | core                         | [source](https://en.wiktionary.org/w/index.php?title=ბირთვი&oldid=84113525)                     |
| ბიძგი  | push                         | [source](https://en.wiktionary.org/w/index.php?title=ბიძგი&oldid=84097695)                      |
| ბოლქვი | bulb                         | [source](https://en.wiktionary.org/w/index.php?title=ბოლქვი&oldid=84097704)                     |
| ბომბი  | bomb                         | [source](https://en.wiktionary.org/w/index.php?title=ბომბი&oldid=84097706)                      |
| ბონუსი | bonus reward                 | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%9C%E1%83%A3%E1%83%A1%E1%83%98) |
| ბორანი | ferry                        | [source](https://en.wiktionary.org/w/index.php?title=ბორანი&oldid=84097707)                     |
| ბორცვი | hillock                      | [source](https://en.wiktionary.org/w/index.php?title=ბორცვი&oldid=84097714)                     |
| ბრენდი | brand                        | [source](https://en.wiktionary.org/w/index.php?title=ბრენდი&oldid=92336216)                     |
| ბრინჯი | rice                         | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506)                     |
| ბრძენი | wise                         | [source](https://en.wiktionary.org/w/index.php?title=ბრძენი&oldid=84089626)                     |
| ბუნება | nature                       | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241)                     |
| ბუსუსი | fuzz                         | [source](https://en.wiktionary.org/w/index.php?title=ბუსუსი&oldid=84097785)                     |
| ბუხარი | fireplace                    | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056)                     |
| გვალვა | drought                      | [source](https://en.wiktionary.org/w/index.php?title=გვალვა&oldid=92490376)                     |
| გვერდი | page; side                   | [source](https://en.wiktionary.org/w/index.php?title=გვერდი&oldid=88051247)                     |
| გოგო   | girl                         | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)                       |
| გონება | mind; intellect              | [source](https://en.wiktionary.org/w/index.php?title=გონება&oldid=92692374)                     |
| გრანტი | grant; scholarship           | [source](https://en.wiktionary.org/w/index.php?title=გრანტი&oldid=88392548)                     |
| გრძელი | long                         | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966)                     |
| გუნდა  | ball, snowball               | [source](https://en.wiktionary.org/w/index.php?title=გუნდა&oldid=87601776)                      |
| გუფთა  | meatball dish                | [source](https://en.wiktionary.org/w/index.php?title=გუფთა&oldid=77583955)                      |
| დარაბა | window shutter               | [source](https://en.wiktionary.org/w/index.php?title=დარაბა&oldid=85046584)                     |
| დაქალი | close female friend          | [source](https://en.wiktionary.org/w/index.php?title=დაქალი&oldid=84114443)                     |
| დედალი | female animal                | [source](https://en.wiktionary.org/w/index.php?title=დედალი&oldid=91716454)                     |
| დიზელი | diesel                       | [source](https://en.wiktionary.org/w/index.php?title=დიზელი&oldid=84098181)                     |
| დილერი | dealer                       | [source](https://en.wiktionary.org/w/index.php?title=დილერი&oldid=84098185)                     |
| დომინო | domino game                  | [source](https://en.wiktionary.org/w/index.php?title=დომინო&oldid=84098244)                     |
| დუეტი  | duet                         | [source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)                      |
| ელფერი | shade, tint                  | [source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98) |
| ერთობა | unity                        | [source](https://en.wiktionary.org/w/index.php?title=ერთობა&oldid=84114925)                     |
| ესკიზი | sketch                       | [source](https://en.wiktionary.org/w/index.php?title=ესკიზი&oldid=84114959)                     |
| ეფექტი | effect                       | [source](https://en.wiktionary.org/w/index.php?title=ეფექტი&oldid=84114983)                     |
| ეშმაკი | devil                        | [source](https://en.wiktionary.org/w/index.php?title=ეშმაკი&oldid=85068322)                     |
| ვაგონი | wagon                        | [source](https://en.wiktionary.org/w/index.php?title=ვაგონი&oldid=92486955)                     |
| ვაჭარი | merchant                     | [source](https://en.wiktionary.org/w/index.php?title=ვაჭარი&oldid=85067228)                     |
| ველური | wild                         | [source](https://en.wiktionary.org/w/index.php?title=ველური&oldid=84090127)                     |
| ვენახი | vineyard                     | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996)                     |
| ვერაგი | treacherous                  | [source](https://en.wiktionary.org/w/index.php?title=ვერაგი&oldid=84090130)                     |
| ვეფხვი | tiger                        | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960)                     |
| ვირუსი | virus                        | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530)                     |
| ვრცელი | extensive, spacious          | [source](https://en.wiktionary.org/w/index.php?title=ვრცელი&oldid=84090141)                     |
| ზაზუნა | hamster                      | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134)                     |
| ზეწარი | bedsheet                     | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578)                     |
| ზიზღი  | disgust                      | [source](https://en.wiktionary.org/w/index.php?title=ზიზღი&oldid=84115345)                      |
| თავბრუ | dizziness                    | [source](https://en.wiktionary.org/w/index.php?title=თავბრუ&oldid=84098608)                     |
| თამადა | toastmaster                  | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151)                     |
| თამაში | game                         | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028)                     |
| თაობა  | generation                   | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)                      |
| თარიღი | date                         | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319)                     |
| თეატრი | theatre                      | [source](https://en.wiktionary.org/w/index.php?title=თეატრი&oldid=89024711)                     |
| თეთრი  | white                        | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)                      |
| თეფში  | plate                        | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)                      |
| თოჯინა | doll                         | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714)                     |
| თუნუქი | tin plate                    | [source](https://en.wiktionary.org/w/index.php?title=თუნუქი&oldid=84098722)                     |
| იარაღი | weapon, tool                 | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054)                     |
| იატაკი | floor                        | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760)                     |
| იდაყვი | elbow                        | [source](https://en.wiktionary.org/w/index.php?title=იდაყვი&oldid=90005976)                     |
| ილუზია | illusion                     | [source](https://en.wiktionary.org/w/index.php?title=ილუზია&oldid=68794707)                     |
| ირონია | irony                        | [source](https://en.wiktionary.org/w/index.php?title=ირონია&oldid=84098887)                     |
| იუმორი | humor                        | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113)                     |
| კაბელი | cable                        | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959)                     |
| კაკაბი | partridge                    | [source](https://en.wiktionary.org/w/index.php?title=კაკაბი&oldid=84115977)                     |
| კაკალი | walnut; walnut tree          | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192)                     |
| კალათა | basket                       | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984)                     |
| კამეჩი | buffalo                      | [source](https://en.wiktionary.org/w/index.php?title=კამეჩი&oldid=84116010)                     |
| კაპიკი | kopeck                       | [source](https://en.wiktionary.org/w/index.php?title=კაპიკი&oldid=84116027)                     |
| კარადა | cupboard, wardrobe, closet   | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032)                     |
| კარაქი | butter                       | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208)                     |
| კედელი | wall                         | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872)                     |
| კეთილი | kind                         | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581)                     |
| კვანძი | knot                         | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089)                     |
| კოდალა | woodpecker                   | [source](https://en.wiktionary.org/w/index.php?title=კოდალა&oldid=87900485)                     |
| კოკორი | flower bud                   | [source](https://en.wiktionary.org/w/index.php?title=კოკორი&oldid=88091590)                     |
| კოლეგა | colleague                    | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090)                     |
| კოლეჯი | college                      | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%9A%E1%83%94%E1%83%AF%E1%83%98) |
| კოლონა | convoy                       | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%90) |
| კოლოფი | box                          | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231)                     |
| კომეტა | comet                        | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201)                     |
| კომოდი | chest of drawers             | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206)                     |
| კონუსი | cone                         | [source](https://en.wiktionary.org/w/index.php?title=კონუსი&oldid=84099277)                     |
| კონცხი | cape                         | [source](https://en.wiktionary.org/w/index.php?title=კონცხი&oldid=84099289)                     |
| კოღო   | mosquito                     | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)                       |
| კოცონი | bonfire                      | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332)                     |
| კოხტა  | neat, attractive             | [source](https://en.wiktionary.org/w/index.php?title=კოხტა&oldid=75374694)                      |
| კუთხე  | corner                       | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)                      |
| კულული | curl                         | [source](https://en.wiktionary.org/w/index.php?title=კულული&oldid=84099390)                     |
| კუპონი | coupon                       | [source](https://en.wiktionary.org/w/index.php?title=კუპონი&oldid=84099396)                     |
| ლაზერი | laser                        | [source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416)                     |
| ლექცია | lecture                      | [source](https://en.wiktionary.org/w/index.php?title=ლექცია&oldid=88917235)                     |
| ლიდერი | leader                       | [source](https://en.wiktionary.org/w/index.php?title=ლიდერი&oldid=84116502)                     |
| ლითონი | metal                        | [source](https://en.wiktionary.org/w/index.php?title=ლითონი&oldid=59533173)                     |
| ლუკმა  | bite, morsel                 | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)                      |
| მამიდა | paternal aunt                | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651)                     |
| მამული | ancestral estate             | [source](https://en.wiktionary.org/w/index.php?title=მამული&oldid=92289536)                     |
| მარილი | salt                         | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420)                     |
| მარჯვე | skillful, dexterous          | [source](https://en.wiktionary.org/w/index.php?title=მარჯვე&oldid=84088864)                     |
| მასალა | material                     | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175)                     |
| მატყლი | wool                         | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270)                     |
| მაღალი | tall; high                   | [source](https://en.wiktionary.org/w/index.php?title=მაღალი&oldid=84090444)                     |
| მდედრი | female animal                | [source](https://en.wiktionary.org/w/index.php?title=მდედრი&oldid=84090473)                     |
| მეთოდი | method                       | [source](https://en.wiktionary.org/w/index.php?title=მეთოდი&oldid=84099800)                     |
| მეკარე | goalkeeper                   | [source](https://en.wiktionary.org/w/index.php?title=მეკარე&oldid=84116856)                     |
| მელანი | ink                          | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862)                     |
| მელოტი | bald                         | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872)                     |
| მეწაღე | shoemaker                    | [source](https://en.wiktionary.org/w/index.php?title=მეწაღე&oldid=84099917)                     |
| მთვარე | moon                         | [source](https://en.wiktionary.org/w/index.php?title=მთვარე&oldid=92701984)                     |
| მიდამო | surrounding area             | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%98%E1%83%93%E1%83%90%E1%83%9B%E1%83%9D) |
| მიზეზი | reason                       | [source](https://en.wiktionary.org/w/index.php?title=მიზეზი&oldid=84099946)                     |
| მინუსი | minus                        | [source](https://en.wiktionary.org/w/index.php?title=მინუსი&oldid=84099990)                     |
| მირაჟი | mirage                       | [source](https://en.wiktionary.org/w/index.php?title=მირაჟი&oldid=84099992)                     |
| მკაფიო | clear, distinct              | [source](https://en.wiktionary.org/w/index.php?title=მკაფიო&oldid=59804862)                     |
| მკაცრი | strict                       | [source](https://en.wiktionary.org/w/index.php?title=მკაცრი&oldid=84088882)                     |
| მკერდი | chest; breast                | [source](https://en.wiktionary.org/w/index.php?title=მკერდი&oldid=84117115)                     |
| მომხრე | supporter                    | [source](https://en.wiktionary.org/w/index.php?title=მომხრე&oldid=33309720)                     |
| მონეტა | coin                         | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079)                     |
| მოპედი | moped                        | [source](https://en.wiktionary.org/w/index.php?title=მოპედი&oldid=84524460)                     |
| მორალი | moral                        | [source](https://en.wiktionary.org/w/index.php?title=მორალი&oldid=84100099)                     |
| მორევი | whirlpool                    | [source](https://en.wiktionary.org/w/index.php?title=მორევი&oldid=86570234)                     |
| მორიგე | person on duty               | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%A0%E1%83%98%E1%83%92%E1%83%94) |
| მოტივი | motif                        | [source](https://en.wiktionary.org/w/index.php?title=მოტივი&oldid=84100123)                     |
| მოწაფე | pupil, apprentice            | [source](https://en.wiktionary.org/w/index.php?title=მოწაფე&oldid=88722174)                     |
| მოწმე  | witness                      | [source](https://en.wiktionary.org/w/index.php?title=მოწმე&oldid=84100153)                      |
| მოხუცი | elderly person               | [source](https://en.wiktionary.org/w/index.php?title=მოხუცი&oldid=88799725)                     |
| მტვერი | dust                         | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826)                     |
| მტკიცე | firm; sturdy                 | [source](https://en.wiktionary.org/w/index.php?title=მტკიცე&oldid=84088908)                     |
| მურაბა | jam, fruit preserve          | [source](https://en.wiktionary.org/w/index.php?title=მურაბა&oldid=84100195)                     |
| მუსიკა | music                        | [source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574)                     |
| მუცელი | stomach, tummy               | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402)                     |
| მღვიმე | cavern                       | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497)                     |
| მყიფე  | fragile                      | [source](https://en.wiktionary.org/w/index.php?title=მყიფე&oldid=75374822)                      |
| მყრალი | foul-smelling                | [source](https://en.wiktionary.org/w/index.php?title=მყრალი&oldid=84090627)                     |
| მყუდრო | cozy, tranquil               | [source](https://en.wiktionary.org/w/index.php?title=მყუდრო&oldid=88415302)                     |
| მშიერი | hungry                       | [source](https://en.wiktionary.org/w/index.php?title=მშიერი&oldid=84088912)                     |
| მჩატე  | lightweight                  | [source](https://en.wiktionary.org/w/index.php?title=მჩატე&oldid=75256761)                      |
| მცდარი | incorrect; mistaken          | [source](https://en.wiktionary.org/w/index.php?title=მცდარი&oldid=84088557)                     |
| მძიმე  | heavy                        | [source](https://en.wiktionary.org/w/index.php?title=მძიმე&oldid=81821575)                      |
| მწვავე | sharp; acute                 | [source](https://en.wiktionary.org/w/index.php?title=მწვავე&oldid=75374844)                     |
| მჭიდრო | tight; densely packed        | [source](https://en.wiktionary.org/w/index.php?title=მჭიდრო&oldid=84088917)                     |
| ნაბადი | felt cloak                   | [source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951)                     |
| ნაბიჯი | footstep                     | [source](https://en.wiktionary.org/w/index.php?title=ნაბიჯი&oldid=92709978)                     |
| ნაზუქი | sweet spiced bread           | [source](https://en.wiktionary.org/w/index.php?title=ნაზუქი&oldid=93365246)                     |
| ნათელი | bright; clear                | [source](https://en.wiktionary.org/w/index.php?title=ნათელი&oldid=85476155)                     |
| ნათურა | light bulb                   | [source](https://en.wiktionary.org/w/index.php?title=ნათურა&oldid=88113865)                     |
| ნაკადი | gush, spurt, squirt, stream  | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276)                     |
| ნალექი | precipitation                | [source](https://en.wiktionary.org/w/index.php?title=ნალექი&oldid=84117542)                     |
| ნაპირი | shore, strand, waterside     | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827)                     |
| ნატეხი | fragment, shard              | [source](https://en.wiktionary.org/w/index.php?title=ნატეხი&oldid=84100309)                     |
| ნაფოტი | wood chip                    | [source](https://en.wiktionary.org/w/index.php?title=ნაფოტი&oldid=84100314)                     |
| ნაყინი | ice cream                    | [source](https://en.wiktionary.org/w/index.php?title=ნაყინი&oldid=84117582)                     |
| ნაყოფი | fruit of a plant             | [source](https://en.wiktionary.org/w/index.php?title=ნაყოფი&oldid=89105168)                     |
| ნაცარი | ash                          | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231)                     |
| ნახირი | cattle herd                  | [source](https://en.wiktionary.org/w/index.php?title=ნახირი&oldid=84117611)                     |
| ნაჯახი | axe                          | [source](https://en.wiktionary.org/w/index.php?title=ნაჯახი&oldid=84117618)                     |
| ნიგოზი | walnut                       | [source](https://en.wiktionary.org/w/index.php?title=ნიგოზი&oldid=87748816)                     |
| ნიკაპი | chin                         | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203)                     |
| ნიმუში | sample                       | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676)                     |
| ნიჟარა | shell; sink                  | [source](https://en.wiktionary.org/w/index.php?title=ნიჟარა&oldid=84117680)                     |
| ნიშანი | sign                         | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468)                     |
| ნომერი | number label; hotel room     | [source](https://en.wiktionary.org/w/index.php?title=ნომერი&oldid=84117710)                     |
| ოაზისი | oasis                        | [source](https://en.wiktionary.org/w/index.php?title=ოაზისი&oldid=91756327)                     |
| ობობა  | spider                       | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)                      |
| ოპტიკა | optics                       | [source](https://en.wiktionary.org/w/index.php?title=ოპტიკა&oldid=84100472)                     |
| ორთქლი | steam                        | [source](https://en.wiktionary.org/w/index.php?title=ორთქლი&oldid=87900924)                     |
| ორმაგი | double; twofold              | [source](https://en.wiktionary.org/w/index.php?title=ორმაგი&oldid=91733129)                     |
| ოსტატი | master craftsman             | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588)                     |
| პაკეტი | packet                       | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015)                     |
| პალატა | hospital ward                | [source](https://en.wiktionary.org/w/index.php?title=პალატა&oldid=85068638)                     |
| პანელი | panel                        | [source](https://en.wiktionary.org/w/index.php?title=პანელი&oldid=84100554)                     |
| პანიკა | panic                        | [source](https://en.wiktionary.org/w/index.php?title=პანიკა&oldid=84117941)                     |
| პაროლი | password                     | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601)                     |
| პატივი | honor                        | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548)                     |
| პაუზა  | pause                        | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)                      |
| პედალი | pedal                        | [source](https://en.wiktionary.org/w/index.php?title=პედალი&oldid=84100646)                     |
| პენალი | pencil case                  | [source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%94%E1%83%9C%E1%83%90%E1%83%9A%E1%83%98) |
| პენსია | pension                      | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867)                     |
| პირადი | personal; private            | [source](https://en.wiktionary.org/w/index.php?title=პირადი&oldid=84090793)                     |
| პირობა | promise; requirement         | [source](https://en.wiktionary.org/w/index.php?title=პირობა&oldid=85541139)                     |
| პლაჟი  | beach                        | [source](https://en.wiktionary.org/w/index.php?title=პლაჟი&oldid=75423986)                      |
| პოეზია | poetry                       | [source](https://en.wiktionary.org/w/index.php?title=პოეზია&oldid=88968704)                     |
| პოლუსი | pole (geography)             | [source](https://en.wiktionary.org/w/index.php?title=პოლუსი&oldid=84100798)                     |
| პრინცი | prince                       | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987)                     |
| პულტი  | remote control               | [source](https://en.wiktionary.org/w/index.php?title=პულტი&oldid=84118223)                      |
| ჟელე   | jelly                        | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)                       |
| ჟიური  | jury                         | [source](https://www.ganmarteba.ge/word/%E1%83%9F%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98)          |
| ჟოლო   | raspberry                    | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)                       |
| რეზინი | rubber                       | [source](https://en.wiktionary.org/w/index.php?title=რეზინი&oldid=60277300)                     |
| რეჟიმი | mode; regimen                | [source](https://en.wiktionary.org/w/index.php?title=რეჟიმი&oldid=84101045)                     |
| რწყილი | flea                         | [source](https://en.wiktionary.org/w/index.php?title=რწყილი&oldid=92250765)                     |
| საბაბი | excuse; pretext              | [source](https://en.wiktionary.org/w/index.php?title=საბაბი&oldid=84118438)                     |
| საბაზო | basic, foundational          | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%96%E1%83%9D) |
| საგანი | object, subject              | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780)                     |
| სადავო | disputed; debatable          | [source](https://en.wiktionary.org/w/index.php?title=სადავო&oldid=59807665)                     |
| სადილი | midday meal                  | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533)                     |
| საერთო | common; shared               | [source](https://en.wiktionary.org/w/index.php?title=საერთო&oldid=88645820)                     |
| საკანი | cell                         | [source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500)                     |
| სალათა | salad                        | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797)                     |
| სალარო | cash register; ticket office | [source](https://en.wiktionary.org/w/index.php?title=სალარო&oldid=85820915)                     |
| სალონი | salon                        | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194)                     |
| სამარე | grave                        | [source](https://en.wiktionary.org/w/index.php?title=სამარე&oldid=84101196)                     |
| სამეფო | kingdom                      | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981)                     |
| სამოსი | clothing; attire             | [source](https://en.wiktionary.org/w/index.php?title=სამოსი&oldid=84118646)                     |
| საპონი | soap                         | [source](https://en.wiktionary.org/w/index.php?title=საპონი&oldid=89620271)                     |
| საუზმე | breakfast                    | [source](https://en.wiktionary.org/w/index.php?title=საუზმე&oldid=88091259)                     |
| საფულე | wallet                       | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843)                     |
| საღამო | evening                      | [source](https://en.wiktionary.org/w/index.php?title=საღამო&oldid=88849236)                     |
| საღორე | pigsty                       | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A6%E1%83%9D%E1%83%A0%E1%83%94) |
| საყელო | collar                       | [source](https://en.wiktionary.org/w/index.php?title=საყელო&oldid=84118856)                     |
| საყურე | earring                      | [source](https://en.wiktionary.org/w/index.php?title=საყურე&oldid=85101324)                     |
| საცავი | storage; repository          | [source](https://en.wiktionary.org/w/index.php?title=საცავი&oldid=84103408)                     |
| საცობი | stopper; traffic jam         | [source](https://en.wiktionary.org/w/index.php?title=საცობი&oldid=84118876)                     |
| საწოლი | bed                          | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101)                     |
| საჯარო | public                       | [source](https://en.wiktionary.org/w/index.php?title=საჯარო&oldid=43853043)                     |
| სეანსი | screening, session           | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%90%E1%83%9C%E1%83%A1%E1%83%98) |
| სეტყვა | hail                         | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560)                     |
| სექცია | section                      | [source](https://en.wiktionary.org/w/index.php?title=სექცია&oldid=84101382)                     |
| სვიტრი | sweater                      | [source](https://en.wiktionary.org/w/index.php?title=სვიტრი&oldid=84118977)                     |
| სიბერე | old age                      | [source](https://en.wiktionary.org/w/index.php?title=სიბერე&oldid=84118987)                     |
| სიგრძე | length                       | [source](https://en.wiktionary.org/w/index.php?title=სიგრძე&oldid=84119000)                     |
| სივრცე | space; area                  | [source](https://en.wiktionary.org/w/index.php?title=სივრცე&oldid=84119003)                     |
| სისხლი | blood                        | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162)                     |
| სიჩუმე | silence; quiet               | [source](https://en.wiktionary.org/w/index.php?title=სიჩუმე&oldid=84101577)                     |
| სიცივე | coldness, frigidity          | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113)                     |
| სიცრუე | falsehood                    | [source](https://en.wiktionary.org/w/index.php?title=სიცრუე&oldid=87305055)                     |
| სკვერი | public square                | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142)                     |
| სკივრი | chest                        | [source](https://en.wiktionary.org/w/index.php?title=სკივრი&oldid=84101617)                     |
| სოფელი | village                      | [source](https://en.wiktionary.org/w/index.php?title=სოფელი&oldid=88647104)                     |
| სპაზმი | spasm                        | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9E%E1%83%90%E1%83%96%E1%83%9B%E1%83%98) |
| სპირტი | alcohol                      | [source](https://en.wiktionary.org/w/index.php?title=სპირტი&oldid=87480489)                     |
| სტამბა | printing house               | [source](https://en.wiktionary.org/w/index.php?title=სტამბა&oldid=92529944)                     |
| სტატია | article                      | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457)                     |
| სტენდი | display board                | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9C%E1%83%93%E1%83%98) |
| სტიქია | natural disaster             | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%98%E1%83%A5%E1%83%98%E1%83%90) |
| სტრესი | stress                       | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A1%E1%83%98) |
| სტროფი | stanza                       | [source](https://en.wiktionary.org/w/index.php?title=სტროფი&oldid=84101728)                     |
| სტუდია | studio                       | [source](https://en.wiktionary.org/w/index.php?title=სტუდია&oldid=84101730)                     |
| სუნამო | perfume                      | [source](https://en.wiktionary.org/w/index.php?title=სუნამო&oldid=84101750)                     |
| სუნელი | spice; seasoning             | [source](https://en.wiktionary.org/w/index.php?title=სუნელი&oldid=84103259)                     |
| სწრაფი | quick                        | [source](https://en.wiktionary.org/w/index.php?title=სწრაფი&oldid=84119316)                     |
| სხეული | body                         | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318)                     |
| სხვენი | attic                        | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322)                     |
| ტაძარი | temple; cathedral            | [source](https://en.wiktionary.org/w/index.php?title=ტაძარი&oldid=91725864)                     |
| ტექსტი | text                         | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105)                     |
| ტვირთი | load                         | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860)                     |
| ტკბილი | sweet                        | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168)                     |
| ტომარა | sack                         | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123)                     |
| ტრავმა | trauma; injury               | [source](https://en.wiktionary.org/w/index.php?title=ტრავმა&oldid=84119433)                     |
| უბრალო | simple                       | [source](https://en.wiktionary.org/w/index.php?title=უბრალო&oldid=75271163)                     |
| უგულო  | heartless                    | [source](https://en.wiktionary.org/w/index.php?title=უგულო&oldid=88343102)                      |
| უდაბნო | desert                       | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660)                     |
| უდავო  | undeniable                   | [source](https://en.wiktionary.org/w/index.php?title=უდავო&oldid=28797786)                      |
| უიღბლო | unlucky                      | [source](https://en.wiktionary.org/w/index.php?title=უიღბლო&oldid=84119570)                     |
| ულვაში | mustache                     | [source](https://en.wiktionary.org/w/index.php?title=ულვაში&oldid=85065856)                     |
| უმწეო  | helpless                     | [source](https://en.wiktionary.org/w/index.php?title=უმწეო&oldid=83145068)                      |
| უნაკლო | flawless                     | [source](https://en.wiktionary.org/w/index.php?title=უნაკლო&oldid=84119652)                     |
| უფასო  | free of charge               | [source](https://en.wiktionary.org/w/index.php?title=უფასო&oldid=84119719)                      |
| უცნობი | unknown; unfamiliar          | [source](https://en.wiktionary.org/w/index.php?title=უცნობი&oldid=84089062)                     |
| უძრავი | immobile; stationary         | [source](https://en.wiktionary.org/w/index.php?title=უძრავი&oldid=84091194)                     |
| უჯრედი | cell                         | [source](https://en.wiktionary.org/w/index.php?title=უჯრედი&oldid=85068642)                     |
| ფასადი | façade                       | [source](https://en.wiktionary.org/w/index.php?title=ფასადი&oldid=84119798)                     |
| ფაქიზი | delicate                     | [source](https://en.wiktionary.org/w/index.php?title=ფაქიზი&oldid=84091230)                     |
| ფერადი | colourful                    | [source](https://en.wiktionary.org/w/index.php?title=ფერადი&oldid=84091239)                     |
| ფერფლი | ash                          | [source](https://en.wiktionary.org/w/index.php?title=ფერფლი&oldid=84102202)                     |
| ფიზიკა | physics                      | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730)                     |
| ფილტვი | lung                         | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916)                     |
| ფინალი | final                        | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241)                     |
| ფირუზი | turquoise                    | [source](https://en.wiktionary.org/w/index.php?title=ფირუზი&oldid=84088596)                     |
| ფიფქი  | snowflake                    | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)                      |
| ფიცარი | plank                        | [source](https://en.wiktionary.org/w/index.php?title=ფიცარი&oldid=84102256)                     |
| ფოლადი | steel                        | [source](https://en.wiktionary.org/w/index.php?title=ფოლადი&oldid=84119907)                     |
| ფორუმი | forum                        | [source](https://en.wiktionary.org/w/index.php?title=ფორუმი&oldid=68804865)                     |
| ფრესკა | fresco                       | [source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351)                     |
| ფსკერი | bottom                       | [source](https://en.wiktionary.org/w/index.php?title=ფსკერი&oldid=84119972)                     |
| ფუნჯი  | brush                        | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)                      |
| ფქვილი | flour                        | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987)                     |
| ქაბაბი | kebab                        | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993)                     |
| ქვევრი | qvevri wine vessel           | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687)                     |
| ქვეითი | pedestrian                   | [source](https://en.wiktionary.org/w/index.php?title=ქვეითი&oldid=84120089)                     |
| ქვრივი | widow or widower             | [source](https://en.wiktionary.org/w/index.php?title=ქვრივი&oldid=84120114)                     |
| ქინძი  | coriander                    | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)                      |
| ქომაგი | defender                     | [source](https://en.wiktionary.org/w/index.php?title=ქომაგი&oldid=91733127)                     |
| ქოჩორი | tuft of hair                 | [source](https://en.wiktionary.org/w/index.php?title=ქოჩორი&oldid=84120158)                     |
| ღამურა | bat                          | [source](https://en.wiktionary.org/w/index.php?title=ღამურა&oldid=92290634)                     |
| ღარიბი | poor                         | [source](https://en.wiktionary.org/w/index.php?title=ღარიბი&oldid=84120206)                     |
| ღერძი  | axle; axis                   | [source](https://en.wiktionary.org/w/index.php?title=ღერძი&oldid=84120210)                      |
| ღვიძლი | liver                        | [source](https://en.wiktionary.org/w/index.php?title=ღვიძლი&oldid=92719057)                     |
| ღილაკი | push-button                  | [source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%98%E1%83%9A%E1%83%90%E1%83%99%E1%83%98) |
| ღუმელი | stove                        | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256)                     |
| ყაჩაღი | robber                       | [source](https://en.wiktionary.org/w/index.php?title=ყაჩაღი&oldid=84120295)                     |
| ყვავი  | crow                         | [source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)                      |
| ყინული | ice                          | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551)                     |
| ყორანი | raven                        | [source](https://en.wiktionary.org/w/index.php?title=ყორანი&oldid=92709834)                     |
| ყოჩი   | ram                          | [source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)                       |
| ყულაბა | money box                    | [source](https://en.wiktionary.org/w/index.php?title=ყულაბა&oldid=84751497)                     |
| შაბათი | Saturday                     | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658)                     |
| შაქარი | sugar                        | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621)                     |
| შენობა | building                     | [source](https://en.wiktionary.org/w/index.php?title=შენობა&oldid=84102610)                     |
| შეშა   | firewood                     | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)                       |
| შრიფტი | typeface                     | [source](https://en.wiktionary.org/w/index.php?title=შრიფტი&oldid=84435051)                     |
| შუქურა | lighthouse                   | [source](https://en.wiktionary.org/w/index.php?title=შუქურა&oldid=91715399)                     |
| ჩარჩო  | frame                        | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)                      |
| ჩაქუჩი | hammer                       | [source](https://en.wiktionary.org/w/index.php?title=ჩაქუჩი&oldid=91072323)                     |
| ჩექმა  | boot                         | [source](https://en.wiktionary.org/w/index.php?title=ჩექმა&oldid=84120683)                      |
| ჩვევა  | habit                        | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)                      |
| ჩლიქი  | hoof                         | [source](https://en.wiktionary.org/w/index.php?title=ჩლიქი&oldid=92229616)                      |
| ჩოგანი | racket                       | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726)                     |
| ჩონჩხი | skeleton                     | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089)                     |
| ჩრდილი | shade                        | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977)                     |
| ცაცხვი | linden tree                  | [source](https://en.wiktionary.org/w/index.php?title=ცაცხვი&oldid=87901684)                     |
| ცბიერი | cunning                      | [source](https://en.wiktionary.org/w/index.php?title=ცბიერი&oldid=84091583)                     |
| ცეცხლი | fire                         | [source](https://en.wiktionary.org/w/index.php?title=ცეცხლი&oldid=84120800)                     |
| ციცაბო | steep                        | [source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%98%E1%83%AA%E1%83%90%E1%83%91%E1%83%9D) |
| ცოდვა  | sin                          | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)                      |
| ცოდნა  | knowledge                    | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)                      |
| ცოცხი  | broom                        | [source](https://en.wiktionary.org/w/index.php?title=ცოცხი&oldid=84120879)                      |
| ცხრილი | table; chart                 | [source](https://en.wiktionary.org/w/index.php?title=ცხრილი&oldid=84102822)                     |
| ძარღვი | vein                         | [source](https://en.wiktionary.org/w/index.php?title=ძარღვი&oldid=84120923)                     |
| ძიუდო  | judo                         | [source](https://en.wiktionary.org/w/index.php?title=ძიუდო&oldid=88130281)                      |
| ძუნწი  | stingy                       | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)                      |
| წამალი | medicine                     | [source](https://en.wiktionary.org/w/index.php?title=წამალი&oldid=84120981)                     |
| წერილი | letter; written message      | [source](https://en.wiktionary.org/w/index.php?title=წერილი&oldid=85067524)                     |
| წვივი  | shin                         | [source](https://en.wiktionary.org/w/index.php?title=წვივი&oldid=84102879)                      |
| წვრილი | thin, fine                   | [source](https://en.wiktionary.org/w/index.php?title=წვრილი&oldid=84089118)                     |
| წითელა | measles                      | [source](https://en.wiktionary.org/w/index.php?title=წითელა&oldid=84102886)                     |
| წითელი | red                          | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641)                     |
| წითური | red-haired                   | [source](https://en.wiktionary.org/w/index.php?title=წითური&oldid=84091676)                     |
| წიწაკა | pepper                       | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068)                     |
| წიწილა | chick                        | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124)                     |
| წყვილი | pair                         | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227)                     |
| წყნარი | quiet                        | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680)                     |
| ჭაბუკი | young man                    | [source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122)                     |
| ჭადარი | plane tree                   | [source](https://en.wiktionary.org/w/index.php?title=ჭადარი&oldid=84121125)                     |
| ჭაღარა | gray-haired                  | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183)                     |
| ჭაჭა   | grape pomace                 | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)                       |
| ჭუჭყი  | dirt                         | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)                      |
| ხაბაზი | baker                        | [source](https://en.wiktionary.org/w/index.php?title=ხაბაზი&oldid=84121183)                     |
| ხალათი | robe                         | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200)                     |
| ხახვი  | onion                        | [source](https://en.wiktionary.org/w/index.php?title=ხახვი&oldid=92248670)                      |
| ხელობა | craft, trade                 | [source](https://en.wiktionary.org/w/index.php?title=ხელობა&oldid=84121262)                     |
| ხოჭო   | beetle                       | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)                       |
| ხოხობი | pheasant                     | [source](https://en.wiktionary.org/w/index.php?title=ხოხობი&oldid=87901860)                     |
| ხსნარი | liquid solution              | [source](https://en.wiktionary.org/w/index.php?title=ხსნარი&oldid=85491046)                     |
| ხშირი  | frequent; dense              | [source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)                      |
| ჯიუტი  | stubborn                     | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)                      |
| ჯიხვი  | Caucasian mountain goat      | [source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)                      |
| ჯიხური | kiosk                        | [source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096)                     |
| ჯოკერი | joker card                   | [source](https://en.wiktionary.org/w/index.php?title=ჯოკერი&oldid=84121451)                     |
| ჯუჯა   | dwarf                        | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)                       |
| ჰამაკი | hammock                      | [source](https://en.wiktionary.org/w/index.php?title=ჰამაკი&oldid=84121484)                     |
