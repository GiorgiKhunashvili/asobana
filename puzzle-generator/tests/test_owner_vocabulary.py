"""Owner-reviewed vocabulary decisions, historical isolation and campaign rebuild."""

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
REMOVED = set(
    (
        "ბალონი ბაჟე გარაჟი ზუსტად კარგად კასეტი უცებ ფანარი შიგნით ძალიან ხშირად ჯიპი"
    ).split()
)


def load(path: str):
    return json.loads((ROOT / path).read_text())


def vocabulary() -> set[str]:
    return {
        e["word"] for e in load("content/dictionaries/discovery-v13-ka.json")["entries"]
    }


def test_owner_review_scope_and_historical_vocabulary():
    review = load("content/dictionaries/everyday-targets-v15.json")
    allowed = required_vocabulary(vocabulary(), revision=15)
    previous = required_vocabulary(vocabulary(), revision=14)
    assert allowed == previous - REMOVED
    assert len(allowed) == 819
    assert set(review["ownerReview"]["excludedWords"]) == REMOVED
    assert len(review["ownerReview"]["approvedUnusedWords"]) == 140
    assert set(review["ownerReview"]["approvedUnusedWords"]) <= allowed
    assert REMOVED <= playable_vocabulary(vocabulary(), revision=14)
    assert not REMOVED & playable_vocabulary(vocabulary(), revision=15)
    plurals = {e["word"] for e in review["pluralReview"]}
    assert plurals <= playable_vocabulary(vocabulary(), revision=15)
    assert not plurals & allowed


def test_full_pool_review_exclusions_are_revision_scoped():
    removed = set(
        (
            "ათასი ათი ასე ასი აქეთ აქვე ახლა ახლოს ახლო ბლოგი გარე დღეს ერთი ექვსი "
            "ზევით ზემოთ ისე ისევ იქვე იქით კარგი კევი კვლავ კიდევ მაღლა მაშინ მერე "
            "მეტად ნელა ოდნავ ოთხი ორი ორმოცი ოცი რვა სამი სამოცი სულ უკვე უფრო "
            "ქვედა ქვევით ქვემოთ შვიდი შიგ შიდა შინ ჩქარა ცუდად ცხრა წინ ხუთი ჯერ"
        ).split()
    )
    current = required_vocabulary(vocabulary(), revision=15)
    assert len(removed) == 53
    assert removed <= current
    promoted = set(
        load("content/dictionaries/everyday-targets-v16.json")["ownerReview"][
            "approvedBonusWords"
        ]
    )
    assert (
        required_vocabulary(vocabulary(), revision=16) == (current - removed) | promoted
    )
    assert playable_vocabulary(vocabulary(), revision=16) == (
        playable_vocabulary(vocabulary(), revision=15) - removed
    )
    for word in ("თელა", "რაზა", "ურცი", "ფეხები"):
        assert word in playable_vocabulary(vocabulary(), revision=16)
        assert word not in required_vocabulary(vocabulary(), revision=16)


def test_owner_campaign_rebuild_and_coverage():
    manifest = cast(WideManifest, load("content/levels/discovery.v15.recipes.json"))
    draft = rebuild_wide(manifest, vocabulary())
    words = {w["answer"] for level in draft["levels"] for w in level["words"]}
    old_words = {
        w["answer"]
        for level in load("content/levels/discovery.v14.json")["levels"]
        for w in level["words"]
    }
    assert len(words) > len(old_words)
    assert words <= required_vocabulary(vocabulary(), revision=15)
    for level in draft["levels"]:
        assert not REMOVED.intersection(level["bonusWords"])
    encoded = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(encoded).hexdigest()
        == load("content/levels/discovery.v15.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v15.json")


@pytest.mark.parametrize("word", sorted(REMOVED))
@pytest.mark.parametrize("role", ["answer", "variant", "bonus"])
def test_owner_exclusions_rejected_in_all_roles(word: str, role: str):
    pack = cast(PackJSON, copy.deepcopy(load("content/levels/discovery.v15.json")))
    level = pack["levels"][0]
    if role == "answer":
        level["words"][0]["answer"] = word
    elif role == "variant":
        level["words"][0]["acceptedAnswers"].append(word)
    else:
        level["bonusWords"].append(word)
    with pytest.raises(ValueError):
        validate_wide(
            pack,
            vocabulary(),
            load("content/levels/discovery.v15.recipes.json")["familiarity"],
        )
