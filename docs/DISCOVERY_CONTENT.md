# Discovery campaign — revision 5

The active campaign replaces sparse themed boards with 50 mixed-topic puzzles.
The UI components, styling, input, sounds, hints and economy are unchanged.
Chapter titles are neutral progression labels; historical chapter IDs remain stable
for the existing scenery palette and saved level identities. Individual boards use
neutral discovery names so completing one board does not claim its entire chapter
is finished.

## Progression

| Levels | Physical wheel tiles               | Crossword answers |
| ------ | ---------------------------------- | ----------------- |
| 1–10   | 5                                  | 4–5               |
| 11–20  | 5                                  | 5                 |
| 21–30  | 5–6, six first appears at level 22 | 5                 |
| 31–40  | 6                                  | 5                 |
| 41–50  | 5–6, with easier recovery boards   | 5                 |

Physical tiles include repeats: level 17 has two ი tiles. No board exceeds six
tiles or seven rows/columns. Every tile is necessary for at least one target;
wheels are derived from the maximum per-letter multiplicity across answers.
All 50 wheels and answer sets are distinct. At most one target per board is two
letters; the attention particle აი is accepted as a bonus, never required.

There are **246 answer slots, 151 distinct targets, four four-answer boards and
46 five-answer boards**. A target appears at most six times across the campaign
and twice per five-level chapter. Consecutive boards share at most one target.
These constraints reduce repeated puzzles without pretending that familiar short
words can be eliminated entirely from five-tile Georgian wheels.

Difficulty estimates use tile count, target count, word lengths and editorial
familiarity estimates. The transparent score is:

`min(100, 15 × (tiles − 4) + 8 × (targets − 4) + 2 × longestWord + Σ[2 × (length − 2) + 5 × (familiarity − 1)])`

Easy is below 45, medium below 65, otherwise hard. The first six-tile board scores
64 (medium). Difficulty intentionally rises and relaxes; these are assistant
estimates, not calibrated player telemetry or corpus frequency measurements.

## Bonus recognition

Every verified dictionary word formable from the actual wheel is included,
excluding that board's crossword answers. Mixed topics, past targets and future
targets do not disqualify valid bonuses. For example, თემა is a bonus in level 2
and a target in level 12. Bonus discovery never fills a crossword answer or
changes the required target count. Existing rewards apply: +3 once per bonus per
level, +25 once for completion, cell hint 15 and word hint 40.

There are **127 bonus opportunities across all 50 levels**, covering 39 different
spellings. Every level has at least one. Recognition is bounded by the bundled
421-entry reference dictionary; it is not a complete Georgian dictionary.

## Reference and layout review

`discovery-ka.json` preserves the previous 320 entries exactly and adds 101
individually selected entries. Exact Wiktionary revision links, short glosses and
CC BY-SA 4.0 attribution are retained for each entry. The Georgian sections and
inflection references for the additions were inspected through the public
MediaWiki API on 2026-10-15. Missing entries, names-only entries, unsupported
senses, archaic/dialect-only candidates and offensive candidates were excluded.
No automatic source lookup grants editorial approval.

All 50 target/bonus lists and text grids were inspected before promoting the
pack to `prototype-reference-checked`. This is assistant reference/layout review;
**native Georgian editorial review and player difficulty testing remain pending**.
The familiarity metadata is an authoring estimate (1 = familiar, 2 = less direct).
No invented words or inferred unverified spellings are bundled.

The mobile Metro configuration explicitly watches the shared `content/` directory,
so JSON revisions refresh with their TypeScript validators during development.

The recipes reproduce each board exactly, including wheel order, coordinates,
bonuses and difficulty. Rebuilds remain `generated-draft`; the mobile loader
rejects them until separately reviewed and promoted:

```sh
PYTHONPATH=puzzle-generator/src puzzle-generator/.venv/bin/python scripts/rebuild-discovery-content.py
npm run validate:content
```

Python and TypeScript independently enforce stage limits, multiplicities, target
counts, repetition limits, neutral chapter mapping, complete bonuses and scores.
The generic validators also enforce connected crossings, no conflicting cells,
no accidental adjacent words, valid Unicode and dictionary membership.

## Existing saves

The pack ID and ka-001…ka-050 level IDs are unchanged. Immutable revisions 1–4
remain bundled to validate old saves before upgrading directly to revision 5.
Completed levels remain complete. Partial solved words retain matching spellings,
then transfer retired answers as solved-word credits. Paid hint letters/credits
transfer; coins, current level, unlocks, settings and hint counters survive.
Previously earned bonus coins remain even if a retired board's bonus no longer
exists. Found bonus markers persist wherever the replacement board supports them.
Completion rewards are never paid again for completed boards.

