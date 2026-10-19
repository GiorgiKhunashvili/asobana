# Journey vocabulary and campaign review — revision 24

The owner reviewed replacements on 2026-10-19, concluding with **კოკა**
(traditional clay jug). The exact [29 removals and 29 additions](VOCABULARY_REPLACEMENTS_APPROVED_01.json)
are authoritative. The eight rejected proposals are also excluded from every
play role. კოლო and სურმა were absent and explicitly skipped by the owner.
Unselected alternatives remain unapproved. Historical content JSON is unchanged.

The main pool remains **1,569 words**. The reference preserves all 1,790 old
entries and adds 29, reaching **1,819**; policy leaves **1,687 eligible words**,
including the same **118 bonus-only words**. Main-list words can also earn bonuses
when formable on a board where they are not required. Bonus-only words are never
used to build required answers or variants.

## Measured results

| Measure                         | Before (v23) | After (v24) |
| ------------------------------- | -----------: | ----------: |
| Levels / stops                  |     295 / 59 |    295 / 59 |
| Required answer slots           |        1,475 |       1,475 |
| Main approvals                  |        1,569 |       1,569 |
| Distinct required words         |        1,187 |       1,165 |
| Repeated slots beyond first use |          288 |         310 |
| Unused approved words           |          382 |         404 |
| Minimum repeat gap              |           75 |          75 |

**Repetition increased by 22 slots**, from 19.53% to
21.02%. It did not improve. Removing short words eliminates
useful five-answer wheel combinations; the approved additions do not recover all
lost coverage under the existing layout, length, spacing and pacing constraints.
This is the best result found in a bounded search, not proof of the best possible
campaign. The search never relaxed a content rule to increase coverage.

The 29 removals previously occupied **43 required slots on 40 boards**; two were
unused. The rebuild changes answer sets on **257 boards**.
It uses **17 of the 29 additions** and brings **48
previously unused existing approvals** into required play. The other
12 additions remain available for future generation and bonuses.

Frequency distribution: 894 words once,
234 twice, 35 three times,
and 2 four times. All repeats are at least
75 levels apart. Bonus appearances are excluded from these counts.

## Search and review

The pool contains 132,006 valid candidate boards, covering 1,543 approved words.
Selection started with repairs to the 40 affected boards, then optimized overlapping
40-board sections, a whole-campaign model, expanded wheels around the 29 additions,
and final individual-board improvements. Coverage improved from 1,145 in the first
valid repair to 1,165. Distinct coverage was the primary objective,
followed by reducing repeated uses. The search is finite and cannot certify global
optimality. Its local scripts, logs and full slot audit are under
`artifacts/journey-v24/`.

Every required spelling and canonical-only accepted variant was checked against
the explicit allowlist and source-linked approved sense. All 1,475 slots are
listed below; no unapproved spelling, plural noun, reserved rare word or newly
rejected word appears as a target. Every eligible formable bonus is retained.
All 295 boards pass both crossword and campaign constraints: exact five answers,
3–6 letters, connected crossings, tile multiplicity, no accidental runs, unique
wheels, density, phone-size gates, gradual length progression and chapter pacing.
Source verification and owner decisions remain attached to each addition. These
checks do not constitute native-device playtesting or new native-speaker review.

## Compatibility and validation

The route remains `content/journey-v23.json`; countries, facts, backgrounds and
postcards are unchanged. The active pack, recipes, reviewed digest, reference and
allowlist now use revision 24. Old packs and dictionaries remain immutable.
Migration supports revisions 1–23, preserving completed boards, partial solved
credits, coins, paid hints, settings, postcards and lifetime bonus rewards across
restart. The historical hint-credit ceiling increases from 1,544 to 1,586 so a
previously credited board can receive hints after replacement.

Validation on 2026-10-19:

- Generator: all 142 pytest tests passed, including deterministic v24 rebuilding
  and exact owner decisions; Ruff lint/format and mypy passed.
- Local iOS JavaScript/assets export passed. It is not a native-device test and
  uses no Expo cloud build credits.
- Hash verification confirms all 87 historical content JSON files are unchanged.
- Root `npm run check` passed: TypeScript, ESLint, all 271 tests in 35 suites,
  all 295 levels validated and solved, and repository formatting. The v23
  partial/completed save regressions preserve removed-answer credits and paid
  hints through SQLite reload. Historical Malta/Tunisia tests use their original
  vocabulary, matching immutable packs.
- `git diff --check` passed.

No TestFlight upload or native-device playtest is part of this content update.

## The 29 approved replacements

| Word   | Approved meaning                    | Required levels |
| ------ | ----------------------------------- | --------------- |
| არეალი | area, range                         | Unused          |
| აუდიტი | financial audit                     | Unused          |
| ბელადი | leader, chief                       | Unused          |
| ბიტი   | bit; unit of digital information    | 23, 155         |
| ბიუსტი | sculpture of a head and upper chest | Unused          |
| გენია  | exceptional creative talent         | 129             |
| დემონი | demon, evil spirit                  | Unused          |
| ვოკალი | vocals                              | 169             |
| კაცური | honorable, decent                   | Unused          |
| მადლი  | kindness, grace                     | 127             |
| მაიორი | major; military rank                | Unused          |
| ნუსხა  | list                                | 80              |
| პოკერი | poker; card game                    | 30              |
| საველე | field-related                       | Unused          |
| საკმაო | sufficient                          | Unused          |
| საძილე | for sleeping; as in sleeping bag    | 291             |
| სტაჟი  | length of work experience           | 119             |
| სტარტი | starting point of a race            | Unused          |
| უქმე   | non-working; as in a day off        | 109             |
| ქალური | feminine                            | 104             |
| შტორმი | storm at sea                        | 236             |
| ჯაგარი | bristle, coarse hair                | Unused          |
| ჯებირი | embankment holding back water       | 73              |
| ვატი   | watt; unit of power                 | 102, 190        |
| გრუნტი | ground, soil or foundation material | Unused          |
| სამბო  | sambo; wrestling sport              | 254             |
| ტრიუკი | acrobatic stunt                     | 267             |
| ურყევი | steadfast, firm                     | 45              |
| კოკა   | traditional clay jug                | 153             |

## Removed spellings

აკრი, არია, ბოლქვი, ბუკი, ბუტკო, გობი, დარაბა, ზნე, თექა, კავი, კალა, კანოე, კირი, კომლი, კოჭა, კუპრი, მურა, მუსი, ოსპი, პაპი, ტენი, ურდო, ფეტვი, ფისი, ქალა, ქარვა, ჩუმად, ცური, წავი.

Rejected proposals: გონი, მასივი, მორიგი, ტემბრი, უვიზო, კამარა, შტოში, კახელი.

## All 295 boards

