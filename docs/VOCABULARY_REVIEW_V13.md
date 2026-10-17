# Journey vocabulary and campaign review — revision 13

The starting allowlist had **778 words**. The journey needs **1,200 answer slots**
(240 × 5), with the owner's **75-level minimum repeat gap**, not 1,200 unique words.
A 75-level window therefore needs at least 375 distinct required spellings; that is
a counting minimum, not proof of crossword feasibility. The generated campaign has
**589 distinct target spellings**, and the shortest actual repeat gap is
**75 levels**. Every wheel and complete answer set is different.

## Vocabulary decisions and provenance

The final allowlist contains **869** entries: 778 previous approvals, minus four
newly excluded targets, plus **95 individually reviewed approvals**. Of those 95,
**79 are new reference entries** and **16 already existed** in the wider dictionary.
All 95 new target approvals comprise **11 three-letter, 20 four-letter, 29 five-letter
and 35 six-letter words**: 40 nouns, 52 adverbs and three adjectives.
The reference dictionary now has **1,312 entries / 1,274 eligible for play**.
All 1,233 historical entries retain their original fields and attribution.

New reference entries by length: **7 three-letter, 11 four-letter,
26 five-letter and 35 six-letter words**. They comprise 38 ordinary
nominative plural nouns, 37 everyday adverbs, two singular nouns and two adjectives.
The other sixteen target approvals are fifteen existing adverbs and the existing adjective `ზედა` (upper). All 95
spellings, senses, decisions and source revisions appear below and in
[`everyday-targets-v13.json`](../content/dictionaries/everyday-targets-v13.json).
Plural nouns cover nature (8), home (6), body (5), people (5), animals (5), clothing
(3), time (2), food (2), concepts (1), and language (1).

Each new spelling was inspected against a named dictionary source and
its part of speech or explicit modern plural form. No general inflection rule
creates game words. Twenty-three plural candidates remain held back because exact
source/form evidence was not sufficiently inspected; this does not declare those
words invalid. The valid particle/interjection `არა` was also held outside this
noun/adjective/number/adverb expansion. Everyday familiarity is an assistant editorial judgment, not
native-speaker sign-off. The existing frequency proxy is supporting evidence only;
new entries do not receive invented ranks. Rare valid words, including `ურცი`,
`რაზა` and `თელა`, remain eligible optional bonuses, never targets or variants.

