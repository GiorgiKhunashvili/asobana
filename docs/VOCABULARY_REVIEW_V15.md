# Journey vocabulary and campaign review — revision 15

The owner reviewed the 152 unused revision-14 approvals on 2026-10-18 and
removed 12 spellings: `ბალონი`, `ბაჟე`, `გარაჟი`, `ზუსტად`, `კარგად`, `კასეტი`, `უცებ`, `ფანარი`, `შიგნით`, `ძალიან`, `ხშირად`, `ჯიპი`.
These are excluded from required answers, accepted variants and bonuses starting
with revision 15. The other **140** are explicitly owner-approved for required use
within all existing rules. This is an individual editorial decision; it does not
claim that every removed spelling is linguistically invalid. It does not approve
additional words beyond the supplied list.

## Measured results

| Measure                               | Revision 14 | Revision 15 |
| ------------------------------------- | ----------: | ----------: |
| Levels / stops                        |    240 / 48 |    240 / 48 |
| Required slots                        |       1,200 |       1,200 |
| Approved non-plural spellings         |         831 |         819 |
| Distinct required words used          |         679 |         680 |
| Slots after a word’s first appearance |         521 |         520 |
| Unused approvals                      |         152 |         139 |
| Minimum repeat gap                    |          75 |          75 |
| Required plural words                 |           0 |           0 |

Repeated slots decrease by **0.19%** against revision 14 and
**14.89%** against revision 13. There are **6 newly used words**
from the owner-approved list and **5 previously used words retired**.
The target pool’s reduction from 831 to 819 is an editorial removal, not increased
campaign coverage. Bonus appearances are not counted in required-word repetition.

The gain in distinct words has a concentration tradeoff: words used four times
fall from 5 to 4, while words used three times rise from 121 to 128. Distinct-word
coverage remains the primary objective specified in AGENTS.md; this rebuild does
not improve every repetition measure.

| Required appearances per word | Number of words |
| ----------------------------- | --------------: |
| 1                             |             296 |
| 2                             |             252 |
| 3                             |             128 |
| 4                             |               4 |

Consecutive repeat gaps range from 75 to 211 levels; mean
98.05, median 87. All accepted spellings
are canonical-only, and the 75-level floor applies across all chapter boundaries.

## Editorial audit and provenance

`everyday-targets-v15.json` contains 819 retained approvals with inherited
individual meanings and source provenance. Its `ownerReview` records the exact
140 approvals and 12 exclusions; the other 679 entries retain their earlier
assistant editorial approval. No fresh external source check, new dictionary
entry, native-speaker credential or full-pool owner review is claimed.

Every required spelling and variant in the exact draft was inspected against
these retained decisions, glosses, source references and explicit morphology.
The 38 verified plurals remain bonus-only. The unchanged v13 reference dictionary
contains 1,312 entries, of which **1,262** are playable under revision-15 policy.
Valid rare words remain optional bonuses. All formable eligible extras are
recognized, and bonuses never block completion or award twice on one board.

## Search and limitations

The search prioritizes distinct required words, followed by reducing heavy reuse.
It explores compatible wheels, seeded layouts, single-board exchanges and combined
replacements across the campaign. Only solutions preserving every existing hard
constraint are eligible for promotion. Final recipes reproduce the selection
without any optimizer cache. This bounded search is **not a proof of maximum
coverage**, and unused approvals are not rejected or declared impossible.

Using all 819 words would give an arithmetic floor of 381 repeated slots, but
that does not prove all words can fit compatible five-answer boards with the
existing wheel, crossing, pacing and 75-level gap constraints. Further dictionary
expansion still requires individual review. The owner has approved the remaining
140 unused words; repeated requests to approve those words are unnecessary.

## Progression, geometry and migration

All 240 levels retain five required answers of 3–6 letters. Length totals are
156 three-letter, 513 four-letter, 432 five-letter and
99 six-letter slots. Five-letter answers start at level 3 and six-letter
answers at level 18. Wheels remain 5 / 6 / 7 tiles at levels 1–5 / 6–25 / 26–240.
Early six-letter quotas, later six-letter stops, chapter peaks/recovery and the
maximum ten-point upward transition remain enforced. Difficulty is an estimate,
not player validation. Connected layouts, exact tile multiplicities, density,
phone cell sizes, wheel touch targets and unique wheels pass the release gates.

Pack identity, 240 level IDs, 48 stop definitions and storage identifiers remain
stable. Historical revisions 1–14 retain their exact dictionaries/packs for save
validation. Migration preserves completed boards, partial solved credits, coins,
paid hints, settings, postcards and lifetime bonus rewards across restart.
Removed bonus spellings stop counting on the current board, while prior earnings
remain preserved. Revision 15 permits 1,334 hint credits, retaining revision 14’s
1,292 plus a replacement board. Continuing targets retain IDs on the same level.

## Validation

Completed locally on 2026-10-18:

- `npm run check`: passed TypeScript, ESLint, 212 Jest tests in 27 suites,
  all 240 engine solves via `validate:content`, and Prettier.
- `uv run pytest`: 124 passed. Owner exclusions are tested in all three roles,
  with historical vocabulary isolation, preserved plural bonuses and exact
  reviewed-draft reproduction.
- `uv run ruff check .`, `uv run ruff format --check .` and `uv run mypy src`:
  passed; strict typing covers 13 source files.
- `npx expo export --platform ios`: passed; output is in
  `artifacts/journey-v15/ios-export`. This is an export, not a native-device test.
- Independent CLI rebuild with `PYTHONHASHSEED=1517`: exact reviewed digest.
- All 46 captured historical dictionary/pack/recipe/review JSON files retain
  their pre-edit SHA-256 values.
- SQLite migration tests cover partial and completed revision-14 saves,
  retired-answer solved credits, paid hints at the historical cap and a further
  hint after migration, coins, bonus rewards, settings, postcards and restart.
  Existing tests continue to cover older migrations.

Two older app assertions initially needed updating: the active playable vocabulary
count is now 1,262, and continuing-ID preservation is checked separately for
13→14 and 14→15. A word reintroduced after being absent in an intermediate pack
need not reclaim a historical ID already occupied by another continuing word;
migration resolves earned credits by spelling. The complete final check passed.

Reviewed draft SHA-256: `0efd6e34b208acb225fe376a0f01be7b9efef77ba3c1d24bfc5f91cf5888f803`.

Rebuild with `scripts/rebuild-wide-content.py --revision 15`; use
`--promote-reviewed --output content/levels/discovery.v15.json` only after auditing
the exact draft. No native-device test or TestFlight upload is claimed.

## Newly used owner-approved words

თამაში, პილოტი, რაიონი, სეტყვა, ფუნჯი, ქვევით

## Previously used words no longer required

უფრო, ფუნტი, ქათამი, ქოლგა, წუთი

## Unused approved words (139)

| Word   | Recorded meaning            | Source                                                                      |
| ------ | --------------------------- | --------------------------------------------------------------------------- |
| ადგილი | place                       | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114) |
| ავტორი | author                      | [source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573) |
| ამბავი | story, news                 | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516) |
| ანბანი | alphabet                    | [source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407) |
| არწივი | eagle                       | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068) |
| ასანთი | match                       | [source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032) |
| ბაბუა  | grandfather, grandpa        | [source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)  |
| ბავშვი | child                       | [source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503) |
| ბალიში | pillow, cushion             | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170) |
| ბამბა  | cotton, cotton wool         | [source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)  |
| ბანანი | banana                      | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335) |
| ბეკონი | bacon                       | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047) |
| ბერეტი | beret                       | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646) |
| ბეჭედი | ring                        | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424) |
| ბილიკი | path                        | [source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672) |
| ბრბო   | crowd                       | [source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)   |
| ბრინჯი | rice                        | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506) |
| ბუდე   | nest                        | [source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)   |
| ბუნება | nature                      | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241) |
| ბუჩქი  | bush, shrub                 | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)  |
| გეგმა  | plan                        | [source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)  |
| გიტარა | guitar                      | [source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739) |
| გოგო   | girl                        | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)   |
| გუბე   | puddle                      | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)   |
| დიდი   | big                         | [source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)   |
| დღეს   | today                       | [source](https://en.wiktionary.org/w/index.php?title=დღეს&oldid=89998726)   |
| ექთანი | nurse                       | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646) |
| ვეფხვი | tiger                       | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960) |
| ვეშაპი | whale                       | [source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435) |
| ვირუსი | virus                       | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530) |
| ზაზუნა | hamster                     | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134) |
| თამადა | toastmaster                 | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151) |
| თარიღი | date                        | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319) |
| თეფში  | plate                       | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)  |
| თონე   | bread oven                  | [source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)   |
| თოჯინა | doll                        | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714) |
| თუთა   | mulberry                    | [source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)   |
| იარაღი | weapon, tool                | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054) |
| იატაკი | floor                       | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760) |
| იუმორი | humor                       | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113) |
| კაკალი | walnut; walnut tree         | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192) |
| კაკაო  | cocoa                       | [source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)  |
| კალათა | basket                      | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984) |
| კალამი | pen                         | [source](https://en.wiktionary.org/w/index.php?title=კალამი&oldid=92468658) |
| კამერა | chamber                     | [source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969) |
| კანონი | law                         | [source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329) |
| კარადა | cupboard, wardrobe, closet  | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032) |
| კარატე | karate                      | [source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608) |
| კედელი | wall                        | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872) |
| კენკრა | berry                       | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952) |
| კვამლი | smoke                       | [source](https://en.wiktionary.org/w/index.php?title=კვამლი&oldid=84116122) |
| კვანძი | knot                        | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089) |
| კოლეგა | colleague                   | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090) |
| კოლოფი | box                         | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231) |
| კომეტა | comet                       | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201) |
| კომოდი | chest of drawers            | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206) |
| კოღო   | mosquito                    | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)   |
| კოცონი | bonfire                     | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332) |
| კუთხე  | corner                      | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)  |
| ლიმონი | lemon                       | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519) |
| მაგიდა | table                       | [source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591) |
| მანერა | manner                      | [source](https://en.wiktionary.org/w/index.php?title=მანერა&oldid=84099636) |
| მასალა | material                    | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175) |
| მატყლი | wool                        | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270) |
| მონეტა | coin                        | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079) |
| მტვერი | dust                        | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826) |
| მუცელი | stomach, tummy              | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402) |
| მღვიმე | cavern                      | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497) |
| ნაკადი | gush, spurt, squirt, stream | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276) |
| ნაჭერი | piece, cloth                | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132) |
| ნიშანი | sign                        | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468) |
| ობობა  | spider                      | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)  |
| ოკეანე | ocean                       | [source](https://en.wiktionary.org/w/index.php?title=ოკეანე&oldid=84117787) |
| ორბიტა | orbit                       | [source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483) |
| პანდა  | panda                       | [source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)  |
| პაპა   | grandfather                 | [source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)   |
| პაროლი | password                    | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601) |
| პასტა  | paste                       | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)  |
| პატივი | honor                       | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548) |
| პაუზა  | pause                       | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)  |
| პრემია | prize                       | [source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288) |
| ჟელე   | jelly                       | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)   |
| საბანი | blanket                     | [source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633) |
| საბუთი | document                    | [source](https://en.wiktionary.org/w/index.php?title=საბუთი&oldid=84107021) |
| საგანი | object, subject             | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780) |
| სადილი | midday meal                 | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533) |
| სალათა | salad                       | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797) |
| სამეფო | kingdom                     | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981) |
| საფულე | wallet                      | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843) |
| საწოლი | bed                         | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101) |
| სეზონი | season                      | [source](https://en.wiktionary.org/w/index.php?title=სეზონი&oldid=84118932) |
| სისხლი | blood                       | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162) |
| სკვერი | public square               | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142) |
| სხეული | body                        | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318) |
| ტალღა  | wave                        | [source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)  |
| ტექსტი | text                        | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105) |
| ტვირთი | load                        | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860) |
| ტომარა | sack                        | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123) |
| უდაბნო | desert                      | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660) |
| უფრო   | more                        | [source](https://en.wiktionary.org/w/index.php?title=უფრო&oldid=92228078)   |
| უცხო   | foreign, unfamiliar         | [source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)   |
| ფიზიკა | physics                     | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730) |
| ფილტვი | lung                        | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916) |
| ფილტრი | filter                      | [source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240) |
| ფიფქი  | snowflake                   | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)  |
| ფოკუსი | stunt, trick                | [source](https://en.wiktionary.org/w/index.php?title=ფოკუსი&oldid=84102291) |
| ფოტო   | photo                       | [source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)   |
| ფუნტი  | pound                       | [source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)  |
| ფქვილი | flour                       | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987) |
| ქაბაბი | kebab                       | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993) |
| ქათამი | chicken                     | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996) |
| ქალაქი | city                        | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093) |
| ქვევრი | qvevri wine vessel          | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687) |
| ქინძი  | coriander                   | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)  |
| ქოლგა  | umbrella                    | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)  |
| ღუმელი | stove                       | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256) |
| ყასაბი | butcher                     | [source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292) |
| ყინული | ice                         | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551) |
| შეშა   | firewood                    | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)   |
| შვიდი  | seven (7)                   | [source](https://en.wiktionary.org/w/index.php?title=შვიდი&oldid=85767397)  |
| შიში   | fear                        | [source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)   |
| შუშა   | glass                       | [source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)   |
| ჩანთა  | bag                         | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)  |
| ჩარჩო  | frame                       | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)  |
| ჩვევა  | habit                       | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)  |
| ჩოგანი | racket                      | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726) |
| ჩონჩხი | skeleton                    | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089) |
| ჩრდილი | shade                       | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977) |
| ძუნწი  | stingy                      | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)  |
| წიგნი  | book                        | [source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)  |
| წიწაკა | pepper                      | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068) |
| წიწილა | chick                       | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124) |
| წუთი   | minute                      | [source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)   |
| წყვილი | pair                        | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227) |
| ჭაღარა | gray-haired                 | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183) |
| ჭაჭა   | grape pomace                | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)   |
| ჭუჭყი  | dirt                        | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)  |
| ხოჭო   | beetle                      | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)   |
| ჯუჯა   | dwarf                       | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)   |

