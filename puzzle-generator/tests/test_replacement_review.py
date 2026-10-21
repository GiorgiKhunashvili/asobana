"""Owner replacement decisions apply only to the new revision and rebuild exactly."""

import hashlib
import json
from pathlib import Path
from typing import cast

from asobana_generator.vocabulary import can_form_word
from asobana_generator.wide import WideManifest, rebuild_wide, validate_wide
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_exact_owner_replacements_preserve_bonus_only_words_and_history():
    review = load("docs/VOCABULARY_REPLACEMENTS_APPROVED_01.json")
    added = {e["word"] for e in review["entries"]}
    removed = set(review["removedWords"])
    rejected = set(review["rejectedProposals"])
    old = load("content/dictionaries/discovery-v20-ka.json")["entries"]
    current = load("content/dictionaries/discovery-v24-ka.json")["entries"]
    byword = {e["word"]: e for e in current}
    vocabulary = set(byword)
    previous = {e["word"] for e in old}
    assert len(added) == len(removed) == 29
    assert len(vocabulary) == 1819
    assert vocabulary == previous | added
    for entry in old:
        assert byword[entry["word"]] == entry
    assert (
        required_vocabulary(vocabulary, revision=24)
        == (required_vocabulary(previous, revision=23) - removed) | added
    )
    assert len(required_vocabulary(vocabulary, revision=24)) == 1569
    eligible = playable_vocabulary(vocabulary, revision=24)
    assert len(eligible) == 1687
    assert not (removed | rejected) & eligible
    assert removed <= playable_vocabulary(previous, revision=23)
    assert eligible - required_vocabulary(vocabulary, revision=24) == (
        playable_vocabulary(previous, revision=23)
        - required_vocabulary(previous, revision=23)
    )
    assert "კოკა" in added and "შტოში" in rejected and "კახელი" in rejected
    for e in review["entries"]:
        assert e["ownerDecision"] == "required-eligible"
        assert byword[e["word"]]["gloss"] == e["proposedMeaning"]
        assert byword[e["word"]]["sourceUrl"] == e["sourceUrl"]


def test_replacement_campaign_rebuilds_all_295_boards_and_complete_bonuses():
    vocabulary = {
        e["word"] for e in load("content/dictionaries/discovery-v24-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v24.recipes.json"))
    draft = rebuild_wide(manifest, vocabulary)
    assert len(draft["levels"]) == 295
    assert draft["chapters"] == load("content/journey-v23.json")["chapters"]
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v24.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
        accepted = {a for w in level["words"] for a in w["acceptedAnswers"]}
        assert set(level["bonusWords"]) == {
            w
            for w in playable_vocabulary(vocabulary, revision=24) - accepted
            if can_form_word(w, [tile["letter"] for tile in level["tiles"]])
        }
    assert draft == load("content/levels/discovery.v24.json")
    validate_wide(draft, vocabulary, manifest["familiarity"])
