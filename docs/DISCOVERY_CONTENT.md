# Journey campaign — revision 29: rebuilt 500-level route with Central Europe

On 2026-10-21 the owner approved rebuilding all 500 levels under today's rules and
appending 31 stops (levels 346–500): France (Carcassonne to Paris, 12 stops),
Switzerland (Geneva to Lucerne, 4), Germany (Black Forest to Neuschwanstein, 10) and
Austria (Innsbruck to Vienna, 5). The route now has **500 levels / 100 stops**.

Revision 29 integrates all **243 approvals** from targeted batches 03–06 and 08–11
(including 19 country names): **2,318 required words** and **2,436 eligible
spellings**. The 99 owner rejections from those reviews are excluded from every role.
The 2,500 slots use **1,954 distinct words** with **546 repeated slots
(21.84%)**, minimum gap 75, median 171.5; no word appears more than
7 times. Rules are unchanged: 5 tiles in levels 1–5, 6 in 6–25 and 7 from 26;
at most five rows (36 pt iPhone SE cells); five 3–6-letter answers per board; stop
pacing; density 35–65%. The variety checks also hold: no reused answer triples,
at most five shared tiles within ten levels, five grid patterns per stop and no
identical adjacent patterns.

Boards were planned for the whole campaign at once and laid out with the opt-in
bound-aware mode (`"layout": "bounded-v1"`, see "Reproduction and review"). Levels
1–345 keep their level IDs and stop IDs, but 495 of all 500 boards are new.
Migration keeps progress by level ID: completed levels stay completed, solved words
transfer by spelling and then by count, paid letters move to the rebuilt board,
and coins, bonus credits, doubled rewards, receipts and postcards are preserved.
Bonus words average 6.3 per level (7.4 in revision 28): using more distinct
required words turns some former bonuses into answers.

Thirty-one generated paintings and postcard crops are bundled, with owner-approved
Georgian captions and source-checked place facts. See
[artwork and exact prompts](CENTRAL_EUROPE_ARTWORK.md),
[all 500 boards and audit](VOCABULARY_REVIEW_V29.md),
[the complete approved pool](VOCABULARY_OWNER_REVIEW_V29.md) and
[the planning comparison](CAMPAIGN_500_FULL_REBUILD_RESULTS.md).
The current manifest is `content/journey-v29.json`; the deterministic rebuild
script defaults to revision 29 and requires the reviewed SHA-256
(`9081ed3b89a446bed70a7dec0205d713ca282ee6cf4c1df9378c2662a5c80e2f`) to promote. No TestFlight upload is included.

Validation on 2026-10-21: `npm run check` passes (typecheck, lint, 45 suites / 345 tests, content validation solving all 500 levels with 2,436 eligible words, formatting); `uv run pytest` (166 passed), `ruff check`, `ruff format --check` and `mypy src` are clean; `npx expo export --platform ios` succeeds with all 200 scene JPEGs bundled. The export is not a native-device test, and difficulty remains an estimate until playtested.

# Historical revision 28: Portugal and Morocco

The owner approved adding the ten proposed destinations and exact validated
50-level extension on 2026-10-20. The active route now has **345 levels / 69 stops**:
Portugal 296–315 (Lagos, Lisbon, Sintra, Porto), then Morocco 316–345 (Tangier,
Chefchaouen, Fez, Merzouga, Aït Ben Haddou, Marrakech).

Revision 28 integrates all **78 targeted approvals**, giving **2,075 required
words** and **2,193 eligible spellings** (118 bonus-only). The 1,725 slots use
**1,414 distinct words** with **311 repeated slots (18.03%)**, minimum gap 75.
The first 295 required boards, layouts, wheels, difficulty and IDs remain exactly
as revision 27; eligible bonus recognition expands. All historical content stays
immutable. Migration preserves saved progress, earned balance, hint and bonus
credits, doubled rewards, receipts and collected postcards.

Ten generated paintings and matching postcard crops are bundled, with Georgian
captions and source-checked place facts. See [artwork and exact prompts](PORTUGAL_MOROCCO_ARTWORK.md),
[all 345 boards and audit](VOCABULARY_REVIEW_V28.md), and
[the complete approved pool](VOCABULARY_OWNER_REVIEW_V28.md).
The current manifest is `content/journey-v28.json`; the deterministic rebuild
script defaults to revision 28 and requires the reviewed SHA-256 to promote.

Validation: 338 app tests in 44 suites and 150 Python tests passed; all 345
levels were validated and solved. TypeScript typecheck/lint, Python Ruff checks
and mypy passed. The final iOS export contains all twenty new JPEG assets.
The initial root check reached formatting and reported two prior trial-report
files; these were formatted and the formatting stage rerun separately.
No native-device playtest or TestFlight upload is included in this content change.

## Historical revision 27

### October owner review

The owner approved applying the 295-board trial on 2026-10-20. Revision 27 adds
277 individually reviewed senses, reaching **1,997 required approvals** and
**2,115 playable spellings**, including the unchanged 118 bonus-only words.
The 93 explicit rejections are excluded from all gameplay roles; 41 unselected
alternatives remain unapproved. Historical packs and dictionaries remain unchanged.

The game now uses **1,281 distinct required words** across **1,475 answer slots**,
with **194 repeated slots (13.15%)**, down from 242 (16.41%). There are **716 unused
approvals**. The approved draft's boards are unchanged; its publication uses new
revision 27 and the existing 295-level, 59-stop route in `content/journey-v23.json`.
The minimum repeat gap is 76 levels, above the required 75.

Current pack, recipes, reference and allowlist use v27. The official rebuild script
defaults to `--revision 27`; promotion checks the reviewed draft SHA-256. The owner
waived progress-preservation as a release requirement; the existing migration path
was extended to accept v27 without adding reset behavior.

See [the review and validation](VOCABULARY_REVIEW_V27.md),
[every approved word and its usage](VOCABULARY_OWNER_REVIEW_V27.md), and
[the complete owner decisions](VOCABULARY_EXPANSION_REVIEW_2026_10_20.json).
The earlier [isolated trial report](VOCABULARY_GENERATION_TRIAL_2026_10_20.md)
records the search before this promotion.
The [extension capacity report](CAMPAIGN_EXTENSION_CAPACITY_V27.md) compares validated
options for 5–50 additional levels; these experiments are not bundled.

---

# Historical revision 26: approved vocabulary expansion

[Batch 07](VOCABULARY_EXPANSION_BATCH_07.md) adds **75 approved senses** and excludes
the **25 owner-rejected spellings** from required answers, variants and bonuses.
The main pool grows **1,645 → 1,720**; 80 more approvals would reach 1,800. The
reference has 1,970 entries / 1,838 eligible words, including the same 118 bonus-only
words. Every earlier word-selection, layout, progression and pacing rule remains.

The rebuilt **295 levels / 59 stops / 1,475 slots** use **1,233 distinct
required words**, up from 1,210. Repeated slots fall **265 → 242**:
**23 fewer (8.7%)**. The campaign uses 31 new
approvals and 47 previously unused existing words. There
are 487 unused main approvals. Every recurrence is at least 75 levels
apart. This is the best bounded search result, not proof of global optimality.
See [all boards and measurements](VOCABULARY_REVIEW_V26.md) and
[the complete current word list](VOCABULARY_OWNER_REVIEW_V26.md).

Current pack, recipes, reference and allowlist use v26; the route remains
`content/journey-v23.json`. Rebuild with `scripts/rebuild-wide-content.py --revision 26`
(the default at that revision), inspect the draft and promote only against its reviewed digest.
Historical JSON remains immutable. Save migration supports revisions 1–25 with a
1,670 historical hint-credit ceiling and preserves earned progress across restart.

