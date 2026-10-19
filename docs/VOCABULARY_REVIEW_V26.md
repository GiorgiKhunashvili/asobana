# Journey vocabulary and campaign review — revision 26

The owner completed [batch 07](VOCABULARY_EXPANSION_BATCH_07.json) on 2026-10-19:
**75 approved senses enter the main list; 25 rejected spellings are excluded from
required answers, accepted variants and bonuses**. All previous decisions remain.
The main pool grows from **1,645 to 1,720**, leaving **80** to reach the 1,800 goal.
The reference preserves all 1,895 prior entries and adds 75, reaching **1,970**.
Policy leaves **1,838 eligible words**, including the same **118 bonus-only words**.
Main-list words can also earn bonuses when formable and not required on that board.

## Measured results

| Measure                         | Before (v25) | After (v26) |
| ------------------------------- | -----------: | ----------: |
| Levels / stops                  |     295 / 59 |    295 / 59 |
| Required answer slots           |        1,475 |       1,475 |
| Main approvals                  |        1,645 |       1,720 |
| Distinct required words         |        1,210 |       1,233 |
| Repeated slots beyond first use |          265 |         242 |
| Unused approved words           |          435 |         487 |
| Minimum repeat gap              |           75 |          75 |

Repeated slots fall by **23 (8.7%)**, from
**17.97% to 16.41%** of all answer slots. This measures
occurrences after each spelling's first required use; bonus appearances are excluded.
The campaign uses **31 of the 75 additions** and **47
previously unused existing approvals**. It stops requiring 55
previously used spellings, for a net gain of 23 distinct words.
Answer sets change on **269 boards**.

Unused approvals can increase even while repetition falls: the pool gains 75 words,
while required coverage gains 23. The 487 unused words stay
approved for future combinations and bonus recognition. Owning enough words does
not ensure they can all fit five-answer wheels, readable crossings, progression,
pacing and the 75-level spacing rule together.

Frequency distribution: 1003 words once,
220 twice, 8 three times,
and 2 four times. Every recurrence is at least
75 levels apart.

## Search and review

The expanded pool contains 164,382 valid candidate boards covering 1,700 approved
words. Search explored new wheels around the approved additions, individual-board
replacements, two overlapping 40-board passes, a 60-board pass and a bounded
whole-campaign solver attempt. The whole-campaign attempt did not improve the
selected result. Distinct coverage is the
primary objective, then fewer third/fourth uses and longer repeat gaps. The result
is the best found in this bounded search, not a certified global optimum.
Local scripts, candidate data, logs and the complete slot audit are under
`artifacts/journey-v26/`.

Every required spelling and canonical-only accepted variant was checked against
the explicit allowlist and source-linked approved sense. All 1,475 slots are listed
below. No unapproved spelling, plural noun, reserved rare word or rejected spelling
appears as a target. Every eligible formable bonus is retained. All 295 boards pass
the unchanged five-answer, 3–6-letter, exact tile multiplicity, connected crossing,
no accidental run, unique wheel, density, phone-size, length progression and chapter
pacing gates. These checks are not native-device playtesting or new native-speaker
review. Individual source provenance and owner decisions are retained.

## Compatibility and validation

The route remains `content/journey-v23.json`; countries, facts, backgrounds and
postcards are unchanged. The active pack, recipes, reviewed digest, reference and
allowlist use revision 26. Historical content hashes are unchanged. Save migration
supports revisions 1–25, preserving completed boards, partial solved credits,
coins, paid hints, settings, postcards and lifetime bonus rewards across restart.
The historical hint-credit ceiling is 1,670 (previously 1,628), allowing a migrated
board to receive further paid hints without discarding past credits.

Validation completed on 2026-10-19:

- `npm run check` passed: TypeScript, lint, **285 tests across 37 suites**,
  all **295 levels validated and solved**, and repository formatting.
- `uv run pytest`: **146 passed**. Ruff checks and formatting passed (38 files);
  mypy passed for all 13 source files.
- Local `npx expo export --platform ios` passed. This was a JavaScript/assets
  export, not an EAS cloud build, native-device test or TestFlight upload.
- All **98 historical content JSON files** match their pre-change SHA-256 hashes.
  The official deterministic draft exactly matches the audited draft and digest.

The migration tests cover historical saves and v25 partial/complete progress,
paid hints, bonus rewards, postcards and persistence after restart. The target-length
regression now selects a non-peak fixture with pacing room, so shortening its target
reaches the intended two-letter-answer rejection. Runtime gates were not relaxed.
No TestFlight upload or native-device playtest is part of this content update.

## The 75 approved additions

| Word   | Approved meaning     | Required levels | Source                                                                                          |
| ------ | -------------------- | --------------- | ----------------------------------------------------------------------------------------------- |
| აზიელი | Asian person         | Unused          | [Source](https://en.wiktionary.org/w/index.php?title=აზიელი&oldid=84112356)                     |
| აზიური | Asian                | Unused          | [Source](https://en.wiktionary.org/w/index.php?title=აზიური&oldid=84097059)                     |
| აკორდი | musical chord        | 26              | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%99%E1%83%9D%E1%83%A0%E1%83%93%E1%83%98) |
| ალპური | alpine               | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9A%E1%83%9E%E1%83%A3%E1%83%A0%E1%83%98) |
| აპრილი | April                | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%9E%E1%83%A0%E1%83%98%E1%83%9A%E1%83%98) |
| არეული | disordered; mixed    | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A0%E1%83%94%E1%83%A3%E1%83%9A%E1%83%98) |
| ასული  | daughter             | 208             | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A1%E1%83%A3%E1%83%9A%E1%83%98)          |
| აფხაზი | Abkhaz person        | Unused          | [Source](https://en.wiktionary.org/w/index.php?title=აფხაზი&oldid=92291844)                     |
| ბაკანი | turtle shell         | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%99%E1%83%90%E1%83%9C%E1%83%98) |
| ბებო   | grandma              | 57              | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%94%E1%83%91%E1%83%9D)                   |
| ბიბილო | earlobe              | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%98%E1%83%91%E1%83%98%E1%83%9A%E1%83%9D) |
| ბლაგვი | blunt                | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%90%E1%83%92%E1%83%95%E1%83%98) |
| ბუნტი  | uprising             | 142             | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A3%E1%83%9C%E1%83%A2%E1%83%98)          |
| გულადი | brave                | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A3%E1%83%9A%E1%83%90%E1%83%93%E1%83%98) |
| გურული | person from Guria    | 43              | [Source](https://en.wiktionary.org/w/index.php?title=გურული&oldid=84114256)                     |
| ეროზია | erosion              | 66              | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%A0%E1%83%9D%E1%83%96%E1%83%98%E1%83%90) |
| ვაფლი  | wafer                | 92              | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%A4%E1%83%9A%E1%83%98)          |
| თრომბი | blood clot           | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%97%E1%83%A0%E1%83%9D%E1%83%9B%E1%83%91%E1%83%98) |
| ივლისი | July                 | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%95%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98) |
| ივნისი | June                 | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%95%E1%83%9C%E1%83%98%E1%83%A1%E1%83%98) |
| კოჭლი  | lame; limping        | 248             | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%AD%E1%83%9A%E1%83%98)          |
| კრახი  | complete failure     | 258             | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A0%E1%83%90%E1%83%AE%E1%83%98)          |
| მანტია | robe                 | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%9C%E1%83%A2%E1%83%98%E1%83%90) |
| მარტი  | March                | 195             | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98)          |
| მაყალი | charcoal brazier     | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A7%E1%83%90%E1%83%9A%E1%83%98) |
| მდოგვი | mustard              | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%93%E1%83%9D%E1%83%92%E1%83%95%E1%83%98) |
| ნეონი  | neon                 | 235             | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%94%E1%83%9D%E1%83%9C%E1%83%98)          |
| ნიკელი | nickel               | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%99%E1%83%94%E1%83%9A%E1%83%98) |
| ონკანი | tap; faucet          | 238             | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%9C%E1%83%99%E1%83%90%E1%83%9C%E1%83%98) |
| ოსი    | Ossetian person      | 9, 247          | [Source](https://en.wiktionary.org/w/index.php?title=ოსი&oldid=84117870)                        |
| ოფოფი  | hoopoe               | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A4%E1%83%9D%E1%83%A4%E1%83%98)          |
| პრიზმა | prism                | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%A0%E1%83%98%E1%83%96%E1%83%9B%E1%83%90) |
| პუდელი | poodle               | Unused          | [Source](https://en.wiktionary.org/w/index.php?title=პუდელი&oldid=84100916)                     |
| პუდრი  | cosmetic powder      | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%A3%E1%83%93%E1%83%A0%E1%83%98)          |
| რადარი | radar                | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%90%E1%83%93%E1%83%90%E1%83%A0%E1%83%98) |
| რალი   | motor rally          | 66, 251         | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98)                   |
| რანჩო  | ranch                | 241             | [Source](https://en.wiktionary.org/w/index.php?title=რანჩო&oldid=84100968)                      |
| რებუსი | rebus puzzle         | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%94%E1%83%91%E1%83%A3%E1%83%A1%E1%83%98) |
| რელსი  | rail                 | 31              | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%94%E1%83%9A%E1%83%A1%E1%83%98)          |
| რომბი  | rhombus              | 57              | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%9D%E1%83%9B%E1%83%91%E1%83%98)          |
| საბადო | mineral deposit      | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%93%E1%83%9D) |
| საზომი | measuring instrument | 272             | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%96%E1%83%9D%E1%83%9B%E1%83%98) |
| საკიდი | clothes hanger       | 99              | [Source](https://en.wiktionary.org/w/index.php?title=საკიდი&oldid=84101182)                     |
| სანათი | lamp                 | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%9C%E1%83%90%E1%83%97%E1%83%98) |
| საფენი | medical dressing     | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A4%E1%83%94%E1%83%9C%E1%83%98) |
| საშვი  | entry pass           | 236             | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A8%E1%83%95%E1%83%98)          |
| სვანი  | person from Svaneti  | 236             | [Source](https://en.wiktionary.org/w/index.php?title=სვანი&oldid=84118965)                      |
| სიტკბო | sweetness            | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%98%E1%83%A2%E1%83%99%E1%83%91%E1%83%9D) |
| სონეტი | sonnet               | 50              | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9D%E1%83%9C%E1%83%94%E1%83%A2%E1%83%98) |
| ტალონი | voucher              | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%90%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98) |
| ტირანი | tyrant               | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%98%E1%83%A0%E1%83%90%E1%83%9C%E1%83%98) |
| ტირაჟი | print run            | 286             | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%98%E1%83%A0%E1%83%90%E1%83%9F%E1%83%98) |
| უმანკო | innocent             | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%9B%E1%83%90%E1%83%9C%E1%83%99%E1%83%9D) |
| ურდული | door bolt            | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A0%E1%83%93%E1%83%A3%E1%83%9A%E1%83%98) |
| ურიგო  | unsatisfactory; bad  | 43              | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A0%E1%83%98%E1%83%92%E1%83%9D)          |
| უფლება | right; permission    | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A4%E1%83%9A%E1%83%94%E1%83%91%E1%83%90) |
| უხეირო | poor quality         | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%AE%E1%83%94%E1%83%98%E1%83%A0%E1%83%9D) |
| ფარფლი | fin                  | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%90%E1%83%A0%E1%83%A4%E1%83%9A%E1%83%98) |
| ფაუნა  | animal life          | 100             | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%90%E1%83%A3%E1%83%9C%E1%83%90)          |
| ფისო   | kitty                | 9, 246          | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%98%E1%83%A1%E1%83%9D)                   |
| ფრანგი | French person        | Unused          | [Source](https://en.wiktionary.org/w/index.php?title=ფრანგი&oldid=85132315)                     |
| ქლორი  | chlorine             | 71              | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%9A%E1%83%9D%E1%83%A0%E1%83%98)          |
| ქოქოსი | coconut              | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%9D%E1%83%A5%E1%83%9D%E1%83%A1%E1%83%98) |
| ყლორტი | plant shoot          | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A7%E1%83%9A%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98) |
| შვედი  | Swedish person       | Unused          | [Source](https://en.wiktionary.org/w/index.php?title=შვედი&oldid=84120505)                      |
| შიფრი  | cipher               | 254             | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%98%E1%83%A4%E1%83%A0%E1%83%98)          |
| შტამპი | official stamp       | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%A2%E1%83%90%E1%83%9B%E1%83%9E%E1%83%98) |
| ჩელო   | cello                | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%94%E1%83%9A%E1%83%9D)                   |
| ჩია    | small and frail      | 79, 241         | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%98%E1%83%90)                            |
| ჩხიკვი | jay bird             | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%AE%E1%83%98%E1%83%99%E1%83%95%E1%83%98) |
| ცელქი  | mischievous          | 113             | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%94%E1%83%9A%E1%83%A5%E1%83%98)          |
| ცუნამი | tsunami              | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%A3%E1%83%9C%E1%83%90%E1%83%9B%E1%83%98) |
| ხანა   | era                  | 117             | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%90%E1%83%9C%E1%83%90)                   |
| ხნიერი | elderly              | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%9C%E1%83%98%E1%83%94%E1%83%A0%E1%83%98) |
| ხრტილი | cartilage            | Unused          | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%A0%E1%83%A2%E1%83%98%E1%83%9A%E1%83%98) |

## The 25 rejected spellings

ალტი, ბრგე, ბურჯი, გეკონი, ელიფსი, ემალი, მრუდე, ნარევი, პრასი, რელე, რუპორი, რუსი, რუსული, ტორსი, ტრეკი, უთავო, უკბილო, უქარო, უცოლო, უხმო, ღიობი, ჩეხი, ჩეხური, ჩინური, ხლართი.

## Previously unused existing words now required

აგენტი, ალმასი, არქივი, აქლემი, ბატონი, ბომბი, გუფთა, ვიწრო, თამამი, კათხა, კანონი, კაცური, კობრა, ლაზერი, ლაჩარი, ლექცია, მამიდა, მარცხი, მიზანი, მკაცრი, მჟავა, მსხალი, მყიფე, მშიერი, ნაყოფი, ნეკნი, ჟიური, ჟოლო, საუნა, სიცივე, სტიქია, სწორი, ტენტი, ტესტი, უგულო, ფილტვი, ქოჩორი, ყორანი, ყოჩი, შანსი, შორს, ჩანთა, ცხადი, წყარო, ჭაობი, ჯიხვი, ჯიხური.

## All 295 boards