SQLite upgrades are transactional and written once; failed writes roll back,
unknown/corrupt saves are retained and stale writers are rejected. Revision 5
accepts the old 860-hint counter allowance plus at most 49 new cells and five word
hints (914 total). This is a compatibility bound, not a new gameplay allowance.

## Validation and delivery

- 101 Jest tests in 12 suites, including all targets and all 127 bonuses, duplicate
  rewards, all historical save revisions, rollback and disk close/reopen.
- 60 Pytest tests, exact draft reproduction, JSON Schema, Ruff and strict Mypy.
- Strict TypeScript, ESLint, Prettier and complete 50-level solve checks.
- iOS and Android offline Hermes exports with bundled Georgian fonts.
- iPhone 17 Pro / iOS 26.5 / Expo Go: existing 192 coins and level 8 partial
  progress survived loading revision 5. Level 8 displayed five wheel tiles and
  five answers. დოლი paid +3 (195 coins), duplicate submission paid nothing,
  the crossword count stayed 1/5, and solving the remaining targets paid +25
  (220 coins) and unlocked level 9. A full JS reload restored 220 coins,
  5/5 answers and the found bonus; level 9 then opened at 0/5. No UI implementation
  changes were needed. This was a five-tile simulator smoke test, not a full native
  playthrough or a new Android-native run.

This source/content revision has not been uploaded to TestFlight. TestFlight
0.1.0 (2) still contains revision 4. A new binary is needed to distribute revision 5.

## Level review table

Wheel order below matches the initial in-game wheel. Grids are rows × columns.

