import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from geowords_generator.wide import WideManifest, rebuild_wide
from geowords_generator.word_policy import playable_vocabulary

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = cast(
    WideManifest,
    json.loads((ROOT / "content/levels/discovery.v9.recipes.json").read_text()),
)
WORDS = {
    entry["word"]
    for entry in json.loads(
        (ROOT / "content/dictionaries/discovery-v9-ka.json").read_text()
    )["entries"]
}


@pytest.mark.parametrize("revision", [9, 10, 11, 12])
def test_expanded_campaign_rebuilds_exact_reviewed_pack(revision):
    allowed = playable_vocabulary(WORDS)
    assert len(WORDS) == 1233
    assert len(allowed) == 1202
    manifest = cast(
        WideManifest,
        json.loads(
            (ROOT / f"content/levels/discovery.v{revision}.recipes.json").read_text()
        ),
    )
    draft = rebuild_wide(manifest, WORDS)
    answers = [word["answer"] for level in draft["levels"] for word in level["words"]]
    assert len(answers) == len(set(answers)) == 250
    for level in draft["levels"]:
        assert set(level["bonusWords"]) <= allowed
        assert all(set(word["acceptedAnswers"]) <= allowed for word in level["words"])
    encoded = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    review = json.loads(
        (ROOT / f"content/levels/discovery.v{revision}.review.json").read_text()
    )
    assert hashlib.sha256(encoded).hexdigest() == review["draftSha256"]
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == json.loads(
        (ROOT / f"content/levels/discovery.v{revision}.json").read_text()
    )


def test_personal_names_and_action_forms_cannot_enter_recipes():
    for word in ("ნინო", "გიორგი", "დავით", "სვლა", "სმა", "ჭამა", "წერა"):
        manifest = copy.deepcopy(MANIFEST)
        manifest["levels"][0]["sourceWords"].append(word)
        with pytest.raises(ValueError, match="Unverified"):
            rebuild_wide(manifest, WORDS | {word})
    assert {"ია", "მერი", "ნუკრი", "იმედი"} <= playable_vocabulary(WORDS)
    assert {"სვლა", "სმა", "ჭამა", "წერა"} <= playable_vocabulary(WORDS, revision=8)