| Level | Stop           | Required answers                   |
| ----- | -------------- | ---------------------------------- |
| 1     | tbilisi        | არფა, რაფა, ფარა, ფაფა, აფრა       |
| 2     | tbilisi        | კოჭი, რკო, ჭოკი, როკი, ჭორი        |
| 3     | tbilisi        | შალი, ვილა, შავი, ვაშლი, ვალი      |
| 4     | tbilisi        | ვადა, ქადა, ქვა, დავა, ავად        |
| 5     | tbilisi        | მთა, ასთმა, მასა, თასმა, თმა       |
| 6     | mtskheta       | შოლტი, ტუში, ტოლი, ტილო, შტო       |
| 7     | mtskheta       | ლუდი, დუელი, ბუდე, ბედი, უბე       |
| 8     | mtskheta       | ბიტი, საიტი, ბაიტი, ბატი, ბასი     |
| 9     | mtskheta       | ოფისი, ფასი, ფისო, იაფი, ოსი       |
| 10    | mtskheta       | ღერძი, ღერი, ღარი, რძე, ძერა       |
| 11    | ananuri        | თხა, ოთახი, თახვი, თოხი, თიხა      |
| 12    | ananuri        | ზარი, რაზმი, ფარი, ფირმა, მზა      |
| 13    | ananuri        | თოვლი, თოლია, თივა, ავი, ოვალი     |
| 14    | ananuri        | აუტი, მუშა, ტაში, მუშტი, უმი       |
| 15    | ananuri        | გვამი, ვაზი, ვიზა, ავზი, გაზი      |
| 16    | kazbegi        | ყურე, ყური, პიურე, რიყე, პური      |
| 17    | kazbegi        | ობოლი, ჟოლო, ბოლი, ობი, ლობიო      |
| 18    | kazbegi        | ფილა, დოლი, ფოლადი, ოფლი, ლაფი     |
| 19    | kazbegi        | სახლი, სია, ხმა, ასლი, მსხალი      |
| 20    | kazbegi        | ქირა, ქალური, ქულა, ქურა, ლუქი     |
| 21    | tusheti        | ზონა, კანი, კინო, კონა, კაზინო     |
| 22    | tusheti        | მუქი, მური, ურემი, ერი, უქმე       |
| 23    | tusheti        | კაუჭი, ჭაბუკი, ჭია, ჭკუა, კუბი     |
| 24    | tusheti        | ცალი, ცილა, აქცია, ქალი, ლაქა      |
| 25    | tusheti        | ერა, კაფე, სარკე, კერა, ფრესკა     |
| 26    | sighnaghi      | კობრა, კობრი, აკორდი, კოდი, დრო    |
| 27    | sighnaghi      | ზღარბი, ღუზა, აუზი, ბურღი, ბაღი    |
| 28    | sighnaghi      | პოსტი, პირი, სპირტი, სპორტი, სიო   |
| 29    | sighnaghi      | უნარი, ურნა, კუნძი, უკან, ნუკრი    |
| 30    | sighnaghi      | ანემია, მაჯა, ნამი, მენჯი, ჯანი    |
| 31    | david-gareja   | რელსი, ქერი, ქსელი, ცელი, სქელი    |
| 32    | david-gareja   | ჩუმი, მუხა, ხმაური, ჩარხი, ურჩი    |
| 33    | david-gareja   | ბერი, ლეიბი, ჯებირი, რბილი, ჯიბე   |
| 34    | david-gareja   | მტვერი, ომი, რომი, ევრო, მორევი    |
| 35    | david-gareja   | დაბლა, ყალბი, ყდა, დაბა, დაბალი    |
| 36    | uplistsikhe    | უვიცი, ფიცი, ფუჭი, ფიჭვი, ცივი     |
| 37    | uplistsikhe    | ურო, ყრუ, წყარო, აწმყო, მუყაო      |
| 38    | uplistsikhe    | ყბა, აბი, საბანი, ყანა, ყასაბი     |
| 39    | uplistsikhe    | ძია, გუნდი, გუნდა, განძი, ძუა      |
| 40    | uplistsikhe    | კაბა, კადრი, კარი, არაბი, ბარდა    |
| 41    | borjomi        | მელა, ეტაპი, მეტალი, ტემპი, ალი    |
| 42    | borjomi        | ცრუ, კაცური, ცუდი, ურიკა, რუკა     |
| 43    | borjomi        | გოლი, გურული, უგულო, რგოლი, ურიგო  |
| 44    | borjomi        | ენა, გენია, გენი, აგენტი, ტენტი    |
| 45    | borjomi        | კლდე, დუეტი, კლიტე, კეტი, ეტლი     |
| 46    | vardzia        | ხატი, ხროვა, ავტორი, ხარი, ტარი    |
| 47    | vardzia        | ღვედი, დევი, ველი, ღელე, ლეღვი     |
| 48    | vardzia        | ელვა, მკლავი, კვალი, კვამლი, მაკე  |
| 49    | vardzia        | ბარი, ბურთი, წარბი, უარი, წუთი     |
| 50    | vardzia        | ნესტო, ტესტი, ტონი, ტოტი, სონეტი   |
| 51    | katskhi        | ღია, იახტა, ხალი, ტალღა, ტალახი    |
| 52    | katskhi        | ფერმა, ფორმა, ალოე, მოლარე, მალე   |
| 53    | katskhi        | ლურჯი, ჯილდო, დროული, ლორდი, ლოდი  |
| 54    | katskhi        | ფრე, დენი, ფერადი, ნარდი, ფენა     |
| 55    | katskhi        | ნება, ქონება, აბანო, ექო, ბანქო    |
| 56    | racha          | ჯიხვი, ჯიხური, იხვი, უხვი, რუჯი    |
| 57    | racha          | მერი, ბებო, რომბი, ბომბი, ერბო     |
| 58    | racha          | დროშა, შარდი, შაში, შოშია, რადიო   |
| 59    | racha          | ლოთი, ბოლო, სითბო, სოიო, ბოთლი     |
| 60    | racha          | ტარო, კორტი, ტურა, ტური, კარტი     |
| 61    | kutaisi-gelati | ტანი, ტონა, ენოტი, ნატეხი, ნოხი    |
| 62    | kutaisi-gelati | ბანკი, კანჭი, რკინა, ჭარბი, ბინა   |
| 63    | kutaisi-gelati | მანია, მადა, მინა, ნადიმი, ამინდი  |
| 64    | kutaisi-gelati | ნაშთი, ნიშა, ქონი, ქოთანი, შნო     |
| 65    | kutaisi-gelati | რაგბი, ბაგე, გერბი, ბასრი, ბგერა   |
| 66    | svaneti        | ლაზერი, რალი, ეზო, ზოლი, ეროზია    |
| 67    | svaneti        | ბადე, ბებია, ლედი, ბელადი, იდეა    |
| 68    | svaneti        | მაგიდა, დრამა, დარი, არმია, მარაგი |
| 69    | svaneti        | ჰობი, ჰოკეი, ბეკონი, კიბო, კიბე    |
| 70    | svaneti        | ხიბლი, ხილი, ბმული, მუხლი, მილი    |
| 71    | martvili       | ლოქო, ლორი, ქლორი, ქოჩორი, ოქრო    |
| 72    | martvili       | გველი, გლუვი, გული, ხელი, გლეხი    |
| 73    | martvili       | იღბალი, ღილი, წაბლი, წილი, იღლია   |
| 74    | martvili       | ძნელი, ნული, სუნი, სუნელი, სიძე    |
| 75    | martvili       | დარგი, ადრე, ერთად, გერი, გარეთ    |
| 76    | zugdidi        | თონე, ფენი, ფონდი, დენთი, დონე     |
| 77    | zugdidi        | ლარი, რძალი, ძილი, ძელი, ძლიერი    |
| 78    | zugdidi        | გამძლე, მგელი, ძეგლი, ძმა, გემი    |
| 79    | zugdidi        | აჩმა, ვაჟი, მჟავა, მაჩვი, ჩია      |
| 80    | zugdidi        | მამრი, მყარი, ამაყი, იარა, არაყი   |
| 81    | makhuntseti    | გორა, გარემო, გოგრა, გეგმა, გემო   |
| 82    | makhuntseti    | მჟავე, ვენა, წნევა, მწვანე, ამწე   |
| 83    | makhuntseti    | კიტრი, კივი, კრივი, ტიტრი, კვირტი  |
| 84    | makhuntseti    | კალია, კილო, კოკა, კაკალი, კაკაო   |
| 85    | makhuntseti    | სოკო, სოლო, კლასი, სკოლა, სილა     |
| 86    | batumi         | ბნელი, ბლეფი, ნელი, ელფი, ნეფე     |
| 87    | batumi         | გმირი, რიგი, რინგი, წიგნი, მწირი   |
| 88    | batumi         | ლამაზი, ლიგა, მაგია, გამა, ლაგამი  |
| 89    | batumi         | უხეში, შრე, ხრეში, კეხი, კრუხი     |
| 90    | batumi         | ჩიპი, ტიპი, ტაიმი, მატჩი, ჩიტი     |
| 91    | tao-klarjeti   | ჭრილი, ბელი, ჭრელი, ბეჭი, ბიჭი     |
| 92    | tao-klarjeti   | ხახვი, ხალხი, ფხა, ვაფლი, ხვალ     |
| 93    | tao-klarjeti   | მამალი, მამა, მაფია, ფიალა, ლამა   |
| 94    | tao-klarjeti   | ცხელი, მჭლე, ხმელი, ციხე, მხეცი    |
| 95    | tao-klarjeti   | ლავა, ძრავა, ჰავა, ჰალვა, ძალა     |
| 96    | sumela         | ხიდი, კიდური, ხრიკი, რუხი, კუდი    |
| 97    | sumela         | ოდა, მუმია, მუდამ, აუდიო, მიდამო   |
| 98    | sumela         | ზიანი, მზიანი, მიზანი, ნიავი, ზმნა |
| 99    | sumela         | დისკი, იოდი, საკიდი, სოდა, დისკო   |
| 100   | sumela         | სუფრა, აფრა, ფაუნა, საუნა, რასა    |
| 101   | cappadocia     | ეჭვი, წევრი, წვეთი, ჭერი, თვე      |
| 102   | cappadocia     | ტყე, ტყვე, ყველი, ვეტო, ვოლტი      |
| 103   | cappadocia     | საამო, მასრა, კომა, კარმა, საკმაო  |
| 104   | cappadocia     | ზუსტი, ტუზი, სიო, სუსტი, სოუსი     |
| 105   | cappadocia     | სვეტი, ჟესტი, სია, სტაჟი, ვატი     |
| 106   | pamukkale      | ჯოგი, ჯორი, გვარი, იოგა, გროვა     |
| 107   | pamukkale      | შვილი, ჩვილი, ელჩი, შველი, ეშვი    |
| 108   | pamukkale      | ნორმა, ორგანო, ორმო, მანგო, მონა   |
| 109   | pamukkale      | კაცი, კეცი, სცენა, აკნე, ანკესი    |
| 110   | pamukkale      | ახალი, ლაჩარი, ჩალა, ჩაი, ხალიჩა   |
| 111   | ephesus        | ჩხირი, შიში, ხშირი, ჩიხი, ჩირი     |
| 112   | ephesus        | ქუჩა, ტაქსი, ჩუსტი, ქისა, ტუჩი     |
| 113   | ephesus        | აქლემი, ცელქი, ლექცია, ცელი, ქილა  |
| 114   | ephesus        | შუა, დოზა, შოუ, უზადო, უდავო       |
| 115   | ephesus        | კუჭი, უთო, უნიჭო, კუნთი, თოკი      |
| 116   | istanbul       | თეორია, თეძო, რძე, ძია, თერძი      |
| 117   | istanbul       | ჩანთა, ხანა, თანხა, კათხა, თხა     |
| 118   | istanbul       | ფილტრი, ფირი, ლირა, ტარიფი, ლიტრი  |
| 119   | istanbul       | სექტა, სქემა, მჩატე, ჩექმა, საქმე  |
| 120   | istanbul       | ტყავი, ტყვია, ყვავი, ავი, სიტყვა   |
| 121   | plovdiv        | პორტი, კოპი, ტრიო, პოკერი, პოეტი   |
| 122   | plovdiv        | დაფნა, პანდა, პაპა, დანა, დაფა     |
| 123   | plovdiv        | ჯგუფი, აგური, ფიგურა, გრაფი, უჯრა  |
| 124   | plovdiv        | ფილე, წელი, წესი, სველი, ფესვი     |
| 125   | plovdiv        | ღონე, ღორი, ნერვი, ღვინო, ღერო     |
| 126   | petritsoni     | ზეიმი, მზე, მითი, ექიმი, ზეთი      |
| 127   | petritsoni     | მეტრი, მტერი, მტრედი, კიდე, კრემი  |
| 128   | petritsoni     | მალე, მედალი, დილა, იმედი, დილემა  |
| 129   | petritsoni     | თითი, თათი, თუთია, თუთა, სათუთი    |
| 130   | petritsoni     | წამი, მწვადი, მთა, დათვი, წვიმა    |
| 131   | rila           | ბაბუა, ბამბა, ბზა, მუზა, ბაზა      |
| 132   | rila           | რომი, შოკი, შორი, კომში, კოშკი     |
| 133   | rila           | ზეგ, გზა, თაგვი, თევზი, გაზეთი     |
| 134   | rila           | ნალი, ნაზი, ლინზა, ზონა, ოზონი     |
| 135   | rila           | ხბო, ხეობა, საბჭო, ხაჭო, სახე      |
| 136   | thessaloniki   | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     |
| 137   | thessaloniki   | პიცა, რეპი, საცერი, სერია, პრესა   |
| 138   | thessaloniki   | რეისი, რისკი, სუკი, კისერი, კურსი  |
| 139   | thessaloniki   | ნავი, ნივთი, გვიან, ნავთი, იგავი   |
| 140   | thessaloniki   | მერია, მთვარე, თავი, თემი, თემა    |
| 141   | iviron-athos   | მხარე, ზეცა, ცხარე, მახე, მზა      |
| 142   | iviron-athos   | ბუნტი, ბინა, ბატონი, ბანი, ტაბუ    |
| 143   | iviron-athos   | ბორტი, ბოროტი, რობოტი, ორბიტა, ტბა |
| 144   | iviron-athos   | საათი, ღია, ასანთი, თაღი, თასი     |
| 145   | iviron-athos   | ქაფი, ფაქტი, ქოსა, ქაოსი, ფოსტა    |
| 146   | meteora        | ლამპა, მუჭა, პუმა, პალმა, ჭალა     |
| 147   | meteora        | ჯიში, ბიტი, ჯიუტი, ბუშტი, შუბი     |
| 148   | meteora        | ფლავი, ფიჭა, თვალი, თაფლი, ჭავლი   |
| 149   | meteora        | დედა, დეიდა, დიდი, დიადი, ქედი     |
| 150   | meteora        | ობი, ბიცოლა, ბალი, ალბომი, ცომი    |
| 151   | volos-iolcos   | ქუდი, ქურდი, დოქი, ქორი, სურდო     |
| 152   | volos-iolcos   | ტაფა, ფაზა, ფრაზა, აზარტი, აზრი    |
| 153   | volos-iolcos   | ბიძა, მძაფრი, ძაბრი, ძაფი, ბრმა    |
| 154   | volos-iolcos   | ვირი, მძივი, ძირი, ძვირი, ძმარი    |
| 155   | volos-iolcos   | თარო, ფართო, ფრთა, ბაფთა, თაობა    |
| 156   | delphi         | წუნი, ხევი, უხვი, წნეხი, წვენი     |
| 157   | delphi         | შაშხი, შხამი, ხამი, ხაში, შეშა     |
| 158   | delphi         | სინჯი, სიმი, ჯინი, ჯინსი, მინუსი   |
| 159   | delphi         | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     |
| 160   | delphi         | პოზა, პაუზა, პროზა, უაზრო, აურა    |
| 161   | athens         | ფერი, ფეხი, ხერხი, ტერფი, ტირე     |
| 162   | athens         | ოლქი, მატლი, ოქმი, ტოლმა, ატომი    |
| 163   | athens         | თხილი, სითხე, ხილი, თესლი, თხელი   |
| 164   | athens         | სპილო, პულსი, ცოლი, ცული, პლუსი    |
| 165   | athens         | მწარე, მოწმე, მოწამე, ამწე, ერა    |
| 166   | santorini      | მჭადი, მედია, ღამე, ჭაღი, დღე      |
| 167   | santorini      | ჯოხი, დახლი, ჯილდო, ოჯახი, ჯადო    |
| 168   | santorini      | ნაკლი, უკან, უნაკლო, კლანი, კლონი  |
| 169   | santorini      | მოდელი, პლედი, ლოდი, მდელო, ლომი   |
| 170   | santorini      | სუნი, მენიუ, ნემსი, მსუყე, მყესი   |
| 171   | corfu          | ორდენი, დრონი, დრო, დეპო, პონი     |
| 172   | corfu          | გრილი, ბრალი, ბარგი, ბაგირი, რიგი  |
| 173   | corfu          | კანი, კნუტი, პიტნა, კუპატი, ტანკი  |
| 174   | corfu          | წებო, ბევრი, წვერი, ბეწვი, ბერი    |
| 175   | corfu          | გოჭი, საჭირო, ასო, გორა, გარსი     |
| 176   | butrint        | ქუსლი, ქსელი, ლექსი, სული, ლუწი    |
| 177   | butrint        | ცოფი, ფიცი, ხორცი, ციფრი, ფიცხი    |
| 178   | butrint        | კარავი, ვადა, ავდარი, ვარდი, კრავი |
| 179   | butrint        | ქოხი, სქესი, სესხი, სისქე, სიო     |
| 180   | butrint        | კუბი, ბიურო, კუბო, კობრი, ბრბო     |
| 181   | gjirokaster    | მსაჯი, მისია, იმიჯი, სია, მაისი    |
| 182   | gjirokaster    | ბრაზი, ბზარი, ბეტა, ბატი, ზებრა    |
| 183   | gjirokaster    | ეკალი, კეტი, პაკეტი, ტკიპა, ელიტა  |
| 184   | gjirokaster    | ნისლი, სტილი, ლენტი, ნესტი, ნელი   |
| 185   | gjirokaster    | ძმა, ალღო, ლაღი, ძაღლი, მძღოლი     |
| 186   | berat          | ღარი, ღიპი, ღირსი, ისარი, საღი     |
| 187   | berat          | სკამი, აუზი, მუსიკა, კუზი, მაუსი   |
| 188   | berat          | მიჯნა, წინდა, წმინდა, ჯანი, მიწა   |
| 189   | berat          | კლიპი, კულტი, ტიპი, პიკი, პულტი    |
| 190   | berat          | ფოთოლი, ფოტო, თოფი, ფლოტი, ტოლი    |
| 191   | ohrid          | შნო, გუშინ, ნუგეში, ნუში, უშნო     |
| 192   | ohrid          | ნიჭი, ჭირი, ჭორი, ირონია, ნაოჭი    |
| 193   | ohrid          | ცელი, მცირე, მრევლი, ერი, ცრემლი   |
| 194   | ohrid          | ციყვი, კვიცი, ციკლი, კივი, ცვილი   |
| 195   | ohrid          | ტოტი, მარტი, ტორტი, მორი, ტომატი   |
| 196   | kotor          | იოლი, ბილიკი, კბილი, ბოლი, ბლოკი   |
| 197   | kotor          | კერა, არენა, მარკა, კამერა, კამა   |
| 198   | kotor          | ბილეთი, ილეთი, ლეიბი, მთელი, თბილი |
| 199   | kotor          | ბუზი, ბუმი, ზომბი, ბლუზი, ბმული    |
| 200   | kotor          | ავად, ვაზა, სადავე, ზედა, სევდა    |
| 201   | dubrovnik      | ნაძვი, აკვანი, ძია, კვანძი, ანძა   |
| 202   | dubrovnik      | ჟანრი, რანგი, ბარი, ჟანგი, ბირჟა   |
| 203   | dubrovnik      | ნიორი, რაიონი, ფარი, ფრანი, ოინი   |
| 204   | dubrovnik      | ზავი, ვიზა, კვოტა, აზოტი, კოვზი    |
| 205   | dubrovnik      | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   |
| 206   | split          | ტახტი, შტატი, შხაპი, ხატი, ტიტა    |
| 207   | split          | ავი, ვერსია, სარი, სავსე, სესია    |
| 208   | split          | მასა, ასული, მალა, ალმასი, ლამა    |
| 209   | split          | ლავა, თავლა, ბალთა, ალყა, ყავა     |
| 210   | split          | ქურა, ჩაქუჩი, ჩქარი, ურჩი, ქირა    |
| 211   | plitvice       | ყინვა, ნიავი, ტივი, ტანი, ტვინი    |
| 212   | plitvice       | ბავშვი, ქვა, შავი, ქვაბი, ქვიშა    |
| 213   | plitvice       | ქარი, არმია, ქათამი, ქრთამი, ქმარი |
| 214   | plitvice       | შური, შრე, ქურქი, ქერქი, შუქი      |
| 215   | plitvice       | ფინალი, ლაიმი, ფილმი, მილი, ფაილი  |
| 216   | venice         | ბინდი, გედი, გიდი, ბედი, ბენდი     |
| 217   | venice         | საწოლი, ალი, წონა, სალონი, ასლი    |
| 218   | venice         | ჯარი, კაბა, აბჯარი, იჯარა, აჯიკა   |
| 219   | venice         | შობა, ფობია, ტაში, ბოტი, შტაბი     |
| 220   | venice         | პლატო, პალტო, ცალი, ტილო, ცოტა     |
| 221   | florence       | მარაო, ღრმა, ღამურა, ურო, ღრუ      |
| 222   | florence       | არფა, არხი, ხათრი, აფთარი, თიხა    |
| 223   | florence       | გრამი, გიტარა, იარა, მაგარი, ატამი |
| 224   | florence       | ჩირი, ჩვარი, რქა, არქივი, ჩირქი    |
| 225   | florence       | დენი, ცხადი, ცხენი, ხედი, იდეა     |
| 226   | rome           | გული, გალია, ლიგა, ლულა, ალალი     |
| 227   | rome           | გოლი, დოლი, მადლი, მოდა, დოგმა     |
| 228   | rome           | ავზი, ზარი, ზღვარი, შვრია, ზღვა    |
| 229   | rome           | ჭვავი, ვალი, სილა, ვალსი, სვავი    |
| 230   | rome           | პარტია, არსი, რასა, პასტა, სპა     |
| 231   | amalfi         | ლირა, პარკი, პლაჟი, კაჟი, ლარი     |
| 232   | amalfi         | უცხო, ცოცხი, მოხუცი, უმი, ომი      |
| 233   | amalfi         | ასაკი, კარატი, კატა, კასრი, ტარი   |
| 234   | amalfi         | კერძი, ერბო, კერძო, კიბე, ბოძი     |
| 235   | amalfi         | კოდი, ნეკნი, ნეონი, დონე, კინო     |
| 236   | taormina       | ნამი, ნიშა, სვანი, საშვი, შანსი    |
| 237   | taormina       | ბანდა, დაბა, ღია, ნაბადი, ნაღდი    |
| 238   | taormina       | ონკანი, ბანკი, კანონი, კიბო, კონა  |
| 239   | taormina       | გოლფი, ოფლი, რგოლი, როლი, ლოგო     |
| 240   | taormina       | უბე, ბაგე, ბგერა, ბეღურა, გუბე     |
| 241   | valletta       | რანჩო, ყორანი, ჩაი, ყოჩი, ჩია      |
| 242   | valletta       | მყიფე, მწერი, ფერი, მწიფე, წრე     |
| 243   | valletta       | გენი, ვეგანი, ენა, ნესვი, სიგანე   |
| 244   | valletta       | ჰერცი, ერა, უეცარი, ცრუ, ჰაერი     |
| 245   | valletta       | რკალი, გორაკი, რკო, როკი, ლოგიკა   |
| 246   | mdina          | ფისო, ფონი, ფსონი, ნაყოფი, ფასი    |
| 247   | mdina          | შორი, შორს, ვიწრო, სწორი, ოსი      |
| 248   | mdina          | კოჭი, ბოჭკო, კოჭლი, ობოლი, ბოლოკი  |
| 249   | mdina          | ლუქი, ორთქლი, რთული, თურქი, ლორი   |
| 250   | mdina          | ვაშლი, აფიშა, ლავაში, შალი, ალფა   |
| 251   | carthage       | მარში, მლაშე, მშრალი, რალი, მელა   |
| 252   | carthage       | რაკეტა, ფარა, აფრა, კეფა, კარატე   |
| 253   | carthage       | დანა, დავა, ანდაზა, ავაზა, ვაზნა   |
| 254   | carthage       | მშიერი, ფრე, შიფრი, მერი, ირემი    |
| 255   | carthage       | წყალი, ანწლი, ნალი, ნაწილი, წილი   |
| 256   | sidi-bou-said  | ატლასი, დასი, სია, დასტა, სტადია   |
| 257   | sidi-bou-said  | თმა, ადათი, თამამი, მთა, მამიდა    |
| 258   | sidi-bou-said  | მარცხი, კრახი, ხმა, კარი, მკაცრი   |
| 259   | sidi-bou-said  | შაში, შუა, შუშა, შაშვი, ულვაში     |
| 260   | sidi-bou-said  | მხარი, ფხა, ხურმა, ხუფი, მუხა      |
| 261   | el-jem         | ტრიო, რიტმი, ტომი, შტორმი, შტო     |
| 262   | el-jem         | გერი, ცენტრი, ნერგი, ცენტი, ტირე   |
| 263   | el-jem         | ბადე, ბალეტი, დიეტა, დეტალი, დილა  |
| 264   | el-jem         | პრიზი, პირი, ზურგი, გრიპი, პური    |
| 265   | el-jem         | სუფთა, უთო, უფასო, ასო, გუფთა      |
| 266   | barcelona      | ძველი, ძვალი, ძეხვი, ვილა, ხალი    |
| 267   | barcelona      | ქანჩი, უბანი, ბუჩქი, ბანი, ქუჩა    |
| 268   | barcelona      | ხარი, რუხი, ხურდა, ხუნდი, რაუნდი   |
| 269   | barcelona      | ყელი, ტყუპი, ეტლი, ტყე, ყლუპი      |
| 270   | barcelona      | ფულადი, ფილა, ულუფა, ლუდი, ფული    |
| 271   | valencia       | ქერა, ოპერა, ექო, ეპოქა, ძერა      |
| 272   | valencia       | საზომი, სამბო, ბასი, ზომა, ბზა     |
| 273   | valencia       | შუბი, კლუბი, კლიშე, ბელი, შუბლი    |
| 274   | valencia       | დევი, დოღი, ღვედი, ვიდეო, ღობე     |
| 275   | valencia       | დაფა, რაფა, ფარდა, გრაფა, გუდა     |
| 276   | madrid         | ღომი, ბოღმა, ბაღი, აბი, ჭაობი      |
| 277   | madrid         | ყაბაყი, ყბა, ბაყაყი, ჭია, ბაჭია    |
| 278   | madrid         | ციხე, სხივი, ხევი, სიცივე, სიცხე   |
| 279   | madrid         | სრული, ორსული, სორო, სიო, სოიო     |
| 280   | madrid         | ლოთი, კილო, თოლია, კოალა, კალთა    |
| 281   | granada        | ნორმა, მარტო, ტარო, მონეტა, მეტრო  |
| 282   | granada        | ვაკე, ველი, ლეკვი, კვალი, ჩეკი     |
| 283   | granada        | ცხვირი, ცხიმი, რიცხვი, ცივი, იხვი  |
| 284   | granada        | ლიფტი, ფილტვი, ვატი, ლაფი, იაფი    |
| 285   | granada        | იოგა, ტონა, ჰანგი, ტანგო, ტონი     |
| 286   | cordoba        | აუტი, ტირაჟი, ტური, უარი, ჟიური    |
| 287   | cordoba        | კვირა, კვარცი, კრავი, ცილა, კაცი   |
| 288   | cordoba        | რაინდი, ყადრი, ნადირი, ყდა, დარი   |
| 289   | cordoba        | ძიუდო, ძიძა, ძუა, აუდიო, ოდა       |
| 290   | cordoba        | ლუკმა, კომა, მაკე, მოკლე, ალოე     |
| 291   | seville        | ყრუ, რიყე, ყურე, ურყევი, ჭურვი     |
| 292   | seville        | პეშვი, თვე, თივა, ეშვი, ვეშაპი     |
| 293   | seville        | მაჯა, მარანი, ჯარიმა, მანია, მინა  |
| 294   | seville        | აკნე, კენკრა, ურნა, კურკა, რუკა    |
| 295   | seville        | სტიქია, საიტი, ქისა, ჯიქი, ტაქსი   |