Validation passed: 285 app tests, 146 Python tests, all 295 boards solved,
TypeScript/lint/format checks, Ruff/mypy and a local iOS export. See the linked
review for detailed results and limitations.

---

# Historical revision 25: approved vocabulary expansion

[Batch 06](VOCABULARY_EXPANSION_BATCH_06.md) adds **76 approved senses** and excludes
the **24 owner-rejected spellings** from required answers, variants and bonuses.
The main pool grows **1,569 → 1,645**; 155 more approvals would reach 1,800. The
reference has 1,895 entries / 1,763 eligible words, including the same 118 bonus-only
words. Every earlier word-selection, layout, progression and pacing rule remains.

The rebuilt **295 levels / 59 stops / 1,475 slots** use **1,210 distinct
required words**, up from 1,165. Repeated slots fall **310 → 265**:
**45 fewer (14.5%)**. The campaign uses 50 new
approvals and 61 previously unused existing words. There
are 435 unused main approvals. Every recurrence is at least 75 levels
apart. This is the best bounded search result, not proof of global optimality.
See [all boards and measurements](VOCABULARY_REVIEW_V25.md) and
[the complete current word list](VOCABULARY_OWNER_REVIEW_V25.md).

Current pack, recipes, reference and allowlist use v25; the route remains
`content/journey-v23.json`. Rebuild with `scripts/rebuild-wide-content.py --revision 25`
(the default), inspect the draft and promote only against its reviewed digest.
Historical JSON remains immutable. Save migration supports revisions 1–24 with a
1,628 historical hint-credit ceiling and preserves earned progress across restart.

Batch 07 was subsequently reviewed and incorporated in revision 26 above.

---

# Historical revision 24: owner vocabulary replacements

The [final review](VOCABULARY_REPLACEMENTS_APPROVED_01.json) removes 29 words from
all play and adds 29 approved replacements, ending with **კოკა**. Eight rejected
proposals are also excluded. The owner explicitly skipped the absent კოლო and სურმა.
The pool stays at **1,569 main words / 118 additional bonus-only words**; the
reference has **1,819 entries / 1,687 eligible words**. All earlier rules remain.

The rebuilt **295 levels / 59 stops / 1,475 slots** use **1,165 distinct
words**, compared with 1,187 before. Repeated slots increase **288 → 310**,
and unused main words increase **382 → 404**. The best bounded search
uses **17 of the 29 additions**, including კოკა. Removing useful short
connectors reduces the available combinations; this update does not improve repetition.
See [all boards and measured results](VOCABULARY_REVIEW_V24.md) and
[the complete word list](VOCABULARY_OWNER_REVIEW_V24.md).

Current vocabulary and pack files use v24; the unchanged route remains
`content/journey-v23.json`. Rebuild with `scripts/rebuild-wide-content.py --revision 24`
(the default), inspect the draft and promote only against its reviewed digest.
Historical JSON remains immutable. Migration supports revisions 1–23 with a 1,586
hint-credit ceiling, preserving earned progress and rewards across restart.

Batch 06 was subsequently reviewed and incorporated in revision 25 above.

---

# Historical revision 23: Spain

The owner authorized **30 levels after Tunisia**, taking the campaign to
**295 levels / 59 stops / 1,475 required slots**. Spain visits Barcelona (266–270),
Valencia (271–275), Madrid (276–280), Granada (281–285), Córdoba (286–290) and
Seville (291–295). The first 265 boards remain identical to revision 22.

Spain uses **61 previously unused approved words**: unused approvals fall
**443 → 382**, and distinct required words rise **1,126 → 1,187**. Its 150 answers
are distinct within Spain; 89 reuse earlier answers at least 75 levels apart.
Of those reuses, 63 are second occurrences and 26 are third occurrences. None is
a fourth. Appending levels increases repeated slots from 199 to 288; earlier
repetition is unchanged. Every vocabulary, plural, bonus-only, layout, progression,
pacing and repetition-gap rule remains enforced.

The 31,141-board candidate pool has a 61-unused-word coverage ceiling for 30 boards;
the selected campaign reaches it. This is an optimum within the searched pool,
not a proof over every possible crossword. See [the review, 61 newly used words
and all 295 boards](VOCABULARY_REVIEW_V23.md), [the full vocabulary list](VOCABULARY_OWNER_REVIEW_V23.md)
and [six generated backgrounds and exact prompts](SPAIN_ARTWORK.md).
All six source-checked facts were owner-approved on 2026-10-18.

The current route is `content/journey-v23.json`. The main allowlist remains at
1,569 words; 231 further approvals would reach 1,800. Dictionaries remain revision 20. Historical JSON is immutable. Both validators select 240 levels for revisions
13–20, 250 for v21, 265 for v22 and 295 for v23. Rebuild with
`scripts/rebuild-wide-content.py --revision 23` (the default), audit the draft,
then promote against the exact digest in `discovery.v23.review.json`.
Migration supports revisions 1–22, preserving progress, hints, coins, rewards,
settings and postcards through restart. The hint compatibility ceiling remains
1,544. Actual check results and limitations are recorded in the review.

---

# Historical revision 22: Tunisia

The owner authorized 15 levels after Malta: **Carthage (კართაგენი), 251–255**,
**Sidi Bou Said (სიდი ბუ საიდი), 256–260**, and **El Jem (ელ-ჯემი), 261–265**.
The campaign now has **265 levels / 53 stops / 1,325 required answer slots**.
All first 250 boards remain identical to revision 21. Every vocabulary, plural,
bonus-only, layout, length, pacing and campaign-wide 75-level gap rule is preserved.

The 75 new slots use **30 previously unused approved words** and **45 words that
appeared once earlier**. No answer repeats within Tunisia; no word gains a third
occurrence. Unused approvals fall **473 → 443**, and distinct required words rise
**1,096 → 1,126**. Each new stop brings ten unused words into play. Adding these
levels raises repeated appearances beyond first use from 154 to 199; the earlier
campaign is unchanged. The nearest Tunisia reuse is 78 levels away.

See [the campaign review, newly used words and all 265 boards](VOCABULARY_REVIEW_V22.md),
[the full vocabulary list](VOCABULARY_OWNER_REVIEW_V22.md), and
[the three generated backgrounds and exact prompts](TUNISIA_ARTWORK.md).
The main allowlist remains at 1,569 words; 231 more approvals would reach 1,800.

The current route is `content/journey-v22.json`. Historical JSON remains immutable.
Generator and runtime select route size by revision: 240 levels through v20,
250 in v21, and 265 in v22. Rebuild with `scripts/rebuild-wide-content.py --revision 22`
(the default), audit every required answer and variant, then promote against the
exact digest in `discovery.v22.review.json`. The reference and allowlist remain
revision 20. Migration supports revisions 1–21 and preserves all existing progress,
rewards and postcards across restart. The hint compatibility ceiling remains 1,544.
Actual validation results are recorded in the review. No native-device or TestFlight
validation is implied by an iOS bundle export.

---

# Historical revision 21: Malta

The owner authorized ten levels after Italy: **Valletta (ვალეტა), 241–245**,
then **Mdina (მდინა), 246–250**. There are now **250 levels / 50 journey stops**.
The first 240 boards remain identical to revision 20. All vocabulary, plural,
bonus-only, layout, length, pacing and 75-level gap rules remain enforced.

The 50 new answer slots use **27 previously unused approved words** and
**23 previously used words**, with no repeats within Malta. Unused approvals
fall from 500 to **473**. The full campaign contains **1096
distinct required spellings** and 154 repeated appearances
beyond first use. The original 131 repeats remain unchanged; expansion adds
23 repeats. No new words are approved or inserted into the dictionaries.

