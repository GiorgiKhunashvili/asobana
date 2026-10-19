# Journey vocabulary and campaign review — revision 21

The owner authorized ten additional Malta levels after Italy on 2026-10-18.
Valletta (ვალეტა) contains levels **241–245**; Mdina (მდინა) contains **246–250**.
All original 240 boards and their answers, layouts, IDs and bonuses remain exactly
as revision 20. Historical packs, journey manifests and dictionaries are unchanged.

No words are added to the vocabulary: the existing revision-20 allowlist contains
**1,569 approved words**. The 1,790-entry reference recognizes 1,687 eligible words,
including 118 additional bonus-only spellings. Every prior exclusion remains active.

## Measured results

| Measure                                | Before (v20) | Malta expansion (v21) |
| -------------------------------------- | -----------: | --------------------: |
| Levels                                 |          240 |                   250 |
| Stops                                  |           48 |                    50 |
| Required answer slots                  |        1,200 |                 1,250 |
| Distinct required spellings            |        1,069 |                 1,096 |
| Unused approved words                  |          500 |                   473 |
| Repeated slots beyond first appearance |          131 |                   154 |
| Minimum repeat gap                     |           75 |                    75 |

**27 previously unused approved words** enter required play. The 50 Malta slots
contain **50 different spellings**: 27 are previously unused and 23 were used
in the earlier journey, all at least 75 levels away. No word repeats within Malta.
The original campaign's 131 repeated slots are unchanged; appending Malta adds
23 repeated appearances. This expands playable content and uses more vocabulary;
it does not reduce the absolute repeat count or claim 50 entirely unused answers.

Required-word frequencies across the full campaign: 954 used once,
130 used twice, 12 used three times and 0 used four times.
Bonus appearances are excluded from these counts and do not reset the repeat gap.

## Search and review

The append-only search explored 84,540 candidate wheels compatible with the
remaining vocabulary, retained existing eligible boards, and generated new layouts
for unused-word combinations. High-coverage combinations were tried with seeds
1–1,024. It produced 22,643 candidates. Joint selection optimized
all ten positions, including the Italy/Malta transition, word and wheel uniqueness,
75-level history, challenge/recovery pacing and a six-letter board in each stop.
Distinct previously unused words had priority over reuse frequency and repeat gap.

The independent disjoint-board bound is 27
unused words for this enumerated candidate pool; the selected result uses 27.
This is a bounded search, not a proof over every possible crossword layout.

All 1,250 required slots and accepted variants were checked against the exact
allowlist, recorded meanings and sources. The 50 new answers were individually
source-matched and reviewed; all variants remain canonical-only. Every eligible
formable bonus is recognized. Plurals and reserved rare words remain bonus-only;
all-play exclusions remain excluded. All 250 boards pass the existing layout,
length, wheel, density, phone-size, crossing and pacing rules. Difficulty estimates
do not replace playtesting.

## Compatibility and artwork

`content/journey-v21.json` defines the expanded route; revision-aware validators
retain the 240-level route for revisions 13–20. Revision 21 uses the existing
revision-20 vocabulary and policy decisions. Saves from revisions 1–20 are supported.
Completed boards, partial answers, paid hints, coins, settings, postcards and
lifetime bonus rewards are preserved. A player who completed Italy can unlock
level 241; later Malta boards unlock sequentially. The hint compatibility ceiling
remains 1,544 because none of the existing boards is reauthored.

Two new generated portraits and their card crops are registered in the country,
scene and postcard systems. See [artwork and exact prompts](MALTA_ARTWORK.md).
Both short place facts were source-checked and explicitly owner-approved on
2026-10-18; see [place facts](PLACE_FACTS.md). No native-device test is implied.

## Reproducibility and validation

Reviewed draft SHA-256: `1e375626ce1084384ba026cd1eb0ee1615da9f7feed561d12bafe2080fce3ff0`.

Use `scripts/rebuild-wide-content.py --revision 21` to rebuild a draft. Promotion
requires this exact digest and `--promote-reviewed --output content/levels/discovery.v21.json`.
Recipes reproduce the selected campaign without ignored search artifacts.

- `npm run check`: passed TypeScript, ESLint, **252 mobile tests in 32 suites**,
  content validation and solving of **all 250 levels**, and repository formatting.
- `uv run pytest`: **136 passed**, including deterministic reproduction, retained
  240-board prefix, historical route compatibility, all-role vocabulary policies,
  75-level repetition gap, all eligible bonuses and Malta progression.
- `uv run ruff check .`, `uv run ruff format --check .`, `uv run mypy src`: passed
  (33 formatted Python files and 13 typed source files).
- `npx expo export --platform ios`: passed, including a fresh export after the final
  postcard-crop adjustment. This is not a native-device test or TestFlight upload.
- Revision-20 partial and completed saves survive SQLite migration and restart
  with exact progress, coins, hints, settings and bonus counters. Italy completion
  unlocks Valletta; both Malta postcards can be earned and survive restart.
- All **76 historical JSON files**, including the shared word policy and original
  journey, match their pre-change SHA-256 hashes. Existing scene JPEGs are unchanged.
- Both generated portraits and the 350×112 postcard crops were visually inspected.
  The background/strip references resolve to bundled JPEGs, and both place facts
  have explicit owner approval.

## Previously unused words now used (27)

