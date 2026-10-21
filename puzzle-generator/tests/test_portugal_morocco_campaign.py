"""Owner-approved 50-board extension and exact targeted vocabulary integration."""

import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from asobana_generator.wide import WideManifest, rebuild_wide, validate_wide
from asobana_generator.word_policy import required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_targeted_approvals_and_frozen_boards_survive_extension():
    pack = load("content/levels/discovery.v28.json")
    previous = load("content/levels/discovery.v27.json")
    reference = {
        e["word"] for e in load("content/dictionaries/discovery-v28-ka.json")["entries"]
    }
    required = required_vocabulary(reference, revision=28)
    batches = [load(f"docs/VOCABULARY_TARGETED_BATCH_0{n}.json") for n in (1, 2)]
    additions = {w for batch in batches for w in batch["approvedWords"]}
    assert len(additions) == 78
    assert len(required) == 2075
    assert required == required_vocabulary(reference, revision=27) | additions
    for batch in batches:
        assert not set(batch["notApprovedWords"]) & reference
    assert len(pack["levels"]) == 345
    assert len(pack["chapters"]) == 69
    assert pack["chapters"][:59] == previous["chapters"]
    for old, new in zip(previous["levels"], pack["levels"][:295], strict=True):
        assert {k: v for k, v in old.items() if k != "bonusWords"} == {
            k: v for k, v in new.items() if k != "bonusWords"
        }
        assert set(old["bonusWords"]) <= set(new["bonusWords"])
    words = [w["answer"] for level in pack["levels"] for w in level["words"]]
    assert len(set(words)) == 1414
    added = words[1475:]
    assert len(set(added)) == 250
    assert len(set(added) - set(words[:1475])) == 133
    assert len(set(added) & additions) == 59


def test_extension_rebuild_digest_and_route_gates():
    reference = {
        e["word"] for e in load("content/dictionaries/discovery-v28-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v28.recipes.json"))
    draft = rebuild_wide(manifest, reference)
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v28.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v28.json")
    assert draft["chapters"] == load("content/journey-v28.json")["chapters"]
    truncated = copy.deepcopy(draft)
    truncated["levels"] = truncated["levels"][:295]
    with pytest.raises(ValueError, match="345 levels"):
        validate_wide(truncated, reference, manifest["familiarity"])
    reordered = copy.deepcopy(draft)
    reordered["chapters"][-10:] = reversed(reordered["chapters"][-10:])
    with pytest.raises(ValueError, match="order"):
        validate_wide(reordered, reference, manifest["familiarity"])
