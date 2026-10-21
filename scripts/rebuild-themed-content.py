"""Reproduce themed layouts as drafts; reference/layout promotion is separate."""

import argparse
import json
from pathlib import Path
from typing import cast

from asobana_generator.topics import TopicManifest, rebuild_topics
from asobana_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output", type=Path, default=ROOT / "artifacts/themed-draft.v4.json"
    )
    args = parser.parse_args()
    manifest = cast(
        TopicManifest,
        json.loads(
            (ROOT / "content/levels/themed.v4.recipes.json").read_text(encoding="utf-8")
        ),
    )
    words = {
        entry.word
        for entry in load_vocabulary(
            ROOT / "content/dictionaries/expanded-ka.json", allow_prototype=True
        )
    }
    pack = rebuild_topics(manifest, words)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Rebuilt {len(pack['levels'])} themed draft levels: {args.output}")


if __name__ == "__main__":
    main()
