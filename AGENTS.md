# Instructions for AI contributors

Read this file before changing vocabulary, generating levels, or updating campaign
content. These rules record the owner's decisions and apply throughout this repo.
Preserve them unless the owner explicitly changes the requirements. Keep this file
as the canonical rulebook; tool-specific instruction files should point here.

## Product name

- The game is **Asobana**, displayed as **ასობანა** in the Georgian interface.
  GeoWords was the working name. On 2026-10-20 the owner moved the app to the
  bundle ID / Android package **`ge.spilogames.asobana`** and URL scheme
  `asobana`, replacing `dev.geowords.prototype`. That is a new App Store app:
  installs and saves of the old ID do not carry over, and TestFlight builds
  0.1.0 (1)–(13) stay under the old App Store Connect record. Developer names
  follow the brand (`asobana_generator`, `@asobana/mobile`, save file
  `asobana.db`). By the owner's choice the Expo project slug stays `geowords`
  (renaming needs a new EAS project) and the internal content-pack ID stays
  `geowords-prototype` (it is in every save and frozen pack). Preserve these
  identifiers from now on so installs and saves carry over.
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
- **Board variety is the primary objective for the owner-authorized 500-level
  experiment**, superseding lifetime repetition minimization on 2026-10-20.
  Keep the campaign-wide **75-level required-answer/variant gap**, approved
  vocabulary, unique wheels, five answers, length progression, layout and pacing
  rules. Prioritize different word combinations, avoid repeatedly grouping the
  same words, vary wheel compositions and grid shapes, and distribute word reuse.
  Report lifetime repetition as a descriptive metric, not a campaign-size cap.
  Still prefer unused approved words when other variety measures are comparable.
  The owner authorized a **draft test only** using the 2,195 approvals, excluding
  skipped batch 07. Preserve the current 345 boards for this append-only trial,
  show frequency counts and percentages, and obtain the owner's choice before
  applying new levels. The active campaign remains at 345 levels.
  [The 500-level result](docs/CAMPAIGN_500_VARIETY_RESULTS.md) passes both runtime
  validators and an all-board solve. It has 1,610 distinct required words, 35.6%
  lifetime repeated slots, at most four appearances per word, median repeat gap
  209 and minimum 75. None of the 155 added boards reuses an earlier answer pair.
  It remains an isolated draft; no destinations or production integration are approved.