| Level | Stop           | Required answers                   |
| ----- | -------------- | ---------------------------------- |
| 1     | tbilisi        | ვადა, ყავა, ყდა, დავა, ავად        |
| 2     | tbilisi        | კერა, კეფა, ფრე, ერა, კაფე         |
| 3     | tbilisi        | შალი, ვილა, შავი, ვაშლი, ვალი      |
| 4     | tbilisi        | არსი, სარი, ქირა, ქარი, ქისა       |
| 5     | tbilisi        | ობი, როლი, ბოლი, ლორი, ბროლი       |
| 6     | mtskheta       | ასო, დროშა, სოდა, შორს, დრო        |
| 7     | mtskheta       | თხა, ოთახი, თახვი, თოხი, თიხა      |
| 8     | mtskheta       | დაფა, ფარა, ფარდა, არფა, გრაფა     |
| 9     | mtskheta       | ხორცი, რუხი, ცრუ, ურო, უცხო        |
| 10    | mtskheta       | ქილა, ქალი, ქოლგა, გოლი, ოლქი      |
| 11    | ananuri        | ბლოკი, კლუბი, კუბი, კუბო, კიბო     |
| 12    | ananuri        | ვაზი, ზვავი, ავზი, გზა, გაზი       |
| 13    | ananuri        | თოვლი, თოლია, თავი, ავი, ოვალი     |
| 14    | ananuri        | ღერძი, ღერი, ღარი, რძე, ძერა       |
| 15    | ananuri        | უკან, ურიკა, კანი, რუკა, ნუკრი     |
| 16    | kazbegi        | ჭოკი, ჭორი, კორტი, რკო, კოჭი       |
| 17    | kazbegi        | ტილო, ტოლი, შოლტი, შოკი, შტო       |
| 18    | kazbegi        | ვენა, მავნე, მწვანე, ამწე, ენა     |
| 19    | kazbegi        | ჭია, კაუჭი, მუჭა, ჭკუა, კუჭი       |
| 20    | kazbegi        | ფოლადი, დილა, ფილა, ოდა, ოფლი      |
| 21    | tusheti        | ზარი, რაზმი, ფარი, ფირმა, მზა      |
| 22    | tusheti        | თემა, მანეთი, მთა, ნამი, თმა       |
| 23    | tusheti        | ბიტი, საიტი, ბაიტი, ბატი, ბასი     |
| 24    | tusheti        | თემი, ზეიმი, მზე, მითი, ზეთი       |
| 25    | tusheti        | ლომი, მოდული, უმი, დოლი, ლოდი      |
| 26    | sighnaghi      | ნაშთი, ნიშა, ქონი, ქოთანი, შნო     |
| 27    | sighnaghi      | მიწა, მოდა, წამი, მწვადი, წვიმა    |
| 28    | sighnaghi      | ნაზი, მიზანი, ზმნა, ზიანი, ჰიმნი   |
| 29    | sighnaghi      | ტანი, ტონა, ენოტი, ნატეხი, ნოხი    |
| 30    | sighnaghi      | პორტი, კოპი, ტრიო, პოკერი, პოეტი   |
| 31    | david-gareja   | გუდა, გუნდა, დენი, იდეა, გუნდი     |
| 32    | david-gareja   | საშიში, შაში, შიში, შოშია, სია     |
| 33    | david-gareja   | ანემია, მენჯი, ჯამი, მიჯნა, ჯანი   |
| 34    | david-gareja   | უვიცი, ფიცი, ფუჭი, ფიჭვი, ცივი     |
| 35    | david-gareja   | ფერმა, ფორმა, ალოე, მოლარე, მალე   |
| 36    | uplistsikhe    | ფაფა, რაფა, ფაფარი, ჯარი, იჯარა    |
| 37    | uplistsikhe    | პროზა, უაზრო, ეზო, პოზა, ოპერა     |
| 38    | uplistsikhe    | ლაგამი, ლამა, მაგია, ლიგა, მამალი  |
| 39    | uplistsikhe    | ჯოგი, ჯვარი, გროვა, გვარი, ჯორი    |
| 40    | uplistsikhe    | ლობიო, ობოლი, ოქრო, ქორი, ლოქო     |
| 41    | borjomi        | ძნელი, ნელი, სუნი, სუნელი, სიძე    |
| 42    | borjomi        | ბალი, ბალთა, ბაფთა, თაფლი, ალფა    |
| 43    | borjomi        | ფილტრი, ფირი, ლირა, ტარიფი, ლიტრი  |
| 44    | borjomi        | ძია, ძარღვი, ღრუ, უძრავი, ძუა      |
| 45    | borjomi        | პიურე, ყურე, პური, ურყევი, რეპი    |
| 46    | vardzia        | ომი, ალბომი, ზომბი, ზოლი, ზომა     |
| 47    | vardzia        | ღვედი, დევი, ველი, ღელე, ლეღვი     |
| 48    | vardzia        | მეტრი, მტერი, მტრედი, კიდე, კრემი  |
| 49    | vardzia        | ცელი, მცირე, მთელი, ერი, ცრემლი    |
| 50    | vardzia        | ბანკი, კანჭი, რკინა, ჭარბი, ბინა   |
| 51    | katskhi        | ყორანი, უნარი, ყრუ, ყური, ურნა     |
| 52    | katskhi        | იოდი, კოდი, პიკი, დისკი, დისკო     |
| 53    | katskhi        | მელა, ეტაპი, მეტალი, ტემპი, ალი    |
| 54    | katskhi        | ლუდი, ბუდე, უბე, იუბილე, დუელი     |
| 55    | katskhi        | რაგბი, ბაგე, გერბი, ბასრი, ბგერა   |
| 56    | racha          | ყბა, აბი, საბანი, ყანა, ყასაბი     |
| 57    | racha          | ტაქსი, ტუჩი, ჩაი, ქუჩა, ჩუსტი      |
| 58    | racha          | კვირა, კვარცი, კრავი, ცილა, კაცი   |
| 59    | racha          | ლარი, რძალი, ძილი, ძელი, ძლიერი    |
| 60    | racha          | ხახვი, ხვალ, სილა, ხალხი, ხავსი    |
| 61    | kutaisi-gelati | ხატი, ხროვა, ავტორი, ხარი, ტარი    |
| 62    | kutaisi-gelati | ფერი, ფუნტი, ტური, ფენი, ტურნე     |
| 63    | kutaisi-gelati | სვიტრი, სხივი, ხისტი, ვირი, იხვი   |
| 64    | kutaisi-gelati | გმირი, რიგი, რინგი, წიგნი, მწირი   |
| 65    | kutaisi-gelati | ეკალი, ვაკე, ჭავლი, ეჭვი, ელვა     |
| 66    | svaneti        | ბიძა, მძაფრი, ძაბრი, ძაფი, ბრმა    |
| 67    | svaneti        | დედა, დეიდა, დიდი, დიადი, ქედი     |
| 68    | svaneti        | კიტრი, კივი, კრივი, ტიტრი, კვირტი  |
| 69    | svaneti        | ბელი, ბნელი, კენჭი, კიბე, ბეჭი     |
| 70    | svaneti        | ხიბლი, ხილი, ბმული, მუხლი, მილი    |
| 71    | martvili       | გორა, გარემო, გოგრა, გეგმა, გემო   |
| 72    | martvili       | ბაბუა, ბამბა, ბზა, მუზა, ბაზა      |
| 73    | martvili       | ბერი, ლეიბი, ჯებირი, რბილი, ჯიბე   |
| 74    | martvili       | ფილე, წელი, წესი, სველი, ფესვი     |
| 75    | martvili       | ძროხა, თარო, ფხა, ფართო, ფრთა      |
| 76    | zugdidi        | ღია, იახტა, ხალი, ტალღა, ტალახი    |
| 77    | zugdidi        | ფაზა, აზრი, ფრაზა, ბაზარი, ბზარი   |
| 78    | zugdidi        | თვალი, ვალი, დათვი, ადვილი, თივა   |
| 79    | zugdidi        | ლავა, ძრავა, ჰავა, ჰალვა, ძალა     |
| 80    | zugdidi        | ნუსხა, საუნა, ხმა, მასა, მუხა      |
| 81    | makhuntseti    | ზუსტი, ტუზი, სიო, სუსტი, სოუსი     |
| 82    | makhuntseti    | დარგი, ადრე, ერთად, გერი, გარეთ    |
| 83    | makhuntseti    | ჯგუფი, აგური, რუჯი, ფიგურა, უჯრა   |
| 84    | makhuntseti    | ჩიხი, ჩხირი, ხშირი, ჩარხი, ჩირი    |
| 85    | makhuntseti    | ბოთლი, ბოსელი, ობი, თესლი, სითბო   |
| 86    | batumi         | დაბლა, ყალბი, ყდა, დაბა, დაბალი    |
| 87    | batumi         | მალა, მალამო, მამა, კოალა, კომა    |
| 88    | batumi         | სურათი, სარი, სუფთა, სუფრა, არსი   |
| 89    | batumi         | კლდე, დუეტი, კლიტე, კეტი, ეტლი     |
| 90    | batumi         | შვილი, ჩვილი, ელჩი, შველი, ეშვი    |
| 91    | tao-klarjeti   | გამძლე, მგელი, ძეგლი, ძმა, გემი    |
| 92    | tao-klarjeti   | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     |
| 93    | tao-klarjeti   | მისია, სადილი, სიმი, ასლი, მაისი   |
| 94    | tao-klarjeti   | ხბო, ხეობა, საბჭო, ხაჭო, სახე      |
| 95    | tao-klarjeti   | ჭვავი, ჭია, სვავი, ფიჭა, ფასი      |
| 96    | sumela         | ქარი, ქერი, ქიმია, ექიმი, მერია    |
| 97    | sumela         | მხეცი, ცომი, ცხელი, ხმელი, ციხე    |
| 98    | sumela         | მანია, მადა, მინა, ნადიმი, ამინდი  |
| 99    | sumela         | მუხტი, მუშტი, მუშა, აუტი, შხამი    |
| 100   | sumela         | ამპერი, ირემი, პირი, მერი, პრემია  |
| 101   | cappadocia     | თემა, მთვარე, მწარე, წრე, მთა      |
| 102   | cappadocia     | სიტყვა, ტყვია, ვატი, ავი, ყვავი    |
| 103   | cappadocia     | ექო, ქონება, ბანქო, ენა, გონება    |
| 104   | cappadocia     | ქალური, ქულა, ქურა, რკალი, რქა     |
| 105   | cappadocia     | მჭადი, მედია, ღამე, ჭაღი, დღე      |
| 106   | pamukkale      | სანდო, საპონი, სპა, დასი, პონი     |
| 107   | pamukkale      | საამო, აფრა, რასა, მარაო, მასრა    |
| 108   | pamukkale      | იღბალი, ღილი, წაბლი, წილი, იღლია   |
| 109   | pamukkale      | უქმე, მზა, მზე, საუზმე, საქმე      |
| 110   | pamukkale      | ჯოხი, დახლი, ჯილდო, ოჯახი, ჯადო    |
| 111   | ephesus        | რომი, შოკი, შორი, კომში, კოშკი     |
| 112   | ephesus        | ურიკა, კარატი, ტურა, კარტი, კატა   |
| 113   | ephesus        | ნიორი, რაიონი, ფარი, ფრანი, ოინი   |
| 114   | ephesus        | ადათი, დალაქი, ქადა, ლაქა, ქალი    |
| 115   | ephesus        | ნული, კუნთი, კლოუნი, კინო, უთო     |
| 116   | istanbul       | ფრე, დენი, ფერადი, ნარდი, ფენა     |
| 117   | istanbul       | ურო, ლორი, ორსული, სორო, სრული     |
| 118   | istanbul       | ცოფი, ფიცი, ხორცი, ციფრი, ფიცხი    |
| 119   | istanbul       | სვეტი, ჟესტი, სია, სტაჟი, ვაჟი     |
| 120   | istanbul       | უხეში, შრე, ხრეში, კეხი, კრუხი     |
| 121   | plovdiv        | მამრი, მყარი, ამაყი, იარა, არაყი   |
| 122   | plovdiv        | სოკო, ასო, სოიო, კლასი, სკოლა      |
| 123   | plovdiv        | ზღვარი, ჩვარი, ავზი, ზღვა, ზავი    |
| 124   | plovdiv        | თეორია, თეძო, რძე, ძია, თერძი      |
| 125   | plovdiv        | ტრიო, ღერო, ღომი, მეტრი, მეტრო     |
| 126   | petritsoni     | დოზა, ოდა, უზადო, ცოდნა, ზონა      |
| 127   | petritsoni     | ნაზი, ზმნა, ნალი, მადლი, ლინზა     |
| 128   | petritsoni     | უმი, პუმა, პასუხი, მაუსი, ხამი     |
| 129   | petritsoni     | გენია, ბანი, ნება, გენი, განძი     |
| 130   | petritsoni     | ქურქი, ქერქი, შური, შუქი, ერი      |
| 131   | rila           | ბავშვი, ქვა, შავი, ქვაბი, ქვიშა    |
| 132   | rila           | მუყაო, ტბა, ტუმბო, ყბა, ტაბუ       |
| 133   | rila           | ბორტი, ორბიტა, როკი, ტარო, კობრა   |
| 134   | rila           | ცუდი, ცრუ, ცხადი, ხურდა, არხი      |
| 135   | rila           | ვიდეო, ვოლტი, ტილო, ველი, ვეტო     |
| 136   | thessaloniki   | დაფნა, პანდა, პაპა, დანა, დაფა     |
| 137   | thessaloniki   | ფულადი, ფილა, ულუფა, ლუდი, ფული    |
| 138   | thessaloniki   | ახალი, ლაჩარი, ჩალა, ლირა, ხალიჩა  |
| 139   | thessaloniki   | კერა, არენა, მარკა, კამერა, კამა   |
| 140   | thessaloniki   | მალე, მედალი, დილა, იმედი, დილემა  |
| 141   | iviron-athos   | გველი, გლუვი, გული, ხელი, გლეხი    |
| 142   | iviron-athos   | ხიდი, კიდური, ხრიკი, რუხი, კუდი    |
| 143   | iviron-athos   | მარტო, მორი, ტორტი, ტომატი, ტოტი   |
| 144   | iviron-athos   | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     |
| 145   | iviron-athos   | ჩიპი, ტიპი, ტაიმი, მატჩი, ჩიტი     |
| 146   | meteora        | ჭირი, ჭრელი, ჭრილი, ბეჭი, ბიჭი     |
| 147   | meteora        | გრილი, ბრალი, ბარგი, ბაგირი, რიგი  |
| 148   | meteora        | მაგიდა, დრამა, დარი, არმია, მარაგი |
| 149   | meteora        | ღონე, ღორი, ევრო, ნერვი, ღვინო     |
| 150   | meteora        | ლიფტი, ფაილი, ფილმი, იაფი, ლაიმი   |
| 151   | volos-iolcos   | ბარი, ბურთი, წარბი, უარი, წუთი     |
| 152   | volos-iolcos   | ყელი, ყველი, ლეკვი, ტყვე, ტყე      |
| 153   | volos-iolcos   | კალია, კილო, კოკა, კაკალი, კაკაო   |
| 154   | volos-iolcos   | საათი, ღია, ასანთი, თაღი, თასი     |
| 155   | volos-iolcos   | ჯიში, ბიტი, ჯიუტი, ბუშტი, შუბი     |
| 156   | delphi         | წუნი, ხევი, უხვი, წნეხი, წვენი     |
| 157   | delphi         | ზეგ, გზა, თაგვი, თევზი, გაზეთი     |
| 158   | delphi         | ბილეთი, ილეთი, ლეიბი, მთელი, თბილი |
| 159   | delphi         | ცალი, ცოლი, ცოტა, პალტო, პლატო     |
| 160   | delphi         | ნორმა, ორგანო, ორმო, მანგო, მონა   |
| 161   | athens         | ნავი, ნივთი, გვიან, ნავთი, იგავი   |
| 162   | athens         | ფოთოლი, ფოტო, თოფი, ფლოტი, ტოლი    |
| 163   | athens         | ზღარბი, ღუზა, აუზი, ბურღი, ბაღი    |
| 164   | athens         | ცხარე, ხმა, ზეცა, მხარე, მახე      |
| 165   | athens         | აბი, ბლუზი, ბუზი, ილუზია, ბზა      |
| 166   | santorini      | ქუდი, ქურდი, დოქი, ქორი, სურდო     |
| 167   | santorini      | ნისლი, სტილი, ლენტი, ნესტი, ნელი   |
| 168   | santorini      | მასალა, ლამა, თმა, ასთმა, სალათა   |
| 169   | santorini      | კვალი, ოვალი, ლოყა, ვოკალი, ალი    |
| 170   | santorini      | შტაბი, ჭაობი, ბატი, შობა, ტაში     |
| 171   | corfu          | მარში, მლაშე, მშრალი, შალი, მელა   |
| 172   | corfu          | ჩაი, ჩექმა, აქლემი, ქილა, ელჩი     |
| 173   | corfu          | კანი, კნუტი, პიტნა, კუპატი, ტანკი  |
| 174   | corfu          | კაცი, კეცი, სცენა, აკნე, ანკესი    |
| 175   | corfu          | ჭაჭა, ლამპა, ჭალა, მალა, პალმა     |
| 176   | butrint        | თონე, ფენი, ფონდი, დენთი, დონე     |
| 177   | butrint        | მისია, მსაჯი, სინჯი, სიმი, ჯინსი   |
| 178   | butrint        | იოლი, ბილიკი, კბილი, ბოლი, ბლოკი   |
| 179   | butrint        | ეზო, ექო, პოემა, პოზა, ეპოქა       |
| 180   | butrint        | ვილა, თივა, ძვალი, ძიძა, თვალი     |
| 181   | gjirokaster    | თეთრი, წრე, წვეთი, თვე, წევრი      |
| 182   | gjirokaster    | ბანაკი, ბინა, კაბინა, კაბა, ჯანი   |
| 183   | gjirokaster    | ფიალა, ლავაში, აფიშა, ალფა, ფლავი  |
| 184   | gjirokaster    | მხარი, ფხა, ხურმა, ხუფი, მუხა      |
| 185   | gjirokaster    | ფერი, ფეხი, ხერხი, ტერფი, ტირე     |
| 186   | berat          | ორდენი, დრონი, დრო, დეპო, პონი     |
| 187   | berat          | ბრაზი, ბზარი, ზებრა, ზედა, ადრე    |
| 188   | berat          | ოლქი, მატლი, ოქმი, ტოლმა, ატომი    |
| 189   | berat          | ლავა, თავლა, ბალთა, ალყა, ყავა     |
| 190   | berat          | კვოტა, ვიზა, ვატი, აზოტი, კოვზი    |
| 191   | ohrid          | ციხე, ცხენი, ხედი, დენი, სიცხე     |
| 192   | ohrid          | კოჭი, ბოჭკო, ბოლოკი, ბოლო, ლობიო   |
| 193   | ohrid          | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   |
| 194   | ohrid          | ავი, ვერსია, სარი, სავსე, სესია    |
| 195   | ohrid          | ციყვი, კვიცი, ციკლი, კივი, ცვილი   |
| 196   | kotor          | ქერა, ღამე, ღრმა, საქმე, სქემა     |
| 197   | kotor          | ქურა, ჩაქუჩი, ჩქარი, ურჩი, ქირა    |
| 198   | kotor          | იოგა, დოგმა, მოდა, ზოგადი, ზომა    |
| 199   | kotor          | ქოხი, სქესი, სესხი, სისქე, სიო     |
| 200   | kotor          | სია, ასაკი, შანსი, საკანი, ნიშა    |
| 201   | dubrovnik      | შრე, ერა, შვრია, ვეშაპი, პეშვი     |
| 202   | dubrovnik      | თხილი, სითხე, ხილი, თესლი, თხელი   |
| 203   | dubrovnik      | რაკეტა, ფარა, აფრა, კეფა, კარატე   |
| 204   | dubrovnik      | კუბი, ბიურო, კუბო, კობრი, ბრბო     |
| 205   | dubrovnik      | შნო, გუშინ, ნუგეში, ნუში, უშნო     |
| 206   | split          | ყრუ, ყუთი, ლურჯი, რუჯი, რთული      |
| 207   | split          | ავად, ვაზა, სადავე, სევდა, დავა    |
| 208   | split          | მოდელი, პლედი, ლოდი, მდელო, ლომი   |
| 209   | split          | გოჭი, საჭირო, ასო, გორა, გარსი     |
| 210   | split          | ურემი, მური, ყური, რიყე, მყიფე     |
| 211   | plitvice       | კერძი, კერძო, რძე, ერბო, ბოძი      |
| 212   | plitvice       | ტივი, ტყავი, ყინვა, ნიავი, ტვინი   |
| 213   | plitvice       | წმინდა, მიწა, წინდა, ტანი, წამი    |
| 214   | plitvice       | ვირი, მძივი, ძირი, ძვირი, ძმარი    |
| 215   | plitvice       | წებო, ბევრი, წვერი, ბეწვი, ბერი    |
| 216   | venice         | შაშვი, შაშხი, შუშა, შუა, ხაში      |
| 217   | venice         | ღარი, ღიპი, ღირსი, ისარი, საღი     |
| 218   | venice         | ვალსი, ქვა, ქვისლი, ქლიავი, სილა   |
| 219   | venice         | გული, გალია, ლიგა, ლულა, ალალი     |
| 220   | venice         | სარკე, ტარი, კასრი, კეტი, საკეტი   |
| 221   | florence       | ფლეიტა, ელიტა, ფილე, ელფი, ტაფა    |
| 222   | florence       | ძიუდო, კუნძი, კუდი, კინო, კოდი     |
| 223   | florence       | ხალხი, სახლი, მსხალი, ასლი, ხამი   |
| 224   | florence       | ნიჭი, ჭირი, ჭორი, ირონია, ნაოჭი    |
| 225   | florence       | ოფისი, ოინი, ფონი, ფსონი, იაფი     |
| 226   | rome           | რადიო, როიალი, დოლარი, ოდა, იოდი   |
| 227   | rome           | პიცა, რეპი, საცერი, სერია, პრესა   |
| 228   | rome           | ცხვირი, ცხიმი, რიცხვი, ცივი, იხვი  |
| 229   | rome           | პრიზი, პირი, ზურგი, გრიპი, პური    |
| 230   | rome           | ჟანრი, რანგი, ბარი, ჟანგი, ბირჟა   |
| 231   | amalfi         | ჰობი, ჰოკეი, ბეკონი, კიბო, კიბე    |
| 232   | amalfi         | ერი, ლიდერი, ღილი, დილერი, დღე     |
| 233   | amalfi         | ნაძვი, აკვანი, ძია, კვანძი, ანძა   |
| 234   | amalfi         | ქუსლი, ქსელი, ლექსი, სული, ლუწი    |
| 235   | amalfi         | სუნი, მენიუ, ნემსი, მსუყე, მყესი   |
| 236   | taormina       | შორი, შტო, შტორმი, რიტმი, ტომი     |
| 237   | taormina       | უბე, ბაგე, ბგერა, ბეღურა, გუბე     |
| 238   | taormina       | ძმა, ალღო, ლაღი, ძაღლი, მძღოლი     |
| 239   | taormina       | ბინდი, გედი, გიდი, ბედი, ბენდი     |
| 240   | taormina       | კუჭი, უთო, უნიჭო, კუნთი, თოკი      |
| 241   | valletta       | გოლი, ოფლი, რგოლი, გოლფი, ფლორა    |
| 242   | valletta       | ბარდა, ბრმა, მურაბა, დაბა, მადა    |
| 243   | valletta       | ბორტი, ბოროტი, რობოტი, ორბიტა, ტბა |
| 244   | valletta       | რკალი, გორაკი, რკო, როკი, ლოგიკა   |
| 245   | valletta       | სკამი, აუზი, მუსიკა, კუზი, მაუსი   |
| 246   | mdina          | წყალი, ანწლი, ნალი, ნაწილი, წილი   |
| 247   | mdina          | ხურდა, რაუნდი, რუხი, უარი, ხუნდი   |
| 248   | mdina          | მჟავე, ვენა, წნევა, მწვანე, ამწე   |
| 249   | mdina          | პარტია, არსი, რასა, პასტა, სპა     |
| 250   | mdina          | მზა, ზარალი, მალა, ლამაზი, ზარი    |
| 251   | carthage       | თამამი, კამა, მთა, კამათი, მამა    |
| 252   | carthage       | წონა, აწმყო, ნამი, მაწონი, მონა    |
| 253   | carthage       | რაინდი, ყადრი, ნადირი, ყდა, დარი   |
| 254   | carthage       | მასა, სამბო, თაობა, თმა, თასმა     |
| 255   | carthage       | პილოტი, პიკი, კოპი, კლიპი, ტიპი    |
| 256   | sidi-bou-said  | ფრე, მწიფე, მწერი, მეფე, წრე       |
| 257   | sidi-bou-said  | სპილო, პულსი, ცოლი, ცული, პლუსი    |
| 258   | sidi-bou-said  | ლიმონი, იოლი, მწნილი, ომი, მილი    |
| 259   | sidi-bou-said  | შუბი, კლუბი, კლიშე, ბელი, შუბლი    |
| 260   | sidi-bou-said  | ქაფი, ფაქტი, ქოსა, ქაოსი, ფოსტა    |
| 261   | el-jem         | ყაბაყი, ყბა, ბაყაყი, ჭია, ბაჭია    |
| 262   | el-jem         | თითი, თათი, თუთია, თუთა, სათუთი    |
| 263   | el-jem         | სფერო, ფერი, რეისი, ფირი, სიროფი   |
| 264   | el-jem         | მაჩვი, მჟავა, ჩაი, აჩმა, ვაჟი      |
| 265   | el-jem         | ლირა, პარკი, პლაჟი, კაჟი, ლარი     |
| 266   | barcelona      | ავაზა, ვაზი, ვიზა, ზავი, ავარია    |
| 267   | barcelona      | ტრიუკი, რისკი, კურსი, კიტრი, ტური  |
| 268   | barcelona      | ქარი, არმია, ქათამი, ქრთამი, ქმარი |
| 269   | barcelona      | ტახტი, შტატი, შხაპი, ხატი, ტიტა    |
| 270   | barcelona      | ნაკლი, კილო, სალონი, კონა, კლონი   |
| 271   | valencia       | აკნე, კენკრა, ურნა, კურკა, რუკა    |
| 272   | valencia       | მაჯა, მარანი, ჯარიმა, მანია, მინა  |
| 273   | valencia       | კარავი, ვადა, ავდარი, ვარდი, კრავი |
| 274   | valencia       | ჯარი, კაბა, აბჯარი, იჯარა, აჯიკა   |
| 275   | valencia       | ნაჭერი, რკინა, ეკრანი, ჭერი, კარი  |
| 276   | madrid         | გრანტი, ტანგო, ტონა, ტონი, იოგა    |
| 277   | madrid         | ჰერცი, ერა, უეცარი, ცრუ, ჰაერი     |
| 278   | madrid         | გრამი, გიტარა, იარა, მაგარი, ატამი |
| 279   | madrid         | ყელი, ტყუპი, ეტლი, ტყე, ყლუპი      |
| 280   | madrid         | ბადე, ბალეტი, დიეტა, დეტალი, დილა  |
| 281   | granada        | ხარი, ცხვარი, მარცხი, არხი, ხმა    |
| 282   | granada        | თიხა, თხა, თანხა, ახალი, ხალათი    |
| 283   | granada        | ატლასი, დასი, სია, დასტა, სტადია   |
| 284   | granada        | ობი, აბი, ბანანი, აბანო, ანბანი    |
| 285   | granada        | ქანჩი, უბანი, ბუჩქი, ბანი, ქუჩა    |
| 286   | cordoba        | ურო, რომი, ჟიური, იუმორი, მორი     |
| 287   | cordoba        | ნაღები, ნება, ცნება, ბინა, ბაღი    |
| 288   | cordoba        | გენი, ვეგანი, ენა, ნესვი, სიგანე   |
| 289   | cordoba        | კრემი, მური, ჩეკი, ურემი, ჩუმი     |
| 290   | cordoba        | ძველი, რძე, ძეხვი, ხვრელი, ხევი    |
| 291   | seville        | საძილე, სიძე, ქისა, სქელი, ძელი    |
| 292   | seville        | სიო, სწორი, წესი, ევრო, ვიწრო      |
| 293   | seville        | გერი, ცენტრი, ნერგი, ცენტი, ტირე   |
| 294   | seville        | მუმია, მუდამ, უმი, ქუდი, მუქი      |
| 295   | seville        | ნიავი, დივანი, ნავი, შინდი, ნიშა   |

## Required-word source and frequency audit

