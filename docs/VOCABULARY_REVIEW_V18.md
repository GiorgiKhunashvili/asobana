# Journey vocabulary and campaign review — revision 18

The owner approved **131 of 140 proposals in expansion batch 03** and rejected
nine spellings: ბიძია, გვიანი, დედიკო, მამიკო, მუშაკი, უკანა, წლიური, ხანი, ჯერი. These nine are excluded from required answers,
accepted variants and bonuses. All 1,221 previous approvals remain, bringing the
main pool to **1,352**. The new reference has **1,573 entries / 1,470 playable words**:
1,352 required-eligible and 118 additional bonus-only words. Prior reference entries
are preserved exactly. The nine rejected proposals were never ingested.

Individual decisions, senses and fixed source revision links are recorded in
[the batch](VOCABULARY_EXPANSION_BATCH_03.json) and
[the allowlist](../content/dictionaries/everyday-targets-v18.json).

## Measured results

| Measure                               | Revision 17 | Revision 18 |
| ------------------------------------- | ----------: | ----------: |
| Levels / journey stops                |    240 / 48 |    240 / 48 |
| Required answer slots                 |       1,200 |       1,200 |
| Approved required words               |       1,221 |       1,352 |
| Distinct required words               |         953 |         995 |
| Repeated slots after first appearance |         247 |         205 |
| Unused approvals                      |         268 |         357 |
| Minimum repeat gap                    |          75 |          75 |

Repeated answer slots decrease by **17.00%**.
The campaign uses **65 of the 131 new approvals**; 66
remain eligible but unused. Overall 107 spellings enter the campaign and
65 previously used spellings leave, for a net gain of 42.
Bonus appearances do not count toward required-word repetition.

| Required appearances | Revision 17 distinct words | Revision 18 distinct words |
| -------------------: | -------------------------: | -------------------------: |
|                    1 |                        730 |                        801 |
|                    2 |                        199 |                        183 |
|                    3 |                         24 |                         11 |
|                    4 |                          0 |                          0 |

Repeat gaps range from 75 to 226 levels. All accepted variants are
canonical-only. Required slots by length: 106 three-letter,
534 four-letter, 437 five-letter and 123 six-letter answers.
Five-letter answers begin at level 3 and six-letter answers at level 18.

## Rules and editorial audit

All 995 distinct required spellings and all 1,200 answer slots were checked
against the exact allowlist, recorded meanings, individual owner decisions and
source provenance. Source checks were completed when preparing batch 03; this
rebuild preserves those approved senses without claiming fresh linguistic review.
No plurals occur as required answers or variants. All 47 reserved bonus spellings,
53 full-pool exclusions, 12 unused-pool exclusions, nine new exclusions and all
earlier grammar/barbarism restrictions remain enforced. Every eligible formable
extra is recognized as a bonus.

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

Another **148 individually approved words** reach the 1,500-word goal. More
approvals alone do not guarantee zero repetition. This revision retains the
240 levels and 48 journey stops required by the rulebook.

## Compatibility and reproducibility

Historical packs, allowlists and reference dictionaries remain unchanged; the shared
policy adds a revision-18 exclusion category without changing earlier decisions.
Stable pack, level and journey identities are retained. Migration supports every
prior revision and preserves completed levels, partial solved credits, coins, paid
hints, postcards and lifetime bonus rewards through restart. The hint compatibility
ceiling is 1,460 (revision 17's 1,418 plus a replacement board). Continuing answers
retain their IDs on the same board.

Reviewed draft SHA-256: `613d585ae11353bb7d01ff2c5c82d07e48fd276b46b0a5875eaed382d8c19c59`.

Rebuild with `scripts/rebuild-wide-content.py --revision 18`. Promotion requires
`--promote-reviewed` and this exact reviewed draft. Recipes reproduce the pack
independently of ignored search artifacts.

## Validation

Completed on 2026-10-18:

- `npm run check`: passed TypeScript, ESLint, 232 tests across 29 suites,
  validation and automated solving of all 240 levels, and repository formatting.
- `uv run pytest`: 130 passed, including exact 131 additions, all nine exclusions
  in every gameplay role, historical reference preservation, deterministic rebuild
  and complete eligible bonus recognition.
- `uv run ruff check .`, `uv run ruff format --check .` and `uv run mypy src`:
  all passed using the local offline uv cache.
- `npx expo export --platform ios`: passed; bundle output in `mobile/dist`.
- SQLite migration/restart checks include revision-17 partial and complete saves,
  historical maximum paid-hint credits and a subsequent hint, coins, settings,
  postcards and lifetime bonus rewards.
- All 59 historical content/dictionary JSON files match their pre-edit SHA-256
  digests. Every earlier policy category is unchanged; only the new revision-18
  category was appended. `git diff --check` passed.

The iOS export is a bundle check, not a native-device test or a TestFlight upload.
The optimization remains bounded; no global-optimality proof or fresh native-speaker
review is claimed.

## Unused approved words (357)

| Word   | Recorded meaning             | Approval | Source                                                                      |
| ------ | ---------------------------- | -------- | --------------------------------------------------------------------------- |
| აბზაცი | paragraph                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=აბზაცი&oldid=91914485) |
| აბჯარი | armor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412) |
| აგენტი | agent                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114) |
| ადგილი | place                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114) |
| ავდარი | bad weather, rainy weather   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279) |
| ავტორი | author                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573) |
| აივანი | balcony                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190) |
| ალბომი | album                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197) |
| ალიონი | dawn                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ალიონი&oldid=84112474) |
| ამბავი | story, news                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516) |
| ამპერი | ampere                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ამპერი&oldid=84097293) |
| ანბანი | alphabet                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407) |
| ანდაზა | proverb                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575) |
| ანემია | anemia                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანემია&oldid=84097334) |
| ანკეტა | questionnaire                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანკეტა&oldid=84112645) |
| არქივი | archive                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427) |
| არწივი | eagle                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068) |
| ატლასი | atlas                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ატლასი&oldid=84097471) |
| აფთარი | hyena                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116) |
| აღვირი | bridle                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=აღვირი&oldid=92127736) |
| ბაბუა  | grandfather, grandpa         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)  |
| ბადაგი | grape syrup                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბადაგი&oldid=92290638) |
| ბავშვი | child                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503) |
| ბალახი | grass                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალახი&oldid=85585178) |
| ბალეტი | ballet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557) |
| ბალიში | pillow, cushion              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170) |
| ბამბა  | cotton, cotton wool          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)  |
| ბანანი | banana                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335) |
| ბარათი | card; letter                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბარათი&oldid=85067525) |
| ბარტყი | chick                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362) |
| ბაქანი | platform                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაქანი&oldid=84113388) |
| ბაწარი | string, cord                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაწარი&oldid=92228016) |
| ბეკონი | bacon                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047) |
| ბერეტი | beret                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646) |
| ბეტონი | concrete                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651) |
| ბეღელი | granary                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეღელი&oldid=84113473) |
| ბეღურა | sparrow                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232) |
| ბეჭედი | ring                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424) |
| ბზიკი  | wasp                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბზიკი&oldid=84113490)  |
| ბილიკი | path                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672) |
| ბირთვი | core                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბირთვი&oldid=84113525) |
| ბიძგი  | push                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბიძგი&oldid=84097695)  |
| ბოლქვი | bulb                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბოლქვი&oldid=84097704) |
| ბოროტი | evil; wicked                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020) |
| ბორცვი | hillock                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბორცვი&oldid=84097714) |
| ბრინჯი | rice                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506) |
| ბრძენი | wise                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ბრძენი&oldid=84089626) |
| ბუსუსი | fuzz                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუსუსი&oldid=84097785) |
| ბუხარი | fireplace                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056) |
| გალია  | cage                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)  |
| გამძლე | durable                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=გამძლე&oldid=43754830) |
| გვალვა | drought                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=გვალვა&oldid=92490376) |
| გოგო   | girl                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)   |
| გონება | mind; intellect              | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=გონება&oldid=92692374) |
| გრანტი | grant; scholarship           | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=გრანტი&oldid=88392548) |
| დარაჯი | guard                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652) |
| დაქალი | close female friend          | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=დაქალი&oldid=84114443) |
| დედალი | female animal                | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=დედალი&oldid=91716454) |
| დეტალი | detail                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=დეტალი&oldid=85506724) |
| დივანი | sofa                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=დივანი&oldid=84114587) |
| დოლარი | dollar                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=დოლარი&oldid=84098241) |
| დროული | timely                       | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=დროული&oldid=84090042) |
| დუეტი  | duet                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)  |
| ერთობა | unity                        | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ერთობა&oldid=84114925) |
| ესკიზი | sketch                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ესკიზი&oldid=84114959) |
| ექთანი | nurse                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646) |
| ეშმაკი | devil                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ეშმაკი&oldid=85068322) |
| ველური | wild                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ველური&oldid=84090127) |
| ვერსია | version                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვერსია&oldid=84098493) |
| ვეფხვი | tiger                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960) |
| ვეშაპი | whale                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435) |
| ვირუსი | virus                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530) |
| ზაზუნა | hamster                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134) |
| ზარალი | loss                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744) |
| ზეცა   | heaven                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)   |
| ზეწარი | bedsheet                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578) |
| ზიზღი  | disgust                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ზიზღი&oldid=84115345)  |
| ზოგადი | general                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზოგადი&oldid=84090161) |
| ზუსტი  | precise; exact               | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ზუსტი&oldid=84088793)  |
| თავბრუ | dizziness                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=თავბრუ&oldid=84098608) |
| თამადა | toastmaster                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151) |
| თამამი | bold; confident              | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=თამამი&oldid=84090182) |
| თამაში | game                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028) |
| თარიღი | date                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319) |
| თეატრი | theatre                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეატრი&oldid=89024711) |
| თეორია | theory                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეორია&oldid=84098686) |
| თეფში  | plate                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)  |
| თოვლი  | snow                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)  |
| თოჯინა | doll                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714) |
| თუნუქი | tin plate                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=თუნუქი&oldid=84098722) |
| იარაღი | weapon, tool                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054) |
| იატაკი | floor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760) |
| იდაყვი | elbow                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=იდაყვი&oldid=90005976) |
| ილუზია | illusion                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ილუზია&oldid=68794707) |
| ირონია | irony                        | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ირონია&oldid=84098887) |
| კაბელი | cable                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959) |
| კაკაბი | partridge                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაკაბი&oldid=84115977) |
| კალათა | basket                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984) |
| კალამი | pen                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კალამი&oldid=92468658) |
| კამათი | argument                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005) |
| კამეჩი | buffalo                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამეჩი&oldid=84116010) |
| კაპიკი | kopeck                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაპიკი&oldid=84116027) |
| კარადა | cupboard, wardrobe, closet   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032) |
| კარავი | tent                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033) |
| კარატე | karate                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608) |
| კარაქი | butter                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208) |
| კედელი | wall                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872) |
| კეთილი | kind                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581) |
| კენკრა | berry                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952) |
| კვარცი | quartz                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421) |
| კვირტი | bud                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კვირტი&oldid=84116143) |
| კლანჭი | claw                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695) |
| კოდალა | woodpecker                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოდალა&oldid=87900485) |
| კოკორი | flower bud                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოკორი&oldid=88091590) |
| კოლეგა | colleague                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090) |
| კოლოფი | box                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231) |
| კომეტა | comet                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201) |
| კომოდი | chest of drawers             | Retained | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206) |
| კონუსი | cone                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კონუსი&oldid=84099277) |
| კონცხი | cape                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კონცხი&oldid=84099289) |
| კოღო   | mosquito                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)   |
| კოცონი | bonfire                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332) |
| კუთხე  | corner                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)  |
| კულული | curl                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კულული&oldid=84099390) |
| კუნძი  | stump                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კუნძი&oldid=84116386)  |
| კუპრი  | tar                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=კუპრი&oldid=92228107)  |
| კურკა  | fruit stone                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)  |
| ლაზერი | laser                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416) |
| ლამაზი | beautiful                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლამაზი&oldid=84116431) |
| ლექცია | lecture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლექცია&oldid=88917235) |
| ლიდერი | leader                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლიდერი&oldid=84116502) |
| ლოგიკა | logic                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159) |
| ლუკმა  | bite, morsel                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)  |
| ლულა   | barrel of a gun              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლულა&oldid=84103557)   |
| მამალი | rooster                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460) |
| მამიდა | paternal aunt                | Retained | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651) |
| მანერა | manner                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მანერა&oldid=84099636) |
| მარცხი | failure; defeat              | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მარცხი&oldid=84099693) |
| მასალა | material                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175) |
| მატყლი | wool                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270) |
| მაღალი | tall; high                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=მაღალი&oldid=84090444) |
| მეთოდი | method                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მეთოდი&oldid=84099800) |
| მეკარე | goalkeeper                   | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მეკარე&oldid=84116856) |
| მელანი | ink                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862) |
| მელოტი | bald                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872) |
| მეფე   | king                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)   |
| მთვარე | moon                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მთვარე&oldid=92701984) |
| მიზეზი | reason                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მიზეზი&oldid=84099946) |
| მინუსი | minus                        | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მინუსი&oldid=84099990) |
| მირაჟი | mirage                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მირაჟი&oldid=84099992) |
| მკაცრი | strict                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მკაცრი&oldid=84088882) |
| მკერდი | chest; breast                | Retained | [source](https://en.wiktionary.org/w/index.php?title=მკერდი&oldid=84117115) |
| მოდელი | model                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844) |
| მომხრე | supporter                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მომხრე&oldid=33309720) |
| მონეტა | coin                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079) |
| მორალი | moral                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მორალი&oldid=84100099) |
| მოტივი | motif                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოტივი&oldid=84100123) |
| მოწმე  | witness                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მოწმე&oldid=84100153)  |
| მოხუცი | elderly person               | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოხუცი&oldid=88799725) |
| მტვერი | dust                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826) |
| მტკიცე | firm; sturdy                 | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მტკიცე&oldid=84088908) |
| მუსიკა | music                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574) |
| მუყაო  | cardboard                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მუყაო&oldid=84100207)  |
| მუცელი | stomach, tummy               | Retained | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402) |
| მღვიმე | cavern                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497) |
| მყრალი | foul-smelling                | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მყრალი&oldid=84090627) |
| მშიერი | hungry                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მშიერი&oldid=84088912) |
| მცდარი | incorrect; mistaken          | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მცდარი&oldid=84088557) |
| მძიმე  | heavy                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მძიმე&oldid=81821575)  |
| მწვადი | grilled meat on a skewer     | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მწვადი&oldid=87884655) |
| მწვავე | sharp; acute                 | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მწვავე&oldid=75374844) |
| მწვანე | green                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780) |
| მწნილი | pickled food                 | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=მწნილი&oldid=84100246) |
| ნაბადი | felt cloak                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951) |
| ნაბიჯი | footstep                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაბიჯი&oldid=92709978) |
| ნაგავი | rubbish                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259) |
| ნაგაზი | sheepdog                     | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ნაგაზი&oldid=87732950) |
| ნათურა | light bulb                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნათურა&oldid=88113865) |
| ნაკადი | gush, spurt, squirt, stream  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276) |
| ნალექი | precipitation                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნალექი&oldid=84117542) |
| ნაპირი | shore, strand, waterside     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827) |
| ნაყოფი | fruit of a plant             | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ნაყოფი&oldid=89105168) |
| ნახატი | picture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603) |
| ნახირი | cattle herd                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნახირი&oldid=84117611) |
| ნეფე   | bridegroom                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნეფე&oldid=84100382)   |
| ნიმუში | sample                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676) |
| ნიღაბი | mask                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ნიღაბი&oldid=84117691) |
| ნიშანი | sign                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468) |
| ნომერი | number label; hotel room     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნომერი&oldid=84117710) |
| ობობა  | spider                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)  |
| ოკეანე | ocean                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ოკეანე&oldid=84117787) |
| ორბიტა | orbit                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483) |
| ორსული | pregnant                     | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ორსული&oldid=84117860) |
| ოსტატი | master craftsman             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588) |
| პალტო  | overcoat                     | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=პალტო&oldid=88603382)  |
| პანელი | panel                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პანელი&oldid=84100554) |
| პანიკა | panic                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პანიკა&oldid=84117941) |
| პაპი   | pope                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაპი&oldid=84103471)   |
| პაროლი | password                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601) |
| პასუხი | answer                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პასუხი&oldid=85067528) |
| პატივი | honor                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548) |
| პენსია | pension                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867) |
| პილოტი | pilot                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538) |
| პირადი | personal; private            | Retained | [source](https://en.wiktionary.org/w/index.php?title=პირადი&oldid=84090793) |
| პირობა | promise; requirement         | Retained | [source](https://en.wiktionary.org/w/index.php?title=პირობა&oldid=85541139) |
| პლედი  | plaid blanket                | Retained | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)  |
| პოეზია | poetry                       | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=პოეზია&oldid=88968704) |
| პრემია | prize                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288) |
| პრინცი | prince                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987) |
| ჟელე   | jelly                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)   |
| ჟესტი  | gesture                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ჟესტი&oldid=84100938)  |
| რაინდი | knight                       | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=რაინდი&oldid=86397598) |
| რაუნდი | round                        | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=რაუნდი&oldid=84118282) |
| რეჟიმი | mode; regimen                | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=რეჟიმი&oldid=84101045) |
| რიცხვი | number; day of the month     | Retained | [source](https://en.wiktionary.org/w/index.php?title=რიცხვი&oldid=85067546) |
| რობოტი | robot                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728) |
| რომანი | novel                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=რომანი&oldid=84101101) |
| რწყილი | flea                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=რწყილი&oldid=92250765) |
| საბაბი | excuse; pretext              | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=საბაბი&oldid=84118438) |
| საბელი | leash                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=საბელი&oldid=84118453) |
| საგანი | object, subject              | Retained | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780) |
| სადილი | midday meal                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533) |
| საერთო | common; shared               | Retained | [source](https://en.wiktionary.org/w/index.php?title=საერთო&oldid=88645820) |
| საკეტი | lock                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=საკეტი&oldid=43965749) |
| სალათა | salad                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797) |
| სალარო | cash register; ticket office | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სალარო&oldid=85820915) |
| სამეფო | kingdom                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981) |
| სამოსი | clothing; attire             | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სამოსი&oldid=84118646) |
| საუზმე | breakfast                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=საუზმე&oldid=88091259) |
| საფულე | wallet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843) |
| საღამო | evening                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=საღამო&oldid=88849236) |
| საყურე | earring                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=საყურე&oldid=85101324) |
| საცავი | storage; repository          | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=საცავი&oldid=84103408) |
| საცობი | stopper; traffic jam         | Retained | [source](https://en.wiktionary.org/w/index.php?title=საცობი&oldid=84118876) |
| სახელი | name; fame                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=სახელი&oldid=84118897) |
| საჯარო | public                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=საჯარო&oldid=43853043) |
| სეტყვა | hail                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560) |
| სვავი  | vulture                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სვავი&oldid=87901139)  |
| სიახლე | novelty; innovation          | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიახლე&oldid=88800054) |
| სიბერე | old age                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სიბერე&oldid=84118987) |
| სიგანე | width                        | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სიგანე&oldid=84101409) |
| სიგრძე | length                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიგრძე&oldid=84119000) |
| სივრცე | space; area                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=სივრცე&oldid=84119003) |
| სისხლი | blood                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162) |
| სიღრმე | depth                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიღრმე&oldid=84101569) |
| სიჩუმე | silence; quiet               | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სიჩუმე&oldid=84101577) |
| სიცივე | coldness, frigidity          | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113) |
| სიცრუე | falsehood                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სიცრუე&oldid=87305055) |
| სკამი  | chair                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)  |
| სკვერი | public square                | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142) |
| სკივრი | chest                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკივრი&oldid=84101617) |
| სოკო   | mushroom                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)   |
| სორო   | burrow                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სორო&oldid=88091310)   |
| სოფელი | village                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სოფელი&oldid=88647104) |
| სპორტი | sport                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224) |
| სტატია | article                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457) |
| სტუდია | studio                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სტუდია&oldid=84101730) |
| სუნამო | perfume                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სუნამო&oldid=84101750) |
| სუნელი | spice; seasoning             | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=სუნელი&oldid=84103259) |
| სუსტი  | weak                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=სუსტი&oldid=89906555)  |
| სფერო  | sphere; field                | Retained | [source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)  |
| სწორი  | correct; straight            | Retained | [source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)  |
| სწრაფი | quick                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სწრაფი&oldid=84119316) |
| სხეული | body                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318) |
| სხვენი | attic                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322) |
| ტალღა  | wave                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)  |
| ტაძარი | temple; cathedral            | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ტაძარი&oldid=91725864) |
| ტექსტი | text                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105) |
| ტვირთი | load                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860) |
| ტკბილი | sweet                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168) |
| ტომარა | sack                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123) |
| ტრავმა | trauma; injury               | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტრავმა&oldid=84119433) |
| ტყუპი  | twin                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)  |
| უბრალო | simple                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=უბრალო&oldid=75271163) |
| უდაბნო | desert                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660) |
| უნაკლო | flawless                     | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=უნაკლო&oldid=84119652) |
| უშნო   | ugly                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=უშნო&oldid=88343119)   |
| უცნობი | unknown; unfamiliar          | Retained | [source](https://en.wiktionary.org/w/index.php?title=უცნობი&oldid=84089062) |
| უჯრედი | cell                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=უჯრედი&oldid=85068642) |
| ფაქიზი | delicate                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფაქიზი&oldid=84091230) |
| ფერადი | colourful                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ფერადი&oldid=84091239) |
| ფიზიკა | physics                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730) |
| ფილტვი | lung                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916) |
| ფირუზი | turquoise                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფირუზი&oldid=84088596) |
| ფიფქი  | snowflake                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)  |
| ფიჭვი  | pine                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)  |
| ფლეიტა | flute                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფლეიტა&oldid=92228066) |
| ფსკერი | bottom                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფსკერი&oldid=84119972) |
| ფუნტი  | pound                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)  |
| ფუნჯი  | brush                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)  |
| ფქვილი | flour                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987) |
| ქაბაბი | kebab                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993) |
| ქათამი | chicken                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996) |
| ქალაქი | city                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093) |
| ქვევრი | qvevri wine vessel           | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687) |
| ქვეითი | pedestrian                   | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ქვეითი&oldid=84120089) |
| ქინძი  | coriander                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)  |
| ქოთანი | plant pot                    | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ქოთანი&oldid=89322782) |
| ქომაგი | defender                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქომაგი&oldid=91733127) |
| ღამურა | bat                          | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ღამურა&oldid=92290634) |
| ღარიბი | poor                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღარიბი&oldid=84120206) |
| ღელე   | brook                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღელე&oldid=84120207)   |
| ღვიძლი | liver                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღვიძლი&oldid=92719057) |
| ღიპი   | belly                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღიპი&oldid=84102517)   |
| ღმერთი | god; deity                   | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ღმერთი&oldid=88019325) |
| ღუმელი | stove                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256) |
| ყადრი  | value, respect               | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)  |
| ყაჩაღი | robber                       | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ყაჩაღი&oldid=84120295) |
| ყვავი  | crow                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)  |
| ყინული | ice                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551) |
| ყოჩი   | ram                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)   |
| შაბათი | Saturday                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658) |
| შაქარი | sugar                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621) |
| შრიფტი | typeface                     | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=შრიფტი&oldid=84435051) |
| შუქურა | lighthouse                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=შუქურა&oldid=91715399) |
| ჩანთა  | bag                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)  |
| ჩარჩო  | frame                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)  |
| ჩვევა  | habit                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)  |
| ჩლიქი  | hoof                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩლიქი&oldid=92229616)  |
| ჩოგანი | racket                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726) |
| ჩონჩხი | skeleton                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089) |
| ჩრდილი | shade                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977) |
| ცენტრი | center                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748) |
| ცეცხლი | fire                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ცეცხლი&oldid=84120800) |
| ცნება  | concept                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)  |
| ცოდნა  | knowledge                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)  |
| ცრემლი | tear from the eyes           | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცრემლი&oldid=84120880) |
| ცხვარი | sheep                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538) |
| ცხვირი | nose                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521) |
| ცხრილი | table; chart                 | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ცხრილი&oldid=84102822) |
| ძარღვი | vein                         | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ძარღვი&oldid=84120923) |
| ძუნწი  | stingy                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)  |
| წერილი | letter; written message      | Retained | [source](https://en.wiktionary.org/w/index.php?title=წერილი&oldid=85067524) |
| წითელა | measles                      | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=წითელა&oldid=84102886) |
| წითელი | red                          | Retained | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641) |
| წიწაკა | pepper                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068) |
| წიწილა | chick                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124) |
| წყვილი | pair                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227) |
| წყნარი | quiet                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680) |
| ჭადარი | plane tree                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭადარი&oldid=84121125) |
| ჭაღარა | gray-haired                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183) |
| ჭაჭა   | grape pomace                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)   |
| ჭუჭყი  | dirt                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)  |
| ხაბაზი | baker                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხაბაზი&oldid=84121183) |
| ხავსი  | moss                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხავსი&oldid=88004014)  |
| ხერხი  | saw, method                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)  |
| ხვრელი | hole                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623) |
| ხოჭო   | beetle                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)   |
| ხსნარი | liquid solution              | Batch 03 | [source](https://en.wiktionary.org/w/index.php?title=ხსნარი&oldid=85491046) |
| ხუნდი  | shackle                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)  |
| ხშირი  | frequent; dense              | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)  |
| ჯარიმა | fine; penalty                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221) |
| ჯიუტი  | stubborn                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)  |
| ჯიხვი  | Caucasian mountain goat      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)  |
| ჯიხური | kiosk                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096) |
| ჯოკერი | joker card                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯოკერი&oldid=84121451) |
| ჯუჯა   | dwarf                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)   |

