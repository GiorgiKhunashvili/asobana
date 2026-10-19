"""Owner-approved additions preserve prior vocabularies and improve coverage."""

import hashlib
import json
from pathlib import Path
from typing import cast

from geowords_generator.models import PackJSON
from geowords_generator.vocabulary import can_form_word, load_vocabulary
from geowords_generator.wide import WideManifest, rebuild_wide
from geowords_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_exact_130_additions_and_historical_reference_preservation():
    batch = load("docs/VOCABULARY_EXPANSION_BATCH_02.json")
    added = {e["word"] for e in batch["entries"]}
    old = load("content/dictionaries/discovery-v13-ka.json")
    current = load("content/dictionaries/discovery-v17-ka.json")
    by_word = {e["word"]: e for e in current["entries"]}
    assert len(added) == 130
    assert len(by_word) == 1442
    assert not added & {e["word"] for e in old["entries"]}
    for entry in old["entries"]:
        assert by_word[entry["word"]] == entry
    for entry in batch["entries"]:
        assert entry["ownerDecision"] == "required-eligible"
        assert entry["partOfSpeech"] in {"noun", "adjective"}
        assert 3 <= len(entry["word"]) <= 6
        assert by_word[entry["word"]]["sourceUrl"] == entry["sourceUrl"]
        assert by_word[entry["word"]]["gloss"] == entry["proposedMeaning"]
    vocabulary = {
        e.word
        for e in load_vocabulary(
            ROOT / "content/dictionaries/discovery-v17-ka.json", allow_prototype=True
        )
    }
    previous = required_vocabulary(vocabulary, revision=16)
    required = required_vocabulary(vocabulary, revision=17)
    assert len(previous) == 1091
    assert required == previous | added
    assert len(required) == 1221
    assert len(playable_vocabulary(vocabulary, revision=17)) == 1339
    assert not {"ფეხები", "ქვები", "თელა", "რაზა", "ურცი"} & required


def test_reproducible_v17_improves_repetition_and_recognizes_all_bonuses():
    vocabulary = {
        e["word"] for e in load("content/dictionaries/discovery-v17-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v17.recipes.json"))
    draft = rebuild_wide(manifest, vocabulary)
    prior = cast(PackJSON, load("content/levels/discovery.v16.json"))
    words = {w["answer"] for level in draft["levels"] for w in level["words"]}
    old_words = {w["answer"] for level in prior["levels"] for w in level["words"]}
    added = {
        e["word"] for e in load("docs/VOCABULARY_EXPANSION_BATCH_02.json")["entries"]
    }
    assert len(draft["levels"]) == 240
    assert len(words) > len(old_words)
    assert words & added
    eligible = playable_vocabulary(vocabulary, revision=17)
    for level in draft["levels"]:
        accepted = {a for w in level["words"] for a in w["acceptedAnswers"]}
        assert set(level["bonusWords"]) == {
            w
            for w in eligible - accepted
            if can_form_word(w, [tile["letter"] for tile in level["tiles"]])
        }
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v17.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v17.json")
