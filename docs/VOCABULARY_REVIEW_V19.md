# Journey vocabulary and campaign review — revision 19

The owner approved **129 of 148 proposals in expansion batch 04** and rejected
nineteen spellings: აირი, ბოხი, ზეპირი, მოდემი, მოვალე, მტრული, რძიანი, საცალო, საცოლე, სიდიდე, სრიალა, უგონო, უშაქრო, უცხიმო, უძირო, უძლური, შაურმა, ცვლადი, წრიული. These nineteen are excluded from required answers,
accepted variants and bonuses. All 1,352 previous approvals remain, bringing the
main pool to **1,481**. The new reference has **1,702 entries / 1,599 playable words**:
1,481 required-eligible and 118 additional bonus-only words. Prior reference entries
are preserved exactly. The nineteen rejected proposals were never ingested.

Individual decisions, senses and source links (fixed revisions or content hashes) are recorded in
[the batch](VOCABULARY_EXPANSION_BATCH_04.json) and
[the allowlist](../content/dictionaries/everyday-targets-v19.json).

## Measured results

| Measure                               | Revision 18 | Revision 19 |
| ------------------------------------- | ----------: | ----------: |
| Levels / journey stops                |    240 / 48 |    240 / 48 |
| Required answer slots                 |       1,200 |       1,200 |
| Approved required words               |       1,352 |       1,481 |
| Distinct required words               |         995 |        1036 |
| Repeated slots after first appearance |         205 |         164 |
| Unused approvals                      |         357 |         445 |
| Minimum repeat gap                    |          75 |          75 |

Repeated answer slots decrease by **20.00%**.
The campaign uses **51 of the 129 new approvals**; 78
remain eligible but unused. Overall 107 spellings enter the campaign and
66 previously used spellings leave, for a net gain of 41.
Bonus appearances do not count toward required-word repetition.

| Required appearances | Revision 18 distinct words | Revision 19 distinct words |
| -------------------: | -------------------------: | -------------------------: |
|                    1 |                        801 |                        883 |
|                    2 |                        183 |                        142 |
|                    3 |                         11 |                         11 |
|                    4 |                          0 |                          0 |

Repeat gaps range from 75 to 237 levels. All accepted variants are
canonical-only. Required slots by length: 104 three-letter,
523 four-letter, 448 five-letter and 125 six-letter answers.
Five-letter answers begin at level 3 and six-letter answers at level 18.

## Rules and editorial audit

All 1036 distinct required spellings and all 1,200 answer slots were checked
against the exact allowlist, recorded meanings, individual owner decisions and
source provenance. Source checks were completed when preparing batch 04; this
rebuild preserves those approved senses without claiming fresh linguistic review.
No plurals occur as required answers or variants. All 47 reserved bonus spellings,
53 full-pool exclusions, 12 unused-pool exclusions, nineteen new exclusions and all
earlier grammar/barbarism restrictions remain enforced. Every eligible formable
extra is recognized as a bonus. Verified plurals remain eligible in the wider
dictionary; none is formable from the selected 240 wheels. Plural bonus rewards
are tested on a fixed known wheel with the current eligible vocabulary, so this
behavior does not depend on which boards the optimizer selects.

All boards retain five answers, the 75-level gap, exact tile multiplicities,
unique wheels, connected crossings, no accidental runs, length progression,
six-letter quotas, chapter challenge/recovery pacing and phone layout gates.
Difficulty estimates do not replace playtesting.

## Optimization limits

The search expands prior board candidates with new compatible wheels and crossings,
compares complete campaigns, optimizes groups of boards jointly and explores valid
replacements. Distinct-word coverage takes priority over secondary heavy-reuse
penalties. Search is bounded: it does not prove a global optimum or that unused
words are impossible to place. Independent draft examples cannot guarantee fitting
all approvals together under whole-campaign constraints.

The owner subsequently raised the target to **1,800 approved words**, requiring
**319 further approvals** from this revision’s pool of 1,481. Batch 05 proposes
100 candidates for review; it does not alter this campaign. More approvals alone
do not guarantee zero repetition. This revision retains the
240 levels and 48 journey stops required by the rulebook.

## Compatibility and reproducibility

Historical packs, allowlists and reference dictionaries remain unchanged; the shared
policy adds a revision-19 exclusion category without changing earlier decisions.
Stable pack, level and journey identities are retained. Migration supports every
prior revision and preserves completed levels, partial solved credits, coins, paid
hints, postcards and lifetime bonus rewards through restart. The hint compatibility
ceiling is 1,502 (revision 18's 1,460 plus a replacement board). Continuing answers
retain their IDs on the same board.

Reviewed draft SHA-256: `6606371b35db80cba92b209e5a1ab0ef133038a3e79c4444a80e38a645b9bd8c`.

Rebuild with `scripts/rebuild-wide-content.py --revision 19`. Promotion requires
`--promote-reviewed` and this exact reviewed draft. Recipes reproduce the pack
independently of ignored search artifacts.

## Validation

- `npm run check`: passed, including TypeScript, ESLint, **239 tests across 30 suites**, all **240 levels solved**, and repository formatting.
- `uv run pytest`: **132 passed**; includes exact approval scope, all-role exclusions, unchanged historical entries, bonus completeness and deterministic rebuild/digest checks.
- `uv run ruff check .`, `uv run ruff format --check .` and `uv run mypy src`: passed.
- `npx expo export --platform ios`: passed. This is an export, not a native-device test or TestFlight upload.
- Migration tests cover revision-18 partial and completed saves, historical paid-hint bounds, coins, postcards, lifetime bonus rewards and SQLite restart.
- SHA-256 comparison confirms **64 historical content files unchanged**. The shared policy only appends the new revision-19 exclusion category.

The initial app run exposed an outdated vocabulary-size expectation and a plural
reward test coupled to a wheel in the prior campaign. The size expectation now
matches 1,599 eligible words. The reward test uses a fixed historical wheel,
recomputes its bonus list from the current vocabulary, and verifies current
required-word exclusion, one reward, no target credit and no duplicate award.
Active-campaign plural rejection and all-formable-bonus checks remain unchanged.

## Unused approved words (445)

| Word   | Recorded meaning             | Approval | Source                                                                                          |
| ------ | ---------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| აბზაცი | paragraph                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=აბზაცი&oldid=91914485)                     |
| აბჯარი | armor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412)                     |
| ადგილი | place                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114)                     |
| ადვილი | easy                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563)                     |
| ავდარი | bad weather, rainy weather   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279)                     |
| აივანი | balcony                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190)                     |
| ალბომი | album                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197)                     |
| ალიონი | dawn                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ალიონი&oldid=84112474)                     |
| ალმასი | diamond                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482)                     |
| ამბავი | story, news                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516)                     |
| ამპერი | ampere                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ამპერი&oldid=84097293)                     |
| ანბანი | alphabet                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407)                     |
| ანდაზა | proverb                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575)                     |
| ანემია | anemia                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანემია&oldid=84097334)                     |
| ანკეტა | questionnaire                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანკეტა&oldid=84112645)                     |
| არსება | creature; being              | Retained | [source](https://en.wiktionary.org/w/index.php?title=არსება&oldid=88400654)                     |
| არქივი | archive                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427)                     |
| არწივი | eagle                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068)                     |
| ატლასი | atlas                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ატლასი&oldid=84097471)                     |
| აფთარი | hyena                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116)                     |
| აქლემი | camel                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908)                     |
| აქცია  | action, promotion            | Retained | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)                      |
| აღვირი | bridle                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=აღვირი&oldid=92127736)                     |
| აღლუმი | parade                       | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%90%E1%83%A6%E1%83%9A%E1%83%A3%E1%83%9B%E1%83%98) |
| ბაბუა  | grandfather, grandpa         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)                      |
| ბადაგი | grape syrup                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბადაგი&oldid=92290638)                     |
| ბალახი | grass                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალახი&oldid=85585178)                     |
| ბალეტი | ballet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557)                     |
| ბალიში | pillow, cushion              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170)                     |
| ბამბა  | cotton, cotton wool          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)                      |
| ბანანი | banana                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335)                     |
| ბარათი | card; letter                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბარათი&oldid=85067525)                     |
| ბაყაყი | frog                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131)                     |
| ბაწარი | string, cord                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაწარი&oldid=92228016)                     |
| ბებია  | grandmother, grannie, granny | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)                      |
| ბეკონი | bacon                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047)                     |
| ბერეტი | beret                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646)                     |
| ბეტონი | concrete                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651)                     |
| ბეღელი | granary                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეღელი&oldid=84113473)                     |
| ბეღურა | sparrow                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232)                     |
| ბეჭედი | ring                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424)                     |
| ბილიკი | path                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672)                     |
| ბირთვი | core                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბირთვი&oldid=84113525)                     |
| ბიცოლა | aunt                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800)                     |
| ბიძგი  | push                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბიძგი&oldid=84097695)                      |
| ბოლქვი | bulb                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბოლქვი&oldid=84097704)                     |
| ბონუსი | bonus reward                 | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%9C%E1%83%A3%E1%83%A1%E1%83%98) |
| ბორანი | ferry                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბორანი&oldid=84097707)                     |
| ბოროტი | evil; wicked                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020)                     |
| ბორცვი | hillock                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბორცვი&oldid=84097714)                     |
| ბოჭკო  | fiber                        | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%AD%E1%83%99%E1%83%9D)          |
| ბრინჯი | rice                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506)                     |
| ბრძენი | wise                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბრძენი&oldid=84089626)                     |
| ბუნება | nature                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241)                     |
| ბუსუსი | fuzz                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუსუსი&oldid=84097785)                     |
| ბუჩქი  | bush, shrub                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)                      |
| ბუხარი | fireplace                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056)                     |
| გვალვა | drought                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=გვალვა&oldid=92490376)                     |
| გვერდი | page; side                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=გვერდი&oldid=88051247)                     |
| გმირი  | hero                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)                      |
| გოგო   | girl                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)                       |
| გონება | mind; intellect              | Retained | [source](https://en.wiktionary.org/w/index.php?title=გონება&oldid=92692374)                     |
| გრძელი | long                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966)                     |
| დარაჯი | guard                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652)                     |
| დაქალი | close female friend          | Retained | [source](https://en.wiktionary.org/w/index.php?title=დაქალი&oldid=84114443)                     |
| დედალი | female animal                | Retained | [source](https://en.wiktionary.org/w/index.php?title=დედალი&oldid=91716454)                     |
| დეტალი | detail                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=დეტალი&oldid=85506724)                     |
| დივანი | sofa                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=დივანი&oldid=84114587)                     |
| დუეტი  | duet                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)                      |
| ელფერი | shade, tint                  | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%94%E1%83%9A%E1%83%A4%E1%83%94%E1%83%A0%E1%83%98) |
| ერთობა | unity                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ერთობა&oldid=84114925)                     |
| ესკიზი | sketch                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ესკიზი&oldid=84114959)                     |
| ეფექტი | effect                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ეფექტი&oldid=84114983)                     |
| ექთანი | nurse                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646)                     |
| ვაჭარი | merchant                     | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ვაჭარი&oldid=85067228)                     |
| ველური | wild                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ველური&oldid=84090127)                     |
| ვენახი | vineyard                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996)                     |
| ვერაგი | treacherous                  | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ვერაგი&oldid=84090130)                     |
| ვერსია | version                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვერსია&oldid=84098493)                     |
| ვეფხვი | tiger                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960)                     |
| ვეშაპი | whale                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435)                     |
| ვირუსი | virus                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530)                     |
| ვრცელი | extensive, spacious          | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ვრცელი&oldid=84090141)                     |
| ზაზუნა | hamster                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134)                     |
| ზარალი | loss                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744)                     |
| ზეწარი | bedsheet                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578)                     |
| ზიზღი  | disgust                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზიზღი&oldid=84115345)                      |
| თავბრუ | dizziness                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=თავბრუ&oldid=84098608)                     |
| თამადა | toastmaster                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151)                     |
| თამამი | bold; confident              | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182)                     |
| თამაში | game                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028)                     |
| თანხა  | amount of money              | Retained | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)                      |
| თაობა  | generation                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)                      |
| თარიღი | date                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319)                     |
| თაფლი  | honey                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)                      |
| თეატრი | theatre                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეატრი&oldid=89024711)                     |
| თეთრი  | white                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)                      |
| თეფში  | plate                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)                      |
| თითი   | finger                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)                       |
| თოჯინა | doll                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714)                     |
| თუნუქი | tin plate                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=თუნუქი&oldid=84098722)                     |
| იარაღი | weapon, tool                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054)                     |
| იატაკი | floor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760)                     |
| იდაყვი | elbow                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=იდაყვი&oldid=90005976)                     |
| ილუზია | illusion                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ილუზია&oldid=68794707)                     |
| იუმორი | humor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113)                     |
| კაბელი | cable                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959)                     |
| კაკაბი | partridge                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაკაბი&oldid=84115977)                     |
| კაკალი | walnut; walnut tree          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192)                     |
| კაკაო  | cocoa                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)                      |
| კალათა | basket                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984)                     |
| კამათი | argument                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005)                     |
| კამერა | chamber                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969)                     |
| კამეჩი | buffalo                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამეჩი&oldid=84116010)                     |
| კაპიკი | kopeck                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაპიკი&oldid=84116027)                     |
| კარადა | cupboard, wardrobe, closet   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032)                     |
| კარავი | tent                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033)                     |
| კარატე | karate                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608)                     |
| კედელი | wall                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872)                     |
| კეთილი | kind                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581)                     |
| კენკრა | berry                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952)                     |
| კენჭი  | pebble                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)                      |
| კვამლი | smoke                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კვამლი&oldid=84116122)                     |
| კვარცი | quartz                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421)                     |
| კვირტი | bud                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კვირტი&oldid=84116143)                     |
| კიდური | limb                         | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%98%E1%83%93%E1%83%A3%E1%83%A0%E1%83%98) |
| კლანჭი | claw                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695)                     |
| კოდალა | woodpecker                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოდალა&oldid=87900485)                     |
| კოკორი | flower bud                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოკორი&oldid=88091590)                     |
| კოლეგა | colleague                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090)                     |
| კოლეჯი | college                      | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%9A%E1%83%94%E1%83%AF%E1%83%98) |
| კოლონა | convoy                       | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%90) |
| კოლოფი | box                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231)                     |
| კომეტა | comet                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201)                     |
| კომოდი | chest of drawers             | Retained | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206)                     |
| კონუსი | cone                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კონუსი&oldid=84099277)                     |
| კონცხი | cape                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კონცხი&oldid=84099289)                     |
| კოღო   | mosquito                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)                       |
| კოშკი  | tower                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)                      |
| კოცონი | bonfire                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332)                     |
| კუთხე  | corner                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)                      |
| კულული | curl                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კულული&oldid=84099390)                     |
| კუპონი | coupon                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კუპონი&oldid=84099396)                     |
| კურკა  | fruit stone                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)                      |
| ლავაში | lavash flatbread             | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ლავაში&oldid=84116412)                     |
| ლაზერი | laser                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416)                     |
| ლამაზი | beautiful                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლამაზი&oldid=84116431)                     |
| ლექცია | lecture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლექცია&oldid=88917235)                     |
| ლიდერი | leader                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლიდერი&oldid=84116502)                     |
| ლიმონი | lemon                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519)                     |
| ლოგიკა | logic                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159)                     |
| ლუკმა  | bite, morsel                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)                      |
| მამიდა | paternal aunt                | Retained | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651)                     |
| მამული | ancestral estate             | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მამული&oldid=92289536)                     |
| მანერა | manner                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მანერა&oldid=84099636)                     |
| მარანი | wine cellar                  | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მარანი&oldid=84116688)                     |
| მარცხი | failure; defeat              | Retained | [source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693)                     |
| მარჯვე | skillful, dexterous          | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მარჯვე&oldid=84088864)                     |
| მატყლი | wool                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270)                     |
| მაღალი | tall; high                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=მაღალი&oldid=84090444)                     |
| მდედრი | female animal                | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მდედრი&oldid=84090473)                     |
| მდელო  | meadow                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მდელო&oldid=84116820)                      |
| მეთოდი | method                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მეთოდი&oldid=84099800)                     |
| მეკარე | goalkeeper                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=მეკარე&oldid=84116856)                     |
| მელანი | ink                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862)                     |
| მელოტი | bald                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872)                     |
| მენჯი  | pelvis                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მენჯი&oldid=84116881)                      |
| მეტრო  | metro                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)                      |
| მზიანი | sunny                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151)                     |
| მთვარე | moon                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მთვარე&oldid=92701984)                     |
| მთიანი | mountainous                  | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მთიანი&oldid=88592489)                     |
| მიდამო | surrounding area             | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%98%E1%83%93%E1%83%90%E1%83%9B%E1%83%9D) |
| მიზეზი | reason                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მიზეზი&oldid=84099946)                     |
| მინუსი | minus                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მინუსი&oldid=84099990)                     |
| მირაჟი | mirage                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მირაჟი&oldid=84099992)                     |
| მკაფიო | clear, distinct              | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მკაფიო&oldid=59804862)                     |
| მკაცრი | strict                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მკაცრი&oldid=84088882)                     |
| მკერდი | chest; breast                | Retained | [source](https://en.wiktionary.org/w/index.php?title=მკერდი&oldid=84117115)                     |
| მკლავი | arm                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=მკლავი&oldid=90012056)                     |
| მომხრე | supporter                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=მომხრე&oldid=33309720)                     |
| მონეტა | coin                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079)                     |
| მოპედი | moped                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მოპედი&oldid=84524460)                     |
| მორალი | moral                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მორალი&oldid=84100099)                     |
| მორევი | whirlpool                    | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მორევი&oldid=86570234)                     |
| მორიგე | person on duty               | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%9D%E1%83%A0%E1%83%98%E1%83%92%E1%83%94) |
| მოტივი | motif                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოტივი&oldid=84100123)                     |
| მოწაფე | pupil, apprentice            | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მოწაფე&oldid=88722174)                     |
| მოწმე  | witness                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოწმე&oldid=84100153)                      |
| მოხუცი | elderly person               | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოხუცი&oldid=88799725)                     |
| მჟავა  | acid                         | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მჟავა&oldid=84117295)                      |
| მჟავე  | sour                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მჟავე&oldid=84417167)                      |
| მსაჯი  | referee                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=მსაჯი&oldid=84100170)                      |
| მტვერი | dust                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826)                     |
| მტკიცე | firm; sturdy                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=მტკიცე&oldid=84088908)                     |
| მურაბა | jam, fruit preserve          | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მურაბა&oldid=84100195)                     |
| მუყაო  | cardboard                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=მუყაო&oldid=84100207)                      |
| მუცელი | stomach, tummy               | Retained | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402)                     |
| მღვიმე | cavern                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497)                     |
| მყრალი | foul-smelling                | Retained | [source](https://en.wiktionary.org/w/index.php?title=მყრალი&oldid=84090627)                     |
| მყუდრო | cozy, tranquil               | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მყუდრო&oldid=88415302)                     |
| მშიერი | hungry                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მშიერი&oldid=84088912)                     |
| მჩატე  | lightweight                  | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მჩატე&oldid=75256761)                      |
| მცდარი | incorrect; mistaken          | Retained | [source](https://en.wiktionary.org/w/index.php?title=მცდარი&oldid=84088557)                     |
| მძაფრი | intense, pungent             | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=მძაფრი&oldid=92779934)                     |
| მძიმე  | heavy                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მძიმე&oldid=81821575)                      |
| მწვავე | sharp; acute                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=მწვავე&oldid=75374844)                     |
| მწირი  | scarce; scanty               | Retained | [source](https://en.wiktionary.org/w/index.php?title=მწირი&oldid=85017924)                      |
| მწნილი | pickled food                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=მწნილი&oldid=84100246)                     |
| ნაბადი | felt cloak                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951)                     |
| ნაბიჯი | footstep                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაბიჯი&oldid=92709978)                     |
| ნაგავი | rubbish                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259)                     |
| ნაერთი | compound                     | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნაერთი&oldid=84100263)                     |
| ნათელი | bright; clear                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნათელი&oldid=85476155)                     |
| ნათურა | light bulb                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნათურა&oldid=88113865)                     |
| ნაკადი | gush, spurt, squirt, stream  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276)                     |
| ნალექი | precipitation                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნალექი&oldid=84117542)                     |
| ნამუსი | conscience                   | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნამუსი&oldid=84117554)                     |
| ნატეხი | fragment, shard              | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნატეხი&oldid=84100309)                     |
| ნაღდი  | cash                         | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნაღდი&oldid=84117574)                      |
| ნაღები | cream                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნაღები&oldid=84096713)                     |
| ნაყოფი | fruit of a plant             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაყოფი&oldid=89105168)                     |
| ნაცარი | ash                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231)                     |
| ნაწილი | part; portion                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაწილი&oldid=85068636)                     |
| ნახატი | picture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603)                     |
| ნახირი | cattle herd                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნახირი&oldid=84117611)                     |
| ნაჯახი | axe                          | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნაჯახი&oldid=84117618)                     |
| ნეკნი  | rib                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)                      |
| ნიგოზი | walnut                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნიგოზი&oldid=87748816)                     |
| ნიმუში | sample                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676)                     |
| ნიჟარა | shell; sink                  | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ნიჟარა&oldid=84117680)                     |
| ნიშანი | sign                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468)                     |
| ნომერი | number label; hotel room     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნომერი&oldid=84117710)                     |
| ოაზისი | oasis                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ოაზისი&oldid=91756327)                     |
| ობობა  | spider                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)                      |
| ოპტიკა | optics                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ოპტიკა&oldid=84100472)                     |
| ორბიტა | orbit                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483)                     |
| ორდენი | decoration, medal            | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A0%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
| ორთქლი | steam                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ორთქლი&oldid=87900924)                     |
| ორმაგი | double; twofold              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ორმაგი&oldid=91733129)                     |
| ორსული | pregnant                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ორსული&oldid=84117860)                     |
| ოსტატი | master craftsman             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588)                     |
| პაკეტი | packet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015)                     |
| პანელი | panel                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პანელი&oldid=84100554)                     |
| პანიკა | panic                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პანიკა&oldid=84117941)                     |
| პაპი   | pope                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაპი&oldid=84103471)                       |
| პაროლი | password                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601)                     |
| პასტა  | paste                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)                      |
| პასუხი | answer                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პასუხი&oldid=85067528)                     |
| პატივი | honor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548)                     |
| პედალი | pedal                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=პედალი&oldid=84100646)                     |
| პენალი | pencil case                  | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%94%E1%83%9C%E1%83%90%E1%83%9A%E1%83%98) |
| პენსია | pension                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867)                     |
| პილოტი | pilot                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538)                     |
| პირადი | personal; private            | Retained | [source](https://en.wiktionary.org/w/index.php?title=პირადი&oldid=84090793)                     |
| პირობა | promise; requirement         | Retained | [source](https://en.wiktionary.org/w/index.php?title=პირობა&oldid=85541139)                     |
| პოეზია | poetry                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პოეზია&oldid=88968704)                     |
| პოლუსი | pole (geography)             | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=პოლუსი&oldid=84100798)                     |
| პრემია | prize                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288)                     |
| პრინცი | prince                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987)                     |
| ჟანგი  | rust                         | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ჟანგი&oldid=92228064)                      |
| ჟელე   | jelly                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)                       |
| ჟესტი  | gesture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჟესტი&oldid=84100938)                      |
| რაინდი | knight                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=რაინდი&oldid=86397598)                     |
| რაკეტა | rocket                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=რაკეტა&oldid=88002860)                     |
| რაუნდი | round                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282)                     |
| რგოლი  | ring                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=რგოლი&oldid=84118289)                      |
| რეზინი | rubber                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=რეზინი&oldid=60277300)                     |
| რიცხვი | number; day of the month     | Retained | [source](https://en.wiktionary.org/w/index.php?title=რიცხვი&oldid=85067546)                     |
| რკალი  | hoop, ring                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)                      |
| რობოტი | robot                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728)                     |
| რწყილი | flea                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=რწყილი&oldid=92250765)                     |
| საბაბი | excuse; pretext              | Retained | [source](https://en.wiktionary.org/w/index.php?title=საბაბი&oldid=84118438)                     |
| საბაზო | basic, foundational          | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%96%E1%83%9D) |
| საბელი | leash                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=საბელი&oldid=84118453)                     |
| საგანი | object, subject              | Retained | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780)                     |
| სადენი | electrical wire              | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%93%E1%83%94%E1%83%9C%E1%83%98) |
| სადილი | midday meal                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533)                     |
| საერთო | common; shared               | Retained | [source](https://en.wiktionary.org/w/index.php?title=საერთო&oldid=88645820)                     |
| საკეტი | lock                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=საკეტი&oldid=43965749)                     |
| სალარო | cash register; ticket office | Retained | [source](https://en.wiktionary.org/w/index.php?title=სალარო&oldid=85820915)                     |
| სალონი | salon                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194)                     |
| სამეფო | kingdom                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981)                     |
| სამოსი | clothing; attire             | Retained | [source](https://en.wiktionary.org/w/index.php?title=სამოსი&oldid=84118646)                     |
| საფულე | wallet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843)                     |
| საღამო | evening                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=საღამო&oldid=88849236)                     |
| საღორე | pigsty                       | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%90%E1%83%A6%E1%83%9D%E1%83%A0%E1%83%94) |
| საყურე | earring                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=საყურე&oldid=85101324)                     |
| საცავი | storage; repository          | Retained | [source](https://en.wiktionary.org/w/index.php?title=საცავი&oldid=84103408)                     |
| საცობი | stopper; traffic jam         | Retained | [source](https://en.wiktionary.org/w/index.php?title=საცობი&oldid=84118876)                     |
| საწოლი | bed                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101)                     |
| სახელი | name; fame                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=სახელი&oldid=84118897)                     |
| საჯარო | public                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=საჯარო&oldid=43853043)                     |
| სეანსი | screening, session           | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%94%E1%83%90%E1%83%9C%E1%83%A1%E1%83%98) |
| სეტყვა | hail                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560)                     |
| სექცია | section                      | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=სექცია&oldid=84101382)                     |
| სვავი  | vulture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სვავი&oldid=87901139)                      |
| სვიტრი | sweater                      | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=სვიტრი&oldid=84118977)                     |
| სიახლე | novelty; innovation          | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიახლე&oldid=88800054)                     |
| სიბერე | old age                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიბერე&oldid=84118987)                     |
| სიგანე | width                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409)                     |
| სიგრძე | length                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიგრძე&oldid=84119000)                     |
| სივრცე | space; area                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=სივრცე&oldid=84119003)                     |
| სისხლი | blood                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162)                     |
| სიჩუმე | silence; quiet               | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიჩუმე&oldid=84101577)                     |
| სიცივე | coldness, frigidity          | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113)                     |
| სიცრუე | falsehood                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიცრუე&oldid=87305055)                     |
| სკვერი | public square                | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142)                     |
| სკივრი | chest                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკივრი&oldid=84101617)                     |
| სოკო   | mushroom                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)                       |
| სორო   | burrow                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სორო&oldid=88091310)                       |
| სოფელი | village                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სოფელი&oldid=88647104)                     |
| სპირტი | alcohol                      | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=სპირტი&oldid=87480489)                     |
| სპორტი | sport                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224)                     |
| სტადია | stage, phase                 | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=სტადია&oldid=88171626)                     |
| სტამბა | printing house               | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=სტამბა&oldid=92529944)                     |
| სტატია | article                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457)                     |
| სტიქია | natural disaster             | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%98%E1%83%A5%E1%83%98%E1%83%90) |
| სტრესი | stress                       | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%94%E1%83%A1%E1%83%98) |
| სტუდია | studio                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სტუდია&oldid=84101730)                     |
| სუნამო | perfume                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სუნამო&oldid=84101750)                     |
| სუნელი | spice; seasoning             | Retained | [source](https://en.wiktionary.org/w/index.php?title=სუნელი&oldid=84103259)                     |
| სურდო  | runny nose, head cold        | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%93%E1%83%9D)          |
| სფერო  | sphere; field                | Retained | [source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)                      |
| სწრაფი | quick                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სწრაფი&oldid=84119316)                     |
| სხეული | body                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318)                     |
| სხვენი | attic                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322)                     |
| ტალღა  | wave                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)                      |
| ტაძარი | temple; cathedral            | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტაძარი&oldid=91725864)                     |
| ტექსტი | text                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105)                     |
| ტვირთი | load                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860)                     |
| ტკბილი | sweet                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168)                     |
| ტომარა | sack                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123)                     |
| ტრავმა | trauma; injury               | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტრავმა&oldid=84119433)                     |
| უბრალო | simple                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=უბრალო&oldid=75271163)                     |
| უდაბნო | desert                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660)                     |
| უდავო  | undeniable                   | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=უდავო&oldid=28797786)                      |
| უეცარი | sudden                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=უეცარი&oldid=84089033)                     |
| უიღბლო | unlucky                      | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=უიღბლო&oldid=84119570)                     |
| ულვაში | mustache                     | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ულვაში&oldid=85065856)                     |
| ულუფა  | portion; serving             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ულუფა&oldid=84102036)                      |
| უმწეო  | helpless                     | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=უმწეო&oldid=83145068)                      |
| უნაკლო | flawless                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=უნაკლო&oldid=84119652)                     |
| უფროსი | older; senior                | Retained | [source](https://en.wiktionary.org/w/index.php?title=უფროსი&oldid=84091183)                     |
| უცნობი | unknown; unfamiliar          | Retained | [source](https://en.wiktionary.org/w/index.php?title=უცნობი&oldid=84089062)                     |
| უჯრედი | cell                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=უჯრედი&oldid=85068642)                     |
| ფასადი | façade                       | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ფასადი&oldid=84119798)                     |
| ფაქიზი | delicate                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფაქიზი&oldid=84091230)                     |
| ფერადი | colourful                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფერადი&oldid=84091239)                     |
| ფერფლი | ash                          | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ფერფლი&oldid=84102202)                     |
| ფესვი  | root                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)                      |
| ფიზიკა | physics                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730)                     |
| ფილტვი | lung                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916)                     |
| ფინალი | final                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241)                     |
| ფირუზი | turquoise                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფირუზი&oldid=84088596)                     |
| ფიფქი  | snowflake                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)                      |
| ფიცარი | plank                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ფიცარი&oldid=84102256)                     |
| ფიჭვი  | pine                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)                      |
| ფლეიტა | flute                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფლეიტა&oldid=92228066)                     |
| ფოკუსი | stunt, trick                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფოკუსი&oldid=84102291)                     |
| ფსკერი | bottom                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფსკერი&oldid=84119972)                     |
| ფულადი | monetary                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფულადი&oldid=84091297)                     |
| ფუნტი  | pound                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)                      |
| ფუნჯი  | brush                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)                      |
| ფქვილი | flour                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987)                     |
| ქაბაბი | kebab                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993)                     |
| ქათამი | chicken                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996)                     |
| ქალაქი | city                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093)                     |
| ქვევრი | qvevri wine vessel           | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687)                     |
| ქვეითი | pedestrian                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქვეითი&oldid=84120089)                     |
| ქვრივი | widow or widower             | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ქვრივი&oldid=84120114)                     |
| ქინძი  | coriander                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)                      |
| ქოთანი | plant pot                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქოთანი&oldid=89322782)                     |
| ქომაგი | defender                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქომაგი&oldid=91733127)                     |
| ქონება | property; wealth             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქონება&oldid=90059881)                     |
| ქრთამი | bribe                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ქრთამი&oldid=92921065)                     |
| ღამურა | bat                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღამურა&oldid=92290634)                     |
| ღარიბი | poor                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღარიბი&oldid=84120206)                     |
| ღერძი  | axle; axis                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღერძი&oldid=84120210)                      |
| ღვიძლი | liver                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღვიძლი&oldid=92719057)                     |
| ღმერთი | god; deity                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღმერთი&oldid=88019325)                     |
| ღუმელი | stove                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256)                     |
| ყაბაყი | zucchini                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258)                     |
| ყაჩაღი | robber                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყაჩაღი&oldid=84120295)                     |
| ყვავი  | crow                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)                      |
| ყინული | ice                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551)                     |
| ყოჩი   | ram                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)                       |
| ყულაბა | money box                    | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ყულაბა&oldid=84751497)                     |
| შაბათი | Saturday                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658)                     |
| შაქარი | sugar                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621)                     |
| შენობა | building                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=შენობა&oldid=84102610)                     |
| შობა   | Christmas                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)                       |
| შრიფტი | typeface                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=შრიფტი&oldid=84435051)                     |
| შუბლი  | forehead                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)                      |
| შუქურა | lighthouse                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=შუქურა&oldid=91715399)                     |
| ჩარჩო  | frame                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)                      |
| ჩაქუჩი | hammer                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩაქუჩი&oldid=91072323)                     |
| ჩვევა  | habit                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)                      |
| ჩლიქი  | hoof                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩლიქი&oldid=92229616)                      |
| ჩოგანი | racket                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726)                     |
| ჩონჩხი | skeleton                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089)                     |
| ჩრდილი | shade                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977)                     |
| ცაცხვი | linden tree                  | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ცაცხვი&oldid=87901684)                     |
| ცბიერი | cunning                      | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ცბიერი&oldid=84091583)                     |
| ცენტრი | center                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748)                     |
| ცეცხლი | fire                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცეცხლი&oldid=84120800)                     |
| ციცაბო | steep                        | Batch 04 | [source](https://www.ganmarteba.ge/word/%E1%83%AA%E1%83%98%E1%83%AA%E1%83%90%E1%83%91%E1%83%9D) |
| ცოცხი  | broom                        | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ცოცხი&oldid=84120879)                      |
| ცხვარი | sheep                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538)                     |
| ცხვირი | nose                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521)                     |
| ცხიმი  | fat                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)                      |
| ცხრილი | table; chart                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხრილი&oldid=84102822)                     |
| ძარღვი | vein                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ძარღვი&oldid=84120923)                     |
| ძუნწი  | stingy                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)                      |
| წამალი | medicine                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=წამალი&oldid=84120981)                     |
| წერილი | letter; written message      | Retained | [source](https://en.wiktionary.org/w/index.php?title=წერილი&oldid=85067524)                     |
| წვივი  | shin                         | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=წვივი&oldid=84102879)                      |
| წვრილი | thin, fine                   | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=წვრილი&oldid=84089118)                     |
| წიგნი  | book                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)                      |
| წითელა | measles                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=წითელა&oldid=84102886)                     |
| წითელი | red                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641)                     |
| წიწაკა | pepper                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068)                     |
| წიწილა | chick                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124)                     |
| წყვილი | pair                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227)                     |
| წყნარი | quiet                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680)                     |
| ჭადარი | plane tree                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭადარი&oldid=84121125)                     |
| ჭაღარა | gray-haired                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183)                     |
| ჭაჭა   | grape pomace                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)                       |
| ჭუჭყი  | dirt                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)                      |
| ხაბაზი | baker                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხაბაზი&oldid=84121183)                     |
| ხახვი  | onion                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხახვი&oldid=92248670)                      |
| ხელობა | craft, trade                 | Batch 04 | [source](https://en.wiktionary.org/w/index.php?title=ხელობა&oldid=84121262)                     |
| ხერხი  | saw, method                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)                      |
| ხვალ   | tomorrow                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)                       |
| ხვრელი | hole                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623)                     |
| ხოჭო   | beetle                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)                       |
| ხსნარი | liquid solution              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხსნარი&oldid=85491046)                     |
| ხუნდი  | shackle                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)                      |
| ხშირი  | frequent; dense              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)                      |
| ჯიუტი  | stubborn                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)                      |
| ჯიხვი  | Caucasian mountain goat      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)                      |
| ჯიხური | kiosk                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096)                     |
| ჯოკერი | joker card                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯოკერი&oldid=84121451)                     |
| ჯუჯა   | dwarf                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)                       |
| ჰაერი  | air                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)                      |
| ჰერცი  | hertz                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)                      |