## All required words

| Word   | Meaning                                             | Levels          | Source                                                                      |
| ------ | --------------------------------------------------- | --------------- | --------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 234             | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)  |
| აბი    | pill                                                | 9, 95, 188      | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)    |
| აგური  | brick                                               | 73, 227         | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)  |
| ადვილი | easy                                                | 156             | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563) |
| ადრე   | early; previously                                   | 76, 209         | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| ავაზა  | cheetah                                             | 80, 187         | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)  |
| ავარია | accident                                            | 80              | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031) |
| ავეჯი  | furniture                                           | 232             | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)  |
| ავზი   | tank, sink                                          | 2, 77, 213      | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)   |
| აზრი   | thought, opinion                                    | 5, 88, 173      | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)   |
| ათასი  | thousand                                            | 78, 175         | [source](https://en.wiktionary.org/w/index.php?title=ათასი&oldid=88613928)  |
| ათი    | ten (10)                                            | 3, 79, 155, 235 | [source](https://en.wiktionary.org/w/index.php?title=ათი&oldid=92452509)    |
| აივანი | balcony                                             | 53              | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190) |
| ალბომი | album                                               | 47              | [source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197) |
| ალი    | blaze, flame, fire                                  | 4, 98, 203      | [source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)    |
| ალმასი | diamond                                             | 111             | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482) |
| ამინდი | weather                                             | 235             | [source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550) |
| ანდაზა | proverb                                             | 187             | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575) |
| ანკესი | fishing hook                                        | 210             | [source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188) |
| არაყი  | vodka                                               | 92, 205         | [source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)  |
| არმია  | army                                                | 83, 178         | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)  |
| არქივი | archive                                             | 44              | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427) |
| არხი   | canal                                               | 5, 87, 184      | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)   |
| ასაკი  | age                                                 | 62, 193         | [source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)  |
| ასე    | like this; thus                                     | 56, 135, 210    | [source](https://en.wiktionary.org/w/index.php?title=ასე&oldid=86604839)    |
| ასი    | hundred                                             | 33, 111, 214    | [source](https://en.wiktionary.org/w/index.php?title=ასი&oldid=91740577)    |
| ასლი   | copy                                                | 33, 116, 193    | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)   |
| ასო    | alphabet letter                                     | 27, 116, 220    | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატამი  | peach                                               | 160             | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატომი  | atom                                                | 12, 143, 220    | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)  |
| აუზი   | pool                                                | 140, 227        | [source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)   |
| აქეთ   | over here                                           | 86, 165         | [source](https://en.wiktionary.org/w/index.php?title=აქეთ&oldid=78524348)   |
| აქვე   | right here                                          | 71, 165         | [source](https://en.wiktionary.org/w/index.php?title=აქვე&oldid=92437907)   |
| აქლემი | camel                                               | 223             | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908) |
| აქცია  | action, promotion                                   | 89              | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)  |
| აჩმა   | achma cheese pastry                                 | 83              | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)   |
| ახლა   | now                                                 | 128, 208        | [source](https://en.wiktionary.org/w/index.php?title=ახლა&oldid=84113244)   |
| ახლო   | close; near                                         | 47, 124, 208    | [source](https://en.wiktionary.org/w/index.php?title=ახლო&oldid=88065971)   |
| ახლოს  | near                                                | 124             | [source](https://en.wiktionary.org/w/index.php?title=ახლოს&oldid=88372296)  |
| აჯიკა  | adjika                                              | 62, 160         | [source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)  |
| ბადე   | net                                                 | 13, 176         | [source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)   |
| ბაზა   | base                                                | 43, 194         | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)   |
| ბაზარი | market                                              | 43              | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284) |
| ბალი   | sweet cherry                                        | 9, 95           | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ბანაკი | camp                                                | 18, 108         | [source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693) |
| ბანკი  | bank                                                | 101, 189        | [source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)  |
| ბანქო  | playing cards                                       | 231             | [source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)  |
| ბარგი  | luggage                                             | 138, 217        | [source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)  |
| ბარდა  | pea                                                 | 115, 194        | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)  |
| ბარტყი | chick                                               | 92              | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362) |
| ბატი   | goose                                               | 16, 92, 176     | [source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)   |
| ბატონი | sir                                                 | 231             | [source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444) |
| ბაფთა  | bow knot                                            | 79              | [source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)  |
| ბაღი   | garden                                              | 32, 173         | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)   |
| ბაყაყი | frog                                                | 188             | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131) |
| ბაჭია  | young rabbit                                        | 79, 188         | [source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)  |
| ბებია  | grandmother, grannie, granny                        | 176             | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)  |
| ბედი   | fate; luck                                          | 13, 176         | [source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)   |
| ბევრი  | many; much                                          | 64, 149         | [source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)  |
| ბერი   | monk                                                | 64, 140, 236    | [source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)   |
| ბეტონი | concrete                                            | 46              | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651) |
| ბეწვი  | fur, pile                                           | 64, 149         | [source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)  |
| ბზარი  | crack                                               | 60, 173         | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)  |
| ბილეთი | ticket                                              | 238             | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670) |
| ბინა   | apartment                                           | 18, 113, 189    | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)   |
| ბიცოლა | aunt                                                | 95              | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800) |
| ბიძა   | uncle                                               | 37, 113         | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)   |
| ბიჭი   | boy                                                 | 163             | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| ბლოგი  | blog                                                | 114, 192        | [source](https://en.wiktionary.org/w/index.php?title=ბლოგი&oldid=91650359)  |
| ბლოკი  | building block                                      | 66, 201         | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                  |
| ბოთლი  | bottle                                              | 66, 202         | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)  |
| ბოლი   | smoke                                               | 22, 114, 201    | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)   |
| ბოლო   | end                                                 | 22, 110, 192    | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)   |
| ბოძი   | pole                                                | 114             | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)   |
| ბრაზი  | anger                                               | 43, 140         | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)  |
| ბრალი  | fault                                               | 32              | [source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)  |
| ბრმა   | blind                                               | 115, 194        | [source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)   |
| ბუზი   | fly                                                 | 140             | [source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)   |
| ბურთი  | ball                                                | 127             | [source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)  |
| ბურღი  | drill                                               | 32, 127         | [source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)  |
| ბუშტი  | bubble, balloon                                     | 16              | [source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)  |
| ბუხარი | fireplace                                           | 103             | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056) |
| გაზეთი | newspaper                                           | 34              | [source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807) |
| გაზი   | gas                                                 | 2, 88, 178      | [source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)   |
| გალია  | cage                                                | 88              | [source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)  |
| განძი  | treasure                                            | 113             | [source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)  |
| გარე   | external; outer                                     | 55, 130         | [source](https://en.wiktionary.org/w/index.php?title=გარე&oldid=88917112)   |
| გარეთ  | outside                                             | 55, 130, 209    | [source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)  |
| გარემო | environment                                         | 63              | [source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637) |
| გედი   | swan                                                | 51, 212         | [source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)   |
| გემი   | ship                                                | 51, 134, 212    | [source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)   |
| გემო   | palate, taste                                       | 63              | [source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)   |
| გვარი  | surname                                             | 44, 161         | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)  |
| გველი  | snake, serpent                                      | 169             | [source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)  |
| გვიან  | late                                                | 36, 113         | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| გზა    | way, path, road                                     | 2, 88, 172      | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გლუვი  | smooth                                              | 139             | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)  |
| გმირი  | hero                                                | 51, 134         | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)  |
| გოლი   | goal in sport                                       | 8, 114, 192     | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)   |
| გორა   | hill                                                | 63, 221         | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)   |
| გოჭი   | piglet                                              | 217             | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)   |
| გრილი  | cool, breezy, chilly                                | 8, 145          | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)  |
| გრძელი | long                                                | 145             | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966) |
| გული   | heart                                               | 52, 139         | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)   |
| გუნდი  | choir; team                                         | 212             | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)  |
| გუშინ  | yesterday                                           | 139, 216        | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| დაბლა  | down; downstairs                                    | 115             | [source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)  |
| დავა   | dispute                                             | 36, 112, 187    | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)   |
| დათვი  | bear                                                | 165             | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)  |
| დანა   | knife                                               | 36, 112, 187    | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)   |
| დარაჯი | guard                                               | 123             | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652) |
| დაფა   | board, tablet                                       | 120, 199        | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)   |
| დახლი  | counter                                             | 26, 128, 207    | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)  |
| დედა   | mother                                              | 13, 170         | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| დევი   | giant                                               | 21, 104, 181    | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)   |
| დეიდა  | maternal aunt                                       | 13, 170         | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)  |
| დენი   | electric current                                    | 104, 212        | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)   |
| დიეტა  | diet                                                | 29, 176         | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)  |
| დილა   | morning                                             | 26, 128, 207    | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)   |
| დისკი  | disc                                                | 74              | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)  |
| დოზა   | dose                                                | 199             | [source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)   |
| დონე   | level                                               | 71              | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)   |
| დოქი   | jug                                                 | 181             | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)   |
| დრამა  | drama                                               | 115, 194        | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)  |
| დრო    | time                                                | 40, 123, 199    | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)    |
| დროშა  | flag                                                | 240             | [source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)  |
| დღე    | day                                                 | 29, 104         | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| ეზო    | yard, courtyard                                     | 6, 85, 195      | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ეკალი  | thorn                                               | 91, 183         | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)  |
| ეკრანი | screen                                              | 136             | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327) |
| ელვა   | lightning                                           | 67, 151         | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)   |
| ელჩი   | ambassador                                          | 15              | [source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)   |
| ენა    | language; tongue                                    | 23, 105, 198    | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)    |
| ენოტი  | raccoon                                             | 46, 121         | [source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)  |
| ეპოქა  | epoch                                               | 86, 167         | [source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)  |
| ერთად  | together                                            | 76, 209         | [source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)  |
| ერთი   | one (1)                                             | 55, 130         | [source](https://en.wiktionary.org/w/index.php?title=ერთი&oldid=90004560)   |
| ერი    | nation                                              | 55, 136, 211    | [source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)    |
| ეტაპი  | stage                                               | 68, 206         | [source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)  |
| ეტლი   | carriage                                            | 15, 93, 169     | [source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)   |
| ექვსი  | six (6)                                             | 65, 141         | [source](https://en.wiktionary.org/w/index.php?title=ექვსი&oldid=85767407)  |
| ექო    | echo                                                | 71, 167         | [source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)    |
| ვადა   | term, deadline                                      | 36, 112, 187    | [source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)   |
| ვაზა   | vase                                                | 80              | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)   |
| ვაზი   | vine, grapevine                                     | 2, 77, 213      | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)   |
| ვალი   | debt                                                | 3, 98, 174      | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)   |
| ვაჟი   | son                                                 | 229             | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)   |
| ვარდი  | rose                                                | 40              | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)  |
| ვაშლი  | apple                                               | 70, 200         | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)  |
| ვენახი | vineyard                                            | 135             | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996) |
| ვიდეო  | video                                               | 104, 181        | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)  |
| ვიზა   | visa                                                | 2, 213          | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)   |
| ვილა   | villa                                               | 3, 153, 229     | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)   |
| ვირი   | donkey, ass                                         | 44, 144         | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)   |
| ზარალი | loss                                                | 88              | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744) |
| ზარი   | bell                                                | 5, 80, 161      | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)   |
| ზებრა  | zebra                                               | 60, 140, 236    | [source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)  |
| ზეგ    | day after tomorrow                                  | 34, 134, 209    | [source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)    |
| ზედა   | upper                                               | 209             | [source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)   |
| ზევით  | upwards                                             | 119, 219        | [source](https://en.wiktionary.org/w/index.php?title=ზევით&oldid=91661887)  |
| ზეთი   | oil                                                 | 34, 119, 219    | [source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)   |
| ზეიმი  | celebration                                         | 134             | [source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)  |
| ზემოთ  | above                                               | 85, 195         | [source](https://en.wiktionary.org/w/index.php?title=ზემოთ&oldid=91661876)  |
| ზეცა   | heaven                                              | 81              | [source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)   |
| ზეწარი | bedsheet                                            | 236             | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578) |
| ზიანი  | damage                                              | 20, 97, 197     | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)  |
| ზომა   | measure, quantity, size                             | 6, 172          | [source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)   |
| ზონა   | zone                                                | 33, 172         | [source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)   |
| ზურგი  | back                                                | 227             | [source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)  |
| ზღარბი | hedgehog                                            | 173             | [source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278) |
| ზღვა   | sea                                                 | 77, 161         | [source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)   |
| ზღვარი | boundary                                            | 77, 161         | [source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789) |
| თაგვი  | mouse                                               | 34              | [source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)  |
| თავი   | head                                                | 3, 153, 229     | [source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)   |
| თათი   | paw                                                 | 130             | [source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)   |
| თამაში | game                                                | 78              | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028) |
| თანხა  | amount of money                                     | 234             | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)  |
| თაობა  | generation                                          | 155, 234        | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)  |
| თარო   | board, shelf                                        | 86, 166         | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)   |
| თასი   | bowl, chalice                                       | 82, 175         | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| თასმა  | braid                                               | 78              | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)  |
| თაფლი  | honey                                               | 82, 159         | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)  |
| თბილი  | warm                                                | 58, 238         | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)  |
| თევზი  | fish                                                | 119, 219        | [source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)  |
| თეთრი  | white                                               | 130             | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)  |
| თემა   | theme; essay                                        | 1, 85           | [source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)   |
| თესლი  | seed                                                | 141             | [source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)  |
| თვალი  | eye                                                 | 3, 153          | [source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)  |
| თვე    | month                                               | 34, 119, 195    | [source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)    |
| თმა    | hair                                                | 1, 78, 157, 235 | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)    |
| თოვლი  | snow                                                | 229             | [source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)  |
| თოკი   | rope                                                | 66, 219         | [source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)   |
| თოლია  | seagull                                             | 90, 229         | [source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)  |
| თოფი   | gun                                                 | 202             | [source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)   |
| თხა    | goat                                                | 14, 90, 234     | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| თხილი  | hazelnut                                            | 159             | [source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)  |
| იაფი   | cheap                                               | 11, 154         | [source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)   |
| იახტა  | yacht                                               | 39, 191         | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)  |
| იგავი  | fable                                               | 44              | [source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)  |
| იდეა   | idea                                                | 13, 91, 170     | [source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)   |
| იმედი  | hope                                                | 51, 180         | [source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)  |
| იოგა   | yoga                                                | 138, 221        | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)   |
| იოდი   | iodine                                              | 129             | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)   |
| იოლი   | easy                                                | 8, 84, 204      | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)   |
| ირემი  | deer                                                | 51, 134, 211    | [source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)  |
| ისარი  | arrow                                               | 69              | [source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)  |
| ისე    | in that way                                         | 28, 135, 210    | [source](https://en.wiktionary.org/w/index.php?title=ისე&oldid=93363979)    |
| ისევ   | again                                               | 42, 141, 218    | [source](https://en.wiktionary.org/w/index.php?title=ისევ&oldid=84115907)   |
| იქვე   | right there                                         | 65, 141         | [source](https://en.wiktionary.org/w/index.php?title=იქვე&oldid=92437902)   |
| იქით   | over there                                          | 57, 153         | [source](https://en.wiktionary.org/w/index.php?title=იქით&oldid=78523650)   |
| იღბალი | luck                                                | 37, 148         | [source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167) |
| იხვი   | duck                                                | 74, 171         | [source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)   |
| იჯარა  | lease                                               | 123             | [source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)  |
| კაბა   | dress, frock                                        | 18, 108, 183    | [source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)   |
| კაბელი | cable                                               | 183             | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959) |
| კაბინა | cabin                                               | 18, 108         | [source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910) |
| კათხა  | mug                                                 | 157             | [source](https://en.wiktionary.org/w/index.php?title=კათხა&oldid=84115971)  |
| კალია  | grasshopper                                         | 89, 183         | [source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)  |
| კამათი | argument                                            | 157             | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005) |
| კანი   | skin                                                | 18, 108, 210    | [source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)   |
| კარავი | tent                                                | 237             | [source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033) |
| კარაქი | butter                                              | 237             | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208) |
| კარგი  | good                                                | 138             | [source](https://en.wiktionary.org/w/index.php?title=კარგი&oldid=88207585)  |
| კარი   | door                                                | 69, 152, 228    | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარტი  | card                                                | 68              | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)  |
| კასრი  | barrel                                              | 69              | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)  |
| კატა   | cat                                                 | 160             | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| კაფე   | cafe                                                | 59, 136         | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)   |
| კაცი   | man                                                 | 89, 174         | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)   |
| კბილი  | tooth                                               | 93, 238         | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)  |
| კევი   | chewing gum                                         | 21, 190         | [source](https://en.wiktionary.org/w/index.php?title=კევი&oldid=88239621)   |
| კეთილი | kind                                                | 238             | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581) |
| კენჭი  | pebble                                              | 105             | [source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)  |
| კერძი  | dish                                                | 48, 224         | [source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)  |
| კეტი   | stick                                               | 15, 121, 224    | [source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)   |
| კეფა   | back of the head                                    | 59, 136         | [source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)   |
| კვალი  | trail, clue                                         | 98, 174         | [source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)  |
| კვირა  | week                                                | 77              | [source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)  |
| კვლავ  | again                                               | 174             | [source](https://en.wiktionary.org/w/index.php?title=კვლავ&oldid=84116146)  |
| კიბე   | ladder, stair, staircase, stairway                  | 93, 183         | [source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)   |
| კიდე   | edge                                                | 91, 168         | [source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)   |
| კიდევ  | again                                               | 21, 102, 181    | [source](https://en.wiktionary.org/w/index.php?title=კიდევ&oldid=59753374)  |
| კივი   | kiwi fruit; kiwi bird                               | 74, 190         | [source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)   |
| კილო   | kilo                                                | 66, 146, 222    | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)   |
| კინო   | cinema; movie                                       | 31, 121, 222    | [source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)   |
| კისერი | neck                                                | 48              | [source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129) |
| კიტრი  | cucumber                                            | 224             | [source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)  |
| კლასი  | class                                               | 116, 193        | [source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)  |
| კლდე   | cliff, crag, scar, rock                             | 91              | [source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)   |
| კლიტე  | lock                                                | 15, 93          | [source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)  |
| კლოუნი | clown                                               | 222             | [source](https://en.wiktionary.org/w/index.php?title=კლოუნი&oldid=84116208) |
| კლუბი  | club                                                | 52, 201         | [source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)  |
| კნუტი  | kitten                                              | 222             | [source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)  |
| კოალა  | koala                                               | 193             | [source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)  |
| კობრა  | cobra                                               | 138             | [source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)  |
| კოდი   | code                                                | 31, 181         | [source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)   |
| კოვზი  | spoon                                               | 219             | [source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)  |
| კომში  | quince                                              | 146             | [source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)  |
| კოშკი  | tower                                               | 146             | [source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)  |
| კოჭი   | ankle                                               | 201             | [source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)   |
| კრემი  | cream                                               | 168             | [source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)  |
| კუბი   | cube                                                | 52, 189         | [source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)   |
| კუდი   | tail                                                | 21, 102         | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)   |
| კუნთი  | muscle                                              | 189             | [source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)  |
| კურკა  | fruit stone                                         | 152             | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)  |
| კუჭი   | stomach                                             | 101, 201        | [source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)   |
| ლაიმი  | lime (fruit)                                        | 7, 94, 239      | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)  |
| ლამპა  | lamp                                                | 186             | [source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)  |
| ლარი   | lari (Georgian currency)                            | 10, 99, 177     | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)   |
| ლაქა   | spot, stain                                         | 89              | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| ლეიბი  | mattress                                            | 58, 163, 238    | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)  |
| ლეკვი  | puppy                                               | 102, 190        | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)  |
| ლექსი  | poem                                                | 49, 141, 223    | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)  |
| ლინზა  | lens                                                | 33, 109         | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)  |
| ლიფტი  | elevator                                            | 100             | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)  |
| ლობიო  | bean                                                | 22, 110, 202    | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)  |
| ლომი   | lion                                                | 47, 146, 230    | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლოყა   | cheek                                               | 99              | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)   |
| ლუდი   | beer                                                | 102, 207        | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)   |
| ლუკმა  | bite, morsel                                        | 98              | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)  |
| ლურჯი  | blue                                                | 10              | [source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)  |
| ლუწი   | even                                                | 142             | [source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)   |
| მაგარი | hard, strong                                        | 178             | [source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421) |
| მაგია  | magic                                               | 178             | [source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)  |
| მადა   | appetite, stomach                                   | 30, 115, 194    | [source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)   |
| მაისი  | May                                                 | 57, 133         | [source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)  |
| მალე   | soon                                                | 23, 107, 186    | [source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)   |
| მამა   | father                                              | 30, 111         | [source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)   |
| მამალი | rooster                                             | 111             | [source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460) |
| მამიდა | paternal aunt                                       | 30              | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651) |
| მანგო  | mango                                               | 172             | [source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)  |
| მარილი | salt                                                | 94              | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420) |
| მარტო  | alone                                               | 63, 143         | [source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)  |
| მაღლა  | up; upstairs                                        | 186             | [source](https://en.wiktionary.org/w/index.php?title=მაღლა&oldid=84116783)  |
| მაშინ  | then; at that time                                  | 137             | [source](https://en.wiktionary.org/w/index.php?title=მაშინ&oldid=77224190)  |
| მაწონი | matsoni yogurt                                      | 25, 106         | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051) |
| მახე   | trap                                                | 1, 107, 182     | [source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)   |
| მაჯა   | wrist                                               | 62, 160         | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)   |
| მედალი | medal                                               | 203             | [source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774) |
| მედია  | media                                               | 29, 203         | [source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)  |
| მელა   | fox                                                 | 23, 107, 186    | [source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)   |
| მელანი | ink                                                 | 23              | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862) |
| მელოტი | bald                                                | 230             | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872) |
| მენიუ  | menu                                                | 212             | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)  |
| მერე   | then; later                                         | 54, 182         | [source](https://en.wiktionary.org/w/index.php?title=მერე&oldid=91570731)   |
| მეტად  | very; greatly                                       | 29              | [source](https://www.ganmarteba.ge/word/მეტად)                              |
| მეტალი | metal                                               | 107             | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455) |
| მეტრი  | metre                                               | 168             | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)  |
| მეტრო  | metro                                               | 63, 230         | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)  |
| მეფე   | king                                                | 54, 182         | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)   |
| მზა    | ready                                               | 20, 97, 178     | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)    |
| მზე    | Sun                                                 | 6, 81, 195      | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)    |
| მზიანი | sunny                                               | 20, 97, 197     | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151) |
| მთა    | mountain, hill                                      | 1, 76, 157, 235 | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| მითი   | myth                                                | 57              | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)   |
| მილი   | tube; mile                                          | 7, 133, 239     | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)   |
| მინა   | glass (material)                                    | 20, 97, 197     | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)   |
| მისია  | mission                                             | 7, 133          | [source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)  |
| მიწა   | earth, soil                                         | 25, 142         | [source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)   |
| მკლავი | arm                                                 | 98              | [source](https://en.wiktionary.org/w/index.php?title=მკლავი&oldid=90012056) |
| მოდა   | fashion                                             | 106, 203        | [source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)   |
| მოდელი | model                                               | 203             | [source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844) |
| მსხალი | pear                                                | 28              | [source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341) |
| მტერი  | enemy                                               | 54, 168         | [source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)  |
| მტრედი | pigeon, dove                                        | 168             | [source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351) |
| მუდამ  | always                                              | 30, 233         | [source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)  |
| მუმია  | mummy                                               | 61, 233         | [source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)  |
| მუქი   | dark                                                | 61, 150         | [source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)   |
| მუშა   | worker                                              | 75              | [source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)   |
| მუხა   | oak                                                 | 75, 164         | [source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)   |
| მუხლი  | knee                                                | 142             | [source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)  |
| მწვანე | green                                               | 198             | [source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780) |
| მხარე  | side; region                                        | 81, 182         | [source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)  |
| მხარი  | shoulder                                            | 75, 179         | [source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)  |
| მხეცი  | beast                                               | 96              | [source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)  |
| ნაგავი | rubbish                                             | 36              | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259) |
| ნადიმი | feast                                               | 235             | [source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506) |
| ნავი   | boat                                                | 53, 131         | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)   |
| ნაზი   | gentle; tender                                      | 20, 109, 197    | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)   |
| ნაკლი  | defect                                              | 105             | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)  |
| ნაპირი | shore, strand, waterside                            | 228             | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827) |
| ნარდი  | backgammon                                          | 31, 196         | [source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)  |
| ნაცარი | ash                                                 | 45              | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231) |
| ნაძვი  | spruce                                              | 113             | [source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)  |
| ნახატი | picture                                             | 39              | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603) |
| ნეკნი  | rib                                                 | 121             | [source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)  |
| ნელა   | slowly                                              | 23, 105         | [source](https://en.wiktionary.org/w/index.php?title=ნელა&oldid=79065941)   |
| ნელი   | slow                                                | 17, 105         | [source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)   |
| ნემსი  | needle                                              | 211             | [source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)  |
| ნერვი  | nerve                                               | 24, 117         | [source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)  |
| ნესვი  | melon                                               | 42, 135         | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)  |
| ნეფე   | bridegroom                                          | 42              | [source](https://en.wiktionary.org/w/index.php?title=ნეფე&oldid=84100382)   |
| ნიკაპი | chin                                                | 228             | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203) |
| ნიმუში | sample                                              | 216             | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676) |
| ნიორი  | garlic                                              | 50, 129, 221    | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)  |
| ნისლი  | fog, mist                                           | 132             | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)  |
| ნიჭი   | talent                                              | 197             | [source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)   |
| ნული   | zero                                                | 139, 222        | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)   |
| ნუში   | almond                                              | 35, 216         | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)   |
| ობი    | mould                                               | 46, 155, 231    | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)    |
| ობოლი  | orphan                                              | 22, 110, 192    | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)  |
| ოდნავ  | slightly                                            | 71              | [source](https://en.wiktionary.org/w/index.php?title=ოდნავ&oldid=89922587)  |
| ოთახი  | room, chamber                                       | 14, 90, 208     | [source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)  |
| ოთხი   | four (4)                                            | 14, 90, 208     | [source](https://en.wiktionary.org/w/index.php?title=ოთხი&oldid=87444782)   |
| ომი    | war                                                 | 25, 106, 185    | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)    |
| ოპერა  | opera                                               | 86, 167         | [source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)  |
| ორი    | two (2)                                             | 50, 129, 217    | [source](https://en.wiktionary.org/w/index.php?title=ორი&oldid=83446489)    |
| ორმო   | pit                                                 | 185             | [source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)   |
| ორმოცი | forty                                               | 185             | [source](https://en.wiktionary.org/w/index.php?title=ორმოცი&oldid=90075083) |
| ოსტატი | master craftsman                                    | 27              | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588) |
| ოფისი  | office                                              | 84              | [source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)  |
| ოფლი   | sweat                                               | 84, 202         | [source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)   |
| ოქრო   | gold                                                | 167             | [source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)   |
| ოცი    | twenty (20)                                         | 12, 87, 185     | [source](https://en.wiktionary.org/w/index.php?title=ოცი&oldid=90075102)    |
| პაკეტი | packet                                              | 68              | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015) |
| პარკი  | plastic bag                                         | 69, 152         | [source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)  |
| პენსია | pension                                             | 210             | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867) |
| პიკი   | peak                                                | 69, 228         | [source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)   |
| პილოტი | pilot                                               | 204             | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538) |
| პირი   | mouth                                               | 50, 144         | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)   |
| პიტნა  | mint, spearmint                                     | 122, 206        | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)  |
| პიცა   | pizza                                               | 214             | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)   |
| პლედი  | plaid blanket                                       | 91              | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)  |
| პლუსი  | plus                                                | 38, 214         | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)  |
| პოემა  | poem                                                | 6, 85           | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)  |
| პოეტი  | poet                                                | 225             | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)  |
| პოზა   | pose                                                | 6, 85           | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)   |
| პონი   | pony                                                | 50              | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)   |
| პორტი  | port                                                | 41, 118         | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)  |
| პოსტი  | post                                                | 118, 204        | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)  |
| პრიზი  | prize                                               | 144             | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)  |
| პრინცი | prince                                              | 50              | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987) |
| პულსი  | pulse                                               | 38, 214         | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)  |
| პური   | bread                                               | 41, 152         | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)   |
| ჟოლო   | raspberry                                           | 22, 110         | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)   |
| რადიო  | radio                                               | 40, 123, 240    | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)  |
| რაიონი | district                                            | 221             | [source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151) |
| რბილი  | soft                                                | 72, 163         | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)  |
| რეისი  | scheduled journey                                   | 48, 211         | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)  |
| რეპი   | rap music                                           | 68, 225         | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)   |
| რვა    | eight (8)                                           | 80, 161, 237    | [source](https://en.wiktionary.org/w/index.php?title=რვა&oldid=91742434)    |
| რიგი   | row; queue                                          | 8, 145, 221     | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)   |
| რიტმი  | beat, cadence, rhythm                               | 226             | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)  |
| რკინა  | iron (metal)                                        | 31, 136, 228    | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)  |
| როკი   | rock music                                          | 31, 138         | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)   |
| როლი   | role                                                | 8, 99, 230      | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)   |
| რუკა   | map                                                 | 59, 152         | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)   |
| რუჯი   | suntan                                              | 10, 126, 226    | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)   |
| რძე    | milk                                                | 48, 145, 224    | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)    |
| საათი  | clock; hour                                         | 78, 175         | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)  |
| საიტი  | website                                             | 133             | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)  |
| სალონი | salon                                               | 33              | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194) |
| სამი   | three (3)                                           | 57, 137, 220    | [source](https://en.wiktionary.org/w/index.php?title=სამი&oldid=87444788)   |
| სამოცი | sixty                                               | 220             | [source](https://en.wiktionary.org/w/index.php?title=სამოცი&oldid=90075123) |
| სარკე  | looking-glass, mirror                               | 59              | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)  |
| საუნა  | sauna                                               | 35              | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)  |
| საქმე  | work, business                                      | 223             | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)  |
| საღი   | healthy, sensible                                   | 137             | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)   |
| სახე   | face                                                | 28, 124         | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)   |
| სახლი  | home, house, dwelling                               | 28, 151         | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)  |
| სეტყვა | hail                                                | 56              | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560) |
| სველი  | wet                                                 | 65, 151         | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)  |
| სვეტი  | column                                              | 56              | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)  |
| სია    | list                                                | 7, 111, 223     | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)    |
| სითბო  | warmth                                              | 66              | [source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)  |
| სიმი   | string                                              | 7, 84, 211      | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)   |
| სიო    | breeze                                              | 27, 118, 204    | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)    |
| სიტყვა | word                                                | 213             | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915) |
| სიცივე | coldness, frigidity                                 | 218             | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113) |
| სიძე   | son-in-law; groom                                   | 48, 171         | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)   |
| სკამი  | chair                                               | 62              | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)  |
| სკოლა  | school                                              | 116, 193        | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)  |
| სოდა   | soda                                                | 240             | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)   |
| სოკო   | mushroom                                            | 116             | [source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)   |
| სოუსი  | sauce                                               | 38              | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)  |
| სპილო  | elephant                                            | 38, 118, 204    | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)  |
| სპორტი | sport                                               | 118             | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224) |
| სტატია | article                                             | 27              | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457) |
| სტილი  | style                                               | 133, 215        | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)  |
| სულ    | completely; always                                  | 49, 132, 215    | [source](https://en.wiktionary.org/w/index.php?title=სულ&oldid=75696201)    |
| სული   | spirit, ghost                                       | 38, 132, 215    | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)   |
| სუნი   | smell                                               | 35, 132         | [source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)   |
| სუფთა  | clean                                               | 82, 166         | [source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)  |
| სუფრა  | tablecloth, feast                                   | 59, 166         | [source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)  |
| სხვენი | attic                                               | 135             | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322) |
| სხივი  | ray                                                 | 74, 171         | [source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)  |
| ტალახი | mud                                                 | 191             | [source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470) |
| ტანგო  | tango                                               | 172             | [source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)  |
| ტანი   | body                                                | 39, 122, 206    | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)   |
| ტაფა   | frying pan                                          | 191             | [source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)   |
| ტაში   | applause                                            | 16, 122         | [source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)   |
| ტბა    | lake                                                | 16, 92, 231     | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ტერფი  | foot                                                | 54, 147         | [source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)  |
| ტვინი  | brain                                               | 131             | [source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)  |
| ტირე   | dash                                                | 68, 147, 225    | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)   |
| ტკბილი | sweet                                               | 93              | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168) |
| ტომი   | tribe; volume                                       | 12, 143, 230    | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)   |
| ტონი   | tone                                                | 46, 121, 231    | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)   |
| ტორტი  | tart                                                | 143, 225        | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)  |
| ტოტი   | branch, twig                                        | 27, 143, 225    | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)   |
| ტური   | round                                               | 41, 226         | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)   |
| ტყავი  | leather                                             | 131             | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)  |
| ტყე    | forest, wood                                        | 56, 169         | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ტყვე   | captive                                             | 56, 169         | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)   |
| ტყვია  | bullet, lead                                        | 131, 213        | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)  |
| ტყუპი  | twin                                                | 41              | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)  |
| უარი   | refusal                                             | 45, 126, 207    | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)   |
| უბანი  | neighborhood                                        | 101, 189        | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)  |
| უთო    | iron for clothes                                    | 14, 166         | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)    |
| უკან   | back; backwards                                     | 101             | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| უკვე   | already                                             | 21, 102         | [source](https://en.wiktionary.org/w/index.php?title=უკვე&oldid=58546516)   |
| უმი    | raw, uncooked                                       | 30, 142, 226    | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)    |
| უნარი  | ability                                             | 45, 126, 205    | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)  |
| ურნა   | urn                                                 | 45, 126         | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)   |
| უჯრა   | drawer                                              | 10, 103         | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)   |
| ფაზა   | phase                                               | 43, 120         | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)   |
| ფაილი  | file                                                | 11, 159, 239    | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)  |
| ფარდა  | curtain, purdah                                     | 120, 199        | [source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)  |
| ფარი   | shield                                              | 73, 162         | [source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)   |
| ფასი   | price, cost                                         | 82, 175         | [source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)   |
| ფაფა   | porridge                                            | 175             | [source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)   |
| ფაქტი  | fact                                                | 100             | [source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)  |
| ფენა   | layer                                               | 206             | [source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)   |
| ფენი   | hairdryer                                           | 42, 206         | [source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)   |
| ფერი   | color, hue                                          | 54, 147         | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)   |
| ფერმა  | farm                                                | 76, 182         | [source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)  |
| ფესვი  | root                                                | 42, 218         | [source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)  |
| ფეხი   | foot; leg                                           | 147             | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| ფიგურა | stature, figure                                     | 73              | [source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102) |
| ფილა   | slab                                                | 11, 100, 191    | [source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)   |
| ფილმი  | film                                                | 84, 239         | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)  |
| ფინალი | final                                               | 239             | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241) |
| ფირმა  | company                                             | 19, 162         | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)  |
| ფიცი   | oath                                                | 11, 218         | [source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)   |
| ფიჭა   | honeycomb                                           | 79, 154         | [source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)   |
| ფიჭვი  | pine                                                | 154             | [source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)  |
| ფოთოლი | leaf                                                | 202             | [source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315) |
| ფონდი  | fund                                                | 129             | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)  |
| ფონი   | background                                          | 129             | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)   |
| ფორმა  | shape, form                                         | 162             | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)  |
| ფრაზა  | phrase                                              | 43, 120, 199    | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)  |
| ფრთა   | wing                                                | 76, 166         | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)   |
| ფული   | money                                               | 82              | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)   |
| ფუნჯი  | brush                                               | 126             | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)  |
| ფხა    | fishbone                                            | 73, 159         | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)      |
| ქალი   | woman                                               | 4, 100, 223     | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| ქამარი | belt                                                | 83              | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022) |
| ქარი   | wind                                                | 61, 158         | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)   |
| ქედი   | mountain range                                      | 49, 165         | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)   |
| ქერა   | blond                                               | 86, 167         | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)   |
| ქვა    | stone                                               | 44, 125, 237    | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვაბი  | pot                                                 | 125             | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)  |
| ქვედა  | lower                                               | 71, 165         | [source](https://en.wiktionary.org/w/index.php?title=ქვედა&oldid=84120081)  |
| ქვევით | downwards                                           | 119             | [source](https://en.wiktionary.org/w/index.php?title=ქვევით&oldid=91661838) |
| ქვემოთ | below                                               | 195             | [source](https://en.wiktionary.org/w/index.php?title=ქვემოთ&oldid=91661877) |
| ქვიშა  | sand                                                | 125, 200        | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)  |
| ქილა   | jar                                                 | 4, 100, 200     | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ქიმია  | chemistry                                           | 57              | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)  |
| ქირა   | rent                                                | 61, 150, 237    | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)   |
| ქლიავი | plum                                                | 153             | [source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131) |
| ქმარი  | husband                                             | 61, 150         | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)  |
| ქუდი   | hat                                                 | 49, 150         | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)   |
| ქულა   | point, score                                        | 200             | [source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)   |
| ქურდი  | thief                                               | 150             | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)  |
| ქუსლი  | heel                                                | 49              | [source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)  |
| ღამე   | night                                               | 29, 186         | [source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)   |
| ღვინო  | wine                                                | 104             | [source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)  |
| ღია    | open                                                | 32, 148, 232    | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)    |
| ღილი   | button                                              | 37, 148         | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ღობე   | fence, hedge                                        | 46              | [source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)   |
| ღომი   | ghomi maize porridge                                | 162             | [source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)   |
| ღორი   | pig                                                 | 173             | [source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)   |
| ღრმა   | deep                                                | 162             | [source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)   |
| ღრუ    | cavity; hollow space                                | 32, 127         | [source](https://www.ganmarteba.ge/word/ღრუ)                                |
| ყაბაყი | zucchini                                            | 188             | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258) |
| ყავა   | coffee                                              | 53              | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)   |
| ყანა   | field                                               | 53, 205         | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)   |
| ყბა    | jaw                                                 | 9, 92, 188      | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)    |
| ყდა    | cover of a book                                     | 120, 196        | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)    |
| ყელი   | throat                                              | 65              | [source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)   |
| ყველი  | cheese                                              | 65, 169         | [source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)  |
| ყინვა  | frost, freezing, freezing temperatures, severe cold | 53, 131         | [source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)  |
| ყრუ    | deaf                                                | 127, 205        | [source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)    |
| ყუთი   | box                                                 | 127             | [source](https://en.wiktionary.org/w/index.php?title=ყუთი&oldid=85493733)   |
| ყური   | ear                                                 | 41, 205         | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| შაბათი | Saturday                                            | 155             | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658) |
| შავი   | black                                               | 70, 156         | [source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)   |
| შალი   | shawl                                               | 70, 156         | [source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)   |
| შანსი  | chance                                              | 35, 137         | [source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)  |
| შაქარი | sugar                                               | 158             | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621) |
| შვილი  | child                                               | 70, 156         | [source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)  |
| შიგ    | inside                                              | 52, 139, 216    | [source](https://en.wiktionary.org/w/index.php?title=შიგ&oldid=88916923)    |
| შიდა   | inner                                               | 156, 240        | [source](https://en.wiktionary.org/w/index.php?title=შიდა&oldid=84089164)   |
| შინ    | home; to one’s home                                 | 35, 137, 216    | [source](https://en.wiktionary.org/w/index.php?title=შინ&oldid=88914984)    |
| შობა   | Christmas                                           | 155             | [source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)   |
| შოკი   | shock                                               | 146             | [source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)   |
| შორს   | far                                                 | 240             | [source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)   |
| შუა    | middle                                              | 16, 125, 227    | [source](https://www.ganmarteba.ge/word/შუა)                                |
| შუბლი  | forehead                                            | 52              | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)  |
| შური   | envy                                                | 75, 227         | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)   |
| შუქი   | light                                               | 125, 200        | [source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)   |
| შხამი  | poison                                              | 75              | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)  |
| შხაპი  | shower                                              | 122             | [source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)  |
| ჩაი    | tea (drink made from leaves of tea plant)           | 39, 158, 233    | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)    |
| ჩალა   | straw                                               | 128             | [source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)   |
| ჩეკი   | check, receipt                                      | 15, 190         | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)   |
| ჩვილი  | baby                                                | 190             | [source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)  |
| ჩირი   | dried fruit                                         | 72              | [source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)   |
| ჩიტი   | bird                                                | 215             | [source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)   |
| ჩიხი   | blind alley                                         | 72              | [source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)   |
| ჩუმად  | quietly                                             | 233             | [source](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)  |
| ჩუმი   | quiet                                               | 233             | [source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)   |
| ჩუსტი  | slipper                                             | 215             | [source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)  |
| ჩქარა  | quickly                                             | 83, 158         | [source](https://en.wiktionary.org/w/index.php?title=ჩქარა&oldid=84120756)  |
| ჩქარი  | quick                                               | 83, 158         | [source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)  |
| ცალი   | piece                                               | 11, 89, 174     | [source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)   |
| ცივი   | cold                                                | 96, 218         | [source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)   |
| ციხე   | fortress                                            | 17, 96, 180     | [source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)   |
| ცოდვა  | sin                                                 | 112             | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)  |
| ცოდნა  | knowledge                                           | 112             | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)  |
| ცოლი   | wife                                                | 95              | [source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)   |
| ცომი   | dough                                               | 12              | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)   |
| ცოტა   | a little; few                                       | 12, 220         | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)   |
| ცრუ    | false, phony                                        | 45, 164         | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)    |
| ცუდად  | badly                                               | 170             | [source](https://en.wiktionary.org/w/index.php?title=ცუდად&oldid=84120884)  |
| ცუდი   | bad                                                 | 170             | [source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)   |
| ცული   | axe                                                 | 214             | [source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)   |
| ცხარე  | spicy                                               | 81, 164         | [source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)  |
| ცხელი  | hot                                                 | 17              | [source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)  |
| ცხენი  | horse                                               | 17              | [source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)  |
| ცხიმი  | fat                                                 | 96, 180         | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)  |
| ცხრა   | nine (9)                                            | 87, 164         | [source](https://en.wiktionary.org/w/index.php?title=ცხრა&oldid=85767360)   |
| ძალა   | power, force, strength                              | 177             | [source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)   |
| ძაფი   | thread                                              | 19              | [source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)   |
| ძაღლი  | dog                                                 | 37              | [source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)  |
| ძეგლი  | monument                                            | 114             | [source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)  |
| ძეხვი  | sausage                                             | 67, 171         | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)  |
| ძვალი  | bone                                                | 67, 177         | [source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)  |
| ძველი  | old                                                 | 67              | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)  |
| ძვირი  | expensive                                           | 144             | [source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)  |
| ძია    | uncle                                               | 19, 94, 177     | [source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)    |
| ძილი   | sleep                                               | 37, 145         | [source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)   |
| ძირი   | root                                                | 144, 224        | [source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)   |
| ძიძა   | nanny                                               | 179             | [source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)   |
| ძმა    | brother                                             | 19, 94, 179     | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| ძმარი  | vinegar                                             | 19, 94, 179     | [source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)  |
| ძრავა  | engine                                              | 177             | [source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)  |
| ძროხა  | cow                                                 | 87              | [source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)  |
| წაბლი  | chestnut                                            | 9, 148          | [source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)  |
| წამი   | second                                              | 25, 198         | [source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)   |
| წარბი  | brow, eyebrow                                       | 236             | [source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)  |
| წებო   | glue                                                | 64              | [source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)   |
| წევრი  | member                                              | 24, 117         | [source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)  |
| წელი   | year                                                | 58              | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| წესი   | rule                                                | 117             | [source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)   |
| წვენი  | gravy, juice, sap                                   | 24, 117, 198    | [source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)  |
| წვერი  | beard; tip                                          | 64, 149         | [source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)  |
| წვიმა  | rain                                                | 198             | [source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)  |
| წითელი | red                                                 | 58              | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641) |
| წილი   | share; portion                                      | 58, 148         | [source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)   |
| წინ    | ahead; forward                                      | 24, 108, 196    | [source](https://en.wiktionary.org/w/index.php?title=წინ&oldid=89024908)    |
| წინდა  | sock                                                | 106, 196        | [source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)  |
| წონა   | weight                                              | 25, 106         | [source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)   |
| წრე    | circle                                              | 24, 117, 236    | [source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)    |
| წყალი  | water                                               | 9, 99           | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)  |
| წყარო  | spring                                              | 99              | [source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)  |
| წყნარი | quiet                                               | 196             | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680) |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   | 95, 217         | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)  |
| ჭაღი   | chandelier                                          | 232             | [source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)   |
| ჭერი   | ceiling                                             | 163             | [source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)   |
| ჭია    | worm                                                | 4, 79, 154, 232 | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)    |
| ჭიქა   | glass, cup                                          | 4               | [source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)   |
| ჭკუა   | intellect                                           | 101             | [source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)   |
| ჭორი   | gossip                                              | 217             | [source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)   |
| ჭრელი  | colorful                                            | 163             | [source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)  |
| ხაზი   | line                                                | 5, 109          | [source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)   |
| ხალათი | robe                                                | 208             | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200) |
| ხალი   | birthmark, mole                                     | 26, 109, 191    | [source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)   |
| ხალიჩა | carpet, rug                                         | 128             | [source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204) |
| ხალხი  | people                                              | 109             | [source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)  |
| ხარი   | ox, bull                                            | 5, 103, 179     | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)   |
| ხარჯი  | expense                                             | 103, 184        | [source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)  |
| ხატი   | icon                                                | 39, 122         | [source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)   |
| ხაჭო   | curd cheese                                         | 90              | [source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)   |
| ხბო    | calf                                                | 47, 124, 234    | [source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)    |
| ხედი   | view                                                | 180             | [source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)   |
| ხევი   | ravine                                              | 96, 171         | [source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)   |
| ხელი   | hand                                                | 17, 151         | [source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)   |
| ხეობა  | valley                                              | 124             | [source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)  |
| ხერხი  | saw, method                                         | 147             | [source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)  |
| ხვალ   | tomorrow                                            | 67, 151         | [source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)   |
| ხიბლი  | charm                                               | 72              | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)  |
| ხიდი   | bridge                                              | 74, 180         | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)   |
| ხილი   | fruit, fruits                                       | 72, 159         | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)   |
| ხმა    | voice, sound                                        | 1, 81, 157      | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმალი  | sword                                               | 47, 142         | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)  |
| ხმელი  | dry                                                 | 28, 107         | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)  |
| ხორცი  | meat                                                | 87, 185         | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)  |
| ხროვა  | pack                                                | 184             | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)  |
| ხუთი   | five (5)                                            | 14              | [source](https://en.wiktionary.org/w/index.php?title=ხუთი&oldid=87444795)   |
| ხურდა  | small change                                        | 207             | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)  |
| ხურმა  | persimmon                                           | 164             | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)  |
| ხუფი   | lid                                                 | 73              | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)   |
| ჯადო   | magic                                               | 40, 123         | [source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)   |
| ჯაზი   | jazz                                                | 60              | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)   |
| ჯამი   | sum; bowl                                           | 62, 160         | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)   |
| ჯარი   | army, host                                          | 10, 103, 184    | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)   |
| ჯაჭვი  | chain                                               | 154, 232        | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)  |
| ჯერ    | first; yet                                          | 60, 149         | [source](https://en.wiktionary.org/w/index.php?title=ჯერ&oldid=87441534)    |
| ჯვარი  | cross                                               | 40              | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)  |
| ჯიბე   | pocket                                              | 60, 149         | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)   |
| ჯილდო  | reward                                              | 26              | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)  |
| ჯინსი  | jeans                                               | 132             | [source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)  |
| ჯიუტი  | stubborn                                            | 226             | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)  |
| ჯიში   | breed                                               | 70              | [source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)   |
| ჯოგი   | herd                                                | 192             | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)   |
| ჯოხი   | stick                                               | 26, 184         | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)   |
| ჰაერი  | air                                                 | 55              | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)  |
| ჰიმნი  | anthem                                              | 97              | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)  |
| ჰობი   | hobby                                               | 110             | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)   |