See [the campaign review, new words and all 250 boards](VOCABULARY_REVIEW_V21.md),
[the current full vocabulary](VOCABULARY_OWNER_REVIEW_V21.md), and
[the Malta artwork and exact prompts](MALTA_ARTWORK.md). The main allowlist remains
at 1,569 words; 231 more approvals would reach the owner's 1,800-word goal.

The current route is `content/journey-v21.json`; historical routes and packs remain
immutable. Both runtime and generator select the route by content revision.
Rebuild with `scripts/rebuild-wide-content.py --revision 21` (default), audit the
exact draft, then promote only against `discovery.v21.review.json`. Revision 21
uses the unchanged revision-20 reference and allowlist. Save migration supports
revisions 1–20; the hint compatibility bound stays 1,544 because old boards are
unchanged. All validation results are recorded in the review.

---

# Historical revision 20: expansion batch 05

The owner approved **88 of 100 words in expansion batch 05** and rejected 12.
The rejected spellings are excluded from required answers, variants and bonuses
from revision 20. The main pool grows from **1,481 to 1,569 words**; **231 further
approvals** are needed to reach 1,800. The reference contains 1,790 entries /
1,687 playable words, including 118 additional bonus-only spellings.

The rebuilt 240 levels use **1069 distinct required words**, up from 1036.
Repeated slots after first appearance decrease from **164 to 131 (20.12% fewer)**.
The campaign uses 45 of the 88 new approvals; 43 remain unused.
There are 500 unused approved words overall. See
[the exact campaign review](VOCABULARY_REVIEW_V20.md) and
[the full main and bonus list](VOCABULARY_OWNER_REVIEW_V20.md).

All vocabulary, plural, bonus-only, 75-level gap, length/wheel progression,
connected-layout, density, phone-size and chapter-pacing rules remain enforced.
Optimization is bounded and does not establish the global minimum repetition.

Use `scripts/rebuild-wide-content.py --revision 20` (default), review the exact
draft, then promote only against `discovery.v20.review.json`. Historical revisions
1–19 remain unchanged. Save migration preserves completed levels, partial solved
credits, coins, paid hints, postcards and lifetime bonus rewards through restart.
The hint compatibility bound is 1,544. Validation results are recorded in the review.

---

# Historical revision 19: expansion batch 04

The owner approved **129 of 148 words in expansion batch 04** and rejected 19.
The rejected spellings are excluded from required answers, variants and bonuses
from revision 19. The main pool grows from **1,352 to 1,481 words**; **319 further
approvals** are needed to reach the owner’s updated target of 1,800. The reference contains 1,702 entries /
1,599 playable words, including 118 additional bonus-only spellings.

The rebuilt 240 levels use **1036 distinct required words**, up from 995.
Repeated slots after first appearance decrease from **205 to 164 (20.00% fewer)**.
The campaign uses 51 of the 129 new approvals; 78 remain unused.
There are 445 unused approved words overall. See
[the exact campaign review](VOCABULARY_REVIEW_V19.md) and
[the full main and bonus list](VOCABULARY_OWNER_REVIEW_V19.md).

All vocabulary, plural, bonus-only, 75-level gap, length/wheel progression,
connected-layout, density, phone-size and chapter-pacing rules remain enforced.
Optimization is bounded and does not establish the global minimum repetition.

Use `scripts/rebuild-wide-content.py --revision 19` (default), review the exact
draft, then promote only against `discovery.v19.review.json`. Historical revisions
1–18 remain unchanged. Save migration preserves completed levels, partial solved
credits, coins, paid hints, postcards and lifetime bonus rewards through restart.
The hint compatibility bound is 1,502. Validation results are recorded in the review.

---

# Historical revision 18: expansion batch 03

The owner approved **131 of 140 words in expansion batch 03** and rejected
`ბიძია`, `გვიანი`, `დედიკო`, `მამიკო`, `მუშაკი`, `უკანა`, `წლიური`, `ხანი`
and `ჯერი`. The rejected spellings are excluded from required answers, variants
and bonuses from revision 18. The 131 approved senses bring the main pool to
**1,352 words**, with **148 more approvals** needed to reach 1,500. The reference
contains 1,573 entries / 1,470 playable words, including 118 bonus-only spellings.

The rebuilt 240 levels use **995 distinct required words**, up from 953.
Repeated answer slots fall from **247 to 205 (17.00% fewer)**.
The campaign uses 65 of the 131 new approvals; 66 remain eligible but
unused. There are 357 unused approved words overall. Exact counts, frequencies,
all unused approvals and all boards appear in
[the campaign review](VOCABULARY_REVIEW_V18.md); the
[full vocabulary list](VOCABULARY_OWNER_REVIEW_V18.md) includes main and bonus words.

Every existing vocabulary, plural, bonus-only, 75-level gap, length/wheel progression,
connected-layout, density, phone-size and chapter-pacing rule remains enforced.
Optimization is bounded and does not prove a global minimum repetition.

Use `scripts/rebuild-wide-content.py --revision 18` (default), review the exact
draft, then promote only against `discovery.v18.review.json`. Historical revisions
1–17 remain unchanged. Save migration retains completed levels, partial solved
credits, coins, paid hints, postcards and lifetime bonus rewards after restart.
The hint compatibility bound is 1,460. Actual validation results appear in the review.

---

# Historical revision 17: expansion batch 02

The owner approved all **130 words from expansion batch 02**. They are added to
the reference dictionary and main allowlist, bringing the required pool from
1,091 to **1,221 words**, with **279 more approvals** needed to reach 1,500.
The reference has 1,442 entries / 1,339 playable words, including 118 bonus-only.
All existing exclusions and plural/bonus-only reservations remain enforced.

The rebuilt 240 levels use **953 distinct required words**, up from 865.
Repeated answer slots fall from **335 to 247 (26.27% fewer)**.
The campaign uses 73 of the 130 new approvals; 57 remain eligible but
unused. Overall 268 approved words remain unused. Exact frequencies, every
unused approval, sources and all 240 boards appear in
[the campaign review](VOCABULARY_REVIEW_V17.md); the
[full vocabulary list](VOCABULARY_OWNER_REVIEW_V17.md) includes main and bonus-only words.

The 75-level minimum repeat gap, five-answer boards, length/wheel progression,
connected crossings, density, phone sizes and chapter pacing remain enforced.
Optimization is bounded, not a proof of the global minimum repetition.

Use `scripts/rebuild-wide-content.py --revision 17`, inspect the exact
draft and promote only against `discovery.v17.review.json`. Historical revisions
1–16 are unchanged. Migration preserves completed levels, partial solved credits,
coins, paid hints, postcards and lifetime bonus rewards after restart. The hint
compatibility bound is 1,418. See the campaign review for actual validation results.

The 1,500-word goal allows exploring more levels: 300 levels require 1,500 answer
slots and are the theoretical zero-repeat ceiling if all words can fit. This is
not a feasibility guarantee. Adding levels increases repetition pressure; this
revision retains 240 levels and 48 journey stops as requested by the rulebook.

---

# Historical revision 16: owner bonus-word promotion

The owner approved **325 of 372 reviewed bonus words** for required use and reserved
**47 as bonus-only**. Together with 766 retained approvals after the owner’s 53
all-play exclusions, the required pool now contains **1,091 words**. The ten earlier
approvals are included in the 325. The reference dictionary is unchanged, with
1,209 playable spellings including 118 bonus-only words.

The rebuilt 240-level campaign uses **865 distinct required words**, up from 680.
Repeated answer slots drop from **520 to 335 (35.58% fewer)**. Of the promoted words,
256 appear as required answers; 69 remain eligible but unused. There are 226 unused
approvals overall. See [the exact campaign review](VOCABULARY_REVIEW_V16.md) and
[the current full vocabulary list](VOCABULARY_OWNER_REVIEW_V16.md).