| Word   | Meaning                    | New level | Source                                                                                 |
| ------ | -------------------------- | --------: | -------------------------------------------------------------------------------------- |
| აბანო  | bathhouse                  |       241 | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)             |
| აბჯარი | armor                      |       244 | [source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412)            |
| ავდარი | bad weather, rainy weather |       243 | [source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279)            |
| ანბანი | alphabet                   |       241 | [source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407)            |
| ბანანი | banana                     |       241 | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335)            |
| ბარდა  | pea                        |       244 | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)             |
| დარაჯი | guard                      |       244 | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652)            |
| ვარდი  | rose                       |       243 | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)             |
| ზარალი | loss                       |       250 | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744)            |
| კარავი | tent                       |       243 | [source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033)            |
| ლამაზი | beautiful                  |       250 | [source](https://en.wiktionary.org/w/index.php?title=ლამაზი&oldid=84116431)            |
| მჟავე  | sour                       |       248 | [source](https://en.wiktionary.org/w/index.php?title=მჟავე&oldid=84417167)             |
| ნადირი | wild animal                |       245 | [source](https://en.wiktionary.org/w/index.php?title=ნადირი&oldid=84117507)            |
| ორსული | pregnant                   |       249 | [source](https://en.wiktionary.org/w/index.php?title=ორსული&oldid=84117860)            |
| ჟესტი  | gesture                    |       247 | [source](https://en.wiktionary.org/w/index.php?title=ჟესტი&oldid=84100938)             |
| რაინდი | knight                     |       245 | [source](https://en.wiktionary.org/w/index.php?title=რაინდი&oldid=86397598)            |
| რიცხვი | number; day of the month   |       242 | [source](https://en.wiktionary.org/w/index.php?title=რიცხვი&oldid=85067546)            |
| საბელი | leash                      |       246 | [source](https://en.wiktionary.org/w/index.php?title=საბელი&oldid=84118453)            |
| სახელი | name; fame                 |       246 | [source](https://en.wiktionary.org/w/index.php?title=სახელი&oldid=84118897)            |
| სიახლე | novelty; innovation        |       246 | [source](https://en.wiktionary.org/w/index.php?title=სიახლე&oldid=88800054)            |
| სურდო  | runny nose, head cold      |       249 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%93%E1%83%9D) |
| ტენტი  | awning                     |       247 | [source](https://en.wiktionary.org/w/index.php?title=ტენტი&oldid=84101841)             |
| ტესტი  | test, exam questions       |       247 | [source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%A1%E1%83%A2%E1%83%98) |
| ყადრი  | value, respect             |       245 | [source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)             |
| ცხვირი | nose                       |       242 | [source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521)            |
| ცხიმი  | fat                        |       242 | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)             |
| წნევა  | pressure                   |       248 | [source](https://en.wiktionary.org/w/index.php?title=წნევა&oldid=84121078)             |

## All 250 boards

| Level | Stop           | Required answers                   | Previously unused answers in Malta | Wheel   | Grid | Difficulty |
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
|   241 | valletta       | ობი, აბი, ბანანი, აბანო, ანბანი    | ბანანი, აბანო, ანბანი              | ნობაიან | 7×5  |         70 |
|   242 | valletta       | ცხვირი, ცხიმი, რიცხვი, ცივი, იხვი  | ცხვირი, ცხიმი, რიცხვი              | რვმიიხც | 7×5  |         74 |
|   243 | valletta       | კარავი, ვადა, ავდარი, ვარდი, კრავი | კარავი, ავდარი, ვარდი              | რაკდავი | 7×5  |         76 |
|   244 | valletta       | დარაჯი, ბარდა, აბჯარი, არია, დაბა  | დარაჯი, ბარდა, აბჯარი              | ირადჯბა | 7×5  |         74 |
|   245 | valletta       | რაინდი, ყადრი, ნადირი, ყდა, დარი   | რაინდი, ყადრი, ნადირი              | ყიიდრნა | 7×5  |         72 |
|   246 | mdina          | სახელი, სია, სიახლე, ალი, საბელი   | სახელი, სიახლე, საბელი             | საეხიბლ | 7×5  |         72 |
|   247 | mdina          | ტენი, ნესტი, ტესტი, ტენტი, ჟესტი   | ტესტი, ტენტი, ჟესტი                | იჟსენტტ | 7×5  |         70 |
|   248 | mdina          | მჟავე, ვენა, წნევა, მწვანე, ამწე   | მჟავე, წნევა                       | ნავმწჟე | 6×5  |         72 |
|   249 | mdina          | ურდო, ლორი, ორსული, როლი, სურდო    | ორსული, სურდო                      | ლრიდოსუ | 7×5  |         70 |
|   250 | mdina          | მზა, ზარალი, მალა, ლამაზი, ზარი    | ზარალი, ლამაზი                     | იალარმზ | 7×5  |         70 |

## Remaining unused approved words (473)

| Word   | Meaning                                           | Source                                                                                          |
| ------ | ------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| აბზაცი | paragraph                                         | [source](https://en.wiktionary.org/w/index.php?title=აბზაცი&oldid=91914485)                     |
| აგენტი | agent                                             | [source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114)                     |
| ადგილი | place                                             | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114)                     |
| ადვილი | easy                                              | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563)                     |
| ავაზა  | cheetah                                           | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)                      |
| ავარია | accident                                          | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031)                     |
| აივანი | balcony                                           | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190)                     |
| აკვანი | cradle                                            | [source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814)                     |
| ალიონი | dawn                                              | [source](https://en.wiktionary.org/w/index.php?title=ალიონი&oldid=84112474)                     |
| ალმასი | diamond                                           | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482)                     |
| ამბავი | story, news                                       | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516)                     |
| ანდაზა | proverb                                           | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575)                     |
| ანკეტა | questionnaire                                     | [source](https://en.wiktionary.org/w/index.php?title=ანკეტა&oldid=84112645)                     |
| ანონსი | announcement                                      | [source](https://en.wiktionary.org/w/index.php?title=ანონსი&oldid=84097349)                     |
| არსება | creature; being                                   | [source](https://en.wiktionary.org/w/index.php?title=არსება&oldid=88400654)                     |
| არქივი | archive                                           | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427)                     |
| არწივი | eagle                                             | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068)                     |
| ასკილი | dog rose                                          | [source](https://en.wiktionary.org/w/index.php?title=ასკილი&oldid=88091340)                     |
| აფთარი | hyena                                             | [source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116)                     |
| აქლემი | camel                                             | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908)                     |
| აქცია  | action, promotion                                 | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)                      |
| აღვირი | bridle                                            | [source](https://en.wiktionary.org/w/index.php?title=აღვირი&oldid=92127736)                     |
| აღლუმი | parade                                            | [source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A6%E1%83%9A%E1%83%A3%E1%83%9B%E1%83%98) |
| ბადაგი | grape syrup                                       | [source](https://en.wiktionary.org/w/index.php?title=ბადაგი&oldid=92290638)                     |
| ბალახი | grass                                             | [source](https://en.wiktionary.org/w/index.php?title=ბალახი&oldid=85585178)                     |
| ბალეტი | ballet                                            | [source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557)                     |
| ბალიში | pillow, cushion                                   | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170)                     |
| ბანერი | advertising banner                                | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%9C%E1%83%94%E1%83%A0%E1%83%98) |
| ბარათი | card; letter                                      | [source](https://en.wiktionary.org/w/index.php?title=ბარათი&oldid=85067525)                     |
| ბარტყი | chick                                             | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362)                     |
| ბაქანი | platform                                          | [source](https://en.wiktionary.org/w/index.php?title=ბაქანი&oldid=84113388)                     |
| ბაღჩა  | small garden                                      | [source](https://en.wiktionary.org/w/index.php?title=ბაღჩა&oldid=84915794)                      |
| ბაყაყი | frog                                              | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131)                     |
| ბაწარი | string, cord                                      | [source](https://en.wiktionary.org/w/index.php?title=ბაწარი&oldid=92228016)                     |
| ბებია  | grandmother, grannie, granny                      | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)                      |
| ბერეტი | beret                                             | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646)                     |
| ბეტონი | concrete                                          | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651)                     |
| ბეღელი | granary                                           | [source](https://en.wiktionary.org/w/index.php?title=ბეღელი&oldid=84113473)                     |
| ბეღურა | sparrow                                           | [source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232)                     |
| ბეჭედი | ring                                              | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424)                     |
| ბირთვი | core                                              | [source](https://en.wiktionary.org/w/index.php?title=ბირთვი&oldid=84113525)                     |
| ბიცოლა | aunt                                              | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800)                     |
| ბიძგი  | push                                              | [source](https://en.wiktionary.org/w/index.php?title=ბიძგი&oldid=84097695)                      |
| ბოლქვი | bulb                                              | [source](https://en.wiktionary.org/w/index.php?title=ბოლქვი&oldid=84097704)                     |
| ბომბი  | bomb                                              | [source](https://en.wiktionary.org/w/index.php?title=ბომბი&oldid=84097706)                      |
| ბონუსი | bonus reward                                      | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%9C%E1%83%A3%E1%83%A1%E1%83%98) |
| ბორანი | ferry                                             | [source](https://en.wiktionary.org/w/index.php?title=ბორანი&oldid=84097707)                     |
| ბოროტი | evil; wicked                                      | [source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020)                     |
| ბორცვი | hillock                                           | [source](https://en.wiktionary.org/w/index.php?title=ბორცვი&oldid=84097714)                     |
| ბრენდი | brand                                             | [source](https://en.wiktionary.org/w/index.php?title=ბრენდი&oldid=92336216)                     |
| ბრინჯი | rice                                              | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506)                     |
| ბრძენი | wise                                              | [source](https://en.wiktionary.org/w/index.php?title=ბრძენი&oldid=84089626)                     |
| ბუნება | nature                                            | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241)                     |
| ბუსუსი | fuzz                                              | [source](https://en.wiktionary.org/w/index.php?title=ბუსუსი&oldid=84097785)                     |
| ბუტკო  | pistil                                            | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)                      |
| ბუჩქი  | bush, shrub                                       | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)                      |
| ბუხარი | fireplace                                         | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056)                     |
| გვალვა | drought                                           | [source](https://en.wiktionary.org/w/index.php?title=გვალვა&oldid=92490376)                     |
| გვერდი | page; side                                        | [source](https://en.wiktionary.org/w/index.php?title=გვერდი&oldid=88051247)                     |
| გოგო   | girl                                              | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)                       |
| გონება | mind; intellect                                   | [source](https://en.wiktionary.org/w/index.php?title=გონება&oldid=92692374)                     |
| გორაკი | hillock                                           | [source](https://en.wiktionary.org/w/index.php?title=გორაკი&oldid=85057574)                     |
| გრანტი | grant; scholarship                                | [source](https://en.wiktionary.org/w/index.php?title=გრანტი&oldid=88392548)                     |
| გრძელი | long                                              | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966)                     |
| გუბე   | puddle                                            | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)                       |
| გუნდა  | ball, snowball                                    | [source](https://en.wiktionary.org/w/index.php?title=გუნდა&oldid=87601776)                      |
| გუფთა  | meatball dish                                     | [source](https://en.wiktionary.org/w/index.php?title=გუფთა&oldid=77583955)                      |
| დარაბა | window shutter                                    | [source](https://en.wiktionary.org/w/index.php?title=დარაბა&oldid=85046584)                     |
| დაქალი | close female friend                               | [source](https://en.wiktionary.org/w/index.php?title=დაქალი&oldid=84114443)                     |
| დედალი | female animal                                     | [source](https://en.wiktionary.org/w/index.php?title=დედალი&oldid=91716454)                     |
| დეტალი | detail                                            | [source](https://en.wiktionary.org/w/index.php?title=დეტალი&oldid=85506724)                     |
| დივანი | sofa                                              | [source](https://en.wiktionary.org/w/index.php?title=დივანი&oldid=84114587)                     |
| დიზელი | diesel                                            | [source](https://en.wiktionary.org/w/index.php?title=დიზელი&oldid=84098181)                     |
| დილერი | dealer                                            | [source](https://en.wiktionary.org/w/index.php?title=დილერი&oldid=84098185)                     |
| დომინო | domino game                                       | [source](https://en.wiktionary.org/w/index.php?title=დომინო&oldid=84098244)                     |
| დროული | timely                                            | [source](https://en.wiktionary.org/w/index.php?title=დროული&oldid=84090042)                     |
| დუეტი  | duet                                              | [source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)                      |
| ეკრანი | screen                                            | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327)                     |
| ელფერი | shade, tint                                       | [source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98) |
| ერთობა | unity                                             | [source](https://en.wiktionary.org/w/index.php?title=ერთობა&oldid=84114925)                     |
| ესკიზი | sketch                                            | [source](https://en.wiktionary.org/w/index.php?title=ესკიზი&oldid=84114959)                     |
| ეფექტი | effect                                            | [source](https://en.wiktionary.org/w/index.php?title=ეფექტი&oldid=84114983)                     |
| ექთანი | nurse                                             | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646)                     |
| ეშმაკი | devil                                             | [source](https://en.wiktionary.org/w/index.php?title=ეშმაკი&oldid=85068322)                     |
| ვაგონი | wagon                                             | [source](https://en.wiktionary.org/w/index.php?title=ვაგონი&oldid=92486955)                     |
| ვაჭარი | merchant                                          | [source](https://en.wiktionary.org/w/index.php?title=ვაჭარი&oldid=85067228)                     |
| ვეგანი | vegan                                             | [source](https://en.wiktionary.org/w/index.php?title=ვეგანი&oldid=85113988)                     |
| ველური | wild                                              | [source](https://en.wiktionary.org/w/index.php?title=ველური&oldid=84090127)                     |
| ვენახი | vineyard                                          | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996)                     |
| ვერაგი | treacherous                                       | [source](https://en.wiktionary.org/w/index.php?title=ვერაგი&oldid=84090130)                     |
| ვეფხვი | tiger                                             | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960)                     |
| ვიდეო  | video                                             | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)                      |
| ვირუსი | virus                                             | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530)                     |
| ვრცელი | extensive, spacious                               | [source](https://en.wiktionary.org/w/index.php?title=ვრცელი&oldid=84090141)                     |
| ზაზუნა | hamster                                           | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134)                     |
| ზეწარი | bedsheet                                          | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578)                     |
| ზიზღი  | disgust                                           | [source](https://en.wiktionary.org/w/index.php?title=ზიზღი&oldid=84115345)                      |
| თავბრუ | dizziness                                         | [source](https://en.wiktionary.org/w/index.php?title=თავბრუ&oldid=84098608)                     |
| თამადა | toastmaster                                       | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151)                     |
| თამამი | bold; confident                                   | [source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182)                     |
| თამაში | game                                              | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028)                     |
| თანხა  | amount of money                                   | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)                      |
| თაობა  | generation                                        | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)                      |
| თარიღი | date                                              | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319)                     |
| თეატრი | theatre                                           | [source](https://en.wiktionary.org/w/index.php?title=თეატრი&oldid=89024711)                     |
| თეთრი  | white                                             | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)                      |
| თეფში  | plate                                             | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)                      |
| თითი   | finger                                            | [source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)                       |
| თოჯინა | doll                                              | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714)                     |
| თუნუქი | tin plate                                         | [source](https://en.wiktionary.org/w/index.php?title=თუნუქი&oldid=84098722)                     |
| იარაღი | weapon, tool                                      | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054)                     |
| იატაკი | floor                                             | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760)                     |
| იდაყვი | elbow                                             | [source](https://en.wiktionary.org/w/index.php?title=იდაყვი&oldid=90005976)                     |
| ილუზია | illusion                                          | [source](https://en.wiktionary.org/w/index.php?title=ილუზია&oldid=68794707)                     |
| ირონია | irony                                             | [source](https://en.wiktionary.org/w/index.php?title=ირონია&oldid=84098887)                     |
| იუმორი | humor                                             | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113)                     |
| კაბელი | cable                                             | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959)                     |
| კაკაბი | partridge                                         | [source](https://en.wiktionary.org/w/index.php?title=კაკაბი&oldid=84115977)                     |
| კაკალი | walnut; walnut tree                               | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192)                     |
| კალათა | basket                                            | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984)                     |
| კამათი | argument                                          | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005)                     |
| კამეჩი | buffalo                                           | [source](https://en.wiktionary.org/w/index.php?title=კამეჩი&oldid=84116010)                     |
| კანონი | law                                               | [source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329)                     |
| კაპიკი | kopeck                                            | [source](https://en.wiktionary.org/w/index.php?title=კაპიკი&oldid=84116027)                     |
| კარადა | cupboard, wardrobe, closet                        | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032)                     |
| კარატე | karate                                            | [source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608)                     |
| კარაქი | butter                                            | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208)                     |
| კედელი | wall                                              | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872)                     |
| კეთილი | kind                                              | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581)                     |
| კენკრა | berry                                             | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952)                     |
| კვანძი | knot                                              | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089)                     |
| კვარცი | quartz                                            | [source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421)                     |
| კლანჭი | claw                                              | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695)                     |
| კლიპი  | music video                                       | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9A%E1%83%98%E1%83%9E%E1%83%98)          |
| კლიშე  | cliché                                            | [source](https://en.wiktionary.org/w/index.php?title=კლიშე&oldid=84099154)                      |
| კლონი  | clone                                             | [source](https://en.wiktionary.org/w/index.php?title=კლონი&oldid=84099156)                      |
| კოდალა | woodpecker                                        | [source](https://en.wiktionary.org/w/index.php?title=კოდალა&oldid=87900485)                     |
| კოკორი | flower bud                                        | [source](https://en.wiktionary.org/w/index.php?title=კოკორი&oldid=88091590)                     |
| კოლეგა | colleague                                         | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090)                     |
| კოლეჯი | college                                           | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%9A%E1%83%94%E1%83%AF%E1%83%98) |
| კოლონა | convoy                                            | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%90) |
| კოლოფი | box                                               | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231)                     |
| კომეტა | comet                                             | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201)                     |
| კომოდი | chest of drawers                                  | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206)                     |
| კონუსი | cone                                              | [source](https://en.wiktionary.org/w/index.php?title=კონუსი&oldid=84099277)                     |
| კონცხი | cape                                              | [source](https://en.wiktionary.org/w/index.php?title=კონცხი&oldid=84099289)                     |
| კოღო   | mosquito                                          | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)                       |
| კოცონი | bonfire                                           | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332)                     |
| კოხტა  | neat, attractive                                  | [source](https://en.wiktionary.org/w/index.php?title=კოხტა&oldid=75374694)                      |
| კუთხე  | corner                                            | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)                      |
| კულული | curl                                              | [source](https://en.wiktionary.org/w/index.php?title=კულული&oldid=84099390)                     |
| კუპონი | coupon                                            | [source](https://en.wiktionary.org/w/index.php?title=კუპონი&oldid=84099396)                     |
| კურკა  | fruit stone                                       | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)                      |
| ლაზერი | laser                                             | [source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416)                     |
| ლექცია | lecture                                           | [source](https://en.wiktionary.org/w/index.php?title=ლექცია&oldid=88917235)                     |
| ლიდერი | leader                                            | [source](https://en.wiktionary.org/w/index.php?title=ლიდერი&oldid=84116502)                     |
| ლითონი | metal                                             | [source](https://en.wiktionary.org/w/index.php?title=ლითონი&oldid=59533173)                     |
| ლიმონი | lemon                                             | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519)                     |
| ლოგიკა | logic                                             | [source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159)                     |
| ლუკმა  | bite, morsel                                      | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)                      |
| მამიდა | paternal aunt                                     | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651)                     |
| მამული | ancestral estate                                  | [source](https://en.wiktionary.org/w/index.php?title=მამული&oldid=92289536)                     |
| მარანი | wine cellar                                       | [source](https://en.wiktionary.org/w/index.php?title=მარანი&oldid=84116688)                     |
| მარილი | salt                                              | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420)                     |
| მარცხი | failure; defeat                                   | [source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693)                     |
| მარჯვე | skillful, dexterous                               | [source](https://en.wiktionary.org/w/index.php?title=მარჯვე&oldid=84088864)                     |
| მასალა | material                                          | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175)                     |
| მატყლი | wool                                              | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270)                     |
| მაღალი | tall; high                                        | [source](https://en.wiktionary.org/w/index.php?title=მაღალი&oldid=84090444)                     |
| მაჩვი  | badger                                            | [source](https://en.wiktionary.org/w/index.php?title=მაჩვი&oldid=84116792)                      |
| მაწონი | matsoni yogurt                                    | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051)                     |
| მდედრი | female animal                                     | [source](https://en.wiktionary.org/w/index.php?title=მდედრი&oldid=84090473)                     |
| მეთოდი | method                                            | [source](https://en.wiktionary.org/w/index.php?title=მეთოდი&oldid=84099800)                     |
| მეკარე | goalkeeper                                        | [source](https://en.wiktionary.org/w/index.php?title=მეკარე&oldid=84116856)                     |
| მელანი | ink                                               | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862)                     |
| მელოტი | bald                                              | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872)                     |
| მეწაღე | shoemaker                                         | [source](https://en.wiktionary.org/w/index.php?title=მეწაღე&oldid=84099917)                     |
| მზიანი | sunny                                             | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151)                     |
| მთვარე | moon                                              | [source](https://en.wiktionary.org/w/index.php?title=მთვარე&oldid=92701984)                     |
| მთიანი | mountainous                                       | [source](https://en.wiktionary.org/w/index.php?title=მთიანი&oldid=88592489)                     |
| მიდამო | surrounding area                                  | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%98%E1%83%93%E1%83%90%E1%83%9B%E1%83%9D) |
| მიზეზი | reason                                            | [source](https://en.wiktionary.org/w/index.php?title=მიზეზი&oldid=84099946)                     |
| მინუსი | minus                                             | [source](https://en.wiktionary.org/w/index.php?title=მინუსი&oldid=84099990)                     |
| მირაჟი | mirage                                            | [source](https://en.wiktionary.org/w/index.php?title=მირაჟი&oldid=84099992)                     |
| მკაფიო | clear, distinct                                   | [source](https://en.wiktionary.org/w/index.php?title=მკაფიო&oldid=59804862)                     |
| მკაცრი | strict                                            | [source](https://en.wiktionary.org/w/index.php?title=მკაცრი&oldid=84088882)                     |
| მკერდი | chest; breast                                     | [source](https://en.wiktionary.org/w/index.php?title=მკერდი&oldid=84117115)                     |
| მოდური | fashionable                                       | [source](https://en.wiktionary.org/w/index.php?title=მოდური&oldid=84088886)                     |
| მომხრე | supporter                                         | [source](https://en.wiktionary.org/w/index.php?title=მომხრე&oldid=33309720)                     |
| მონეტა | coin                                              | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079)                     |
| მოპედი | moped                                             | [source](https://en.wiktionary.org/w/index.php?title=მოპედი&oldid=84524460)                     |
| მორალი | moral                                             | [source](https://en.wiktionary.org/w/index.php?title=მორალი&oldid=84100099)                     |
| მორევი | whirlpool                                         | [source](https://en.wiktionary.org/w/index.php?title=მორევი&oldid=86570234)                     |
| მორიგე | person on duty                                    | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%A0%E1%83%98%E1%83%92%E1%83%94) |
| მოტივი | motif                                             | [source](https://en.wiktionary.org/w/index.php?title=მოტივი&oldid=84100123)                     |
| მოწაფე | pupil, apprentice                                 | [source](https://en.wiktionary.org/w/index.php?title=მოწაფე&oldid=88722174)                     |
| მოწმე  | witness                                           | [source](https://en.wiktionary.org/w/index.php?title=მოწმე&oldid=84100153)                      |
| მოხუცი | elderly person                                    | [source](https://en.wiktionary.org/w/index.php?title=მოხუცი&oldid=88799725)                     |
| მჟავა  | acid                                              | [source](https://en.wiktionary.org/w/index.php?title=მჟავა&oldid=84117295)                      |
| მტვერი | dust                                              | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826)                     |
| მტკიცე | firm; sturdy                                      | [source](https://en.wiktionary.org/w/index.php?title=მტკიცე&oldid=84088908)                     |
| მურაბა | jam, fruit preserve                               | [source](https://en.wiktionary.org/w/index.php?title=მურაბა&oldid=84100195)                     |
| მუსიკა | music                                             | [source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574)                     |
| მუცელი | stomach, tummy                                    | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402)                     |
| მღვიმე | cavern                                            | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497)                     |
| მყიფე  | fragile                                           | [source](https://en.wiktionary.org/w/index.php?title=მყიფე&oldid=75374822)                      |
| მყრალი | foul-smelling                                     | [source](https://en.wiktionary.org/w/index.php?title=მყრალი&oldid=84090627)                     |
| მყუდრო | cozy, tranquil                                    | [source](https://en.wiktionary.org/w/index.php?title=მყუდრო&oldid=88415302)                     |
| მშიერი | hungry                                            | [source](https://en.wiktionary.org/w/index.php?title=მშიერი&oldid=84088912)                     |
| მჩატე  | lightweight                                       | [source](https://en.wiktionary.org/w/index.php?title=მჩატე&oldid=75256761)                      |
| მცდარი | incorrect; mistaken                               | [source](https://en.wiktionary.org/w/index.php?title=მცდარი&oldid=84088557)                     |
| მძიმე  | heavy                                             | [source](https://en.wiktionary.org/w/index.php?title=მძიმე&oldid=81821575)                      |
| მწვავე | sharp; acute                                      | [source](https://en.wiktionary.org/w/index.php?title=მწვავე&oldid=75374844)                     |
| მწნილი | pickled food                                      | [source](https://en.wiktionary.org/w/index.php?title=მწნილი&oldid=84100246)                     |
| მჭიდრო | tight; densely packed                             | [source](https://en.wiktionary.org/w/index.php?title=მჭიდრო&oldid=84088917)                     |
| ნაბადი | felt cloak                                        | [source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951)                     |
| ნაბიჯი | footstep                                          | [source](https://en.wiktionary.org/w/index.php?title=ნაბიჯი&oldid=92709978)                     |
| ნაგავი | rubbish                                           | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259)                     |
| ნაგაზი | sheepdog                                          | [source](https://en.wiktionary.org/w/index.php?title=ნაგაზი&oldid=87732950)                     |
| ნაერთი | compound                                          | [source](https://en.wiktionary.org/w/index.php?title=ნაერთი&oldid=84100263)                     |
| ნაზუქი | sweet spiced bread                                | [source](https://en.wiktionary.org/w/index.php?title=ნაზუქი&oldid=93365246)                     |
| ნათელი | bright; clear                                     | [source](https://en.wiktionary.org/w/index.php?title=ნათელი&oldid=85476155)                     |
| ნათურა | light bulb                                        | [source](https://en.wiktionary.org/w/index.php?title=ნათურა&oldid=88113865)                     |
| ნაკადი | gush, spurt, squirt, stream                       | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276)                     |
| ნალექი | precipitation                                     | [source](https://en.wiktionary.org/w/index.php?title=ნალექი&oldid=84117542)                     |
| ნამუსი | conscience                                        | [source](https://en.wiktionary.org/w/index.php?title=ნამუსი&oldid=84117554)                     |
| ნაპირი | shore, strand, waterside                          | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827)                     |
| ნატეხი | fragment, shard                                   | [source](https://en.wiktionary.org/w/index.php?title=ნატეხი&oldid=84100309)                     |
| ნაფოტი | wood chip                                         | [source](https://en.wiktionary.org/w/index.php?title=ნაფოტი&oldid=84100314)                     |
| ნაღდი  | cash                                              | [source](https://en.wiktionary.org/w/index.php?title=ნაღდი&oldid=84117574)                      |
| ნაღები | cream                                             | [source](https://en.wiktionary.org/w/index.php?title=ნაღები&oldid=84096713)                     |
| ნაყინი | ice cream                                         | [source](https://en.wiktionary.org/w/index.php?title=ნაყინი&oldid=84117582)                     |
| ნაყოფი | fruit of a plant                                  | [source](https://en.wiktionary.org/w/index.php?title=ნაყოფი&oldid=89105168)                     |
| ნაცარი | ash                                               | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231)                     |
| ნაწილი | part; portion                                     | [source](https://en.wiktionary.org/w/index.php?title=ნაწილი&oldid=85068636)                     |
| ნაჭერი | piece, cloth                                      | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132)                     |
| ნახატი | picture                                           | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603)                     |
| ნახირი | cattle herd                                       | [source](https://en.wiktionary.org/w/index.php?title=ნახირი&oldid=84117611)                     |
| ნაჯახი | axe                                               | [source](https://en.wiktionary.org/w/index.php?title=ნაჯახი&oldid=84117618)                     |
| ნეკნი  | rib                                               | [source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)                      |
| ნიგოზი | walnut                                            | [source](https://en.wiktionary.org/w/index.php?title=ნიგოზი&oldid=87748816)                     |
| ნიკაპი | chin                                              | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203)                     |
| ნიმუში | sample                                            | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676)                     |
| ნიჟარა | shell; sink                                       | [source](https://en.wiktionary.org/w/index.php?title=ნიჟარა&oldid=84117680)                     |
| ნიშანი | sign                                              | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468)                     |
| ნომერი | number label; hotel room                          | [source](https://en.wiktionary.org/w/index.php?title=ნომერი&oldid=84117710)                     |
| ოაზისი | oasis                                             | [source](https://en.wiktionary.org/w/index.php?title=ოაზისი&oldid=91756327)                     |
| ობობა  | spider                                            | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)                      |
| ოპტიკა | optics                                            | [source](https://en.wiktionary.org/w/index.php?title=ოპტიკა&oldid=84100472)                     |
| ორთქლი | steam                                             | [source](https://en.wiktionary.org/w/index.php?title=ორთქლი&oldid=87900924)                     |
| ორმაგი | double; twofold                                   | [source](https://en.wiktionary.org/w/index.php?title=ორმაგი&oldid=91733129)                     |
| ოსტატი | master craftsman                                  | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588)                     |
| პაკეტი | packet                                            | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015)                     |
| პალატა | hospital ward                                     | [source](https://en.wiktionary.org/w/index.php?title=პალატა&oldid=85068638)                     |
| პანელი | panel                                             | [source](https://en.wiktionary.org/w/index.php?title=პანელი&oldid=84100554)                     |
| პანიკა | panic                                             | [source](https://en.wiktionary.org/w/index.php?title=პანიკა&oldid=84117941)                     |
| პაროლი | password                                          | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601)                     |
| პარტია | political party                                   | [source](https://en.wiktionary.org/w/index.php?title=პარტია&oldid=88896345)                     |
| პასტა  | paste                                             | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)                      |
| პატივი | honor                                             | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548)                     |
| პაუზა  | pause                                             | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)                      |
| პედალი | pedal                                             | [source](https://en.wiktionary.org/w/index.php?title=პედალი&oldid=84100646)                     |
| პენალი | pencil case                                       | [source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%94%E1%83%9C%E1%83%90%E1%83%9A%E1%83%98) |
| პენსია | pension                                           | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867)                     |
| პილოტი | pilot                                             | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538)                     |
| პირადი | personal; private                                 | [source](https://en.wiktionary.org/w/index.php?title=პირადი&oldid=84090793)                     |
| პირობა | promise; requirement                              | [source](https://en.wiktionary.org/w/index.php?title=პირობა&oldid=85541139)                     |
| პლაჟი  | beach                                             | [source](https://en.wiktionary.org/w/index.php?title=პლაჟი&oldid=75423986)                      |
| პოეზია | poetry                                            | [source](https://en.wiktionary.org/w/index.php?title=პოეზია&oldid=88968704)                     |
| პოლუსი | pole (geography)                                  | [source](https://en.wiktionary.org/w/index.php?title=პოლუსი&oldid=84100798)                     |
| პრინცი | prince                                            | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987)                     |
| პულტი  | remote control                                    | [source](https://en.wiktionary.org/w/index.php?title=პულტი&oldid=84118223)                      |
| ჟელე   | jelly                                             | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)                       |
| ჟიური  | jury                                              | [source](https://www.ganmarteba.ge/word/%E1%83%9F%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98)          |
| ჟოლო   | raspberry                                         | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)                       |
| რაკეტა | rocket                                            | [source](https://en.wiktionary.org/w/index.php?title=რაკეტა&oldid=88002860)                     |
| რაუნდი | round                                             | [source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282)                     |
| რეზინი | rubber                                            | [source](https://en.wiktionary.org/w/index.php?title=რეზინი&oldid=60277300)                     |
| რეჟიმი | mode; regimen                                     | [source](https://en.wiktionary.org/w/index.php?title=რეჟიმი&oldid=84101045)                     |
| რობოტი | robot                                             | [source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728)                     |
| რომანი | novel                                             | [source](https://en.wiktionary.org/w/index.php?title=რომანი&oldid=84101101)                     |
| რწყილი | flea                                              | [source](https://en.wiktionary.org/w/index.php?title=რწყილი&oldid=92250765)                     |
| საბაბი | excuse; pretext                                   | [source](https://en.wiktionary.org/w/index.php?title=საბაბი&oldid=84118438)                     |
| საბაზო | basic, foundational                               | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%96%E1%83%9D) |
| საგანი | object, subject                                   | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780)                     |
| სადავო | disputed; debatable                               | [source](https://en.wiktionary.org/w/index.php?title=სადავო&oldid=59807665)                     |
| სადენი | electrical wire                                   | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
| სადილი | midday meal                                       | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533)                     |
| საერთო | common; shared                                    | [source](https://en.wiktionary.org/w/index.php?title=საერთო&oldid=88645820)                     |
| სათუთი | delicate, tender                                  | [source](https://en.wiktionary.org/w/index.php?title=სათუთი&oldid=90049130)                     |
| საკანი | cell                                              | [source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500)                     |
| სალათა | salad                                             | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797)                     |
| სალარო | cash register; ticket office                      | [source](https://en.wiktionary.org/w/index.php?title=სალარო&oldid=85820915)                     |
| სალონი | salon                                             | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194)                     |
| სამარე | grave                                             | [source](https://en.wiktionary.org/w/index.php?title=სამარე&oldid=84101196)                     |
| სამეფო | kingdom                                           | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981)                     |
| სამოსი | clothing; attire                                  | [source](https://en.wiktionary.org/w/index.php?title=სამოსი&oldid=84118646)                     |
| საპონი | soap                                              | [source](https://en.wiktionary.org/w/index.php?title=საპონი&oldid=89620271)                     |
| საუზმე | breakfast                                         | [source](https://en.wiktionary.org/w/index.php?title=საუზმე&oldid=88091259)                     |
| საუნა  | sauna                                             | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)                      |
| საფულე | wallet                                            | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843)                     |
| საღამო | evening                                           | [source](https://en.wiktionary.org/w/index.php?title=საღამო&oldid=88849236)                     |
| საღორე | pigsty                                            | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A6%E1%83%9D%E1%83%A0%E1%83%94) |
| საყელო | collar                                            | [source](https://en.wiktionary.org/w/index.php?title=საყელო&oldid=84118856)                     |
| საყურე | earring                                           | [source](https://en.wiktionary.org/w/index.php?title=საყურე&oldid=85101324)                     |
| საცავი | storage; repository                               | [source](https://en.wiktionary.org/w/index.php?title=საცავი&oldid=84103408)                     |
| საცობი | stopper; traffic jam                              | [source](https://en.wiktionary.org/w/index.php?title=საცობი&oldid=84118876)                     |
| საწოლი | bed                                               | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101)                     |
| საჯარო | public                                            | [source](https://en.wiktionary.org/w/index.php?title=საჯარო&oldid=43853043)                     |
| სეანსი | screening, session                                | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%90%E1%83%9C%E1%83%A1%E1%83%98) |
| სეტყვა | hail                                              | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560)                     |
| სექცია | section                                           | [source](https://en.wiktionary.org/w/index.php?title=სექცია&oldid=84101382)                     |
| სვიტრი | sweater                                           | [source](https://en.wiktionary.org/w/index.php?title=სვიტრი&oldid=84118977)                     |
| სიბერე | old age                                           | [source](https://en.wiktionary.org/w/index.php?title=სიბერე&oldid=84118987)                     |
| სიგანე | width                                             | [source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409)                     |
| სიგრძე | length                                            | [source](https://en.wiktionary.org/w/index.php?title=სიგრძე&oldid=84119000)                     |
| სივრცე | space; area                                       | [source](https://en.wiktionary.org/w/index.php?title=სივრცე&oldid=84119003)                     |
| სიროფი | syrup                                             | [source](https://en.wiktionary.org/w/index.php?title=სიროფი&oldid=84101529)                     |
| სისხლი | blood                                             | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162)                     |
| სიჩუმე | silence; quiet                                    | [source](https://en.wiktionary.org/w/index.php?title=სიჩუმე&oldid=84101577)                     |
| სიცივე | coldness, frigidity                               | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113)                     |
| სიცრუე | falsehood                                         | [source](https://en.wiktionary.org/w/index.php?title=სიცრუე&oldid=87305055)                     |
| სკვერი | public square                                     | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142)                     |
| სკივრი | chest                                             | [source](https://en.wiktionary.org/w/index.php?title=სკივრი&oldid=84101617)                     |
| სოფელი | village                                           | [source](https://en.wiktionary.org/w/index.php?title=სოფელი&oldid=88647104)                     |
| სპაზმი | spasm                                             | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9E%E1%83%90%E1%83%96%E1%83%9B%E1%83%98) |
| სპირტი | alcohol                                           | [source](https://en.wiktionary.org/w/index.php?title=სპირტი&oldid=87480489)                     |
| სპორტი | sport                                             | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224)                     |
| სტამბა | printing house                                    | [source](https://en.wiktionary.org/w/index.php?title=სტამბა&oldid=92529944)                     |
| სტატია | article                                           | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457)                     |
| სტენდი | display board                                     | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%94%E1%83%9C%E1%83%93%E1%83%98) |
| სტიქია | natural disaster                                  | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%98%E1%83%A5%E1%83%98%E1%83%90) |
| სტრესი | stress                                            | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A1%E1%83%98) |
| სტროფი | stanza                                            | [source](https://en.wiktionary.org/w/index.php?title=სტროფი&oldid=84101728)                     |
| სტუდია | studio                                            | [source](https://en.wiktionary.org/w/index.php?title=სტუდია&oldid=84101730)                     |
| სუნამო | perfume                                           | [source](https://en.wiktionary.org/w/index.php?title=სუნამო&oldid=84101750)                     |
| სუნელი | spice; seasoning                                  | [source](https://en.wiktionary.org/w/index.php?title=სუნელი&oldid=84103259)                     |
| სფერო  | sphere; field                                     | [source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)                      |
| სწორი  | correct; straight                                 | [source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)                      |
| სწრაფი | quick                                             | [source](https://en.wiktionary.org/w/index.php?title=სწრაფი&oldid=84119316)                     |
| სხეული | body                                              | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318)                     |
| სხვენი | attic                                             | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322)                     |
| ტაძარი | temple; cathedral                                 | [source](https://en.wiktionary.org/w/index.php?title=ტაძარი&oldid=91725864)                     |
| ტექსტი | text                                              | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105)                     |
| ტვირთი | load                                              | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860)                     |
| ტკბილი | sweet                                             | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168)                     |
| ტომარა | sack                                              | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123)                     |
| ტრავმა | trauma; injury                                    | [source](https://en.wiktionary.org/w/index.php?title=ტრავმა&oldid=84119433)                     |
| ტუმბო  | pump                                              | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)                      |
| უბრალო | simple                                            | [source](https://en.wiktionary.org/w/index.php?title=უბრალო&oldid=75271163)                     |
| უგულო  | heartless                                         | [source](https://en.wiktionary.org/w/index.php?title=უგულო&oldid=88343102)                      |
| უდაბნო | desert                                            | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660)                     |
| უდავო  | undeniable                                        | [source](https://en.wiktionary.org/w/index.php?title=უდავო&oldid=28797786)                      |
| უეცარი | sudden                                            | [source](https://en.wiktionary.org/w/index.php?title=უეცარი&oldid=84089033)                     |
| უიღბლო | unlucky                                           | [source](https://en.wiktionary.org/w/index.php?title=უიღბლო&oldid=84119570)                     |
| ულვაში | mustache                                          | [source](https://en.wiktionary.org/w/index.php?title=ულვაში&oldid=85065856)                     |
| უმწეო  | helpless                                          | [source](https://en.wiktionary.org/w/index.php?title=უმწეო&oldid=83145068)                      |
| უნაკლო | flawless                                          | [source](https://en.wiktionary.org/w/index.php?title=უნაკლო&oldid=84119652)                     |
| უფასო  | free of charge                                    | [source](https://en.wiktionary.org/w/index.php?title=უფასო&oldid=84119719)                      |
| უცნობი | unknown; unfamiliar                               | [source](https://en.wiktionary.org/w/index.php?title=უცნობი&oldid=84089062)                     |
| უძრავი | immobile; stationary                              | [source](https://en.wiktionary.org/w/index.php?title=უძრავი&oldid=84091194)                     |
| უჯრედი | cell                                              | [source](https://en.wiktionary.org/w/index.php?title=უჯრედი&oldid=85068642)                     |
| ფასადი | façade                                            | [source](https://en.wiktionary.org/w/index.php?title=ფასადი&oldid=84119798)                     |
| ფაქიზი | delicate                                          | [source](https://en.wiktionary.org/w/index.php?title=ფაქიზი&oldid=84091230)                     |
| ფერადი | colourful                                         | [source](https://en.wiktionary.org/w/index.php?title=ფერადი&oldid=84091239)                     |
| ფერფლი | ash                                               | [source](https://en.wiktionary.org/w/index.php?title=ფერფლი&oldid=84102202)                     |
| ფიზიკა | physics                                           | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730)                     |
| ფილტვი | lung                                              | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916)                     |
| ფინალი | final                                             | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241)                     |
| ფირუზი | turquoise                                         | [source](https://en.wiktionary.org/w/index.php?title=ფირუზი&oldid=84088596)                     |
| ფიფქი  | snowflake                                         | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)                      |
| ფიცარი | plank                                             | [source](https://en.wiktionary.org/w/index.php?title=ფიცარი&oldid=84102256)                     |
| ფოლადი | steel                                             | [source](https://en.wiktionary.org/w/index.php?title=ფოლადი&oldid=84119907)                     |
| ფორუმი | forum                                             | [source](https://en.wiktionary.org/w/index.php?title=ფორუმი&oldid=68804865)                     |
| ფრესკა | fresco                                            | [source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351)                     |
| ფსკერი | bottom                                            | [source](https://en.wiktionary.org/w/index.php?title=ფსკერი&oldid=84119972)                     |
| ფუნჯი  | brush                                             | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)                      |
| ფქვილი | flour                                             | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987)                     |
| ქაბაბი | kebab                                             | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993)                     |
| ქათამი | chicken                                           | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996)                     |
| ქალაქი | city                                              | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093)                     |
| ქანჩი  | nut (fastener)                                    | [source](https://en.wiktionary.org/w/index.php?title=ქანჩი&oldid=78853155)                      |
| ქვევრი | qvevri wine vessel                                | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687)                     |
| ქვეითი | pedestrian                                        | [source](https://en.wiktionary.org/w/index.php?title=ქვეითი&oldid=84120089)                     |
| ქვრივი | widow or widower                                  | [source](https://en.wiktionary.org/w/index.php?title=ქვრივი&oldid=84120114)                     |
| ქინძი  | coriander                                         | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)                      |
| ქომაგი | defender                                          | [source](https://en.wiktionary.org/w/index.php?title=ქომაგი&oldid=91733127)                     |
| ქოჩორი | tuft of hair                                      | [source](https://en.wiktionary.org/w/index.php?title=ქოჩორი&oldid=84120158)                     |
| ქრთამი | bribe                                             | [source](https://en.wiktionary.org/w/index.php?title=ქრთამი&oldid=92921065)                     |
| ღამურა | bat                                               | [source](https://en.wiktionary.org/w/index.php?title=ღამურა&oldid=92290634)                     |
| ღარიბი | poor                                              | [source](https://en.wiktionary.org/w/index.php?title=ღარიბი&oldid=84120206)                     |
| ღერძი  | axle; axis                                        | [source](https://en.wiktionary.org/w/index.php?title=ღერძი&oldid=84120210)                      |
| ღვიძლი | liver                                             | [source](https://en.wiktionary.org/w/index.php?title=ღვიძლი&oldid=92719057)                     |
| ღილაკი | push-button                                       | [source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%98%E1%83%9A%E1%83%90%E1%83%99%E1%83%98) |
| ღობე   | fence, hedge                                      | [source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)                       |
| ღუმელი | stove                                             | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256)                     |
| ყაბაყი | zucchini                                          | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258)                     |
| ყაჩაღი | robber                                            | [source](https://en.wiktionary.org/w/index.php?title=ყაჩაღი&oldid=84120295)                     |
| ყვავი  | crow                                              | [source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)                      |
| ყინული | ice                                               | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551)                     |
| ყორანი | raven                                             | [source](https://en.wiktionary.org/w/index.php?title=ყორანი&oldid=92709834)                     |
| ყოჩი   | ram                                               | [source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)                       |
| ყულაბა | money box                                         | [source](https://en.wiktionary.org/w/index.php?title=ყულაბა&oldid=84751497)                     |
| შაბათი | Saturday                                          | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658)                     |
| შაქარი | sugar                                             | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621)                     |
| შენობა | building                                          | [source](https://en.wiktionary.org/w/index.php?title=შენობა&oldid=84102610)                     |
| შეშა   | firewood                                          | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)                       |
| შინდი  | cornelian cherry                                  | [source](https://en.wiktionary.org/w/index.php?title=შინდი&oldid=87901604)                      |
| შრიფტი | typeface                                          | [source](https://en.wiktionary.org/w/index.php?title=შრიფტი&oldid=84435051)                     |
| შუბლი  | forehead                                          | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)                      |
| შუქურა | lighthouse                                        | [source](https://en.wiktionary.org/w/index.php?title=შუქურა&oldid=91715399)                     |
| ჩარჩო  | frame                                             | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)                      |
| ჩაქუჩი | hammer                                            | [source](https://en.wiktionary.org/w/index.php?title=ჩაქუჩი&oldid=91072323)                     |
| ჩექმა  | boot                                              | [source](https://en.wiktionary.org/w/index.php?title=ჩექმა&oldid=84120683)                      |
| ჩვევა  | habit                                             | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)                      |
| ჩლიქი  | hoof                                              | [source](https://en.wiktionary.org/w/index.php?title=ჩლიქი&oldid=92229616)                      |
| ჩოგანი | racket                                            | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726)                     |
| ჩონჩხი | skeleton                                          | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089)                     |
| ჩრდილი | shade                                             | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977)                     |
| ცაცხვი | linden tree                                       | [source](https://en.wiktionary.org/w/index.php?title=ცაცხვი&oldid=87901684)                     |
| ცბიერი | cunning                                           | [source](https://en.wiktionary.org/w/index.php?title=ცბიერი&oldid=84091583)                     |
| ცენტი  | cent                                              | [source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)                      |
| ცენტრი | center                                            | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748)                     |
| ცეცხლი | fire                                              | [source](https://en.wiktionary.org/w/index.php?title=ცეცხლი&oldid=84120800)                     |
| ცირკი  | circus                                            | [source](https://en.wiktionary.org/w/index.php?title=ცირკი&oldid=84120827)                      |
| ციცაბო | steep                                             | [source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%98%E1%83%AA%E1%83%90%E1%83%91%E1%83%9D) |
| ცნება  | concept                                           | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)                      |
| ცოდვა  | sin                                               | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)                      |
| ცოდნა  | knowledge                                         | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)                      |
| ცოცხი  | broom                                             | [source](https://en.wiktionary.org/w/index.php?title=ცოცხი&oldid=84120879)                      |
| ცხვარი | sheep                                             | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538)                     |
| ცხრილი | table; chart                                      | [source](https://en.wiktionary.org/w/index.php?title=ცხრილი&oldid=84102822)                     |
| ძარღვი | vein                                              | [source](https://en.wiktionary.org/w/index.php?title=ძარღვი&oldid=84120923)                     |
| ძეხვი  | sausage                                           | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)                      |
| ძიუდო  | judo                                              | [source](https://en.wiktionary.org/w/index.php?title=ძიუდო&oldid=88130281)                      |
| ძუნწი  | stingy                                            | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)                      |
| წამალი | medicine                                          | [source](https://en.wiktionary.org/w/index.php?title=წამალი&oldid=84120981)                     |
| წერილი | letter; written message                           | [source](https://en.wiktionary.org/w/index.php?title=წერილი&oldid=85067524)                     |
| წვივი  | shin                                              | [source](https://en.wiktionary.org/w/index.php?title=წვივი&oldid=84102879)                      |
| წვრილი | thin, fine                                        | [source](https://en.wiktionary.org/w/index.php?title=წვრილი&oldid=84089118)                     |
| წითელა | measles                                           | [source](https://en.wiktionary.org/w/index.php?title=წითელა&oldid=84102886)                     |
| წითელი | red                                               | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641)                     |
| წითური | red-haired                                        | [source](https://en.wiktionary.org/w/index.php?title=წითური&oldid=84091676)                     |
| წიწაკა | pepper                                            | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068)                     |
| წიწილა | chick                                             | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124)                     |
| წყალი  | water                                             | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)                      |
| წყვილი | pair                                              | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227)                     |
| წყნარი | quiet                                             | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680)                     |
| ჭაბუკი | young man                                         | [source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122)                     |
| ჭადარი | plane tree                                        | [source](https://en.wiktionary.org/w/index.php?title=ჭადარი&oldid=84121125)                     |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)                      |
| ჭაღარა | gray-haired                                       | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183)                     |
| ჭაჭა   | grape pomace                                      | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)                       |
| ჭუჭყი  | dirt                                              | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)                      |
| ხაბაზი | baker                                             | [source](https://en.wiktionary.org/w/index.php?title=ხაბაზი&oldid=84121183)                     |
| ხალათი | robe                                              | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200)                     |
| ხახვი  | onion                                             | [source](https://en.wiktionary.org/w/index.php?title=ხახვი&oldid=92248670)                      |
| ხელობა | craft, trade                                      | [source](https://en.wiktionary.org/w/index.php?title=ხელობა&oldid=84121262)                     |
| ხვრელი | hole                                              | [source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623)                     |
| ხოჭო   | beetle                                            | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)                       |
| ხოხობი | pheasant                                          | [source](https://en.wiktionary.org/w/index.php?title=ხოხობი&oldid=87901860)                     |
| ხსნარი | liquid solution                                   | [source](https://en.wiktionary.org/w/index.php?title=ხსნარი&oldid=85491046)                     |
| ხუნდი  | shackle                                           | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)                      |
| ხშირი  | frequent; dense                                   | [source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)                      |
| ჯარიმა | fine; penalty                                     | [source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221)                     |
| ჯიუტი  | stubborn                                          | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)                      |
| ჯიხვი  | Caucasian mountain goat                           | [source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)                      |
| ჯიხური | kiosk                                             | [source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096)                     |
| ჯოკერი | joker card                                        | [source](https://en.wiktionary.org/w/index.php?title=ჯოკერი&oldid=84121451)                     |
| ჯუჯა   | dwarf                                             | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)                       |
| ჰაერი  | air                                               | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)                      |
| ჰამაკი | hammock                                           | [source](https://en.wiktionary.org/w/index.php?title=ჰამაკი&oldid=84121484)                     |
| ჰერცი  | hertz                                             | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)                      |
