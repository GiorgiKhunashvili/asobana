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
[revision 13](../../docs/DISCOVERY_CONTENT.md).

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
