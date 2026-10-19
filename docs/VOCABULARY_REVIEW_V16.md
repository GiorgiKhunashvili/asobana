# Journey vocabulary and campaign review — revision 16

The owner reviewed the 372 filtered bonus spellings: **325 are approved for required
use and 47 remain bonus-only**. The 325 include the ten previously approved words.
The owner also excluded 53 existing spellings from required answers, variants and
bonuses. The final allowlist contains **1,091 words: 766 retained + 325 promoted**.
The exact individual decisions and recorded senses are in
[the allowlist](../content/dictionaries/everyday-targets-v16.json). All 38 previously
verified plurals remain bonus-only. The unchanged 1,312-entry reference dictionary
has **1,209 playable spellings**, of which **118 are bonus-only**.

## Measured results

| Measure                               | Revision 15 | Revision 16 |
| ------------------------------------- | ----------: | ----------: |
| Levels / stops                        |    240 / 48 |    240 / 48 |
| Required slots                        |       1,200 |       1,200 |
| Approved required spellings           |         819 |       1,091 |
| Distinct required words               |         680 |         865 |
| Slots after a word’s first appearance |         520 |         335 |
| Unused approvals                      |         139 |         226 |
| Minimum repeat gap                    |          75 |          75 |

Repeated answer slots decrease by **35.58%**. The new campaign
uses **256 of the 325 promoted words**; the other 69 remain eligible.
There are 295 newly used spellings and 110 previously used spellings
no longer required. Bonus appearances do not count toward required-word repetition.

| Required appearances | Distinct words |
| -------------------: | -------------: |
|                    1 |            558 |
|                    2 |            279 |
|                    3 |             28 |

Repeat gaps range from 75 to 227 levels. All variants are canonical-only.
Required slots by length: 122 three-letter, 564 four-letter,
418 five-letter and 96 six-letter answers. Five-letter answers
start at level 3, six-letter answers at level 18. The exact progression, early
six-letter quotas, later six-letter stops, five-answer boards, wheel sizes,
connected crossings, density, phone cells, unique wheels and chapter pacing are
validated without exceptions. Difficulty estimates are not player testing.

## Editorial audit and limitations

The exact draft’s 865 distinct required spellings and all 1,200 slots were
checked against individual retained/owner decisions, recorded glosses and source
URLs. Promoted words retain their reference senses. All 47 reserved words are
blocked as targets and variants; all 53 removals are blocked in every role.
Eligible formable bonus words remain recognized. No new reference entries, fresh
external source verification or native-speaker credentials are claimed.

The bounded search generated compatible wheels and layouts, assembled a feasible
campaign, optimized distinct-word coverage and reduced heavy reuse through valid
single-board replacements. This is not proof of maximum coverage or that all
unused words are impossible to place. All 1,091 words would still leave an
arithmetic minimum of 109 repeated slots; reaching 1,500 approvals requires
409 more reviewed words and does not guarantee a zero-repeat campaign.

## Save compatibility and deterministic rebuild

Historical revisions 1–15, allowlists and reference dictionaries remain unchanged.
Pack identity, all 240 level IDs and all 48 stops remain stable. Migration supports
all previous revisions and preserves completion, partial solved credits, coins,
paid hints, settings, postcards and lifetime bonus rewards across restart. The
hint compatibility ceiling is 1,376, retaining revision 15’s 1,334 plus a replacement
board. Continuing answers retain their IDs on the same board.

Reviewed draft SHA-256: `4aef34914119983051d6fb0dff807e2190d4af100f20cefb3a4bbed9260d6939`.

Rebuild with `scripts/rebuild-wide-content.py --revision 16`; promotion requires
`--promote-reviewed` and this exact reviewed digest. Recipes rebuild independently
of search artifacts. No TestFlight upload or native-device test is claimed.

## Validation

- `npm run check` passed: TypeScript, ESLint, **219 tests in 27 suites**,
  all **240 levels solved**, and repository formatting.
- `uv run pytest`: **126 passed**. Ruff lint, Ruff formatting and mypy passed.
- `npx expo export --platform ios` succeeded. This is an export, not native-device
  testing or a TestFlight upload.
- New coverage checks the exact 325 promotions / 47 bonus-only decisions, all 53
  exclusions, rejected target variants, deterministic draft digest, retained bonus
  recognition and migration from v15 as well as older revisions across restart.
- All **50 pre-existing pack, recipe, review, allowlist and reference JSON files**
  were checked byte-identical. The shared revision-scoped word policy is updated
  intentionally; historical eligibility is preserved.

## All 47 owner-reserved bonus-only words

ალვა, ანგარი, ანჯამა, არე, ბაგაჟი, ბაჟი, ბუფეტი, გეში, გრიფი, დოკი, ეჩო, ზემო, თელა, იაკი, სად, იელი, სალი, იონი, ირაო, სოლი, კალო, ტაიგა, კედარი, ტორფი, ურცი, კორპი, კუნელი, ქამა, ქიში, ლამის, ლასო, ლემა, ლიჩი, მეტი, ჩერო, ცილი, ნუგა, პალო, ჭაკი, პაწია, რაგუ, რაზა, ხვია, რიფი, რიხი, როდის, რუბლი

## All 53 owner exclusions from gameplay

ათასი, ათი, ასე, ასი, აქეთ, აქვე, ახლა, ახლო, ახლოს, ბლოგი, გარე, დღეს, ერთი, ექვსი, ზევით, ზემოთ, ისე, ისევ, იქვე, იქით, კარგი, კევი, კვლავ, კიდევ, მაღლა, მაშინ, მერე, მეტად, ნელა, ოდნავ, ოთხი, ორი, ორმოცი, ოცი, რვა, სამი, სამოცი, სულ, უკვე, უფრო, ქვედა, ქვევით, ქვემოთ, შვიდი, შიგ, შიდა, შინ, ჩქარა, ცუდად, ცხრა, წინ, ხუთი, ჯერ

## Unused approved words (226)

| Word   | Recorded meaning            | Approval       | Source                                                                      |
| ------ | --------------------------- | -------------- | --------------------------------------------------------------------------- |
| აბზაცი | paragraph                   | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=აბზაცი&oldid=91914485) |
| აბჯარი | armor                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=აბჯარი&oldid=89915412) |
| ადგილი | place                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ადგილი&oldid=92740114) |
| ადვილი | easy                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563) |
| აივანი | balcony                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190) |
| ამბავი | story, news                 | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ამბავი&oldid=84112516) |
| ანბანი | alphabet                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ანბანი&oldid=92421407) |
| ანდაზა | proverb                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575) |
| ანკეტა | questionnaire               | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ანკეტა&oldid=84112645) |
| არქივი | archive                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427) |
| ასანთი | match                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ასანთი&oldid=84113032) |
| ასკილი | dog rose                    | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ასკილი&oldid=88091340) |
| ბადაგი | grape syrup                 | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბადაგი&oldid=92290638) |
| ბავშვი | child                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბავშვი&oldid=89365503) |
| ბალახი | grass                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბალახი&oldid=85585178) |
| ბალეტი | ballet                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბალეტი&oldid=84097557) |
| ბალიში | pillow, cushion             | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბალიში&oldid=84629170) |
| ბანაკი | camp                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693) |
| ბანანი | banana                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335) |
| ბანქო  | playing cards               | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)  |
| ბაქანი | platform                    | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბაქანი&oldid=84113388) |
| ბაწარი | string, cord                | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბაწარი&oldid=92228016) |
| ბეკონი | bacon                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047) |
| ბერეტი | beret                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646) |
| ბეღელი | granary                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბეღელი&oldid=84113473) |
| ბეღურა | sparrow                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბეღურა&oldid=84757232) |
| ბეჭედი | ring                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424) |
| ბზიკი  | wasp                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბზიკი&oldid=84113490)  |
| ბილიკი | path                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672) |
| ბირთვი | core                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბირთვი&oldid=84113525) |
| ბიძგი  | push                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბიძგი&oldid=84097695)  |
| ბოლქვი | bulb                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბოლქვი&oldid=84097704) |
| ბორცვი | hillock                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბორცვი&oldid=84097714) |
| ბოსელი | cowshed                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბოსელი&oldid=84097715) |
| ბრინჯი | rice                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506) |
| ბუსუსი | fuzz                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბუსუსი&oldid=84097785) |
| ბუტკო  | pistil                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ბუტკო&oldid=84113712)  |
| ბუხარი | fireplace                   | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ბუხარი&oldid=91726056) |
| გეგმა  | plan                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)  |
| გვალვა | drought                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=გვალვა&oldid=92490376) |
| გიტარა | guitar                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=გიტარა&oldid=84096739) |
| გოგო   | girl                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=გოგო&oldid=88091280)   |
| გოჭი   | piglet                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)   |
| გრძელი | long                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966) |
| დალაქი | barber                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=დალაქი&oldid=85046705) |
| ეკრანი | screen                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327) |
| ესკიზი | sketch                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ესკიზი&oldid=84114959) |
| ექთანი | nurse                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ექთანი&oldid=88190646) |
| ვენახი | vineyard                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996) |
| ვეფხვი | tiger                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ვეფხვი&oldid=85067960) |
| ვეშაპი | whale                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ვეშაპი&oldid=88296435) |
| ვირთხა | rat                         | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ვირთხა&oldid=84115189) |
| ვირუსი | virus                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ვირუსი&oldid=84098530) |
| ზაზუნა | hamster                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ზაზუნა&oldid=59802134) |
| ზარალი | loss                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744) |
| ზეწარი | bedsheet                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ზეწარი&oldid=84098578) |
| თამადა | toastmaster                 | Retained       | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151) |
| თამაში | game                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028) |
| თარიღი | date                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=თარიღი&oldid=88646319) |
| თეფში  | plate                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=თეფში&oldid=92189472)  |
| თოჯინა | doll                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=თოჯინა&oldid=84098714) |
| თუნუქი | tin plate                   | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=თუნუქი&oldid=84098722) |
| იარაღი | weapon, tool                | Retained       | [source](https://en.wiktionary.org/w/index.php?title=იარაღი&oldid=84096054) |
| იატაკი | floor                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760) |
| იდაყვი | elbow                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=იდაყვი&oldid=90005976) |
| კაბელი | cable                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კაბელი&oldid=84115959) |
| კაკაბი | partridge                   | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კაკაბი&oldid=84115977) |
| კაკალი | walnut; walnut tree         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კაკალი&oldid=92767192) |
| კაკაო  | cocoa                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კაკაო&oldid=84098934)  |
| კამერა | chamber                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კამერა&oldid=84098969) |
| კამეჩი | buffalo                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კამეჩი&oldid=84116010) |
| კანონი | law                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კანონი&oldid=85068329) |
| კაპიკი | kopeck                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კაპიკი&oldid=84116027) |
| კარადა | cupboard, wardrobe, closet  | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კარადა&oldid=84116032) |
| კარავი | tent                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კარავი&oldid=84116033) |
| კარატე | karate                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კარატე&oldid=87607608) |
| კარაქი | butter                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კარაქი&oldid=87818208) |
| კედელი | wall                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კედელი&oldid=88966872) |
| კეთილი | kind                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კეთილი&oldid=85068581) |
| კენკრა | berry                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კენკრა&oldid=92248952) |
| კვამლი | smoke                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კვამლი&oldid=84116122) |
| კვირტი | bud                         | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კვირტი&oldid=84116143) |
| კლანჭი | claw                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კლანჭი&oldid=84104695) |
| კოკორი | flower bud                  | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კოკორი&oldid=88091590) |
| კოლოფი | box                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კოლოფი&oldid=84116231) |
| კომეტა | comet                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კომეტა&oldid=84099201) |
| კომოდი | chest of drawers            | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კომოდი&oldid=84099206) |
| კონცხი | cape                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კონცხი&oldid=84099289) |
| კოღო   | mosquito                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კოღო&oldid=84116318)   |
| კოშკი  | tower                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კოშკი&oldid=84116319)  |
| კოცონი | bonfire                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კოცონი&oldid=84099332) |
| კუთხე  | corner                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კუთხე&oldid=85839766)  |
| კულული | curl                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კულული&oldid=84099390) |
| კუპონი | coupon                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=კუპონი&oldid=84099396) |
| კურკა  | fruit stone                 | Retained       | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)  |
| ლაზერი | laser                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ლაზერი&oldid=84116416) |
| ლუკმა  | bite, morsel                | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ლუკმა&oldid=84116574)  |
| ლულა   | barrel of a gun             | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ლულა&oldid=84103557)   |
| მაგიდა | table                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მაგიდა&oldid=84116591) |
| მამალი | rooster                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მამალი&oldid=91716460) |
| მასალა | material                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მასალა&oldid=92945175) |
| მატყლი | wool                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მატყლი&oldid=84757270) |
| მაწონი | matsoni yogurt              | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051) |
| მელანი | ink                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862) |
| მელოტი | bald                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872) |
| მეფე   | king                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)   |
| მკლავი | arm                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მკლავი&oldid=90012056) |
| მოდელი | model                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მოდელი&oldid=88325844) |
| მონეტა | coin                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მონეტა&oldid=84100079) |
| მოტივი | motif                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=მოტივი&oldid=84100123) |
| მღვიმე | cavern                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=მღვიმე&oldid=88287497) |
| მძივი  | bead                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=მძივი&oldid=84100240)  |
| ნაბადი | felt cloak                  | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ნაბადი&oldid=89996951) |
| ნაგავი | rubbish                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259) |
| ნაკადი | gush, spurt, squirt, stream | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ნაკადი&oldid=84100276) |
| ნაკერი | stitch                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ნაკერი&oldid=44505182) |
| ნალექი | precipitation               | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ნალექი&oldid=84117542) |
| ნაცარი | ash                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231) |
| ნახირი | cattle herd                 | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ნახირი&oldid=84117611) |
| ნიმუში | sample                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ნიმუში&oldid=84117676) |
| ნიშანი | sign                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ნიშანი&oldid=85068468) |
| ობობა  | spider                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ობობა&oldid=84117739)  |
| ოსტატი | master craftsman            | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ოსტატი&oldid=87788588) |
| პაკეტი | packet                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პაკეტი&oldid=84097015) |
| პანელი | panel                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=პანელი&oldid=84100554) |
| პაროლი | password                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601) |
| პასტა  | paste                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პასტა&oldid=92228063)  |
| პატივი | honor                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პატივი&oldid=92230548) |
| პენსია | pension                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867) |
| პილოტი | pilot                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538) |
| პლედი  | plaid blanket               | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)  |
| პრინცი | prince                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987) |
| ჟელე   | jelly                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)   |
| საბელი | leash                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=საბელი&oldid=84118453) |
| საგანი | object, subject             | Retained       | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780) |
| საკანი | cell                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=საკანი&oldid=84103500) |
| სალათა | salad                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797) |
| სამეფო | kingdom                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981) |
| საფულე | wallet                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843) |
| საცერი | sieve                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=საცერი&oldid=84118875) |
| სეზონი | season                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სეზონი&oldid=84118932) |
| სეტყვა | hail                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560) |
| სისხლი | blood                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162) |
| სიცივე | coldness, frigidity         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113) |
| სკვერი | public square               | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142) |
| სკივრი | chest                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=სკივრი&oldid=84101617) |
| სოკო   | mushroom                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)   |
| სორო   | burrow                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=სორო&oldid=88091310)   |
| სოუსი  | sauce                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)  |
| სტატია | article                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457) |
| სხეული | body                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318) |
| სხვენი | attic                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=სხვენი&oldid=84119322) |
| ტალღა  | wave                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)  |
| ტექსტი | text                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105) |
| ტვინი  | brain                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტვინი&oldid=87890090)  |
| ტვირთი | load                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860) |
| ტკბილი | sweet                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168) |
| ტომარა | sack                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123) |
| ტყუპი  | twin                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)  |
| უდაბნო | desert                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660) |
| უცხო   | foreign, unfamiliar         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)   |
| ფაქიზი | delicate                    | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ფაქიზი&oldid=84091230) |
| ფიზიკა | physics                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730) |
| ფილტვი | lung                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916) |
| ფილტრი | filter                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240) |
| ფირუზი | turquoise                   | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ფირუზი&oldid=84088596) |
| ფიფქი  | snowflake                   | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)  |
| ფლეიტა | flute                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ფლეიტა&oldid=92228066) |
| ფოთოლი | leaf                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315) |
| ფოკუსი | stunt, trick                | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფოკუსი&oldid=84102291) |
| ფსკერი | bottom                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ფსკერი&oldid=84119972) |
| ფუნტი  | pound                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)  |
| ფქვილი | flour                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987) |
| ქაბაბი | kebab                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993) |
| ქალაქი | city                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093) |
| ქვევრი | qvevri wine vessel          | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687) |
| ქინძი  | coriander                   | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)  |
| ქომაგი | defender                    | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ქომაგი&oldid=91733127) |
| ქურქი  | fur coat                    | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ქურქი&oldid=84224158)  |
| ღელე   | brook                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ღელე&oldid=84120207)   |
| ღიპი   | belly                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ღიპი&oldid=84102517)   |
| ღუზა   | anchor                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ღუზა&oldid=87788040)   |
| ღუმელი | stove                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256) |
| ყასაბი | butcher                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292) |
| ყინული | ice                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551) |
| ყოჩი   | ram                         | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ყოჩი&oldid=84120367)   |
| ყუთი   | box                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ყუთი&oldid=85493733)   |
| შაბათი | Saturday                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=შაბათი&oldid=92954658) |
| შაქარი | sugar                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621) |
| შეშა   | firewood                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)   |
| შიში   | fear                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)   |
| შორს   | far                         | Retained       | [source](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)   |
| შუქურა | lighthouse                  | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=შუქურა&oldid=91715399) |
| შხაპი  | shower                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)  |
| ჩარჩო  | frame                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)  |
| ჩვევა  | habit                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)  |
| ჩლიქი  | hoof                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ჩლიქი&oldid=92229616)  |
| ჩოგანი | racket                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726) |
| ჩონჩხი | skeleton                    | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089) |
| ჩრდილი | shade                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977) |
| ჩუსტი  | slipper                     | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჩუსტი&oldid=84120755)  |
| ცენტრი | center                      | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ცენტრი&oldid=91464748) |
| ცნება  | concept                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ცნება&oldid=84120861)  |
| ცოტა   | a little; few               | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)   |
| ცხვარი | sheep                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ცხვარი&oldid=92419538) |
| ცხვირი | nose                        | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ცხვირი&oldid=87995521) |
| წიგნი  | book                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)  |
| წიწაკა | pepper                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068) |
| წიწილა | chick                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124) |
| წყვილი | pair                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227) |
| წყნარი | quiet                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=წყნარი&oldid=88631680) |
| ჭაღარა | gray-haired                 | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183) |
| ჭაჭა   | grape pomace                | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)   |
| ჭექა   | thunder                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ჭექა&oldid=84121145)   |
| ჭუჭყი  | dirt                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)  |
| ხაბაზი | baker                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ხაბაზი&oldid=84121183) |
| ხალათი | robe                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ხალათი&oldid=84121200) |
| ხალიჩა | carpet, rug                 | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ხალიჩა&oldid=84121204) |
| ხორცი  | meat                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)  |
| ხოჭო   | beetle                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)   |
| ხუნდი  | shackle                     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ხუნდი&oldid=84121362)  |
| ჯიხვი  | Caucasian mountain goat     | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ჯიხვი&oldid=84121441)  |
| ჯიხური | kiosk                       | Owner-promoted | [source](https://en.wiktionary.org/w/index.php?title=ჯიხური&oldid=84103096) |
| ჯოგი   | herd                        | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)   |
| ჯუჯა   | dwarf                       | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)   |
| ჰიმნი  | anthem                      | Retained       | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)  |

