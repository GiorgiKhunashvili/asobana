# Instructions for AI contributors

Read this file before changing vocabulary, generating levels, or updating campaign
content. These rules record the owner's decisions and apply throughout this repo.
Preserve them unless the owner explicitly changes the requirements. Keep this file
as the canonical rulebook; tool-specific instruction files should point here.

## Product name

- The game is **Asobana**, displayed as **ასობანა** in the Georgian interface.
  GeoWords was the working name. Preserve existing bundle, project, content-pack
  and storage identifiers when updating branding so installs and saves carry over.
- The owner selected logo concept **01**: the navy-and-gold connected **A**.
  Vector masters and advertising exports live in `mobile/assets/branding/`;
  `scripts/build-branding.cjs` generates them and the app icon.
- The studio is **Spilo Games**. The owner selected studio logo **04D-3A**:
  plum SPILO lettering with an elephant inside the P. The approved reference,
  transparent PNG and implementation handoff live in
  `mobile/assets/studio/spilo-games/`. This is separate from the Asobana game icon.

## Word selection

- Required answers must be **everyday Georgian words** with familiar, verified
  meanings. Prefer ordinary nouns, adjectives and numbers. Dictionary inclusion,
  short spelling or an AI familiarity score alone does not establish suitability.
- Valid but uncommon words are **optional bonuses only**. Never require a rare word
  to finish a level, including through an accepted-answer variant. The owner's
  examples `ურცი`, `რაზა` and `თელა` must stay out of required answers.
- Exclude **pronouns, verbs/conjugated forms, excluded verbal action forms, and
  human-name-only entries** from required answers, accepted variants and bonuses.
  Examples include `ის`, `ისინი`, `მათი`, `არის` and `იდო`. A dictionary's noun label
  does not override the existing exclusions for action forms such as `წერა` or `ჭამა`.
- The owner explicitly allows ordinary meanings that share a spelling with a name
  (for example, `ია` = violet, `ნელი` = slow, `იმედი` = hope). Review the ordinary
  sense; name overlap alone is not grounds for exclusion or automatic approval.
- Exclude **barbarisms/nonstandard foreign substitutions** from required answers,
  accepted variants and bonuses. Prefer the standard Georgian expression; frequent
  colloquial use alone is not approval. Review each sense against language sources:
  established standard Georgian loanwords are not automatically barbarisms.
  The owner explicitly excludes `რული` in all senses, including its attested
  Georgian "nap" sense; do not use that homograph to bypass the exclusion.
  Record individual decisions and sources in `word-policy.json`. New exclusions
  start with revision 13; historical dictionaries and packs remain immutable for
  save migration. This is an editorial rule, not a complete automatic classifier.
- **Required answers may repeat only at least 75 levels apart** across the entire
  campaign, including country/chapter boundaries and accepted variants. Level 10
  may recur at level 85, never earlier. No repeated answer within a board. Bonus
  words may recur freely; they do not reset this gap and must not award twice on
  one board. This owner decision supersedes the no-repetition language in
  `artifacts/codex-journey-campaign-prompt.md` and historical documents.
- Required words and variants must belong to the explicit everyday allowlist.
  Keep the larger eligible dictionary for bonus recognition: do not remove a valid
  rare word from bonus play merely because it is unsuitable as a target.
- Review additions individually for spelling, meaning, part of speech and everyday
  familiarity. Record source provenance and the editorial decision. Treat frequency
  ranks as supporting evidence with corpus limitations, never automatic approval.
  Do not invent words or claim native-speaker review without evidence.
- If familiar words cannot fill a puzzle, change the letter wheel or crossings,
  or expand the reviewed dictionary. Do not use rare filler, repeat answers inside
  the 75-level gap or weaken policy checks to make a generator succeed.

## Campaign and pacing

- Maintain **240 levels in 48 journey stops, with five required answers each: 1,200
  answer slots, with the 75-level repetition gap**.
  Required answers have 3–6 Georgian letters; no two-letter targets.
