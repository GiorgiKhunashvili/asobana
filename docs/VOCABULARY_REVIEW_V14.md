# Journey vocabulary and campaign review — revision 14

Owner decision, **2026-10-18**: plural nouns are **optional bonuses only**, never
required answers or accepted variants. Reducing repetition is the primary search
objective, within every other rule in [AGENTS.md](../AGENTS.md).

## Measured campaign results

| Measure                                   | Revision 13 |   Revision 14 |
| ----------------------------------------- | ----------: | ------------: |
| Levels / stops                            |    240 / 48 |      240 / 48 |
| Required answer slots                     |       1,200 |         1,200 |
| Approved required spellings               |         869 |           831 |
| Distinct required spellings used          |         589 |       **679** |
| Slots after a spelling’s first appearance |         611 |       **521** |
| Minimum gap between required appearances  |   75 levels | **75 levels** |
| Plural spellings required                 |          16 |         **0** |

Repeated answer slots fall by **14.7%**. This counts second and later
required appearances; bonus finds are independent. There are **122 newly used
spellings** and **32 retired spellings** relative to v13, including its 16
required plurals. The new campaign uses 81.7% of the non-plural approved pool.

| Required appearances per spelling | Number of spellings |
| --------------------------------- | ------------------: |
| 1                                 |                 289 |
| 2                                 |                 264 |
| 3                                 |                 121 |
| 4                                 |                   5 |

For repeated words, consecutive gaps range from **75 to 216 levels**;
mean **98.0**, median **88**. The 75-level floor applies
across stop/country boundaries and to every accepted spelling. There are no
alternate required spellings in this pack.

## Editorial and grammatical review

The target bank retains **831** of revision 13’s individually approved spellings.
All 38 entries explicitly documented as nominative plurals are demoted to bonuses;
every spelling, lemma and inherited source appears in
[`everyday-targets-v14.json`](../content/dictionaries/everyday-targets-v14.json).
`word-policy.json` separates revision-scoped target-only exclusions from the
existing exclusions from every gameplay role. Both Python and TypeScript reject
plurals in answers and variants. Endings alone are not used as a classifier.

The reference dictionary remains unchanged: **1,312 entries / 1,274 playable**.
Verified plurals remain eligible when formable; this campaign has 2 distinct
plural bonus spellings. Rare valid words also remain bonuses. Pronouns, excluded
verbs/action forms, name-only entries, reviewed barbarisms and `რული` remain
excluded from every current gameplay role.

Every distinct draft target and all 1,200 canonical-only answer slots were checked
against the retained explicit approval, selected gloss and source provenance.
No new words, inflections, senses, source checks or frequency ranks were invented.
This is an audit of inherited assistant editorial approvals, **not fresh source
verification, native-speaker sign-off or owner review**. The complete
[831-word owner review list](VOCABULARY_OWNER_REVIEW_V14.md) includes usage, meanings,
sources and blank decision fields; the owner’s review is pending.

## Search objective and limitations

The bounded search maximizes distinct required spellings first, then penalizes
heavy reuse. It searches new wheels/crossings and multi-board replacements rather
than treating a word as unusable merely because it was absent from the old pack.
The final recipes deterministically reproduce the selected boards without the
search cache or optimizer. Existing reviewed approvals were sufficient for this
improvement; no new vocabulary was approved.

This is **not a proof of the global maximum**, and no claim is made that the
remaining 152 approvals are impossible to use. Some are absent from the bounded
candidate search; others occur in candidates that could not improve this selected
campaign while retaining spacing, progression and physical/pacing constraints.
All remaining approvals are listed below for further search and owner review.
With all 831 approvals used, the arithmetic minimum would be 369 repeated slots;
that is a counting bound, not proof that compatible crosswords can achieve it.
Further individually reviewed everyday non-plural words can also help, especially
five/six-letter words that form useful wheels. Existing exclusions and approval
requirements must stay intact.

## Progression, geometry and migration

There are five answers on every board, 3–6 letters each: **155 three-letter,
515 four-letter, 435 five-letter and 95 six-letter slots**.
Five-letter answers start at level 3 and six-letter answers at level 18.
Wheels remain five tiles for levels 1–5, six for 6–25, and seven for 26–240.
All long-word and early six-letter quotas remain, with a six-letter board in every
stop from level 51. All stop IDs and titles are unchanged. Each stop’s third
board is a peak; its fourth is at least two points easier. The maximum upward
score transition is **10 points**. Scores are estimates, not playtesting.

Crossings remain connected, exact tile multiplicities and no accidental runs are
validated, every wheel/answer set is unique, and phone cell-size, grid-density and
wheel-touch-target gates are retained. Every eligible formable bonus is recognized.
The first five boards retain their exact revision-13 targets and layouts.