## All 240 boards

| Level | Required answers                    | Wheel   | Grid | Difficulty |
| ----: | ----------------------------------- | ------- | ---- | ---------: |
|     1 | მახე, მთა, ხმა, თემა, თმა           | თმეახ   | 6×5  |         38 |
|     2 | გზა, ვაზი, ვიზა, ავზი, გაზი         | გივაზ   | 7×5  |         42 |
|     3 | თავი, ვილა, ვალი, ათი, თვალი        | ლაივთ   | 6×5  |         46 |
|     4 | ქილა, ჭია, ჭიქა, ალი, ქალი          | ლაჭიქ   | 6×4  |         40 |
|     5 | ხარი, აზრი, არხი, ზარი, ხაზი        | იხზარ   | 7×5  |         44 |
|     6 | მზე, პოემა, პოზა, ეზო, ზომა         | ზმეოპა  | 7×5  |         52 |
|     7 | ლაიმი, მილი, სია, მისია, სიმი       | ლიასმი  | 7×5  |         56 |
|     8 | გოლი, გრილი, რიგი, იოლი, როლი       | იგოლრი  | 7×5  |         56 |
|     9 | ყბა, ბალი, წაბლი, წყალი, აბი        | აყბწლი  | 7×5  |         54 |
|    10 | რუჯი, უჯრა, ჯარი, ლარი, ლურჯი       | ულჯიარ  | 6×5  |         56 |
|    11 | ცალი, იაფი, ფიცი, ფაილი, ფილა       | ცლიაიფ  | 7×4  |         56 |
|    12 | ცოტა, ატომი, ოცი, ტომი, ცომი        | მტიაოც  | 7×5  |         54 |
|    13 | ბადე, დედა, დეიდა, იდეა, ბედი       | დედბია  | 7×5  |         56 |
|    14 | ოთხი, უთო, ხუთი, თხა, ოთახი         | იოთუხა  | 6×5  |         52 |
|    15 | ელჩი, კეტი, კლიტე, ჩეკი, ეტლი       | ტლიჩეკ  | 7×5  |         56 |
|    16 | ტაში, ტბა, შუა, ბატი, ბუშტი         | ბშტუაი  | 7×5  |         52 |
|    17 | ნელი, ცხელი, ცხენი, ხელი, ციხე      | ეილცნხ  | 6×5  |         58 |
|    18 | ბანაკი, ბინა, კაბინა, კაბა, კანი    | ბაკინა  | 6×5  |         64 |
|    19 | ძმა, ძია, ძაფი, ფირმა, ძმარი        | რმიაფძ  | 7×5  |         54 |
|    20 | ზიანი, მზა, მინა, მზიანი, ნაზი      | იამინზ  | 7×4  |         60 |
|    21 | კიდევ, კუდი, უკვე, დევი, კევი       | კდვუეი  | 7×5  |         56 |
|    22 | ობოლი, ლობიო, ბოლო, ბოლი, ჟოლო      | ბოჟოლი  | 7×5  |         58 |
|    23 | ენა, მელა, მელანი, ნელა, მალე       | მლენაი  | 6×5  |         58 |
|    24 | ნერვი, წვენი, წინ, წრე, წევრი       | რნვწეი  | 6×5  |         56 |
|    25 | წონა, მაწონი, წამი, მიწა, ომი       | იმანწო  | 7×4  |         58 |
|    26 | ხალი, დახლი, ჯილდო, ჯოხი, დილა      | დახლჯიო | 7×5  |         66 |
|    27 | ტოტი, ასო, ოსტატი, სიო, სტატია      | ტასიაოტ | 6×5  |         68 |
|    28 | სახე, მსხალი, სახლი, ხმელი, ისე     | ხიასემლ | 7×5  |         70 |
|    29 | მეტად, დიეტა, ღამე, მედია, დღე      | დტმეაღი | 7×5  |         66 |
|    30 | მუდამ, უმი, მადა, მამიდა, მამა      | იმაუდმა | 7×5  |         68 |
|    31 | რკინა, კინო, როკი, კოდი, ნარდი      | დოიარნკ | 7×5  |         66 |
|    32 | ღია, ღრუ, ბაღი, ბურღი, ბრალი        | ბლარიუღ | 7×5  |         62 |
|    33 | ლინზა, ზონა, ასლი, ასი, სალონი      | ონზაილს | 6×5  |         68 |
|    34 | გაზეთი, ზეთი, თაგვი, თვე, ზეგ       | ევზიგათ | 7×5  |         66 |
|    35 | ნუში, შანსი, შინ, სუნი, საუნა       | ინაუშას | 7×5  |         64 |
|    36 | დანა, ვადა, ნაგავი, გვიან, დავა     | ინგაავდ | 6×5  |         70 |
|    37 | ღილი, ძაღლი, ძილი, ბიძა, იღბალი     | ლღბაიიძ | 7×5  |         70 |
|    38 | სოუსი, სპილო, სული, პლუსი, პულსი    | უისპსლო | 7×5  |         70 |
|    39 | ჩაი, ტანი, ნახატი, იახტა, ხატი      | ჩტნაიახ | 7×5  |         68 |
|    40 | რადიო, ჯადო, ჯვარი, დრო, ვარდი      | ოავჯდრი | 7×5  |         66 |
|    41 | ტყუპი, ყური, პორტი, ტური, პური      | როტიპყუ | 7×5  |         66 |
|    42 | ფენი, ისევ, ფესვი, ნეფე, ნესვი      | იფენევს | 7×5  |         66 |
|    43 | ფაზა, ფრაზა, ბაზა, ბაზარი, ბრაზი    | ფიზარბა | 6×5  |         72 |
|    44 | იგავი, ქვა, არქივი, ვირი, გვარი     | ქვაგიირ | 7×5  |         70 |
|    45 | ურნა, ნაცარი, ცრუ, უნარი, უარი      | ნცარაიუ | 7×5  |         68 |
|    46 | ობი, ბეტონი, ენოტი, ღობე, ტონი      | ტიღნბოე | 7×5  |         68 |
|    47 | ხბო, ლომი, ახლო, ალბომი, ხმალი      | ომბაილხ | 6×5  |         68 |
|    48 | რძე, სიძე, კერძი, რეისი, კისერი     | ძიეირკს | 7×5  |         70 |
|    49 | ქუდი, ქუსლი, ლექსი, ქედი, სულ       | დულსეიქ | 7×5  |         64 |
|    50 | ნიორი, ორი, პრინცი, პირი, პონი      | ოირცნპი | 7×5  |         68 |
|    51 | ირემი, გედი, იმედი, გემი, გმირი     | დირმიგე | 7×5  |         68 |
|    52 | გული, კლუბი, შიგ, კუბი, შუბლი       | ლუბშგიკ | 7×5  |         64 |
|    53 | ყანა, ყავა, ნავი, აივანი, ყინვა     | აიაივნყ | 6×5  |         70 |
|    54 | მერე, მეფე, ტერფი, ფერი, მტერი      | ფრეტეიმ | 7×5  |         66 |
|    55 | გარე, გარეთ, ერი, ერთი, ჰაერი       | რეთიაჰგ | 7×5  |         64 |
|    56 | ასე, სეტყვა, ტყვე, სვეტი, ტყე       | ევყსაიტ | 7×5  |         66 |
|    57 | მითი, სამი, ქიმია, იქით, მაისი      | მსთაიიქ | 7×5  |         66 |
|    58 | წითელი, წელი, ლეიბი, თბილი, წილი    | თიწელბი | 7×5  |         72 |
|    59 | რუკა, კეფა, სარკე, სუფრა, კაფე      | საფეურკ | 6×5  |         66 |
|    60 | ბზარი, ჯაზი, ჯერ, ჯიბე, ზებრა       | ბრეაზიჯ | 7×5  |         64 |
|    61 | ქარი, ქირა, ქმარი, მუმია, მუქი      | რმქიაუმ | 7×5  |         66 |
|    62 | ჯამი, ასაკი, სკამი, აჯიკა, მაჯა     | ჯკიაასმ | 7×5  |         68 |
|    63 | გარემო, გემო, მარტო, გორა, მეტრო    | მეროგტა | 7×5  |         72 |
|    64 | წებო, ბევრი, წვერი, ბეწვი, ბერი     | ეროვბწი | 7×5  |         68 |
|    65 | სველი, იქვე, ყელი, ყველი, ექვსი     | ისლქეყვ | 7×5  |         68 |
|    66 | თოკი, ბლოკი, კილო, სითბო, ბოთლი     | სკობითლ | 7×5  |         68 |
|    67 | ელვა, ძვალი, ძველი, ხვალ, ძეხვი     | ძელიხავ | 7×5  |         68 |
|    68 | ეტაპი, კარტი, ტირე, პაკეტი, რეპი    | იკტეპრა | 7×5  |         72 |
|    69 | პარკი, კასრი, კარი, პიკი, ისარი     | რასიკპი | 7×5  |         68 |
|    70 | შალი, შავი, შვილი, ჯიში, ვაშლი      | ჯაიიშლვ | 7×5  |         66 |
|    71 | ექო, დონე, ქვედა, ოდნავ, აქვე       | ქეაოდნვ | 7×5  |         64 |
|    72 | ხილი, რბილი, ჩირი, ჩიხი, ხიბლი      | ირჩბიხლ | 7×5  |         66 |
|    73 | ფხა, აგური, ხუფი, ფიგურა, ფარი      | ფუხრიაგ | 6×5  |         68 |
|    74 | სხივი, ხიდი, დისკი, კივი, იხვი      | ვსდხიიკ | 6×5  |         66 |
|    75 | მხარი, შური, შხამი, მუშა, მუხა      | მრიშუხა | 6×5  |         66 |
|    76 | ადრე, მთა, ფერმა, ფრთა, ერთად       | ეთმფდარ | 7×5  |         64 |
|    77 | ავზი, ვაზი, ზღვარი, კვირა, ზღვა     | ზაკიღრვ | 7×5  |         70 |
|    78 | საათი, თმა, თასმა, ათასი, თამაში    | ითსაშამ | 7×5  |         72 |
|    79 | ფიჭა, ბაჭია, ბაფთა, ათი, ჭია        | ითჭბააფ | 7×5  |         62 |
|    80 | რვა, ავაზა, ზარი, ავარია, ვაზა      | ავარაიზ | 6×5  |         68 |
|    81 | ზეცა, მხარე, ცხარე, ხმა, მზე        | ზმრხეაც | 7×5  |         62 |
|    82 | სუფთა, თაფლი, ფასი, ფული, თასი      | საფთული | 7×5  |         66 |
|    83 | არმია, აჩმა, ჩქარა, ქამარი, ჩქარი   | ჩრაქაიმ | 6×5  |         74 |
|    84 | იოლი, ოფისი, სიმი, ოფლი, ფილმი      | მილსფოი | 6×5  |         66 |
|    85 | თემა, პოემა, პოზა, ეზო, ზემოთ       | ზთეომპა | 7×5  |         64 |
|    86 | თარო, ოპერა, ქერა, ეპოქა, აქეთ      | პთქეარო | 7×5  |         66 |
|    87 | ძროხა, ცხრა, ოცი, არხი, ხორცი       | ოხირაცძ | 7×5  |         64 |
|    88 | გზა, ზარალი, აზრი, გალია, გაზი      | რგააიზლ | 7×5  |         68 |
|    89 | კაცი, ლაქა, ცალი, აქცია, კალია      | ცალკქაი | 7×5  |         66 |
|    90 | ოთხი, თოლია, ხაჭო, ოთახი, თხა       | თჭოიახლ | 7×5  |         64 |
|    91 | ეკალი, იდეა, კლდე, კიდე, პლედი      | ლეადიპკ | 7×5  |         66 |
|    92 | არაყი, ბარტყი, ტბა, ბატი, ყბა       | ტბირაყა | 7×5  |         66 |
|    93 | კიბე, კლიტე, ტკბილი, ეტლი, კბილი    | ტბკილეი | 6×5  |         72 |
|    94 | ძმა, ძია, მარილი, ლაიმი, ძმარი      | მლძიიარ | 6×5  |         68 |
|    95 | აბი, ბიცოლა, ცოლი, ჭაობი, ბალი      | ცბოლჭაი | 7×5  |         68 |
|    96 | ხევი, მხეცი, ცხიმი, ცივი, ციხე      | ხციიემვ | 7×5  |         66 |
|    97 | ზიანი, მზა, მინა, მზიანი, ჰიმნი     | ნიამიზჰ | 7×5  |         70 |
|    98 | ლუკმა, კვალი, ვალი, ალი, მკლავი     | ვალმუკი | 7×5  |         70 |
|    99 | ლარი, ლოყა, წყალი, როლი, წყარო      | რლყოწაი | 7×5  |         66 |
|   100 | ქილა, ლიფტი, ქალი, ფაქტი, ფილა      | ქფლიატი | 7×5  |         66 |
|   101 | უკან, ჭკუა, ბანკი, უბანი, კუჭი      | კბნაუჭი | 7×5  |         66 |
|   102 | ლუდი, კიდევ, უკვე, ლეკვი, კუდი      | ევკლდიუ | 7×5  |         66 |
|   103 | ჯარი, ხარჯი, ბუხარი, ხარი, უჯრა     | ბხაირჯუ | 7×5  |         70 |
|   104 | დღე, დენი, ვიდეო, ღვინო, დევი       | ნდღეოივ | 7×5  |         64 |
|   105 | ნაკლი, ნელა, ნელი, კენჭი, ენა       | ლიჭეანკ | 7×5  |         64 |
|   106 | წინდა, ომი, მოდა, მაწონი, წონა      | იწდმანო | 7×5  |         68 |
|   107 | მალე, მახე, მეტალი, მელა, ხმელი     | ლიტმეხა | 6×5  |         70 |
|   108 | კანი, კაბინა, კაბა, წინ, ბანაკი     | ნკბიააწ | 7×5  |         70 |
|   109 | ხაზი, ნაზი, ხალი, ხალხი, ლინზა      | ლიახხზნ | 6×5  |         66 |
|   110 | ჟოლო, ჰობი, ბოლო, ობოლი, ლობიო      | ოჟიჰლობ | 7×5  |         66 |
|   111 | ალმასი, მამა, მამალი, სია, ასი      | იმმლასა | 6×5  |         68 |
|   112 | ვადა, ცოდვა, ცოდნა, დავა, დანა      | ცანვოად | 7×5  |         66 |
|   113 | განძი, ბიძა, გვიან, ნაძვი, ბინა     | ვგაძნბი | 7×5  |         68 |
|   114 | ბლოგი, ძეგლი, გოლი, ბოლი, ბოძი      | ბოგლიეძ | 7×5  |         66 |
|   115 | ბარდა, ბრმა, დრამა, დაბლა, მადა     | რლამაბდ | 7×5  |         68 |
|   116 | კლასი, სკოლა, სოკო, ასლი, ასო       | ოაკსიოლ | 6×5  |         64 |
|   117 | წვენი, წრე, ნერვი, წესი, წევრი      | ნვრესწი | 7×5  |         66 |
|   118 | სპორტი, პორტი, სპილო, პოსტი, სიო    | ტსპოირლ | 7×5  |         72 |
|   119 | ქვევით, ზევით, ზეთი, თევზი, თვე     | ზთივექვ | 7×5  |         70 |
|   120 | ფარდა, ფრაზა, ყდა, დაფა, ფაზა       | ყარზფად | 7×5  |         64 |
|   121 | ნეკნი, ტონი, ენოტი, კინო, კეტი      | ტკეინნო | 7×5  |         66 |
|   122 | პიტნა, ტანი, შხაპი, ტაში, ხატი      | შნპტახი | 6×5  |         66 |
|   123 | იჯარა, დარაჯი, დრო, ჯადო, რადიო     | რჯაიდაო | 6×5  |         70 |
|   124 | ხბო, სახე, ახლოს, ახლო, ხეობა       | ოხბსლეა | 7×5  |         64 |
|   125 | ქვიშა, ქვაბი, შუა, შუქი, ქვა        | უაბქშივ | 7×5  |         62 |
|   126 | ურნა, უნარი, უარი, რუჯი, ფუნჯი      | ურჯნიაფ | 7×5  |         66 |
|   127 | ღრუ, ბურღი, ყუთი, ყრუ, ბურთი        | უბყთღრი | 7×5  |         62 |
|   128 | დახლი, ახლა, ჩალა, ხალიჩა, დილა     | ადხალიჩ | 7×5  |         70 |
|   129 | ორი, ფონდი, ფონი, იოდი, ნიორი       | რდიფნიო | 7×5  |         64 |
|   130 | თათი, გარე, თეთრი, ერთი, გარეთ      | თგთრეაი | 6×5  |         66 |
|   131 | ნავი, ტვინი, ყინვა, ტყავი, ტყვია    | ტნივყაი | 7×5  |         70 |
|   132 | ჯინსი, ნისლი, სუნი, სული, სულ       | ლჯნიუსი | 7×5  |         64 |
|   133 | მისია, მილი, საიტი, სტილი, მაისი    | ამტსილი | 7×5  |         70 |
|   134 | ზეიმი, ზეგ, გმირი, გემი, ირემი      | ეიგიზმრ | 7×5  |         66 |
|   135 | ნესვი, ისე, ვენახი, ასე, სხვენი     | ეანსხივ | 7×5  |         70 |
|   136 | ეკრანი, კაფე, კეფა, რკინა, ერი      | იკნფეარ | 7×5  |         68 |
|   137 | მაშინ, სამი, შანსი, საღი, შინ       | სმღნშაი | 7×5  |         64 |
|   138 | როკი, ბარგი, კობრა, იოგა, კარგი     | ბგოაირკ | 6×5  |         68 |
|   139 | გლუვი, გუშინ, ნული, შიგ, გული       | უვნლშგი | 6×5  |         64 |
|   140 | ბუზი, ზებრა, აუზი, ბრაზი, ბერი      | ზბიარუე | 7×5  |         66 |
|   141 | ისევ, იქვე, ლექსი, თესლი, ექვსი     | სქთველი | 7×5  |         68 |
|   142 | უმი, მუხლი, მიწა, ლუწი, ხმალი       | წუიალმხ | 7×5  |         64 |
|   143 | ატომი, მარტო, ტორტი, ტომი, ტოტი     | ოამტტრი | 7×5  |         68 |
|   144 | ვირი, პრიზი, ძვირი, ძირი, პირი      | ძირვიზპ | 7×5  |         66 |
|   145 | ძილი, გრილი, რძე, გრძელი, რიგი      | ძრიიგლე | 7×5  |         68 |
|   146 | შოკი, კილო, ლომი, კომში, კოშკი      | შოლკიმკ | 7×5  |         66 |
|   147 | ფერი, ფეხი, ხერხი, ტერფი, ტირე      | ფრხიეხტ | 7×5  |         66 |
|   148 | იღბალი, ღილი, წაბლი, წილი, ღია      | იბალწიღ | 7×5  |         68 |
|   149 | ჯერ, ბევრი, ჯიბე, წვერი, ბეწვი      | ებვჯწირ | 7×5  |         66 |
|   150 | ქმარი, ქირა, ქუდი, ქურდი, მუქი      | მიაქუდრ | 7×5  |         66 |
|   151 | ხელი, ხვალ, ელვა, სველი, სახლი      | იელასხვ | 7×5  |         66 |
|   152 | პარკი, პური, რუკა, კარი, კურკა      | პკუიარკ | 7×5  |         66 |
|   153 | თვალი, თავი, იქით, ქლიავი, ვილა     | იაიქლვთ | 6×5  |         70 |
|   154 | ჭია, ფიჭვი, ჯაჭვი, იაფი, ფიჭა       | ჭჯივიაფ | 7×5  |         64 |
|   155 | ობი, თაობა, შაბათი, შობა, ათი       | შბაოაით | 6×5  |         66 |
|   156 | შალი, შავი, შვილი, შიდა, ადვილი     | იიშლვდა | 7×5  |         70 |
|   157 | კამათი, მთა, ხმა, თმა, კათხა        | მათხიაკ | 6×5  |         64 |
|   158 | ქარი, შაქარი, ჩქარა, ჩაი, ჩქარი     | შრაქიჩა | 7×5  |         70 |
|   159 | თაფლი, თხილი, ფხა, ფაილი, ხილი      | იიფლთხა | 7×5  |         66 |
|   160 | მაჯა, ჯამი, ატამი, კატა, აჯიკა      | კტაჯიმა | 7×5  |         66 |
|   161 | ზღვარი, რვა, გვარი, ზღვა, ზარი      | ზგიარღვ | 7×5  |         68 |
|   162 | ფორმა, ფირმა, ღომი, ღრმა, ფარი      | რაღიფომ | 7×5  |         66 |
|   163 | რბილი, ჭერი, ჭრელი, ბიჭი, ლეიბი     | ჭბლირეი | 7×5  |         68 |
|   164 | ცხრა, ხურმა, მუხა, ცხარე, ცრუ       | რხაუცმე | 7×5  |         64 |
|   165 | ქვედა, აქეთ, ქედი, აქვე, დათვი      | დეიავქთ | 7×5  |         66 |
|   166 | თარო, სუფთა, უთო, სუფრა, ფრთა       | ოსუათრფ | 7×5  |         64 |
|   167 | ქერა, ეპოქა, ექო, ოპერა, ოქრო       | ეოპოარქ | 6×5  |         64 |
|   168 | მეტრი, მტერი, მტრედი, კიდე, კრემი   | იდმერკტ | 7×5  |         74 |
|   169 | ეტლი, გველი, ტყე, ტყვე, ყველი       | ყტგლვიე | 7×5  |         64 |
|   170 | იდეა, ცუდად, ცუდი, დედა, დეიდა      | ეაცუდდი | 7×5  |         66 |
|   171 | სხივი, სიძე, ძეხვი, ხევი, იხვი      | ხეიიძსვ | 7×5  |         66 |
|   172 | გზა, მანგო, ტანგო, ზონა, ზომა       | ტაზგნომ | 7×5  |         64 |
|   173 | ღორი, აზრი, ზღარბი, ბაღი, ბზარი     | ბზრაიღო | 7×5  |         70 |
|   174 | კვლავ, ცალი, ვალი, კვალი, კაცი      | ცვავკილ | 7×5  |         66 |
|   175 | საათი, ფასი, ფაფა, ათასი, თასი      | ფასიფათ | 7×5  |         66 |
|   176 | ბადე, ბებია, ბედი, დიეტა, ბატი      | აბბიტედ | 7×5  |         66 |
|   177 | ლარი, ძვალი, ძია, ძრავა, ძალა       | ავარძლი | 7×5  |         64 |
|   178 | მაგარი, მაგია, მზა, არმია, გაზი     | იმააგზრ | 7×5  |         70 |
|   179 | ძმარი, ხარი, მხარი, ძმა, ძიძა       | რიძაძხმ | 7×4  |         64 |
|   180 | ცხიმი, ხედი, ხიდი, იმედი, ციხე      | იდხციემ | 7×5  |         66 |
|   181 | კიდევ, დევი, კოდი, ვიდეო, დოქი      | კეიქვდო | 7×5  |         66 |
|   182 | მახე, მეფე, მხარე, ფერმა, მერე      | ეეარხმფ | 6×5  |         66 |
|   183 | კაბელი, კაბა, კალია, კიბე, ეკალი    | ლაებკია | 7×5  |         72 |
|   184 | ხროვა, ჯარი, ჯოხი, არხი, ხარჯი      | რიჯვახო | 6×5  |         66 |
|   185 | ომი, ორმოცი, ოცი, ხორცი, ორმო       | ომირხოც | 7×5  |         66 |
|   186 | ლამპა, ღამე, მალე, მელა, მაღლა      | მპაღალე | 7×5  |         66 |
|   187 | დანა, ავაზა, ვადა, დავა, ანდაზა     | ზადაავნ | 6×5  |         70 |
|   188 | აბი, ბაჭია, ყაბაყი, ყბა, ბაყაყი     | აყაჭიყბ | 7×5  |         70 |
|   189 | ბანკი, კუბი, კუნთი, უბანი, ბინა     | ნბკიუათ | 7×5  |         68 |
|   190 | კევი, კივი, ჩეკი, ლეკვი, ჩვილი      | ლიეკიჩვ | 7×5  |         66 |
|   191 | ხალი, იახტა, ფილა, ტალახი, ტაფა     | ხლიააფტ | 7×5  |         70 |
|   192 | ობოლი, გოლი, ბოლო, ბლოგი, ჯოგი      | ოლიგოჯბ | 7×5  |         66 |
|   193 | კოალა, ასაკი, სკოლა, კლასი, ასლი    | ოლსკააი | 7×5  |         70 |
|   194 | დრამა, ბაზა, მადა, ბრმა, ბარდა      | მზრდააბ | 6×5  |         66 |
|   195 | მზე, თვე, ზემოთ, ეზო, ქვემოთ        | ზქვთემო | 7×5  |         64 |
|   196 | წყნარი, ნარდი, წინდა, ყდა, წინ      | დიყანწრ | 6×5  |         68 |
|   197 | ნაზი, ნიჭი, ზიანი, მინა, მზიანი     | ზჭინმია | 7×5  |         70 |
|   198 | წვენი, წამი, მწვანე, ენა, წვიმა     | წნამვეი | 6×5  |         70 |
|   199 | ფარდა, ფრაზა, დაფა, დრო, დოზა       | ფდააოზრ | 7×5  |         64 |
|   200 | ქულა, ვაშლი, შუქი, ქილა, ქვიშა      | ქუვლიაშ | 6×5  |         66 |
|   201 | კოჭი, ბლოკი, კუჭი, კლუბი, ბოლი      | ოილჭკბუ | 7×5  |         66 |
|   202 | ფოთოლი, ბოთლი, ოფლი, თოფი, ლობიო    | თლფოობი | 7×5  |         72 |
|   203 | მოდა, ალი, მოდელი, მედია, მედალი    | ლმოეადი | 7×5  |         72 |
|   204 | იოლი, სპილო, პილოტი, სიო, პოსტი     | პსიტიოლ | 7×5  |         70 |
|   205 | არაყი, ყანა, ყრუ, ყური, უნარი       | ნყუიარა | 7×5  |         64 |
|   206 | ეტაპი, პიტნა, ფენა, ტანი, ფენი      | ფიანტპე | 7×5  |         66 |
|   207 | ლუდი, დილა, უარი, ხურდა, დახლი      | რახდული | 7×5  |         66 |
|   208 | ოთხი, ახლა, ხალათი, ოთახი, ახლო     | აოთახლი | 7×5  |         70 |
|   209 | ერთად, გარეთ, ზეგ, ზედა, ადრე       | ზარგთედ | 7×5  |         64 |
|   210 | ისე, ანკესი, ასე, პენსია, კანი      | ეანპიკს | 7×5  |         68 |
|   211 | ერი, ირემი, რეისი, სიმი, ნემსი      | სერნიმი | 7×5  |         66 |
|   212 | დენი, გედი, მენიუ, გუნდი, გემი      | დნმეგუი | 6×5  |         66 |
|   213 | სიტყვა, ვიზა, ვაზი, ავზი, ტყვია     | ტსიაზვყ | 6×5  |         70 |
|   214 | ცული, ასი, პიცა, პლუსი, პულსი       | იულპაცს | 7×5  |         64 |
|   215 | სტილი, სულ, ჩიტი, სული, ჩუსტი       | ულიისჩტ | 6×5  |         64 |
|   216 | შინ, გუშინ, ნიმუში, ნუში, შიგ       | შუგნიმი | 6×5  |         66 |
|   217 | ჭორი, ბარგი, ჭაობი, გოჭი, ორი       | ბგრაიჭო | 7×5  |         64 |
|   218 | სიცივე, ისევ, ფიცი, ცივი, ფესვი     | ვეფიცსი | 7×5  |         70 |
|   219 | თოკი, კოვზი, ზევით, თევზი, ზეთი     | თვიეზოკ | 7×5  |         68 |
|   220 | ატომი, სამი, სამოცი, ცოტა, ასო      | ამსიტოც | 7×5  |         68 |
|   221 | რაიონი, რიგი, გორა, ნიორი, იოგა     | რიაგნიო | 6×5  |         70 |
|   222 | კნუტი, კლოუნი, კინო, კილო, ნული     | უოინკლტ | 7×5  |         70 |
|   223 | ქალი, საქმე, სია, ლექსი, აქლემი     | სელქიმა | 7×5  |         70 |
|   224 | კერძი, კიტრი, ძირი, რძე, კეტი       | ეიიტძრკ | 6×5  |         64 |
|   225 | ტოტი, პოეტი, ტორტი, რეპი, ტირე      | ტტპოერი | 7×5  |         66 |
|   226 | რიტმი, რუჯი, უმი, ტური, ჯიუტი       | უმრტიჯი | 7×5  |         64 |
|   227 | შუა, შური, აგური, ზურგი, აუზი       | აუირგზშ | 7×5  |         64 |
|   228 | ნიკაპი, კარი, ნაპირი, რკინა, პიკი   | იანრიპკ | 6×5  |         74 |
|   229 | ვაჟი, ვილა, თოვლი, თავი, თოლია      | ოთავიჟლ | 7×5  |         66 |
|   230 | მეტრო, მელოტი, როლი, ტომი, ლომი     | მლეტრიო | 7×5  |         70 |
|   231 | ტონი, ბანქო, ბატონი, ობი, ტბა       | ნქიატობ | 6×5  |         66 |
|   232 | ჭია, ავეჯი, ჯაჭვი, ჭაღი, ღია        | აჯეიღვჭ | 7×5  |         62 |
|   233 | ჩაი, მუდამ, მუმია, ჩუმი, ჩუმად      | ამიუჩდმ | 7×5  |         66 |
|   234 | აბანო, თაობა, თხა, ხბო, თანხა       | ოანთხაბ | 7×5  |         64 |
|   235 | ამინდი, ათი, მთა, ნადიმი, თმა       | ამთიიდნ | 6×5  |         66 |
|   236 | ბერი, ზებრა, წარბი, ზეწარი, წრე     | წეაზრიბ | 7×5  |         70 |
|   237 | კარაქი, ქვა, რვა, კარავი, ქირა      | ავიაკრქ | 7×5  |         68 |
|   238 | ლეიბი, კბილი, კეთილი, თბილი, ბილეთი | იიეთკლბ | 7×5  |         78 |
|   239 | ფინალი, ლაიმი, ფილმი, მილი, ფაილი   | ანიმლიფ | 7×5  |         74 |
|   240 | შიდა, შორს, დროშა, სოდა, რადიო      | ოდრასში | 7×5  |         66 |
