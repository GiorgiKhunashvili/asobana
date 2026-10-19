# Journey vocabulary and campaign review — revision 17

The owner explicitly approved all **130 words in expansion batch 02** for the main
word list. All 1,091 previous approvals remain, bringing the pool to **1,221**.
The reference dictionary now has 1,442 entries, with **1,339 playable spellings**:
1,221 required-eligible and 118 additional bonus-only words. Historical reference
entries are preserved exactly. New entries retain individually checked source
revision URLs, ordinary noun/adjective senses and owner approval records in
[the batch](VOCABULARY_EXPANSION_BATCH_02.json) and
[the allowlist](../content/dictionaries/everyday-targets-v17.json).

## Measured results

| Measure                               | Revision 16 | Revision 17 |
| ------------------------------------- | ----------: | ----------: |
| Levels / journey stops                |    240 / 48 |    240 / 48 |
| Required answer slots                 |       1,200 |       1,200 |
| Approved required words               |       1,091 |       1,221 |
| Distinct required words               |         865 |         953 |
| Repeated slots after first appearance |         335 |         247 |
| Unused approvals                      |         226 |         268 |
| Minimum repeat gap                    |          75 |          75 |

Repeated answer slots decrease by **26.27%**.
The new campaign uses **73 of the 130 new approvals**; 57
remain eligible but unused. Overall, 132 spellings enter the campaign and
44 previously used spellings leave it, for a net gain of 88.
Bonus appearances are not included in required-word repetition counts.

| Required appearances | Distinct words |
| -------------------: | -------------: |
|                    1 |            730 |
|                    2 |            199 |
|                    3 |             24 |

Repeat gaps range from 75 to 227 levels. All accepted variants are
canonical-only. Required slots by length: 117 three-letter,
552 four-letter, 409 five-letter and 122 six-letter answers.
Five-letter answers begin at level 3 and six-letter answers at level 18.

## Rules and editorial audit

All 953 distinct required spellings and all 1,200 answer slots were checked
against the exact allowlist, recorded glosses, individual owner decisions and
source provenance. The new 130 entries were checked against fixed source revisions
when preparing the batch and approved by the owner in this request. This rebuild
claims no additional native-speaker review. No plurals occur as required answers
or variants. All 47 reserved bonus spellings, all 53 full-pool exclusions, all 12
unused-pool exclusions and all earlier grammar/barbarism restrictions remain enforced.
Every eligible formable extra is recognized as a bonus.

All boards retain five answers, the 75-level repeat gap, exact tile multiplicities,
unique wheels, connected crossings, no accidental runs, length progression,
six-letter quotas, chapter challenge/recovery pacing and phone layout gates.
Difficulty estimates do not replace playtesting.

## Optimization limits and expansion planning

The search extends prior valid board candidates with new compatible wheels and
crossings, compares complete campaigns and optimizes distinct coverage before
heavy reuse. It is bounded and does not prove a global optimum or that unused
approvals are impossible to place. All 130 new words have individual draft examples;
placing one independently is less constrained than fitting it into a full campaign.

Another **279 approvals** reach the 1,500-word goal. At five answers per level,
1,500 distinct words could fill at most 300 levels without repetition, assuming
all can be assembled under every rule. At 240 levels there would be 300 spare
approved words; at 300 there would be no spare capacity. At 360 levels, at least
300 of the 1,800 slots would repeat (16.67%), even if all 1,500 words were used.
These are arithmetic bounds, not feasibility guarantees. Additional levels can
use spaced repeats, but new boards, stops, destinations and pacing need separate
review. This revision keeps the authorized 240 levels and 48 stops.

## Compatibility and reproducibility

Historical packs, allowlists and reference dictionaries remain unchanged. Stable
pack, level and journey identities are retained. Revision-17 migration supports
all previous revisions and preserves completed levels, partial solved credits,
coins, paid hints, postcards and lifetime bonus rewards across restart. The hint
compatibility ceiling is 1,418 (revision 16's 1,376 plus a replacement board).
Continuing answers retain their IDs on the same board.

Reviewed draft SHA-256: `1fa6db10f64e2d851a243788157acdf3bfc337b73e6405cd3889cda87b184295`.

Rebuild with `scripts/rebuild-wide-content.py --revision 17`. Promotion requires
`--promote-reviewed` and the reviewed exact draft. Recipes rebuild independently
of search artifacts.

## Validation

Completed on 2026-10-18:

- `npm run check`: passed TypeScript, ESLint, 225 tests across 28 suites,
  validation and automated solving of all 240 levels, and repository formatting.
- `uv run pytest`: 128 passed, including exact new approvals, historical reference
  preservation, deterministic rebuilding, source linkage and complete bonus coverage.
- `uv run ruff check .`, `uv run ruff format --check .` and `uv run mypy src`:
  all passed. These runs used the local offline uv cache.
- `npx expo export --platform ios`: passed; output in `mobile/dist`.
- SQLite migration/restart coverage includes revision-16 partial and completed
  progress, historical maximum paid-hint counts, another hint after migration,
  coins, settings, postcards and lifetime bonus rewards.
- All 55 preexisting content/policy JSON files match their before-edit SHA-256
  digests. `git diff --check` passed.

The iOS export is a bundle check, not a native-device test or TestFlight upload.
No global-optimality claim or additional native-speaker review is implied.

## Unused approved words (268)

| Word   | Recorded meaning            | Approval | Source                                                                      |
| ------ | --------------------------- | -------- | --------------------------------------------------------------------------- |
| აბზაცი | paragraph                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=აბზაცი&oldid=91914485) |
| აგენტი | agent                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114) |
| ადგილი | place                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114) |
| ავდარი | bad weather, rainy weather  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279) |
| ავტორი | author                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573) |
| აივანი | balcony                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190) |
| ალმასი | diamond                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482) |
| ამბავი | story, news                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516) |
| ამინდი | weather                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550) |
| ანბანი | alphabet                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407) |
| ანდაზა | proverb                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575) |
| ანემია | anemia                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანემია&oldid=84097334) |
| ანკეტა | questionnaire               | Retained | [source](https://en.wiktionary.org/w/index.php?title=ანკეტა&oldid=84112645) |
| არსება | creature; being             | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=არსება&oldid=88400654) |
| არწივი | eagle                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068) |
| ასანთი | match                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032) |
| ასკილი | dog rose                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ასკილი&oldid=88091340) |
| ატლასი | atlas                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ატლასი&oldid=84097471) |
| აფთარი | hyena                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116) |
| აქცია  | action, promotion           | Retained | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)  |
| აღვირი | bridle                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=აღვირი&oldid=92127736) |
| ბადაგი | grape syrup                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბადაგი&oldid=92290638) |
| ბავშვი | child                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503) |
| ბაზარი | market                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284) |
| ბალახი | grass                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალახი&oldid=85585178) |
| ბალიში | pillow, cushion             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170) |
| ბანანი | banana                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335) |
| ბარათი | card; letter                | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ბარათი&oldid=85067525) |
| ბარტყი | chick                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362) |
| ბაქანი | platform                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაქანი&oldid=84113388) |
| ბაწარი | string, cord                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბაწარი&oldid=92228016) |
| ბეკონი | bacon                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047) |
| ბერეტი | beret                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646) |
| ბეტონი | concrete                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651) |
| ბეღელი | granary                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეღელი&oldid=84113473) |
| ბეღურა | sparrow                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232) |
| ბეჭედი | ring                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424) |
| ბზიკი  | wasp                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბზიკი&oldid=84113490)  |
| ბილიკი | path                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672) |
| ბირთვი | core                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბირთვი&oldid=84113525) |
| ბიძგი  | push                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბიძგი&oldid=84097695)  |
| ბოლქვი | bulb                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბოლქვი&oldid=84097704) |
| ბოროტი | evil; wicked                | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ბოროტი&oldid=92228020) |
| ბორცვი | hillock                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბორცვი&oldid=84097714) |
| ბრინჯი | rice                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506) |
| ბუსუსი | fuzz                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუსუსი&oldid=84097785) |
| ბუჩქი  | bush, shrub                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)  |
| ბუხარი | fireplace                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056) |
| გაზეთი | newspaper                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807) |
| გეგმა  | plan                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)  |
| გვალვა | drought                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=გვალვა&oldid=92490376) |
| გოგო   | girl                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)   |
| გრძელი | long                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966) |
| დარაჯი | guard                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652) |
| დეტალი | detail                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=დეტალი&oldid=85506724) |
| დოლარი | dollar                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=დოლარი&oldid=84098241) |
| ესკიზი | sketch                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ესკიზი&oldid=84114959) |
| ექთანი | nurse                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646) |
| ეშმაკი | devil                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ეშმაკი&oldid=85068322) |
| ველური | wild                        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ველური&oldid=84090127) |
| ვენახი | vineyard                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996) |
| ვეფხვი | tiger                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960) |
| ზაზუნა | hamster                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134) |
| ზარალი | loss                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744) |
| ზოგადი | general                     | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ზოგადი&oldid=84090161) |
| ზღარბი | hedgehog                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278) |
| თამადა | toastmaster                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151) |
| თამაში | game                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028) |
| თარიღი | date                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319) |
| თეატრი | theatre                     | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=თეატრი&oldid=89024711) |
| თეთრი  | white                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)  |
| თეფში  | plate                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)  |
| თოჯინა | doll                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714) |
| თუნუქი | tin plate                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=თუნუქი&oldid=84098722) |
| თხილი  | hazelnut                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)  |
| იარაღი | weapon, tool                | Retained | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054) |
| იატაკი | floor                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760) |
| იდაყვი | elbow                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=იდაყვი&oldid=90005976) |
| ილუზია | illusion                    | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ილუზია&oldid=68794707) |
| კაბელი | cable                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959) |
| კაკაბი | partridge                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაკაბი&oldid=84115977) |
| კალათა | basket                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984) |
| კამერა | chamber                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969) |
| კამეჩი | buffalo                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კამეჩი&oldid=84116010) |
| კანონი | law                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329) |
| კაპიკი | kopeck                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კაპიკი&oldid=84116027) |
| კარადა | cupboard, wardrobe, closet  | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032) |
| კარავი | tent                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033) |
| კარატე | karate                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608) |
| კედელი | wall                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872) |
| კეთილი | kind                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581) |
| კენკრა | berry                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952) |
| კვირტი | bud                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კვირტი&oldid=84116143) |
| კლანჭი | claw                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695) |
| კოლოფი | box                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231) |
| კომეტა | comet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201) |
| კომოდი | chest of drawers            | Retained | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206) |
| კონუსი | cone                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კონუსი&oldid=84099277) |
| კონცხი | cape                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კონცხი&oldid=84099289) |
| კოღო   | mosquito                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)   |
| კოცონი | bonfire                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332) |
| კუთხე  | corner                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)  |
| კულული | curl                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=კულული&oldid=84099390) |
| კურკა  | fruit stone                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)  |
| ლაზერი | laser                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416) |
| ლამაზი | beautiful                   | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ლამაზი&oldid=84116431) |
| ლექცია | lecture                     | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ლექცია&oldid=88917235) |
| ლიდერი | leader                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ლიდერი&oldid=84116502) |
| ლოგიკა | logic                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ლოგიკა&oldid=88153159) |
| ლულა   | barrel of a gun             | Retained | [source](https://en.wiktionary.org/w/index.php?title=ლულა&oldid=84103557)   |
| მამალი | rooster                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460) |
| მანერა | manner                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=მანერა&oldid=84099636) |
| მასალა | material                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175) |
| მატყლი | wool                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270) |
| მეთოდი | method                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მეთოდი&oldid=84099800) |
| მიზეზი | reason                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მიზეზი&oldid=84099946) |
| მკაცრი | strict                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მკაცრი&oldid=84088882) |
| მკერდი | chest; breast               | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მკერდი&oldid=84117115) |
| მოდელი | model                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844) |
| მონეტა | coin                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079) |
| მოტივი | motif                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მოტივი&oldid=84100123) |
| მოხუცი | elderly person              | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მოხუცი&oldid=88799725) |
| მტრედი | pigeon, dove                | Retained | [source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351) |
| მღვიმე | cavern                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497) |
| მძივი  | bead                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=მძივი&oldid=84100240)  |
| მძიმე  | heavy                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მძიმე&oldid=81821575)  |
| მძღოლი | driver                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=მძღოლი&oldid=88648707) |
| მწვანე | green                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780) |
| ნაბადი | felt cloak                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951) |
| ნაბიჯი | footstep                    | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ნაბიჯი&oldid=92709978) |
| ნაგავი | rubbish                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259) |
| ნადიმი | feast                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506) |
| ნათელი | bright; clear               | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ნათელი&oldid=85476155) |
| ნათურა | light bulb                  | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ნათურა&oldid=88113865) |
| ნაკადი | gush, spurt, squirt, stream | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276) |
| ნალექი | precipitation               | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნალექი&oldid=84117542) |
| ნაცარი | ash                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231) |
| ნახატი | picture                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603) |
| ნახირი | cattle herd                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნახირი&oldid=84117611) |
| ნიმუში | sample                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676) |
| ნიშანი | sign                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468) |
| ნომერი | number label; hotel room    | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ნომერი&oldid=84117710) |
| ობობა  | spider                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)  |
| ოზონი  | ozone                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ოზონი&oldid=88005804)  |
| ორბიტა | orbit                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483) |
| პანელი | panel                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პანელი&oldid=84100554) |
| პანიკა | panic                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=პანიკა&oldid=84117941) |
| პაპი   | pope                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაპი&oldid=84103471)   |
| პაროლი | password                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601) |
| პასტა  | paste                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)  |
| პასუხი | answer                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=პასუხი&oldid=85067528) |
| პატივი | honor                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548) |
| პენსია | pension                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867) |
| პილოტი | pilot                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538) |
| პირადი | personal; private           | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=პირადი&oldid=84090793) |
| პირობა | promise; requirement        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=პირობა&oldid=85541139) |
| პლედი  | plaid blanket               | Retained | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)  |
| პრინცი | prince                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987) |
| ჟელე   | jelly                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)   |
| ჟოლო   | raspberry                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)   |
| რიცხვი | number; day of the month    | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=რიცხვი&oldid=85067546) |
| რობოტი | robot                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=რობოტი&oldid=87787728) |
| რომანი | novel                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=რომანი&oldid=84101101) |
| საბელი | leash                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=საბელი&oldid=84118453) |
| საბუთი | document                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=საბუთი&oldid=84107021) |
| საგანი | object, subject             | Retained | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780) |
| საერთო | common; shared              | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=საერთო&oldid=88645820) |
| სალათა | salad                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797) |
| სამეფო | kingdom                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981) |
| საფულე | wallet                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843) |
| საღამო | evening                     | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=საღამო&oldid=88849236) |
| საცერი | sieve                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=საცერი&oldid=84118875) |
| საცობი | stopper; traffic jam        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=საცობი&oldid=84118876) |
| საჭირო | necessary                   | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=საჭირო&oldid=88605887) |
| სახელი | name; fame                  | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სახელი&oldid=84118897) |
| საჯარო | public                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=საჯარო&oldid=43853043) |
| სეზონი | season                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სეზონი&oldid=84118932) |
| სეტყვა | hail                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560) |
| სიახლე | novelty; innovation         | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სიახლე&oldid=88800054) |
| სიგრძე | length                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სიგრძე&oldid=84119000) |
| სივრცე | space; area                 | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სივრცე&oldid=84119003) |
| სისხლი | blood                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162) |
| სიღრმე | depth                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სიღრმე&oldid=84101569) |
| სიცივე | coldness, frigidity         | Retained | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113) |
| სკვერი | public square               | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142) |
| სკივრი | chest                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სკივრი&oldid=84101617) |
| სორო   | burrow                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=სორო&oldid=88091310)   |
| სოფელი | village                     | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სოფელი&oldid=88647104) |
| სტატია | article                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457) |
| სუსტი  | weak                        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სუსტი&oldid=89906555)  |
| სფერო  | sphere; field               | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სფერო&oldid=84101765)  |
| სწორი  | correct; straight           | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სწორი&oldid=89024858)  |
| სწრაფი | quick                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=სწრაფი&oldid=84119316) |
| სხეული | body                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318) |
| სხვენი | attic                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322) |
| ტალღა  | wave                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)  |
| ტექსტი | text                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105) |
| ტვირთი | load                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860) |
| ტკბილი | sweet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168) |
| ტომარა | sack                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123) |
| ტომატი | tomato concentrate          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტომატი&oldid=89872964) |
| ტრავმა | trauma; injury              | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ტრავმა&oldid=84119433) |
| ტყუპი  | twin                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)  |
| უბრალო | simple                      | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=უბრალო&oldid=75271163) |
| უდაბნო | desert                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660) |
| უცნობი | unknown; unfamiliar         | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=უცნობი&oldid=84089062) |
| უჯრედი | cell                        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=უჯრედი&oldid=85068642) |
| ფაქიზი | delicate                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფაქიზი&oldid=84091230) |
| ფიზიკა | physics                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730) |
| ფილტვი | lung                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916) |
| ფილტრი | filter                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240) |
| ფირუზი | turquoise                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფირუზი&oldid=84088596) |
| ფიფქი  | snowflake                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)  |
| ფლეიტა | flute                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფლეიტა&oldid=92228066) |
| ფოკუსი | stunt, trick                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფოკუსი&oldid=84102291) |
| ფსკერი | bottom                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფსკერი&oldid=84119972) |
| ფუნტი  | pound                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)  |
| ფუნჯი  | brush                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)  |
| ფქვილი | flour                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987) |
| ქაბაბი | kebab                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993) |
| ქათამი | chicken                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996) |
| ქალაქი | city                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093) |
| ქვევრი | qvevri wine vessel          | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687) |
| ქვისლი | co-brother-in-law           | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქვისლი&oldid=88662328) |
| ქინძი  | coriander                   | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)  |
| ქლიავი | plum                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131) |
| ქომაგი | defender                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქომაგი&oldid=91733127) |
| ქურქი  | fur coat                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ქურქი&oldid=84224158)  |
| ღარიბი | poor                        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ღარიბი&oldid=84120206) |
| ღელე   | brook                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღელე&oldid=84120207)   |
| ღვიძლი | liver                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ღვიძლი&oldid=92719057) |
| ღუმელი | stove                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256) |
| ყინული | ice                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551) |
| შაბათი | Saturday                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658) |
| შაქარი | sugar                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621) |
| შუქურა | lighthouse                  | Retained | [source](https://en.wiktionary.org/w/index.php?title=შუქურა&oldid=91715399) |
| ჩანთა  | bag                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)  |
| ჩარჩო  | frame                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)  |
| ჩვევა  | habit                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)  |
| ჩოგანი | racket                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726) |
| ჩონჩხი | skeleton                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089) |
| ჩრდილი | shade                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977) |
| ცენტრი | center                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748) |
| ცოტა   | a little; few               | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)   |
| ცრემლი | tear from the eyes          | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ცრემლი&oldid=84120880) |
| ცუდი   | bad                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)   |
| ცხვარი | sheep                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538) |
| ძრავა  | engine                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)  |
| წითელი | red                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641) |
| წიწაკა | pepper                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068) |
| წიწილა | chick                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124) |
| წყარო  | spring                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)  |
| წყვილი | pair                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227) |
| წყნარი | quiet                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680) |
| ჭაღარა | gray-haired                 | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183) |
| ჭაჭა   | grape pomace                | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)   |
| ჭვავი  | rye                         | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭვავი&oldid=87901803)  |
| ჭუჭყი  | dirt                        | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)  |
| ხაბაზი | baker                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხაბაზი&oldid=84121183) |
| ხვრელი | hole                        | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ხვრელი&oldid=91740623) |
| ხმაური | noise                       | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ხმაური&oldid=84103029) |
| ხოჭო   | beetle                      | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)   |
| ხუნდი  | shackle                     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)  |
| ჯიუტი  | stubborn                    | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)  |
| ჯიხვი  | Caucasian mountain goat     | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)  |
| ჯიხური | kiosk                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096) |
| ჯოკერი | joker card                  | Batch 02 | [source](https://en.wiktionary.org/w/index.php?title=ჯოკერი&oldid=84121451) |
| ჯუჯა   | dwarf                       | Retained | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)   |