| Word   | Meaning                                             | Uses | Levels            | Source                                                                                          |
| ------ | --------------------------------------------------- | ---: | ----------------- | ----------------------------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           |    1 | 284               | [Source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)                      |
| აბი    | pill                                                |    3 | 56, 165, 284      | [Source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)                        |
| აბჯარი | armor                                               |    1 | 274               | [Source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412)                     |
| აგური  | brick                                               |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)                      |
| ადათი  | custom                                              |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=ადათი&oldid=84112201)                      |
| ადვილი | easy                                                |    1 | 78                | [Source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563)                     |
| ადრე   | early; previously                                   |    2 | 82, 187           | [Source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)                       |
| ავად   | ill, sick                                           |    2 | 1, 207            | [Source](https://en.wiktionary.org/w/index.php?title=ავად&oldid=88672971)                       |
| ავაზა  | cheetah                                             |    1 | 266               | [Source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)                      |
| ავარია | accident                                            |    1 | 266               | [Source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031)                     |
| ავდარი | bad weather, rainy weather                          |    1 | 273               | [Source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279)                     |
| ავეჯი  | furniture                                           |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)                      |
| ავზი   | tank, sink                                          |    2 | 12, 123           | [Source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)                       |
| ავი    | wicked, evil                                        |    3 | 13, 102, 194      | [Source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)                        |
| ავტორი | author                                              |    1 | 61                | [Source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573)                     |
| აზოტი  | nitrogen                                            |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=აზოტი&oldid=87888146)                      |
| აზრი   | thought, opinion                                    |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)                       |
| აკვანი | cradle                                              |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814)                     |
| აკნე   | acne                                                |    2 | 174, 271          | [Source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)                       |
| ალალი  | honest, sincere                                     |    1 | 219               | [Source](https://en.wiktionary.org/w/index.php?title=ალალი&oldid=84089330)                      |
| ალბომი | album                                               |    1 | 46                | [Source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197)                     |
| ალი    | blaze, flame, fire                                  |    2 | 53, 169           | [Source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)                        |
| ალოე   | aloe                                                |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=ალოე&oldid=84112485)                       |
| ალფა   | alpha                                               |    2 | 42, 183           | [Source](https://en.wiktionary.org/w/index.php?title=ალფა&oldid=84097261)                       |
| ალღო   | intuition                                           |    1 | 238               | [Source](https://en.wiktionary.org/w/index.php?title=ალღო&oldid=84097265)                       |
| ალყა   | siege                                               |    1 | 189               | [Source](https://en.wiktionary.org/w/index.php?title=ალყა&oldid=84112502)                       |
| ამაყი  | proud                                               |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=ამაყი&oldid=84112515)                      |
| ამინდი | weather                                             |    1 | 98                | [Source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550)                     |
| ამპერი | ampere                                              |    1 | 100               | [Source](https://en.wiktionary.org/w/index.php?title=ამპერი&oldid=84097293)                     |
| ამწე   | crane                                               |    2 | 18, 248           | [Source](https://en.wiktionary.org/w/index.php?title=ამწე&oldid=33588412)                       |
| ანბანი | alphabet                                            |    1 | 284               | [Source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407)                     |
| ანემია | anemia                                              |    1 | 33                | [Source](https://en.wiktionary.org/w/index.php?title=ანემია&oldid=84097334)                     |
| ანკესი | fishing hook                                        |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188)                     |
| ანძა   | mast                                                |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=ანძა&oldid=84097365)                       |
| ანწლი  | elderberry                                          |    1 | 246               | [Source](https://en.wiktionary.org/w/index.php?title=ანწლი&oldid=87817176)                      |
| არაყი  | vodka                                               |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)                      |
| არენა  | arena                                               |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=არენა&oldid=84097397)                      |
| არმია  | army                                                |    2 | 148, 268          | [Source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)                      |
| არსი   | essence                                             |    3 | 4, 88, 249        | [Source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)                       |
| არფა   | harp                                                |    1 | 8                 | [Source](https://en.wiktionary.org/w/index.php?title=არფა&oldid=93122307)                       |
| არხი   | canal                                               |    2 | 134, 281          | [Source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)                       |
| ასაკი  | age                                                 |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)                      |
| ასანთი | match                                               |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032)                     |
| ასთმა  | asthma                                              |    1 | 168               | [Source](https://en.wiktionary.org/w/index.php?title=ასთმა&oldid=84097441)                      |
| ასლი   | copy                                                |    2 | 93, 223           | [Source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)                       |
| ასო    | alphabet letter                                     |    3 | 6, 122, 209       | [Source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)                        |
| ატამი  | peach                                               |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)                      |
| ატლასი | atlas                                               |    1 | 283               | [Source](https://en.wiktionary.org/w/index.php?title=ატლასი&oldid=84097471)                     |
| ატომი  | atom                                                |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)                      |
| აუზი   | pool                                                |    2 | 163, 245          | [Source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)                       |
| აუტი   | throw-in                                            |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=აუტი&oldid=39552798)                       |
| აფიშა  | poster                                              |    1 | 183               | [Source](https://en.wiktionary.org/w/index.php?title=აფიშა&oldid=84983656)                      |
| აფრა   | sail                                                |    2 | 107, 203          | [Source](https://en.wiktionary.org/w/index.php?title=აფრა&oldid=84113118)                       |
| აქლემი | camel                                               |    1 | 172               | [Source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908)                     |
| აჩმა   | achma cheese pastry                                 |    1 | 264               | [Source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)                       |
| აწმყო  | the present (time)                                  |    1 | 252               | [Source](https://en.wiktionary.org/w/index.php?title=აწმყო&oldid=84103243)                      |
| ახალი  | new; fresh                                          |    2 | 138, 282          | [Source](https://en.wiktionary.org/w/index.php?title=ახალი&oldid=88893525)                      |
| აჯიკა  | adjika                                              |    1 | 274               | [Source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)                      |
| ბაბუა  | grandfather, grandpa                                |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)                      |
| ბაგე   | lip                                                 |    2 | 55, 237           | [Source](https://en.wiktionary.org/w/index.php?title=ბაგე&oldid=92454114)                       |
| ბაგირი | cable, heavy rope                                   |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=ბაგირი&oldid=89591122)                     |
| ბადე   | net                                                 |    1 | 280               | [Source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)                       |
| ბავშვი | child                                               |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503)                     |
| ბაზა   | base                                                |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)                       |
| ბაზარი | market                                              |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284)                     |
| ბაიტი  | byte                                                |    1 | 23                | [Source](https://en.wiktionary.org/w/index.php?title=ბაიტი&oldid=89301890)                      |
| ბალეტი | ballet                                              |    1 | 280               | [Source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557)                     |
| ბალთა  | buckle                                              |    2 | 42, 189           | [Source](https://en.wiktionary.org/w/index.php?title=ბალთა&oldid=84097562)                      |
| ბალი   | sweet cherry                                        |    1 | 42                | [Source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)                       |
| ბამბა  | cotton, cotton wool                                 |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)                      |
| ბანაკი | camp                                                |    1 | 182               | [Source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693)                     |
| ბანანი | banana                                              |    1 | 284               | [Source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335)                     |
| ბანი   | bass voice                                          |    2 | 129, 285          | [Source](https://en.wiktionary.org/w/index.php?title=ბანი&oldid=92486488)                       |
| ბანკი  | bank                                                |    1 | 50                | [Source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)                      |
| ბანქო  | playing cards                                       |    1 | 103               | [Source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)                      |
| ბარგი  | luggage                                             |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)                      |
| ბარდა  | pea                                                 |    1 | 242               | [Source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)                      |
| ბარი   | valley                                              |    2 | 151, 230          | [Source](https://en.wiktionary.org/w/index.php?title=ბარი&oldid=92290776)                       |
| ბასი   | bass voice                                          |    1 | 23                | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%A1%E1%83%98)                   |
| ბასრი  | sharp                                               |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=ბასრი&oldid=84089568)                      |
| ბატი   | goose                                               |    2 | 23, 170           | [Source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)                       |
| ბაფთა  | bow knot                                            |    1 | 42                | [Source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)                      |
| ბაღი   | garden                                              |    2 | 163, 287          | [Source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)                       |
| ბაყაყი | frog                                                |    1 | 261               | [Source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131)                     |
| ბაჭია  | young rabbit                                        |    1 | 261               | [Source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)                      |
| ბგერა  | sound                                               |    2 | 55, 237           | [Source](https://en.wiktionary.org/w/index.php?title=ბგერა&oldid=88996488)                      |
| ბედი   | fate; luck                                          |    1 | 239               | [Source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)                       |
| ბევრი  | many; much                                          |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)                      |
| ბეკონი | bacon                                               |    1 | 231               | [Source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047)                     |
| ბელი   | bear cub                                            |    2 | 69, 259           | [Source](https://en.wiktionary.org/w/index.php?title=ბელი&oldid=91740617)                       |
| ბენდი  | band                                                |    1 | 239               | [Source](https://en.wiktionary.org/w/index.php?title=ბენდი&oldid=90750378)                      |
| ბერი   | monk                                                |    2 | 73, 215           | [Source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)                       |
| ბეღურა | sparrow                                             |    1 | 237               | [Source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232)                     |
| ბეწვი  | fur, pile                                           |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)                      |
| ბეჭი   | shoulder blade                                      |    2 | 69, 146           | [Source](https://en.wiktionary.org/w/index.php?title=ბეჭი&oldid=89438383)                       |
| ბზა    | box tree                                            |    2 | 72, 165           | [Source](https://en.wiktionary.org/w/index.php?title=ბზა&oldid=84113487)                        |
| ბზარი  | crack                                               |    2 | 77, 187           | [Source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)                      |
| ბილეთი | ticket                                              |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670)                     |
| ბილიკი | path                                                |    1 | 178               | [Source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672)                     |
| ბინა   | apartment                                           |    3 | 50, 182, 287      | [Source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)                       |
| ბინდი  | twilight                                            |    1 | 239               | [Source](https://en.wiktionary.org/w/index.php?title=ბინდი&oldid=85068323)                      |
| ბირჟა  | exchange                                            |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=ბირჟა&oldid=84113535)                      |
| ბიტი   | bit; unit of digital information                    |    2 | 23, 155           | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%98%E1%83%A2%E1%83%98)                   |
| ბიურო  | bureau                                              |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=ბიურო&oldid=84097685)                      |
| ბიძა   | uncle                                               |    1 | 66                | [Source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)                       |
| ბიჭი   | boy                                                 |    1 | 146               | [Source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)                       |
| ბლოკი  | pulley block                                        |    2 | 11, 178           | [Source](https://en.wiktionary.org/w/index.php?title=ბლოკი&oldid=84097700)                      |
| ბლუზი  | blues music                                         |    1 | 165               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%A3%E1%83%96%E1%83%98)          |
| ბმული  | link                                                |    1 | 70                | [Source](https://en.wiktionary.org/w/index.php?title=ბმული&oldid=84113566)                      |
| ბნელი  | dark                                                |    1 | 69                | [Source](https://en.wiktionary.org/w/index.php?title=ბნელი&oldid=91740783)                      |
| ბოთლი  | bottle                                              |    1 | 85                | [Source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)                      |
| ბოლი   | smoke                                               |    2 | 5, 178            | [Source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)                       |
| ბოლო   | end                                                 |    1 | 192               | [Source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)                       |
| ბოლოკი | radish                                              |    1 | 192               | [Source](https://en.wiktionary.org/w/index.php?title=ბოლოკი&oldid=91412000)                     |
| ბოროტი | evil; wicked                                        |    1 | 243               | [Source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020)                     |
| ბორტი  | side of a ship                                      |    2 | 133, 243          | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98)          |
| ბოსელი | cowshed                                             |    1 | 85                | [Source](https://en.wiktionary.org/w/index.php?title=ბოსელი&oldid=84097715)                     |
| ბოძი   | pole                                                |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)                       |
| ბოჭკო  | fiber                                               |    1 | 192               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%AD%E1%83%99%E1%83%9D)          |
| ბრაზი  | anger                                               |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)                      |
| ბრალი  | fault                                               |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)                      |
| ბრბო   | crowd                                               |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)                       |
| ბრმა   | blind                                               |    2 | 66, 242           | [Source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)                       |
| ბროლი  | crystal                                             |    1 | 5                 | [Source](https://en.wiktionary.org/w/index.php?title=ბროლი&oldid=84097739)                      |
| ბუდე   | nest                                                |    1 | 54                | [Source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)                       |
| ბუზი   | fly                                                 |    1 | 165               | [Source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)                       |
| ბურთი  | ball                                                |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)                      |
| ბურღი  | drill                                               |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)                      |
| ბუშტი  | bubble, balloon                                     |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)                      |
| ბუჩქი  | bush, shrub                                         |    1 | 285               | [Source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)                      |
| გაზეთი | newspaper                                           |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807)                     |
| გაზი   | gas                                                 |    1 | 12                | [Source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)                       |
| გალია  | cage                                                |    1 | 219               | [Source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)                      |
| გამძლე | durable                                             |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=გამძლე&oldid=43754830)                     |
| განძი  | treasure                                            |    1 | 129               | [Source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)                      |
| გარეთ  | outside                                             |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)                      |
| გარემო | environment                                         |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637)                     |
| გარსი  | shell                                               |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=გარსი&oldid=84097862)                      |
| გეგმა  | plan                                                |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)                      |
| გედი   | swan                                                |    1 | 239               | [Source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)                       |
| გემი   | ship                                                |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)                       |
| გემო   | palate, taste                                       |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)                       |
| გენი   | gene                                                |    2 | 129, 288          | [Source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)                       |
| გენია  | exceptional creative talent                         |    1 | 129               | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%94%E1%83%9C%E1%83%98%E1%83%90)          |
| გერბი  | coat of arms                                        |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=გერბი&oldid=90290436)                      |
| გერი   | stepchild                                           |    2 | 82, 293           | [Source](https://en.wiktionary.org/w/index.php?title=გერი&oldid=92197067)                       |
| გვარი  | surname                                             |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)                      |
| გველი  | snake, serpent                                      |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)                      |
| გვიან  | late                                                |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)                      |
| გზა    | way, path, road                                     |    2 | 12, 157           | [Source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)                        |
| გიდი   | tour guide                                          |    1 | 239               | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%98%E1%83%93%E1%83%98)                   |
| გიტარა | guitar                                              |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739)                     |
| გლეხი  | peasant; countryman                                 |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=გლეხი&oldid=88065505)                      |
| გლუვი  | smooth                                              |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)                      |
| გმირი  | hero                                                |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)                      |
| გოგრა  | pumpkin                                             |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=გოგრა&oldid=92486490)                      |
| გოლი   | goal in sport                                       |    2 | 10, 241           | [Source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)                       |
| გოლფი  | golf                                                |    1 | 241               | [Source](https://en.wiktionary.org/w/index.php?title=გოლფი&oldid=84097945)                      |
| გონება | mind; intellect                                     |    1 | 103               | [Source](https://en.wiktionary.org/w/index.php?title=გონება&oldid=92692374)                     |
| გორა   | hill                                                |    2 | 71, 209           | [Source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)                       |
| გორაკი | hillock                                             |    1 | 244               | [Source](https://en.wiktionary.org/w/index.php?title=გორაკი&oldid=85057574)                     |
| გოჭი   | piglet                                              |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)                       |
| გრამი  | gram                                                |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=გრამი&oldid=91716527)                      |
| გრანტი | grant; scholarship                                  |    1 | 276               | [Source](https://en.wiktionary.org/w/index.php?title=გრანტი&oldid=88392548)                     |
| გრაფა  | field in a form                                     |    1 | 8                 | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A0%E1%83%90%E1%83%A4%E1%83%90)          |
| გრილი  | cool, breezy, chilly                                |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)                      |
| გრიპი  | flu                                                 |    1 | 229               | [Source](https://en.wiktionary.org/w/index.php?title=გრიპი&oldid=84191656)                      |
| გროვა  | heap; pile                                          |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=გროვა&oldid=91644257)                      |
| გუბე   | puddle                                              |    1 | 237               | [Source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)                       |
| გუდა   | leather bag, wineskin                               |    1 | 31                | [Source](https://en.wiktionary.org/w/index.php?title=გუდა&oldid=88091499)                       |
| გული   | heart                                               |    2 | 141, 219          | [Source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)                       |
| გუნდა  | ball, snowball                                      |    1 | 31                | [Source](https://en.wiktionary.org/w/index.php?title=გუნდა&oldid=87601776)                      |
| გუნდი  | choir; team                                         |    1 | 31                | [Source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)                      |
| გუშინ  | yesterday                                           |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)                      |
| დაბა   | small town                                          |    2 | 86, 242           | [Source](https://en.wiktionary.org/w/index.php?title=დაბა&oldid=91727678)                       |
| დაბალი | low; short                                          |    1 | 86                | [Source](https://en.wiktionary.org/w/index.php?title=დაბალი&oldid=84089835)                     |
| დაბლა  | down; downstairs                                    |    1 | 86                | [Source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)                      |
| დავა   | dispute                                             |    2 | 1, 207            | [Source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)                       |
| დათვი  | bear                                                |    1 | 78                | [Source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)                      |
| დალაქი | barber                                              |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=დალაქი&oldid=85046705)                     |
| დანა   | knife                                               |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)                       |
| დარგი  | field; branch of work                               |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=დარგი&oldid=84098053)                      |
| დარი   | fair weather                                        |    2 | 148, 253          | [Source](https://en.wiktionary.org/w/index.php?title=დარი&oldid=85046597)                       |
| დასი   | troupe, group                                       |    2 | 106, 283          | [Source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)                       |
| დასტა  | stack, bundle                                       |    1 | 283               | [Source](https://en.wiktionary.org/w/index.php?title=დასტა&oldid=84098058)                      |
| დაფა   | board, tablet                                       |    2 | 8, 136            | [Source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)                       |
| დაფნა  | laurel                                              |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=დაფნა&oldid=84114442)                      |
| დახლი  | counter                                             |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)                      |
| დედა   | mother                                              |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)                       |
| დევი   | giant                                               |    1 | 47                | [Source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)                       |
| დეიდა  | maternal aunt                                       |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)                      |
| დენთი  | gunpowder                                           |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=დენთი&oldid=55366640)                      |
| დენი   | electric current                                    |    3 | 31, 116, 191      | [Source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)                       |
| დეპო   | depot                                               |    1 | 186               | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%94%E1%83%9E%E1%83%9D)                   |
| დეტალი | detail                                              |    1 | 280               | [Source](https://en.wiktionary.org/w/index.php?title=დეტალი&oldid=85506724)                     |
| დიადი  | great                                               |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=დიადი&oldid=84090016)                      |
| დიდი   | big                                                 |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)                       |
| დიეტა  | diet                                                |    1 | 280               | [Source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)                      |
| დივანი | sofa                                                |    1 | 295               | [Source](https://en.wiktionary.org/w/index.php?title=დივანი&oldid=84114587)                     |
| დილა   | morning                                             |    3 | 20, 140, 280      | [Source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)                       |
| დილემა | dilemma                                             |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=დილემა&oldid=84098184)                     |
| დილერი | dealer                                              |    1 | 232               | [Source](https://en.wiktionary.org/w/index.php?title=დილერი&oldid=84098185)                     |
| დისკი  | disc                                                |    1 | 52                | [Source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)                      |
| დისკო  | disco music                                         |    1 | 52                | [Source](https://en.wiktionary.org/w/index.php?title=დისკო&oldid=84098211)                      |
| დოგმა  | dogma                                               |    1 | 198               | [Source](https://en.wiktionary.org/w/index.php?title=დოგმა&oldid=84098233)                      |
| დოზა   | dose                                                |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)                       |
| დოლარი | dollar                                              |    1 | 226               | [Source](https://en.wiktionary.org/w/index.php?title=დოლარი&oldid=84098241)                     |
| დოლი   | drum                                                |    1 | 25                | [Source](https://en.wiktionary.org/w/index.php?title=დოლი&oldid=88002790)                       |
| დონე   | level                                               |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)                       |
| დოქი   | jug                                                 |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)                       |
| დრამა  | drama                                               |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)                      |
| დრო    | time                                                |    2 | 6, 186            | [Source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)                        |
| დრონი  | drone                                               |    1 | 186               | [Source](https://en.wiktionary.org/w/index.php?title=დრონი&oldid=87207395)                      |
| დროშა  | flag                                                |    1 | 6                 | [Source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)                      |
| დუელი  | duel                                                |    1 | 54                | [Source](https://en.wiktionary.org/w/index.php?title=დუელი&oldid=84098276)                      |
| დუეტი  | duet                                                |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)                      |
| დღე    | day                                                 |    2 | 105, 232          | [Source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)                        |
| ევრო   | euro                                                |    2 | 149, 292          | [Source](https://en.wiktionary.org/w/index.php?title=ევრო&oldid=84103543)                       |
| ეზო    | yard, courtyard                                     |    2 | 37, 179           | [Source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)                        |
| ეკალი  | thorn                                               |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)                      |
| ეკრანი | screen                                              |    1 | 275               | [Source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327)                     |
| ელვა   | lightning                                           |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)                       |
| ელიტა  | elite                                               |    1 | 221               | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%98%E1%83%A2%E1%83%90)          |
| ელფი   | elf                                                 |    1 | 221               | [Source](https://en.wiktionary.org/w/index.php?title=ელფი&oldid=84098344)                       |
| ელჩი   | ambassador                                          |    2 | 90, 172           | [Source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)                       |
| ენა    | language; tongue                                    |    3 | 18, 103, 288      | [Source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)                        |
| ენოტი  | raccoon                                             |    1 | 29                | [Source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)                      |
| ეპოქა  | epoch                                               |    1 | 179               | [Source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)                      |
| ერა    | era                                                 |    3 | 2, 201, 277       | [Source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)                        |
| ერბო   | ghee, clarified butter                              |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=ერბო&oldid=55359898)                       |
| ერთად  | together                                            |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)                      |
| ერი    | nation                                              |    3 | 49, 130, 232      | [Source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)                        |
| ეტაპი  | stage                                               |    1 | 53                | [Source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)                      |
| ეტლი   | carriage                                            |    2 | 89, 279           | [Source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)                       |
| ექიმი  | doctor                                              |    1 | 96                | [Source](https://en.wiktionary.org/w/index.php?title=ექიმი&oldid=88798763)                      |
| ექო    | echo                                                |    2 | 103, 179          | [Source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)                        |
| ეშვი   | fang                                                |    1 | 90                | [Source](https://en.wiktionary.org/w/index.php?title=ეშვი&oldid=84114997)                       |
| ეჭვი   | doubt; suspicion                                    |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=ეჭვი&oldid=85513584)                       |
| ვადა   | term, deadline                                      |    2 | 1, 273            | [Source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)                       |
| ვაზა   | vase                                                |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)                       |
| ვაზი   | vine, grapevine                                     |    2 | 12, 266           | [Source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)                       |
| ვაკე   | plain, plane                                        |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=ვაკე&oldid=84098446)                       |
| ვალი   | debt                                                |    2 | 3, 78             | [Source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)                       |
| ვალსი  | waltz                                               |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=ვალსი&oldid=84098452)                      |
| ვაჟი   | son                                                 |    2 | 119, 264          | [Source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)                       |
| ვარდი  | rose                                                |    1 | 273               | [Source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)                      |
| ვატი   | watt; unit of power                                 |    2 | 102, 190          | [Source](https://en.wiktionary.org/w/index.php?title=ვატი&oldid=84098467)                       |
| ვაშლი  | apple                                               |    1 | 3                 | [Source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)                      |
| ვეგანი | vegan                                               |    1 | 288               | [Source](https://en.wiktionary.org/w/index.php?title=ვეგანი&oldid=85113988)                     |
| ველი   | field                                               |    2 | 47, 135           | [Source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)                       |
| ვენა   | vein                                                |    2 | 18, 248           | [Source](https://en.wiktionary.org/w/index.php?title=ვენა&oldid=85017282)                       |
| ვერსია | version                                             |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=ვერსია&oldid=84098493)                     |
| ვეტო   | veto                                                |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=ვეტო&oldid=84098503)                       |
| ვეშაპი | whale                                               |    1 | 201               | [Source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435)                     |
| ვიდეო  | video                                               |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)                      |
| ვიზა   | visa                                                |    2 | 190, 266          | [Source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)                       |
| ვილა   | villa                                               |    2 | 3, 180            | [Source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)                       |
| ვირთხა | rat                                                 |    1 | 193               | [Source](https://en.wiktionary.org/w/index.php?title=ვირთხა&oldid=84115189)                     |
| ვირი   | donkey, ass                                         |    2 | 63, 214           | [Source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)                       |
| ვიწრო  | narrow                                              |    1 | 292               | [Source](https://en.wiktionary.org/w/index.php?title=ვიწრო&oldid=84088784)                      |
| ვოკალი | vocals                                              |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=ვოკალი&oldid=68812036)                     |
| ვოლტი  | volt                                                |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=ვოლტი&oldid=84098545)                      |
| ზავი   | truce                                               |    2 | 123, 266          | [Source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)                       |
| ზარალი | loss                                                |    1 | 250               | [Source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744)                     |
| ზარი   | bell                                                |    2 | 21, 250           | [Source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)                       |
| ზებრა  | zebra                                               |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)                      |
| ზეგ    | day after tomorrow                                  |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)                        |
| ზედა   | upper                                               |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)                       |
| ზეთი   | oil                                                 |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)                       |
| ზეიმი  | celebration                                         |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)                      |
| ზეცა   | heaven                                              |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)                       |
| ზვავი  | avalanche                                           |    1 | 12                | [Source](https://en.wiktionary.org/w/index.php?title=ზვავი&oldid=84115331)                      |
| ზიანი  | damage                                              |    1 | 28                | [Source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)                      |
| ზმნა   | verb                                                |    2 | 28, 127           | [Source](https://en.wiktionary.org/w/index.php?title=ზმნა&oldid=92945166)                       |
| ზოგადი | general                                             |    1 | 198               | [Source](https://en.wiktionary.org/w/index.php?title=ზოგადი&oldid=84090161)                     |
| ზოლი   | stripe                                              |    1 | 46                | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%9D%E1%83%9A%E1%83%98)                   |
| ზომა   | measure, quantity, size                             |    2 | 46, 198           | [Source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)                       |
| ზომბი  | zombie                                              |    1 | 46                | [Source](https://en.wiktionary.org/w/index.php?title=ზომბი&oldid=87234661)                      |
| ზონა   | zone                                                |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)                       |
| ზურგი  | back                                                |    1 | 229               | [Source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)                      |
| ზუსტი  | precise; exact                                      |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=ზუსტი&oldid=84088793)                      |
| ზღარბი | hedgehog                                            |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278)                     |
| ზღვა   | sea                                                 |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)                       |
| ზღვარი | boundary                                            |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789)                     |
| თაგვი  | mouse                                               |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)                      |
| თავი   | head                                                |    1 | 13                | [Source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)                       |
| თავლა  | stable                                              |    1 | 189               | [Source](https://en.wiktionary.org/w/index.php?title=თავლა&oldid=85073944)                      |
| თათი   | paw                                                 |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)                       |
| თამამი | bold; confident                                     |    1 | 251               | [Source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182)                     |
| თანხა  | amount of money                                     |    1 | 282               | [Source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)                      |
| თაობა  | generation                                          |    1 | 254               | [Source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)                      |
| თარო   | board, shelf                                        |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)                       |
| თასი   | bowl, chalice                                       |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)                       |
| თასმა  | braid                                               |    1 | 254               | [Source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)                      |
| თაფლი  | honey                                               |    1 | 42                | [Source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)                      |
| თაღი   | arch                                                |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=თაღი&oldid=92422626)                       |
| თახვი  | beaver                                              |    1 | 7                 | [Source](https://en.wiktionary.org/w/index.php?title=თახვი&oldid=89977530)                      |
| თბილი  | warm                                                |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)                      |
| თევზი  | fish                                                |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)                      |
| თეთრი  | white                                               |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)                      |
| თემა   | theme; essay                                        |    2 | 22, 101           | [Source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)                       |
| თემი   | community                                           |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=თემი&oldid=85086632)                       |
| თეორია | theory                                              |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=თეორია&oldid=84098686)                     |
| თერძი  | tailor                                              |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=თერძი&oldid=84103313)                      |
| თესლი  | seed                                                |    2 | 85, 202           | [Source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)                      |
| თეძო   | hip, thigh                                          |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=თეძო&oldid=84098694)                       |
| თვალი  | eye                                                 |    2 | 78, 180           | [Source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)                      |
| თვე    | month                                               |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)                        |
| თივა   | hay                                                 |    2 | 78, 180           | [Source](https://en.wiktionary.org/w/index.php?title=თივა&oldid=84115648)                       |
| თითი   | finger                                              |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)                       |
| თიხა   | clay                                                |    2 | 7, 282            | [Source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)                       |
| თმა    | hair                                                |    3 | 22, 168, 254      | [Source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)                        |
| თოვლი  | snow                                                |    1 | 13                | [Source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)                      |
| თოკი   | rope                                                |    1 | 240               | [Source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)                       |
| თოლია  | seagull                                             |    1 | 13                | [Source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)                      |
| თონე   | bread oven                                          |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)                       |
| თოფი   | gun                                                 |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)                       |
| თოხი   | hoe                                                 |    1 | 7                 | [Source](https://en.wiktionary.org/w/index.php?title=თოხი&oldid=88091343)                       |
| თუთა   | mulberry                                            |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)                       |
| თუთია  | zinc                                                |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=თუთია&oldid=84098719)                      |
| თხა    | goat                                                |    3 | 7, 193, 282       | [Source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)                        |
| თხელი  | thin                                                |    1 | 202               | [Source](https://en.wiktionary.org/w/index.php?title=თხელი&oldid=84090228)                      |
| თხილი  | hazelnut                                            |    1 | 202               | [Source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)                      |
| იარა   | wound                                               |    2 | 121, 278          | [Source](https://en.wiktionary.org/w/index.php?title=იარა&oldid=84115754)                       |
| იაფი   | cheap                                               |    2 | 150, 225          | [Source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)                       |
| იახტა  | yacht                                               |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)                      |
| იგავი  | fable                                               |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)                      |
| იდეა   | idea                                                |    1 | 31                | [Source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)                       |
| ილეთი  | trick, technique                                    |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=ილეთი&oldid=84115797)                      |
| ილუზია | illusion                                            |    1 | 165               | [Source](https://en.wiktionary.org/w/index.php?title=ილუზია&oldid=68794707)                     |
| იმედი  | hope                                                |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)                      |
| იოგა   | yoga                                                |    2 | 198, 276          | [Source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)                       |
| იოდი   | iodine                                              |    2 | 52, 226           | [Source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)                       |
| იოლი   | easy                                                |    2 | 178, 258          | [Source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)                       |
| ირემი  | deer                                                |    1 | 100               | [Source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)                      |
| ირონია | irony                                               |    1 | 224               | [Source](https://en.wiktionary.org/w/index.php?title=ირონია&oldid=84098887)                     |
| ისარი  | arrow                                               |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)                      |
| იუბილე | anniversary celebration                             |    1 | 54                | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%A3%E1%83%91%E1%83%98%E1%83%9A%E1%83%94) |
| იუმორი | humor                                               |    1 | 286               | [Source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113)                     |
| იღბალი | luck                                                |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167)                     |
| იღლია  | armpit                                              |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=იღლია&oldid=84115945)                      |
| იხვი   | duck                                                |    2 | 63, 228           | [Source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)                       |
| იჯარა  | lease                                               |    2 | 36, 274           | [Source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)                      |
| კაბა   | dress, frock                                        |    2 | 182, 274          | [Source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)                       |
| კაბინა | cabin                                               |    1 | 182               | [Source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910)                     |
| კაკალი | walnut; walnut tree                                 |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192)                     |
| კაკაო  | cocoa                                               |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)                      |
| კალია  | grasshopper                                         |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)                      |
| კამა   | dill                                                |    2 | 139, 251          | [Source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)                       |
| კამათი | argument                                            |    1 | 251               | [Source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005)                     |
| კამერა | chamber                                             |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969)                     |
| კანი   | skin                                                |    2 | 15, 173           | [Source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)                       |
| კანჭი  | shin                                                |    1 | 50                | [Source](https://en.wiktionary.org/w/index.php?title=კანჭი&oldid=84116024)                      |
| კაჟი   | flint                                               |    1 | 265               | [Source](https://en.wiktionary.org/w/index.php?title=კაჟი&oldid=84099010)                       |
| კარავი | tent                                                |    1 | 273               | [Source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033)                     |
| კარატე | karate                                              |    1 | 203               | [Source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608)                     |
| კარატი | carat                                               |    1 | 112               | [Source](https://en.wiktionary.org/w/index.php?title=კარატი&oldid=84099016)                     |
| კარი   | door                                                |    1 | 275               | [Source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)                       |
| კარტი  | card                                                |    1 | 112               | [Source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)                      |
| კასრი  | barrel                                              |    1 | 220               | [Source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)                      |
| კატა   | cat                                                 |    1 | 112               | [Source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)                       |
| კაუჭი  | hook                                                |    1 | 19                | [Source](https://en.wiktionary.org/w/index.php?title=კაუჭი&oldid=88081762)                      |
| კაფე   | cafe                                                |    1 | 2                 | [Source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)                       |
| კაცი   | man                                                 |    2 | 58, 174           | [Source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)                       |
| კბილი  | tooth                                               |    1 | 178               | [Source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)                      |
| კენკრა | berry                                               |    1 | 271               | [Source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952)                     |
| კენჭი  | pebble                                              |    1 | 69                | [Source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)                      |
| კერა   | hearth                                              |    2 | 2, 139            | [Source](https://en.wiktionary.org/w/index.php?title=კერა&oldid=91649986)                       |
| კერძი  | dish                                                |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)                      |
| კერძო  | private                                             |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=კერძო&oldid=75680066)                      |
| კეტი   | stick                                               |    2 | 89, 220           | [Source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)                       |
| კეფა   | back of the head                                    |    2 | 2, 203            | [Source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)                       |
| კეცი   | ketsi, earthenware frying pan (usually from clay)   |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=კეცი&oldid=84116112)                       |
| კეხი   | saddle tree, nose hump                              |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=კეხი&oldid=91570728)                       |
| კვალი  | trail, clue                                         |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)                      |
| კვანძი | knot                                                |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089)                     |
| კვარცი | quartz                                              |    1 | 58                | [Source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421)                     |
| კვირა  | week                                                |    1 | 58                | [Source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)                      |
| კვირტი | bud                                                 |    1 | 68                | [Source](https://en.wiktionary.org/w/index.php?title=კვირტი&oldid=84116143)                     |
| კვიცი  | foal                                                |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=კვიცი&oldid=91715232)                      |
| კვოტა  | quota                                               |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=კვოტა&oldid=84099109)                      |
| კიბე   | ladder, stair, staircase, stairway                  |    2 | 69, 231           | [Source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)                       |
| კიბო   | barnacle; cancer                                    |    2 | 11, 231           | [Source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)                       |
| კიდე   | edge                                                |    1 | 48                | [Source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)                       |
| კიდური | limb                                                |    1 | 142               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%98%E1%83%93%E1%83%A3%E1%83%A0%E1%83%98) |
| კივი   | kiwi fruit; kiwi bird                               |    2 | 68, 195           | [Source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)                       |
| კილო   | kilo                                                |    2 | 153, 270          | [Source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)                       |
| კინო   | cinema; movie                                       |    2 | 115, 222          | [Source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)                       |
| კიტრი  | cucumber                                            |    2 | 68, 267           | [Source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)                      |
| კლასი  | class                                               |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)                      |
| კლდე   | cliff, crag, scar, rock                             |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)                       |
| კლიპი  | music video                                         |    1 | 255               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9A%E1%83%98%E1%83%9E%E1%83%98)          |
| კლიტე  | lock                                                |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)                      |
| კლიშე  | cliché                                              |    1 | 259               | [Source](https://en.wiktionary.org/w/index.php?title=კლიშე&oldid=84099154)                      |
| კლონი  | clone                                               |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=კლონი&oldid=84099156)                      |
| კლოუნი | clown                                               |    1 | 115               | [Source](https://en.wiktionary.org/w/index.php?title=კლოუნი&oldid=84116208)                     |
| კლუბი  | club                                                |    2 | 11, 259           | [Source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)                      |
| კნუტი  | kitten                                              |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)                      |
| კოალა  | koala                                               |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)                      |
| კობრა  | cobra                                               |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)                      |
| კობრი  | carp                                                |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=კობრი&oldid=84116215)                      |
| კოდი   | code                                                |    2 | 52, 222           | [Source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)                       |
| კოვზი  | spoon                                               |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)                      |
| კოკა   | traditional clay jug                                |    1 | 153               | [Source](https://www.ganmarteba.ge/word/კოკა)                                                   |
| კომა   | coma                                                |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=კომა&oldid=84099194)                       |
| კომში  | quince                                              |    1 | 111               | [Source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)                      |
| კონა   | bundle                                              |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=კონა&oldid=84099233)                       |
| კოპი   | bump                                                |    2 | 30, 255           | [Source](https://en.wiktionary.org/w/index.php?title=კოპი&oldid=90518672)                       |
| კორტი  | tennis-court                                        |    1 | 16                | [Source](https://en.wiktionary.org/w/index.php?title=კორტი&oldid=84116301)                      |
| კოშკი  | tower                                               |    1 | 111               | [Source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)                      |
| კოჭი   | ankle                                               |    2 | 16, 192           | [Source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)                       |
| კრავი  | lamb                                                |    2 | 58, 273           | [Source](https://en.wiktionary.org/w/index.php?title=კრავი&oldid=84116326)                      |
| კრემი  | cream                                               |    2 | 48, 289           | [Source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)                      |
| კრივი  | boxing                                              |    1 | 68                | [Source](https://en.wiktionary.org/w/index.php?title=კრივი&oldid=92228879)                      |
| კრუხი  | broody hen                                          |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=კრუხი&oldid=84099373)                      |
| კუბი   | cube                                                |    2 | 11, 204           | [Source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)                       |
| კუბო   | coffin                                              |    2 | 11, 204           | [Source](https://en.wiktionary.org/w/index.php?title=კუბო&oldid=88091344)                       |
| კუდი   | tail                                                |    2 | 142, 222          | [Source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)                       |
| კუზი   | hump                                                |    1 | 245               | [Source](https://en.wiktionary.org/w/index.php?title=კუზი&oldid=84099382)                       |
| კუნთი  | muscle                                              |    2 | 115, 240          | [Source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)                      |
| კუნძი  | stump                                               |    1 | 222               | [Source](https://en.wiktionary.org/w/index.php?title=კუნძი&oldid=84116386)                      |
| კუპატი | kupati sausage                                      |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=კუპატი&oldid=84096710)                     |
| კურკა  | fruit stone                                         |    1 | 271               | [Source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)                      |
| კურსი  | course; exchange rate                               |    1 | 267               | [Source](https://en.wiktionary.org/w/index.php?title=კურსი&oldid=69618502)                      |
| კუჭი   | stomach                                             |    2 | 19, 240           | [Source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)                       |
| ლაგამი | bridle                                              |    1 | 38                | [Source](https://en.wiktionary.org/w/index.php?title=ლაგამი&oldid=91776622)                     |
| ლავა   | lava                                                |    2 | 79, 189           | [Source](https://en.wiktionary.org/w/index.php?title=ლავა&oldid=84099414)                       |
| ლავაში | lavash flatbread                                    |    1 | 183               | [Source](https://en.wiktionary.org/w/index.php?title=ლავაში&oldid=84116412)                     |
| ლაიმი  | lime (fruit)                                        |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)                      |
| ლამა   | llama                                               |    2 | 38, 168           | [Source](https://en.wiktionary.org/w/index.php?title=ლამა&oldid=84099426)                       |
| ლამაზი | beautiful                                           |    1 | 250               | [Source](https://en.wiktionary.org/w/index.php?title=ლამაზი&oldid=84116431)                     |
| ლამპა  | lamp                                                |    1 | 175               | [Source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)                      |
| ლარი   | lari (Georgian currency)                            |    2 | 59, 265           | [Source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)                       |
| ლაქა   | spot, stain                                         |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)                       |
| ლაღი   | carefree                                            |    1 | 238               | [Source](https://en.wiktionary.org/w/index.php?title=ლაღი&oldid=90036516)                       |
| ლაჩარი | cowardly                                            |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=ლაჩარი&oldid=91726049)                     |
| ლეიბი  | mattress                                            |    2 | 73, 158           | [Source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)                      |
| ლეკვი  | puppy                                               |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)                      |
| ლენტი  | ribbon                                              |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=ლენტი&oldid=84099468)                      |
| ლექსი  | poem                                                |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)                      |
| ლეღვი  | fig                                                 |    1 | 47                | [Source](https://en.wiktionary.org/w/index.php?title=ლეღვი&oldid=88091333)                      |
| ლიგა   | league                                              |    2 | 38, 219           | [Source](https://en.wiktionary.org/w/index.php?title=ლიგა&oldid=84099491)                       |
| ლიდერი | leader                                              |    1 | 232               | [Source](https://en.wiktionary.org/w/index.php?title=ლიდერი&oldid=84116502)                     |
| ლიმონი | lemon                                               |    1 | 258               | [Source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519)                     |
| ლინზა  | lens                                                |    1 | 127               | [Source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)                      |
| ლირა   | lira                                                |    3 | 43, 138, 265      | [Source](https://en.wiktionary.org/w/index.php?title=ლირა&oldid=84099516)                       |
| ლიტრი  | litre                                               |    1 | 43                | [Source](https://en.wiktionary.org/w/index.php?title=ლიტრი&oldid=84099523)                      |
| ლიფტი  | elevator                                            |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)                      |
| ლობიო  | bean                                                |    2 | 40, 192           | [Source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)                      |
| ლოგიკა | logic                                               |    1 | 244               | [Source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159)                     |
| ლოდი   | block, rubble                                       |    2 | 25, 208           | [Source](https://en.wiktionary.org/w/index.php?title=ლოდი&oldid=84099538)                       |
| ლომი   | lion                                                |    2 | 25, 208           | [Source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)                       |
| ლორი   | ham                                                 |    2 | 5, 117            | [Source](https://en.wiktionary.org/w/index.php?title=ლორი&oldid=84116556)                       |
| ლოქო   | catfish                                             |    1 | 40                | [Source](https://en.wiktionary.org/w/index.php?title=ლოქო&oldid=92197076)                       |
| ლოყა   | cheek                                               |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)                       |
| ლუდი   | beer                                                |    2 | 54, 137           | [Source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)                       |
| ლულა   | barrel of a gun                                     |    1 | 219               | [Source](https://en.wiktionary.org/w/index.php?title=ლულა&oldid=84103557)                       |
| ლურჯი  | blue                                                |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)                      |
| ლუწი   | even                                                |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)                       |
| მაგარი | hard, strong                                        |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421)                     |
| მაგია  | magic                                               |    1 | 38                | [Source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)                      |
| მაგიდა | table                                               |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591)                     |
| მადა   | appetite, stomach                                   |    2 | 98, 242           | [Source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)                       |
| მადლი  | kindness, grace                                     |    1 | 127               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%93%E1%83%9A%E1%83%98)          |
| მავნე  | harmful                                             |    1 | 18                | [Source](https://en.wiktionary.org/w/index.php?title=მავნე&oldid=45716925)                      |
| მაზლი  | husband's brother                                   |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=მაზლი&oldid=84608836)                      |
| მაისი  | May                                                 |    1 | 93                | [Source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)                      |
| მალა   | vertebra                                            |    3 | 87, 175, 250      | [Source](https://en.wiktionary.org/w/index.php?title=მალა&oldid=91725189)                       |
| მალამო | ointment                                            |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=მალამო&oldid=84099608)                     |
| მალე   | soon                                                |    2 | 35, 140           | [Source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)                       |
| მამა   | father                                              |    2 | 87, 251           | [Source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)                       |
| მამალი | rooster                                             |    1 | 38                | [Source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460)                     |
| მამრი  | male animal                                         |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=მამრი&oldid=84116656)                      |
| მანგო  | mango                                               |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)                      |
| მანეთი | ruble                                               |    1 | 22                | [Source](https://en.wiktionary.org/w/index.php?title=მანეთი&oldid=91150504)                     |
| მანია  | mania                                               |    2 | 98, 272           | [Source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)                      |
| მარაგი | reserve; stockpile                                  |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=მარაგი&oldid=84116683)                     |
| მარანი | wine cellar                                         |    1 | 272               | [Source](https://en.wiktionary.org/w/index.php?title=მარანი&oldid=84116688)                     |
| მარაო  | hand fan                                            |    1 | 107               | [Source](https://en.wiktionary.org/w/index.php?title=მარაო&oldid=92945174)                      |
| მარკა  | postage stamp                                       |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=მარკა&oldid=84099669)                      |
| მარტო  | alone                                               |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)                      |
| მარში  | march                                               |    1 | 171               | [Source](https://en.wiktionary.org/w/index.php?title=მარში&oldid=84099689)                      |
| მარცხი | failure; defeat                                     |    1 | 281               | [Source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693)                     |
| მასა   | mass                                                |    2 | 80, 254           | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A1%E1%83%90)                   |
| მასალა | material                                            |    1 | 168               | [Source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175)                     |
| მასრა  | spool                                               |    1 | 107               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A1%E1%83%A0%E1%83%90)          |
| მატლი  | maggot, larva                                       |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=მატლი&oldid=84099718)                      |
| მატჩი  | sports match                                        |    1 | 145               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A2%E1%83%A9%E1%83%98)          |
| მაუსი  | computer mouse                                      |    2 | 128, 245          | [Source](https://en.wiktionary.org/w/index.php?title=მაუსი&oldid=84116767)                      |
| მაჩვი  | badger                                              |    1 | 264               | [Source](https://en.wiktionary.org/w/index.php?title=მაჩვი&oldid=84116792)                      |
| მაწონი | matsoni yogurt                                      |    1 | 252               | [Source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051)                     |
| მახე   | trap                                                |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)                       |
| მაჯა   | wrist                                               |    1 | 272               | [Source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)                       |
| მგელი  | wolf                                                |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)                      |
| მდელო  | meadow                                              |    1 | 208               | [Source](https://en.wiktionary.org/w/index.php?title=მდელო&oldid=84116820)                      |
| მედალი | medal                                               |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774)                     |
| მედია  | media                                               |    1 | 105               | [Source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)                      |
| მელა   | fox                                                 |    2 | 53, 171           | [Source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)                       |
| მენიუ  | menu                                                |    1 | 235               | [Source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)                      |
| მენჯი  | pelvis                                              |    1 | 33                | [Source](https://en.wiktionary.org/w/index.php?title=მენჯი&oldid=84116881)                      |
| მერი   | mayor                                               |    1 | 100               | [Source](https://en.wiktionary.org/w/index.php?title=მერი&oldid=84099841)                       |
| მერია  | city administration                                 |    1 | 96                | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A0%E1%83%98%E1%83%90)          |
| მეტალი | metal                                               |    1 | 53                | [Source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455)                     |
| მეტრი  | metre                                               |    2 | 48, 125           | [Source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)                      |
| მეტრო  | metro                                               |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)                      |
| მეფე   | king                                                |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)                       |
| მზა    | ready                                               |    3 | 21, 109, 250      | [Source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)                        |
| მზე    | Sun                                                 |    2 | 24, 109           | [Source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)                        |
| მთა    | mountain, hill                                      |    3 | 22, 101, 251      | [Source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)                        |
| მთელი  | whole; entire                                       |    2 | 49, 158           | [Source](https://en.wiktionary.org/w/index.php?title=მთელი&oldid=91740782)                      |
| მთვარე | moon                                                |    1 | 101               | [Source](https://en.wiktionary.org/w/index.php?title=მთვარე&oldid=92701984)                     |
| მიზანი | goal; target                                        |    1 | 28                | [Source](https://en.wiktionary.org/w/index.php?title=მიზანი&oldid=84117018)                     |
| მითი   | myth                                                |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)                       |
| მილი   | tube; mile                                          |    2 | 70, 258           | [Source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)                       |
| მინა   | glass (material)                                    |    2 | 98, 272           | [Source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)                       |
| მისია  | mission                                             |    2 | 93, 177           | [Source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)                      |
| მიწა   | earth, soil                                         |    2 | 27, 213           | [Source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)                       |
| მიჯნა  | boundary                                            |    1 | 33                | [Source](https://en.wiktionary.org/w/index.php?title=მიჯნა&oldid=85056051)                      |
| მლაშე  | salty                                               |    1 | 171               | [Source](https://en.wiktionary.org/w/index.php?title=მლაშე&oldid=75374767)                      |
| მოდა   | fashion                                             |    2 | 27, 198           | [Source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)                       |
| მოდელი | model                                               |    1 | 208               | [Source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844)                     |
| მოდული | module                                              |    1 | 25                | [Source](https://en.wiktionary.org/w/index.php?title=მოდული&oldid=84100046)                     |
| მოლარე | cashier                                             |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=მოლარე&oldid=88326243)                     |
| მონა   | slave                                               |    2 | 160, 252          | [Source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)                       |
| მორი   | log, timber                                         |    2 | 143, 286          | [Source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)                       |
| მჟავა  | acid                                                |    1 | 264               | [Source](https://en.wiktionary.org/w/index.php?title=მჟავა&oldid=84117295)                      |
| მჟავე  | sour                                                |    1 | 248               | [Source](https://en.wiktionary.org/w/index.php?title=მჟავე&oldid=84417167)                      |
| მსაჯი  | referee                                             |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=მსაჯი&oldid=84100170)                      |
| მსუყე  | rich, heavy (food)                                  |    1 | 235               | [Source](https://en.wiktionary.org/w/index.php?title=მსუყე&oldid=84088905)                      |
| მსხალი | pear                                                |    1 | 223               | [Source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341)                     |
| მტერი  | enemy                                               |    1 | 48                | [Source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)                      |
| მტრედი | pigeon, dove                                        |    1 | 48                | [Source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351)                     |
| მუდამ  | always                                              |    1 | 294               | [Source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)                      |
| მუზა   | muse                                                |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=მუზა&oldid=84100186)                       |
| მუმია  | mummy                                               |    1 | 294               | [Source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)                      |
| მურაბა | jam, fruit preserve                                 |    1 | 242               | [Source](https://en.wiktionary.org/w/index.php?title=მურაბა&oldid=84100195)                     |
| მური   | soot                                                |    2 | 210, 289          | [Source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)                       |
| მუსიკა | music                                               |    1 | 245               | [Source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574)                     |
| მუქი   | dark                                                |    1 | 294               | [Source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)                       |
| მუყაო  | cardboard                                           |    1 | 132               | [Source](https://en.wiktionary.org/w/index.php?title=მუყაო&oldid=84100207)                      |
| მუშა   | worker                                              |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)                       |
| მუშტი  | fist                                                |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=მუშტი&oldid=84117401)                      |
| მუჭა   | handful                                             |    1 | 19                | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A3%E1%83%AD%E1%83%90)                   |
| მუხა   | oak                                                 |    2 | 80, 184           | [Source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)                       |
| მუხლი  | knee                                                |    1 | 70                | [Source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)                      |
| მუხტი  | charge                                              |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=მუხტი&oldid=87730411)                      |
| მყარი  | solid; stable                                       |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=მყარი&oldid=84090626)                      |
| მყესი  | tendon                                              |    1 | 235               | [Source](https://en.wiktionary.org/w/index.php?title=მყესი&oldid=84100227)                      |
| მყიფე  | fragile                                             |    1 | 210               | [Source](https://en.wiktionary.org/w/index.php?title=მყიფე&oldid=75374822)                      |
| მშრალი | dry                                                 |    1 | 171               | [Source](https://en.wiktionary.org/w/index.php?title=მშრალი&oldid=84090631)                     |
| მცირე  | small                                               |    1 | 49                | [Source](https://en.wiktionary.org/w/index.php?title=მცირე&oldid=92228054)                      |
| მძაფრი | intense, pungent                                    |    1 | 66                | [Source](https://en.wiktionary.org/w/index.php?title=მძაფრი&oldid=92779934)                     |
| მძივი  | bead                                                |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=მძივი&oldid=84100240)                      |
| მძღოლი | driver                                              |    1 | 238               | [Source](https://en.wiktionary.org/w/index.php?title=მძღოლი&oldid=88648707)                     |
| მწარე  | bitter; spicy                                       |    1 | 101               | [Source](https://en.wiktionary.org/w/index.php?title=მწარე&oldid=91715973)                      |
| მწერი  | insect                                              |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=მწერი&oldid=91784205)                      |
| მწვადი | grilled meat on a skewer                            |    1 | 27                | [Source](https://en.wiktionary.org/w/index.php?title=მწვადი&oldid=87884655)                     |
| მწვანე | green                                               |    2 | 18, 248           | [Source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780)                     |
| მწირი  | scarce; scanty                                      |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=მწირი&oldid=85017924)                      |
| მწიფე  | ripe                                                |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=მწიფე&oldid=84088916)                      |
| მწნილი | pickled food                                        |    1 | 258               | [Source](https://en.wiktionary.org/w/index.php?title=მწნილი&oldid=84100246)                     |
| მჭადი  | Georgian cornbread                                  |    1 | 105               | [Source](https://en.wiktionary.org/w/index.php?title=მჭადი&oldid=84117468)                      |
| მხარე  | side; region                                        |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)                      |
| მხარი  | shoulder                                            |    1 | 184               | [Source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)                      |
| მხეცი  | beast                                               |    1 | 97                | [Source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)                      |
| ნადიმი | feast                                               |    1 | 98                | [Source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506)                     |
| ნადირი | wild animal                                         |    1 | 253               | [Source](https://en.wiktionary.org/w/index.php?title=ნადირი&oldid=84117507)                     |
| ნავთი  | kerosene                                            |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=ნავთი&oldid=84117508)                      |
| ნავი   | boat                                                |    2 | 161, 295          | [Source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)                       |
| ნაზი   | gentle; tender                                      |    2 | 28, 127           | [Source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)                       |
| ნაკლი  | defect                                              |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)                      |
| ნალი   | horseshoe                                           |    2 | 127, 246          | [Source](https://en.wiktionary.org/w/index.php?title=ნალი&oldid=84117544)                       |
| ნამი   | dew, morning dew                                    |    2 | 22, 252           | [Source](https://en.wiktionary.org/w/index.php?title=ნამი&oldid=91716533)                       |
| ნაოჭი  | wrinkle                                             |    1 | 224               | [Source](https://en.wiktionary.org/w/index.php?title=ნაოჭი&oldid=84100297)                      |
| ნარდი  | backgammon                                          |    1 | 116               | [Source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)                      |
| ნატეხი | fragment, shard                                     |    1 | 29                | [Source](https://en.wiktionary.org/w/index.php?title=ნატეხი&oldid=84100309)                     |
| ნაღები | cream                                               |    1 | 287               | [Source](https://en.wiktionary.org/w/index.php?title=ნაღები&oldid=84096713)                     |
| ნაშთი  | remainder                                           |    1 | 26                | [Source](https://en.wiktionary.org/w/index.php?title=ნაშთი&oldid=84100318)                      |
| ნაძვი  | spruce                                              |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)                      |
| ნაწილი | part; portion                                       |    1 | 246               | [Source](https://en.wiktionary.org/w/index.php?title=ნაწილი&oldid=85068636)                     |
| ნაჭერი | piece, cloth                                        |    1 | 275               | [Source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132)                     |
| ნება   | will                                                |    2 | 129, 287          | [Source](https://en.wiktionary.org/w/index.php?title=ნება&oldid=84096905)                       |
| ნელი   | slow                                                |    2 | 41, 167           | [Source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)                       |
| ნემსი  | needle                                              |    1 | 235               | [Source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)                      |
| ნერგი  | sapling                                             |    1 | 293               | [Source](https://en.wiktionary.org/w/index.php?title=ნერგი&oldid=91680451)                      |
| ნერვი  | nerve                                               |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)                      |
| ნესვი  | melon                                               |    1 | 288               | [Source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)                      |
| ნესტი  | dampness                                            |    1 | 167               | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%94%E1%83%A1%E1%83%A2%E1%83%98)          |
| ნიავი  | breeze                                              |    2 | 212, 295          | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%90%E1%83%95%E1%83%98)          |
| ნივთი  | thing; object                                       |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=ნივთი&oldid=92215809)                      |
| ნიორი  | garlic                                              |    1 | 113               | [Source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)                      |
| ნისლი  | fog, mist                                           |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)                      |
| ნიშა   | niche                                               |    3 | 26, 200, 295      | [Source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)                       |
| ნიჭი   | talent                                              |    1 | 224               | [Source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)                       |
| ნორმა  | norm; standard                                      |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=ნორმა&oldid=87787628)                      |
| ნოხი   | rug                                                 |    1 | 29                | [Source](https://en.wiktionary.org/w/index.php?title=ნოხი&oldid=84100426)                       |
| ნუგეში | comfort, consolation                                |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=ნუგეში&oldid=84117723)                     |
| ნუკრი  | fawn                                                |    1 | 15                | [Source](https://en.wiktionary.org/w/index.php?title=ნუკრი&oldid=84100428)                      |
| ნული   | zero                                                |    1 | 115               | [Source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)                       |
| ნუსხა  | list                                                |    1 | 80                | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%A3%E1%83%A1%E1%83%AE%E1%83%90)          |
| ნუში   | almond                                              |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)                       |
| ობი    | mould                                               |    3 | 5, 85, 284        | [Source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)                        |
| ობოლი  | orphan                                              |    1 | 40                | [Source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)                      |
| ოდა    | ode; traditional house                              |    3 | 20, 126, 226      | [Source](https://en.wiktionary.org/w/index.php?title=ოდა&oldid=87900914)                        |
| ოვალი  | oval                                                |    2 | 13, 169           | [Source](https://en.wiktionary.org/w/index.php?title=ოვალი&oldid=84100444)                      |
| ოთახი  | room, chamber                                       |    1 | 7                 | [Source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)                      |
| ოინი   | prank, trick                                        |    2 | 113, 225          | [Source](https://en.wiktionary.org/w/index.php?title=ოინი&oldid=84117786)                       |
| ოლქი   | district                                            |    2 | 10, 188           | [Source](https://en.wiktionary.org/w/index.php?title=ოლქი&oldid=84117798)                       |
| ომი    | war                                                 |    2 | 46, 258           | [Source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)                        |
| ოპერა  | opera                                               |    1 | 37                | [Source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)                      |
| ორბიტა | orbit                                               |    2 | 133, 243          | [Source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483)                     |
| ორგანო | organ                                               |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=ორგანო&oldid=84103241)                     |
| ორდენი | decoration, medal                                   |    1 | 186               | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A0%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
| ორმო   | pit                                                 |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)                       |
| ორსული | pregnant                                            |    1 | 117               | [Source](https://en.wiktionary.org/w/index.php?title=ორსული&oldid=84117860)                     |
| ოფისი  | office                                              |    1 | 225               | [Source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)                      |
| ოფლი   | sweat                                               |    2 | 20, 241           | [Source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)                       |
| ოქმი   | official written record                             |    1 | 188               | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%98)                   |
| ოქრო   | gold                                                |    1 | 40                | [Source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)                       |
| ოჯახი  | family                                              |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ოჯახი&oldid=92084204)                      |
| პალმა  | palm tree                                           |    1 | 175               | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%90%E1%83%9A%E1%83%9B%E1%83%90)          |
| პალტო  | overcoat                                            |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=პალტო&oldid=88603382)                      |
| პანდა  | panda                                               |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)                      |
| პაპა   | grandfather                                         |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)                       |
| პარკი  | plastic bag                                         |    1 | 265               | [Source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)                      |
| პარტია | political party                                     |    1 | 249               | [Source](https://en.wiktionary.org/w/index.php?title=პარტია&oldid=88896345)                     |
| პასტა  | paste                                               |    1 | 249               | [Source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)                      |
| პასუხი | answer                                              |    1 | 128               | [Source](https://en.wiktionary.org/w/index.php?title=პასუხი&oldid=85067528)                     |
| პეშვი  | cupped hand                                         |    1 | 201               | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%94%E1%83%A8%E1%83%95%E1%83%98)          |
| პიკი   | peak                                                |    2 | 52, 255           | [Source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)                       |
| პილოტი | pilot                                               |    1 | 255               | [Source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538)                     |
| პირი   | mouth                                               |    2 | 100, 229          | [Source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)                       |
| პიტნა  | mint, spearmint                                     |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)                      |
| პიურე  | purée                                               |    1 | 45                | [Source](https://en.wiktionary.org/w/index.php?title=პიურე&oldid=88450340)                      |
| პიცა   | pizza                                               |    1 | 227               | [Source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)                       |
| პლაჟი  | beach                                               |    1 | 265               | [Source](https://en.wiktionary.org/w/index.php?title=პლაჟი&oldid=75423986)                      |
| პლატო  | plateau                                             |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=პლატო&oldid=84100749)                      |
| პლედი  | plaid blanket                                       |    1 | 208               | [Source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)                      |
| პლუსი  | plus                                                |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)                      |
| პოემა  | poem                                                |    1 | 179               | [Source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)                      |
| პოეტი  | poet                                                |    1 | 30                | [Source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)                      |
| პოზა   | pose                                                |    2 | 37, 179           | [Source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)                       |
| პოკერი | poker; card game                                    |    1 | 30                | [Source](https://en.wiktionary.org/w/index.php?title=პოკერი&oldid=84100777)                     |
| პონი   | pony                                                |    2 | 106, 186          | [Source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)                       |
| პორტი  | port                                                |    1 | 30                | [Source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)                      |
| პრემია | prize                                               |    1 | 100               | [Source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288)                     |
| პრესა  | press; news media                                   |    1 | 227               | [Source](https://en.wiktionary.org/w/index.php?title=პრესა&oldid=84174033)                      |
| პრიზი  | prize                                               |    1 | 229               | [Source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)                      |
| პროზა  | prose                                               |    1 | 37                | [Source](https://en.wiktionary.org/w/index.php?title=პროზა&oldid=84100873)                      |
| პულსი  | pulse                                               |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)                      |
| პუმა   | puma                                                |    1 | 128               | [Source](https://en.wiktionary.org/w/index.php?title=პუმა&oldid=85689336)                       |
| პური   | bread                                               |    2 | 45, 229           | [Source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)                       |
| ჟანგი  | rust                                                |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=ჟანგი&oldid=92228064)                      |
| ჟანრი  | genre                                               |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=ჟანრი&oldid=87941020)                      |
| ჟესტი  | gesture                                             |    1 | 119               | [Source](https://en.wiktionary.org/w/index.php?title=ჟესტი&oldid=84100938)                      |
| ჟიური  | jury                                                |    1 | 286               | [Source](https://www.ganmarteba.ge/word/%E1%83%9F%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98)          |
| რაგბი  | rugby                                               |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=რაგბი&oldid=84096743)                      |
| რადიო  | radio                                               |    1 | 226               | [Source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)                      |
| რაზმი  | squad                                               |    1 | 21                | [Source](https://en.wiktionary.org/w/index.php?title=რაზმი&oldid=84118264)                      |
| რაინდი | knight                                              |    1 | 253               | [Source](https://en.wiktionary.org/w/index.php?title=რაინდი&oldid=86397598)                     |
| რაიონი | district                                            |    1 | 113               | [Source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151)                     |
| რაკეტა | rocket                                              |    1 | 203               | [Source](https://en.wiktionary.org/w/index.php?title=რაკეტა&oldid=88002860)                     |
| რანგი  | rank                                                |    1 | 230               | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%90%E1%83%9C%E1%83%92%E1%83%98)          |
| რასა   | race (human group)                                  |    2 | 107, 249          | [Source](https://en.wiktionary.org/w/index.php?title=რასა&oldid=68803154)                       |
| რაუნდი | round                                               |    1 | 247               | [Source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282)                     |
| რაფა   | windowsill                                          |    1 | 36                | [Source](https://en.wiktionary.org/w/index.php?title=რაფა&oldid=92486505)                       |
| რბილი  | soft                                                |    1 | 73                | [Source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)                      |
| რგოლი  | ring                                                |    1 | 241               | [Source](https://en.wiktionary.org/w/index.php?title=რგოლი&oldid=84118289)                      |
| რეისი  | scheduled journey                                   |    1 | 263               | [Source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)                      |
| რეპი   | rap music                                           |    2 | 45, 227           | [Source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)                       |
| რთული  | difficult; complex                                  |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=რთული&oldid=84118321)                      |
| რიგი   | row; queue                                          |    2 | 64, 147           | [Source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)                       |
| რინგი  | boxing ring                                         |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=რინგი&oldid=84118328)                      |
| რისკი  | risk                                                |    1 | 267               | [Source](https://en.wiktionary.org/w/index.php?title=რისკი&oldid=84118334)                      |
| რიტმი  | beat, cadence, rhythm                               |    1 | 236               | [Source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)                      |
| რიყე   | stony riverbank                                     |    1 | 210               | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%98%E1%83%A7%E1%83%94)                   |
| რიცხვი | number; day of the month                            |    1 | 228               | [Source](https://en.wiktionary.org/w/index.php?title=რიცხვი&oldid=85067546)                     |
| რკალი  | hoop, ring                                          |    2 | 104, 244          | [Source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)                      |
| რკინა  | iron (metal)                                        |    2 | 50, 275           | [Source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)                      |
| რკო    | acorn                                               |    2 | 16, 244           | [Source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)                        |
| რობოტი | robot                                               |    1 | 243               | [Source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728)                     |
| როიალი | grand piano                                         |    1 | 226               | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%9D%E1%83%98%E1%83%90%E1%83%9A%E1%83%98) |
| როკი   | rock music                                          |    2 | 133, 244          | [Source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)                       |
| როლი   | role                                                |    1 | 5                 | [Source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)                       |
| რომი   | rum                                                 |    2 | 111, 286          | [Source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)                       |
| რუკა   | map                                                 |    2 | 15, 271           | [Source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)                       |
| რუხი   | gray/grey                                           |    3 | 9, 142, 247       | [Source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)                       |
| რუჯი   | suntan                                              |    2 | 83, 206           | [Source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)                       |
| რქა    | horn, antler                                        |    1 | 104               | [Source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)                        |
| რძალი  | daughter-in-law; sister-in-law                      |    1 | 59                | [Source](https://en.wiktionary.org/w/index.php?title=რძალი&oldid=91716433)                      |
| რძე    | milk                                                |    4 | 14, 124, 211, 290 | [Source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)                        |
| საათი  | clock; hour                                         |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)                      |
| საამო  | pleasant                                            |    1 | 107               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%90%E1%83%9B%E1%83%9D)          |
| საბანი | blanket                                             |    1 | 56                | [Source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633)                     |
| საბჭო  | council                                             |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=საბჭო&oldid=88896363)                      |
| სადავე | rein                                                |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=სადავე&oldid=92479636)                     |
| სადილი | midday meal                                         |    1 | 93                | [Source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533)                     |
| სავსე  | full                                                |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=სავსე&oldid=81821895)                      |
| სათუთი | delicate, tender                                    |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=სათუთი&oldid=90049130)                     |
| საიტი  | website                                             |    1 | 23                | [Source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)                      |
| საკანი | cell                                                |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500)                     |
| საკეტი | lock                                                |    1 | 220               | [Source](https://en.wiktionary.org/w/index.php?title=საკეტი&oldid=43965749)                     |
| სალათა | salad                                               |    1 | 168               | [Source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797)                     |
| სალონი | salon                                               |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194)                     |
| სამბო  | sambo; wrestling sport                              |    1 | 254               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%9B%E1%83%91%E1%83%9D)          |
| სანდო  | reliable                                            |    1 | 106               | [Source](https://en.wiktionary.org/w/index.php?title=სანდო&oldid=88605743)                      |
| საპონი | soap                                                |    1 | 106               | [Source](https://en.wiktionary.org/w/index.php?title=საპონი&oldid=89620271)                     |
| სარი   | stake                                               |    3 | 4, 88, 194        | [Source](https://en.wiktionary.org/w/index.php?title=სარი&oldid=91725833)                       |
| სარკე  | looking-glass, mirror                               |    1 | 220               | [Source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)                      |
| საუზმე | breakfast                                           |    1 | 109               | [Source](https://en.wiktionary.org/w/index.php?title=საუზმე&oldid=88091259)                     |
| საუნა  | sauna                                               |    1 | 80                | [Source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)                      |
| საქმე  | work, business                                      |    2 | 109, 196          | [Source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)                      |
| საღი   | healthy, sensible                                   |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)                       |
| საშიში | scary; dangerous                                    |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=საშიში&oldid=84118867)                     |
| საცერი | sieve                                               |    1 | 227               | [Source](https://en.wiktionary.org/w/index.php?title=საცერი&oldid=84118875)                     |
| საძილე | for sleeping; as in sleeping bag                    |    1 | 291               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%AB%E1%83%98%E1%83%9A%E1%83%94) |
| საჭირო | necessary                                           |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=საჭირო&oldid=88605887)                     |
| სახე   | face                                                |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)                       |
| სახლი  | home, house, dwelling                               |    1 | 223               | [Source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)                      |
| სევდა  | sadness; sorrow                                     |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=სევდა&oldid=92686510)                      |
| სერია  | series                                              |    1 | 227               | [Source](https://en.wiktionary.org/w/index.php?title=სერია&oldid=87787607)                      |
| სესია  | session                                             |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=სესია&oldid=84101372)                      |
| სესხი  | loan                                                |    1 | 199               | [Source](https://en.wiktionary.org/w/index.php?title=სესხი&oldid=84101374)                      |
| სვავი  | vulture                                             |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=სვავი&oldid=87901139)                      |
| სველი  | wet                                                 |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)                      |
| სვეტი  | column                                              |    1 | 119               | [Source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)                      |
| სვიტრი | sweater                                             |    1 | 63                | [Source](https://en.wiktionary.org/w/index.php?title=სვიტრი&oldid=84118977)                     |
| სია    | list                                                |    4 | 32, 119, 200, 283 | [Source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)                        |
| სიგანე | width                                               |    1 | 288               | [Source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409)                     |
| სითბო  | warmth                                              |    1 | 85                | [Source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)                      |
| სითხე  | liquid                                              |    1 | 202               | [Source](https://en.wiktionary.org/w/index.php?title=სითხე&oldid=84119007)                      |
| სილა   | sand; slap                                          |    2 | 60, 218           | [Source](https://en.wiktionary.org/w/index.php?title=სილა&oldid=81821960)                       |
| სიმი   | string                                              |    2 | 93, 177           | [Source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)                       |
| სინჯი  | sample                                              |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=სინჯი&oldid=84119065)                      |
| სიო    | breeze                                              |    3 | 81, 199, 292      | [Source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)                        |
| სიროფი | syrup                                               |    1 | 263               | [Source](https://en.wiktionary.org/w/index.php?title=სიროფი&oldid=84101529)                     |
| სისქე  | thickness                                           |    1 | 199               | [Source](https://en.wiktionary.org/w/index.php?title=სისქე&oldid=84119083)                      |
| სიტყვა | word                                                |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915)                     |
| სიცხე  | heat; fever                                         |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=სიცხე&oldid=84119122)                      |
| სიძე   | son-in-law; groom                                   |    2 | 41, 291           | [Source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)                       |
| სკამი  | chair                                               |    1 | 245               | [Source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)                      |
| სკოლა  | school                                              |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)                      |
| სოდა   | soda                                                |    1 | 6                 | [Source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)                       |
| სოიო   | soy                                                 |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=სოიო&oldid=84101634)                       |
| სოკო   | mushroom                                            |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)                       |
| სორო   | burrow                                              |    1 | 117               | [Source](https://en.wiktionary.org/w/index.php?title=სორო&oldid=88091310)                       |
| სოუსი  | sauce                                               |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)                      |
| სპა    | spa                                                 |    2 | 106, 249          | [Source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)                        |
| სპილო  | elephant                                            |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)                      |
| სრული  | complete                                            |    1 | 117               | [Source](https://en.wiktionary.org/w/index.php?title=სრული&oldid=84091028)                      |
| სტადია | stage, phase                                        |    1 | 283               | [Source](https://en.wiktionary.org/w/index.php?title=სტადია&oldid=88171626)                     |
| სტაჟი  | length of work experience                           |    1 | 119               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9F%E1%83%98)          |
| სტილი  | style                                               |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)                      |
| სული   | spirit, ghost                                       |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)                       |
| სუნელი | spice; seasoning                                    |    1 | 41                | [Source](https://en.wiktionary.org/w/index.php?title=სუნელი&oldid=84103259)                     |
| სუნი   | smell                                               |    2 | 41, 235           | [Source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)                       |
| სურათი | picture                                             |    1 | 88                | [Source](https://en.wiktionary.org/w/index.php?title=სურათი&oldid=88800264)                     |
| სურდო  | runny nose, head cold                               |    1 | 166               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%93%E1%83%9D)          |
| სუსტი  | weak                                                |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=სუსტი&oldid=89906555)                      |
| სუფთა  | clean                                               |    1 | 88                | [Source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)                      |
| სუფრა  | tablecloth, feast                                   |    1 | 88                | [Source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)                      |
| სფერო  | sphere; field                                       |    1 | 263               | [Source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)                      |
| სქელი  | thick                                               |    1 | 291               | [Source](https://en.wiktionary.org/w/index.php?title=სქელი&oldid=91740769)                      |
| სქემა  | diagram                                             |    1 | 196               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A5%E1%83%94%E1%83%9B%E1%83%90)          |
| სქესი  | sex; gender                                         |    1 | 199               | [Source](https://en.wiktionary.org/w/index.php?title=სქესი&oldid=91012991)                      |
| სცენა  | stage; scene                                        |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=სცენა&oldid=84101771)                      |
| სწორი  | correct; straight                                   |    1 | 292               | [Source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)                      |
| სხივი  | ray                                                 |    1 | 63                | [Source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)                      |
| ტაბუ   | taboo                                               |    1 | 132               | [Source](https://en.wiktionary.org/w/index.php?title=ტაბუ&oldid=84101781)                       |
| ტაიმი  | half of a sports match                              |    1 | 145               | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%90%E1%83%98%E1%83%9B%E1%83%98)          |
| ტალახი | mud                                                 |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470)                     |
| ტალღა  | wave                                                |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)                      |
| ტანგო  | tango                                               |    1 | 276               | [Source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)                      |
| ტანი   | body                                                |    2 | 29, 213           | [Source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)                       |
| ტანკი  | military tank                                       |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=ტანკი&oldid=88002840)                      |
| ტარი   | handle                                              |    2 | 61, 220           | [Source](https://en.wiktionary.org/w/index.php?title=ტარი&oldid=91725865)                       |
| ტარიფი | tariff; rate                                        |    1 | 43                | [Source](https://en.wiktionary.org/w/index.php?title=ტარიფი&oldid=84101808)                     |
| ტარო   | corncob                                             |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=ტარო&oldid=84101809)                       |
| ტაფა   | frying pan                                          |    1 | 221               | [Source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)                       |
| ტაქსი  | taxi                                                |    1 | 57                | [Source](https://en.wiktionary.org/w/index.php?title=ტაქსი&oldid=84119352)                      |
| ტაში   | applause                                            |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)                       |
| ტახტი  | ottoman bench                                       |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=ტახტი&oldid=84101822)                      |
| ტბა    | lake                                                |    2 | 132, 243          | [Source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)                        |
| ტემპი  | pace, tempo                                         |    1 | 53                | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%9B%E1%83%9E%E1%83%98)          |
| ტერფი  | foot                                                |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)                      |
| ტვინი  | brain                                               |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)                      |
| ტივი   | raft                                                |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ტივი&oldid=92420946)                       |
| ტილო   | canvas, linen                                       |    2 | 17, 135           | [Source](https://en.wiktionary.org/w/index.php?title=ტილო&oldid=84101866)                       |
| ტიპი   | type                                                |    2 | 145, 255          | [Source](https://en.wiktionary.org/w/index.php?title=ტიპი&oldid=64001804)                       |
| ტირე   | dash                                                |    2 | 185, 293          | [Source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)                       |
| ტიტა   | tulip                                               |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=ტიტა&oldid=81818591)                       |
| ტიტრი  | caption                                             |    1 | 68                | [Source](https://en.wiktionary.org/w/index.php?title=ტიტრი&oldid=84101877)                      |
| ტოლი   | equal                                               |    2 | 17, 162           | [Source](https://en.wiktionary.org/w/index.php?title=ტოლი&oldid=92197091)                       |
| ტოლმა  | stuffed cabbage or vine leaf                        |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=ტოლმა&oldid=84187254)                      |
| ტომატი | tomato concentrate                                  |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=ტომატი&oldid=89872964)                     |
| ტომი   | tribe; volume                                       |    1 | 236               | [Source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)                       |
| ტონა   | ton                                                 |    2 | 29, 276           | [Source](https://en.wiktionary.org/w/index.php?title=ტონა&oldid=84101895)                       |
| ტონი   | tone                                                |    1 | 276               | [Source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)                       |
| ტორტი  | tart                                                |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)                      |
| ტოტი   | branch, twig                                        |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)                       |
| ტრიო   | trio                                                |    2 | 30, 125           | [Source](https://en.wiktionary.org/w/index.php?title=ტრიო&oldid=84101947)                       |
| ტრიუკი | acrobatic stunt                                     |    1 | 267               | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%A0%E1%83%98%E1%83%A3%E1%83%99%E1%83%98) |
| ტუზი   | ace (card)                                          |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=ტუზი&oldid=84101964)                       |
| ტუმბო  | pump                                                |    1 | 132               | [Source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)                      |
| ტურა   | jackal                                              |    1 | 112               | [Source](https://en.wiktionary.org/w/index.php?title=ტურა&oldid=91715083)                       |
| ტური   | round                                               |    2 | 62, 267           | [Source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)                       |
| ტურნე  | tour                                                |    1 | 62                | [Source](https://en.wiktionary.org/w/index.php?title=ტურნე&oldid=84103454)                      |
| ტუჩი   | lip                                                 |    1 | 57                | [Source](https://en.wiktionary.org/w/index.php?title=ტუჩი&oldid=89949141)                       |
| ტყავი  | leather                                             |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)                      |
| ტყე    | forest, wood                                        |    2 | 152, 279          | [Source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)                        |
| ტყვე   | captive                                             |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)                       |
| ტყვია  | bullet, lead                                        |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)                      |
| ტყუპი  | twin                                                |    1 | 279               | [Source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)                      |
| უაზრო  | pointless; meaningless                              |    1 | 37                | [Source](https://en.wiktionary.org/w/index.php?title=უაზრო&oldid=75687201)                      |
| უარი   | refusal                                             |    2 | 151, 247          | [Source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)                       |
| უბანი  | neighborhood                                        |    1 | 285               | [Source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)                      |
| უბე    | bay; bosom                                          |    2 | 54, 237           | [Source](https://en.wiktionary.org/w/index.php?title=უბე&oldid=84119518)                        |
| უეცარი | sudden                                              |    1 | 277               | [Source](https://en.wiktionary.org/w/index.php?title=უეცარი&oldid=84089033)                     |
| უვიცი  | ignorant, uninformed                                |    1 | 34                | [Source](https://en.wiktionary.org/w/index.php?title=უვიცი&oldid=84088542)                      |
| უზადო  | flawless                                            |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=უზადო&oldid=84119546)                      |
| უთო    | iron for clothes                                    |    2 | 115, 240          | [Source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)                        |
| უკან   | back; backwards                                     |    1 | 15                | [Source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)                       |
| ულუფა  | portion; serving                                    |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=ულუფა&oldid=84102036)                      |
| უმი    | raw, uncooked                                       |    3 | 25, 128, 294      | [Source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)                        |
| უნარი  | ability                                             |    1 | 51                | [Source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)                      |
| უნიჭო  | untalented                                          |    1 | 240               | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%9C%E1%83%98%E1%83%AD%E1%83%9D)          |
| ურემი  | cartload                                            |    2 | 210, 289          | [Source](https://en.wiktionary.org/w/index.php?title=ურემი&oldid=84102064)                      |
| ურიკა  | handcart                                            |    2 | 15, 112           | [Source](https://en.wiktionary.org/w/index.php?title=ურიკა&oldid=84096954)                      |
| ურნა   | urn                                                 |    2 | 51, 271           | [Source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)                       |
| ურო    | hammer                                              |    3 | 9, 117, 286       | [Source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)                        |
| ურყევი | steadfast, firm                                     |    1 | 45                | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A0%E1%83%A7%E1%83%94%E1%83%95%E1%83%98) |
| ურჩი   | disobedient                                         |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=ურჩი&oldid=84091172)                       |
| უქმე   | non-working; as in a day off                        |    1 | 109               | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A5%E1%83%9B%E1%83%94)                   |
| უშნო   | ugly                                                |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=უშნო&oldid=88343119)                       |
| უცხო   | foreign, unfamiliar                                 |    1 | 9                 | [Source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)                       |
| უძრავი | immobile; stationary                                |    1 | 44                | [Source](https://en.wiktionary.org/w/index.php?title=უძრავი&oldid=84091194)                     |
| უხეში  | rough; rude                                         |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=უხეში&oldid=84119754)                      |
| უხვი   | abundant                                            |    1 | 156               | [Source](https://en.wiktionary.org/w/index.php?title=უხვი&oldid=84091205)                       |
| უჯრა   | drawer                                              |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)                       |
| ფაზა   | phase                                               |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)                       |
| ფაილი  | file                                                |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)                      |
| ფარა   | flock                                               |    2 | 8, 203            | [Source](https://en.wiktionary.org/w/index.php?title=ფარა&oldid=84119773)                       |
| ფარდა  | curtain, purdah                                     |    1 | 8                 | [Source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)                      |
| ფართო  | wide                                                |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=ფართო&oldid=84119789)                      |
| ფარი   | shield                                              |    2 | 21, 113           | [Source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)                       |
| ფასი   | price, cost                                         |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)                       |
| ფაფა   | porridge                                            |    1 | 36                | [Source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)                       |
| ფაფარი | mane                                                |    1 | 36                | [Source](https://en.wiktionary.org/w/index.php?title=ფაფარი&oldid=84102170)                     |
| ფაქტი  | fact                                                |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)                      |
| ფენა   | layer                                               |    1 | 116               | [Source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)                       |
| ფენი   | hairdryer                                           |    2 | 62, 176           | [Source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)                       |
| ფერადი | colourful                                           |    1 | 116               | [Source](https://en.wiktionary.org/w/index.php?title=ფერადი&oldid=84091239)                     |
| ფერი   | color, hue                                          |    3 | 62, 185, 263      | [Source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)                       |
| ფერმა  | farm                                                |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)                      |
| ფესვი  | root                                                |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)                      |
| ფეხი   | foot; leg                                           |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)                       |
| ფიალა  | drinking bowl                                       |    1 | 183               | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%98%E1%83%90%E1%83%9A%E1%83%90)          |
| ფიგურა | stature, figure                                     |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102)                     |
| ფილა   | slab                                                |    2 | 20, 137           | [Source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)                       |
| ფილე   | fillet                                              |    2 | 74, 221           | [Source](https://en.wiktionary.org/w/index.php?title=ფილე&oldid=84102226)                       |
| ფილმი  | film                                                |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)                      |
| ფილტრი | filter                                              |    1 | 43                | [Source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240)                     |
| ფირი   | film                                                |    2 | 43, 263           | [Source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)                       |
| ფირმა  | company                                             |    1 | 21                | [Source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)                      |
| ფიცი   | oath                                                |    2 | 34, 118           | [Source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)                       |
| ფიცხი  | quick-tempered                                      |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ფიცხი&oldid=84091258)                      |
| ფიჭა   | honeycomb                                           |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)                       |
| ფიჭვი  | pine                                                |    1 | 34                | [Source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)                      |
| ფლავი  | pilaf                                               |    1 | 183               | [Source](https://en.wiktionary.org/w/index.php?title=ფლავი&oldid=84102266)                      |
| ფლეიტა | flute                                               |    1 | 221               | [Source](https://en.wiktionary.org/w/index.php?title=ფლეიტა&oldid=92228066)                     |
| ფლორა  | plant life, flora                                   |    1 | 241               | [Source](https://en.wiktionary.org/w/index.php?title=ფლორა&oldid=84102277)                      |
| ფლოტი  | fleet                                               |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=ფლოტი&oldid=84102283)                      |
| ფოთოლი | leaf                                                |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315)                     |
| ფოლადი | steel                                               |    1 | 20                | [Source](https://en.wiktionary.org/w/index.php?title=ფოლადი&oldid=84119907)                     |
| ფონდი  | fund                                                |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)                      |
| ფონი   | background                                          |    1 | 225               | [Source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)                       |
| ფორმა  | shape, form                                         |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)                      |
| ფოსტა  | post; mail                                          |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ფოსტა&oldid=87382061)                      |
| ფოტო   | photo                                               |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)                       |
| ფრაზა  | phrase                                              |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)                      |
| ფრანი  | kite                                                |    1 | 113               | [Source](https://en.wiktionary.org/w/index.php?title=ფრანი&oldid=84119947)                      |
| ფრე    | draw; tie in a game                                 |    3 | 2, 116, 256       | [Source](https://en.wiktionary.org/w/index.php?title=ფრე&oldid=84103223)                        |
| ფრთა   | wing                                                |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)                       |
| ფსონი  | bet                                                 |    1 | 225               | [Source](https://en.wiktionary.org/w/index.php?title=ფსონი&oldid=84119973)                      |
| ფულადი | monetary                                            |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=ფულადი&oldid=84091297)                     |
| ფული   | money                                               |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)                       |
| ფუნტი  | pound                                               |    1 | 62                | [Source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)                      |
| ფუჭი   | futile; useless                                     |    1 | 34                | [Source](https://en.wiktionary.org/w/index.php?title=ფუჭი&oldid=84119986)                       |
| ფხა    | fishbone                                            |    2 | 75, 184           | [Source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)                          |
| ქადა   | sweet pastry                                        |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=ქადა&oldid=91650192)                       |
| ქათამი | chicken                                             |    1 | 268               | [Source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996)                     |
| ქალი   | woman                                               |    2 | 10, 114           | [Source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)                       |
| ქალური | feminine                                            |    1 | 104               | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98) |
| ქანჩი  | nut (fastener)                                      |    1 | 285               | [Source](https://en.wiktionary.org/w/index.php?title=ქანჩი&oldid=78853155)                      |
| ქაოსი  | chaos                                               |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ქაოსი&oldid=84120027)                      |
| ქარი   | wind                                                |    3 | 4, 96, 268        | [Source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)                       |
| ქაფი   | foam                                                |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ქაფი&oldid=84120056)                       |
| ქაჯი   | goblin                                              |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ქაჯი&oldid=87997423)                       |
| ქედი   | mountain range                                      |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)                       |
| ქერა   | blond                                               |    1 | 196               | [Source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)                       |
| ქერი   | barley                                              |    1 | 96                | [Source](https://en.wiktionary.org/w/index.php?title=ქერი&oldid=87901504)                       |
| ქერქი  | bark; rind                                          |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=ქერქი&oldid=92228071)                      |
| ქვა    | stone                                               |    2 | 131, 218          | [Source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)                        |
| ქვაბი  | pot                                                 |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)                      |
| ქვისლი | co-brother-in-law                                   |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=ქვისლი&oldid=88662328)                     |
| ქვიშა  | sand                                                |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)                      |
| ქილა   | jar                                                 |    2 | 10, 172           | [Source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)                       |
| ქიმია  | chemistry                                           |    1 | 96                | [Source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)                      |
| ქირა   | rent                                                |    2 | 4, 197            | [Source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)                       |
| ქისა   | purse                                               |    2 | 4, 291            | [Source](https://en.wiktionary.org/w/index.php?title=ქისა&oldid=82308419)                       |
| ქლიავი | plum                                                |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131)                     |
| ქმარი  | husband                                             |    1 | 268               | [Source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)                      |
| ქოთანი | plant pot                                           |    1 | 26                | [Source](https://en.wiktionary.org/w/index.php?title=ქოთანი&oldid=89322782)                     |
| ქოლგა  | umbrella                                            |    1 | 10                | [Source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)                      |
| ქონება | property; wealth                                    |    1 | 103               | [Source](https://en.wiktionary.org/w/index.php?title=ქონება&oldid=90059881)                     |
| ქონი   | fat, grease                                         |    1 | 26                | [Source](https://en.wiktionary.org/w/index.php?title=ქონი&oldid=84120145)                       |
| ქორი   | goshawk                                             |    2 | 40, 166           | [Source](https://en.wiktionary.org/w/index.php?title=ქორი&oldid=92251688)                       |
| ქოსა   | beardless                                           |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ქოსა&oldid=91928853)                       |
| ქოხი   | hut; cabin                                          |    1 | 199               | [Source](https://en.wiktionary.org/w/index.php?title=ქოხი&oldid=84096657)                       |
| ქრთამი | bribe                                               |    1 | 268               | [Source](https://en.wiktionary.org/w/index.php?title=ქრთამი&oldid=92921065)                     |
| ქსელი  | web; network                                        |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=ქსელი&oldid=84809641)                      |
| ქუდი   | hat                                                 |    2 | 166, 294          | [Source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)                       |
| ქულა   | point, score                                        |    1 | 104               | [Source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)                       |
| ქურა   | stove, furnace                                      |    2 | 104, 197          | [Source](https://en.wiktionary.org/w/index.php?title=ქურა&oldid=91715085)                       |
| ქურდი  | thief                                               |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)                      |
| ქურქი  | fur coat                                            |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=ქურქი&oldid=84224158)                      |
| ქუსლი  | heel                                                |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)                      |
| ქუჩა   | street                                              |    2 | 57, 285           | [Source](https://en.wiktionary.org/w/index.php?title=ქუჩა&oldid=84120190)                       |
| ღამე   | night                                               |    2 | 105, 196          | [Source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)                       |
| ღარი   | groove, ditch                                       |    2 | 14, 217           | [Source](https://en.wiktionary.org/w/index.php?title=ღარი&oldid=84102504)                       |
| ღელე   | brook                                               |    1 | 47                | [Source](https://en.wiktionary.org/w/index.php?title=ღელე&oldid=84120207)                       |
| ღერი   | strand, stalk                                       |    1 | 14                | [Source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%94%E1%83%A0%E1%83%98)                   |
| ღერო   | blade, haulm, stalk, stem                           |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ღერო&oldid=87901541)                       |
| ღერძი  | axle; axis                                          |    1 | 14                | [Source](https://en.wiktionary.org/w/index.php?title=ღერძი&oldid=84120210)                      |
| ღვედი  | belt, strap                                         |    1 | 47                | [Source](https://en.wiktionary.org/w/index.php?title=ღვედი&oldid=84120218)                      |
| ღვინო  | wine                                                |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)                      |
| ღია    | open                                                |    2 | 76, 154           | [Source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)                        |
| ღილი   | button                                              |    2 | 108, 232          | [Source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)                       |
| ღიპი   | belly                                               |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=ღიპი&oldid=84102517)                       |
| ღირსი  | worthy; deserving                                   |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=ღირსი&oldid=88628246)                      |
| ღომი   | ghomi maize porridge                                |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)                       |
| ღონე   | strength                                            |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=ღონე&oldid=84120241)                       |
| ღორი   | pig                                                 |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)                       |
| ღრმა   | deep                                                |    1 | 196               | [Source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)                       |
| ღრუ    | cavity; hollow space                                |    1 | 44                | [Source](https://www.ganmarteba.ge/word/ღრუ)                                                    |
| ღუზა   | anchor                                              |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=ღუზა&oldid=87788040)                       |
| ყაბაყი | zucchini                                            |    1 | 261               | [Source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258)                     |
| ყადრი  | value, respect                                      |    1 | 253               | [Source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)                      |
| ყავა   | coffee                                              |    2 | 1, 189            | [Source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)                       |
| ყალბი  | fake; false                                         |    1 | 86                | [Source](https://en.wiktionary.org/w/index.php?title=ყალბი&oldid=84120277)                      |
| ყანა   | field                                               |    1 | 56                | [Source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)                       |
| ყასაბი | butcher                                             |    1 | 56                | [Source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292)                     |
| ყბა    | jaw                                                 |    3 | 56, 132, 261      | [Source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)                        |
| ყდა    | cover of a book                                     |    3 | 1, 86, 253        | [Source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)                        |
| ყელი   | throat                                              |    2 | 152, 279          | [Source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)                       |
| ყვავი  | crow                                                |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)                      |
| ყველი  | cheese                                              |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)                      |
| ყინვა  | frost, freezing, freezing temperatures, severe cold |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)                      |
| ყლუპი  | sip                                                 |    1 | 279               | [Source](https://en.wiktionary.org/w/index.php?title=ყლუპი&oldid=84120339)                      |
| ყორანი | raven                                               |    1 | 51                | [Source](https://en.wiktionary.org/w/index.php?title=ყორანი&oldid=92709834)                     |
| ყრუ    | deaf                                                |    2 | 51, 206           | [Source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)                        |
| ყუთი   | box                                                 |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=ყუთი&oldid=85493733)                       |
| ყურე   | bay, bight                                          |    1 | 45                | [Source](https://en.wiktionary.org/w/index.php?title=ყურე&oldid=84102567)                       |
| ყური   | ear                                                 |    2 | 51, 210           | [Source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)                       |
| შავი   | black                                               |    2 | 3, 131            | [Source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)                       |
| შალი   | shawl                                               |    2 | 3, 171            | [Source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)                       |
| შანსი  | chance                                              |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)                      |
| შაშვი  | thrush                                              |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=შაშვი&oldid=84757236)                      |
| შაში   | checkers game                                       |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=შაში&oldid=84096882)                       |
| შაშხი  | salted or dried meat                                |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=შაშხი&oldid=88672039)                      |
| შველი  | roe deer                                            |    1 | 90                | [Source](https://en.wiktionary.org/w/index.php?title=შველი&oldid=91741270)                      |
| შვილი  | child                                               |    1 | 90                | [Source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)                      |
| შვრია  | oats                                                |    1 | 201               | [Source](https://en.wiktionary.org/w/index.php?title=შვრია&oldid=88155749)                      |
| შინდი  | cornelian cherry                                    |    1 | 295               | [Source](https://en.wiktionary.org/w/index.php?title=შინდი&oldid=87901604)                      |
| შიში   | fear                                                |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)                       |
| შნო    | skill, charm                                        |    2 | 26, 205           | [Source](https://en.wiktionary.org/w/index.php?title=შნო&oldid=92228121)                        |
| შობა   | Christmas                                           |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)                       |
| შოკი   | shock                                               |    2 | 17, 111           | [Source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)                       |
| შოლტი  | whip                                                |    1 | 17                | [Source](https://en.wiktionary.org/w/index.php?title=შოლტი&oldid=88091226)                      |
| შორი   | far                                                 |    2 | 111, 236          | [Source](https://en.wiktionary.org/w/index.php?title=შორი&oldid=84097095)                       |
| შორს   | far                                                 |    1 | 6                 | [Source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)                       |
| შოშია  | starling                                            |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=შოშია&oldid=88091349)                      |
| შრე    | stratum, layer                                      |    2 | 120, 201          | [Source](https://en.wiktionary.org/w/index.php?title=შრე&oldid=84102672)                        |
| შტაბი  | headquarters                                        |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=შტაბი&oldid=84120584)                      |
| შტატი  | state; staff                                        |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=შტატი&oldid=88896322)                      |
| შტო    | branch                                              |    2 | 17, 236           | [Source](https://en.wiktionary.org/w/index.php?title=შტო&oldid=92197095)                        |
| შტორმი | storm at sea                                        |    1 | 236               | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%9B%E1%83%98) |
| შუა    | middle                                              |    1 | 216               | [Source](https://www.ganmarteba.ge/word/შუა)                                                    |
| შუბი   | spear                                               |    2 | 155, 259          | [Source](https://en.wiktionary.org/w/index.php?title=შუბი&oldid=84120602)                       |
| შუბლი  | forehead                                            |    1 | 259               | [Source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)                      |
| შური   | envy                                                |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)                       |
| შუქი   | light                                               |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)                       |
| შუშა   | glass                                               |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)                       |
| შხამი  | poison                                              |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)                      |
| შხაპი  | shower                                              |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)                      |
| ჩაი    | tea (drink made from leaves of tea plant)           |    3 | 57, 172, 264      | [Source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)                        |
| ჩალა   | straw                                               |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)                       |
| ჩარხი  | lathe                                               |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=ჩარხი&oldid=84120652)                      |
| ჩაქუჩი | hammer                                              |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=ჩაქუჩი&oldid=91072323)                     |
| ჩეკი   | check, receipt                                      |    1 | 289               | [Source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)                       |
| ჩექმა  | boot                                                |    1 | 172               | [Source](https://en.wiktionary.org/w/index.php?title=ჩექმა&oldid=84120683)                      |
| ჩვარი  | rag                                                 |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=ჩვარი&oldid=84102722)                      |
| ჩვილი  | baby                                                |    1 | 90                | [Source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)                      |
| ჩიპი   | microchip                                           |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ჩიპი&oldid=85075873)                       |
| ჩირი   | dried fruit                                         |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)                       |
| ჩიტი   | bird                                                |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)                       |
| ჩიხი   | blind alley                                         |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)                       |
| ჩუმი   | quiet                                               |    1 | 289               | [Source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)                       |
| ჩუსტი  | slipper                                             |    1 | 57                | [Source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)                      |
| ჩქარი  | quick                                               |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)                      |
| ჩხირი  | small stick                                         |    1 | 84                | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%AE%E1%83%98%E1%83%A0%E1%83%98)          |
| ცალი   | piece                                               |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)                       |
| ცელი   | scythe                                              |    1 | 49                | [Source](https://en.wiktionary.org/w/index.php?title=ცელი&oldid=91740712)                       |
| ცენტი  | cent                                                |    1 | 293               | [Source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)                      |
| ცენტრი | center                                              |    1 | 293               | [Source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748)                     |
| ცვილი  | wax                                                 |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=ცვილი&oldid=84757548)                      |
| ცივი   | cold                                                |    2 | 34, 228           | [Source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)                       |
| ციკლი  | cycle                                               |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=ციკლი&oldid=84120815)                      |
| ცილა   | protein                                             |    1 | 58                | [Source](https://en.wiktionary.org/w/index.php?title=ცილა&oldid=84120818)                       |
| ციფრი  | digit; numeral                                      |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ციფრი&oldid=85021100)                      |
| ციყვი  | squirrel                                            |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=ციყვი&oldid=87901693)                      |
| ციხე   | fortress                                            |    2 | 97, 191           | [Source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)                       |
| ცნება  | concept                                             |    1 | 287               | [Source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)                      |
| ცოდნა  | knowledge                                           |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)                      |
| ცოლი   | wife                                                |    2 | 159, 257          | [Source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)                       |
| ცომი   | dough                                               |    1 | 97                | [Source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)                       |
| ცოტა   | a little; few                                       |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)                       |
| ცოფი   | rabies                                              |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ცოფი&oldid=84120877)                       |
| ცრემლი | tear from the eyes                                  |    1 | 49                | [Source](https://en.wiktionary.org/w/index.php?title=ცრემლი&oldid=84120880)                     |
| ცრუ    | false, phony                                        |    3 | 9, 134, 277       | [Source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)                        |
| ცუდი   | bad                                                 |    1 | 134               | [Source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)                       |
| ცული   | axe                                                 |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)                       |
| ცხადი  | clear; evident                                      |    1 | 134               | [Source](https://en.wiktionary.org/w/index.php?title=ცხადი&oldid=84088549)                      |
| ცხარე  | spicy                                               |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)                      |
| ცხელი  | hot                                                 |    1 | 97                | [Source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)                      |
| ცხენი  | horse                                               |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)                      |
| ცხვარი | sheep                                               |    1 | 281               | [Source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538)                     |
| ცხვირი | nose                                                |    1 | 228               | [Source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521)                     |
| ცხიმი  | fat                                                 |    1 | 228               | [Source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)                      |
| ძაბრი  | funnel                                              |    1 | 66                | [Source](https://en.wiktionary.org/w/index.php?title=ძაბრი&oldid=84120916)                      |
| ძალა   | power, force, strength                              |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)                       |
| ძარღვი | vein                                                |    1 | 44                | [Source](https://en.wiktionary.org/w/index.php?title=ძარღვი&oldid=84120923)                     |
| ძაფი   | thread                                              |    1 | 66                | [Source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)                       |
| ძაღლი  | dog                                                 |    1 | 238               | [Source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)                      |
| ძეგლი  | monument                                            |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)                      |
| ძელი   | beam                                                |    2 | 59, 291           | [Source](https://en.wiktionary.org/w/index.php?title=ძელი&oldid=84120929)                       |
| ძერა   | kite bird                                           |    1 | 14                | [Source](https://en.wiktionary.org/w/index.php?title=ძერა&oldid=91812511)                       |
| ძეხვი  | sausage                                             |    1 | 290               | [Source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)                      |
| ძვალი  | bone                                                |    1 | 180               | [Source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)                      |
| ძველი  | old                                                 |    1 | 290               | [Source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)                      |
| ძვირი  | expensive                                           |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)                      |
| ძია    | uncle                                               |    3 | 44, 124, 233      | [Source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)                        |
| ძილი   | sleep                                               |    1 | 59                | [Source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)                       |
| ძირი   | root                                                |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)                       |
| ძიუდო  | judo                                                |    1 | 222               | [Source](https://en.wiktionary.org/w/index.php?title=ძიუდო&oldid=88130281)                      |
| ძიძა   | nanny                                               |    1 | 180               | [Source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)                       |
| ძლიერი | strong                                              |    1 | 59                | [Source](https://en.wiktionary.org/w/index.php?title=ძლიერი&oldid=84757250)                     |
| ძმა    | brother                                             |    2 | 91, 238           | [Source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)                        |
| ძმარი  | vinegar                                             |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)                      |
| ძნელი  | difficult                                           |    1 | 41                | [Source](https://en.wiktionary.org/w/index.php?title=ძნელი&oldid=88915482)                      |
| ძრავა  | engine                                              |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)                      |
| ძროხა  | cow                                                 |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)                      |
| ძუა    | horsehair                                           |    1 | 44                | [Source](https://en.wiktionary.org/w/index.php?title=ძუა&oldid=85057219)                        |
| წაბლი  | chestnut                                            |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)                      |
| წამი   | second                                              |    2 | 27, 213           | [Source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)                       |
| წარბი  | brow, eyebrow                                       |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)                      |
| წებო   | glue                                                |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)                       |
| წევრი  | member                                              |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)                      |
| წელი   | year                                                |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)                       |
| წესი   | rule                                                |    2 | 74, 292           | [Source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)                       |
| წვეთი  | drop                                                |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=წვეთი&oldid=59811747)                      |
| წვენი  | gravy, juice, sap                                   |    1 | 156               | [Source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)                      |
| წვერი  | beard; tip                                          |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)                      |
| წვიმა  | rain                                                |    1 | 27                | [Source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)                      |
| წიგნი  | book                                                |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)                      |
| წილი   | share; portion                                      |    2 | 108, 246          | [Source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)                       |
| წინდა  | sock                                                |    1 | 213               | [Source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)                      |
| წმინდა | pure; holy                                          |    1 | 213               | [Source](https://en.wiktionary.org/w/index.php?title=წმინდა&oldid=84121076)                     |
| წნევა  | pressure                                            |    1 | 248               | [Source](https://en.wiktionary.org/w/index.php?title=წნევა&oldid=84121078)                      |
| წნეხი  | press; pressure                                     |    1 | 156               | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%9C%E1%83%94%E1%83%AE%E1%83%98)          |
| წონა   | weight                                              |    1 | 252               | [Source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)                       |
| წრე    | circle                                              |    3 | 101, 181, 256     | [Source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)                        |
| წუთი   | minute                                              |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)                       |
| წუნი   | defect                                              |    1 | 156               | [Source](https://en.wiktionary.org/w/index.php?title=წუნი&oldid=84121093)                       |
| წყალი  | water                                               |    1 | 246               | [Source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)                      |
| ჭავლი  | jet, stream                                         |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=ჭავლი&oldid=84102926)                      |
| ჭალა   | floodplain; riverside grove                         |    1 | 175               | [Source](https://en.wiktionary.org/w/index.php?title=ჭალა&oldid=92391673)                       |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)                      |
| ჭარბი  | excess; surplus                                     |    1 | 50                | [Source](https://en.wiktionary.org/w/index.php?title=ჭარბი&oldid=88343674)                      |
| ჭაღი   | chandelier                                          |    1 | 105               | [Source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)                       |
| ჭაჭა   | grape pomace                                        |    1 | 175               | [Source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)                       |
| ჭერი   | ceiling                                             |    1 | 275               | [Source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)                       |
| ჭექა   | thunder                                             |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ჭექა&oldid=84121145)                       |
| ჭვავი  | rye                                                 |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ჭვავი&oldid=87901803)                      |
| ჭია    | worm                                                |    3 | 19, 95, 261       | [Source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)                        |
| ჭირი   | illness, trouble                                    |    2 | 146, 224          | [Source](https://en.wiktionary.org/w/index.php?title=ჭირი&oldid=76807766)                       |
| ჭიქა   | glass, cup                                          |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)                       |
| ჭკუა   | intellect                                           |    1 | 19                | [Source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)                       |
| ჭოკი   | pole                                                |    1 | 16                | [Source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)                       |
| ჭორი   | gossip                                              |    2 | 16, 224           | [Source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)                       |
| ჭრელი  | colorful                                            |    1 | 146               | [Source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)                      |
| ჭრილი  | incision, cross-section                             |    1 | 146               | [Source](https://en.wiktionary.org/w/index.php?title=ჭრილი&oldid=84121173)                      |
| ხავსი  | moss                                                |    1 | 60                | [Source](https://en.wiktionary.org/w/index.php?title=ხავსი&oldid=88004014)                      |
| ხაზი   | line                                                |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)                       |
| ხალათი | robe                                                |    1 | 282               | [Source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200)                     |
| ხალი   | birthmark, mole                                     |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)                       |
| ხალიჩა | carpet, rug                                         |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204)                     |
| ხალხი  | people                                              |    2 | 60, 223           | [Source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)                      |
| ხამი   | raw, inexperienced                                  |    2 | 128, 223          | [Source](https://en.wiktionary.org/w/index.php?title=ხამი&oldid=92291997)                       |
| ხარი   | ox, bull                                            |    2 | 61, 281           | [Source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)                       |
| ხარჯი  | expense                                             |    1 | 193               | [Source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)                      |
| ხატი   | icon                                                |    2 | 61, 269           | [Source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)                       |
| ხაში   | traditional tripe soup                              |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=ხაში&oldid=92228083)                       |
| ხაჭო   | curd cheese                                         |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)                       |
| ხახვი  | onion                                               |    1 | 60                | [Source](https://en.wiktionary.org/w/index.php?title=ხახვი&oldid=92248670)                      |
| ხბო    | calf                                                |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)                        |
| ხედი   | view                                                |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)                       |
| ხევი   | ravine                                              |    2 | 156, 290          | [Source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)                       |
| ხელი   | hand                                                |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)                       |
| ხეობა  | valley                                              |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)                      |
| ხერხი  | saw, method                                         |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)                      |
| ხვალ   | tomorrow                                            |    1 | 60                | [Source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)                       |
| ხვრელი | hole                                                |    1 | 290               | [Source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623)                     |
| ხიბლი  | charm                                               |    1 | 70                | [Source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)                      |
| ხიდი   | bridge                                              |    1 | 142               | [Source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)                       |
| ხილი   | fruit, fruits                                       |    2 | 70, 202           | [Source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)                       |
| ხისტი  | rigid                                               |    1 | 63                | [Source](https://en.wiktionary.org/w/index.php?title=ხისტი&oldid=84091758)                      |
| ხმა    | voice, sound                                        |    3 | 80, 164, 281      | [Source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)                        |
| ხმალი  | sword                                               |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)                      |
| ხმელი  | dry                                                 |    1 | 97                | [Source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)                      |
| ხორცი  | meat                                                |    2 | 9, 118            | [Source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)                      |
| ხრეში  | gravel                                              |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=ხრეში&oldid=84103042)                      |
| ხრიკი  | trick; ruse                                         |    1 | 142               | [Source](https://en.wiktionary.org/w/index.php?title=ხრიკი&oldid=84103044)                      |
| ხროვა  | pack                                                |    1 | 61                | [Source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)                      |
| ხუნდი  | shackle                                             |    1 | 247               | [Source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)                      |
| ხურდა  | small change                                        |    2 | 134, 247          | [Source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)                      |
| ხურმა  | persimmon                                           |    1 | 184               | [Source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)                      |
| ხუფი   | lid                                                 |    1 | 184               | [Source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)                       |
| ხშირი  | frequent; dense                                     |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)                      |
| ჯადო   | magic                                               |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)                       |
| ჯაზი   | jazz                                                |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)                       |
| ჯამი   | sum; bowl                                           |    2 | 33, 144           | [Source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)                       |
| ჯანი   | health                                              |    2 | 33, 182           | [Source](https://en.wiktionary.org/w/index.php?title=ჯანი&oldid=84121391)                       |
| ჯართი  | scrap                                               |    1 | 193               | [Source](https://en.wiktionary.org/w/index.php?title=ჯართი&oldid=89067419)                      |
| ჯარი   | army, host                                          |    2 | 36, 274           | [Source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)                       |
| ჯარიმა | fine; penalty                                       |    1 | 272               | [Source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221)                     |
| ჯაჭვი  | chain                                               |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)                      |
| ჯგუფი  | group                                               |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=ჯგუფი&oldid=84103069)                      |
| ჯებირი | embankment holding back water                       |    1 | 73                | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%94%E1%83%91%E1%83%98%E1%83%A0%E1%83%98) |
| ჯვარი  | cross                                               |    2 | 39, 193           | [Source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)                      |
| ჯიბე   | pocket                                              |    1 | 73                | [Source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)                       |
| ჯილდო  | reward                                              |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)                      |
| ჯინსი  | jeans                                               |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)                      |
| ჯიუტი  | stubborn                                            |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)                      |
| ჯიში   | breed                                               |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)                       |
| ჯოგი   | herd                                                |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)                       |
| ჯორი   | mule                                                |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=ჯორი&oldid=84121454)                       |
| ჯოხი   | stick                                               |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)                       |
| ჰაერი  | air                                                 |    1 | 277               | [Source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)                      |
| ჰავა   | climate                                             |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=ჰავა&oldid=84121476)                       |
| ჰალვა  | halva                                               |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=ჰალვა&oldid=92945178)                      |
| ჰერცი  | hertz                                               |    1 | 277               | [Source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)                      |
| ჰიმნი  | anthem                                              |    1 | 28                | [Source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)                      |
| ჰობი   | hobby                                               |    1 | 231               | [Source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)                       |
| ჰოკეი  | hockey                                              |    1 | 231               | [Source](https://www.ganmarteba.ge/word/%E1%83%B0%E1%83%9D%E1%83%99%E1%83%94%E1%83%98)          |