## All required words

| Word   | Recorded meaning                                    | Levels       | Source                                                                      |
| ------ | --------------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 235          | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)  |
| აბი    | pill                                                | 39, 127, 221 | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)    |
| აგური  | brick                                               | 63           | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)  |
| ადათი  | custom                                              | 185          | [source](https://en.wiktionary.org/w/index.php?title=ადათი&oldid=84112201)  |
| ადვილი | easy                                                | 230          | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563) |
| ადრე   | early; previously                                   | 129          | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| ავად   | ill, sick                                           | 2, 218       | [source](https://en.wiktionary.org/w/index.php?title=ავად&oldid=88672971)   |
| ავაზა  | cheetah                                             | 173          | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)  |
| ავარია | accident                                            | 173          | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031) |
| ავეჯი  | furniture                                           | 99           | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)  |
| ავზი   | tank, sink                                          | 12, 173      | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)   |
| ავი    | wicked, evil                                        | 30, 110      | [source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)    |
| აზოტი  | nitrogen                                            | 195          | [source](https://en.wiktionary.org/w/index.php?title=აზოტი&oldid=87888146)  |
| აზრი   | thought, opinion                                    | 84, 200      | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)   |
| აკვანი | cradle                                              | 237          | [source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814) |
| აკნე   | acne                                                | 81, 205      | [source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)   |
| აკრი   | acre                                                | 3, 229       | [source](https://en.wiktionary.org/w/index.php?title=აკრი&oldid=84097213)   |
| ალი    | blaze, flame, fire                                  | 32, 119, 198 | [source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)    |
| ალმასი | diamond                                             | 75           | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482) |
| ალოე   | aloe                                                | 40           | [source](https://en.wiktionary.org/w/index.php?title=ალოე&oldid=84112485)   |
| ალფა   | alpha                                               | 54           | [source](https://en.wiktionary.org/w/index.php?title=ალფა&oldid=84097261)   |
| ალღო   | intuition                                           | 167          | [source](https://en.wiktionary.org/w/index.php?title=ალღო&oldid=84097265)   |
| ალყა   | siege                                               | 89           | [source](https://en.wiktionary.org/w/index.php?title=ალყა&oldid=84112502)   |
| ამაყი  | proud                                               | 156          | [source](https://en.wiktionary.org/w/index.php?title=ამაყი&oldid=84112515)  |
| ამინდი | weather                                             | 103          | [source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550) |
| ამწე   | crane                                               | 104, 181     | [source](https://en.wiktionary.org/w/index.php?title=ამწე&oldid=33588412)   |
| ანკესი | fishing hook                                        | 205          | [source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188) |
| ანძა   | mast                                                | 237          | [source](https://en.wiktionary.org/w/index.php?title=ანძა&oldid=84097365)   |
| ანწლი  | elderberry                                          | 186          | [source](https://en.wiktionary.org/w/index.php?title=ანწლი&oldid=87817176)  |
| არაყი  | vodka                                               | 156          | [source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)  |
| არენა  | arena                                               | 166          | [source](https://en.wiktionary.org/w/index.php?title=არენა&oldid=84097397)  |
| არია   | aria                                                | 23, 124      | [source](https://en.wiktionary.org/w/index.php?title=არია&oldid=89954997)   |
| არმია  | army                                                | 23, 238      | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)  |
| არსება | creature; being                                     | 83           | [source](https://en.wiktionary.org/w/index.php?title=არსება&oldid=88400654) |
| არსი   | essence                                             | 83, 178      | [source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)   |
| არფა   | harp                                                | 94           | [source](https://en.wiktionary.org/w/index.php?title=არფა&oldid=93122307)   |
| არხი   | canal                                               | 11, 134      | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)   |
| ასაკი  | age                                                 | 170          | [source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)  |
| ასანთი | match                                               | 164          | [source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032) |
| ასთმა  | asthma                                              | 29           | [source](https://en.wiktionary.org/w/index.php?title=ასთმა&oldid=84097441)  |
| ასკილი | dog rose                                            | 42           | [source](https://en.wiktionary.org/w/index.php?title=ასკილი&oldid=88091340) |
| ასლი   | copy                                                | 126, 223     | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)   |
| ასო    | alphabet letter                                     | 42, 215      | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატამი  | peach                                               | 233          | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატომი  | atom                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)  |
| აუზი   | pool                                                | 189          | [source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)   |
| აუტი   | throw-in                                            | 26           | [source](https://en.wiktionary.org/w/index.php?title=აუტი&oldid=39552798)   |
| აფიშა  | poster                                              | 94           | [source](https://en.wiktionary.org/w/index.php?title=აფიშა&oldid=84983656)  |
| აფრა   | sail                                                | 13, 94       | [source](https://en.wiktionary.org/w/index.php?title=აფრა&oldid=84113118)   |
| აქლემი | camel                                               | 123          | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908) |
| აქცია  | action, promotion                                   | 124          | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)  |
| აჩმა   | achma cheese pastry                                 | 143          | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)   |
| ახალი  | new; fresh                                          | 143          | [source](https://en.wiktionary.org/w/index.php?title=ახალი&oldid=88893525)  |
| აჯიკა  | adjika                                              | 236          | [source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)  |
| ბაგე   | lip                                                 | 60           | [source](https://en.wiktionary.org/w/index.php?title=ბაგე&oldid=92454114)   |
| ბაგირი | cable, heavy rope                                   | 163          | [source](https://en.wiktionary.org/w/index.php?title=ბაგირი&oldid=89591122) |
| ბადე   | net                                                 | 171          | [source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)   |
| ბაზა   | base                                                | 54, 171      | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)   |
| ბაზარი | market                                              | 84           | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284) |
| ბაიტი  | byte                                                | 85           | [source](https://en.wiktionary.org/w/index.php?title=ბაიტი&oldid=89301890)  |
| ბალთა  | buckle                                              | 54           | [source](https://en.wiktionary.org/w/index.php?title=ბალთა&oldid=84097562)  |
| ბალი   | sweet cherry                                        | 225          | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ბანაკი | camp                                                | 193          | [source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693) |
| ბანი   | bass voice                                          | 240          | [source](https://en.wiktionary.org/w/index.php?title=ბანი&oldid=92486488)   |
| ბანკი  | bank                                                | 229          | [source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)  |
| ბანქო  | playing cards                                       | 52           | [source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)  |
| ბარგი  | luggage                                             | 163          | [source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)  |
| ბარდა  | pea                                                 | 171          | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)  |
| ბარი   | valley                                              | 152          | [source](https://en.wiktionary.org/w/index.php?title=ბარი&oldid=92290776)   |
| ბასრი  | sharp                                               | 83           | [source](https://en.wiktionary.org/w/index.php?title=ბასრი&oldid=84089568)  |
| ბატი   | goose                                               | 85, 182      | [source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)   |
| ბატონი | sir                                                 | 33           | [source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444) |
| ბაფთა  | bow knot                                            | 54           | [source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)  |
| ბაღი   | garden                                              | 19, 189      | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)   |
| ბაყაყი | frog                                                | 127          | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131) |
| ბაჭია  | young rabbit                                        | 127, 225     | [source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)  |
| ბგერა  | sound                                               | 60           | [source](https://en.wiktionary.org/w/index.php?title=ბგერა&oldid=88996488)  |
| ბებია  | grandmother, grannie, granny                        | 58           | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)  |
| ბედი   | fate; luck                                          | 216          | [source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)   |
| ბევრი  | many; much                                          | 60           | [source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)  |
| ბელი   | bear cub                                            | 222          | [source](https://en.wiktionary.org/w/index.php?title=ბელი&oldid=91740617)   |
| ბენდი  | band                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=ბენდი&oldid=90750378)  |
| ბერი   | monk                                                | 60, 142      | [source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)   |
| ბეწვი  | fur, pile                                           | 142          | [source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)  |
| ბეჭი   | shoulder blade                                      | 122, 201     | [source](https://en.wiktionary.org/w/index.php?title=ბეჭი&oldid=89438383)   |
| ბზა    | box tree                                            | 54, 200      | [source](https://en.wiktionary.org/w/index.php?title=ბზა&oldid=84113487)    |
| ბზარი  | crack                                               | 200          | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)  |
| ბილეთი | ticket                                              | 168          | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670) |
| ბინა   | apartment                                           | 58, 193      | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)   |
| ბინდი  | twilight                                            | 201          | [source](https://en.wiktionary.org/w/index.php?title=ბინდი&oldid=85068323)  |
| ბირჟა  | exchange                                            | 229          | [source](https://en.wiktionary.org/w/index.php?title=ბირჟა&oldid=84113535)  |
| ბიურო  | bureau                                              | 64, 162      | [source](https://en.wiktionary.org/w/index.php?title=ბიურო&oldid=84097685)  |
| ბიცოლა | aunt                                                | 80           | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800) |
| ბიძა   | uncle                                               | 90           | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)   |
| ბიჭი   | boy                                                 | 201          | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| ბლოკი  | building block                                      | 80           | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                  |
| ბმული  | link                                                | 222          | [source](https://en.wiktionary.org/w/index.php?title=ბმული&oldid=84113566)  |
| ბნელი  | dark                                                | 51           | [source](https://en.wiktionary.org/w/index.php?title=ბნელი&oldid=91740783)  |
| ბოთლი  | bottle                                              | 108          | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)  |
| ბოლი   | smoke                                               | 5, 225       | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)   |
| ბოლო   | end                                                 | 133          | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)   |
| ბოლოკი | radish                                              | 133          | [source](https://en.wiktionary.org/w/index.php?title=ბოლოკი&oldid=91412000) |
| ბომბი  | bomb                                                | 162          | [source](https://en.wiktionary.org/w/index.php?title=ბომბი&oldid=84097706)  |
| ბორანი | ferry                                               | 240          | [source](https://en.wiktionary.org/w/index.php?title=ბორანი&oldid=84097707) |
| ბოსელი | cowshed                                             | 108          | [source](https://en.wiktionary.org/w/index.php?title=ბოსელი&oldid=84097715) |
| ბოძი   | pole                                                | 90           | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)   |
| ბრაზი  | anger                                               | 200          | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)  |
| ბრალი  | fault                                               | 163          | [source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)  |
| ბრბო   | crowd                                               | 162          | [source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)   |
| ბრმა   | blind                                               | 90           | [source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)   |
| ბროლი  | crystal                                             | 5            | [source](https://en.wiktionary.org/w/index.php?title=ბროლი&oldid=84097739)  |
| ბუდე   | nest                                                | 51           | [source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)   |
| ბუზი   | fly                                                 | 147          | [source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)   |
| ბუკი   | trumpet                                             | 147          | [source](https://en.wiktionary.org/w/index.php?title=ბუკი&oldid=88002801)   |
| ბუნება | nature                                              | 58           | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241) |
| ბურთი  | ball                                                | 152          | [source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)  |
| ბურღი  | drill                                               | 64, 189      | [source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)  |
| ბუტკო  | pistil                                              | 151          | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)  |
| ბუშტი  | bubble, balloon                                     | 85           | [source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)  |
| ბუჩქი  | bush, shrub                                         | 221          | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)  |
| გაზეთი | newspaper                                           | 149          | [source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807) |
| გაზი   | gas                                                 | 213          | [source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)   |
| განძი  | treasure                                            | 70           | [source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)  |
| გარეთ  | outside                                             | 129          | [source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)  |
| გარემო | environment                                         | 62           | [source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637) |
| გარსი  | shell                                               | 215          | [source](https://en.wiktionary.org/w/index.php?title=გარსი&oldid=84097862)  |
| გეგმა  | plan                                                | 62           | [source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)  |
| გედი   | swan                                                | 129, 216     | [source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)   |
| გემი   | ship                                                | 79, 222      | [source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)   |
| გემო   | palate, taste                                       | 62           | [source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)   |
| გენი   | gene                                                | 224          | [source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)   |
| გერბი  | coat of arms                                        | 216          | [source](https://en.wiktionary.org/w/index.php?title=გერბი&oldid=90290436)  |
| გვარი  | surname                                             | 120          | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)  |
| გველი  | snake, serpent                                      | 232          | [source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)  |
| გვერდი | page; side                                          | 216          | [source](https://en.wiktionary.org/w/index.php?title=გვერდი&oldid=88051247) |
| გვიან  | late                                                | 213          | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| გზა    | way, path, road                                     | 149          | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გიტარა | guitar                                              | 233          | [source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739) |
| გლეხი  | peasant; countryman                                 | 59           | [source](https://en.wiktionary.org/w/index.php?title=გლეხი&oldid=88065505)  |
| გლუვი  | smooth                                              | 232          | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)  |
| გმირი  | hero                                                | 79           | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)  |
| გობი   | wooden platter                                      | 33           | [source](https://en.wiktionary.org/w/index.php?title=გობი&oldid=87900106)   |
| გოგრა  | pumpkin                                             | 62           | [source](https://en.wiktionary.org/w/index.php?title=გოგრა&oldid=92486490)  |
| გოლი   | goal in sport                                       | 10, 226      | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)   |
| გოლფი  | golf                                                | 31           | [source](https://en.wiktionary.org/w/index.php?title=გოლფი&oldid=84097945)  |
| გორა   | hill                                                | 62, 215      | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)   |
| გოჭი   | piglet                                              | 215          | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)   |
| გრამი  | gram                                                | 28, 233      | [source](https://en.wiktionary.org/w/index.php?title=გრამი&oldid=91716527)  |
| გრილი  | cool, breezy, chilly                                | 163          | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)  |
| გრიპი  | flu                                                 | 209          | [source](https://en.wiktionary.org/w/index.php?title=გრიპი&oldid=84191656)  |
| გროვა  | heap; pile                                          | 120          | [source](https://en.wiktionary.org/w/index.php?title=გროვა&oldid=91644257)  |
| გრძელი | long                                                | 224          | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966) |
| გუბე   | puddle                                              | 222          | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)   |
| გუდა   | leather bag, wineskin                               | 53           | [source](https://en.wiktionary.org/w/index.php?title=გუდა&oldid=88091499)   |
| გული   | heart                                               | 59           | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)   |
| გუნდი  | choir; team                                         | 53           | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)  |
| გუშინ  | yesterday                                           | 70           | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| დაბა   | small town                                          | 140          | [source](https://en.wiktionary.org/w/index.php?title=დაბა&oldid=91727678)   |
| დაბალი | low; short                                          | 140          | [source](https://en.wiktionary.org/w/index.php?title=დაბალი&oldid=84089835) |
| დაბლა  | down; downstairs                                    | 140          | [source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)  |
| დავა   | dispute                                             | 2, 218       | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)   |
| დათვი  | bear                                                | 169          | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)  |
| დალაქი | barber                                              | 185          | [source](https://en.wiktionary.org/w/index.php?title=დალაქი&oldid=85046705) |
| დანა   | knife                                               | 91           | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)   |
| დარგი  | field; branch of work                               | 28, 129      | [source](https://en.wiktionary.org/w/index.php?title=დარგი&oldid=84098053)  |
| დარი   | fair weather                                        | 86, 238      | [source](https://en.wiktionary.org/w/index.php?title=დარი&oldid=85046597)   |
| დასი   | troupe, group                                       | 196          | [source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)   |
| დაფა   | board, tablet                                       | 91           | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)   |
| დაფნა  | laurel                                              | 91           | [source](https://en.wiktionary.org/w/index.php?title=დაფნა&oldid=84114442)  |
| დახლი  | counter                                             | 230          | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)  |
| დედა   | mother                                              | 45           | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| დევი   | giant                                               | 196          | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)   |
| დეიდა  | maternal aunt                                       | 45           | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)  |
| დენთი  | gunpowder                                           | 197          | [source](https://en.wiktionary.org/w/index.php?title=დენთი&oldid=55366640)  |
| დენი   | electric current                                    | 115, 191     | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)   |
| დიადი  | great                                               | 45           | [source](https://en.wiktionary.org/w/index.php?title=დიადი&oldid=84090016)  |
| დიდი   | big                                                 | 45           | [source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)   |
| დიეტა  | diet                                                | 66           | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)  |
| დილა   | morning                                             | 18, 230      | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)   |
| დისკი  | disc                                                | 132          | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)  |
| დოგმა  | dogma                                               | 28           | [source](https://en.wiktionary.org/w/index.php?title=დოგმა&oldid=84098233)  |
| დოზა   | dose                                                | 109          | [source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)   |
| დოლი   | drum                                                | 18           | [source](https://en.wiktionary.org/w/index.php?title=დოლი&oldid=88002790)   |
| დონე   | level                                               | 115, 197     | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)   |
| დოქი   | jug                                                 | 15           | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)   |
| დრამა  | drama                                               | 238          | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)  |
| დრო    | time                                                | 20, 132      | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)    |
| დროშა  | flag                                                | 20           | [source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)  |
| დუელი  | duel                                                | 51           | [source](https://en.wiktionary.org/w/index.php?title=დუელი&oldid=84098276)  |
| დღე    | day                                                 | 159          | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| ევრო   | euro                                                | 142          | [source](https://en.wiktionary.org/w/index.php?title=ევრო&oldid=84103543)   |
| ეზო    | yard, courtyard                                     | 41, 194      | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ეკალი  | thorn                                               | 100          | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)  |
| ეკრანი | screen                                              | 166          | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327) |
| ელვა   | lightning                                           | 6, 100       | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)   |
| ელფი   | elf                                                 | 36, 212      | [source](https://en.wiktionary.org/w/index.php?title=ელფი&oldid=84098344)   |
| ელჩი   | ambassador                                          | 57           | [source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)   |
| ემოცია | emotion                                             | 93           | [source](https://en.wiktionary.org/w/index.php?title=ემოცია&oldid=87755532) |
| ენა    | language; tongue                                    | 58, 166      | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)    |
| ენოტი  | raccoon                                             | 74           | [source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)  |
| ეპოქა  | epoch                                               | 174          | [source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)  |
| ერა    | era                                                 | 1, 134       | [source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)    |
| ერბო   | ghee, clarified butter                              | 64           | [source](https://en.wiktionary.org/w/index.php?title=ერბო&oldid=55359898)   |
| ერთად  | together                                            | 129          | [source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)  |
| ერი    | nation                                              | 106, 216     | [source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)    |
| ეტაპი  | stage                                               | 182          | [source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)  |
| ეტლი   | carriage                                            | 105, 207     | [source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)   |
| ექიმი  | doctor                                              | 79           | [source](https://en.wiktionary.org/w/index.php?title=ექიმი&oldid=88798763)  |
| ექო    | echo                                                | 52, 174      | [source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)    |
| ეშვი   | fang                                                | 57           | [source](https://en.wiktionary.org/w/index.php?title=ეშვი&oldid=84114997)   |
| ეჭვი   | doubt; suspicion                                    | 100          | [source](https://en.wiktionary.org/w/index.php?title=ეჭვი&oldid=85513584)   |
| ვაგონი | wagon                                               | 213          | [source](https://en.wiktionary.org/w/index.php?title=ვაგონი&oldid=92486955) |
| ვადა   | term, deadline                                      | 2, 218       | [source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)   |
| ვაზა   | vase                                                | 173          | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)   |
| ვაზი   | vine, grapevine                                     | 98, 195      | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)   |
| ვაკე   | plain, plane                                        | 100          | [source](https://en.wiktionary.org/w/index.php?title=ვაკე&oldid=84098446)   |
| ვალი   | debt                                                | 6, 172       | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)   |
| ვალსი  | waltz                                               | 150          | [source](https://en.wiktionary.org/w/index.php?title=ვალსი&oldid=84098452)  |
| ვაჟი   | son                                                 | 24           | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)   |
| ვარდი  | rose                                                | 98           | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)  |
| ვაშლი  | apple                                               | 6            | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)  |
| ველი   | field                                               | 71, 154, 232 | [source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)   |
| ვენა   | vein                                                | 43           | [source](https://en.wiktionary.org/w/index.php?title=ვენა&oldid=85017282)   |
| ვენახი | vineyard                                            | 43           | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996) |
| ვეტო   | veto                                                | 154          | [source](https://en.wiktionary.org/w/index.php?title=ვეტო&oldid=84098503)   |
| ვიდეო  | video                                               | 154          | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)  |
| ვიზა   | visa                                                | 12, 213      | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)   |
| ვილა   | villa                                               | 6, 230       | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)   |
| ვირთხა | rat                                                 | 148          | [source](https://en.wiktionary.org/w/index.php?title=ვირთხა&oldid=84115189) |
| ვირი   | donkey, ass                                         | 120, 234     | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)   |
| ვიწრო  | narrow                                              | 142          | [source](https://en.wiktionary.org/w/index.php?title=ვიწრო&oldid=84088784)  |
| ვოლტი  | volt                                                | 154          | [source](https://en.wiktionary.org/w/index.php?title=ვოლტი&oldid=84098545)  |
| ზავი   | truce                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)   |
| ზარი   | bell                                                | 8, 84, 173   | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)   |
| ზებრა  | zebra                                               | 171          | [source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)  |
| ზეგ    | day after tomorrow                                  | 149          | [source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)    |
| ზედა   | upper                                               | 171          | [source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)   |
| ზეთი   | oil                                                 | 32           | [source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)   |
| ზეიმი  | celebration                                         | 155          | [source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)  |
| ზვავი  | avalanche                                           | 12           | [source](https://en.wiktionary.org/w/index.php?title=ზვავი&oldid=84115331)  |
| ზიანი  | damage                                              | 38, 155      | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)  |
| ზმნა   | verb                                                | 38           | [source](https://en.wiktionary.org/w/index.php?title=ზმნა&oldid=92945166)   |
| ზნე    | character; habit                                    | 32, 194      | [source](https://en.wiktionary.org/w/index.php?title=ზნე&oldid=92992532)    |
| ზომა   | measure, quantity, size                             | 109          | [source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)   |
| ზონა   | zone                                                | 213          | [source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)   |
| ზურგი  | back                                                | 209          | [source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)  |
| ზღარბი | hedgehog                                            | 189          | [source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278) |
| ზღვა   | sea                                                 | 98           | [source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)   |
| ზღვარი | boundary                                            | 98           | [source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789) |
| თაგვი  | mouse                                               | 149          | [source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)  |
| თავი   | head                                                | 89, 169      | [source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)   |
| თავლა  | stable                                              | 89           | [source](https://en.wiktionary.org/w/index.php?title=თავლა&oldid=85073944)  |
| თათი   | paw                                                 | 87           | [source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)   |
| თანხა  | amount of money                                     | 235          | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)  |
| თაობა  | generation                                          | 235          | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)  |
| თარო   | board, shelf                                        | 11, 95       | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)   |
| თასი   | bowl, chalice                                       | 77, 164      | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| თასმა  | braid                                               | 29           | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)  |
| თაფლი  | honey                                               | 31           | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)  |
| თაღი   | arch                                                | 164          | [source](https://en.wiktionary.org/w/index.php?title=თაღი&oldid=92422626)   |
| თახვი  | beaver                                              | 7            | [source](https://en.wiktionary.org/w/index.php?title=თახვი&oldid=89977530)  |
| თბილი  | warm                                                | 168          | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)  |
| თევზი  | fish                                                | 149          | [source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)  |
| თეთრი  | white                                               | 231          | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)  |
| თემა   | theme; essay                                        | 22           | [source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)   |
| თემი   | community                                           | 22, 231      | [source](https://en.wiktionary.org/w/index.php?title=თემი&oldid=85086632)   |
| თერძი  | tailor                                              | 131          | [source](https://en.wiktionary.org/w/index.php?title=თერძი&oldid=84103313)  |
| თესლი  | seed                                                | 108          | [source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)  |
| თექა   | felt                                                | 174          | [source](https://en.wiktionary.org/w/index.php?title=თექა&oldid=84115581)   |
| თეძო   | hip, thigh                                          | 131          | [source](https://en.wiktionary.org/w/index.php?title=თეძო&oldid=84098694)   |
| თვალი  | eye                                                 | 89           | [source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)  |
| თვე    | month                                               | 202          | [source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)    |
| თივა   | hay                                                 | 7, 169       | [source](https://en.wiktionary.org/w/index.php?title=თივა&oldid=84115648)   |
| თითი   | finger                                              | 231          | [source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)   |
| თიხა   | clay                                                | 7, 118       | [source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)   |
| თმა    | hair                                                | 22, 119      | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)    |
| თოკი   | rope                                                | 157          | [source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)   |
| თოლია  | seagull                                             | 31           | [source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)  |
| თონე   | bread oven                                          | 197          | [source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)   |
| თოფი   | gun                                                 | 31           | [source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)   |
| თოხი   | hoe                                                 | 11           | [source](https://en.wiktionary.org/w/index.php?title=თოხი&oldid=88091343)   |
| თუთა   | mulberry                                            | 87           | [source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)   |
| თუთია  | zinc                                                | 87           | [source](https://en.wiktionary.org/w/index.php?title=თუთია&oldid=84098719)  |
| თხა    | goat                                                | 7, 148, 235  | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| თხელი  | thin                                                | 65           | [source](https://en.wiktionary.org/w/index.php?title=თხელი&oldid=84090228)  |
| თხილი  | hazelnut                                            | 217          | [source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)  |
| იარა   | wound                                               | 23, 156, 233 | [source](https://en.wiktionary.org/w/index.php?title=იარა&oldid=84115754)   |
| იაფი   | cheap                                               | 200          | [source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)   |
| იახტა  | yacht                                               | 50           | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)  |
| იგავი  | fable                                               | 120          | [source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)  |
| იდეა   | idea                                                | 66, 159      | [source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)   |
| ილეთი  | trick, technique                                    | 168          | [source](https://en.wiktionary.org/w/index.php?title=ილეთი&oldid=84115797)  |
| იმედი  | hope                                                | 146          | [source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)  |
| იოგა   | yoga                                                | 31, 120      | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)   |
| იოდი   | iodine                                              | 132          | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)   |
| იოლი   | easy                                                | 42, 217      | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)   |
| ირემი  | deer                                                | 79, 231      | [source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)  |
| ისარი  | arrow                                               | 227          | [source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)  |
| იუმორი | humor                                               | 61           | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113) |
| იღბალი | luck                                                | 78           | [source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167) |
| იღლია  | armpit                                              | 78           | [source](https://en.wiktionary.org/w/index.php?title=იღლია&oldid=84115945)  |
| იხვი   | duck                                                | 192          | [source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)   |
| იჯარა  | lease                                               | 236          | [source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)  |
| კაბა   | dress, frock                                        | 193          | [source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)   |
| კაბინა | cabin                                               | 193          | [source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910) |
| კავი   | hook                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=კავი&oldid=88180606)   |
| კათხა  | mug                                                 | 118          | [source](https://en.wiktionary.org/w/index.php?title=კათხა&oldid=84115971)  |
| კაკალი | walnut; walnut tree                                 | 198          | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192) |
| კაკაო  | cocoa                                               | 198          | [source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)  |
| კალა   | tin                                                 | 118, 236     | [source](https://en.wiktionary.org/w/index.php?title=კალა&oldid=91725182)   |
| კალთა  | lap, skirt hem                                      | 118          | [source](https://en.wiktionary.org/w/index.php?title=კალთა&oldid=84098950)  |
| კალია  | grasshopper                                         | 198          | [source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)  |
| კამა   | dill                                                | 239          | [source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)   |
| კამერა | chamber                                             | 239          | [source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969) |
| კანი   | skin                                                | 153          | [source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)   |
| კანოე  | canoe                                               | 81           | [source](https://en.wiktionary.org/w/index.php?title=კანოე&oldid=84098985)  |
| კანონი | law                                                 | 228          | [source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329) |
| კანჭი  | shin                                                | 34           | [source](https://en.wiktionary.org/w/index.php?title=კანჭი&oldid=84116024)  |
| კაჟი   | flint                                               | 24, 229      | [source](https://en.wiktionary.org/w/index.php?title=კაჟი&oldid=84099010)   |
| კარატი | carat                                               | 76           | [source](https://en.wiktionary.org/w/index.php?title=კარატი&oldid=84099016) |
| კარი   | door                                                | 3, 121       | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარტი  | card                                                | 76           | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)  |
| კასრი  | barrel                                              | 3            | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)  |
| კატა   | cat                                                 | 76           | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| კაუჭი  | hook                                                | 116          | [source](https://en.wiktionary.org/w/index.php?title=კაუჭი&oldid=88081762)  |
| კაფე   | cafe                                                | 1, 158       | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)   |
| კაცი   | man                                                 | 80, 205      | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)   |
| კბილი  | tooth                                               | 72           | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)  |
| კენჭი  | pebble                                              | 34           | [source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)  |
| კერა   | hearth                                              | 1, 166       | [source](https://en.wiktionary.org/w/index.php?title=კერა&oldid=91649986)   |
| კერძი  | dish                                                | 131          | [source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)  |
| კერძო  | private                                             | 55           | [source](https://en.wiktionary.org/w/index.php?title=კერძო&oldid=75680066)  |
| კეტი   | stick                                               | 105          | [source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)   |
| კეფა   | back of the head                                    | 1, 158       | [source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)   |
| კეცი   | ketsi, earthenware frying pan (usually from clay)   | 205          | [source](https://en.wiktionary.org/w/index.php?title=კეცი&oldid=84116112)   |
| კეხი   | saddle tree, nose hump                              | 72           | [source](https://en.wiktionary.org/w/index.php?title=კეხი&oldid=91570728)   |
| კვალი  | trail, clue                                         | 119          | [source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)  |
| კვამლი | smoke                                               | 119          | [source](https://en.wiktionary.org/w/index.php?title=კვამლი&oldid=84116122) |
| კვანძი | knot                                                | 237          | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089) |
| კვირა  | week                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)  |
| კვიცი  | foal                                                | 107          | [source](https://en.wiktionary.org/w/index.php?title=კვიცი&oldid=91715232)  |
| კვოტა  | quota                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=კვოტა&oldid=84099109)  |
| კიბე   | ladder, stair, staircase, stairway                  | 182          | [source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)   |
| კიბო   | barnacle; cancer                                    | 9, 133       | [source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)   |
| კიდე   | edge                                                | 117          | [source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)   |
| კივი   | kiwi fruit; kiwi bird                               | 107          | [source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)   |
| კილო   | kilo                                                | 80, 157      | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)   |
| კინო   | cinema; movie                                       | 160, 240     | [source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)   |
| კირი   | lime, calcium oxide                                 | 27, 177      | [source](https://en.wiktionary.org/w/index.php?title=კირი&oldid=85066928)   |
| კისერი | neck                                                | 27           | [source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129) |
| კიტრი  | cucumber                                            | 214          | [source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)  |
| კლასი  | class                                               | 42           | [source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)  |
| კლდე   | cliff, crag, scar, rock                             | 117          | [source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)   |
| კლიტე  | lock                                                | 105          | [source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)  |
| კლოუნი | clown                                               | 160          | [source](https://en.wiktionary.org/w/index.php?title=კლოუნი&oldid=84116208) |
| კლუბი  | club                                                | 147          | [source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)  |
| კნუტი  | kitten                                              | 153          | [source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)  |
| კოალა  | koala                                               | 111, 198     | [source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)  |
| კობრა  | cobra                                               | 240          | [source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)  |
| კობრი  | carp                                                | 9            | [source](https://en.wiktionary.org/w/index.php?title=კობრი&oldid=84116215)  |
| კოდი   | code                                                | 132          | [source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)   |
| კოვზი  | spoon                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)  |
| კომა   | coma                                                | 111          | [source](https://en.wiktionary.org/w/index.php?title=კომა&oldid=84099194)   |
| კომლი  | household                                           | 157          | [source](https://en.wiktionary.org/w/index.php?title=კომლი&oldid=87677676)  |
| კომში  | quince                                              | 82           | [source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)  |
| კონა   | bundle                                              | 88, 240      | [source](https://en.wiktionary.org/w/index.php?title=კონა&oldid=84099233)   |
| კოპი   | bump                                                | 101          | [source](https://en.wiktionary.org/w/index.php?title=კოპი&oldid=90518672)   |
| კორტი  | tennis-court                                        | 135          | [source](https://en.wiktionary.org/w/index.php?title=კორტი&oldid=84116301)  |
| კოშკი  | tower                                               | 135          | [source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)  |
| კოჭა   | spool                                               | 228          | [source](https://en.wiktionary.org/w/index.php?title=კოჭა&oldid=84099333)   |
| კოჭი   | ankle                                               | 228          | [source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)   |
| კრავი  | lamb                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=კრავი&oldid=84116326)  |
| კრემი  | cream                                               | 82           | [source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)  |
| კრუხი  | broody hen                                          | 86           | [source](https://en.wiktionary.org/w/index.php?title=კრუხი&oldid=84099373)  |
| კუბი   | cube                                                | 151          | [source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)   |
| კუბო   | coffin                                              | 151          | [source](https://en.wiktionary.org/w/index.php?title=კუბო&oldid=88091344)   |
| კუდი   | tail                                                | 86           | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)   |
| კუზი   | hump                                                | 147          | [source](https://en.wiktionary.org/w/index.php?title=კუზი&oldid=84099382)   |
| კუნთი  | muscle                                              | 160          | [source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)  |
| კუპატი | kupati sausage                                      | 153          | [source](https://en.wiktionary.org/w/index.php?title=კუპატი&oldid=84096710) |
| კუპონი | coupon                                              | 101          | [source](https://en.wiktionary.org/w/index.php?title=კუპონი&oldid=84099396) |
| კურსი  | course; exchange rate                               | 112          | [source](https://en.wiktionary.org/w/index.php?title=კურსი&oldid=69618502)  |
| კუჭი   | stomach                                             | 34           | [source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)   |
| ლაგამი | bridle                                              | 68           | [source](https://en.wiktionary.org/w/index.php?title=ლაგამი&oldid=91776622) |
| ლავა   | lava                                                | 14, 141      | [source](https://en.wiktionary.org/w/index.php?title=ლავა&oldid=84099414)   |
| ლაიმი  | lime (fruit)                                        | 183          | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)  |
| ლამა   | llama                                               | 68, 180      | [source](https://en.wiktionary.org/w/index.php?title=ლამა&oldid=84099426)   |
| ლამპა  | lamp                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)  |
| ლარი   | lari (Georgian currency)                            | 49, 145      | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)   |
| ლაქა   | spot, stain                                         | 185          | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| ლაღი   | carefree                                            | 167          | [source](https://en.wiktionary.org/w/index.php?title=ლაღი&oldid=90036516)   |
| ლეიბი  | mattress                                            | 72, 168      | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)  |
| ლეკვი  | puppy                                               | 117          | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)  |
| ლექსი  | poem                                                | 123          | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)  |
| ლიგა   | league                                              | 68           | [source](https://en.wiktionary.org/w/index.php?title=ლიგა&oldid=84099491)   |
| ლითონი | metal                                               | 217          | [source](https://en.wiktionary.org/w/index.php?title=ლითონი&oldid=59533173) |
| ლიმონი | lemon                                               | 46           | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519) |
| ლინზა  | lens                                                | 32           | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)  |
| ლირა   | lira                                                | 48, 125      | [source](https://en.wiktionary.org/w/index.php?title=ლირა&oldid=84099516)   |
| ლიტრი  | litre                                               | 48           | [source](https://en.wiktionary.org/w/index.php?title=ლიტრი&oldid=84099523)  |
| ლიფტი  | elevator                                            | 113          | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)  |
| ლობიო  | bean                                                | 44, 133      | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)  |
| ლოდი   | block, rubble                                       | 18, 154      | [source](https://en.wiktionary.org/w/index.php?title=ლოდი&oldid=84099538)   |
| ლომი   | lion                                                | 46           | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლორი   | ham                                                 | 5, 206       | [source](https://en.wiktionary.org/w/index.php?title=ლორი&oldid=84116556)   |
| ლოქო   | catfish                                             | 44           | [source](https://en.wiktionary.org/w/index.php?title=ლოქო&oldid=92197076)   |
| ლოყა   | cheek                                               | 145          | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)   |
| ლუდი   | beer                                                | 51, 137      | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)   |
| ლურჯი  | blue                                                | 139          | [source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)  |
| ლუწი   | even                                                | 232          | [source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)   |
| მაგარი | hard, strong                                        | 233          | [source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421) |
| მაგია  | magic                                               | 68           | [source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)  |
| მაგიდა | table                                               | 238          | [source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591) |
| მადა   | appetite, stomach                                   | 103          | [source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)   |
| მავნე  | harmful                                             | 43           | [source](https://en.wiktionary.org/w/index.php?title=მავნე&oldid=45716925)  |
| მაზლი  | husband's brother                                   | 161          | [source](https://en.wiktionary.org/w/index.php?title=მაზლი&oldid=84608836)  |
| მაისი  | May                                                 | 77           | [source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)  |
| მალა   | vertebra                                            | 111          | [source](https://en.wiktionary.org/w/index.php?title=მალა&oldid=91725189)   |
| მალამო | ointment                                            | 111          | [source](https://en.wiktionary.org/w/index.php?title=მალამო&oldid=84099608) |
| მალე   | soon                                                | 40, 123      | [source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)   |
| მამა   | father                                              | 111          | [source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)   |
| მამრი  | male animal                                         | 156          | [source](https://en.wiktionary.org/w/index.php?title=მამრი&oldid=84116656)  |
| მანგო  | mango                                               | 128          | [source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)  |
| მანეთი | ruble                                               | 22           | [source](https://en.wiktionary.org/w/index.php?title=მანეთი&oldid=91150504) |
| მანია  | mania                                               | 103          | [source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)  |
| მარაგი | reserve; stockpile                                  | 238          | [source](https://en.wiktionary.org/w/index.php?title=მარაგი&oldid=84116683) |
| მარილი | salt                                                | 125          | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420) |
| მარკა  | postage stamp                                       | 239          | [source](https://en.wiktionary.org/w/index.php?title=მარკა&oldid=84099669)  |
| მარტო  | alone                                               | 56, 138      | [source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)  |
| მარში  | march                                               | 125          | [source](https://en.wiktionary.org/w/index.php?title=მარში&oldid=84099689)  |
| მაწონი | matsoni yogurt                                      | 25           | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051) |
| მახე   | trap                                                | 93           | [source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)   |
| მაჯა   | wrist                                               | 75           | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)   |
| მგელი  | wolf                                                | 222          | [source](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)  |
| მედალი | medal                                               | 159          | [source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774) |
| მედია  | media                                               | 159          | [source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)  |
| მელა   | fox                                                 | 207          | [source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)   |
| მენიუ  | menu                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)  |
| მერი   | mayor                                               | 146, 231     | [source](https://en.wiktionary.org/w/index.php?title=მერი&oldid=84099841)   |
| მეტალი | metal                                               | 207          | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455) |
| მეტრი  | metre                                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)  |
| მეტრო  | metro                                               | 35           | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)  |
| მზა    | ready                                               | 8, 155       | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)    |
| მზე    | Sun                                                 | 155          | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)    |
| მზიანი | sunny                                               | 155          | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151) |
| მთა    | mountain, hill                                      | 29, 174      | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| მთელი  | whole; entire                                       | 157          | [source](https://en.wiktionary.org/w/index.php?title=მთელი&oldid=91740782)  |
| მიზანი | goal; target                                        | 38           | [source](https://en.wiktionary.org/w/index.php?title=მიზანი&oldid=84117018) |
| მითი   | myth                                                | 77, 234      | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)   |
| მილი   | tube; mile                                          | 125          | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)   |
| მინა   | glass (material)                                    | 25, 103, 183 | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)   |
| მისია  | mission                                             | 77           | [source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)  |
| მიწა   | earth, soil                                         | 25, 104      | [source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)   |
| მკლავი | arm                                                 | 119          | [source](https://en.wiktionary.org/w/index.php?title=მკლავი&oldid=90012056) |
| მლაშე  | salty                                               | 207          | [source](https://en.wiktionary.org/w/index.php?title=მლაშე&oldid=75374767)  |
| მოდა   | fashion                                             | 28, 109      | [source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)   |
| მოდური | fashionable                                         | 136          | [source](https://en.wiktionary.org/w/index.php?title=მოდური&oldid=84088886) |
| მოკლე  | short                                               | 157          | [source](https://en.wiktionary.org/w/index.php?title=მოკლე&oldid=88449850)  |
| მოლარე | cashier                                             | 40           | [source](https://en.wiktionary.org/w/index.php?title=მოლარე&oldid=88326243) |
| მონა   | slave                                               | 25, 128      | [source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)   |
| მორი   | log, timber                                         | 82, 162      | [source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)   |
| მჟავე  | sour                                                | 104          | [source](https://en.wiktionary.org/w/index.php?title=მჟავე&oldid=84417167)  |
| მსაჯი  | referee                                             | 75           | [source](https://en.wiktionary.org/w/index.php?title=მსაჯი&oldid=84100170)  |
| მსხალი | pear                                                | 223          | [source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341) |
| მტერი  | enemy                                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)  |
| მტრედი | pigeon, dove                                        | 66           | [source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351) |
| მუდამ  | always                                              | 211          | [source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)  |
| მუზა   | muse                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=მუზა&oldid=84100186)   |
| მუმია  | mummy                                               | 211          | [source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)  |
| მურა   | brown                                               | 92           | [source](https://en.wiktionary.org/w/index.php?title=მურა&oldid=91715082)   |
| მური   | soot                                                | 21, 162      | [source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)   |
| მუსი   | mousse                                              | 17, 144      | [source](https://en.wiktionary.org/w/index.php?title=მუსი&oldid=84100198)   |
| მუქი   | dark                                                | 211          | [source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)   |
| მუშა   | worker                                              | 26           | [source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)   |
| მუშტი  | fist                                                | 26           | [source](https://en.wiktionary.org/w/index.php?title=მუშტი&oldid=84117401)  |
| მუხა   | oak                                                 | 199          | [source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)   |
| მუხლი  | knee                                                | 36           | [source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)  |
| მუხტი  | charge                                              | 26           | [source](https://en.wiktionary.org/w/index.php?title=მუხტი&oldid=87730411)  |
| მყარი  | solid; stable                                       | 156          | [source](https://en.wiktionary.org/w/index.php?title=მყარი&oldid=84090626)  |
| მშრალი | dry                                                 | 125          | [source](https://en.wiktionary.org/w/index.php?title=მშრალი&oldid=84090631) |
| მცირე  | small                                               | 190          | [source](https://en.wiktionary.org/w/index.php?title=მცირე&oldid=92228054)  |
| მძივი  | bead                                                | 234          | [source](https://en.wiktionary.org/w/index.php?title=მძივი&oldid=84100240)  |
| მძღოლი | driver                                              | 167          | [source](https://en.wiktionary.org/w/index.php?title=მძღოლი&oldid=88648707) |
| მწარე  | bitter; spicy                                       | 181          | [source](https://en.wiktionary.org/w/index.php?title=მწარე&oldid=91715973)  |
| მწერი  | insect                                              | 146          | [source](https://en.wiktionary.org/w/index.php?title=მწერი&oldid=91784205)  |
| მწირი  | scarce; scanty                                      | 146          | [source](https://en.wiktionary.org/w/index.php?title=მწირი&oldid=85017924)  |
| მჭიდრო | tight; densely packed                               | 136          | [source](https://en.wiktionary.org/w/index.php?title=მჭიდრო&oldid=84088917) |
| მხარე  | side; region                                        | 239          | [source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)  |
| მხარი  | shoulder                                            | 199          | [source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)  |
| მხეცი  | beast                                               | 93           | [source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)  |
| ნადიმი | feast                                               | 103          | [source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506) |
| ნავთი  | kerosene                                            | 169          | [source](https://en.wiktionary.org/w/index.php?title=ნავთი&oldid=84117508)  |
| ნავი   | boat                                                | 43, 220      | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)   |
| ნაზი   | gentle; tender                                      | 38           | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)   |
| ნათელი | bright; clear                                       | 32           | [source](https://en.wiktionary.org/w/index.php?title=ნათელი&oldid=85476155) |
| ნაკერი | stitch                                              | 166          | [source](https://en.wiktionary.org/w/index.php?title=ნაკერი&oldid=44505182) |
| ნაკლი  | defect                                              | 193          | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)  |
| ნალი   | horseshoe                                           | 67, 186      | [source](https://en.wiktionary.org/w/index.php?title=ნალი&oldid=84117544)   |
| ნამი   | dew, morning dew                                    | 22, 203      | [source](https://en.wiktionary.org/w/index.php?title=ნამი&oldid=91716533)   |
| ნაოჭი  | wrinkle                                             | 228          | [source](https://en.wiktionary.org/w/index.php?title=ნაოჭი&oldid=84100297)  |
| ნარდი  | backgammon                                          | 53           | [source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)  |
| ნაცარი | ash                                                 | 124          | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231) |
| ნაძვი  | spruce                                              | 237          | [source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)  |
| ნაწილი | part; portion                                       | 186          | [source](https://en.wiktionary.org/w/index.php?title=ნაწილი&oldid=85068636) |
| ნაჭერი | piece, cloth                                        | 175          | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132) |
| ნება   | will                                                | 52           | [source](https://en.wiktionary.org/w/index.php?title=ნება&oldid=84096905)   |
| ნეკნი  | rib                                                 | 105          | [source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)  |
| ნელი   | slow                                                | 105, 224     | [source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)   |
| ნემსი  | needle                                              | 144          | [source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)  |
| ნერვი  | nerve                                               | 69           | [source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)  |
| ნესვი  | melon                                               | 71           | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)  |
| ნივთი  | thing; object                                       | 169          | [source](https://en.wiktionary.org/w/index.php?title=ნივთი&oldid=92215809)  |
| ნიკაპი | chin                                                | 37           | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203) |
| ნიორი  | garlic                                              | 88           | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)  |
| ნისლი  | fog, mist                                           | 46           | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)  |
| ნიშა   | niche                                               | 70, 219      | [source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)   |
| ნიჭი   | talent                                              | 201          | [source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)   |
| ნორმა  | norm; standard                                      | 128          | [source](https://en.wiktionary.org/w/index.php?title=ნორმა&oldid=87787628)  |
| ნოხი   | rug                                                 | 217          | [source](https://en.wiktionary.org/w/index.php?title=ნოხი&oldid=84100426)   |
| ნუკრი  | fawn                                                | 101          | [source](https://en.wiktionary.org/w/index.php?title=ნუკრი&oldid=84100428)  |
| ნული   | zero                                                | 160          | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)   |
| ნუში   | almond                                              | 70           | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)   |
| ობი    | mould                                               | 5, 108       | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)    |
| ობოლი  | orphan                                              | 44           | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)  |
| ოდა    | ode; traditional house                              | 20, 187      | [source](https://en.wiktionary.org/w/index.php?title=ოდა&oldid=87900914)    |
| ოვალი  | oval                                                | 206          | [source](https://en.wiktionary.org/w/index.php?title=ოვალი&oldid=84100444)  |
| ოზონი  | ozone                                               | 194          | [source](https://en.wiktionary.org/w/index.php?title=ოზონი&oldid=88005804)  |
| ოთახი  | room, chamber                                       | 11           | [source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)  |
| ოინი   | prank, trick                                        | 88           | [source](https://en.wiktionary.org/w/index.php?title=ოინი&oldid=84117786)   |
| ოლქი   | district                                            | 10           | [source](https://en.wiktionary.org/w/index.php?title=ოლქი&oldid=84117798)   |
| ომი    | war                                                 | 46, 151      | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)    |
| ოპერა  | opera                                               | 41           | [source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)  |
| ორგანო | organ                                               | 128          | [source](https://en.wiktionary.org/w/index.php?title=ორგანო&oldid=84103241) |
| ორმაგი | double; twofold                                     | 28           | [source](https://en.wiktionary.org/w/index.php?title=ორმაგი&oldid=91733129) |
| ორმო   | pit                                                 | 128          | [source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)   |
| ოსპი   | lentil                                              | 210          | [source](https://en.wiktionary.org/w/index.php?title=ოსპი&oldid=81817269)   |
| ოფისი  | office                                              | 113          | [source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)  |
| ოფლი   | sweat                                               | 18           | [source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)   |
| ოქრო   | gold                                                | 44           | [source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)   |
| ოჯახი  | family                                              | 97           | [source](https://en.wiktionary.org/w/index.php?title=ოჯახი&oldid=92084204)  |
| პაკეტი | packet                                              | 182          | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015) |
| პანდა  | panda                                               | 91           | [source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)  |
| პაპა   | grandfather                                         | 91           | [source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)   |
| პარიკი | wig                                                 | 121          | [source](https://en.wiktionary.org/w/index.php?title=პარიკი&oldid=84209336) |
| პარკი  | plastic bag                                         | 121          | [source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)  |
| პასტა  | paste                                               | 29           | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)  |
| პაუზა  | pause                                               | 180          | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)  |
| პიკი   | peak                                                | 37           | [source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)   |
| პირი   | mouth                                               | 121, 209     | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)   |
| პიტნა  | mint, spearmint                                     | 37, 153      | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)  |
| პიცა   | pizza                                               | 188          | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)   |
| პლუსი  | plus                                                | 102          | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)  |
| პოემა  | poem                                                | 174          | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)  |
| პოეტი  | poet                                                | 35           | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)  |
| პოზა   | pose                                                | 41           | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)   |
| პონი   | pony                                                | 101, 187     | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)   |
| პორტი  | port                                                | 35           | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)  |
| პოსტი  | post                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)  |
| პრესა  | press; news media                                   | 188          | [source](https://en.wiktionary.org/w/index.php?title=პრესა&oldid=84174033)  |
| პრიზი  | prize                                               | 209          | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)  |
| პროზა  | prose                                               | 41           | [source](https://en.wiktionary.org/w/index.php?title=პროზა&oldid=84100873)  |
| პულსი  | pulse                                               | 102          | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)  |
| პუმა   | puma                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=პუმა&oldid=85689336)   |
| პური   | bread                                               | 101, 209     | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)   |
| ჟანრი  | genre                                               | 229          | [source](https://en.wiktionary.org/w/index.php?title=ჟანრი&oldid=87941020)  |
| ჟოლო   | raspberry                                           | 133          | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)   |
| რაგბი  | rugby                                               | 60           | [source](https://en.wiktionary.org/w/index.php?title=რაგბი&oldid=84096743)  |
| რადიო  | radio                                               | 97           | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)  |
| რაზმი  | squad                                               | 8            | [source](https://en.wiktionary.org/w/index.php?title=რაზმი&oldid=84118264)  |
| რაიონი | district                                            | 88           | [source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151) |
| რაფა   | windowsill                                          | 13           | [source](https://en.wiktionary.org/w/index.php?title=რაფა&oldid=92486505)   |
| რბილი  | soft                                                | 122          | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)  |
| რგოლი  | ring                                                | 226          | [source](https://en.wiktionary.org/w/index.php?title=რგოლი&oldid=84118289)  |
| რეისი  | scheduled journey                                   | 27           | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)  |
| რეპი   | rap music                                           | 35, 188      | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)   |
| რთული  | difficult; complex                                  | 139          | [source](https://en.wiktionary.org/w/index.php?title=რთული&oldid=84118321)  |
| რიგი   | row; queue                                          | 163          | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)   |
| რისკი  | risk                                                | 27, 132      | [source](https://en.wiktionary.org/w/index.php?title=რისკი&oldid=84118334)  |
| რიტმი  | beat, cadence, rhythm                               | 61           | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)  |
| რკალი  | hoop, ring                                          | 236          | [source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)  |
| რკინა  | iron (metal)                                        | 88           | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)  |
| რკო    | acorn                                               | 9, 112       | [source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)    |
| როკი   | rock music                                          | 9, 131       | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)   |
| როლი   | role                                                | 5, 145       | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)   |
| რომი   | rum                                                 | 61, 138      | [source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)   |
| რუკა   | map                                                 | 76           | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)   |
| რუხი   | gray/grey                                           | 16, 92       | [source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)   |
| რუჯი   | suntan                                              | 63, 139      | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)   |
| რქა    | horn, antler                                        | 4, 181       | [source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)    |
| რძალი  | daughter-in-law; sister-in-law                      | 49           | [source](https://en.wiktionary.org/w/index.php?title=რძალი&oldid=91716433)  |
| რძე    | milk                                                | 55, 131, 224 | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)    |
| საათი  | clock; hour                                         | 164          | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)  |
| საბანი | blanket                                             | 39           | [source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633) |
| საბუთი | document                                            | 87           | [source](https://en.wiktionary.org/w/index.php?title=საბუთი&oldid=84107021) |
| საბჭო  | council                                             | 114          | [source](https://en.wiktionary.org/w/index.php?title=საბჭო&oldid=88896363)  |
| სადავო | disputed; debatable                                 | 218          | [source](https://en.wiktionary.org/w/index.php?title=სადავო&oldid=59807665) |
| სავსე  | full                                                | 196          | [source](https://en.wiktionary.org/w/index.php?title=სავსე&oldid=81821895)  |
| საიტი  | website                                             | 227          | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)  |
| საკანი | cell                                                | 170          | [source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500) |
| სალონი | salon                                               | 67           | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194) |
| სანდო  | reliable                                            | 187          | [source](https://en.wiktionary.org/w/index.php?title=სანდო&oldid=88605743)  |
| საპონი | soap                                                | 187          | [source](https://en.wiktionary.org/w/index.php?title=საპონი&oldid=89620271) |
| სარი   | stake                                               | 3, 83, 178   | [source](https://en.wiktionary.org/w/index.php?title=სარი&oldid=91725833)   |
| სარკე  | looking-glass, mirror                               | 158          | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)  |
| საუნა  | sauna                                               | 170          | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)  |
| საქმე  | work, business                                      | 123          | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)  |
| საღი   | healthy, sensible                                   | 227          | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)   |
| საშიში | scary; dangerous                                    | 110          | [source](https://en.wiktionary.org/w/index.php?title=საშიში&oldid=84118867) |
| საცერი | sieve                                               | 188          | [source](https://en.wiktionary.org/w/index.php?title=საცერი&oldid=84118875) |
| საწოლი | bed                                                 | 67           | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101) |
| საჭირო | necessary                                           | 215          | [source](https://en.wiktionary.org/w/index.php?title=საჭირო&oldid=88605887) |
| სახე   | face                                                | 114          | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)   |
| სახლი  | home, house, dwelling                               | 223          | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)  |
| სევდა  | sadness; sorrow                                     | 196          | [source](https://en.wiktionary.org/w/index.php?title=სევდა&oldid=92686510)  |
| სეზონი | season                                              | 194          | [source](https://en.wiktionary.org/w/index.php?title=სეზონი&oldid=84118932) |
| სერია  | series                                              | 83, 188      | [source](https://en.wiktionary.org/w/index.php?title=სერია&oldid=87787607)  |
| სესია  | session                                             | 196          | [source](https://en.wiktionary.org/w/index.php?title=სესია&oldid=84101372)  |
| სესხი  | loan                                                | 204          | [source](https://en.wiktionary.org/w/index.php?title=სესხი&oldid=84101374)  |
| სველი  | wet                                                 | 71           | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)  |
| სვეტი  | column                                              | 73           | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)  |
| სია    | list                                                | 3, 87, 170   | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)    |
| სითბო  | warmth                                              | 108          | [source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)  |
| სითხე  | liquid                                              | 65           | [source](https://en.wiktionary.org/w/index.php?title=სითხე&oldid=84119007)  |
| სილა   | sand; slap                                          | 75, 150      | [source](https://en.wiktionary.org/w/index.php?title=სილა&oldid=81821960)   |
| სიმი   | string                                              | 46, 192      | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)   |
| სიო    | breeze                                              | 67, 204      | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)    |
| სისქე  | thickness                                           | 204          | [source](https://en.wiktionary.org/w/index.php?title=სისქე&oldid=84119083)  |
| სიტყვა | word                                                | 73           | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915) |
| სიცხე  | heat; fever                                         | 65           | [source](https://en.wiktionary.org/w/index.php?title=სიცხე&oldid=84119122)  |
| სიძე   | son-in-law; groom                                   | 71           | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)   |
| სკოლა  | school                                              | 42           | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)  |
| სოდა   | soda                                                | 20           | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)   |
| სოიო   | soy                                                 | 194          | [source](https://en.wiktionary.org/w/index.php?title=სოიო&oldid=84101634)   |
| სოუსი  | sauce                                               | 102          | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)  |
| სპა    | spa                                                 | 29, 187      | [source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)    |
| სპილო  | elephant                                            | 102, 210     | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)  |
| სრული  | complete                                            | 126          | [source](https://en.wiktionary.org/w/index.php?title=სრული&oldid=84091028)  |
| სტილი  | style                                               | 113          | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)  |
| სული   | spirit, ghost                                       | 102          | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)   |
| სუნი   | smell                                               | 96           | [source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)   |
| სურათი | picture                                             | 178          | [source](https://en.wiktionary.org/w/index.php?title=სურათი&oldid=88800264) |
| სუფთა  | clean                                               | 178          | [source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)  |
| სუფრა  | tablecloth, feast                                   | 178          | [source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)  |
| სქელი  | thick                                               | 212          | [source](https://en.wiktionary.org/w/index.php?title=სქელი&oldid=91740769)  |
| სქესი  | sex; gender                                         | 204          | [source](https://en.wiktionary.org/w/index.php?title=სქესი&oldid=91012991)  |
| სცენა  | stage; scene                                        | 205          | [source](https://en.wiktionary.org/w/index.php?title=სცენა&oldid=84101771)  |
| სხივი  | ray                                                 | 192          | [source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)  |
| ტაბუ   | taboo                                               | 85           | [source](https://en.wiktionary.org/w/index.php?title=ტაბუ&oldid=84101781)   |
| ტალახი | mud                                                 | 50           | [source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470) |
| ტანგო  | tango                                               | 33           | [source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)  |
| ტანი   | body                                                | 37, 203      | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)   |
| ტანკი  | military tank                                       | 153          | [source](https://en.wiktionary.org/w/index.php?title=ტანკი&oldid=88002840)  |
| ტარი   | handle                                              | 56, 227      | [source](https://en.wiktionary.org/w/index.php?title=ტარი&oldid=91725865)   |
| ტარიფი | tariff; rate                                        | 48           | [source](https://en.wiktionary.org/w/index.php?title=ტარიფი&oldid=84101808) |
| ტაფა   | frying pan                                          | 50           | [source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)   |
| ტაქსი  | taxi                                                | 179          | [source](https://en.wiktionary.org/w/index.php?title=ტაქსი&oldid=84119352)  |
| ტაში   | applause                                            | 85           | [source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)   |
| ტახტი  | ottoman bench                                       | 184          | [source](https://en.wiktionary.org/w/index.php?title=ტახტი&oldid=84101822)  |
| ტბა    | lake                                                | 33, 182      | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ტენი   | moisture                                            | 74           | [source](https://en.wiktionary.org/w/index.php?title=ტენი&oldid=92014085)   |
| ტერფი  | foot                                                | 176          | [source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)  |
| ტვინი  | brain                                               | 220          | [source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)  |
| ტილო   | canvas, linen                                       | 208          | [source](https://en.wiktionary.org/w/index.php?title=ტილო&oldid=84101866)   |
| ტიპი   | type                                                | 37           | [source](https://en.wiktionary.org/w/index.php?title=ტიპი&oldid=64001804)   |
| ტირე   | dash                                                | 176          | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)   |
| ტიტა   | tulip                                               | 184          | [source](https://en.wiktionary.org/w/index.php?title=ტიტა&oldid=81818591)   |
| ტოლი   | equal                                               | 208          | [source](https://en.wiktionary.org/w/index.php?title=ტოლი&oldid=92197091)   |
| ტომატი | tomato concentrate                                  | 138          | [source](https://en.wiktionary.org/w/index.php?title=ტომატი&oldid=89872964) |
| ტომი   | tribe; volume                                       | 61           | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)   |
| ტონა   | ton                                                 | 74           | [source](https://en.wiktionary.org/w/index.php?title=ტონა&oldid=84101895)   |
| ტონი   | tone                                                | 33           | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)   |
| ტორტი  | tart                                                | 138          | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)  |
| ტოტი   | branch, twig                                        | 138          | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)   |
| ტრიო   | trio                                                | 35, 135      | [source](https://en.wiktionary.org/w/index.php?title=ტრიო&oldid=84101947)   |
| ტუმბო  | pump                                                | 151          | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)  |
| ტურა   | jackal                                              | 76           | [source](https://en.wiktionary.org/w/index.php?title=ტურა&oldid=91715083)   |
| ტური   | round                                               | 61           | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)   |
| ტუჩი   | lip                                                 | 17           | [source](https://en.wiktionary.org/w/index.php?title=ტუჩი&oldid=89949141)   |
| ტყავი  | leather                                             | 220          | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)  |
| ტყე    | forest, wood                                        | 73           | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ტყვე   | captive                                             | 73           | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)   |
| ტყვია  | bullet, lead                                        | 73, 220      | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)  |
| უაზრო  | pointless; meaningless                              | 41           | [source](https://en.wiktionary.org/w/index.php?title=უაზრო&oldid=75687201)  |
| უარი   | refusal                                             | 47, 152      | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)   |
| უბანი  | neighborhood                                        | 58           | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)  |
| უბე    | bay; bosom                                          | 51           | [source](https://en.wiktionary.org/w/index.php?title=უბე&oldid=84119518)    |
| უზადო  | flawless                                            | 109          | [source](https://en.wiktionary.org/w/index.php?title=უზადო&oldid=84119546)  |
| უთო    | iron for clothes                                    | 160          | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)    |
| უკან   | back; backwards                                     | 34, 170      | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| ულუფა  | portion; serving                                    | 137          | [source](https://en.wiktionary.org/w/index.php?title=ულუფა&oldid=84102036)  |
| უმი    | raw, uncooked                                       | 17, 136, 211 | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)    |
| უნარი  | ability                                             | 53           | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)  |
| ურდო   | horde                                               | 15, 136      | [source](https://en.wiktionary.org/w/index.php?title=ურდო&oldid=84119678)   |
| ურემი  | cartload                                            | 21, 190      | [source](https://en.wiktionary.org/w/index.php?title=ურემი&oldid=84102064)  |
| ურნა   | urn                                                 | 53           | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)   |
| ურო    | hammer                                              | 15, 112      | [source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)    |
| ურჩი   | disobedient                                         | 47           | [source](https://en.wiktionary.org/w/index.php?title=ურჩი&oldid=84091172)   |
| უფასო  | free of charge                                      | 96           | [source](https://en.wiktionary.org/w/index.php?title=უფასო&oldid=84119719)  |
| უფროსი | older; senior                                       | 112          | [source](https://en.wiktionary.org/w/index.php?title=უფროსი&oldid=84091183) |
| უცხო   | foreign, unfamiliar                                 | 16           | [source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)   |
| უძრავი | immobile; stationary                                | 47           | [source](https://en.wiktionary.org/w/index.php?title=უძრავი&oldid=84091194) |
| უხეში  | rough; rude                                         | 165          | [source](https://en.wiktionary.org/w/index.php?title=უხეში&oldid=84119754)  |
| უჯრა   | drawer                                              | 63           | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)   |
| ფაზა   | phase                                               | 84           | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)   |
| ფაილი  | file                                                | 183          | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)  |
| ფარა   | flock                                               | 13, 94       | [source](https://en.wiktionary.org/w/index.php?title=ფარა&oldid=84119773)   |
| ფარდა  | curtain, purdah                                     | 13           | [source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)  |
| ფართო  | wide                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=ფართო&oldid=84119789)  |
| ფარი   | shield                                              | 8, 175       | [source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)   |
| ფასი   | price, cost                                         | 96, 179      | [source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)   |
| ფაფა   | porridge                                            | 13           | [source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)   |
| ფაქტი  | fact                                                | 179          | [source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)  |
| ფენა   | layer                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)   |
| ფენი   | hairdryer                                           | 197          | [source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)   |
| ფერი   | color, hue                                          | 176          | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)   |
| ფერმა  | farm                                                | 40           | [source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)  |
| ფესვი  | root                                                | 212          | [source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)  |
| ფეტვი  | millet                                              | 176          | [source](https://en.wiktionary.org/w/index.php?title=ფეტვი&oldid=87901416)  |
| ფეხი   | foot; leg                                           | 36, 130      | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| ფიგურა | stature, figure                                     | 63           | [source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102) |
| ფილა   | slab                                                | 50, 137      | [source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)   |
| ფილე   | fillet                                              | 130, 212     | [source](https://en.wiktionary.org/w/index.php?title=ფილე&oldid=84102226)   |
| ფილმი  | film                                                | 183          | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)  |
| ფილტრი | filter                                              | 48           | [source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240) |
| ფინალი | final                                               | 183          | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241) |
| ფირი   | film                                                | 48           | [source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)   |
| ფირმა  | company                                             | 8            | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)  |
| ფისი   | resin                                               | 113          | [source](https://en.wiktionary.org/w/index.php?title=ფისი&oldid=87901452)   |
| ფიცი   | oath                                                | 177          | [source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)   |
| ფიჭა   | honeycomb                                           | 175          | [source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)   |
| ფლავი  | pilaf                                               | 172          | [source](https://en.wiktionary.org/w/index.php?title=ფლავი&oldid=84102266)  |
| ფლოტი  | fleet                                               | 113, 208     | [source](https://en.wiktionary.org/w/index.php?title=ფლოტი&oldid=84102283)  |
| ფოთოლი | leaf                                                | 208          | [source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315) |
| ფოკუსი | stunt, trick                                        | 112          | [source](https://en.wiktionary.org/w/index.php?title=ფოკუსი&oldid=84102291) |
| ფოლადი | steel                                               | 18           | [source](https://en.wiktionary.org/w/index.php?title=ფოლადი&oldid=84119907) |
| ფონდი  | fund                                                | 197          | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)  |
| ფონი   | background                                          | 96           | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)   |
| ფორმა  | shape, form                                         | 40           | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)  |
| ფოსტა  | post; mail                                          | 179          | [source](https://en.wiktionary.org/w/index.php?title=ფოსტა&oldid=87382061)  |
| ფოტო   | photo                                               | 208          | [source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)   |
| ფრაზა  | phrase                                              | 84           | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)  |
| ფრანი  | kite                                                | 175          | [source](https://en.wiktionary.org/w/index.php?title=ფრანი&oldid=84119947)  |
| ფრე    | draw; tie in a game                                 | 1            | [source](https://en.wiktionary.org/w/index.php?title=ფრე&oldid=84103223)    |
| ფრესკა | fresco                                              | 158          | [source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351) |
| ფრთა   | wing                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)   |
| ფსონი  | bet                                                 | 96           | [source](https://en.wiktionary.org/w/index.php?title=ფსონი&oldid=84119973)  |
| ფულადი | monetary                                            | 137          | [source](https://en.wiktionary.org/w/index.php?title=ფულადი&oldid=84091297) |
| ფული   | money                                               | 36, 137      | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)   |
| ფუჭი   | futile; useless                                     | 116          | [source](https://en.wiktionary.org/w/index.php?title=ფუჭი&oldid=84119986)   |
| ფხა    | fishbone                                            | 95, 199      | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)      |
| ქადა   | sweet pastry                                        | 185          | [source](https://en.wiktionary.org/w/index.php?title=ქადა&oldid=91650192)   |
| ქალა   | skull                                               | 14, 141      | [source](https://en.wiktionary.org/w/index.php?title=ქალა&oldid=91725190)   |
| ქალი   | woman                                               | 10, 185      | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| ქამარი | belt                                                | 23           | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022) |
| ქაოსი  | chaos                                               | 179          | [source](https://en.wiktionary.org/w/index.php?title=ქაოსი&oldid=84120027)  |
| ქარვა  | amber                                               | 141          | [source](https://en.wiktionary.org/w/index.php?title=ქარვა&oldid=92067051)  |
| ქარი   | wind                                                | 4, 124       | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)   |
| ქაჯი   | goblin                                              | 99           | [source](https://en.wiktionary.org/w/index.php?title=ქაჯი&oldid=87997423)   |
| ქედი   | mountain range                                      | 45           | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)   |
| ქერა   | blond                                               | 181          | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)   |
| ქერი   | barley                                              | 79, 176      | [source](https://en.wiktionary.org/w/index.php?title=ქერი&oldid=87901504)   |
| ქერქი  | bark; rind                                          | 106          | [source](https://en.wiktionary.org/w/index.php?title=ქერქი&oldid=92228071)  |
| ქვა    | stone                                               | 14, 150      | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვაბი  | pot                                                 | 30           | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)  |
| ქვისლი | co-brother-in-law                                   | 150          | [source](https://en.wiktionary.org/w/index.php?title=ქვისლი&oldid=88662328) |
| ქვიშა  | sand                                                | 30           | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)  |
| ქილა   | jar                                                 | 10           | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ქიმია  | chemistry                                           | 77           | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)  |
| ქირა   | rent                                                | 4, 124       | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)   |
| ქლიავი | plum                                                | 150          | [source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131) |
| ქმარი  | husband                                             | 23           | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)  |
| ქოლგა  | umbrella                                            | 10           | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)  |
| ქონება | property; wealth                                    | 52           | [source](https://en.wiktionary.org/w/index.php?title=ქონება&oldid=90059881) |
| ქორი   | goshawk                                             | 44           | [source](https://en.wiktionary.org/w/index.php?title=ქორი&oldid=92251688)   |
| ქოსა   | beardless                                           | 52           | [source](https://en.wiktionary.org/w/index.php?title=ქოსა&oldid=91928853)   |
| ქოხი   | hut; cabin                                          | 204          | [source](https://en.wiktionary.org/w/index.php?title=ქოხი&oldid=84096657)   |
| ქსელი  | web; network                                        | 123, 212     | [source](https://en.wiktionary.org/w/index.php?title=ქსელი&oldid=84809641)  |
| ქუდი   | hat                                                 | 15, 211      | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)   |
| ქულა   | point, score                                        | 126          | [source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)   |
| ქურა   | stove, furnace                                      | 126          | [source](https://en.wiktionary.org/w/index.php?title=ქურა&oldid=91715085)   |
| ქურდი  | thief                                               | 15           | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)  |
| ქურქი  | fur coat                                            | 106          | [source](https://en.wiktionary.org/w/index.php?title=ქურქი&oldid=84224158)  |
| ქუსლი  | heel                                                | 126          | [source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)  |
| ქუჩა   | street                                              | 221          | [source](https://en.wiktionary.org/w/index.php?title=ქუჩა&oldid=84120190)   |
| ღამე   | night                                               | 159          | [source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)   |
| ღარი   | groove, ditch                                       | 19, 98       | [source](https://en.wiktionary.org/w/index.php?title=ღარი&oldid=84102504)   |
| ღერო   | blade, haulm, stalk, stem                           | 55           | [source](https://en.wiktionary.org/w/index.php?title=ღერო&oldid=87901541)   |
| ღერძი  | axle; axis                                          | 55           | [source](https://en.wiktionary.org/w/index.php?title=ღერძი&oldid=84120210)  |
| ღვედი  | belt, strap                                         | 115          | [source](https://en.wiktionary.org/w/index.php?title=ღვედი&oldid=84120218)  |
| ღვინო  | wine                                                | 115          | [source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)  |
| ღია    | open                                                | 19, 164      | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)    |
| ღილი   | button                                              | 78           | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ღირსი  | worthy; deserving                                   | 227          | [source](https://en.wiktionary.org/w/index.php?title=ღირსი&oldid=88628246)  |
| ღობე   | fence, hedge                                        | 64           | [source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)   |
| ღომი   | ghomi maize porridge                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)   |
| ღონე   | strength                                            | 115          | [source](https://en.wiktionary.org/w/index.php?title=ღონე&oldid=84120241)   |
| ღორი   | pig                                                 | 55           | [source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)   |
| ღრმა   | deep                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)   |
| ღრუ    | cavity; hollow space                                | 64           | [source](https://www.ganmarteba.ge/word/ღრუ)                                |
| ღუზა   | anchor                                              | 189          | [source](https://en.wiktionary.org/w/index.php?title=ღუზა&oldid=87788040)   |
| ყაბაყი | zucchini                                            | 127          | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258) |
| ყავა   | coffee                                              | 2, 89        | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)   |
| ყალბი  | fake; false                                         | 140          | [source](https://en.wiktionary.org/w/index.php?title=ყალბი&oldid=84120277)  |
| ყანა   | field                                               | 39           | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)   |
| ყასაბი | butcher                                             | 39           | [source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292) |
| ყბა    | jaw                                                 | 39, 127      | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)    |
| ყდა    | cover of a book                                     | 2, 140       | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)    |
| ყელი   | throat                                              | 117          | [source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)   |
| ყველი  | cheese                                              | 117          | [source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)  |
| ყინვა  | frost, freezing, freezing temperatures, severe cold | 220          | [source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)  |
| ყრუ    | deaf                                                | 21, 139      | [source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)    |
| ყუთი   | box                                                 | 139          | [source](https://en.wiktionary.org/w/index.php?title=ყუთი&oldid=85493733)   |
| ყურე   | bay, bight                                          | 21           | [source](https://en.wiktionary.org/w/index.php?title=ყურე&oldid=84102567)   |
| ყური   | ear                                                 | 21           | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| შავი   | black                                               | 110          | [source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)   |
| შალი   | shawl                                               | 6, 207       | [source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)   |
| შანსი  | chance                                              | 219          | [source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)  |
| შაშვი  | thrush                                              | 110          | [source](https://en.wiktionary.org/w/index.php?title=შაშვი&oldid=84757236)  |
| შაშხი  | salted or dried meat                                | 165          | [source](https://en.wiktionary.org/w/index.php?title=შაშხი&oldid=88672039)  |
| შენობა | building                                            | 81           | [source](https://en.wiktionary.org/w/index.php?title=შენობა&oldid=84102610) |
| შეშა   | firewood                                            | 165          | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)   |
| შველი  | roe deer                                            | 57           | [source](https://en.wiktionary.org/w/index.php?title=შველი&oldid=91741270)  |
| შვილი  | child                                               | 57           | [source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)  |
| შვრია  | oats                                                | 94           | [source](https://en.wiktionary.org/w/index.php?title=შვრია&oldid=88155749)  |
| შიში   | fear                                                | 110          | [source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)   |
| შნო    | skill, charm                                        | 81           | [source](https://en.wiktionary.org/w/index.php?title=შნო&oldid=92228121)    |
| შობა   | Christmas                                           | 81           | [source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)   |
| შოკი   | shock                                               | 82           | [source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)   |
| შოლტი  | whip                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=შოლტი&oldid=88091226)  |
| შორი   | far                                                 | 135          | [source](https://en.wiktionary.org/w/index.php?title=შორი&oldid=84097095)   |
| შორს   | far                                                 | 20           | [source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)   |
| შრე    | stratum, layer                                      | 82           | [source](https://en.wiktionary.org/w/index.php?title=შრე&oldid=84102672)    |
| შტატი  | state; staff                                        | 184          | [source](https://en.wiktionary.org/w/index.php?title=შტატი&oldid=88896322)  |
| შტო    | branch                                              | 135, 210     | [source](https://en.wiktionary.org/w/index.php?title=შტო&oldid=92197095)    |
| შუა    | middle                                              | 30, 165      | [source](https://www.ganmarteba.ge/word/შუა)                                |
| შუბი   | spear                                               | 30           | [source](https://en.wiktionary.org/w/index.php?title=შუბი&oldid=84120602)   |
| შუბლი  | forehead                                            | 147          | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)  |
| შური   | envy                                                | 106          | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)   |
| შუქი   | light                                               | 106          | [source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)   |
| შუშა   | glass                                               | 165          | [source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)   |
| შხამი  | poison                                              | 26           | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)  |
| შხაპი  | shower                                              | 184          | [source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)  |
| ჩაი    | tea (drink made from leaves of tea plant)           | 4, 221       | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)    |
| ჩალა   | straw                                               | 143          | [source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)   |
| ჩარხი  | lathe                                               | 92           | [source](https://en.wiktionary.org/w/index.php?title=ჩარხი&oldid=84120652)  |
| ჩაქუჩი | hammer                                              | 221          | [source](https://en.wiktionary.org/w/index.php?title=ჩაქუჩი&oldid=91072323) |
| ჩეკი   | check, receipt                                      | 27           | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)   |
| ჩექმა  | boot                                                | 181          | [source](https://en.wiktionary.org/w/index.php?title=ჩექმა&oldid=84120683)  |
| ჩვარი  | rag                                                 | 47           | [source](https://en.wiktionary.org/w/index.php?title=ჩვარი&oldid=84102722)  |
| ჩვილი  | baby                                                | 57           | [source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)  |
| ჩიპი   | microchip                                           | 121          | [source](https://en.wiktionary.org/w/index.php?title=ჩიპი&oldid=85075873)   |
| ჩირი   | dried fruit                                         | 214          | [source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)   |
| ჩიტი   | bird                                                | 214          | [source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)   |
| ჩიხი   | blind alley                                         | 214          | [source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)   |
| ჩუმად  | quietly                                             | 109          | [source](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)  |
| ჩუმი   | quiet                                               | 17, 92       | [source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)   |
| ჩუსტი  | slipper                                             | 17           | [source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)  |
| ჩქარი  | quick                                               | 4            | [source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)  |
| ცალი   | piece                                               | 107          | [source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)   |
| ცელი   | scythe                                              | 65           | [source](https://en.wiktionary.org/w/index.php?title=ცელი&oldid=91740712)   |
| ცენტი  | cent                                                | 74           | [source](https://en.wiktionary.org/w/index.php?title=ცენტი&oldid=84120784)  |
| ცვილი  | wax                                                 | 107          | [source](https://en.wiktionary.org/w/index.php?title=ცვილი&oldid=84757548)  |
| ცივი   | cold                                                | 192          | [source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)   |
| ციკლი  | cycle                                               | 177          | [source](https://en.wiktionary.org/w/index.php?title=ციკლი&oldid=84120815)  |
| ცილა   | protein                                             | 107          | [source](https://en.wiktionary.org/w/index.php?title=ცილა&oldid=84120818)   |
| ცირკი  | circus                                              | 177          | [source](https://en.wiktionary.org/w/index.php?title=ცირკი&oldid=84120827)  |
| ციფრი  | digit; numeral                                      | 177          | [source](https://en.wiktionary.org/w/index.php?title=ციფრი&oldid=85021100)  |
| ციხე   | fortress                                            | 59, 191      | [source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)   |
| ცოდვა  | sin                                                 | 218          | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)  |
| ცოლი   | wife                                                | 80           | [source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)   |
| ცომი   | dough                                               | 93           | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)   |
| ცოტა   | a little; few                                       | 74           | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)   |
| ცრუ    | false, phony                                        | 16, 190      | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)    |
| ცუდი   | bad                                                 | 190          | [source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)   |
| ცული   | axe                                                 | 59           | [source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)   |
| ცური   | udder                                               | 16, 190      | [source](https://en.wiktionary.org/w/index.php?title=ცური&oldid=84102818)   |
| ცხადი  | clear; evident                                      | 191          | [source](https://en.wiktionary.org/w/index.php?title=ცხადი&oldid=84088549)  |
| ცხარე  | spicy                                               | 134          | [source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)  |
| ცხელი  | hot                                                 | 59           | [source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)  |
| ცხენი  | horse                                               | 191          | [source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)  |
| ცხიმი  | fat                                                 | 192          | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)  |
| ძაბრი  | funnel                                              | 90           | [source](https://en.wiktionary.org/w/index.php?title=ძაბრი&oldid=84120916)  |
| ძალა   | power, force, strength                              | 141          | [source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)   |
| ძაფი   | thread                                              | 172          | [source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)   |
| ძაღლი  | dog                                                 | 167          | [source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)  |
| ძეგლი  | monument                                            | 224          | [source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)  |
| ძელი   | beam                                                | 49           | [source](https://en.wiktionary.org/w/index.php?title=ძელი&oldid=84120929)   |
| ძერა   | kite bird                                           | 158          | [source](https://en.wiktionary.org/w/index.php?title=ძერა&oldid=91812511)   |
| ძეხვი  | sausage                                             | 130          | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)  |
| ძვალი  | bone                                                | 172          | [source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)  |
| ძველი  | old                                                 | 130          | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)  |
| ძვირი  | expensive                                           | 234          | [source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)  |
| ძია    | uncle                                               | 47, 237      | [source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)    |
| ძილი   | sleep                                               | 49           | [source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)   |
| ძირი   | root                                                | 234          | [source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)   |
| ძიძა   | nanny                                               | 172          | [source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)   |
| ძლიერი | strong                                              | 49           | [source](https://en.wiktionary.org/w/index.php?title=ძლიერი&oldid=84757250) |
| ძმა    | brother                                             | 167          | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| ძმარი  | vinegar                                             | 90           | [source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)  |
| ძნელი  | difficult                                           | 71           | [source](https://en.wiktionary.org/w/index.php?title=ძნელი&oldid=88915482)  |
| ძრავა  | engine                                              | 141          | [source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)  |
| ძროხა  | cow                                                 | 95           | [source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)  |
| ძუა    | horsehair                                           | 70           | [source](https://en.wiktionary.org/w/index.php?title=ძუა&oldid=85057219)    |
| წაბლი  | chestnut                                            | 78           | [source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)  |
| წავი   | otter                                               | 104, 202     | [source](https://en.wiktionary.org/w/index.php?title=წავი&oldid=87797873)   |
| წამალი | medicine                                            | 68           | [source](https://en.wiktionary.org/w/index.php?title=წამალი&oldid=84120981) |
| წამი   | second                                              | 25, 203      | [source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)   |
| წარბი  | brow, eyebrow                                       | 152          | [source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)  |
| წებო   | glue                                                | 142          | [source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)   |
| წევრი  | member                                              | 69           | [source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)  |
| წელი   | year                                                | 232          | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| წესი   | rule                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)   |
| წვეთი  | drop                                                | 202          | [source](https://en.wiktionary.org/w/index.php?title=წვეთი&oldid=59811747)  |
| წვენი  | gravy, juice, sap                                   | 202          | [source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)  |
| წვერი  | beard; tip                                          | 69           | [source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)  |
| წვიმა  | rain                                                | 104          | [source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)  |
| წიგნი  | book                                                | 186          | [source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)  |
| წილი   | share; portion                                      | 78, 186      | [source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)   |
| წინდა  | sock                                                | 203          | [source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)  |
| წმინდა | pure; holy                                          | 203          | [source](https://en.wiktionary.org/w/index.php?title=წმინდა&oldid=84121076) |
| წნევა  | pressure                                            | 202          | [source](https://en.wiktionary.org/w/index.php?title=წნევა&oldid=84121078)  |
| წონა   | weight                                              | 67           | [source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)   |
| წრე    | circle                                              | 69, 146      | [source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)    |
| წუთი   | minute                                              | 152          | [source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)   |
| წუნი   | defect                                              | 69, 144      | [source](https://en.wiktionary.org/w/index.php?title=წუნი&oldid=84121093)   |
| წყალი  | water                                               | 145          | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)  |
| წყარო  | spring                                              | 145          | [source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)  |
| ჭაბუკი | young man                                           | 116          | [source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122) |
| ჭავლი  | jet, stream                                         | 100          | [source](https://en.wiktionary.org/w/index.php?title=ჭავლი&oldid=84102926)  |
| ჭალა   | floodplain; riverside grove                         | 225          | [source](https://en.wiktionary.org/w/index.php?title=ჭალა&oldid=92391673)   |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   | 225          | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)  |
| ჭარბი  | excess; surplus                                     | 19           | [source](https://en.wiktionary.org/w/index.php?title=ჭარბი&oldid=88343674)  |
| ჭაღი   | chandelier                                          | 19           | [source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)   |
| ჭერი   | ceiling                                             | 122          | [source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)   |
| ჭექა   | thunder                                             | 99           | [source](https://en.wiktionary.org/w/index.php?title=ჭექა&oldid=84121145)   |
| ჭვავი  | rye                                                 | 12           | [source](https://en.wiktionary.org/w/index.php?title=ჭვავი&oldid=87901803)  |
| ჭია    | worm                                                | 12, 116      | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)    |
| ჭირი   | illness, trouble                                    | 122          | [source](https://en.wiktionary.org/w/index.php?title=ჭირი&oldid=76807766)   |
| ჭიქა   | glass, cup                                          | 99           | [source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)   |
| ჭკუა   | intellect                                           | 34, 116      | [source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)   |
| ჭოკი   | pole                                                | 228          | [source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)   |
| ჭორი   | gossip                                              | 136          | [source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)   |
| ჭრელი  | colorful                                            | 122          | [source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)  |
| ხაზი   | line                                                | 161          | [source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)   |
| ხალათი | robe                                                | 118          | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200) |
| ხალი   | birthmark, mole                                     | 50, 206      | [source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)   |
| ხალიჩა | carpet, rug                                         | 143          | [source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204) |
| ხალხი  | people                                              | 223          | [source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)  |
| ხამი   | raw, inexperienced                                  | 93, 223      | [source](https://en.wiktionary.org/w/index.php?title=ხამი&oldid=92291997)   |
| ხარი   | ox, bull                                            | 11, 86       | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)   |
| ხარჯი  | expense                                             | 148          | [source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)  |
| ხატი   | icon                                                | 184          | [source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)   |
| ხაჭო   | curd cheese                                         | 114          | [source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)   |
| ხახვი  | onion                                               | 7            | [source](https://en.wiktionary.org/w/index.php?title=ხახვი&oldid=92248670)  |
| ხბო    | calf                                                | 114, 235     | [source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)    |
| ხედი   | view                                                | 191          | [source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)   |
| ხევი   | ravine                                              | 43, 130      | [source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)   |
| ხელი   | hand                                                | 65           | [source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)   |
| ხეობა  | valley                                              | 114          | [source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)  |
| ხვალ   | tomorrow                                            | 206          | [source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)   |
| ხიბლი  | charm                                               | 72           | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)  |
| ხიდი   | bridge                                              | 230          | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)   |
| ხილი   | fruit, fruits                                       | 72, 217      | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)   |
| ხმა    | voice, sound                                        | 143, 239     | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმალი  | sword                                               | 161          | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)  |
| ხმაური | noise                                               | 92           | [source](https://en.wiktionary.org/w/index.php?title=ხმაური&oldid=84103029) |
| ხმელი  | dry                                                 | 36           | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)  |
| ხორცი  | meat                                                | 16           | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)  |
| ხრიკი  | trick; ruse                                         | 214          | [source](https://en.wiktionary.org/w/index.php?title=ხრიკი&oldid=84103044)  |
| ხროვა  | pack                                                | 206          | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)  |
| ხურდა  | small change                                        | 86           | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)  |
| ხურმა  | persimmon                                           | 199          | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)  |
| ხუფი   | lid                                                 | 199          | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)   |
| ჯადო   | magic                                               | 97           | [source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)   |
| ჯაზი   | jazz                                                | 161          | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)   |
| ჯამი   | sum; bowl                                           | 75, 161      | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)   |
| ჯანი   | health                                              | 219          | [source](https://en.wiktionary.org/w/index.php?title=ჯანი&oldid=84121391)   |
| ჯართი  | scrap                                               | 148          | [source](https://en.wiktionary.org/w/index.php?title=ჯართი&oldid=89067419)  |
| ჯარი   | army, host                                          | 236          | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)   |
| ჯაჭვი  | chain                                               | 99           | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)  |
| ჯგუფი  | group                                               | 63           | [source](https://en.wiktionary.org/w/index.php?title=ჯგუფი&oldid=84103069)  |
| ჯვარი  | cross                                               | 148          | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)  |
| ჯიბე   | pocket                                              | 168          | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)   |
| ჯილდო  | reward                                              | 226          | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)  |
| ჯინსი  | jeans                                               | 219          | [source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)  |
| ჯიში   | breed                                               | 219          | [source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)   |
| ჯოგი   | herd                                                | 226          | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)   |
| ჯორი   | mule                                                | 97, 226      | [source](https://en.wiktionary.org/w/index.php?title=ჯორი&oldid=84121454)   |
| ჯოხი   | stick                                               | 97           | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)   |
| ჰაერი  | air                                                 | 134          | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)  |
| ჰავა   | climate                                             | 14           | [source](https://en.wiktionary.org/w/index.php?title=ჰავა&oldid=84121476)   |
| ჰალვა  | halva                                               | 14           | [source](https://en.wiktionary.org/w/index.php?title=ჰალვა&oldid=92945178)  |
| ჰერცი  | hertz                                               | 134          | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)  |
| ჰიმნი  | anthem                                              | 38           | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)  |
| ჰობი   | hobby                                               | 9            | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)   |

## All 240 boards

| Level | Required answers                   | Wheel   | Grid | Difficulty |
| ----: | ---------------------------------- | ------- | ---- | ---------: |
|     1 | კერა, კეფა, ფრე, ერა, კაფე         | ერკფა   | 6×4  |         40 |
|     2 | ვადა, ყავა, ყდა, დავა, ავად        | ყავდა   | 7×5  |         42 |
|     3 | აკრი, კასრი, სარი, სია, კარი       | აიკსრ   | 6×5  |         46 |
|     4 | ქირა, ქარი, ჩაი, რქა, ჩქარი        | ჩაქრი   | 6×5  |         44 |
|     5 | ობი, როლი, ბოლი, ლორი, ბროლი       | რლბიო   | 7×5  |         46 |
|     6 | ელვა, ვალი, შალი, ვაშლი, ვილა      | ვიშელა  | 7×5  |         56 |
|     7 | თხა, თახვი, ხახვი, თიხა, თივა      | ვთახხი  | 7×5  |         56 |
|     8 | ზარი, რაზმი, ფარი, ფირმა, მზა      | აზფრმი  | 7×5  |         56 |
|     9 | რკო, როკი, კობრი, ჰობი, კიბო       | კბჰოირ  | 7×5  |         54 |
|    10 | ქილა, ქალი, ქოლგა, გოლი, ოლქი      | გაილოქ  | 7×4  |         56 |
|    11 | არხი, თოხი, ოთახი, ხარი, თარო      | იოხართ  | 7×5  |         56 |
|    12 | ჭვავი, ავზი, ჭია, ზვავი, ვიზა      | ვვაჭიზ  | 7×5  |         56 |
|    13 | ფარა, ფარდა, ფაფა, აფრა, რაფა      | ააფრფდ  | 7×5  |         56 |
|    14 | ლავა, ქვა, ჰავა, ჰალვა, ქალა       | ჰქლავა  | 7×5  |         54 |
|    15 | ურო, ურდო, ქუდი, ქურდი, დოქი       | დუიქრო  | 7×5  |         54 |
|    16 | ხორცი, რუხი, ცური, უცხო, ცრუ       | ორიუხც  | 7×5  |         54 |
|    17 | ჩუმი, უმი, ტუჩი, მუსი, ჩუსტი       | უიმჩტს  | 7×4  |         54 |
|    18 | დილა, დოლი, ლოდი, ოფლი, ფოლადი     | ლაოიფდ  | 7×4  |         60 |
|    19 | ჭაღი, ბაღი, ჭარბი, ღარი, ღია       | ღრიჭბა  | 7×5  |         54 |
|    20 | ოდა, სოდა, შორს, დრო, დროშა        | ორდსშა  | 6×5  |         52 |
|    21 | ყრუ, ყურე, ყური, მური, ურემი       | უმყიერ  | 6×5  |         54 |
|    22 | მანეთი, თემა, ნამი, თმა, თემი      | თაენიმ  | 7×5  |         58 |
|    23 | იარა, არმია, ქამარი, ქმარი, არია   | აირაქმ  | 7×5  |         64 |
|    24 | ვაჟი, კავი, კვირა, კაჟი, კრავი     | კიჟვრა  | 6×5  |         58 |
|    25 | წამი, მაწონი, მონა, მინა, მიწა     | ონმწია  | 6×5  |         60 |
|    26 | მუხტი, მუშტი, მუშა, აუტი, შხამი    | უხიშტმა | 7×5  |         68 |
|    27 | რისკი, რეისი, კისერი, კირი, ჩეკი   | იკჩისერ | 7×5  |         72 |
|    28 | მოდა, ორმაგი, გრამი, დოგმა, დარგი  | იგმადრო | 7×5  |         74 |
|    29 | სპა, ასთმა, პასტა, თასმა, მთა      | ტმთაასპ | 7×5  |         64 |
|    30 | ქვაბი, ქვიშა, შუბი, შუა, ავი       | აბქვუში | 7×5  |         62 |
|    31 | გოლფი, თოლია, თოფი, იოგა, თაფლი    | ოგლიფათ | 6×5  |         68 |
|    32 | ალი, ლინზა, ზნე, ნათელი, ზეთი      | თიზენალ | 6×5  |         66 |
|    33 | ბატონი, ტანგო, ტბა, ტონი, გობი     | გინტბაო | 7×5  |         68 |
|    34 | კუჭი, უკან, ჭკუა, კანჭი, კენჭი     | ნიჭეაუკ | 6×5  |         66 |
|    35 | პორტი, პოეტი, რეპი, ტრიო, მეტრო    | ტმერიპო | 7×5  |         68 |
|    36 | ელფი, მუხლი, ფული, ფეხი, ხმელი     | ფლეიმხუ | 7×5  |         66 |
|    37 | პიტნა, ტანი, ტიპი, ნიკაპი, პიკი    | ტანკპიი | 7×5  |         70 |
|    38 | ნაზი, მიზანი, ზმნა, ზიანი, ჰიმნი   | ნჰაიიზმ | 7×5  |         72 |
|    39 | ყბა, აბი, საბანი, ყანა, ყასაბი     | ყანბაის | 6×5  |         68 |
|    40 | ფერმა, ფორმა, ალოე, მოლარე, მალე   | მეოარფლ | 7×5  |         72 |
|    41 | პროზა, უაზრო, ეზო, პოზა, ოპერა     | ოეპაზურ | 7×5  |         66 |
|    42 | იოლი, ასო, კლასი, ასკილი, სკოლა    | აიოილსკ | 6×5  |         70 |
|    43 | ნავი, მავნე, ვენახი, ვენა, ხევი    | მიხვეან | 7×5  |         70 |
|    44 | ლობიო, ობოლი, ოქრო, ქორი, ლოქო     | ქლოროიბ | 6×5  |         66 |
|    45 | დედა, დეიდა, დიდი, დიადი, ქედი     | ქაიიდედ | 7×5  |         66 |
|    46 | ლიმონი, ლომი, სიმი, ნისლი, ომი     | ონლისიმ | 7×5  |         68 |
|    47 | ჩვარი, უძრავი, ურჩი, უარი, ძია     | ჩვუარიძ | 7×5  |         68 |
|    48 | ფილტრი, ფირი, ლირა, ტარიფი, ლიტრი  | იტაფლირ | 6×5  |         74 |
|    49 | ლარი, რძალი, ძილი, ძელი, ძლიერი    | რიალიეძ | 7×5  |         70 |
|    50 | ხალი, იახტა, ფილა, ტალახი, ტაფა    | ხლიააფტ | 7×5  |         70 |
|    51 | ლუდი, უბე, ბნელი, დუელი, ბუდე      | ბნილდეუ | 7×5  |         64 |
|    52 | ბანქო, ექო, ქონება, ნება, ქოსა     | ქეანსობ | 7×5  |         68 |
|    53 | უნარი, გუდა, ურნა, ნარდი, გუნდი    | გადურინ | 7×5  |         68 |
|    54 | ბზა, ალფა, ბაფთა, ბაზა, ბალთა      | აზფლთაბ | 6×5  |         64 |
|    55 | ღერო, რძე, ღერძი, ღორი, კერძო      | რეძიღოკ | 7×5  |         64 |
|    56 | ღომი, ატომი, ღრმა, ტარი, მარტო     | ტრიომაღ | 7×5  |         66 |
|    57 | შვილი, ჩვილი, ელჩი, შველი, ეშვი    | ჩვლშეიი | 7×5  |         68 |
|    58 | ბუნება, ბებია, ბინა, უბანი, ენა    | ნუაებბი | 7×5  |         70 |
|    59 | გლეხი, ცხელი, ცული, გული, ციხე     | გიეხუცლ | 7×5  |         66 |
|    60 | ბერი, რაგბი, ბაგე, ბევრი, ბგერა    | ბრიეგვა | 7×5  |         68 |
|    61 | ტური, იუმორი, ტომი, რიტმი, რომი    | ოტიიუმრ | 7×5  |         70 |
|    62 | გორა, გარემო, გოგრა, გეგმა, გემო   | რეგაგომ | 7×5  |         72 |
|    63 | ჯგუფი, აგური, რუჯი, ფიგურა, უჯრა   | რუფგაჯი | 7×5  |         72 |
|    64 | ბიურო, ერბო, ღობე, ღრუ, ბურღი      | ორიეღბუ | 7×5  |         64 |
|    65 | სიცხე, ცელი, ხელი, თხელი, სითხე    | სიხთეცლ | 7×5  |         68 |
|    66 | მტერი, მეტრი, მტრედი, დიეტა, იდეა  | რიდატმე | 7×5  |         74 |
|    67 | ნალი, საწოლი, სიო, წონა, სალონი    | ნწსლაოი | 7×5  |         70 |
|    68 | ლაგამი, ლამა, მაგია, ლიგა, წამალი  | წამლაიგ | 7×5  |         74 |
|    69 | ნერვი, წვერი, წრე, წუნი, წევრი     | ნწუიერვ | 6×5  |         66 |
|    70 | ნიშა, ნუში, ძუა, განძი, გუშინ      | გნძუშაი | 7×5  |         64 |
|    71 | სიძე, სველი, ნესვი, ველი, ძნელი    | ვენსძლი | 7×5  |         68 |
|    72 | ლეიბი, ხიბლი, ხილი, კბილი, კეხი    | კლებიიხ | 7×5  |         68 |
|    73 | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი    | ივაყტეს | 7×5  |         70 |
|    74 | ტონა, ცენტი, ცოტა, ენოტი, ტენი     | ეცინაოტ | 7×5  |         66 |
|    75 | ალმასი, მაჯა, სილა, მსაჯი, ჯამი    | სლამიჯა | 6×5  |         70 |
|    76 | რუკა, ტურა, კარატი, კატა, კარტი    | უიაარკტ | 6×5  |         70 |
|    77 | მისია, ქიმია, თასი, მითი, მაისი    | ასთიმქი | 7×5  |         68 |
|    78 | იღბალი, ღილი, წაბლი, წილი, იღლია   | ალბწიღი | 6×5  |         72 |
|    79 | ექიმი, გმირი, ირემი, ქერი, გემი    | გრიეიქმ | 7×5  |         68 |
|    80 | კილო, ცოლი, ბიცოლა, კაცი, ბლოკი    | კბლაიცო | 6×5  |         70 |
|    81 | შნო, შენობა, კანოე, აკნე, შობა     | ონბაეკშ | 6×5  |         68 |
|    82 | კრემი, კომში, შოკი, მორი, შრე      | მეკრშოი | 7×5  |         64 |
|    83 | ბასრი, სარი, სერია, არსება, არსი   | საიერაბ | 6×5  |         72 |
|    84 | ფაზა, ზარი, ბაზარი, აზრი, ფრაზა    | აფიზაბრ | 7×5  |         70 |
|    85 | ბუშტი, ტაბუ, ტაში, ბაიტი, ბატი     | უაიშიბტ | 7×4  |         66 |
|    86 | ხურდა, დარი, ხარი, კრუხი, კუდი     | დიუაკხრ | 6×5  |         66 |
|    87 | საბუთი, თუთია, თუთა, თათი, სია     | ბიათთსუ | 7×5  |         68 |
|    88 | ოინი, რაიონი, რკინა, კონა, ნიორი   | ნრაიკიო | 7×5  |         72 |
|    89 | თავლა, თვალი, ყავა, ალყა, თავი     | ილაავთყ | 7×5  |         66 |
|    90 | ბრმა, ძაბრი, ძმარი, ბიძა, ბოძი     | ბძიმაორ | 7×5  |         66 |
|    91 | დაფნა, პანდა, პაპა, დანა, დაფა     | ნფპადპა | 7×5  |         66 |
|    92 | ჩუმი, მურა, ხმაური, ჩარხი, რუხი    | იამხჩრუ | 6×5  |         70 |
|    93 | მხეცი, ცომი, ხამი, ემოცია, მახე    | ოიხეაცმ | 7×5  |         70 |
|    94 | შვრია, არფა, ფარა, აფიშა, აფრა     | აივშაფრ | 7×5  |         66 |
|    95 | ძროხა, თარო, ფხა, ფართო, ფრთა      | თოძარხფ | 7×4  |         64 |
|    96 | ფასი, უფასო, ფონი, ფსონი, სუნი     | ფნაუისო | 7×5  |         66 |
|    97 | ჯადო, ოჯახი, ჯორი, ჯოხი, რადიო     | დახოჯირ | 7×5  |         66 |
|    98 | ზღვა, ვარდი, ზღვარი, ღარი, ვაზი    | ზვაღრდი | 6×5  |         70 |
|    99 | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     | იექაჭჯვ | 7×5  |         66 |
|   100 | ეკალი, ვაკე, ჭავლი, ეჭვი, ელვა     | ლივაჭეკ | 7×5  |         66 |
|   101 | პური, კოპი, პონი, კუპონი, ნუკრი    | კნრიოუპ | 7×5  |         70 |
|   102 | სოუსი, სპილო, სული, პლუსი, პულსი   | უისპსლო | 7×5  |         70 |
|   103 | მანია, მადა, მინა, ნადიმი, ამინდი  | აიანდიმ | 7×5  |         74 |
|   104 | მჟავე, მიწა, წავი, წვიმა, ამწე     | ივაწჟემ | 7×5  |         66 |
|   105 | ნეკნი, ეტლი, ნელი, კეტი, კლიტე     | ნნტლეიკ | 7×5  |         66 |
|   106 | ქურქი, ქერქი, შური, შუქი, ერი      | ურეშქიქ | 7×5  |         64 |
|   107 | ცილა, კვიცი, ცვილი, კივი, ცალი     | ვლიიცაკ | 7×5  |         66 |
|   108 | ბოთლი, ბოსელი, ობი, თესლი, სითბო   | ითოლესბ | 7×5  |         72 |
|   109 | დოზა, მოდა, უზადო, ჩუმად, ზომა     | უდომჩაზ | 7×5  |         66 |
|   110 | შავი, საშიში, შაშვი, შიში, ავი     | ავშისში | 7×5  |         68 |
|   111 | მალა, მალამო, მამა, კოალა, კომა    | აომლკმა | 6×5  |         70 |
|   112 | კურსი, რკო, უფროსი, ურო, ფოკუსი    | უორსიფკ | 7×5  |         70 |
|   113 | სტილი, ფისი, ფლოტი, ლიფტი, ოფისი   | ტფლიისო | 7×5  |         70 |
|   114 | ხბო, ხეობა, საბჭო, ხაჭო, სახე      | ოხასჭებ | 7×5  |         64 |
|   115 | ღვედი, დონე, ღვინო, ღონე, დენი     | ნდღეოივ | 7×5  |         66 |
|   116 | კაუჭი, ჭაბუკი, ჭია, ჭკუა, ფუჭი     | აბფუკიჭ | 7×5  |         68 |
|   117 | ყელი, ყველი, ლეკვი, კიდე, კლდე     | ყვდეკილ | 7×5  |         66 |
|   118 | კალა, კალთა, ხალათი, თიხა, კათხა   | იხკათლა | 7×5  |         72 |
|   119 | მკლავი, კვალი, კვამლი, თმა, ალი    | ლკივთმა | 7×5  |         70 |
|   120 | გვარი, ვირი, იგავი, იოგა, გროვა    | ვგაირიო | 7×5  |         68 |
|   121 | პარკი, კარი, პარიკი, ჩიპი, პირი    | პიიჩრაკ | 7×5  |         70 |
|   122 | ჭერი, ჭირი, ჭრელი, ბეჭი, რბილი     | იბლერიჭ | 6×5  |         66 |
|   123 | ქსელი, აქლემი, საქმე, ლექსი, მალე  | ქსლიამე | 7×5  |         74 |
|   124 | ქარი, ნაცარი, აქცია, არია, ქირა    | ცქიარან | 7×5  |         70 |
|   125 | მილი, მშრალი, ლირა, მარში, მარილი  | ლრიშიმა | 6×5  |         74 |
|   126 | ქურა, ასლი, სრული, ქულა, ქუსლი     | ლქსაიურ | 6×5  |         66 |
|   127 | აბი, ბაჭია, ყაბაყი, ყბა, ბაყაყი    | აყაჭიყბ | 7×5  |         70 |
|   128 | ნორმა, ორგანო, ორმო, მანგო, მონა   | რაონოგმ | 6×5  |         72 |
|   129 | დარგი, ადრე, ერთად, გედი, გარეთ    | თგერდაი | 6×5  |         68 |
|   130 | ძველი, ძეხვი, ფილე, ფეხი, ხევი     | ვეფძხლი | 7×5  |         66 |
|   131 | როკი, რძე, თერძი, კერძი, თეძო      | კძეორით | 7×5  |         64 |
|   132 | იოდი, დრო, კოდი, რისკი, დისკი      | სიდრიოკ | 7×5  |         64 |
|   133 | ბოლო, ბოლოკი, ლობიო, კიბო, ჟოლო    | ჟოიობკლ | 7×5  |         70 |
|   134 | არხი, ცხარე, ჰაერი, ჰერცი, ერა     | ხეცრჰაი | 7×5  |         66 |
|   135 | კორტი, ტრიო, შორი, კოშკი, შტო      | იკკტშრო | 7×5  |         64 |
|   136 | უმი, მჭიდრო, ურდო, ჭორი, მოდური    | ჭმდუირო | 7×5  |         70 |
|   137 | ფულადი, ფილა, ულუფა, ლუდი, ფული    | ულფიდაუ | 6×5  |         70 |
|   138 | მარტო, რომი, ტორტი, ტომატი, ტოტი   | ტოარმიტ | 7×5  |         72 |
|   139 | ყრუ, ყუთი, ლურჯი, რუჯი, რთული      | ირთულყჯ | 7×5  |         64 |
|   140 | დაბლა, ყალბი, ყდა, დაბა, დაბალი    | ყაიდლაბ | 7×5  |         70 |
|   141 | ძრავა, ლავა, ძალა, ქალა, ქარვა     | ალვძაქრ | 7×5  |         66 |
|   142 | წებო, ბერი, ვიწრო, ბეწვი, ევრო     | ევრბიწო | 7×5  |         66 |
|   143 | ხალიჩა, ჩალა, ახალი, აჩმა, ხმა     | ახმლაიჩ | 6×5  |         68 |
|   144 | ნემსი, მუსი, წესი, წუნი, მენიუ     | სეწიუნმ | 7×5  |         66 |
|   145 | ლარი, ლოყა, წყალი, როლი, წყარო     | რლყოწაი | 7×5  |         66 |
|   146 | იმედი, მწერი, მწირი, წრე, მერი     | იედმწირ | 7×5  |         66 |
|   147 | კუზი, ბუზი, შუბლი, კლუბი, ბუკი     | კშზლბიუ | 7×5  |         66 |
|   148 | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   | თრიხაჯვ | 7×5  |         72 |
|   149 | ზეგ, გზა, თაგვი, თევზი, გაზეთი     | ზაგთივე | 7×5  |         68 |
|   150 | ვალსი, ქვა, ქვისლი, ქლიავი, სილა   | ივალქის | 7×5  |         72 |
|   151 | კუბო, კუბი, ომი, ტუმბო, ბუტკო      | ობიტუმკ | 7×5  |         64 |
|   152 | ბარი, ბურთი, წარბი, უარი, წუთი     | რთუიწაბ | 7×5  |         66 |
|   153 | კანი, კნუტი, პიტნა, კუპატი, ტანკი  | ნკტპიუა | 7×5  |         74 |
|   154 | ვიდეო, ვოლტი, ლოდი, ველი, ვეტო     | ვიეოლტდ | 7×5  |         66 |
|   155 | ზიანი, მზა, მზიანი, მზე, ზეიმი     | მაენიზი | 7×5  |         68 |
|   156 | მამრი, მყარი, ამაყი, იარა, არაყი   | არაყმიმ | 7×5  |         70 |
|   157 | მოკლე, თოკი, მთელი, კილო, კომლი    | ლიკმოთე | 7×5  |         68 |
|   158 | ფრესკა, ძერა, კაფე, სარკე, კეფა    | ძკაესრფ | 6×5  |         70 |
|   159 | მედია, ღამე, დღე, მედალი, იდეა     | იდლამღე | 7×5  |         68 |
|   160 | ნული, კუნთი, კლოუნი, კინო, უთო     | ნითლკოუ | 7×5  |         68 |
|   161 | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     | ხიაზლჯმ | 7×5  |         66 |
|   162 | მორი, მური, ბიურო, ბრბო, ბომბი     | ბურმიობ | 7×5  |         66 |
|   163 | გრილი, ბრალი, ბარგი, ბაგირი, რიგი  | რლგაიბი | 7×5  |         74 |
|   164 | საათი, ღია, ასანთი, თაღი, თასი     | ისაღთნა | 7×5  |         68 |
|   165 | უხეში, შაშხი, შუშა, შეშა, შუა      | შშიეხაუ | 7×5  |         64 |
|   166 | კერა, ენა, ეკრანი, არენა, ნაკერი   | აკაიენრ | 7×5  |         72 |
|   167 | ძმა, ალღო, ლაღი, ძაღლი, მძღოლი     | ძამლიღო | 7×5  |         68 |
|   168 | ილეთი, ბილეთი, ლეიბი, ჯიბე, თბილი  | ელიიჯთბ | 7×5  |         74 |
|   169 | თივა, თავი, ნავთი, ნივთი, დათვი    | ნათვიიდ | 7×5  |         68 |
|   170 | სია, ასაკი, უკან, საუნა, საკანი    | ისაუაკნ | 7×5  |         70 |
|   171 | ბადე, ბაზა, ზებრა, ბარდა, ზედა     | დბზეაარ | 7×5  |         66 |
|   172 | ვალი, ძაფი, ძვალი, ძიძა, ფლავი     | აივძძფლ | 7×5  |         66 |
|   173 | ზარი, ავზი, ვაზა, ავარია, ავაზა    | ვარააიზ | 7×5  |         70 |
|   174 | ეპოქა, ექო, თექა, მთა, პოემა       | თქომეპა | 7×5  |         62 |
|   175 | ფიჭა, ფენა, ფარი, ნაჭერი, ფრანი    | ეარფჭნი | 6×5  |         70 |
|   176 | ტერფი, ტირე, ფეტვი, ფერი, ქერი     | რიფტვქე | 7×5  |         66 |
|   177 | კირი, ციკლი, ცირკი, ციფრი, ფიცი    | იიფლცკრ | 7×5  |         68 |
|   178 | სურათი, სარი, სუფთა, სუფრა, არსი   | ისრუაფთ | 6×5  |         72 |
|   179 | ფაქტი, ფოსტა, ქაოსი, ტაქსი, ფასი   | ფაოქსიტ | 7×5  |         70 |
|   180 | ლამა, მუზა, პაუზა, პუმა, ლამპა     | ზააუმპლ | 7×5  |         66 |
|   181 | მწარე, ამწე, ქერა, რქა, ჩექმა      | წაჩქერმ | 7×5  |         64 |
|   182 | ბატი, კიბე, პაკეტი, ტბა, ეტაპი     | პბკიტაე | 6×5  |         68 |
|   183 | ფინალი, ლაიმი, ფილმი, მინა, ფაილი  | ილიფანმ | 7×5  |         74 |
|   184 | ტახტი, შტატი, შხაპი, ხატი, ტიტა    | პტშტიხა | 7×5  |         68 |
|   185 | ადათი, დალაქი, ქადა, ლაქა, ქალი    | დაითქლა | 6×5  |         70 |
|   186 | ანწლი, ნალი, წიგნი, ნაწილი, წილი   | წლგნაიი | 7×5  |         72 |
|   187 | სანდო, პონი, საპონი, სპა, ოდა      | ოასდპნი | 7×5  |         66 |
|   188 | პიცა, რეპი, საცერი, სერია, პრესა   | აიესცრპ | 6×5  |         72 |
|   189 | ზღარბი, ღუზა, აუზი, ბურღი, ბაღი    | იბრაუღზ | 7×5  |         70 |
|   190 | ცუდი, ცრუ, ურემი, მცირე, ცური      | ედრუცმი | 7×5  |         64 |
|   191 | დენი, ცხადი, ცხენი, ხედი, ციხე     | ცდნიხაე | 7×5  |         66 |
|   192 | ცივი, ცხიმი, იხვი, სხივი, სიმი     | იცვხმის | 7×5  |         66 |
|   193 | ბანაკი, ბინა, კაბინა, კაბა, ნაკლი  | ნკალაბი | 6×5  |         74 |
|   194 | სეზონი, ოზონი, სოიო, ეზო, ზნე      | ეზონოსი | 7×5  |         66 |
|   195 | ზავი, ვაზი, კვოტა, კოვზი, აზოტი    | იზატოვკ | 7×5  |         68 |
|   196 | სესია, დასი, სევდა, დევი, სავსე    | სსვეაიდ | 7×5  |         68 |
|   197 | თონე, ფენი, ფონდი, დენთი, დონე     | ეფთიდნო | 7×5  |         66 |
|   198 | კაკალი, ალი, კალია, კოალა, კაკაო   | ოკალიაკ | 7×5  |         72 |
|   199 | მხარი, ფხა, ხურმა, ხუფი, მუხა      | არიხმუფ | 7×5  |         64 |
|   200 | ბზარი, ბზა, ბრაზი, იაფი, აზრი      | ზიირაფბ | 7×5  |         64 |
|   201 | ბინდი, ბიჭი, ნიჭი, ბენდი, ბეჭი     | ინდბეიჭ | 7×5  |         66 |
|   202 | წვენი, თვე, წნევა, წვეთი, წავი     | ეავწნთი | 7×5  |         66 |
|   203 | წმინდა, ნამი, წინდა, ტანი, წამი    | ნიმტწდა | 7×5  |         70 |
|   204 | ქოხი, სქესი, სესხი, სისქე, სიო     | ხსესიოქ | 7×5  |         66 |
|   205 | კაცი, კეცი, სცენა, აკნე, ანკესი    | ნაიცესკ | 7×5  |         70 |
|   206 | ხალი, ოვალი, ხროვა, ლორი, ხვალ     | ხალიროვ | 6×5  |         66 |
|   207 | ეტლი, მელა, მლაშე, მეტალი, შალი    | ლიტმეშა | 7×5  |         70 |
|   208 | ფოთოლი, ტილო, ფოტო, ფლოტი, ტოლი    | იტლთფოო | 6×5  |         70 |
|   209 | პრიზი, პირი, ზურგი, გრიპი, პური    | რუგიიზპ | 7×5  |         68 |
|   210 | შტო, ოსპი, შოლტი, პოსტი, სპილო     | სოპტშლი | 7×5  |         66 |
|   211 | მუმია, მუდამ, უმი, ქუდი, მუქი      | აუიმმდქ | 7×5  |         64 |
|   212 | ფესვი, ფილე, ქსელი, ელფი, სქელი    | ფეიქლვს | 7×5  |         68 |
|   213 | ვიზა, ზონა, გაზი, ვაგონი, გვიან    | ზგიანოვ | 6×5  |         70 |
|   214 | ხრიკი, კიტრი, ჩიხი, ჩირი, ჩიტი     | ირკხიჩტ | 7×5  |         66 |
|   215 | გოჭი, საჭირო, ასო, გორა, გარსი     | გოარისჭ | 6×5  |         68 |
|   216 | გვერდი, ბედი, ერი, გერბი, გედი     | ვგერდბი | 7×5  |         68 |
|   217 | ლითონი, იოლი, ნოხი, ხილი, თხილი    | თიოინხლ | 7×5  |         70 |
|   218 | ავად, ვადა, სადავო, ცოდვა, დავა    | ააოვდსც | 6×5  |         70 |
|   219 | ჯიში, ნიშა, ჯინსი, შანსი, ჯანი     | ჯშნიასი | 7×5  |         66 |
|   220 | ნავი, ტვინი, ყინვა, ტყავი, ტყვია   | ტნივყაი | 7×5  |         70 |
|   221 | აბი, ბუჩქი, ჩაქუჩი, ქუჩა, ჩაი      | ბუიქჩაჩ | 6×5  |         66 |
|   222 | ბელი, გუბე, მგელი, გემი, ბმული     | უბეგლმი | 7×5  |         66 |
|   223 | ხალხი, სახლი, მსხალი, ასლი, ხამი   | ისამლხხ | 7×5  |         72 |
|   224 | ნელი, რძე, ძეგლი, გენი, გრძელი     | ილერნძგ | 7×5  |         68 |
|   225 | ბალი, ბოლი, ჭაობი, ჭალა, ბაჭია     | ბაალჭიო | 7×5  |         66 |
|   226 | ჯილდო, ჯოგი, ჯორი, გოლი, რგოლი     | ოიჯდგრლ | 6×5  |         66 |
|   227 | ისარი, საღი, ტარი, ღირსი, საიტი    | ღისტრია | 7×5  |         68 |
|   228 | კოჭი, ნაოჭი, ჭოკი, კანონი, კოჭა    | ნკჭიაონ | 7×5  |         70 |
|   229 | ბირჟა, კაჟი, ჟანრი, აკრი, ბანკი    | ნირბაჟკ | 7×5  |         68 |
|   230 | დილა, ვილა, ხიდი, ადვილი, დახლი    | ხაიილდვ | 6×5  |         70 |
|   231 | თითი, თემი, ირემი, მერი, თეთრი     | იირმთთე | 7×5  |         66 |
|   232 | გველი, გლუვი, ლუწი, ველი, წელი     | ივულეწგ | 7×5  |         66 |
|   233 | გრამი, გიტარა, იარა, მაგარი, ატამი | აგმარიტ | 7×5  |         76 |
|   234 | მძივი, მითი, ძვირი, ძირი, ვირი     | ვითძიმრ | 7×5  |         66 |
|   235 | აბანო, თაობა, თხა, ხბო, თანხა      | ოანთხაბ | 7×5  |         64 |
|   236 | კალა, იჯარა, რკალი, ჯარი, აჯიკა    | ჯაკირლა | 6×5  |         68 |
|   237 | ნაძვი, აკვანი, ძია, კვანძი, ანძა   | ნკძიაავ | 7×5  |         72 |
|   238 | მაგიდა, დრამა, დარი, არმია, მარაგი | არდგიმა | 7×5  |         76 |
|   239 | მარკა, მხარე, ხმა, კამა, კამერა    | მრააეკხ | 7×5  |         70 |
|   240 | კობრა, კონა, ბანი, კინო, ბორანი    | კბნაორი | 7×5  |         70 |