- Provide actual five- and six-letter answers, not just larger letter wheels.
  Introduce a five-letter answer in levels 1–5; every level from 6 onward needs at
  least one answer of five or six letters, and every level from 26 needs at least two.
- Six-letter answers start in levels 16–25, with at least four boards containing one
  in levels 16–25, eight in levels 26–40, and seven in levels 41–50. Every five-level stop from level 51 onward needs at least one six-letter board.
  The journey pack introduces five-letter words at level 3 and six-letter words at 18.
- Preserve the gradual wheel progression: five tiles for levels 1–5, six for 6–25,
  seven for 26–240 in the journey pack. Seven tiles do not permit seven-letter targets.
- Preserve chapter challenge/recovery pacing: the third board is the chapter peak,
  the fourth is at least two difficulty points lower, and upward transitions are at
  most ten points. Difficulty estimates do not substitute for playtesting.
- Keep connected, readable crossword layouts, valid crossings, exact tile
  multiplicities, no accidental word runs and no duplicate wheels. Preserve the
  existing layout, density, phone-cell-size and wheel-touch-target validation gates.
- Recognize all eligible formable bonus words from the wider dictionary. Bonuses
  never block completion. Preserve the bonus meter, rewards and destination postcards.

## Sources of truth

Read these before editing content; current filenames below describe revision 13:

- [Grammar and name exclusions](content/dictionaries/word-policy.json).
- [Required-word allowlist and individual previous-word decisions](content/dictionaries/everyday-targets-v13.json).
- [Reference dictionary](content/dictionaries/discovery-v13-ka.json) and
  [provenance/licensing](content/dictionaries/README.md).
- [Journey vocabulary review and all 240 boards](docs/VOCABULARY_REVIEW_V13.md).
- [Campaign rules and revision history](docs/DISCOVERY_CONTENT.md).
- [Active catalog and historical packs](mobile/src/content/catalog.ts).
- [Python word policy](puzzle-generator/src/geowords_generator/word_policy.py),
  [Python release gates](puzzle-generator/src/geowords_generator/wide.py),
  [TypeScript word policy](mobile/src/content/wordPolicy.ts) and
  [TypeScript release gates](mobile/src/content/wide.ts).

Historical documents, sample words and old packs can contain now-excluded words.
They are not permission to reintroduce them. The lists are not a complete Georgian
grammar classifier: new vocabulary still needs the editorial review above.

## Rebuild, review and validation

1. Inspect the active catalog and current review before choosing a revision. Keep
   historical packs immutable. For a new content revision, update the recipes,
   policy references, supported revision gates, catalog and migration together.
2. Use `scripts/rebuild-wide-content.py` for deterministic wide-campaign rebuilds.
   Generate a draft, review every required answer and variant, then record the exact
   draft SHA-256 in the matching `discovery.vN.review.json`. Use `--promote-reviewed`
   only after that review; do not simply refresh a digest to bypass a failed gate.
3. Keep Python generation and TypeScript runtime validation aligned. Preserve
   completed levels, partial solved credits, coins, paid hints, postcards and lifetime
   bonus rewards across save migration, including restarting the app.
4. After content or generator changes, run `npm run check` from the repo root, plus
   `uv run pytest`, `uv run ruff check .`, `uv run ruff format --check .` and
   `uv run mypy src` from `puzzle-generator`. Include meaningful coverage of vocabulary
   exclusions, rare bonuses, the 75-level gap, length progression, deterministic
   rebuilding and save migration. Solve all 240 levels via `npm run validate:content`
   (also included in `npm run check`). For bundled mobile content changes, verify an
   iOS export from `mobile` with `npx expo export --platform ios`.
5. Update the review and content documentation with actual results and limitations.
   Do not describe an export as a native-device test or a TestFlight upload.
   Building or uploading to TestFlight requires the user's request for that release;
   content editing alone does not authorize an upload.

When the owner changes these rules, update this file and the relevant enforced
policies/tests together. Update the current-file pointers when a new revision lands.