- The owner’s vocabulary expansion goal is **2,000 individually approved required
  words**. This is a planning target, not a guarantee of zero campaign repetition
  or permission to relax any rule. Revision 27 contains **1,997 required approvals** (277 additions since revision 26),
  which was three below the target when generated. The subsequent targeted review
  adds 78 approvals across two batches, reaching **2,075**; the 2,000-word planning target is met.
  On 2026-10-20 the owner authorized the earlier generation trial at 1,997.
  [The complete October 20 review](docs/VOCABULARY_EXPANSION_REVIEW_2026_10_20.json)
  records the approved senses, 93 explicit exclusions and 41 unapproved alternatives.
  Do not propose these reviewed spellings as unseen candidates. Preserve `კრიჭა`:
  the owner explicitly excluded only `კროჭა`. Replace `თიკანი` with `ციკანი`,
  `კალათი` with the already-approved `კალათა`, and `ნეკი` with `ნეკა`.
  Both `მენჯი` and `მუნჯი` are approved; `მენჯი` was already in revision 26.
  On 2026-10-20 the owner approved applying the exact 295-board trial as revision 27.
  That revision-27 campaign uses 1,281 distinct required words, 194 repeated slots
  (13.15%) and leaves 716 approvals unused. The 93 explicit exclusions apply from
  revision 27 through `owner-oct20-expansion`; the 41 unselected alternatives remain
  unapproved. Historical revision 26 stays immutable. The draft-only baseline-format
  trial in `artifacts/vocabulary-trial-1997/` must never replace published revision 26.
  The owner also authorized extension capacity experiments under all existing rules;
  the owner subsequently selected and authorized the 50-level Portugal/Morocco extension in revision 28.
  [Targeted batch 01](docs/VOCABULARY_TARGETED_BATCH_01.json) records **54 approved
  senses and 46 unapproved alternatives** from 100 candidates. The exact 54-word
  approval list is canonical; preserve the source-linked senses, including the
  explicitly approved literary-labelled `აისი`. These 54 are integrated in revision 28; historical revision 27 retains 1,997 approvals and 295 boards.
  Unselected alternatives are not explicit all-gameplay exclusions and must not be
  presented again as unseen candidates. This review does not authorize treating
  independent example boards as a validated campaign extension.
  [Targeted batch 02](docs/VOCABULARY_TARGETED_BATCH_02.json) records **24 approved
  senses and 26 unapproved alternatives**. Preserve the individual approved senses,
  including source-labelled literary `დაისი` and historical `ხარკი`. Together the
  targeted batches add 78 approvals, bringing the total to 2,075; all 78 are integrated in revision 28. Unselected words are not explicit all-gameplay exclusions.
  The owner approved applying the validated 50-level extension with Portugal and
  Morocco, backgrounds and postcards on 2026-10-20. Revision 28 contains 2,075
  required approvals, 345 boards and 1,414 distinct answers (18.03% repeated slots).
  [Targeted batch 03](docs/VOCABULARY_TARGETED_BATCH_03.json) records **10 approved
  senses**: `გნომი`, `დაღი`, `ზორბა`, `ლახტი`, `ტლაპო`, `უბიწო`, `ქნარი`,
  `ქეჩა`, `ცვარი` and `ძგიდე`. These await integration; total approvals are
  **2,085** after that review, while active revision 28 retains 2,075. The other 40 candidates
  remain unapproved for required use and must not be proposed again as new.
  The owner found this batch too uncommon: future proposals must prioritize
  familiar everyday vocabulary over short spelling or convenient board fit.
  [Targeted batch 04](docs/VOCABULARY_TARGETED_BATCH_04.json) records **41 approved
  senses and nine rejected spellings**: `დამბა`, `ტაქტი`, `ტრასა`, `თმიანი`,
  `კოტიტა`, `ტყიანი`, `უმიზნო`, `ქაჩალი` and `მილაკი`. Exclude these nine
  from new required answers, variants and bonuses; preserve historical content.
  Together with batch 03, **51 approved additions** await integration, bringing
  total approvals to **2,126**. The owner authorized an isolated append-only
  generation experiment to measure additional levels and repetition under all
  existing rules. This does not authorize promoting a new campaign or destinations.
  [Targeted batch 05](docs/VOCABULARY_TARGETED_BATCH_05.json) records **34 approved
  senses and 16 rejected batch spellings**: `მესერი`, `ხუჭუჭი`, `პაწაწა`,
  `მეორე`, `მერვე`, `მეათე`, `ათმაგი`, `ასმაგი`, `უშუქო`, `უდენო`,
  `უსუნო`, `უფრთო`, `უფულო`, `უტყეო`, `წაბლა` and `უძვლო`.
  The owner additionally excludes `უტყუო`, which was not in that batch or the
  approved pool. Exclude all 17 from new required answers, variants and bonuses.
  Total approvals are **2,160**, including **85 awaiting integration**; active
  revision 28 remains unchanged. Do not propose any reviewed spelling again as new.
  [Targeted batch 06](docs/VOCABULARY_TARGETED_BATCH_06.json) records **35 approved
  senses and 15 rejected spellings**: `ბებერა`, `გვიმრა`, `დიდედა`, `კოჟიჟი`,
  `მჟაუნა`, `მუსონი`, `ნუშურა`, `პონჩო`, `პლუში`, `როკერი`, `სიშორე`,
  `სიშავე`, `სიიაფე`, `სინელე` and `შიფონი`. The owner explicitly confirmed
  that the typed removal `მუსიონი` meant `მუსონი`. Exclude these 15 from new
  required answers, variants and bonuses. Total approvals are **2,195**, including
  **120 awaiting integration**; active revision 28 remains unchanged. Prioritize
  familiar short words in subsequent reviews; never substitute obscure filler.
  [Targeted batch 07](docs/VOCABULARY_TARGETED_BATCH_07.json) was **skipped in full**
  by the owner. All 50 remain unapproved; do not propose them again as unseen.
  Skipping is not an explicit all-gameplay exclusion. The next capacity trial uses
  only the **120 approved additions from targeted batches 03–06** (2,195 total).
  [The isolated 2,195-word trial](docs/CAMPAIGN_EXTENSION_TRIAL_2195.json) validates
  20 extra levels at **19.78% repetition** (365 total; +1.75 percentage points).
  Ten extra levels stay within one percentage point; 50 reach 22.73%. These are
  bounded-search results, not capacity limits or approval to apply an extension.
  Active revision 28 remains at 345 levels; all production content is unchanged.
  [Targeted batch 08](docs/VOCABULARY_TARGETED_BATCH_08.json) records **72 approved
  senses and 28 rejected batch spellings**: `გონიო`, `ზიარი`, `სპორა`, `უფეხო`,
  `უქმი`, `შლეგი`, `ძუძუ`, `ანგინა`, `ბლანკი`, `გრძივი`, `კაბარე`,
  `კლერკი`, `კორომი`, `კუბური`, `ლეჩაქი`, `მაჟორი`, `მითური`, `მიწური`,
  `ნათალი`, `ნაღარა`, `ნაყენი`, `ობლობა`, `სამხრე`, `უსიერი`, `უუნარო`,
  `უფუარი`, `ფასონი` and `ღიაობა`. The owner explicitly requested excluding
  **both `უფარო` and `უფუარი`**, so there are 29 new exclusions in total.
  Exclude all 29 from new required answers, variants and bonuses; preserve
  historical packs. Total approvals are **2,267**, including **192 awaiting
  integration**; active revision 28 remains unchanged. Do not propose any of the
  100 reviewed batch spellings again as new. Continue prioritizing everyday
  vocabulary, with individually verified senses and owner review.
  [Targeted batch 09](docs/VOCABULARY_TARGETED_BATCH_09.json) records **18 approved
  senses and seven rejected spellings**: `ბრა`, `კარე`, `ბადია`, `იქაური`,
  `ორიანი`, `ფინიკი` and `ქანთრი`. Exclude these seven from new required
  answers, variants and bonuses; preserve historical packs. Total approvals are
  **2,285**, including **210 awaiting integration**; active revision 28 remains
  unchanged. Do not propose any of these 25 reviewed spellings again as new.
  [Targeted batch 10](docs/VOCABULARY_TARGETED_BATCH_10.json) records **14 approved
  senses and six rejected spellings**: `ტოფუ`, `ეტიუდი`, `რიზოტო`, `როლური`,
  `წერითი` and `ჯამური`. Exclude these six from new required answers, variants
  and bonuses; preserve historical packs. Total approvals are **2,299**, including
  **224 awaiting integration**; active revision 28 remains unchanged. Do not
  propose any of these 20 reviewed spellings again as new. The owner requested
  animal names, food names and popular country names for the next review. Country
  names may be proposed for individual approval within the 3–6-letter limit;
  this category request does not approve individual countries or change runtime policy.
  [Targeted batch 11](docs/VOCABULARY_TARGETED_BATCH_11.json) records **19 approved
  country names**. The owner kept only countries and rejected `რუსეთი` (Russia),
  plus all five animal and ten food candidates: `ლემური`, `მაკაკა`, `ციცარი`,
  `ნუტრია`, `კეფალი`, `თათარა`, `ჩანახი`, `ფსტა`, `ბაგეტი`, `ბრი`,
  `ფეტა`, `მაფინი`, `პაპაია`, `ოლადი` and `პესტო`. Exclude these 16
  spellings from new required answers, variants and bonuses; preserve historical
  packs. The exact 19 country spellings in the JSON are individually approved
  for required use, subject to all other rules; this does not approve other
  proper names. Total unique approvals are **2,318**, including **243 awaiting
  integration**; active revision 28 retains 2,075. Do not propose any of these
  35 reviewed spellings again as new. No new campaign or runtime policy is applied
  by this review; integrate country eligibility in a future content revision.
  **Revision 29 (2026-10-21) integrates all 243 approvals** from targeted batches
  03–06 and 08–11, including the 19 country names: **2,318 required approvals** and
  2,436 eligible spellings. The 97 rejected batch spellings plus `უტყუო` and `უფარო`
  are excluded from required answers, variants and bonuses from revision 29 through
  the `owner-targeted-batch-*` categories in `word-policy.json`. The "awaiting
  integration" notes above describe the review stage.
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
  across the 150 new slots while preserving every other rule. That revision records the route in
  `content/journey-v23.json`; historical manifests remain immutable. Each Spain
  stop has its own generated background, postcard and owner-approved fact.