All 240 level IDs, the pack ID, branding/storage identifiers and journey stop
identity remain stable. Revisions 1–13 stay immutable for exact save migration.
Continuing answers retain their word IDs on the same level. Completed boards,
partial solved credits (including removed plural answers), coins, paid hints,
settings, journey/legacy postcards and lifetime bonus rewards survive migration
and restart. The paid-hint compatibility bound is 1,292, retaining v13’s 1,250
plus up to 42 replacement-board hints. See
[the integration contract](INTEGRATION_CONTRACT.md#revision-14-non-plural-campaign-and-lower-repetition).

## Validation

Verified on **2026-10-18**:

- Root `npm run check` passes: strict TypeScript, ESLint, **205 Jest tests in
  26 suites**, all **240 engine solves**, and repository Prettier checks.
- Generator `uv run pytest` passes **86 tests**. Ruff lint, Ruff format checking
  and strict Mypy (`src`, 13 source files) pass.
- Deterministic rebuilding reproduces the exact inspected draft and promoted
  pack; the independent draft digest matches the record below.
- All **36 captured historical pack/recipe/review and v12/v13 vocabulary files**
  retain their original SHA-256 hashes. The reference dictionary is unchanged.
  The first five complete level objects are identical to revision 13.
- New regressions cover target-only plural decisions, canonical answers and
  variants, real plural bonus rewards paid once without solving a target,
  increased coverage (at least 679 spellings), exact reviewed rebuilding, and
  revision-13 partial/completed saves across SQLite restart. Removed plural
  answers retain solved credits; paid hints, coins, postcards and lifetime bonus
  rewards persist, including taking and saving hint 1,251 after migration.
  Existing tests retain the 74/75 gap boundary, rare bonuses, physical layouts,
  wheel touch targets, progression and historical migration coverage.
- `npx expo export --platform ios` succeeds, exporting to
  `artifacts/journey-v14/ios-export`. This verifies bundling, not native-device
  interaction, performance, owner vocabulary approval or a TestFlight upload.

Draft SHA-256: `e0cb6184687460ff4ffe17ae1d820467190f1d026da33b3d20d4d41351420ca3`.

```sh
UV_CACHE_DIR=/tmp/asobana-uv-cache uv run --project puzzle-generator python scripts/rebuild-wide-content.py --revision 14 --promote-reviewed --output content/levels/discovery.v14.json
```

The digest was recorded only after inspecting the exact draft against retained
approvals and running its Python release gates. Rebuilding cannot authorize a
changed draft. No native-device playtest or TestFlight upload is claimed.

## Unused approved non-plural words (152)

Absence means unused in this selected campaign, not an editorial rejection.

| Word   | Reviewed meaning            | Source                                                                      |
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
| ბალონი | gas cylinder                | [source](https://en.wiktionary.org/w/index.php?title=ბალონი&oldid=91650149) |
| ბამბა  | cotton, cotton wool         | [source](https://en.wiktionary.org/w/index.php?title=ბამბა&oldid=92983814)  |
| ბანანი | banana                      | [source](https://en.wiktionary.org/w/index.php?title=ბანანი&oldid=84113335) |
| ბაჟე   | walnut sauce                | [source](https://en.wiktionary.org/w/index.php?title=ბაჟე&oldid=84113346)   |
| ბეკონი | bacon                       | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047) |
| ბერეტი | beret                       | [source](https://en.wiktionary.org/w/index.php?title=ბერეტი&oldid=84097646) |
| ბეჭედი | ring                        | [source](https://en.wiktionary.org/w/index.php?title=ბეჭედი&oldid=88372424) |
| ბილიკი | path                        | [source](https://en.wiktionary.org/w/index.php?title=ბილიკი&oldid=84097672) |
| ბრბო   | crowd                       | [source](https://en.wiktionary.org/w/index.php?title=ბრბო&oldid=91644256)   |
| ბრინჯი | rice                        | [source](https://en.wiktionary.org/w/index.php?title=ბრინჯი&oldid=92283506) |
| ბუდე   | nest                        | [source](https://en.wiktionary.org/w/index.php?title=ბუდე&oldid=90058567)   |
| ბუნება | nature                      | [source](https://en.wiktionary.org/w/index.php?title=ბუნება&oldid=88804241) |
| ბუჩქი  | bush, shrub                 | [source](https://en.wiktionary.org/w/index.php?title=ბუჩქი&oldid=90059573)  |
| გარაჟი | garage                      | [source](https://en.wiktionary.org/w/index.php?title=გარაჟი&oldid=92521305) |
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
| ზუსტად | precisely                   | [source](https://en.wiktionary.org/w/index.php?title=ზუსტად&oldid=84115384) |
| თამადა | toastmaster                 | [source](https://en.wiktionary.org/w/index.php?title=თამადა&oldid=92288151) |
| თამაში | game                        | [source](https://en.wiktionary.org/w/index.php?title=თამაში&oldid=87788028) |
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
| კარგად | well                        | [source](https://en.wiktionary.org/w/index.php?title=კარგად&oldid=84116038) |
| კასეტი | cassette                    | [source](https://en.wiktionary.org/w/index.php?title=კასეტი&oldid=91766013) |
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
| პილოტი | pilot                       | [source](https://en.wiktionary.org/w/index.php?title=პილოტი&oldid=85759538) |
| პრემია | prize                       | [source](https://en.wiktionary.org/w/index.php?title=პრემია&oldid=84103288) |
| ჟელე   | jelly                       | [source](https://en.wiktionary.org/w/index.php?title=ჟელე&oldid=84100936)   |
| რაიონი | district                    | [source](https://en.wiktionary.org/w/index.php?title=რაიონი&oldid=85043151) |
| საბანი | blanket                     | [source](https://en.wiktionary.org/w/index.php?title=საბანი&oldid=91776633) |
| საბუთი | document                    | [source](https://en.wiktionary.org/w/index.php?title=საბუთი&oldid=84107021) |
| საგანი | object, subject             | [source](https://en.wiktionary.org/w/index.php?title=საგანი&oldid=75611780) |
| სადილი | midday meal                 | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533) |
| სალათა | salad                       | [source](https://en.wiktionary.org/w/index.php?title=სალათა&oldid=89052797) |
| სამეფო | kingdom                     | [source](https://en.wiktionary.org/w/index.php?title=სამეფო&oldid=87787981) |
| საფულე | wallet                      | [source](https://en.wiktionary.org/w/index.php?title=საფულე&oldid=84118843) |
| საწოლი | bed                         | [source](https://en.wiktionary.org/w/index.php?title=საწოლი&oldid=81818101) |
| სეზონი | season                      | [source](https://en.wiktionary.org/w/index.php?title=სეზონი&oldid=84118932) |
| სეტყვა | hail                        | [source](https://en.wiktionary.org/w/index.php?title=სეტყვა&oldid=87787560) |
| სისხლი | blood                       | [source](https://en.wiktionary.org/w/index.php?title=სისხლი&oldid=87809162) |
| სკვერი | public square               | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142) |
| სხეული | body                        | [source](https://en.wiktionary.org/w/index.php?title=სხეული&oldid=84119318) |
| ტალღა  | wave                        | [source](https://en.wiktionary.org/w/index.php?title=ტალღა&oldid=84119334)  |
| ტექსტი | text                        | [source](https://en.wiktionary.org/w/index.php?title=ტექსტი&oldid=92480105) |
| ტვირთი | load                        | [source](https://en.wiktionary.org/w/index.php?title=ტვირთი&oldid=84101860) |
| ტომარა | sack                        | [source](https://en.wiktionary.org/w/index.php?title=ტომარა&oldid=84097123) |
| უდაბნო | desert                      | [source](https://en.wiktionary.org/w/index.php?title=უდაბნო&oldid=84096660) |
| უცებ   | suddenly                    | [source](https://www.ganmarteba.ge/word/უცებ)                               |
| უცხო   | foreign, unfamiliar         | [source](https://en.wiktionary.org/w/index.php?title=უცხო&oldid=88414084)   |
| ფანარი | flashlight                  | [source](https://en.wiktionary.org/w/index.php?title=ფანარი&oldid=77661328) |
| ფიზიკა | physics                     | [source](https://en.wiktionary.org/w/index.php?title=ფიზიკა&oldid=88002730) |
| ფილტვი | lung                        | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916) |
| ფილტრი | filter                      | [source](https://en.wiktionary.org/w/index.php?title=ფილტრი&oldid=84102240) |
| ფიფქი  | snowflake                   | [source](https://en.wiktionary.org/w/index.php?title=ფიფქი&oldid=84119878)  |
| ფოკუსი | stunt, trick                | [source](https://en.wiktionary.org/w/index.php?title=ფოკუსი&oldid=84102291) |
| ფოტო   | photo                       | [source](https://en.wiktionary.org/w/index.php?title=ფოტო&oldid=84119928)   |
| ფუნჯი  | brush                       | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)  |
| ფქვილი | flour                       | [source](https://en.wiktionary.org/w/index.php?title=ფქვილი&oldid=84119987) |
| ქაბაბი | kebab                       | [source](https://en.wiktionary.org/w/index.php?title=ქაბაბი&oldid=84119993) |
| ქალაქი | city                        | [source](https://en.wiktionary.org/w/index.php?title=ქალაქი&oldid=92197093) |
| ქვევით | downwards                   | [source](https://en.wiktionary.org/w/index.php?title=ქვევით&oldid=91661838) |
| ქვევრი | qvevri wine vessel          | [source](https://en.wiktionary.org/w/index.php?title=ქვევრი&oldid=92251687) |
| ქინძი  | coriander                   | [source](https://en.wiktionary.org/w/index.php?title=ქინძი&oldid=92422652)  |
| ღუმელი | stove                       | [source](https://en.wiktionary.org/w/index.php?title=ღუმელი&oldid=84120256) |
| ყასაბი | butcher                     | [source](https://en.wiktionary.org/w/index.php?title=ყასაბი&oldid=84120292) |
| ყინული | ice                         | [source](https://en.wiktionary.org/w/index.php?title=ყინული&oldid=87787551) |
| შეშა   | firewood                    | [source](https://en.wiktionary.org/w/index.php?title=შეშა&oldid=84120501)   |
| შვიდი  | seven (7)                   | [source](https://en.wiktionary.org/w/index.php?title=შვიდი&oldid=85767397)  |
| შიგნით | inside                      | [source](https://en.wiktionary.org/w/index.php?title=შიგნით&oldid=88916786) |
| შიში   | fear                        | [source](https://en.wiktionary.org/w/index.php?title=შიში&oldid=88392337)   |
| შუშა   | glass                       | [source](https://en.wiktionary.org/w/index.php?title=შუშა&oldid=92228270)   |
| ჩანთა  | bag                         | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)  |
| ჩარჩო  | frame                       | [source](https://en.wiktionary.org/w/index.php?title=ჩარჩო&oldid=84120651)  |
| ჩვევა  | habit                       | [source](https://en.wiktionary.org/w/index.php?title=ჩვევა&oldid=90896070)  |
| ჩოგანი | racket                      | [source](https://en.wiktionary.org/w/index.php?title=ჩოგანი&oldid=84120726) |
| ჩონჩხი | skeleton                    | [source](https://en.wiktionary.org/w/index.php?title=ჩონჩხი&oldid=88018089) |
| ჩრდილი | shade                       | [source](https://en.wiktionary.org/w/index.php?title=ჩრდილი&oldid=81819977) |
| ძალიან | very                        | [source](https://en.wiktionary.org/w/index.php?title=ძალიან&oldid=84120919) |
| ძუნწი  | stingy                      | [source](https://en.wiktionary.org/w/index.php?title=ძუნწი&oldid=84120971)  |
| წიგნი  | book                        | [source](https://en.wiktionary.org/w/index.php?title=წიგნი&oldid=87817549)  |
| წიწაკა | pepper                      | [source](https://en.wiktionary.org/w/index.php?title=წიწაკა&oldid=84121068) |
| წიწილა | chick                       | [source](https://en.wiktionary.org/w/index.php?title=წიწილა&oldid=91650124) |
| წყვილი | pair                        | [source](https://en.wiktionary.org/w/index.php?title=წყვილი&oldid=84103227) |
| ჭაღარა | gray-haired                 | [source](https://en.wiktionary.org/w/index.php?title=ჭაღარა&oldid=84089183) |
| ჭაჭა   | grape pomace                | [source](https://en.wiktionary.org/w/index.php?title=ჭაჭა&oldid=92251685)   |
| ჭუჭყი  | dirt                        | [source](https://en.wiktionary.org/w/index.php?title=ჭუჭყი&oldid=88641255)  |
| ხოჭო   | beetle                      | [source](https://en.wiktionary.org/w/index.php?title=ხოჭო&oldid=61537398)   |
| ხშირად | often                       | [source](https://en.wiktionary.org/w/index.php?title=ხშირად&oldid=84121369) |
| ჯიპი   | jeep                        | [source](https://en.wiktionary.org/w/index.php?title=ჯიპი&oldid=84121433)   |
| ჯუჯა   | dwarf                       | [source](https://en.wiktionary.org/w/index.php?title=ჯუჯა&oldid=81820542)   |

## Every distinct required spelling

Every spelling retains its existing approval and selected meaning; owner review
is pending. Accepted variants are identical to the canonical answer.

| Word   | Reviewed meaning                                    | Levels          | Source                                                                      |
| ------ | --------------------------------------------------- | --------------- | --------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 234             | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)  |
| აბი    | pill                                                | 9, 95, 188      | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)    |
| აგური  | brick                                               | 73, 227         | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)  |
| ადვილი | easy                                                | 156             | [source](https://en.wiktionary.org/w/index.php?title=ადვილი&oldid=88896563) |
| ადრე   | early; previously                                   | 76, 209         | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| ავაზა  | cheetah                                             | 80, 187         | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)  |
| ავარია | accident                                            | 80              | [source](https://en.wiktionary.org/w/index.php?title=ავარია&oldid=89458031) |
| ავეჯი  | furniture                                           | 232             | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)  |
| ავზი   | tank, sink                                          | 2, 77, 220      | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)   |
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
| ასე    | like this; thus                                     | 135, 210        | [source](https://en.wiktionary.org/w/index.php?title=ასე&oldid=86604839)    |
| ასი    | hundred                                             | 33, 111, 214    | [source](https://en.wiktionary.org/w/index.php?title=ასი&oldid=91740577)    |
| ასლი   | copy                                                | 33, 116, 193    | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)   |
| ასო    | alphabet letter                                     | 27, 116, 204    | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატამი  | peach                                               | 160             | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატომი  | atom                                                | 12, 143         | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)  |
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
| ბაზა   | base                                                | 43, 120         | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)   |
| ბაზარი | market                                              | 43              | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284) |
| ბალი   | sweet cherry                                        | 9, 95, 192      | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
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
| ბზარი  | crack                                               | 60, 140         | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)  |
| ბილეთი | ticket                                              | 238             | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670) |
| ბინა   | apartment                                           | 18, 113, 189    | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)   |
| ბიცოლა | aunt                                                | 95              | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800) |
| ბიძა   | uncle                                               | 37, 113         | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)   |
| ბიჭი   | boy                                                 | 163             | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| ბლოგი  | blog                                                | 114, 192        | [source](https://en.wiktionary.org/w/index.php?title=ბლოგი&oldid=91650359)  |
| ბლოკი  | building block                                      | 66, 201         | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                  |
| ბოთლი  | bottle                                              | 66, 202         | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)  |
| ბოლი   | smoke                                               | 22, 114, 201    | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)   |
| ბოლო   | end                                                 | 22, 110         | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)   |
| ბოძი   | pole                                                | 114             | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)   |
| ბრაზი  | anger                                               | 43, 173         | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)  |
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
| გვარი  | surname                                             | 44, 225         | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)  |
| გველი  | snake, serpent                                      | 169             | [source](https://en.wiktionary.org/w/index.php?title=გველი&oldid=91784251)  |
| გვიან  | late                                                | 36, 113         | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| გზა    | way, path, road                                     | 2, 88, 172      | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გლუვი  | smooth                                              | 139             | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)  |
| გმირი  | hero                                                | 51, 134         | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)  |
| გოლი   | goal in sport                                       | 8, 114, 192     | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)   |
| გორა   | hill                                                | 63, 225         | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)   |
| გოჭი   | piglet                                              | 217             | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)   |
| გრილი  | cool, breezy, chilly                                | 8, 145          | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)  |
| გრძელი | long                                                | 145             | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966) |
| გული   | heart                                               | 52, 139         | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)   |
| გუნდი  | choir; team                                         | 212             | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)  |
| გუშინ  | yesterday                                           | 139, 216        | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| დაბლა  | down; downstairs                                    | 194             | [source](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)  |
| დავა   | dispute                                             | 36, 112, 187    | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)   |
| დათვი  | bear                                                | 165             | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)  |
| დანა   | knife                                               | 36, 112, 187    | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)   |
| დარაჯი | guard                                               | 123             | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652) |
| დაფა   | board, tablet                                       | 120, 199        | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)   |
| დახლი  | counter                                             | 26, 128, 207    | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)  |
| დედა   | mother                                              | 13, 170         | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| დევი   | giant                                               | 21, 104         | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)   |
| დეიდა  | maternal aunt                                       | 13, 170         | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)  |
| დენი   | electric current                                    | 104, 212        | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)   |
| დიეტა  | diet                                                | 29, 176         | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)  |
| დილა   | morning                                             | 26, 128, 207    | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)   |
| დისკი  | disc                                                | 74              | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)  |
| დოზა   | dose                                                | 199             | [source](https://en.wiktionary.org/w/index.php?title=დოზა&oldid=84098236)   |
| დონე   | level                                               | 71              | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)   |
| დოქი   | jug                                                 | 40              | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)   |
| დრამა  | drama                                               | 115, 194        | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)  |
| დრო    | time                                                | 40, 123, 199    | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)    |
| დროშა  | flag                                                | 240             | [source](https://en.wiktionary.org/w/index.php?title=დროშა&oldid=88091257)  |
| დღე    | day                                                 | 29, 104         | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| ეზო    | yard, courtyard                                     | 6, 85, 195      | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ეკალი  | thorn                                               | 91, 183         | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)  |
| ეკრანი | screen                                              | 136             | [source](https://en.wiktionary.org/w/index.php?title=ეკრანი&oldid=84098327) |
| ელვა   | lightning                                           | 67, 151         | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)   |
| ელჩი   | ambassador                                          | 15, 102         | [source](https://en.wiktionary.org/w/index.php?title=ელჩი&oldid=84098345)   |
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
| ვაზა   | vase                                                | 80, 220         | [source](https://en.wiktionary.org/w/index.php?title=ვაზა&oldid=84115013)   |
| ვაზი   | vine, grapevine                                     | 2, 77           | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)   |
| ვალი   | debt                                                | 3, 98, 174      | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)   |
| ვაჟი   | son                                                 | 229             | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)   |
| ვარდი  | rose                                                | 161             | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)  |
| ვაშლი  | apple                                               | 70, 200         | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)  |
| ვენახი | vineyard                                            | 135             | [source](https://en.wiktionary.org/w/index.php?title=ვენახი&oldid=85087996) |
| ვიდეო  | video                                               | 104, 181        | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)  |
| ვიზა   | visa                                                | 2, 161          | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)   |
| ვილა   | villa                                               | 3, 153, 229     | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)   |
| ვირი   | donkey, ass                                         | 44, 144         | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)   |
| ზარალი | loss                                                | 88              | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744) |
| ზარი   | bell                                                | 5, 80           | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)   |
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
| თანხა  | amount of money                                     | 234             | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)  |
| თაობა  | generation                                          | 155, 234        | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)  |
| თარო   | board, shelf                                        | 86, 166         | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)   |
| თასი   | bowl, chalice                                       | 82, 175         | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| თასმა  | braid                                               | 78              | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)  |
| თაფლი  | honey                                               | 82              | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)  |
| თბილი  | warm                                                | 58, 159, 238    | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)  |
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
| იოგა   | yoga                                                | 138, 225        | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)   |
| იოდი   | iodine                                              | 129             | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)   |
| იოლი   | easy                                                | 8, 84, 159      | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)   |
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
| კარგი  | good                                                | 138, 227        | [source](https://en.wiktionary.org/w/index.php?title=კარგი&oldid=88207585)  |
| კარი   | door                                                | 69, 152, 228    | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარტი  | card                                                | 68              | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)  |
| კასრი  | barrel                                              | 69              | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)  |
| კატა   | cat                                                 | 160             | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| კაფე   | cafe                                                | 59, 136         | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)   |
| კაცი   | man                                                 | 89, 174         | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)   |
| კბილი  | tooth                                               | 93, 238         | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)  |
| კევი   | chewing gum                                         | 21, 102, 190    | [source](https://en.wiktionary.org/w/index.php?title=კევი&oldid=88239621)   |
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
| კუდი   | tail                                                | 21, 181         | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)   |
| კუნთი  | muscle                                              | 189             | [source](https://en.wiktionary.org/w/index.php?title=კუნთი&oldid=84099392)  |
| კურკა  | fruit stone                                         | 152             | [source](https://en.wiktionary.org/w/index.php?title=კურკა&oldid=80645944)  |
| კუჭი   | stomach                                             | 101, 201        | [source](https://en.wiktionary.org/w/index.php?title=კუჭი&oldid=87882649)   |
| ლაიმი  | lime (fruit)                                        | 7, 94, 213      | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)  |
| ლამპა  | lamp                                                | 186             | [source](https://en.wiktionary.org/w/index.php?title=ლამპა&oldid=89202010)  |
| ლარი   | lari (Georgian currency)                            | 10, 99, 177     | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)   |
| ლაქა   | spot, stain                                         | 89              | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| ლეიბი  | mattress                                            | 58, 163, 238    | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)  |
| ლეკვი  | puppy                                               | 102, 190        | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)  |
| ლექსი  | poem                                                | 49, 141, 223    | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)  |
| ლინზა  | lens                                                | 33, 109         | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)  |
| ლიფტი  | elevator                                            | 100             | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)  |
| ლობიო  | bean                                                | 22, 110, 202    | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)  |
| ლომი   | lion                                                | 47, 146, 221    | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლოყა   | cheek                                               | 99              | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)   |
| ლუდი   | beer                                                | 49, 207         | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)   |
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
| მელოტი | bald                                                | 221             | [source](https://en.wiktionary.org/w/index.php?title=მელოტი&oldid=84088872) |
| მენიუ  | menu                                                | 212             | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)  |
| მერე   | then; later                                         | 54, 182         | [source](https://en.wiktionary.org/w/index.php?title=მერე&oldid=91570731)   |
| მეტად  | very; greatly                                       | 29              | [source](https://www.ganmarteba.ge/word/მეტად)                              |
| მეტალი | metal                                               | 107             | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455) |
| მეტრი  | metre                                               | 168             | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)  |
| მეტრო  | metro                                               | 63, 221         | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)  |
| მეფე   | king                                                | 54, 182         | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)   |
| მზა    | ready                                               | 20, 97, 178     | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)    |
| მზე    | Sun                                                 | 6, 81, 195      | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)    |
| მზიანი | sunny                                               | 20, 97, 197     | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151) |
| მთა    | mountain, hill                                      | 1, 76, 157, 235 | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| მითი   | myth                                                | 57              | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)   |
| მილი   | tube; mile                                          | 7, 133, 213     | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)   |
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
| ნიორი  | garlic                                              | 50, 129         | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)  |
| ნისლი  | fog, mist                                           | 132             | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)  |
| ნიჭი   | talent                                              | 197             | [source](https://en.wiktionary.org/w/index.php?title=ნიჭი&oldid=84117703)   |
| ნული   | zero                                                | 132, 222        | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)   |
| ნუში   | almond                                              | 35, 139, 216    | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)   |
| ობი    | mould                                               | 46, 155, 231    | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)    |
| ობოლი  | orphan                                              | 22, 110         | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)  |
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
| პირი   | mouth                                               | 50, 144         | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)   |
| პიტნა  | mint, spearmint                                     | 122, 206        | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)  |
| პიცა   | pizza                                               | 214             | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)   |
| პლედი  | plaid blanket                                       | 91              | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)  |
| პლუსი  | plus                                                | 38, 214         | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)  |
| პოემა  | poem                                                | 6, 85           | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)  |
| პოეტი  | poet                                                | 230             | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)  |
| პოზა   | pose                                                | 6, 85           | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)   |
| პონი   | pony                                                | 50              | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)   |
| პორტი  | port                                                | 41, 118         | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)  |
| პოსტი  | post                                                | 118             | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)  |
| პრიზი  | prize                                               | 144             | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)  |
| პრინცი | prince                                              | 50              | [source](https://en.wiktionary.org/w/index.php?title=პრინცი&oldid=89363987) |
| პულსი  | pulse                                               | 38, 214         | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)  |
| პური   | bread                                               | 41, 152         | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)   |
| ჟოლო   | raspberry                                           | 22, 110         | [source](https://en.wiktionary.org/w/index.php?title=ჟოლო&oldid=84118245)   |
| რადიო  | radio                                               | 40, 123, 240    | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)  |
| რბილი  | soft                                                | 72, 163         | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)  |
| რეისი  | scheduled journey                                   | 48, 211         | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)  |
| რეპი   | rap music                                           | 68, 230         | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)   |
| რვა    | eight (8)                                           | 80, 161, 237    | [source](https://en.wiktionary.org/w/index.php?title=რვა&oldid=91742434)    |
| რიგი   | row; queue                                          | 8, 145          | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)   |
| რიტმი  | beat, cadence, rhythm                               | 226             | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)  |
| რკინა  | iron (metal)                                        | 31, 136, 228    | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)  |
| როკი   | rock music                                          | 31, 138         | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)   |
| როლი   | role                                                | 8, 99, 221      | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)   |
| რუკა   | map                                                 | 59, 152, 227    | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)   |
| რუჯი   | suntan                                              | 10, 226         | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)   |
| რძე    | milk                                                | 48, 145, 224    | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)    |
| საათი  | clock; hour                                         | 78, 175         | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)  |
| საიტი  | website                                             | 133             | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)  |
| სალონი | salon                                               | 33              | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194) |
| სამი   | three (3)                                           | 57, 137, 223    | [source](https://en.wiktionary.org/w/index.php?title=სამი&oldid=87444788)   |
| სამოცი | sixty                                               | 204             | [source](https://en.wiktionary.org/w/index.php?title=სამოცი&oldid=90075123) |
| სარკე  | looking-glass, mirror                               | 59              | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)  |
| საუნა  | sauna                                               | 35              | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)  |
| საქმე  | work, business                                      | 223             | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)  |
| საღი   | healthy, sensible                                   | 137             | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)   |
| სახე   | face                                                | 28, 124         | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)   |
| სახლი  | home, house, dwelling                               | 28, 151         | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)  |
| სველი  | wet                                                 | 65, 151         | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)  |
| სვეტი  | column                                              | 56              | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)  |
| სია    | list                                                | 7, 111, 223     | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)    |
| სითბო  | warmth                                              | 66              | [source](https://en.wiktionary.org/w/index.php?title=სითბო&oldid=75370460)  |
| სიმი   | string                                              | 7, 84, 211      | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)   |
| სიო    | breeze                                              | 27, 118, 204    | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)    |
| სიტყვა | word                                                | 56              | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915) |
| სიცივე | coldness, frigidity                                 | 218             | [source](https://en.wiktionary.org/w/index.php?title=სიცივე&oldid=84119113) |
| სიძე   | son-in-law; groom                                   | 48, 171         | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)   |
| სკამი  | chair                                               | 62, 204         | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)  |
| სკოლა  | school                                              | 116, 193        | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)  |
| სოდა   | soda                                                | 240             | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)   |
| სოკო   | mushroom                                            | 116             | [source](https://en.wiktionary.org/w/index.php?title=სოკო&oldid=92256152)   |
| სოუსი  | sauce                                               | 38              | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)  |
| სპილო  | elephant                                            | 38, 118         | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)  |
| სპორტი | sport                                               | 118             | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224) |
| სტატია | article                                             | 27              | [source](https://en.wiktionary.org/w/index.php?title=სტატია&oldid=88817457) |
| სტილი  | style                                               | 133, 215        | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)  |
| სულ    | completely; always                                  | 49, 132, 215    | [source](https://en.wiktionary.org/w/index.php?title=სულ&oldid=75696201)    |
| სული   | spirit, ghost                                       | 38, 215         | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)   |
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
| ტირე   | dash                                                | 68, 147, 230    | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)   |
| ტკბილი | sweet                                               | 93              | [source](https://en.wiktionary.org/w/index.php?title=ტკბილი&oldid=84417168) |
| ტომი   | tribe; volume                                       | 12, 143, 221    | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)   |
| ტონი   | tone                                                | 46, 121, 231    | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)   |
| ტორტი  | tart                                                | 143, 230        | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)  |
| ტოტი   | branch, twig                                        | 27, 143, 230    | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)   |
| ტური   | round                                               | 41, 126, 226    | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)   |
| ტყავი  | leather                                             | 131, 220        | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)  |
| ტყე    | forest, wood                                        | 56, 169         | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ტყვე   | captive                                             | 56, 169         | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)   |
| ტყვია  | bullet, lead                                        | 56, 131, 220    | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)  |
| ტყუპი  | twin                                                | 41              | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)  |
| უარი   | refusal                                             | 45, 126, 207    | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)   |
| უბანი  | neighborhood                                        | 101, 189        | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)  |
| უთო    | iron for clothes                                    | 14, 166         | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)    |
| უკან   | back; backwards                                     | 101             | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| უკვე   | already                                             | 21, 181         | [source](https://en.wiktionary.org/w/index.php?title=უკვე&oldid=58546516)   |
| უმი    | raw, uncooked                                       | 30, 142, 226    | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)    |
| უნარი  | ability                                             | 45, 126, 205    | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)  |
| ურნა   | urn                                                 | 45, 126         | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)   |
| უფრო   | more                                                | 239             | [source](https://en.wiktionary.org/w/index.php?title=უფრო&oldid=92228078)   |
| უჯრა   | drawer                                              | 10, 103         | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)   |
| ფაზა   | phase                                               | 43, 120         | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)   |
| ფაილი  | file                                                | 11, 213         | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)  |
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
| ფილმი  | film                                                | 84, 213         | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)  |
| ფინალი | final                                               | 213             | [source](https://en.wiktionary.org/w/index.php?title=ფინალი&oldid=84102241) |
| ფირმა  | company                                             | 19, 162         | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)  |
| ფიცი   | oath                                                | 11, 218         | [source](https://en.wiktionary.org/w/index.php?title=ფიცი&oldid=91715258)   |
| ფიჭა   | honeycomb                                           | 79, 154         | [source](https://en.wiktionary.org/w/index.php?title=ფიჭა&oldid=84102260)   |
| ფიჭვი  | pine                                                | 154             | [source](https://en.wiktionary.org/w/index.php?title=ფიჭვი&oldid=88091347)  |
| ფოთოლი | leaf                                                | 202             | [source](https://en.wiktionary.org/w/index.php?title=ფოთოლი&oldid=88091315) |
| ფონდი  | fund                                                | 129             | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)  |
| ფონი   | background                                          | 129             | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)   |
| ფორმა  | shape, form                                         | 162, 239        | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)  |
| ფრაზა  | phrase                                              | 43, 120, 199    | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)  |
| ფრთა   | wing                                                | 76, 166         | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)   |
| ფული   | money                                               | 82              | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)   |
| ფუნტი  | pound                                               | 126             | [source](https://en.wiktionary.org/w/index.php?title=ფუნტი&oldid=84102373)  |
| ფხა    | fishbone                                            | 73, 239         | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)      |
| ქათამი | chicken                                             | 78              | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996) |
| ქალი   | woman                                               | 4, 100, 192     | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| ქამარი | belt                                                | 83              | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022) |
| ქარი   | wind                                                | 61, 158         | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)   |
| ქედი   | mountain range                                      | 49, 165         | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)   |
| ქერა   | blond                                               | 86, 167         | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)   |
| ქვა    | stone                                               | 44, 125, 237    | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვაბი  | pot                                                 | 125             | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)  |
| ქვედა  | lower                                               | 71, 165         | [source](https://en.wiktionary.org/w/index.php?title=ქვედა&oldid=84120081)  |
| ქვემოთ | below                                               | 195             | [source](https://en.wiktionary.org/w/index.php?title=ქვემოთ&oldid=91661877) |
| ქვიშა  | sand                                                | 125, 200        | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)  |
| ქილა   | jar                                                 | 4, 100, 200     | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ქიმია  | chemistry                                           | 57              | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)  |
| ქირა   | rent                                                | 61, 150, 237    | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)   |
| ქლიავი | plum                                                | 153             | [source](https://en.wiktionary.org/w/index.php?title=ქლიავი&oldid=84120131) |
| ქმარი  | husband                                             | 61, 150         | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)  |
| ქოლგა  | umbrella                                            | 192             | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)  |
| ქუდი   | hat                                                 | 40, 150         | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)   |
| ქულა   | point, score                                        | 200             | [source](https://en.wiktionary.org/w/index.php?title=ქულა&oldid=84120181)   |
| ქურდი  | thief                                               | 40, 150         | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)  |
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
| ყავა   | coffee                                              | 53, 220         | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)   |
| ყანა   | field                                               | 53, 205         | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)   |
| ყბა    | jaw                                                 | 9, 92, 188      | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)    |
| ყდა    | cover of a book                                     | 115, 196        | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)    |
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
| შუა    | middle                                              | 16, 125         | [source](https://www.ganmarteba.ge/word/შუა)                                |
| შუბლი  | forehead                                            | 52              | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)  |
| შური   | envy                                                | 75              | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)   |
| შუქი   | light                                               | 125, 200        | [source](https://en.wiktionary.org/w/index.php?title=შუქი&oldid=84120612)   |
| შხამი  | poison                                              | 75              | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)  |
| შხაპი  | shower                                              | 122             | [source](https://en.wiktionary.org/w/index.php?title=შხაპი&oldid=84102695)  |
| ჩაი    | tea (drink made from leaves of tea plant)           | 39, 158, 233    | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)    |
| ჩალა   | straw                                               | 128             | [source](https://en.wiktionary.org/w/index.php?title=ჩალა&oldid=91725192)   |
| ჩეკი   | check, receipt                                      | 15, 102, 190    | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)   |
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
| ცომი   | dough                                               | 12, 204         | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)   |
| ცოტა   | a little; few                                       | 12              | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)   |
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
| წუთი   | minute                                              | 119             | [source](https://en.wiktionary.org/w/index.php?title=წუთი&oldid=88414352)   |
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
| ხიბლი  | charm                                               | 72, 159         | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)  |
| ხიდი   | bridge                                              | 74, 180         | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)   |
| ხილი   | fruit, fruits                                       | 72, 159         | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)   |
| ხმა    | voice, sound                                        | 1, 81, 157, 239 | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმალი  | sword                                               | 47, 142         | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)  |
| ხმელი  | dry                                                 | 28, 107         | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)  |
| ხორცი  | meat                                                | 87, 185         | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)  |
| ხროვა  | pack                                                | 184             | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)  |
| ხუთი   | five (5)                                            | 14              | [source](https://en.wiktionary.org/w/index.php?title=ხუთი&oldid=87444795)   |
| ხურდა  | small change                                        | 207             | [source](https://en.wiktionary.org/w/index.php?title=ხურდა&oldid=84121364)  |
| ხურმა  | persimmon                                           | 164, 239        | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)  |
| ხუფი   | lid                                                 | 73              | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)   |
| ჯადო   | magic                                               | 123             | [source](https://en.wiktionary.org/w/index.php?title=ჯადო&oldid=84121373)   |
| ჯაზი   | jazz                                                | 60              | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)   |
| ჯამი   | sum; bowl                                           | 62, 160         | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)   |
| ჯარი   | army, host                                          | 10, 103, 184    | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)   |
| ჯაჭვი  | chain                                               | 154, 232        | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)  |
| ჯერ    | first; yet                                          | 60, 149         | [source](https://en.wiktionary.org/w/index.php?title=ჯერ&oldid=87441534)    |
| ჯვარი  | cross                                               | 225             | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)  |
| ჯიბე   | pocket                                              | 60, 149         | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)   |
| ჯილდო  | reward                                              | 26              | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)  |
| ჯინსი  | jeans                                               | 132             | [source](https://en.wiktionary.org/w/index.php?title=ჯინსი&oldid=70377975)  |
| ჯიუტი  | stubborn                                            | 226             | [source](https://en.wiktionary.org/w/index.php?title=ჯიუტი&oldid=84091792)  |
| ჯიში   | breed                                               | 70              | [source](https://en.wiktionary.org/w/index.php?title=ჯიში&oldid=84121439)   |
| ჯოგი   | herd                                                | 225             | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)   |
| ჯოხი   | stick                                               | 26, 184         | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)   |
| ჰაერი  | air                                                 | 55              | [source](https://en.wiktionary.org/w/index.php?title=ჰაერი&oldid=92916842)  |
| ჰიმნი  | anthem                                              | 97              | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)  |
| ჰობი   | hobby                                               | 110             | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)   |

