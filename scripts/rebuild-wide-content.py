"""Rebuild wide drafts; promotion requires an explicit flag and a reviewed digest."""

import argparse
import hashlib
import json
from pathlib import Path
from typing import cast

from geowords_generator.vocabulary import load_vocabulary
from geowords_generator.wide import WideManifest, print_projections, rebuild_wide

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--revision", type=int, choices=(6, 7, 8, 9, 10, 11, 12, 13), default=13
    )
    parser.add_argument("--output", type=Path)
    parser.add_argument(
        "--promote-reviewed",
        action="store_true",
        help="Separately promote only the exact draft approved in the review record",
    )
    args = parser.parse_args()
    if args.output is None:
        args.output = ROOT / f"artifacts/wide-v{args.revision}/draft.json"
    manifest = cast(
        WideManifest,
        json.loads(
            (
                ROOT / f"content/levels/discovery.v{args.revision}.recipes.json"
            ).read_text(encoding="utf-8")
        ),
    )
    vocabulary = {
        entry.word
        for entry in load_vocabulary(
            ROOT
            / (
                f"content/dictionaries/discovery-v{13 if args.revision >= 13 else min(args.revision, 9)}-ka.json"
                if args.revision >= 8
                else "content/dictionaries/discovery-ka.json"
            ),
            allow_prototype=True,
        )
    }
    pack = rebuild_wide(manifest, vocabulary)
    draft = json.dumps(pack, ensure_ascii=False, indent=2) + "\n"
    if args.promote_reviewed:
        review = json.loads(
            (ROOT / f"content/levels/discovery.v{args.revision}.review.json").read_text(
                encoding="utf-8"
            )
        )
        if hashlib.sha256(draft.encode()).hexdigest() != review["draftSha256"]:
            raise ValueError(
                "Draft changed since review; inspect it and explicitly renew approval"
            )
        for level in pack["levels"]:
            level["reviewStatus"] = "prototype-reference-checked"
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print_projections(pack)
    print(f"Rebuilt {len(pack['levels'])} levels: {args.output}")


if __name__ == "__main__":
    main()