- The owner approved Portugal and Morocco on 2026-10-20: append **Lagos (ლაგუში),
  296–300; Lisbon (ლისაბონი), 301–305; Sintra (სინტრა), 306–310; Porto (პორტუ),
  311–315; Tangier (ტანჟერი), 316–320; Chefchaouen (შეფშაუენი), 321–325;
  Fez (ფესი), 326–330; Merzouga (მერზუგა), 331–335; Aït Ben Haddou
  (აით-ბენ-ჰადუ), 336–340; Marrakech (მარაკეში), 341–345**. Revision 28
  uses the exact selected 50-board trial. Preserve the first 295 required boards,
  tiles, layouts, IDs and difficulty; expand eligible bonus recognition with the
  78 targeted approvals. The current route is `content/journey-v28.json`.
  Historical routes and packs remain immutable. Each stop has its own background,
  postcard crop, Georgian caption and source-checked fact; provenance and prompts
  are in [PORTUGAL_MOROCCO_ARTWORK.md](docs/PORTUGAL_MOROCCO_ARTWORK.md).
  Existing saves, coins, hints, bonus credits and postcards must migrate intact.

- The owner authorized a separate **eight-tile draft experiment** on 2026-10-20.
  Preserve levels 1–345 and compare a 500-level campaign allowing seven or eight
  tiles only at levels 346–500 with the prior seven-tile draft. Keep exactly five
  approved 3–6-letter answers, the global 75-level gap, existing layout/pacing
  and variety checks. Adjust only copied trial validators for the authorized
  later wheel-size exception; check wheel touch geometry and report results
  before any production application. Active revision 28 remains unchanged.
  [The eight-tile result](docs/CAMPAIGN_500_EIGHT_TILE_RESULTS.md) validates 500
  levels with 55 eight-tile additions and 100 seven-tile additions. It uses 1,666
  distinct words at 33.36% lifetime repetition versus 1,610 and 35.6% in the
  seven-tile variety draft. The minimum gap is 75, median 215 and maximum four
  appearances per word. Phone wheel geometry passes at the existing minimum size;
  this is not a device playtest. The experiment remains unbundled and unapproved
  for production application.