## All 240 boards

| Level | Stop           | Required answers                    | Score | Grid | Bonuses |
| ----- | -------------- | ----------------------------------- | ----- | ---- | ------- |
| 1     | tbilisi        | მახე, მთა, ხმა, თემა, თმა           | 38    | 6×5  | 2       |
| 2     | tbilisi        | გზა, ვაზი, ვიზა, ავზი, გაზი         | 42    | 7×5  | 4       |
| 3     | tbilisi        | თავი, ვილა, ვალი, ათი, თვალი        | 46    | 6×5  | 5       |
| 4     | tbilisi        | ქილა, ჭია, ჭიქა, ალი, ქალი          | 40    | 6×4  | 4       |
| 5     | tbilisi        | ხარი, აზრი, არხი, ზარი, ხაზი        | 44    | 7×5  | 2       |
| 6     | mtskheta       | მზე, პოემა, პოზა, ეზო, ზომა         | 52    | 7×5  | 2       |
| 7     | mtskheta       | ლაიმი, მილი, სია, მისია, სიმი       | 56    | 7×5  | 10      |
| 8     | mtskheta       | გოლი, გრილი, რიგი, იოლი, როლი       | 56    | 7×5  | 3       |
| 9     | mtskheta       | ყბა, ბალი, წაბლი, წყალი, აბი        | 54    | 7×5  | 3       |
| 10    | mtskheta       | რუჯი, უჯრა, ჯარი, ლარი, ლურჯი       | 56    | 6×5  | 5       |
| 11    | ananuri        | ცალი, იაფი, ფიცი, ფაილი, ფილა       | 56    | 7×4  | 6       |
| 12    | ananuri        | ცოტა, ატომი, ოცი, ტომი, ცომი        | 54    | 7×5  | 4       |
| 13    | ananuri        | ბადე, დედა, დეიდა, იდეა, ბედი       | 56    | 7×5  | 4       |
| 14    | ananuri        | ოთხი, უთო, ხუთი, თხა, ოთახი         | 52    | 6×5  | 5       |
| 15    | ananuri        | ელჩი, კეტი, კლიტე, ჩეკი, ეტლი       | 56    | 7×5  | 0       |
| 16    | kazbegi        | ტაში, ტბა, შუა, ბატი, ბუშტი         | 52    | 7×5  | 7       |
| 17    | kazbegi        | ნელი, ცხელი, ცხენი, ხელი, ციხე      | 58    | 6×5  | 2       |
| 18    | kazbegi        | ბანაკი, ბინა, კაბინა, კაბა, კანი    | 64    | 6×5  | 5       |
| 19    | kazbegi        | ძმა, ძია, ძაფი, ფირმა, ძმარი        | 54    | 7×5  | 3       |
| 20    | kazbegi        | ზიანი, მზა, მინა, მზიანი, ნაზი      | 60    | 7×4  | 4       |
| 21    | tusheti        | კიდევ, კუდი, უკვე, დევი, კევი       | 56    | 7×5  | 2       |
| 22    | tusheti        | ობოლი, ლობიო, ბოლო, ბოლი, ჟოლო      | 58    | 7×5  | 1       |
| 23    | tusheti        | ენა, მელა, მელანი, ნელა, მალე       | 58    | 6×5  | 8       |
| 24    | tusheti        | ნერვი, წვენი, წინ, წრე, წევრი       | 56    | 6×5  | 2       |
| 25    | tusheti        | წონა, მაწონი, წამი, მიწა, ომი       | 58    | 7×4  | 6       |
| 26    | sighnaghi      | ხალი, დახლი, ჯილდო, ჯოხი, დილა      | 66    | 7×5  | 9       |
| 27    | sighnaghi      | ტოტი, ასო, ოსტატი, სიო, სტატია      | 68    | 6×5  | 5       |
| 28    | sighnaghi      | სახე, მსხალი, სახლი, ხმელი, ისე     | 70    | 7×5  | 21      |
| 29    | sighnaghi      | მეტად, დიეტა, ღამე, მედია, დღე      | 66    | 7×5  | 6       |
| 30    | sighnaghi      | მუდამ, უმი, მადა, მამიდა, მამა      | 68    | 7×5  | 4       |
| 31    | david-gareja   | რკინა, კინო, როკი, კოდი, ნარდი      | 66    | 7×5  | 15      |
| 32    | david-gareja   | ღია, ღრუ, ბაღი, ბურღი, ბრალი        | 62    | 7×5  | 13      |
| 33    | david-gareja   | ლინზა, ზონა, ასლი, ასი, სალონი      | 68    | 6×5  | 12      |
| 34    | david-gareja   | გაზეთი, ზეთი, თაგვი, თვე, ზეგ       | 66    | 7×5  | 14      |
| 35    | david-gareja   | ნუში, შანსი, შინ, სუნი, საუნა       | 64    | 7×5  | 6       |
| 36    | uplistsikhe    | დანა, ვადა, ნაგავი, გვიან, დავა     | 70    | 6×5  | 6       |
| 37    | uplistsikhe    | ღილი, ძაღლი, ძილი, ბიძა, იღბალი     | 70    | 7×5  | 10      |
| 38    | uplistsikhe    | სოუსი, სპილო, სული, პლუსი, პულსი    | 70    | 7×5  | 4       |
| 39    | uplistsikhe    | ჩაი, ტანი, ნახატი, იახტა, ხატი      | 68    | 7×5  | 2       |
| 40    | uplistsikhe    | დოქი, რადიო, ქუდი, ქურდი, დრო       | 64    | 6×5  | 17      |
| 41    | borjomi        | ტყუპი, ყური, პორტი, ტური, პური      | 66    | 7×5  | 4       |
| 42    | borjomi        | ფენი, ისევ, ფესვი, ნეფე, ნესვი      | 66    | 7×5  | 1       |
| 43    | borjomi        | ფაზა, ფრაზა, ბაზა, ბაზარი, ბრაზი    | 72    | 6×5  | 16      |
| 44    | borjomi        | იგავი, ქვა, არქივი, ვირი, გვარი     | 70    | 7×5  | 10      |
| 45    | borjomi        | ურნა, ნაცარი, ცრუ, უნარი, უარი      | 68    | 7×5  | 7       |
| 46    | vardzia        | ობი, ბეტონი, ენოტი, ღობე, ტონი      | 68    | 7×5  | 2       |
| 47    | vardzia        | ხბო, ლომი, ახლო, ალბომი, ხმალი      | 68    | 6×5  | 11      |
| 48    | vardzia        | რძე, სიძე, კერძი, რეისი, კისერი     | 70    | 7×5  | 4       |
| 49    | vardzia        | სულ, ლუდი, ქედი, ქუსლი, ლექსი       | 64    | 7×5  | 4       |
| 50    | vardzia        | ნიორი, ორი, პრინცი, პირი, პონი      | 68    | 7×5  | 3       |
| 51    | katskhi        | ირემი, გედი, იმედი, გემი, გმირი     | 68    | 7×5  | 3       |
| 52    | katskhi        | გული, კლუბი, შიგ, კუბი, შუბლი       | 64    | 7×5  | 4       |
| 53    | katskhi        | ყანა, ყავა, ნავი, აივანი, ყინვა     | 70    | 6×5  | 3       |
| 54    | katskhi        | მერე, მეფე, ტერფი, ფერი, მტერი      | 66    | 7×5  | 5       |
| 55    | katskhi        | გარე, გარეთ, ერი, ერთი, ჰაერი       | 64    | 7×5  | 5       |
| 56    | racha          | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი     | 70    | 7×5  | 10      |
| 57    | racha          | მითი, სამი, ქიმია, იქით, მაისი      | 66    | 7×5  | 12      |
| 58    | racha          | წითელი, წელი, ლეიბი, თბილი, წილი    | 72    | 7×5  | 5       |
| 59    | racha          | რუკა, კეფა, სარკე, სუფრა, კაფე      | 66    | 6×5  | 6       |
| 60    | racha          | ბზარი, ჯაზი, ჯერ, ჯიბე, ზებრა       | 64    | 7×5  | 13      |
| 61    | kutaisi-gelati | ქარი, ქირა, ქმარი, მუმია, მუქი      | 66    | 7×5  | 10      |
| 62    | kutaisi-gelati | ჯამი, ასაკი, სკამი, აჯიკა, მაჯა     | 68    | 7×5  | 6       |
| 63    | kutaisi-gelati | გარემო, გემო, მარტო, გორა, მეტრო    | 72    | 7×5  | 3       |
| 64    | kutaisi-gelati | წებო, ბევრი, წვერი, ბეწვი, ბერი     | 68    | 7×5  | 6       |
| 65    | kutaisi-gelati | სველი, იქვე, ყელი, ყველი, ექვსი     | 68    | 7×5  | 5       |
| 66    | svaneti        | თოკი, ბლოკი, კილო, სითბო, ბოთლი     | 68    | 7×5  | 5       |
| 67    | svaneti        | ელვა, ძვალი, ძველი, ხვალ, ძეხვი     | 68    | 7×5  | 14      |
| 68    | svaneti        | ეტაპი, კარტი, ტირე, პაკეტი, რეპი    | 72    | 7×5  | 11      |
| 69    | svaneti        | პარკი, კასრი, კარი, პიკი, ისარი     | 68    | 7×5  | 12      |
| 70    | svaneti        | შალი, შავი, შვილი, ჯიში, ვაშლი      | 66    | 7×5  | 6       |
| 71    | martvili       | ექო, დონე, ქვედა, ოდნავ, აქვე       | 64    | 7×5  | 6       |
| 72    | martvili       | ხილი, რბილი, ჩირი, ჩიხი, ხიბლი      | 66    | 7×5  | 2       |
| 73    | martvili       | ფხა, აგური, ხუფი, ფიგურა, ფარი      | 68    | 6×5  | 7       |
| 74    | martvili       | სხივი, ხიდი, დისკი, კივი, იხვი      | 66    | 6×5  | 0       |
| 75    | martvili       | მხარი, შური, შხამი, მუშა, მუხა      | 66    | 6×5  | 14      |
| 76    | zugdidi        | ადრე, მთა, ფერმა, ფრთა, ერთად       | 64    | 7×5  | 5       |
| 77    | zugdidi        | ავზი, ვაზი, ზღვარი, კვირა, ზღვა     | 70    | 7×5  | 14      |
| 78    | zugdidi        | თმა, საათი, ქათამი, ათასი, თასმა    | 72    | 7×5  | 12      |
| 79    | zugdidi        | ფიჭა, ბაჭია, ბაფთა, ათი, ჭია        | 62    | 7×5  | 3       |
| 80    | zugdidi        | რვა, ავაზა, ზარი, ავარია, ვაზა      | 68    | 6×5  | 11      |
| 81    | makhuntseti    | ზეცა, მხარე, ცხარე, ხმა, მზე        | 62    | 7×5  | 7       |
| 82    | makhuntseti    | სუფთა, თაფლი, ფასი, ფული, თასი      | 66    | 7×5  | 12      |
| 83    | makhuntseti    | არმია, აჩმა, ჩქარა, ქამარი, ჩქარი   | 74    | 6×5  | 12      |
| 84    | makhuntseti    | იოლი, ოფისი, სიმი, ოფლი, ფილმი      | 66    | 6×5  | 6       |
| 85    | makhuntseti    | თემა, პოემა, პოზა, ეზო, ზემოთ       | 64    | 7×5  | 6       |
| 86    | batumi         | თარო, ოპერა, ქერა, ეპოქა, აქეთ      | 66    | 7×5  | 6       |
| 87    | batumi         | ძროხა, ცხრა, ოცი, არხი, ხორცი       | 64    | 7×5  | 7       |
| 88    | batumi         | გზა, ზარალი, აზრი, გალია, გაზი      | 68    | 7×5  | 9       |
| 89    | batumi         | კაცი, ლაქა, ცალი, აქცია, კალია      | 66    | 7×5  | 11      |
| 90    | batumi         | ოთხი, თოლია, ხაჭო, ოთახი, თხა       | 64    | 7×5  | 9       |
| 91    | tao-klarjeti   | ეკალი, იდეა, კლდე, კიდე, პლედი      | 66    | 7×5  | 5       |
| 92    | tao-klarjeti   | არაყი, ბარტყი, ტბა, ბატი, ყბა       | 66    | 7×5  | 7       |
| 93    | tao-klarjeti   | კიბე, კლიტე, ტკბილი, ეტლი, კბილი    | 72    | 6×5  | 4       |
| 94    | tao-klarjeti   | ძმა, ძია, მარილი, ლაიმი, ძმარი      | 68    | 6×5  | 9       |
| 95    | tao-klarjeti   | აბი, ბიცოლა, ცოლი, ჭაობი, ბალი      | 68    | 7×5  | 10      |
| 96    | sumela         | ხევი, მხეცი, ცხიმი, ცივი, ციხე      | 66    | 7×5  | 2       |
| 97    | sumela         | ზიანი, მზა, მინა, მზიანი, ჰიმნი     | 70    | 7×5  | 5       |
| 98    | sumela         | ლუკმა, კვალი, ვალი, ალი, მკლავი     | 70    | 7×5  | 8       |
| 99    | sumela         | ლარი, ლოყა, წყალი, როლი, წყარო      | 66    | 7×5  | 7       |
| 100   | sumela         | ქილა, ლიფტი, ქალი, ფაქტი, ფილა      | 66    | 7×5  | 7       |
| 101   | cappadocia     | უკან, ჭკუა, ბანკი, უბანი, კუჭი      | 66    | 7×5  | 15      |
| 102   | cappadocia     | ლეკვი, კიდევ, კევი, ელჩი, ჩეკი      | 66    | 7×5  | 4       |
| 103   | cappadocia     | ჯარი, ხარჯი, ბუხარი, ხარი, უჯრა     | 70    | 7×5  | 9       |
| 104   | cappadocia     | დღე, დენი, ვიდეო, ღვინო, დევი       | 64    | 7×5  | 3       |
| 105   | cappadocia     | ნაკლი, ნელა, ნელი, კენჭი, ენა       | 64    | 7×5  | 11      |
| 106   | pamukkale      | წინდა, ომი, მოდა, მაწონი, წონა      | 68    | 7×5  | 10      |
| 107   | pamukkale      | მალე, მახე, მეტალი, მელა, ხმელი     | 70    | 6×5  | 13      |
| 108   | pamukkale      | კანი, კაბინა, კაბა, წინ, ბანაკი     | 70    | 7×5  | 6       |
| 109   | pamukkale      | ხაზი, ნაზი, ხალი, ხალხი, ლინზა      | 66    | 6×5  | 4       |
| 110   | pamukkale      | ჟოლო, ჰობი, ბოლო, ობოლი, ლობიო      | 66    | 7×5  | 2       |
| 111   | ephesus        | ალმასი, მამა, მამალი, სია, ასი      | 68    | 6×5  | 10      |
| 112   | ephesus        | ვადა, ცოდვა, ცოდნა, დავა, დანა      | 66    | 7×5  | 5       |
| 113   | ephesus        | განძი, ბიძა, გვიან, ნაძვი, ბინა     | 68    | 7×5  | 7       |
| 114   | ephesus        | ბლოგი, ძეგლი, გოლი, ბოლი, ბოძი      | 66    | 7×5  | 4       |
| 115   | ephesus        | ბარდა, ბრმა, მადა, დრამა, ყდა       | 64    | 7×5  | 3       |
| 116   | istanbul       | კლასი, სკოლა, სოკო, ასლი, ასო       | 64    | 6×5  | 12      |
| 117   | istanbul       | წვენი, წრე, ნერვი, წესი, წევრი      | 66    | 7×5  | 6       |
| 118   | istanbul       | სპორტი, პორტი, სპილო, პოსტი, სიო    | 72    | 7×5  | 8       |
| 119   | istanbul       | თვე, ზევით, წუთი, თევზი, ზეთი       | 64    | 7×5  | 0       |
| 120   | istanbul       | ფაზა, ფარდა, ფრაზა, ბაზა, დაფა      | 66    | 6×5  | 9       |
| 121   | plovdiv        | ნეკნი, ტონი, ენოტი, კინო, კეტი      | 66    | 7×5  | 1       |
| 122   | plovdiv        | პიტნა, ტანი, შხაპი, ტაში, ხატი      | 66    | 6×5  | 4       |
| 123   | plovdiv        | იჯარა, დარაჯი, დრო, ჯადო, რადიო     | 70    | 6×5  | 11      |
| 124   | plovdiv        | ხბო, სახე, ახლოს, ახლო, ხეობა       | 64    | 7×5  | 5       |
| 125   | plovdiv        | ქვიშა, ქვაბი, შუა, შუქი, ქვა        | 62    | 7×5  | 9       |
| 126   | petritsoni     | ტური, უნარი, ურნა, ფუნტი, უარი      | 66    | 7×5  | 8       |
| 127   | petritsoni     | ღრუ, ბურღი, ყუთი, ყრუ, ბურთი        | 62    | 7×5  | 2       |
| 128   | petritsoni     | დახლი, ახლა, ჩალა, ხალიჩა, დილა     | 70    | 7×5  | 6       |
| 129   | petritsoni     | ორი, ფონდი, ფონი, იოდი, ნიორი       | 64    | 7×5  | 5       |
| 130   | petritsoni     | თათი, გარე, თეთრი, ერთი, გარეთ      | 66    | 6×5  | 6       |
| 131   | rila           | ნავი, ტვინი, ყინვა, ტყავი, ტყვია    | 70    | 7×5  | 4       |
| 132   | rila           | სულ, სუნი, ჯინსი, ნისლი, ნული       | 64    | 7×5  | 1       |
| 133   | rila           | მისია, მილი, საიტი, სტილი, მაისი    | 70    | 7×5  | 12      |
| 134   | rila           | ზეიმი, ზეგ, გმირი, გემი, ირემი      | 66    | 7×5  | 4       |
| 135   | rila           | ნესვი, ისე, ვენახი, ასე, სხვენი     | 70    | 7×5  | 14      |
| 136   | thessaloniki   | ეკრანი, კაფე, კეფა, რკინა, ერი      | 68    | 7×5  | 16      |
| 137   | thessaloniki   | მაშინ, სამი, შანსი, საღი, შინ       | 64    | 7×5  | 8       |
| 138   | thessaloniki   | როკი, ბარგი, კობრა, იოგა, კარგი     | 68    | 6×5  | 14      |
| 139   | thessaloniki   | გლუვი, გუშინ, ნუში, შიგ, გული       | 64    | 6×5  | 2       |
| 140   | thessaloniki   | ბუზი, ბზარი, ბერი, ზებრა, აუზი      | 66    | 7×5  | 14      |
| 141   | iviron-athos   | ისევ, იქვე, ლექსი, თესლი, ექვსი     | 68    | 7×5  | 5       |
| 142   | iviron-athos   | უმი, მუხლი, მიწა, ლუწი, ხმალი       | 64    | 7×5  | 8       |
| 143   | iviron-athos   | ატომი, მარტო, ტორტი, ტომი, ტოტი     | 68    | 7×5  | 11      |
| 144   | iviron-athos   | ვირი, პრიზი, ძვირი, ძირი, პირი      | 66    | 7×5  | 0       |
| 145   | iviron-athos   | ძილი, გრილი, რძე, გრძელი, რიგი      | 68    | 7×5  | 5       |
| 146   | meteora        | შოკი, კილო, ლომი, კომში, კოშკი      | 66    | 7×5  | 2       |
| 147   | meteora        | ფერი, ფეხი, ხერხი, ტერფი, ტირე      | 66    | 7×5  | 2       |
| 148   | meteora        | იღბალი, ღილი, წაბლი, წილი, ღია      | 68    | 7×5  | 8       |
| 149   | meteora        | ჯერ, ბევრი, ჯიბე, წვერი, ბეწვი      | 66    | 7×5  | 4       |
| 150   | meteora        | ქმარი, ქირა, ქუდი, ქურდი, მუქი      | 66    | 7×5  | 13      |
| 151   | volos-iolcos   | ხელი, ხვალ, ელვა, სველი, სახლი      | 66    | 7×5  | 22      |
| 152   | volos-iolcos   | პარკი, პური, რუკა, კარი, კურკა      | 66    | 7×5  | 6       |
| 153   | volos-iolcos   | თვალი, თავი, იქით, ქლიავი, ვილა     | 70    | 6×5  | 12      |
| 154   | volos-iolcos   | ჭია, ფიჭვი, ჯაჭვი, იაფი, ფიჭა       | 64    | 7×5  | 3       |
| 155   | volos-iolcos   | ობი, თაობა, შაბათი, შობა, ათი       | 66    | 6×5  | 3       |
| 156   | delphi         | შალი, შავი, შვილი, შიდა, ადვილი     | 70    | 7×5  | 10      |
| 157   | delphi         | კამათი, მთა, ხმა, თმა, კათხა        | 64    | 6×5  | 7       |
| 158   | delphi         | ქარი, შაქარი, ჩქარა, ჩაი, ჩქარი     | 70    | 7×5  | 8       |
| 159   | delphi         | თბილი, იოლი, ხიბლი, ხილი, თხილი     | 68    | 6×5  | 6       |
| 160   | delphi         | მაჯა, ჯამი, ატამი, კატა, აჯიკა      | 66    | 7×5  | 3       |
| 161   | athens         | ზღვარი, რვა, ვარდი, ზღვა, ვიზა      | 68    | 6×5  | 12      |
| 162   | athens         | ფორმა, ფირმა, ღომი, ღრმა, ფარი      | 66    | 7×5  | 10      |
| 163   | athens         | რბილი, ჭერი, ჭრელი, ბიჭი, ლეიბი     | 68    | 7×5  | 6       |
| 164   | athens         | ცხრა, ხურმა, მუხა, ცხარე, ცრუ       | 64    | 7×5  | 8       |
| 165   | athens         | ქვედა, აქეთ, ქედი, აქვე, დათვი      | 66    | 7×5  | 15      |
| 166   | santorini      | თარო, სუფთა, უთო, სუფრა, ფრთა       | 64    | 7×5  | 3       |
| 167   | santorini      | ქერა, ეპოქა, ექო, ოპერა, ოქრო       | 64    | 6×5  | 4       |
| 168   | santorini      | მეტრი, მტერი, მტრედი, კიდე, კრემი   | 74    | 7×5  | 5       |
| 169   | santorini      | ეტლი, გველი, ტყე, ტყვე, ყველი       | 64    | 7×5  | 2       |
| 170   | santorini      | იდეა, ცუდად, ცუდი, დედა, დეიდა      | 66    | 7×5  | 4       |
| 171   | corfu          | სხივი, სიძე, ძეხვი, ხევი, იხვი      | 66    | 7×5  | 3       |
| 172   | corfu          | გზა, მანგო, ტანგო, ზონა, ზომა       | 64    | 7×5  | 3       |
| 173   | corfu          | ღორი, აზრი, ზღარბი, ბაღი, ბრაზი     | 70    | 7×5  | 12      |
| 174   | corfu          | კვლავ, ცალი, ვალი, კვალი, კაცი      | 66    | 7×5  | 8       |
| 175   | corfu          | საათი, ფასი, ფაფა, ათასი, თასი      | 66    | 7×5  | 5       |
| 176   | butrint        | ბადე, ბებია, ბედი, დიეტა, ბატი      | 66    | 7×5  | 7       |
| 177   | butrint        | ლარი, ძვალი, ძია, ძრავა, ძალა       | 64    | 7×5  | 13      |
| 178   | butrint        | მაგარი, მაგია, მზა, არმია, გაზი     | 70    | 7×5  | 9       |
| 179   | butrint        | ძმარი, ხარი, მხარი, ძმა, ძიძა       | 64    | 7×4  | 6       |
| 180   | butrint        | ცხიმი, ხედი, ხიდი, იმედი, ციხე      | 66    | 7×5  | 2       |
| 181   | gjirokaster    | კუდი, კოდი, კიდევ, ვიდეო, უკვე      | 66    | 7×5  | 5       |
| 182   | gjirokaster    | მახე, მეფე, მხარე, ფერმა, მერე      | 66    | 6×5  | 5       |
| 183   | gjirokaster    | კაბელი, კაბა, კალია, კიბე, ეკალი    | 72    | 7×5  | 7       |
| 184   | gjirokaster    | ხროვა, ჯარი, ჯოხი, არხი, ხარჯი      | 66    | 6×5  | 10      |
| 185   | gjirokaster    | ომი, ორმოცი, ოცი, ხორცი, ორმო       | 66    | 7×5  | 4       |
| 186   | berat          | ლამპა, ღამე, მალე, მელა, მაღლა      | 66    | 7×5  | 3       |
| 187   | berat          | დანა, ავაზა, ვადა, დავა, ანდაზა     | 70    | 6×5  | 3       |
| 188   | berat          | აბი, ბაჭია, ყაბაყი, ყბა, ბაყაყი     | 70    | 7×5  | 3       |
| 189   | berat          | ბანკი, კუბი, კუნთი, უბანი, ბინა     | 68    | 7×5  | 10      |
| 190   | berat          | კევი, კივი, ჩეკი, ლეკვი, ჩვილი      | 66    | 7×5  | 4       |
| 191   | ohrid          | ხალი, იახტა, ფილა, ტალახი, ტაფა     | 70    | 7×5  | 7       |
| 192   | ohrid          | ქალი, გოლი, ბლოგი, ბალი, ქოლგა      | 66    | 7×5  | 12      |
| 193   | ohrid          | კოალა, ასაკი, სკოლა, კლასი, ასლი    | 70    | 7×5  | 15      |
| 194   | ohrid          | ბარდა, ბრმა, დრამა, დაბლა, მადა     | 68    | 7×5  | 4       |
| 195   | ohrid          | მზე, თვე, ზემოთ, ეზო, ქვემოთ        | 64    | 7×5  | 2       |
| 196   | kotor          | წყნარი, ნარდი, წინდა, ყდა, წინ      | 68    | 6×5  | 5       |
| 197   | kotor          | ნაზი, ნიჭი, ზიანი, მინა, მზიანი     | 70    | 7×5  | 6       |
| 198   | kotor          | წვენი, წამი, მწვანე, ენა, წვიმა     | 70    | 6×5  | 11      |
| 199   | kotor          | ფარდა, ფრაზა, დაფა, დრო, დოზა       | 64    | 7×5  | 8       |
| 200   | kotor          | ქულა, ვაშლი, შუქი, ქილა, ქვიშა      | 66    | 6×5  | 13      |
| 201   | dubrovnik      | კოჭი, ბლოკი, კუჭი, კლუბი, ბოლი      | 66    | 7×5  | 9       |
| 202   | dubrovnik      | ფოთოლი, ბოთლი, ოფლი, თოფი, ლობიო    | 72    | 7×5  | 4       |
| 203   | dubrovnik      | მოდა, ალი, მოდელი, მედია, მედალი    | 72    | 7×5  | 15      |
| 204   | dubrovnik      | სიო, ასო, სკამი, ცომი, სამოცი       | 66    | 7×5  | 9       |
| 205   | dubrovnik      | არაყი, ყანა, ყრუ, ყური, უნარი       | 64    | 7×5  | 6       |
| 206   | split          | ეტაპი, პიტნა, ფენა, ტანი, ფენი      | 66    | 7×5  | 4       |
| 207   | split          | ლუდი, დილა, უარი, ხურდა, დახლი      | 66    | 7×5  | 11      |
| 208   | split          | ოთხი, ახლა, ხალათი, ოთახი, ახლო     | 70    | 7×5  | 9       |
| 209   | split          | ერთად, გარეთ, ზეგ, ზედა, ადრე       | 64    | 7×5  | 5       |
| 210   | split          | ისე, ანკესი, ასე, პენსია, კანი      | 68    | 7×5  | 7       |
| 211   | plitvice       | ერი, ირემი, რეისი, სიმი, ნემსი      | 66    | 7×5  | 2       |
| 212   | plitvice       | დენი, გედი, მენიუ, გუნდი, გემი      | 66    | 6×5  | 2       |
| 213   | plitvice       | ფინალი, ლაიმი, ფილმი, მილი, ფაილი   | 74    | 7×5  | 8       |
| 214   | plitvice       | ცული, ასი, პიცა, პლუსი, პულსი       | 64    | 7×5  | 13      |
| 215   | plitvice       | სტილი, სულ, ჩიტი, სული, ჩუსტი       | 64    | 6×5  | 1       |
| 216   | venice         | შინ, გუშინ, ნიმუში, ნუში, შიგ       | 66    | 6×5  | 1       |
| 217   | venice         | ჭორი, ბარგი, ჭაობი, გოჭი, ორი       | 64    | 7×5  | 10      |
| 218   | venice         | სიცივე, ისევ, ფიცი, ცივი, ფესვი     | 70    | 7×5  | 2       |
| 219   | venice         | თოკი, კოვზი, ზევით, თევზი, ზეთი     | 68    | 7×5  | 3       |
| 220   | venice         | ტყავი, ვაზა, ტყვია, ყავა, ავზი      | 66    | 7×5  | 6       |
| 221   | florence       | მეტრო, მელოტი, როლი, ტომი, ლომი     | 70    | 7×5  | 15      |
| 222   | florence       | კნუტი, კლოუნი, კინო, კილო, ნული     | 70    | 7×5  | 4       |
| 223   | florence       | აქლემი, ლექსი, საქმე, სამი, სია     | 70    | 7×5  | 17      |
| 224   | florence       | კერძი, კიტრი, ძირი, რძე, კეტი       | 64    | 6×5  | 3       |
| 225   | florence       | ჯოგი, გვარი, ჯვარი, გორა, იოგა      | 66    | 7×5  | 8       |
| 226   | rome           | რიტმი, რუჯი, უმი, ტური, ჯიუტი       | 64    | 7×5  | 1       |
| 227   | rome           | ზურგი, კარგი, რუკა, აგური, აუზი     | 68    | 7×5  | 12      |
| 228   | rome           | ნიკაპი, კარი, ნაპირი, რკინა, პიკი   | 74    | 6×5  | 9       |
| 229   | rome           | ვაჟი, ვილა, თოვლი, თავი, თოლია      | 66    | 7×5  | 9       |
| 230   | rome           | ტოტი, პოეტი, ტორტი, რეპი, ტირე      | 66    | 7×5  | 4       |
| 231   | amalfi         | ტონი, ბანქო, ბატონი, ობი, ტბა       | 66    | 6×5  | 9       |
| 232   | amalfi         | ჭია, ავეჯი, ჯაჭვი, ჭაღი, ღია        | 62    | 7×5  | 3       |
| 233   | amalfi         | ჩაი, მუდამ, მუმია, ჩუმი, ჩუმად      | 66    | 7×5  | 4       |
| 234   | amalfi         | აბანო, თაობა, თხა, ხბო, თანხა       | 64    | 7×5  | 0       |
| 235   | amalfi         | ამინდი, ათი, მთა, ნადიმი, თმა       | 66    | 6×5  | 6       |
| 236   | taormina       | ბერი, ზებრა, წარბი, ზეწარი, წრე     | 70    | 7×5  | 12      |
| 237   | taormina       | კარაქი, ქვა, რვა, კარავი, ქირა      | 68    | 7×5  | 15      |
| 238   | taormina       | ლეიბი, კბილი, კეთილი, თბილი, ბილეთი | 78    | 7×5  | 4       |
| 239   | taormina       | ხურმა, უფრო, ხმა, ფორმა, ფხა        | 62    | 7×5  | 3       |
| 240   | taormina       | შიდა, შორს, დროშა, სოდა, რადიო      | 66    | 7×5  | 18      |