All vocabulary, plural, 75-level repeat-gap, progression, pacing, crossing and
phone-layout rules remain enforced. Search is bounded, not proof of maximum
coverage. The 1,500-word planning goal still needs 409 additional approvals.

Use `scripts/rebuild-wide-content.py --revision 16`, inspect the exact
draft and promote only against `discovery.v16.review.json`. Historical revisions
1–15 remain immutable. Save migration retains completed levels, partial solved
credits, coins, paid hints, postcards and lifetime bonus rewards after restart.
The hint compatibility bound is 1,376. Validation results are recorded in the
campaign review; no native-device test or TestFlight upload is implied.

---

# Historical revision 15: owner unused-word review

The owner reviewed the 152 unused revision-14 words on 2026-10-18. Twelve
spellings are now excluded from required answers, accepted variants and bonuses:
`ბალონი`, `ბაჟე`, `გარაჟი`, `ზუსტად`, `კარგად`, `კასეტი`, `უცებ`, `ფანარი`,
`შიგნით`, `ძალიან`, `ხშირად`, `ჯიპი`. The other 140 words are explicitly
owner-approved for required use under all existing rules. No new dictionary
entries were added. The target bank contains **819 non-plural approvals**.

The rebuilt campaign uses **680 distinct required words** across 1,200
slots, compared with 679 in revision 14. Repeated slots decrease from 521 to
**520**. This is a small net gain from a bounded search, not a proven maximum.
There are 6 newly used spellings, 5 retired spellings and 139 unused approvals.
The exact frequency distribution and limitations are in
[the campaign review](VOCABULARY_REVIEW_V15.md).

All rules in [AGENTS.md](../AGENTS.md) remain enforced: plural nouns are bonus-only,
required repeats must be at least 75 levels apart, and all 240 levels / 48 stops,
length quotas, wheel progression, pacing, crossing and phone-layout gates remain.
The unchanged dictionary and journey definitions retain v13 filenames. The
[819-word owner review list](VOCABULARY_OWNER_REVIEW_V15.md) records the 140 owner
approvals separately from inherited assistant approvals. It does not claim that
the owner reviewed the entire pool.

Use `scripts/rebuild-wide-content.py --revision 15` (default), inspect the exact
draft, and promote only against `discovery.v15.review.json`. Historical revisions
1–14 remain immutable. Migration retains completion, partial solved credits,
coins, paid hints, settings, postcards and lifetime bonus rewards after restart.
The hint compatibility bound is 1,334. See the review for completed validation;
no native-device test or TestFlight upload is implied.

---

# Historical revision 14: non-plural campaign

The owner’s 2026-10-18 rule makes **plural nouns bonus-only**: they cannot be
required answers or accepted variants. The 38 individually documented plurals
remain in the reference dictionary, eligible for every formable bonus. The target
allowlist now contains **831 non-plural approvals**. This retains approved nouns,
adjectives, numbers and everyday adverbs; it does not mean nouns only.

**Reducing repetition is the primary optimization objective within every existing
rule.** Maximize distinct required spellings first, then reduce heavily repeated
words and prefer longer gaps. Do not weaken the 75-level minimum, use rare filler,
or substitute unreviewed words. The owner is willing to review the entire word
pool and help expand it. Willingness is not vocabulary approval.

The campaign still has **240 levels, 48 stops and 1,200 required answer slots**.
Wheel progression, five/six-letter quotas, connected readable crossings, phone
cell sizes, unique wheels, bonus rewards, postcards and challenge/recovery pacing
remain enforced in Python and TypeScript. The unchanged stop definitions and
reference dictionary retain their revision-13 filenames.

See [the exact campaign results and every board](VOCABULARY_REVIEW_V14.md) and
[all 831 approvals for owner review](VOCABULARY_OWNER_REVIEW_V14.md). The latter
lists meanings, source links, usage and blank owner-decision fields; no owner or
native-speaker review is claimed. No new dictionary words were added in revision 14.

Rebuild: `scripts/rebuild-wide-content.py --revision 14`. Promotion
requires the exact inspected draft digest in `discovery.v14.review.json`.
Revisions 1–13 remain immutable and migrate with completion, partial solved
credits, coins, paid hints, settings, journey/legacy postcards and lifetime bonus
rewards preserved across restart. Revision 14 permits 1,292 historical/paid hint
credits per board, retaining revision 13’s 1,250 plus a replacement board.

Automated results and search limitations appear in the revision-14 review. This
content rebuild is local; no native-device test or TestFlight upload is claimed.

---

# Historical revision 13: journey campaign

The campaign now contains 240 levels in 48 stops, using the exact order and titles
in [`content/journey-v13.json`](../content/journey-v13.json). Each board has five
required answers. The owner explicitly approved a **75-level minimum repeat gap**
across the whole journey, including accepted variants. Level 10 may recur at level
85, never earlier; optional bonus finds do not reset that clock. This supersedes
the no-repetition wording in the original campaign prompt and historical notes.

The target bank grows from 778 to 869 approved words: four previously approved
nonstandard words are excluded, 79 reviewed reference entries are added, and sixteen
existing dictionary entries become target-eligible. New reference words comprise
38 ordinary noun plurals, 37 everyday adverbs, two ordinary singular nouns and two adjectives. Full source/decision records,
held candidates, campaign statistics and every board appear in
[the revision-13 review](VOCABULARY_REVIEW_V13.md). The larger reference dictionary
contains 1,312 entries, of which 1,274 are eligible for gameplay. Valid rare words
remain optional bonuses. Pronouns, excluded verbs/action forms, name-only entries,
reviewed barbarisms and owner-excluded `რული` cannot appear in current play.

Wheels progress from five tiles (levels 1–5), to six (6–25), to seven (26–240).
Targets remain 3–6 letters. Five-letter words begin at level 3; six-letter words
begin at 18. Original long-answer and early six-letter quotas remain, with at
least one six-letter board in every stop from level 51. Each stop's third board
is a peak, the fourth recovers by at least two points, and upward transitions
are capped at ten points. Later play repeats these waves rather than increasing
obscurity. Difficulty scores still need player validation.

