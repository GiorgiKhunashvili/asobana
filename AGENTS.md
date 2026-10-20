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
- **Plural noun forms are optional bonuses only**, never required answers or
  accepted-answer variants, starting with revision 14. Examples include `ფეხები`
  and `ქვები`. Keep individually verified plurals in the wider bonus dictionary.
  Review each spelling and sense; do not classify plurals solely by their ending.
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
- The owner’s unused-word review on 2026-10-18 excludes `ბალონი`, `ბაჟე`,
  `გარაჟი`, `ზუსტად`, `კარგად`, `კასეტი`, `უცებ`, `ფანარი`, `შიგნით`,
  `ძალიან`, `ხშირად` and `ჯიპი` from required answers, variants and bonuses
  starting with revision 15. The other 140 words in that 152-word list are
  explicitly owner-approved for required use, subject to all existing rules.
  This review does not approve new words outside that list.
- **Required answers may repeat only at least 75 levels apart** across the entire
  campaign, including country/chapter boundaries and accepted variants. Level 10
  may recur at level 85, never earlier. No repeated answer within a board. Bonus
  words may recur freely; they do not reset this gap and must not award twice on
  one board. This owner decision supersedes the no-repetition language in
  `artifacts/codex-journey-campaign-prompt.md` and historical documents.
- **Reducing repetition is the primary campaign optimization objective**, within
  all vocabulary, 75-level gap, progression, layout and pacing rules. Maximize
  distinct required spellings across the campaign first, then reduce words used
  three/four times and prefer longer repeat gaps. Search unused approved words and
  new wheels/crossings before reusing convenient words. The owner is willing to
  review the full 800+ word pool and help expand it; prepare an explicit review
  list when needed. Willingness to review is not approval of unreviewed additions.
- The owner’s vocabulary expansion goal is **1,800 individually approved required
  words**. This is a planning target, not a guarantee of zero campaign repetition
  or permission to relax any rule. Revision 26 contains **1,720 required approvals**;
  another 80 approvals are needed to reach the target.
  [Expansion batch 02](docs/VOCABULARY_EXPANSION_BATCH_02.json) contains 130 entirely
  new source-checked words with draft-board examples. The owner approved all 130
  for the main word list; revision 17 adds their recorded noun/adjective senses
  to the reference dictionary and required allowlist.
  [Expansion batch 03](docs/VOCABULARY_EXPANSION_BATCH_03.json) contains 140 new
  source-checked candidates with individual draft-board examples. The owner approved
  131 for the main list and rejected `ბიძია`, `გვიანი`, `დედიკო`, `მამიკო`,
  `მუშაკი`, `უკანა`, `წლიური`, `ხანი` and `ჯერი`. These nine are excluded from
  required answers, variants and bonuses from revision 18 through
  `owner-expansion-batch-03` in `word-policy.json`. Do not propose reviewed
  spellings again as unseen words.
  [Expansion batch 04](docs/VOCABULARY_EXPANSION_BATCH_04.json) contains 148 reviewed
  candidates. The owner approved **129** and rejected **19**: `აირი`, `ბოხი`,
  `ზეპირი`, `მოდემი`, `მოვალე`, `მტრული`, `რძიანი`, `საცალო`, `საცოლე`,
  `სიდიდე`, `სრიალა`, `უგონო`, `უშაქრო`, `უცხიმო`, `უძირო`, `უძლური`,
  `შაურმა`, `ცვლადი` and `წრიული`. The rejected spellings are excluded from
  required answers, variants and bonuses from revision 19 through
  `owner-expansion-batch-04`. Preserve all earlier decisions. Do not present
  any of these 148 spellings again as a new review batch.
  [Expansion batch 05](docs/VOCABULARY_EXPANSION_BATCH_05.json) contains **100 new
  candidates**. The owner approved **88** and rejected **12**: `აქტი`, `ბაგა`,
  `დომენი`, `დუღაბი`, `ეჟვანი`, `ლაქი`, `პწკარი`, `სამთო`, `ტირიფი`, `ფლანგი`,
  `ყანჩა`, `ყულფი`. These 12 are excluded from required answers, variants and bonuses
  from revision 20 through `owner-expansion-batch-05`. The approved senses enter
  the main pool, which contained 1,569 words in revision 20. Keep their source provenance and
  individual sense decisions; all earlier exclusions and bonus reservations remain.

- The owner reviewed the full 372-word filtered bonus list and explicitly approved
  **325 words for required answers**, reserving the other **47 for bonuses only**.
  The exact lists and recorded senses are in `everyday-targets-v16.json`; enforce
  the 47 reserved spellings through `owner-reviewed-bonus-only` in
  `word-policy.json`, including accepted variants. These 325 include the ten
  previously approved additions; do not count them twice. This decision resolves
  the earlier pending 135-candidate proposal and preserves the bonus-only status
  of `თელა`, `რაზა` and `ურცი`.