- The owner approved **revision 29** on 2026-10-21: rebuild all 500 levels under
  today's rules (5 / 6 / 7 tiles, at most five rows, 36 pt iPhone SE cells) using
  every approved word, and append 31 stops after Marrakech. **France**: Carcassonne (კარკასონი) 346–350, Avignon (ავინიონი) 351–355, Marseille (მარსელი) 356–360, Provence (პროვანსი) 361–365, Nice (ნიცა) 366–370, Mont Blanc (მონბლანი) 371–375, Lyon (ლიონი) 376–380, Chambord (შამბორი) 381–385, Mont-Saint-Michel (მონ-სენ-მიშელი) 386–390, Étretat (ეტრეტა) 391–395, Versailles (ვერსალი) 396–400, Paris (პარიზი) 401–405; **Switzerland**: Geneva (ჟენევა) 406–410, Montreux (მონტრე) 411–415, Matterhorn (მატერჰორნი) 416–420, Lucerne (ლუცერნი) 421–425; **Germany**: Black Forest (შვარცვალდი) 426–430, Heidelberg (ჰაიდელბერგი) 431–435, Rhine Valley (რაინის ხეობა) 436–440, Cologne (კიოლნი) 441–445, Hamburg (ჰამბურგი) 446–450, Berlin (ბერლინი) 451–455, Dresden (დრეზდენი) 456–460, Rothenburg (როტენბურგი) 461–465, Munich (მიუნხენი) 466–470, Neuschwanstein (ნოიშვანშტაინი) 471–475; **Austria**: Innsbruck (ინსბრუკი) 476–480, Salzburg (ზალცბურგი) 481–485, Hallstatt (ჰალშტატი) 486–490, Melk (მელკი) 491–495, Vienna (ვენა) 496–500.
  Levels 1–345 keep their level IDs and stop IDs, but their boards are rebuilt; saves
  migrate by level ID with progress, coins, paid hints, bonus credits, doubled rewards,
  receipts and postcards intact. Recipes use the opt-in bound-aware layout
  (`"layout": "bounded-v1"` with row/column limits); recipes without it use the
  unchanged greedy generator, so every historical pack rebuilds byte-identically.
  The 2,500 slots use **1,954 distinct words (21.84% repeated slots)**,
  minimum gap 75. Each new stop has its own background, postcard crop, owner-approved
  Georgian caption and source-checked fact; provenance and prompts are in
  [CENTRAL_EUROPE_ARTWORK.md](docs/CENTRAL_EUROPE_ARTWORK.md). The current route is
  `content/journey-v29.json`; historical routes and packs remain immutable.

