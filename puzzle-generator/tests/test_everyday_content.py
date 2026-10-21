import json
from pathlib import Path

import pytest

from asobana_generator.wide import rebuild_wide, validate_wide
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]


def test_review_covers_every_previous_answer_and_keeps_rare_bonus_vocabulary():
    review = json.loads(
        (ROOT / "content/dictionaries/everyday-targets-v12.json").read_text()
    )
    previous = json.loads((ROOT / "content/levels/discovery.v11.json").read_text())
    words = {
        e["word"]
        for e in json.loads(
            (ROOT / "content/dictionaries/discovery-v9-ka.json").read_text()
        )["entries"]
    }
    assert sorted(e["word"] for e in review["previousCampaignReview"]) == sorted(
        w["answer"] for level in previous["levels"] for w in level["words"]
    )
    required = required_vocabulary(words, revision=12)
    demoted = {
        e["word"]
        for e in review["previousCampaignReview"]
        if e["decision"] == "bonus-only"
    }
    assert len(demoted) == 88
    assert not required & (demoted | {"ურცი", "რაზა", "თელა"})
    assert demoted <= playable_vocabulary(words, revision=12)
    assert {"ურცი", "რაზა", "თელა"} <= playable_vocabulary(words, revision=12)
    manifest = json.loads(
        (ROOT / "content/levels/discovery.v11.recipes.json").read_text()
    )
    previous["revision"] = 12
    with pytest.raises(ValueError, match="everyday-word allowlist"):
        validate_wide(previous, words, manifest["familiarity"])
    manifest["revision"] = 12
    with pytest.raises(ValueError, match="Unverified wide recipe"):
        rebuild_wide(manifest, words)
