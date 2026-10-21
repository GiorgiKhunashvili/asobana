# Georgian vocabulary provenance

The original ten modern Georgian words were individually checked against their linked Georgian
Wiktionary entries on 2026-10-14. `prototype-ka.json` records the URLs and simple
English glosses. Credit: **Wiktionary contributors**; the vocabulary compilation is
provided under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
See [Wiktionary's copyright policy](https://en.wiktionary.org/wiki/Wiktionary:Copyrights).
Short glosses are reduced from the entries; inflection tables, examples, audio and
other dictionary text are not redistributed. Preserve attribution and share-alike
terms for adaptations of this data. Application code licensing is a separate decision.

This is a reference-checked prototype set, **not native-speaker editorial approval**.
No fake words, automated dictionary guesses or bulk dictionary imports are bundled.
The historical four crossword layouts are manually authored and mechanically validated.
They remain as revision 1 fixtures. Revisions 2 and 3 are also retained for save
migration; revision 4 is also retained. The active campaign is
[revision 27](../../docs/DISCOVERY_CONTENT.md).

The [October 20 owner review](../../docs/VOCABULARY_EXPANSION_REVIEW_2026_10_20.json)
records 277 additional approved senses, bringing the reviewed pool to 1,997.
Their source URLs, checked dates, concise glosses and individual decisions are
retained in that ledger. Georgian explanatory-dictionary and University of Georgia
synonym-dictionary entries are verification sources; full definitions are not
republished. Existing Wiktionary attribution and terms remain attached.
The [generation trial](../../docs/VOCABULARY_GENERATION_TRIAL_2026_10_20.md) uses
copied dictionaries and policies under `artifacts/vocabulary-trial-1997/runtime/`.
The owner subsequently approved this exact trial; it is now integrated as revision 27.
Historical dictionaries and packs remain immutable.

`beta-ka.json` records 147 selected reference-checked words with exact Wiktionary
source revision URLs and short glosses, under the same CC BY-SA 4.0 terms. Source
Georgian sections and all 50 crossword layouts were inspected by the assistant;
this does not constitute native-speaker editorial approval. Three entries support
recipe reproduction without appearing as targets or bonuses. See
[the content review and level table](../../docs/BETA_CONTENT.md).

`expanded-ka.json` preserves all 147 historical entries and adds 173 individually
reference-checked words (320 total). Each addition has an exact Wiktionary source
revision, a short gloss, and `prototype-reference-checked` status. Georgian
definitions were inspected on 2026-10-14 using the public MediaWiki API. Missing
Georgian entries and unsupported topic senses were excluded. No source lookup
automatically grants editorial approval. This is an assistant reference review;
native Georgian editorial review remains outstanding.

The historical revision 4 topic pools contain the reviewed senses for that campaign; the
dictionary also includes vocabulary held for later puzzles and historical saves.
Familiarity ratings in the recipe manifest are assistant estimates for pacing,
not corpus-derived frequencies or a native-speaker proficiency assessment.

`discovery-ka.json` preserves those 320 entries and adds 101 individually selected,
reference-checked words (421 total), checked on 2026-10-15. Exact source revision
links, short glosses and CC BY-SA terms remain attached to every entry. Mixed-topic
revision 5 accepts every formable bundled extra as a bonus, even when it is a
future target. See [the current level review](../../docs/DISCOVERY_CONTENT.md).
Assistant estimates of familiarity are recorded in the recipe manifest;
native Georgian editorial review remains outstanding.

Future workflow: acquire a licensed source → ingest to candidates → normalize and
validate → native-speaker/editorial review → explicitly approve entries → generate
draft layouts → review each layout → promote into a versioned playable pack.
Generator output is always `generated-draft` and is rejected by the mobile loader
until reviewed. Input ingestion never grants approval on its own.

Revision 7 applies `word-policy.json` to the current campaign: pronouns are excluded
from both required answers and bonus words at the owner's request. The policy lists
all 17 pronouns in `discovery-ka.json`, plus the explicitly requested `ისინი` (not
present in the dictionary). There are 404 eligible words. The complete reference
dictionary and historical packs remain unchanged so old saves can be validated
before migration. The noun `თავი` (head) remains eligible despite its pronominal
use in other contexts. Additional vocabulary must be checked against the same
editorial category policy before being added.

Revision 8 adds `discovery-v8-ka.json`: all 421 historical entries remain unchanged,
plus 126 individually selected noun, adjective and adverb senses. Each new entry
records its part of speech, a short reviewed gloss and exact source revision.
Wiktionary category listings were used only to discover candidates; ingestion did
not grant approval. The selected senses and their Georgian definitions were
individually reviewed by the assistant on 2026-10-15. Archaic-only words and
unsuitable variants were rejected. Native-speaker editorial review remains pending.

The revisioned category policy additionally excludes all seven conjugated verbs
in the reference vocabulary (`არის`, `აქვს`, `იდო`, `იყო`, `მინდა`, `მოდი`, `მშია`).
Revision 8 has 547 reference entries and 523 eligible words. Its action nouns retain
their noun senses. Only the immutable historical catalog uses excluded spellings
for save validation. The rebuilt campaign has 250 unique required answers;
optional formable extras remain recognized across boards. Future additions must
be reviewed for their noun/adjective/adverb sense before inclusion. Credit and
CC BY-SA 4.0 terms above apply to the expanded vocabulary compilation as well.

Revision 9 adds `discovery-v9-ka.json`: **686 new ordinary noun/adjective senses**,
1,233 reference entries and **1,202 eligible words**. All 547 historical entries
remain byte-for-value unchanged. Everyday additions include `წიგნი` (book),
`სკოლა` (school), `კოვზი` (spoon) and `ქოლგა` (umbrella). Each addition has a
reviewed sense, part of speech and exact source revision URL. Of 698 candidates
with suitable source sections, 12 ambiguous, rare, historical-only or mismatched
senses were held back; another 64 candidates lacked sufficient source support.
This remains assistant reference review, not native-speaker approval or a corpus
frequency ranking. The attribution and CC BY-SA terms above apply.

The owner requested no personal names and explicitly chose to **keep ordinary
meanings of name homographs**. The policy blocks 486 name-only spellings discovered
in the linked Wiktionary given-name/surname categories and a separately checked
name form (`დავით`). No name-only entry was
found in the existing reviewed dictionary. Ordinary senses such as `ია` (violet),
`მერი` (mayor), `მელანი` (ink), `ნუკრი` (fawn) and `იმედი` (hope) remain eligible.
The exclusion list is a guard against known names, not a comprehensive Georgian
name classifier; future additions still require sense review.

Revision 9 also excludes seven verbal action forms: `კოცნა`, `მზერა`, `სვლა`,
`სმა`, `წერა`, `ჭამა`, `ხილვა`. These are action senses (some classified as nouns
in dictionaries), separate from the seven already excluded conjugated verbs.
Ordinary concept senses such as `თამაში` (game) and `ცოდნა` (knowledge) remain.
The active pack refreshes eight boards and has 250 distinct required spellings.
Historical packs use their own revision's policy so old saves can still migrate.

## Everyday required words (revision 12)

`everyday-targets-v12.json` is an explicit required-answer allowlist, separate from
`word-policy.json` and the broader playable dictionary. It records the review of
all 250 revision-11 answers: 88 bonus-only and 162 eligible. The new campaign uses
250 distinct approved spellings. Valid rare words stay accepted as optional
bonuses, while pronoun, verb/action-form and name-only exclusions apply to both.

Supporting ranks are adapted from the [Spoken Georgian Frequency List v2026.07](https://easygeorgian.com/spoken-georgian-frequency/),
Lasse N. and Tamar N., EasyGeorgian Research, CC BY 4.0. Rank extraction and joining
to existing dictionary entries are our adaptations. This is a forum/subtitle
proxy with AI lemmatization and topic bias, not a native-speaker familiarity test.
The existing Wiktionary glosses remain under their recorded CC BY-SA provenance.
See [the full review](../../docs/VOCABULARY_REVIEW_V12.md) for decisions, limitations,
source links, the source-file digest and final level contents.

## Journey vocabulary — revision 13

`discovery-v13-ka.json` preserves all 1,233 historical reference entries and adds
79 individually reviewed spellings: 38 everyday nominative plural nouns,
37 everyday adverbs, two ordinary singular nouns and two adjectives. New entries comprise 7 three-letter, 11 four-letter,
26 five-letter and 35 six-letter spellings. Each has a named dictionary source,
reviewed meaning and part of speech; Wiktionary entries include revision IDs, and
plural evidence is recorded under the singular entry. Wiktionary-derived glosses
retain CC BY-SA 4.0 attribution. For `შუა`, `ღრუ`, `უცებ` and `მეტად`, the linked Georgian explanatory
definitions were checked and brief English glosses written independently. No
automatic morphology supplies unreviewed words.

`everyday-targets-v13.json` contains 869 approved target spellings: the previous
778 minus four newly excluded targets, plus 95 individual approvals. Of those
95, 79 are reference additions; sixteen were already in the wider dictionary
(fifteen everyday adverbs and the adjective `ზედა`). The file records all new
approvals, 23 held plural candidates and the held particle/interjection `არა`. Plural holds mean exact form/source evidence
was not sufficiently inspected, not that the word is invalid. `არა` remains outside
this noun/adjective/number/adverb expansion. Familiarity is an
assistant editorial judgment; no native-speaker review or invented frequency
rank is claimed. `ბლოკი` is approved for the ordinary building-block sense, with
[a National Parliamentary Library source](https://www.nplg.gov.ge/wikidict/index.php/ბლოკი).

The current dictionary has 1,312 reference entries and 1,274 eligible spellings.
`word-policy.json` excludes six reviewed nonstandard substitutions from targets,
variants and bonuses: `ბინტი`, `ბლინი`, `ვედრო`, `კაშნე`, `კრანი`, `მაიკა`.
See its source URLs and individual replacement decisions, including the
[Georgian usage list](https://www.aura.ge/menu/1-archevani/317-leqsebi-deda-enaze/14846-vilaparakot-qartulad-barbarizmebis-leqsikoni.html).
Established standard loanwords are not banned solely by origin.

The owner also excludes `რული` in every sense. Its historical reference gloss
"nap" is an attested Georgian meaning; the nonstandard borrowed steering-wheel
sense is separate (prefer `საჭე`). The policy preserves that provenance distinction
while excluding the spelling from current gameplay. These seven exclusions start
at revision 13; historical packs and dictionaries remain immutable for migration.
The editorial list is not a complete automatic grammar/barbarism classifier.
Valid rare words stay in bonus recognition; the target allowlist remains separate.

The owner approved a global minimum repeat gap of 75 levels, including accepted
variants. The journey therefore needs 1,200 answer slots, rather than 1,200 unique
spellings. Bonuses do not reset the gap. See [the full revision-13 review](../../docs/VOCABULARY_REVIEW_V13.md)
for individual sources, final campaign contents, pacing and actual check results.

## Non-plural required vocabulary — revision 14

The owner’s 2026-10-18 rule demotes the 38 individually verified plural nouns to
**optional bonuses only**. `everyday-targets-v14.json` retains **831 non-plural
approvals** and records every demotion, singular lemma and unchanged source link
in `pluralReview`. `word-policy.json` stores these as revision-scoped
`requiredExcludedCategories`, separate from exclusions from all gameplay. Python
and TypeScript enforce the same list for answers and variants; suffixes alone do
not establish grammatical number. This explicit list is not a complete classifier.

`discovery-v13-ka.json` is unchanged: **1,312 reference entries / 1,274 playable**.
Verified plurals and valid rare words remain recognizable bonuses. Historical
revision-13 targets and approvals are immutable for migration. No new dictionary
entries or frequency ranks were added. Existing editorial familiarity judgments
are retained; no owner/native-speaker review is claimed.

The campaign search prioritizes distinct required spellings within all existing
spacing, pacing, progression and layout rules. Exact usage, unused approvals and
limitations appear in [the revision-14 review](../../docs/VOCABULARY_REVIEW_V14.md).
The owner can review [all 831 words](../../docs/VOCABULARY_OWNER_REVIEW_V14.md); blank
decision fields mean pending owner review.

Revision 15 records the owner’s review of the 152 unused revision-14 approvals.
Twelve explicitly removed spellings are excluded from every gameplay role; the
remaining 140 are owner-approved for required use under the existing rules.
`everyday-targets-v15.json` retains all individual meanings/source provenance and
records the review scope. There are 819 required approvals and 1,262 playable
reference spellings. No new dictionary entries were added. Historical files and
plural bonus eligibility remain unchanged. See [the current review](../../docs/VOCABULARY_REVIEW_V15.md).

Revision 16 applies the owner’s full-pool decisions: 53 further spellings are
excluded from all gameplay roles. Of 372 reviewed bonus spellings, exactly 325
are promoted to required eligibility and 47 remain bonus-only. The required
allowlist has 1,091 entries (766 retained plus 325 promoted); the unchanged
reference dictionary has 1,209 playable spellings, including 118 bonus-only.
The ten earlier approvals are included in the 325. Per-word meanings and source
URLs are retained in `everyday-targets-v16.json`; no fresh dictionary ingestion
or source verification is claimed. Historical dictionaries and allowlists are
unchanged. See [the exact campaign audit](../../docs/VOCABULARY_REVIEW_V16.md).

## Revision 17: owner-approved expansion batch 02

`discovery-v17-ka.json` retains all 1,312 previous reference entries exactly and
adds 130 individually checked noun/adjective senses explicitly approved by the
owner from `docs/VOCABULARY_EXPANSION_BATCH_02.json`. Each addition records its
Wiktionary URL, fixed revision ID, part of speech and concise gloss; source checks
were completed on 2026-10-18 when preparing the batch. Attribution remains to
Wiktionary contributors under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/);
the brief glosses are adaptations, not independent native-speaker validation.
Historical entry attribution and other source terms remain unchanged.

The reference now contains 1,442 entries; existing all-play exclusions leave
1,339 playable words. `everyday-targets-v17.json` contains 1,221 required approvals
(1,091 retained + 130 new), with 118 additional bonus-only words. All plurals,
47 owner-reserved bonus spellings and prior exclusions retain their policy status.
The approved goal of 1,500 needs 279 more individually reviewed additions.
Historical dictionaries and allowlists are immutable for save migration.

## Revision 18: expansion batch 03 approval and exclusions

`discovery-v18-ka.json` preserves all 1,442 prior reference entries exactly and
adds 131 owner-approved senses from the 140-word batch 03 review. The nine rejected
proposals (`ბიძია`, `გვიანი`, `დედიკო`, `მამიკო`, `მუშაკი`, `უკანა`, `წლიური`,
`ხანი`, `ჯერი`) are not ingested and are excluded from every gameplay role through
`owner-expansion-batch-03` from revision 18. Individual source URLs, fixed revision
IDs, concise glosses, parts of speech and supplemental sense checks are retained.
Sources were checked on 2026-10-18 when preparing the batch. Wiktionary adaptations
retain contributor attribution and CC BY-SA 4.0 terms; supplemental explanatory
dictionary text is not reproduced. No fresh native-speaker review is claimed.

The new reference has 1,573 entries / 1,470 eligible playable words. The main
allowlist has 1,352 approvals, with 118 additional bonus-only spellings. Earlier
plural and owner reservations remain unchanged. Another 148 approvals reach the
1,500-word goal. Historical dictionaries and allowlists remain immutable.

## Revision 19: expansion batch 04

The owner approved 129 of the 148 proposals in `VOCABULARY_EXPANSION_BATCH_04.json`.
The other 19 spellings are excluded from required answers, variants and bonuses
through `owner-expansion-batch-04`, starting with revision 19. The reference keeps
all 1,573 previous entries exactly and adds only the 129 approved senses, for
1,702 entries / 1,599 playable words. The main allowlist has 1,481 words; the 118
additional bonus-only spellings retain their status. Another 19 approvals reach
1,500. Historical dictionaries and allowlists remain immutable.

Source verification was completed on 2026-10-18 for the review batch. Wiktionary
entries retain fixed-revision links, contributor attribution and CC BY-SA 4.0
terms. For entries verified at ganmarteba.ge (Linguistic Technologies Group),
the URL, access-date context and source-content SHA-256 are retained; the short
English glosses are editorial wording and no full explanatory definitions are
reproduced. Historical attributions and source terms remain unchanged. No fresh
native-speaker review is claimed. The owner approval applies to the recorded
ordinary noun/adjective senses only.

## Revision 20: expansion batch 05

The owner approved 88 of the 100 proposals in `VOCABULARY_EXPANSION_BATCH_05.json`.
The other 12 spellings are excluded from required answers, variants and bonuses
through `owner-expansion-batch-05`, starting with revision 20. The reference keeps
all 1,702 previous entries exactly and adds only the 88 approved senses, for
1,790 entries / 1,687 playable words. The main allowlist has 1,569 words; the 118
additional bonus-only spellings retain their status. Another 231 approvals reach
1,800. Historical dictionaries and allowlists remain immutable.

Source verification was completed on 2026-10-18 for the review batch. Wiktionary
entries retain fixed-revision links, contributor attribution and CC BY-SA 4.0
terms. For entries verified at ganmarteba.ge (Linguistic Technologies Group),
the URL, access-date context and source-content SHA-256 are retained; the short
English glosses are editorial wording and no full explanatory definitions are
reproduced. Historical attributions and source terms remain unchanged. No fresh
native-speaker review is claimed. The owner approval applies to the recorded
ordinary noun/adjective senses only.

## Revision 21: Malta uses existing approved vocabulary

The Malta extension adds ten levels but no dictionary entries or editorial
approvals. It reuses `discovery-v20-ka.json`, `everyday-targets-v20.json` and every
existing word-policy decision. Counts remain 1,790 reference entries, 1,687 eligible
words and 1,569 required-eligible words. No duplicate revision-21 dictionary files
are needed. The current usage review is `docs/VOCABULARY_OWNER_REVIEW_V21.md`.

## Revision 22: Tunisia uses existing approved vocabulary

The 15-level Tunisia extension adds no dictionary entries or editorial approvals.
It reuses `discovery-v20-ka.json`, `everyday-targets-v20.json` and all existing policy
decisions. Counts remain 1,790 reference entries, 1,687 eligible words and 1,569
main words. No duplicate revision-22 dictionaries are needed. The current full
usage list is `docs/VOCABULARY_OWNER_REVIEW_V22.md`: 1,126 required words used,
443 unused, including 30 newly used by Tunisia.

## Revision 23: Spain uses existing approved vocabulary

The 30-level Spain extension changes no dictionary entries, approvals or exclusions.
It uses the revision-20 reference and allowlist: 1,790 entries, 1,687 playable words,
1,569 main approvals and 118 additional bonus-only spellings. Plurals remain bonus-only.
The current list is `docs/VOCABULARY_OWNER_REVIEW_V23.md`: 1,187 required words used,
382 unused, including 61 newly used by Spain. Another 231 approvals would reach 1,800.

## Revision 24: owner-approved replacements

`discovery-v24-ka.json` preserves all 1,790 previous entries and adds the 29
source-checked, owner-approved senses in `docs/VOCABULARY_REPLACEMENTS_APPROVED_01.json`.
Its 1,819 reference entries yield 1,687 eligible spellings after policy exclusions.
`everyday-targets-v24.json` removes exactly 29 prior approvals and adds exactly
29 replacements, keeping 1,569 main words and the same 118 bonus-only words.
The final choice is კოკა (traditional clay jug); unselected options are unapproved.
The 29 removals and eight rejected proposals are excluded in all gameplay roles
from v24, while historical data remains unchanged for save migration.

Each new entry retains its checked URL, date, short adapted meaning and source
provenance. Wiktionary contributor attribution and CC BY-SA 4.0 terms remain;
ganmarteba.ge sources retain content hashes and short editorial glosses rather
than full copied definitions. Source checking is not automatic word approval:
the recorded owner review authorizes these individual senses. Current usage and
all words are in `docs/VOCABULARY_OWNER_REVIEW_V24.md`.

## Revision 25: owner-reviewed expansion batch 06

`discovery-v25-ka.json` preserves all 1,819 previous reference entries unchanged
and adds the 76 approved senses in `docs/VOCABULARY_EXPANSION_BATCH_06.json`.
Its 1,895 reference entries yield 1,763 eligible spellings. The 1,645 entries in
`everyday-targets-v25.json` retain every prior approval and add exactly those 76.
The same 118 words remain bonus-only. `owner-expansion-batch-06` excludes all 24
rejected spellings from every gameplay role beginning with v25. Historical files
stay immutable; do not present any batch-six word as an unseen proposal again.

Each addition retains its checked source URL/date, part of speech, approved sense
and available revision/content-hash provenance. Wiktionary contributor attribution
and CC BY-SA 4.0 terms remain. Georgian explanatory dictionary, University of
Georgia synonym dictionary, CSS social-sciences dictionary and NPLG dictionary
links support short editorial glosses; full definitions are not copied. Source
checking alone is not approval: the individual owner decisions authorize these
senses. Current usage is in `docs/VOCABULARY_OWNER_REVIEW_V25.md`.

## Revision 26: owner-reviewed expansion batch 07

`discovery-v26-ka.json` preserves all 1,895 previous reference entries unchanged
and adds the 75 approved senses in `docs/VOCABULARY_EXPANSION_BATCH_07.json`.
Its 1,970 reference entries yield 1,838 eligible spellings. The 1,720 entries in
`everyday-targets-v26.json` retain every prior approval and add exactly those 75.
The same 118 words remain bonus-only. `owner-expansion-batch-07` excludes all 25
rejected spellings from every gameplay role beginning with v26. Historical files
stay immutable; do not present any batch-seven word as an unseen proposal again.

Each addition retains its checked source URL/date, part of speech, approved sense
and available revision/content-hash provenance. Wiktionary contributor attribution
and CC BY-SA 4.0 terms remain. Georgian explanatory dictionary links support short
editorial glosses; full definitions are not copied. Source checking alone is not
approval: individual owner decisions authorize these senses. Current usage is in
`docs/VOCABULARY_OWNER_REVIEW_V26.md`.

## Revision 27: October owner vocabulary review

`discovery-v27-ka.json` preserves all 1,970 prior entries and adds 277 individually
approved senses, for 2,247 reference entries. `everyday-targets-v27.json` contains
1,997 required approvals. The eligible dictionary has 2,115 spellings, including
the same 118 bonus-only words. The `owner-oct20-expansion` policy excludes all 93
explicit owner rejections from revision 27. The other 41 unselected alternatives
are not approved or ingested. Source attribution and per-entry sense decisions are
recorded in `docs/VOCABULARY_EXPANSION_REVIEW_2026_10_20.json`.

The active 295-board campaign uses 1,281 words, leaving 716 approvals unused.
See `docs/VOCABULARY_REVIEW_V27.md` and `docs/VOCABULARY_OWNER_REVIEW_V27.md`.

## Revision 28: targeted approvals for Portugal and Morocco

`discovery-v28-ka.json` preserves all historical reference entries and adds 78 individually owner-approved senses from targeted batches 01 (54) and 02 (24). `everyday-targets-v28.json` contains 2,075 required approvals. The eligible dictionary has 2,193 spellings, with the same 118 bonus-only reservations. Unselected candidates are not ingested. Existing exclusions are unchanged. Individual explanatory-dictionary URLs, check dates, content hashes and sense notes remain attached; English glosses are brief editorial summaries, not republished full definitions. Historical dictionary files remain immutable.

## Revision 29: targeted batches 03–06 and 08–11

`discovery-v29-ka.json` preserves all 2,325 revision-28 reference entries and adds the 243 individually owner-approved senses from targeted batches 03–06 and 08–11, including 19 country names sourced from Unicode CLDR Georgian territory names. `everyday-targets-v29.json` contains 2,318 required approvals; the eligible dictionary has 2,436 spellings. Source URLs, check dates and content hashes stay attached; where a source page is gone or had no recorded hash, the recorded verification note is kept as `sourceNote`. English glosses are brief editorial summaries. The 97 rejected batch spellings plus the owner's extra exclusions `უტყუო` and `უფარო` are excluded from every role from revision 29 (`owner-targeted-batch-*` in `word-policy.json`). Historical dictionary files remain immutable.