- The owner’s full-pool review excludes the 53 spellings recorded under
  `owner-full-pool-review` in `word-policy.json` from required answers, variants and
  bonuses starting with revision 16. The final 53-word list supersedes the earlier
  interrupted 49-word list. These individual exclusions override prior approvals;
  they do not ban all numerals or adverbs. Historical packs remain unchanged.
- The owner completed the replacement review on 2026-10-19, selecting `კოკა`
  for the final slot. [The exact review](docs/VOCABULARY_REPLACEMENTS_APPROVED_01.json)
  records 29 removals, 29 approved replacements and eight rejected proposals.
  `owner-replacement-review` excludes all 37 rejected spellings from required
  answers, variants and bonuses starting with revision 24. The absent spellings
  `კოლო` and `სურმა` were explicitly skipped. Other unselected alternatives are
  not approved. That revision retained 1,569 main words. Rebuild the 295-board campaign under
  every existing rule; earlier append-only guarantees describe historical
  revisions and do not require retaining a now-rejected word in current play.
- [Expansion batch 06](docs/VOCABULARY_EXPANSION_BATCH_06.json) contains 100
  reviewed candidates. On 2026-10-19 the owner approved **76** and rejected **24**:
  `არშია`, `ბადურა`, `დოგი`, `დუნე`, `თხემი`, `იადონი`, `ლობი`, `ნაცხი`,
  `ნაწერი`, `პოპი`, `პრესი`, `საგა`, `საგზაო`, `სადაფი`, `საერო`, `სავალი`,
  `სატეხი`, `სატინი`, `ტოტემი`, `ფორა`, `შასი`, `ჩანგი`, `ჭედური`, `ხილული`.
  These 24 are excluded from required answers, variants and bonuses from revision
  25 through `owner-expansion-batch-06`. The 76 approved senses expand the main
  pool to 1,645 while all earlier approvals, exclusions and bonus reservations
  remain. Preserve individual source provenance and do not propose reviewed words
  again as unseen candidates. Optimize the full 295-board campaign under all rules.
- [Expansion batch 07](docs/VOCABULARY_EXPANSION_BATCH_07.json) contains 100
  reviewed candidates. On 2026-10-19 the owner approved **75** and rejected **25**:
  `ალტი`, `ბრგე`, `ბურჯი`, `გეკონი`, `ელიფსი`, `ემალი`, `მრუდე`, `ნარევი`,
  `პრასი`, `რელე`, `რუპორი`, `რუსი`, `რუსული`, `ტორსი`, `ტრეკი`, `უთავო`,
  `უკბილო`, `უქარო`, `უცოლო`, `უხმო`, `ღიობი`, `ჩეხი`, `ჩეხური`, `ჩინური`,
  `ხლართი`. These spellings are excluded from required answers, variants and bonuses
  from revision 26 through `owner-expansion-batch-07`. The 75 approved senses expand
  the main pool to 1,720, leaving 80 approvals to reach 1,800. All earlier decisions
  remain. Preserve individual source provenance and do not propose reviewed words
  again as unseen candidates. Optimize the full 295-board campaign under all rules.
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

- The owner approved the Malta extension on 2026-10-18: append **Valletta
  (ვალეტა), levels 241–245**, then **Mdina (მდინა), levels 246–250**, after Italy.
  Revision 21 retains levels 1–240 exactly as revision 20 and uses the existing
  reviewed vocabulary. Prioritize previously unused approved words for the 50 new
  answer slots; any reused word must satisfy the campaign-wide 75-level gap.
  `content/journey-v21.json` records that route; keep `journey-v13.json` unchanged
  for historical packs. Malta has its own backgrounds and collectible postcards.

- The owner approved the Tunisia extension on 2026-10-18: append **Carthage
  (კართაგენი), levels 251–255**, **Sidi Bou Said (სიდი ბუ საიდი), 256–260**,
  then **El Jem (ელ-ჯემი), 261–265**, after Malta. Revision 22 retains all first
  250 boards exactly as revision 21. Use existing approved words, maximizing
  previously unused words across the 75 added slots under every existing gate.
  `content/journey-v22.json` records that route; historical manifests remain
  immutable. Each Tunisia stop has its own background, postcard and approved fact.

- The owner approved the Spain extension on 2026-10-18: append **Barcelona
  (ბარსელონა), 266–270**, **Valencia (ვალენსია), 271–275**, **Madrid (მადრიდი),
  276–280**, **Granada (გრანადა), 281–285**, **Córdoba (კორდობა), 286–290**, and
  **Seville (სევილია), 291–295**, after Tunisia. Revision 23 retains all first
  265 boards exactly as revision 22. Maximize previously unused approved words
  across the 150 new slots while preserving every other rule. The current route is
  `content/journey-v23.json`; historical manifests remain immutable. Each Spain
  stop has its own generated background, postcard and owner-approved fact.

- Maintain **295 levels in 59 journey stops, with five required answers each: 1,475
  answer slots, with the 75-level repetition gap**.
  Required answers have 3–6 Georgian letters; no two-letter targets.
