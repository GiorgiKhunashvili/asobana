# First TestFlight content

The first beta target is **50 levels**, with **4–5 crossword answers in every
level**. Bonus words do not count toward this minimum. This is our product target,
not an Apple level-count requirement. It gives testers enough progression to
exercise repeated letters, hints, chapter unlocks and return sessions.

## Bundled pack

- `content/levels/beta.v2.json`: 50 levels across ten chapters; 15 four-answer
  puzzles followed by 35 five-answer puzzles. Maximum grid: seven rows or columns;
  maximum wheel: eight distinct tile IDs, including repeated letters.
- 137 distinct target words; 144 distinct words across targets and bonuses.
  `content/dictionaries/beta-ka.json` contains 147 reference-checked entries
  including the three additional source words required for recipe reproduction.
- All 50 grids were inspected as text layouts and passed Python/TypeScript
  semantic validation: connected crossings, matching letters, bounds, multiset
  availability, no parallel overlap, no unlisted adjacent runs, unique target sets.
- Source spellings and short glosses were checked against the Georgian sections
  of individual Wiktionary entries on 2026-10-14. Source revision links and
  CC BY-SA 4.0 attribution are recorded per entry. This is an assistant reference
  and layout review, **not native-speaker editorial approval**. The playable
  status remains `prototype-reference-checked`.
- Difficulty scores are generator heuristics. Native Georgian review and tester
  feedback should determine word familiarity, answer acceptability and pacing.
  Chapter names are progression scenery, not semantic categories for answers.

## Existing saves

The pack keeps `geowords-prototype` as its ID and advances content revision 1 → 2.
The first four level IDs, chapters, original answers and tile IDs are retained;
those puzzles now contain four answers each. Historical revision 1 is kept intact
for validation and migration, and is no longer the active catalog.

SQLite upgrades the snapshot inside an exclusive transaction and increments the
save revision once. Coins, settings, current level, bonuses and hint usage stay
unchanged. Previously completed levels remain complete, including their added
answers; no extra completion reward is paid. Partial solved answers are mapped by
spelling and paid cell hints by letter position within the retained answers.
Unknown revisions, corrupt saves and incompatible removals fail without rewriting
the old save. A failed upgrade write rolls back and can be retried.

## Reproduce and validate

```sh
puzzle-generator/.venv/bin/python scripts/rebuild-beta-content.py
npm run check
puzzle-generator/.venv/bin/pytest puzzle-generator
puzzle-generator/.venv/bin/ruff check puzzle-generator scripts/rebuild-beta-content.py
puzzle-generator/.venv/bin/mypy puzzle-generator/src
```

The checked-in `beta.v2.recipes.json` records source words and generation seeds;
the first tutorial grid is a manual extension. Rebuilding writes to ignored
`artifacts/content-expansion/rebuilt-draft.v2.json`. Rebuild output is always
`generated-draft`, even when it reproduces a reviewed layout. The Python regression
test compares every grid, tile, answer, bonus and chapter against the bundled pack
while preserving that draft status. Promotion requires a separate reference/layout
review; generation never grants approval.

Legacy rule tests retain the original two-word fixtures to isolate generic rules.
The beta suite validates the active pack, solves all 50 levels, checks one completion
reward per level, bonus separation, chapter progression and valid save snapshots.
The real SQLite migration suite covers partial and completed old saves, reopen,
store initialization, stale writers, corruption and failed-write rollback.

The earlier Maestro flows assume the old two-word campaign and are historical.
`mobile/e2e/beta-upgrade.yaml` is the new save-upgrade flow: run against the completed
four-level prototype save with 191 coins. It does not reset data. It checks the four
completed levels, fifth-level bonus/answers/reward, sixth-level unlock and restart.

## Verification on 2026-10-14

- `npm run check`: types, ESLint, 72 Jest tests in seven suites, all 50 engine
  solutions and Prettier pass. Python: 49 tests, Ruff and strict Mypy pass.
- Hermes exports succeed for iOS and Android with the bundled pack and assets.
- iPhone 17 Pro / iOS 26.5 / Expo Go: actual revision 1 save upgraded without
  losing 191 coins or any of its four completed levels. New ka-005 counted four
  target answers, rewarded its bonus separately, completed once for 219 coins,
  unlocked ka-006, then restored ka-006 and 219 coins after process restart.
- Screenshots/debug output are under ignored `artifacts/maestro-beta-upgrade-final`.
  The initial native runs hit stale Metro files/IPv6 binding; refreshing its cache
  and binding IPv4 fixed the development connection. The new flow passed.
- Native beta flow used tap input on a four-answer board. Five-answer boards and
  every bonus were validated in engine tests. No new Android-native beta flow,
  signed TestFlight build or physical-device review was performed in this change.

## Level review table

This table lists crossword answers only; bonuses remain separate in the JSON.