## All required words

| Word   | Recorded meaning                                    | Levels       | Source                                                                      |
| ------ | --------------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 235          | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)  |
| აბი    | pill                                                | 39, 141, 218 | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)    |
| აბჯარი | armor                                               | 182          | [source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412) |
| აგური  | brick                                               | 63, 147      | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)  |
| ადათი  | custom                                              | 135          | [source](https://en.wiktionary.org/w/index.php?title=ადათი&oldid=84112201)  |
| ადვილი | easy                                                | 186          | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563) |
| ადრე   | early; previously                                   | 102          | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| ავად   | ill, sick                                           | 2, 155       | [source](https://en.wiktionary.org/w/index.php?title=ავად&oldid=88672971)   |
| ავაზა  | cheetah                                             | 158          | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)  |
| ავარია | accident                                            | 158          | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031) |
| ავეჯი  | furniture                                           | 104          | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)  |
| ავზი   | tank, sink                                          | 4, 158       | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)   |
| ავი    | wicked, evil                                        | 3, 109, 196  | [source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)    |
| აზოტი  | nitrogen                                            | 206          | [source](https://en.wiktionary.org/w/index.php?title=აზოტი&oldid=87888146)  |
| აზრი   | thought, opinion                                    | 4, 119       | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)   |
| აკვანი | cradle                                              | 223          | [source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814) |
| აკნე   | acne                                                | 52, 222      | [source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)   |
| აკრი   | acre                                                | 10, 154      | [source](https://en.wiktionary.org/w/index.php?title=აკრი&oldid=84097213)   |
| ალბომი | album                                               | 199          | [source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197) |
| ალი    | blaze, flame, fire                                  | 17, 128, 208 | [source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)    |
| ალიონი | dawn                                                | 167          | [source](https://en.wiktionary.org/w/index.php?title=ალიონი&oldid=84112474) |
| ალოე   | aloe                                                | 165          | [source](https://en.wiktionary.org/w/index.php?title=ალოე&oldid=84112485)   |
| ალფა   | alpha                                               | 29           | [source](https://en.wiktionary.org/w/index.php?title=ალფა&oldid=84097261)   |
| ალღო   | intuition                                           | 167          | [source](https://en.wiktionary.org/w/index.php?title=ალღო&oldid=84097265)   |
| ალყა   | siege                                               | 140          | [source](https://en.wiktionary.org/w/index.php?title=ალყა&oldid=84112502)   |
| ამპერი | ampere                                              | 33           | [source](https://en.wiktionary.org/w/index.php?title=ამპერი&oldid=84097293) |
| ამწე   | crane                                               | 177          | [source](https://en.wiktionary.org/w/index.php?title=ამწე&oldid=33588412)   |
| ანკესი | fishing hook                                        | 222          | [source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188) |
| ანძა   | mast                                                | 223          | [source](https://en.wiktionary.org/w/index.php?title=ანძა&oldid=84097365)   |
| ანწლი  | elderberry                                          | 181          | [source](https://en.wiktionary.org/w/index.php?title=ანწლი&oldid=87817176)  |
| არაყი  | vodka                                               | 137          | [source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)  |
| არენა  | arena                                               | 170          | [source](https://en.wiktionary.org/w/index.php?title=არენა&oldid=84097397)  |
| არია   | aria                                                | 18, 182      | [source](https://en.wiktionary.org/w/index.php?title=არია&oldid=89954997)   |
| არმია  | army                                                | 18, 238      | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)  |
| არსი   | essence                                             | 93, 168      | [source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)   |
| არფა   | harp                                                | 66, 227      | [source](https://en.wiktionary.org/w/index.php?title=არფა&oldid=93122307)   |
| არქივი | archive                                             | 213          | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427) |
| არხი   | canal                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)   |
| ასაკი  | age                                                 | 112          | [source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)  |
| ასთმა  | asthma                                              | 70           | [source](https://en.wiktionary.org/w/index.php?title=ასთმა&oldid=84097441)  |
| ასლი   | copy                                                | 23, 160, 236 | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)   |
| ასო    | alphabet letter                                     | 50, 134, 209 | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატამი  | peach                                               | 240          | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატომი  | atom                                                | 61           | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)  |
| აუზი   | pool                                                | 55, 147      | [source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)   |
| აუტი   | throw-in                                            | 87, 216      | [source](https://en.wiktionary.org/w/index.php?title=აუტი&oldid=39552798)   |
| აფიშა  | poster                                              | 227          | [source](https://en.wiktionary.org/w/index.php?title=აფიშა&oldid=84983656)  |
| აფრა   | sail                                                | 66           | [source](https://en.wiktionary.org/w/index.php?title=აფრა&oldid=84113118)   |
| აქლემი | camel                                               | 118          | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908) |
| აჩმა   | achma cheese pastry                                 | 164          | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)   |
| ახალი  | new; fresh                                          | 164          | [source](https://en.wiktionary.org/w/index.php?title=ახალი&oldid=88893525)  |
| აჯიკა  | adjika                                              | 49, 228      | [source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)  |
| ბაბუა  | grandfather, grandpa                                | 221          | [source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)  |
| ბაგე   | lip                                                 | 60           | [source](https://en.wiktionary.org/w/index.php?title=ბაგე&oldid=92454114)   |
| ბაგირი | cable, heavy rope                                   | 171          | [source](https://en.wiktionary.org/w/index.php?title=ბაგირი&oldid=89591122) |
| ბადე   | net                                                 | 98           | [source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)   |
| ბაზა   | base                                                | 29, 221      | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)   |
| ბაიტი  | byte                                                | 75           | [source](https://en.wiktionary.org/w/index.php?title=ბაიტი&oldid=89301890)  |
| ბალეტი | ballet                                              | 98           | [source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557) |
| ბალთა  | buckle                                              | 29           | [source](https://en.wiktionary.org/w/index.php?title=ბალთა&oldid=84097562)  |
| ბალი   | sweet cherry                                        | 17, 199      | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ბამბა  | cotton, cotton wool                                 | 221          | [source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)  |
| ბანაკი | camp                                                | 183          | [source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693) |
| ბანი   | bass voice                                          | 80, 194      | [source](https://en.wiktionary.org/w/index.php?title=ბანი&oldid=92486488)   |
| ბანკი  | bank                                                | 80           | [source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)  |
| ბანქო  | playing cards                                       | 41           | [source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)  |
| ბარგი  | luggage                                             | 171          | [source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)  |
| ბარდა  | pea                                                 | 72           | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)  |
| ბარი   | valley                                              | 72, 152      | [source](https://en.wiktionary.org/w/index.php?title=ბარი&oldid=92290776)   |
| ბატი   | goose                                               | 75, 189      | [source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)   |
| ბატონი | sir                                                 | 46           | [source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444) |
| ბაფთა  | bow knot                                            | 29           | [source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)  |
| ბაღი   | garden                                              | 116          | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)   |
| ბაყაყი | frog                                                | 218          | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131) |
| ბაჭია  | young rabbit                                        | 218          | [source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)  |
| ბგერა  | sound                                               | 60           | [source](https://en.wiktionary.org/w/index.php?title=ბგერა&oldid=88996488)  |
| ბებია  | grandmother, grannie, granny                        | 58           | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)  |
| ბედი   | fate; luck                                          | 115          | [source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)   |
| ბევრი  | many; much                                          | 144          | [source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)  |
| ბელი   | bear cub                                            | 98           | [source](https://en.wiktionary.org/w/index.php?title=ბელი&oldid=91740617)   |
| ბენდი  | band                                                | 51, 226      | [source](https://en.wiktionary.org/w/index.php?title=ბენდი&oldid=90750378)  |
| ბერი   | monk                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)   |
| ბეწვი  | fur, pile                                           | 144          | [source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)  |
| ბეჭი   | shoulder blade                                      | 226          | [source](https://en.wiktionary.org/w/index.php?title=ბეჭი&oldid=89438383)   |
| ბზა    | box tree                                            | 29, 119, 221 | [source](https://en.wiktionary.org/w/index.php?title=ბზა&oldid=84113487)    |
| ბზარი  | crack                                               | 17, 119      | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)  |
| ბილეთი | ticket                                              | 150          | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670) |
| ბინა   | apartment                                           | 58, 183      | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)   |
| ბინდი  | twilight                                            | 226          | [source](https://en.wiktionary.org/w/index.php?title=ბინდი&oldid=85068323)  |
| ბირჟა  | exchange                                            | 119          | [source](https://en.wiktionary.org/w/index.php?title=ბირჟა&oldid=84113535)  |
| ბიურო  | bureau                                              | 42           | [source](https://en.wiktionary.org/w/index.php?title=ბიურო&oldid=84097685)  |
| ბიცოლა | aunt                                                | 199          | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800) |
| ბიძა   | uncle                                               | 94           | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)   |
| ბიჭი   | boy                                                 | 121          | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| ბლოკი  | building block                                      | 6            | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                  |
| ბმული  | link                                                | 215          | [source](https://en.wiktionary.org/w/index.php?title=ბმული&oldid=84113566)  |
| ბნელი  | dark                                                | 51           | [source](https://en.wiktionary.org/w/index.php?title=ბნელი&oldid=91740783)  |
| ბოთლი  | bottle                                              | 113          | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)  |
| ბოლი   | smoke                                               | 5, 138       | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)   |
| ბოლო   | end                                                 | 138          | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)   |
| ბოლოკი | radish                                              | 138          | [source](https://en.wiktionary.org/w/index.php?title=ბოლოკი&oldid=91412000) |
| ბორანი | ferry                                               | 194          | [source](https://en.wiktionary.org/w/index.php?title=ბორანი&oldid=84097707) |
| ბოსელი | cowshed                                             | 113          | [source](https://en.wiktionary.org/w/index.php?title=ბოსელი&oldid=84097715) |
| ბოძი   | pole                                                | 94           | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)   |
| ბრაზი  | anger                                               | 17           | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)  |
| ბრალი  | fault                                               | 17           | [source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)  |
| ბრბო   | crowd                                               | 7            | [source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)   |
| ბრმა   | blind                                               | 94, 182      | [source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)   |
| ბროლი  | crystal                                             | 5            | [source](https://en.wiktionary.org/w/index.php?title=ბროლი&oldid=84097739)  |
| ბუდე   | nest                                                | 51           | [source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)   |
| ბუზი   | fly                                                 | 156          | [source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)   |
| ბუკი   | trumpet                                             | 6, 156       | [source](https://en.wiktionary.org/w/index.php?title=ბუკი&oldid=88002801)   |
| ბუნება | nature                                              | 58           | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241) |
| ბურთი  | ball                                                | 152          | [source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)  |
| ბურღი  | drill                                               | 42           | [source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)  |
| ბუტკო  | pistil                                              | 106          | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)  |
| ბუშტი  | bubble, balloon                                     | 75           | [source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)  |
| გაზი   | gas                                                 | 210          | [source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)   |
| გალია  | cage                                                | 207          | [source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)  |
| განძი  | treasure                                            | 89           | [source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)  |
| გარეთ  | outside                                             | 172          | [source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)  |
| გარემო | environment                                         | 102          | [source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637) |
| გარსი  | shell                                               | 93           | [source](https://en.wiktionary.org/w/index.php?title=გარსი&oldid=84097862)  |
| გედი   | swan                                                | 115          | [source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)   |
| გემი   | ship                                                | 79, 215      | [source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)   |
| გემო   | palate, taste                                       | 103          | [source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)   |
| გენი   | gene                                                | 125          | [source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)   |
| გერბი  | coat of arms                                        | 115          | [source](https://en.wiktionary.org/w/index.php?title=გერბი&oldid=90290436)  |
| გვარი  | surname                                             | 93           | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)  |
| გველი  | snake, serpent                                      | 71           | [source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)  |
| გვერდი | page; side                                          | 115          | [source](https://en.wiktionary.org/w/index.php?title=გვერდი&oldid=88051247) |
| გვიან  | late                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| გზა    | way, path, road                                     | 172          | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გიტარა | guitar                                              | 240          | [source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739) |
| გლეხი  | peasant; countryman                                 | 103          | [source](https://en.wiktionary.org/w/index.php?title=გლეხი&oldid=88065505)  |
| გლუვი  | smooth                                              | 159          | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)  |
| გმირი  | hero                                                | 79           | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)  |
| გობი   | wooden platter                                      | 46, 134      | [source](https://en.wiktionary.org/w/index.php?title=გობი&oldid=87900106)   |
| გოლი   | goal in sport                                       | 19, 165      | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)   |
| გორა   | hill                                                | 102          | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)   |
| გოჭი   | piglet                                              | 134          | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)   |
| გრამი  | gram                                                | 240          | [source](https://en.wiktionary.org/w/index.php?title=გრამი&oldid=91716527)  |
| გრილი  | cool, breezy, chilly                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)  |
| გუბე   | puddle                                              | 215          | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)   |
| გუდა   | leather bag, wineskin                               | 31           | [source](https://en.wiktionary.org/w/index.php?title=გუდა&oldid=88091499)   |
| გული   | heart                                               | 159          | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)   |
| გუნდი  | choir; team                                         | 31           | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)  |
| გუშინ  | yesterday                                           | 89           | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| დაბა   | small town                                          | 72           | [source](https://en.wiktionary.org/w/index.php?title=დაბა&oldid=91727678)   |
| დაბალი | low; short                                          | 140          | [source](https://en.wiktionary.org/w/index.php?title=დაბალი&oldid=84089835) |
| დაბლა  | down; downstairs                                    | 140          | [source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)  |
| დავა   | dispute                                             | 2, 155       | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)   |
| დათვი  | bear                                                | 9            | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)  |
| დალაქი | barber                                              | 207          | [source](https://en.wiktionary.org/w/index.php?title=დალაქი&oldid=85046705) |
| დანა   | knife                                               | 101          | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)   |
| დარი   | fair weather                                        | 72, 238      | [source](https://en.wiktionary.org/w/index.php?title=დარი&oldid=85046597)   |
| დასი   | troupe, group                                       | 23, 216      | [source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)   |
| დაფა   | board, tablet                                       | 13, 101      | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)   |
| დაფნა  | laurel                                              | 101          | [source](https://en.wiktionary.org/w/index.php?title=დაფნა&oldid=84114442)  |
| დახლი  | counter                                             | 91           | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)  |
| დედა   | mother                                              | 45           | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| დევი   | giant                                               | 9, 92        | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)   |
| დეიდა  | maternal aunt                                       | 45           | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)  |
| დენთი  | gunpowder                                           | 211          | [source](https://en.wiktionary.org/w/index.php?title=დენთი&oldid=55366640)  |
| დენი   | electric current                                    | 226          | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)   |
| დიადი  | great                                               | 45           | [source](https://en.wiktionary.org/w/index.php?title=დიადი&oldid=84090016)  |
| დიდი   | big                                                 | 45           | [source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)   |
| დიეტა  | diet                                                | 98           | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)  |
| დილა   | morning                                             | 23, 186      | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)   |
| დისკი  | disc                                                | 131          | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)  |
| დოგმა  | dogma                                               | 102          | [source](https://en.wiktionary.org/w/index.php?title=დოგმა&oldid=84098233)  |
| დოზა   | dose                                                | 117          | [source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)   |
| დოლი   | drum                                                | 176          | [source](https://en.wiktionary.org/w/index.php?title=დოლი&oldid=88002790)   |
| დონე   | level                                               | 92, 211      | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)   |
| დოქი   | jug                                                 | 15           | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)   |
| დრამა  | drama                                               | 238          | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)  |
| დრო    | time                                                | 20, 131, 214 | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)    |
| დროშა  | flag                                                | 20           | [source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)  |
| დუეტი  | duet                                                | 216          | [source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)  |
| დღე    | day                                                 | 178          | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| ეზო    | yard, courtyard                                     | 64           | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ეკალი  | thorn                                               | 165          | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)  |
| ეკრანი | screen                                              | 170          | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327) |
| ელვა   | lightning                                           | 100, 231     | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)   |
| ელფი   | elf                                                 | 11, 212      | [source](https://en.wiktionary.org/w/index.php?title=ელფი&oldid=84098344)   |
| ელჩი   | ambassador                                          | 56           | [source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)   |
| ემოცია | emotion                                             | 110          | [source](https://en.wiktionary.org/w/index.php?title=ემოცია&oldid=87755532) |
| ენა    | language; tongue                                    | 58, 170      | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)    |
| ენოტი  | raccoon                                             | 192          | [source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)  |
| ეპოქა  | epoch                                               | 174          | [source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)  |
| ერა    | era                                                 | 16, 133      | [source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)    |
| ერბო   | ghee, clarified butter                              | 224          | [source](https://en.wiktionary.org/w/index.php?title=ერბო&oldid=55359898)   |
| ერთად  | together                                            | 172          | [source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)  |
| ერი    | nation                                              | 33, 115, 197 | [source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)    |
| ეტაპი  | stage                                               | 189          | [source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)  |
| ეტლი   | carriage                                            | 105, 195     | [source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)   |
| ექიმი  | doctor                                              | 79           | [source](https://en.wiktionary.org/w/index.php?title=ექიმი&oldid=88798763)  |
| ექო    | echo                                                | 41, 174      | [source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)    |
| ეშვი   | fang                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ეშვი&oldid=84114997)   |
| ეჭვი   | doubt; suspicion                                    | 100          | [source](https://en.wiktionary.org/w/index.php?title=ეჭვი&oldid=85513584)   |
| ვაგონი | wagon                                               | 210          | [source](https://en.wiktionary.org/w/index.php?title=ვაგონი&oldid=92486955) |
| ვადა   | term, deadline                                      | 2, 155       | [source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)   |
| ვაზა   | vase                                                | 82, 158      | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)   |
| ვაზი   | vine, grapevine                                     | 73, 206      | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)   |
| ვაკე   | plain, plane                                        | 100          | [source](https://en.wiktionary.org/w/index.php?title=ვაკე&oldid=84098446)   |
| ვალი   | debt                                                | 84, 231      | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)   |
| ვალსი  | waltz                                               | 149          | [source](https://en.wiktionary.org/w/index.php?title=ვალსი&oldid=84098452)  |
| ვაჟი   | son                                                 | 119          | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)   |
| ვარდი  | rose                                                | 73           | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)  |
| ვაშლი  | apple                                               | 231          | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)  |
| ველი   | field                                               | 71, 176      | [source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)   |
| ვენა   | vein                                                | 125          | [source](https://en.wiktionary.org/w/index.php?title=ვენა&oldid=85017282)   |
| ვერსია | version                                             | 93           | [source](https://en.wiktionary.org/w/index.php?title=ვერსია&oldid=84098493) |
| ვეტო   | veto                                                | 192          | [source](https://en.wiktionary.org/w/index.php?title=ვეტო&oldid=84098503)   |
| ვეშაპი | whale                                               | 231          | [source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435) |
| ვიდეო  | video                                               | 176          | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)  |
| ვიზა   | visa                                                | 4, 82, 210   | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)   |
| ვილა   | villa                                               | 231          | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)   |
| ვირთხა | rat                                                 | 143          | [source](https://en.wiktionary.org/w/index.php?title=ვირთხა&oldid=84115189) |
| ვირი   | donkey, ass                                         | 47, 213      | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)   |
| ვირუსი | virus                                               | 48           | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530) |
| ვოლტი  | volt                                                | 159          | [source](https://en.wiktionary.org/w/index.php?title=ვოლტი&oldid=84098545)  |
| ზავი   | truce                                               | 4, 206       | [source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)   |
| ზარი   | bell                                                | 4, 158       | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)   |
| ზებრა  | zebra                                               | 60           | [source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)  |
| ზეგ    | day after tomorrow                                  | 60, 172      | [source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)    |
| ზედა   | upper                                               | 172          | [source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)   |
| ზეთი   | oil                                                 | 129          | [source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)   |
| ზეიმი  | celebration                                         | 225          | [source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)  |
| ზეცა   | heaven                                              | 60           | [source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)   |
| ზეწარი | bedsheet                                            | 177          | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578) |
| ზვავი  | avalanche                                           | 82           | [source](https://en.wiktionary.org/w/index.php?title=ზვავი&oldid=84115331)  |
| ზიანი  | damage                                              | 40, 124      | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)  |
| ზმნა   | verb                                                | 40, 225      | [source](https://en.wiktionary.org/w/index.php?title=ზმნა&oldid=92945166)   |
| ზნე    | character; habit                                    | 129, 225     | [source](https://en.wiktionary.org/w/index.php?title=ზნე&oldid=92992532)    |
| ზომა   | measure, quantity, size                             | 117          | [source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)   |
| ზონა   | zone                                                | 210          | [source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)   |
| ზურგი  | back                                                | 147          | [source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)  |
| ზღვა   | sea                                                 | 73           | [source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)   |
| ზღვარი | boundary                                            | 73           | [source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789) |
| თაგვი  | mouse                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)  |
| თავი   | head                                                | 9, 175       | [source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)   |
| თავლა  | stable                                              | 127          | [source](https://en.wiktionary.org/w/index.php?title=თავლა&oldid=85073944)  |
| თათი   | paw                                                 | 84           | [source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)   |
| თანხა  | amount of money                                     | 235          | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)  |
| თაობა  | generation                                          | 235          | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)  |
| თარო   | board, shelf                                        | 95           | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)   |
| თასი   | bowl, chalice                                       | 62           | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| თასმა  | braid                                               | 70           | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)  |
| თაფლი  | honey                                               | 59           | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)  |
| თაღი   | arch                                                | 135          | [source](https://en.wiktionary.org/w/index.php?title=თაღი&oldid=92422626)   |
| თახვი  | beaver                                              | 65           | [source](https://en.wiktionary.org/w/index.php?title=თახვი&oldid=89977530)  |
| თბილი  | warm                                                | 150          | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)  |
| თევზი  | fish                                                | 129          | [source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)  |
| თემა   | theme; essay                                        | 70           | [source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)   |
| თემი   | community                                           | 22           | [source](https://en.wiktionary.org/w/index.php?title=თემი&oldid=85086632)   |
| თეორია | theory                                              | 132          | [source](https://en.wiktionary.org/w/index.php?title=თეორია&oldid=84098686) |
| თერძი  | tailor                                              | 132          | [source](https://en.wiktionary.org/w/index.php?title=თერძი&oldid=84103313)  |
| თესლი  | seed                                                | 113          | [source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)  |
| თექა   | felt                                                | 174          | [source](https://en.wiktionary.org/w/index.php?title=თექა&oldid=84115581)   |
| თეძო   | hip, thigh                                          | 132          | [source](https://en.wiktionary.org/w/index.php?title=თეძო&oldid=84098694)   |
| თვალი  | eye                                                 | 84           | [source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)  |
| თვე    | month                                               | 9, 129       | [source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)    |
| თივა   | hay                                                 | 65, 175      | [source](https://en.wiktionary.org/w/index.php?title=თივა&oldid=84115648)   |
| თითი   | finger                                              | 62           | [source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)   |
| თიხა   | clay                                                | 83           | [source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)   |
| თმა    | hair                                                | 22, 208      | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)    |
| თოვლი  | snow                                                | 176          | [source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)  |
| თოკი   | rope                                                | 157          | [source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)   |
| თოლია  | seagull                                             | 59           | [source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)  |
| თონე   | bread oven                                          | 211          | [source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)   |
| თოფი   | gun                                                 | 59           | [source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)   |
| თოხი   | hoe                                                 | 26           | [source](https://en.wiktionary.org/w/index.php?title=თოხი&oldid=88091343)   |
| თუთა   | mulberry                                            | 84           | [source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)   |
| თუთია  | zinc                                                | 84           | [source](https://en.wiktionary.org/w/index.php?title=თუთია&oldid=84098719)  |
| თხა    | goat                                                | 65, 143, 235 | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| იარა   | wound                                               | 18, 137, 240 | [source](https://en.wiktionary.org/w/index.php?title=იარა&oldid=84115754)   |
| იაფი   | cheap                                               | 171          | [source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)   |
| იახტა  | yacht                                               | 53           | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)  |
| იგავი  | fable                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)  |
| იდეა   | idea                                                | 9, 98, 178   | [source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)   |
| ილეთი  | trick, technique                                    | 150          | [source](https://en.wiktionary.org/w/index.php?title=ილეთი&oldid=84115797)  |
| იმედი  | hope                                                | 57           | [source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)  |
| იოგა   | yoga                                                | 19, 165      | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)   |
| იოდი   | iodine                                              | 131          | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)   |
| იოლი   | easy                                                | 167          | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)   |
| ირემი  | deer                                                | 79, 190      | [source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)  |
| ისარი  | arrow                                               | 219          | [source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)  |
| იუმორი | humor                                               | 229          | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113) |
| იღბალი | luck                                                | 76           | [source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167) |
| იღლია  | armpit                                              | 76, 167      | [source](https://en.wiktionary.org/w/index.php?title=იღლია&oldid=84115945)  |
| იხვი   | duck                                                | 47, 142      | [source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)   |
| იჯარა  | lease                                               | 228          | [source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)  |
| კაბა   | dress, frock                                        | 183          | [source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)   |
| კაბინა | cabin                                               | 183          | [source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910) |
| კავი   | hook                                                | 3, 193       | [source](https://en.wiktionary.org/w/index.php?title=კავი&oldid=88180606)   |
| კათხა  | mug                                                 | 83           | [source](https://en.wiktionary.org/w/index.php?title=კათხა&oldid=84115971)  |
| კაკალი | walnut; walnut tree                                 | 128          | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192) |
| კაკაო  | cocoa                                               | 128          | [source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)  |
| კალა   | tin                                                 | 83, 230      | [source](https://en.wiktionary.org/w/index.php?title=კალა&oldid=91725182)   |
| კალამი | pen                                                 | 35           | [source](https://en.wiktionary.org/w/index.php?title=კალამი&oldid=92468658) |
| კალთა  | lap, skirt hem                                      | 83           | [source](https://en.wiktionary.org/w/index.php?title=კალთა&oldid=84098950)  |
| კალია  | grasshopper                                         | 35, 128      | [source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)  |
| კამა   | dill                                                | 49, 146      | [source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)   |
| კამათი | argument                                            | 49           | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005) |
| კანი   | skin                                                | 36, 148      | [source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)   |
| კანოე  | canoe                                               | 52, 239      | [source](https://en.wiktionary.org/w/index.php?title=კანოე&oldid=84098985)  |
| კანჭი  | shin                                                | 179          | [source](https://en.wiktionary.org/w/index.php?title=კანჭი&oldid=84116024)  |
| კაჟი   | flint                                               | 10           | [source](https://en.wiktionary.org/w/index.php?title=კაჟი&oldid=84099010)   |
| კარატი | carat                                               | 78           | [source](https://en.wiktionary.org/w/index.php?title=კარატი&oldid=84099016) |
| კარაქი | butter                                              | 228          | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208) |
| კარი   | door                                                | 3, 202       | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარტი  | card                                                | 78           | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)  |
| კასრი  | barrel                                              | 10           | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)  |
| კატა   | cat                                                 | 78           | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| კაუჭი  | hook                                                | 8, 116       | [source](https://en.wiktionary.org/w/index.php?title=კაუჭი&oldid=88081762)  |
| კაფე   | cafe                                                | 163, 239     | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)   |
| კაცი   | man                                                 | 80, 222      | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)   |
| კბილი  | tooth                                               | 74           | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)  |
| კენჭი  | pebble                                              | 179          | [source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)  |
| კერა   | hearth                                              | 16, 170      | [source](https://en.wiktionary.org/w/index.php?title=კერა&oldid=91649986)   |
| კერძი  | dish                                                | 197          | [source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)  |
| კერძო  | private                                             | 16           | [source](https://en.wiktionary.org/w/index.php?title=კერძო&oldid=75680066)  |
| კეტი   | stick                                               | 105          | [source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)   |
| კეფა   | back of the head                                    | 163, 239     | [source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)   |
| კეცი   | ketsi, earthenware frying pan (usually from clay)   | 222          | [source](https://en.wiktionary.org/w/index.php?title=კეცი&oldid=84116112)   |
| კეხი   | saddle tree, nose hump                              | 74           | [source](https://en.wiktionary.org/w/index.php?title=კეხი&oldid=91570728)   |
| კვალი  | trail, clue                                         | 100, 208     | [source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)  |
| კვამლი | smoke                                               | 208          | [source](https://en.wiktionary.org/w/index.php?title=კვამლი&oldid=84116122) |
| კვანძი | knot                                                | 223          | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089) |
| კვარცი | quartz                                              | 193          | [source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421) |
| კვირა  | week                                                | 3, 193       | [source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)  |
| კვიცი  | foal                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=კვიცი&oldid=91715232)  |
| კვოტა  | quota                                               | 206          | [source](https://en.wiktionary.org/w/index.php?title=კვოტა&oldid=84099109)  |
| კიბე   | ladder, stair, staircase, stairway                  | 80, 189      | [source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)   |
| კიბო   | barnacle; cancer                                    | 7, 106, 194  | [source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)   |
| კიდე   | edge                                                | 96           | [source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)   |
| კივი   | kiwi fruit; kiwi bird                               | 48, 180      | [source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)   |
| კილო   | kilo                                                | 6, 157       | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)   |
| კინო   | cinema; movie                                       | 153          | [source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)   |
| კირი   | lime, calcium oxide                                 | 48, 169      | [source](https://en.wiktionary.org/w/index.php?title=კირი&oldid=85066928)   |
| კისერი | neck                                                | 197          | [source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129) |
| კიტრი  | cucumber                                            | 220          | [source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)  |
| კლასი  | class                                               | 209          | [source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)  |
| კლდე   | cliff, crag, scar, rock                             | 96           | [source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)   |
| კლიტე  | lock                                                | 105          | [source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)  |
| კლოუნი | clown                                               | 153          | [source](https://en.wiktionary.org/w/index.php?title=კლოუნი&oldid=84116208) |
| კლუბი  | club                                                | 156          | [source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)  |
| კნუტი  | kitten                                              | 148          | [source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)  |
| კოალა  | koala                                               | 128, 230     | [source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)  |
| კობრა  | cobra                                               | 194          | [source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)  |
| კობრი  | carp                                                | 7            | [source](https://en.wiktionary.org/w/index.php?title=კობრი&oldid=84116215)  |
| კოდალა | woodpecker                                          | 230          | [source](https://en.wiktionary.org/w/index.php?title=კოდალა&oldid=87900485) |
| კოდი   | code                                                | 131          | [source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)   |
| კოვზი  | spoon                                               | 206          | [source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)  |
| კოკორი | flower bud                                          | 205          | [source](https://en.wiktionary.org/w/index.php?title=კოკორი&oldid=88091590) |
| კოლეგა | colleague                                           | 165          | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090) |
| კომლი  | household                                           | 157          | [source](https://en.wiktionary.org/w/index.php?title=კომლი&oldid=87677676)  |
| კომში  | quince                                              | 54           | [source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)  |
| კონა   | bundle                                              | 88, 194      | [source](https://en.wiktionary.org/w/index.php?title=კონა&oldid=84099233)   |
| კოპი   | bump                                                | 114          | [source](https://en.wiktionary.org/w/index.php?title=კოპი&oldid=90518672)   |
| კორტი  | tennis-court                                        | 99           | [source](https://en.wiktionary.org/w/index.php?title=კორტი&oldid=84116301)  |
| კოშკი  | tower                                               | 205          | [source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)  |
| კოჭა   | spool                                               | 8            | [source](https://en.wiktionary.org/w/index.php?title=კოჭა&oldid=84099333)   |
| კოჭი   | ankle                                               | 99           | [source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)   |
| კრავი  | lamb                                                | 3, 193       | [source](https://en.wiktionary.org/w/index.php?title=კრავი&oldid=84116326)  |
| კრემი  | cream                                               | 54           | [source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)  |
| კრუხი  | broody hen                                          | 154          | [source](https://en.wiktionary.org/w/index.php?title=კრუხი&oldid=84099373)  |
| კუბი   | cube                                                | 6, 106       | [source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)   |
| კუბო   | coffin                                              | 6            | [source](https://en.wiktionary.org/w/index.php?title=კუბო&oldid=88091344)   |
| კუდი   | tail                                                | 154          | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)   |
| კუზი   | hump                                                | 156          | [source](https://en.wiktionary.org/w/index.php?title=კუზი&oldid=84099382)   |
| კუნთი  | muscle                                              | 153          | [source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)  |
| კუნძი  | stump                                               | 36           | [source](https://en.wiktionary.org/w/index.php?title=კუნძი&oldid=84116386)  |
| კუპატი | kupati sausage                                      | 148          | [source](https://en.wiktionary.org/w/index.php?title=კუპატი&oldid=84096710) |
| კუპონი | coupon                                              | 114          | [source](https://en.wiktionary.org/w/index.php?title=კუპონი&oldid=84099396) |
| კუპრი  | tar                                                 | 220          | [source](https://en.wiktionary.org/w/index.php?title=კუპრი&oldid=92228107)  |
| კურსი  | course; exchange rate                               | 48           | [source](https://en.wiktionary.org/w/index.php?title=კურსი&oldid=69618502)  |
| კუჭი   | stomach                                             | 8            | [source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)   |
| ლაგამი | bridle                                              | 68           | [source](https://en.wiktionary.org/w/index.php?title=ლაგამი&oldid=91776622) |
| ლავა   | lava                                                | 14, 127      | [source](https://en.wiktionary.org/w/index.php?title=ლავა&oldid=84099414)   |
| ლაიმი  | lime (fruit)                                        | 198          | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)  |
| ლამა   | llama                                               | 68, 146      | [source](https://en.wiktionary.org/w/index.php?title=ლამა&oldid=84099426)   |
| ლამპა  | lamp                                                | 146          | [source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)  |
| ლარი   | lari (Georgian currency)                            | 1, 169       | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)   |
| ლაქა   | spot, stain                                         | 127          | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| ლაღი   | carefree                                            | 76, 167      | [source](https://en.wiktionary.org/w/index.php?title=ლაღი&oldid=90036516)   |
| ლეიბი  | mattress                                            | 74, 150      | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)  |
| ლეკვი  | puppy                                               | 96           | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)  |
| ლექსი  | poem                                                | 118          | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)  |
| ლიგა   | league                                              | 68, 207      | [source](https://en.wiktionary.org/w/index.php?title=ლიგა&oldid=84099491)   |
| ლიმონი | lemon                                               | 28           | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519) |
| ლინზა  | lens                                                | 43           | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)  |
| ლირა   | lira                                                | 1, 123       | [source](https://en.wiktionary.org/w/index.php?title=ლირა&oldid=84099516)   |
| ლიფტი  | elevator                                            | 108          | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)  |
| ლობიო  | bean                                                | 44, 138      | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)  |
| ლოდი   | block, rubble                                       | 176          | [source](https://en.wiktionary.org/w/index.php?title=ლოდი&oldid=84099538)   |
| ლომი   | lion                                                | 103, 203     | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლორი   | ham                                                 | 5, 81, 201   | [source](https://en.wiktionary.org/w/index.php?title=ლორი&oldid=84116556)   |
| ლოქო   | catfish                                             | 44           | [source](https://en.wiktionary.org/w/index.php?title=ლოქო&oldid=92197076)   |
| ლოყა   | cheek                                               | 230          | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)   |
| ლუდი   | beer                                                | 51           | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)   |
| ლუკმა  | bite, morsel                                        | 146          | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)  |
| ლურჯი  | blue                                                | 145          | [source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)  |
| ლუწი   | even                                                | 141          | [source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)   |
| მაგარი | hard, strong                                        | 240          | [source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421) |
| მაგია  | magic                                               | 68           | [source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)  |
| მაგიდა | table                                               | 238          | [source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591) |
| მადა   | appetite, stomach                                   | 187          | [source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)   |
| მაზლი  | husband's brother                                   | 161          | [source](https://en.wiktionary.org/w/index.php?title=მაზლი&oldid=84608836)  |
| მაისი  | May                                                 | 62           | [source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)  |
| მალა   | vertebra                                            | 35           | [source](https://en.wiktionary.org/w/index.php?title=მალა&oldid=91725189)   |
| მალე   | soon                                                | 43, 118      | [source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)   |
| მამა   | father                                              | 187          | [source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)   |
| მამიდა | paternal aunt                                       | 187          | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651) |
| მანგო  | mango                                               | 111          | [source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)  |
| მანეთი | ruble                                               | 22           | [source](https://en.wiktionary.org/w/index.php?title=მანეთი&oldid=91150504) |
| მანია  | mania                                               | 137          | [source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)  |
| მარაგი | reserve; stockpile                                  | 238          | [source](https://en.wiktionary.org/w/index.php?title=მარაგი&oldid=84116683) |
| მარილი | salt                                                | 123          | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420) |
| მარტო  | alone                                               | 61           | [source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)  |
| მარში  | march                                               | 123          | [source](https://en.wiktionary.org/w/index.php?title=მარში&oldid=84099689)  |
| მაღალი | tall; high                                          | 27           | [source](https://en.wiktionary.org/w/index.php?title=მაღალი&oldid=84090444) |
| მაწონი | matsoni yogurt                                      | 25           | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051) |
| მახე   | trap                                                | 32, 110      | [source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)   |
| მაჯა   | wrist                                               | 49, 182      | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)   |
| მგელი  | wolf                                                | 103, 215     | [source](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)  |
| მედალი | medal                                               | 178          | [source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774) |
| მედია  | media                                               | 178          | [source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)  |
| მელა   | fox                                                 | 43, 195      | [source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)   |
| მელანი | ink                                                 | 43           | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862) |
| მელოტი | bald                                                | 203          | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872) |
| მენიუ  | menu                                                | 139          | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)  |
| მერი   | mayor                                               | 38, 190      | [source](https://en.wiktionary.org/w/index.php?title=მერი&oldid=84099841)   |
| მეტალი | metal                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455) |
| მეტრი  | metre                                               | 122          | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)  |
| მეტრო  | metro                                               | 203          | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)  |
| მეფე   | king                                                | 86           | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)   |
| მზა    | ready                                               | 177          | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)    |
| მზე    | Sun                                                 | 43, 177      | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)    |
| მზიანი | sunny                                               | 225          | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151) |
| მთა    | mountain, hill                                      | 22, 174      | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| მთელი  | whole; entire                                       | 157          | [source](https://en.wiktionary.org/w/index.php?title=მთელი&oldid=91740782)  |
| მიზანი | goal; target                                        | 40           | [source](https://en.wiktionary.org/w/index.php?title=მიზანი&oldid=84117018) |
| მითი   | myth                                                | 62           | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)   |
| მილი   | tube; mile                                          | 28, 123      | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)   |
| მინა   | glass (material)                                    | 25, 198      | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)   |
| მირაჟი | mirage                                              | 136          | [source](https://en.wiktionary.org/w/index.php?title=მირაჟი&oldid=84099992) |
| მისია  | mission                                             | 62           | [source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)  |
| მიწა   | earth, soil                                         | 25, 204      | [source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)   |
| მკლავი | arm                                                 | 208          | [source](https://en.wiktionary.org/w/index.php?title=მკლავი&oldid=90012056) |
| მლაშე  | salty                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=მლაშე&oldid=75374767)  |
| მოდა   | fashion                                             | 117          | [source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)   |
| მოკლე  | short                                               | 157          | [source](https://en.wiktionary.org/w/index.php?title=მოკლე&oldid=88449850)  |
| მონა   | slave                                               | 25, 111      | [source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)   |
| მორალი | moral                                               | 81           | [source](https://en.wiktionary.org/w/index.php?title=მორალი&oldid=84100099) |
| მორი   | log, timber                                         | 54, 229      | [source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)   |
| მსხალი | pear                                                | 236          | [source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341) |
| მტერი  | enemy                                               | 38, 122      | [source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)  |
| მტვერი | dust                                                | 38           | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826) |
| მუდამ  | always                                              | 187          | [source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)  |
| მუზა   | muse                                                | 77, 221      | [source](https://en.wiktionary.org/w/index.php?title=მუზა&oldid=84100186)   |
| მუმია  | mummy                                               | 77           | [source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)  |
| მურა   | brown                                               | 77           | [source](https://en.wiktionary.org/w/index.php?title=მურა&oldid=91715082)   |
| მური   | soot                                                | 12, 162      | [source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)   |
| მუსი   | mousse                                              | 55, 139      | [source](https://en.wiktionary.org/w/index.php?title=მუსი&oldid=84100198)   |
| მუსიკა | music                                               | 55           | [source](https://en.wiktionary.org/w/index.php?title=მუსიკა&oldid=87787574) |
| მუქი   | dark                                                | 162          | [source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)   |
| მუშა   | worker                                              | 30           | [source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)   |
| მუცელი | stomach, tummy                                      | 188          | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402) |
| მუხა   | oak                                                 | 185          | [source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)   |
| მუხლი  | knee                                                | 188          | [source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)  |
| მუხტი  | charge                                              | 30           | [source](https://en.wiktionary.org/w/index.php?title=მუხტი&oldid=87730411)  |
| მყარი  | solid; stable                                       | 137          | [source](https://en.wiktionary.org/w/index.php?title=მყარი&oldid=84090626)  |
| მშიერი | hungry                                              | 190          | [source](https://en.wiktionary.org/w/index.php?title=მშიერი&oldid=84088912) |
| მშრალი | dry                                                 | 123          | [source](https://en.wiktionary.org/w/index.php?title=მშრალი&oldid=84090631) |
| მცირე  | small                                               | 162          | [source](https://en.wiktionary.org/w/index.php?title=მცირე&oldid=92228054)  |
| მწარე  | bitter; spicy                                       | 177          | [source](https://en.wiktionary.org/w/index.php?title=მწარე&oldid=91715973)  |
| მხარე  | side; region                                        | 32           | [source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)  |
| მხარი  | shoulder                                            | 185          | [source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)  |
| მხეცი  | beast                                               | 110          | [source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)  |
| ნავი   | boat                                                | 125, 200     | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)   |
| ნაზი   | gentle; tender                                      | 40, 124, 225 | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)   |
| ნაკერი | stitch                                              | 170          | [source](https://en.wiktionary.org/w/index.php?title=ნაკერი&oldid=44505182) |
| ნაკლი  | defect                                              | 183          | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)  |
| ნალი   | horseshoe                                           | 67, 181      | [source](https://en.wiktionary.org/w/index.php?title=ნალი&oldid=84117544)   |
| ნამი   | dew, morning dew                                    | 22, 107      | [source](https://en.wiktionary.org/w/index.php?title=ნამი&oldid=91716533)   |
| ნაპირი | shore, strand, waterside                            | 124          | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827) |
| ნარდი  | backgammon                                          | 31           | [source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)  |
| ნაძვი  | spruce                                              | 223          | [source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)  |
| ნაწილი | part; portion                                       | 181          | [source](https://en.wiktionary.org/w/index.php?title=ნაწილი&oldid=85068636) |
| ნაჭერი | piece, cloth                                        | 166          | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132) |
| ნება   | will                                                | 41           | [source](https://en.wiktionary.org/w/index.php?title=ნება&oldid=84096905)   |
| ნეკნი  | rib                                                 | 105          | [source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)  |
| ნელი   | slow                                                | 11, 105      | [source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)   |
| ნემსი  | needle                                              | 139          | [source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)  |
| ნერვი  | nerve                                               | 38           | [source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)  |
| ნესვი  | melon                                               | 192          | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)  |
| ნეფე   | bridegroom                                          | 239          | [source](https://en.wiktionary.org/w/index.php?title=ნეფე&oldid=84100382)   |
| ნივთი  | thing; object                                       | 175          | [source](https://en.wiktionary.org/w/index.php?title=ნივთი&oldid=92215809)  |
| ნიკაპი | chin                                                | 37           | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203) |
| ნიორი  | garlic                                              | 88           | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)  |
| ნისლი  | fog, mist                                           | 28           | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)  |
| ნიშა   | niche                                               | 89, 191      | [source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)   |
| ნიჭი   | talent                                              | 226          | [source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)   |
| ნორმა  | norm; standard                                      | 111          | [source](https://en.wiktionary.org/w/index.php?title=ნორმა&oldid=87787628)  |
| ნოხი   | rug                                                 | 217          | [source](https://en.wiktionary.org/w/index.php?title=ნოხი&oldid=84100426)   |
| ნუკრი  | fawn                                                | 114          | [source](https://en.wiktionary.org/w/index.php?title=ნუკრი&oldid=84100428)  |
| ნული   | zero                                                | 153          | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)   |
| ნუში   | almond                                              | 89           | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)   |
| ობი    | mould                                               | 5, 113, 199  | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)    |
| ობოლი  | orphan                                              | 44           | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)  |
| ოდა    | ode; traditional house                              | 20, 102, 214 | [source](https://en.wiktionary.org/w/index.php?title=ოდა&oldid=87900914)    |
| ოვალი  | oval                                                | 204          | [source](https://en.wiktionary.org/w/index.php?title=ოვალი&oldid=84100444)  |
| ოთახი  | room, chamber                                       | 26           | [source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)  |
| ოინი   | prank, trick                                        | 88           | [source](https://en.wiktionary.org/w/index.php?title=ოინი&oldid=84117786)   |
| ოკეანე | ocean                                               | 239          | [source](https://en.wiktionary.org/w/index.php?title=ოკეანე&oldid=84117787) |
| ოლქი   | district                                            | 19           | [source](https://en.wiktionary.org/w/index.php?title=ოლქი&oldid=84117798)   |
| ომი    | war                                                 | 28, 204      | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)    |
| ოპერა  | opera                                               | 64           | [source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)  |
| ორგანო | organ                                               | 111          | [source](https://en.wiktionary.org/w/index.php?title=ორგანო&oldid=84103241) |
| ორმო   | pit                                                 | 111          | [source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)   |
| ოსპი   | lentil                                              | 234          | [source](https://en.wiktionary.org/w/index.php?title=ოსპი&oldid=81817269)   |
| ოსტატი | master craftsman                                    | 50           | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588) |
| ოფისი  | office                                              | 108          | [source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)  |
| ოფლი   | sweat                                               | 81, 237      | [source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)   |
| ოქრო   | gold                                                | 44           | [source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)   |
| ოჯახი  | family                                              | 91           | [source](https://en.wiktionary.org/w/index.php?title=ოჯახი&oldid=92084204)  |
| პაკეტი | packet                                              | 189          | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015) |
| პანდა  | panda                                               | 101          | [source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)  |
| პაპა   | grandfather                                         | 101          | [source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)   |
| პარიკი | wig                                                 | 202          | [source](https://en.wiktionary.org/w/index.php?title=პარიკი&oldid=84209336) |
| პარკი  | plastic bag                                         | 202          | [source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)  |
| პაუზა  | pause                                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)  |
| პიკი   | peak                                                | 37, 220      | [source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)   |
| პირი   | mouth                                               | 124, 202     | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)   |
| პიტნა  | mint, spearmint                                     | 37, 148      | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)  |
| პიცა   | pizza                                               | 193          | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)   |
| პლუსი  | plus                                                | 120          | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)  |
| პოემა  | poem                                                | 174          | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)  |
| პოეტი  | poet                                                | 184          | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)  |
| პოზა   | pose                                                | 64           | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)   |
| პონი   | pony                                                | 114, 234     | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)   |
| პორტი  | port                                                | 184          | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)  |
| პოსტი  | post                                                | 50           | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)  |
| პრემია | prize                                               | 33           | [source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288) |
| პრიზი  | prize                                               | 124          | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)  |
| პროზა  | prose                                               | 64           | [source](https://en.wiktionary.org/w/index.php?title=პროზა&oldid=84100873)  |
| პულსი  | pulse                                               | 120          | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)  |
| პუმა   | puma                                                | 146          | [source](https://en.wiktionary.org/w/index.php?title=პუმა&oldid=85689336)   |
| პური   | bread                                               | 114          | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)   |
| რადიო  | radio                                               | 214          | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)  |
| რაზმი  | squad                                               | 77           | [source](https://en.wiktionary.org/w/index.php?title=რაზმი&oldid=84118264)  |
| რაიონი | district                                            | 88           | [source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151) |
| რაფა   | windowsill                                          | 13, 227      | [source](https://en.wiktionary.org/w/index.php?title=რაფა&oldid=92486505)   |
| რბილი  | soft                                                | 121          | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)  |
| რგოლი  | ring                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=რგოლი&oldid=84118289)  |
| რეისი  | scheduled journey                                   | 197          | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)  |
| რეპი   | rap music                                           | 33           | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)   |
| რთული  | difficult; complex                                  | 145          | [source](https://en.wiktionary.org/w/index.php?title=რთული&oldid=84118321)  |
| რიგი   | row; queue                                          | 171          | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)   |
| რისკი  | risk                                                | 48, 131      | [source](https://en.wiktionary.org/w/index.php?title=რისკი&oldid=84118334)  |
| რიტმი  | beat, cadence, rhythm                               | 229          | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)  |
| რკალი  | hoop, ring                                          | 169          | [source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)  |
| რკინა  | iron (metal)                                        | 88           | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)  |
| რკო    | acorn                                               | 7, 205       | [source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)    |
| როკი   | rock music                                          | 7            | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)   |
| როლი   | role                                                | 5, 203       | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)   |
| რომი   | rum                                                 | 81, 229      | [source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)   |
| რუკა   | map                                                 | 78, 154      | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)   |
| რუხი   | gray/grey                                           | 21, 185      | [source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)   |
| რუჯი   | suntan                                              | 63, 145      | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)   |
| რქა    | horn, antler                                        | 1, 136, 213  | [source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)    |
| რძალი  | daughter-in-law; sister-in-law                      | 169          | [source](https://en.wiktionary.org/w/index.php?title=რძალი&oldid=91716433)  |
| რძე    | milk                                                | 16, 132, 224 | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)    |
| საათი  | clock; hour                                         | 135          | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)  |
| საბანი | blanket                                             | 39           | [source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633) |
| საბჭო  | council                                             | 134          | [source](https://en.wiktionary.org/w/index.php?title=საბჭო&oldid=88896363)  |
| სადილი | midday meal                                         | 23           | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533) |
| სავსე  | full                                                | 196          | [source](https://en.wiktionary.org/w/index.php?title=სავსე&oldid=81821895)  |
| საიტი  | website                                             | 219          | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)  |
| საკანი | cell                                                | 112          | [source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500) |
| სალონი | salon                                               | 67           | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194) |
| სანდო  | reliable                                            | 234          | [source](https://en.wiktionary.org/w/index.php?title=სანდო&oldid=88605743)  |
| საპონი | soap                                                | 234          | [source](https://en.wiktionary.org/w/index.php?title=საპონი&oldid=89620271) |
| სარი   | stake                                               | 10, 168      | [source](https://en.wiktionary.org/w/index.php?title=სარი&oldid=91725833)   |
| სარკე  | looking-glass, mirror                               | 163          | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)  |
| საუნა  | sauna                                               | 112          | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)  |
| საქმე  | work, business                                      | 118          | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)  |
| საღი   | healthy, sensible                                   | 135          | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)   |
| საშიში | scary; dangerous                                    | 109          | [source](https://en.wiktionary.org/w/index.php?title=საშიში&oldid=84118867) |
| საწოლი | bed                                                 | 67           | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101) |
| სახე   | face                                                | 70           | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)   |
| სახლი  | home, house, dwelling                               | 236          | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)  |
| სერია  | series                                              | 93           | [source](https://en.wiktionary.org/w/index.php?title=სერია&oldid=87787607)  |
| სესია  | session                                             | 196          | [source](https://en.wiktionary.org/w/index.php?title=სესია&oldid=84101372)  |
| სვავი  | vulture                                             | 65           | [source](https://en.wiktionary.org/w/index.php?title=სვავი&oldid=87901139)  |
| სველი  | wet                                                 | 212          | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)  |
| სვეტი  | column                                              | 90           | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)  |
| სია    | list                                                | 10, 112, 216 | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)    |
| სითბო  | warmth                                              | 113          | [source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)  |
| სილა   | sand; slap                                          | 23, 209      | [source](https://en.wiktionary.org/w/index.php?title=სილა&oldid=81821960)   |
| სიმი   | string                                              | 28           | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)   |
| სიო    | breeze                                              | 67, 184      | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)    |
| სიტყვა | word                                                | 90           | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915) |
| სიძე   | son-in-law; groom                                   | 71, 197      | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)   |
| სკამი  | chair                                               | 55           | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)  |
| სკოლა  | school                                              | 209          | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)  |
| სოდა   | soda                                                | 20           | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)   |
| სოკო   | mushroom                                            | 209          | [source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)   |
| სოუსი  | sauce                                               | 120          | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)  |
| სპა    | spa                                                 | 33, 234      | [source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)    |
| სპილო  | elephant                                            | 120          | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)  |
| სპორტი | sport                                               | 184          | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224) |
| სრული  | complete                                            | 160          | [source](https://en.wiktionary.org/w/index.php?title=სრული&oldid=84091028)  |
| სტილი  | style                                               | 108          | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)  |
| სტუდია | studio                                              | 216          | [source](https://en.wiktionary.org/w/index.php?title=სტუდია&oldid=84101730) |
| სული   | spirit, ghost                                       | 120, 212     | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)   |
| სუნი   | smell                                               | 85           | [source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)   |
| სურათი | picture                                             | 168          | [source](https://en.wiktionary.org/w/index.php?title=სურათი&oldid=88800264) |
| სუფთა  | clean                                               | 168          | [source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)  |
| სუფრა  | tablecloth, feast                                   | 168          | [source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)  |
| სქესი  | sex; gender                                         | 196          | [source](https://en.wiktionary.org/w/index.php?title=სქესი&oldid=91012991)  |
| სცენა  | stage; scene                                        | 222          | [source](https://en.wiktionary.org/w/index.php?title=სცენა&oldid=84101771)  |
| სხივი  | ray                                                 | 149          | [source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)  |
| ტაბუ   | taboo                                               | 75           | [source](https://en.wiktionary.org/w/index.php?title=ტაბუ&oldid=84101781)   |
| ტალახი | mud                                                 | 53           | [source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470) |
| ტანგო  | tango                                               | 46           | [source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)  |
| ტანი   | body                                                | 37           | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)   |
| ტანკი  | military tank                                       | 148          | [source](https://en.wiktionary.org/w/index.php?title=ტანკი&oldid=88002840)  |
| ტარი   | handle                                              | 61, 219      | [source](https://en.wiktionary.org/w/index.php?title=ტარი&oldid=91725865)   |
| ტაფა   | frying pan                                          | 53           | [source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)   |
| ტაქსი  | taxi                                                | 87, 173      | [source](https://en.wiktionary.org/w/index.php?title=ტაქსი&oldid=84119352)  |
| ტაში   | applause                                            | 75           | [source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)   |
| ტახტი  | ottoman bench                                       | 232          | [source](https://en.wiktionary.org/w/index.php?title=ტახტი&oldid=84101822)  |
| ტბა    | lake                                                | 46, 189      | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ტენი   | moisture                                            | 192          | [source](https://en.wiktionary.org/w/index.php?title=ტენი&oldid=92014085)   |
| ტერფი  | foot                                                | 69           | [source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)  |
| ტვინი  | brain                                               | 200          | [source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)  |
| ტილო   | canvas, linen                                       | 24, 159      | [source](https://en.wiktionary.org/w/index.php?title=ტილო&oldid=84101866)   |
| ტიპი   | type                                                | 37, 220      | [source](https://en.wiktionary.org/w/index.php?title=ტიპი&oldid=64001804)   |
| ტირე   | dash                                                | 38, 184      | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)   |
| ტიტა   | tulip                                               | 50, 232      | [source](https://en.wiktionary.org/w/index.php?title=ტიტა&oldid=81818591)   |
| ტოლი   | equal                                               | 159, 237     | [source](https://en.wiktionary.org/w/index.php?title=ტოლი&oldid=92197091)   |
| ტომი   | tribe; volume                                       | 106, 203     | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)   |
| ტონი   | tone                                                | 46, 192      | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)   |
| ტორტი  | tart                                                | 99           | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)  |
| ტოტი   | branch, twig                                        | 50           | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)   |
| ტრიო   | trio                                                | 24, 99       | [source](https://en.wiktionary.org/w/index.php?title=ტრიო&oldid=84101947)   |
| ტუმბო  | pump                                                | 106          | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)  |
| ტურა   | jackal                                              | 78           | [source](https://en.wiktionary.org/w/index.php?title=ტურა&oldid=91715083)   |
| ტური   | round                                               | 220          | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)   |
| ტუჩი   | lip                                                 | 122          | [source](https://en.wiktionary.org/w/index.php?title=ტუჩი&oldid=89949141)   |
| ტყავი  | leather                                             | 200          | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)  |
| ტყე    | forest, wood                                        | 90           | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ტყვე   | captive                                             | 90           | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)   |
| ტყვია  | bullet, lead                                        | 90, 200      | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)  |
| უარი   | refusal                                             | 77, 152      | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)   |
| უბანი  | neighborhood                                        | 58           | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)  |
| უბე    | bay; bosom                                          | 51, 215      | [source](https://en.wiktionary.org/w/index.php?title=უბე&oldid=84119518)    |
| უზადო  | flawless                                            | 117          | [source](https://en.wiktionary.org/w/index.php?title=უზადო&oldid=84119546)  |
| უთო    | iron for clothes                                    | 153          | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)    |
| უკან   | back; backwards                                     | 36, 112      | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| უმი    | raw, uncooked                                       | 55, 187      | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)    |
| უნარი  | ability                                             | 31           | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)  |
| ურდო   | horde                                               | 15           | [source](https://en.wiktionary.org/w/index.php?title=ურდო&oldid=84119678)   |
| ურემი  | cartload                                            | 12, 162      | [source](https://en.wiktionary.org/w/index.php?title=ურემი&oldid=84102064)  |
| ურნა   | urn                                                 | 31           | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)   |
| ურო    | hammer                                              | 15, 229      | [source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)    |
| ურჩი   | disobedient                                         | 122          | [source](https://en.wiktionary.org/w/index.php?title=ურჩი&oldid=84091172)   |
| უფასო  | free of charge                                      | 85           | [source](https://en.wiktionary.org/w/index.php?title=უფასო&oldid=84119719)  |
| უცხო   | foreign, unfamiliar                                 | 21           | [source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)   |
| უხეში  | rough; rude                                         | 151          | [source](https://en.wiktionary.org/w/index.php?title=უხეში&oldid=84119754)  |
| უჯრა   | drawer                                              | 63           | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)   |
| ფაზა   | phase                                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)   |
| ფაილი  | file                                                | 198          | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)  |
| ფარა   | flock                                               | 13, 227      | [source](https://en.wiktionary.org/w/index.php?title=ფარა&oldid=84119773)   |
| ფარდა  | curtain, purdah                                     | 13           | [source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)  |
| ფართო  | wide                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=ფართო&oldid=84119789)  |
| ფარი   | shield                                              | 86, 166      | [source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)   |
| ფასი   | price, cost                                         | 85, 173      | [source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)   |
| ფაფა   | porridge                                            | 13           | [source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)   |
| ფაქტი  | fact                                                | 173          | [source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)  |
| ფენა   | layer                                               | 166          | [source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)   |
| ფენი   | hairdryer                                           | 11, 211      | [source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)   |
| ფერი   | color, hue                                          | 86           | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)   |
| ფერმა  | farm                                                | 86           | [source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)  |
| ფესვი  | root                                                | 212          | [source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)  |
| ფეტვი  | millet                                              | 69           | [source](https://en.wiktionary.org/w/index.php?title=ფეტვი&oldid=87901416)  |
| ფეხი   | foot; leg                                           | 97           | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| ფიგურა | stature, figure                                     | 63           | [source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102) |
| ფილა   | slab                                                | 53, 130      | [source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)   |
| ფილე   | fillet                                              | 11, 97       | [source](https://en.wiktionary.org/w/index.php?title=ფილე&oldid=84102226)   |
| ფილმი  | film                                                | 198          | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)  |
| ფინალი | final                                               | 198          | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241) |
| ფირი   | film                                                | 171          | [source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)   |
| ფირმა  | company                                             | 86           | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)  |
| ფისი   | resin                                               | 108          | [source](https://en.wiktionary.org/w/index.php?title=ფისი&oldid=87901452)   |
| ფიცი   | oath                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)   |
| ფიჭა   | honeycomb                                           | 166          | [source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)   |
| ფიჭვი  | pine                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)  |
| ფლავი  | pilaf                                               | 130          | [source](https://en.wiktionary.org/w/index.php?title=ფლავი&oldid=84102266)  |
| ფლოტი  | fleet                                               | 108, 237     | [source](https://en.wiktionary.org/w/index.php?title=ფლოტი&oldid=84102283)  |
| ფოთოლი | leaf                                                | 237          | [source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315) |
| ფონდი  | fund                                                | 211          | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)  |
| ფონი   | background                                          | 85           | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)   |
| ფორმა  | shape, form                                         | 81           | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)  |
| ფოსტა  | post; mail                                          | 173          | [source](https://en.wiktionary.org/w/index.php?title=ფოსტა&oldid=87382061)  |
| ფოტო   | photo                                               | 237          | [source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)   |
| ფრაზა  | phrase                                              | 66           | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)  |
| ფრანი  | kite                                                | 166          | [source](https://en.wiktionary.org/w/index.php?title=ფრანი&oldid=84119947)  |
| ფრესკა | fresco                                              | 163          | [source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351) |
| ფრთა   | wing                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)   |
| ფსონი  | bet                                                 | 85           | [source](https://en.wiktionary.org/w/index.php?title=ფსონი&oldid=84119973)  |
| ფული   | money                                               | 212          | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)   |
| ფხა    | fishbone                                            | 95           | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)      |
| ქადა   | sweet pastry                                        | 207          | [source](https://en.wiktionary.org/w/index.php?title=ქადა&oldid=91650192)   |
| ქალა   | skull                                               | 14, 127      | [source](https://en.wiktionary.org/w/index.php?title=ქალა&oldid=91725190)   |
| ქალი   | woman                                               | 1, 126       | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| ქამარი | belt                                                | 18           | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022) |
| ქაოსი  | chaos                                               | 173          | [source](https://en.wiktionary.org/w/index.php?title=ქაოსი&oldid=84120027)  |
| ქარვა  | amber                                               | 127          | [source](https://en.wiktionary.org/w/index.php?title=ქარვა&oldid=92067051)  |
| ქარი   | wind                                                | 136, 213     | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)   |
| ქაჯი   | goblin                                              | 104          | [source](https://en.wiktionary.org/w/index.php?title=ქაჯი&oldid=87997423)   |
| ქედი   | mountain range                                      | 45           | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)   |
| ქერა   | blond                                               | 163          | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)   |
| ქერი   | barley                                              | 79           | [source](https://en.wiktionary.org/w/index.php?title=ქერი&oldid=87901504)   |
| ქვა    | stone                                               | 14, 196      | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვაბი  | pot                                                 | 34           | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)  |
| ქვიშა  | sand                                                | 34           | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)  |
| ქილა   | jar                                                 | 19, 126, 207 | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ქიმია  | chemistry                                           | 136          | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)  |
| ქირა   | rent                                                | 1, 228       | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)   |
| ქმარი  | husband                                             | 18, 136      | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)  |
| ქოლგა  | umbrella                                            | 19           | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)  |
| ქონება | property; wealth                                    | 41           | [source](https://en.wiktionary.org/w/index.php?title=ქონება&oldid=90059881) |
| ქორი   | goshawk                                             | 44           | [source](https://en.wiktionary.org/w/index.php?title=ქორი&oldid=92251688)   |
| ქოსა   | beardless                                           | 41           | [source](https://en.wiktionary.org/w/index.php?title=ქოსა&oldid=91928853)   |
| ქსელი  | web; network                                        | 118          | [source](https://en.wiktionary.org/w/index.php?title=ქსელი&oldid=84809641)  |
| ქუდი   | hat                                                 | 15           | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)   |
| ქულა   | point, score                                        | 160          | [source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)   |
| ქურა   | stove, furnace                                      | 160          | [source](https://en.wiktionary.org/w/index.php?title=ქურა&oldid=91715085)   |
| ქურდი  | thief                                               | 15           | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)  |
| ქუსლი  | heel                                                | 160          | [source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)  |
| ქუჩა   | street                                              | 87           | [source](https://en.wiktionary.org/w/index.php?title=ქუჩა&oldid=84120190)   |
| ღამე   | night                                               | 178          | [source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)   |
| ღარი   | groove, ditch                                       | 73           | [source](https://en.wiktionary.org/w/index.php?title=ღარი&oldid=84102504)   |
| ღერო   | blade, haulm, stalk, stem                           | 64           | [source](https://en.wiktionary.org/w/index.php?title=ღერო&oldid=87901541)   |
| ღვედი  | belt, strap                                         | 92           | [source](https://en.wiktionary.org/w/index.php?title=ღვედი&oldid=84120218)  |
| ღვინო  | wine                                                | 92           | [source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)  |
| ღია    | open                                                | 27, 135      | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)    |
| ღილი   | button                                              | 76           | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ღიპი   | belly                                               | 76           | [source](https://en.wiktionary.org/w/index.php?title=ღიპი&oldid=84102517)   |
| ღობე   | fence, hedge                                        | 42           | [source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)   |
| ღომი   | ghomi maize porridge                                | 61           | [source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)   |
| ღონე   | strength                                            | 92           | [source](https://en.wiktionary.org/w/index.php?title=ღონე&oldid=84120241)   |
| ღორი   | pig                                                 | 42           | [source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)   |
| ღრმა   | deep                                                | 61           | [source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)   |
| ღრუ    | cavity; hollow space                                | 42, 147      | [source](https://www.ganmarteba.ge/word/ღრუ)                                |
| ღუზა   | anchor                                              | 147          | [source](https://en.wiktionary.org/w/index.php?title=ღუზა&oldid=87788040)   |
| ყაბაყი | zucchini                                            | 218          | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258) |
| ყადრი  | value, respect                                      | 214          | [source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)  |
| ყავა   | coffee                                              | 2, 82        | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)   |
| ყალბი  | fake; false                                         | 141          | [source](https://en.wiktionary.org/w/index.php?title=ყალბი&oldid=84120277)  |
| ყანა   | field                                               | 39, 137      | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)   |
| ყასაბი | butcher                                             | 39           | [source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292) |
| ყბა    | jaw                                                 | 39, 140, 218 | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)    |
| ყდა    | cover of a book                                     | 2, 140, 230  | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)    |
| ყელი   | throat                                              | 96           | [source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)   |
| ყვავი  | crow                                                | 82           | [source](https://en.wiktionary.org/w/index.php?title=ყვავი&oldid=92705412)  |
| ყველი  | cheese                                              | 96           | [source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)  |
| ყინვა  | frost, freezing, freezing temperatures, severe cold | 200          | [source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)  |
| ყოჩი   | ram                                                 | 214          | [source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)   |
| ყრუ    | deaf                                                | 12, 145      | [source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)    |
| ყუთი   | box                                                 | 145          | [source](https://en.wiktionary.org/w/index.php?title=ყუთი&oldid=85493733)   |
| ყურე   | bay, bight                                          | 12           | [source](https://en.wiktionary.org/w/index.php?title=ყურე&oldid=84102567)   |
| ყური   | ear                                                 | 12           | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| შავი   | black                                               | 34, 109      | [source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)   |
| შალი   | shawl                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)   |
| შანსი  | chance                                              | 191          | [source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)  |
| შაშვი  | thrush                                              | 109          | [source](https://en.wiktionary.org/w/index.php?title=შაშვი&oldid=84757236)  |
| შაშხი  | salted or dried meat                                | 151          | [source](https://en.wiktionary.org/w/index.php?title=შაშხი&oldid=88672039)  |
| შენობა | building                                            | 52           | [source](https://en.wiktionary.org/w/index.php?title=შენობა&oldid=84102610) |
| შეშა   | firewood                                            | 151          | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)   |
| შველი  | roe deer                                            | 56           | [source](https://en.wiktionary.org/w/index.php?title=შველი&oldid=91741270)  |
| შვილი  | child                                               | 56           | [source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)  |
| შვრია  | oats                                                | 227          | [source](https://en.wiktionary.org/w/index.php?title=შვრია&oldid=88155749)  |
| შიში   | fear                                                | 109          | [source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)   |
| შნო    | skill, charm                                        | 52           | [source](https://en.wiktionary.org/w/index.php?title=შნო&oldid=92228121)    |
| შობა   | Christmas                                           | 52           | [source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)   |
| შოკი   | shock                                               | 54, 205      | [source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)   |
| შოლტი  | whip                                                | 24           | [source](https://en.wiktionary.org/w/index.php?title=შოლტი&oldid=88091226)  |
| შორი   | far                                                 | 24, 205      | [source](https://en.wiktionary.org/w/index.php?title=შორი&oldid=84097095)   |
| შორს   | far                                                 | 20           | [source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)   |
| შრე    | stratum, layer                                      | 54, 190      | [source](https://en.wiktionary.org/w/index.php?title=შრე&oldid=84102672)    |
| შტატი  | state; staff                                        | 232          | [source](https://en.wiktionary.org/w/index.php?title=შტატი&oldid=88896322)  |
| შტო    | branch                                              | 24           | [source](https://en.wiktionary.org/w/index.php?title=შტო&oldid=92197095)    |
| შუა    | middle                                              | 30, 151      | [source](https://www.ganmarteba.ge/word/შუა)                                |
| შუბი   | spear                                               | 34           | [source](https://en.wiktionary.org/w/index.php?title=შუბი&oldid=84120602)   |
| შუბლი  | forehead                                            | 156          | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)  |
| შური   | envy                                                | 190          | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)   |
| შუქი   | light                                               | 34           | [source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)   |
| შუშა   | glass                                               | 151          | [source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)   |
| შხამი  | poison                                              | 30           | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)  |
| შხაპი  | shower                                              | 232          | [source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)  |
| ჩაი    | tea (drink made from leaves of tea plant)           | 87, 179      | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)    |
| ჩალა   | straw                                               | 164          | [source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)   |
| ჩარხი  | lathe                                               | 142          | [source](https://en.wiktionary.org/w/index.php?title=ჩარხი&oldid=84120652)  |
| ჩეკი   | check, receipt                                      | 179          | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)   |
| ჩვარი  | rag                                                 | 142          | [source](https://en.wiktionary.org/w/index.php?title=ჩვარი&oldid=84102722)  |
| ჩვილი  | baby                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)  |
| ჩიპი   | microchip                                           | 202          | [source](https://en.wiktionary.org/w/index.php?title=ჩიპი&oldid=85075873)   |
| ჩირი   | dried fruit                                         | 126, 219     | [source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)   |
| ჩიტი   | bird                                                | 219          | [source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)   |
| ჩიხი   | blind alley                                         | 142          | [source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)   |
| ჩლიქი  | hoof                                                | 126          | [source](https://en.wiktionary.org/w/index.php?title=ჩლიქი&oldid=92229616)  |
| ჩუმად  | quietly                                             | 117          | [source](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)  |
| ჩუმი   | quiet                                               | 122          | [source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)   |
| ჩუსტი  | slipper                                             | 87           | [source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)  |
| ჩქარი  | quick                                               | 126          | [source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)  |
| ცალი   | piece                                               | 59, 186      | [source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)   |
| ცელი   | scythe                                              | 217          | [source](https://en.wiktionary.org/w/index.php?title=ცელი&oldid=91740712)   |
| ცვილი  | wax                                                 | 186          | [source](https://en.wiktionary.org/w/index.php?title=ცვილი&oldid=84757548)  |
| ცივი   | cold                                                | 47, 180      | [source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)   |
| ცილა   | protein                                             | 59, 186      | [source](https://en.wiktionary.org/w/index.php?title=ცილა&oldid=84120818)   |
| ციხე   | fortress                                            | 57, 188      | [source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)   |
| ცნება  | concept                                             | 80           | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)  |
| ცოდვა  | sin                                                 | 155          | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)  |
| ცოდნა  | knowledge                                           | 155          | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)  |
| ცოლი   | wife                                                | 217          | [source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)   |
| ცომი   | dough                                               | 110, 199     | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)   |
| ცრუ    | false, phony                                        | 21, 162      | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)    |
| ცული   | axe                                                 | 188          | [source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)   |
| ცური   | udder                                               | 21           | [source](https://en.wiktionary.org/w/index.php?title=ცური&oldid=84102818)   |
| ცხარე  | spicy                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)  |
| ცხელი  | hot                                                 | 217          | [source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)  |
| ცხენი  | horse                                               | 217          | [source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)  |
| ცხვირი | nose                                                | 47           | [source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521) |
| ცხიმი  | fat                                                 | 57           | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)  |
| ძაბრი  | funnel                                              | 94           | [source](https://en.wiktionary.org/w/index.php?title=ძაბრი&oldid=84120916)  |
| ძალა   | power, force, strength                              | 27           | [source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)   |
| ძაფი   | thread                                              | 130          | [source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)   |
| ძაღლი  | dog                                                 | 27           | [source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)  |
| ძეგლი  | monument                                            | 71           | [source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)  |
| ძელი   | beam                                                | 71           | [source](https://en.wiktionary.org/w/index.php?title=ძელი&oldid=84120929)   |
| ძერა   | kite bird                                           | 16, 224      | [source](https://en.wiktionary.org/w/index.php?title=ძერა&oldid=91812511)   |
| ძეხვი  | sausage                                             | 97           | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)  |
| ძვალი  | bone                                                | 130          | [source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)  |
| ძველი  | old                                                 | 97           | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)  |
| ძვირი  | expensive                                           | 213          | [source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)  |
| ძია    | uncle                                               | 132, 223     | [source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)    |
| ძილი   | sleep                                               | 169          | [source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)   |
| ძირი   | root                                                | 233          | [source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)   |
| ძიძა   | nanny                                               | 130          | [source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)   |
| ძლიერი | strong                                              | 233          | [source](https://en.wiktionary.org/w/index.php?title=ძლიერი&oldid=84757250) |
| ძმა    | brother                                             | 27, 107      | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| ძმარი  | vinegar                                             | 94           | [source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)  |
| ძნელი  | difficult                                           | 11           | [source](https://en.wiktionary.org/w/index.php?title=ძნელი&oldid=88915482)  |
| ძროხა  | cow                                                 | 224          | [source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)  |
| ძუა    | horsehair                                           | 89           | [source](https://en.wiktionary.org/w/index.php?title=ძუა&oldid=85057219)    |
| ძუნწი  | stingy                                              | 36           | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)  |
| წაბლი  | chestnut                                            | 141          | [source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)  |
| წავი   | otter                                               | 204          | [source](https://en.wiktionary.org/w/index.php?title=წავი&oldid=87797873)   |
| წამალი | medicine                                            | 68           | [source](https://en.wiktionary.org/w/index.php?title=წამალი&oldid=84120981) |
| წამი   | second                                              | 25, 107      | [source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)   |
| წარბი  | brow, eyebrow                                       | 152          | [source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)  |
| წებო   | glue                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)   |
| წევრი  | member                                              | 69           | [source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)  |
| წელი   | year                                                | 233          | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| წერილი | letter; written message                             | 233          | [source](https://en.wiktionary.org/w/index.php?title=წერილი&oldid=85067524) |
| წესი   | rule                                                | 139          | [source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)   |
| წვეთი  | drop                                                | 129          | [source](https://en.wiktionary.org/w/index.php?title=წვეთი&oldid=59811747)  |
| წვენი  | gravy, juice, sap                                   | 125          | [source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)  |
| წვერი  | beard; tip                                          | 69, 144      | [source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)  |
| წვიმა  | rain                                                | 204          | [source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)  |
| წიგნი  | book                                                | 181          | [source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)  |
| წილი   | share; portion                                      | 181          | [source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)   |
| წინდა  | sock                                                | 107          | [source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)  |
| წმინდა | pure; holy                                          | 107          | [source](https://en.wiktionary.org/w/index.php?title=წმინდა&oldid=84121076) |
| წნევა  | pressure                                            | 125          | [source](https://en.wiktionary.org/w/index.php?title=წნევა&oldid=84121078)  |
| წონა   | weight                                              | 67           | [source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)   |
| წრე    | circle                                              | 69, 233      | [source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)    |
| წუთი   | minute                                              | 152          | [source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)   |
| წუნი   | defect                                              | 36, 139      | [source](https://en.wiktionary.org/w/index.php?title=წუნი&oldid=84121093)   |
| წყალი  | water                                               | 141          | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)  |
| ჭაბუკი | young man                                           | 116          | [source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122) |
| ჭადარი | plane tree                                          | 72           | [source](https://en.wiktionary.org/w/index.php?title=ჭადარი&oldid=84121125) |
| ჭავლი  | jet, stream                                         | 100          | [source](https://en.wiktionary.org/w/index.php?title=ჭავლი&oldid=84102926)  |
| ჭალა   | floodplain; riverside grove                         | 35           | [source](https://en.wiktionary.org/w/index.php?title=ჭალა&oldid=92391673)   |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   | 26, 134      | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)  |
| ჭაღი   | chandelier                                          | 116          | [source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)   |
| ჭერი   | ceiling                                             | 121          | [source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)   |
| ჭექა   | thunder                                             | 104          | [source](https://en.wiktionary.org/w/index.php?title=ჭექა&oldid=84121145)   |
| ჭია    | worm                                                | 35, 179      | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)    |
| ჭირი   | illness, trouble                                    | 121          | [source](https://en.wiktionary.org/w/index.php?title=ჭირი&oldid=76807766)   |
| ჭიქა   | glass, cup                                          | 104          | [source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)   |
| ჭკუა   | intellect                                           | 8, 116       | [source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)   |
| ჭოკი   | pole                                                | 8            | [source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)   |
| ჭორი   | gossip                                              | 99           | [source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)   |
| ჭრელი  | colorful                                            | 121          | [source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)  |
| ხავსი  | moss                                                | 65, 149      | [source](https://en.wiktionary.org/w/index.php?title=ხავსი&oldid=88004014)  |
| ხაზი   | line                                                | 161          | [source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)   |
| ხალათი | robe                                                | 83           | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200) |
| ხალი   | birthmark, mole                                     | 53           | [source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)   |
| ხალიჩა | carpet, rug                                         | 164          | [source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204) |
| ხალხი  | people                                              | 236          | [source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)  |
| ხამი   | raw, inexperienced                                  | 32, 110, 236 | [source](https://en.wiktionary.org/w/index.php?title=ხამი&oldid=92291997)   |
| ხარი   | ox, bull                                            | 32, 142      | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)   |
| ხარჯი  | expense                                             | 143          | [source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)  |
| ხატი   | icon                                                | 30, 232      | [source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)   |
| ხაჭო   | curd cheese                                         | 26           | [source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)   |
| ხბო    | calf                                                | 26, 235      | [source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)    |
| ხედი   | view                                                | 57           | [source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)   |
| ხევი   | ravine                                              | 97           | [source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)   |
| ხელი   | hand                                                | 188          | [source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)   |
| ხეობა  | valley                                              | 224          | [source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)  |
| ხერხი  | saw, method                                         | 32           | [source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)  |
| ხვალ   | tomorrow                                            | 149          | [source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)   |
| ხიბლი  | charm                                               | 74           | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)  |
| ხიდი   | bridge                                              | 57           | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)   |
| ხილი   | fruit, fruits                                       | 74, 149      | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)   |
| ხმა    | voice, sound                                        | 70, 164      | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმალი  | sword                                               | 161          | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)  |
| ხმელი  | dry                                                 | 103          | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)  |
| ხორცი  | meat                                                | 21           | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)  |
| ხროვა  | pack                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)  |
| ხურდა  | small change                                        | 154          | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)  |
| ხურმა  | persimmon                                           | 185          | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)  |
| ხუფი   | lid                                                 | 185          | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)   |
| ხშირი  | frequent; dense                                     | 47           | [source](https://en.wiktionary.org/w/index.php?title=ხშირი&oldid=84089131)  |
| ჯადო   | magic                                               | 91           | [source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)   |
| ჯაზი   | jazz                                                | 161          | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)   |
| ჯამი   | sum; bowl                                           | 49, 161      | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)   |
| ჯანი   | health                                              | 191          | [source](https://en.wiktionary.org/w/index.php?title=ჯანი&oldid=84121391)   |
| ჯართი  | scrap                                               | 143          | [source](https://en.wiktionary.org/w/index.php?title=ჯართი&oldid=89067419)  |
| ჯარი   | army, host                                          | 228          | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)   |
| ჯარიმა | fine; penalty                                       | 182          | [source](https://en.wiktionary.org/w/index.php?title=ჯარიმა&oldid=88153221) |
| ჯაჭვი  | chain                                               | 104          | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)  |
| ჯგუფი  | group                                               | 63           | [source](https://en.wiktionary.org/w/index.php?title=ჯგუფი&oldid=84103069)  |
| ჯვარი  | cross                                               | 143          | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)  |
| ჯიბე   | pocket                                              | 150          | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)   |
| ჯილდო  | reward                                              | 91           | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)  |
| ჯინსი  | jeans                                               | 191          | [source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)  |
| ჯიში   | breed                                               | 191          | [source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)   |
| ჯოგი   | herd                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)   |
| ჯორი   | mule                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=ჯორი&oldid=84121454)   |
| ჯოხი   | stick                                               | 91           | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)   |
| ჰაერი  | air                                                 | 133          | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)  |
| ჰავა   | climate                                             | 14           | [source](https://en.wiktionary.org/w/index.php?title=ჰავა&oldid=84121476)   |
| ჰალვა  | halva                                               | 14           | [source](https://en.wiktionary.org/w/index.php?title=ჰალვა&oldid=92945178)  |
| ჰერცი  | hertz                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)  |
| ჰიმნი  | anthem                                              | 40           | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)  |
| ჰობი   | hobby                                               | 138          | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)   |

## All 240 boards

| Level | Required answers                   | Wheel   | Grid | Difficulty |
| ----: | ---------------------------------- | ------- | ---- | ---------: |
|     1 | რქა, ლირა, ქალი, ქირა, ლარი        | ქაირლ   | 6×4  |         42 |
|     2 | ვადა, ყავა, ყდა, დავა, ავად        | ყავდა   | 7×5  |         42 |
|     3 | კარი, კვირა, კრავი, ავი, კავი      | ვაირკ   | 6×5  |         48 |
|     4 | ვიზა, ზავი, ზარი, ავზი, აზრი       | აზივრ   | 7×4  |         44 |
|     5 | ობი, როლი, ბოლი, ლორი, ბროლი       | რლბიო   | 7×5  |         46 |
|     6 | კუბი, ბლოკი, ბუკი, კილო, კუბო      | კლობიუ  | 7×5  |         56 |
|     7 | კობრი, რკო, როკი, ბრბო, კიბო       | ოირბბკ  | 6×5  |         54 |
|     8 | კუჭი, კოჭა, ჭკუა, ჭოკი, კაუჭი      | იაჭუოკ  | 7×5  |         56 |
|     9 | თავი, თვე, დათვი, იდეა, დევი       | ევდათი  | 7×5  |         54 |
|    10 | აკრი, კასრი, სარი, სია, კაჟი       | რჟისაკ  | 6×5  |         54 |
|    11 | ფენი, ფილე, ძნელი, ელფი, ნელი      | ფლძიენ  | 6×5  |         56 |
|    12 | ყრუ, ყურე, ყური, მური, ურემი       | უმყიერ  | 6×5  |         54 |
|    13 | დაფა, ფარა, ფარდა, ფაფა, რაფა      | ფარდაფ  | 7×5  |         56 |
|    14 | ლავა, ქვა, ჰავა, ჰალვა, ქალა       | ჰქლავა  | 7×5  |         54 |
|    15 | ურო, ურდო, ქუდი, ქურდი, დოქი       | დუიქრო  | 7×5  |         54 |
|    16 | ძერა, რძე, ერა, კერძო, კერა        | აძოეკრ  | 6×5  |         52 |
|    17 | ბრალი, ბზარი, ბრაზი, ბალი, ალი     | არზლიბ  | 7×5  |         58 |
|    18 | იარა, არმია, ქამარი, ქმარი, არია   | აირაქმ  | 7×5  |         64 |
|    19 | ქილა, გოლი, ქოლგა, ოლქი, იოგა      | ქოიაგლ  | 7×5  |         56 |
|    20 | ოდა, სოდა, შორს, დრო, დროშა        | ორდსშა  | 6×5  |         52 |
|    21 | ხორცი, რუხი, ცური, უცხო, ცრუ       | ორიუხც  | 7×5  |         54 |
|    22 | მთა, ნამი, თემი, მანეთი, თმა       | იეამნთ  | 7×4  |         56 |
|    23 | დილა, სადილი, სილა, ასლი, დასი     | იალიდს  | 6×5  |         60 |
|    24 | შოლტი, შორი, შტო, ტილო, ტრიო       | ტოშლირ  | 7×5  |         54 |
|    25 | წამი, მაწონი, მონა, მინა, მიწა     | ონმწია  | 6×5  |         60 |
|    26 | ჭაობი, ოთახი, ხაჭო, ხბო, თოხი      | ოახბჭით | 7×5  |         64 |
|    27 | ძალა, ძაღლი, ღია, მაღალი, ძმა      | მღლიაძა | 7×5  |         66 |
|    28 | სიმი, ლიმონი, მილი, ნისლი, ომი     | ილონსიმ | 6×5  |         68 |
|    29 | ბზა, ალფა, ბაფთა, ბაზა, ბალთა      | აზფლთაბ | 6×5  |         64 |
|    30 | შუა, შხამი, ხატი, მუშა, მუხტი      | იტხუშამ | 7×5  |         64 |
|    31 | უნარი, გუდა, ურნა, ნარდი, გუნდი    | გადურინ | 7×5  |         68 |
|    32 | ხარი, ხერხი, მახე, ხამი, მხარე     | ხიაერმხ | 7×5  |         66 |
|    33 | სპა, ამპერი, რეპი, ერი, პრემია     | ეირამსპ | 7×5  |         68 |
|    34 | შუქი, ქვაბი, შუბი, შავი, ქვიშა     | შქივაუბ | 7×5  |         66 |
|    35 | ჭალა, მალა, კალამი, კალია, ჭია     | იკჭამალ | 6×5  |         68 |
|    36 | წუნი, კანი, ძუნწი, კუნძი, უკან     | იკძანწუ | 7×5  |         66 |
|    37 | პიტნა, ტანი, ტიპი, ნიკაპი, პიკი    | ტანკპიი | 7×5  |         70 |
|    38 | მტვერი, მტერი, ნერვი, ტირე, მერი   | ტემირნვ | 7×5  |         72 |
|    39 | ყბა, აბი, საბანი, ყანა, ყასაბი     | ყანბაის | 6×5  |         68 |
|    40 | ნაზი, მიზანი, ზმნა, ზიანი, ჰიმნი   | ნჰაიიზმ | 7×5  |         72 |
|    41 | ბანქო, ექო, ქონება, ნება, ქოსა     | ქეანსობ | 7×5  |         68 |
|    42 | ღობე, ბურღი, ღორი, ღრუ, ბიურო      | რბღეუოი | 6×5  |         64 |
|    43 | ლინზა, მელა, მელანი, მზე, მალე     | მელინაზ | 6×5  |         68 |
|    44 | ლობიო, ობოლი, ოქრო, ქორი, ლოქო     | ქლოროიბ | 6×5  |         66 |
|    45 | დედა, დეიდა, დიდი, დიადი, ქედი     | ქაიიდედ | 7×5  |         66 |
|    46 | ბატონი, ტანგო, ტბა, ტონი, გობი     | გინტბაო | 7×5  |         68 |
|    47 | ცხვირი, ხშირი, ვირი, ცივი, იხვი    | იცვხრიშ | 6×5  |         70 |
|    48 | ვირუსი, კირი, კურსი, რისკი, კივი   | უირსკივ | 6×5  |         72 |
|    49 | კამათი, მაჯა, ჯამი, აჯიკა, კამა    | მჯთააკი | 6×5  |         70 |
|    50 | ტოტი, ასო, ტიტა, ოსტატი, პოსტი     | ტტპოასი | 6×5  |         68 |
|    51 | უბე, ბუდე, ბენდი, ბნელი, ლუდი      | ბდნილუე | 7×5  |         64 |
|    52 | შნო, შენობა, კანოე, აკნე, შობა     | ონბაეკშ | 6×5  |         68 |
|    53 | ხალი, იახტა, ფილა, ტალახი, ტაფა    | ხლიააფტ | 7×5  |         70 |
|    54 | კრემი, კომში, შოკი, მორი, შრე      | მეკრშოი | 7×5  |         64 |
|    55 | სკამი, აუზი, უმი, მუსიკა, მუსი     | ზსმიაუკ | 7×5  |         68 |
|    56 | შვილი, ჩვილი, ელჩი, შველი, ეშვი    | ჩვლშეიი | 7×5  |         68 |
|    57 | ცხიმი, ხედი, ხიდი, იმედი, ციხე     | იდხციემ | 7×5  |         66 |
|    58 | ბუნება, ბებია, ბინა, უბანი, ენა    | ნუაებბი | 7×5  |         70 |
|    59 | თაფლი, თოლია, ცალი, თოფი, ცილა     | ფიათლცო | 7×5  |         66 |
|    60 | ზებრა, ზეგ, ზეცა, ბგერა, ბაგე      | ზგცბარე | 7×5  |         64 |
|    61 | ღომი, ატომი, ღრმა, ტარი, მარტო     | ტრიომაღ | 7×5  |         66 |
|    62 | მითი, მაისი, თითი, თასი, მისია     | ასიითთმ | 7×5  |         66 |
|    63 | ჯგუფი, აგური, რუჯი, ფიგურა, უჯრა   | რუფგაჯი | 7×5  |         72 |
|    64 | პროზა, ღერო, ეზო, პოზა, ოპერა      | აროპეზღ | 7×5  |         64 |
|    65 | თახვი, თივა, სვავი, თხა, ხავსი     | თვსივხა | 7×5  |         66 |
|    66 | არფა, პაუზა, ფაზა, ფრაზა, აფრა     | ააუპფზრ | 6×5  |         66 |
|    67 | ნალი, საწოლი, სიო, წონა, სალონი    | ნწსლაოი | 7×5  |         70 |
|    68 | ლაგამი, ლამა, მაგია, ლიგა, წამალი  | წამლაიგ | 7×5  |         74 |
|    69 | წვერი, ტერფი, წრე, წევრი, ფეტვი    | ტვრწიეფ | 7×5  |         68 |
|    70 | სახე, ასთმა, ხმა, თემა, თასმა      | თხამაეს | 7×5  |         64 |
|    71 | სიძე, ძეგლი, ძელი, გველი, ველი     | ლვძეგსი | 7×5  |         66 |
|    72 | ბარდა, ბარი, დარი, დაბა, ჭადარი    | დაბრჭია | 7×5  |         70 |
|    73 | ზღვა, ვარდი, ზღვარი, ღარი, ვაზი    | ზვაღრდი | 6×5  |         70 |
|    74 | ლეიბი, ხიბლი, ხილი, კბილი, კეხი    | კლებიიხ | 7×5  |         68 |
|    75 | ბუშტი, ტაბუ, ტაში, ბაიტი, ბატი     | უაიშიბტ | 7×4  |         66 |
|    76 | ღილი, ლაღი, იღლია, იღბალი, ღიპი    | პაღიილბ | 6×5  |         70 |
|    77 | რაზმი, მურა, მუმია, მუზა, უარი     | მმუიზარ | 7×5  |         66 |
|    78 | რუკა, ტურა, კარატი, კატა, კარტი    | უიაარკტ | 6×5  |         70 |
|    79 | ექიმი, გმირი, ირემი, ქერი, გემი    | გრიეიქმ | 7×5  |         68 |
|    80 | ბანი, ბანკი, კიბე, კაცი, ცნება     | კენიცაბ | 7×5  |         66 |
|    81 | ლორი, მორალი, რომი, ოფლი, ფორმა    | რლმოაფი | 6×5  |         70 |
|    82 | ვაზა, ზვავი, ყავა, ყვავი, ვიზა     | ვზივაყა | 7×5  |         66 |
|    83 | კალა, კალთა, ხალათი, თიხა, კათხა   | იხკათლა | 7×5  |         72 |
|    84 | თუთია, ვალი, თუთა, თათი, თვალი     | ულთთაივ | 7×5  |         66 |
|    85 | ფასი, უფასო, ფონი, ფსონი, სუნი     | ფნაუისო | 7×5  |         66 |
|    86 | ფერი, ფერმა, ფირმა, მეფე, ფარი     | მეფეარი | 7×5  |         66 |
|    87 | ქუჩა, ჩაი, ჩუსტი, აუტი, ტაქსი      | სტიქუჩა | 7×5  |         64 |
|    88 | ოინი, რაიონი, რკინა, კონა, ნიორი   | ნრაიკიო | 7×5  |         72 |
|    89 | ნიშა, ნუში, ძუა, განძი, გუშინ      | გნძუშაი | 7×5  |         64 |
|    90 | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი    | ივაყტეს | 7×5  |         70 |
|    91 | ჯოხი, დახლი, ჯილდო, ოჯახი, ჯადო    | დიხალჯო | 6×5  |         68 |
|    92 | ღვედი, დონე, ღვინო, ღონე, დევი     | ნდეოღივ | 7×5  |         66 |
|    93 | გვარი, ვერსია, სერია, არსი, გარსი  | ვასრეგი | 7×5  |         74 |
|    94 | ბრმა, ძაბრი, ძმარი, ბიძა, ბოძი     | ბძიმაორ | 7×5  |         66 |
|    95 | ხროვა, თარო, ფხა, ფართო, ფრთა      | ვთფაოხრ | 7×4  |         64 |
|    96 | ყელი, ყველი, ლეკვი, კიდე, კლდე     | ყვდეკილ | 7×5  |         66 |
|    97 | ძველი, ძეხვი, ფილე, ფეხი, ხევი     | ვეფძხლი | 7×5  |         66 |
|    98 | ბელი, ბალეტი, დიეტა, იდეა, ბადე    | ედატლბი | 7×5  |         70 |
|    99 | ტორტი, ტრიო, ჭორი, კორტი, კოჭი     | ტიოჭრკტ | 7×4  |         66 |
|   100 | კვალი, ჭავლი, ელვა, ვაკე, ეჭვი     | იეკალჭვ | 7×5  |         66 |
|   101 | დაფნა, პანდა, პაპა, დანა, დაფა     | ნფპადპა | 7×5  |         66 |
|   102 | ადრე, გარემო, დოგმა, გორა, ოდა     | რდაეომგ | 7×5  |         68 |
|   103 | ხმელი, გემო, მგელი, გლეხი, ლომი    | ეიოგლხმ | 7×5  |         68 |
|   104 | ჭიქა, ჯაჭვი, ავეჯი, ჭექა, ქაჯი     | იექაჭჯვ | 7×5  |         66 |
|   105 | ნეკნი, ეტლი, ნელი, კეტი, კლიტე     | ნნტლეიკ | 7×5  |         66 |
|   106 | კუბი, ტომი, ტუმბო, ბუტკო, კიბო     | იუკმბოტ | 7×5  |         66 |
|   107 | წმინდა, ნამი, წინდა, ძმა, წამი     | დიძამწნ | 6×5  |         68 |
|   108 | სტილი, ფისი, ფლოტი, ლიფტი, ოფისი   | ტფლიისო | 7×5  |         70 |
|   109 | შავი, საშიში, შაშვი, შიში, ავი     | ავშისში | 7×5  |         68 |
|   110 | მხეცი, ცომი, ხამი, ემოცია, მახე    | ოიხეაცმ | 7×5  |         70 |
|   111 | ნორმა, ორგანო, ორმო, მანგო, მონა   | რაონოგმ | 6×5  |         72 |
|   112 | სია, ასაკი, უკან, საუნა, საკანი    | ისაუაკნ | 7×5  |         70 |
|   113 | ბოთლი, ბოსელი, ობი, თესლი, სითბო   | ითოლესბ | 7×5  |         72 |
|   114 | პური, კოპი, პონი, კუპონი, ნუკრი    | კნრიოუპ | 7×5  |         70 |
|   115 | გვერდი, ბედი, ერი, გერბი, გედი     | ვგერდბი | 7×5  |         68 |
|   116 | ჭაღი, ჭკუა, ბაღი, ჭაბუკი, კაუჭი    | კბუაღჭი | 7×5  |         70 |
|   117 | დოზა, მოდა, უზადო, ჩუმად, ზომა     | უდომჩაზ | 7×5  |         66 |
|   118 | ქსელი, აქლემი, საქმე, ლექსი, მალე  | ქსლიამე | 7×5  |         74 |
|   119 | ბირჟა, ვაჟი, აზრი, ბზარი, ბზა      | ზრაიჟვბ | 7×5  |         64 |
|   120 | სოუსი, სპილო, სული, პლუსი, პულსი   | უისპსლო | 7×5  |         70 |
|   121 | ჭერი, ჭირი, ჭრელი, ბიჭი, რბილი     | ჭბლირეი | 6×5  |         66 |
|   122 | მეტრი, მტერი, ურჩი, ტუჩი, ჩუმი     | ტმურჩეი | 7×5  |         66 |
|   123 | მილი, მშრალი, ლირა, მარში, მარილი  | ლრიშიმა | 6×5  |         74 |
|   124 | ზიანი, ნაზი, პრიზი, ნაპირი, პირი   | პზირიან | 7×5  |         72 |
|   125 | გენი, ვენა, წვენი, ნავი, წნევა     | ნევიაწგ | 7×5  |         66 |
|   126 | ჩირი, ჩლიქი, ჩქარი, ქალი, ქილა     | იარიქლჩ | 7×5  |         66 |
|   127 | ქარვა, თავლა, ქალა, ლავა, ლაქა     | ავაქლრთ | 7×5  |         66 |
|   128 | კაკალი, ალი, კალია, კოალა, კაკაო   | ოკალიაკ | 7×5  |         72 |
|   129 | თევზი, ზნე, თვე, წვეთი, ზეთი       | იეწვნთზ | 6×5  |         62 |
|   130 | ძვალი, ძაფი, ფლავი, ფილა, ძიძა     | ფლძივაძ | 7×5  |         66 |
|   131 | იოდი, დრო, კოდი, რისკი, დისკი      | სიდრიოკ | 7×5  |         64 |
|   132 | თეორია, თეძო, რძე, ძია, თერძი      | იოთეძარ | 7×5  |         66 |
|   133 | არხი, ცხარე, ჰაერი, ჰერცი, ერა     | ხეცრჰაი | 7×5  |         66 |
|   134 | გოჭი, საბჭო, ჭაობი, გობი, ასო      | ოგჭბასი | 7×5  |         64 |
|   135 | ადათი, თაღი, საღი, საათი, ღია      | სთაიდაღ | 7×5  |         64 |
|   136 | ქიმია, ქმარი, მირაჟი, ქარი, რქა    | ჟრაიმქი | 7×5  |         70 |
|   137 | არაყი, მანია, მყარი, ყანა, იარა    | ანაყმრი | 7×5  |         68 |
|   138 | ლობიო, ბოლი, ჰობი, ბოლოკი, ბოლო    | ჰბკიოოლ | 7×5  |         70 |
|   139 | ნემსი, მუსი, წესი, წუნი, მენიუ     | სეწიუნმ | 7×5  |         66 |
|   140 | ყბა, დაბლა, დაბალი, ალყა, ყდა      | ლყადბაი | 7×5  |         66 |
|   141 | აბი, ყალბი, წაბლი, წყალი, ლუწი     | ლწყიაუბ | 7×5  |         66 |
|   142 | ჩიხი, იხვი, ხარი, ჩვარი, ჩარხი     | ვჩიახრი | 7×5  |         66 |
|   143 | ხარჯი, თხა, ჯართი, ჯვარი, ვირთხა   | თრიხაჯვ | 7×5  |         72 |
|   144 | წებო, ბევრი, წვერი, ბეწვი, ბერი    | ეროვბწი | 7×5  |         68 |
|   145 | ყრუ, ყუთი, ლურჯი, რუჯი, რთული      | ირთულყჯ | 7×5  |         64 |
|   146 | კამა, ლამპა, ლუკმა, პუმა, ლამა     | კაამულპ | 7×5  |         66 |
|   147 | ზურგი, აუზი, აგური, ღრუ, ღუზა      | ზრიუაღგ | 7×5  |         64 |
|   148 | კანი, კნუტი, პიტნა, კუპატი, ტანკი  | ნკტპიუა | 7×5  |         74 |
|   149 | ხავსი, სხივი, ხვალ, ხილი, ვალსი    | ლაიხსვი | 7×5  |         68 |
|   150 | ილეთი, ბილეთი, ლეიბი, ჯიბე, თბილი  | ელიიჯთბ | 7×5  |         74 |
|   151 | უხეში, შაშხი, შუშა, შეშა, შუა      | შშიეხაუ | 7×5  |         64 |
|   152 | ბარი, ბურთი, წარბი, უარი, წუთი     | რთუიწაბ | 7×5  |         66 |
|   153 | ნული, კუნთი, კლოუნი, კინო, უთო     | ნითლკოუ | 7×5  |         68 |
|   154 | კუდი, კრუხი, რუკა, აკრი, ხურდა     | რაკხუდი | 7×5  |         66 |
|   155 | ვადა, ცოდვა, ცოდნა, ავად, დავა     | ნცადვაო | 6×5  |         66 |
|   156 | კუზი, ბუზი, შუბლი, კლუბი, ბუკი     | კშზლბიუ | 7×5  |         66 |
|   157 | მოკლე, თოკი, მთელი, კილო, კომლი    | ლიკმოთე | 7×5  |         68 |
|   158 | ზარი, ავზი, ვაზა, ავარია, ავაზა    | ვარააიზ | 7×5  |         70 |
|   159 | გლუვი, ვოლტი, ტილო, ტოლი, გული     | გვტოლიუ | 7×5  |         66 |
|   160 | ქურა, ასლი, სრული, ქულა, ქუსლი     | ლქსაიურ | 6×5  |         66 |
|   161 | მაზლი, ხაზი, ჯაზი, ხმალი, ჯამი     | ხიაზლჯმ | 7×5  |         66 |
|   162 | ურემი, მცირე, მუქი, მური, ცრუ      | იეუქცრმ | 7×5  |         64 |
|   163 | ფრესკა, ქერა, კაფე, სარკე, კეფა    | ქკაესრფ | 6×5  |         70 |
|   164 | ხალიჩა, ჩალა, ახალი, აჩმა, ხმა     | ახმლაიჩ | 6×5  |         68 |
|   165 | ეკალი, იოგა, კოლეგა, ალოე, გოლი    | კაეოგლი | 6×5  |         70 |
|   166 | ფიჭა, ფენა, ფარი, ნაჭერი, ფრანი    | ეარფჭნი | 6×5  |         70 |
|   167 | ლაღი, ალიონი, იღლია, ალღო, იოლი    | ღლიაიონ | 6×5  |         70 |
|   168 | სურათი, სარი, სუფთა, სუფრა, არსი   | ისრუაფთ | 6×5  |         72 |
|   169 | კირი, რკალი, რძალი, ლარი, ძილი     | ძილრკია | 7×5  |         66 |
|   170 | კერა, ენა, ეკრანი, არენა, ნაკერი   | აკაიენრ | 7×5  |         72 |
|   171 | რიგი, იაფი, ბარგი, ბაგირი, ფირი    | ბიაიგრფ | 6×5  |         70 |
|   172 | ზეგ, ერთად, ზედა, გარეთ, გზა       | ერზადთგ | 6×5  |         62 |
|   173 | ფაქტი, ფოსტა, ქაოსი, ტაქსი, ფასი   | ფაოქსიტ | 7×5  |         70 |
|   174 | ეპოქა, ექო, თექა, მთა, პოემა       | თქომეპა | 7×5  |         62 |
|   175 | თაგვი, თივა, იგავი, ნივთი, თავი    | ინთიავგ | 7×5  |         68 |
|   176 | თოვლი, ვიდეო, ველი, დოლი, ლოდი     | ედილოთვ | 7×5  |         66 |
|   177 | ამწე, ზეწარი, მზე, მწარე, მზა      | რზიმაწე | 7×5  |         66 |
|   178 | მედია, ღამე, დღე, მედალი, იდეა     | იდლამღე | 7×5  |         68 |
|   179 | ჩაი, ჩეკი, კანჭი, ჭია, კენჭი       | იკეჩნჭა | 7×5  |         62 |
|   180 | კვიცი, ფიცი, ფიჭვი, ცივი, კივი     | ივცკჭიფ | 7×5  |         66 |
|   181 | ანწლი, ნალი, წიგნი, ნაწილი, წილი   | წლგნაიი | 7×5  |         72 |
|   182 | აბჯარი, არია, მაჯა, ბრმა, ჯარიმა   | ჯმარაბი | 7×5  |         72 |
|   183 | ბანაკი, ბინა, კაბინა, კაბა, ნაკლი  | ნკალაბი | 6×5  |         74 |
|   184 | პორტი, პოეტი, სპორტი, სიო, ტირე    | პტიეოსრ | 7×5  |         70 |
|   185 | ხურმა, ხუფი, მუხა, რუხი, მხარი     | რიუამხფ | 7×5  |         66 |
|   186 | ადვილი, ცალი, ცვილი, ცილა, დილა    | ვილიდცა | 6×5  |         70 |
|   187 | მუდამ, უმი, მადა, მამიდა, მამა     | იმაუდმა | 7×5  |         68 |
|   188 | ხელი, მუცელი, ცული, მუხლი, ციხე    | ულმცხიე | 7×5  |         70 |
|   189 | ბატი, კიბე, პაკეტი, ტბა, ეტაპი     | პბკიტაე | 6×5  |         68 |
|   190 | ირემი, მშიერი, შრე, შური, მერი     | იიერშმუ | 6×5  |         68 |
|   191 | ჯიში, ნიშა, ჯინსი, შანსი, ჯანი     | ჯშნიასი | 7×5  |         66 |
|   192 | ენოტი, ნესვი, ტენი, ტონი, ვეტო     | ნტსიეოვ | 7×5  |         66 |
|   193 | კვირა, კვარცი, კრავი, პიცა, კავი   | პაკცრვი | 6×5  |         72 |
|   194 | კობრა, ბანი, კონა, კიბო, ბორანი    | ონბკიარ | 7×5  |         70 |
|   195 | ეტლი, მელა, მლაშე, მეტალი, შალი    | ლიტმეშა | 7×5  |         70 |
|   196 | სესია, სქესი, ქვა, ავი, სავსე      | სავქესი | 7×5  |         64 |
|   197 | ერი, კისერი, რეისი, სიძე, კერძი    | ირსკიძე | 7×5  |         70 |
|   198 | ფინალი, ლაიმი, ფილმი, მინა, ფაილი  | ილიფანმ | 7×5  |         74 |
|   199 | ობი, ბიცოლა, ბალი, ალბომი, ცომი    | ცმალბიო | 6×5  |         70 |
|   200 | ნავი, ტვინი, ყინვა, ტყავი, ტყვია   | ტნივყაი | 7×5  |         70 |
|   201 | ჯოგი, გრილი, ჯორი, რგოლი, ლორი     | ირიგჯოლ | 7×5  |         66 |
|   202 | პარკი, კარი, პარიკი, ჩიპი, პირი    | პიიჩრაკ | 7×5  |         70 |
|   203 | მეტრო, მელოტი, როლი, ტომი, ლომი    | მლეტრიო | 7×5  |         70 |
|   204 | წავი, წვიმა, მიწა, ომი, ოვალი      | ლვმაოწი | 7×5  |         64 |
|   205 | შორი, კოკორი, შოკი, კოშკი, რკო     | კროკშიო | 7×5  |         68 |
|   206 | ზავი, ვაზი, კვოტა, კოვზი, აზოტი    | იზატოვკ | 7×5  |         68 |
|   207 | ლიგა, დალაქი, ქადა, ქილა, გალია    | ქადგლია | 6×5  |         70 |
|   208 | მკლავი, კვალი, კვამლი, თმა, ალი    | ლკივთმა | 7×5  |         70 |
|   209 | ასო, კლასი, სკოლა, სილა, სოკო      | ოკოლსაი | 7×5  |         64 |
|   210 | ვიზა, ზონა, გაზი, ვაგონი, გვიან    | ზგიანოვ | 6×5  |         70 |
|   211 | თონე, ფენი, ფონდი, დენთი, დონე     | ეფთიდნო | 7×5  |         66 |
|   212 | ფული, ელფი, ფესვი, სველი, სული     | ვიუელფს | 7×5  |         66 |
|   213 | არქივი, რქა, ქარი, ძვირი, ვირი     | ივარძიქ | 6×5  |         68 |
|   214 | რადიო, ყადრი, ყოჩი, დრო, ოდა       | იოდყრჩა | 7×5  |         62 |
|   215 | გუბე, მგელი, უბე, ბმული, გემი      | გუიმებლ | 7×5  |         64 |
|   216 | აუტი, დუეტი, სია, სტუდია, დასი     | ტდსიუაე | 6×5  |         68 |
|   217 | ცხელი, ნოხი, ცხენი, ცოლი, ცელი     | იელხცნო | 7×5  |         66 |
|   218 | აბი, ბაჭია, ყაბაყი, ყბა, ბაყაყი    | აყაჭიყბ | 7×5  |         70 |
|   219 | ჩირი, ტარი, საიტი, ისარი, ჩიტი     | ტჩარიის | 7×5  |         66 |
|   220 | პიკი, კუპრი, ტიპი, ტური, კიტრი     | რპუტკიი | 7×5  |         66 |
|   221 | ბაბუა, ბამბა, ბზა, მუზა, ბაზა      | უბზმბაა | 6×5  |         64 |
|   222 | კაცი, კეცი, სცენა, აკნე, ანკესი    | ნაიცესკ | 7×5  |         70 |
|   223 | ნაძვი, აკვანი, ძია, კვანძი, ანძა   | ნკძიაავ | 7×5  |         72 |
|   224 | ძროხა, ძერა, რძე, ხეობა, ერბო      | როხებაძ | 7×5  |         64 |
|   225 | ზნე, მზიანი, ნაზი, ზეიმი, ზმნა     | იზნეამი | 6×5  |         68 |
|   226 | ბენდი, ბეჭი, დენი, ბინდი, ნიჭი     | ნიბიეჭდ | 7×5  |         66 |
|   227 | შვრია, არფა, ფარა, აფიშა, რაფა     | აივშაფრ | 7×5  |         66 |
|   228 | ქირა, ჯარი, აჯიკა, კარაქი, იჯარა   | კქაჯირა | 7×5  |         72 |
|   229 | რიტმი, რომი, ურო, იუმორი, მორი     | ტიმუოირ | 7×5  |         68 |
|   230 | ლოყა, კოდალა, კოალა, კალა, ყდა     | ოკდალყა | 7×4  |         68 |
|   231 | ვეშაპი, ვაშლი, ვალი, ელვა, ვილა    | პლიავეშ | 7×5  |         70 |
|   232 | ტახტი, შტატი, შხაპი, ხატი, ტიტა    | პტშტიხა | 7×5  |         68 |
|   233 | წერილი, ძირი, წრე, წელი, ძლიერი    | იძიწელრ | 6×5  |         70 |
|   234 | სანდო, პონი, საპონი, სპა, ოსპი     | სიაპდონ | 7×5  |         68 |
|   235 | აბანო, თაობა, თხა, ხბო, თანხა      | ოანთხაბ | 7×5  |         64 |
|   236 | ხალხი, სახლი, მსხალი, ასლი, ხამი   | ისამლხხ | 7×5  |         72 |
|   237 | ფლოტი, ტოლი, ფოთოლი, ფოტო, ოფლი    | ფთოლტოი | 6×5  |         70 |
|   238 | მაგიდა, დრამა, დარი, არმია, მარაგი | არდგიმა | 7×5  |         76 |
|   239 | ნეფე, კანოე, ოკეანე, კეფა, კაფე    | ეოეაფნკ | 6×5  |         70 |
|   240 | გრამი, გიტარა, იარა, მაგარი, ატამი | აგმარიტ | 7×5  |         76 |
