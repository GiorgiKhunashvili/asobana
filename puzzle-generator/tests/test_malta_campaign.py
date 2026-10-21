"""Append-only Malta expansion with revision-specific journey gates."""

import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from asobana_generator.models import PackJSON
from asobana_generator.vocabulary import can_form_word
from asobana_generator.wide import WideManifest, rebuild_wide, validate_wide
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_malta_appends_ten_boards_without_reauthoring_historical_content():
    pack = load("content/levels/discovery.v21.json")
    old = load("content/levels/discovery.v20.json")
    journey = load("content/journey-v21.json")
    assert len(pack["levels"]) == 250
    assert len(pack["chapters"]) == 50
    assert pack["levels"][:240] == old["levels"]
    assert pack["chapters"][:48] == old["chapters"]
    assert journey["chapters"] == pack["chapters"]
    assert journey["chapters"][:48] == load("content/journey-v13.json")["chapters"]
    assert [(c["id"], c["title"]) for c in pack["chapters"][-2:]] == [
        ("valletta", "ვალეტა"),
        ("mdina", "მდინა"),
    ]
    used = {w["answer"] for level in old["levels"] for w in level["words"]}
    new = [w["answer"] for level in pack["levels"][240:] for w in level["words"]]
    assert len(set(new)) == 50
    assert len(set(new) - used) >= 27
    reference = {
        e["word"] for e in load("content/dictionaries/discovery-v20-ka.json")["entries"]
    }
    assert set(new) <= required_vocabulary(reference, revision=21)
    assert required_vocabulary(reference, revision=21) == required_vocabulary(
        reference, revision=20
    )
    eligible = playable_vocabulary(reference, revision=21)
    for level in pack["levels"][240:]:
        accepted = {a for word in level["words"] for a in word["acceptedAnswers"]}
        assert set(level["bonusWords"]) == {
            w
            for w in eligible - accepted
            if can_form_word(w, [t["letter"] for t in level["tiles"]])
        }


def test_malta_is_reproducible_and_old_route_remains_valid():
    reference = {
        e["word"] for e in load("content/dictionaries/discovery-v20-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v21.recipes.json"))
    draft = rebuild_wide(manifest, reference)
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v21.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v21.json")
    old = cast(PackJSON, load("content/levels/discovery.v20.json"))
    old_familiarity = load("content/levels/discovery.v20.recipes.json")["familiarity"]
    validate_wide(old, reference, old_familiarity)
    truncated = copy.deepcopy(draft)
    truncated["levels"] = truncated["levels"][:240]
    with pytest.raises(ValueError, match="250 levels"):
        validate_wide(truncated, reference, manifest["familiarity"])
    wrong_order = copy.deepcopy(draft)
    wrong_order["chapters"][-2:] = reversed(wrong_order["chapters"][-2:])
    with pytest.raises(ValueError, match="order"):
        validate_wide(wrong_order, reference, manifest["familiarity"])