| Level  | Answers | Target words                    | Grid  | Tiles |
| ------ | ------- | ------------------------------- | ----- | ----- |
| ka-001 | 4       | მზე, მე, ეზო, ზომა              | 3 × 6 | 5     |
| ka-002 | 4       | დედა, მამა, თმა, მთა            | 4 × 6 | 8     |
| ka-003 | 4       | კარი, კანი, კერა, კირი          | 5 × 7 | 7     |
| ka-004 | 4       | გზა, ზღვა, ვაზა, ვაზი           | 6 × 4 | 7     |
| ka-005 | 4       | სია, აი, ია, ალი                | 4 × 4 | 4     |
| ka-006 | 4       | ორი, ღერო, დღე, ღორი            | 4 × 6 | 6     |
| ka-007 | 4       | სამი, ძმა, ასი, სიმი            | 6 × 4 | 6     |
| ka-008 | 4       | ხილი, ხელი, ხე, ხიდი            | 5 × 5 | 6     |
| ka-009 | 4       | ბინა, ათი, ია, ბანი             | 6 × 4 | 5     |
| ka-010 | 4       | ხალი, ჩალა, აი, ჩაი             | 5 × 4 | 6     |
| ka-011 | 4       | ძირი, პირი, პიკი, კირი          | 6 × 4 | 6     |
| ka-012 | 4       | კაცი, ცა, ომი, ია               | 4 × 4 | 6     |
| ka-013 | 4       | სმა, მთა, თმა, თვე              | 5 × 4 | 6     |
| ka-014 | 4       | ასი, სუნი, ფასი, სია            | 6 × 4 | 6     |
| ka-015 | 4       | ძველი, ხელი, ხე, ველი           | 6 × 6 | 6     |
| ka-016 | 5       | კაბა, ბამბა, ბაბუა, კამა, ბუ    | 5 × 5 | 7     |
| ka-017 | 5       | ენა, ჯამი, წვიმა, ჯანი, მინა    | 7 × 6 | 8     |
| ka-018 | 5       | ეტლი, თოვლი, ყველი, ყელი, ტყე   | 7 × 7 | 8     |
| ka-019 | 5       | თივა, კილო, კოჭი, თვალი, ვალი   | 5 × 7 | 8     |
| ka-020 | 5       | ლომი, გემო, გული, გემი, მე      | 7 × 6 | 7     |
| ka-021 | 5       | ვირი, ფირი, ფარი, ცა, ცივი      | 5 × 7 | 7     |
| ka-022 | 5       | ზევით, თითი, თევზი, ზეთი, თვე   | 7 × 7 | 7     |
| ka-023 | 5       | ზონა, ხატი, ტანი, ტონი, აი      | 4 × 7 | 7     |
| ka-024 | 5       | ალი, გორა, ცოლი, ორი, ცალი      | 6 × 5 | 7     |
| ka-025 | 5       | ძილი, ფერი, ძირი, რძე, ფირი     | 5 × 5 | 7     |
| ka-026 | 5       | ქურა, რუხი, ია, არხი, ქარი      | 7 × 4 | 6     |
| ka-027 | 5       | ზარი, ორი, ეზო, ჯორი, ჯარი      | 7 × 6 | 7     |
| ka-028 | 5       | მადა, დანა, მწვანე, ენა, მე     | 6 × 6 | 8     |
| ka-029 | 5       | ასი, ძალა, ძაღლი, საათი, ათი    | 7 × 6 | 8     |
| ka-030 | 5       | იაკი, ღორი, პარიკი, პარკი, კირი | 6 × 7 | 8     |
| ka-031 | 5       | ყური, როლი, ორი, რული, კილო     | 6 × 7 | 7     |
| ka-032 | 5       | ალი, კატა, ცალი, კეცი, ეტლი     | 7 × 4 | 8     |
| ka-033 | 5       | სუნი, ნული, ყველი, ყელი, ველი   | 6 × 7 | 8     |
| ka-034 | 5       | თავი, თივა, ცა, ათი, ნავი       | 5 × 7 | 6     |
| ka-035 | 5       | ომი, ქედი, ლომი, მე, ლოდი       | 6 × 6 | 7     |
| ka-036 | 5       | ქორი, ქარი, ტოტი, ტორტი, ია     | 6 × 7 | 7     |
| ka-037 | 5       | წერა, ზარი, აი, ბეწვი, ვაზი     | 5 × 7 | 8     |
| ka-038 | 5       | ზომა, ენა, მზე, ეზო, ზემო       | 5 × 5 | 6     |
| ka-039 | 5       | ხელი, ხალი, ძმა, ხე, ხმა        | 6 × 5 | 7     |
| ka-040 | 5       | კარი, კორტი, ჩაი, კარტი, ორი    | 6 × 7 | 7     |
| ka-041 | 5       | ველი, ძილი, ძველი, თვე, თბილი   | 7 × 6 | 8     |
| ka-042 | 5       | მინა, სამი, ასი, მისი, სია      | 7 × 5 | 6     |
| ka-043 | 5       | ქვიშა, არხი, აი, შავი, ქარი     | 7 × 6 | 7     |
| ka-044 | 5       | მადა, მე, დღე, ბამბა, ღამე      | 7 × 7 | 8     |
| ka-045 | 5       | ბარი, პარკი, პური, კაბა, ია     | 5 × 7 | 8     |
| ka-046 | 5       | ტყე, ხატი, ხელი, ტახტი, ყელი    | 6 × 6 | 8     |
| ka-047 | 5       | პირი, პიკი, კირი, რძე, ძირი     | 6 × 7 | 7     |
| ka-048 | 5       | ხე, არხი, ღორი, ღერო, ღობე      | 7 × 5 | 8     |
| ka-049 | 5       | ჯანი, ენა, ჯამი, ზომა, ზონა     | 7 × 6 | 8     |
| ka-050 | 5       | ხილი, იხვი, ვალი, ხალი, აი      | 7 × 5 | 6     |
