import copy
import json
from pathlib import Path
from typing import cast

import pytest
from jsonschema import Draft202012Validator

from geowords_generator.authoring import Manifest, rebuild_beta
from geowords_generator.models import PackJSON
from geowords_generator.validation import validate_pack
from geowords_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[2]
PACK = cast(PackJSON, json.loads((ROOT / "content/levels/beta.v2.json").read_text()))
LEGACY = cast(
    PackJSON, json.loads((ROOT / "content/levels/prototype.v1.json").read_text())
)
MANIFEST = cast(
    Manifest, json.loads((ROOT / "content/levels/beta.v2.recipes.json").read_text())
)
WORDS = {
    entry.word
    for entry in load_vocabulary(
        ROOT / "content/dictionaries/beta-ka.json", allow_prototype=True
    )
}


def test_beta_schema_semantics_and_target_counts():
    validate_pack(PACK, WORDS, playable=True)
    schema = json.loads(
        (ROOT / "content/schemas/level-pack.v1.schema.json").read_text()
    )
    Draft202012Validator(schema).validate(PACK)
    assert len(PACK["levels"]) == 50
    assert sum(len(level["words"]) == 4 for level in PACK["levels"]) == 15
    assert sum(len(level["words"]) == 5 for level in PACK["levels"]) == 35
    signatures = set()
    for level in PACK["levels"]:
        assert 4 <= len(level["words"]) <= 5
        assert max(level["grid"].values()) <= 7
        signatures.add(tuple(sorted(word["answer"] for word in level["words"])))
    assert len(signatures) == 50


def test_recipes_reproduce_reviewed_layouts_but_still_export_drafts():
    before = copy.deepcopy(MANIFEST)
    rebuilt = rebuild_beta(LEGACY, MANIFEST, WORDS)
    expected = copy.deepcopy(PACK)
    for level in expected["levels"]:
        level["reviewStatus"] = "generated-draft"
    assert rebuilt == expected
    assert MANIFEST == before
    with pytest.raises(ValueError, match="Draft"):
        validate_pack(rebuilt, WORDS, playable=True)


def test_vocabulary_attribution_and_no_claim_of_editorial_approval():
    raw = json.loads((ROOT / "content/dictionaries/beta-ka.json").read_text())
    assert raw["license"] == "CC-BY-SA-4.0"
    for entry in raw["entries"]:
        assert entry["reviewStatus"] == "prototype-reference-checked"
        assert isinstance(entry["sourceRevision"], int)
        assert f"oldid={entry['sourceRevision']}" in entry["sourceUrl"]
        assert entry["gloss"].strip()
