"""Exact owner adjective removals, immutable history and deterministic repair."""

import hashlib
import json
from pathlib import Path
from typing import Any, cast

from asobana_generator.wide import WideManifest, rebuild_wide
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]
REMOVED = {"მოგრძო", "უკვალო", "უკუდო"}


def load(path: str) -> Any:
    return json.loads((ROOT / path).read_text())


def test_exact_removals_preserve_history_and_all_other_approvals() -> None:
    old = {
        e["word"] for e in load("content/dictionaries/discovery-v30-ka.json")["entries"]
    }
    new = {
        e["word"] for e in load("content/dictionaries/discovery-v31-ka.json")["entries"]
    }
    assert old - new == REMOVED and not new - old
    assert REMOVED <= required_vocabulary(old, revision=30)
    assert not REMOVED & playable_vocabulary(old, revision=31)
    assert required_vocabulary(new, revision=31) == (
        required_vocabulary(old, revision=30) - REMOVED
    )
    assert len(required_vocabulary(new, revision=31)) == 2303
    assert len(playable_vocabulary(new, revision=31)) == 2421
    audit = load("docs/APPROVED_WORD_FORM_AUDIT_2026_10_26.json")
    retained = {e["word"] for e in audit["entries"]} - REMOVED
    assert len(retained) == 36
    assert retained <= required_vocabulary(new, revision=31)


def test_reviewed_rebuild_changes_only_three_required_boards() -> None:
    reference = {
        e["word"] for e in load("content/dictionaries/discovery-v31-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v31.recipes.json"))
    draft = rebuild_wide(manifest, reference)
    digest = hashlib.sha256(
        (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    ).hexdigest()
    review = load("content/levels/discovery.v31.review.json")
    assert digest == review["draftSha256"]
    previous = load("content/levels/discovery.v30.json")
    changed = set(review["changedRequiredLevels"])
    assert changed == {9, 126, 242}
    for index, (old, new) in enumerate(
        zip(previous["levels"], draft["levels"], strict=True), 1
    ):
        assert (new["id"], new["chapterId"]) == (old["id"], old["chapterId"])
        assert not REMOVED & set(new["bonusWords"])
        assert not REMOVED & {
            answer for word in new["words"] for answer in word["acceptedAnswers"]
        }
        if index not in changed:
            for field in ("words", "tiles", "grid", "difficulty"):
                assert new[field] == old[field]
        new["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v31.json")
