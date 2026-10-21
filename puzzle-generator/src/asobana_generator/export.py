import json
from pathlib import Path
from typing import TypedDict

from .models import GenerationResult, PackJSON
from .validation import validate_pack


class ReviewReport(TypedDict):
    seed: int
    reviewStatus: str
    requiresEditorialReview: bool
    targets: list[str]
    bonuses: list[str]
    skippedWords: list[str]
    checks: list[str]
    instructions: str


def export_draft(
    result: GenerationResult, destination: Path, vocabulary: set[str]
) -> Path:
    pack: PackJSON = {
        "schemaVersion": 1,
        "id": "generated-draft",
        "revision": 1,
        "chapters": [{"id": result.level["chapterId"], "title": "Draft review"}],
        "levels": [result.level],
    }
    validate_pack(pack, vocabulary)
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(
        json.dumps(pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    report: ReviewReport = {
        "seed": result.seed,
        "reviewStatus": "generated-draft",
        "requiresEditorialReview": True,
        "targets": [word["answer"] for word in result.level["words"]],
        "bonuses": result.level["bonusWords"],
        "skippedWords": list(result.skipped_words),
        "checks": [
            "Georgian normalization",
            "wheel multiplicities",
            "bounds",
            "matching intersections",
            "connected grid",
            "no unlisted runs",
        ],
        "instructions": "Review every word, bonus and layout. "
        "Generation grants no approval. "
        "Promote with explicit review provenance into a new content revision.",
    }
    report_path = destination.with_suffix(".review.json")
    report_path.write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    return report_path