## All required words

| Word   | Recorded meaning                                    | Levels       | Source                                                                                          |
| ------ | --------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 198          | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)                      |
| აბი    | pill                                                | 32, 111, 198 | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)                        |
| აგენტი | agent                                               | 239          | [source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114)                     |
| აგური  | brick                                               | 79           | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)                      |
| ადათი  | custom                                              | 163          | [source](https://en.wiktionary.org/w/index.php?title=ადათი&oldid=84112201)                      |
| ადრე   | early; previously                                   | 107          | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)                       |
| ავად   | ill, sick                                           | 1, 140       | [source](https://en.wiktionary.org/w/index.php?title=ავად&oldid=88672971)                       |
| ავაზა  | cheetah                                             | 162          | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)                      |
| ავარია | accident                                            | 162          | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031)                     |
| ავეჯი  | furniture                                           | 110          | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)                      |
| ავზი   | tank, sink                                          | 12, 162      | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)                       |
| ავი    | wicked, evil                                        | 19, 104      | [source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)                        |
| ავტორი | author                                              | 58           | [source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573)                     |
| აზოტი  | nitrogen                                            | 203          | [source](https://en.wiktionary.org/w/index.php?title=აზოტი&oldid=87888146)                      |
| აზრი   | thought, opinion                                    | 43           | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)                       |
| აკვანი | cradle                                              | 235          | [source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814)                     |
| აკნე   | acne                                                | 206          | [source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)                       |
| აკრი   | acre                                                | 84           | [source](https://en.wiktionary.org/w/index.php?title=აკრი&oldid=84097213)                       |
| ალალი  | honest, sincere                                     | 195          | [source](https://en.wiktionary.org/w/index.php?title=ალალი&oldid=84089330)                      |
| ალი    | blaze, flame, fire                                  | 41, 133      | [source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)                        |
| ალოე   | aloe                                                | 38           | [source](https://en.wiktionary.org/w/index.php?title=ალოე&oldid=84112485)                       |
| ალფა   | alpha                                               | 34           | [source](https://en.wiktionary.org/w/index.php?title=ალფა&oldid=84097261)                       |
| ალღო   | intuition                                           | 199          | [source](https://en.wiktionary.org/w/index.php?title=ალღო&oldid=84097265)                       |
| ალყა   | siege                                               | 89           | [source](https://en.wiktionary.org/w/index.php?title=ალყა&oldid=84112502)                       |
| ამაყი  | proud                                               | 124          | [source](https://en.wiktionary.org/w/index.php?title=ამაყი&oldid=84112515)                      |
| ამინდი | weather                                             | 98           | [source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550)                     |
| ამწე   | crane                                               | 18, 94       | [source](https://en.wiktionary.org/w/index.php?title=ამწე&oldid=33588412)                       |
| ანკესი | fishing hook                                        | 206          | [source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188)                     |
| ანძა   | mast                                                | 51, 235      | [source](https://en.wiktionary.org/w/index.php?title=ანძა&oldid=84097365)                       |
| ანწლი  | elderberry                                          | 56           | [source](https://en.wiktionary.org/w/index.php?title=ანწლი&oldid=87817176)                      |
| არაყი  | vodka                                               | 124          | [source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)                      |
| არენა  | arena                                               | 157          | [source](https://en.wiktionary.org/w/index.php?title=არენა&oldid=84097397)                      |
| არია   | aria                                                | 23, 124      | [source](https://en.wiktionary.org/w/index.php?title=არია&oldid=89954997)                       |
| არმია  | army                                                | 23, 148      | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)                      |
| არსი   | essence                                             | 121          | [source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)                       |
| არფა   | harp                                                | 13, 92       | [source](https://en.wiktionary.org/w/index.php?title=არფა&oldid=93122307)                       |
| არხი   | canal                                               | 134          | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)                       |
| ასაკი  | age                                                 | 170          | [source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)                      |
| ასანთი | match                                               | 147          | [source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032)                     |
| ასთმა  | asthma                                              | 39           | [source](https://en.wiktionary.org/w/index.php?title=ასთმა&oldid=84097441)                      |
| ასკილი | dog rose                                            | 42           | [source](https://en.wiktionary.org/w/index.php?title=ასკილი&oldid=88091340)                     |
| ასლი   | copy                                                | 101, 223     | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)                       |
| ასო    | alphabet letter                                     | 42, 196      | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)                        |
| ატამი  | peach                                               | 233          | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)                      |
| ატომი  | atom                                                | 122          | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)                      |
| აუზი   | pool                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)                       |
| აუტი   | throw-in                                            | 57           | [source](https://en.wiktionary.org/w/index.php?title=აუტი&oldid=39552798)                       |
| აფიშა  | poster                                              | 92           | [source](https://en.wiktionary.org/w/index.php?title=აფიშა&oldid=84983656)                      |
| აფრა   | sail                                                | 13           | [source](https://en.wiktionary.org/w/index.php?title=აფრა&oldid=84113118)                       |
| აჩმა   | achma cheese pastry                                 | 39           | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)                       |
| აწმყო  | the present (time)                                  | 213          | [source](https://en.wiktionary.org/w/index.php?title=აწმყო&oldid=84103243)                      |
| ახალი  | new; fresh                                          | 143          | [source](https://en.wiktionary.org/w/index.php?title=ახალი&oldid=88893525)                      |
| აჯიკა  | adjika                                              | 236          | [source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)                      |
| ბაგე   | lip                                                 | 73           | [source](https://en.wiktionary.org/w/index.php?title=ბაგე&oldid=92454114)                       |
| ბაგირი | cable, heavy rope                                   | 178          | [source](https://en.wiktionary.org/w/index.php?title=ბაგირი&oldid=89591122)                     |
| ბადე   | net                                                 | 180          | [source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)                       |
| ბავშვი | child                                               | 227          | [source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503)                     |
| ბაზა   | base                                                | 34, 180      | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)                       |
| ბაზარი | market                                              | 43           | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284)                     |
| ბაიტი  | byte                                                | 191          | [source](https://en.wiktionary.org/w/index.php?title=ბაიტი&oldid=89301890)                      |
| ბალთა  | buckle                                              | 34           | [source](https://en.wiktionary.org/w/index.php?title=ბალთა&oldid=84097562)                      |
| ბალი   | sweet cherry                                        | 164          | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)                       |
| ბანაკი | camp                                                | 188          | [source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693)                     |
| ბანი   | bass voice                                          | 85, 230      | [source](https://en.wiktionary.org/w/index.php?title=ბანი&oldid=92486488)                       |
| ბანკი  | bank                                                | 111          | [source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)                      |
| ბანქო  | playing cards                                       | 198          | [source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)                      |
| ბარგი  | luggage                                             | 178          | [source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)                      |
| ბარდა  | pea                                                 | 180          | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)                      |
| ბარი   | valley                                              | 16, 151      | [source](https://en.wiktionary.org/w/index.php?title=ბარი&oldid=92290776)                       |
| ბარტყი | chick                                               | 228          | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362)                     |
| ბასი   | bass voice                                          | 113          | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%90%E1%83%A1%E1%83%98)                   |
| ბასრი  | sharp                                               | 73           | [source](https://en.wiktionary.org/w/index.php?title=ბასრი&oldid=84089568)                      |
| ბატი   | goose                                               | 11           | [source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)                       |
| ბატონი | sir                                                 | 36           | [source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444)                     |
| ბაფთა  | bow knot                                            | 34           | [source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)                      |
| ბაქანი | platform                                            | 198          | [source](https://en.wiktionary.org/w/index.php?title=ბაქანი&oldid=84113388)                     |
| ბაღი   | garden                                              | 85           | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)                       |
| ბაჭია  | young rabbit                                        | 164          | [source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)                      |
| ბგერა  | sound                                               | 73           | [source](https://en.wiktionary.org/w/index.php?title=ბგერა&oldid=88996488)                      |
| ბედი   | fate; luck                                          | 52, 209      | [source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)                       |
| ბევრი  | many; much                                          | 64           | [source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)                      |
| ბელი   | bear cub                                            | 52, 231      | [source](https://en.wiktionary.org/w/index.php?title=ბელი&oldid=91740617)                       |
| ბენდი  | band                                                | 209          | [source](https://en.wiktionary.org/w/index.php?title=ბენდი&oldid=90750378)                      |
| ბერი   | monk                                                | 167          | [source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)                       |
| ბეწვი  | fur, pile                                           | 167          | [source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)                      |
| ბეჭი   | shoulder blade                                      | 146          | [source](https://en.wiktionary.org/w/index.php?title=ბეჭი&oldid=89438383)                       |
| ბზა    | box tree                                            | 34, 126      | [source](https://en.wiktionary.org/w/index.php?title=ბზა&oldid=84113487)                        |
| ბზარი  | crack                                               | 43, 228      | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)                      |
| ბზიკი  | wasp                                                | 155          | [source](https://en.wiktionary.org/w/index.php?title=ბზიკი&oldid=84113490)                      |
| ბილეთი | ticket                                              | 158          | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670)                     |
| ბინა   | apartment                                           | 85, 188      | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)                       |
| ბინდი  | twilight                                            | 209          | [source](https://en.wiktionary.org/w/index.php?title=ბინდი&oldid=85068323)                      |
| ბირჟა  | exchange                                            | 230          | [source](https://en.wiktionary.org/w/index.php?title=ბირჟა&oldid=84113535)                      |
| ბიურო  | bureau                                              | 46           | [source](https://en.wiktionary.org/w/index.php?title=ბიურო&oldid=84097685)                      |
| ბიძა   | uncle                                               | 77           | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)                       |
| ბიჭი   | boy                                                 | 111          | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)                       |
| ბლოკი  | building block                                      | 211          | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                                      |
| ბლუზი  | blues music                                         | 155          | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9A%E1%83%A3%E1%83%96%E1%83%98)          |
| ბმული  | link                                                | 35           | [source](https://en.wiktionary.org/w/index.php?title=ბმული&oldid=84113566)                      |
| ბნელი  | dark                                                | 215          | [source](https://en.wiktionary.org/w/index.php?title=ბნელი&oldid=91740783)                      |
| ბოთლი  | bottle                                              | 83           | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)                      |
| ბოლი   | smoke                                               | 5, 164       | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)                       |
| ბოლო   | end                                                 | 105          | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)                       |
| ბოლოკი | radish                                              | 105          | [source](https://en.wiktionary.org/w/index.php?title=ბოლოკი&oldid=91412000)                     |
| ბომბი  | bomb                                                | 182          | [source](https://en.wiktionary.org/w/index.php?title=ბომბი&oldid=84097706)                      |
| ბორტი  | side of a ship                                      | 182          | [source](https://www.ganmarteba.ge/word/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98)          |
| ბოსელი | cowshed                                             | 83           | [source](https://en.wiktionary.org/w/index.php?title=ბოსელი&oldid=84097715)                     |
| ბოძი   | pole                                                | 77           | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)                       |
| ბრაზი  | anger                                               | 228          | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)                      |
| ბრალი  | fault                                               | 178          | [source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)                      |
| ბრბო   | crowd                                               | 182          | [source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)                       |
| ბრმა   | blind                                               | 77           | [source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)                       |
| ბროლი  | crystal                                             | 5            | [source](https://en.wiktionary.org/w/index.php?title=ბროლი&oldid=84097739)                      |
| ბუდე   | nest                                                | 52           | [source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)                       |
| ბუზი   | fly                                                 | 126          | [source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)                       |
| ბუკი   | trumpet                                             | 155          | [source](https://en.wiktionary.org/w/index.php?title=ბუკი&oldid=88002801)                       |
| ბურთი  | ball                                                | 151          | [source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)                      |
| ბურღი  | drill                                               | 46, 126      | [source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)                      |
| ბუტკო  | pistil                                              | 161          | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)                      |
| ბუშტი  | bubble, balloon                                     | 11           | [source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)                      |
| გაზეთი | newspaper                                           | 176          | [source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807)                     |
| გაზი   | gas                                                 | 51           | [source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)                       |
| გალია  | cage                                                | 195          | [source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)                      |
| გამძლე | durable                                             | 71           | [source](https://en.wiktionary.org/w/index.php?title=გამძლე&oldid=43754830)                     |
| განძი  | treasure                                            | 51           | [source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)                      |
| გარეთ  | outside                                             | 107          | [source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)                      |
| გარემო | environment                                         | 96           | [source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637)                     |
| გარსი  | shell                                               | 196          | [source](https://en.wiktionary.org/w/index.php?title=გარსი&oldid=84097862)                      |
| გეგმა  | plan                                                | 96           | [source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)                      |
| გედი   | swan                                                | 107          | [source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)                       |
| გემი   | ship                                                | 71           | [source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)                       |
| გემო   | palate, taste                                       | 96           | [source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)                       |
| გენი   | gene                                                | 209          | [source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)                       |
| გერბი  | coat of arms                                        | 73           | [source](https://en.wiktionary.org/w/index.php?title=გერბი&oldid=90290436)                      |
| გვარი  | surname                                             | 70           | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)                      |
| გველი  | snake, serpent                                      | 231          | [source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)                      |
| გვიან  | late                                                | 106          | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)                      |
| გზა    | way, path, road                                     | 51, 176      | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)                        |
| გიდი   | tour guide                                          | 209          | [source](https://www.ganmarteba.ge/word/%E1%83%92%E1%83%98%E1%83%93%E1%83%98)                   |
| გიტარა | guitar                                              | 233          | [source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739)                     |
| გლეხი  | peasant; countryman                                 | 72           | [source](https://en.wiktionary.org/w/index.php?title=გლეხი&oldid=88065505)                      |
| გლუვი  | smooth                                              | 231          | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)                      |
| გობი   | wooden platter                                      | 36           | [source](https://en.wiktionary.org/w/index.php?title=გობი&oldid=87900106)                       |
| გოგრა  | pumpkin                                             | 96           | [source](https://en.wiktionary.org/w/index.php?title=გოგრა&oldid=92486490)                      |
| გოლი   | goal in sport                                       | 10, 135      | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)                       |
| გოლფი  | golf                                                | 135          | [source](https://en.wiktionary.org/w/index.php?title=გოლფი&oldid=84097945)                      |
| გორა   | hill                                                | 96, 196      | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)                       |
| გოჭი   | piglet                                              | 196          | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)                       |
| გრამი  | gram                                                | 233          | [source](https://en.wiktionary.org/w/index.php?title=გრამი&oldid=91716527)                      |
| გრანტი | grant; scholarship                                  | 239          | [source](https://en.wiktionary.org/w/index.php?title=გრანტი&oldid=88392548)                     |
| გრილი  | cool, breezy, chilly                                | 178          | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)                      |
| გრიპი  | flu                                                 | 205          | [source](https://en.wiktionary.org/w/index.php?title=გრიპი&oldid=84191656)                      |
| გროვა  | heap; pile                                          | 70           | [source](https://en.wiktionary.org/w/index.php?title=გროვა&oldid=91644257)                      |
| გუბე   | puddle                                              | 231          | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)                       |
| გუდა   | leather bag, wineskin                               | 33           | [source](https://en.wiktionary.org/w/index.php?title=გუდა&oldid=88091499)                       |
| გული   | heart                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)                       |
| გუნდი  | choir; team                                         | 33           | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)                      |
| გუშინ  | yesterday                                           | 190          | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)                      |
| დაბა   | small town                                          | 90           | [source](https://en.wiktionary.org/w/index.php?title=დაბა&oldid=91727678)                       |
| დაბალი | low; short                                          | 90           | [source](https://en.wiktionary.org/w/index.php?title=დაბალი&oldid=84089835)                     |
| დაბლა  | down; downstairs                                    | 90           | [source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)                      |
| დავა   | dispute                                             | 1, 140       | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)                       |
| დათვი  | bear                                                | 49           | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)                      |
| დალაქი | barber                                              | 163          | [source](https://en.wiktionary.org/w/index.php?title=დალაქი&oldid=85046705)                     |
| დანა   | knife                                               | 119          | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)                       |
| დარგი  | field; branch of work                               | 107          | [source](https://en.wiktionary.org/w/index.php?title=დარგი&oldid=84098053)                      |
| დარი   | fair weather                                        | 148          | [source](https://en.wiktionary.org/w/index.php?title=დარი&oldid=85046597)                       |
| დასი   | troupe, group                                       | 120          | [source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)                       |
| დაფა   | board, tablet                                       | 13, 119      | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)                       |
| დაფნა  | laurel                                              | 119          | [source](https://en.wiktionary.org/w/index.php?title=დაფნა&oldid=84114442)                      |
| დახლი  | counter                                             | 129          | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)                      |
| დედა   | mother                                              | 74           | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)                       |
| დევი   | giant                                               | 31, 120      | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)                       |
| დეიდა  | maternal aunt                                       | 74           | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)                      |
| დენთი  | gunpowder                                           | 197          | [source](https://en.wiktionary.org/w/index.php?title=დენთი&oldid=55366640)                      |
| დენი   | electric current                                    | 189          | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)                       |
| დეპო   | depot                                               | 54           | [source](https://www.ganmarteba.ge/word/%E1%83%93%E1%83%94%E1%83%9E%E1%83%9D)                   |
| დიადი  | great                                               | 74           | [source](https://en.wiktionary.org/w/index.php?title=დიადი&oldid=84090016)                      |
| დიდი   | big                                                 | 74           | [source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)                       |
| დიეტა  | diet                                                | 48           | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)                      |
| დილა   | morning                                             | 25, 123      | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)                       |
| დილემა | dilemma                                             | 123          | [source](https://en.wiktionary.org/w/index.php?title=დილემა&oldid=84098184)                     |
| დისკი  | disc                                                | 82           | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)                      |
| დოგმა  | dogma                                               | 193          | [source](https://en.wiktionary.org/w/index.php?title=დოგმა&oldid=84098233)                      |
| დოზა   | dose                                                | 109          | [source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)                       |
| დოლარი | dollar                                              | 234          | [source](https://en.wiktionary.org/w/index.php?title=დოლარი&oldid=84098241)                     |
| დოლი   | drum                                                | 25, 201      | [source](https://en.wiktionary.org/w/index.php?title=დოლი&oldid=88002790)                       |
| დონე   | level                                               | 197          | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)                       |
| დოქი   | jug                                                 | 15           | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)                       |
| დრამა  | drama                                               | 148          | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)                      |
| დრო    | time                                                | 20, 226      | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)                        |
| დრონი  | drone                                               | 226          | [source](https://en.wiktionary.org/w/index.php?title=დრონი&oldid=87207395)                      |
| დროული | timely                                              | 201          | [source](https://en.wiktionary.org/w/index.php?title=დროული&oldid=84090042)                     |
| დროშა  | flag                                                | 20           | [source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)                      |
| დუელი  | duel                                                | 52           | [source](https://en.wiktionary.org/w/index.php?title=დუელი&oldid=84098276)                      |
| დღე    | day                                                 | 117          | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)                        |
| ევრო   | euro                                                | 167          | [source](https://en.wiktionary.org/w/index.php?title=ევრო&oldid=84103543)                       |
| ეზო    | yard, courtyard                                     | 45, 179      | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)                        |
| ეკალი  | thorn                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)                      |
| ეკრანი | screen                                              | 157          | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327)                     |
| ელვა   | lightning                                           | 99           | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)                       |
| ელფი   | elf                                                 | 136          | [source](https://en.wiktionary.org/w/index.php?title=ელფი&oldid=84098344)                       |
| ელჩი   | ambassador                                          | 81           | [source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)                       |
| ემოცია | emotion                                             | 93           | [source](https://en.wiktionary.org/w/index.php?title=ემოცია&oldid=87755532)                     |
| ენა    | language; tongue                                    | 18, 157, 239 | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)                        |
| ენოტი  | raccoon                                             | 62           | [source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)                      |
| ეპოქა  | epoch                                               | 152          | [source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)                      |
| ერა    | era                                                 | 2, 239       | [source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)                        |
| ერბო   | ghee, clarified butter                              | 46           | [source](https://en.wiktionary.org/w/index.php?title=ერბო&oldid=55359898)                       |
| ერთად  | together                                            | 107          | [source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)                      |
| ერი    | nation                                              | 37, 127, 221 | [source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)                        |
| ეტაპი  | stage                                               | 41           | [source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)                      |
| ეტლი   | carriage                                            | 114          | [source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)                       |
| ექიმი  | doctor                                              | 87           | [source](https://en.wiktionary.org/w/index.php?title=ექიმი&oldid=88798763)                      |
| ექო    | echo                                                | 152          | [source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)                        |
| ეშვი   | fang                                                | 81           | [source](https://en.wiktionary.org/w/index.php?title=ეშვი&oldid=84114997)                       |
| ეშმაკი | devil                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=ეშმაკი&oldid=85068322)                     |
| ეჭვი   | doubt; suspicion                                    | 99           | [source](https://en.wiktionary.org/w/index.php?title=ეჭვი&oldid=85513584)                       |
| ვაგონი | wagon                                               | 106          | [source](https://en.wiktionary.org/w/index.php?title=ვაგონი&oldid=92486955)                     |
| ვადა   | term, deadline                                      | 1, 140       | [source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)                       |
| ვაზა   | vase                                                | 162          | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)                       |
| ვაზი   | vine, grapevine                                     | 102          | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)                       |
| ვაკე   | plain, plane                                        | 99           | [source](https://en.wiktionary.org/w/index.php?title=ვაკე&oldid=84098446)                       |
| ვალი   | debt                                                | 3, 165       | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)                       |
| ვალსი  | waltz                                               | 150          | [source](https://en.wiktionary.org/w/index.php?title=ვალსი&oldid=84098452)                      |
| ვაჟი   | son                                                 | 24           | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)                       |
| ვარდი  | rose                                                | 102          | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)                      |
| ვაშლი  | apple                                               | 3            | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)                      |
| ველი   | field                                               | 31, 154      | [source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)                       |
| ვენა   | vein                                                | 18           | [source](https://en.wiktionary.org/w/index.php?title=ვენა&oldid=85017282)                       |
| ვეტო   | veto                                                | 154          | [source](https://en.wiktionary.org/w/index.php?title=ვეტო&oldid=84098503)                       |
| ვიდეო  | video                                               | 154          | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)                      |
| ვიზა   | visa                                                | 12, 203      | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)                       |
| ვილა   | villa                                               | 3, 130       | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)                       |
| ვირთხა | rat                                                 | 168          | [source](https://en.wiktionary.org/w/index.php?title=ვირთხა&oldid=84115189)                     |
| ვირი   | donkey, ass                                         | 212          | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)                       |
| ვიწრო  | narrow                                              | 167          | [source](https://en.wiktionary.org/w/index.php?title=ვიწრო&oldid=84088784)                      |
| ვოლტი  | volt                                                | 154          | [source](https://en.wiktionary.org/w/index.php?title=ვოლტი&oldid=84098545)                      |
| ზავი   | truce                                               | 203          | [source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)                       |
| ზარი   | bell                                                | 8, 162       | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)                       |
| ზებრა  | zebra                                               | 180          | [source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)                      |
| ზეგ    | day after tomorrow                                  | 176          | [source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)                        |
| ზედა   | upper                                               | 180          | [source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)                       |
| ზეთი   | oil                                                 | 22           | [source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)                       |
| ზეიმი  | celebration                                         | 22           | [source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)                      |
| ზეცა   | heaven                                              | 177          | [source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)                       |
| ზვავი  | avalanche                                           | 12           | [source](https://en.wiktionary.org/w/index.php?title=ზვავი&oldid=84115331)                      |
| ზიანი  | damage                                              | 40           | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)                      |
| ზმნა   | verb                                                | 40           | [source](https://en.wiktionary.org/w/index.php?title=ზმნა&oldid=92945166)                       |
| ზნე    | character; habit                                    | 179          | [source](https://en.wiktionary.org/w/index.php?title=ზნე&oldid=92992532)                        |
| ზოგადი | general                                             | 193          | [source](https://en.wiktionary.org/w/index.php?title=ზოგადი&oldid=84090161)                     |
| ზომა   | measure, quantity, size                             | 193          | [source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)                       |
| ზონა   | zone                                                | 109          | [source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)                       |
| ზურგი  | back                                                | 205          | [source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)                      |
| ზუსტი  | precise; exact                                      | 65           | [source](https://en.wiktionary.org/w/index.php?title=ზუსტი&oldid=84088793)                      |
| ზღარბი | hedgehog                                            | 126          | [source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278)                     |
| ზღვა   | sea                                                 | 102          | [source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)                       |
| ზღვარი | boundary                                            | 102          | [source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789)                     |
| თაგვი  | mouse                                               | 176          | [source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)                      |
| თავი   | head                                                | 89, 169      | [source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)                       |
| თავლა  | stable                                              | 89           | [source](https://en.wiktionary.org/w/index.php?title=თავლა&oldid=85073944)                      |
| თათი   | paw                                                 | 113          | [source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)                       |
| თარო   | board, shelf                                        | 76           | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)                       |
| თასი   | bowl, chalice                                       | 147          | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)                       |
| თასმა  | braid                                               | 39, 238      | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)                      |
| თაღი   | arch                                                | 147          | [source](https://en.wiktionary.org/w/index.php?title=თაღი&oldid=92422626)                       |
| თახვი  | beaver                                              | 169          | [source](https://en.wiktionary.org/w/index.php?title=თახვი&oldid=89977530)                      |
| თბილი  | warm                                                | 158          | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)                      |
| თევზი  | fish                                                | 176          | [source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)                      |
| თემა   | theme; essay                                        | 21           | [source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)                       |
| თემი   | community                                           | 22           | [source](https://en.wiktionary.org/w/index.php?title=თემი&oldid=85086632)                       |
| თეორია | theory                                              | 131          | [source](https://en.wiktionary.org/w/index.php?title=თეორია&oldid=84098686)                     |
| თერძი  | tailor                                              | 131          | [source](https://en.wiktionary.org/w/index.php?title=თერძი&oldid=84103313)                      |
| თესლი  | seed                                                | 83           | [source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)                      |
| თექა   | felt                                                | 152          | [source](https://en.wiktionary.org/w/index.php?title=თექა&oldid=84115581)                       |
| თეძო   | hip, thigh                                          | 131          | [source](https://en.wiktionary.org/w/index.php?title=თეძო&oldid=84098694)                       |
| თვალი  | eye                                                 | 89           | [source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)                      |
| თვე    | month                                               | 181          | [source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)                        |
| თივა   | hay                                                 | 19, 185      | [source](https://en.wiktionary.org/w/index.php?title=თივა&oldid=84115648)                       |
| თიხა   | clay                                                | 6, 100       | [source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)                       |
| თმა    | hair                                                | 21, 238      | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)                        |
| თოვლი  | snow                                                | 19           | [source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)                      |
| თოკი   | rope                                                | 186          | [source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)                       |
| თოლია  | seagull                                             | 19           | [source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)                      |
| თონე   | bread oven                                          | 197          | [source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)                       |
| თოფი   | gun                                                 | 208          | [source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)                       |
| თოხი   | hoe                                                 | 6            | [source](https://en.wiktionary.org/w/index.php?title=თოხი&oldid=88091343)                       |
| თუთა   | mulberry                                            | 113          | [source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)                       |
| თუთია  | zinc                                                | 113          | [source](https://en.wiktionary.org/w/index.php?title=თუთია&oldid=84098719)                      |
| თხა    | goat                                                | 6, 168       | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)                        |
| თხელი  | thin                                                | 91           | [source](https://en.wiktionary.org/w/index.php?title=თხელი&oldid=84090228)                      |
| თხილი  | hazelnut                                            | 187          | [source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)                      |
| იარა   | wound                                               | 23, 233      | [source](https://en.wiktionary.org/w/index.php?title=იარა&oldid=84115754)                       |
| იაფი   | cheap                                               | 192          | [source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)                       |
| იახტა  | yacht                                               | 60           | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)                      |
| იგავი  | fable                                               | 106          | [source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)                      |
| იდეა   | idea                                                | 48           | [source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)                       |
| ილეთი  | trick, technique                                    | 158          | [source](https://en.wiktionary.org/w/index.php?title=ილეთი&oldid=84115797)                      |
| იმედი  | hope                                                | 123          | [source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)                      |
| იოგა   | yoga                                                | 106, 193     | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)                       |
| იოდი   | iodine                                              | 82, 234      | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)                       |
| იოლი   | easy                                                | 42, 187      | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)                       |
| ირემი  | deer                                                | 87           | [source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)                      |
| ირონია | irony                                               | 108          | [source](https://en.wiktionary.org/w/index.php?title=ირონია&oldid=84098887)                     |
| ისარი  | arrow                                               | 225          | [source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)                      |
| იუბილე | anniversary celebration                             | 52           | [source](https://www.ganmarteba.ge/word/%E1%83%98%E1%83%A3%E1%83%91%E1%83%98%E1%83%9A%E1%83%94) |
| იღბალი | luck                                                | 88           | [source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167)                     |
| იღლია  | armpit                                              | 88           | [source](https://en.wiktionary.org/w/index.php?title=იღლია&oldid=84115945)                      |
| იხვი   | duck                                                | 169          | [source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)                       |
| იჯარა  | lease                                               | 236          | [source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)                      |
| კაბა   | dress, frock                                        | 188          | [source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)                       |
| კაბინა | cabin                                               | 188          | [source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910)                     |
| კავი   | hook                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=კავი&oldid=88180606)                       |
| კათხა  | mug                                                 | 100          | [source](https://en.wiktionary.org/w/index.php?title=კათხა&oldid=84115971)                      |
| კალა   | tin                                                 | 100          | [source](https://en.wiktionary.org/w/index.php?title=კალა&oldid=91725182)                       |
| კალამი | pen                                                 | 78           | [source](https://en.wiktionary.org/w/index.php?title=კალამი&oldid=92468658)                     |
| კალთა  | lap, skirt hem                                      | 100          | [source](https://en.wiktionary.org/w/index.php?title=კალთა&oldid=84098950)                      |
| კალია  | grasshopper                                         | 78           | [source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)                      |
| კამა   | dill                                                | 78           | [source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)                       |
| კანი   | skin                                                | 173          | [source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)                       |
| კანოე  | canoe                                               | 67           | [source](https://en.wiktionary.org/w/index.php?title=კანოე&oldid=84098985)                      |
| კანონი | law                                                 | 216          | [source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329)                     |
| კანჭი  | shin                                                | 111          | [source](https://en.wiktionary.org/w/index.php?title=კანჭი&oldid=84116024)                      |
| კაჟი   | flint                                               | 24           | [source](https://en.wiktionary.org/w/index.php?title=კაჟი&oldid=84099010)                       |
| კარატი | carat                                               | 118          | [source](https://en.wiktionary.org/w/index.php?title=კარატი&oldid=84099016)                     |
| კარაქი | butter                                              | 236          | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208)                     |
| კარი   | door                                                | 28, 128      | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)                       |
| კარტი  | card                                                | 118          | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)                      |
| კასრი  | barrel                                              | 30           | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)                      |
| კატა   | cat                                                 | 118          | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)                       |
| კაუჭი  | hook                                                | 153          | [source](https://en.wiktionary.org/w/index.php?title=კაუჭი&oldid=88081762)                      |
| კაფე   | cafe                                                | 2, 156       | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)                       |
| კაცი   | man                                                 | 206          | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)                       |
| კბილი  | tooth                                               | 211          | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)                      |
| კერა   | hearth                                              | 2, 157       | [source](https://en.wiktionary.org/w/index.php?title=კერა&oldid=91649986)                       |
| კერძი  | dish                                                | 224          | [source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)                      |
| კერძო  | private                                             | 224          | [source](https://en.wiktionary.org/w/index.php?title=კერძო&oldid=75680066)                      |
| კეტი   | stick                                               | 114          | [source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)                       |
| კეფა   | back of the head                                    | 2, 156       | [source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)                       |
| კეცი   | ketsi, earthenware frying pan (usually from clay)   | 206          | [source](https://en.wiktionary.org/w/index.php?title=კეცი&oldid=84116112)                       |
| კეხი   | saddle tree, nose hump                              | 72           | [source](https://en.wiktionary.org/w/index.php?title=კეხი&oldid=91570728)                       |
| კვალი  | trail, clue                                         | 99           | [source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)                      |
| კვანძი | knot                                                | 235          | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089)                     |
| კვირა  | week                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)                      |
| კვიცი  | foal                                                | 112          | [source](https://en.wiktionary.org/w/index.php?title=კვიცი&oldid=91715232)                      |
| კვოტა  | quota                                               | 203          | [source](https://en.wiktionary.org/w/index.php?title=კვოტა&oldid=84099109)                      |
| კიბე   | ladder, stair, staircase, stairway                  | 64           | [source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)                       |
| კიბო   | barnacle; cancer                                    | 105, 211     | [source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)                       |
| კიდე   | edge                                                | 137          | [source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)                       |
| კივი   | kiwi fruit; kiwi bird                               | 112          | [source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)                       |
| კილო   | kilo                                                | 80, 186      | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)                       |
| კინო   | cinema; movie                                       | 7, 115       | [source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)                       |
| კირი   | lime, calcium oxide                                 | 27, 142      | [source](https://en.wiktionary.org/w/index.php?title=კირი&oldid=85066928)                       |
| კისერი | neck                                                | 27           | [source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129)                     |
| კიტრი  | cucumber                                            | 160          | [source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)                      |
| კლასი  | class                                               | 42           | [source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)                      |
| კლდე   | cliff, crag, scar, rock                             | 137          | [source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)                       |
| კლიტე  | lock                                                | 114          | [source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)                      |
| კლოუნი | clown                                               | 115          | [source](https://en.wiktionary.org/w/index.php?title=კლოუნი&oldid=84116208)                     |
| კლუბი  | club                                                | 155          | [source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)                      |
| კნუტი  | kitten                                              | 173          | [source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)                      |
| კოალა  | koala                                               | 63           | [source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)                      |
| კობრა  | cobra                                               | 16           | [source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)                      |
| კობრი  | carp                                                | 16           | [source](https://en.wiktionary.org/w/index.php?title=კობრი&oldid=84116215)                      |
| კოდი   | code                                                | 82           | [source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)                       |
| კოვზი  | spoon                                               | 203          | [source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)                      |
| კომა   | coma                                                | 63           | [source](https://en.wiktionary.org/w/index.php?title=კომა&oldid=84099194)                       |
| კომლი  | household                                           | 186          | [source](https://en.wiktionary.org/w/index.php?title=კომლი&oldid=87677676)                      |
| კომში  | quince                                              | 132          | [source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)                      |
| კონა   | bundle                                              | 67           | [source](https://en.wiktionary.org/w/index.php?title=კონა&oldid=84099233)                       |
| კოპი   | bump                                                | 114          | [source](https://en.wiktionary.org/w/index.php?title=კოპი&oldid=90518672)                       |
| კორტი  | tennis-court                                        | 224          | [source](https://en.wiktionary.org/w/index.php?title=კორტი&oldid=84116301)                      |
| კოჭა   | spool                                               | 216          | [source](https://en.wiktionary.org/w/index.php?title=კოჭა&oldid=84099333)                       |
| კოჭი   | ankle                                               | 7, 216       | [source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)                       |
| კრავი  | lamb                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=კრავი&oldid=84116326)                      |
| კრემი  | cream                                               | 132          | [source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)                      |
| კრივი  | boxing                                              | 112          | [source](https://en.wiktionary.org/w/index.php?title=კრივი&oldid=92228879)                      |
| კრუხი  | broody hen                                          | 142          | [source](https://en.wiktionary.org/w/index.php?title=კრუხი&oldid=84099373)                      |
| კუბი   | cube                                                | 161          | [source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)                       |
| კუბო   | coffin                                              | 161          | [source](https://en.wiktionary.org/w/index.php?title=კუბო&oldid=88091344)                       |
| კუდი   | tail                                                | 142          | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)                       |
| კუზი   | hump                                                | 155          | [source](https://en.wiktionary.org/w/index.php?title=კუზი&oldid=84099382)                       |
| კუნთი  | muscle                                              | 115          | [source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)                      |
| კუნძი  | stump                                               | 84           | [source](https://en.wiktionary.org/w/index.php?title=კუნძი&oldid=84116386)                      |
| კუპატი | kupati sausage                                      | 173          | [source](https://en.wiktionary.org/w/index.php?title=კუპატი&oldid=84096710)                     |
| კუპრი  | tar                                                 | 160          | [source](https://en.wiktionary.org/w/index.php?title=კუპრი&oldid=92228107)                      |
| კურსი  | course; exchange rate                               | 30           | [source](https://en.wiktionary.org/w/index.php?title=კურსი&oldid=69618502)                      |
| კუჭი   | stomach                                             | 7            | [source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)                       |
| ლაგამი | bridle                                              | 68           | [source](https://en.wiktionary.org/w/index.php?title=ლაგამი&oldid=91776622)                     |
| ლავა   | lava                                                | 141          | [source](https://en.wiktionary.org/w/index.php?title=ლავა&oldid=84099414)                       |
| ლაიმი  | lime (fruit)                                        | 192          | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)                      |
| ლამა   | llama                                               | 68, 171      | [source](https://en.wiktionary.org/w/index.php?title=ლამა&oldid=84099426)                       |
| ლამპა  | lamp                                                | 78, 171      | [source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)                      |
| ლარი   | lari (Georgian currency)                            | 61, 145      | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)                       |
| ლაქა   | spot, stain                                         | 14, 163      | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)                       |
| ლაღი   | carefree                                            | 199          | [source](https://en.wiktionary.org/w/index.php?title=ლაღი&oldid=90036516)                       |
| ლეიბი  | mattress                                            | 158          | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)                      |
| ლეკვი  | puppy                                               | 137          | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)                      |
| ლენტი  | ribbon                                              | 200          | [source](https://en.wiktionary.org/w/index.php?title=ლენტი&oldid=84099468)                      |
| ლექსი  | poem                                                | 219          | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)                      |
| ლეღვი  | fig                                                 | 31           | [source](https://en.wiktionary.org/w/index.php?title=ლეღვი&oldid=88091333)                      |
| ლიგა   | league                                              | 68, 195      | [source](https://en.wiktionary.org/w/index.php?title=ლიგა&oldid=84099491)                       |
| ლითონი | metal                                               | 187          | [source](https://en.wiktionary.org/w/index.php?title=ლითონი&oldid=59533173)                     |
| ლინზა  | lens                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)                      |
| ლირა   | lira                                                | 50, 125      | [source](https://en.wiktionary.org/w/index.php?title=ლირა&oldid=84099516)                       |
| ლიტრი  | litre                                               | 50           | [source](https://en.wiktionary.org/w/index.php?title=ლიტრი&oldid=84099523)                      |
| ლიფტი  | elevator                                            | 192          | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)                      |
| ლობიო  | bean                                                | 26, 105      | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)                      |
| ლოდი   | block, rubble                                       | 25, 154      | [source](https://en.wiktionary.org/w/index.php?title=ლოდი&oldid=84099538)                       |
| ლომი   | lion                                                | 54           | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)                       |
| ლორი   | ham                                                 | 5, 80        | [source](https://en.wiktionary.org/w/index.php?title=ლორი&oldid=84116556)                       |
| ლოქო   | catfish                                             | 26           | [source](https://en.wiktionary.org/w/index.php?title=ლოქო&oldid=92197076)                       |
| ლოყა   | cheek                                               | 145          | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)                       |
| ლუდი   | beer                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)                       |
| ლულა   | barrel of a gun                                     | 195          | [source](https://en.wiktionary.org/w/index.php?title=ლულა&oldid=84103557)                       |
| ლურჯი  | blue                                                | 159          | [source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)                      |
| ლუწი   | even                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)                       |
| მაგარი | hard, strong                                        | 233          | [source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421)                     |
| მაგია  | magic                                               | 68           | [source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)                      |
| მაგიდა | table                                               | 148          | [source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591)                     |
| მადა   | appetite, stomach                                   | 98           | [source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)                       |
| მავნე  | harmful                                             | 18           | [source](https://en.wiktionary.org/w/index.php?title=მავნე&oldid=45716925)                      |
| მაზლი  | husband's brother                                   | 144          | [source](https://en.wiktionary.org/w/index.php?title=მაზლი&oldid=84608836)                      |
| მაისი  | May                                                 | 75           | [source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)                      |
| მალა   | vertebra                                            | 63           | [source](https://en.wiktionary.org/w/index.php?title=მალა&oldid=91725189)                       |
| მალამო | ointment                                            | 63           | [source](https://en.wiktionary.org/w/index.php?title=მალამო&oldid=84099608)                     |
| მალე   | soon                                                | 38, 123      | [source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)                       |
| მამა   | father                                              | 63           | [source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)                       |
| მამალი | rooster                                             | 68           | [source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460)                     |
| მამრი  | male animal                                         | 53           | [source](https://en.wiktionary.org/w/index.php?title=მამრი&oldid=84116656)                      |
| მანგო  | mango                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)                      |
| მანეთი | ruble                                               | 21           | [source](https://en.wiktionary.org/w/index.php?title=მანეთი&oldid=91150504)                     |
| მანია  | mania                                               | 98           | [source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)                      |
| მარაგი | reserve; stockpile                                  | 148          | [source](https://en.wiktionary.org/w/index.php?title=მარაგი&oldid=84116683)                     |
| მარილი | salt                                                | 125          | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420)                     |
| მარკა  | postage stamp                                       | 124          | [source](https://en.wiktionary.org/w/index.php?title=მარკა&oldid=84099669)                      |
| მარტო  | alone                                               | 232          | [source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)                      |
| მარში  | march                                               | 125          | [source](https://en.wiktionary.org/w/index.php?title=მარში&oldid=84099689)                      |
| მასა   | mass                                                | 39, 238      | [source](https://www.ganmarteba.ge/word/%E1%83%9B%E1%83%90%E1%83%A1%E1%83%90)                   |
| მასალა | material                                            | 238          | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175)                     |
| მაწონი | matsoni yogurt                                      | 213          | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051)                     |
| მახე   | trap                                                | 93, 177      | [source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)                       |
| მაჯა   | wrist                                               | 53           | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)                       |
| მგელი  | wolf                                                | 71           | [source](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)                      |
| მედალი | medal                                               | 123          | [source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774)                     |
| მედია  | media                                               | 117          | [source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)                      |
| მელა   | fox                                                 | 41, 133      | [source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)                       |
| მენიუ  | menu                                                | 172          | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)                      |
| მერი   | mayor                                               | 183          | [source](https://en.wiktionary.org/w/index.php?title=მერი&oldid=84099841)                       |
| მეტალი | metal                                               | 41           | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455)                     |
| მეტრი  | metre                                               | 48           | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)                      |
| მეფე   | king                                                | 207          | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)                       |
| მზა    | ready                                               | 8, 166       | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)                        |
| მზე    | Sun                                                 | 22, 166      | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)                        |
| მთა    | mountain, hill                                      | 49, 152      | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)                        |
| მთელი  | whole; entire                                       | 186          | [source](https://en.wiktionary.org/w/index.php?title=მთელი&oldid=91740782)                      |
| მიზანი | goal; target                                        | 40           | [source](https://en.wiktionary.org/w/index.php?title=მიზანი&oldid=84117018)                     |
| მითი   | myth                                                | 22           | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)                       |
| მილი   | tube; mile                                          | 35, 125      | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)                       |
| მინა   | glass (material)                                    | 21, 98       | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)                       |
| მისია  | mission                                             | 75           | [source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)                      |
| მიწა   | earth, soil                                         | 213          | [source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)                       |
| მლაშე  | salty                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=მლაშე&oldid=75374767)                      |
| მოდა   | fashion                                             | 193          | [source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)                       |
| მოდელი | model                                               | 54           | [source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844)                     |
| მოდური | fashionable                                         | 138          | [source](https://en.wiktionary.org/w/index.php?title=მოდური&oldid=84088886)                     |
| მოკლე  | short                                               | 186          | [source](https://en.wiktionary.org/w/index.php?title=მოკლე&oldid=88449850)                      |
| მოლარე | cashier                                             | 38           | [source](https://en.wiktionary.org/w/index.php?title=მოლარე&oldid=88326243)                     |
| მონა   | slave                                               | 44, 175      | [source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)                       |
| მორი   | log, timber                                         | 182          | [source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)                       |
| მსუყე  | rich, heavy (food)                                  | 172          | [source](https://en.wiktionary.org/w/index.php?title=მსუყე&oldid=84088905)                      |
| მსხალი | pear                                                | 223          | [source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341)                     |
| მტერი  | enemy                                               | 48           | [source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)                      |
| მტრედი | pigeon, dove                                        | 48           | [source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351)                     |
| მუდამ  | always                                              | 222          | [source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)                      |
| მუზა   | muse                                                | 171          | [source](https://en.wiktionary.org/w/index.php?title=მუზა&oldid=84100186)                       |
| მუმია  | mummy                                               | 222          | [source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)                      |
| მურა   | brown                                               | 86           | [source](https://en.wiktionary.org/w/index.php?title=მურა&oldid=91715082)                       |
| მური   | soot                                                | 212          | [source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)                       |
| მუსი   | mousse                                              | 30, 172      | [source](https://en.wiktionary.org/w/index.php?title=მუსი&oldid=84100198)                       |
| მუსიკა | music                                               | 30           | [source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574)                     |
| მუქი   | dark                                                | 219          | [source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)                       |
| მუშა   | worker                                              | 57           | [source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)                       |
| მუშტი  | fist                                                | 57           | [source](https://en.wiktionary.org/w/index.php?title=მუშტი&oldid=84117401)                      |
| მუხა   | oak                                                 | 204          | [source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)                       |
| მუხლი  | knee                                                | 35           | [source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)                      |
| მუხტი  | charge                                              | 57           | [source](https://en.wiktionary.org/w/index.php?title=მუხტი&oldid=87730411)                      |
| მყარი  | solid; stable                                       | 124          | [source](https://en.wiktionary.org/w/index.php?title=მყარი&oldid=84090626)                      |
| მყესი  | tendon                                              | 183          | [source](https://en.wiktionary.org/w/index.php?title=მყესი&oldid=84100227)                      |
| მყიფე  | fragile                                             | 55           | [source](https://en.wiktionary.org/w/index.php?title=მყიფე&oldid=75374822)                      |
| მშრალი | dry                                                 | 125          | [source](https://en.wiktionary.org/w/index.php?title=მშრალი&oldid=84090631)                     |
| მცირე  | small                                               | 221          | [source](https://en.wiktionary.org/w/index.php?title=მცირე&oldid=92228054)                      |
| მძივი  | bead                                                | 212          | [source](https://en.wiktionary.org/w/index.php?title=მძივი&oldid=84100240)                      |
| მძღოლი | driver                                              | 199          | [source](https://en.wiktionary.org/w/index.php?title=მძღოლი&oldid=88648707)                     |
| მწარე  | bitter; spicy                                       | 94           | [source](https://en.wiktionary.org/w/index.php?title=მწარე&oldid=91715973)                      |
| მწერი  | insect                                              | 207          | [source](https://en.wiktionary.org/w/index.php?title=მწერი&oldid=91784205)                      |
| მწვადი | grilled meat on a skewer                            | 49           | [source](https://en.wiktionary.org/w/index.php?title=მწვადი&oldid=87884655)                     |
| მწვანე | green                                               | 18           | [source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780)                     |
| მწიფე  | ripe                                                | 207          | [source](https://en.wiktionary.org/w/index.php?title=მწიფე&oldid=84088916)                      |
| მჭადი  | Georgian cornbread                                  | 117          | [source](https://en.wiktionary.org/w/index.php?title=მჭადი&oldid=84117468)                      |
| მჭიდრო | tight; densely packed                               | 138          | [source](https://en.wiktionary.org/w/index.php?title=მჭიდრო&oldid=84088917)                     |
| მჭლე   | lean (meat)                                         | 221          | [source](https://en.wiktionary.org/w/index.php?title=მჭლე&oldid=81626414)                       |
| მხარე  | side; region                                        | 177          | [source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)                      |
| მხარი  | shoulder                                            | 204          | [source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)                      |
| მხეცი  | beast                                               | 93           | [source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)                      |
| ნაგაზი | sheepdog                                            | 51           | [source](https://en.wiktionary.org/w/index.php?title=ნაგაზი&oldid=87732950)                     |
| ნადიმი | feast                                               | 98           | [source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506)                     |
| ნავთი  | kerosene                                            | 185          | [source](https://en.wiktionary.org/w/index.php?title=ნავთი&oldid=84117508)                      |
| ნავი   | boat                                                | 106, 214     | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)                       |
| ნაზი   | gentle; tender                                      | 40           | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)                       |
| ნაკერი | stitch                                              | 157          | [source](https://en.wiktionary.org/w/index.php?title=ნაკერი&oldid=44505182)                     |
| ნაკლი  | defect                                              | 188          | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)                      |
| ნალი   | horseshoe                                           | 56           | [source](https://en.wiktionary.org/w/index.php?title=ნალი&oldid=84117544)                       |
| ნამი   | dew, morning dew                                    | 21, 103      | [source](https://en.wiktionary.org/w/index.php?title=ნამი&oldid=91716533)                       |
| ნაოჭი  | wrinkle                                             | 216          | [source](https://en.wiktionary.org/w/index.php?title=ნაოჭი&oldid=84100297)                      |
| ნაპირი | shore, strand, waterside                            | 28           | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827)                     |
| ნარდი  | backgammon                                          | 33           | [source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)                      |
| ნაშთი  | remainder                                           | 185          | [source](https://en.wiktionary.org/w/index.php?title=ნაშთი&oldid=84100318)                      |
| ნაძვი  | spruce                                              | 235          | [source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)                      |
| ნაჭერი | piece, cloth                                        | 220          | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132)                     |
| ნება   | will                                                | 215          | [source](https://en.wiktionary.org/w/index.php?title=ნება&oldid=84096905)                       |
| ნელი   | slow                                                | 59, 200      | [source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)                       |
| ნემსი  | needle                                              | 172          | [source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)                      |
| ნერგი  | sapling                                             | 239          | [source](https://en.wiktionary.org/w/index.php?title=ნერგი&oldid=91680451)                      |
| ნერვი  | nerve                                               | 139          | [source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)                      |
| ნესვი  | melon                                               | 59           | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)                      |
| ნეფე   | bridegroom                                          | 67           | [source](https://en.wiktionary.org/w/index.php?title=ნეფე&oldid=84100382)                       |
| ნიავი  | breeze                                              | 185          | [source](https://www.ganmarteba.ge/word/%E1%83%9C%E1%83%98%E1%83%90%E1%83%95%E1%83%98)          |
| ნივთი  | thing; object                                       | 185          | [source](https://en.wiktionary.org/w/index.php?title=ნივთი&oldid=92215809)                      |
| ნიკაპი | chin                                                | 28           | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203)                     |
| ნიორი  | garlic                                              | 108          | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)                      |
| ნისლი  | fog, mist                                           | 200          | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)                      |
| ნიღაბი | mask                                                | 85           | [source](https://en.wiktionary.org/w/index.php?title=ნიღაბი&oldid=84117691)                     |
| ნიშა   | niche                                               | 229          | [source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)                       |
| ნიჭი   | talent                                              | 111          | [source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)                       |
| ნორმა  | norm; standard                                      | 44, 175      | [source](https://en.wiktionary.org/w/index.php?title=ნორმა&oldid=87787628)                      |
| ნოხი   | rug                                                 | 187          | [source](https://en.wiktionary.org/w/index.php?title=ნოხი&oldid=84100426)                       |
| ნუგეში | comfort, consolation                                | 190          | [source](https://en.wiktionary.org/w/index.php?title=ნუგეში&oldid=84117723)                     |
| ნუკრი  | fawn                                                | 84           | [source](https://en.wiktionary.org/w/index.php?title=ნუკრი&oldid=84100428)                      |
| ნული   | zero                                                | 115          | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)                       |
| ნუში   | almond                                              | 190          | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)                       |
| ობი    | mould                                               | 5, 83, 211   | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)                        |
| ობოლი  | orphan                                              | 26           | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)                      |
| ოდა    | ode; traditional house                              | 20, 109, 234 | [source](https://en.wiktionary.org/w/index.php?title=ოდა&oldid=87900914)                        |
| ოვალი  | oval                                                | 19           | [source](https://en.wiktionary.org/w/index.php?title=ოვალი&oldid=84100444)                      |
| ოზონი  | ozone                                               | 179          | [source](https://en.wiktionary.org/w/index.php?title=ოზონი&oldid=88005804)                      |
| ოთახი  | room, chamber                                       | 6            | [source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)                      |
| ოინი   | prank, trick                                        | 108          | [source](https://en.wiktionary.org/w/index.php?title=ოინი&oldid=84117786)                       |
| ოკეანე | ocean                                               | 67           | [source](https://en.wiktionary.org/w/index.php?title=ოკეანე&oldid=84117787)                     |
| ოლქი   | district                                            | 10           | [source](https://en.wiktionary.org/w/index.php?title=ოლქი&oldid=84117798)                       |
| ომი    | war                                                 | 54, 161      | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)                        |
| ოპერა  | opera                                               | 45           | [source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)                      |
| ორგანო | organ                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=ორგანო&oldid=84103241)                     |
| ორმო   | pit                                                 | 175          | [source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)                       |
| ოსპი   | lentil                                              | 116, 210     | [source](https://en.wiktionary.org/w/index.php?title=ოსპი&oldid=81817269)                       |
| ოფისი  | office                                              | 82           | [source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)                      |
| ოფლი   | sweat                                               | 25, 135      | [source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)                       |
| ოქმი   | official written record                             | 75           | [source](https://www.ganmarteba.ge/word/%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%98)                   |
| ოქრო   | gold                                                | 26           | [source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)                       |
| ოჯახი  | family                                              | 129          | [source](https://en.wiktionary.org/w/index.php?title=ოჯახი&oldid=92084204)                      |
| პალმა  | palm tree                                           | 78           | [source](https://www.ganmarteba.ge/word/%E1%83%9E%E1%83%90%E1%83%9A%E1%83%9B%E1%83%90)          |
| პალტო  | overcoat                                            | 122          | [source](https://en.wiktionary.org/w/index.php?title=პალტო&oldid=88603382)                      |
| პანდა  | panda                                               | 119          | [source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)                      |
| პაპა   | grandfather                                         | 119          | [source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)                       |
| პარიკი | wig                                                 | 128          | [source](https://en.wiktionary.org/w/index.php?title=პარიკი&oldid=84209336)                     |
| პარკი  | plastic bag                                         | 128          | [source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)                      |
| პაუზა  | pause                                               | 171          | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)                      |
| პიკი   | peak                                                | 28, 160      | [source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)                       |
| პირი   | mouth                                               | 128, 205     | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)                       |
| პიტნა  | mint, spearmint                                     | 173          | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)                      |
| პიურე  | purée                                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=პიურე&oldid=88450340)                      |
| პიცა   | pizza                                               | 218          | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)                       |
| პლატო  | plateau                                             | 122          | [source](https://en.wiktionary.org/w/index.php?title=პლატო&oldid=84100749)                      |
| პლედი  | plaid blanket                                       | 54           | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)                      |
| პლუსი  | plus                                                | 116          | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)                      |
| პოემა  | poem                                                | 152          | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)                      |
| პოეტი  | poet                                                | 114          | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)                      |
| პოზა   | pose                                                | 45           | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)                       |
| პონი   | pony                                                | 202          | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)                       |
| პორტი  | port                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)                      |
| პოსტი  | post                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)                      |
| პრესა  | press; news media                                   | 218          | [source](https://en.wiktionary.org/w/index.php?title=პრესა&oldid=84174033)                      |
| პრიზი  | prize                                               | 205          | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)                      |
| პროზა  | prose                                               | 45           | [source](https://en.wiktionary.org/w/index.php?title=პროზა&oldid=84100873)                      |
| პულსი  | pulse                                               | 116          | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)                      |
| პუმა   | puma                                                | 171          | [source](https://en.wiktionary.org/w/index.php?title=პუმა&oldid=85689336)                       |
| პური   | bread                                               | 205          | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)                       |
| ჟანრი  | genre                                               | 230          | [source](https://en.wiktionary.org/w/index.php?title=ჟანრი&oldid=87941020)                      |
| ჟიური  | jury                                                | 37           | [source](https://www.ganmarteba.ge/word/%E1%83%9F%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98)          |
| ჟოლო   | raspberry                                           | 105          | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)                       |
| რაგბი  | rugby                                               | 73           | [source](https://en.wiktionary.org/w/index.php?title=რაგბი&oldid=84096743)                      |
| რადიო  | radio                                               | 234          | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)                      |
| რაზმი  | squad                                               | 8            | [source](https://en.wiktionary.org/w/index.php?title=რაზმი&oldid=84118264)                      |
| რაიონი | district                                            | 108          | [source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151)                     |
| რაფა   | windowsill                                          | 92           | [source](https://en.wiktionary.org/w/index.php?title=რაფა&oldid=92486505)                       |
| რბილი  | soft                                                | 146          | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)                      |
| რეისი  | scheduled journey                                   | 27           | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)                      |
| რეპი   | rap music                                           | 218          | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)                       |
| რეჟიმი | mode; regimen                                       | 37           | [source](https://en.wiktionary.org/w/index.php?title=რეჟიმი&oldid=84101045)                     |
| რთული  | difficult; complex                                  | 159          | [source](https://en.wiktionary.org/w/index.php?title=რთული&oldid=84118321)                      |
| რიგი   | row; queue                                          | 178          | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)                       |
| რისკი  | risk                                                | 27           | [source](https://en.wiktionary.org/w/index.php?title=რისკი&oldid=84118334)                      |
| რიტმი  | beat, cadence, rhythm                               | 87           | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)                      |
| რიყე   | stony riverbank                                     | 66, 183      | [source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%98%E1%83%A7%E1%83%94)                   |
| რკინა  | iron (metal)                                        | 28           | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)                      |
| რკო    | acorn                                               | 16, 108      | [source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)                        |
| როიალი | grand piano                                         | 234          | [source](https://www.ganmarteba.ge/word/%E1%83%A0%E1%83%9D%E1%83%98%E1%83%90%E1%83%9A%E1%83%98) |
| როკი   | rock music                                          | 16, 224      | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)                       |
| როლი   | role                                                | 5, 145       | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)                       |
| რომანი | novel                                               | 44           | [source](https://en.wiktionary.org/w/index.php?title=რომანი&oldid=84101101)                     |
| რომი   | rum                                                 | 232          | [source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)                       |
| რუკა   | map                                                 | 118          | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)                       |
| რუხი   | gray/grey                                           | 9, 86        | [source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)                       |
| რუჯი   | suntan                                              | 79, 159      | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)                       |
| რქა    | horn, antler                                        | 4, 94        | [source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)                        |
| რძალი  | daughter-in-law; sister-in-law                      | 61           | [source](https://en.wiktionary.org/w/index.php?title=რძალი&oldid=91716433)                      |
| რძე    | milk                                                | 131, 224     | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)                        |
| საათი  | clock; hour                                         | 147          | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)                      |
| საბანი | blanket                                             | 32           | [source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633)                     |
| საბუთი | document                                            | 113          | [source](https://en.wiktionary.org/w/index.php?title=საბუთი&oldid=84107021)                     |
| საბჭო  | council                                             | 95           | [source](https://en.wiktionary.org/w/index.php?title=საბჭო&oldid=88896363)                      |
| სადავო | disputed; debatable                                 | 140          | [source](https://en.wiktionary.org/w/index.php?title=სადავო&oldid=59807665)                     |
| სავსე  | full                                                | 120          | [source](https://en.wiktionary.org/w/index.php?title=სავსე&oldid=81821895)                      |
| საიტი  | website                                             | 191          | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)                      |
| საკანი | cell                                                | 170          | [source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500)                     |
| სალათა | salad                                               | 238          | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797)                     |
| სანდო  | reliable                                            | 202          | [source](https://en.wiktionary.org/w/index.php?title=სანდო&oldid=88605743)                      |
| საპონი | soap                                                | 202          | [source](https://en.wiktionary.org/w/index.php?title=საპონი&oldid=89620271)                     |
| სარი   | stake                                               | 121          | [source](https://en.wiktionary.org/w/index.php?title=სარი&oldid=91725833)                       |
| სარკე  | looking-glass, mirror                               | 156          | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)                      |
| საუზმე | breakfast                                           | 166          | [source](https://en.wiktionary.org/w/index.php?title=საუზმე&oldid=88091259)                     |
| საუნა  | sauna                                               | 170          | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)                      |
| საქმე  | work, business                                      | 166          | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)                      |
| საღი   | healthy, sensible                                   | 225          | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)                       |
| საშიში | scary; dangerous                                    | 104          | [source](https://en.wiktionary.org/w/index.php?title=საშიში&oldid=84118867)                     |
| საცერი | sieve                                               | 218          | [source](https://en.wiktionary.org/w/index.php?title=საცერი&oldid=84118875)                     |
| საჭირო | necessary                                           | 196          | [source](https://en.wiktionary.org/w/index.php?title=საჭირო&oldid=88605887)                     |
| სახე   | face                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)                       |
| სახლი  | home, house, dwelling                               | 223          | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)                      |
| სევდა  | sadness; sorrow                                     | 120          | [source](https://en.wiktionary.org/w/index.php?title=სევდა&oldid=92686510)                      |
| სეზონი | season                                              | 179          | [source](https://en.wiktionary.org/w/index.php?title=სეზონი&oldid=84118932)                     |
| სერია  | series                                              | 218          | [source](https://en.wiktionary.org/w/index.php?title=სერია&oldid=87787607)                      |
| სესია  | session                                             | 120          | [source](https://en.wiktionary.org/w/index.php?title=სესია&oldid=84101372)                      |
| სესხი  | loan                                                | 194          | [source](https://en.wiktionary.org/w/index.php?title=სესხი&oldid=84101374)                      |
| სველი  | wet                                                 | 59           | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)                      |
| სვეტი  | column                                              | 97           | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)                      |
| სია    | list                                                | 29, 170      | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)                        |
| სითბო  | warmth                                              | 83           | [source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)                      |
| სითხე  | liquid                                              | 91           | [source](https://en.wiktionary.org/w/index.php?title=სითხე&oldid=84119007)                      |
| სილა   | sand; slap                                          | 150          | [source](https://en.wiktionary.org/w/index.php?title=სილა&oldid=81821960)                       |
| სიმი   | string                                              | 75           | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)                       |
| სიო    | breeze                                              | 65, 194      | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)                        |
| სისქე  | thickness                                           | 194          | [source](https://en.wiktionary.org/w/index.php?title=სისქე&oldid=84119083)                      |
| სიტყვა | word                                                | 97           | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915)                     |
| სიღრმე | depth                                               | 183          | [source](https://en.wiktionary.org/w/index.php?title=სიღრმე&oldid=84101569)                     |
| სიცხე  | heat; fever                                         | 189          | [source](https://en.wiktionary.org/w/index.php?title=სიცხე&oldid=84119122)                      |
| სიძე   | son-in-law; groom                                   | 59           | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)                       |
| სკამი  | chair                                               | 30           | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)                      |
| სკოლა  | school                                              | 42           | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)                      |
| სოდა   | soda                                                | 20, 202      | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)                       |
| სოიო   | soy                                                 | 179          | [source](https://en.wiktionary.org/w/index.php?title=სოიო&oldid=84101634)                       |
| სოუსი  | sauce                                               | 65           | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)                      |
| სპა    | spa                                                 | 202          | [source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)                        |
| სპილო  | elephant                                            | 116          | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)                      |
| სრული  | complete                                            | 101          | [source](https://en.wiktionary.org/w/index.php?title=სრული&oldid=84091028)                      |
| სტილი  | style                                               | 200          | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)                      |
| სული   | spirit, ghost                                       | 219          | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)                       |
| სუნი   | smell                                               | 69, 172      | [source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)                       |
| სურათი | picture                                             | 121          | [source](https://en.wiktionary.org/w/index.php?title=სურათი&oldid=88800264)                     |
| სუსტი  | weak                                                | 65           | [source](https://en.wiktionary.org/w/index.php?title=სუსტი&oldid=89906555)                      |
| სუფთა  | clean                                               | 121          | [source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)                      |
| სუფრა  | tablecloth, feast                                   | 121          | [source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)                      |
| სქელი  | thick                                               | 219          | [source](https://en.wiktionary.org/w/index.php?title=სქელი&oldid=91740769)                      |
| სქემა  | diagram                                             | 166          | [source](https://www.ganmarteba.ge/word/%E1%83%A1%E1%83%A5%E1%83%94%E1%83%9B%E1%83%90)          |
| სქესი  | sex; gender                                         | 194          | [source](https://en.wiktionary.org/w/index.php?title=სქესი&oldid=91012991)                      |
| სცენა  | stage; scene                                        | 206          | [source](https://en.wiktionary.org/w/index.php?title=სცენა&oldid=84101771)                      |
| სწორი  | correct; straight                                   | 210          | [source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)                      |
| სხივი  | ray                                                 | 169          | [source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)                      |
| ტაბუ   | taboo                                               | 11           | [source](https://en.wiktionary.org/w/index.php?title=ტაბუ&oldid=84101781)                       |
| ტალახი | mud                                                 | 60           | [source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470)                     |
| ტანგო  | tango                                               | 36           | [source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)                      |
| ტანი   | body                                                | 62, 214      | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)                       |
| ტანკი  | military tank                                       | 173          | [source](https://en.wiktionary.org/w/index.php?title=ტანკი&oldid=88002840)                      |
| ტარი   | handle                                              | 58, 228      | [source](https://en.wiktionary.org/w/index.php?title=ტარი&oldid=91725865)                       |
| ტარიფი | tariff; rate                                        | 50           | [source](https://en.wiktionary.org/w/index.php?title=ტარიფი&oldid=84101808)                     |
| ტაფა   | frying pan                                          | 60           | [source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)                       |
| ტაქსი  | taxi                                                | 29           | [source](https://en.wiktionary.org/w/index.php?title=ტაქსი&oldid=84119352)                      |
| ტაში   | applause                                            | 11, 191      | [source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)                       |
| ტახტი  | ottoman bench                                       | 237          | [source](https://en.wiktionary.org/w/index.php?title=ტახტი&oldid=84101822)                      |
| ტბა    | lake                                                | 36, 191      | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)                        |
| ტემპი  | pace, tempo                                         | 41           | [source](https://www.ganmarteba.ge/word/%E1%83%A2%E1%83%94%E1%83%9B%E1%83%9E%E1%83%98)          |
| ტენი   | moisture                                            | 200          | [source](https://en.wiktionary.org/w/index.php?title=ტენი&oldid=92014085)                       |
| ტერფი  | foot                                                | 184          | [source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)                      |
| ტვინი  | brain                                               | 214          | [source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)                      |
| ტილო   | canvas, linen                                       | 17, 122      | [source](https://en.wiktionary.org/w/index.php?title=ტილო&oldid=84101866)                       |
| ტიპი   | type                                                | 160          | [source](https://en.wiktionary.org/w/index.php?title=ტიპი&oldid=64001804)                       |
| ტირე   | dash                                                | 87, 184      | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)                       |
| ტიტა   | tulip                                               | 237          | [source](https://en.wiktionary.org/w/index.php?title=ტიტა&oldid=81818591)                       |
| ტოლი   | equal                                               | 17, 208      | [source](https://en.wiktionary.org/w/index.php?title=ტოლი&oldid=92197091)                       |
| ტოლმა  | stuffed cabbage or vine leaf                        | 122          | [source](https://en.wiktionary.org/w/index.php?title=ტოლმა&oldid=84187254)                      |
| ტომატი | tomato concentrate                                  | 232          | [source](https://en.wiktionary.org/w/index.php?title=ტომატი&oldid=89872964)                     |
| ტომი   | tribe; volume                                       | 182          | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)                       |
| ტონა   | ton                                                 | 62           | [source](https://en.wiktionary.org/w/index.php?title=ტონა&oldid=84101895)                       |
| ტონი   | tone                                                | 36           | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)                       |
| ტორტი  | tart                                                | 232          | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)                      |
| ტოტი   | branch, twig                                        | 17, 232      | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)                       |
| ტრიო   | trio                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=ტრიო&oldid=84101947)                       |
| ტუზი   | ace (card)                                          | 65           | [source](https://en.wiktionary.org/w/index.php?title=ტუზი&oldid=84101964)                       |
| ტუმბო  | pump                                                | 161          | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)                      |
| ტურა   | jackal                                              | 118          | [source](https://en.wiktionary.org/w/index.php?title=ტურა&oldid=91715083)                       |
| ტური   | round                                               | 160          | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)                       |
| ტუჩი   | lip                                                 | 29           | [source](https://en.wiktionary.org/w/index.php?title=ტუჩი&oldid=89949141)                       |
| ტყავი  | leather                                             | 214          | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)                      |
| ტყე    | forest, wood                                        | 97           | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)                        |
| ტყვე   | captive                                             | 97           | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)                       |
| ტყვია  | bullet, lead                                        | 97           | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)                      |
| ტყუპი  | twin                                                | 66           | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)                      |
| უაზრო  | pointless; meaningless                              | 45           | [source](https://en.wiktionary.org/w/index.php?title=უაზრო&oldid=75687201)                      |
| უარი   | refusal                                             | 47, 151      | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)                       |
| უბანი  | neighborhood                                        | 85           | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)                      |
| უბე    | bay; bosom                                          | 231          | [source](https://en.wiktionary.org/w/index.php?title=უბე&oldid=84119518)                        |
| უგულო  | heartless                                           | 135          | [source](https://en.wiktionary.org/w/index.php?title=უგულო&oldid=88343102)                      |
| უვიცი  | ignorant, uninformed                                | 130          | [source](https://en.wiktionary.org/w/index.php?title=უვიცი&oldid=84088542)                      |
| უზადო  | flawless                                            | 109          | [source](https://en.wiktionary.org/w/index.php?title=უზადო&oldid=84119546)                      |
| უთო    | iron for clothes                                    | 115          | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)                        |
| უკან   | back; backwards                                     | 84, 170      | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)                       |
| უმი    | raw, uncooked                                       | 37, 138      | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)                        |
| უნარი  | ability                                             | 33           | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)                      |
| უნიჭო  | untalented                                          | 7            | [source](https://www.ganmarteba.ge/word/%E1%83%A3%E1%83%9C%E1%83%98%E1%83%AD%E1%83%9D)          |
| ურდო   | horde                                               | 15, 138      | [source](https://en.wiktionary.org/w/index.php?title=ურდო&oldid=84119678)                       |
| ურემი  | cartload                                            | 37           | [source](https://en.wiktionary.org/w/index.php?title=ურემი&oldid=84102064)                      |
| ურნა   | urn                                                 | 33           | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)                       |
| ურო    | hammer                                              | 15, 201      | [source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)                        |
| ურჩი   | disobedient                                         | 47           | [source](https://en.wiktionary.org/w/index.php?title=ურჩი&oldid=84091172)                       |
| უფასო  | free of charge                                      | 69           | [source](https://en.wiktionary.org/w/index.php?title=უფასო&oldid=84119719)                      |
| უშნო   | ugly                                                | 190          | [source](https://en.wiktionary.org/w/index.php?title=უშნო&oldid=88343119)                       |
| უცხო   | foreign, unfamiliar                                 | 9            | [source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)                       |
| უძრავი | immobile; stationary                                | 47           | [source](https://en.wiktionary.org/w/index.php?title=უძრავი&oldid=84091194)                     |
| უხეში  | rough; rude                                         | 174          | [source](https://en.wiktionary.org/w/index.php?title=უხეში&oldid=84119754)                      |
| უჯრა   | drawer                                              | 79           | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)                       |
| ფაზა   | phase                                               | 43           | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)                       |
| ფაილი  | file                                                | 192          | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)                      |
| ფარა   | flock                                               | 92           | [source](https://en.wiktionary.org/w/index.php?title=ფარა&oldid=84119773)                       |
| ფარდა  | curtain, purdah                                     | 13           | [source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)                      |
| ფართო  | wide                                                | 76           | [source](https://en.wiktionary.org/w/index.php?title=ფართო&oldid=84119789)                      |
| ფარი   | shield                                              | 8, 220       | [source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)                       |
| ფასი   | price, cost                                         | 69           | [source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)                       |
| ფაფა   | porridge                                            | 13           | [source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)                       |
| ფაქტი  | fact                                                | 217          | [source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)                      |
| ფენა   | layer                                               | 67, 220      | [source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)                       |
| ფენი   | hairdryer                                           | 197          | [source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)                       |
| ფერი   | color, hue                                          | 184          | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)                       |
| ფერმა  | farm                                                | 38           | [source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)                      |
| ფეტვი  | millet                                              | 184          | [source](https://en.wiktionary.org/w/index.php?title=ფეტვი&oldid=87901416)                      |
| ფეხი   | foot; leg                                           | 55           | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)                       |
| ფიგურა | stature, figure                                     | 79           | [source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102)                     |
| ფილა   | slab                                                | 60           | [source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)                       |
| ფილე   | fillet                                              | 55, 136      | [source](https://en.wiktionary.org/w/index.php?title=ფილე&oldid=84102226)                       |
| ფილმი  | film                                                | 192          | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)                      |
| ფილტრი | filter                                              | 50           | [source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240)                     |
| ფირი   | film                                                | 50, 184      | [source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)                       |
| ფირმა  | company                                             | 8            | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)                      |
| ფისი   | resin                                               | 82           | [source](https://en.wiktionary.org/w/index.php?title=ფისი&oldid=87901452)                       |
| ფიცი   | oath                                                | 149          | [source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)                       |
| ფიცხი  | quick-tempered                                      | 149          | [source](https://en.wiktionary.org/w/index.php?title=ფიცხი&oldid=84091258)                      |
| ფიჭა   | honeycomb                                           | 220          | [source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)                       |
| ფლავი  | pilaf                                               | 165          | [source](https://en.wiktionary.org/w/index.php?title=ფლავი&oldid=84102266)                      |
| ფლოტი  | fleet                                               | 208          | [source](https://en.wiktionary.org/w/index.php?title=ფლოტი&oldid=84102283)                      |
| ფოთოლი | leaf                                                | 208          | [source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315)                     |
| ფოლადი | steel                                               | 25           | [source](https://en.wiktionary.org/w/index.php?title=ფოლადი&oldid=84119907)                     |
| ფონდი  | fund                                                | 197          | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)                      |
| ფონი   | background                                          | 69           | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)                       |
| ფორმა  | shape, form                                         | 38           | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)                      |
| ფოსტა  | post; mail                                          | 217          | [source](https://en.wiktionary.org/w/index.php?title=ფოსტა&oldid=87382061)                      |
| ფოტო   | photo                                               | 208          | [source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)                       |
| ფრაზა  | phrase                                              | 43           | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)                      |
| ფრანი  | kite                                                | 220          | [source](https://en.wiktionary.org/w/index.php?title=ფრანი&oldid=84119947)                      |
| ფრე    | draw; tie in a game                                 | 2, 207       | [source](https://en.wiktionary.org/w/index.php?title=ფრე&oldid=84103223)                        |
| ფრესკა | fresco                                              | 156          | [source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351)                     |
| ფრთა   | wing                                                | 76           | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)                       |
| ფსონი  | bet                                                 | 69           | [source](https://en.wiktionary.org/w/index.php?title=ფსონი&oldid=84119973)                      |
| ფული   | money                                               | 135          | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)                       |
| ფუჭი   | futile; useless                                     | 153          | [source](https://en.wiktionary.org/w/index.php?title=ფუჭი&oldid=84119986)                       |
| ფხა    | fishbone                                            | 76           | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)                          |
| ქადა   | sweet pastry                                        | 163          | [source](https://en.wiktionary.org/w/index.php?title=ქადა&oldid=91650192)                       |
| ქალა   | skull                                               | 14, 141      | [source](https://en.wiktionary.org/w/index.php?title=ქალა&oldid=91725190)                       |
| ქალი   | woman                                               | 10, 163      | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)                       |
| ქამარი | belt                                                | 23           | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022)                     |
| ქაოსი  | chaos                                               | 217          | [source](https://en.wiktionary.org/w/index.php?title=ქაოსი&oldid=84120027)                      |
| ქარვა  | amber                                               | 141          | [source](https://en.wiktionary.org/w/index.php?title=ქარვა&oldid=92067051)                      |
| ქარი   | wind                                                | 4, 236       | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)                       |
| ქაფი   | foam                                                | 217          | [source](https://en.wiktionary.org/w/index.php?title=ქაფი&oldid=84120056)                       |
| ქაჯი   | goblin                                              | 110          | [source](https://en.wiktionary.org/w/index.php?title=ქაჯი&oldid=87997423)                       |
| ქედი   | mountain range                                      | 74           | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)                       |
| ქერა   | blond                                               | 94           | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)                       |
| ქერი   | barley                                              | 87           | [source](https://en.wiktionary.org/w/index.php?title=ქერი&oldid=87901504)                       |
| ქერქი  | bark; rind                                          | 127          | [source](https://en.wiktionary.org/w/index.php?title=ქერქი&oldid=92228071)                      |
| ქვა    | stone                                               | 14, 150, 227 | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)                        |
| ქვაბი  | pot                                                 | 227          | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)                      |
| ქვისლი | co-brother-in-law                                   | 150          | [source](https://en.wiktionary.org/w/index.php?title=ქვისლი&oldid=88662328)                     |
| ქვიშა  | sand                                                | 227          | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)                      |
| ქილა   | jar                                                 | 10           | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)                       |
| ქიმია  | chemistry                                           | 75           | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)                      |
| ქირა   | rent                                                | 4, 236       | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)                       |
| ქლიავი | plum                                                | 150          | [source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131)                     |
| ქმარი  | husband                                             | 23           | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)                      |
| ქოლგა  | umbrella                                            | 10           | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)                      |
| ქონი   | fat, grease                                         | 198          | [source](https://en.wiktionary.org/w/index.php?title=ქონი&oldid=84120145)                       |
| ქორი   | goshawk                                             | 26           | [source](https://en.wiktionary.org/w/index.php?title=ქორი&oldid=92251688)                       |
| ქოსა   | beardless                                           | 217          | [source](https://en.wiktionary.org/w/index.php?title=ქოსა&oldid=91928853)                       |
| ქოხი   | hut; cabin                                          | 194          | [source](https://en.wiktionary.org/w/index.php?title=ქოხი&oldid=84096657)                       |
| ქსელი  | web; network                                        | 219          | [source](https://en.wiktionary.org/w/index.php?title=ქსელი&oldid=84809641)                      |
| ქუდი   | hat                                                 | 15           | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)                       |
| ქულა   | point, score                                        | 101          | [source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)                       |
| ქურა   | stove, furnace                                      | 101          | [source](https://en.wiktionary.org/w/index.php?title=ქურა&oldid=91715085)                       |
| ქურდი  | thief                                               | 15           | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)                      |
| ქურქი  | fur coat                                            | 127          | [source](https://en.wiktionary.org/w/index.php?title=ქურქი&oldid=84224158)                      |
| ქუსლი  | heel                                                | 101          | [source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)                      |
| ქუჩა   | street                                              | 29           | [source](https://en.wiktionary.org/w/index.php?title=ქუჩა&oldid=84120190)                       |
| ღამე   | night                                               | 117          | [source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)                       |
| ღარი   | groove, ditch                                       | 102, 225     | [source](https://en.wiktionary.org/w/index.php?title=ღარი&oldid=84102504)                       |
| ღელე   | brook                                               | 31           | [source](https://en.wiktionary.org/w/index.php?title=ღელე&oldid=84120207)                       |
| ღერი   | strand, stalk                                       | 183          | [source](https://www.ganmarteba.ge/word/%E1%83%A6%E1%83%94%E1%83%A0%E1%83%98)                   |
| ღერო   | blade, haulm, stalk, stem                           | 139          | [source](https://en.wiktionary.org/w/index.php?title=ღერო&oldid=87901541)                       |
| ღვედი  | belt, strap                                         | 31           | [source](https://en.wiktionary.org/w/index.php?title=ღვედი&oldid=84120218)                      |
| ღვინო  | wine                                                | 139          | [source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)                      |
| ღია    | open                                                | 147          | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)                        |
| ღილი   | button                                              | 88           | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)                       |
| ღიპი   | belly                                               | 225          | [source](https://en.wiktionary.org/w/index.php?title=ღიპი&oldid=84102517)                       |
| ღირსი  | worthy; deserving                                   | 225          | [source](https://en.wiktionary.org/w/index.php?title=ღირსი&oldid=88628246)                      |
| ღობე   | fence, hedge                                        | 46           | [source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)                       |
| ღომი   | ghomi maize porridge                                | 44           | [source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)                       |
| ღონე   | strength                                            | 139          | [source](https://en.wiktionary.org/w/index.php?title=ღონე&oldid=84120241)                       |
| ღორი   | pig                                                 | 139          | [source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)                       |
| ღრმა   | deep                                                | 44           | [source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)                       |
| ღრუ    | cavity; hollow space                                | 46           | [source](https://www.ganmarteba.ge/word/ღრუ)                                                    |
| ღუზა   | anchor                                              | 126          | [source](https://en.wiktionary.org/w/index.php?title=ღუზა&oldid=87788040)                       |
| ყადრი  | value, respect                                      | 226          | [source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)                      |
| ყავა   | coffee                                              | 1, 89        | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)                       |
| ყალბი  | fake; false                                         | 90           | [source](https://en.wiktionary.org/w/index.php?title=ყალბი&oldid=84120277)                      |
| ყანა   | field                                               | 32           | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)                       |
| ყასაბი | butcher                                             | 32           | [source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292)                     |
| ყბა    | jaw                                                 | 32, 228      | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)                        |
| ყდა    | cover of a book                                     | 1, 90, 226   | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)                        |
| ყელი   | throat                                              | 55, 137      | [source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)                       |
| ყველი  | cheese                                              | 137          | [source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)                      |
| ყინვა  | frost, freezing, freezing temperatures, severe cold | 214          | [source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)                      |
| ყლუპი  | sip                                                 | 116          | [source](https://en.wiktionary.org/w/index.php?title=ყლუპი&oldid=84120339)                      |
| ყორანი | raven                                               | 226          | [source](https://en.wiktionary.org/w/index.php?title=ყორანი&oldid=92709834)                     |
| ყრუ    | deaf                                                | 159          | [source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)                        |
| ყუთი   | box                                                 | 159          | [source](https://en.wiktionary.org/w/index.php?title=ყუთი&oldid=85493733)                       |
| ყურე   | bay, bight                                          | 66           | [source](https://en.wiktionary.org/w/index.php?title=ყურე&oldid=84102567)                       |
| ყური   | ear                                                 | 66           | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)                       |
| შავი   | black                                               | 3, 104, 227  | [source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)                       |
| შალი   | shawl                                               | 3, 143       | [source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)                       |
| შანსი  | chance                                              | 229          | [source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)                      |
| შაშვი  | thrush                                              | 104          | [source](https://en.wiktionary.org/w/index.php?title=შაშვი&oldid=84757236)                      |
| შაშხი  | salted or dried meat                                | 174          | [source](https://en.wiktionary.org/w/index.php?title=შაშხი&oldid=88672039)                      |
| შეშა   | firewood                                            | 174          | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)                       |
| შველი  | roe deer                                            | 81           | [source](https://en.wiktionary.org/w/index.php?title=შველი&oldid=91741270)                      |
| შვილი  | child                                               | 81           | [source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)                      |
| შვრია  | oats                                                | 92           | [source](https://en.wiktionary.org/w/index.php?title=შვრია&oldid=88155749)                      |
| შიში   | fear                                                | 104          | [source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)                       |
| შნო    | skill, charm                                        | 190          | [source](https://en.wiktionary.org/w/index.php?title=შნო&oldid=92228121)                        |
| შოკი   | shock                                               | 132          | [source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)                       |
| შოლტი  | whip                                                | 17           | [source](https://en.wiktionary.org/w/index.php?title=შოლტი&oldid=88091226)                      |
| შორი   | far                                                 | 132          | [source](https://en.wiktionary.org/w/index.php?title=შორი&oldid=84097095)                       |
| შორს   | far                                                 | 20           | [source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)                       |
| შრე    | stratum, layer                                      | 132          | [source](https://en.wiktionary.org/w/index.php?title=შრე&oldid=84102672)                        |
| შტაბი  | headquarters                                        | 191          | [source](https://en.wiktionary.org/w/index.php?title=შტაბი&oldid=84120584)                      |
| შტატი  | state; staff                                        | 237          | [source](https://en.wiktionary.org/w/index.php?title=შტატი&oldid=88896322)                      |
| შტო    | branch                                              | 17           | [source](https://en.wiktionary.org/w/index.php?title=შტო&oldid=92197095)                        |
| შუა    | middle                                              | 174          | [source](https://www.ganmarteba.ge/word/შუა)                                                    |
| შუბი   | spear                                               | 11           | [source](https://en.wiktionary.org/w/index.php?title=შუბი&oldid=84120602)                       |
| შური   | envy                                                | 127          | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)                       |
| შუქი   | light                                               | 127          | [source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)                       |
| შუშა   | glass                                               | 174          | [source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)                       |
| შხამი  | poison                                              | 57           | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)                      |
| შხაპი  | shower                                              | 237          | [source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)                      |
| ჩაი    | tea (drink made from leaves of tea plant)           | 4, 143, 222  | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)                        |
| ჩალა   | straw                                               | 143          | [source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)                       |
| ჩანთა  | bag                                                 | 39           | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)                      |
| ჩარხი  | lathe                                               | 86           | [source](https://en.wiktionary.org/w/index.php?title=ჩარხი&oldid=84120652)                      |
| ჩეკი   | check, receipt                                      | 27           | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)                       |
| ჩექმა  | boot                                                | 94           | [source](https://en.wiktionary.org/w/index.php?title=ჩექმა&oldid=84120683)                      |
| ჩვარი  | rag                                                 | 47           | [source](https://en.wiktionary.org/w/index.php?title=ჩვარი&oldid=84102722)                      |
| ჩვილი  | baby                                                | 81           | [source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)                      |
| ჩიპი   | microchip                                           | 128          | [source](https://en.wiktionary.org/w/index.php?title=ჩიპი&oldid=85075873)                       |
| ჩირი   | dried fruit                                         | 240          | [source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)                       |
| ჩიტი   | bird                                                | 240          | [source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)                       |
| ჩიხი   | blind alley                                         | 240          | [source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)                       |
| ჩუმად  | quietly                                             | 222          | [source](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)                      |
| ჩუმი   | quiet                                               | 86, 222      | [source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)                       |
| ჩუსტი  | slipper                                             | 29           | [source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)                      |
| ჩქარი  | quick                                               | 4            | [source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)                      |
| ჩხირი  | small stick                                         | 240          | [source](https://www.ganmarteba.ge/word/%E1%83%A9%E1%83%AE%E1%83%98%E1%83%A0%E1%83%98)          |
| ცალი   | piece                                               | 215          | [source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)                       |
| ცელი   | scythe                                              | 72, 215      | [source](https://en.wiktionary.org/w/index.php?title=ცელი&oldid=91740712)                       |
| ცენტი  | cent                                                | 62           | [source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)                      |
| ცვილი  | wax                                                 | 130          | [source](https://en.wiktionary.org/w/index.php?title=ცვილი&oldid=84757548)                      |
| ცივი   | cold                                                | 112          | [source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)                       |
| ციკლი  | cycle                                               | 80           | [source](https://en.wiktionary.org/w/index.php?title=ციკლი&oldid=84120815)                      |
| ცილა   | protein                                             | 130          | [source](https://en.wiktionary.org/w/index.php?title=ცილა&oldid=84120818)                       |
| ცირკი  | circus                                              | 80           | [source](https://en.wiktionary.org/w/index.php?title=ცირკი&oldid=84120827)                      |
| ციფრი  | digit; numeral                                      | 149          | [source](https://en.wiktionary.org/w/index.php?title=ციფრი&oldid=85021100)                      |
| ციყვი  | squirrel                                            | 112          | [source](https://en.wiktionary.org/w/index.php?title=ციყვი&oldid=87901693)                      |
| ციხე   | fortress                                            | 72, 189      | [source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)                       |
| ცნება  | concept                                             | 215          | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)                      |
| ცოდვა  | sin                                                 | 140          | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)                      |
| ცოდნა  | knowledge                                           | 109          | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)                      |
| ცოლი   | wife                                                | 80           | [source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)                       |
| ცომი   | dough                                               | 93           | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)                       |
| ცოტა   | a little; few                                       | 62           | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)                       |
| ცოფი   | rabies                                              | 149          | [source](https://en.wiktionary.org/w/index.php?title=ცოფი&oldid=84120877)                       |
| ცრემლი | tear from the eyes                                  | 221          | [source](https://en.wiktionary.org/w/index.php?title=ცრემლი&oldid=84120880)                     |
| ცრუ    | false, phony                                        | 9, 134       | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)                        |
| ცუდი   | bad                                                 | 134          | [source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)                       |
| ცული   | axe                                                 | 130          | [source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)                       |
| ცური   | udder                                               | 9            | [source](https://en.wiktionary.org/w/index.php?title=ცური&oldid=84102818)                       |
| ცხადი  | clear; evident                                      | 134          | [source](https://en.wiktionary.org/w/index.php?title=ცხადი&oldid=84088549)                      |
| ცხარე  | spicy                                               | 177          | [source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)                      |
| ცხელი  | hot                                                 | 72           | [source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)                      |
| ცხენი  | horse                                               | 189          | [source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)                      |
| ძაბრი  | funnel                                              | 77           | [source](https://en.wiktionary.org/w/index.php?title=ძაბრი&oldid=84120916)                      |
| ძალა   | power, force, strength                              | 141          | [source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)                       |
| ძაფი   | thread                                              | 165          | [source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)                       |
| ძაღლი  | dog                                                 | 199          | [source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)                      |
| ძეგლი  | monument                                            | 71           | [source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)                      |
| ძელი   | beam                                                | 61           | [source](https://en.wiktionary.org/w/index.php?title=ძელი&oldid=84120929)                       |
| ძერა   | kite bird                                           | 156          | [source](https://en.wiktionary.org/w/index.php?title=ძერა&oldid=91812511)                       |
| ძეხვი  | sausage                                             | 136          | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)                      |
| ძვალი  | bone                                                | 165          | [source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)                      |
| ძველი  | old                                                 | 136          | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)                      |
| ძვირი  | expensive                                           | 212          | [source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)                      |
| ძია    | uncle                                               | 47, 131, 235 | [source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)                        |
| ძილი   | sleep                                               | 61           | [source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)                       |
| ძირი   | root                                                | 212          | [source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)                       |
| ძიუდო  | judo                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=ძიუდო&oldid=88130281)                      |
| ძიძა   | nanny                                               | 165          | [source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)                       |
| ძლიერი | strong                                              | 61           | [source](https://en.wiktionary.org/w/index.php?title=ძლიერი&oldid=84757250)                     |
| ძმა    | brother                                             | 71, 199      | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)                        |
| ძმარი  | vinegar                                             | 77           | [source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)                      |
| ძნელი  | difficult                                           | 59           | [source](https://en.wiktionary.org/w/index.php?title=ძნელი&oldid=88915482)                      |
| ძრავა  | engine                                              | 141          | [source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)                      |
| ძროხა  | cow                                                 | 76           | [source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)                      |
| ძუა    | horsehair                                           | 84           | [source](https://en.wiktionary.org/w/index.php?title=ძუა&oldid=85057219)                        |
| წაბლი  | chestnut                                            | 88           | [source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)                      |
| წავი   | otter                                               | 49, 181      | [source](https://en.wiktionary.org/w/index.php?title=წავი&oldid=87797873)                       |
| წამი   | second                                              | 103, 213     | [source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)                       |
| წარბი  | brow, eyebrow                                       | 151          | [source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)                      |
| წებო   | glue                                                | 167          | [source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)                       |
| წევრი  | member                                              | 64           | [source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)                      |
| წელი   | year                                                | 91           | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)                       |
| წესი   | rule                                                | 91           | [source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)                       |
| წვეთი  | drop                                                | 181          | [source](https://en.wiktionary.org/w/index.php?title=წვეთი&oldid=59811747)                      |
| წვენი  | gravy, juice, sap                                   | 181          | [source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)                      |
| წვერი  | beard; tip                                          | 64           | [source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)                      |
| წვიმა  | rain                                                | 49           | [source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)                      |
| წილი   | share; portion                                      | 88           | [source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)                       |
| წინდა  | sock                                                | 103          | [source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)                      |
| წმინდა | pure; holy                                          | 103          | [source](https://en.wiktionary.org/w/index.php?title=წმინდა&oldid=84121076)                     |
| წნევა  | pressure                                            | 181          | [source](https://en.wiktionary.org/w/index.php?title=წნევა&oldid=84121078)                      |
| წონა   | weight                                              | 213          | [source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)                       |
| წრე    | circle                                              | 64, 207      | [source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)                        |
| წუთი   | minute                                              | 151          | [source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)                       |
| წუნი   | defect                                              | 103          | [source](https://en.wiktionary.org/w/index.php?title=წუნი&oldid=84121093)                       |
| წყალი  | water                                               | 145          | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)                      |
| წყარო  | spring                                              | 145          | [source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)                      |
| ჭაბუკი | young man                                           | 153          | [source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122)                     |
| ჭავლი  | jet, stream                                         | 99           | [source](https://en.wiktionary.org/w/index.php?title=ჭავლი&oldid=84102926)                      |
| ჭალა   | floodplain; riverside grove                         | 164          | [source](https://en.wiktionary.org/w/index.php?title=ჭალა&oldid=92391673)                       |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   | 164          | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)                      |
| ჭარბი  | excess; surplus                                     | 230          | [source](https://en.wiktionary.org/w/index.php?title=ჭარბი&oldid=88343674)                      |
| ჭაღი   | chandelier                                          | 117          | [source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)                       |
| ჭერი   | ceiling                                             | 146, 221     | [source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)                       |
| ჭექა   | thunder                                             | 110          | [source](https://en.wiktionary.org/w/index.php?title=ჭექა&oldid=84121145)                       |
| ჭვავი  | rye                                                 | 12           | [source](https://en.wiktionary.org/w/index.php?title=ჭვავი&oldid=87901803)                      |
| ჭია    | worm                                                | 12, 153, 230 | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)                        |
| ჭირი   | illness, trouble                                    | 146          | [source](https://en.wiktionary.org/w/index.php?title=ჭირი&oldid=76807766)                       |
| ჭიქა   | glass, cup                                          | 110          | [source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)                       |
| ჭკუა   | intellect                                           | 153          | [source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)                       |
| ჭოკი   | pole                                                | 7, 216       | [source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)                       |
| ჭორი   | gossip                                              | 138          | [source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)                       |
| ჭრელი  | colorful                                            | 146          | [source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)                      |
| ხავსი  | moss                                                | 169          | [source](https://en.wiktionary.org/w/index.php?title=ხავსი&oldid=88004014)                      |
| ხაზი   | line                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)                       |
| ხალათი | robe                                                | 100          | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200)                     |
| ხალი   | birthmark, mole                                     | 60           | [source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)                       |
| ხალიჩა | carpet, rug                                         | 143          | [source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204)                     |
| ხალხი  | people                                              | 223          | [source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)                      |
| ხამი   | raw, inexperienced                                  | 93, 223      | [source](https://en.wiktionary.org/w/index.php?title=ხამი&oldid=92291997)                       |
| ხარი   | ox, bull                                            | 58, 204      | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)                       |
| ხარჯი  | expense                                             | 168          | [source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)                      |
| ხატი   | icon                                                | 58, 237      | [source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)                       |
| ხაში   | traditional tripe soup                              | 6            | [source](https://en.wiktionary.org/w/index.php?title=ხაში&oldid=92228083)                       |
| ხაჭო   | curd cheese                                         | 95           | [source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)                       |
| ხბო    | calf                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)                        |
| ხედი   | view                                                | 189          | [source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)                       |
| ხევი   | ravine                                              | 136          | [source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)                       |
| ხელი   | hand                                                | 91           | [source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)                       |
| ხეობა  | valley                                              | 95           | [source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)                      |
| ხიბლი  | charm                                               | 35           | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)                      |
| ხიდი   | bridge                                              | 142          | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)                       |
| ხილი   | fruit, fruits                                       | 35, 187      | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)                       |
| ხისტი  | rigid                                               | 240          | [source](https://en.wiktionary.org/w/index.php?title=ხისტი&oldid=84091758)                      |
| ხმა    | voice, sound                                        | 177          | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)                        |
| ხმალი  | sword                                               | 144          | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)                      |
| ხმაური | noise                                               | 86           | [source](https://en.wiktionary.org/w/index.php?title=ხმაური&oldid=84103029)                     |
| ხმელი  | dry                                                 | 55           | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)                      |
| ხორცი  | meat                                                | 9, 149       | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)                      |
| ხრიკი  | trick; ruse                                         | 142          | [source](https://en.wiktionary.org/w/index.php?title=ხრიკი&oldid=84103044)                      |
| ხროვა  | pack                                                | 58           | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)                      |
| ხურდა  | small change                                        | 134          | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)                      |
| ხურმა  | persimmon                                           | 204          | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)                      |
| ხუფი   | lid                                                 | 204          | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)                       |
| ჯადო   | magic                                               | 129          | [source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)                       |
| ჯაზი   | jazz                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)                       |
| ჯამი   | sum; bowl                                           | 53, 144      | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)                       |
| ჯანი   | health                                              | 229          | [source](https://en.wiktionary.org/w/index.php?title=ჯანი&oldid=84121391)                       |
| ჯართი  | scrap                                               | 168          | [source](https://en.wiktionary.org/w/index.php?title=ჯართი&oldid=89067419)                      |
| ჯარი   | army, host                                          | 53           | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)                       |
| ჯარიმა | fine; penalty                                       | 53           | [source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221)                     |
| ჯაჭვი  | chain                                               | 110          | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)                      |
| ჯგუფი  | group                                               | 79           | [source](https://en.wiktionary.org/w/index.php?title=ჯგუფი&oldid=84103069)                      |
| ჯვარი  | cross                                               | 70, 168      | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)                      |
| ჯიბე   | pocket                                              | 158          | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)                       |
| ჯილდო  | reward                                              | 129          | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)                      |
| ჯინსი  | jeans                                               | 229          | [source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)                      |
| ჯიში   | breed                                               | 229          | [source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)                       |
| ჯოგი   | herd                                                | 70           | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)                       |
| ჯორი   | mule                                                | 70           | [source](https://en.wiktionary.org/w/index.php?title=ჯორი&oldid=84121454)                       |
| ჯოხი   | stick                                               | 129          | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)                       |
| ჰავა   | climate                                             | 14           | [source](https://en.wiktionary.org/w/index.php?title=ჰავა&oldid=84121476)                       |
| ჰალვა  | halva                                               | 14           | [source](https://en.wiktionary.org/w/index.php?title=ჰალვა&oldid=92945178)                      |
| ჰიმნი  | anthem                                              | 40           | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)                      |
| ჰობი   | hobby                                               | 211          | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)                       |

## All 240 boards

| Level | Required answers                   | Wheel   | Grid | Difficulty |
| ----: | ---------------------------------- | ------- | ---- | ---------: |
|     1 | ვადა, ყავა, ყდა, დავა, ავად        | ყავდა   | 7×5  |         42 |
|     2 | კერა, კეფა, ფრე, ერა, კაფე         | ერკფა   | 6×4  |         40 |
|     3 | შალი, ვილა, შავი, ვაშლი, ვალი      | ვლიაშ   | 7×5  |         48 |
|     4 | ქირა, ქარი, ჩაი, რქა, ჩქარი        | ჩაქრი   | 6×5  |         44 |
|     5 | ობი, როლი, ბოლი, ლორი, ბროლი       | რლბიო   | 7×5  |         46 |
|     6 | ხაში, თხა, ოთახი, თიხა, თოხი       | თაიოშხ  | 6×5  |         54 |
|     7 | კუჭი, უნიჭო, ჭოკი, კინო, კოჭი      | უნჭკიო  | 7×5  |         56 |
|     8 | ზარი, რაზმი, ფარი, ფირმა, მზა      | აზფრმი  | 7×5  |         56 |
|     9 | ხორცი, რუხი, ცური, უცხო, ცრუ       | ორიუხც  | 7×5  |         54 |
|    10 | ქილა, ქალი, ქოლგა, გოლი, ოლქი      | გაილოქ  | 7×4  |         56 |
|    11 | ტაბუ, ტაში, შუბი, ბატი, ბუშტი      | უიშბატ  | 7×5  |         56 |
|    12 | ჭვავი, ავზი, ჭია, ზვავი, ვიზა      | ვვაჭიზ  | 7×5  |         56 |
|    13 | ფარდა, არფა, ფაფა, დაფა, აფრა      | ადარფფ  | 7×4  |         56 |
|    14 | ლაქა, ქვა, ჰავა, ჰალვა, ქალა       | აავქლჰ  | 7×5  |         54 |
|    15 | ურო, ურდო, ქუდი, ქურდი, დოქი       | დუიქრო  | 7×5  |         54 |
|    16 | კობრი, რკო, როკი, ბარი, კობრა      | ოაირბკ  | 7×5  |         56 |
|    17 | ტოტი, ტოლი, შოლტი, შტო, ტილო       | ოტტიშლ  | 7×5  |         54 |
|    18 | ვენა, მავნე, მწვანე, ამწე, ენა     | ვაწმენ  | 7×5  |         60 |
|    19 | თოვლი, თოლია, თივა, ავი, ოვალი     | თიოვლა  | 7×5  |         58 |
|    20 | ოდა, სოდა, შორს, დრო, დროშა        | ორდსშა  | 6×5  |         52 |
|    21 | თემა, მანეთი, მინა, ნამი, თმა      | აენმით  | 6×5  |         58 |
|    22 | თემი, ზეიმი, მზე, მითი, ზეთი       | ითემზი  | 7×5  |         54 |
|    23 | იარა, არმია, ქამარი, ქმარი, არია   | აირაქმ  | 7×5  |         64 |
|    24 | ვაჟი, კავი, კვირა, კაჟი, კრავი     | კიჟვრა  | 6×5  |         58 |
|    25 | დილა, დოლი, ლოდი, ოფლი, ფოლადი     | ლაოიფდ  | 7×4  |         60 |
|    26 | ლობიო, ობოლი, ოქრო, ქორი, ლოქო     | ქლოროიბ | 6×5  |         66 |
|    27 | რისკი, რეისი, კისერი, კირი, ჩეკი   | იკჩისერ | 7×5  |         72 |
|    28 | ნიკაპი, კარი, ნაპირი, რკინა, პიკი  | იანრიპკ | 6×5  |         74 |
|    29 | ჩუსტი, სია, ქუჩა, ტაქსი, ტუჩი      | ტჩსაუქი | 7×5  |         64 |
|    30 | მუსიკა, სკამი, კასრი, მუსი, კურსი  | უკაირმს | 7×5  |         74 |
|    31 | ღვედი, დევი, ველი, ღელე, ლეღვი     | ღლვედიე | 7×5  |         66 |
|    32 | ყბა, აბი, საბანი, ყანა, ყასაბი     | ყანბაის | 6×5  |         68 |
|    33 | უნარი, გუდა, ურნა, ნარდი, გუნდი    | გადურინ | 7×5  |         68 |
|    34 | ბზა, ალფა, ბაფთა, ბაზა, ბალთა      | აზფლთაბ | 6×5  |         64 |
|    35 | ხიბლი, ხილი, ბმული, მუხლი, მილი    | ლუიხიმბ | 7×5  |         68 |
|    36 | ბატონი, ტანგო, ტბა, ტონი, გობი     | გინტბაო | 7×5  |         68 |
|    37 | ერი, რეჟიმი, უმი, ურემი, ჟიური     | იიეჟუმრ | 6×5  |         68 |
|    38 | ფერმა, ფორმა, ალოე, მოლარე, მალე   | მეოარფლ | 7×5  |         72 |
|    39 | ასთმა, თასმა, მასა, ჩანთა, აჩმა    | აასმჩთნ | 7×5  |         68 |
|    40 | ნაზი, მიზანი, ზმნა, ზიანი, ჰიმნი   | ნჰაიიზმ | 7×5  |         72 |
|    41 | მელა, ეტაპი, მეტალი, ტემპი, ალი    | ლიატპემ | 6×5  |         70 |
|    42 | იოლი, ასო, კლასი, ასკილი, სკოლა    | აიოილსკ | 6×5  |         70 |
|    43 | ფაზა, აზრი, ფრაზა, ბაზარი, ბზარი   | აფბიარზ | 7×5  |         72 |
|    44 | ღომი, მონა, ღრმა, რომანი, ნორმა    | ოინღმარ | 6×5  |         70 |
|    45 | პროზა, უაზრო, ეზო, პოზა, ოპერა     | ოეპაზურ | 7×5  |         66 |
|    46 | ბიურო, ერბო, ღობე, ღრუ, ბურღი      | ორიეღბუ | 7×5  |         64 |
|    47 | ჩვარი, უძრავი, ურჩი, უარი, ძია     | ჩვუარიძ | 7×5  |         68 |
|    48 | მტერი, მეტრი, მტრედი, დიეტა, იდეა  | რიდატმე | 7×5  |         74 |
|    49 | წავი, მწვადი, მთა, დათვი, წვიმა    | დაიმწთვ | 7×5  |         70 |
|    50 | ფილტრი, ფირი, ლირა, ტარიფი, ლიტრი  | იტაფლირ | 6×5  |         74 |
|    51 | გზა, ანძა, ნაგაზი, განძი, გაზი     | ანგაძიზ | 6×5  |         68 |
|    52 | დუელი, ბედი, იუბილე, ბუდე, ბელი    | დლებუიი | 7×5  |         70 |
|    53 | ჯარიმა, მამრი, ჯარი, მაჯა, ჯამი    | იჯმარმა | 6×5  |         70 |
|    54 | დეპო, ლომი, პლედი, მოდელი, ომი     | პოლიდემ | 6×5  |         68 |
|    55 | ფილე, ფეხი, ყელი, ხმელი, მყიფე     | მლეხყიფ | 7×5  |         66 |
|    56 | ლუწი, ლინზა, აუზი, ანწლი, ნალი     | ზანუწლი | 7×5  |         66 |
|    57 | მუხტი, მუშტი, მუშა, აუტი, შხამი    | უხიშტმა | 7×5  |         68 |
|    58 | ხატი, ხროვა, ავტორი, ხარი, ტარი    | ვხტოირა | 7×5  |         70 |
|    59 | სიძე, სველი, ნესვი, ნელი, ძნელი    | ვენსძლი | 7×5  |         68 |
|    60 | ხალი, იახტა, ფილა, ტალახი, ტაფა    | ხლიააფტ | 7×5  |         70 |
|    61 | ლარი, რძალი, ძილი, ძელი, ძლიერი    | რიალიეძ | 7×5  |         70 |
|    62 | ტონა, ცენტი, ცოტა, ენოტი, ტანი     | ეცინაოტ | 7×5  |         66 |
|    63 | მალა, მალამო, მამა, კოალა, კომა    | აომლკმა | 6×5  |         70 |
|    64 | წვერი, წევრი, კიბე, ბევრი, წრე     | კიწვებრ | 7×5  |         66 |
|    65 | ზუსტი, ტუზი, სიო, სუსტი, სოუსი     | სზუსტოი | 6×5  |         66 |
|    66 | პიურე, ტყუპი, ყურე, ყური, რიყე     | უიტრყეპ | 7×5  |         66 |
|    67 | ნეფე, კონა, ოკეანე, ფენა, კანოე    | ფაკეონე | 6×5  |         70 |
|    68 | ლაგამი, ლამა, მაგია, ლიგა, მამალი  | ილმმაგა | 7×5  |         74 |
|    69 | ფასი, უფასო, ფონი, ფსონი, სუნი     | ფნაუისო | 7×5  |         66 |
|    70 | ჯოგი, ჯვარი, გროვა, გვარი, ჯორი    | გაორჯივ | 7×5  |         68 |
|    71 | გამძლე, მგელი, ძეგლი, ძმა, გემი    | მგლიძაე | 7×5  |         70 |
|    72 | ცელი, კეხი, ციხე, ცხელი, გლეხი     | კიგხცელ | 7×5  |         66 |
|    73 | რაგბი, ბაგე, გერბი, ბასრი, ბგერა   | სრეგაიბ | 7×5  |         70 |
|    74 | დედა, დეიდა, დიდი, დიადი, ქედი     | ქაიიდედ | 7×5  |         66 |
|    75 | ოქმი, მისია, სიმი, ქიმია, მაისი    | ამიქიოს | 7×5  |         68 |
|    76 | ძროხა, თარო, ფხა, ფართო, ფრთა      | თოძარხფ | 7×4  |         64 |
|    77 | ბრმა, ძაბრი, ძმარი, ბიძა, ბოძი     | ბძიმაორ | 7×5  |         66 |
|    78 | კამა, კალია, ლამპა, პალმა, კალამი  | აილამკპ | 7×5  |         74 |
|    79 | ჯგუფი, აგური, რუჯი, ფიგურა, უჯრა   | რუფგაჯი | 7×5  |         72 |
|    80 | კილო, ლორი, ცირკი, ციკლი, ცოლი     | ლკროიიც | 7×5  |         66 |
|    81 | შვილი, ჩვილი, ელჩი, შველი, ეშვი    | ჩვლშეიი | 7×5  |         68 |
|    82 | ოფისი, დისკი, ფისი, კოდი, იოდი     | სოფკდიი | 7×5  |         66 |
|    83 | ბოთლი, ბოსელი, ობი, თესლი, სითბო   | ითოლესბ | 7×5  |         72 |
|    84 | ნუკრი, კუნძი, უკან, ძუა, აკრი      | ნუიძაკრ | 7×5  |         64 |
|    85 | ბანი, ბაღი, ნიღაბი, ბინა, უბანი    | უიანიღბ | 6×5  |         70 |
|    86 | ჩუმი, მურა, ხმაური, ჩარხი, რუხი    | იამხჩრუ | 6×5  |         70 |
|    87 | ექიმი, ირემი, ტირე, ქერი, რიტმი    | ქეტრიმი | 7×5  |         68 |
|    88 | იღბალი, ღილი, წაბლი, წილი, იღლია   | ალბწიღი | 6×5  |         72 |
|    89 | თავლა, თვალი, ყავა, ალყა, თავი     | ილაავთყ | 7×5  |         66 |
|    90 | დაბლა, ყალბი, ყდა, დაბა, დაბალი    | ყაიდლაბ | 7×5  |         70 |
|    91 | წელი, სითხე, წესი, ხელი, თხელი     | სეხთწლი | 6×5  |         66 |
|    92 | შვრია, არფა, ფარა, აფიშა, რაფა     | აივშაფრ | 7×5  |         66 |
|    93 | მხეცი, ცომი, ხამი, ემოცია, მახე    | ოიხეაცმ | 7×5  |         70 |
|    94 | მწარე, ამწე, ქერა, რქა, ჩექმა      | წაჩქერმ | 7×5  |         64 |
|    95 | ხბო, ხეობა, საბჭო, ხაჭო, სახე      | ოხასჭებ | 7×5  |         64 |
|    96 | გორა, გარემო, გოგრა, გეგმა, გემო   | რეგაგომ | 7×5  |         72 |
|    97 | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი    | ივაყტეს | 7×5  |         70 |
|    98 | მანია, მადა, მინა, ნადიმი, ამინდი  | აიანდიმ | 7×5  |         74 |
|    99 | კვალი, ჭავლი, ელვა, ვაკე, ეჭვი     | იეკალჭვ | 7×5  |         66 |
|   100 | კალა, კალთა, ხალათი, თიხა, კათხა   | იხკათლა | 7×5  |         72 |
|   101 | ქურა, ასლი, სრული, ქულა, ქუსლი     | ლქსაიურ | 6×5  |         66 |
|   102 | ზღვა, ვარდი, ზღვარი, ღარი, ვაზი    | ზვაღრდი | 6×5  |         70 |
|   103 | წმინდა, წინდა, წამი, ნამი, წუნი    | ნმწიდაუ | 7×5  |         70 |
|   104 | შავი, საშიში, შაშვი, შიში, ავი     | ავშისში | 7×5  |         68 |
|   105 | ბოლო, ბოლოკი, ლობიო, კიბო, ჟოლო    | ჟოიობკლ | 7×5  |         70 |
|   106 | იოგა, გვიან, ნავი, იგავი, ვაგონი   | ვნგოაიი | 6×5  |         72 |
|   107 | დარგი, ადრე, ერთად, გედი, გარეთ    | თგერდაი | 6×5  |         68 |
|   108 | ოინი, რაიონი, რკო, ირონია, ნიორი   | ნოიაიკრ | 7×5  |         72 |
|   109 | დოზა, ოდა, უზადო, ცოდნა, ზონა      | უდონცაზ | 7×5  |         64 |
|   110 | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     | იექაჭჯვ | 7×5  |         66 |
|   111 | ბიჭი, კანჭი, ნიჭი, აბი, ბანკი      | კიჭბანი | 7×5  |         64 |
|   112 | კვიცი, კივი, ცივი, კრივი, ციყვი    | კრცყვიი | 7×5  |         68 |
|   113 | თუთია, ბასი, საბუთი, თუთა, თათი    | ბსთაუით | 7×5  |         70 |
|   114 | კოპი, პოეტი, ეტლი, კლიტე, კეტი     | ლიოეპტკ | 7×5  |         66 |
|   115 | ნული, კუნთი, კლოუნი, კინო, უთო     | ნითლკოუ | 7×5  |         68 |
|   116 | პულსი, პლუსი, სპილო, ყლუპი, ოსპი   | სიპყულო | 7×5  |         70 |
|   117 | მჭადი, მედია, ღამე, ჭაღი, დღე      | იღდჭაემ | 7×5  |         64 |
|   118 | რუკა, ტურა, კარატი, კატა, კარტი    | უიაარკტ | 6×5  |         70 |
|   119 | დაფნა, პანდა, პაპა, დანა, დაფა     | ნფპადპა | 7×5  |         66 |
|   120 | სესია, დასი, სევდა, დევი, სავსე    | სსვეაიდ | 7×5  |         68 |
|   121 | სურათი, სარი, სუფთა, სუფრა, არსი   | ისრუაფთ | 6×5  |         72 |
|   122 | პლატო, ტილო, ტოლმა, ატომი, პალტო   | პალტმიო | 6×5  |         70 |
|   123 | მალე, მედალი, დილა, იმედი, დილემა  | მეადიილ | 6×5  |         74 |
|   124 | მარკა, არია, არაყი, ამაყი, მყარი   | აყმკაირ | 7×5  |         70 |
|   125 | მილი, მშრალი, ლირა, მარში, მარილი  | ლრიშიმა | 6×5  |         74 |
|   126 | ბურღი, ბუზი, ზღარბი, ბზა, ღუზა     | ზრიუაღბ | 6×5  |         68 |
|   127 | ქურქი, ქერქი, შური, შუქი, ერი      | ურეშქიქ | 7×5  |         64 |
|   128 | პარკი, კარი, პარიკი, ჩიპი, პირი    | პიიჩრაკ | 7×5  |         70 |
|   129 | ჯოხი, დახლი, ჯილდო, ოჯახი, ჯადო    | დიხალჯო | 6×5  |         68 |
|   130 | ცული, ვილა, ცილა, უვიცი, ცვილი     | ცუიიალვ | 6×5  |         66 |
|   131 | თეორია, თეძო, რძე, ძია, თერძი      | იოთეძარ | 7×5  |         66 |
|   132 | კომში, კრემი, შორი, შოკი, შრე      | ორეშიკმ | 7×5  |         64 |
|   133 | მელა, ალი, მლაშე, ეშმაკი, ეკალი    | ემლიაშკ | 6×5  |         70 |
|   134 | ცუდი, ცრუ, ცხადი, ხურდა, არხი      | უადცხრი | 7×5  |         64 |
|   135 | ოფლი, უგულო, ფული, გოლფი, გოლი     | ლგუიუოფ | 7×5  |         66 |
|   136 | ძეხვი, ფილე, ძველი, ხევი, ელფი     | ხიეძვფლ | 7×5  |         66 |
|   137 | ყელი, ყველი, ლეკვი, კიდე, კლდე     | ყვდეკილ | 7×5  |         66 |
|   138 | უმი, მჭიდრო, ურდო, ჭორი, მოდური    | ჭმდუირო | 7×5  |         70 |
|   139 | ღონე, ღორი, ნერვი, ღვინო, ღერო     | ნღეორივ | 7×5  |         66 |
|   140 | ავად, ვადა, სადავო, ცოდვა, დავა    | ააოვდსც | 6×5  |         70 |
|   141 | ძრავა, ლავა, ძალა, ქალა, ქარვა     | ალვძაქრ | 7×5  |         66 |
|   142 | ხიდი, კუდი, კრუხი, კირი, ხრიკი     | ირდკიუხ | 7×5  |         66 |
|   143 | ჩალა, ხალიჩა, ახალი, ჩაი, შალი     | შჩაილხა | 6×5  |         68 |
|   144 | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     | ხიაზლჯმ | 7×5  |         66 |
|   145 | ლარი, ლოყა, წყალი, როლი, წყარო     | რლყოწაი | 7×5  |         66 |
|   146 | ჭერი, ჭირი, ჭრელი, ბეჭი, რბილი     | იბლერიჭ | 6×5  |         66 |
|   147 | საათი, ღია, ასანთი, თაღი, თასი     | ისაღთნა | 7×5  |         68 |
|   148 | მაგიდა, დრამა, დარი, არმია, მარაგი | არდგიმა | 7×5  |         76 |
|   149 | ცოფი, ფიცი, ხორცი, ციფრი, ფიცხი    | ცფხრიიო | 6×5  |         68 |
|   150 | ვალსი, ქვა, ქვისლი, ქლიავი, სილა   | ივალქის | 7×5  |         72 |
|   151 | ბარი, ბურთი, წარბი, უარი, წუთი     | რთუიწაბ | 7×5  |         66 |
|   152 | ეპოქა, ექო, თექა, მთა, პოემა       | თქომეპა | 7×5  |         62 |
|   153 | კაუჭი, ჭაბუკი, ჭია, ჭკუა, ფუჭი     | აბფუკიჭ | 7×5  |         68 |
|   154 | ვიდეო, ვოლტი, ლოდი, ველი, ვეტო     | ვიეოლტდ | 7×5  |         66 |
|   155 | ბზიკი, ბლუზი, კლუბი, ბუკი, კუზი    | იილკზბუ | 7×5  |         68 |
|   156 | ფრესკა, ძერა, კაფე, სარკე, კეფა    | ძკაესრფ | 6×5  |         70 |
|   157 | კერა, ენა, ეკრანი, არენა, ნაკერი   | აკაიენრ | 7×5  |         72 |
|   158 | ილეთი, ბილეთი, ლეიბი, ჯიბე, თბილი  | ელიიჯთბ | 7×5  |         74 |
|   159 | ყრუ, ყუთი, ლურჯი, რუჯი, რთული      | ირთულყჯ | 7×5  |         64 |
|   160 | პიკი, კუპრი, ტიპი, ტური, კიტრი     | რპუტკიი | 7×5  |         66 |
|   161 | კუბო, კუბი, ომი, ტუმბო, ბუტკო      | ობიტუმკ | 7×5  |         64 |
|   162 | ზარი, ავზი, ვაზა, ავარია, ავაზა    | ვარააიზ | 7×5  |         70 |
|   163 | ადათი, დალაქი, ქადა, ლაქა, ქალი    | დაითქლა | 6×5  |         70 |
|   164 | ბალი, ბოლი, ჭაობი, ჭალა, ბაჭია     | ბაალჭიო | 7×5  |         66 |
|   165 | ვალი, ძაფი, ძვალი, ძიძა, ფლავი     | აივძძფლ | 7×5  |         66 |
|   166 | სქემა, მზა, მზე, საუზმე, საქმე     | ემსზაუქ | 7×5  |         68 |
|   167 | წებო, ბერი, ვიწრო, ბეწვი, ევრო     | ევრბიწო | 7×5  |         66 |
|   168 | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   | თრიხაჯვ | 7×5  |         72 |
|   169 | სხივი, თავი, ხავსი, იხვი, თახვი    | სიხიავთ | 7×5  |         68 |
|   170 | სია, ასაკი, უკან, საუნა, საკანი    | ისაუაკნ | 7×5  |         70 |
|   171 | ლამა, მუზა, პაუზა, პუმა, ლამპა     | ზააუმპლ | 7×5  |         66 |
|   172 | სუნი, მენიუ, ნემსი, მსუყე, მუსი    | უყენმის | 7×5  |         68 |
|   173 | კანი, კნუტი, პიტნა, კუპატი, ტანკი  | ნკტპიუა | 7×5  |         74 |
|   174 | უხეში, შაშხი, შუშა, შეშა, შუა      | შშიეხაუ | 7×5  |         64 |
|   175 | ნორმა, ორგანო, ორმო, მანგო, მონა   | რაონოგმ | 6×5  |         72 |
|   176 | ზეგ, გზა, თაგვი, თევზი, გაზეთი     | ზაგთივე | 7×5  |         68 |
|   177 | ცხარე, ხმა, ზეცა, მხარე, მახე      | მერაცხზ | 7×5  |         64 |
|   178 | გრილი, ბრალი, ბარგი, ბაგირი, რიგი  | რლგაიბი | 7×5  |         74 |
|   179 | სეზონი, ოზონი, სოიო, ეზო, ზნე      | ეზონოსი | 7×5  |         66 |
|   180 | ბადე, ბაზა, ზებრა, ბარდა, ზედა     | დბზეაარ | 7×5  |         66 |
|   181 | წვენი, თვე, წნევა, წვეთი, წავი     | ეავწნთი | 7×5  |         66 |
|   182 | ბრბო, ბორტი, მორი, ტომი, ბომბი     | ტიბრბომ | 6×5  |         66 |
|   183 | მერი, მყესი, სიღრმე, რიყე, ღერი    | რმღსიყე | 7×5  |         70 |
|   184 | ტერფი, ტირე, ფეტვი, ფერი, ფირი     | ტიერიფვ | 7×5  |         66 |
|   185 | ნივთი, თივა, ნიავი, ნავთი, ნაშთი   | თშივნია | 7×5  |         70 |
|   186 | მოკლე, თოკი, მთელი, კილო, კომლი    | ლიკმოთე | 7×5  |         68 |
|   187 | ლითონი, იოლი, ნოხი, ხილი, თხილი    | თიოინხლ | 7×5  |         70 |
|   188 | ბანაკი, ბინა, კაბინა, კაბა, ნაკლი  | ნკალაბი | 6×5  |         74 |
|   189 | ციხე, ცხენი, ხედი, დენი, სიცხე     | სიხედცნ | 6×5  |         66 |
|   190 | შნო, გუშინ, ნუგეში, ნუში, უშნო     | ენოიგუშ | 7×5  |         68 |
|   191 | ტაში, ტბა, საიტი, ბაიტი, შტაბი     | ტაისბში | 7×5  |         66 |
|   192 | ლიფტი, ფაილი, ფილმი, იაფი, ლაიმი   | იფმლიტა | 7×5  |         70 |
|   193 | იოგა, დოგმა, მოდა, ზოგადი, ზომა    | დმგოაზი | 6×5  |         70 |
|   194 | ქოხი, სქესი, სესხი, სისქე, სიო     | ხსესიოქ | 7×5  |         66 |
|   195 | გული, გალია, ლიგა, ლულა, ალალი     | აგიაულლ | 7×5  |         66 |
|   196 | გოჭი, საჭირო, ასო, გორა, გარსი     | გოარისჭ | 6×5  |         68 |
|   197 | თონე, ფენი, ფონდი, დენთი, დონე     | ეფთიდნო | 7×5  |         66 |
|   198 | ბანქო, ბაქანი, ქონი, აბანო, აბი    | ბანაოიქ | 7×5  |         70 |
|   199 | ძმა, ალღო, ლაღი, ძაღლი, მძღოლი     | ძამლიღო | 7×5  |         68 |
|   200 | ნისლი, სტილი, ტენი, ლენტი, ნელი    | ლეტსიინ | 7×5  |         68 |
|   201 | ლუდი, დროული, ურო, ძიუდო, დოლი     | ოლდძუირ | 7×5  |         68 |
|   202 | სოდა, საპონი, სანდო, პონი, სპა     | პოდაინს | 6×5  |         68 |
|   203 | ზავი, ვიზა, კვოტა, აზოტი, კოვზი    | კიტოზვა | 7×5  |         68 |
|   204 | მუხა, მხარი, ხურმა, ხარი, ხუფი     | ფმაირხუ | 7×5  |         66 |
|   205 | პრიზი, პირი, ზურგი, გრიპი, პური    | რუგიიზპ | 7×5  |         68 |
|   206 | კაცი, კეცი, სცენა, აკნე, ანკესი    | ნაიცესკ | 7×5  |         70 |
|   207 | ფრე, მწიფე, მწერი, მეფე, წრე       | ფერემიწ | 7×5  |         62 |
|   208 | ფოთოლი, ფოტო, თოფი, ფლოტი, ტოლი    | ფიოტთლო | 7×5  |         70 |
|   209 | გენი, ბედი, გიდი, ბინდი, ბენდი     | ენგიბდი | 7×5  |         66 |
|   210 | სწორი, ტრიო, ოსპი, პოსტი, პორტი    | ოწტრპსი | 7×5  |         68 |
|   211 | კიბო, კბილი, ობი, ჰობი, ბლოკი      | ლკჰოიიბ | 7×5  |         64 |
|   212 | ვირი, მძივი, ძვირი, ძირი, მური     | ძირუმივ | 7×5  |         66 |
|   213 | წონა, აწმყო, წამი, მაწონი, მიწა    | წყნმაოი | 7×5  |         70 |
|   214 | ნავი, ტანი, ყინვა, ტვინი, ტყავი    | იიყვნტა | 7×5  |         68 |
|   215 | ცელი, ცნება, ბნელი, ცალი, ნება     | ბიალენც | 7×5  |         66 |
|   216 | კოჭი, ნაოჭი, ჭოკი, კანონი, კოჭა    | ნკჭიაონ | 7×5  |         70 |
|   217 | ქაფი, ფაქტი, ქოსა, ქაოსი, ფოსტა    | იაოქფსტ | 7×5  |         68 |
|   218 | პიცა, რეპი, საცერი, სერია, პრესა   | აიესცრპ | 6×5  |         72 |
|   219 | სქელი, ქსელი, ლექსი, სული, მუქი    | ქლეისმუ | 7×5  |         68 |
|   220 | ფიჭა, ფენა, ფარი, ნაჭერი, ფრანი    | ეარფჭნი | 6×5  |         70 |
|   221 | ერი, მცირე, ცრემლი, მჭლე, ჭერი     | ჭლემცრი | 7×5  |         68 |
|   222 | ჩაი, მუდამ, მუმია, ჩუმი, ჩუმად     | ამიუჩდმ | 7×5  |         66 |
|   223 | ხალხი, სახლი, მსხალი, ასლი, ხამი   | ისამლხხ | 7×5  |         72 |
|   224 | როკი, კორტი, კერძო, კერძი, რძე     | რძიტოკე | 7×5  |         66 |
|   225 | ღარი, ღიპი, ღირსი, ისარი, საღი     | ღარპსიი | 7×5  |         66 |
|   226 | ყადრი, ყდა, ყორანი, დრო, დრონი     | ოაიყდრნ | 7×5  |         68 |
|   227 | ბავშვი, ქვა, შავი, ქვაბი, ქვიშა    | იბვშქვა | 7×5  |         70 |
|   228 | ტარი, ყბა, ბარტყი, ბრაზი, ბზარი    | ბყტიზრა | 7×5  |         70 |
|   229 | ჯიში, ნიშა, ჯინსი, შანსი, ჯანი     | ჯშნიასი | 7×5  |         66 |
|   230 | ჭარბი, ბანი, ჭია, ჟანრი, ბირჟა     | ბრჟიაჭნ | 7×5  |         66 |
|   231 | გლუვი, გველი, გუბე, უბე, ბელი      | ვლგუბეი | 7×5  |         64 |
|   232 | მარტო, რომი, ტორტი, ტომატი, ტოტი   | ტოარმიტ | 7×5  |         72 |
|   233 | გრამი, გიტარა, იარა, მაგარი, ატამი | აგმარიტ | 7×5  |         76 |
|   234 | რადიო, როიალი, დოლარი, ოდა, იოდი   | რდლოაიი | 7×5  |         72 |
|   235 | ნაძვი, აკვანი, ძია, კვანძი, ანძა   | ნკძიაავ | 7×5  |         72 |
|   236 | აჯიკა, იჯარა, ქარი, კარაქი, ქირა   | კაიქჯრა | 6×5  |         72 |
|   237 | ტახტი, შტატი, შხაპი, ხატი, ტიტა    | პტშტიხა | 7×5  |         68 |
|   238 | მასალა, მასა, თმა, თასმა, სალათა   | ათსამლა | 7×5  |         72 |
|   239 | ერა, აგენტი, ნერგი, ენა, გრანტი    | ატგინერ | 7×5  |         70 |
|   240 | ჩიხი, ჩხირი, ხისტი, ჩირი, ჩიტი     | სხტირჩი | 6×5  |         66 |
