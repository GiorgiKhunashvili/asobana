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
WORDS = {
    entry["word"]
    for entry in json.loads(
        (ROOT / "content/dictionaries/discovery-ka.json").read_text()
    )["entries"]
}
MANIFEST = cast(
    WideManifest,
    json.loads((ROOT / "content/levels/discovery.v7.recipes.json").read_text()),
)


def test_nonstandard_borrowings_and_owner_exclusion_are_revisioned():
    excluded = {"რული", "კრანი", "მაიკა", "ბინტი", "ბლინი", "ვედრო", "კაშნე"}
    words = excluded | {"საჭე", "ონკანი", "მაისური", "ბანკი"}
    assert playable_vocabulary(words, revision=12) == words
    allowed = playable_vocabulary(words, revision=13)
    assert allowed == {"საჭე", "ონკანი", "მაისური", "ბანკი"}
    # An old everyday approval cannot override the newer exclusion.
    assert "მაიკა" in required_vocabulary(words, revision=12)
    assert not required_vocabulary(words, revision=13) & excluded


def test_pronouns_are_excluded_from_generation_and_reviewed_content():
    allowed = playable_vocabulary(WORDS, revision=7)
    assert len(allowed) == 404
    assert not allowed.intersection(
        (
            "ეგ ეს ვინ თქვენ იგი ის ისინი მათი მე მისი რა "
            "რაიმე რამე შენ შენი ჩემი ჩვენ ჩვენი"
        ).split()
    )
    assert "თავი" in allowed
    draft = rebuild_wide(MANIFEST, WORDS)
    for level in draft["levels"]:
        assert all(word["answer"] in allowed for word in level["words"])
        assert set(level["bonusWords"]) <= allowed
    encoded = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    review = json.loads((ROOT / "content/levels/discovery.v7.review.json").read_text())
    assert hashlib.sha256(encoded).hexdigest() == review["draftSha256"]
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == json.loads((ROOT / "content/levels/discovery.v7.json").read_text())


def test_an_excluded_source_word_cannot_be_reintroduced_by_a_recipe():
    manifest = copy.deepcopy(MANIFEST)
    manifest["levels"][0]["sourceWords"].append("მათი")
    with pytest.raises(ValueError, match="Unverified"):
        rebuild_wide(manifest, WORDS)


def test_excluded_bonuses_fail_validation_even_with_the_full_historical_dictionary():
    pack = cast(
        PackJSON,
        json.loads((ROOT / "content/levels/discovery.v7.json").read_text()),
    )
    pack["levels"][0]["bonusWords"].append("მათი")
    with pytest.raises(ValueError, match="Bonus"):
        validate_wide(pack, WORDS, MANIFEST["familiarity"])