Rebuild: `scripts/rebuild-wide-content.py --revision 13`. Promotion
requires the exact reviewed draft SHA-256 in `discovery.v13.review.json`.
Historical packs remain immutable. The same level IDs retain ordinal completion
and partial credits, while old destination postcards retain their original IDs
through durable legacy-card metadata. Coins, paid hints and lifetime bonus rewards
survive migration and restart. See [the integration contract](INTEGRATION_CONTRACT.md#revision-13-journey-content-handoff)
for the ten old chapter mappings and Claude's map/art integration contract.

Automated check results and limitations are recorded in the revision-13 review.
The new content is local; no native-device playtest or TestFlight upload is claimed.
Claude owns the 48-stop map, artwork and screen work.

Every stop's postcard has a one-sentence Georgian caption describing its painting
(`mobile/src/content/destinations.ts`). The ten original captions are unchanged;
the 38 new ones were written by Claude, without native-speaker review, and await
the owner's approval.

Each stop also has one "იცოდი?" fact (`placeFacts`, same file), checked against a
source and approved by the owner on 2026-10-17; see [Place facts](PLACE_FACTS.md).

---

# Historical revision 12: everyday-word campaign

All 250 revision-11 required words received an everyday-familiarity review.
88 were marked bonus-only; rebuilding crossings changed 135 required spellings
in total. The final 50 boards still contain 250 unique answers, now including
**74 five-letter and 21 six-letter words**. Five-letter words begin at level 3,
six-letter words at level 18; every board from level 26 has at least two longer
answers. See the [individual review and all new boards](VOCABULARY_REVIEW_V12.md).

Required answers and accepted variants must belong to
`content/dictionaries/everyday-targets-v12.json`, an explicitly reviewed pool of
778 everyday candidate senses. Python rebuilds and the TypeScript release gate
both enforce this separately from the 1,202-word playable dictionary. Valid rare
words remain optional bonuses; pronouns, excluded verbs/action forms and name-only
spellings remain ineligible for either role. Ordinary noun/name homographs remain
eligible under the owner's earlier clarification. Frequency ranks are a supporting
proxy; the review does not claim native-speaker validation.

Levels 1–5 use five tiles, levels 6–25 six tiles, and levels 26–50 seven tiles.
The extra tile permits ordinary words to cross without recycling answers or using
rare filler. Targets still contain only 3–6 letters, boards remain at most 7×5,
and the existing wheel keeps at least 44-point non-overlapping hit targets at its
minimum 245-point diameter. Chapter challenge/recovery pacing remains; maximum
upward score jump is 8 points. Historical difficulty formulas are unchanged.

Rebuild: `scripts/rebuild-wide-content.py --revision 12`. Promotion is
bound to the exact draft digest in `discovery.v12.review.json`. Revisions 1–11
remain immutable and migrate with completion, solved credits, coins, hints,
postcards and lifetime bonus rewards preserved. Hint compatibility bound: 1208.

Validation: 161 Jest tests, 80 Pytest tests, all 50 engine solves, TypeScript,
ESLint, Prettier, Ruff, Mypy and iOS bundle export. No new native device run.
Shipped as **0.1.0 (9)** on 2026-10-16; Apple confirms **VALID / IN_BETA_TESTING**.
See [release details](TESTFLIGHT.md).

---

# Historical revision 11: longer-word campaign

Rebuilt 50 connected crosswords around actual longer answers. There are 250 unique
required spellings: 38 three-letter, 134 four-letter, **59 five-letter and
19 six-letter answers**. Revision 10 had 19 five-letter answers and no six-letter
answers. Five-letter answers now start at level 3; six-letter answers start at
level 18. Every board from level 6 has at least one longer answer, and every board
from level 26 has at least two. The dictionary remains at 1,233 reference entries /
1,202 playable words; no new dictionary entries were needed.

| Levels | 3 letters | 4 letters | 5 letters | 6 letters |
| ------ | --------- | --------- | --------- | --------- |
| 1–5    | 10        | 13        | 2         | 0         |
| 6–15   | 3         | 36        | 11        | 0         |
| 16–25  | 10        | 29        | 7         | 4         |
| 26–40  | 9         | 35        | 23        | 8         |
| 41–50  | 6         | 21        | 16        | 7         |

Target selection favors ordinary nouns, adjectives and numbers, using the existing
source-linked senses. Excluded specialist/ambiguous candidates during selection;
reviewed all 250 target glosses. Familiarity ratings are assistant editorial
estimates, not corpus frequency measurements or native-speaker sign-off. Existing
pronoun, finite-verb/action-form and name-only exclusions apply to required answers,
accepted variants and bonuses. Ordinary noun meanings that overlap names remain
eligible per the owner's earlier clarification. Optional bonus words can recur;
required answers cannot.

The first five levels use five tiles. Later levels use five or six tiles; a
six-tile wheel alone no longer counts as length progression. Gates require at
least four boards with six-letter answers in levels 16–25, eight in levels 26–40,
and seven in levels 41–50. Chapter board 3 remains a challenge followed by recovery
of at least two score points. Maximum upward score jump: 9.
Revision 11 reduces the tile-count multiplier from 15 to 8 and unfamiliarity
multiplier from 5 to 3 so six tiles do not automatically classify normal vocabulary
as hard. These are sorting estimates; playtesting is still needed to calibrate
perceived difficulty. Historical revision scores are unchanged.

All boards remain 6–7 columns wide and at most five rows, filling the larger phone
board width with at least 41-point rendered cells in the existing SE projection.
Every answer crosses another; no accidental word runs or duplicate wheels. See
[all 50 boards and source-linked meanings](LEVELS_V11.md).

Rebuild with `scripts/rebuild-wide-content.py --revision 11`, then
use `--promote-reviewed` only for the exact digest in `discovery.v11.review.json`.
Historical packs 1–10 stay immutable. The active catalog uses revision 11 and
migrates old saves, retaining completed levels, partial solved-word credits, paid
hints, coins, postcards and lifetime bonus rewards. The compatibility limit for
historical hint usage is 1166. Revision 10 remains the currently uploaded
TestFlight build, **0.1.0 (8)**; this change has not been uploaded.

Validation: 154 Jest tests, 78 Pytest tests, all 50 engine solves, TypeScript,
ESLint, Prettier, Ruff, strict Mypy and iOS bundle export. New regression coverage
rejects short-only campaigns and insufficient six-letter stages, checks chapter
pacing, reproduces the reviewed pack and migrates a revision-10 level-25 SQLite
save through restart. No new native device run for this content-only revision.

---

# Historical revision 10: pacing, postcards and bonus rewards

The fifty reviewed revision 9 boards are reordered into ten chapter waves: build
up, challenge on the third board, recovery on the fourth, then finish the chapter.
All 250 unique answers, exact layouts, tile multiplicities and bonus lists remain
unchanged by source-board comparison. The dictionary remains at 1,233 reference
entries / 1,202 playable words, with the existing grammar and name policy.

Familiarity estimates were revisited for everyday senses such as `სპილო`, `სიო`,
`ქილა`, `დრო` and less familiar senses such as `რული`, `ჭაკი`, `ირაო`.
These are assistant editorial estimates, not native-speaker/player calibration.
The largest upward score jump is now 7 (previously 39); level 23 is 64 (previously
97). Release gates require chapter board 3 to be its peak, board 4 to be at least
2 points lower, and upward transitions to stay within 10 points. Six tiles still
start at level 22; the five-tile recovery moves to level 29. Final chapters use six
tiles with recovery supplied by shorter/more familiar answer sets.

| Chapter | Difficulty scores in play order |
| ------- | ------------------------------- |
| 1       | 43, 45, 49, 47, 47              |
| 2       | 47, 47, 54, 49, 51              |
| 3       | 54, 54, 58, 54, 51              |
| 4       | 56, 56, 61, 56, 59              |
| 5       | 56, 58, 64, 62, 62              |
| 6       | 64, 69, 70, 65, 64              |
| 7       | 66, 66, 71, 66, 68              |
| 8       | 68, 69, 73, 70, 71              |
| 9       | 72, 74, 78, 73, 75              |
| 10      | 77, 77, 80, 78, 79              |

Rebuild with `scripts/rebuild-wide-content.py --revision 10`. It reuses
`discovery-v9-ka.json`; no new words are invented or imported. Draft promotion is
bound to `discovery.v10.review.json`. Old packs stay immutable. Revisions 1–9
migrate to 10 preserving coins, solved-word credits, paid hints, completion and
lifetime bonus rewards. The hint compatibility bound is 1124.

Completing each chapter automatically collects its destination postcard. Existing
completed chapters unlock retroactively. The album is available from Home and
Chapters, previews the next destination, and opens earned cards at full size.
All ten images are the existing approved paintings; captions describe the scenes
without asserting unverified historical dates or identifying the generic palace
painting as a particular monument.

Every 10 successful bonus finds earns one free **letter** hint, in addition to the
existing 3 coins per find. Progress carries across levels. Free letter hints are
spent before coins; whole-word hints still cost 40 coins. Duplicate submissions,
replayed completed boards and failed saves cannot grant more rewards. Counters
`bonusRewards.totalFound` and `bonusRewards.hintsSpent` are saved atomically with
the word discovery. Old snapshots missing the counters receive credit for their
recorded bonuses before retired markers are filtered; migration is persisted
once. Missing counters are accepted only as the legacy extension; malformed or
inconsistent counters are rejected. Postcards derive from saved chapter completion.

Automated validation: 148 Jest tests, 76 Pytest tests, TypeScript, ESLint,
Prettier, Ruff, strict Mypy, all 50 engine solves and iOS bundle export pass.
The isolated iPhone 17 native flow also passed: tenth bonus → free hint → chapter
completion → full postcard → collected album. See [native check notes](../mobile/e2e/README.md).
Shipped to TestFlight as **0.1.0 (8)** on 2026-10-16; Apple confirms
**VALID / IN_BETA_TESTING**. See [release details](TESTFLIGHT.md).

# Historical revision 9

Revision 9 adds **686 reference-checked ordinary Georgian noun/adjective senses**,
raising the reference dictionary from 547 to 1,233 entries. **1,202 words are
eligible for current play**. Pronouns, conjugated verbs, seven verbal action forms
and known name-only spellings are excluded from answers, variants and bonuses.
The owner explicitly approved retaining ordinary senses of name homographs, such
as `ია` (violet) and `მერი` (mayor). Every new entry has a part of speech, short
sense gloss and exact Wiktionary revision link. Historical entries remain intact.
See [vocabulary provenance and policy](../content/dictionaries/README.md).

All **250 required answers remain unique across 50 boards**. Eight boards (20,
23, 25, 26, 30, 32, 37, 50) were refreshed, bringing 23 new required spellings into
the campaign, including `სპილო`, `ქალი`, `ქილა`, `წელი` and `წრე`. The other 42
layouts remain unchanged. Bonus lists are regenerated from the expanded eligible
pool: 109 opportunities across 41 spellings. Optional bonuses may occur on more
than one board, so every eligible word a player finds is recognized.

Each board has five answers and five/six physical tiles. Six tiles still begin at
level 22 (medium), with the five-tile recovery at level 47. All grids are 6–7
columns and at most five rows; the minimum rounded iPhone SE cell remains 41 pt.
All replacement layouts were inspected for connected crossings, tight bounds and
word spacing. Chapter/level IDs, order and backgrounds stay stable.

Rebuild with `scripts/rebuild-wide-content.py --revision 9`.
Generation produces drafts. `discovery.v9.review.json` binds explicit
`--promote-reviewed` promotion to the reviewed SHA-256 digest. Both release gates
reject excluded/repeated answers and incomplete bonus recognition. Revisions 1–8
migrate to 9 with completed boards, earned coins, solved-word credits and paid
hints preserved. The hint compatibility bound is 1082. A real SQLite regression
covers migration of the retired `სვლა` answer and a paid hint exactly once.

Validation passed: 137 Jest tests, 75 Pytest tests, TypeScript, ESLint, Prettier,
Ruff, strict Mypy, all 50 engine solves and iOS bundle export.

This is assistant reference review; native-speaker editorial approval and
corpus-based commonness/difficulty calibration remain pending. This source change
has not been built or uploaded to TestFlight.

# Historical revision 8

Revision 8 removes conjugated verb forms (`არის`, `აქვს`, `იდო`, `იყო`, `მინდა`,
`მოდი`, `მშია`) from required answers, accepted variants and bonuses. Pronoun
exclusions remain in place. The revisioned policy preserves exact historical
revision 6/7 reproduction and allows old saves to be read before migration.

The owner chose dictionary expansion to retain full boards without repetition.
`discovery-v8-ka.json` preserves the 421 historical entries and adds 126 individually
selected, reference-checked noun, adjective and adverb senses: 547 total entries,
523 eligible for current play. Every addition records its part of speech, short
sense gloss and exact Wiktionary revision. Archaic-only entries and unsuitable
variants were rejected during review. This is assistant reference review;
native Georgian editorial approval and player difficulty calibration remain pending.

All **250 required answers are unique across all 50 boards**, including accepted
variants. Each board has five answers; `ასი` and `სია` each occur once as required
answers. Optional bonuses still recognize every eligible formable extra, including
words used on another board; they are voluntary and never required to advance.
There are 99 bonus opportunities across 36 distinct spellings. All 50 layouts were
rebuilt and inspected for tight bounds, connected crossings and word spacing.

- Levels 1–21: five tiles. Six tiles begin at level 22, at medium difficulty.
- Levels 22–50: six tiles, with a five-tile recovery board at level 47.
- All answers have 3–5 letters; 200/250 have four or five letters.
- All grids are 6–7 columns wide and at most five rows high. Phone width and
  minimum 36 pt iPhone SE cell constraints remain enforced.
- Chapter/level IDs, chapter order and existing backgrounds remain stable.

Rebuild with `scripts/rebuild-wide-content.py --revision 8`.
Generation exports drafts; `discovery.v8.review.json` binds `--promote-reviewed`
to the reviewed SHA-256 digest. Mobile and Python release validation reject
repeated required spellings, excluded words, malformed grids and incomplete bonus
recognition. Revisions 1–7 migrate to 8 with completed boards, earned coins,
solved-word credits and paid hints preserved. The hint compatibility bound is 1040. Validation passed: 131 Jest tests, 73 Pytest tests, TypeScript, ESLint,
Prettier, Ruff, strict Mypy, all 50 engine solves and iOS bundle export. This
content change has not been built or uploaded to TestFlight.

# Historical revision 7

Revision 7 removes pronouns from targets, accepted variants and bonuses at the
owner's request. `content/dictionaries/word-policy.json` is shared by the mobile
catalog and Python rebuild. The unchanged 421-entry reference dictionary yields
404 eligible words; `ისინი` is also explicitly excluded even though it was never
in the dictionary. Historical packs still use the complete reference vocabulary
solely to validate and migrate old saves.

There are 50 levels, 252 target slots, 150 distinct targets and 123 eligible bonus
opportunities (29 distinct spellings). Six boards have no eligible bonus words.
Fourteen layouts were replaced, including two adjacent boards needed to retain
the existing repetition limits; 36 layouts remain unchanged. All wheel sizes,
level/chapter IDs and order, target counts and width/SE size rules are preserved.
The first board remains easy, and six tiles still begin at level 22 (medium).

Rebuild with `scripts/rebuild-wide-content.py --revision 7`; the current default is 12.
Generation still produces drafts. `discovery.v7.review.json` binds explicit
`--promote-reviewed` promotion to the inspected draft digest. Revisions 1–6
migrate to 7 while keeping coins, completed levels, solved-word credits and paid
hints; obsolete pronoun bonus markers are removed without taking back earned
coins. The save hint compatibility bound is 998. No deployment is included in
this content change.

The sections below record the historical revision 6 campaign. Its exact files and
recipes remain available with `--revision 6` for save compatibility and reproduction.

Revision 6 has 50 wide, connected, mixed-topic crosswords. Revision 5 is
retained unchanged as historical content. Claude's components, screens, theme and
app routes were not edited for this rebuild.

## Progression and vocabulary

| Levels | Physical wheel tiles                           | Targets                       |
| ------ | ---------------------------------------------- | ----------------------------- |
| 1–20   | 5                                              | 5                             |
| 21–30  | 5 at level 21, then 6 starting at level 22     | 5                             |
| 31–40  | 6                                              | 5, with 6 at levels 36 and 38 |
| 41–50  | 6, with a five-tile recovery board at level 46 | 5                             |

There are **252 answer slots, 153 distinct targets, 48 five-answer boards and two
six-answer boards**. No target has two letters; no connector exceptions are needed.
Targets are 3–5 letters in this release (the rule allows 3–6); 167/252 are four or
five letters. Every wheel is the exact maximum per-letter multiset of its targets:
no padding, at most six physical tiles. All 50 wheels and answer sets are distinct.
Targets appear at most seven times globally, twice per five-level chapter, and
consecutive boards share at most one target. Chapter IDs and level IDs/order remain
unchanged. Chapter titles and level names remain neutral discovery labels.

Difficulty uses the unchanged formula:

`min(100, 15 × (tiles − 4) + 8 × (targets − 4) + 2 × longestWord + Σ[2 × (length − 2) + 5 × (familiarity − 1)])`

Easy is below 45, medium below 65, otherwise hard. Level 22 introduces six tiles at
64 (medium); level 46 relaxes to five tiles and score 47. Difficulty rises and falls,
not monotonically. Familiarity scores (1 or 2) are assistant editorial estimates,
not corpus measurements or calibrated player telemetry.

Every formable verified word outside the targets is a bonus, including two-letter
words and past/future targets. There are **154 bonus opportunities, 33 distinct
bonus spellings**, and at least one bonus per level. Rewards remain +3 once per
bonus per board and +25 once per completed board; cell/word hints cost 15/40.
The 421-entry dictionary and its exact Wiktionary revision references are unchanged.
Native Georgian editorial review and player difficulty testing remain pending.

## Shape and sizing

Both Python and TypeScript enforce 5–7 columns, rows ≤ floor(columns / 1.15), tight
outer bounds, density 35–65%, connected crossing graphs, and no accidental runs or
parallel overlaps. All required words cross another. Five-column introductory
layouts are allowed only in levels 1–5; this selection uses six or seven columns
throughout. Seven-by-six is explicitly rejected by the SE size check.

The independent content projection copies the supplied formula, without importing
UI code: `min(84, (W − 4 × (columns − 1)) / columns, (H − 4 × (rows − 1)) / rows)`.
Areas are SE 351×224, iPhone 17 378×335, Pro Max 416×392, iPad Pro 11 520×672 pt.
Every new board uses 100% of the iPhone 17 and Pro Max width in that model.
The existing renderer floors cell size: on iPhone 17 the actual projection is
98.94% width (374/378 pt), not literally 100%. No renderer change was made.
The smallest rounded SE cell is 41 pt, exceeding the required 36 pt; some SE boards
use less than full width because the smaller board area's height is the limit.

### Before / after

Grid dimensions below are **columns × rows**, not rows × columns.

| Metric                                          |             Revision 5 |            Revision 6 |
| ----------------------------------------------- | ---------------------: | --------------------: |
| Median iPhone 17 cell, continuous model         |               56.08 pt |              50.57 pt |
| Median iPhone 17 cell, renderer rounding        |                55.5 pt |                 50 pt |
| Boards using ≥90% iPhone 17 width (both models) |                  24/50 |                 50/50 |
| Two-letter target slots                         |                     35 |                     0 |
| Minimum rounded SE cell                         |                  28 pt |                 41 pt |
| Target lengths: 2 / 3 / 4 / 5 / 6               | 35 / 67 / 127 / 16 / 1 | 0 / 85 / 148 / 19 / 0 |

Median cell size decreases because the boards now occupy six or seven columns;
width coverage and SE legibility improve. This rebuild does not claim every
individual cell becomes larger.

| Columns × rows | v5 boards | v6 boards |
| -------------- | --------: | --------: |
| 3 × 5          |         1 |         0 |
| 3 × 6          |         1 |         0 |
| 3 × 7          |         1 |         0 |
| 4 × 4          |         2 |         0 |
| 4 × 5          |         3 |         0 |
| 4 × 6          |         5 |         0 |
| 4 × 7          |         3 |         0 |
| 5 × 4          |         5 |         0 |
| 5 × 5          |         4 |         0 |
| 5 × 6          |         3 |         0 |
| 5 × 7          |         1 |         0 |
| 6 × 3          |         2 |         0 |
| 6 × 4          |         5 |         4 |
| 6 × 5          |         3 |        14 |
| 6 × 6          |         2 |         0 |
| 7 × 3          |         3 |         1 |
| 7 × 4          |         4 |        15 |
| 7 × 5          |         2 |        16 |

## Reproduction and review

The recipes specify source pools, expected targets, seed, exact wheel multiset and
whether to transpose the generated layout. The seeded generator plus transpose
reproduces coordinates, word IDs, wheel order, bonuses and difficulty. All 50 text
grids and target/bonus lists were inspected against the unchanged reference
vocabulary before explicitly approving the draft digest in
`content/levels/discovery.v6.review.json`.

A wide recipe may opt into a bound-aware layout with `"layout": "bounded-v1"` plus
`maxRows`, `maxColumns` and `minColumns` (limits apply before any transpose). That
mode places every target inside the board limits by backtracking: it prunes each
partial layout that leaves the limits or fails `valid_layout` instead of discarding
the board, and the result depends only on the word set, seed and limits. Recipes
without `layout` use the unchanged greedy generator, so every pack through revision
28 rebuilds byte-identically. No active pack uses the bounded mode yet; the
500-level rebuild draft in [CAMPAIGN_500_FULL_REBUILD_RESULTS.md](CAMPAIGN_500_FULL_REBUILD_RESULTS.md)
is its first user.

Generation always exports `generated-draft`. Promotion is a **separate explicit
invocation** bound to the reviewed draft SHA-256; a changed draft cannot reuse the
approval. Both commands are deterministic, and the promoted output is byte-for-byte
identical to the checked-in pack:

```sh
PYTHONPATH=puzzle-generator/src puzzle-generator/.venv/bin/python scripts/rebuild-wide-content.py
PYTHONPATH=puzzle-generator/src puzzle-generator/.venv/bin/python scripts/rebuild-wide-content.py \
  --promote-reviewed --output artifacts/wide-v6/reproduced.json
cmp content/levels/discovery.v6.json artifacts/wide-v6/reproduced.json
npm run validate:content
```

Both rebuild validation and the TypeScript release check print each level's cell
size and width for iPhone 17 and SE, including the continuous and rounded models.
The v5 rebuild remains available through `scripts/rebuild-discovery-content.py`.

## Existing saves

The pack ID is still `geowords-prototype`; ka-001…ka-050 and chapter IDs retain their
order. `previousCatalogs` includes immutable revisions 1–5. They upgrade directly
to 6 using the existing `migrateTopics` policy: preserve completed levels, matching
answers, retired solved-word credits, paid hint credits, current level, settings,
and coins. Retired bonus markers are filtered while their earned coins remain.
An already completed level never earns another completion reward. If transferred
credits complete a partial board, its one completion reward is paid.

Revision 6 accepts the historical 914-hint counter allowance plus at most 35 cells
and seven word hints (956 total). This is a save compatibility bound, not a new
in-game allowance. Unknown/corrupt saves remain on disk. SQLite migration is atomic,
writes once, rolls back failures, and rejects stale writers.

Tests construct untouched, partial, word-and-cell-hinted, completed and final-level
saves using the real immutable v5 catalog and game engine; they check migration,
credits, rewards, settings, subsequent reloads, and unsupported-payload retention.
The historical tests also cover revisions 1–5, every partial board, rollback and
SQLite close/reopen.

## Validation and native evidence

- `npm run check`: TypeScript, ESLint, 116 Jest tests / 14 suites, all-level solve,
  shape/pacing/bonus validation, and Prettier.
- `uv run pytest`: 67 tests, including byte-identical rebuild and separate promotion.
- Ruff and strict Mypy pass.
- iPhone 17 / iOS 26.5 / Expo Go 57.0.9: levels 1, 22 and 50 captured at
  1206×2622 pixels after native level/count assertions. Images are in
  `artifacts/wide-v6/iphone17-level-{01,22,50}.png`. These are test-fixture captures,
  not a complete 50-level native playthrough. The exact 12 stale historical Maestro
  flows and the new screenshot flow are documented in `mobile/e2e/README.md`.

No new TestFlight binary was built or uploaded for this revision.

## Level review and device projections

Cell sizes/widths here use the supplied continuous model; CLI output also includes
renderer rounding. All iPhone 17 boards reach 100%; Pro Max does too.

| Level | Tiles | Targets                           | Bonuses                         | Columns × rows | Score | iPhone 17 cell / width | SE cell / width    |
| ----: | ----: | --------------------------------- | ------------------------------- | -------------- | ----: | ---------------------- | ------------------ |
|     1 |     5 | თმა, მათი, მთა, ჭია, ათი          | აი, ია                          | 7 × 3          |    43 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|     2 |     5 | სად, დილა, სილა, ალი, ასი         | აი, და, ია, ის, სალი, სია       | 7 × 4          |    45 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|     3 |     5 | ომი, ლომი, ლოდი, მოდი, იდო        | დოლი                            | 7 × 5          |    47 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|     4 |     5 | ზეგ, ზემო, გემო, მზე, ეზო         | ეგ, მე                          | 6 × 5          |    45 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|     5 |     5 | თივა, თავი, სია, თასი, ასი        | ათი, აი, ია, ის                 | 7 × 5          |    47 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|     6 |     5 | მელა, თემა, მთა, მალე, თმა        | მე                              | 7 × 4          |    47 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|     7 |     5 | ლარი, ხალი, ალი, ხარი, არხი       | აი, ია, ლირა, რა                | 7 × 4          |    49 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|     8 |     5 | თავი, თივა, ნავი, ათი, ვინ        | აი, ია                          | 6 × 5          |    47 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|     9 |     5 | სია, ფარი, ფასი, არის, ასი        | აი, ია, ის, რა                  | 6 × 5          |    47 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    10 |     5 | სილა, ვალი, ვალსი, სია, სვლა      | აი, ალი, ასი, ია, ის, სალი      | 6 × 5          |    58 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    11 |     5 | ათი, ხმა, თმა, თხა, მათი          | აი, ია, მთა                     | 6 × 4          |    43 | 59.67 pt / 100.00%     | 53.00 pt / 96.30%  |
|    12 |     5 | იდო, ლოდი, ალი, დოლი, დილა        | აი, და, ია, ოდა                 | 6 × 5          |    52 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    13 |     5 | ასი, სამი, სია, სიმი, მისი        | აი, ია, ის, სმა                 | 6 × 5          |    52 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    14 |     5 | მთა, მათი, ნამი, მინა, თმა        | ათი, აი, ია                     | 7 × 4          |    52 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    15 |     5 | თივა, ვალი, თავი, თვალი, ათი      | აი, ალი, ია                     | 6 × 5          |    53 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    16 |     5 | ათი, თასი, ათასი, ასი, საათი      | აი, ია, ის, სია                 | 7 × 5          |    58 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    17 |     5 | სილა, ლამის, სამი, სია, ალი       | აი, ასი, ია, ის, სალი, სმა      | 6 × 5          |    51 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    18 |     5 | თმა, თემა, მთა, ხმა, თხა          | მე, ხე                          | 6 × 4          |    43 | 59.67 pt / 100.00%     | 53.00 pt / 96.30%  |
|    19 |     5 | ხარი, არხი, სია, არის, ასი        | აი, ია, ის, რა                  | 7 × 4          |    47 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    20 |     5 | მთა, თივა, თმა, თავი, მათი        | ათი, აი, ია                     | 7 × 4          |    47 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    21 |     5 | სილა, ხალი, სია, სახლი, ალი       | აი, ასი, ია, ის, სალი           | 7 × 4          |    51 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    22 |     6 | კილო, ცოლი, ორი, როლი, როკი       | ოცი                             | 7 × 5          |    64 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    23 |     6 | ნუში, ნელი, ნული, შინ, შენი       | შენ                             | 7 × 5          |    69 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    24 |     6 | დარი, რვა, შავი, შიდა, ვარდი      | აი, და, ია, რა                  | 7 × 5          |    68 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    25 |     6 | ფენა, ნაზი, ზნე, ენა, ფენი        | აი, ია                          | 6 × 5          |    67 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    26 |     6 | ბატი, ბინა, ბალი, ტანი, ტბა       | აი, ალი, ბანი, ია               | 7 × 5          |    64 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    27 |     6 | აქეთ, ელვა, თვე, ქვა, აქვე        | აქ                              | 6 × 5          |    62 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    28 |     6 | ურო, ყური, იყო, შური, შორი        | ორი                             | 7 × 4          |    67 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    29 |     6 | ხევი, იხვი, ველი, ხილი, ხელი      | იელი, ხე                        | 7 × 5          |    66 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    30 |     6 | რაიმე, რამე, ჯერ, ჯამი, ჯარი      | აი, ია, მე, რა                  | 7 × 5          |    73 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    31 |     6 | კირი, ვირი, კივი, კარი, კავი      | აი, ია, იაკი, რა, რვა           | 7 × 5          |    66 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    32 |     6 | კოცნა, ოცი, კანი, კინო, კაცი      | აი, ია, ცა                      | 7 × 5          |    68 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    33 |     6 | რვა, ვაზა, იარა, ვაზი, ზარი       | აი, ია, რა                      | 6 × 5          |    64 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    34 |     6 | ზებრა, ბგერა, ზეგ, გზა, გარე      | ეგ, რა                          | 6 × 5          |    78 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    35 |     6 | ერთი, ქერი, აქეთ, ქერა, ქარი      | ათი, აი, აქ, ია, იქ, რა         | 7 × 4          |    71 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    36 |     6 | ნამი, მინა, ზომა, ზონა, ომი, ნაზი | აი, ია                          | 7 × 5          |    81 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    37 |     6 | თევზი, ზეთი, თვე, იქვე, ზევით     | იქ                              | 7 × 5          |    70 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    38 |     6 | ჩაი, ჩვენ, ნავი, ენა, ჩვენი, ვინ  | აი, ია                          | 7 × 5          |    76 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    39 |     6 | შიგ, გემი, შინ, შენი, შენ         | ეგ, მე                          | 6 × 4          |    60 | 59.67 pt / 100.00%     | 53.00 pt / 96.30%  |
|    40 |     6 | ძმა, მზე, რძე, მზერა, რამე        | მე, რა                          | 7 × 4          |    64 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    41 |     6 | კორტი, როკი, ტური, ურო, ორი       | კუ                              | 7 × 4          |    76 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    42 |     6 | იგი, რიგი, კარგი, კირი, კარი      | აი, ია, იაკი, რა                | 7 × 5          |    73 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    43 |     6 | ქვედა, აქვე, ქვა, აქვს, სად       | აქ, და, ეს                      | 7 × 4          |    66 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    44 |     6 | ეზო, ზემო, ზომა, მოდა, ზედა       | და, მე, მზე, ოდა                | 6 × 4          |    64 | 59.67 pt / 100.00%     | 53.00 pt / 96.30%  |
|    45 |     6 | ბინა, ბაღი, ტანი, ტბა, ბატი       | აი, ბანი, ია                    | 7 × 4          |    64 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    46 |     5 | ალი, სილა, არის, ასი, ლარი        | აი, ია, ის, ლირა, რა, სალი, სია | 6 × 5          |    47 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    47 |     6 | მეტი, ლომი, ომი, ტომი, ეტლი       | მე                              | 7 × 4          |    64 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
|    48 |     6 | შიდა, მოდი, მშია, მოდა, იდო       | აი, და, ია, ოდა, ომი            | 7 × 5          |    64 | 50.57 pt / 100.00%     | 41.60 pt / 89.80%  |
|    49 |     6 | სული, ნუში, ნული, შინ, სუნი       | ის                              | 6 × 5          |    69 | 59.67 pt / 100.00%     | 41.60 pt / 76.81%  |
|    50 |     6 | ხარი, მხარი, არხი, მუხა, რუხი     | აი, ია, რა, ხმა                 | 7 × 4          |    70 | 50.57 pt / 100.00%     | 46.71 pt / 100.00% |
