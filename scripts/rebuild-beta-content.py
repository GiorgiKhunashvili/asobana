"""Run with puzzle-generator/.venv/bin/python; writes drafts, never playable content."""

import argparse
import json
from pathlib import Path
from typing import cast

from asobana_generator.authoring import Manifest, rebuild_beta
from asobana_generator.models import PackJSON
from asobana_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=ROOT / "artifacts/content-expansion/rebuilt-draft.v2.json",
    )
    args = parser.parse_args()
    words = {
        entry.word
        for entry in load_vocabulary(
            ROOT / "content/dictionaries/beta-ka.json", allow_prototype=True
        )
    }
    legacy = cast(
        PackJSON,
        json.loads(
            (ROOT / "content/levels/prototype.v1.json").read_text(encoding="utf-8")
        ),
    )
    manifest = cast(
        Manifest,
        json.loads(
            (ROOT / "content/levels/beta.v2.recipes.json").read_text(encoding="utf-8")
        ),
    )
    pack = rebuild_beta(legacy, manifest, words)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Rebuilt {len(pack['levels'])} draft levels: {args.output}")


if __name__ == "__main__":
    main()
