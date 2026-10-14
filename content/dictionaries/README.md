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
They remain as revision 1 fixtures; the active revision 2 pack expands every level
to four or five crossword answers.

`beta-ka.json` records 147 selected reference-checked words with exact Wiktionary
source revision URLs and short glosses, under the same CC BY-SA 4.0 terms. Source
Georgian sections and all 50 crossword layouts were inspected by the assistant;
this does not constitute native-speaker editorial approval. Three entries support
recipe reproduction without appearing as targets or bonuses. See
[the content review and level table](../../docs/BETA_CONTENT.md).

Future workflow: acquire a licensed source → ingest to candidates → normalize and
validate → native-speaker/editorial review → explicitly approve entries → generate
draft layouts → review each layout → promote into a versioned playable pack.
Generator output is always `generated-draft` and is rejected by the mobile loader
until reviewed. Input ingestion never grants approval on its own.
