"""Exact owner review scope, bonus retention and reproducible v16 content."""

import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from geowords_generator.models import PackJSON
from geowords_generator.wide import WideManifest, rebuild_wide, validate_wide
from geowords_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_exact_owner_promotions_and_bonus_retention():
    review = load("content/dictionaries/everyday-targets-v16.json")
    decision = review["ownerReview"]
    pool = set(decision["reviewedBonusWords"])
    held = set(decision["bonusOnlyWords"])
    approved = set(decision["approvedBonusWords"])
    assert len(pool) == 372 and len(held) == 47 and len(approved) == 325
    assert approved == pool - held
    vocabulary = {
        e["word"] for e in load("content/dictionaries/discovery-v13-ka.json")["entries"]
    }
    required = required_vocabulary(vocabulary, revision=16)
    assert len(required) == 1091
    assert approved <= required
    assert not held & required
    assert held <= playable_vocabulary(vocabulary, revision=16)
    assert not set(decision["excludedWords"]) & playable_vocabulary(
        vocabulary, revision=16
    )
    manifest = cast(WideManifest, load("content/levels/discovery.v16.recipes.json"))
    draft = rebuild_wide(manifest, vocabulary)
    words = {w["answer"] for level in draft["levels"] for w in level["words"]}
    assert len(words) > 680
    assert words & approved
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v16.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v16.json")
    for word in held:
        for role in ("answer", "variant"):
            poisoned = cast(PackJSON, copy.deepcopy(draft))
            target = poisoned["levels"][0]["words"][0]
            if role == "answer":
                target["answer"] = word
            else:
                target["acceptedAnswers"].append(word)
            with pytest.raises(ValueError, match="bonus-only"):
                validate_wide(poisoned, vocabulary, manifest["familiarity"])
