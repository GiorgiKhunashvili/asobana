import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from asobana_generator.discovery import JOURNEY, validate_required_gap
from asobana_generator.models import PackJSON
from asobana_generator.wide import WideManifest, rebuild_wide, validate_wide
from asobana_generator.word_policy import playable_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def test_gap_boundary_includes_variants_and_same_board_duplicates():
    pack = json.loads((ROOT / "content/levels/discovery.v12.json").read_text())
    word = pack["levels"][0]["words"][0]
    last: dict[str, int] = {}
    validate_required_gap([word], 9, last)
    with pytest.raises(ValueError, match="75-level gap"):
        validate_required_gap([word], 83, last)
    validate_required_gap([word], 84, last)
    variant = copy.deepcopy(pack["levels"][0]["words"][1])
    variant["acceptedAnswers"].append(word["answer"])
    with pytest.raises(ValueError, match="75-level gap"):
        validate_required_gap([variant], 85, last)
    with pytest.raises(ValueError, match="within a board"):
        validate_required_gap([word, variant], 159, last)


def test_journey_rebuild_policy_spacing_and_review_digest():
    manifest = cast(
        WideManifest,
        json.loads((ROOT / "content/levels/discovery.v13.recipes.json").read_text()),
    )
    vocabulary = {
        entry["word"]
        for entry in json.loads(
            (ROOT / "content/dictionaries/discovery-v13-ka.json").read_text()
        )["entries"]
    }
    draft = rebuild_wide(manifest, vocabulary)
    assert len(draft["levels"]) == 240
    assert draft["chapters"] == JOURNEY["chapters"]
    assert all(len(level["words"]) == 5 for level in draft["levels"])
    seen: dict[str, int] = {}
    repeats = 0
    for index, level in enumerate(draft["levels"]):
        for word in level["words"]:
            for answer in word["acceptedAnswers"]:
                if answer in seen:
                    assert index - seen[answer] >= 75
                    repeats += 1
                seen[answer] = index
        assert not set(level["bonusWords"]) & {
            "რული",
            "კრანი",
            "მაიკა",
            "ბინტი",
            "ბლინი",
            "ვედრო",
            "კაშნე",
        }
    assert repeats > 0
    assert {"ურცი", "რაზა", "თელა"} <= playable_vocabulary(vocabulary, revision=13)
    encoded = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    review = json.loads((ROOT / "content/levels/discovery.v13.review.json").read_text())
    assert hashlib.sha256(encoded).hexdigest() == review["draftSha256"]
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == json.loads((ROOT / "content/levels/discovery.v13.json").read_text())
    invalid = cast(PackJSON, copy.deepcopy(draft))
    invalid["chapters"][0]["title"] = "incorrect stop"
    with pytest.raises(ValueError, match="Journey chapter titles"):
        validate_wide(invalid, vocabulary, manifest["familiarity"])
    invalid = cast(PackJSON, copy.deepcopy(draft))
    invalid["levels"][1]["words"][0]["acceptedAnswers"].append(
        invalid["levels"][0]["words"][0]["answer"]
    )
    with pytest.raises(ValueError, match="75-level gap"):
        validate_wide(invalid, vocabulary, manifest["familiarity"])
    invalid = cast(PackJSON, copy.deepcopy(draft))
    invalid["levels"][0]["words"].pop()
    with pytest.raises(ValueError, match="targets violate"):
        validate_wide(invalid, vocabulary, manifest["familiarity"])


def test_vocabulary_additions_have_individual_decisions_and_preserve_history():
    base = json.loads((ROOT / "content/dictionaries/discovery-v9-ka.json").read_text())
    current = json.loads(
        (ROOT / "content/dictionaries/discovery-v13-ka.json").read_text()
    )
    review = json.loads(
        (ROOT / "content/dictionaries/everyday-targets-v13.json").read_text()
    )
    original = {entry["word"]: entry for entry in base["entries"]}
    entries = {entry["word"]: entry for entry in current["entries"]}
    assert len(entries) == len(current["entries"]) == 1312
    assert all(entries[word] == entry for word, entry in original.items())
    additions = entries.keys() - original.keys()
    assert len(additions) == 79
    approved = {
        entry["word"]: entry
        for entry in review["newWordReview"]
        if entry["decision"] == "required-eligible"
    }
    assert len(approved) == 95
    assert additions <= approved.keys()
    assert all(
        entry.get("sourceUrl")
        and (entry.get("sourceRevision") or entry.get("checkedOn"))
        and entry.get("reason")
        for entry in approved.values()
    )
    targets = {entry["word"] for entry in review["entries"]}
    assert len(targets) == 869
    assert all(
        entry["word"] not in targets
        for entry in review["newWordReview"]
        if entry["decision"] == "held-back"
    )