## Required-word source and frequency audit

| Word   | Meaning                                             | Uses | Levels            | Source                                                                                          |
| ------ | --------------------------------------------------- | ---: | ----------------- | ----------------------------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)                      |
| აბი    | pill                                                |    2 | 38, 276           | [Source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)                        |
| აბჯარი | armor                                               |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412)                     |
| აგენტი | agent                                               |    1 | 44                | [Source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114)                     |
| აგური  | brick                                               |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)                      |
| ადათი  | custom                                              |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=ადათი&oldid=84112201)                      |
| ადრე   | early; previously                                   |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)                       |
| ავად   | ill, sick                                           |    2 | 4, 200            | [Source](https://en.wiktionary.org/w/index.php?title=ავად&oldid=88672971)                       |
| ავაზა  | cheetah                                             |    1 | 253               | [Source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)                      |
| ავდარი | bad weather, rainy weather                          |    1 | 178               | [Source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279)                     |
| ავეჯი  | furniture                                           |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)                      |
| ავზი   | tank, sink                                          |    2 | 15, 228           | [Source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)                       |
| ავი    | wicked, evil                                        |    3 | 13, 120, 207      | [Source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)                        |
| ავტორი | author                                              |    1 | 46                | [Source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573)                     |
| აზარტი | competitive excitement                              |    1 | 152               | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%96%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98) |
| აზოტი  | nitrogen                                            |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=აზოტი&oldid=87888146)                      |
| აზრი   | thought, opinion                                    |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)                       |
| აკვანი | cradle                                              |    1 | 201               | [Source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814)                     |
| აკნე   | acne                                                |    2 | 109, 294          | [Source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)                       |
| აკორდი | musical chord                                       |    1 | 26                | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%99%E1%83%9D%E1%83%A0%E1%83%93%E1%83%98) |
| ალალი  | honest, sincere                                     |    1 | 226               | [Source](https://en.wiktionary.org/w/index.php?title=ალალი&oldid=84089330)                      |
| ალბომი | album                                               |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197)                     |
| ალი    | blaze, flame, fire                                  |    2 | 41, 217           | [Source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)                        |
| ალმასი | diamond                                             |    1 | 208               | [Source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482)                     |
| ალოე   | aloe                                                |    2 | 52, 290           | [Source](https://en.wiktionary.org/w/index.php?title=ალოე&oldid=84112485)                       |
| ალფა   | alpha                                               |    1 | 250               | [Source](https://en.wiktionary.org/w/index.php?title=ალფა&oldid=84097261)                       |
| ალღო   | intuition                                           |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=ალღო&oldid=84097265)                       |
| ალყა   | siege                                               |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=ალყა&oldid=84112502)                       |
| ამაყი  | proud                                               |    1 | 80                | [Source](https://en.wiktionary.org/w/index.php?title=ამაყი&oldid=84112515)                      |
| ამინდი | weather                                             |    1 | 63                | [Source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550)                     |
| ამწე   | crane                                               |    2 | 82, 165           | [Source](https://en.wiktionary.org/w/index.php?title=ამწე&oldid=33588412)                       |
| ანდაზა | proverb                                             |    1 | 253               | [Source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575)                     |
| ანემია | anemia                                              |    1 | 30                | [Source](https://en.wiktionary.org/w/index.php?title=ანემია&oldid=84097334)                     |
| ანკესი | fishing hook                                        |    1 | 109               | [Source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188)                     |
| ანძა   | mast                                                |    1 | 201               | [Source](https://en.wiktionary.org/w/index.php?title=ანძა&oldid=84097365)                       |
| ანწლი  | elderberry                                          |    1 | 255               | [Source](https://en.wiktionary.org/w/index.php?title=ანწლი&oldid=87817176)                      |
| არაბი  | Arab person                                         |    1 | 40                | [Source](https://en.wiktionary.org/w/index.php?title=არაბი&oldid=84112722)                      |
| არაყი  | vodka                                               |    1 | 80                | [Source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)                      |
| არენა  | arena                                               |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=არენა&oldid=84097397)                      |
| არმია  | army                                                |    2 | 68, 213           | [Source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)                      |
| არსი   | essence                                             |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)                       |
| არფა   | harp                                                |    2 | 1, 222            | [Source](https://en.wiktionary.org/w/index.php?title=არფა&oldid=93122307)                       |
| არქივი | archive                                             |    1 | 224               | [Source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427)                     |
| არხი   | canal                                               |    1 | 222               | [Source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)                       |
| ასაკი  | age                                                 |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)                      |
| ასანთი | match                                               |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032)                     |
| ასთმა  | asthma                                              |    1 | 5                 | [Source](https://en.wiktionary.org/w/index.php?title=ასთმა&oldid=84097441)                      |
| ასლი   | copy                                                |    2 | 19, 217           | [Source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)                       |
| ასო    | alphabet letter                                     |    2 | 175, 265          | [Source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)                        |
| ასული  | daughter                                            |    1 | 208               | [Source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A1%E1%83%A3%E1%83%9A%E1%83%98)          |
| ატამი  | peach                                               |    1 | 223               | [Source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)                      |
| ატლასი | atlas                                               |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=ატლასი&oldid=84097471)                     |
| ატომი  | atom                                                |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)                      |
| აუდიო  | audio                                               |    2 | 97, 289           | [Source](https://en.wiktionary.org/w/index.php?title=აუდიო&oldid=84113099)                      |
| აუზი   | pool                                                |    2 | 27, 187           | [Source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)                       |
| აურა   | aura                                                |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=აურა&oldid=84113107)                       |
| აუტი   | throw-in                                            |    2 | 14, 286           | [Source](https://en.wiktionary.org/w/index.php?title=აუტი&oldid=39552798)                       |
| აფთარი | hyena                                               |    1 | 222               | [Source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116)                     |
| აფიშა  | poster                                              |    1 | 250               | [Source](https://en.wiktionary.org/w/index.php?title=აფიშა&oldid=84983656)                      |
| აფრა   | sail                                                |    3 | 1, 100, 252       | [Source](https://en.wiktionary.org/w/index.php?title=აფრა&oldid=84113118)                       |
| აქლემი | camel                                               |    1 | 113               | [Source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908)                     |
| აქცია  | action, promotion                                   |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)                      |
| აჩმა   | achma cheese pastry                                 |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)                       |
| აწმყო  | the present (time)                                  |    1 | 37                | [Source](https://en.wiktionary.org/w/index.php?title=აწმყო&oldid=84103243)                      |
| ახალი  | new; fresh                                          |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ახალი&oldid=88893525)                      |
| აჯიკა  | adjika                                              |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)                      |
| ბაბუა  | grandfather, grandpa                                |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)                      |
| ბაგე   | lip                                                 |    2 | 65, 240           | [Source](https://en.wiktionary.org/w/index.php?title=ბაგე&oldid=92454114)                       |
| ბაგირი | cable, heavy rope                                   |    1 | 172               | [Source](https://en.wiktionary.org/w/index.php?title=ბაგირი&oldid=89591122)                     |
| ბადე   | net                                                 |    2 | 67, 263           | [Source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)                       |
| ბავშვი | child                                               |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503)                     |
| ბაზა   | base                                                |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)                       |
| ბაიტი  | byte                                                |    1 | 8                 | [Source](https://en.wiktionary.org/w/index.php?title=ბაიტი&oldid=89301890)                      |
| ბალეტი | ballet                                              |    1 | 263               | [Source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557)                     |
| ბალთა  | buckle                                              |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=ბალთა&oldid=84097562)                      |
| ბალი   | sweet cherry                                        |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)                       |
| ბამბა  | cotton, cotton wool                                 |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)                      |
| ბანდა  | gang                                                |    1 | 237               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%9C%E1%83%93%E1%83%90)          |
| ბანი   | bass voice                                          |    2 | 142, 267          | [Source](https://en.wiktionary.org/w/index.php?title=ბანი&oldid=92486488)                       |
| ბანკი  | bank                                                |    2 | 62, 238           | [Source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)                      |
| ბანქო  | playing cards                                       |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)                      |
| ბარგი  | luggage                                             |    1 | 172               | [Source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)                      |
| ბარდა  | pea                                                 |    1 | 40                | [Source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)                      |
| ბარი   | valley                                              |    2 | 49, 202           | [Source](https://en.wiktionary.org/w/index.php?title=ბარი&oldid=92290776)                       |
| ბასი   | bass voice                                          |    2 | 8, 272            | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%A1%E1%83%98)                   |
| ბასრი  | sharp                                               |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=ბასრი&oldid=84089568)                      |
| ბატი   | goose                                               |    2 | 8, 182            | [Source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)                       |
| ბატონი | sir                                                 |    1 | 142               | [Source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444)                     |
| ბაფთა  | bow knot                                            |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)                      |
| ბაღი   | garden                                              |    2 | 27, 276           | [Source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)                       |
| ბაყაყი | frog                                                |    1 | 277               | [Source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131)                     |
| ბაჭია  | young rabbit                                        |    1 | 277               | [Source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)                      |
| ბგერა  | sound                                               |    2 | 65, 240           | [Source](https://en.wiktionary.org/w/index.php?title=ბგერა&oldid=88996488)                      |
| ბებია  | grandmother, grannie, granny                        |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)                      |
| ბებო   | grandma                                             |    1 | 57                | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%94%E1%83%91%E1%83%9D)                   |
| ბედი   | fate; luck                                          |    2 | 7, 216            | [Source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)                       |
| ბევრი  | many; much                                          |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)                      |
| ბეკონი | bacon                                               |    1 | 69                | [Source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047)                     |
| ბელადი | leader, chief                                       |    1 | 67                | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%94%E1%83%9A%E1%83%90%E1%83%93%E1%83%98) |
| ბელი   | bear cub                                            |    2 | 91, 273           | [Source](https://en.wiktionary.org/w/index.php?title=ბელი&oldid=91740617)                       |
| ბენდი  | band                                                |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=ბენდი&oldid=90750378)                      |
| ბერი   | monk                                                |    2 | 33, 174           | [Source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)                       |
| ბეტა   | beta                                                |    1 | 182               | [Source](https://en.wiktionary.org/w/index.php?title=ბეტა&oldid=84097648)                       |
| ბეღურა | sparrow                                             |    1 | 240               | [Source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232)                     |
| ბეწვი  | fur, pile                                           |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)                      |
| ბეჭი   | shoulder blade                                      |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=ბეჭი&oldid=89438383)                       |
| ბზა    | box tree                                            |    2 | 131, 272          | [Source](https://en.wiktionary.org/w/index.php?title=ბზა&oldid=84113487)                        |
| ბზარი  | crack                                               |    1 | 182               | [Source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)                      |
| ბილეთი | ticket                                              |    1 | 198               | [Source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670)                     |
| ბილიკი | path                                                |    1 | 196               | [Source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672)                     |
| ბინა   | apartment                                           |    2 | 62, 142           | [Source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)                       |
| ბინდი  | twilight                                            |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=ბინდი&oldid=85068323)                      |
| ბირჟა  | exchange                                            |    1 | 202               | [Source](https://en.wiktionary.org/w/index.php?title=ბირჟა&oldid=84113535)                      |
| ბიტი   | bit; unit of digital information                    |    2 | 8, 147            | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%98%E1%83%A2%E1%83%98)                   |
| ბიურო  | bureau                                              |    1 | 180               | [Source](https://en.wiktionary.org/w/index.php?title=ბიურო&oldid=84097685)                      |
| ბიცოლა | aunt                                                |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800)                     |
| ბიძა   | uncle                                               |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)                       |
| ბიჭი   | boy                                                 |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)                       |
| ბლეფი  | bluff                                               |    1 | 86                | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%94%E1%83%A4%E1%83%98)          |
| ბლოკი  | pulley block                                        |    1 | 196               | [Source](https://en.wiktionary.org/w/index.php?title=ბლოკი&oldid=84097700)                      |
| ბლუზი  | blues music                                         |    1 | 199               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%A3%E1%83%96%E1%83%98)          |
| ბმული  | link                                                |    2 | 70, 199           | [Source](https://en.wiktionary.org/w/index.php?title=ბმული&oldid=84113566)                      |
| ბნელი  | dark                                                |    1 | 86                | [Source](https://en.wiktionary.org/w/index.php?title=ბნელი&oldid=91740783)                      |
| ბოთლი  | bottle                                              |    1 | 59                | [Source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)                      |
| ბოლი   | smoke                                               |    2 | 17, 196           | [Source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)                       |
| ბოლო   | end                                                 |    1 | 59                | [Source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)                       |
| ბოლოკი | radish                                              |    1 | 248               | [Source](https://en.wiktionary.org/w/index.php?title=ბოლოკი&oldid=91412000)                     |
| ბომბი  | bomb                                                |    1 | 57                | [Source](https://en.wiktionary.org/w/index.php?title=ბომბი&oldid=84097706)                      |
| ბოროტი | evil; wicked                                        |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020)                     |
| ბორტი  | side of a ship                                      |    1 | 143               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98)          |
| ბოტი   | software bot                                        |    1 | 219               | [Source](https://en.wiktionary.org/w/index.php?title=ბოტი&oldid=92419498)                       |
| ბოღმა  | resentment                                          |    1 | 276               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A6%E1%83%9B%E1%83%90)          |
| ბოძი   | pole                                                |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)                       |
| ბოჭკო  | fiber                                               |    1 | 248               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%AD%E1%83%99%E1%83%9D)          |
| ბრაზი  | anger                                               |    1 | 182               | [Source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)                      |
| ბრალი  | fault                                               |    1 | 172               | [Source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)                      |
| ბრბო   | crowd                                               |    1 | 180               | [Source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)                       |
| ბრმა   | blind                                               |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)                       |
| ბუდე   | nest                                                |    1 | 7                 | [Source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)                       |
| ბუზი   | fly                                                 |    1 | 199               | [Source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)                       |
| ბუმი   | rapid boom                                          |    1 | 199               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A3%E1%83%9B%E1%83%98)                   |
| ბუნტი  | uprising                                            |    1 | 142               | [Source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%A3%E1%83%9C%E1%83%A2%E1%83%98)          |
| ბურთი  | ball                                                |    1 | 49                | [Source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)                      |
| ბურღი  | drill                                               |    1 | 27                | [Source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)                      |
| ბუშტი  | bubble, balloon                                     |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)                      |
| ბუჩქი  | bush, shrub                                         |    1 | 267               | [Source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)                      |
| გაზეთი | newspaper                                           |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807)                     |
| გაზი   | gas                                                 |    1 | 15                | [Source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)                       |
| გალია  | cage                                                |    1 | 226               | [Source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)                      |
| გამა   | musical scale                                       |    1 | 88                | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%90%E1%83%9B%E1%83%90)                   |
| გამძლე | durable                                             |    1 | 78                | [Source](https://en.wiktionary.org/w/index.php?title=გამძლე&oldid=43754830)                     |
| განძი  | treasure                                            |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)                      |
| გარეთ  | outside                                             |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)                      |
| გარემო | environment                                         |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637)                     |
| გარსი  | shell                                               |    1 | 175               | [Source](https://en.wiktionary.org/w/index.php?title=გარსი&oldid=84097862)                      |
| გეგმა  | plan                                                |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)                      |
| გედი   | swan                                                |    1 | 216               | [Source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)                       |
| გემი   | ship                                                |    1 | 78                | [Source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)                       |
| გემო   | palate, taste                                       |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)                       |
| გენი   | gene                                                |    2 | 44, 243           | [Source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)                       |
| გენია  | exceptional creative talent                         |    1 | 44                | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%94%E1%83%9C%E1%83%98%E1%83%90)          |
| გერბი  | coat of arms                                        |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=გერბი&oldid=90290436)                      |
| გერი   | stepchild                                           |    2 | 75, 262           | [Source](https://en.wiktionary.org/w/index.php?title=გერი&oldid=92197067)                       |
| გვამი  | dead body                                           |    1 | 15                | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%95%E1%83%90%E1%83%9B%E1%83%98)          |
| გვარი  | surname                                             |    1 | 106               | [Source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)                      |
| გველი  | snake, serpent                                      |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)                      |
| გვიან  | late                                                |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)                      |
| გზა    | way, path, road                                     |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)                        |
| გიდი   | tour guide                                          |    1 | 216               | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%98%E1%83%93%E1%83%98)                   |
| გიტარა | guitar                                              |    1 | 223               | [Source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739)                     |
| გლეხი  | peasant; countryman                                 |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=გლეხი&oldid=88065505)                      |
| გლუვი  | smooth                                              |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)                      |
| გმირი  | hero                                                |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)                      |
| გოგრა  | pumpkin                                             |    1 | 81                | [Source](https://en.wiktionary.org/w/index.php?title=გოგრა&oldid=92486490)                      |
| გოლი   | goal in sport                                       |    2 | 43, 227           | [Source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)                       |
| გოლფი  | golf                                                |    1 | 239               | [Source](https://en.wiktionary.org/w/index.php?title=გოლფი&oldid=84097945)                      |
| გორა   | hill                                                |    2 | 81, 175           | [Source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)                       |
| გორაკი | hillock                                             |    1 | 245               | [Source](https://en.wiktionary.org/w/index.php?title=გორაკი&oldid=85057574)                     |
| გოჭი   | piglet                                              |    1 | 175               | [Source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)                       |
| გრამი  | gram                                                |    1 | 223               | [Source](https://en.wiktionary.org/w/index.php?title=გრამი&oldid=91716527)                      |
| გრაფა  | field in a form                                     |    1 | 275               | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A0%E1%83%90%E1%83%A4%E1%83%90)          |
| გრაფი  | count; noble title                                  |    1 | 123               | [Source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%A0%E1%83%90%E1%83%A4%E1%83%98)          |
| გრილი  | cool, breezy, chilly                                |    1 | 172               | [Source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)                      |
| გრიპი  | flu                                                 |    1 | 264               | [Source](https://en.wiktionary.org/w/index.php?title=გრიპი&oldid=84191656)                      |
| გროვა  | heap; pile                                          |    1 | 106               | [Source](https://en.wiktionary.org/w/index.php?title=გროვა&oldid=91644257)                      |
| გუბე   | puddle                                              |    1 | 240               | [Source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)                       |
| გუდა   | leather bag, wineskin                               |    1 | 275               | [Source](https://en.wiktionary.org/w/index.php?title=გუდა&oldid=88091499)                       |
| გული   | heart                                               |    2 | 72, 226           | [Source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)                       |
| გუნდა  | ball, snowball                                      |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=გუნდა&oldid=87601776)                      |
| გუნდი  | choir; team                                         |    1 | 39                | [Source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)                      |
| გურული | person from Guria                                   |    1 | 43                | [Source](https://en.wiktionary.org/w/index.php?title=გურული&oldid=84114256)                     |
| გუფთა  | meatball dish                                       |    1 | 265               | [Source](https://en.wiktionary.org/w/index.php?title=გუფთა&oldid=77583955)                      |
| გუშინ  | yesterday                                           |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)                      |
| დაბა   | small town                                          |    2 | 35, 237           | [Source](https://en.wiktionary.org/w/index.php?title=დაბა&oldid=91727678)                       |
| დაბალი | low; short                                          |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=დაბალი&oldid=84089835)                     |
| დაბლა  | down; downstairs                                    |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)                      |
| დავა   | dispute                                             |    2 | 4, 253            | [Source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)                       |
| დათვი  | bear                                                |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)                      |
| დანა   | knife                                               |    2 | 122, 253          | [Source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)                       |
| დარგი  | field; branch of work                               |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=დარგი&oldid=84098053)                      |
| დარი   | fair weather                                        |    2 | 68, 288           | [Source](https://en.wiktionary.org/w/index.php?title=დარი&oldid=85046597)                       |
| დასი   | troupe, group                                       |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)                       |
| დასტა  | stack, bundle                                       |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=დასტა&oldid=84098058)                      |
| დაფა   | board, tablet                                       |    2 | 122, 275          | [Source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)                       |
| დაფნა  | laurel                                              |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=დაფნა&oldid=84114442)                      |
| დახლი  | counter                                             |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)                      |
| დედა   | mother                                              |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)                       |
| დევი   | giant                                               |    2 | 47, 274           | [Source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)                       |
| დეიდა  | maternal aunt                                       |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)                      |
| დენთი  | gunpowder                                           |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=დენთი&oldid=55366640)                      |
| დენი   | electric current                                    |    2 | 54, 225           | [Source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)                       |
| დეპო   | depot                                               |    1 | 171               | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%94%E1%83%9E%E1%83%9D)                   |
| დეტალი | detail                                              |    1 | 263               | [Source](https://en.wiktionary.org/w/index.php?title=დეტალი&oldid=85506724)                     |
| დიადი  | great                                               |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=დიადი&oldid=84090016)                      |
| დიდი   | big                                                 |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)                       |
| დიეტა  | diet                                                |    1 | 263               | [Source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)                      |
| დილა   | morning                                             |    2 | 128, 263          | [Source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)                       |
| დილემა | dilemma                                             |    1 | 128               | [Source](https://en.wiktionary.org/w/index.php?title=დილემა&oldid=84098184)                     |
| დისკი  | disc                                                |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)                      |
| დისკო  | disco music                                         |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=დისკო&oldid=84098211)                      |
| დოგმა  | dogma                                               |    1 | 227               | [Source](https://en.wiktionary.org/w/index.php?title=დოგმა&oldid=84098233)                      |
| დოზა   | dose                                                |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)                       |
| დოლი   | drum                                                |    2 | 18, 227           | [Source](https://en.wiktionary.org/w/index.php?title=დოლი&oldid=88002790)                       |
| დონე   | level                                               |    2 | 76, 235           | [Source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)                       |
| დოქი   | jug                                                 |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)                       |
| დოღი   | horse race                                          |    1 | 274               | [Source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%9D%E1%83%A6%E1%83%98)                   |
| დრამა  | drama                                               |    1 | 68                | [Source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)                      |
| დრო    | time                                                |    2 | 26, 171           | [Source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)                        |
| დრონი  | drone                                               |    1 | 171               | [Source](https://en.wiktionary.org/w/index.php?title=დრონი&oldid=87207395)                      |
| დროული | timely                                              |    1 | 53                | [Source](https://en.wiktionary.org/w/index.php?title=დროული&oldid=84090042)                     |
| დროშა  | flag                                                |    1 | 58                | [Source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)                      |
| დუელი  | duel                                                |    1 | 7                 | [Source](https://en.wiktionary.org/w/index.php?title=დუელი&oldid=84098276)                      |
| დუეტი  | duet                                                |    1 | 45                | [Source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)                      |
| დღე    | day                                                 |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)                        |
| ევრო   | euro                                                |    1 | 34                | [Source](https://en.wiktionary.org/w/index.php?title=ევრო&oldid=84103543)                       |
| ეზო    | yard, courtyard                                     |    1 | 66                | [Source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)                        |
| ეკალი  | thorn                                               |    1 | 183               | [Source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)                      |
| ელვა   | lightning                                           |    1 | 48                | [Source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)                       |
| ელიტა  | elite                                               |    1 | 183               | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%98%E1%83%A2%E1%83%90)          |
| ელფი   | elf                                                 |    1 | 86                | [Source](https://en.wiktionary.org/w/index.php?title=ელფი&oldid=84098344)                       |
| ელჩი   | ambassador                                          |    1 | 107               | [Source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)                       |
| ენა    | language; tongue                                    |    2 | 44, 243           | [Source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)                        |
| ენოტი  | raccoon                                             |    1 | 61                | [Source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)                      |
| ეპოქა  | epoch                                               |    1 | 271               | [Source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)                      |
| ერა    | era                                                 |    3 | 25, 165, 244      | [Source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)                        |
| ერბო   | ghee, clarified butter                              |    2 | 57, 234           | [Source](https://en.wiktionary.org/w/index.php?title=ერბო&oldid=55359898)                       |
| ერთად  | together                                            |    1 | 75                | [Source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)                      |
| ერი    | nation                                              |    2 | 22, 193           | [Source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)                        |
| ეროზია | erosion                                             |    1 | 66                | [Source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%A0%E1%83%9D%E1%83%96%E1%83%98%E1%83%90) |
| ეტაპი  | stage                                               |    1 | 41                | [Source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)                      |
| ეტლი   | carriage                                            |    2 | 45, 269           | [Source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)                       |
| ექიმი  | doctor                                              |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=ექიმი&oldid=88798763)                      |
| ექო    | echo                                                |    2 | 55, 271           | [Source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)                        |
| ეშვი   | fang                                                |    2 | 107, 292          | [Source](https://en.wiktionary.org/w/index.php?title=ეშვი&oldid=84114997)                       |
| ეჭვი   | doubt; suspicion                                    |    1 | 101               | [Source](https://en.wiktionary.org/w/index.php?title=ეჭვი&oldid=85513584)                       |
| ვადა   | term, deadline                                      |    2 | 4, 178            | [Source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)                       |
| ვაზა   | vase                                                |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)                       |
| ვაზი   | vine, grapevine                                     |    1 | 15                | [Source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)                       |
| ვაზნა  | cartridge                                           |    1 | 253               | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%96%E1%83%9C%E1%83%90)          |
| ვაკე   | plain, plane                                        |    1 | 282               | [Source](https://en.wiktionary.org/w/index.php?title=ვაკე&oldid=84098446)                       |
| ვალი   | debt                                                |    2 | 3, 229            | [Source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)                       |
| ვალსი  | waltz                                               |    1 | 229               | [Source](https://en.wiktionary.org/w/index.php?title=ვალსი&oldid=84098452)                      |
| ვაჟი   | son                                                 |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)                       |
| ვარდი  | rose                                                |    1 | 178               | [Source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)                      |
| ვატი   | watt; unit of power                                 |    2 | 105, 284          | [Source](https://en.wiktionary.org/w/index.php?title=ვატი&oldid=84098467)                       |
| ვაფლი  | wafer                                               |    1 | 92                | [Source](https://www.ganmarteba.ge/word/%E1%83%95%E1%83%90%E1%83%A4%E1%83%9A%E1%83%98)          |
| ვაშლი  | apple                                               |    2 | 3, 250            | [Source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)                      |
| ვეგანი | vegan                                               |    1 | 243               | [Source](https://en.wiktionary.org/w/index.php?title=ვეგანი&oldid=85113988)                     |
| ველი   | field                                               |    2 | 47, 282           | [Source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)                       |
| ვენა   | vein                                                |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=ვენა&oldid=85017282)                       |
| ვერსია | version                                             |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=ვერსია&oldid=84098493)                     |
| ვეტო   | veto                                                |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=ვეტო&oldid=84098503)                       |
| ვეშაპი | whale                                               |    1 | 292               | [Source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435)                     |
| ვიდეო  | video                                               |    1 | 274               | [Source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)                      |
| ვიზა   | visa                                                |    2 | 15, 204           | [Source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)                       |
| ვილა   | villa                                               |    2 | 3, 266            | [Source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)                       |
| ვირთხა | rat                                                 |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=ვირთხა&oldid=84115189)                     |
| ვირი   | donkey, ass                                         |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)                       |
| ვიწრო  | narrow                                              |    1 | 247               | [Source](https://en.wiktionary.org/w/index.php?title=ვიწრო&oldid=84088784)                      |
| ვოლტი  | volt                                                |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=ვოლტი&oldid=84098545)                      |
| ზავი   | truce                                               |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)                       |
| ზარი   | bell                                                |    2 | 12, 228           | [Source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)                       |
| ზებრა  | zebra                                               |    1 | 182               | [Source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)                      |
| ზეგ    | day after tomorrow                                  |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)                        |
| ზედა   | upper                                               |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)                       |
| ზეთი   | oil                                                 |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)                       |
| ზეიმი  | celebration                                         |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)                      |
| ზეცა   | heaven                                              |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)                       |
| ზიანი  | damage                                              |    1 | 98                | [Source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)                      |
| ზმნა   | verb                                                |    1 | 98                | [Source](https://en.wiktionary.org/w/index.php?title=ზმნა&oldid=92945166)                       |
| ზოლი   | stripe                                              |    1 | 66                | [Source](https://www.ganmarteba.ge/word/%E1%83%96%E1%83%9D%E1%83%9A%E1%83%98)                   |
| ზომა   | measure, quantity, size                             |    1 | 272               | [Source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)                       |
| ზომბი  | zombie                                              |    1 | 199               | [Source](https://en.wiktionary.org/w/index.php?title=ზომბი&oldid=87234661)                      |
| ზონა   | zone                                                |    2 | 21, 134           | [Source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)                       |
| ზურგი  | back                                                |    1 | 264               | [Source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)                      |
| ზუსტი  | precise; exact                                      |    1 | 104               | [Source](https://en.wiktionary.org/w/index.php?title=ზუსტი&oldid=84088793)                      |
| ზღარბი | hedgehog                                            |    1 | 27                | [Source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278)                     |
| ზღვა   | sea                                                 |    1 | 228               | [Source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)                       |
| ზღვარი | boundary                                            |    1 | 228               | [Source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789)                     |
| თაგვი  | mouse                                               |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)                      |
| თავი   | head                                                |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)                       |
| თავლა  | stable                                              |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=თავლა&oldid=85073944)                      |
| თათი   | paw                                                 |    1 | 129               | [Source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)                       |
| თამამი | bold; confident                                     |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182)                     |
| თანხა  | amount of money                                     |    1 | 117               | [Source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)                      |
| თაობა  | generation                                          |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)                      |
| თარო   | board, shelf                                        |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)                       |
| თასი   | bowl, chalice                                       |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)                       |
| თასმა  | braid                                               |    1 | 5                 | [Source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)                      |
| თაფლი  | honey                                               |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)                      |
| თაღი   | arch                                                |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=თაღი&oldid=92422626)                       |
| თახვი  | beaver                                              |    1 | 11                | [Source](https://en.wiktionary.org/w/index.php?title=თახვი&oldid=89977530)                      |
| თბილი  | warm                                                |    1 | 198               | [Source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)                      |
| თევზი  | fish                                                |    1 | 133               | [Source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)                      |
| თემა   | theme; essay                                        |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)                       |
| თემი   | community                                           |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=თემი&oldid=85086632)                       |
| თეორია | theory                                              |    1 | 116               | [Source](https://en.wiktionary.org/w/index.php?title=თეორია&oldid=84098686)                     |
| თერძი  | tailor                                              |    1 | 116               | [Source](https://en.wiktionary.org/w/index.php?title=თერძი&oldid=84103313)                      |
| თესლი  | seed                                                |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)                      |
| თეძო   | hip, thigh                                          |    1 | 116               | [Source](https://en.wiktionary.org/w/index.php?title=თეძო&oldid=84098694)                       |
| თვალი  | eye                                                 |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)                      |
| თვე    | month                                               |    2 | 101, 292          | [Source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)                        |
| თივა   | hay                                                 |    2 | 13, 292           | [Source](https://en.wiktionary.org/w/index.php?title=თივა&oldid=84115648)                       |
| თითი   | finger                                              |    1 | 129               | [Source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)                       |
| თიხა   | clay                                                |    2 | 11, 222           | [Source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)                       |
| თმა    | hair                                                |    2 | 5, 257            | [Source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)                        |
| თოვლი  | snow                                                |    1 | 13                | [Source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)                      |
| თოკი   | rope                                                |    1 | 115               | [Source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)                       |
| თოლია  | seagull                                             |    2 | 13, 280           | [Source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)                      |
| თონე   | bread oven                                          |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)                       |
| თოფი   | gun                                                 |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)                       |
| თოხი   | hoe                                                 |    1 | 11                | [Source](https://en.wiktionary.org/w/index.php?title=თოხი&oldid=88091343)                       |
| თუთა   | mulberry                                            |    1 | 129               | [Source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)                       |
| თუთია  | zinc                                                |    1 | 129               | [Source](https://en.wiktionary.org/w/index.php?title=თუთია&oldid=84098719)                      |
| თურქი  | Turkish person                                      |    1 | 249               | [Source](https://en.wiktionary.org/w/index.php?title=თურქი&oldid=87776168)                      |
| თხა    | goat                                                |    3 | 11, 117, 205      | [Source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)                        |
| თხელი  | thin                                                |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=თხელი&oldid=84090228)                      |
| თხილი  | hazelnut                                            |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)                      |
| იარა   | wound                                               |    2 | 80, 223           | [Source](https://en.wiktionary.org/w/index.php?title=იარა&oldid=84115754)                       |
| იაფი   | cheap                                               |    2 | 9, 284            | [Source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)                       |
| იახტა  | yacht                                               |    1 | 51                | [Source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)                      |
| იგავი  | fable                                               |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)                      |
| იდეა   | idea                                                |    2 | 67, 225           | [Source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)                       |
| ილეთი  | trick, technique                                    |    1 | 198               | [Source](https://en.wiktionary.org/w/index.php?title=ილეთი&oldid=84115797)                      |
| იმედი  | hope                                                |    1 | 128               | [Source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)                      |
| იმიჯი  | public image                                        |    1 | 181               | [Source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%9B%E1%83%98%E1%83%AF%E1%83%98)          |
| იოგა   | yoga                                                |    2 | 106, 285          | [Source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)                       |
| იოდი   | iodine                                              |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)                       |
| იოლი   | easy                                                |    1 | 196               | [Source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)                       |
| ირემი  | deer                                                |    1 | 254               | [Source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)                      |
| ირონია | irony                                               |    1 | 192               | [Source](https://en.wiktionary.org/w/index.php?title=ირონია&oldid=84098887)                     |
| ისარი  | arrow                                               |    1 | 186               | [Source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)                      |
| იღბალი | luck                                                |    1 | 73                | [Source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167)                     |
| იღლია  | armpit                                              |    1 | 73                | [Source](https://en.wiktionary.org/w/index.php?title=იღლია&oldid=84115945)                      |
| იხვი   | duck                                                |    2 | 56, 283           | [Source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)                       |
| იჯარა  | lease                                               |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)                      |
| კაბა   | dress, frock                                        |    2 | 40, 218           | [Source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)                       |
| კადრი  | film frame                                          |    1 | 40                | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%90%E1%83%93%E1%83%A0%E1%83%98/1)        |
| კაზინო | casino                                              |    1 | 21                | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%90%E1%83%96%E1%83%98%E1%83%9C%E1%83%9D) |
| კათხა  | mug                                                 |    1 | 117               | [Source](https://en.wiktionary.org/w/index.php?title=კათხა&oldid=84115971)                      |
| კაკალი | walnut; walnut tree                                 |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192)                     |
| კაკაო  | cocoa                                               |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)                      |
| კალთა  | lap, skirt hem                                      |    1 | 280               | [Source](https://en.wiktionary.org/w/index.php?title=კალთა&oldid=84098950)                      |
| კალია  | grasshopper                                         |    1 | 84                | [Source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)                      |
| კამა   | dill                                                |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)                       |
| კამერა | chamber                                             |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969)                     |
| კანი   | skin                                                |    2 | 21, 173           | [Source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)                       |
| კანონი | law                                                 |    1 | 238               | [Source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329)                     |
| კანჭი  | shin                                                |    1 | 62                | [Source](https://en.wiktionary.org/w/index.php?title=კანჭი&oldid=84116024)                      |
| კაჟი   | flint                                               |    1 | 231               | [Source](https://en.wiktionary.org/w/index.php?title=კაჟი&oldid=84099010)                       |
| კარავი | tent                                                |    1 | 178               | [Source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033)                     |
| კარატე | karate                                              |    1 | 252               | [Source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608)                     |
| კარატი | carat                                               |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=კარატი&oldid=84099016)                     |
| კარი   | door                                                |    2 | 40, 258           | [Source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)                       |
| კარმა  | karma                                               |    1 | 103               | [Source](https://en.wiktionary.org/w/index.php?title=კარმა&oldid=84099027)                      |
| კარტი  | card                                                |    1 | 60                | [Source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)                      |
| კასრი  | barrel                                              |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)                      |
| კატა   | cat                                                 |    1 | 233               | [Source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)                       |
| კაუჭი  | hook                                                |    1 | 23                | [Source](https://en.wiktionary.org/w/index.php?title=კაუჭი&oldid=88081762)                      |
| კაფე   | cafe                                                |    1 | 25                | [Source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)                       |
| კაცი   | man                                                 |    2 | 109, 287          | [Source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)                       |
| კაცური | honorable, decent                                   |    1 | 42                | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%90%E1%83%AA%E1%83%A3%E1%83%A0%E1%83%98) |
| კბილი  | tooth                                               |    1 | 196               | [Source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)                      |
| კენკრა | berry                                               |    1 | 294               | [Source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952)                     |
| კერა   | hearth                                              |    2 | 25, 197           | [Source](https://en.wiktionary.org/w/index.php?title=კერა&oldid=91649986)                       |
| კერძი  | dish                                                |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)                      |
| კერძო  | private                                             |    1 | 234               | [Source](https://en.wiktionary.org/w/index.php?title=კერძო&oldid=75680066)                      |
| კეტი   | stick                                               |    2 | 45, 183           | [Source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)                       |
| კეფა   | back of the head                                    |    1 | 252               | [Source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)                       |
| კეცი   | ketsi, earthenware frying pan (usually from clay)   |    1 | 109               | [Source](https://en.wiktionary.org/w/index.php?title=კეცი&oldid=84116112)                       |
| კეხი   | saddle tree, nose hump                              |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=კეხი&oldid=91570728)                       |
| კვალი  | trail, clue                                         |    2 | 48, 282           | [Source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)                      |
| კვამლი | smoke                                               |    1 | 48                | [Source](https://en.wiktionary.org/w/index.php?title=კვამლი&oldid=84116122)                     |
| კვანძი | knot                                                |    1 | 201               | [Source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089)                     |
| კვარცი | quartz                                              |    1 | 287               | [Source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421)                     |
| კვირა  | week                                                |    1 | 287               | [Source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)                      |
| კვირტი | bud                                                 |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=კვირტი&oldid=84116143)                     |
| კვიცი  | foal                                                |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=კვიცი&oldid=91715232)                      |
| კვოტა  | quota                                               |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=კვოტა&oldid=84099109)                      |
| კიბე   | ladder, stair, staircase, stairway                  |    2 | 69, 234           | [Source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)                       |
| კიბო   | barnacle; cancer                                    |    2 | 69, 238           | [Source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)                       |
| კიდე   | edge                                                |    1 | 127               | [Source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)                       |
| კიდური | limb                                                |    1 | 96                | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%98%E1%83%93%E1%83%A3%E1%83%A0%E1%83%98) |
| კივი   | kiwi fruit; kiwi bird                               |    2 | 83, 194           | [Source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)                       |
| კილო   | kilo                                                |    2 | 84, 280           | [Source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)                       |
| კინო   | cinema; movie                                       |    2 | 21, 235           | [Source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)                       |
| კისერი | neck                                                |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129)                     |
| კიტრი  | cucumber                                            |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)                      |
| კლანი  | clan                                                |    1 | 168               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9A%E1%83%90%E1%83%9C%E1%83%98)          |
| კლასი  | class                                               |    1 | 85                | [Source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)                      |
| კლდე   | cliff, crag, scar, rock                             |    1 | 45                | [Source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)                       |
| კლიპი  | music video                                         |    1 | 189               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9A%E1%83%98%E1%83%9E%E1%83%98)          |
| კლიტე  | lock                                                |    1 | 45                | [Source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)                      |
| კლიშე  | cliché                                              |    1 | 273               | [Source](https://en.wiktionary.org/w/index.php?title=კლიშე&oldid=84099154)                      |
| კლონი  | clone                                               |    1 | 168               | [Source](https://en.wiktionary.org/w/index.php?title=კლონი&oldid=84099156)                      |
| კლუბი  | club                                                |    1 | 273               | [Source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)                      |
| კნუტი  | kitten                                              |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)                      |
| კოალა  | koala                                               |    1 | 280               | [Source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)                      |
| კობრა  | cobra                                               |    1 | 26                | [Source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)                      |
| კობრი  | carp                                                |    2 | 26, 180           | [Source](https://en.wiktionary.org/w/index.php?title=კობრი&oldid=84116215)                      |
| კოდი   | code                                                |    2 | 26, 235           | [Source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)                       |
| კოვზი  | spoon                                               |    1 | 204               | [Source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)                      |
| კოკა   | traditional clay jug                                |    1 | 84                | [Source](https://www.ganmarteba.ge/word/კოკა)                                                   |
| კომა   | coma                                                |    2 | 103, 290          | [Source](https://en.wiktionary.org/w/index.php?title=კომა&oldid=84099194)                       |
| კომში  | quince                                              |    1 | 132               | [Source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)                      |
| კონა   | bundle                                              |    2 | 21, 238           | [Source](https://en.wiktionary.org/w/index.php?title=კონა&oldid=84099233)                       |
| კოპი   | bump                                                |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=კოპი&oldid=90518672)                       |
| კორტი  | tennis-court                                        |    1 | 60                | [Source](https://en.wiktionary.org/w/index.php?title=კორტი&oldid=84116301)                      |
| კოშკი  | tower                                               |    1 | 132               | [Source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)                      |
| კოჭი   | ankle                                               |    2 | 2, 248            | [Source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)                       |
| კოჭლი  | lame; limping                                       |    1 | 248               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%AD%E1%83%9A%E1%83%98)          |
| კრავი  | lamb                                                |    2 | 178, 287          | [Source](https://en.wiktionary.org/w/index.php?title=კრავი&oldid=84116326)                      |
| კრახი  | complete failure                                    |    1 | 258               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A0%E1%83%90%E1%83%AE%E1%83%98)          |
| კრემი  | cream                                               |    1 | 127               | [Source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)                      |
| კრივი  | boxing                                              |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=კრივი&oldid=92228879)                      |
| კრუხი  | broody hen                                          |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=კრუხი&oldid=84099373)                      |
| კუბი   | cube                                                |    2 | 23, 180           | [Source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)                       |
| კუბო   | coffin                                              |    1 | 180               | [Source](https://en.wiktionary.org/w/index.php?title=კუბო&oldid=88091344)                       |
| კუდი   | tail                                                |    1 | 96                | [Source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)                       |
| კუზი   | hump                                                |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=კუზი&oldid=84099382)                       |
| კულტი  | cult                                                |    1 | 189               | [Source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%A3%E1%83%9A%E1%83%A2%E1%83%98)          |
| კუნთი  | muscle                                              |    1 | 115               | [Source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)                      |
| კუნძი  | stump                                               |    1 | 29                | [Source](https://en.wiktionary.org/w/index.php?title=კუნძი&oldid=84116386)                      |
| კუპატი | kupati sausage                                      |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=კუპატი&oldid=84096710)                     |
| კურკა  | fruit stone                                         |    1 | 294               | [Source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)                      |
| კურსი  | course; exchange rate                               |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=კურსი&oldid=69618502)                      |
| კუჭი   | stomach                                             |    1 | 115               | [Source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)                       |
| ლაგამი | bridle                                              |    1 | 88                | [Source](https://en.wiktionary.org/w/index.php?title=ლაგამი&oldid=91776622)                     |
| ლავა   | lava                                                |    2 | 95, 209           | [Source](https://en.wiktionary.org/w/index.php?title=ლავა&oldid=84099414)                       |
| ლავაში | lavash flatbread                                    |    1 | 250               | [Source](https://en.wiktionary.org/w/index.php?title=ლავაში&oldid=84116412)                     |
| ლაზერი | laser                                               |    1 | 66                | [Source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416)                     |
| ლაიმი  | lime (fruit)                                        |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)                      |
| ლამა   | llama                                               |    2 | 93, 208           | [Source](https://en.wiktionary.org/w/index.php?title=ლამა&oldid=84099426)                       |
| ლამაზი | beautiful                                           |    1 | 88                | [Source](https://en.wiktionary.org/w/index.php?title=ლამაზი&oldid=84116431)                     |
| ლამპა  | lamp                                                |    1 | 146               | [Source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)                      |
| ლარი   | lari (Georgian currency)                            |    2 | 77, 231           | [Source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)                       |
| ლაფი   | mud                                                 |    2 | 18, 284           | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%90%E1%83%A4%E1%83%98)                   |
| ლაქა   | spot, stain                                         |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)                       |
| ლაღი   | carefree                                            |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=ლაღი&oldid=90036516)                       |
| ლაჩარი | cowardly                                            |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ლაჩარი&oldid=91726049)                     |
| ლედი   | lady; title                                         |    1 | 67                | [Source](https://en.wiktionary.org/w/index.php?title=ლედი&oldid=88238664)                       |
| ლეიბი  | mattress                                            |    2 | 33, 198           | [Source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)                      |
| ლეკვი  | puppy                                               |    1 | 282               | [Source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)                      |
| ლენტი  | ribbon                                              |    1 | 184               | [Source](https://en.wiktionary.org/w/index.php?title=ლენტი&oldid=84099468)                      |
| ლექსი  | poem                                                |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)                      |
| ლექცია | lecture                                             |    1 | 113               | [Source](https://en.wiktionary.org/w/index.php?title=ლექცია&oldid=88917235)                     |
| ლეღვი  | fig                                                 |    1 | 47                | [Source](https://en.wiktionary.org/w/index.php?title=ლეღვი&oldid=88091333)                      |
| ლიგა   | league                                              |    2 | 88, 226           | [Source](https://en.wiktionary.org/w/index.php?title=ლიგა&oldid=84099491)                       |
| ლინზა  | lens                                                |    1 | 134               | [Source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)                      |
| ლირა   | lira                                                |    2 | 118, 231          | [Source](https://en.wiktionary.org/w/index.php?title=ლირა&oldid=84099516)                       |
| ლიტრი  | litre                                               |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ლიტრი&oldid=84099523)                      |
| ლიფტი  | elevator                                            |    1 | 284               | [Source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)                      |
| ლობიო  | bean                                                |    1 | 17                | [Source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)                      |
| ლოგიკა | logic                                               |    1 | 245               | [Source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159)                     |
| ლოგო   | logo                                                |    1 | 239               | [Source](https://dlab.ug.edu.ge/synonym/detail/12441/ლოგო)                                      |
| ლოდი   | block, rubble                                       |    2 | 53, 169           | [Source](https://en.wiktionary.org/w/index.php?title=ლოდი&oldid=84099538)                       |
| ლოთი   | habitually drunk                                    |    2 | 59, 280           | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%9D%E1%83%97%E1%83%98)                   |
| ლომი   | lion                                                |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)                       |
| ლორდი  | lord; title                                         |    1 | 53                | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%9D%E1%83%A0%E1%83%93%E1%83%98)          |
| ლორი   | ham                                                 |    2 | 71, 249           | [Source](https://en.wiktionary.org/w/index.php?title=ლორი&oldid=84116556)                       |
| ლოქო   | catfish                                             |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=ლოქო&oldid=92197076)                       |
| ლუდი   | beer                                                |    2 | 7, 270            | [Source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)                       |
| ლუკმა  | bite, morsel                                        |    1 | 290               | [Source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)                      |
| ლულა   | barrel of a gun                                     |    1 | 226               | [Source](https://en.wiktionary.org/w/index.php?title=ლულა&oldid=84103557)                       |
| ლურჯი  | blue                                                |    1 | 53                | [Source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)                      |
| ლუქი   | sealing wax                                         |    2 | 20, 249           | [Source](https://www.ganmarteba.ge/word/%E1%83%9A%E1%83%A3%E1%83%A5%E1%83%98)                   |
| ლუწი   | even                                                |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)                       |
| მაგარი | hard, strong                                        |    1 | 223               | [Source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421)                     |
| მაგია  | magic                                               |    1 | 88                | [Source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)                      |
| მაგიდა | table                                               |    1 | 68                | [Source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591)                     |
| მადა   | appetite, stomach                                   |    1 | 63                | [Source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)                       |
| მადლი  | kindness, grace                                     |    1 | 227               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%93%E1%83%9A%E1%83%98)          |
| მაზლი  | husband's brother                                   |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=მაზლი&oldid=84608836)                      |
| მაისი  | May                                                 |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)                      |
| მაკე   | pregnant; of an animal                              |    2 | 48, 290           | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%99%E1%83%94)                   |
| მალა   | vertebra                                            |    1 | 208               | [Source](https://en.wiktionary.org/w/index.php?title=მალა&oldid=91725189)                       |
| მალე   | soon                                                |    2 | 52, 128           | [Source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)                       |
| მამა   | father                                              |    1 | 93                | [Source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)                       |
| მამალი | rooster                                             |    1 | 93                | [Source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460)                     |
| მამიდა | paternal aunt                                       |    1 | 257               | [Source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651)                     |
| მამრი  | male animal                                         |    1 | 80                | [Source](https://en.wiktionary.org/w/index.php?title=მამრი&oldid=84116656)                      |
| მანგო  | mango                                               |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)                      |
| მანია  | mania                                               |    2 | 63, 293           | [Source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)                      |
| მარაგი | reserve; stockpile                                  |    1 | 68                | [Source](https://en.wiktionary.org/w/index.php?title=მარაგი&oldid=84116683)                     |
| მარანი | wine cellar                                         |    1 | 293               | [Source](https://en.wiktionary.org/w/index.php?title=მარანი&oldid=84116688)                     |
| მარაო  | hand fan                                            |    1 | 221               | [Source](https://en.wiktionary.org/w/index.php?title=მარაო&oldid=92945174)                      |
| მარკა  | postage stamp                                       |    1 | 197               | [Source](https://en.wiktionary.org/w/index.php?title=მარკა&oldid=84099669)                      |
| მარტი  | March                                               |    1 | 195               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98)          |
| მარტო  | alone                                               |    1 | 281               | [Source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)                      |
| მარში  | march                                               |    1 | 251               | [Source](https://en.wiktionary.org/w/index.php?title=მარში&oldid=84099689)                      |
| მარცხი | failure; defeat                                     |    1 | 258               | [Source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693)                     |
| მასა   | mass                                                |    2 | 5, 208            | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A1%E1%83%90)                   |
| მასრა  | spool                                               |    1 | 103               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A1%E1%83%A0%E1%83%90)          |
| მატლი  | maggot, larva                                       |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=მატლი&oldid=84099718)                      |
| მატჩი  | sports match                                        |    1 | 90                | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A2%E1%83%A9%E1%83%98)          |
| მაუსი  | computer mouse                                      |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=მაუსი&oldid=84116767)                      |
| მაფია  | mafia                                               |    1 | 93                | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A4%E1%83%98%E1%83%90)          |
| მაჩვი  | badger                                              |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=მაჩვი&oldid=84116792)                      |
| მახე   | trap                                                |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)                       |
| მაჯა   | wrist                                               |    2 | 30, 293           | [Source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)                       |
| მგელი  | wolf                                                |    1 | 78                | [Source](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)                      |
| მდელო  | meadow                                              |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=მდელო&oldid=84116820)                      |
| მედალი | medal                                               |    1 | 128               | [Source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774)                     |
| მედია  | media                                               |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)                      |
| მელა   | fox                                                 |    2 | 41, 251           | [Source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)                       |
| მენიუ  | menu                                                |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)                      |
| მენჯი  | pelvis                                              |    1 | 30                | [Source](https://en.wiktionary.org/w/index.php?title=მენჯი&oldid=84116881)                      |
| მერი   | mayor                                               |    2 | 57, 254           | [Source](https://en.wiktionary.org/w/index.php?title=მერი&oldid=84099841)                       |
| მერია  | city administration                                 |    1 | 140               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%94%E1%83%A0%E1%83%98%E1%83%90)          |
| მეტალი | metal                                               |    1 | 41                | [Source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455)                     |
| მეტრი  | metre                                               |    1 | 127               | [Source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)                      |
| მეტრო  | metro                                               |    1 | 281               | [Source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)                      |
| მზა    | ready                                               |    2 | 12, 141           | [Source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)                        |
| მზე    | Sun                                                 |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)                        |
| მზიანი | sunny                                               |    1 | 98                | [Source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151)                     |
| მთა    | mountain, hill                                      |    3 | 5, 130, 257       | [Source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)                        |
| მთელი  | whole; entire                                       |    1 | 198               | [Source](https://en.wiktionary.org/w/index.php?title=მთელი&oldid=91740782)                      |
| მთვარე | moon                                                |    1 | 140               | [Source](https://en.wiktionary.org/w/index.php?title=მთვარე&oldid=92701984)                     |
| მიდამო | surrounding area                                    |    1 | 97                | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%98%E1%83%93%E1%83%90%E1%83%9B%E1%83%9D) |
| მიზანი | goal; target                                        |    1 | 98                | [Source](https://en.wiktionary.org/w/index.php?title=მიზანი&oldid=84117018)                     |
| მითი   | myth                                                |    1 | 126               | [Source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)                       |
| მილი   | tube; mile                                          |    2 | 70, 215           | [Source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)                       |
| მინა   | glass (material)                                    |    2 | 63, 293           | [Source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)                       |
| მინუსი | minus                                               |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=მინუსი&oldid=84099990)                     |
| მისია  | mission                                             |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)                      |
| მიწა   | earth, soil                                         |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)                       |
| მიჯნა  | boundary                                            |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=მიჯნა&oldid=85056051)                      |
| მკაცრი | strict                                              |    1 | 258               | [Source](https://en.wiktionary.org/w/index.php?title=მკაცრი&oldid=84088882)                     |
| მკლავი | arm                                                 |    1 | 48                | [Source](https://en.wiktionary.org/w/index.php?title=მკლავი&oldid=90012056)                     |
| მლაშე  | salty                                               |    1 | 251               | [Source](https://en.wiktionary.org/w/index.php?title=მლაშე&oldid=75374767)                      |
| მოდა   | fashion                                             |    1 | 227               | [Source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)                       |
| მოდელი | model                                               |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844)                     |
| მოკლე  | short                                               |    1 | 290               | [Source](https://en.wiktionary.org/w/index.php?title=მოკლე&oldid=88449850)                      |
| მოლარე | cashier                                             |    1 | 52                | [Source](https://en.wiktionary.org/w/index.php?title=მოლარე&oldid=88326243)                     |
| მონა   | slave                                               |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)                       |
| მონეტა | coin                                                |    1 | 281               | [Source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079)                     |
| მორევი | whirlpool                                           |    1 | 34                | [Source](https://en.wiktionary.org/w/index.php?title=მორევი&oldid=86570234)                     |
| მორი   | log, timber                                         |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)                       |
| მოწამე | martyr                                              |    1 | 165               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%AC%E1%83%90%E1%83%9B%E1%83%94) |
| მოწმე  | witness                                             |    1 | 165               | [Source](https://en.wiktionary.org/w/index.php?title=მოწმე&oldid=84100153)                      |
| მოხუცი | elderly person                                      |    1 | 232               | [Source](https://en.wiktionary.org/w/index.php?title=მოხუცი&oldid=88799725)                     |
| მჟავა  | acid                                                |    1 | 79                | [Source](https://en.wiktionary.org/w/index.php?title=მჟავა&oldid=84117295)                      |
| მჟავე  | sour                                                |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=მჟავე&oldid=84417167)                      |
| მრევლი | congregation                                        |    1 | 193               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A0%E1%83%94%E1%83%95%E1%83%9A%E1%83%98) |
| მსაჯი  | referee                                             |    1 | 181               | [Source](https://en.wiktionary.org/w/index.php?title=მსაჯი&oldid=84100170)                      |
| მსუყე  | rich, heavy (food)                                  |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=მსუყე&oldid=84088905)                      |
| მსხალი | pear                                                |    1 | 19                | [Source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341)                     |
| მტერი  | enemy                                               |    1 | 127               | [Source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)                      |
| მტვერი | dust                                                |    1 | 34                | [Source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826)                     |
| მტრედი | pigeon, dove                                        |    1 | 127               | [Source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351)                     |
| მუდამ  | always                                              |    1 | 97                | [Source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)                      |
| მუზა   | muse                                                |    1 | 131               | [Source](https://en.wiktionary.org/w/index.php?title=მუზა&oldid=84100186)                       |
| მუმია  | mummy                                               |    1 | 97                | [Source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)                      |
| მური   | soot                                                |    1 | 22                | [Source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)                       |
| მუსიკა | music                                               |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574)                     |
| მუქი   | dark                                                |    1 | 22                | [Source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)                       |
| მუყაო  | cardboard                                           |    1 | 37                | [Source](https://en.wiktionary.org/w/index.php?title=მუყაო&oldid=84100207)                      |
| მუშა   | worker                                              |    1 | 14                | [Source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)                       |
| მუშტი  | fist                                                |    1 | 14                | [Source](https://en.wiktionary.org/w/index.php?title=მუშტი&oldid=84117401)                      |
| მუჭა   | handful                                             |    1 | 146               | [Source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%A3%E1%83%AD%E1%83%90)                   |
| მუხა   | oak                                                 |    2 | 32, 260           | [Source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)                       |
| მუხლი  | knee                                                |    1 | 70                | [Source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)                      |
| მყარი  | solid; stable                                       |    1 | 80                | [Source](https://en.wiktionary.org/w/index.php?title=მყარი&oldid=84090626)                      |
| მყესი  | tendon                                              |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=მყესი&oldid=84100227)                      |
| მყიფე  | fragile                                             |    1 | 242               | [Source](https://en.wiktionary.org/w/index.php?title=მყიფე&oldid=75374822)                      |
| მშიერი | hungry                                              |    1 | 254               | [Source](https://en.wiktionary.org/w/index.php?title=მშიერი&oldid=84088912)                     |
| მშრალი | dry                                                 |    1 | 251               | [Source](https://en.wiktionary.org/w/index.php?title=მშრალი&oldid=84090631)                     |
| მჩატე  | lightweight                                         |    1 | 119               | [Source](https://en.wiktionary.org/w/index.php?title=მჩატე&oldid=75256761)                      |
| მცირე  | small                                               |    1 | 193               | [Source](https://en.wiktionary.org/w/index.php?title=მცირე&oldid=92228054)                      |
| მძაფრი | intense, pungent                                    |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=მძაფრი&oldid=92779934)                     |
| მძივი  | bead                                                |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=მძივი&oldid=84100240)                      |
| მძღოლი | driver                                              |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=მძღოლი&oldid=88648707)                     |
| მწარე  | bitter; spicy                                       |    1 | 165               | [Source](https://en.wiktionary.org/w/index.php?title=მწარე&oldid=91715973)                      |
| მწერი  | insect                                              |    1 | 242               | [Source](https://en.wiktionary.org/w/index.php?title=მწერი&oldid=91784205)                      |
| მწვადი | grilled meat on a skewer                            |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=მწვადი&oldid=87884655)                     |
| მწვანე | green                                               |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780)                     |
| მწირი  | scarce; scanty                                      |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=მწირი&oldid=85017924)                      |
| მწიფე  | ripe                                                |    1 | 242               | [Source](https://en.wiktionary.org/w/index.php?title=მწიფე&oldid=84088916)                      |
| მჭადი  | Georgian cornbread                                  |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=მჭადი&oldid=84117468)                      |
| მჭლე   | lean (meat)                                         |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=მჭლე&oldid=81626414)                       |
| მხარე  | side; region                                        |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)                      |
| მხარი  | shoulder                                            |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)                      |
| მხეცი  | beast                                               |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)                      |
| ნაბადი | felt cloak                                          |    1 | 237               | [Source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951)                     |
| ნადიმი | feast                                               |    1 | 63                | [Source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506)                     |
| ნადირი | wild animal                                         |    1 | 288               | [Source](https://en.wiktionary.org/w/index.php?title=ნადირი&oldid=84117507)                     |
| ნავთი  | kerosene                                            |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=ნავთი&oldid=84117508)                      |
| ნავი   | boat                                                |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)                       |
| ნაზი   | gentle; tender                                      |    1 | 134               | [Source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)                       |
| ნაკლი  | defect                                              |    1 | 168               | [Source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)                      |
| ნალი   | horseshoe                                           |    2 | 134, 255          | [Source](https://en.wiktionary.org/w/index.php?title=ნალი&oldid=84117544)                       |
| ნამი   | dew, morning dew                                    |    2 | 30, 236           | [Source](https://en.wiktionary.org/w/index.php?title=ნამი&oldid=91716533)                       |
| ნაოჭი  | wrinkle                                             |    1 | 192               | [Source](https://en.wiktionary.org/w/index.php?title=ნაოჭი&oldid=84100297)                      |
| ნარდი  | backgammon                                          |    1 | 54                | [Source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)                      |
| ნატეხი | fragment, shard                                     |    1 | 61                | [Source](https://en.wiktionary.org/w/index.php?title=ნატეხი&oldid=84100309)                     |
| ნაღდი  | cash                                                |    1 | 237               | [Source](https://en.wiktionary.org/w/index.php?title=ნაღდი&oldid=84117574)                      |
| ნაყოფი | fruit of a plant                                    |    1 | 246               | [Source](https://en.wiktionary.org/w/index.php?title=ნაყოფი&oldid=89105168)                     |
| ნაშთი  | remainder                                           |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=ნაშთი&oldid=84100318)                      |
| ნაძვი  | spruce                                              |    1 | 201               | [Source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)                      |
| ნაწილი | part; portion                                       |    1 | 255               | [Source](https://en.wiktionary.org/w/index.php?title=ნაწილი&oldid=85068636)                     |
| ნება   | will                                                |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=ნება&oldid=84096905)                       |
| ნეკნი  | rib                                                 |    1 | 235               | [Source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)                      |
| ნელი   | slow                                                |    2 | 86, 184           | [Source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)                       |
| ნემსი  | needle                                              |    1 | 170               | [Source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)                      |
| ნეონი  | neon                                                |    1 | 235               | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%94%E1%83%9D%E1%83%9C%E1%83%98)          |
| ნერგი  | sapling                                             |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=ნერგი&oldid=91680451)                      |
| ნერვი  | nerve                                               |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)                      |
| ნესვი  | melon                                               |    1 | 243               | [Source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)                      |
| ნესტი  | dampness                                            |    1 | 184               | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%94%E1%83%A1%E1%83%A2%E1%83%98)          |
| ნესტო  | nostril                                             |    1 | 50                | [Source](https://en.wiktionary.org/w/index.php?title=ნესტო&oldid=90329906)                      |
| ნეფე   | bridegroom                                          |    1 | 86                | [Source](https://en.wiktionary.org/w/index.php?title=ნეფე&oldid=84100382)                       |
| ნიავი  | breeze                                              |    2 | 98, 211           | [Source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%90%E1%83%95%E1%83%98)          |
| ნივთი  | thing; object                                       |    1 | 139               | [Source](https://en.wiktionary.org/w/index.php?title=ნივთი&oldid=92215809)                      |
| ნიორი  | garlic                                              |    1 | 203               | [Source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)                      |
| ნისლი  | fog, mist                                           |    1 | 184               | [Source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)                      |
| ნიშა   | niche                                               |    2 | 64, 236           | [Source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)                       |
| ნიჭი   | talent                                              |    1 | 192               | [Source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)                       |
| ნორმა  | norm; standard                                      |    2 | 108, 281          | [Source](https://en.wiktionary.org/w/index.php?title=ნორმა&oldid=87787628)                      |
| ნოხი   | rug                                                 |    1 | 61                | [Source](https://en.wiktionary.org/w/index.php?title=ნოხი&oldid=84100426)                       |
| ნუგეში | comfort, consolation                                |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=ნუგეში&oldid=84117723)                     |
| ნუკრი  | fawn                                                |    1 | 29                | [Source](https://en.wiktionary.org/w/index.php?title=ნუკრი&oldid=84100428)                      |
| ნული   | zero                                                |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)                       |
| ნუში   | almond                                              |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)                       |
| ობი    | mould                                               |    2 | 17, 150           | [Source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)                        |
| ობოლი  | orphan                                              |    2 | 17, 248           | [Source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)                      |
| ოდა    | ode; traditional house                              |    2 | 97, 289           | [Source](https://en.wiktionary.org/w/index.php?title=ოდა&oldid=87900914)                        |
| ოვალი  | oval                                                |    1 | 13                | [Source](https://en.wiktionary.org/w/index.php?title=ოვალი&oldid=84100444)                      |
| ოზონი  | ozone                                               |    1 | 134               | [Source](https://en.wiktionary.org/w/index.php?title=ოზონი&oldid=88005804)                      |
| ოთახი  | room, chamber                                       |    1 | 11                | [Source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)                      |
| ოინი   | prank, trick                                        |    1 | 203               | [Source](https://en.wiktionary.org/w/index.php?title=ოინი&oldid=84117786)                       |
| ოლქი   | district                                            |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=ოლქი&oldid=84117798)                       |
| ომი    | war                                                 |    2 | 34, 232           | [Source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)                        |
| ონკანი | tap; faucet                                         |    1 | 238               | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%9C%E1%83%99%E1%83%90%E1%83%9C%E1%83%98) |
| ოპერა  | opera                                               |    1 | 271               | [Source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)                      |
| ორბიტა | orbit                                               |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483)                     |
| ორგანო | organ                                               |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=ორგანო&oldid=84103241)                     |
| ორდენი | decoration, medal                                   |    1 | 171               | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A0%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
| ორთქლი | steam                                               |    1 | 249               | [Source](https://en.wiktionary.org/w/index.php?title=ორთქლი&oldid=87900924)                     |
| ორმო   | pit                                                 |    1 | 108               | [Source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)                       |
| ორსული | pregnant                                            |    1 | 279               | [Source](https://en.wiktionary.org/w/index.php?title=ორსული&oldid=84117860)                     |
| ოსი    | Ossetian person                                     |    2 | 9, 247            | [Source](https://en.wiktionary.org/w/index.php?title=ოსი&oldid=84117870)                        |
| ოფისი  | office                                              |    1 | 9                 | [Source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)                      |
| ოფლი   | sweat                                               |    2 | 18, 239           | [Source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)                       |
| ოქმი   | official written record                             |    1 | 162               | [Source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%98)                   |
| ოქრო   | gold                                                |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)                       |
| ოჯახი  | family                                              |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=ოჯახი&oldid=92084204)                      |
| პაკეტი | packet                                              |    1 | 183               | [Source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015)                     |
| პალმა  | palm tree                                           |    1 | 146               | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%90%E1%83%9A%E1%83%9B%E1%83%90)          |
| პალტო  | overcoat                                            |    1 | 220               | [Source](https://en.wiktionary.org/w/index.php?title=პალტო&oldid=88603382)                      |
| პანდა  | panda                                               |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)                      |
| პაპა   | grandfather                                         |    1 | 122               | [Source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)                       |
| პარკი  | plastic bag                                         |    1 | 231               | [Source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)                      |
| პარტია | political party                                     |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=პარტია&oldid=88896345)                     |
| პასტა  | paste                                               |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)                      |
| პაუზა  | pause                                               |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)                      |
| პეშვი  | cupped hand                                         |    1 | 292               | [Source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%94%E1%83%A8%E1%83%95%E1%83%98)          |
| პიკი   | peak                                                |    1 | 189               | [Source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)                       |
| პირი   | mouth                                               |    2 | 28, 264           | [Source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)                       |
| პიტნა  | mint, spearmint                                     |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)                      |
| პიურე  | purée                                               |    1 | 16                | [Source](https://en.wiktionary.org/w/index.php?title=პიურე&oldid=88450340)                      |
| პიცა   | pizza                                               |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)                       |
| პლაჟი  | beach                                               |    1 | 231               | [Source](https://en.wiktionary.org/w/index.php?title=პლაჟი&oldid=75423986)                      |
| პლატო  | plateau                                             |    1 | 220               | [Source](https://en.wiktionary.org/w/index.php?title=პლატო&oldid=84100749)                      |
| პლედი  | plaid blanket                                       |    1 | 169               | [Source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)                      |
| პლუსი  | plus                                                |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)                      |
| პოეტი  | poet                                                |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)                      |
| პოზა   | pose                                                |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)                       |
| პოკერი | poker; card game                                    |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=პოკერი&oldid=84100777)                     |
| პონი   | pony                                                |    1 | 171               | [Source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)                       |
| პორტი  | port                                                |    1 | 121               | [Source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)                      |
| პოსტი  | post                                                |    1 | 28                | [Source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)                      |
| პრესა  | press; news media                                   |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=პრესა&oldid=84174033)                      |
| პრიზი  | prize                                               |    1 | 264               | [Source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)                      |
| პროზა  | prose                                               |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=პროზა&oldid=84100873)                      |
| პულსი  | pulse                                               |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)                      |
| პულტი  | remote control                                      |    1 | 189               | [Source](https://en.wiktionary.org/w/index.php?title=პულტი&oldid=84118223)                      |
| პუმა   | puma                                                |    1 | 146               | [Source](https://en.wiktionary.org/w/index.php?title=პუმა&oldid=85689336)                       |
| პური   | bread                                               |    2 | 16, 264           | [Source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)                       |
| ჟანგი  | rust                                                |    1 | 202               | [Source](https://en.wiktionary.org/w/index.php?title=ჟანგი&oldid=92228064)                      |
| ჟანრი  | genre                                               |    1 | 202               | [Source](https://en.wiktionary.org/w/index.php?title=ჟანრი&oldid=87941020)                      |
| ჟესტი  | gesture                                             |    1 | 105               | [Source](https://en.wiktionary.org/w/index.php?title=ჟესტი&oldid=84100938)                      |
| ჟიური  | jury                                                |    1 | 286               | [Source](https://www.ganmarteba.ge/word/%E1%83%9F%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98)          |
| ჟოლო   | raspberry                                           |    1 | 17                | [Source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)                       |
| რაგბი  | rugby                                               |    1 | 65                | [Source](https://en.wiktionary.org/w/index.php?title=რაგბი&oldid=84096743)                      |
| რადიო  | radio                                               |    1 | 58                | [Source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)                      |
| რაზმი  | squad                                               |    1 | 12                | [Source](https://en.wiktionary.org/w/index.php?title=რაზმი&oldid=84118264)                      |
| რაინდი | knight                                              |    1 | 288               | [Source](https://en.wiktionary.org/w/index.php?title=რაინდი&oldid=86397598)                     |
| რაიონი | district                                            |    1 | 203               | [Source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151)                     |
| რაკეტა | rocket                                              |    1 | 252               | [Source](https://en.wiktionary.org/w/index.php?title=რაკეტა&oldid=88002860)                     |
| რალი   | motor rally                                         |    2 | 66, 251           | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%90%E1%83%9A%E1%83%98)                   |
| რანგი  | rank                                                |    1 | 202               | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%90%E1%83%9C%E1%83%92%E1%83%98)          |
| რანჩო  | ranch                                               |    1 | 241               | [Source](https://en.wiktionary.org/w/index.php?title=რანჩო&oldid=84100968)                      |
| რასა   | race (human group)                                  |    2 | 100, 230          | [Source](https://en.wiktionary.org/w/index.php?title=რასა&oldid=68803154)                       |
| რაუნდი | round                                               |    1 | 268               | [Source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282)                     |
| რაფა   | windowsill                                          |    2 | 1, 275            | [Source](https://en.wiktionary.org/w/index.php?title=რაფა&oldid=92486505)                       |
| რბილი  | soft                                                |    1 | 33                | [Source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)                      |
| რგოლი  | ring                                                |    2 | 43, 239           | [Source](https://en.wiktionary.org/w/index.php?title=რგოლი&oldid=84118289)                      |
| რეისი  | scheduled journey                                   |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)                      |
| რელსი  | rail                                                |    1 | 31                | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%94%E1%83%9A%E1%83%A1%E1%83%98)          |
| რეპი   | rap music                                           |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)                       |
| რთული  | difficult; complex                                  |    1 | 249               | [Source](https://en.wiktionary.org/w/index.php?title=რთული&oldid=84118321)                      |
| რიგი   | row; queue                                          |    2 | 87, 172           | [Source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)                       |
| რინგი  | boxing ring                                         |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=რინგი&oldid=84118328)                      |
| რისკი  | risk                                                |    1 | 138               | [Source](https://en.wiktionary.org/w/index.php?title=რისკი&oldid=84118334)                      |
| რიტმი  | beat, cadence, rhythm                               |    1 | 261               | [Source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)                      |
| რიყე   | stony riverbank                                     |    2 | 16, 291           | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%98%E1%83%A7%E1%83%94)                   |
| რიცხვი | number; day of the month                            |    1 | 283               | [Source](https://en.wiktionary.org/w/index.php?title=რიცხვი&oldid=85067546)                     |
| რკალი  | hoop, ring                                          |    1 | 245               | [Source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)                      |
| რკინა  | iron (metal)                                        |    1 | 62                | [Source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)                      |
| რკო    | acorn                                               |    2 | 2, 245            | [Source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)                        |
| რობოტი | robot                                               |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728)                     |
| როკი   | rock music                                          |    2 | 2, 245            | [Source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)                       |
| როლი   | role                                                |    1 | 239               | [Source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)                       |
| რომბი  | rhombus                                             |    1 | 57                | [Source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%9D%E1%83%9B%E1%83%91%E1%83%98)          |
| რომი   | rum                                                 |    2 | 34, 132           | [Source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)                       |
| რუკა   | map                                                 |    2 | 42, 294           | [Source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)                       |
| რუხი   | gray/grey                                           |    2 | 96, 268           | [Source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)                       |
| რუჯი   | suntan                                              |    1 | 56                | [Source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)                       |
| რქა    | horn, antler                                        |    1 | 224               | [Source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)                        |
| რძალი  | daughter-in-law; sister-in-law                      |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=რძალი&oldid=91716433)                      |
| რძე    | milk                                                |    2 | 10, 116           | [Source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)                        |
| საათი  | clock; hour                                         |    1 | 144               | [Source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)                      |
| საამო  | pleasant                                            |    1 | 103               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%90%E1%83%9B%E1%83%9D)          |
| საბანი | blanket                                             |    1 | 38                | [Source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633)                     |
| საბჭო  | council                                             |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=საბჭო&oldid=88896363)                      |
| სადავე | rein                                                |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=სადავე&oldid=92479636)                     |
| სავსე  | full                                                |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=სავსე&oldid=81821895)                      |
| საზომი | measuring instrument                                |    1 | 272               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%96%E1%83%9D%E1%83%9B%E1%83%98) |
| სათუთი | delicate, tender                                    |    1 | 129               | [Source](https://en.wiktionary.org/w/index.php?title=სათუთი&oldid=90049130)                     |
| საიტი  | website                                             |    2 | 8, 295            | [Source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)                      |
| საკიდი | clothes hanger                                      |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=საკიდი&oldid=84101182)                     |
| საკმაო | sufficient                                          |    1 | 103               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%99%E1%83%9B%E1%83%90%E1%83%9D) |
| სალონი | salon                                               |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194)                     |
| სამბო  | sambo; wrestling sport                              |    1 | 272               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%9B%E1%83%91%E1%83%9D)          |
| სარი   | stake                                               |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=სარი&oldid=91725833)                       |
| სარკე  | looking-glass, mirror                               |    1 | 25                | [Source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)                      |
| საუნა  | sauna                                               |    1 | 100               | [Source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)                      |
| საქმე  | work, business                                      |    1 | 119               | [Source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)                      |
| საღი   | healthy, sensible                                   |    1 | 186               | [Source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)                       |
| საშვი  | entry pass                                          |    1 | 236               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A8%E1%83%95%E1%83%98)          |
| საცერი | sieve                                               |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=საცერი&oldid=84118875)                     |
| საწოლი | bed                                                 |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101)                     |
| საჭირო | necessary                                           |    1 | 175               | [Source](https://en.wiktionary.org/w/index.php?title=საჭირო&oldid=88605887)                     |
| სახე   | face                                                |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)                       |
| სახლი  | home, house, dwelling                               |    1 | 19                | [Source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)                      |
| სევდა  | sadness; sorrow                                     |    1 | 200               | [Source](https://en.wiktionary.org/w/index.php?title=სევდა&oldid=92686510)                      |
| სერია  | series                                              |    1 | 137               | [Source](https://en.wiktionary.org/w/index.php?title=სერია&oldid=87787607)                      |
| სესია  | session                                             |    1 | 207               | [Source](https://en.wiktionary.org/w/index.php?title=სესია&oldid=84101372)                      |
| სესხი  | loan                                                |    1 | 179               | [Source](https://en.wiktionary.org/w/index.php?title=სესხი&oldid=84101374)                      |
| სექტა  | sect                                                |    1 | 119               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%A5%E1%83%A2%E1%83%90)          |
| სვავი  | vulture                                             |    1 | 229               | [Source](https://en.wiktionary.org/w/index.php?title=სვავი&oldid=87901139)                      |
| სვანი  | person from Svaneti                                 |    1 | 236               | [Source](https://en.wiktionary.org/w/index.php?title=სვანი&oldid=84118965)                      |
| სველი  | wet                                                 |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)                      |
| სვეტი  | column                                              |    1 | 105               | [Source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)                      |
| სია    | list                                                |    4 | 19, 105, 181, 256 | [Source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)                        |
| სიგანე | width                                               |    1 | 243               | [Source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409)                     |
| სითბო  | warmth                                              |    1 | 59                | [Source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)                      |
| სითხე  | liquid                                              |    1 | 163               | [Source](https://en.wiktionary.org/w/index.php?title=სითხე&oldid=84119007)                      |
| სილა   | sand; slap                                          |    2 | 85, 229           | [Source](https://en.wiktionary.org/w/index.php?title=სილა&oldid=81821960)                       |
| სიმი   | string                                              |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)                       |
| სინჯი  | sample                                              |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=სინჯი&oldid=84119065)                      |
| სიო    | breeze                                              |    4 | 28, 104, 179, 279 | [Source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)                        |
| სისქე  | thickness                                           |    1 | 179               | [Source](https://en.wiktionary.org/w/index.php?title=სისქე&oldid=84119083)                      |
| სიტყვა | word                                                |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915)                     |
| სიცივე | coldness, frigidity                                 |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113)                     |
| სიცხე  | heat; fever                                         |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=სიცხე&oldid=84119122)                      |
| სიძე   | son-in-law; groom                                   |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)                       |
| სკამი  | chair                                               |    1 | 187               | [Source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)                      |
| სკოლა  | school                                              |    1 | 85                | [Source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)                      |
| სოდა   | soda                                                |    1 | 99                | [Source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)                       |
| სოიო   | soy                                                 |    2 | 59, 279           | [Source](https://en.wiktionary.org/w/index.php?title=სოიო&oldid=84101634)                       |
| სოკო   | mushroom                                            |    1 | 85                | [Source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)                       |
| სოლო   | musical solo                                        |    1 | 85                | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9D%E1%83%9A%E1%83%9D)                   |
| სონეტი | sonnet                                              |    1 | 50                | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%9D%E1%83%9C%E1%83%94%E1%83%A2%E1%83%98) |
| სორო   | burrow                                              |    1 | 279               | [Source](https://en.wiktionary.org/w/index.php?title=სორო&oldid=88091310)                       |
| სოუსი  | sauce                                               |    1 | 104               | [Source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)                      |
| სპა    | spa                                                 |    1 | 230               | [Source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)                        |
| სპილო  | elephant                                            |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)                      |
| სპირტი | alcohol                                             |    1 | 28                | [Source](https://en.wiktionary.org/w/index.php?title=სპირტი&oldid=87480489)                     |
| სპორტი | sport                                               |    1 | 28                | [Source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224)                     |
| სრული  | complete                                            |    1 | 279               | [Source](https://en.wiktionary.org/w/index.php?title=სრული&oldid=84091028)                      |
| სტადია | stage, phase                                        |    1 | 256               | [Source](https://en.wiktionary.org/w/index.php?title=სტადია&oldid=88171626)                     |
| სტაჟი  | length of work experience                           |    1 | 105               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9F%E1%83%98)          |
| სტილი  | style                                               |    1 | 184               | [Source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)                      |
| სტიქია | natural disaster                                    |    1 | 295               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%98%E1%83%A5%E1%83%98%E1%83%90) |
| სუკი   | tenderloin                                          |    1 | 138               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A3%E1%83%99%E1%83%98)                   |
| სული   | spirit, ghost                                       |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)                       |
| სუნელი | spice; seasoning                                    |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=სუნელი&oldid=84103259)                     |
| სუნი   | smell                                               |    2 | 74, 170           | [Source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)                       |
| სურდო  | runny nose, head cold                               |    1 | 151               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%93%E1%83%9D)          |
| სუსტი  | weak                                                |    1 | 104               | [Source](https://en.wiktionary.org/w/index.php?title=სუსტი&oldid=89906555)                      |
| სუფთა  | clean                                               |    1 | 265               | [Source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)                      |
| სუფრა  | tablecloth, feast                                   |    1 | 100               | [Source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)                      |
| სქელი  | thick                                               |    1 | 31                | [Source](https://en.wiktionary.org/w/index.php?title=სქელი&oldid=91740769)                      |
| სქემა  | diagram                                             |    1 | 119               | [Source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A5%E1%83%94%E1%83%9B%E1%83%90)          |
| სქესი  | sex; gender                                         |    1 | 179               | [Source](https://en.wiktionary.org/w/index.php?title=სქესი&oldid=91012991)                      |
| სცენა  | stage; scene                                        |    1 | 109               | [Source](https://en.wiktionary.org/w/index.php?title=სცენა&oldid=84101771)                      |
| სწორი  | correct; straight                                   |    1 | 247               | [Source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)                      |
| სხივი  | ray                                                 |    1 | 278               | [Source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)                      |
| ტაბუ   | taboo                                               |    1 | 142               | [Source](https://en.wiktionary.org/w/index.php?title=ტაბუ&oldid=84101781)                       |
| ტაიმი  | half of a sports match                              |    1 | 90                | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%90%E1%83%98%E1%83%9B%E1%83%98)          |
| ტალახი | mud                                                 |    1 | 51                | [Source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470)                     |
| ტალღა  | wave                                                |    1 | 51                | [Source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)                      |
| ტანგო  | tango                                               |    1 | 285               | [Source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)                      |
| ტანი   | body                                                |    2 | 61, 211           | [Source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)                       |
| ტანკი  | military tank                                       |    1 | 173               | [Source](https://en.wiktionary.org/w/index.php?title=ტანკი&oldid=88002840)                      |
| ტარი   | handle                                              |    2 | 46, 233           | [Source](https://en.wiktionary.org/w/index.php?title=ტარი&oldid=91725865)                       |
| ტარიფი | tariff; rate                                        |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ტარიფი&oldid=84101808)                     |
| ტარო   | corncob                                             |    2 | 60, 281           | [Source](https://en.wiktionary.org/w/index.php?title=ტარო&oldid=84101809)                       |
| ტაფა   | frying pan                                          |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)                       |
| ტაქსი  | taxi                                                |    2 | 112, 295          | [Source](https://en.wiktionary.org/w/index.php?title=ტაქსი&oldid=84119352)                      |
| ტაში   | applause                                            |    2 | 14, 219           | [Source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)                       |
| ტახტი  | ottoman bench                                       |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=ტახტი&oldid=84101822)                      |
| ტბა    | lake                                                |    1 | 143               | [Source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)                        |
| ტემპი  | pace, tempo                                         |    1 | 41                | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%9B%E1%83%9E%E1%83%98)          |
| ტენტი  | awning                                              |    1 | 44                | [Source](https://en.wiktionary.org/w/index.php?title=ტენტი&oldid=84101841)                      |
| ტერფი  | foot                                                |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)                      |
| ტესტი  | test, exam questions                                |    1 | 50                | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%A1%E1%83%A2%E1%83%98)          |
| ტვინი  | brain                                               |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)                      |
| ტივი   | raft                                                |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=ტივი&oldid=92420946)                       |
| ტილო   | canvas, linen                                       |    2 | 6, 220            | [Source](https://en.wiktionary.org/w/index.php?title=ტილო&oldid=84101866)                       |
| ტიპი   | type                                                |    2 | 90, 189           | [Source](https://en.wiktionary.org/w/index.php?title=ტიპი&oldid=64001804)                       |
| ტირაჟი | print run                                           |    1 | 286               | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%98%E1%83%A0%E1%83%90%E1%83%9F%E1%83%98) |
| ტირე   | dash                                                |    2 | 161, 262          | [Source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)                       |
| ტიტა   | tulip                                               |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=ტიტა&oldid=81818591)                       |
| ტიტრი  | caption                                             |    1 | 83                | [Source](https://en.wiktionary.org/w/index.php?title=ტიტრი&oldid=84101877)                      |
| ტკიპა  | mite; tick                                          |    1 | 183               | [Source](https://en.wiktionary.org/w/index.php?title=ტკიპა&oldid=84101889)                      |
| ტოლი   | equal                                               |    2 | 6, 190            | [Source](https://en.wiktionary.org/w/index.php?title=ტოლი&oldid=92197091)                       |
| ტოლმა  | stuffed cabbage or vine leaf                        |    1 | 162               | [Source](https://en.wiktionary.org/w/index.php?title=ტოლმა&oldid=84187254)                      |
| ტომატი | tomato concentrate                                  |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=ტომატი&oldid=89872964)                     |
| ტომი   | tribe; volume                                       |    1 | 261               | [Source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)                       |
| ტონა   | ton                                                 |    2 | 61, 285           | [Source](https://en.wiktionary.org/w/index.php?title=ტონა&oldid=84101895)                       |
| ტონი   | tone                                                |    2 | 50, 285           | [Source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)                       |
| ტორტი  | tart                                                |    1 | 195               | [Source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)                      |
| ტოტი   | branch, twig                                        |    2 | 50, 195           | [Source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)                       |
| ტრიო   | trio                                                |    2 | 121, 261          | [Source](https://en.wiktionary.org/w/index.php?title=ტრიო&oldid=84101947)                       |
| ტუზი   | ace (card)                                          |    1 | 104               | [Source](https://en.wiktionary.org/w/index.php?title=ტუზი&oldid=84101964)                       |
| ტურა   | jackal                                              |    1 | 60                | [Source](https://en.wiktionary.org/w/index.php?title=ტურა&oldid=91715083)                       |
| ტური   | round                                               |    2 | 60, 286           | [Source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)                       |
| ტუში   | drawing ink                                         |    1 | 6                 | [Source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%A3%E1%83%A8%E1%83%98/1)                 |
| ტუჩი   | lip                                                 |    1 | 112               | [Source](https://en.wiktionary.org/w/index.php?title=ტუჩი&oldid=89949141)                       |
| ტყავი  | leather                                             |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)                      |
| ტყე    | forest, wood                                        |    2 | 102, 269          | [Source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)                        |
| ტყვე   | captive                                             |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)                       |
| ტყვია  | bullet, lead                                        |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)                      |
| ტყუპი  | twin                                                |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)                      |
| უაზრო  | pointless; meaningless                              |    1 | 160               | [Source](https://en.wiktionary.org/w/index.php?title=უაზრო&oldid=75687201)                      |
| უარი   | refusal                                             |    2 | 49, 286           | [Source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)                       |
| უბანი  | neighborhood                                        |    1 | 267               | [Source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)                      |
| უბე    | bay; bosom                                          |    2 | 7, 240            | [Source](https://en.wiktionary.org/w/index.php?title=უბე&oldid=84119518)                        |
| უგულო  | heartless                                           |    1 | 43                | [Source](https://en.wiktionary.org/w/index.php?title=უგულო&oldid=88343102)                      |
| უდავო  | undeniable                                          |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=უდავო&oldid=28797786)                      |
| უეცარი | sudden                                              |    1 | 244               | [Source](https://en.wiktionary.org/w/index.php?title=უეცარი&oldid=84089033)                     |
| უვიცი  | ignorant, uninformed                                |    1 | 36                | [Source](https://en.wiktionary.org/w/index.php?title=უვიცი&oldid=84088542)                      |
| უზადო  | flawless                                            |    1 | 114               | [Source](https://en.wiktionary.org/w/index.php?title=უზადო&oldid=84119546)                      |
| უთო    | iron for clothes                                    |    2 | 115, 265          | [Source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)                        |
| უკან   | back; backwards                                     |    2 | 29, 168           | [Source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)                       |
| ულვაში | mustache                                            |    1 | 259               | [Source](https://en.wiktionary.org/w/index.php?title=ულვაში&oldid=85065856)                     |
| ულუფა  | portion; serving                                    |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=ულუფა&oldid=84102036)                      |
| უმი    | raw, uncooked                                       |    2 | 14, 232           | [Source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)                        |
| უნაკლო | flawless                                            |    1 | 168               | [Source](https://en.wiktionary.org/w/index.php?title=უნაკლო&oldid=84119652)                     |
| უნარი  | ability                                             |    1 | 29                | [Source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)                      |
| უნიჭო  | untalented                                          |    1 | 115               | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%9C%E1%83%98%E1%83%AD%E1%83%9D)          |
| ურემი  | cartload                                            |    1 | 22                | [Source](https://en.wiktionary.org/w/index.php?title=ურემი&oldid=84102064)                      |
| ურიგო  | unsatisfactory; bad                                 |    1 | 43                | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A0%E1%83%98%E1%83%92%E1%83%9D)          |
| ურიკა  | handcart                                            |    1 | 42                | [Source](https://en.wiktionary.org/w/index.php?title=ურიკა&oldid=84096954)                      |
| ურნა   | urn                                                 |    2 | 29, 294           | [Source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)                       |
| ურო    | hammer                                              |    2 | 37, 221           | [Source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)                        |
| ურყევი | steadfast, firm                                     |    1 | 291               | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A0%E1%83%A7%E1%83%94%E1%83%95%E1%83%98) |
| ურჩი   | disobedient                                         |    2 | 32, 210           | [Source](https://en.wiktionary.org/w/index.php?title=ურჩი&oldid=84091172)                       |
| უფასო  | free of charge                                      |    1 | 265               | [Source](https://en.wiktionary.org/w/index.php?title=უფასო&oldid=84119719)                      |
| უქმე   | non-working; as in a day off                        |    1 | 22                | [Source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%A5%E1%83%9B%E1%83%94)                   |
| უშნო   | ugly                                                |    1 | 191               | [Source](https://en.wiktionary.org/w/index.php?title=უშნო&oldid=88343119)                       |
| უცხო   | foreign, unfamiliar                                 |    1 | 232               | [Source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)                       |
| უხეში  | rough; rude                                         |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=უხეში&oldid=84119754)                      |
| უხვი   | abundant                                            |    2 | 56, 156           | [Source](https://en.wiktionary.org/w/index.php?title=უხვი&oldid=84091205)                       |
| უჯრა   | drawer                                              |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)                       |
| ფაზა   | phase                                               |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)                       |
| ფაილი  | file                                                |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)                      |
| ფარა   | flock                                               |    2 | 1, 252            | [Source](https://en.wiktionary.org/w/index.php?title=ფარა&oldid=84119773)                       |
| ფარდა  | curtain, purdah                                     |    1 | 275               | [Source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)                      |
| ფართო  | wide                                                |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=ფართო&oldid=84119789)                      |
| ფარი   | shield                                              |    2 | 12, 203           | [Source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)                       |
| ფასი   | price, cost                                         |    2 | 9, 246            | [Source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)                       |
| ფაუნა  | animal life                                         |    1 | 100               | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%90%E1%83%A3%E1%83%9C%E1%83%90)          |
| ფაფა   | porridge                                            |    1 | 1                 | [Source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)                       |
| ფაქტი  | fact                                                |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)                      |
| ფენა   | layer                                               |    1 | 54                | [Source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)                       |
| ფენი   | hairdryer                                           |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)                       |
| ფერადი | colourful                                           |    1 | 54                | [Source](https://en.wiktionary.org/w/index.php?title=ფერადი&oldid=84091239)                     |
| ფერი   | color, hue                                          |    2 | 161, 242          | [Source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)                       |
| ფერმა  | farm                                                |    1 | 52                | [Source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)                      |
| ფესვი  | root                                                |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)                      |
| ფეხი   | foot; leg                                           |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)                       |
| ფიალა  | drinking bowl                                       |    1 | 93                | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%98%E1%83%90%E1%83%9A%E1%83%90)          |
| ფიგურა | stature, figure                                     |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102)                     |
| ფილა   | slab                                                |    2 | 18, 270           | [Source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)                       |
| ფილე   | fillet                                              |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=ფილე&oldid=84102226)                       |
| ფილმი  | film                                                |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)                      |
| ფილტვი | lung                                                |    1 | 284               | [Source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916)                     |
| ფილტრი | filter                                              |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240)                     |
| ფინალი | final                                               |    1 | 215               | [Source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241)                     |
| ფირი   | film                                                |    1 | 118               | [Source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)                       |
| ფირმა  | company                                             |    1 | 12                | [Source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)                      |
| ფისო   | kitty                                               |    2 | 9, 246            | [Source](https://www.ganmarteba.ge/word/%E1%83%A4%E1%83%98%E1%83%A1%E1%83%9D)                   |
| ფიცი   | oath                                                |    2 | 36, 177           | [Source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)                       |
| ფიცხი  | quick-tempered                                      |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=ფიცხი&oldid=84091258)                      |
| ფიჭა   | honeycomb                                           |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)                       |
| ფიჭვი  | pine                                                |    1 | 36                | [Source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)                      |
| ფლავი  | pilaf                                               |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=ფლავი&oldid=84102266)                      |
| ფლოტი  | fleet                                               |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=ფლოტი&oldid=84102283)                      |
| ფობია  | phobia                                              |    1 | 219               | [Source](https://www.nplg.gov.ge/wikidict/index.php?title=ფობია&oldid=67220)                    |
| ფოთოლი | leaf                                                |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315)                     |
| ფოლადი | steel                                               |    1 | 18                | [Source](https://en.wiktionary.org/w/index.php?title=ფოლადი&oldid=84119907)                     |
| ფონდი  | fund                                                |    1 | 76                | [Source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)                      |
| ფონი   | background                                          |    1 | 246               | [Source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)                       |
| ფორმა  | shape, form                                         |    1 | 52                | [Source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)                      |
| ფოსტა  | post; mail                                          |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ფოსტა&oldid=87382061)                      |
| ფოტო   | photo                                               |    1 | 190               | [Source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)                       |
| ფრაზა  | phrase                                              |    1 | 152               | [Source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)                      |
| ფრანი  | kite                                                |    1 | 203               | [Source](https://en.wiktionary.org/w/index.php?title=ფრანი&oldid=84119947)                      |
| ფრე    | draw; tie in a game                                 |    2 | 54, 254           | [Source](https://en.wiktionary.org/w/index.php?title=ფრე&oldid=84103223)                        |
| ფრესკა | fresco                                              |    1 | 25                | [Source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351)                     |
| ფრთა   | wing                                                |    1 | 155               | [Source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)                       |
| ფსონი  | bet                                                 |    1 | 246               | [Source](https://en.wiktionary.org/w/index.php?title=ფსონი&oldid=84119973)                      |
| ფულადი | monetary                                            |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=ფულადი&oldid=84091297)                     |
| ფული   | money                                               |    1 | 270               | [Source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)                       |
| ფუჭი   | futile; useless                                     |    1 | 36                | [Source](https://en.wiktionary.org/w/index.php?title=ფუჭი&oldid=84119986)                       |
| ფხა    | fishbone                                            |    2 | 92, 260           | [Source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)                          |
| ქადა   | sweet pastry                                        |    1 | 4                 | [Source](https://en.wiktionary.org/w/index.php?title=ქადა&oldid=91650192)                       |
| ქათამი | chicken                                             |    1 | 213               | [Source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996)                     |
| ქალი   | woman                                               |    1 | 24                | [Source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)                       |
| ქალური | feminine                                            |    1 | 20                | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98) |
| ქანჩი  | nut (fastener)                                      |    1 | 267               | [Source](https://en.wiktionary.org/w/index.php?title=ქანჩი&oldid=78853155)                      |
| ქაოსი  | chaos                                               |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ქაოსი&oldid=84120027)                      |
| ქარი   | wind                                                |    1 | 213               | [Source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)                       |
| ქაფი   | foam                                                |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ქაფი&oldid=84120056)                       |
| ქაჯი   | goblin                                              |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=ქაჯი&oldid=87997423)                       |
| ქედი   | mountain range                                      |    1 | 149               | [Source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)                       |
| ქერა   | blond                                               |    1 | 271               | [Source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)                       |
| ქერი   | barley                                              |    1 | 31                | [Source](https://en.wiktionary.org/w/index.php?title=ქერი&oldid=87901504)                       |
| ქერქი  | bark; rind                                          |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=ქერქი&oldid=92228071)                      |
| ქვა    | stone                                               |    2 | 4, 212            | [Source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)                        |
| ქვაბი  | pot                                                 |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)                      |
| ქვიშა  | sand                                                |    1 | 212               | [Source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)                      |
| ქილა   | jar                                                 |    1 | 113               | [Source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)                       |
| ქირა   | rent                                                |    2 | 20, 210           | [Source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)                       |
| ქისა   | purse                                               |    2 | 112, 295          | [Source](https://en.wiktionary.org/w/index.php?title=ქისა&oldid=82308419)                       |
| ქლორი  | chlorine                                            |    1 | 71                | [Source](https://www.ganmarteba.ge/word/%E1%83%A5%E1%83%9A%E1%83%9D%E1%83%A0%E1%83%98)          |
| ქმარი  | husband                                             |    1 | 213               | [Source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)                      |
| ქოთანი | plant pot                                           |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=ქოთანი&oldid=89322782)                     |
| ქონება | property; wealth                                    |    1 | 55                | [Source](https://en.wiktionary.org/w/index.php?title=ქონება&oldid=90059881)                     |
| ქონი   | fat, grease                                         |    1 | 64                | [Source](https://en.wiktionary.org/w/index.php?title=ქონი&oldid=84120145)                       |
| ქორი   | goshawk                                             |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=ქორი&oldid=92251688)                       |
| ქოსა   | beardless                                           |    1 | 145               | [Source](https://en.wiktionary.org/w/index.php?title=ქოსა&oldid=91928853)                       |
| ქოჩორი | tuft of hair                                        |    1 | 71                | [Source](https://en.wiktionary.org/w/index.php?title=ქოჩორი&oldid=84120158)                     |
| ქოხი   | hut; cabin                                          |    1 | 179               | [Source](https://en.wiktionary.org/w/index.php?title=ქოხი&oldid=84096657)                       |
| ქრთამი | bribe                                               |    1 | 213               | [Source](https://en.wiktionary.org/w/index.php?title=ქრთამი&oldid=92921065)                     |
| ქსელი  | web; network                                        |    2 | 31, 176           | [Source](https://en.wiktionary.org/w/index.php?title=ქსელი&oldid=84809641)                      |
| ქუდი   | hat                                                 |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)                       |
| ქულა   | point, score                                        |    1 | 20                | [Source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)                       |
| ქურა   | stove, furnace                                      |    2 | 20, 210           | [Source](https://en.wiktionary.org/w/index.php?title=ქურა&oldid=91715085)                       |
| ქურდი  | thief                                               |    1 | 151               | [Source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)                      |
| ქურქი  | fur coat                                            |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=ქურქი&oldid=84224158)                      |
| ქუსლი  | heel                                                |    1 | 176               | [Source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)                      |
| ქუჩა   | street                                              |    2 | 112, 267          | [Source](https://en.wiktionary.org/w/index.php?title=ქუჩა&oldid=84120190)                       |
| ღამე   | night                                               |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)                       |
| ღამურა | bat                                                 |    1 | 221               | [Source](https://en.wiktionary.org/w/index.php?title=ღამურა&oldid=92290634)                     |
| ღარი   | groove, ditch                                       |    2 | 10, 186           | [Source](https://en.wiktionary.org/w/index.php?title=ღარი&oldid=84102504)                       |
| ღელე   | brook                                               |    1 | 47                | [Source](https://en.wiktionary.org/w/index.php?title=ღელე&oldid=84120207)                       |
| ღერი   | strand, stalk                                       |    1 | 10                | [Source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%94%E1%83%A0%E1%83%98)                   |
| ღერო   | blade, haulm, stalk, stem                           |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ღერო&oldid=87901541)                       |
| ღერძი  | axle; axis                                          |    1 | 10                | [Source](https://en.wiktionary.org/w/index.php?title=ღერძი&oldid=84120210)                      |
| ღვედი  | belt, strap                                         |    2 | 47, 274           | [Source](https://en.wiktionary.org/w/index.php?title=ღვედი&oldid=84120218)                      |
| ღვინო  | wine                                                |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)                      |
| ღია    | open                                                |    3 | 51, 144, 237      | [Source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)                        |
| ღილი   | button                                              |    1 | 73                | [Source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)                       |
| ღიპი   | belly                                               |    1 | 186               | [Source](https://en.wiktionary.org/w/index.php?title=ღიპი&oldid=84102517)                       |
| ღირსი  | worthy; deserving                                   |    1 | 186               | [Source](https://en.wiktionary.org/w/index.php?title=ღირსი&oldid=88628246)                      |
| ღობე   | fence, hedge                                        |    1 | 274               | [Source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)                       |
| ღომი   | ghomi maize porridge                                |    1 | 276               | [Source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)                       |
| ღონე   | strength                                            |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ღონე&oldid=84120241)                       |
| ღორი   | pig                                                 |    1 | 125               | [Source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)                       |
| ღრმა   | deep                                                |    1 | 221               | [Source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)                       |
| ღრუ    | cavity; hollow space                                |    1 | 221               | [Source](https://www.ganmarteba.ge/word/ღრუ)                                                    |
| ღუზა   | anchor                                              |    1 | 27                | [Source](https://en.wiktionary.org/w/index.php?title=ღუზა&oldid=87788040)                       |
| ყაბაყი | zucchini                                            |    1 | 277               | [Source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258)                     |
| ყადრი  | value, respect                                      |    1 | 288               | [Source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)                      |
| ყავა   | coffee                                              |    1 | 209               | [Source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)                       |
| ყალბი  | fake; false                                         |    1 | 35                | [Source](https://en.wiktionary.org/w/index.php?title=ყალბი&oldid=84120277)                      |
| ყანა   | field                                               |    1 | 38                | [Source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)                       |
| ყასაბი | butcher                                             |    1 | 38                | [Source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292)                     |
| ყბა    | jaw                                                 |    2 | 38, 277           | [Source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)                        |
| ყდა    | cover of a book                                     |    2 | 35, 288           | [Source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)                        |
| ყელი   | throat                                              |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)                       |
| ყვავი  | crow                                                |    1 | 120               | [Source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)                      |
| ყველი  | cheese                                              |    1 | 102               | [Source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)                      |
| ყინვა  | frost, freezing, freezing temperatures, severe cold |    1 | 211               | [Source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)                      |
| ყლუპი  | sip                                                 |    1 | 269               | [Source](https://en.wiktionary.org/w/index.php?title=ყლუპი&oldid=84120339)                      |
| ყორანი | raven                                               |    1 | 241               | [Source](https://en.wiktionary.org/w/index.php?title=ყორანი&oldid=92709834)                     |
| ყოჩი   | ram                                                 |    1 | 241               | [Source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)                       |
| ყრუ    | deaf                                                |    2 | 37, 291           | [Source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)                        |
| ყურე   | bay, bight                                          |    2 | 16, 291           | [Source](https://en.wiktionary.org/w/index.php?title=ყურე&oldid=84102567)                       |
| ყური   | ear                                                 |    1 | 16                | [Source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)                       |
| შავი   | black                                               |    2 | 3, 212            | [Source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)                       |
| შალი   | shawl                                               |    2 | 3, 250            | [Source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)                       |
| შანსი  | chance                                              |    1 | 236               | [Source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)                      |
| შარდი  | urine                                               |    1 | 58                | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%90%E1%83%A0%E1%83%93%E1%83%98)          |
| შაშვი  | thrush                                              |    1 | 259               | [Source](https://en.wiktionary.org/w/index.php?title=შაშვი&oldid=84757236)                      |
| შაში   | checkers game                                       |    2 | 58, 259           | [Source](https://en.wiktionary.org/w/index.php?title=შაში&oldid=84096882)                       |
| შაშხი  | salted or dried meat                                |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=შაშხი&oldid=88672039)                      |
| შეშა   | firewood                                            |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)                       |
| შველი  | roe deer                                            |    1 | 107               | [Source](https://en.wiktionary.org/w/index.php?title=შველი&oldid=91741270)                      |
| შვილი  | child                                               |    1 | 107               | [Source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)                      |
| შვრია  | oats                                                |    1 | 228               | [Source](https://en.wiktionary.org/w/index.php?title=შვრია&oldid=88155749)                      |
| შიფრი  | cipher                                              |    1 | 254               | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%98%E1%83%A4%E1%83%A0%E1%83%98)          |
| შიში   | fear                                                |    1 | 111               | [Source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)                       |
| შნო    | skill, charm                                        |    2 | 64, 191           | [Source](https://en.wiktionary.org/w/index.php?title=შნო&oldid=92228121)                        |
| შობა   | Christmas                                           |    1 | 219               | [Source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)                       |
| შოკი   | shock                                               |    1 | 132               | [Source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)                       |
| შოლტი  | whip                                                |    1 | 6                 | [Source](https://en.wiktionary.org/w/index.php?title=შოლტი&oldid=88091226)                      |
| შორი   | far                                                 |    2 | 132, 247          | [Source](https://en.wiktionary.org/w/index.php?title=შორი&oldid=84097095)                       |
| შორს   | far                                                 |    1 | 247               | [Source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)                       |
| შოუ    | show                                                |    1 | 114               | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%9D%E1%83%A3)                            |
| შოშია  | starling                                            |    1 | 58                | [Source](https://en.wiktionary.org/w/index.php?title=შოშია&oldid=88091349)                      |
| შრე    | stratum, layer                                      |    2 | 89, 214           | [Source](https://en.wiktionary.org/w/index.php?title=შრე&oldid=84102672)                        |
| შტაბი  | headquarters                                        |    1 | 219               | [Source](https://en.wiktionary.org/w/index.php?title=შტაბი&oldid=84120584)                      |
| შტატი  | state; staff                                        |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=შტატი&oldid=88896322)                      |
| შტო    | branch                                              |    2 | 6, 261            | [Source](https://en.wiktionary.org/w/index.php?title=შტო&oldid=92197095)                        |
| შტორმი | storm at sea                                        |    1 | 261               | [Source](https://www.ganmarteba.ge/word/%E1%83%A8%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%9B%E1%83%98) |
| შუა    | middle                                              |    2 | 114, 259          | [Source](https://www.ganmarteba.ge/word/შუა)                                                    |
| შუბი   | spear                                               |    2 | 147, 273          | [Source](https://en.wiktionary.org/w/index.php?title=შუბი&oldid=84120602)                       |
| შუბლი  | forehead                                            |    1 | 273               | [Source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)                      |
| შური   | envy                                                |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)                       |
| შუქი   | light                                               |    1 | 214               | [Source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)                       |
| შუშა   | glass                                               |    1 | 259               | [Source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)                       |
| შხამი  | poison                                              |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)                      |
| შხაპი  | shower                                              |    1 | 206               | [Source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)                      |
| ჩაი    | tea (drink made from leaves of tea plant)           |    2 | 110, 241          | [Source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)                        |
| ჩალა   | straw                                               |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)                       |
| ჩანთა  | bag                                                 |    1 | 117               | [Source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)                      |
| ჩარხი  | lathe                                               |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=ჩარხი&oldid=84120652)                      |
| ჩაქუჩი | hammer                                              |    1 | 210               | [Source](https://en.wiktionary.org/w/index.php?title=ჩაქუჩი&oldid=91072323)                     |
| ჩეკი   | check, receipt                                      |    1 | 282               | [Source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)                       |
| ჩექმა  | boot                                                |    1 | 119               | [Source](https://en.wiktionary.org/w/index.php?title=ჩექმა&oldid=84120683)                      |
| ჩვარი  | rag                                                 |    1 | 224               | [Source](https://en.wiktionary.org/w/index.php?title=ჩვარი&oldid=84102722)                      |
| ჩვილი  | baby                                                |    1 | 107               | [Source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)                      |
| ჩია    | small and frail                                     |    2 | 79, 241           | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%98%E1%83%90)                            |
| ჩიპი   | microchip                                           |    1 | 90                | [Source](https://en.wiktionary.org/w/index.php?title=ჩიპი&oldid=85075873)                       |
| ჩირი   | dried fruit                                         |    2 | 111, 224          | [Source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)                       |
| ჩირქი  | pus                                                 |    1 | 224               | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%98%E1%83%A0%E1%83%A5%E1%83%98)          |
| ჩიტი   | bird                                                |    1 | 90                | [Source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)                       |
| ჩიხი   | blind alley                                         |    1 | 111               | [Source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)                       |
| ჩუმი   | quiet                                               |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)                       |
| ჩუსტი  | slipper                                             |    1 | 112               | [Source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)                      |
| ჩქარი  | quick                                               |    1 | 210               | [Source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)                      |
| ჩხირი  | small stick                                         |    1 | 111               | [Source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%AE%E1%83%98%E1%83%A0%E1%83%98)          |
| ცალი   | piece                                               |    2 | 24, 220           | [Source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)                       |
| ცელი   | scythe                                              |    3 | 31, 113, 193      | [Source](https://en.wiktionary.org/w/index.php?title=ცელი&oldid=91740712)                       |
| ცელქი  | mischievous                                         |    1 | 113               | [Source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%94%E1%83%9A%E1%83%A5%E1%83%98)          |
| ცენტი  | cent                                                |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)                      |
| ცენტრი | center                                              |    1 | 262               | [Source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748)                     |
| ცვილი  | wax                                                 |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=ცვილი&oldid=84757548)                      |
| ცივი   | cold                                                |    2 | 36, 283           | [Source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)                       |
| ციკლი  | cycle                                               |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=ციკლი&oldid=84120815)                      |
| ცილა   | protein                                             |    2 | 24, 287           | [Source](https://en.wiktionary.org/w/index.php?title=ცილა&oldid=84120818)                       |
| ციფრი  | digit; numeral                                      |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=ციფრი&oldid=85021100)                      |
| ციყვი  | squirrel                                            |    1 | 194               | [Source](https://en.wiktionary.org/w/index.php?title=ციყვი&oldid=87901693)                      |
| ციხე   | fortress                                            |    2 | 94, 278           | [Source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)                       |
| ცოლი   | wife                                                |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)                       |
| ცომი   | dough                                               |    1 | 150               | [Source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)                       |
| ცოტა   | a little; few                                       |    1 | 220               | [Source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)                       |
| ცოფი   | rabies                                              |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=ცოფი&oldid=84120877)                       |
| ცოცხი  | broom                                               |    1 | 232               | [Source](https://en.wiktionary.org/w/index.php?title=ცოცხი&oldid=84120879)                      |
| ცრემლი | tear from the eyes                                  |    1 | 193               | [Source](https://en.wiktionary.org/w/index.php?title=ცრემლი&oldid=84120880)                     |
| ცრუ    | false, phony                                        |    2 | 42, 244           | [Source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)                        |
| ცუდი   | bad                                                 |    1 | 42                | [Source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)                       |
| ცული   | axe                                                 |    1 | 164               | [Source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)                       |
| ცხადი  | clear; evident                                      |    1 | 225               | [Source](https://en.wiktionary.org/w/index.php?title=ცხადი&oldid=84088549)                      |
| ცხარე  | spicy                                               |    1 | 141               | [Source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)                      |
| ცხელი  | hot                                                 |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)                      |
| ცხენი  | horse                                               |    1 | 225               | [Source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)                      |
| ცხვირი | nose                                                |    1 | 283               | [Source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521)                     |
| ცხიმი  | fat                                                 |    1 | 283               | [Source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)                      |
| ძაბრი  | funnel                                              |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=ძაბრი&oldid=84120916)                      |
| ძალა   | power, force, strength                              |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)                       |
| ძაფი   | thread                                              |    1 | 153               | [Source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)                       |
| ძაღლი  | dog                                                 |    1 | 185               | [Source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)                      |
| ძეგლი  | monument                                            |    1 | 78                | [Source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)                      |
| ძელი   | beam                                                |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=ძელი&oldid=84120929)                       |
| ძერა   | kite bird                                           |    2 | 10, 271           | [Source](https://en.wiktionary.org/w/index.php?title=ძერა&oldid=91812511)                       |
| ძეხვი  | sausage                                             |    1 | 266               | [Source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)                      |
| ძვალი  | bone                                                |    1 | 266               | [Source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)                      |
| ძველი  | old                                                 |    1 | 266               | [Source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)                      |
| ძვირი  | expensive                                           |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)                      |
| ძია    | uncle                                               |    3 | 39, 116, 201      | [Source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)                        |
| ძილი   | sleep                                               |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)                       |
| ძირი   | root                                                |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)                       |
| ძიუდო  | judo                                                |    1 | 289               | [Source](https://en.wiktionary.org/w/index.php?title=ძიუდო&oldid=88130281)                      |
| ძიძა   | nanny                                               |    1 | 289               | [Source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)                       |
| ძლიერი | strong                                              |    1 | 77                | [Source](https://en.wiktionary.org/w/index.php?title=ძლიერი&oldid=84757250)                     |
| ძმა    | brother                                             |    2 | 78, 185           | [Source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)                        |
| ძმარი  | vinegar                                             |    1 | 154               | [Source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)                      |
| ძნელი  | difficult                                           |    1 | 74                | [Source](https://en.wiktionary.org/w/index.php?title=ძნელი&oldid=88915482)                      |
| ძრავა  | engine                                              |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)                      |
| ძუა    | horsehair                                           |    2 | 39, 289           | [Source](https://en.wiktionary.org/w/index.php?title=ძუა&oldid=85057219)                        |
| წაბლი  | chestnut                                            |    1 | 73                | [Source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)                      |
| წამი   | second                                              |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)                       |
| წარბი  | brow, eyebrow                                       |    1 | 49                | [Source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)                      |
| წებო   | glue                                                |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)                       |
| წევრი  | member                                              |    1 | 101               | [Source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)                      |
| წელი   | year                                                |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)                       |
| წესი   | rule                                                |    1 | 124               | [Source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)                       |
| წვეთი  | drop                                                |    1 | 101               | [Source](https://en.wiktionary.org/w/index.php?title=წვეთი&oldid=59811747)                      |
| წვენი  | gravy, juice, sap                                   |    1 | 156               | [Source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)                      |
| წვერი  | beard; tip                                          |    1 | 174               | [Source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)                      |
| წვიმა  | rain                                                |    1 | 130               | [Source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)                      |
| წიგნი  | book                                                |    1 | 87                | [Source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)                      |
| წილი   | share; portion                                      |    2 | 73, 255           | [Source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)                       |
| წინდა  | sock                                                |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)                      |
| წმინდა | pure; holy                                          |    1 | 188               | [Source](https://en.wiktionary.org/w/index.php?title=წმინდა&oldid=84121076)                     |
| წნევა  | pressure                                            |    1 | 82                | [Source](https://en.wiktionary.org/w/index.php?title=წნევა&oldid=84121078)                      |
| წნეხი  | press; pressure                                     |    1 | 156               | [Source](https://www.ganmarteba.ge/word/%E1%83%AC%E1%83%9C%E1%83%94%E1%83%AE%E1%83%98)          |
| წონა   | weight                                              |    1 | 217               | [Source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)                       |
| წრე    | circle                                              |    1 | 242               | [Source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)                        |
| წუთი   | minute                                              |    1 | 49                | [Source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)                       |
| წუნი   | defect                                              |    1 | 156               | [Source](https://en.wiktionary.org/w/index.php?title=წუნი&oldid=84121093)                       |
| წყალი  | water                                               |    1 | 255               | [Source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)                      |
| წყარო  | spring                                              |    1 | 37                | [Source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)                      |
| ჭაბუკი | young man                                           |    1 | 23                | [Source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122)                     |
| ჭავლი  | jet, stream                                         |    1 | 148               | [Source](https://en.wiktionary.org/w/index.php?title=ჭავლი&oldid=84102926)                      |
| ჭალა   | floodplain; riverside grove                         |    1 | 146               | [Source](https://en.wiktionary.org/w/index.php?title=ჭალა&oldid=92391673)                       |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   |    1 | 276               | [Source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)                      |
| ჭარბი  | excess; surplus                                     |    1 | 62                | [Source](https://en.wiktionary.org/w/index.php?title=ჭარბი&oldid=88343674)                      |
| ჭაღი   | chandelier                                          |    1 | 166               | [Source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)                       |
| ჭერი   | ceiling                                             |    1 | 101               | [Source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)                       |
| ჭექა   | thunder                                             |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=ჭექა&oldid=84121145)                       |
| ჭვავი  | rye                                                 |    1 | 229               | [Source](https://en.wiktionary.org/w/index.php?title=ჭვავი&oldid=87901803)                      |
| ჭია    | worm                                                |    2 | 23, 277           | [Source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)                        |
| ჭირი   | illness, trouble                                    |    1 | 192               | [Source](https://en.wiktionary.org/w/index.php?title=ჭირი&oldid=76807766)                       |
| ჭიქა   | glass, cup                                          |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)                       |
| ჭკუა   | intellect                                           |    1 | 23                | [Source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)                       |
| ჭოკი   | pole                                                |    1 | 2                 | [Source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)                       |
| ჭორი   | gossip                                              |    2 | 2, 192            | [Source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)                       |
| ჭრელი  | colorful                                            |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)                      |
| ჭრილი  | incision, cross-section                             |    1 | 91                | [Source](https://en.wiktionary.org/w/index.php?title=ჭრილი&oldid=84121173)                      |
| ჭურვი  | artillery shell                                     |    1 | 291               | [Source](https://www.ganmarteba.ge/word/%E1%83%AD%E1%83%A3%E1%83%A0%E1%83%95%E1%83%98)          |
| ხაზი   | line                                                |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)                       |
| ხათრი  | regard; consideration                               |    1 | 222               | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%90%E1%83%97%E1%83%A0%E1%83%98)          |
| ხალი   | birthmark, mole                                     |    2 | 51, 266           | [Source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)                       |
| ხალიჩა | carpet, rug                                         |    1 | 110               | [Source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204)                     |
| ხალხი  | people                                              |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)                      |
| ხამი   | raw, inexperienced                                  |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=ხამი&oldid=92291997)                       |
| ხანა   | era                                                 |    1 | 117               | [Source](https://www.ganmarteba.ge/word/%E1%83%AE%E1%83%90%E1%83%9C%E1%83%90)                   |
| ხარი   | ox, bull                                            |    2 | 46, 268           | [Source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)                       |
| ხარჯი  | expense                                             |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)                      |
| ხატი   | icon                                                |    2 | 46, 206           | [Source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)                       |
| ხაში   | traditional tripe soup                              |    1 | 157               | [Source](https://en.wiktionary.org/w/index.php?title=ხაში&oldid=92228083)                       |
| ხაჭო   | curd cheese                                         |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)                       |
| ხახვი  | onion                                               |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ხახვი&oldid=92248670)                      |
| ხბო    | calf                                                |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)                        |
| ხედი   | view                                                |    1 | 225               | [Source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)                       |
| ხევი   | ravine                                              |    2 | 156, 278          | [Source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)                       |
| ხელი   | hand                                                |    1 | 72                | [Source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)                       |
| ხეობა  | valley                                              |    1 | 135               | [Source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)                      |
| ხერხი  | saw, method                                         |    1 | 161               | [Source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)                      |
| ხვალ   | tomorrow                                            |    1 | 92                | [Source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)                       |
| ხიბლი  | charm                                               |    1 | 70                | [Source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)                      |
| ხიდი   | bridge                                              |    1 | 96                | [Source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)                       |
| ხილი   | fruit, fruits                                       |    2 | 70, 163           | [Source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)                       |
| ხმა    | voice, sound                                        |    2 | 19, 258           | [Source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)                        |
| ხმალი  | sword                                               |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)                      |
| ხმაური | noise                                               |    1 | 32                | [Source](https://en.wiktionary.org/w/index.php?title=ხმაური&oldid=84103029)                     |
| ხმელი  | dry                                                 |    1 | 94                | [Source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)                      |
| ხორცი  | meat                                                |    1 | 177               | [Source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)                      |
| ხრეში  | gravel                                              |    1 | 89                | [Source](https://en.wiktionary.org/w/index.php?title=ხრეში&oldid=84103042)                      |
| ხრიკი  | trick; ruse                                         |    1 | 96                | [Source](https://en.wiktionary.org/w/index.php?title=ხრიკი&oldid=84103044)                      |
| ხროვა  | pack                                                |    1 | 46                | [Source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)                      |
| ხუნდი  | shackle                                             |    1 | 268               | [Source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)                      |
| ხურდა  | small change                                        |    1 | 268               | [Source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)                      |
| ხურმა  | persimmon                                           |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)                      |
| ხუფი   | lid                                                 |    1 | 260               | [Source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)                       |
| ხშირი  | frequent; dense                                     |    1 | 111               | [Source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)                      |
| ჯადო   | magic                                               |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)                       |
| ჯაზი   | jazz                                                |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)                       |
| ჯამი   | sum; bowl                                           |    1 | 159               | [Source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)                       |
| ჯანი   | health                                              |    2 | 30, 188           | [Source](https://en.wiktionary.org/w/index.php?title=ჯანი&oldid=84121391)                       |
| ჯართი  | scrap                                               |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=ჯართი&oldid=89067419)                      |
| ჯარი   | army, host                                          |    1 | 218               | [Source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)                       |
| ჯარიმა | fine; penalty                                       |    1 | 293               | [Source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221)                     |
| ჯაჭვი  | chain                                               |    1 | 136               | [Source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)                      |
| ჯგუფი  | group                                               |    1 | 123               | [Source](https://en.wiktionary.org/w/index.php?title=ჯგუფი&oldid=84103069)                      |
| ჯებირი | embankment holding back water                       |    1 | 33                | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%94%E1%83%91%E1%83%98%E1%83%A0%E1%83%98) |
| ჯვარი  | cross                                               |    1 | 205               | [Source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)                      |
| ჯიბე   | pocket                                              |    1 | 33                | [Source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)                       |
| ჯილდო  | reward                                              |    2 | 53, 167           | [Source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)                      |
| ჯინი   | jinn; mythical spirit                               |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=ჯინი&oldid=84103090)                       |
| ჯინსი  | jeans                                               |    1 | 158               | [Source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)                      |
| ჯიუტი  | stubborn                                            |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)                      |
| ჯიქი   | leopard                                             |    1 | 295               | [Source](https://www.ganmarteba.ge/word/%E1%83%AF%E1%83%98%E1%83%A5%E1%83%98)                   |
| ჯიში   | breed                                               |    1 | 147               | [Source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)                       |
| ჯიხვი  | Caucasian mountain goat                             |    1 | 56                | [Source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)                      |
| ჯიხური | kiosk                                               |    1 | 56                | [Source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096)                     |
| ჯოგი   | herd                                                |    1 | 106               | [Source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)                       |
| ჯორი   | mule                                                |    1 | 106               | [Source](https://en.wiktionary.org/w/index.php?title=ჯორი&oldid=84121454)                       |
| ჯოხი   | stick                                               |    1 | 167               | [Source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)                       |
| ჰაერი  | air                                                 |    1 | 244               | [Source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)                      |
| ჰავა   | climate                                             |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ჰავა&oldid=84121476)                       |
| ჰალვა  | halva                                               |    1 | 95                | [Source](https://en.wiktionary.org/w/index.php?title=ჰალვა&oldid=92945178)                      |
| ჰანგი  | tune, melody                                        |    1 | 285               | [Source](https://www.ganmarteba.ge/word/%E1%83%B0%E1%83%90%E1%83%9C%E1%83%92%E1%83%98)          |
| ჰერცი  | hertz                                               |    1 | 244               | [Source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)                      |
| ჰობი   | hobby                                               |    1 | 69                | [Source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)                       |
| ჰოკეი  | hockey                                              |    1 | 69                | [Source](https://www.ganmarteba.ge/word/%E1%83%B0%E1%83%9D%E1%83%99%E1%83%94%E1%83%98)          |