- Maintain **500 levels in 100 journey stops, with five required answers each: 2,500
  answer slots, with the 75-level repetition gap**.
  Required answers have 3–6 Georgian letters; no two-letter targets.
- Provide actual five- and six-letter answers, not just larger letter wheels.
  Introduce a five-letter answer in levels 1–5; every level from 6 onward needs at
  least one answer of five or six letters, and every level from 26 needs at least two.
- Six-letter answers start in levels 16–25, with at least four boards containing one
  in levels 16–25, eight in levels 26–40, and seven in levels 41–50. Every five-level stop from level 51 onward needs at least one six-letter board.
  The journey pack introduces five-letter words at level 3 and six-letter words at 16.
- Preserve the gradual wheel progression: five tiles for levels 1–5, six for 6–25,
  seven for 26–500 in the journey pack. Seven tiles do not permit seven-letter targets.
- Preserve chapter challenge/recovery pacing: the third board is the chapter peak,
  the fourth is at least two difficulty points lower, and upward transitions are at
  most ten points. Difficulty estimates do not substitute for playtesting.
- Keep connected, readable crossword layouts, valid crossings, exact tile
  multiplicities, no accidental word runs and no duplicate wheels. Preserve the
  existing layout, density, phone-cell-size and wheel-touch-target validation gates.
- Recognize all eligible formable bonus words from the wider dictionary. Bonuses
  never block completion. Preserve the bonus meter, rewards and destination postcards.

## Economy and saves

- On 2026-10-20 the owner waived existing-player-progress preservation as a
  requirement for applying the approved revision-27 draft. This permits a content
  reset if needed, but does not request erasing saves. The existing migration path
  remains usable; no new save system or reset behavior is required for this release.

- The owner approved a **test banner at the bottom of the game screen** on
  2026-10-20, in a reserved footer separated from the letter wheel and hint
  buttons. Preserve their touch targets and existing saves.

- The owner approved the economy on 2026-10-19: **200 starting coins**, **20 coins
  per completed level**, **20 coins per letter hint** and **50 coins per word hint**.
  Keep the **3-coin bonus-word reward** and **one free letter hint per ten bonus
  words** unchanged. Prices and displayed amounts come from the shared economy.
- The starting balance applies only to new games or an explicit reset. Loading or
  migrating an existing save must preserve its earned balance, completed levels,
  partial progress, paid hints, bonus credits and postcards without repricing past
  actions or granting a starting-balance top-up. Future actions use the new prices.
