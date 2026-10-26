"""The owner's exact origin-label removals apply only from revision 30."""

import hashlib
import json
from pathlib import Path
from typing import Any, cast

from asobana_generator.wide import WideManifest, rebuild_wide
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]
REMOVED = set(
    (
        "თურქი შვედი ფრანგი არაბი სომეხი აფხაზი ოსი აზიელი გურული სვანი აზიური ინდური"
    ).split()
)


def load(path: str) -> Any:
    return json.loads((ROOT / path).read_text())


def test_exact_removals_preserve_historical_eligibility_and_country_names() -> None:
    old = {
        e["word"] for e in load("content/dictionaries/discovery-v29-ka.json")["entries"]
    }
    new = {
        e["word"] for e in load("content/dictionaries/discovery-v30-ka.json")["entries"]
    }
    assert old - new == REMOVED and not new - old
    assert REMOVED <= required_vocabulary(old, revision=29)
    assert not REMOVED & playable_vocabulary(old, revision=30)
    assert len(required_vocabulary(new, revision=30)) == 2306
    assert len(playable_vocabulary(new, revision=30)) == 2424
    countries = {
        e["word"]
        for e in load("docs/VOCABULARY_TARGETED_BATCH_11.json")["entries"]
        if e.get("ownerDecision") == "approved"
    }
    assert len(countries) == 19
    assert countries <= required_vocabulary(new, revision=30)


def test_reviewed_rebuild_preserves_unaffected_required_boards() -> None:
    reference = {
        e["word"] for e in load("content/dictionaries/discovery-v30-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v30.recipes.json"))
    draft = rebuild_wide(manifest, reference)
    digest = hashlib.sha256(
        (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    ).hexdigest()
    review = load("content/levels/discovery.v30.review.json")
    assert digest == review["draftSha256"]
    previous = load("content/levels/discovery.v29.json")
    changed = set(review["changedRequiredLevels"])
    assert len(changed) == 13
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
    assert draft == load("content/levels/discovery.v30.json")