The standard-Georgian rule excludes six reviewed nonstandard substitutions from
targets, variants and bonuses: `ბინტი`, `ბლინი`, `ვედრო`, `კაშნე`, `კრანი`, `მაიკა`.
Four had prior target approval; the others were bonus-only. See individual sources
and replacement expressions in [`word-policy.json`](../content/dictionaries/word-policy.json)
and the [Georgian usage list](https://www.aura.ge/menu/1-archevani/317-leqsebi-deda-enaze/14846-vilaparakot-qartulad-barbarizmebis-leqsikoni.html).
The owner also excludes `რული` in all senses. Its historical "nap" meaning is
attested Georgian; it is distinct from the nonstandard borrowed steering-wheel
sense. Historical provenance remains accurate. Established standard loanwords
are not excluded just because of foreign origin. This is a reviewed editorial
list, not a comprehensive automatic Georgian grammar or barbarism classifier.

`ბლოკი` is approved for the ordinary **building block** sense, supported by the
[National Parliamentary Library](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი).
The raw historical dictionary's narrower gloss is preserved for provenance.

Wiktionary-derived additions and glosses retain CC BY-SA 4.0 attribution with
specific source-revision links. For `შუა`, `ღრუ`, `უცებ` and `მეტად`,
Georgian explanatory definitions were checked and brief English glosses written
independently. Baseline frequency ranks retain the
[EasyGeorgian attribution and limitations](VOCABULARY_REVIEW_V12.md).

## Campaign and pacing

There are 48 stops, in the exact ID/title order in
[`journey-v13.json`](../content/journey-v13.json), with five levels per stop.
Required targets remain 3–6 letters. Slot counts are 152 three-letter,
515 four-letter, **459 five-letter and 74 six-letter answers**.
Five-letter answers begin at level 3; six-letter answers begin at level 18.

Wheels have five tiles at levels 1–5, six at 6–25 and seven at 26–240. Every board
from level 6 has at least one five/six-letter answer, and every board from level 26
has at least two. Original six-letter stage quotas remain. Every stop from level
51 onward contains at least one six-letter board. Difficulty settles into repeated
challenge/recovery waves after the introductory ramp, rather than increasing word
obscurity or shrinking phone cells. Every stop's third board is a peak and its
fourth is at least two score points lower. The maximum upward transition is
10 points. These scores are estimates, not playtesting.

All layouts retain connected valid crossings, exact tile multiplicities, no
accidental word runs, wide 6–7-column grids, at most five rows, 35–65% density,
phone cell-size gates, and existing wheel-touch-target gates. All eligible
formable bonuses are recognized; they never block completion or reset repeat gaps.
The gap applies to exact accepted spellings across all countries and stops.
Singular and explicitly reviewed plural forms are distinct spellings, not aliases.
There are no alternate required spellings in this pack.

## Save migration and presentation handoff

The first 50 level IDs retain their order. The first five boards retain targets
and layouts; other opening boards were rebuilt to make the 75-level window feasible.
A continuing answer on the same level retains its word ID. Revisions 1–12 remain
immutable and available for exact historical save validation. Migration preserves
completed levels, partial solved credits, coins, paid hints, settings and lifetime
bonus rewards. Retired bonus spellings leave the board record without taking away
coins or lifetime rewards. Paid hint usage retains the previous compatibility
allowance, with room for a replacement board (maximum 1250).

Old groups map by ordinal position onto the first ten journey stops, with a full
mapping and API notes in [the integration contract](INTEGRATION_CONTRACT.md#revision-13-journey-content-handoff).
Earned old destination postcards keep their original IDs in durable
`legacyPostcardChapterIds`; the selector includes them as collected legacy cards.
Completing the old campaign unlocks level 51. Claude still owns map/screens/art;
this content change does not provide the 48 destination paintings or a redesigned UI.

## Validation

Verified on 2026-10-17:

- Root `npm run check` passes: TypeScript, ESLint, **172 Jest tests in 22 suites**,
  **all 240 engine solves**, and repository Prettier checks.
- Generator `uv run pytest` passes **84 tests**. Ruff lint, Ruff format checking
  and Mypy (`src`, 13 source files) pass.
- Deterministic rebuilding reproduces the exact reviewed draft and promoted pack.
  SHA-256: `179c3fea97f9ea1f3996f68d19b8380a5870109433fa71cdd3def801b6d77c42`.
- All 30 historical pack/recipe/review file hashes remain unchanged; all 1,233
  historical reference entry objects remain unchanged.
- Tests cover the 74/75-level boundary, variants and same-board duplicates,
  exclusions in all three answer roles, rare bonus eligibility, exact stop order,
  progression, stable continuing word IDs, revision-12 partial/completed saves,
  original postcards, paid hints, bonus rewards and SQLite restart.
- `npx expo export --platform ios` succeeds. This checks bundling, not native
  interaction, performance or visual accuracy.

Promotion uses the SHA-256 of the exact reviewed generated draft; merely rerunning
the generator does not authorize promotion. Rebuild command:

```sh
UV_CACHE_DIR=/tmp/asobana-uv-cache uv run --project puzzle-generator python scripts/rebuild-wide-content.py --revision 13 --promote-reviewed --output content/levels/discovery.v13.json
```

No native-device playtest or TestFlight upload is claimed.

## Every new approval and held candidate

| Spelling | Meaning              | Decision          | Source                                                                                 |
| -------- | -------------------- | ----------------- | -------------------------------------------------------------------------------------- |
| გზები    | roads                | required-eligible | [revision 92469046](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| მთები    | mountains            | required-eligible | [revision 89024782](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| ქვები    | stones               | required-eligible | [revision 92291035](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ხეები    | trees                | required-eligible | [revision 91649841](https://en.wiktionary.org/w/index.php?title=ხე&oldid=91649841)     |
| დღეები   | days                 | required-eligible | [revision 87846959](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| კარები   | doors                | required-eligible | [revision 91725839](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| ზღვები   | seas                 | required-eligible | [revision 85073355](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)   |
| ტბები    | lakes                | required-eligible | [revision 87995548](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ველები   | fields               | required-eligible | [revision 91740713](https://en.wiktionary.org/w/index.php?title=ველი&oldid=91740713)   |
| ტყეები   | forests              | required-eligible | [revision 87846042](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ეზოები   | yards                | required-eligible | [revision 84114761](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ბაღები   | gardens              | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ჭიქები   | glasses              | required-eligible | [revision 88091337](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)   |
| ჯამები   | bowls                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| დანები   | knives               | held-back         | Held: exact form/source not sufficiently inspected                                     |
| თასები   | cups                 | required-eligible | [revision 91740579](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| ქილები   | jars                 | required-eligible | [revision 86778055](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ვაზები   | vases                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ყუთები   | boxes                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ხელები   | hands                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ფეხები   | feet                 | required-eligible | [revision 84119832](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| თავები   | heads                | required-eligible | [revision 92422654](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)   |
| გულები   | hearts               | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ყურები   | ears                 | required-eligible | [revision 84120377](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| თმები    | hairs                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ძვლები   | bones                | required-eligible | [revision 91716436](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)  |
| ტუჩები   | lips                 | required-eligible | [revision 89949141](https://en.wiktionary.org/w/index.php?title=ტუჩი&oldid=89949141)   |
| ბიჭები   | boys                 | required-eligible | [revision 91649848](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| კაცები   | men                  | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ქალები   | women                | required-eligible | [revision 92983820](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| დედები   | mothers              | required-eligible | [revision 89905818](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| მამები   | fathers              | required-eligible | [revision 90045543](https://en.wiktionary.org/w/index.php?title=მამა&oldid=90045543)   |
| დები     | sisters              | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ძმები    | brothers             | required-eligible | [revision 84887585](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| კატები   | cats                 | required-eligible | [revision 92251014](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| ჩიტები   | birds                | required-eligible | [revision 84120718](https://en.wiktionary.org/w/index.php?title=ჩიტი&oldid=84120718)   |
| ბუები    | owls                 | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ღორები   | pigs                 | held-back         | Held: exact form/source not sufficiently inspected                                     |
| თხები    | goats                | required-eligible | [revision 91742427](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| მგლები   | wolves               | required-eligible | [revision 92197078](https://en.wiktionary.org/w/index.php?title=მგელი&oldid=92197078)  |
| ლომები   | lions                | required-eligible | [revision 88002876](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ჭიები    | worms                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ბუზები   | flies                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| კუები    | turtles              | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ფერები   | colors               | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ხმები    | sounds               | required-eligible | [revision 84121314](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| სუნები   | smells               | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ზომები   | sizes                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| წლები    | years                | required-eligible | [revision 91740614](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| თვეები   | months               | held-back         | Held: exact form/source not sufficiently inspected                                     |
| წამები   | seconds              | held-back         | Held: exact form/source not sufficiently inspected                                     |
| წუთები   | minutes              | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ასოები   | letters              | required-eligible | [revision 92479623](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატმები   | peaches              | required-eligible | [revision 92251681](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ბლები    | cherries             | required-eligible | [revision 88091312](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ღილები   | buttons              | required-eligible | [revision 84102515](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ძაფები   | threads              | required-eligible | [revision 85068648](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)   |
| ხალები   | moles                | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ლაქები   | stains               | required-eligible | [revision 84116459](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| კაბები   | dresses              | required-eligible | [revision 91727674](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)   |
| ქუდები   | hats                 | held-back         | Held: exact form/source not sufficiently inspected                                     |
| ადრე     | early; previously    | required-eligible | [revision 92437889](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| გვიან    | late                 | required-eligible | [revision 84114030](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| უკან     | back; backwards      | required-eligible | [revision 88641955](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| წინ      | ahead; forward       | required-eligible | [revision 89024908](https://en.wiktionary.org/w/index.php?title=წინ&oldid=89024908)    |
| ახლა     | now                  | required-eligible | [revision 84113244](https://en.wiktionary.org/w/index.php?title=ახლა&oldid=84113244)   |
| ზეგ      | day after tomorrow   | required-eligible | [revision 92271707](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)    |
| გუშინ    | yesterday            | required-eligible | [revision 89998722](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| ხვალ     | tomorrow             | required-eligible | [revision 89998732](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)   |
| დღეს     | today                | required-eligible | [revision 89998726](https://en.wiktionary.org/w/index.php?title=დღეს&oldid=89998726)   |
| მერე     | then; later          | required-eligible | [revision 91570731](https://en.wiktionary.org/w/index.php?title=მერე&oldid=91570731)   |
| მალე     | soon                 | required-eligible | [revision 91715624](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)   |
| ნელა     | slowly               | required-eligible | [revision 79065941](https://en.wiktionary.org/w/index.php?title=ნელა&oldid=79065941)   |
| ჩქარა    | quickly              | required-eligible | [revision 84120756](https://en.wiktionary.org/w/index.php?title=ჩქარა&oldid=84120756)  |
| ჩუმად    | quietly              | required-eligible | [revision 84120753](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)  |
| მარტო    | alone                | required-eligible | [revision 58441191](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)  |
| ერთად    | together             | required-eligible | [revision 81820773](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)  |
| ახლოს    | near                 | required-eligible | [revision 88372296](https://en.wiktionary.org/w/index.php?title=ახლოს&oldid=88372296)  |
| შორს     | far                  | required-eligible | [revision 81822402](https://en.wiktionary.org/w/index.php?title=შორს&oldid=81822402)   |
| კარგად   | well                 | required-eligible | [revision 84116038](https://en.wiktionary.org/w/index.php?title=კარგად&oldid=84116038) |
| ცუდად    | badly                | required-eligible | [revision 84120884](https://en.wiktionary.org/w/index.php?title=ცუდად&oldid=84120884)  |
| სულ      | completely; always   | required-eligible | [revision 75696201](https://en.wiktionary.org/w/index.php?title=სულ&oldid=75696201)    |
| ძალიან   | very                 | required-eligible | [revision 84120919](https://en.wiktionary.org/w/index.php?title=ძალიან&oldid=84120919) |
| უფრო     | more                 | required-eligible | [revision 92228078](https://en.wiktionary.org/w/index.php?title=უფრო&oldid=92228078)   |
| ზედა     | upper                | required-eligible | [revision 91661800](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)   |
| იქით     | over there           | required-eligible | [revision 78523650](https://en.wiktionary.org/w/index.php?title=იქით&oldid=78523650)   |
| ზემოთ    | above                | required-eligible | [revision 91661876](https://en.wiktionary.org/w/index.php?title=ზემოთ&oldid=91661876)  |
| ქვემოთ   | below                | required-eligible | [revision 91661877](https://en.wiktionary.org/w/index.php?title=ქვემოთ&oldid=91661877) |
| ზუსტად   | precisely            | required-eligible | [revision 84115384](https://en.wiktionary.org/w/index.php?title=ზუსტად&oldid=84115384) |
| ხშირად   | often                | required-eligible | [revision 84121369](https://en.wiktionary.org/w/index.php?title=ხშირად&oldid=84121369) |
| ისევ     | again                | required-eligible | [revision 84115907](https://en.wiktionary.org/w/index.php?title=ისევ&oldid=84115907)   |
| ჯერ      | first; yet           | required-eligible | [revision 87441534](https://en.wiktionary.org/w/index.php?title=ჯერ&oldid=87441534)    |
| უკვე     | already              | required-eligible | [revision 58546516](https://en.wiktionary.org/w/index.php?title=უკვე&oldid=58546516)   |
| ასე      | like this; thus      | required-eligible | [revision 86604839](https://en.wiktionary.org/w/index.php?title=ასე&oldid=86604839)    |
| ისე      | in that way          | required-eligible | [revision 93363979](https://en.wiktionary.org/w/index.php?title=ისე&oldid=93363979)    |
| შინ      | home; to one’s home  | required-eligible | [revision 88914984](https://en.wiktionary.org/w/index.php?title=შინ&oldid=88914984)    |
| შუა      | middle               | required-eligible | [checked 2026-10-17](https://www.ganmarteba.ge/word/შუა)                               |
| ფხა      | fishbone             | required-eligible | [revision 114605](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)        |
| ღრუ      | cavity; hollow space | required-eligible | [checked 2026-10-17](https://www.ganmarteba.ge/word/ღრუ)                               |
| არა      | no                   | held-back         | [checked 2026-10-17](https://en.wiktionary.org/wiki/არა)                               |
| შიგ      | inside               | required-eligible | [revision 88916923](https://en.wiktionary.org/w/index.php?title=შიგ&oldid=88916923)    |
| მაღლა    | up; upstairs         | required-eligible | [revision 84116783](https://en.wiktionary.org/w/index.php?title=მაღლა&oldid=84116783)  |
| დაბლა    | down; downstairs     | required-eligible | [revision 84114282](https://en.wiktionary.org/w/index.php?title=დაბლა&oldid=84114282)  |
| გარეთ    | outside              | required-eligible | [revision 88916809](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)  |
| შიგნით   | inside               | required-eligible | [revision 88916786](https://en.wiktionary.org/w/index.php?title=შიგნით&oldid=88916786) |
| მუდამ    | always               | required-eligible | [revision 84117353](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)  |
| უცებ     | suddenly             | required-eligible | [checked 2026-10-17](https://www.ganmarteba.ge/word/უცებ)                              |
| ოდნავ    | slightly             | required-eligible | [revision 89922587](https://en.wiktionary.org/w/index.php?title=ოდნავ&oldid=89922587)  |
| მეტად    | very; greatly        | required-eligible | [checked 2026-10-17](https://www.ganmarteba.ge/word/მეტად)                             |
| კიდევ    | again                | required-eligible | [revision 59753374](https://en.wiktionary.org/w/index.php?title=კიდევ&oldid=59753374)  |
| კვლავ    | again                | required-eligible | [revision 84116146](https://en.wiktionary.org/w/index.php?title=კვლავ&oldid=84116146)  |
| მაშინ    | then; at that time   | required-eligible | [revision 77224190](https://en.wiktionary.org/w/index.php?title=მაშინ&oldid=77224190)  |
| აქეთ     | over here            | required-eligible | [revision 78524348](https://en.wiktionary.org/w/index.php?title=აქეთ&oldid=78524348)   |
| აქვე     | right here           | required-eligible | [revision 92437907](https://en.wiktionary.org/w/index.php?title=აქვე&oldid=92437907)   |
| იქვე     | right there          | required-eligible | [revision 92437902](https://en.wiktionary.org/w/index.php?title=იქვე&oldid=92437902)   |
| ახლო     | close; near          | required-eligible | [revision 88065971](https://en.wiktionary.org/w/index.php?title=ახლო&oldid=88065971)   |
| გარე     | external; outer      | required-eligible | [revision 88917112](https://en.wiktionary.org/w/index.php?title=გარე&oldid=88917112)   |
| ზევით    | upwards              | required-eligible | [revision 91661887](https://en.wiktionary.org/w/index.php?title=ზევით&oldid=91661887)  |
| ქვევით   | downwards            | required-eligible | [revision 91661838](https://en.wiktionary.org/w/index.php?title=ქვევით&oldid=91661838) |

## Final required spellings: individual sense review

Every row below was checked against its explicit everyday approval and selected
sense. Sources are the specific reference entry unless a sense-specific source is
recorded in the allowlist. Each accepted variant is identical to its board answer.

| Word   | Reviewed everyday meaning                           | Levels          | Source                                                                      |
| ------ | --------------------------------------------------- | --------------- | --------------------------------------------------------------------------- |
| აბანო  | bathhouse                                           | 169             | [source](https://en.wiktionary.org/w/index.php?title=აბანო&oldid=85048371)  |
| აბი    | pill                                                | 71, 151, 233    | [source](https://en.wiktionary.org/w/index.php?title=აბი&oldid=91725774)    |
| აგური  | brick                                               | 159             | [source](https://en.wiktionary.org/w/index.php?title=აგური&oldid=92253475)  |
| ადრე   | early; previously                                   | 51, 134, 231    | [source](https://en.wiktionary.org/w/index.php?title=ადრე&oldid=92437889)   |
| ავაზა  | cheetah                                             | 38              | [source](https://en.wiktionary.org/w/index.php?title=ავაზა&oldid=89458016)  |
| ავეჯი  | furniture                                           | 191             | [source](https://en.wiktionary.org/w/index.php?title=ავეჯი&oldid=85068355)  |
| ავზი   | tank, sink                                          | 2, 87, 178      | [source](https://en.wiktionary.org/w/index.php?title=ავზი&oldid=84097153)   |
| აზრი   | thought, opinion                                    | 5, 97, 212      | [source](https://en.wiktionary.org/w/index.php?title=აზრი&oldid=84112364)   |
| ათასი  | thousand                                            | 25, 114, 190    | [source](https://en.wiktionary.org/w/index.php?title=ათასი&oldid=88613928)  |
| ათი    | ten (10)                                            | 3, 114, 190     | [source](https://en.wiktionary.org/w/index.php?title=ათი&oldid=92452509)    |
| აივანი | balcony                                             | 118             | [source](https://en.wiktionary.org/w/index.php?title=აივანი&oldid=84097190) |
| ალი    | blaze, flame, fire                                  | 4, 96, 176      | [source](https://en.wiktionary.org/w/index.php?title=ალი&oldid=91716422)    |
| ანდაზა | proverb                                             | 38              | [source](https://en.wiktionary.org/w/index.php?title=ანდაზა&oldid=71677575) |
| არაყი  | vodka                                               | 110, 207        | [source](https://en.wiktionary.org/w/index.php?title=არაყი&oldid=89996871)  |
| არმია  | army                                                | 33, 110, 193    | [source](https://en.wiktionary.org/w/index.php?title=არმია&oldid=84112960)  |
| არქივი | archive                                             | 49, 141, 228    | [source](https://en.wiktionary.org/w/index.php?title=არქივი&oldid=84097427) |
| არხი   | canal                                               | 5, 83, 163, 239 | [source](https://en.wiktionary.org/w/index.php?title=არხი&oldid=88616856)   |
| ასაკი  | age                                                 | 48, 183         | [source](https://en.wiktionary.org/w/index.php?title=ასაკი&oldid=92952562)  |
| ასე    | like this; thus                                     | 46, 130, 219    | [source](https://en.wiktionary.org/w/index.php?title=ასე&oldid=86604839)    |
| ასი    | hundred                                             | 48, 145, 225    | [source](https://en.wiktionary.org/w/index.php?title=ასი&oldid=91740577)    |
| ასლი   | copy                                                | 30, 105, 183    | [source](https://en.wiktionary.org/w/index.php?title=ასლი&oldid=87167560)   |
| ასო    | alphabet letter                                     | 30, 105, 209    | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ასოები | letters                                             | 46              | [source](https://en.wiktionary.org/w/index.php?title=ასო&oldid=92479623)    |
| ატამი  | peach                                               | 107, 186        | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატმები | peaches                                             | 173             | [source](https://en.wiktionary.org/w/index.php?title=ატამი&oldid=92251681)  |
| ატომი  | atom                                                | 9, 138          | [source](https://en.wiktionary.org/w/index.php?title=ატომი&oldid=84096833)  |
| აუზი   | pool                                                | 111, 212        | [source](https://en.wiktionary.org/w/index.php?title=აუზი&oldid=82454554)   |
| აქეთ   | over here                                           | 85              | [source](https://en.wiktionary.org/w/index.php?title=აქეთ&oldid=78524348)   |
| აქვე   | right here                                          | 70, 185         | [source](https://en.wiktionary.org/w/index.php?title=აქვე&oldid=92437907)   |
| აქლემი | camel                                               | 123             | [source](https://en.wiktionary.org/w/index.php?title=აქლემი&oldid=88002908) |
| აქცია  | action, promotion                                   | 77, 192         | [source](https://en.wiktionary.org/w/index.php?title=აქცია&oldid=84113153)  |
| აჩმა   | achma cheese pastry                                 | 33              | [source](https://en.wiktionary.org/w/index.php?title=აჩმა&oldid=91650112)   |
| ახლა   | now                                                 | 31, 112, 189    | [source](https://en.wiktionary.org/w/index.php?title=ახლა&oldid=84113244)   |
| ახლო   | close; near                                         | 89, 217         | [source](https://en.wiktionary.org/w/index.php?title=ახლო&oldid=88065971)   |
| ახლოს  | near                                                | 28, 105         | [source](https://en.wiktionary.org/w/index.php?title=ახლოს&oldid=88372296)  |
| აჯიკა  | adjika                                              | 186             | [source](https://en.wiktionary.org/w/index.php?title=აჯიკა&oldid=87880118)  |
| ბადე   | net                                                 | 11, 129, 227    | [source](https://en.wiktionary.org/w/index.php?title=ბადე&oldid=81813993)   |
| ბაზა   | base                                                | 56, 151, 227    | [source](https://en.wiktionary.org/w/index.php?title=ბაზა&oldid=84097535)   |
| ბაზარი | market                                              | 151             | [source](https://en.wiktionary.org/w/index.php?title=ბაზარი&oldid=84113284) |
| ბალი   | sweet cherry                                        | 88, 181         | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ბანაკი | camp                                                | 23, 104, 182    | [source](https://en.wiktionary.org/w/index.php?title=ბანაკი&oldid=85057693) |
| ბანკი  | bank                                                | 27, 111, 236    | [source](https://en.wiktionary.org/w/index.php?title=ბანკი&oldid=89927210)  |
| ბანქო  | playing cards                                       | 98              | [source](https://en.wiktionary.org/w/index.php?title=ბანქო&oldid=43980138)  |
| ბარგი  | luggage                                             | 43, 125         | [source](https://en.wiktionary.org/w/index.php?title=ბარგი&oldid=88295682)  |
| ბარდა  | pea                                                 | 137, 227        | [source](https://en.wiktionary.org/w/index.php?title=ბარდა&oldid=93548243)  |
| ბატი   | goose                                               | 7, 98, 173      | [source](https://en.wiktionary.org/w/index.php?title=ბატი&oldid=93569666)   |
| ბატონი | sir                                                 | 98              | [source](https://en.wiktionary.org/w/index.php?title=ბატონი&oldid=88429444) |
| ბაფთა  | bow knot                                            | 56              | [source](https://en.wiktionary.org/w/index.php?title=ბაფთა&oldid=84097616)  |
| ბაღი   | garden                                              | 97, 233         | [source](https://en.wiktionary.org/w/index.php?title=ბაღი&oldid=91650045)   |
| ბებია  | grandmother, grannie, granny                        | 88              | [source](https://en.wiktionary.org/w/index.php?title=ბებია&oldid=91806387)  |
| ბედი   | fate; luck                                          | 11, 129         | [source](https://en.wiktionary.org/w/index.php?title=ბედი&oldid=85068620)   |
| ბევრი  | many; much                                          | 54, 170         | [source](https://en.wiktionary.org/w/index.php?title=ბევრი&oldid=85879515)  |
| ბეკონი | bacon                                               | 226             | [source](https://en.wiktionary.org/w/index.php?title=ბეკონი&oldid=88672047) |
| ბერი   | monk                                                | 43, 122, 208    | [source](https://en.wiktionary.org/w/index.php?title=ბერი&oldid=84113444)   |
| ბეწვი  | fur, pile                                           | 204             | [source](https://en.wiktionary.org/w/index.php?title=ბეწვი&oldid=84097655)  |
| ბზარი  | crack                                               | 74, 151, 235    | [source](https://en.wiktionary.org/w/index.php?title=ბზარი&oldid=91725841)  |
| ბილეთი | ticket                                              | 188             | [source](https://en.wiktionary.org/w/index.php?title=ბილეთი&oldid=84097670) |
| ბინა   | apartment                                           | 23, 98, 182     | [source](https://en.wiktionary.org/w/index.php?title=ბინა&oldid=91650031)   |
| ბიცოლა | aunt                                                | 158             | [source](https://en.wiktionary.org/w/index.php?title=ბიცოლა&oldid=84523800) |
| ბიძა   | uncle                                               | 44, 173         | [source](https://en.wiktionary.org/w/index.php?title=ბიძა&oldid=85565433)   |
| ბიჭი   | boy                                                 | 208             | [source](https://en.wiktionary.org/w/index.php?title=ბიჭი&oldid=91649848)   |
| ბლები  | cherries                                            | 88, 165         | [source](https://en.wiktionary.org/w/index.php?title=ბალი&oldid=88091312)   |
| ბლოგი  | blog                                                | 99, 175         | [source](https://en.wiktionary.org/w/index.php?title=ბლოგი&oldid=91650359)  |
| ბლოკი  | building block                                      | 73, 158         | [source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი)                  |
| ბოთლი  | bottle                                              | 73, 194         | [source](https://en.wiktionary.org/w/index.php?title=ბოთლი&oldid=84113579)  |
| ბოლი   | smoke                                               | 21, 99, 175     | [source](https://en.wiktionary.org/w/index.php?title=ბოლი&oldid=92217924)   |
| ბოლო   | end                                                 | 21, 103, 196    | [source](https://en.wiktionary.org/w/index.php?title=ბოლო&oldid=89008377)   |
| ბოძი   | pole                                                | 99              | [source](https://en.wiktionary.org/w/index.php?title=ბოძი&oldid=92229621)   |
| ბრაზი  | anger                                               | 74, 160         | [source](https://en.wiktionary.org/w/index.php?title=ბრაზი&oldid=84113619)  |
| ბრალი  | fault                                               | 83, 181         | [source](https://en.wiktionary.org/w/index.php?title=ბრალი&oldid=84113627)  |
| ბრმა   | blind                                               | 160             | [source](https://en.wiktionary.org/w/index.php?title=ბრმა&oldid=75374581)   |
| ბურთი  | ball                                                | 218             | [source](https://en.wiktionary.org/w/index.php?title=ბურთი&oldid=85066960)  |
| ბურღი  | drill                                               | 136, 212        | [source](https://en.wiktionary.org/w/index.php?title=ბურღი&oldid=91650167)  |
| ბუშტი  | bubble, balloon                                     | 7               | [source](https://en.wiktionary.org/w/index.php?title=ბუშტი&oldid=84113716)  |
| გაზეთი | newspaper                                           | 41              | [source](https://en.wiktionary.org/w/index.php?title=გაზეთი&oldid=84097807) |
| გაზი   | gas                                                 | 2, 82, 179      | [source](https://en.wiktionary.org/w/index.php?title=გაზი&oldid=84113757)   |
| გალია  | cage                                                | 82, 192         | [source](https://en.wiktionary.org/w/index.php?title=გალია&oldid=85055792)  |
| განძი  | treasure                                            | 179             | [source](https://en.wiktionary.org/w/index.php?title=განძი&oldid=84113868)  |
| გარე   | external; outer                                     | 51, 155, 237    | [source](https://en.wiktionary.org/w/index.php?title=გარე&oldid=88917112)   |
| გარეთ  | outside                                             | 51, 155, 237    | [source](https://en.wiktionary.org/w/index.php?title=გარეთ&oldid=88916809)  |
| გარემო | environment                                         | 63, 157         | [source](https://en.wiktionary.org/w/index.php?title=გარემო&oldid=93000637) |
| გეგმა  | plan                                                | 155             | [source](https://en.wiktionary.org/w/index.php?title=გეგმა&oldid=84113957)  |
| გედი   | swan                                                | 55, 142         | [source](https://en.wiktionary.org/w/index.php?title=გედი&oldid=89933455)   |
| გემი   | ship                                                | 55, 142, 222    | [source](https://en.wiktionary.org/w/index.php?title=გემი&oldid=89946921)   |
| გემო   | palate, taste                                       | 63, 157         | [source](https://en.wiktionary.org/w/index.php?title=გემო&oldid=85068633)   |
| გვარი  | surname                                             | 141, 216        | [source](https://en.wiktionary.org/w/index.php?title=გვარი&oldid=93411301)  |
| გვიან  | late                                                | 35, 113, 200    | [source](https://en.wiktionary.org/w/index.php?title=გვიან&oldid=84114030)  |
| გზა    | way, path, road                                     | 2, 82, 179      | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გზები  | roads                                               | 122             | [source](https://en.wiktionary.org/w/index.php?title=გზა&oldid=92469046)    |
| გლუვი  | smooth                                              | 147             | [source](https://en.wiktionary.org/w/index.php?title=გლუვი&oldid=84088706)  |
| გმირი  | hero                                                | 55, 222         | [source](https://en.wiktionary.org/w/index.php?title=გმირი&oldid=82436808)  |
| გოლი   | goal in sport                                       | 12, 99, 175     | [source](https://en.wiktionary.org/w/index.php?title=გოლი&oldid=84103473)   |
| გორა   | hill                                                | 63, 157         | [source](https://en.wiktionary.org/w/index.php?title=გორა&oldid=86783102)   |
| გოჭი   | piglet                                              | 125             | [source](https://en.wiktionary.org/w/index.php?title=გოჭი&oldid=84114133)   |
| გრილი  | cool, breezy, chilly                                | 12, 119, 216    | [source](https://en.wiktionary.org/w/index.php?title=გრილი&oldid=84114167)  |
| გრძელი | long                                                | 119             | [source](https://en.wiktionary.org/w/index.php?title=გრძელი&oldid=88703966) |
| გუბე   | puddle                                              | 122             | [source](https://en.wiktionary.org/w/index.php?title=გუბე&oldid=93111740)   |
| გული   | heart                                               | 72, 147         | [source](https://en.wiktionary.org/w/index.php?title=გული&oldid=85033436)   |
| გუნდი  | choir; team                                         | 142             | [source](https://en.wiktionary.org/w/index.php?title=გუნდი&oldid=84103461)  |
| გუშინ  | yesterday                                           | 72, 147         | [source](https://en.wiktionary.org/w/index.php?title=გუშინ&oldid=89998722)  |
| დავა   | dispute                                             | 38, 113, 193    | [source](https://en.wiktionary.org/w/index.php?title=დავა&oldid=85046782)   |
| დათვი  | bear                                                | 80              | [source](https://en.wiktionary.org/w/index.php?title=დათვი&oldid=88296116)  |
| დანა   | knife                                               | 38, 113, 207    | [source](https://en.wiktionary.org/w/index.php?title=დანა&oldid=85055782)   |
| დარაჯი | guard                                               | 32              | [source](https://en.wiktionary.org/w/index.php?title=დარაჯი&oldid=85175652) |
| დაფა   | board, tablet                                       | 58, 137, 221    | [source](https://en.wiktionary.org/w/index.php?title=დაფა&oldid=85068634)   |
| დახლი  | counter                                             | 34, 115         | [source](https://en.wiktionary.org/w/index.php?title=დახლი&oldid=84114461)  |
| დედა   | mother                                              | 11, 86, 161     | [source](https://en.wiktionary.org/w/index.php?title=დედა&oldid=89905818)   |
| დევი   | giant                                               | 8, 86, 184      | [source](https://en.wiktionary.org/w/index.php?title=დევი&oldid=85046394)   |
| დეიდა  | maternal aunt                                       | 11, 86, 161     | [source](https://en.wiktionary.org/w/index.php?title=დეიდა&oldid=84114512)  |
| დენი   | electric current                                    | 42, 142         | [source](https://en.wiktionary.org/w/index.php?title=დენი&oldid=84524431)   |
| დიეტა  | diet                                                | 174             | [source](https://en.wiktionary.org/w/index.php?title=დიეტა&oldid=86068207)  |
| დილა   | morning                                             | 34, 115, 198    | [source](https://en.wiktionary.org/w/index.php?title=დილა&oldid=85067021)   |
| დისკი  | disc                                                | 75, 220         | [source](https://en.wiktionary.org/w/index.php?title=დისკი&oldid=84097021)  |
| დონე   | level                                               | 42              | [source](https://en.wiktionary.org/w/index.php?title=დონე&oldid=84098246)   |
| დოქი   | jug                                                 | 65, 149, 230    | [source](https://en.wiktionary.org/w/index.php?title=დოქი&oldid=84096633)   |
| დრამა  | drama                                               | 110, 193        | [source](https://en.wiktionary.org/w/index.php?title=დრამა&oldid=84114661)  |
| დრო    | time                                                | 65, 140, 232    | [source](https://en.wiktionary.org/w/index.php?title=დრო&oldid=87787761)    |
| დღე    | day                                                 | 51, 174         | [source](https://en.wiktionary.org/w/index.php?title=დღე&oldid=87846959)    |
| ეზო    | yard, courtyard                                     | 10, 116, 195    | [source](https://en.wiktionary.org/w/index.php?title=ეზო&oldid=84114761)    |
| ეკალი  | thorn                                               | 96              | [source](https://en.wiktionary.org/w/index.php?title=ეკალი&oldid=92197073)  |
| ელვა   | lightning                                           | 67, 180         | [source](https://en.wiktionary.org/w/index.php?title=ელვა&oldid=84883466)   |
| ენა    | language; tongue                                    | 20, 120, 210    | [source](https://en.wiktionary.org/w/index.php?title=ენა&oldid=84114872)    |
| ენოტი  | raccoon                                             | 131             | [source](https://en.wiktionary.org/w/index.php?title=ენოტი&oldid=84114895)  |
| ეპოქა  | epoch                                               | 85              | [source](https://en.wiktionary.org/w/index.php?title=ეპოქა&oldid=88473995)  |
| ერთად  | together                                            | 51, 134, 231    | [source](https://en.wiktionary.org/w/index.php?title=ერთად&oldid=81820773)  |
| ერთი   | one (1)                                             | 54, 134, 218    | [source](https://en.wiktionary.org/w/index.php?title=ერთი&oldid=90004560)   |
| ერი    | nation                                              | 54, 136, 213    | [source](https://en.wiktionary.org/w/index.php?title=ერი&oldid=84114938)    |
| ეტაპი  | stage                                               | 45, 131, 210    | [source](https://en.wiktionary.org/w/index.php?title=ეტაპი&oldid=84114976)  |
| ეტლი   | carriage                                            | 13, 90, 165     | [source](https://en.wiktionary.org/w/index.php?title=ეტლი&oldid=84096046)   |
| ექვსი  | six (6)                                             | 149             | [source](https://en.wiktionary.org/w/index.php?title=ექვსი&oldid=85767407)  |
| ექო    | echo                                                | 149, 230        | [source](https://en.wiktionary.org/w/index.php?title=ექო&oldid=84098422)    |
| ვადა   | term, deadline                                      | 38, 113, 193    | [source](https://en.wiktionary.org/w/index.php?title=ვადა&oldid=85041800)   |
| ვაზი   | vine, grapevine                                     | 2, 78, 178      | [source](https://en.wiktionary.org/w/index.php?title=ვაზი&oldid=92197071)   |
| ვალი   | debt                                                | 3, 162, 238     | [source](https://en.wiktionary.org/w/index.php?title=ვალი&oldid=92962192)   |
| ვაჟი   | son                                                 | 70              | [source](https://en.wiktionary.org/w/index.php?title=ვაჟი&oldid=91014127)   |
| ვარდი  | rose                                                | 87, 185         | [source](https://en.wiktionary.org/w/index.php?title=ვარდი&oldid=92921026)  |
| ვაშლი  | apple                                               | 109, 211        | [source](https://en.wiktionary.org/w/index.php?title=ვაშლი&oldid=84115080)  |
| ვიდეო  | video                                               | 42, 149, 230    | [source](https://en.wiktionary.org/w/index.php?title=ვიდეო&oldid=84115150)  |
| ვიზა   | visa                                                | 2, 78, 191      | [source](https://en.wiktionary.org/w/index.php?title=ვიზა&oldid=84098512)   |
| ვილა   | villa                                               | 3, 78, 162, 238 | [source](https://en.wiktionary.org/w/index.php?title=ვილა&oldid=84098518)   |
| ვირი   | donkey, ass                                         | 49, 141, 216    | [source](https://en.wiktionary.org/w/index.php?title=ვირი&oldid=84115191)   |
| ზარალი | loss                                                | 82              | [source](https://en.wiktionary.org/w/index.php?title=ზარალი&oldid=85068744) |
| ზარი   | bell                                                | 5, 82, 160, 235 | [source](https://en.wiktionary.org/w/index.php?title=ზარი&oldid=91725840)   |
| ზებრა  | zebra                                               | 74, 227         | [source](https://en.wiktionary.org/w/index.php?title=ზებრა&oldid=88499986)  |
| ზეგ    | day after tomorrow                                  | 41, 122, 222    | [source](https://en.wiktionary.org/w/index.php?title=ზეგ&oldid=92271707)    |
| ზედა   | upper                                               | 227             | [source](https://en.wiktionary.org/w/index.php?title=ზედა&oldid=91661800)   |
| ზევით  | upwards                                             | 116             | [source](https://en.wiktionary.org/w/index.php?title=ზევით&oldid=91661887)  |
| ზეთი   | oil                                                 | 41, 116, 191    | [source](https://en.wiktionary.org/w/index.php?title=ზეთი&oldid=85041797)   |
| ზეიმი  | celebration                                         | 222             | [source](https://en.wiktionary.org/w/index.php?title=ზეიმი&oldid=88415197)  |
| ზემოთ  | above                                               | 92, 195         | [source](https://en.wiktionary.org/w/index.php?title=ზემოთ&oldid=91661876)  |
| ზიანი  | damage                                              | 24, 102, 179    | [source](https://en.wiktionary.org/w/index.php?title=ზიანი&oldid=84098585)  |
| ზომა   | measure, quantity, size                             | 10, 92          | [source](https://en.wiktionary.org/w/index.php?title=ზომა&oldid=84098591)   |
| ზონა   | zone                                                | 30              | [source](https://en.wiktionary.org/w/index.php?title=ზონა&oldid=88168219)   |
| ზურგი  | back                                                | 122             | [source](https://en.wiktionary.org/w/index.php?title=ზურგი&oldid=85066897)  |
| ზღარბი | hedgehog                                            | 97, 212         | [source](https://en.wiktionary.org/w/index.php?title=ზღარბი&oldid=88091278) |
| ზღვა   | sea                                                 | 87, 178         | [source](https://en.wiktionary.org/w/index.php?title=ზღვა&oldid=85073355)   |
| ზღვარი | boundary                                            | 87, 178         | [source](https://en.wiktionary.org/w/index.php?title=ზღვარი&oldid=92436789) |
| თაგვი  | mouse                                               | 80              | [source](https://en.wiktionary.org/w/index.php?title=თაგვი&oldid=84668681)  |
| თავი   | head                                                | 3, 80, 167      | [source](https://en.wiktionary.org/w/index.php?title=თავი&oldid=92422654)   |
| თათი   | paw                                                 | 134             | [source](https://en.wiktionary.org/w/index.php?title=თათი&oldid=84115445)   |
| თანხა  | amount of money                                     | 169             | [source](https://en.wiktionary.org/w/index.php?title=თანხა&oldid=84098653)  |
| თაობა  | generation                                          | 169             | [source](https://en.wiktionary.org/w/index.php?title=თაობა&oldid=85074749)  |
| თარო   | board, shelf                                        | 85, 167         | [source](https://en.wiktionary.org/w/index.php?title=თარო&oldid=86397556)   |
| თასი   | bowl, chalice                                       | 25, 100, 190    | [source](https://en.wiktionary.org/w/index.php?title=თასი&oldid=91740579)   |
| თასმა  | braid                                               | 25              | [source](https://en.wiktionary.org/w/index.php?title=თასმა&oldid=84098662)  |
| თაფლი  | honey                                               | 100             | [source](https://en.wiktionary.org/w/index.php?title=თაფლი&oldid=85066913)  |
| თბილი  | warm                                                | 68, 188         | [source](https://en.wiktionary.org/w/index.php?title=თბილი&oldid=84115519)  |
| თევზი  | fish                                                | 41, 116, 191    | [source](https://en.wiktionary.org/w/index.php?title=თევზი&oldid=84115535)  |
| თეთრი  | white                                               | 134             | [source](https://en.wiktionary.org/w/index.php?title=თეთრი&oldid=87845964)  |
| თემა   | theme; essay                                        | 1, 155, 231     | [source](https://en.wiktionary.org/w/index.php?title=თემა&oldid=75563170)   |
| თვალი  | eye                                                 | 3, 217          | [source](https://en.wiktionary.org/w/index.php?title=თვალი&oldid=91725811)  |
| თვე    | month                                               | 41, 195         | [source](https://en.wiktionary.org/w/index.php?title=თვე&oldid=84115591)    |
| თმა    | hair                                                | 1, 76, 152, 237 | [source](https://en.wiktionary.org/w/index.php?title=თმა&oldid=84115666)    |
| თოვლი  | snow                                                | 73, 217         | [source](https://en.wiktionary.org/w/index.php?title=თოვლი&oldid=87846971)  |
| თოკი   | rope                                                | 73, 194         | [source](https://en.wiktionary.org/w/index.php?title=თოკი&oldid=92230665)   |
| თოლია  | seagull                                             | 117, 217        | [source](https://en.wiktionary.org/w/index.php?title=თოლია&oldid=92228044)  |
| თოფი   | gun                                                 | 196             | [source](https://en.wiktionary.org/w/index.php?title=თოფი&oldid=85099224)   |
| თხა    | goat                                                | 14, 89, 169     | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| თხები  | goats                                               | 54, 188         | [source](https://en.wiktionary.org/w/index.php?title=თხა&oldid=91742427)    |
| თხილი  | hazelnut                                            | 89, 188         | [source](https://en.wiktionary.org/w/index.php?title=თხილი&oldid=84115733)  |
| იატაკი | floor                                               | 48              | [source](https://en.wiktionary.org/w/index.php?title=იატაკი&oldid=84115760) |
| იაფი   | cheap                                               | 17, 106, 238    | [source](https://en.wiktionary.org/w/index.php?title=იაფი&oldid=84090230)   |
| იახტა  | yacht                                               | 31, 112, 189    | [source](https://en.wiktionary.org/w/index.php?title=იახტა&oldid=84115764)  |
| იგავი  | fable                                               | 141, 216        | [source](https://en.wiktionary.org/w/index.php?title=იგავი&oldid=84115767)  |
| იდეა   | idea                                                | 11, 86, 161     | [source](https://en.wiktionary.org/w/index.php?title=იდეა&oldid=91759534)   |
| იმედი  | hope                                                | 55, 143         | [source](https://en.wiktionary.org/w/index.php?title=იმედი&oldid=88672770)  |
| იოგა   | yoga                                                | 36, 117, 234    | [source](https://en.wiktionary.org/w/index.php?title=იოგა&oldid=84098869)   |
| იოდი   | iodine                                              | 144, 220        | [source](https://en.wiktionary.org/w/index.php?title=იოდი&oldid=84098870)   |
| იოლი   | easy                                                | 12, 95, 205     | [source](https://en.wiktionary.org/w/index.php?title=იოლი&oldid=92502939)   |
| ირემი  | deer                                                | 55, 143, 222    | [source](https://en.wiktionary.org/w/index.php?title=ირემი&oldid=87787166)  |
| ისარი  | arrow                                               | 61, 145         | [source](https://en.wiktionary.org/w/index.php?title=ისარი&oldid=84115906)  |
| ისე    | in that way                                         | 53, 130, 210    | [source](https://en.wiktionary.org/w/index.php?title=ისე&oldid=93363979)    |
| ისევ   | again                                               | 47, 126, 213    | [source](https://en.wiktionary.org/w/index.php?title=ისევ&oldid=84115907)   |
| იქვე   | right there                                         | 70, 185         | [source](https://en.wiktionary.org/w/index.php?title=იქვე&oldid=92437902)   |
| იქით   | over there                                          | 76, 152         | [source](https://en.wiktionary.org/w/index.php?title=იქით&oldid=78523650)   |
| იღბალი | luck                                                | 44              | [source](https://en.wiktionary.org/w/index.php?title=იღბალი&oldid=92945167) |
| იხვი   | duck                                                | 75, 177         | [source](https://en.wiktionary.org/w/index.php?title=იხვი&oldid=93558662)   |
| იჯარა  | lease                                               | 32, 107, 202    | [source](https://en.wiktionary.org/w/index.php?title=იჯარა&oldid=84115957)  |
| კაბა   | dress, frock                                        | 23, 104, 182    | [source](https://en.wiktionary.org/w/index.php?title=კაბა&oldid=91727674)   |
| კაბინა | cabin                                               | 23, 104         | [source](https://en.wiktionary.org/w/index.php?title=კაბინა&oldid=84098910) |
| კალია  | grasshopper                                         | 77, 176         | [source](https://en.wiktionary.org/w/index.php?title=კალია&oldid=84115996)  |
| კანი   | skin                                                | 23, 104, 182    | [source](https://en.wiktionary.org/w/index.php?title=კანი&oldid=91727807)   |
| კარგი  | good                                                | 43, 159, 234    | [source](https://en.wiktionary.org/w/index.php?title=კარგი&oldid=88207585)  |
| კარები | doors                                               | 43              | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარი   | door                                                | 61, 150, 234    | [source](https://en.wiktionary.org/w/index.php?title=კარი&oldid=91725839)   |
| კარტი  | card                                                | 159             | [source](https://en.wiktionary.org/w/index.php?title=კარტი&oldid=84099032)  |
| კასრი  | barrel                                              | 61, 140         | [source](https://en.wiktionary.org/w/index.php?title=კასრი&oldid=84099037)  |
| კატა   | cat                                                 | 48, 186         | [source](https://en.wiktionary.org/w/index.php?title=კატა&oldid=92251014)   |
| კაფე   | cafe                                                | 59              | [source](https://en.wiktionary.org/w/index.php?title=კაფე&oldid=84116059)   |
| კაცი   | man                                                 | 77, 158         | [source](https://en.wiktionary.org/w/index.php?title=კაცი&oldid=91715252)   |
| კბილი  | tooth                                               | 148             | [source](https://en.wiktionary.org/w/index.php?title=კბილი&oldid=87882636)  |
| კევი   | chewing gum                                         | 8, 91, 166      | [source](https://en.wiktionary.org/w/index.php?title=კევი&oldid=88239621)   |
| კენჭი  | pebble                                              | 226             | [source](https://en.wiktionary.org/w/index.php?title=კენჭი&oldid=84099075)  |
| კერძი  | dish                                                | 37, 213         | [source](https://en.wiktionary.org/w/index.php?title=კერძი&oldid=84096848)  |
| კეტი   | stick                                               | 13, 90, 165     | [source](https://en.wiktionary.org/w/index.php?title=კეტი&oldid=84990142)   |
| კეფა   | back of the head                                    | 59              | [source](https://en.wiktionary.org/w/index.php?title=კეფა&oldid=84116110)   |
| კვალი  | trail, clue                                         | 78, 162         | [source](https://en.wiktionary.org/w/index.php?title=კვალი&oldid=91716430)  |
| კვირა  | week                                                | 178             | [source](https://en.wiktionary.org/w/index.php?title=კვირა&oldid=92966436)  |
| კვლავ  | again                                               | 78              | [source](https://en.wiktionary.org/w/index.php?title=კვლავ&oldid=84116146)  |
| კიბე   | ladder, stair, staircase, stairway                  | 43, 148, 226    | [source](https://en.wiktionary.org/w/index.php?title=კიბე&oldid=84099111)   |
| კიდე   | edge                                                | 13, 96, 184     | [source](https://en.wiktionary.org/w/index.php?title=კიდე&oldid=84096974)   |
| კიდევ  | again                                               | 8, 86, 184      | [source](https://en.wiktionary.org/w/index.php?title=კიდევ&oldid=59753374)  |
| კივი   | kiwi fruit; kiwi bird                               | 75, 166         | [source](https://en.wiktionary.org/w/index.php?title=კივი&oldid=85514534)   |
| კილო   | kilo                                                | 73, 158         | [source](https://en.wiktionary.org/w/index.php?title=კილო&oldid=87915475)   |
| კინო   | cinema; movie                                       | 60              | [source](https://en.wiktionary.org/w/index.php?title=კინო&oldid=88623887)   |
| კისერი | neck                                                | 37, 145         | [source](https://en.wiktionary.org/w/index.php?title=კისერი&oldid=89949129) |
| კიტრი  | cucumber                                            | 64, 150         | [source](https://en.wiktionary.org/w/index.php?title=კიტრი&oldid=84116186)  |
| კლასი  | class                                               | 183             | [source](https://en.wiktionary.org/w/index.php?title=კლასი&oldid=84099137)  |
| კლდე   | cliff, crag, scar, rock                             | 13, 96, 184     | [source](https://en.wiktionary.org/w/index.php?title=კლდე&oldid=84116197)   |
| კლიტე  | lock                                                | 13, 90, 165     | [source](https://en.wiktionary.org/w/index.php?title=კლიტე&oldid=84116206)  |
| კლუბი  | club                                                | 27, 194         | [source](https://en.wiktionary.org/w/index.php?title=კლუბი&oldid=84116209)  |
| კოალა  | koala                                               | 183             | [source](https://en.wiktionary.org/w/index.php?title=კოალა&oldid=81815860)  |
| კობრა  | cobra                                               | 26, 234         | [source](https://en.wiktionary.org/w/index.php?title=კობრა&oldid=84099162)  |
| კოდი   | code                                                | 220             | [source](https://en.wiktionary.org/w/index.php?title=კოდი&oldid=87918121)   |
| კომში  | quince                                              | 60, 209         | [source](https://en.wiktionary.org/w/index.php?title=კომში&oldid=91144219)  |
| კოჭი   | ankle                                               | 26, 226         | [source](https://en.wiktionary.org/w/index.php?title=კოჭი&oldid=71847132)   |
| კრემი  | cream                                               | 64              | [source](https://en.wiktionary.org/w/index.php?title=კრემი&oldid=84116334)  |
| კუბი   | cube                                                | 27, 111, 194    | [source](https://en.wiktionary.org/w/index.php?title=კუბი&oldid=84116353)   |
| კუდი   | tail                                                | 8               | [source](https://en.wiktionary.org/w/index.php?title=კუდი&oldid=89052503)   |
| ლაიმი  | lime (fruit)                                        | 17, 152         | [source](https://en.wiktionary.org/w/index.php?title=ლაიმი&oldid=87908800)  |
| ლარი   | lari (Georgian currency)                            | 22, 139, 225    | [source](https://en.wiktionary.org/w/index.php?title=ლარი&oldid=84116449)   |
| ლაქა   | spot, stain                                         | 77, 192         | [source](https://en.wiktionary.org/w/index.php?title=ლაქა&oldid=84116459)   |
| ლეიბი  | mattress                                            | 68, 148, 233    | [source](https://en.wiktionary.org/w/index.php?title=ლეიბი&oldid=84116472)  |
| ლეკვი  | puppy                                               | 90, 166         | [source](https://en.wiktionary.org/w/index.php?title=ლეკვი&oldid=84099464)  |
| ლექსი  | poem                                                | 40, 123         | [source](https://en.wiktionary.org/w/index.php?title=ლექსი&oldid=84116492)  |
| ლიმონი | lemon                                               | 205             | [source](https://en.wiktionary.org/w/index.php?title=ლიმონი&oldid=84116519) |
| ლინზა  | lens                                                | 30, 108         | [source](https://en.wiktionary.org/w/index.php?title=ლინზა&oldid=84099511)  |
| ლიფტი  | elevator                                            | 106, 238        | [source](https://en.wiktionary.org/w/index.php?title=ლიფტი&oldid=84116536)  |
| ლობიო  | bean                                                | 21, 103, 196    | [source](https://en.wiktionary.org/w/index.php?title=ლობიო&oldid=85078465)  |
| ლომები | lions                                               | 103             | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლომი   | lion                                                | 28, 103, 205    | [source](https://en.wiktionary.org/w/index.php?title=ლომი&oldid=88002876)   |
| ლოყა   | cheek                                               | 139             | [source](https://en.wiktionary.org/w/index.php?title=ლოყა&oldid=81816175)   |
| ლუდი   | beer                                                | 40, 115         | [source](https://en.wiktionary.org/w/index.php?title=ლუდი&oldid=86388080)   |
| ლურჯი  | blue                                                | 22, 124, 239    | [source](https://en.wiktionary.org/w/index.php?title=ლურჯი&oldid=93366212)  |
| მადა   | appetite, stomach                                   | 32, 110, 193    | [source](https://en.wiktionary.org/w/index.php?title=მადა&oldid=84099577)   |
| მაისი  | May                                                 | 19, 128, 215    | [source](https://en.wiktionary.org/w/index.php?title=მაისი&oldid=89856937)  |
| მალე   | soon                                                | 20, 101, 187    | [source](https://en.wiktionary.org/w/index.php?title=მალე&oldid=91715624)   |
| მანგო  | mango                                               | 36              | [source](https://en.wiktionary.org/w/index.php?title=მანგო&oldid=93435019)  |
| მარტო  | alone                                               | 63, 138         | [source](https://en.wiktionary.org/w/index.php?title=მარტო&oldid=58441191)  |
| მაშინ  | then; at that time                                  | 60, 154, 240    | [source](https://en.wiktionary.org/w/index.php?title=მაშინ&oldid=77224190)  |
| მაწონი | matsoni yogurt                                      | 18, 93          | [source](https://en.wiktionary.org/w/index.php?title=მაწონი&oldid=92247051) |
| მახე   | trap                                                | 1, 101, 187     | [source](https://en.wiktionary.org/w/index.php?title=მახე&oldid=84116797)   |
| მაჯა   | wrist                                               | 32, 107, 186    | [source](https://en.wiktionary.org/w/index.php?title=მაჯა&oldid=92228046)   |
| მედალი | medal                                               | 101             | [source](https://en.wiktionary.org/w/index.php?title=მედალი&oldid=84099774) |
| მედია  | media                                               | 129             | [source](https://en.wiktionary.org/w/index.php?title=მედია&oldid=84116843)  |
| მელა   | fox                                                 | 20, 101, 187    | [source](https://en.wiktionary.org/w/index.php?title=მელა&oldid=87951716)   |
| მელანი | ink                                                 | 20, 108         | [source](https://en.wiktionary.org/w/index.php?title=მელანი&oldid=84116862) |
| მენიუ  | menu                                                | 142, 219        | [source](https://en.wiktionary.org/w/index.php?title=მენიუ&oldid=84099834)  |
| მერე   | then; later                                         | 62, 156         | [source](https://en.wiktionary.org/w/index.php?title=მერე&oldid=91570731)   |
| მეტად  | very; greatly                                       | 174             | [source](https://www.ganmarteba.ge/word/მეტად)                              |
| მეტალი | metal                                               | 187             | [source](https://en.wiktionary.org/w/index.php?title=მეტალი&oldid=84103455) |
| მეტრი  | metre                                               | 64, 143, 223    | [source](https://en.wiktionary.org/w/index.php?title=მეტრი&oldid=44988044)  |
| მეტრო  | metro                                               | 63, 223         | [source](https://en.wiktionary.org/w/index.php?title=მეტრო&oldid=84116930)  |
| მეფე   | king                                                | 62, 156         | [source](https://en.wiktionary.org/w/index.php?title=მეფე&oldid=87380135)   |
| მზა    | ready                                               | 24, 108, 221    | [source](https://en.wiktionary.org/w/index.php?title=მზა&oldid=84088875)    |
| მზე    | Sun                                                 | 10, 92, 195     | [source](https://en.wiktionary.org/w/index.php?title=მზე&oldid=87988791)    |
| მზიანი | sunny                                               | 24, 102         | [source](https://en.wiktionary.org/w/index.php?title=მზიანი&oldid=85891151) |
| მთა    | mountain, hill                                      | 1, 76, 155, 237 | [source](https://en.wiktionary.org/w/index.php?title=მთა&oldid=89024782)    |
| მითი   | myth                                                | 152             | [source](https://en.wiktionary.org/w/index.php?title=მითი&oldid=84099948)   |
| მილი   | tube; mile                                          | 17, 128, 205    | [source](https://en.wiktionary.org/w/index.php?title=მილი&oldid=85057595)   |
| მინა   | glass (material)                                    | 24, 102, 219    | [source](https://en.wiktionary.org/w/index.php?title=მინა&oldid=87787812)   |
| მისია  | mission                                             | 19, 128, 215    | [source](https://en.wiktionary.org/w/index.php?title=მისია&oldid=84117075)  |
| მიწა   | earth, soil                                         | 18, 109, 200    | [source](https://en.wiktionary.org/w/index.php?title=მიწა&oldid=84117092)   |
| მოდა   | fashion                                             | 93, 232         | [source](https://en.wiktionary.org/w/index.php?title=მოდა&oldid=84100038)   |
| მსხალი | pear                                                | 28              | [source](https://en.wiktionary.org/w/index.php?title=მსხალი&oldid=84117341) |
| მტერი  | enemy                                               | 62, 143, 223    | [source](https://en.wiktionary.org/w/index.php?title=მტერი&oldid=84117343)  |
| მუდამ  | always                                              | 39              | [source](https://en.wiktionary.org/w/index.php?title=მუდამ&oldid=84117353)  |
| მუქი   | dark                                                | 153             | [source](https://en.wiktionary.org/w/index.php?title=მუქი&oldid=91184767)   |
| მუშა   | worker                                              | 66, 154         | [source](https://en.wiktionary.org/w/index.php?title=მუშა&oldid=85055930)   |
| მუხა   | oak                                                 | 66, 164, 240    | [source](https://en.wiktionary.org/w/index.php?title=მუხა&oldid=92422641)   |
| მუხლი  | knee                                                | 115, 199        | [source](https://en.wiktionary.org/w/index.php?title=მუხლი&oldid=87900783)  |
| მხარე  | side; region                                        | 79, 157, 237    | [source](https://en.wiktionary.org/w/index.php?title=მხარე&oldid=91715975)  |
| მხარი  | shoulder                                            | 66, 160         | [source](https://en.wiktionary.org/w/index.php?title=მხარი&oldid=88428524)  |
| მხეცი  | beast                                               | 94, 172         | [source](https://en.wiktionary.org/w/index.php?title=მხეცი&oldid=84117480)  |
| ნაგავი | rubbish                                             | 113             | [source](https://en.wiktionary.org/w/index.php?title=ნაგავი&oldid=84100259) |
| ნავი   | boat                                                | 35, 118, 200    | [source](https://en.wiktionary.org/w/index.php?title=ნავი&oldid=92972261)   |
| ნაზი   | gentle; tender                                      | 24, 102, 179    | [source](https://en.wiktionary.org/w/index.php?title=ნაზი&oldid=84117515)   |
| ნაკლი  | defect                                              | 27, 176         | [source](https://en.wiktionary.org/w/index.php?title=ნაკლი&oldid=84100283)  |
| ნარდი  | backgammon                                          | 58, 207         | [source](https://en.wiktionary.org/w/index.php?title=ნარდი&oldid=91715601)  |
| ნაცარი | ash                                                 | 29              | [source](https://en.wiktionary.org/w/index.php?title=ნაცარი&oldid=92749231) |
| ნაძვი  | spruce                                              | 130             | [source](https://en.wiktionary.org/w/index.php?title=ნაძვი&oldid=84117591)  |
| ნაჭერი | piece, cloth                                        | 120             | [source](https://en.wiktionary.org/w/index.php?title=ნაჭერი&oldid=86204132) |
| ნელა   | slowly                                              | 20, 108, 201    | [source](https://en.wiktionary.org/w/index.php?title=ნელა&oldid=79065941)   |
| ნელი   | slow                                                | 16, 108, 201    | [source](https://en.wiktionary.org/w/index.php?title=ნელი&oldid=91740616)   |
| ნემსი  | needle                                              | 219             | [source](https://en.wiktionary.org/w/index.php?title=ნემსი&oldid=84794883)  |
| ნერვი  | nerve                                               | 15, 204         | [source](https://en.wiktionary.org/w/index.php?title=ნერვი&oldid=84100376)  |
| ნესვი  | melon                                               | 47, 130         | [source](https://en.wiktionary.org/w/index.php?title=ნესვი&oldid=92228059)  |
| ნიორი  | garlic                                              | 69, 144, 229    | [source](https://en.wiktionary.org/w/index.php?title=ნიორი&oldid=92197082)  |
| ნისლი  | fog, mist                                           | 205             | [source](https://en.wiktionary.org/w/index.php?title=ნისლი&oldid=93465462)  |
| ნული   | zero                                                | 72, 147         | [source](https://en.wiktionary.org/w/index.php?title=ნული&oldid=91637299)   |
| ნუში   | almond                                              | 72, 154, 240    | [source](https://en.wiktionary.org/w/index.php?title=ნუში&oldid=92234316)   |
| ობი    | mould                                               | 26, 125, 226    | [source](https://en.wiktionary.org/w/index.php?title=ობი&oldid=71360624)    |
| ობოლი  | orphan                                              | 21, 103, 196    | [source](https://en.wiktionary.org/w/index.php?title=ობოლი&oldid=92228058)  |
| ოთახი  | room, chamber                                       | 14, 89, 167     | [source](https://en.wiktionary.org/w/index.php?title=ოთახი&oldid=84117752)  |
| ოთხი   | four (4)                                            | 14, 89, 167     | [source](https://en.wiktionary.org/w/index.php?title=ოთხი&oldid=87444782)   |
| ომი    | war                                                 | 18, 93, 168     | [source](https://en.wiktionary.org/w/index.php?title=ომი&oldid=87916537)    |
| ოპერა  | opera                                               | 85              | [source](https://en.wiktionary.org/w/index.php?title=ოპერა&oldid=88755212)  |
| ორი    | two (2)                                             | 69, 144, 235    | [source](https://en.wiktionary.org/w/index.php?title=ორი&oldid=83446489)    |
| ორმო   | pit                                                 | 168             | [source](https://en.wiktionary.org/w/index.php?title=ორმო&oldid=92228047)   |
| ორმოცი | forty                                               | 168             | [source](https://en.wiktionary.org/w/index.php?title=ორმოცი&oldid=90075083) |
| ოფისი  | office                                              | 95, 220         | [source](https://en.wiktionary.org/w/index.php?title=ოფისი&oldid=84100517)  |
| ოფლი   | sweat                                               | 95, 196         | [source](https://en.wiktionary.org/w/index.php?title=ოფლი&oldid=92546801)   |
| ოცი    | twenty (20)                                         | 9, 84, 168      | [source](https://en.wiktionary.org/w/index.php?title=ოცი&oldid=90075102)    |
| პარკი  | plastic bag                                         | 61, 150         | [source](https://en.wiktionary.org/w/index.php?title=პარკი&oldid=88106258)  |
| პაროლი | password                                            | 225             | [source](https://en.wiktionary.org/w/index.php?title=პაროლი&oldid=84100601) |
| პენსია | pension                                             | 210             | [source](https://en.wiktionary.org/w/index.php?title=პენსია&oldid=88166867) |
| პიკი   | peak                                                | 61, 150         | [source](https://en.wiktionary.org/w/index.php?title=პიკი&oldid=84100699)   |
| პირი   | mouth                                               | 69, 150, 229    | [source](https://en.wiktionary.org/w/index.php?title=პირი&oldid=89949118)   |
| პიტნა  | mint, spearmint                                     | 131             | [source](https://en.wiktionary.org/w/index.php?title=პიტნა&oldid=88172203)  |
| პიცა   | pizza                                               | 214             | [source](https://en.wiktionary.org/w/index.php?title=პიცა&oldid=87380728)   |
| პლედი  | plaid blanket                                       | 96              | [source](https://en.wiktionary.org/w/index.php?title=პლედი&oldid=84118089)  |
| პლუსი  | plus                                                | 57, 132, 214    | [source](https://en.wiktionary.org/w/index.php?title=პლუსი&oldid=84100760)  |
| პოემა  | poem                                                | 10, 92          | [source](https://en.wiktionary.org/w/index.php?title=პოემა&oldid=84100766)  |
| პოეტი  | poet                                                | 53, 224         | [source](https://en.wiktionary.org/w/index.php?title=პოეტი&oldid=88968690)  |
| პოზა   | pose                                                | 10, 92          | [source](https://en.wiktionary.org/w/index.php?title=პოზა&oldid=84100768)   |
| პონი   | pony                                                | 69, 229         | [source](https://en.wiktionary.org/w/index.php?title=პონი&oldid=84118135)   |
| პორტი  | port                                                | 52, 133, 229    | [source](https://en.wiktionary.org/w/index.php?title=პორტი&oldid=84100813)  |
| პოსტი  | post                                                | 53, 133         | [source](https://en.wiktionary.org/w/index.php?title=პოსტი&oldid=84103526)  |
| პრიზი  | prize                                               | 69              | [source](https://en.wiktionary.org/w/index.php?title=პრიზი&oldid=84100853)  |
| პულსი  | pulse                                               | 57, 132, 214    | [source](https://en.wiktionary.org/w/index.php?title=პულსი&oldid=84100920)  |
| პური   | bread                                               | 52              | [source](https://en.wiktionary.org/w/index.php?title=პური&oldid=85067902)   |
| რადიო  | radio                                               | 65, 140, 232    | [source](https://en.wiktionary.org/w/index.php?title=რადიო&oldid=88816698)  |
| რბილი  | soft                                                | 83, 208         | [source](https://en.wiktionary.org/w/index.php?title=რბილი&oldid=84090862)  |
| რეისი  | scheduled journey                                   | 37, 145         | [source](https://en.wiktionary.org/w/index.php?title=რეისი&oldid=84118303)  |
| რეპი   | rap music                                           | 224             | [source](https://en.wiktionary.org/w/index.php?title=რეპი&oldid=84096821)   |
| რვა    | eight (8)                                           | 87, 185         | [source](https://en.wiktionary.org/w/index.php?title=რვა&oldid=91742434)    |
| რიგი   | row; queue                                          | 12, 119, 216    | [source](https://en.wiktionary.org/w/index.php?title=რიგი&oldid=88896469)   |
| რიტმი  | beat, cadence, rhythm                               | 64, 143         | [source](https://en.wiktionary.org/w/index.php?title=რიტმი&oldid=84101078)  |
| რკინა  | iron (metal)                                        | 182             | [source](https://en.wiktionary.org/w/index.php?title=რკინა&oldid=84118339)  |
| როკი   | rock music                                          | 26, 140, 234    | [source](https://en.wiktionary.org/w/index.php?title=როკი&oldid=91546711)   |
| როლი   | role                                                | 12, 139, 225    | [source](https://en.wiktionary.org/w/index.php?title=როლი&oldid=84101100)   |
| რუკა   | map                                                 | 59, 159         | [source](https://en.wiktionary.org/w/index.php?title=რუკა&oldid=84101121)   |
| რუჯი   | suntan                                              | 22, 124, 206    | [source](https://en.wiktionary.org/w/index.php?title=რუჯი&oldid=84118403)   |
| რძე    | milk                                                | 37, 119, 197    | [source](https://en.wiktionary.org/w/index.php?title=რძე&oldid=87999921)    |
| საათი  | clock; hour                                         | 25, 114, 190    | [source](https://en.wiktionary.org/w/index.php?title=საათი&oldid=88414361)  |
| სადილი | midday meal                                         | 198             | [source](https://en.wiktionary.org/w/index.php?title=სადილი&oldid=90864533) |
| საიტი  | website                                             | 48, 128, 215    | [source](https://en.wiktionary.org/w/index.php?title=საიტი&oldid=84118556)  |
| სალონი | salon                                               | 30              | [source](https://en.wiktionary.org/w/index.php?title=სალონი&oldid=84101194) |
| სამი   | three (3)                                           | 28, 123, 209    | [source](https://en.wiktionary.org/w/index.php?title=სამი&oldid=87444788)   |
| სარკე  | looking-glass, mirror                               | 59, 145         | [source](https://en.wiktionary.org/w/index.php?title=სარკე&oldid=84101249)  |
| საუნა  | sauna                                               | 114             | [source](https://en.wiktionary.org/w/index.php?title=საუნა&oldid=84837205)  |
| საქმე  | work, business                                      | 123             | [source](https://en.wiktionary.org/w/index.php?title=საქმე&oldid=85068583)  |
| საღი   | healthy, sensible                                   | 19              | [source](https://en.wiktionary.org/w/index.php?title=საღი&oldid=84118854)   |
| სახე   | face                                                | 46              | [source](https://en.wiktionary.org/w/index.php?title=სახე&oldid=87883092)   |
| სახლი  | home, house, dwelling                               | 28, 105, 180    | [source](https://en.wiktionary.org/w/index.php?title=სახლი&oldid=85066957)  |
| სველი  | wet                                                 | 47, 180         | [source](https://en.wiktionary.org/w/index.php?title=სველი&oldid=91740634)  |
| სვეტი  | column                                              | 90, 203         | [source](https://en.wiktionary.org/w/index.php?title=სვეტი&oldid=84118971)  |
| სია    | list                                                | 25, 123, 215    | [source](https://en.wiktionary.org/w/index.php?title=სია&oldid=91725365)    |
| სიმი   | string                                              | 19, 95, 177     | [source](https://en.wiktionary.org/w/index.php?title=სიმი&oldid=84096110)   |
| სიო    | breeze                                              | 53, 133, 220    | [source](https://en.wiktionary.org/w/index.php?title=სიო&oldid=84119066)    |
| სიტყვა | word                                                | 203             | [source](https://en.wiktionary.org/w/index.php?title=სიტყვა&oldid=85065915) |
| სიძე   | son-in-law; groom                                   | 37, 130, 213    | [source](https://en.wiktionary.org/w/index.php?title=სიძე&oldid=85101367)   |
| სკამი  | chair                                               | 209             | [source](https://en.wiktionary.org/w/index.php?title=სკამი&oldid=92290656)  |
| სკვერი | public square                                       | 213             | [source](https://en.wiktionary.org/w/index.php?title=სკვერი&oldid=84119142) |
| სკოლა  | school                                              | 183             | [source](https://en.wiktionary.org/w/index.php?title=სკოლა&oldid=91779584)  |
| სოდა   | soda                                                | 140             | [source](https://en.wiktionary.org/w/index.php?title=სოდა&oldid=87770300)   |
| სოუსი  | sauce                                               | 57              | [source](https://en.wiktionary.org/w/index.php?title=სოუსი&oldid=84101647)  |
| სპილო  | elephant                                            | 57, 133, 225    | [source](https://en.wiktionary.org/w/index.php?title=სპილო&oldid=84119216)  |
| სპორტი | sport                                               | 53, 133         | [source](https://en.wiktionary.org/w/index.php?title=სპორტი&oldid=84119224) |
| სტილი  | style                                               | 128             | [source](https://en.wiktionary.org/w/index.php?title=სტილი&oldid=84119257)  |
| სულ    | completely; always                                  | 40, 132, 214    | [source](https://en.wiktionary.org/w/index.php?title=სულ&oldid=75696201)    |
| სული   | spirit, ghost                                       | 57, 132, 214    | [source](https://en.wiktionary.org/w/index.php?title=სული&oldid=84119285)   |
| სუნი   | smell                                               | 114, 219        | [source](https://en.wiktionary.org/w/index.php?title=სუნი&oldid=88613338)   |
| სუფთა  | clean                                               | 100             | [source](https://en.wiktionary.org/w/index.php?title=სუფთა&oldid=88896531)  |
| სუფრა  | tablecloth, feast                                   | 59              | [source](https://en.wiktionary.org/w/index.php?title=სუფრა&oldid=84119308)  |
| სხივი  | ray                                                 | 75, 177         | [source](https://en.wiktionary.org/w/index.php?title=სხივი&oldid=92420915)  |
| ტალახი | mud                                                 | 31, 112, 189    | [source](https://en.wiktionary.org/w/index.php?title=ტალახი&oldid=65808470) |
| ტანგო  | tango                                               | 36              | [source](https://en.wiktionary.org/w/index.php?title=ტანგო&oldid=84119337)  |
| ტანი   | body                                                | 36, 131, 210    | [source](https://en.wiktionary.org/w/index.php?title=ტანი&oldid=85068639)   |
| ტაფა   | frying pan                                          | 189             | [source](https://en.wiktionary.org/w/index.php?title=ტაფა&oldid=87901300)   |
| ტაში   | applause                                            | 7, 112          | [source](https://en.wiktionary.org/w/index.php?title=ტაში&oldid=84101817)   |
| ტბა    | lake                                                | 7, 98, 173      | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ტბები  | lakes                                               | 165             | [source](https://en.wiktionary.org/w/index.php?title=ტბა&oldid=87995548)    |
| ტერფი  | foot                                                | 62, 146, 224    | [source](https://en.wiktionary.org/w/index.php?title=ტერფი&oldid=81822046)  |
| ტირე   | dash                                                | 64, 146, 224    | [source](https://en.wiktionary.org/w/index.php?title=ტირე&oldid=84119412)   |
| ტომი   | tribe; volume                                       | 9, 138, 215     | [source](https://en.wiktionary.org/w/index.php?title=ტომი&oldid=84119427)   |
| ტონი   | tone                                                | 36, 131, 229    | [source](https://en.wiktionary.org/w/index.php?title=ტონი&oldid=84103458)   |
| ტორტი  | tart                                                | 138, 223        | [source](https://en.wiktionary.org/w/index.php?title=ტორტი&oldid=84101907)  |
| ტოტი   | branch, twig                                        | 138, 223        | [source](https://en.wiktionary.org/w/index.php?title=ტოტი&oldid=84757550)   |
| ტური   | round                                               | 52, 159         | [source](https://en.wiktionary.org/w/index.php?title=ტური&oldid=48311506)   |
| ტყავი  | leather                                             | 45, 121         | [source](https://en.wiktionary.org/w/index.php?title=ტყავი&oldid=85067696)  |
| ტყე    | forest, wood                                        | 45, 121, 203    | [source](https://en.wiktionary.org/w/index.php?title=ტყე&oldid=87846042)    |
| ტყვე   | captive                                             | 45, 121, 203    | [source](https://en.wiktionary.org/w/index.php?title=ტყვე&oldid=84119497)   |
| ტყვია  | bullet, lead                                        | 45, 203         | [source](https://en.wiktionary.org/w/index.php?title=ტყვია&oldid=92222045)  |
| ტყუპი  | twin                                                | 52              | [source](https://en.wiktionary.org/w/index.php?title=ტყუპი&oldid=84119505)  |
| უარი   | refusal                                             | 29, 124, 206    | [source](https://en.wiktionary.org/w/index.php?title=უარი&oldid=44103976)   |
| უბანი  | neighborhood                                        | 111, 236        | [source](https://en.wiktionary.org/w/index.php?title=უბანი&oldid=84119516)  |
| უთო    | iron for clothes                                    | 14, 116, 194    | [source](https://en.wiktionary.org/w/index.php?title=უთო&oldid=84119563)    |
| უკან   | back; backwards                                     | 27, 111, 236    | [source](https://en.wiktionary.org/w/index.php?title=უკან&oldid=88641955)   |
| უკვე   | already                                             | 8, 91           | [source](https://en.wiktionary.org/w/index.php?title=უკვე&oldid=58546516)   |
| უმი    | raw, uncooked                                       | 39, 115, 199    | [source](https://en.wiktionary.org/w/index.php?title=უმი&oldid=84119630)    |
| უნარი  | ability                                             | 29, 120, 206    | [source](https://en.wiktionary.org/w/index.php?title=უნარი&oldid=84119653)  |
| ურნა   | urn                                                 | 29, 120, 206    | [source](https://en.wiktionary.org/w/index.php?title=ურნა&oldid=84102068)   |
| უჯრა   | drawer                                              | 22, 124, 239    | [source](https://en.wiktionary.org/w/index.php?title=უჯრა&oldid=84119763)   |
| ფაზა   | phase                                               | 56, 137, 221    | [source](https://en.wiktionary.org/w/index.php?title=ფაზა&oldid=84102130)   |
| ფაილი  | file                                                | 106, 198        | [source](https://en.wiktionary.org/w/index.php?title=ფაილი&oldid=84102131)  |
| ფანარი | flashlight                                          | 58              | [source](https://en.wiktionary.org/w/index.php?title=ფანარი&oldid=77661328) |
| ფარდა  | curtain, purdah                                     | 58, 137, 221    | [source](https://en.wiktionary.org/w/index.php?title=ფარდა&oldid=84127055)  |
| ფარი   | shield                                              | 58, 156, 232    | [source](https://en.wiktionary.org/w/index.php?title=ფარი&oldid=92290778)   |
| ფასი   | price, cost                                         | 100, 198        | [source](https://en.wiktionary.org/w/index.php?title=ფასი&oldid=92376157)   |
| ფაქტი  | fact                                                | 106             | [source](https://en.wiktionary.org/w/index.php?title=ფაქტი&oldid=84102172)  |
| ფენი   | hairdryer                                           | 42, 126         | [source](https://en.wiktionary.org/w/index.php?title=ფენი&oldid=85382633)   |
| ფერი   | color, hue                                          | 62, 146, 224    | [source](https://en.wiktionary.org/w/index.php?title=ფერი&oldid=91170240)   |
| ფერმა  | farm                                                | 81, 156, 231    | [source](https://en.wiktionary.org/w/index.php?title=ფერმა&oldid=84102197)  |
| ფესვი  | root                                                | 126             | [source](https://en.wiktionary.org/w/index.php?title=ფესვი&oldid=84096316)  |
| ფეხები | feet                                                | 71              | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| ფეხი   | foot; leg                                           | 71, 146         | [source](https://en.wiktionary.org/w/index.php?title=ფეხი&oldid=84119832)   |
| ფილა   | slab                                                | 17, 106, 198    | [source](https://en.wiktionary.org/w/index.php?title=ფილა&oldid=84119847)   |
| ფილმი  | film                                                | 17, 95, 199     | [source](https://en.wiktionary.org/w/index.php?title=ფილმი&oldid=90063093)  |
| ფილტვი | lung                                                | 238             | [source](https://en.wiktionary.org/w/index.php?title=ფილტვი&oldid=87845916) |
| ფირმა  | company                                             | 6, 81, 156, 232 | [source](https://en.wiktionary.org/w/index.php?title=ფირმა&oldid=84102248)  |
| ფონდი  | fund                                                | 42, 144         | [source](https://en.wiktionary.org/w/index.php?title=ფონდი&oldid=84119912)  |
| ფონი   | background                                          | 144             | [source](https://en.wiktionary.org/w/index.php?title=ფონი&oldid=86431383)   |
| ფორმა  | shape, form                                         | 171             | [source](https://en.wiktionary.org/w/index.php?title=ფორმა&oldid=88896502)  |
| ფრაზა  | phrase                                              | 56, 137, 221    | [source](https://en.wiktionary.org/w/index.php?title=ფრაზა&oldid=84102333)  |
| ფრთა   | wing                                                | 56, 231         | [source](https://en.wiktionary.org/w/index.php?title=ფრთა&oldid=85209071)   |
| ფული   | money                                               | 100, 199        | [source](https://en.wiktionary.org/w/index.php?title=ფული&oldid=89462926)   |
| ფუნჯი  | brush                                               | 206             | [source](https://en.wiktionary.org/w/index.php?title=ფუნჯი&oldid=92228065)  |
| ფხა    | fishbone                                            | 71, 189         | [source](https://ka.wiktionary.org/w/index.php?title=ფხა&oldid=114605)      |
| ქათამი | chicken                                             | 76              | [source](https://en.wiktionary.org/w/index.php?title=ქათამი&oldid=84119996) |
| ქალი   | woman                                               | 4, 117, 192     | [source](https://en.wiktionary.org/w/index.php?title=ქალი&oldid=92983820)   |
| ქამარი | belt                                                | 33              | [source](https://en.wiktionary.org/w/index.php?title=ქამარი&oldid=84120022) |
| ქარი   | wind                                                | 50, 127, 228    | [source](https://en.wiktionary.org/w/index.php?title=ქარი&oldid=91725845)   |
| ქედი   | mountain range                                      | 40, 149, 230    | [source](https://en.wiktionary.org/w/index.php?title=ქედი&oldid=84103457)   |
| ქერა   | blond                                               | 85              | [source](https://en.wiktionary.org/w/index.php?title=ქერა&oldid=84089078)   |
| ქვა    | stone                                               | 49, 141, 228    | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვაბი  | pot                                                 | 70              | [source](https://en.wiktionary.org/w/index.php?title=ქვაბი&oldid=84120079)  |
| ქვები  | stones                                              | 70, 230         | [source](https://en.wiktionary.org/w/index.php?title=ქვა&oldid=92291035)    |
| ქვედა  | lower                                               | 185             | [source](https://en.wiktionary.org/w/index.php?title=ქვედა&oldid=84120081)  |
| ქვემოთ | below                                               | 195             | [source](https://en.wiktionary.org/w/index.php?title=ქვემოთ&oldid=91661877) |
| ქვიშა  | sand                                                | 50, 135, 211    | [source](https://en.wiktionary.org/w/index.php?title=ქვიშა&oldid=84120106)  |
| ქილა   | jar                                                 | 4, 117, 192     | [source](https://en.wiktionary.org/w/index.php?title=ქილა&oldid=86778055)   |
| ქიმია  | chemistry                                           | 76, 152, 228    | [source](https://en.wiktionary.org/w/index.php?title=ქიმია&oldid=91725383)  |
| ქირა   | rent                                                | 50, 153, 228    | [source](https://en.wiktionary.org/w/index.php?title=ქირა&oldid=87169627)   |
| ქმარი  | husband                                             | 153             | [source](https://en.wiktionary.org/w/index.php?title=ქმარი&oldid=84120133)  |
| ქოლგა  | umbrella                                            | 117             | [source](https://en.wiktionary.org/w/index.php?title=ქოლგა&oldid=84120138)  |
| ქუდი   | hat                                                 | 65, 153         | [source](https://en.wiktionary.org/w/index.php?title=ქუდი&oldid=72049666)   |
| ქურდი  | thief                                               | 65, 153         | [source](https://en.wiktionary.org/w/index.php?title=ქურდი&oldid=92228114)  |
| ქუსლი  | heel                                                | 40              | [source](https://en.wiktionary.org/w/index.php?title=ქუსლი&oldid=84120189)  |
| ღამე   | night                                               | 79, 174         | [source](https://en.wiktionary.org/w/index.php?title=ღამე&oldid=85066691)   |
| ღია    | open                                                | 19, 97, 174     | [source](https://en.wiktionary.org/w/index.php?title=ღია&oldid=72229335)    |
| ღილები | buttons                                             | 148, 233        | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ღილი   | button                                              | 44, 148, 233    | [source](https://en.wiktionary.org/w/index.php?title=ღილი&oldid=84102515)   |
| ღრუ    | cavity; hollow space                                | 79, 212         | [source](https://www.ganmarteba.ge/word/ღრუ)                                |
| ყავა   | coffee                                              | 35, 118         | [source](https://en.wiktionary.org/w/index.php?title=ყავა&oldid=87840113)   |
| ყანა   | field                                               | 35, 118, 207    | [source](https://en.wiktionary.org/w/index.php?title=ყანა&oldid=85068463)   |
| ყბა    | jaw                                                 | 151             | [source](https://en.wiktionary.org/w/index.php?title=ყბა&oldid=84120298)    |
| ყდა    | cover of a book                                     | 34, 110, 207    | [source](https://en.wiktionary.org/w/index.php?title=ყდა&oldid=84103354)    |
| ყელი   | throat                                              | 121, 201        | [source](https://en.wiktionary.org/w/index.php?title=ყელი&oldid=91740621)   |
| ყველი  | cheese                                              | 121, 201        | [source](https://en.wiktionary.org/w/index.php?title=ყველი&oldid=88628482)  |
| ყინვა  | frost, freezing, freezing temperatures, severe cold | 35, 118, 201    | [source](https://en.wiktionary.org/w/index.php?title=ყინვა&oldid=86840657)  |
| ყრუ    | deaf                                                | 52, 136, 218    | [source](https://en.wiktionary.org/w/index.php?title=ყრუ&oldid=85068571)    |
| ყურები | ears                                                | 136, 218        | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| ყური   | ear                                                 | 136, 218        | [source](https://en.wiktionary.org/w/index.php?title=ყური&oldid=84120377)   |
| შავი   | black                                               | 50, 135, 211    | [source](https://en.wiktionary.org/w/index.php?title=შავი&oldid=87444791)   |
| შალი   | shawl                                               | 109, 211        | [source](https://en.wiktionary.org/w/index.php?title=შალი&oldid=84102574)   |
| შანსი  | chance                                              | 154             | [source](https://en.wiktionary.org/w/index.php?title=შანსი&oldid=84120404)  |
| შაქარი | sugar                                               | 50, 127         | [source](https://en.wiktionary.org/w/index.php?title=შაქარი&oldid=91006621) |
| შვილი  | child                                               | 211             | [source](https://en.wiktionary.org/w/index.php?title=შვილი&oldid=90518663)  |
| შიგ    | inside                                              | 80              | [source](https://en.wiktionary.org/w/index.php?title=შიგ&oldid=88916923)    |
| შიდა   | inner                                               | 80, 163         | [source](https://en.wiktionary.org/w/index.php?title=შიდა&oldid=84089164)   |
| შინ    | home; to one’s home                                 | 60, 147, 236    | [source](https://en.wiktionary.org/w/index.php?title=შინ&oldid=88914984)    |
| შოკი   | shock                                               | 60, 209         | [source](https://en.wiktionary.org/w/index.php?title=შოკი&oldid=84120556)   |
| შუა    | middle                                              | 7, 154, 236     | [source](https://www.ganmarteba.ge/word/შუა)                                |
| შუბლი  | forehead                                            | 72              | [source](https://en.wiktionary.org/w/index.php?title=შუბლი&oldid=85068647)  |
| შური   | envy                                                | 66              | [source](https://en.wiktionary.org/w/index.php?title=შური&oldid=87901620)   |
| შხამი  | poison                                              | 66, 240         | [source](https://en.wiktionary.org/w/index.php?title=შხამი&oldid=91716537)  |
| ჩაი    | tea (drink made from leaves of tea plant)           | 39, 127, 202    | [source](https://en.wiktionary.org/w/index.php?title=ჩაი&oldid=81819876)    |
| ჩანთა  | bag                                                 | 190             | [source](https://en.wiktionary.org/w/index.php?title=ჩანთა&oldid=84120646)  |
| ჩეკი   | check, receipt                                      | 166             | [source](https://en.wiktionary.org/w/index.php?title=ჩეკი&oldid=88630360)   |
| ჩვილი  | baby                                                | 166             | [source](https://en.wiktionary.org/w/index.php?title=ჩვილი&oldid=84120702)  |
| ჩუმად  | quietly                                             | 39              | [source](https://en.wiktionary.org/w/index.php?title=ჩუმად&oldid=84120753)  |
| ჩუმი   | quiet                                               | 39              | [source](https://en.wiktionary.org/w/index.php?title=ჩუმი&oldid=92429143)   |
| ჩქარა  | quickly                                             | 33, 127, 202    | [source](https://en.wiktionary.org/w/index.php?title=ჩქარა&oldid=84120756)  |
| ჩქარი  | quick                                               | 33, 127, 202    | [source](https://en.wiktionary.org/w/index.php?title=ჩქარი&oldid=84120758)  |
| ცალი   | piece                                               | 77, 172         | [source](https://en.wiktionary.org/w/index.php?title=ცალი&oldid=84091576)   |
| ცივი   | cold                                                | 177             | [source](https://en.wiktionary.org/w/index.php?title=ცივი&oldid=92420944)   |
| ციხე   | fortress                                            | 16, 94, 172     | [source](https://en.wiktionary.org/w/index.php?title=ციხე&oldid=84120860)   |
| ცოლი   | wife                                                | 158             | [source](https://en.wiktionary.org/w/index.php?title=ცოლი&oldid=88967453)   |
| ცომი   | dough                                               | 9               | [source](https://en.wiktionary.org/w/index.php?title=ცომი&oldid=84120871)   |
| ცოტა   | a little; few                                       | 9               | [source](https://en.wiktionary.org/w/index.php?title=ცოტა&oldid=88703847)   |
| ცრუ    | false, phony                                        | 29, 164         | [source](https://en.wiktionary.org/w/index.php?title=ცრუ&oldid=89912738)    |
| ცუდად  | badly                                               | 161             | [source](https://en.wiktionary.org/w/index.php?title=ცუდად&oldid=84120884)  |
| ცუდი   | bad                                                 | 161             | [source](https://en.wiktionary.org/w/index.php?title=ცუდი&oldid=88630609)   |
| ცული   | axe                                                 | 94              | [source](https://en.wiktionary.org/w/index.php?title=ცული&oldid=84120886)   |
| ცხარე  | spicy                                               | 164             | [source](https://en.wiktionary.org/w/index.php?title=ცხარე&oldid=91715980)  |
| ცხელი  | hot                                                 | 16, 94, 172     | [source](https://en.wiktionary.org/w/index.php?title=ცხელი&oldid=90048455)  |
| ცხენი  | horse                                               | 16              | [source](https://en.wiktionary.org/w/index.php?title=ცხენი&oldid=88968964)  |
| ცხიმი  | fat                                                 | 177             | [source](https://en.wiktionary.org/w/index.php?title=ცხიმი&oldid=84103476)  |
| ცხრა   | nine (9)                                            | 84, 164         | [source](https://en.wiktionary.org/w/index.php?title=ცხრა&oldid=85767360)   |
| ძალა   | power, force, strength                              | 176             | [source](https://en.wiktionary.org/w/index.php?title=ძალა&oldid=91725193)   |
| ძალიან | very                                                | 176             | [source](https://en.wiktionary.org/w/index.php?title=ძალიან&oldid=84120919) |
| ძაფი   | thread                                              | 6, 81, 171      | [source](https://en.wiktionary.org/w/index.php?title=ძაფი&oldid=85068648)   |
| ძაღლი  | dog                                                 | 44, 162         | [source](https://en.wiktionary.org/w/index.php?title=ძაღლი&oldid=87819186)  |
| ძეგლი  | monument                                            | 99              | [source](https://en.wiktionary.org/w/index.php?title=ძეგლი&oldid=84102834)  |
| ძეხვი  | sausage                                             | 67, 197         | [source](https://en.wiktionary.org/w/index.php?title=ძეხვი&oldid=87374700)  |
| ძვალი  | bone                                                | 67, 162         | [source](https://en.wiktionary.org/w/index.php?title=ძვალი&oldid=91716436)  |
| ძველი  | old                                                 | 67, 184         | [source](https://en.wiktionary.org/w/index.php?title=ძველი&oldid=91740636)  |
| ძვირი  | expensive                                           | 49, 197         | [source](https://en.wiktionary.org/w/index.php?title=ძვირი&oldid=92376147)  |
| ძია    | uncle                                               | 6, 81, 171      | [source](https://en.wiktionary.org/w/index.php?title=ძია&oldid=91725370)    |
| ძილი   | sleep                                               | 44, 119         | [source](https://en.wiktionary.org/w/index.php?title=ძილი&oldid=88022106)   |
| ძირი   | root                                                | 49, 197         | [source](https://en.wiktionary.org/w/index.php?title=ძირი&oldid=84120950)   |
| ძმა    | brother                                             | 6, 81, 171      | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| ძმარი  | vinegar                                             | 6, 171          | [source](https://en.wiktionary.org/w/index.php?title=ძმარი&oldid=92955124)  |
| ძმები  | brothers                                            | 173             | [source](https://en.wiktionary.org/w/index.php?title=ძმა&oldid=84887585)    |
| ძროხა  | cow                                                 | 84              | [source](https://en.wiktionary.org/w/index.php?title=ძროხა&oldid=84120970)  |
| წაბლი  | chestnut                                            | 88, 181         | [source](https://en.wiktionary.org/w/index.php?title=წაბლი&oldid=92228120)  |
| წამი   | second                                              | 18, 109, 200    | [source](https://en.wiktionary.org/w/index.php?title=წამი&oldid=91716538)   |
| წარბი  | brow, eyebrow                                       | 97, 181         | [source](https://en.wiktionary.org/w/index.php?title=წარბი&oldid=89949138)  |
| წევრი  | member                                              | 15, 91, 170     | [source](https://en.wiktionary.org/w/index.php?title=წევრი&oldid=88915690)  |
| წელი   | year                                                | 68              | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| წესი   | rule                                                | 47, 126         | [source](https://en.wiktionary.org/w/index.php?title=წესი&oldid=88342308)   |
| წვენი  | gravy, juice, sap                                   | 47, 126, 204    | [source](https://en.wiktionary.org/w/index.php?title=წვენი&oldid=88091352)  |
| წვერი  | beard; tip                                          | 15, 91, 204     | [source](https://en.wiktionary.org/w/index.php?title=წვერი&oldid=84121025)  |
| წვიმა  | rain                                                | 109, 200        | [source](https://en.wiktionary.org/w/index.php?title=წვიმა&oldid=88801840)  |
| წითელი | red                                                 | 68              | [source](https://en.wiktionary.org/w/index.php?title=წითელი&oldid=90065641) |
| წილი   | share; portion                                      | 68, 181         | [source](https://en.wiktionary.org/w/index.php?title=წილი&oldid=92228052)   |
| წინ    | ahead; forward                                      | 15, 104, 204    | [source](https://en.wiktionary.org/w/index.php?title=წინ&oldid=89024908)    |
| წინდა  | sock                                                | 93              | [source](https://en.wiktionary.org/w/index.php?title=წინდა&oldid=86402542)  |
| წლები  | years                                               | 88              | [source](https://en.wiktionary.org/w/index.php?title=წელი&oldid=91740614)   |
| წონა   | weight                                              | 18, 93          | [source](https://en.wiktionary.org/w/index.php?title=წონა&oldid=84121084)   |
| წრე    | circle                                              | 15, 91, 170     | [source](https://en.wiktionary.org/w/index.php?title=წრე&oldid=84121086)    |
| წყალი  | water                                               | 34, 139         | [source](https://en.wiktionary.org/w/index.php?title=წყალი&oldid=88914697)  |
| წყარო  | spring                                              | 139             | [source](https://en.wiktionary.org/w/index.php?title=წყარო&oldid=88091334)  |
| ჭაობი  | bog, marsh, mire, morass, quagmire, slough, swamp   | 26, 125, 235    | [source](https://en.wiktionary.org/w/index.php?title=ჭაობი&oldid=84102929)  |
| ჭერი   | ceiling                                             | 120, 208        | [source](https://en.wiktionary.org/w/index.php?title=ჭერი&oldid=84102935)   |
| ჭია    | worm                                                | 4, 135, 235     | [source](https://en.wiktionary.org/w/index.php?title=ჭია&oldid=92290763)    |
| ჭიქა   | glass, cup                                          | 4, 135          | [source](https://en.wiktionary.org/w/index.php?title=ჭიქა&oldid=88091337)   |
| ჭორი   | gossip                                              | 125             | [source](https://en.wiktionary.org/w/index.php?title=ჭორი&oldid=84102958)   |
| ჭრელი  | colorful                                            | 208             | [source](https://en.wiktionary.org/w/index.php?title=ჭრელი&oldid=88091354)  |
| ხაზი   | line                                                | 5, 160          | [source](https://en.wiktionary.org/w/index.php?title=ხაზი&oldid=84121190)   |
| ხალი   | birthmark, mole                                     | 34, 112, 217    | [source](https://en.wiktionary.org/w/index.php?title=ხალი&oldid=84121202)   |
| ხარი   | ox, bull                                            | 5, 84, 163, 239 | [source](https://en.wiktionary.org/w/index.php?title=ხარი&oldid=91725836)   |
| ხარჯი  | expense                                             | 163, 239        | [source](https://en.wiktionary.org/w/index.php?title=ხარჯი&oldid=84121228)  |
| ხატი   | icon                                                | 31              | [source](https://en.wiktionary.org/w/index.php?title=ხატი&oldid=91328605)   |
| ხბო    | calf                                                | 46, 169         | [source](https://en.wiktionary.org/w/index.php?title=ხბო&oldid=84121237)    |
| ხედი   | view                                                | 129             | [source](https://en.wiktionary.org/w/index.php?title=ხედი&oldid=84102991)   |
| ხეები  | trees                                               | 71              | [source](https://en.wiktionary.org/w/index.php?title=ხე&oldid=91649841)     |
| ხევი   | ravine                                              | 54, 197         | [source](https://en.wiktionary.org/w/index.php?title=ხევი&oldid=84121241)   |
| ხელი   | hand                                                | 16, 94, 180     | [source](https://en.wiktionary.org/w/index.php?title=ხელი&oldid=93360724)   |
| ხეობა  | valley                                              | 46              | [source](https://en.wiktionary.org/w/index.php?title=ხეობა&oldid=84121284)  |
| ხერხი  | saw, method                                         | 146             | [source](https://en.wiktionary.org/w/index.php?title=ხერხი&oldid=92228085)  |
| ხვალ   | tomorrow                                            | 67, 180         | [source](https://en.wiktionary.org/w/index.php?title=ხვალ&oldid=89998732)   |
| ხიბლი  | charm                                               | 83              | [source](https://en.wiktionary.org/w/index.php?title=ხიბლი&oldid=84409885)  |
| ხიდი   | bridge                                              | 75              | [source](https://en.wiktionary.org/w/index.php?title=ხიდი&oldid=84121301)   |
| ხილი   | fruit, fruits                                       | 83, 188         | [source](https://en.wiktionary.org/w/index.php?title=ხილი&oldid=90045077)   |
| ხმა    | voice, sound                                        | 1, 79, 157, 240 | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმალი  | sword                                               | 31, 172         | [source](https://en.wiktionary.org/w/index.php?title=ხმალი&oldid=85065991)  |
| ხმები  | sounds                                              | 129             | [source](https://en.wiktionary.org/w/index.php?title=ხმა&oldid=84121314)    |
| ხმელი  | dry                                                 | 101, 187        | [source](https://en.wiktionary.org/w/index.php?title=ხმელი&oldid=84091764)  |
| ხორცი  | meat                                                | 84, 168         | [source](https://en.wiktionary.org/w/index.php?title=ხორცი&oldid=91715264)  |
| ხროვა  | pack                                                | 167             | [source](https://en.wiktionary.org/w/index.php?title=ხროვა&oldid=84103045)  |
| ხუთი   | five (5)                                            | 14              | [source](https://en.wiktionary.org/w/index.php?title=ხუთი&oldid=87444795)   |
| ხურმა  | persimmon                                           | 79, 164         | [source](https://en.wiktionary.org/w/index.php?title=ხურმა&oldid=84121365)  |
| ხუფი   | lid                                                 | 199             | [source](https://en.wiktionary.org/w/index.php?title=ხუფი&oldid=90787321)   |
| ხშირად | often                                               | 163             | [source](https://en.wiktionary.org/w/index.php?title=ხშირად&oldid=84121369) |
| ჯაზი   | jazz                                                | 191             | [source](https://en.wiktionary.org/w/index.php?title=ჯაზი&oldid=84121382)   |
| ჯამი   | sum; bowl                                           | 32, 107, 186    | [source](https://en.wiktionary.org/w/index.php?title=ჯამი&oldid=91650107)   |
| ჯარი   | army, host                                          | 22, 107, 202    | [source](https://en.wiktionary.org/w/index.php?title=ჯარი&oldid=91725851)   |
| ჯაჭვი  | chain                                               | 135             | [source](https://en.wiktionary.org/w/index.php?title=ჯაჭვი&oldid=84121403)  |
| ჯერ    | first; yet                                          | 74, 170         | [source](https://en.wiktionary.org/w/index.php?title=ჯერ&oldid=87441534)    |
| ჯვარი  | cross                                               | 124             | [source](https://en.wiktionary.org/w/index.php?title=ჯვარი&oldid=87916559)  |
| ჯიბე   | pocket                                              | 74, 170         | [source](https://en.wiktionary.org/w/index.php?title=ჯიბე&oldid=84121427)   |
| ჯილდო  | reward                                              | 175             | [source](https://en.wiktionary.org/w/index.php?title=ჯილდო&oldid=89024919)  |
| ჯიპი   | jeep                                                | 132             | [source](https://en.wiktionary.org/w/index.php?title=ჯიპი&oldid=84121433)   |
| ჯოგი   | herd                                                | 175             | [source](https://en.wiktionary.org/w/index.php?title=ჯოგი&oldid=84121447)   |
| ჯოხი   | stick                                               | 105             | [source](https://en.wiktionary.org/w/index.php?title=ჯოხი&oldid=85068330)   |
| ჰიმნი  | anthem                                              | 102             | [source](https://en.wiktionary.org/w/index.php?title=ჰიმნი&oldid=84121547)  |
| ჰობი   | hobby                                               | 21              | [source](https://en.wiktionary.org/w/index.php?title=ჰობი&oldid=84103154)   |

## All 240 reviewed boards

| Level | Stop           | Required answers                  | Score | Grid | Bonuses |
| ----- | -------------- | --------------------------------- | ----- | ---- | ------- |
| 1     | tbilisi        | მახე, მთა, ხმა, თემა, თმა         | 38    | 6×5  | 2       |
| 2     | tbilisi        | გზა, ვაზი, ვიზა, ავზი, გაზი       | 42    | 7×5  | 4       |
| 3     | tbilisi        | თავი, ვილა, ვალი, ათი, თვალი      | 46    | 6×5  | 5       |
| 4     | tbilisi        | ქილა, ჭია, ჭიქა, ალი, ქალი        | 40    | 6×4  | 4       |
| 5     | tbilisi        | ხარი, აზრი, არხი, ზარი, ხაზი      | 44    | 7×5  | 2       |
| 6     | mtskheta       | ძმა, ძია, ძაფი, ფირმა, ძმარი      | 54    | 7×5  | 3       |
| 7     | mtskheta       | ტაში, ტბა, შუა, ბატი, ბუშტი       | 52    | 7×5  | 7       |
| 8     | mtskheta       | კიდევ, კუდი, უკვე, დევი, კევი     | 56    | 7×5  | 2       |
| 9     | mtskheta       | ცოტა, ატომი, ოცი, ტომი, ცომი      | 54    | 7×5  | 4       |
| 10    | mtskheta       | მზე, პოემა, პოზა, ეზო, ზომა       | 52    | 7×5  | 2       |
| 11    | ananuri        | ბადე, დედა, დეიდა, იდეა, ბედი     | 56    | 7×5  | 4       |
| 12    | ananuri        | გოლი, გრილი, რიგი, იოლი, როლი     | 56    | 7×5  | 3       |
| 13    | ananuri        | კლიტე, ეტლი, კლდე, კეტი, კიდე     | 56    | 7×5  | 0       |
| 14    | ananuri        | ოთხი, უთო, ხუთი, თხა, ოთახი       | 52    | 6×5  | 5       |
| 15    | ananuri        | წინ, წრე, ნერვი, წვერი, წევრი     | 56    | 6×5  | 2       |
| 16    | kazbegi        | ნელი, ცხელი, ცხენი, ხელი, ციხე    | 58    | 6×5  | 2       |
| 17    | kazbegi        | მილი, ფილა, ფილმი, იაფი, ლაიმი    | 58    | 7×5  | 4       |
| 18    | kazbegi        | წონა, მაწონი, წამი, მიწა, ომი     | 58    | 7×4  | 6       |
| 19    | kazbegi        | საღი, სიმი, ღია, მაისი, მისია     | 56    | 7×5  | 5       |
| 20    | kazbegi        | ენა, მელა, მელანი, ნელა, მალე     | 58    | 6×5  | 8       |
| 21    | tusheti        | ობოლი, ლობიო, ბოლო, ბოლი, ჰობი    | 58    | 7×5  | 1       |
| 22    | tusheti        | რუჯი, უჯრა, ჯარი, ლარი, ლურჯი     | 56    | 6×5  | 5       |
| 23    | tusheti        | ბანაკი, ბინა, კაბინა, კაბა, კანი  | 64    | 6×5  | 5       |
| 24    | tusheti        | ზიანი, მზა, მინა, მზიანი, ნაზი    | 60    | 7×4  | 4       |
| 25    | tusheti        | საათი, თასმა, თასი, ათასი, სია    | 58    | 7×5  | 8       |
| 26    | sighnaghi      | როკი, კობრა, ჭაობი, ობი, კოჭი     | 64    | 7×5  | 16      |
| 27    | sighnaghi      | ნაკლი, უკან, ბანკი, კუბი, კლუბი   | 68    | 7×5  | 14      |
| 28    | sighnaghi      | ახლოს, მსხალი, სამი, სახლი, ლომი  | 72    | 7×5  | 19      |
| 29    | sighnaghi      | ურნა, ნაცარი, ცრუ, უნარი, უარი    | 68    | 7×5  | 7       |
| 30    | sighnaghi      | ლინზა, სალონი, ასლი, ზონა, ასო    | 68    | 6×5  | 12      |
| 31    | david-gareja   | ახლა, იახტა, ხატი, ტალახი, ხმალი  | 72    | 7×5  | 9       |
| 32    | david-gareja   | დარაჯი, იჯარა, მაჯა, მადა, ჯამი   | 70    | 6×5  | 9       |
| 33    | david-gareja   | არმია, აჩმა, ჩქარა, ქამარი, ჩქარი | 74    | 6×5  | 12      |
| 34    | david-gareja   | წყალი, ხალი, დახლი, ყდა, დილა     | 64    | 7×5  | 4       |
| 35    | david-gareja   | გვიან, ნავი, ყავა, ყინვა, ყანა    | 66    | 7×5  | 4       |
| 36    | uplistsikhe    | ტანი, ტონი, იოგა, ტანგო, მანგო    | 66    | 7×5  | 8       |
| 37    | uplistsikhe    | რძე, სიძე, კერძი, რეისი, კისერი   | 70    | 7×5  | 4       |
| 38    | uplistsikhe    | დანა, ავაზა, ვადა, დავა, ანდაზა   | 70    | 6×5  | 3       |
| 39    | uplistsikhe    | უმი, მუდამ, ჩუმად, ჩაი, ჩუმი      | 62    | 6×5  | 4       |
| 40    | uplistsikhe    | სულ, ლუდი, ქედი, ქუსლი, ლექსი     | 64    | 7×5  | 4       |
| 41    | borjomi        | გაზეთი, ზეთი, თევზი, თვე, ზეგ     | 66    | 7×5  | 14      |
| 42    | borjomi        | ვიდეო, დონე, ფენი, ფონდი, დენი    | 66    | 7×5  | 2       |
| 43    | borjomi        | ბარგი, ბერი, კარები, კარგი, კიბე  | 72    | 7×5  | 14      |
| 44    | borjomi        | ღილი, ძაღლი, ძილი, ბიძა, იღბალი   | 70    | 7×5  | 10      |
| 45    | borjomi        | ტყვია, ეტაპი, ტყვე, ტყავი, ტყე    | 66    | 7×5  | 3       |
| 46    | vardzia        | ასე, სახე, ხეობა, ხბო, ასოები     | 66    | 7×5  | 10      |
| 47    | vardzia        | წესი, სველი, ნესვი, ისევ, წვენი   | 68    | 7×5  | 5       |
| 48    | vardzia        | ასაკი, იატაკი, კატა, საიტი, ასი   | 70    | 6×5  | 4       |
| 49    | vardzia        | ძვირი, ძირი, არქივი, ქვა, ვირი    | 68    | 6×5  | 10      |
| 50    | vardzia        | ქარი, ქვიშა, შავი, ქირა, შაქარი   | 70    | 7×5  | 12      |
| 51    | katskhi        | დღე, გარეთ, გარე, ადრე, ერთად     | 64    | 6×5  | 3       |
| 52    | katskhi        | ტყუპი, ყრუ, პორტი, ტური, პური     | 64    | 7×5  | 4       |
| 53    | katskhi        | სიო, სპორტი, ისე, პოსტი, პოეტი    | 68    | 7×5  | 7       |
| 54    | katskhi        | ერი, ერთი, თხები, ხევი, ბევრი     | 64    | 7×5  | 3       |
| 55    | katskhi        | ირემი, გედი, იმედი, გემი, გმირი   | 68    | 7×5  | 3       |
| 56    | racha          | ბაზა, ფაზა, ფრაზა, ფრთა, ბაფთა    | 66    | 6×5  | 6       |
| 57    | racha          | სოუსი, სპილო, სული, პლუსი, პულსი  | 70    | 7×5  | 4       |
| 58    | racha          | ფარდა, ფანარი, ნარდი, დაფა, ფარი  | 72    | 7×5  | 13      |
| 59    | racha          | რუკა, კეფა, სარკე, სუფრა, კაფე    | 66    | 6×5  | 6       |
| 60    | racha          | მაშინ, კომში, შინ, შოკი, კინო     | 64    | 7×5  | 10      |
| 61    | kutaisi-gelati | პარკი, კასრი, კარი, პიკი, ისარი   | 68    | 7×5  | 12      |
| 62    | kutaisi-gelati | მერე, მეფე, ტერფი, ფერი, მტერი    | 66    | 7×5  | 5       |
| 63    | kutaisi-gelati | გარემო, გემო, მარტო, გორა, მეტრო  | 72    | 7×5  | 3       |
| 64    | kutaisi-gelati | კიტრი, კრემი, რიტმი, მეტრი, ტირე  | 70    | 7×5  | 7       |
| 65    | kutaisi-gelati | დოქი, რადიო, ქუდი, ქურდი, დრო     | 64    | 6×5  | 17      |
| 66    | svaneti        | მხარი, შური, შხამი, მუშა, მუხა    | 66    | 6×5  | 14      |
| 67    | svaneti        | ელვა, ძვალი, ძველი, ხვალ, ძეხვი   | 68    | 7×5  | 14      |
| 68    | svaneti        | წითელი, წელი, ლეიბი, თბილი, წილი  | 72    | 7×5  | 5       |
| 69    | svaneti        | პრიზი, ნიორი, პონი, ორი, პირი     | 64    | 7×5  | 2       |
| 70    | svaneti        | ვაჟი, იქვე, ქვაბი, ქვები, აქვე    | 66    | 7×5  | 9       |
| 71    | martvili       | ფეხი, ფეხები, ხეები, ფხა, აბი     | 66    | 7×5  | 3       |
| 72    | martvili       | ნული, ნუში, შუბლი, გული, გუშინ    | 66    | 7×5  | 4       |
| 73    | martvili       | თოვლი, თოკი, კილო, ბლოკი, ბოთლი   | 68    | 7×5  | 3       |
| 74    | martvili       | ზებრა, ბრაზი, ჯერ, ჯიბე, ბზარი    | 66    | 7×5  | 13      |
| 75    | martvili       | სხივი, ხიდი, დისკი, კივი, იხვი    | 66    | 6×5  | 0       |
| 76    | zugdidi        | თმა, იქით, ქათამი, მთა, ქიმია     | 66    | 6×5  | 7       |
| 77    | zugdidi        | კაცი, ლაქა, ცალი, აქცია, კალია    | 66    | 7×5  | 11      |
| 78    | zugdidi        | ვილა, კვალი, კვლავ, ვაზი, ვიზა    | 66    | 7×5  | 9       |
| 79    | zugdidi        | ხურმა, ღრუ, ხმა, მხარე, ღამე      | 62    | 7×5  | 7       |
| 80    | zugdidi        | თავი, შიგ, შიდა, დათვი, თაგვი     | 64    | 7×5  | 7       |
| 81    | makhuntseti    | ძაფი, ძია, ძმა, ფერმა, ფირმა      | 62    | 7×5  | 11      |
| 82    | makhuntseti    | გზა, გალია, ზარალი, ზარი, გაზი    | 68    | 7×5  | 9       |
| 83    | makhuntseti    | ხიბლი, ხილი, არხი, რბილი, ბრალი   | 68    | 7×5  | 11      |
| 84    | makhuntseti    | ძროხა, ხარი, ხორცი, ოცი, ცხრა     | 64    | 7×5  | 7       |
| 85    | makhuntseti    | თარო, ოპერა, ქერა, ეპოქა, აქეთ    | 66    | 7×5  | 6       |
| 86    | batumi         | დედა, დეიდა, იდეა, დევი, კიდევ    | 66    | 7×5  | 8       |
| 87    | batumi         | ავზი, ვარდი, ზღვარი, რვა, ზღვა    | 68    | 7×5  | 12      |
| 88    | batumi         | ბლები, ბებია, წაბლი, წლები, ბალი  | 70    | 7×5  | 6       |
| 89    | batumi         | თხილი, ოთახი, ოთხი, ახლო, თხა     | 64    | 6×5  | 10      |
| 90    | batumi         | ლეკვი, კლიტე, კეტი, ეტლი, სვეტი   | 68    | 7×5  | 5       |
| 91    | tao-klarjeti   | კევი, წევრი, წვერი, წრე, უკვე     | 64    | 7×5  | 2       |
| 92    | tao-klarjeti   | მზე, პოემა, პოზა, ზემოთ, ზომა     | 64    | 7×5  | 6       |
| 93    | tao-klarjeti   | წინდა, ომი, მოდა, მაწონი, წონა    | 68    | 7×5  | 10      |
| 94    | tao-klarjeti   | ცული, ცხელი, ხელი, მხეცი, ციხე    | 66    | 6×5  | 6       |
| 95    | tao-klarjeti   | იოლი, ოფისი, სიმი, ოფლი, ფილმი    | 66    | 6×5  | 6       |
| 96    | sumela         | კიდე, კლდე, ეკალი, ალი, პლედი     | 64    | 7×5  | 5       |
| 97    | sumela         | წარბი, აზრი, ღია, ბაღი, ზღარბი    | 68    | 7×5  | 9       |
| 98    | sumela         | ბინა, ბანქო, ტბა, ბატონი, ბატი    | 68    | 7×5  | 9       |
| 99    | sumela         | ბლოგი, ძეგლი, გოლი, ბოლი, ბოძი    | 66    | 7×5  | 4       |
| 100   | sumela         | სუფთა, თაფლი, ფასი, ფული, თასი    | 66    | 7×5  | 12      |
| 101   | cappadocia     | მალე, მახე, მელა, მედალი, ხმელი   | 70    | 6×5  | 16      |
| 102   | cappadocia     | ჰიმნი, ზიანი, ნაზი, მზიანი, მინა  | 72    | 7×5  | 5       |
| 103   | cappadocia     | ლომი, ლომები, ლობიო, ბოლო, ობოლი  | 72    | 6×5  | 4       |
| 104   | cappadocia     | კანი, კაბინა, კაბა, წინ, ბანაკი   | 70    | 7×5  | 6       |
| 105   | cappadocia     | ასო, სახლი, ჯოხი, ასლი, ახლოს     | 64    | 6×5  | 12      |
| 106   | pamukkale      | ფაილი, იაფი, ფაქტი, ფილა, ლიფტი   | 68    | 7×5  | 7       |
| 107   | pamukkale      | მაჯა, იჯარა, ჯამი, ჯარი, ატამი    | 66    | 6×5  | 6       |
| 108   | pamukkale      | ნელა, მზა, მელანი, ლინზა, ნელი    | 68    | 7×5  | 15      |
| 109   | pamukkale      | წამი, შალი, მიწა, ვაშლი, წვიმა    | 66    | 7×5  | 8       |
| 110   | pamukkale      | დრამა, მადა, ყდა, არმია, არაყი    | 66    | 7×5  | 7       |
| 111   | ephesus        | კუბი, ბანკი, უბანი, უკან, აუზი    | 66    | 6×5  | 13      |
| 112   | ephesus        | ახლა, იახტა, ტაში, ტალახი, ხალი   | 70    | 6×5  | 5       |
| 113   | ephesus        | დანა, ვადა, ნაგავი, გვიან, დავა   | 70    | 6×5  | 6       |
| 114   | ephesus        | საათი, საუნა, სუნი, ათასი, ათი    | 66    | 7×5  | 6       |
| 115   | ephesus        | დახლი, დილა, მუხლი, ლუდი, უმი     | 64    | 7×5  | 9       |
| 116   | istanbul       | ზეთი, ზევით, თევზი, ეზო, უთო      | 62    | 7×5  | 1       |
| 117   | istanbul       | ქილა, თოლია, ქოლგა, იოგა, ქალი    | 66    | 7×5  | 8       |
| 118   | istanbul       | ყანა, ყავა, ნავი, აივანი, ყინვა   | 70    | 6×5  | 3       |
| 119   | istanbul       | ძილი, გრილი, რძე, გრძელი, რიგი    | 68    | 7×5  | 5       |
| 120   | istanbul       | ენა, ნაჭერი, ურნა, უნარი, ჭერი    | 68    | 7×5  | 7       |
| 121   | plovdiv        | ტყავი, ტყვე, ყელი, ყველი, ტყე     | 64    | 7×5  | 10      |
| 122   | plovdiv        | ზეგ, ზურგი, გუბე, ბერი, გზები     | 64    | 7×5  | 5       |
| 123   | plovdiv        | აქლემი, ლექსი, საქმე, სამი, სია   | 70    | 7×5  | 17      |
| 124   | plovdiv        | ჯვარი, ლურჯი, უჯრა, რუჯი, უარი    | 66    | 7×5  | 10      |
| 125   | plovdiv        | ჭორი, ბარგი, ჭაობი, გოჭი, ობი     | 64    | 7×5  | 10      |
| 126   | petritsoni     | წესი, ფესვი, ფენი, წვენი, ისევ    | 66    | 7×5  | 3       |
| 127   | petritsoni     | ქარი, შაქარი, ჩქარა, ჩაი, ჩქარი   | 70    | 7×5  | 8       |
| 128   | petritsoni     | მისია, მილი, საიტი, სტილი, მაისი  | 70    | 7×5  | 12      |
| 129   | petritsoni     | ბადე, ბედი, ხედი, მედია, ხმები    | 66    | 7×5  | 9       |
| 130   | petritsoni     | ნესვი, სიძე, ასე, ნაძვი, ისე      | 62    | 7×5  | 10      |
| 131   | rila           | პიტნა, ტანი, ტონი, ენოტი, ეტაპი   | 68    | 7×5  | 6       |
| 132   | rila           | სულ, სული, პლუსი, ჯიპი, პულსი     | 64    | 7×5  | 0       |
| 133   | rila           | სპორტი, პორტი, სპილო, პოსტი, სიო  | 72    | 7×5  | 8       |
| 134   | rila           | თათი, თეთრი, ადრე, ერთი, ერთად    | 66    | 7×5  | 9       |
| 135   | rila           | ქვიშა, ჭია, ჭიქა, ჯაჭვი, შავი     | 64    | 6×5  | 7       |
| 136   | thessaloniki   | ბურღი, ყრუ, ყურები, ყური, ერი     | 66    | 6×5  | 5       |
| 137   | thessaloniki   | ფაზა, ფარდა, ფრაზა, ბარდა, დაფა   | 68    | 7×5  | 9       |
| 138   | thessaloniki   | ატომი, მარტო, ტორტი, ტომი, ტოტი   | 68    | 7×5  | 11      |
| 139   | thessaloniki   | ლარი, ლოყა, წყალი, როლი, წყარო    | 66    | 7×5  | 7       |
| 140   | thessaloniki   | დრო, რადიო, როკი, სოდა, კასრი     | 64    | 6×5  | 21      |
| 141   | iviron-athos   | იგავი, ქვა, არქივი, ვირი, გვარი   | 70    | 7×5  | 10      |
| 142   | iviron-athos   | დენი, გედი, მენიუ, გუნდი, გემი    | 66    | 6×5  | 2       |
| 143   | iviron-athos   | იმედი, მეტრი, მტერი, რიტმი, ირემი | 72    | 7×5  | 5       |
| 144   | iviron-athos   | ორი, ფონდი, ფონი, იოდი, ნიორი     | 64    | 7×5  | 5       |
| 145   | iviron-athos   | კისერი, რეისი, სარკე, ასი, ისარი  | 72    | 7×5  | 16      |
| 146   | meteora        | ფერი, ფეხი, ხერხი, ტერფი, ტირე    | 66    | 7×5  | 2       |
| 147   | meteora        | გლუვი, გუშინ, ნული, შინ, გული     | 64    | 6×5  | 2       |
| 148   | meteora        | კბილი, კიბე, ღილები, ლეიბი, ღილი  | 72    | 7×5  | 2       |
| 149   | meteora        | ვიდეო, ქედი, დოქი, ექვსი, ექო     | 64    | 7×5  | 6       |
| 150   | meteora        | კარი, პარკი, პიკი, პირი, კიტრი    | 66    | 7×5  | 8       |
| 151   | volos-iolcos   | აბი, ბაზარი, ბზარი, ყბა, ბაზა     | 66    | 7×5  | 11      |
| 152   | volos-iolcos   | ლაიმი, იქით, მითი, ქიმია, თმა     | 64    | 6×5  | 10      |
| 153   | volos-iolcos   | ქმარი, ქირა, ქუდი, ქურდი, მუქი    | 66    | 7×5  | 13      |
| 154   | volos-iolcos   | ნუში, მუშა, შანსი, შუა, მაშინ     | 64    | 7×5  | 12      |
| 155   | volos-iolcos   | გარეთ, გეგმა, თემა, მთა, გარე     | 64    | 7×5  | 3       |
| 156   | delphi         | ფარი, მეფე, ფერმა, ფირმა, მერე    | 66    | 7×5  | 7       |
| 157   | delphi         | გორა, გარემო, მხარე, ხმა, გემო    | 68    | 7×5  | 5       |
| 158   | delphi         | კილო, ცოლი, ბიცოლა, კაცი, ბლოკი   | 70    | 6×5  | 13      |
| 159   | delphi         | აგური, კარგი, რუკა, კარტი, ტური   | 68    | 6×5  | 10      |
| 160   | delphi         | მხარი, ზარი, ბრმა, ბრაზი, ხაზი    | 66    | 7×5  | 13      |
| 161   | athens         | იდეა, ცუდად, ცუდი, დედა, დეიდა    | 66    | 7×5  | 4       |
| 162   | athens         | ძაღლი, კვალი, ვილა, ვალი, ძვალი   | 68    | 7×5  | 8       |
| 163   | athens         | ხშირად, არხი, ხარჯი, შიდა, ხარი   | 70    | 7×5  | 5       |
| 164   | athens         | ცხრა, ხურმა, მუხა, ცხარე, ცრუ     | 64    | 7×5  | 8       |
| 165   | athens         | ბლები, ეტლი, კლიტე, კეტი, ტბები   | 68    | 7×5  | 2       |
| 166   | santorini      | კევი, კივი, ჩეკი, ლეკვი, ჩვილი    | 66    | 7×5  | 4       |
| 167   | santorini      | ოთხი, ხროვა, თავი, ოთახი, თარო    | 66    | 7×5  | 16      |
| 168   | santorini      | ომი, ორმოცი, ოცი, ხორცი, ორმო     | 66    | 7×5  | 4       |
| 169   | santorini      | აბანო, თაობა, თხა, ხბო, თანხა     | 64    | 7×5  | 0       |
| 170   | santorini      | ბევრი, წევრი, წრე, ჯერ, ჯიბე      | 62    | 7×5  | 4       |
| 171   | corfu          | ძმა, ძია, ძაფი, ფორმა, ძმარი      | 62    | 7×5  | 9       |
| 172   | corfu          | ცხელი, ციხე, ცალი, მხეცი, ხმალი   | 68    | 7×5  | 16      |
| 173   | corfu          | ატმები, ბიძა, ტბა, ძმები, ბატი    | 68    | 6×5  | 6       |
| 174   | corfu          | დიეტა, მეტად, ღამე, ღია, დღე      | 62    | 7×5  | 6       |
| 175   | corfu          | გოლი, ჯილდო, ჯოგი, ბლოგი, ბოლი    | 66    | 7×5  | 4       |
| 176   | butrint        | ნაკლი, ძალა, ძალიან, ალი, კალია   | 70    | 7×5  | 7       |
| 177   | butrint        | ცივი, ცხიმი, იხვი, სხივი, სიმი    | 66    | 7×5  | 0       |
| 178   | butrint        | ავზი, ვაზი, ზღვარი, კვირა, ზღვა   | 70    | 7×5  | 14      |
| 179   | butrint        | გაზი, განძი, ზიანი, ნაზი, გზა     | 64    | 7×5  | 3       |
| 180   | butrint        | ხელი, ხვალ, ელვა, სველი, სახლი    | 66    | 7×5  | 22      |
| 181   | gjirokaster    | ბალი, წაბლი, წარბი, წილი, ბრალი   | 68    | 7×5  | 8       |
| 182   | gjirokaster    | კანი, ბანაკი, რკინა, კაბა, ბინა   | 70    | 7×4  | 11      |
| 183   | gjirokaster    | კოალა, ასაკი, სკოლა, კლასი, ასლი  | 70    | 7×5  | 15      |
| 184   | gjirokaster    | კიდევ, კლდე, ძველი, დევი, კიდე    | 66    | 7×5  | 4       |
| 185   | gjirokaster    | აქვე, იქვე, რვა, ვარდი, ქვედა     | 64    | 6×5  | 20      |
| 186   | berat          | მაჯა, ჯამი, ატამი, კატა, აჯიკა    | 66    | 7×5  | 3       |
| 187   | berat          | მალე, მახე, მეტალი, მელა, ხმელი   | 70    | 6×5  | 13      |
| 188   | berat          | თხები, თხილი, ხილი, ბილეთი, თბილი | 74    | 7×5  | 7       |
| 189   | berat          | ტაფა, ტალახი, იახტა, ახლა, ფხა    | 68    | 7×5  | 7       |
| 190   | berat          | ჩანთა, ათასი, საათი, ათი, თასი    | 66    | 6×5  | 6       |
| 191   | ohrid          | ჯაზი, ავეჯი, თევზი, ვიზა, ზეთი    | 66    | 7×5  | 11      |
| 192   | ohrid          | ლაქა, ქალი, ქილა, აქცია, გალია    | 66    | 7×5  | 9       |
| 193   | ohrid          | არმია, დავა, ვადა, დრამა, მადა    | 66    | 7×5  | 11      |
| 194   | ohrid          | კლუბი, კუბი, უთო, ბოთლი, თოკი     | 64    | 7×5  | 9       |
| 195   | ohrid          | მზე, თვე, ზემოთ, ეზო, ქვემოთ      | 64    | 7×5  | 2       |
| 196   | kotor          | ლობიო, თოფი, ობოლი, ოფლი, ბოლო    | 66    | 7×5  | 4       |
| 197   | kotor          | ძირი, ძვირი, ძეხვი, რძე, ხევი     | 64    | 7×4  | 5       |
| 198   | kotor          | დილა, სადილი, ფასი, ფაილი, ფილა   | 70    | 6×5  | 13      |
| 199   | kotor          | ფული, ხუფი, მუხლი, ფილმი, უმი     | 64    | 7×5  | 2       |
| 200   | kotor          | მიწა, წამი, ნავი, წვიმა, გვიან    | 66    | 7×5  | 7       |
| 201   | dubrovnik      | ყველი, ყელი, ყინვა, ნელი, ნელა    | 66    | 7×5  | 12      |
| 202   | dubrovnik      | იჯარა, ჩქარა, ჩქარი, ჯარი, ჩაი    | 66    | 6×5  | 10      |
| 203   | dubrovnik      | ტყე, სიტყვა, ტყვე, ტყვია, სვეტი   | 70    | 7×5  | 10      |
| 204   | dubrovnik      | წვენი, ნერვი, წვერი, წინ, ბეწვი   | 68    | 7×5  | 5       |
| 205   | dubrovnik      | ნისლი, იოლი, მილი, ლიმონი, ლომი   | 70    | 6×5  | 6       |
| 206   | split          | ურნა, უნარი, უარი, რუჯი, ფუნჯი    | 66    | 7×5  | 7       |
| 207   | split          | ყანა, ნარდი, დანა, არაყი, ყდა     | 64    | 7×5  | 7       |
| 208   | split          | რბილი, ბიჭი, ჭერი, ჭრელი, ბერი    | 66    | 7×5  | 6       |
| 209   | split          | შოკი, ასო, სკამი, კომში, სამი     | 64    | 7×5  | 6       |
| 210   | split          | ენა, ისე, პენსია, ტანი, ეტაპი     | 66    | 7×5  | 8       |
| 211   | plitvice       | შავი, ქვიშა, შალი, შვილი, ვაშლი   | 68    | 7×5  | 13      |
| 212   | plitvice       | ზღარბი, ბურღი, აუზი, აზრი, ღრუ    | 68    | 7×5  | 15      |
| 213   | plitvice       | ერი, კერძი, სიძე, სკვერი, ისევ    | 68    | 6×5  | 3       |
| 214   | plitvice       | პულსი, პლუსი, სულ, სული, პიცა     | 64    | 7×5  | 13      |
| 215   | plitvice       | საიტი, მისია, სია, ტომი, მაისი    | 66    | 7×5  | 9       |
| 216   | venice         | ვირი, იგავი, რიგი, გვარი, გრილი   | 68    | 7×5  | 9       |
| 217   | venice         | თოვლი, თვალი, თოლია, ახლო, ხალი   | 68    | 6×5  | 18      |
| 218   | venice         | ბურთი, ყრუ, ყურები, ყური, ერთი    | 68    | 6×5  | 6       |
| 219   | venice         | ასე, მენიუ, ნემსი, მინა, სუნი     | 64    | 7×5  | 10      |
| 220   | venice         | დისკი, კოდი, ოფისი, სიო, იოდი     | 64    | 7×5  | 2       |
| 221   | florence       | დაფა, მზა, ფარდა, ფაზა, ფრაზა     | 64    | 7×5  | 8       |
| 222   | florence       | ზეიმი, ზეგ, გმირი, გემი, ირემი    | 66    | 7×5  | 4       |
| 223   | florence       | ტორტი, მტერი, მეტრო, მეტრი, ტოტი  | 70    | 6×5  | 10      |
| 224   | florence       | ტერფი, რეპი, ტირე, ფერი, პოეტი    | 66    | 7×5  | 5       |
| 225   | florence       | ასი, პაროლი, როლი, სპილო, ლარი    | 68    | 7×5  | 20      |
| 226   | rome           | ბეკონი, კენჭი, კოჭი, კიბე, ობი    | 68    | 7×5  | 4       |
| 227   | rome           | ბადე, ბაზა, ზებრა, ბარდა, ზედა    | 66    | 7×5  | 7       |
| 228   | rome           | ქიმია, ქირა, არქივი, ქვა, ქარი    | 68    | 6×5  | 9       |
| 229   | rome           | პორტი, ნიორი, ტონი, პონი, პირი    | 66    | 7×5  | 4       |
| 230   | rome           | ქვები, ქედი, დოქი, ვიდეო, ექო     | 64    | 7×5  | 5       |
| 231   | amalfi         | ფერმა, თემა, ერთად, ადრე, ფრთა    | 66    | 7×5  | 5       |
| 232   | amalfi         | ფარი, რადიო, მოდა, დრო, ფირმა     | 64    | 7×4  | 11      |
| 233   | amalfi         | ლეიბი, ღილები, ღილი, აბი, ბაღი    | 68    | 7×5  | 10      |
| 234   | amalfi         | კობრა, კარი, კარგი, იოგა, როკი    | 66    | 7×5  | 14      |
| 235   | amalfi         | ორი, ჭაობი, ჭია, ბზარი, ზარი      | 62    | 7×5  | 10      |
| 236   | taormina       | შუა, უკან, შინ, ბანკი, უბანი      | 62    | 7×5  | 13      |
| 237   | taormina       | თმა, მთა, მხარე, გარე, გარეთ      | 62    | 7×5  | 7       |
| 238   | taormina       | ფილტვი, ვალი, ლიფტი, ვილა, იაფი   | 70    | 6×5  | 7       |
| 239   | taormina       | უჯრა, ლურჯი, ხარი, ხარჯი, არხი    | 66    | 7×5  | 10      |
| 240   | taormina       | მაშინ, ნუში, შხამი, ხმა, მუხა     | 64    | 7×5  | 10      |