- The owner approved optional rewarded ads on 2026-10-19 on the coins screen and
  unaffordable hint buttons, and on 2026-10-22 lowered the reward from 75 to
  **50 coins per ad**, so one ad pays for one word hint. Coins already earned
  from 75-coin ads stay. The owner requested a direct flow: show the ad/+50 offer
  on the hint button, then present on that press without routing through a second page.
  Preload when coins are low; cancel a pending presentation when leaving the
  board. Never show ads without a watch press or spend the reward on a hint
  automatically. Credit only the SDK's earned-reward event;
  save the claim receipt and balance atomically so retries, duplicate callbacks
  and restarts cannot award the same claim twice. Preserve existing saves.
- The owner approved **live AdMob ads** on 2026-10-22 with their own account
  (publisher `ca-app-pub-8935292332039677`). iOS uses app ID `~8334673550`,
  banner unit `/8167152594` and rewarded unit `/8819345552`; Android uses app ID
  `~9321375605`, banner `/6993138895` and rewarded `/4063723227`
  (`mobile/src/ads/adUnits.ts`). Live units serve only in release builds whose
  EAS profile sets `ASOBANA_LIVE_ADS=1` (the `production` profile), which
  `mobile/app.config.js` embeds at build time; development builds and tests use
  Google's demo units. Do not move this switch into an `EXPO_PUBLIC_` variable:
  Metro's cache can carry a stale inlined value between builds. To avoid
  suspension for self-clicks, the owner chose demo ads for every tester build:
  TestFlight and Play testing builds use the `beta` profile (production with
  `ASOBANA_LIVE_ADS=0`). Only the build submitted for public release uses
  `production`, and the owner does not install it. Ads stay
  **non-personalized** (no App Tracking Transparency prompt), rated G, and start
  only after Google's UMP consent flow allows ad requests; Settings offers the
  consent form again wherever the law requires it. Never tap live ads on
  non-test devices; register testers as AdMob test devices.
- The owner approved an optional **rewarded "×2" offer on the level-complete
  screen** on 2026-10-19 (same rewarded unit), shown beside the level reward: watching
  it pays the level's completion reward once more, **20 extra coins per level, at
  most once per level**, including after restarting or reopening a finished level.
  Continuing without watching stays the primary action; only a press presents,
  and leaving the screen cancels a waiting ad. Credit only the earned event,
  recording the receipt, balance and doubled level in one transaction.

## Sources of truth

Read these before editing content; current filenames below describe revision 29:

- [Grammar and name exclusions](content/dictionaries/word-policy.json).
- [Required-word allowlist and individual previous-word decisions](content/dictionaries/everyday-targets-v29.json).
- [Reference dictionary](content/dictionaries/discovery-v29-ka.json) and
  [provenance/licensing](content/dictionaries/README.md).
- [Journey vocabulary review and all 500 boards](docs/VOCABULARY_REVIEW_V29.md).
- [Full vocabulary list for owner review](docs/VOCABULARY_OWNER_REVIEW_V29.md).
- [Current journey manifest](content/journey-v29.json).
- [Central Europe artwork and generation prompts](docs/CENTRAL_EUROPE_ARTWORK.md).
- [Portugal and Morocco artwork and generation prompts](docs/PORTUGAL_MOROCCO_ARTWORK.md).
- [Spain artwork and generation prompts](docs/SPAIN_ARTWORK.md).
- [Tunisia artwork and generation prompts](docs/TUNISIA_ARTWORK.md).
- [Malta artwork and generation prompts](docs/MALTA_ARTWORK.md).
- [Campaign rules and revision history](docs/DISCOVERY_CONTENT.md).
- [Active catalog and historical packs](mobile/src/content/catalog.ts).
- [Python word policy](puzzle-generator/src/asobana_generator/word_policy.py),
  [Python release gates](puzzle-generator/src/asobana_generator/wide.py),
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
   rebuilding and save migration. Solve all 500 levels via `npm run validate:content`
   (also included in `npm run check`). That check and the campaign tests are the
   release gate: since 2026-10-22 the app no longer re-runs `validateWide` or parses
   the historical packs at launch (about 3 s of every Android start); historical
   packs load only to upgrade an older save. For bundled mobile content changes, verify an
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