- Provide actual five- and six-letter answers, not just larger letter wheels.
  Introduce a five-letter answer in levels 1–5; every level from 6 onward needs at
  least one answer of five or six letters, and every level from 26 needs at least two.
- Six-letter answers start in levels 16–25, with at least four boards containing one
  in levels 16–25, eight in levels 26–40, and seven in levels 41–50. Every five-level stop from level 51 onward needs at least one six-letter board.
  The journey pack introduces five-letter words at level 3 and six-letter words at 18.
- Preserve the gradual wheel progression: five tiles for levels 1–5, six for 6–25,
  seven for 26–295 in the journey pack. Seven tiles do not permit seven-letter targets.
- Preserve chapter challenge/recovery pacing: the third board is the chapter peak,
  the fourth is at least two difficulty points lower, and upward transitions are at
  most ten points. Difficulty estimates do not substitute for playtesting.
- Keep connected, readable crossword layouts, valid crossings, exact tile
  multiplicities, no accidental word runs and no duplicate wheels. Preserve the
  existing layout, density, phone-cell-size and wheel-touch-target validation gates.
- Recognize all eligible formable bonus words from the wider dictionary. Bonuses
  never block completion. Preserve the bonus meter, rewards and destination postcards.

## Economy and saves

- The owner approved a **test banner at the bottom of the game screen** on
  2026-10-20. Use Google's demo banner only, in a reserved footer separated from
  the letter wheel and hint buttons. Preserve their touch targets and existing
  saves; this experiment does not authorize live ads.

- The owner approved the economy on 2026-10-19: **200 starting coins**, **20 coins
  per completed level**, **20 coins per letter hint** and **50 coins per word hint**.
  Keep the **3-coin bonus-word reward** and **one free letter hint per ten bonus
  words** unchanged. Prices and displayed amounts come from the shared economy.
- The starting balance applies only to new games or an explicit reset. Loading or
  migrating an existing save must preserve its earned balance, completed levels,
  partial progress, paid hints, bonus credits and postcards without repricing past
  actions or granting a starting-balance top-up. Future actions use the new prices.
- The owner approved **75-coin optional rewarded ads** on 2026-10-19, starting
  with **Google AdMob demo ads only** on the coins screen and unaffordable hint
  buttons. The owner requested a direct flow: show the ad/+75 offer on the hint
  button, then present on that press without routing through a second page.
  Preload when coins are low; cancel a pending presentation when leaving the
  board. Never show ads without a watch press or spend the reward on a hint
  automatically. Credit only the SDK's earned-reward event;
  save the claim receipt and balance atomically so retries, duplicate callbacks
  and restarts cannot award the same claim twice. Preserve existing saves.
  Production ads require a separate account, consent and release setup.
- The owner approved an optional **rewarded "×2" offer on the level-complete
  screen** on 2026-10-19 (same demo ads), shown beside the level reward: watching
  it pays the level's completion reward once more, **20 extra coins per level, at
  most once per level**, including after restarting or reopening a finished level.
  Continuing without watching stays the primary action; only a press presents,
  and leaving the screen cancels a waiting ad. Credit only the earned event,
  recording the receipt, balance and doubled level in one transaction.

## Sources of truth

Read these before editing content; current filenames below describe revision 26:

- [Grammar and name exclusions](content/dictionaries/word-policy.json).
- [Required-word allowlist and individual previous-word decisions](content/dictionaries/everyday-targets-v26.json).
- [Reference dictionary](content/dictionaries/discovery-v26-ka.json) and
  [provenance/licensing](content/dictionaries/README.md).
- [Journey vocabulary review and all 295 boards](docs/VOCABULARY_REVIEW_V26.md).
- [Full vocabulary list for owner review](docs/VOCABULARY_OWNER_REVIEW_V26.md).
- [Current journey manifest](content/journey-v23.json).
- [Spain artwork and generation prompts](docs/SPAIN_ARTWORK.md).
- [Tunisia artwork and generation prompts](docs/TUNISIA_ARTWORK.md).
- [Malta artwork and generation prompts](docs/MALTA_ARTWORK.md).
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
   rebuilding and save migration. Solve all 295 levels via `npm run validate:content`
   (also included in `npm run check`). For bundled mobile content changes, verify an
   iOS export from `mobile` with `npx expo export --platform ios`.
5. Update the review and content documentation with actual results and limitations.
   Do not describe an export as a native-device test or a TestFlight upload.
   Building or uploading to TestFlight requires the user's request for that release;
   content editing alone does not authorize an upload.

## Simulator cleanup

- When finished working, shut down **all running simulators** and quit the
  Simulator app, including simulators that were already open before the task.
  The owner explicitly requested this on 2026-10-20. Preserve installed apps and
  saves; shutting down does not authorize erasing simulator data.

When the owner changes these rules, update this file and the relevant enforced
policies/tests together. Update the current-file pointers when a new revision lands.
