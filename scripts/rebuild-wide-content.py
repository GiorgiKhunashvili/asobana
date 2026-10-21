"""Rebuild wide drafts; promotion requires an explicit flag and a reviewed digest."""

import argparse
import hashlib
import json
from pathlib import Path
from typing import cast

from asobana_generator.vocabulary import load_vocabulary
from asobana_generator.wide import WideManifest, print_projections, rebuild_wide

ROOT = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--revision",
        type=int,
        choices=(
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
        ),
        default=29,
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
    reference_revision = (
        29
        if args.revision >= 29
        else 28
        if args.revision >= 28
        else 27
        if args.revision >= 27
        else 26
        if args.revision >= 26
        else 25
        if args.revision >= 25
        else 24
        if args.revision >= 24
        else 20
        if args.revision >= 20
        else 19
        if args.revision >= 19
        else 18
        if args.revision >= 18
        else 17
        if args.revision >= 17
        else 13
        if args.revision >= 13
        else min(args.revision, 9)
    )
    vocabulary = {
        entry.word
        for entry in load_vocabulary(
            ROOT
            / (
                f"content/dictionaries/discovery-v{reference_revision}-ka.json"
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
