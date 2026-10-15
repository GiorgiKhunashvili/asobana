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
[revision 5](../../docs/DISCOVERY_CONTENT.md).

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