## All required words

| Word   | Recorded meaning                                    | Levels       | Source                                                                      |
| ------ | --------------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 40           | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)  |
| აბი    | pill                                                | 2, 136, 223  | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)    |
| აგენტი | agent                                               | 91           | [source](https://en.wiktionary.org/w/index.php?title=აგენტი&oldid=84097114) |
| აგური  | brick                                               | 41, 189      | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)  |
| ადათი  | custom                                              | 52           | [source](https://en.wiktionary.org/w/index.php?title=ადათი&oldid=84112201)  |
| ადრე   | early; previously                                   | 159          | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| ავად   | ill, sick                                           | 52, 221      | [source](https://en.wiktionary.org/w/index.php?title=ავად&oldid=88672971)   |
| ავაზა  | cheetah                                             | 32           | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)  |
| ავარია | accident                                            | 32           | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031) |
| ავდარი | bad weather, rainy weather                          | 39           | [source](https://en.wiktionary.org/w/index.php?title=ავდარი&oldid=84112279) |
| ავეჯი  | furniture                                           | 107          | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)  |
| ავზი   | tank, sink                                          | 32           | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)   |
| ავი    | wicked, evil                                        | 4, 91, 219   | [source](https://en.wiktionary.org/w/index.php?title=ავი&oldid=91725797)    |
| ავტორი | author                                              | 219          | [source](https://en.wiktionary.org/w/index.php?title=ავტორი&oldid=88896573) |
| აზოტი  | nitrogen                                            | 74, 230      | [source](https://en.wiktionary.org/w/index.php?title=აზოტი&oldid=87888146)  |
| აზრი   | thought, opinion                                    | 99, 181      | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)   |
| აკვანი | cradle                                              | 141          | [source](https://en.wiktionary.org/w/index.php?title=აკვანი&oldid=85048814) |
| აკნე   | acne                                                | 75, 194      | [source](https://en.wiktionary.org/w/index.php?title=აკნე&oldid=84112400)   |
| აკრი   | acre                                                | 96, 181      | [source](https://en.wiktionary.org/w/index.php?title=აკრი&oldid=84097213)   |
| ალბომი | album                                               | 134          | [source](https://en.wiktionary.org/w/index.php?title=ალბომი&oldid=91654197) |
| ალი    | blaze, flame, fire                                  | 14, 109, 186 | [source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)    |
| ალიონი | dawn                                                | 185          | [source](https://en.wiktionary.org/w/index.php?title=ალიონი&oldid=84112474) |
| ალმასი | diamond                                             | 222          | [source](https://en.wiktionary.org/w/index.php?title=ალმასი&oldid=84112482) |
| ალოე   | aloe                                                | 93           | [source](https://en.wiktionary.org/w/index.php?title=ალოე&oldid=84112485)   |
| ალფა   | alpha                                               | 58           | [source](https://en.wiktionary.org/w/index.php?title=ალფა&oldid=84097261)   |
| ალღო   | intuition                                           | 79           | [source](https://en.wiktionary.org/w/index.php?title=ალღო&oldid=84097265)   |
| ალყა   | siege                                               | 110          | [source](https://en.wiktionary.org/w/index.php?title=ალყა&oldid=84112502)   |
| ამინდი | weather                                             | 240          | [source](https://en.wiktionary.org/w/index.php?title=ამინდი&oldid=84112550) |
| ამპერი | ampere                                              | 183          | [source](https://en.wiktionary.org/w/index.php?title=ამპერი&oldid=84097293) |
| ამწე   | crane                                               | 173          | [source](https://en.wiktionary.org/w/index.php?title=ამწე&oldid=33588412)   |
| ანემია | anemia                                              | 148          | [source](https://en.wiktionary.org/w/index.php?title=ანემია&oldid=84097334) |
| ანკესი | fishing hook                                        | 216          | [source](https://en.wiktionary.org/w/index.php?title=ანკესი&oldid=85008188) |
| ანძა   | mast                                                | 148          | [source](https://en.wiktionary.org/w/index.php?title=ანძა&oldid=84097365)   |
| ანწლი  | elderberry                                          | 146          | [source](https://en.wiktionary.org/w/index.php?title=ანწლი&oldid=87817176)  |
| არაყი  | vodka                                               | 39           | [source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)  |
| არენა  | arena                                               | 191          | [source](https://en.wiktionary.org/w/index.php?title=არენა&oldid=84097397)  |
| არია   | aria                                                | 32, 203      | [source](https://en.wiktionary.org/w/index.php?title=არია&oldid=89954997)   |
| არმია  | army                                                | 62, 165      | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)  |
| არსი   | essence                                             | 15, 115      | [source](https://en.wiktionary.org/w/index.php?title=არსი&oldid=84112973)   |
| არფა   | harp                                                | 1, 129, 208  | [source](https://en.wiktionary.org/w/index.php?title=არფა&oldid=93122307)   |
| არწივი | eagle                                               | 233          | [source](https://en.wiktionary.org/w/index.php?title=არწივი&oldid=92197068) |
| არხი   | canal                                               | 124          | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)   |
| ასაკი  | age                                                 | 86           | [source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)  |
| ასთმა  | asthma                                              | 90, 227      | [source](https://en.wiktionary.org/w/index.php?title=ასთმა&oldid=84097441)  |
| ასლი   | copy                                                | 53, 204      | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)   |
| ასო    | alphabet letter                                     | 24, 197      | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატამი  | peach                                               | 98           | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატლასი | atlas                                               | 63           | [source](https://en.wiktionary.org/w/index.php?title=ატლასი&oldid=84097471) |
| ატომი  | atom                                                | 37           | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)  |
| აუზი   | pool                                                | 87           | [source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)   |
| აუტი   | throw-in                                            | 44, 136      | [source](https://en.wiktionary.org/w/index.php?title=აუტი&oldid=39552798)   |
| აფთარი | hyena                                               | 208          | [source](https://en.wiktionary.org/w/index.php?title=აფთარი&oldid=84113116) |
| აფიშა  | poster                                              | 208          | [source](https://en.wiktionary.org/w/index.php?title=აფიშა&oldid=84983656)  |
| აფრა   | sail                                                | 1, 129       | [source](https://en.wiktionary.org/w/index.php?title=აფრა&oldid=84113118)   |
| აქლემი | camel                                               | 133          | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908) |
| აქცია  | action, promotion                                   | 14           | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)  |
| აღვირი | bridle                                              | 45           | [source](https://en.wiktionary.org/w/index.php?title=აღვირი&oldid=92127736) |
| აჩმა   | achma cheese pastry                                 | 139          | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)   |
| აჯიკა  | adjika                                              | 181          | [source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)  |
| ბაბუა  | grandfather, grandpa                                | 179          | [source](https://en.wiktionary.org/w/index.php?title=ბაბუა&oldid=84113258)  |
| ბაგე   | lip                                                 | 143          | [source](https://en.wiktionary.org/w/index.php?title=ბაგე&oldid=92454114)   |
| ბაგირი | cable, heavy rope                                   | 38           | [source](https://en.wiktionary.org/w/index.php?title=ბაგირი&oldid=89591122) |
| ბადე   | net                                                 | 159          | [source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)   |
| ბაზა   | base                                                | 33, 179      | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)   |
| ბაზარი | market                                              | 33           | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284) |
| ბაიტი  | byte                                                | 136          | [source](https://en.wiktionary.org/w/index.php?title=ბაიტი&oldid=89301890)  |
| ბალთა  | buckle                                              | 92           | [source](https://en.wiktionary.org/w/index.php?title=ბალთა&oldid=84097562)  |
| ბალი   | sweet cherry                                        | 134          | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ბამბა  | cotton, cotton wool                                 | 179          | [source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)  |
| ბანი   | bass voice                                          | 2, 104       | [source](https://en.wiktionary.org/w/index.php?title=ბანი&oldid=92486488)   |
| ბანკი  | bank                                                | 83           | [source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)  |
| ბარგი  | luggage                                             | 38, 143      | [source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)  |
| ბარდა  | pea                                                 | 188          | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)  |
| ბარი   | valley                                              | 76, 167      | [source](https://en.wiktionary.org/w/index.php?title=ბარი&oldid=92290776)   |
| ბარტყი | chick                                               | 164          | [source](https://en.wiktionary.org/w/index.php?title=ბარტყი&oldid=84113362) |
| ბატი   | goose                                               | 83, 180      | [source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)   |
| ბატონი | sir                                                 | 83           | [source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444) |
| ბაფთა  | bow knot                                            | 176          | [source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)  |
| ბაღი   | garden                                              | 68, 220      | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)   |
| ბაყაყი | frog                                                | 223          | [source](https://en.wiktionary.org/w/index.php?title=ბაყაყი&oldid=93479131) |
| ბაჭია  | young rabbit                                        | 188          | [source](https://en.wiktionary.org/w/index.php?title=ბაჭია&oldid=84097626)  |
| ბგერა  | sound                                               | 11, 143      | [source](https://en.wiktionary.org/w/index.php?title=ბგერა&oldid=88996488)  |
| ბებია  | grandmother, grannie, granny                        | 184          | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)  |
| ბედი   | fate; luck                                          | 35, 111      | [source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)   |
| ბევრი  | many; much                                          | 27           | [source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)  |
| ბელი   | bear cub                                            | 130, 226     | [source](https://en.wiktionary.org/w/index.php?title=ბელი&oldid=91740617)   |
| ბენდი  | band                                                | 111          | [source](https://en.wiktionary.org/w/index.php?title=ბენდი&oldid=90750378)  |
| ბერი   | monk                                                | 27, 229      | [source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)   |
| ბეტონი | concrete                                            | 196          | [source](https://en.wiktionary.org/w/index.php?title=ბეტონი&oldid=84097651) |
| ბეწვი  | fur, pile                                           | 27, 229      | [source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)  |
| ბეჭი   | shoulder blade                                      | 82, 170      | [source](https://en.wiktionary.org/w/index.php?title=ბეჭი&oldid=89438383)   |
| ბზა    | box tree                                            | 11, 87, 179  | [source](https://en.wiktionary.org/w/index.php?title=ბზა&oldid=84113487)    |
| ბზარი  | crack                                               | 108, 220     | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)  |
| ბილეთი | ticket                                              | 130          | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670) |
| ბინა   | apartment                                           | 2, 145, 223  | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)   |
| ბინდი  | twilight                                            | 111          | [source](https://en.wiktionary.org/w/index.php?title=ბინდი&oldid=85068323)  |
| ბირჟა  | exchange                                            | 108          | [source](https://en.wiktionary.org/w/index.php?title=ბირჟა&oldid=84113535)  |
| ბიურო  | bureau                                              | 49, 207      | [source](https://en.wiktionary.org/w/index.php?title=ბიურო&oldid=84097685)  |
| ბიცოლა | aunt                                                | 134          | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800) |
| ბიძა   | uncle                                               | 56, 175      | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)   |
| ბიჭი   | boy                                                 | 201          | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| ბლოკი  | building block                                      | 54, 201      | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                  |
| ბმული  | link                                                | 81, 226      | [source](https://en.wiktionary.org/w/index.php?title=ბმული&oldid=84113566)  |
| ბოთლი  | bottle                                              | 31           | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)  |
| ბოლი   | smoke                                               | 46, 169      | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)   |
| ბოლო   | end                                                 | 46, 212      | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)   |
| ბოლოკი | radish                                              | 46           | [source](https://en.wiktionary.org/w/index.php?title=ბოლოკი&oldid=91412000) |
| ბორანი | ferry                                               | 104          | [source](https://en.wiktionary.org/w/index.php?title=ბორანი&oldid=84097707) |
| ბოძი   | pole                                                | 212          | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)   |
| ბრაზი  | anger                                               | 33, 108      | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)  |
| ბრალი  | fault                                               | 38           | [source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)  |
| ბრბო   | crowd                                               | 169          | [source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)   |
| ბრმა   | blind                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)   |
| ბროლი  | crystal                                             | 82, 169      | [source](https://en.wiktionary.org/w/index.php?title=ბროლი&oldid=84097739)  |
| ბუდე   | nest                                                | 35           | [source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)   |
| ბუზი   | fly                                                 | 87           | [source](https://en.wiktionary.org/w/index.php?title=ბუზი&oldid=91650164)   |
| ბუკი   | trumpet                                             | 18, 228      | [source](https://en.wiktionary.org/w/index.php?title=ბუკი&oldid=88002801)   |
| ბუნება | nature                                              | 184          | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241) |
| ბურთი  | ball                                                | 167          | [source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)  |
| ბურღი  | drill                                               | 49, 207      | [source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)  |
| ბუშტი  | bubble, balloon                                     | 35           | [source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)  |
| ბუჩქი  | bush, shrub                                         | 105          | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)  |
| გაზეთი | newspaper                                           | 97           | [source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807) |
| გაზი   | gas                                                 | 97, 189      | [source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)   |
| გალია  | cage                                                | 58           | [source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)  |
| განძი  | treasure                                            | 195          | [source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)  |
| გარეთ  | outside                                             | 143          | [source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)  |
| გარემო | environment                                         | 73           | [source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637) |
| გარსი  | shell                                               | 202          | [source](https://en.wiktionary.org/w/index.php?title=გარსი&oldid=84097862)  |
| გედი   | swan                                                | 100          | [source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)   |
| გემი   | ship                                                | 100, 226     | [source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)   |
| გემო   | palate, taste                                       | 73           | [source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)   |
| გენი   | gene                                                | 91           | [source](https://en.wiktionary.org/w/index.php?title=გენი&oldid=84097883)   |
| გერბი  | coat of arms                                        | 143          | [source](https://en.wiktionary.org/w/index.php?title=გერბი&oldid=90290436)  |
| გვარი  | surname                                             | 132          | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)  |
| გველი  | snake, serpent                                      | 168          | [source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)  |
| გვიან  | late                                                | 91, 195      | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| გზა    | way, path, road                                     | 11, 132      | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გლუვი  | smooth                                              | 114          | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)  |
| გმირი  | hero                                                | 100          | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)  |
| გობი   | wooden platter                                      | 169          | [source](https://en.wiktionary.org/w/index.php?title=გობი&oldid=87900106)   |
| გოლი   | goal in sport                                       | 93, 232      | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)   |
| გორა   | hill                                                | 73, 213      | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)   |
| გრილი  | cool, breezy, chilly                                | 38           | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)  |
| გუბე   | puddle                                              | 226          | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)   |
| გუდა   | leather bag, wineskin                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=გუდა&oldid=88091499)   |
| გული   | heart                                               | 114          | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)   |
| გუნდი  | choir; team                                         | 187          | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)  |
| გუშინ  | yesterday                                           | 187          | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| დაბა   | small town                                          | 92, 188      | [source](https://en.wiktionary.org/w/index.php?title=დაბა&oldid=91727678)   |
| დაბლა  | down; downstairs                                    | 92           | [source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)  |
| დავა   | dispute                                             | 39, 221      | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)   |
| დათვი  | bear                                                | 52           | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)  |
| დანა   | knife                                               | 72, 171      | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)   |
| დარაჯი | guard                                               | 78           | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652) |
| დარი   | fair weather                                        | 45, 165      | [source](https://en.wiktionary.org/w/index.php?title=დარი&oldid=85046597)   |
| დასი   | troupe, group                                       | 84, 202      | [source](https://en.wiktionary.org/w/index.php?title=დასი&oldid=84114428)   |
| დაფა   | board, tablet                                       | 72, 171      | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)   |
| დაფნა  | laurel                                              | 72, 171      | [source](https://en.wiktionary.org/w/index.php?title=დაფნა&oldid=84114442)  |
| დახლი  | counter                                             | 53           | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)  |
| დედა   | mother                                              | 21, 106      | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| დევი   | giant                                               | 34, 137      | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)   |
| დეიდა  | maternal aunt                                       | 21, 106      | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)  |
| დენთი  | gunpowder                                           | 235          | [source](https://en.wiktionary.org/w/index.php?title=დენთი&oldid=55366640)  |
| დენი   | electric current                                    | 235          | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)   |
| დიადი  | great                                               | 21, 106      | [source](https://en.wiktionary.org/w/index.php?title=დიადი&oldid=84090016)  |
| დიდი   | big                                                 | 21, 106      | [source](https://en.wiktionary.org/w/index.php?title=დიდი&oldid=89611142)   |
| დიეტა  | diet                                                | 128          | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)  |
| დილა   | morning                                             | 53, 210      | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)   |
| დისკი  | disc                                                | 113          | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)  |
| დოგმა  | dogma                                               | 66           | [source](https://en.wiktionary.org/w/index.php?title=დოგმა&oldid=84098233)  |
| დოზა   | dose                                                | 160          | [source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)   |
| დოლი   | drum                                                | 9            | [source](https://en.wiktionary.org/w/index.php?title=დოლი&oldid=88002790)   |
| დონე   | level                                               | 111          | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)   |
| დოქი   | jug                                                 | 19           | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)   |
| დრამა  | drama                                               | 129          | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)  |
| დრო    | time                                                | 19, 127      | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)    |
| დროშა  | flag                                                | 76           | [source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)  |
| დუეტი  | duet                                                | 35, 199      | [source](https://en.wiktionary.org/w/index.php?title=დუეტი&oldid=84098278)  |
| დღე    | day                                                 | 34, 137      | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| ეზო    | yard, courtyard                                     | 22           | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ეკალი  | thorn                                               | 93, 186      | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)  |
| ელვა   | lightning                                           | 20           | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)   |
| ელფი   | elf                                                 | 77           | [source](https://en.wiktionary.org/w/index.php?title=ელფი&oldid=84098344)   |
| ელჩი   | ambassador                                          | 186          | [source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)   |
| ენა    | language; tongue                                    | 107, 184     | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)    |
| ენოტი  | raccoon                                             | 196          | [source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)  |
| ეპოქა  | epoch                                               | 29           | [source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)  |
| ერა    | era                                                 | 112, 191     | [source](https://en.wiktionary.org/w/index.php?title=ერა&oldid=84097005)    |
| ერბო   | ghee, clarified butter                              | 82           | [source](https://en.wiktionary.org/w/index.php?title=ერბო&oldid=55359898)   |
| ერთად  | together                                            | 159          | [source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)  |
| ერი    | nation                                              | 36, 113, 234 | [source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)    |
| ეტაპი  | stage                                               | 123          | [source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)  |
| ეტლი   | carriage                                            | 69, 144      | [source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)   |
| ექო    | echo                                                | 29           | [source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)    |
| ეშვი   | fang                                                | 77           | [source](https://en.wiktionary.org/w/index.php?title=ეშვი&oldid=84114997)   |
| ვადა   | term, deadline                                      | 92, 221      | [source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)   |
| ვაზა   | vase                                                | 32           | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)   |
| ვაზი   | vine, grapevine                                     | 4, 230       | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)   |
| ვაკე   | plain, plane                                        | 57, 216      | [source](https://en.wiktionary.org/w/index.php?title=ვაკე&oldid=84098446)   |
| ვალი   | debt                                                | 63, 168      | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)   |
| ვალსი  | waltz                                               | 63, 217      | [source](https://en.wiktionary.org/w/index.php?title=ვალსი&oldid=84098452)  |
| ვაჟი   | son                                                 | 120          | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)   |
| ვარდი  | rose                                                | 45           | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)  |
| ვაშლი  | apple                                               | 70           | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)  |
| ველი   | field                                               | 20, 114      | [source](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)   |
| ვენა   | vein                                                | 216          | [source](https://en.wiktionary.org/w/index.php?title=ვენა&oldid=85017282)   |
| ვეტო   | veto                                                | 152          | [source](https://en.wiktionary.org/w/index.php?title=ვეტო&oldid=84098503)   |
| ვიდეო  | video                                               | 34, 137      | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)  |
| ვიზა   | visa                                                | 4, 102, 230  | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)   |
| ვილა   | villa                                               | 63, 168      | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)   |
| ვირი   | donkey, ass                                         | 45, 233      | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)   |
| ვოლტი  | volt                                                | 150          | [source](https://en.wiktionary.org/w/index.php?title=ვოლტი&oldid=84098545)  |
| ზავი   | truce                                               | 4, 132       | [source](https://en.wiktionary.org/w/index.php?title=ზავი&oldid=84103359)   |
| ზარი   | bell                                                | 108, 189     | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)   |
| ზებრა  | zebra                                               | 11, 159      | [source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)  |
| ზეგ    | day after tomorrow                                  | 11           | [source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)    |
| ზედა   | upper                                               | 159          | [source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)   |
| ზეთი   | oil                                                 | 97           | [source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)   |
| ზეიმი  | celebration                                         | 151          | [source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)  |
| ზეცა   | heaven                                              | 209          | [source](https://en.wiktionary.org/w/index.php?title=ზეცა&oldid=84115327)   |
| ზვავი  | avalanche                                           | 102          | [source](https://en.wiktionary.org/w/index.php?title=ზვავი&oldid=84115331)  |
| ზიანი  | damage                                              | 87, 185      | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)  |
| ზმნა   | verb                                                | 42, 151      | [source](https://en.wiktionary.org/w/index.php?title=ზმნა&oldid=92945166)   |
| ზნე    | character; habit                                    | 75, 151      | [source](https://en.wiktionary.org/w/index.php?title=ზნე&oldid=92992532)    |
| ზომა   | measure, quantity, size                             | 22           | [source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)   |
| ზონა   | zone                                                | 74, 185      | [source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)   |
| ზურგი  | back                                                | 189          | [source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)  |
| ზღარბი | hedgehog                                            | 220          | [source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278) |
| ზღვა   | sea                                                 | 132          | [source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)   |
| ზღვარი | boundary                                            | 132          | [source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789) |
| თაგვი  | mouse                                               | 140          | [source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)  |
| თავი   | head                                                | 12, 97       | [source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)   |
| თავლა  | stable                                              | 92           | [source](https://en.wiktionary.org/w/index.php?title=თავლა&oldid=85073944)  |
| თათი   | paw                                                 | 17           | [source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)   |
| თანხა  | amount of money                                     | 139, 218     | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)  |
| თაობა  | generation                                          | 176          | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)  |
| თარო   | board, shelf                                        | 176          | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)   |
| თასი   | bowl, chalice                                       | 86, 197      | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| თასმა  | braid                                               | 90, 227      | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)  |
| თაფლი  | honey                                               | 80           | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)  |
| თაღი   | arch                                                | 12, 140      | [source](https://en.wiktionary.org/w/index.php?title=თაღი&oldid=92422626)   |
| თახვი  | beaver                                              | 12           | [source](https://en.wiktionary.org/w/index.php?title=თახვი&oldid=89977530)  |
| თბილი  | warm                                                | 31           | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)  |
| თევზი  | fish                                                | 97           | [source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)  |
| თეთრი  | white                                               | 234          | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)  |
| თემა   | theme; essay                                        | 90, 227      | [source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)   |
| თემი   | community                                           | 28, 130, 235 | [source](https://en.wiktionary.org/w/index.php?title=თემი&oldid=85086632)   |
| თერძი  | tailor                                              | 154, 234     | [source](https://en.wiktionary.org/w/index.php?title=თერძი&oldid=84103313)  |
| თესლი  | seed                                                | 172          | [source](https://en.wiktionary.org/w/index.php?title=თესლი&oldid=84115578)  |
| თექა   | felt                                                | 227          | [source](https://en.wiktionary.org/w/index.php?title=თექა&oldid=84115581)   |
| თეძო   | hip, thigh                                          | 154          | [source](https://en.wiktionary.org/w/index.php?title=თეძო&oldid=84098694)   |
| თვალი  | eye                                                 | 85           | [source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)  |
| თვე    | month                                               | 36, 172      | [source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)    |
| თივა   | hay                                                 | 12, 140      | [source](https://en.wiktionary.org/w/index.php?title=თივა&oldid=84115648)   |
| თითი   | finger                                              | 234          | [source](https://en.wiktionary.org/w/index.php?title=თითი&oldid=84115653)   |
| თიხა   | clay                                                | 12, 218      | [source](https://en.wiktionary.org/w/index.php?title=თიხა&oldid=87990423)   |
| თმა    | hair                                                | 6, 139, 225  | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)    |
| თოვლი  | snow                                                | 85           | [source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)  |
| თოკი   | rope                                                | 85, 178      | [source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)   |
| თოლია  | seagull                                             | 80           | [source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)  |
| თონე   | bread oven                                          | 196          | [source](https://en.wiktionary.org/w/index.php?title=თონე&oldid=87891865)   |
| თოფი   | gun                                                 | 80           | [source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)   |
| თოხი   | hoe                                                 | 6            | [source](https://en.wiktionary.org/w/index.php?title=თოხი&oldid=88091343)   |
| თუთა   | mulberry                                            | 17, 231      | [source](https://en.wiktionary.org/w/index.php?title=თუთა&oldid=92700826)   |
| თუთია  | zinc                                                | 17, 231      | [source](https://en.wiktionary.org/w/index.php?title=თუთია&oldid=84098719)  |
| თხა    | goat                                                | 90, 193      | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| თხილი  | hazelnut                                            | 31           | [source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)  |
| იარა   | wound                                               | 62, 188      | [source](https://en.wiktionary.org/w/index.php?title=იარა&oldid=84115754)   |
| იაფი   | cheap                                               | 15, 205      | [source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)   |
| იახტა  | yacht                                               | 26, 218      | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)  |
| იგავი  | fable                                               | 140          | [source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)  |
| იდეა   | idea                                                | 21, 128, 235 | [source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)   |
| ილეთი  | trick, technique                                    | 28, 130      | [source](https://en.wiktionary.org/w/index.php?title=ილეთი&oldid=84115797)  |
| იმედი  | hope                                                | 100          | [source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)  |
| იოგა   | yoga                                                | 93, 213      | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)   |
| იოდი   | iodine                                              | 111          | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)   |
| იოლი   | easy                                                | 201          | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)   |
| ირემი  | deer                                                | 100, 183     | [source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)  |
| ისარი  | arrow                                               | 15, 99       | [source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)  |
| იუმორი | humor                                               | 198          | [source](https://en.wiktionary.org/w/index.php?title=იუმორი&oldid=91748113) |
| იღბალი | luck                                                | 68           | [source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167) |
| იღლია  | armpit                                              | 68, 206      | [source](https://en.wiktionary.org/w/index.php?title=იღლია&oldid=84115945)  |
| იხვი   | duck                                                | 116          | [source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)   |
| იჯარა  | lease                                               | 78, 181      | [source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)  |
| კაბა   | dress, frock                                        | 40           | [source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)   |
| კაბინა | cabin                                               | 40           | [source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910) |
| კავი   | hook                                                | 141, 216     | [source](https://en.wiktionary.org/w/index.php?title=კავი&oldid=88180606)   |
| კათხა  | mug                                                 | 193          | [source](https://en.wiktionary.org/w/index.php?title=კათხა&oldid=84115971)  |
| კალა   | tin                                                 | 25, 110, 193 | [source](https://en.wiktionary.org/w/index.php?title=კალა&oldid=91725182)   |
| კალათა | basket                                              | 193          | [source](https://en.wiktionary.org/w/index.php?title=კალათა&oldid=84115984) |
| კალამი | pen                                                 | 25           | [source](https://en.wiktionary.org/w/index.php?title=კალამი&oldid=92468658) |
| კალთა  | lap, skirt hem                                      | 86, 193      | [source](https://en.wiktionary.org/w/index.php?title=კალთა&oldid=84098950)  |
| კალია  | grasshopper                                         | 86, 186      | [source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)  |
| კამა   | dill                                                | 25, 225      | [source](https://en.wiktionary.org/w/index.php?title=კამა&oldid=84098960)   |
| კამათი | argument                                            | 225          | [source](https://en.wiktionary.org/w/index.php?title=კამათი&oldid=84116005) |
| კანი   | skin                                                | 40, 163      | [source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)   |
| კანოე  | canoe                                               | 47           | [source](https://en.wiktionary.org/w/index.php?title=კანოე&oldid=84098985)  |
| კანჭი  | shin                                                | 10, 194      | [source](https://en.wiktionary.org/w/index.php?title=კანჭი&oldid=84116024)  |
| კაჟი   | flint                                               | 108          | [source](https://en.wiktionary.org/w/index.php?title=კაჟი&oldid=84099010)   |
| კარატი | carat                                               | 88           | [source](https://en.wiktionary.org/w/index.php?title=კარატი&oldid=84099016) |
| კარი   | door                                                | 13, 96, 238  | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარტი  | card                                                | 13, 88       | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)  |
| კასრი  | barrel                                              | 115          | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)  |
| კატა   | cat                                                 | 88           | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| კაუჭი  | hook                                                | 18, 228      | [source](https://en.wiktionary.org/w/index.php?title=კაუჭი&oldid=88081762)  |
| კაფე   | cafe                                                | 47           | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)   |
| კაცი   | man                                                 | 50           | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)   |
| კბილი  | tooth                                               | 69, 201      | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)  |
| კენჭი  | pebble                                              | 194          | [source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)  |
| კერა   | hearth                                              | 51, 166      | [source](https://en.wiktionary.org/w/index.php?title=კერა&oldid=91649986)   |
| კერძი  | dish                                                | 154          | [source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)  |
| კეტი   | stick                                               | 69, 144      | [source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)   |
| კეფა   | back of the head                                    | 47, 166      | [source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)   |
| კეცი   | ketsi, earthenware frying pan (usually from clay)   | 153          | [source](https://en.wiktionary.org/w/index.php?title=კეცი&oldid=84116112)   |
| კეხი   | saddle tree, nose hump                              | 67, 144      | [source](https://en.wiktionary.org/w/index.php?title=კეხი&oldid=91570728)   |
| კვალი  | trail, clue                                         | 85           | [source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)  |
| კვანძი | knot                                                | 120          | [source](https://en.wiktionary.org/w/index.php?title=კვანძი&oldid=84099089) |
| კვარცი | quartz                                              | 50           | [source](https://en.wiktionary.org/w/index.php?title=კვარცი&oldid=89690421) |
| კვირა  | week                                                | 57, 233      | [source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)  |
| კვიცი  | foal                                                | 59, 153      | [source](https://en.wiktionary.org/w/index.php?title=კვიცი&oldid=91715232)  |
| კვოტა  | quota                                               | 230          | [source](https://en.wiktionary.org/w/index.php?title=კვოტა&oldid=84099109)  |
| კიბე   | ladder, stair, staircase, stairway                  | 69           | [source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)   |
| კიბო   | barnacle; cancer                                    | 3, 104       | [source](https://en.wiktionary.org/w/index.php?title=კიბო&oldid=84116159)   |
| კიდე   | edge                                                | 113          | [source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)   |
| კივი   | kiwi fruit; kiwi bird                               | 59, 233      | [source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)   |
| კილო   | kilo                                                | 85, 162      | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)   |
| კინო   | cinema; movie                                       | 40, 178      | [source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)   |
| კირი   | lime, calcium oxide                                 | 190          | [source](https://en.wiktionary.org/w/index.php?title=კირი&oldid=85066928)   |
| კისერი | neck                                                | 113          | [source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129) |
| კიტრი  | cucumber                                            | 101          | [source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)  |
| კლასი  | class                                               | 84           | [source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)  |
| კლდე   | cliff, crag, scar, rock                             | 210          | [source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)   |
| კლიტე  | lock                                                | 144          | [source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)  |
| კლოუნი | clown                                               | 121          | [source](https://en.wiktionary.org/w/index.php?title=კლოუნი&oldid=84116208) |
| კლუბი  | club                                                | 121          | [source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)  |
| კნუტი  | kitten                                              | 163          | [source](https://en.wiktionary.org/w/index.php?title=კნუტი&oldid=84116212)  |
| კოალა  | koala                                               | 110          | [source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)  |
| კობრა  | cobra                                               | 104          | [source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)  |
| კობრი  | carp                                                | 3            | [source](https://en.wiktionary.org/w/index.php?title=კობრი&oldid=84116215)  |
| კოდალა | woodpecker                                          | 110          | [source](https://en.wiktionary.org/w/index.php?title=კოდალა&oldid=87900485) |
| კოდი   | code                                                | 84           | [source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)   |
| კოვზი  | spoon                                               | 230          | [source](https://en.wiktionary.org/w/index.php?title=კოვზი&oldid=84116223)  |
| კოლეგა | colleague                                           | 93           | [source](https://en.wiktionary.org/w/index.php?title=კოლეგა&oldid=27843090) |
| კომლი  | household                                           | 162          | [source](https://en.wiktionary.org/w/index.php?title=კომლი&oldid=87677676)  |
| კომში  | quince                                              | 162          | [source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)  |
| კონა   | bundle                                              | 10, 104      | [source](https://en.wiktionary.org/w/index.php?title=კონა&oldid=84099233)   |
| კონუსი | cone                                                | 178          | [source](https://en.wiktionary.org/w/index.php?title=კონუსი&oldid=84099277) |
| კოპი   | bump                                                | 101          | [source](https://en.wiktionary.org/w/index.php?title=კოპი&oldid=90518672)   |
| კორტი  | tennis-court                                        | 101          | [source](https://en.wiktionary.org/w/index.php?title=კორტი&oldid=84116301)  |
| კოჭა   | spool                                               | 10           | [source](https://en.wiktionary.org/w/index.php?title=კოჭა&oldid=84099333)   |
| კოჭი   | ankle                                               | 10, 201      | [source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)   |
| კრავი  | lamb                                                | 50           | [source](https://en.wiktionary.org/w/index.php?title=კრავი&oldid=84116326)  |
| კრემი  | cream                                               | 51           | [source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)  |
| კრუხი  | broody hen                                          | 67           | [source](https://en.wiktionary.org/w/index.php?title=კრუხი&oldid=84099373)  |
| კუბი   | cube                                                | 121          | [source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)   |
| კუბო   | coffin                                              | 54           | [source](https://en.wiktionary.org/w/index.php?title=კუბო&oldid=88091344)   |
| კუდი   | tail                                                | 228          | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)   |
| კუზი   | hump                                                | 189          | [source](https://en.wiktionary.org/w/index.php?title=კუზი&oldid=84099382)   |
| კუნთი  | muscle                                              | 178          | [source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)  |
| კუნძი  | stump                                               | 224          | [source](https://en.wiktionary.org/w/index.php?title=კუნძი&oldid=84116386)  |
| კუპატი | kupati sausage                                      | 163          | [source](https://en.wiktionary.org/w/index.php?title=კუპატი&oldid=84096710) |
| კუპრი  | tar                                                 | 67           | [source](https://en.wiktionary.org/w/index.php?title=კუპრი&oldid=92228107)  |
| კუჭი   | stomach                                             | 18           | [source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)   |
| ლაგამი | bridle                                              | 58           | [source](https://en.wiktionary.org/w/index.php?title=ლაგამი&oldid=91776622) |
| ლავა   | lava                                                | 63           | [source](https://en.wiktionary.org/w/index.php?title=ლავა&oldid=84099414)   |
| ლაიმი  | lime (fruit)                                        | 103, 190     | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)  |
| ლამა   | llama                                               | 25, 149      | [source](https://en.wiktionary.org/w/index.php?title=ლამა&oldid=84099426)   |
| ლამპა  | lamp                                                | 149          | [source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)  |
| ლარი   | lari (Georgian currency)                            | 5, 126       | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)   |
| ლაქა   | spot, stain                                         | 14, 135      | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| ლაღი   | carefree                                            | 79           | [source](https://en.wiktionary.org/w/index.php?title=ლაღი&oldid=90036516)   |
| ლეიბი  | mattress                                            | 69           | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)  |
| ლეკვი  | puppy                                               | 153          | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)  |
| ლექსი  | poem                                                | 133          | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)  |
| ლიმონი | lemon                                               | 237          | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519) |
| ლინზა  | lens                                                | 75           | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)  |
| ლირა   | lira                                                | 23, 126      | [source](https://en.wiktionary.org/w/index.php?title=ლირა&oldid=84099516)   |
| ლიფტი  | elevator                                            | 205          | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)  |
| ლობიო  | bean                                                | 46, 125, 212 | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)  |
| ლოდი   | block, rubble                                       | 9, 146       | [source](https://en.wiktionary.org/w/index.php?title=ლოდი&oldid=84099538)   |
| ლომი   | lion                                                | 37, 237      | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლორი   | ham                                                 | 7, 124       | [source](https://en.wiktionary.org/w/index.php?title=ლორი&oldid=84116556)   |
| ლოქო   | catfish                                             | 125          | [source](https://en.wiktionary.org/w/index.php?title=ლოქო&oldid=92197076)   |
| ლოყა   | cheek                                               | 126          | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)   |
| ლუდი   | beer                                                | 127          | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)   |
| ლურჯი  | blue                                                | 127          | [source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)  |
| ლუწი   | even                                                | 81           | [source](https://en.wiktionary.org/w/index.php?title=ლუწი&oldid=92228111)   |
| მაგარი | hard, strong                                        | 203          | [source](https://en.wiktionary.org/w/index.php?title=მაგარი&oldid=84090421) |
| მაგია  | magic                                               | 58, 203      | [source](https://en.wiktionary.org/w/index.php?title=მაგია&oldid=84099569)  |
| მადა   | appetite, stomach                                   | 78, 165, 240 | [source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)   |
| მაზლი  | husband's brother                                   | 131          | [source](https://en.wiktionary.org/w/index.php?title=მაზლი&oldid=84608836)  |
| მაისი  | May                                                 | 98           | [source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)  |
| მალა   | vertebra                                            | 25, 149      | [source](https://en.wiktionary.org/w/index.php?title=მალა&oldid=91725189)   |
| მალე   | soon                                                | 37, 133      | [source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)   |
| მამა   | father                                              | 165          | [source](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)   |
| მამიდა | paternal aunt                                       | 165          | [source](https://en.wiktionary.org/w/index.php?title=მამიდა&oldid=84116651) |
| მანგო  | mango                                               | 42           | [source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)  |
| მანეთი | ruble                                               | 235          | [source](https://en.wiktionary.org/w/index.php?title=მანეთი&oldid=91150504) |
| მანერა | manner                                              | 191          | [source](https://en.wiktionary.org/w/index.php?title=მანერა&oldid=84099636) |
| მანია  | mania                                               | 148, 240     | [source](https://en.wiktionary.org/w/index.php?title=მანია&oldid=84099638)  |
| მარილი | salt                                                | 190          | [source](https://en.wiktionary.org/w/index.php?title=მარილი&oldid=88563420) |
| მარტო  | alone                                               | 73, 214      | [source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)  |
| მარში  | march                                               | 64           | [source](https://en.wiktionary.org/w/index.php?title=მარში&oldid=84099689)  |
| მახე   | trap                                                | 89, 209      | [source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)   |
| მაჯა   | wrist                                               | 78           | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)   |
| მგელი  | wolf                                                | 226          | [source](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)  |
| მედალი | medal                                               | 210          | [source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774) |
| მედია  | media                                               | 89, 210      | [source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)  |
| მელა   | fox                                                 | 37, 131, 210 | [source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)   |
| მენიუ  | menu                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)  |
| მერი   | mayor                                               | 8, 183       | [source](https://en.wiktionary.org/w/index.php?title=მერი&oldid=84099841)   |
| მეტალი | metal                                               | 37           | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455) |
| მეტრი  | metre                                               | 128          | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)  |
| მეტრო  | metro                                               | 73           | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)  |
| მზა    | ready                                               | 42, 131, 209 | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)    |
| მზე    | Sun                                                 | 22, 151      | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)    |
| მზიანი | sunny                                               | 151          | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151) |
| მთა    | mountain, hill                                      | 17, 139, 225 | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| მითი   | myth                                                | 130          | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)   |
| მილი   | tube; mile                                          | 28, 103, 190 | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)   |
| მინა   | glass (material)                                    | 2, 148, 240  | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)   |
| მირაჟი | mirage                                              | 158          | [source](https://en.wiktionary.org/w/index.php?title=მირაჟი&oldid=84099992) |
| მისია  | mission                                             | 98           | [source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)  |
| მიწა   | earth, soil                                         | 81, 173      | [source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)   |
| მლაშე  | salty                                               | 131          | [source](https://en.wiktionary.org/w/index.php?title=მლაშე&oldid=75374767)  |
| მოდა   | fashion                                             | 66           | [source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)   |
| მონა   | slave                                               | 42           | [source](https://en.wiktionary.org/w/index.php?title=მონა&oldid=84117192)   |
| მორალი | moral                                               | 23           | [source](https://en.wiktionary.org/w/index.php?title=მორალი&oldid=84100099) |
| მორი   | log, timber                                         | 23, 155      | [source](https://en.wiktionary.org/w/index.php?title=მორი&oldid=92479633)   |
| მსხალი | pear                                                | 222          | [source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341) |
| მტერი  | enemy                                               | 36, 128      | [source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)  |
| მტვერი | dust                                                | 36           | [source](https://en.wiktionary.org/w/index.php?title=მტვერი&oldid=86633826) |
| მტრედი | pigeon, dove                                        | 128          | [source](https://en.wiktionary.org/w/index.php?title=მტრედი&oldid=84117351) |
| მუდამ  | always                                              | 142          | [source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)  |
| მუზა   | muse                                                | 66, 179      | [source](https://en.wiktionary.org/w/index.php?title=მუზა&oldid=84100186)   |
| მუმია  | mummy                                               | 44, 142      | [source](https://en.wiktionary.org/w/index.php?title=მუმია&oldid=88636171)  |
| მურა   | brown                                               | 214          | [source](https://en.wiktionary.org/w/index.php?title=მურა&oldid=91715082)   |
| მური   | soot                                                | 8, 198       | [source](https://en.wiktionary.org/w/index.php?title=მური&oldid=84117371)   |
| მუსი   | mousse                                              | 95           | [source](https://en.wiktionary.org/w/index.php?title=მუსი&oldid=84100198)   |
| მუქი   | dark                                                | 119          | [source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)   |
| მუშა   | worker                                              | 61           | [source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)   |
| მუცელი | stomach, tummy                                      | 161          | [source](https://en.wiktionary.org/w/index.php?title=მუცელი&oldid=84117402) |
| მუხა   | oak                                                 | 61, 215      | [source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)   |
| მუხლი  | knee                                                | 119          | [source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)  |
| მუხტი  | charge                                              | 44           | [source](https://en.wiktionary.org/w/index.php?title=მუხტი&oldid=87730411)  |
| მწვანე | green                                               | 173          | [source](https://en.wiktionary.org/w/index.php?title=მწვანე&oldid=87444780) |
| მხარე  | side; region                                        | 89, 209      | [source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)  |
| მხარი  | shoulder                                            | 89, 203      | [source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)  |
| მხეცი  | beast                                               | 239          | [source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)  |
| ნადიმი | feast                                               | 240          | [source](https://en.wiktionary.org/w/index.php?title=ნადიმი&oldid=84117506) |
| ნავი   | boat                                                | 120, 195     | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)   |
| ნაზი   | gentle; tender                                      | 74, 185      | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)   |
| ნაკლი  | defect                                              | 75           | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)  |
| ნალი   | horseshoe                                           | 70, 185      | [source](https://en.wiktionary.org/w/index.php?title=ნალი&oldid=84117544)   |
| ნამი   | dew, morning dew                                    | 2, 148       | [source](https://en.wiktionary.org/w/index.php?title=ნამი&oldid=91716533)   |
| ნაპირი | shore, strand, waterside                            | 238          | [source](https://en.wiktionary.org/w/index.php?title=ნაპირი&oldid=87900827) |
| ნარდი  | backgammon                                          | 174          | [source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)  |
| ნაძვი  | spruce                                              | 120, 195     | [source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)  |
| ნაჭერი | piece, cloth                                        | 48           | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132) |
| ნახატი | picture                                             | 218          | [source](https://en.wiktionary.org/w/index.php?title=ნახატი&oldid=84117603) |
| ნეკნი  | rib                                                 | 194          | [source](https://en.wiktionary.org/w/index.php?title=ნეკნი&oldid=84096682)  |
| ნელი   | slow                                                | 75           | [source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)   |
| ნემსი  | needle                                              | 95           | [source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)  |
| ნერვი  | nerve                                               | 107          | [source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)  |
| ნესვი  | melon                                               | 216          | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)  |
| ნეფე   | bridegroom                                          | 47           | [source](https://en.wiktionary.org/w/index.php?title=ნეფე&oldid=84100382)   |
| ნიკაპი | chin                                                | 238          | [source](https://en.wiktionary.org/w/index.php?title=ნიკაპი&oldid=85437203) |
| ნიორი  | garlic                                              | 16, 213      | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)  |
| ნისლი  | fog, mist                                           | 237          | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)  |
| ნიშა   | niche                                               | 70, 192      | [source](https://en.wiktionary.org/w/index.php?title=ნიშა&oldid=84117694)   |
| ნიჭი   | talent                                              | 16           | [source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)   |
| ნოხი   | rug                                                 | 236          | [source](https://en.wiktionary.org/w/index.php?title=ნოხი&oldid=84100426)   |
| ნუკრი  | fawn                                                | 94           | [source](https://en.wiktionary.org/w/index.php?title=ნუკრი&oldid=84100428)  |
| ნული   | zero                                                | 121          | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)   |
| ნუში   | almond                                              | 187          | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)   |
| ობი    | mould                                               | 3, 121, 196  | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)    |
| ობოლი  | orphan                                              | 125, 212     | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)  |
| ოდა    | ode; traditional house                              | 9, 146       | [source](https://en.wiktionary.org/w/index.php?title=ოდა&oldid=87900914)    |
| ოვალი  | oval                                                | 124, 232     | [source](https://en.wiktionary.org/w/index.php?title=ოვალი&oldid=84100444)  |
| ოზონი  | ozone                                               | 74           | [source](https://en.wiktionary.org/w/index.php?title=ოზონი&oldid=88005804)  |
| ოთახი  | room, chamber                                       | 6            | [source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)  |
| ოინი   | prank, trick                                        | 16, 182      | [source](https://en.wiktionary.org/w/index.php?title=ოინი&oldid=84117786)   |
| ოკეანე | ocean                                               | 47           | [source](https://en.wiktionary.org/w/index.php?title=ოკეანე&oldid=84117787) |
| ოლქი   | district                                            | 80, 232      | [source](https://en.wiktionary.org/w/index.php?title=ოლქი&oldid=84117798)   |
| ომი    | war                                                 | 6, 134, 237  | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)    |
| ოპერა  | opera                                               | 29, 123      | [source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)  |
| ორბიტა | orbit                                               | 164          | [source](https://en.wiktionary.org/w/index.php?title=ორბიტა&oldid=84100483) |
| ორმო   | pit                                                 | 155          | [source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)   |
| ოსპი   | lentil                                              | 138          | [source](https://en.wiktionary.org/w/index.php?title=ოსპი&oldid=81817269)   |
| ოფისი  | office                                              | 182          | [source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)  |
| ოფლი   | sweat                                               | 80, 211      | [source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)   |
| ოქრო   | gold                                                | 125          | [source](https://en.wiktionary.org/w/index.php?title=ოქრო&oldid=84117886)   |
| პანდა  | panda                                               | 171          | [source](https://en.wiktionary.org/w/index.php?title=პანდა&oldid=84117940)  |
| პაპა   | grandfather                                         | 171          | [source](https://en.wiktionary.org/w/index.php?title=პაპა&oldid=84117949)   |
| პაპი   | pope                                                | 96           | [source](https://en.wiktionary.org/w/index.php?title=პაპი&oldid=84103471)   |
| პარიკი | wig                                                 | 96           | [source](https://en.wiktionary.org/w/index.php?title=პარიკი&oldid=84209336) |
| პარკი  | plastic bag                                         | 96           | [source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)  |
| პაუზა  | pause                                               | 149          | [source](https://en.wiktionary.org/w/index.php?title=პაუზა&oldid=84100636)  |
| პიკი   | peak                                                | 101, 238     | [source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)   |
| პირი   | mouth                                               | 99, 183      | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)   |
| პიტნა  | mint, spearmint                                     | 163          | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)  |
| პიცა   | pizza                                               | 204          | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)   |
| პლუსი  | plus                                                | 55, 204      | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)  |
| პოემა  | poem                                                | 22           | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)  |
| პოეტი  | poet                                                | 123          | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)  |
| პოზა   | pose                                                | 22, 160      | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)   |
| პონი   | pony                                                | 138          | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)   |
| პორტი  | port                                                | 101          | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)  |
| პოსტი  | post                                                | 43           | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)  |
| პრემია | prize                                               | 183          | [source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288) |
| პრიზი  | prize                                               | 99           | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)  |
| პროზა  | prose                                               | 160          | [source](https://en.wiktionary.org/w/index.php?title=პროზა&oldid=84100873)  |
| პულსი  | pulse                                               | 55, 204      | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)  |
| პუმა   | puma                                                | 149          | [source](https://en.wiktionary.org/w/index.php?title=პუმა&oldid=85689336)   |
| პური   | bread                                               | 67           | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)   |
| ჟოლო   | raspberry                                           | 212          | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)   |
| რადიო  | radio                                               | 76, 202      | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)  |
| რაზმი  | squad                                               | 175          | [source](https://en.wiktionary.org/w/index.php?title=რაზმი&oldid=84118264)  |
| რაიონი | district                                            | 213          | [source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151) |
| რაფა   | windowsill                                          | 1, 176       | [source](https://en.wiktionary.org/w/index.php?title=რაფა&oldid=92486505)   |
| რბილი  | soft                                                | 56           | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)  |
| რგოლი  | ring                                                | 169          | [source](https://en.wiktionary.org/w/index.php?title=რგოლი&oldid=84118289)  |
| რეისი  | scheduled journey                                   | 113          | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)  |
| რეპი   | rap music                                           | 123          | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)   |
| რიგი   | row; queue                                          | 38, 213      | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)   |
| რიტმი  | beat, cadence, rhythm                               | 198          | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)  |
| რკალი  | hoop, ring                                          | 190          | [source](https://en.wiktionary.org/w/index.php?title=რკალი&oldid=91716432)  |
| რკინა  | iron (metal)                                        | 94, 238      | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)  |
| რკო    | acorn                                               | 3, 166       | [source](https://en.wiktionary.org/w/index.php?title=რკო&oldid=89438384)    |
| როკი   | rock music                                          | 3, 154       | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)   |
| როლი   | role                                                | 23           | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)   |
| რომი   | rum                                                 | 23, 155      | [source](https://en.wiktionary.org/w/index.php?title=რომი&oldid=84578008)   |
| რუკა   | map                                                 | 13, 88       | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)   |
| რუხი   | gray/grey                                           | 67           | [source](https://en.wiktionary.org/w/index.php?title=რუხი&oldid=84090896)   |
| რუჯი   | suntan                                              | 127, 231     | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)   |
| რქა    | horn, antler                                        | 5, 158       | [source](https://en.wiktionary.org/w/index.php?title=რქა&oldid=88003264)    |
| რძალი  | daughter-in-law; sister-in-law                      | 79           | [source](https://en.wiktionary.org/w/index.php?title=რძალი&oldid=91716433)  |
| რძე    | milk                                                | 51, 154, 234 | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)    |
| საათი  | clock; hour                                         | 86           | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)  |
| საბანი | blanket                                             | 145          | [source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633) |
| საბუთი | document                                            | 197          | [source](https://en.wiktionary.org/w/index.php?title=საბუთი&oldid=84107021) |
| სადილი | midday meal                                         | 53           | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533) |
| საიტი  | website                                             | 98, 206      | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)  |
| სალონი | salon                                               | 138          | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194) |
| სარი   | stake                                               | 99, 202      | [source](https://en.wiktionary.org/w/index.php?title=სარი&oldid=91725833)   |
| სარკე  | looking-glass, mirror                               | 166          | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)  |
| საუნა  | sauna                                               | 145          | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)  |
| საქმე  | work, business                                      | 133, 227     | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)  |
| საღი   | healthy, sensible                                   | 115, 206     | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)   |
| საწოლი | bed                                                 | 24           | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101) |
| სახე   | face                                                | 90           | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)   |
| სახლი  | home, house, dwelling                               | 222          | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)  |
| სვავი  | vulture                                             | 102          | [source](https://en.wiktionary.org/w/index.php?title=სვავი&oldid=87901139)  |
| სველი  | wet                                                 | 172          | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)  |
| სვეტი  | column                                              | 30           | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)  |
| სია    | list                                                | 24, 145, 222 | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)    |
| სითბო  | warmth                                              | 197          | [source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)  |
| სილა   | sand; slap                                          | 24, 217      | [source](https://en.wiktionary.org/w/index.php?title=სილა&oldid=81821960)   |
| სიმი   | string                                              | 98, 237      | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)   |
| სიო    | breeze                                              | 24, 178      | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)    |
| სიტყვა | word                                                | 30           | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915) |
| სიძე   | son-in-law; groom                                   | 116          | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)   |
| სკამი  | chair                                               | 115          | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)  |
| სკოლა  | school                                              | 84           | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)  |
| სოდა   | soda                                                | 84, 202      | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)   |
| სპა    | spa                                                 | 43, 138      | [source](https://en.wiktionary.org/w/index.php?title=სპა&oldid=91742436)    |
| სპილო  | elephant                                            | 138          | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)  |
| სპორტი | sport                                               | 43           | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224) |
| სტილი  | style                                               | 206          | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)  |
| სული   | spirit, ghost                                       | 55, 204      | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)   |
| სუნი   | smell                                               | 145          | [source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)   |
| სუფთა  | clean                                               | 122          | [source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)  |
| სუფრა  | tablecloth, feast                                   | 122          | [source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)  |
| სხივი  | ray                                                 | 116          | [source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)  |
| ტაბუ   | taboo                                               | 136, 214     | [source](https://en.wiktionary.org/w/index.php?title=ტაბუ&oldid=84101781)   |
| ტალახი | mud                                                 | 26           | [source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470) |
| ტანგო  | tango                                               | 42           | [source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)  |
| ტანი   | body                                                | 74, 163      | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)   |
| ტარი   | handle                                              | 43, 164      | [source](https://en.wiktionary.org/w/index.php?title=ტარი&oldid=91725865)   |
| ტაფა   | frying pan                                          | 129          | [source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)   |
| ტაში   | applause                                            | 180          | [source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)   |
| ტახტი  | ottoman bench                                       | 71           | [source](https://en.wiktionary.org/w/index.php?title=ტახტი&oldid=84101822)  |
| ტბა    | lake                                                | 83, 164      | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ტენი   | moisture                                            | 91, 196      | [source](https://en.wiktionary.org/w/index.php?title=ტენი&oldid=92014085)   |
| ტერფი  | foot                                                | 118          | [source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)  |
| ტილო   | canvas, linen                                       | 7, 150       | [source](https://en.wiktionary.org/w/index.php?title=ტილო&oldid=84101866)   |
| ტირე   | dash                                                | 36, 199      | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)   |
| ტიტა   | tulip                                               | 71, 219      | [source](https://en.wiktionary.org/w/index.php?title=ტიტა&oldid=81818591)   |
| ტოლი   | equal                                               | 7, 150       | [source](https://en.wiktionary.org/w/index.php?title=ტოლი&oldid=92197091)   |
| ტომატი | tomato concentrate                                  | 71           | [source](https://en.wiktionary.org/w/index.php?title=ტომატი&oldid=89872964) |
| ტომი   | tribe; volume                                       | 71           | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)   |
| ტონი   | tone                                                | 83           | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)   |
| ტორტი  | tart                                                | 219          | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)  |
| ტოტი   | branch, twig                                        | 71, 219      | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)   |
| ტრიო   | trio                                                | 43, 123      | [source](https://en.wiktionary.org/w/index.php?title=ტრიო&oldid=84101947)   |
| ტუმბო  | pump                                                | 214          | [source](https://en.wiktionary.org/w/index.php?title=ტუმბო&oldid=84101965)  |
| ტურა   | jackal                                              | 88, 214      | [source](https://en.wiktionary.org/w/index.php?title=ტურა&oldid=91715083)   |
| ტური   | round                                               | 13, 198      | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)   |
| ტყავი  | leather                                             | 152          | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)  |
| ტყე    | forest, wood                                        | 30, 152      | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ტყვე   | captive                                             | 30, 152      | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)   |
| ტყვია  | bullet, lead                                        | 30, 152      | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)  |
| უარი   | refusal                                             | 13, 167      | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)   |
| უბანი  | neighborhood                                        | 87, 184      | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)  |
| უბე    | bay; bosom                                          | 35, 184      | [source](https://en.wiktionary.org/w/index.php?title=უბე&oldid=84119518)    |
| უზადო  | flawless                                            | 66, 160      | [source](https://en.wiktionary.org/w/index.php?title=უზადო&oldid=84119546)  |
| უთო    | iron for clothes                                    | 122, 197     | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)    |
| უკან   | back; backwards                                     | 94           | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| უმი    | raw, uncooked                                       | 17, 161      | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)    |
| უნარი  | ability                                             | 60, 174      | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)  |
| ურდო   | horde                                               | 160          | [source](https://en.wiktionary.org/w/index.php?title=ურდო&oldid=84119678)   |
| ურემი  | cartload                                            | 8            | [source](https://en.wiktionary.org/w/index.php?title=ურემი&oldid=84102064)  |
| ურნა   | urn                                                 | 60           | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)   |
| ურო    | hammer                                              | 122, 198     | [source](https://en.wiktionary.org/w/index.php?title=ურო&oldid=76875321)    |
| ურჩი   | disobedient                                         | 105          | [source](https://en.wiktionary.org/w/index.php?title=ურჩი&oldid=84091172)   |
| უჯრა   | drawer                                              | 60, 231      | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)   |
| ფაზა   | phase                                               | 33           | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)   |
| ფაილი  | file                                                | 103, 205     | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)  |
| ფარა   | flock                                               | 1, 176       | [source](https://en.wiktionary.org/w/index.php?title=ფარა&oldid=84119773)   |
| ფარდა  | curtain, purdah                                     | 129          | [source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)  |
| ფარი   | shield                                              | 60, 208      | [source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)   |
| ფასი   | price, cost                                         | 182          | [source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)   |
| ფაფა   | porridge                                            | 1            | [source](https://en.wiktionary.org/w/index.php?title=ფაფა&oldid=84102169)   |
| ფაქტი  | fact                                                | 205          | [source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)  |
| ფენა   | layer                                               | 48           | [source](https://en.wiktionary.org/w/index.php?title=ფენა&oldid=84102189)   |
| ფენი   | hairdryer                                           | 48           | [source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)   |
| ფერი   | color, hue                                          | 64           | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)   |
| ფერმა  | farm                                                | 64           | [source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)  |
| ფესვი  | root                                                | 172          | [source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)  |
| ფეტვი  | millet                                              | 118          | [source](https://en.wiktionary.org/w/index.php?title=ფეტვი&oldid=87901416)  |
| ფეხი   | foot; leg                                           | 239          | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| ფიგურა | stature, figure                                     | 41           | [source](https://en.wiktionary.org/w/index.php?title=ფიგურა&oldid=91715102) |
| ფილა   | slab                                                | 58, 205      | [source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)   |
| ფილე   | fillet                                              | 77, 172      | [source](https://en.wiktionary.org/w/index.php?title=ფილე&oldid=84102226)   |
| ფილმი  | film                                                | 103          | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)  |
| ფინალი | final                                               | 103          | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241) |
| ფირი   | film                                                | 15, 156      | [source](https://en.wiktionary.org/w/index.php?title=ფირი&oldid=84102247)   |
| ფირმა  | company                                             | 64, 155      | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)  |
| ფისი   | resin                                               | 15           | [source](https://en.wiktionary.org/w/index.php?title=ფისი&oldid=87901452)   |
| ფიცი   | oath                                                | 239          | [source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)   |
| ფიჭა   | honeycomb                                           | 48           | [source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)   |
| ფიჭვი  | pine                                                | 156          | [source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)  |
| ფლავი  | pilaf                                               | 70, 147      | [source](https://en.wiktionary.org/w/index.php?title=ფლავი&oldid=84102266)  |
| ფლოტი  | fleet                                               | 211          | [source](https://en.wiktionary.org/w/index.php?title=ფლოტი&oldid=84102283)  |
| ფონდი  | fund                                                | 72           | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)  |
| ფონი   | background                                          | 72, 182      | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)   |
| ფორმა  | shape, form                                         | 155          | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)  |
| ფოტო   | photo                                               | 211          | [source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)   |
| ფრაზა  | phrase                                              | 33           | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)  |
| ფრანი  | kite                                                | 48           | [source](https://en.wiktionary.org/w/index.php?title=ფრანი&oldid=84119947)  |
| ფრესკა | fresco                                              | 166          | [source](https://en.wiktionary.org/w/index.php?title=ფრესკა&oldid=84102351) |
| ფრთა   | wing                                                | 122, 208     | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)   |
| ფსონი  | bet                                                 | 182          | [source](https://en.wiktionary.org/w/index.php?title=ფსონი&oldid=84119973)  |
| ფული   | money                                               | 147          | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)   |
| ფუნჯი  | brush                                               | 60           | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)  |
| ფხა    | fishbone                                            | 41           | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)      |
| ქადა   | sweet pastry                                        | 52           | [source](https://en.wiktionary.org/w/index.php?title=ქადა&oldid=91650192)   |
| ქათამი | chicken                                             | 225          | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996) |
| ქალა   | skull                                               | 26           | [source](https://en.wiktionary.org/w/index.php?title=ქალა&oldid=91725190)   |
| ქალი   | woman                                               | 5, 232       | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| ქამარი | belt                                                | 62           | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022) |
| ქარვა  | amber                                               | 135          | [source](https://en.wiktionary.org/w/index.php?title=ქარვა&oldid=92067051)  |
| ქარი   | wind                                                | 5, 158       | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)   |
| ქაჯი   | goblin                                              | 117          | [source](https://en.wiktionary.org/w/index.php?title=ქაჯი&oldid=87997423)   |
| ქედი   | mountain range                                      | 199          | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)   |
| ქერა   | blond                                               | 29           | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)   |
| ქერი   | barley                                              | 199          | [source](https://en.wiktionary.org/w/index.php?title=ქერი&oldid=87901504)   |
| ქვა    | stone                                               | 52, 135, 217 | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვაბი  | pot                                                 | 180          | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)  |
| ქვისლი | co-brother-in-law                                   | 217          | [source](https://en.wiktionary.org/w/index.php?title=ქვისლი&oldid=88662328) |
| ქვიშა  | sand                                                | 180          | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)  |
| ქილა   | jar                                                 | 26, 133      | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ქიმია  | chemistry                                           | 158          | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)  |
| ქირა   | rent                                                | 5, 105       | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)   |
| ქლიავი | plum                                                | 217          | [source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131) |
| ქმარი  | husband                                             | 62, 158      | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)  |
| ქოლგა  | umbrella                                            | 232          | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)  |
| ქორი   | goshawk                                             | 19, 125      | [source](https://en.wiktionary.org/w/index.php?title=ქორი&oldid=92251688)   |
| ქოსა   | beardless                                           | 29           | [source](https://en.wiktionary.org/w/index.php?title=ქოსა&oldid=91928853)   |
| ქუდი   | hat                                                 | 19, 187      | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)   |
| ქულა   | point, score                                        | 119          | [source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)   |
| ქურა   | stove, furnace                                      | 105          | [source](https://en.wiktionary.org/w/index.php?title=ქურა&oldid=91715085)   |
| ქურდი  | thief                                               | 19, 199      | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)  |
| ქუსლი  | heel                                                | 55           | [source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)  |
| ღამე   | night                                               | 191          | [source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)   |
| ღარი   | groove, ditch                                       | 79           | [source](https://en.wiktionary.org/w/index.php?title=ღარი&oldid=84102504)   |
| ღერო   | blade, haulm, stalk, stem                           | 34           | [source](https://en.wiktionary.org/w/index.php?title=ღერო&oldid=87901541)   |
| ღვედი  | belt, strap                                         | 34           | [source](https://en.wiktionary.org/w/index.php?title=ღვედი&oldid=84120218)  |
| ღვინო  | wine                                                | 137          | [source](https://en.wiktionary.org/w/index.php?title=ღვინო&oldid=88091238)  |
| ღია    | open                                                | 45, 140, 220 | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)    |
| ღილი   | button                                              | 68, 206      | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ღობე   | fence, hedge                                        | 49           | [source](https://en.wiktionary.org/w/index.php?title=ღობე&oldid=84120239)   |
| ღომი   | ghomi maize porridge                                | 207          | [source](https://en.wiktionary.org/w/index.php?title=ღომი&oldid=84096722)   |
| ღონე   | strength                                            | 137          | [source](https://en.wiktionary.org/w/index.php?title=ღონე&oldid=84120241)   |
| ღორი   | pig                                                 | 49, 207      | [source](https://en.wiktionary.org/w/index.php?title=ღორი&oldid=87862575)   |
| ღრმა   | deep                                                | 115, 191     | [source](https://en.wiktionary.org/w/index.php?title=ღრმა&oldid=84120249)   |
| ღრუ    | cavity; hollow space                                | 49, 207      | [source](https://www.ganmarteba.ge/word/ღრუ)                                |
| ყაბაყი | zucchini                                            | 223          | [source](https://en.wiktionary.org/w/index.php?title=ყაბაყი&oldid=84120258) |
| ყადრი  | value, respect                                      | 39           | [source](https://en.wiktionary.org/w/index.php?title=ყადრი&oldid=84120261)  |
| ყავა   | coffee                                              | 39, 141      | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)   |
| ყანა   | field                                               | 141, 223     | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)   |
| ყბა    | jaw                                                 | 68, 164      | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)    |
| ყდა    | cover of a book                                     | 110, 215     | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)    |
| ყელი   | throat                                              | 114          | [source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)   |
| ყველი  | cheese                                              | 114          | [source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)  |
| ყინვა  | frost, freezing, freezing temperatures, severe cold | 141          | [source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)  |
| ყრუ    | deaf                                                | 94, 215      | [source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)    |
| ყურე   | bay, bight                                          | 8            | [source](https://en.wiktionary.org/w/index.php?title=ყურე&oldid=84102567)   |
| ყური   | ear                                                 | 8, 94        | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| შავი   | black                                               | 70, 180      | [source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)   |
| შალი   | shawl                                               | 131          | [source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)   |
| შანსი  | chance                                              | 192          | [source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)  |
| შაშვი  | thrush                                              | 157          | [source](https://en.wiktionary.org/w/index.php?title=შაშვი&oldid=84757236)  |
| შაშხი  | salted or dried meat                                | 61           | [source](https://en.wiktionary.org/w/index.php?title=შაშხი&oldid=88672039)  |
| შველი  | roe deer                                            | 77           | [source](https://en.wiktionary.org/w/index.php?title=შველი&oldid=91741270)  |
| შვილი  | child                                               | 77           | [source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)  |
| შვრია  | oats                                                | 157          | [source](https://en.wiktionary.org/w/index.php?title=შვრია&oldid=88155749)  |
| შნო    | skill, charm                                        | 162          | [source](https://en.wiktionary.org/w/index.php?title=შნო&oldid=92228121)    |
| შობა   | Christmas                                           | 76           | [source](https://en.wiktionary.org/w/index.php?title=შობა&oldid=84120551)   |
| შოკი   | shock                                               | 54, 162      | [source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)   |
| შოლტი  | whip                                                | 7, 211       | [source](https://en.wiktionary.org/w/index.php?title=შოლტი&oldid=88091226)  |
| შორი   | far                                                 | 76           | [source](https://en.wiktionary.org/w/index.php?title=შორი&oldid=84097095)   |
| შრე    | stratum, layer                                      | 64           | [source](https://en.wiktionary.org/w/index.php?title=შრე&oldid=84102672)    |
| შტო    | branch                                              | 7, 211       | [source](https://en.wiktionary.org/w/index.php?title=შტო&oldid=92197095)    |
| შუა    | middle                                              | 61, 157      | [source](https://www.ganmarteba.ge/word/შუა)                                |
| შუბი   | spear                                               | 54           | [source](https://en.wiktionary.org/w/index.php?title=შუბი&oldid=84120602)   |
| შუბლი  | forehead                                            | 54           | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)  |
| შური   | envy                                                | 157          | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)   |
| შუქი   | light                                               | 55, 187      | [source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)   |
| შუშა   | glass                                               | 157          | [source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)   |
| შხამი  | poison                                              | 61           | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)  |
| ჩაი    | tea (drink made from leaves of tea plant)           | 57, 142      | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)    |
| ჩალა   | straw                                               | 186          | [source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)   |
| ჩანთა  | bag                                                 | 139          | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)  |
| ჩარხი  | lathe                                               | 65           | [source](https://en.wiktionary.org/w/index.php?title=ჩარხი&oldid=84120652)  |
| ჩეკი   | check, receipt                                      | 57           | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)   |
| ჩვარი  | rag                                                 | 57           | [source](https://en.wiktionary.org/w/index.php?title=ჩვარი&oldid=84102722)  |
| ჩვილი  | baby                                                | 150          | [source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)  |
| ჩირი   | dried fruit                                         | 65           | [source](https://en.wiktionary.org/w/index.php?title=ჩირი&oldid=84120715)   |
| ჩიტი   | bird                                                | 150          | [source](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)   |
| ჩიხი   | blind alley                                         | 65           | [source](https://en.wiktionary.org/w/index.php?title=ჩიხი&oldid=84120720)   |
| ჩუმად  | quietly                                             | 142          | [source](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)  |
| ჩუმი   | quiet                                               | 142          | [source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)   |
| ჩქარი  | quick                                               | 105          | [source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)  |
| ცალი   | piece                                               | 14, 112      | [source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)   |
| ცელი   | scythe                                              | 236          | [source](https://en.wiktionary.org/w/index.php?title=ცელი&oldid=91740712)   |
| ცვილი  | wax                                                 | 59, 153      | [source](https://en.wiktionary.org/w/index.php?title=ცვილი&oldid=84757548)  |
| ცივი   | cold                                                | 59, 153      | [source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)   |
| ცილა   | protein                                             | 14, 112      | [source](https://en.wiktionary.org/w/index.php?title=ცილა&oldid=84120818)   |
| ციხე   | fortress                                            | 161, 239     | [source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)   |
| ცოდვა  | sin                                                 | 221          | [source](https://en.wiktionary.org/w/index.php?title=ცოდვა&oldid=84120863)  |
| ცოდნა  | knowledge                                           | 221          | [source](https://en.wiktionary.org/w/index.php?title=ცოდნა&oldid=90048580)  |
| ცოლი   | wife                                                | 236          | [source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)   |
| ცომი   | dough                                               | 134          | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)   |
| ცრუ    | false, phony                                        | 50, 174      | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)    |
| ცუდი   | bad                                                 | 174          | [source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)   |
| ცული   | axe                                                 | 161          | [source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)   |
| ცური   | udder                                               | 50, 174      | [source](https://en.wiktionary.org/w/index.php?title=ცური&oldid=84102818)   |
| ცხარე  | spicy                                               | 209          | [source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)  |
| ცხელი  | hot                                                 | 161, 236     | [source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)  |
| ცხენი  | horse                                               | 236          | [source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)  |
| ცხიმი  | fat                                                 | 239          | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)  |
| ძაბრი  | funnel                                              | 56, 175      | [source](https://en.wiktionary.org/w/index.php?title=ძაბრი&oldid=84120916)  |
| ძალა   | power, force, strength                              | 135          | [source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)   |
| ძაფი   | thread                                              | 147          | [source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)   |
| ძაღლი  | dog                                                 | 79           | [source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)  |
| ძეგლი  | monument                                            | 168          | [source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)  |
| ძელი   | beam                                                | 20           | [source](https://en.wiktionary.org/w/index.php?title=ძელი&oldid=84120929)   |
| ძერა   | kite bird                                           | 51           | [source](https://en.wiktionary.org/w/index.php?title=ძერა&oldid=91812511)   |
| ძეხვი  | sausage                                             | 116          | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)  |
| ძვალი  | bone                                                | 147          | [source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)  |
| ძველი  | old                                                 | 20, 168      | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)  |
| ძვირი  | expensive                                           | 156          | [source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)  |
| ძია    | uncle                                               | 20, 120, 224 | [source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)    |
| ძილი   | sleep                                               | 56           | [source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)   |
| ძირი   | root                                                | 56, 156      | [source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)   |
| ძიძა   | nanny                                               | 195          | [source](https://en.wiktionary.org/w/index.php?title=ძიძა&oldid=84120953)   |
| ძმა    | brother                                             | 62, 175      | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| ძმარი  | vinegar                                             | 51           | [source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)  |
| ძრავა  | engine                                              | 135          | [source](https://en.wiktionary.org/w/index.php?title=ძრავა&oldid=84120968)  |
| ძროხა  | cow                                                 | 177          | [source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)  |
| ძუა    | horsehair                                           | 147, 224     | [source](https://en.wiktionary.org/w/index.php?title=ძუა&oldid=85057219)    |
| ძუნწი  | stingy                                              | 224          | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)  |
| წაბლი  | chestnut                                            | 81           | [source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)  |
| წავი   | otter                                               | 233          | [source](https://en.wiktionary.org/w/index.php?title=წავი&oldid=87797873)   |
| წამი   | second                                              | 81           | [source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)   |
| წარბი  | brow, eyebrow                                       | 167          | [source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)  |
| წებო   | glue                                                | 27           | [source](https://en.wiktionary.org/w/index.php?title=წებო&oldid=84121002)   |
| წევრი  | member                                              | 118, 229     | [source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)  |
| წელი   | year                                                | 28           | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| წესი   | rule                                                | 95           | [source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)   |
| წვენი  | gravy, juice, sap                                   | 173          | [source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)  |
| წვერი  | beard; tip                                          | 27, 118      | [source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)  |
| წვიმა  | rain                                                | 173          | [source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)  |
| წითელი | red                                                 | 28           | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641) |
| წილი   | share; portion                                      | 59           | [source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)   |
| წინდა  | sock                                                | 146          | [source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)  |
| წონა   | weight                                              | 146          | [source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)   |
| წრე    | circle                                              | 118, 229     | [source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)    |
| წუთი   | minute                                              | 167          | [source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)   |
| წუნი   | defect                                              | 95, 224      | [source](https://en.wiktionary.org/w/index.php?title=წუნი&oldid=84121093)   |
| წყალი  | water                                               | 126          | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)  |
| წყარო  | spring                                              | 126          | [source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)  |
| ჭაბუკი | young man                                           | 18, 228      | [source](https://en.wiktionary.org/w/index.php?title=ჭაბუკი&oldid=84121122) |
| ჭადარი | plane tree                                          | 188          | [source](https://en.wiktionary.org/w/index.php?title=ჭადარი&oldid=84121125) |
| ჭავლი  | jet, stream                                         | 109          | [source](https://en.wiktionary.org/w/index.php?title=ჭავლი&oldid=84102926)  |
| ჭალა   | floodplain; riverside grove                         | 109          | [source](https://en.wiktionary.org/w/index.php?title=ჭალა&oldid=92391673)   |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   | 170          | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)  |
| ჭაღი   | chandelier                                          | 220          | [source](https://en.wiktionary.org/w/index.php?title=ჭაღი&oldid=84102932)   |
| ჭერი   | ceiling                                             | 82           | [source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)   |
| ჭვავი  | rye                                                 | 117          | [source](https://en.wiktionary.org/w/index.php?title=ჭვავი&oldid=87901803)  |
| ჭია    | worm                                                | 117, 194     | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)    |
| ჭირი   | illness, trouble                                    | 16, 156      | [source](https://en.wiktionary.org/w/index.php?title=ჭირი&oldid=76807766)   |
| ჭიქა   | glass, cup                                          | 117          | [source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)   |
| ჭკუა   | intellect                                           | 18, 228      | [source](https://en.wiktionary.org/w/index.php?title=ჭკუა&oldid=84096956)   |
| ჭოკი   | pole                                                | 10           | [source](https://en.wiktionary.org/w/index.php?title=ჭოკი&oldid=84102956)   |
| ჭორი   | gossip                                              | 16           | [source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)   |
| ჭრელი  | colorful                                            | 82           | [source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)  |
| ხავსი  | moss                                                | 102          | [source](https://en.wiktionary.org/w/index.php?title=ხავსი&oldid=88004014)  |
| ხაზი   | line                                                | 102          | [source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)   |
| ხალი   | birthmark, mole                                     | 26, 200      | [source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)   |
| ხალხი  | people                                              | 200          | [source](https://en.wiktionary.org/w/index.php?title=ხალხი&oldid=88859374)  |
| ხამი   | raw, inexperienced                                  | 6, 203       | [source](https://en.wiktionary.org/w/index.php?title=ხამი&oldid=92291997)   |
| ხარი   | ox, bull                                            | 41, 200      | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)   |
| ხარჯი  | expense                                             | 65, 177      | [source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)  |
| ხატი   | icon                                                | 44, 218      | [source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)   |
| ხაჭო   | curd cheese                                         | 170          | [source](https://en.wiktionary.org/w/index.php?title=ხაჭო&oldid=84121235)   |
| ხბო    | calf                                                | 31, 170      | [source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)    |
| ხედი   | view                                                | 89           | [source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)   |
| ხევი   | ravine                                              | 116          | [source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)   |
| ხელი   | hand                                                | 200          | [source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)   |
| ხეობა  | valley                                              | 170          | [source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)  |
| ხერხი  | saw, method                                         | 200          | [source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)  |
| ხვალ   | tomorrow                                            | 124          | [source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)   |
| ხიბლი  | charm                                               | 31           | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)  |
| ხიდი   | bridge                                              | 106          | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)   |
| ხილი   | fruit, fruits                                       | 53           | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)   |
| ხმა    | voice, sound                                        | 44, 119, 222 | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმალი  | sword                                               | 119          | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)  |
| ხმელი  | dry                                                 | 144          | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)  |
| ხროვა  | pack                                                | 124          | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)  |
| ხურდა  | small change                                        | 215          | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)  |
| ხურმა  | persimmon                                           | 215          | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)  |
| ხუფი   | lid                                                 | 41           | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)   |
| ჯადო   | magic                                               | 9            | [source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)   |
| ჯაზი   | jazz                                                | 4, 181       | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)   |
| ჯამი   | sum; bowl                                           | 78           | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)   |
| ჯანი   | health                                              | 107, 192     | [source](https://en.wiktionary.org/w/index.php?title=ჯანი&oldid=84121391)   |
| ჯართი  | scrap                                               | 231          | [source](https://en.wiktionary.org/w/index.php?title=ჯართი&oldid=89067419)  |
| ჯარი   | army, host                                          | 65, 177      | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)   |
| ჯაჭვი  | chain                                               | 117          | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)  |
| ჯვარი  | cross                                               | 107          | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)  |
| ჯიბე   | pocket                                              | 229          | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)   |
| ჯილდო  | reward                                              | 9, 127       | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)  |
| ჯინსი  | jeans                                               | 192          | [source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)  |
| ჯიუტი  | stubborn                                            | 136          | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)  |
| ჯიში   | breed                                               | 192          | [source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)   |
| ჯორი   | mule                                                | 177          | [source](https://en.wiktionary.org/w/index.php?title=ჯორი&oldid=84121454)   |
| ჯოხი   | stick                                               | 177          | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)   |
| ჰაერი  | air                                                 | 112          | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)  |
| ჰავა   | climate                                             | 109          | [source](https://en.wiktionary.org/w/index.php?title=ჰავა&oldid=84121476)   |
| ჰალვა  | halva                                               | 109          | [source](https://en.wiktionary.org/w/index.php?title=ჰალვა&oldid=92945178)  |
| ჰერცი  | hertz                                               | 112          | [source](https://en.wiktionary.org/w/index.php?title=ჰერცი&oldid=84096763)  |
| ჰობი   | hobby                                               | 46           | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)   |

## All 240 boards

| Level | Required answers                  | Wheel   | Grid | Difficulty |
| ----: | --------------------------------- | ------- | ---- | ---------: |
|     1 | არფა, რაფა, ფარა, ფაფა, აფრა      | რაფაფ   | 7×5  |         44 |
|     2 | ბინა, მინა, ნამი, აბი, ბანი       | იმბან   | 7×4  |         42 |
|     3 | ობი, რკო, როკი, კიბო, კობრი       | ირკბო   | 6×5  |         44 |
|     4 | ვიზა, ზავი, ჯაზი, ავი, ვაზი       | ვჯზაი   | 6×4  |         42 |
|     5 | ლარი, რქა, ქარი, ქალი, ქირა       | რლაქი   | 6×5  |         42 |
|     6 | ხამი, ომი, ოთახი, თმა, თოხი       | ხმოათი  | 7×5  |         52 |
|     7 | შოლტი, შტო, ლორი, ტოლი, ტილო      | შლროტი  | 7×5  |         54 |
|     8 | ურემი, ყურე, ყური, მერი, მური     | უმყიერ  | 7×5  |         56 |
|     9 | ოდა, ჯადო, ჯილდო, დოლი, ლოდი      | ოიჯდალ  | 6×5  |         54 |
|    10 | კოჭა, კონა, კოჭი, ჭოკი, კანჭი     | ნკაჭიო  | 6×5  |         56 |
|    11 | გზა, ზებრა, ზეგ, ბგერა, ბზა       | ბრეზაგ  | 7×5  |         52 |
|    12 | თავი, თახვი, თივა, თიხა, თაღი     | ავთხღი  | 7×5  |         56 |
|    13 | რუკა, კარი, ტური, უარი, კარტი     | აიკუტრ  | 7×5  |         56 |
|    14 | ცალი, ცილა, აქცია, ალი, ლაქა      | აცლაიქ  | 7×5  |         54 |
|    15 | ფირი, არსი, ფისი, ისარი, იაფი     | ფრსაიი  | 7×5  |         56 |
|    16 | ოინი, ჭირი, ჭორი, ნიორი, ნიჭი     | იჭორინ  | 7×5  |         56 |
|    17 | თუთია, თათი, მთა, თუთა, უმი       | თიმათუ  | 7×5  |         52 |
|    18 | ჭკუა, ბუკი, ჭაბუკი, კაუჭი, კუჭი   | ჭკიაბუ  | 7×5  |         62 |
|    19 | ქორი, დრო, ქუდი, ქურდი, დოქი      | დუიქრო  | 7×5  |         54 |
|    20 | ელვა, ველი, ძველი, ძელი, ძია      | ვლძაეი  | 7×5  |         54 |
|    21 | დიდი, დიადი, დეიდა, დედა, იდეა    | ადიეიდ  | 7×5  |         58 |
|    22 | მზე, პოემა, პოზა, ეზო, ზომა       | ზმეოპა  | 7×5  |         52 |
|    23 | როლი, მორი, მორალი, ლირა, რომი    | ომლიარ  | 7×5  |         60 |
|    24 | სია, საწოლი, სილა, სიო, ასო       | წალისო  | 7×5  |         54 |
|    25 | კამა, ლამა, მალა, კალა, კალამი    | ამლკია  | 7×4  |         60 |
|    26 | ხალი, იახტა, ქილა, ტალახი, ქალა   | იხლაქტა | 7×5  |         70 |
|    27 | წებო, ბევრი, წვერი, ბეწვი, ბერი   | ეროვბწი | 7×5  |         68 |
|    28 | მილი, ილეთი, წელი, წითელი, თემი   | ეთმილწი | 6×5  |         70 |
|    29 | ქერა, ოპერა, ექო, ეპოქა, ქოსა     | სრეაოპქ | 7×5  |         64 |
|    30 | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი   | ივაყტეს | 7×5  |         70 |
|    31 | ხბო, თხილი, ხიბლი, ბოთლი, თბილი   | ბლხითოი | 7×5  |         68 |
|    32 | ვაზა, ავაზა, არია, ავარია, ავზი   | ვაიზარა | 7×5  |         70 |
|    33 | ფაზა, ფრაზა, ბაზა, ბაზარი, ბრაზი  | ფიზარბა | 6×5  |         72 |
|    34 | ვიდეო, ღერო, ღვედი, დევი, დღე     | ეღვიდორ | 7×5  |         64 |
|    35 | ბედი, ბუშტი, დუეტი, უბე, ბუდე     | უდტიშბე | 7×4  |         64 |
|    36 | მტერი, მტვერი, ტირე, ერი, თვე     | მეთტვრი | 6×5  |         66 |
|    37 | მეტალი, ატომი, მელა, ლომი, მალე   | მილოტეა | 7×5  |         70 |
|    38 | გრილი, ბრალი, ბარგი, ბაგირი, რიგი | რლგაიბი | 7×5  |         74 |
|    39 | ავდარი, არაყი, ყადრი, დავა, ყავა  | ყიარადვ | 7×5  |         72 |
|    40 | აბანო, კაბა, კინო, კაბინა, კანი   | ბიოაკნა | 7×5  |         70 |
|    41 | ხუფი, აგური, ხარი, ფიგურა, ფხა    | გიფარხუ | 6×5  |         68 |
|    42 | მანგო, ზმნა, მონა, მზა, ტანგო     | ტნგოაზმ | 7×5  |         64 |
|    43 | სპორტი, ტარი, ტრიო, პოსტი, სპა    | ოპისრტა | 7×5  |         68 |
|    44 | ხატი, აუტი, ხმა, მუმია, მუხტი     | ტიმხმაუ | 6×5  |         64 |
|    45 | დარი, აღვირი, ვირი, ვარდი, ღია    | ვღიადრი | 7×5  |         68 |
|    46 | ლობიო, ბოლი, ჰობი, ბოლოკი, ბოლო   | ჰბკიოოლ | 7×5  |         70 |
|    47 | ნეფე, კანოე, ოკეანე, კეფა, კაფე   | ეოეაფნკ | 6×5  |         70 |
|    48 | ნაჭერი, ფენი, ფიჭა, ფრანი, ფენა   | ფერნჭაი | 6×5  |         70 |
|    49 | ღობე, ბურღი, ღორი, ღრუ, ბიურო     | რბღეუოი | 6×5  |         64 |
|    50 | კრავი, კვარცი, ცრუ, ცური, კაცი    | ციაუვრკ | 7×5  |         68 |
|    51 | რძე, კრემი, ძერა, ძმარი, კერა     | მაძერკი | 7×5  |         64 |
|    52 | ქადა, დათვი, ავად, ადათი, ქვა     | ითვადაქ | 6×5  |         64 |
|    53 | ასლი, ხილი, დახლი, სადილი, დილა   | ალხდსიი | 7×5  |         70 |
|    54 | შოკი, კუბო, შუბი, შუბლი, ბლოკი    | ობშიულკ | 7×5  |         66 |
|    55 | ქუსლი, შუქი, პლუსი, სული, პულსი   | შპილუსქ | 7×5  |         68 |
|    56 | ძილი, ძაბრი, რბილი, ბიძა, ძირი    | რძაიიბლ | 7×5  |         66 |
|    57 | ვაკე, კვირა, ჩეკი, ჩაი, ჩვარი     | ვკრაჩიე | 6×5  |         64 |
|    58 | მაგია, ალფა, ფილა, ლაგამი, გალია  | ფაგალმი | 6×5  |         72 |
|    59 | ცვილი, კივი, ცივი, წილი, კვიცი    | ვკიწილც | 6×5  |         66 |
|    60 | ურნა, ფუნჯი, უნარი, ფარი, უჯრა    | რფნაუჯი | 7×5  |         66 |
|    61 | შუა, მუშა, შხამი, შაშხი, მუხა     | შიუხმაშ | 7×5  |         64 |
|    62 | ქამარი, ქმარი, ძმა, არმია, იარა   | რძაიმაქ | 6×5  |         70 |
|    63 | ლავა, ატლასი, ვილა, ვალი, ვალსი   | ვტიასლა | 7×5  |         70 |
|    64 | მარში, ფერმა, ფირმა, შრე, ფერი    | ფერმშაი | 7×5  |         66 |
|    65 | ჩარხი, ჩირი, ხარჯი, ჩიხი, ჯარი    | რიხჩიაჯ | 7×5  |         66 |
|    66 | მოდა, დოგმა, მუზა, უზადო, გუდა    | უდაოგმზ | 7×5  |         66 |
|    67 | პური, რუხი, კეხი, კუპრი, კრუხი    | პირეუხკ | 7×5  |         66 |
|    68 | ღილი, იღლია, იღბალი, ბაღი, ყბა    | ღყაიიბლ | 7×5  |         68 |
|    69 | ეტლი, კეტი, კიბე, ლეიბი, კბილი    | იებკტილ | 7×5  |         66 |
|    70 | ნიშა, ნალი, ფლავი, შავი, ვაშლი    | შიაფვნლ | 7×5  |         66 |
|    71 | ტომი, ტომატი, ტიტა, ტახტი, ტოტი   | ახტოიმტ | 6×5  |         70 |
|    72 | ფონდი, ფონი, დაფნა, დანა, დაფა    | ფდაანიო | 7×5  |         66 |
|    73 | გარემო, გემო, მარტო, გორა, მეტრო  | მეროგტა | 7×5  |         72 |
|    74 | აზოტი, ნაზი, ოზონი, ტანი, ზონა    | ოზონტაი | 7×5  |         66 |
|    75 | ლინზა, ნაკლი, ნელი, აკნე, ზნე     | ზიელკნა | 7×5  |         64 |
|    76 | ბარი, რადიო, შობა, შორი, დროშა    | იშრდაობ | 7×5  |         66 |
|    77 | შველი, ელფი, შვილი, ეშვი, ფილე    | ფლშიევი | 7×5  |         66 |
|    78 | დარაჯი, იჯარა, მაჯა, მადა, ჯამი   | იადრჯმა | 6×5  |         70 |
|    79 | ძაღლი, ალღო, ღარი, ლაღი, რძალი    | რლოღძია | 7×5  |         66 |
|    80 | ოლქი, თაფლი, ოფლი, თოლია, თოფი    | თფიაქოლ | 7×5  |         66 |
|    81 | მიწა, წაბლი, წამი, ბმული, ლუწი    | ბწილამუ | 7×5  |         66 |
|    82 | ბეჭი, ბროლი, ჭერი, ერბო, ჭრელი    | ოირლჭბე | 7×5  |         66 |
|    83 | ტბა, ბატონი, ბატი, ბანკი, ტონი    | ბანოტკი | 7×5  |         68 |
|    84 | დასი, კოდი, სკოლა, სოდა, კლასი    | ოდლკსაი | 7×5  |         66 |
|    85 | თოკი, კვალი, კილო, თვალი, თოვლი   | კთოვალი | 7×5  |         68 |
|    86 | კალთა, კალია, საათი, ასაკი, თასი  | ლსთააკი | 7×5  |         70 |
|    87 | უბანი, აუზი, ზიანი, ბზა, ბუზი     | იზინუბა | 7×5  |         64 |
|    88 | რუკა, ტურა, კარატი, კატა, კარტი   | უიაარკტ | 6×5  |         70 |
|    89 | ხედი, მახე, მხარი, მედია, მხარე   | მეირხდა | 7×5  |         68 |
|    90 | სახე, ასთმა, თხა, თასმა, თემა     | ხსთეამა | 6×5  |         64 |
|    91 | გვიან, ტენი, აგენტი, გენი, ავი    | ვგიანტე | 7×5  |         68 |
|    92 | ვადა, თავლა, ბალთა, დაბლა, დაბა   | ათალდბვ | 7×5  |         68 |
|    93 | ეკალი, იოგა, კოლეგა, ალოე, გოლი   | კაეოგლი | 6×5  |         70 |
|    94 | ყრუ, ყური, ნუკრი, რკინა, უკან     | ნირაუყკ | 7×5  |         64 |
|    95 | ნემსი, მუსი, წესი, წუნი, მენიუ    | სეწიუნმ | 7×5  |         66 |
|    96 | პარიკი, პაპი, კარი, აკრი, პარკი   | იპაკიპრ | 7×5  |         70 |
|    97 | თავი, გაზეთი, თევზი, ზეთი, გაზი   | ზგვიეათ | 7×4  |         70 |
|    98 | ატამი, მისია, საიტი, სიმი, მაისი  | ტისაიამ | 7×5  |         70 |
|    99 | პირი, პრიზი, სარი, აზრი, ისარი    | პსაიიზრ | 6×5  |         66 |
|   100 | ირემი, გედი, იმედი, გემი, გმირი   | დირმიგე | 7×5  |         68 |
|   101 | პიკი, კორტი, კოპი, კიტრი, პორტი   | რპოიკიტ | 7×5  |         68 |
|   102 | ხავსი, ვიზა, ხაზი, სვავი, ზვავი   | სიხზავვ | 7×5  |         68 |
|   103 | ფინალი, ლაიმი, ფილმი, მილი, ფაილი | ანიმლიფ | 7×5  |         74 |
|   104 | კობრა, ბანი, კონა, კიბო, ბორანი   | ონბკიარ | 7×5  |         70 |
|   105 | ქირა, ქურა, ჩქარი, ურჩი, ბუჩქი    | ქაიჩრბუ | 6×5  |         66 |
|   106 | დედა, დეიდა, დიდი, დიადი, ხიდი    | ეიხიადდ | 7×5  |         66 |
|   107 | ავეჯი, ენა, ჯანი, ნერვი, ჯვარი    | ნვრიჯაე | 7×5  |         66 |
|   108 | ბრაზი, ზარი, კაჟი, ბზარი, ბირჟა   | ჟაზრიბკ | 7×5  |         68 |
|   109 | ჭალა, ჰავა, ჰალვა, ალი, ჭავლი     | იაჰჭვალ | 6×5  |         64 |
|   110 | ყდა, ალყა, კოდალა, კალა, კოალა    | აკყოლად | 6×5  |         68 |
|   111 | დონე, ბედი, იოდი, ბინდი, ბენდი    | იოდიბენ | 7×5  |         66 |
|   112 | ცილა, ჰაერი, ჰერცი, ერა, ცალი     | ილეცრჰა | 7×5  |         64 |
|   113 | რეისი, დისკი, კისერი, ერი, კიდე   | ეიისდრკ | 7×5  |         70 |
|   114 | გლუვი, ყველი, ყელი, ველი, გული    | ილვგუყე | 7×5  |         66 |
|   115 | სკამი, საღი, კასრი, არსი, ღრმა    | სირამკღ | 7×5  |         66 |
|   116 | სხივი, სიძე, ძეხვი, ხევი, იხვი    | ხეიიძსვ | 7×5  |         66 |
|   117 | ჭიქა, ქაჯი, ჯაჭვი, ჭია, ჭვავი     | ვავჯჭიქ | 7×5  |         64 |
|   118 | წვერი, ტერფი, წრე, წევრი, ფეტვი   | ტვრწიეფ | 7×5  |         68 |
|   119 | ხმალი, მუქი, ხმა, მუხლი, ქულა     | მხლაუქი | 6×5  |         64 |
|   120 | ვაჟი, ნაძვი, ძია, ნავი, კვანძი    | ავძიკნჟ | 7×5  |         68 |
|   121 | ობი, კლოუნი, ნული, კლუბი, კუბი    | იკობლუნ | 7×5  |         68 |
|   122 | სუფთა, უთო, ურო, ფრთა, სუფრა      | თუოარსფ | 7×5  |         62 |
|   123 | ტრიო, ეტაპი, რეპი, ოპერა, პოეტი   | პიორტეა | 6×5  |         68 |
|   124 | ოვალი, ლორი, ხვალ, არხი, ხროვა    | ლიახრვო | 7×5  |         66 |
|   125 | ლობიო, ობოლი, ოქრო, ქორი, ლოქო    | ქლოროიბ | 6×5  |         66 |
|   126 | ლარი, ლირა, წყალი, ლოყა, წყარო    | ყლაიოწრ | 7×5  |         66 |
|   127 | ლურჯი, ლუდი, რუჯი, ჯილდო, დრო     | რდიუჯოლ | 7×5  |         64 |
|   128 | მტერი, მეტრი, მტრედი, დიეტა, იდეა | რიდატმე | 7×5  |         74 |
|   129 | დრამა, ტაფა, ფარდა, არფა, აფრა    | აფრმდტა | 6×5  |         66 |
|   130 | ილეთი, თემი, ბილეთი, ბელი, მითი   | ეიბითლმ | 6×5  |         70 |
|   131 | მლაშე, შალი, მაზლი, მზა, მელა     | იელამშზ | 7×5  |         64 |
|   132 | ზღვა, ზღვარი, გვარი, ზავი, გზა    | ზღაირვგ | 6×5  |         68 |
|   133 | საქმე, მალე, ლექსი, აქლემი, ქილა  | მლქიეას | 6×5  |         72 |
|   134 | ომი, ბიცოლა, ბალი, ალბომი, ცომი   | ცმალბიო | 6×5  |         70 |
|   135 | ქვა, ძალა, ძრავა, ლაქა, ქარვა     | რქაავლძ | 7×5  |         64 |
|   136 | ბაიტი, ტაბუ, ჯიუტი, აუტი, აბი     | ტჯაიიბუ | 7×5  |         64 |
|   137 | დევი, ვიდეო, ღვინო, ღონე, დღე     | ვინღედო | 7×5  |         64 |
|   138 | სპილო, ოსპი, პონი, სალონი, სპა    | პსანლიო | 7×5  |         68 |
|   139 | თმა, თანხა, მთა, ჩანთა, აჩმა      | ნმხჩთაა | 7×5  |         62 |
|   140 | თაგვი, თივა, იგავი, ღია, თაღი     | აგიითვღ | 7×5  |         64 |
|   141 | ყანა, ყავა, კავი, აკვანი, ყინვა   | აკაივნყ | 6×5  |         70 |
|   142 | ჩაი, მუდამ, მუმია, ჩუმი, ჩუმად    | ამიუჩდმ | 7×5  |         66 |
|   143 | ბგერა, ბარგი, გარეთ, ბაგე, გერბი  | აებრგთი | 7×5  |         70 |
|   144 | კლიტე, ეტლი, ხმელი, კეხი, კეტი    | იტმკეხლ | 7×5  |         66 |
|   145 | სია, საუნა, საბანი, ბინა, სუნი    | უნაიაბს | 7×5  |         68 |
|   146 | ოდა, ლოდი, წინდა, წონა, ანწლი     | ნაწდოლი | 7×5  |         64 |
|   147 | ფლავი, ძაფი, ძვალი, ძუა, ფული     | ლუივძაფ | 6×5  |         64 |
|   148 | მინა, მანია, ანძა, ანემია, ნამი   | აძმიაენ | 7×5  |         70 |
|   149 | მალა, პაუზა, პუმა, ლამა, ლამპა    | პუზაამლ | 6×5  |         66 |
|   150 | ვოლტი, ტილო, ჩვილი, ტოლი, ჩიტი    | ტლვოიჩი | 7×5  |         66 |
|   151 | მზე, ზნე, ზეიმი, ზმნა, მზიანი     | იინზეამ | 6×5  |         66 |
|   152 | ტყვე, ტყვია, ვეტო, ტყავი, ტყე     | ვყტეიოა | 7×5  |         64 |
|   153 | კეცი, ლეკვი, ცვილი, ცივი, კვიცი   | იკლივცე | 7×5  |         68 |
|   154 | როკი, რძე, თერძი, კერძი, თეძო     | კძეორით | 7×5  |         64 |
|   155 | მორი, ორმო, ფირმა, რომი, ფორმა    | როაომფი | 6×5  |         66 |
|   156 | ჭირი, ძირი, ფირი, ძვირი, ფიჭვი    | რჭფძიივ | 7×5  |         66 |
|   157 | შური, შუშა, შაშვი, შუა, შვრია     | შიავურშ | 7×5  |         64 |
|   158 | ქიმია, ქმარი, მირაჟი, ქარი, რქა   | ჟრაიმქი | 7×5  |         70 |
|   159 | ზებრა, ადრე, ზედა, ერთად, ბადე    | ზბერდათ | 7×5  |         66 |
|   160 | პროზა, პოზა, უზადო, დოზა, ურდო    | ოზაურდპ | 6×5  |         66 |
|   161 | მუცელი, ციხე, ცული, ცხელი, უმი    | მხცლეუი | 7×5  |         68 |
|   162 | კილო, კომლი, კომში, შნო, შოკი     | ოლმნიშკ | 7×5  |         64 |
|   163 | კანი, კნუტი, პიტნა, კუპატი, ტანი  | ტკნპაუი | 7×5  |         72 |
|   164 | ტბა, ბარტყი, ყბა, ტარი, ორბიტა    | რბოყიატ | 7×5  |         68 |
|   165 | მამიდა, არმია, მამა, დარი, მადა   | ადარმმი | 6×5  |         70 |
|   166 | რკო, კეფა, სარკე, ფრესკა, კერა    | ოკაფსერ | 7×5  |         68 |
|   167 | ბარი, ბურთი, წარბი, უარი, წუთი    | რთუიწაბ | 7×5  |         66 |
|   168 | ძეგლი, ვილა, ვალი, გველი, ძველი   | ლივაეგძ | 7×5  |         68 |
|   169 | ბროლი, გობი, რგოლი, ბოლი, ბრბო    | ლგრბბოი | 7×5  |         66 |
|   170 | ხბო, ბეჭი, ხაჭო, ხეობა, ჭაობი     | ბაეხჭიო | 7×5  |         64 |
|   171 | დაფნა, პანდა, პაპა, დანა, დაფა    | ნფპადპა | 7×5  |         66 |
|   172 | სველი, ფესვი, ფილე, თესლი, თვე    | ვფთიელს | 7×5  |         66 |
|   173 | წვენი, ამწე, წვიმა, მწვანე, მიწა  | მეიწვან | 7×5  |         72 |
|   174 | ცუდი, ცრუ, უნარი, ნარდი, ცური     | იცდნარუ | 7×5  |         64 |
|   175 | რაზმი, ძაბრი, ძმა, ბიძა, ბრმა     | ზიბრმძა | 7×5  |         64 |
|   176 | რაფა, ფარა, ბაფთა, თარო, თაობა    | თრაფბოა | 7×5  |         66 |
|   177 | ჯორი, ჯარი, ხარჯი, ძროხა, ჯოხი    | ხძიაორჯ | 7×5  |         66 |
|   178 | თოკი, კონუსი, კუნთი, სიო, კინო    | სიონუთკ | 6×5  |         68 |
|   179 | ბაბუა, ბამბა, ბზა, მუზა, ბაზა     | უბზმბაა | 6×5  |         64 |
|   180 | ბატი, ქვაბი, ქვიშა, შავი, ტაში    | ქბტიშავ | 7×5  |         66 |
|   181 | ჯაზი, აზრი, იჯარა, აკრი, აჯიკა    | ჯიზაარკ | 7×5  |         66 |
|   182 | ფონი, ფსონი, ფასი, ოინი, ოფისი    | ნსიფიოა | 7×5  |         66 |
|   183 | ამპერი, ირემი, პირი, მერი, პრემია | იაიპრმე | 7×5  |         74 |
|   184 | ენა, ბუნება, უბანი, უბე, ბებია    | იეუნბბა | 6×5  |         68 |
|   185 | ალიონი, ზონა, ნაზი, ნალი, ზიანი   | იზაოლნი | 7×5  |         70 |
|   186 | ელჩი, კალია, ჩალა, ალი, ეკალი     | კეჩაალი | 7×5  |         64 |
|   187 | ქუდი, გუნდი, შუქი, ნუში, გუშინ    | დგიშქნუ | 7×5  |         66 |
|   188 | იარა, ჭადარი, ბარდა, დაბა, ბაჭია  | არაჭდბი | 6×5  |         72 |
|   189 | ზურგი, აგური, კუზი, ზარი, გაზი    | გაზურიკ | 7×5  |         66 |
|   190 | კირი, ლაიმი, მილი, მარილი, რკალი  | რლიმაიკ | 6×5  |         72 |
|   191 | მანერა, ღამე, ღრმა, არენა, ერა    | რაეღმან | 7×4  |         68 |
|   192 | ჯიში, ნიშა, ჯინსი, შანსი, ჯანი    | ჯშნიასი | 7×5  |         66 |
|   193 | კალა, კალათა, კალთა, თხა, კათხა   | ახკთალა | 6×5  |         70 |
|   194 | ნეკნი, კენჭი, კანჭი, აკნე, ჭია    | ნენაკიჭ | 7×5  |         66 |
|   195 | ნაძვი, განძი, ძიძა, ნავი, გვიან   | გძვაძნი | 7×5  |         68 |
|   196 | ობი, თონე, ენოტი, ბეტონი, ტენი    | ნიტთებო | 6×5  |         68 |
|   197 | საბუთი, სითბო, უთო, ასო, თასი     | თიბსოუა | 6×5  |         66 |
|   198 | ტური, იუმორი, ურო, რიტმი, მური    | იტმიურო | 7×5  |         68 |
|   199 | დუეტი, ქედი, ქერი, ქურდი, ტირე    | უეტრქდი | 7×5  |         66 |
|   200 | ხელი, ხალი, ხერხი, ხარი, ხალხი    | ეხიახრლ | 7×5  |         66 |
|   201 | იოლი, კბილი, კოჭი, ბიჭი, ბლოკი    | კბჭოიილ | 7×5  |         66 |
|   202 | გარსი, რადიო, სარი, დასი, სოდა    | დგაოსირ | 7×5  |         66 |
|   203 | მაგია, მაგარი, მხარი, ხამი, არია  | აიახგმრ | 7×5  |         72 |
|   204 | სული, პლუსი, პულსი, პიცა, ასლი    | უიპცლსა | 7×5  |         66 |
|   205 | ფაილი, იაფი, ფაქტი, ფილა, ლიფტი   | ტქფიაილ | 7×5  |         68 |
|   206 | ღილი, იღლია, სტილი, საიტი, საღი   | ილიღატს | 6×5  |         68 |
|   207 | ღორი, ღომი, ბურღი, ბიურო, ღრუ     | რღიუომბ | 7×5  |         64 |
|   208 | აფიშა, აფთარი, ფარი, ფრთა, არფა   | აიაშთრფ | 6×5  |         70 |
|   209 | მხარე, ზეცა, ცხარე, მახე, მზა     | რემხზაც | 7×5  |         64 |
|   210 | მედია, მელა, დილა, მედალი, კლდე   | დმლიეკა | 7×5  |         70 |
|   211 | ფოტო, ფლოტი, შოლტი, ოფლი, შტო     | ტიოშფლო | 7×5  |         64 |
|   212 | ობოლი, ლობიო, ბოძი, ბოლო, ჟოლო    | ძჟლბოიო | 7×5  |         66 |
|   213 | რაიონი, რიგი, გორა, ნიორი, იოგა   | რიაგნიო | 6×5  |         70 |
|   214 | ტუმბო, ტურა, მარტო, ტაბუ, მურა    | ოუარტმბ | 7×5  |         66 |
|   215 | ხურდა, ხურმა, მუხა, ყრუ, ყდა      | დრაუმყხ | 7×5  |         62 |
|   216 | ანკესი, ვაკე, კავი, ვენა, ნესვი   | ნვაეისკ | 6×5  |         70 |
|   217 | ვალსი, ქვა, ქვისლი, ქლიავი, სილა  | ივალქის | 7×5  |         72 |
|   218 | ნახატი, თანხა, ხატი, იახტა, თიხა  | ნხთაიატ | 6×5  |         72 |
|   219 | ტორტი, ტიტა, ავტორი, ავი, ტოტი    | ტტაოივრ | 7×5  |         68 |
|   220 | ღია, ბაღი, ჭაღი, ზღარბი, ბზარი    | რბიჭზაღ | 7×5  |         68 |
|   221 | ვადა, ცოდვა, ცოდნა, ავად, დავა    | ნცადვაო | 6×5  |         66 |
|   222 | სახლი, სია, ხმა, ალმასი, მსხალი   | ლახსიამ | 7×5  |         70 |
|   223 | ყაბაყი, ყანა, აბი, ბინა, ბაყაყი   | აყიყნბა | 7×5  |         70 |
|   224 | კუნძი, ძუა, ძუნწი, წუნი, ძია      | კნუწიაძ | 7×5  |         62 |
|   225 | მთა, კამათი, კამა, თმა, ქათამი    | ქმთაკაი | 6×5  |         68 |
|   226 | ბელი, გუბე, მგელი, გემი, ბმული    | უბეგლმი | 7×5  |         66 |
|   227 | თემა, თექა, საქმე, ასთმა, თასმა   | თაქსეამ | 6×5  |         68 |
|   228 | ჭკუა, ბუკი, ჭაბუკი, კაუჭი, კუდი   | ჭუიდაკბ | 7×5  |         70 |
|   229 | ბერი, ბეწვი, წევრი, წრე, ჯიბე     | წვირბჯე | 7×5  |         64 |
|   230 | ვიზა, ვაზი, კვოტა, აზოტი, კოვზი   | ტაიზოკვ | 7×5  |         68 |
|   231 | უჯრა, რუჯი, თუთია, თუთა, ჯართი    | თარუჯით | 7×5  |         66 |
|   232 | ქალი, გოლი, ქოლგა, ოლქი, ოვალი    | გავქოილ | 6×5  |         66 |
|   233 | არწივი, ვირი, კივი, კვირა, წავი   | იაკიწრვ | 7×5  |         70 |
|   234 | თერძი, თეთრი, თითი, რძე, ერი      | თიირეძთ | 7×5  |         62 |
|   235 | მანეთი, დენთი, იდეა, დენი, თემი   | იეთმნდა | 7×5  |         70 |
|   236 | ცხელი, ნოხი, ცხენი, ცოლი, ცელი    | იელხცნო | 7×5  |         66 |
|   237 | ლიმონი, ლომი, სიმი, ნისლი, ომი    | ონლისიმ | 7×5  |         68 |
|   238 | ნიკაპი, კარი, ნაპირი, რკინა, პიკი | იანრიპკ | 6×5  |         74 |
|   239 | ციხე, ცხიმი, მხეცი, ფიცი, ფეხი    | ფცეიმხი | 7×5  |         66 |
|   240 | მანია, მადა, მინა, ნადიმი, ამინდი | აიანდიმ | 7×5  |         74 |
