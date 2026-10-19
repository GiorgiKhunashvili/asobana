"""Current target-only morphology policy, coverage and reviewed rebuild contract."""

import copy
import hashlib
import json
from collections import Counter
from pathlib import Path
from typing import cast

import pytest

from geowords_generator.models import PackJSON
from geowords_generator.wide import WideManifest, rebuild_wide, validate_wide
from geowords_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_plural_decisions_are_target_only_and_revision_scoped():
    vocabulary = {
        e["word"] for e in load("content/dictionaries/discovery-v13-ka.json")["entries"]
    }
    review = load("content/dictionaries/everyday-targets-v14.json")
    plurals = {e["word"] for e in review["pluralReview"]}
    reference_plurals = {
        e["word"]
        for e in load("content/dictionaries/discovery-v13-ka.json")["entries"]
        if e.get("morphologicalForm") == "nominative-plural"
    }
    assert plurals == reference_plurals
    assert len(plurals) == 38
    assert {"ფეხები", "ქვები"} <= plurals
    assert all(
        e["morphologicalForm"] == "nominative-plural" and e["lemma"] and e["sourceUrl"]
        for e in review["pluralReview"]
    )
    assert plurals <= required_vocabulary(vocabulary, revision=13)
    assert plurals <= playable_vocabulary(vocabulary, revision=14)
    assert not plurals & required_vocabulary(vocabulary, revision=14)
    assert len(required_vocabulary(vocabulary, revision=14)) == 831
    assert (
        required_vocabulary(vocabulary, revision=14)
        == required_vocabulary(vocabulary, revision=13) - plurals
    )


def test_singular_campaign_coverage_and_exact_reviewed_rebuild():
    manifest = cast(WideManifest, load("content/levels/discovery.v14.recipes.json"))
    vocabulary = {
        e["word"] for e in load("content/dictionaries/discovery-v13-ka.json")["entries"]
    }
    draft = rebuild_wide(manifest, vocabulary)
    usage = Counter(w["answer"] for level in draft["levels"] for w in level["words"])
    old_usage = Counter(
        w["answer"]
        for level in load("content/levels/discovery.v13.json")["levels"]
        for w in level["words"]
    )
    assert sum(usage.values()) == 1200
    assert len(usage) > len(old_usage)
    # Preserve the measured coverage gain when future boards are reauthored.
    assert len(usage) >= 679
    assert max(usage.values()) <= max(old_usage.values())
    assert set(usage) <= required_vocabulary(vocabulary, revision=14)
    plurals = {
        e["word"]
        for e in load("content/dictionaries/everyday-targets-v14.json")["pluralReview"]
    }
    assert any(plurals.intersection(level["bonusWords"]) for level in draft["levels"])
    encoded = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    review = load("content/levels/discovery.v14.review.json")
    assert hashlib.sha256(encoded).hexdigest() == review["draftSha256"]
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v14.json")
    for role in ("answer", "variant"):
        invalid = cast(PackJSON, copy.deepcopy(draft))
        word = invalid["levels"][0]["words"][0]
        if role == "answer":
            word["answer"] = "ქვები"
        else:
            word["acceptedAnswers"].append("ქვები")
        with pytest.raises(
            ValueError, match="Plural nouns and owner-reserved words are bonus-only"
        ):
            validate_wide(invalid, vocabulary, manifest["familiarity"])
