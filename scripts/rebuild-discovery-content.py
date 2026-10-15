"""Reproduce discovery layouts as drafts; reference/layout promotion is separate."""

import argparse
import json
from pathlib import Path
from typing import cast

from geowords_generator.discovery import DiscoveryManifest, rebuild_discovery
from geowords_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output", type=Path, default=ROOT / "artifacts/discovery-draft.v5.json"
    )
    args = parser.parse_args()
    manifest = cast(
        DiscoveryManifest,
        json.loads(
            (ROOT / "content/levels/discovery.v5.recipes.json").read_text(
                encoding="utf-8"
            )
        ),
    )
    words = {
        entry.word
        for entry in load_vocabulary(
            ROOT / "content/dictionaries/discovery-ka.json", allow_prototype=True
        )
    }
    pack = rebuild_discovery(manifest, words)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Rebuilt {len(pack['levels'])} discovery draft levels: {args.output}")


if __name__ == "__main__":
    main()