| Level | Tiles | Wheel  | Targets                        | Bonuses                      | Grid  | Score |
| ----: | ----: | ------ | ------------------------------ | ---------------------------- | ----- | ----: |
|     1 |     5 | ეომაზ  | მე, მზე, ეზო, ზომა             | ზემო                         | 5 × 3 |    31 |
|     2 |     5 | ემთახ  | თხა, მთა, ხე, თმა              | თემა, მე, ხმა                | 4 × 4 |    27 |
|     3 |     5 | ისაჭლ  | ასი, ალი, სილა, ია, ჭია        | აი, ის, სალი, სია            | 6 × 3 |    41 |
|     4 |     5 | დიარლ  | ლარი, დარი, და, დილა           | აი, ალი, ია, ლირა, რა        | 4 × 4 |    35 |
|     5 |     5 | ზიარხ  | ხარი, არხი, ხაზი, ზარი, რა     | აი, ია                       | 4 × 7 |    47 |
|     6 |     5 | ინშვა  | შინ, ნავი, ვინ, შავი           | აი, ია                       | 4 × 5 |    35 |
|     7 |     5 | თისაჩ  | თასი, სია, ჩაი, ის, ათი        | აი, ასი, ია                  | 3 × 6 |    41 |
|     8 |     5 | მდიოლ  | მოდი, ლომი, ლოდი, იდო, ომი     | დოლი                         | 4 × 6 |    47 |
|     9 |     5 | ერაქვ  | ქერა, ქვა, აქ, რვა, აქვე       | რა                           | 5 × 4 |    43 |
|    10 |     5 | ოეგზმ  | გემო, ეგ, ზეგ, ეზო, ზემო       | მე, მზე                      | 5 × 5 |    43 |
|    11 |     5 | ცილაო  | ცოლი, ალი, ოცი, ცალი, ცა       | აი, ია                       | 3 × 7 |    43 |
|    12 |     5 | ლათემ  | თმა, მთა, მელა, მალე, თემა     | მე                           | 6 × 4 |    47 |
|    13 |     5 | ტბნია  | ტანი, ბატი, ტბა, ია, ბინა      | აი, ბანი                     | 4 × 6 |    45 |
|    14 |     5 | ისრფა  | სია, ფარი, ფასი, არის, რა      | აი, ასი, ია, ის              | 5 × 4 |    45 |
|    15 |     5 | ქიათვ  | ათი, თავი, ქვა, თივა, იქ       | აი, აქ, ია                   | 7 × 3 |    43 |
|    16 |     5 | ინაეშ  | ენა, შენი, შინ, შენ, ია        | აი                           | 6 × 4 |    41 |
|    17 |     5 | მასიი  | ასი, მისი, სამი, სია, სიმი     | აი, ია, ის, სმა              | 7 × 4 |    52 |
|    18 |     5 | დიაომ  | იდო, ომი, მოდა, და, მოდი       | აი, ია, ოდა                  | 3 × 7 |    43 |
|    19 |     5 | რმახი  | ხარი, ხმა, რა, არხი, მხარი     | აი, ია                       | 5 × 5 |    49 |
|    20 |     5 | ისთაა  | საათი, ათასი, ის, ათი, თასი    | აი, ასი, ია, სია             | 6 × 5 |    56 |
|    21 |     5 | ვითლა  | თავი, თვალი, თივა, ვალი, ალი   | ათი, აი, ია                  | 5 × 6 |    53 |
|    22 |     6 | ილამეგ | ალი, გემი, მელა, მგელი, მე     | აი, ეგ, ია, მალე             | 4 × 7 |    64 |
|    23 |     5 | ანვკი  | კავი, ია, კანი, ნავი, ვინ      | აი                           | 4 × 6 |    45 |
|    24 |     5 | ეთმქა  | მთა, აქ, თმა, აქეთ, თემა       | მე                           | 3 × 6 |    43 |
|    25 |     6 | ანილვბ | ვინ, ნავი, ბალი, ვალი, ბინა    | აი, ალი, ბანი, ია            | 6 × 4 |    64 |
|    26 |     5 | დლაოი  | იდო, ლოდი, დილა, და, დოლი      | აი, ალი, ია, ოდა             | 7 × 4 |    50 |
|    27 |     5 | სილმა  | სილა, ასი, სამი, სია, ლამის    | აი, ალი, ია, ის, სალი, სმა   | 5 × 5 |    51 |
|    28 |     6 | ვზთსეი | ზეთი, ეს, ზევით, თვე, თევზი    | ის                           | 6 × 5 |    66 |
|    29 |     5 | აშნმი  | მშია, ნამი, მინა, ია, შინ      | აი                           | 5 × 6 |    50 |
|    30 |     6 | ხალვიე | ხელი, ველი, ხევი, ხალი, ელვა   | აი, ალი, ვალი, ია, ხე, ხილვა | 7 × 4 |    66 |
|    31 |     6 | შოუირყ | ყური, ურო, შორი, შური, იყო     | ორი                          | 6 × 4 |    67 |
|    32 |     6 | ტრმქეი | იქ, მეტი, მტერი, მეტრი, ქერი   | მე                           | 7 × 5 |    73 |
|    33 |     6 | ეიჯმარ | რაიმე, მე, ჯამი, რამე, ჯარი    | აი, ია, რა, ჯერ              | 5 × 5 |    71 |
|    34 |     6 | ლეუისნ | სული, ეს, სუნი, ნული, ნელი     | ის                           | 4 × 7 |    62 |
|    35 |     6 | გწრაზე | წერა, ეგ, გარე, გზა, ზეგ       | რა                           | 4 × 6 |    58 |
|    36 |     6 | კივიაც | კივი, კაცი, ცივი, კავი, ცა     | აი, ია, იაკი                 | 4 × 5 |    62 |
|    37 |     6 | კიტურო | როკი, ორი, კორტი, ურო, ტური    | კუ                           | 5 × 7 |    76 |
|    38 |     6 | იეიმლგ | მგელი, მე, გემი, მილი, იგი     | ეგ, იელი                     | 4 × 5 |    74 |
|    39 |     6 | რძემახ | ძმა, რამე, მხარე, ხმა, ხე      | მე, რა, რძე                  | 6 × 5 |    62 |
|    40 |     6 | ზედასნ | ზედა, ზნე, სად, ენა, ეს        | და                           | 5 × 4 |    61 |
|    41 |     6 | ობიკულ | კუბი, კილო, ბოლი, ბუკი, კუ     | ბუ                           | 4 × 5 |    62 |
|    42 |     5 | ნათმი  | მთა, მათი, ნამი, ათი, მინა     | აი, თმა, ია                  | 6 × 4 |    52 |
|    43 |     6 | ბატღნი | ბინა, ბაღი, ბატი, ტბა, ტანი    | აი, ბანი, ია                 | 6 × 6 |    64 |
|    44 |     6 | რკპიია | რა, კარი, პარიკი, პიკი, პირი   | აი, ია, იაკი, კირი, პარკი    | 4 × 7 |    75 |
|    45 |     6 | რიქეამ | ქარი, ქერა, ქმარი, რაიმე, რამე | აი, აქ, ია, იქ, მე, რა, ქერი | 5 × 7 |    82 |
|    46 |     5 | რლიახ  | ლარი, არხი, ხარი, ალი, ხალი    | აი, ია, ლირა, რა             | 6 × 6 |    49 |
|    47 |     6 | ლეივიხ | ხელი, ხევი, იხვი, ხე, ხილი     | ველი, იელი                   | 5 × 6 |    62 |
|    48 |     5 | ავზნი  | ნავი, ია, ვინ, ნაზი, ვაზი      | აი                           | 3 × 7 |    45 |
|    49 |     6 | ოყმეტი | ტომი, ტყე, იყო, ომი, მეტი      | მე                           | 4 × 6 |    60 |
|    50 |     6 | ისმქთი | მისი, სიმი, იქით, ის, მითი     | იქ                           | 4 × 5 |    72 |
