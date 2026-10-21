import json
import re
import unicodedata
from collections import Counter
from pathlib import Path
from typing import cast

from .models import IngestionReport, VocabularyEntry

MODERN_GEORGIAN = re.compile(r"[\u10d0-\u10f0]{2,16}\Z")


def normalize_word(word: str) -> str:
    return unicodedata.normalize("NFC", word).strip().lower()


def is_valid_word(word: str) -> bool:
    return MODERN_GEORGIAN.fullmatch(normalize_word(word)) is not None


def can_form_word(word: str, letters: list[str]) -> bool:
    return not (Counter(normalize_word(word)) - Counter(letters))


def ingest_candidates(lines: list[str]) -> IngestionReport:
    candidates: set[str] = set()
    rejected: list[str] = []
    duplicates = 0
    for line in lines:
        word = normalize_word(line)
        if not is_valid_word(word):
            rejected.append(line)
        elif word in candidates:
            duplicates += 1
        else:
            candidates.add(word)
    return IngestionReport(tuple(sorted(candidates)), tuple(rejected), duplicates)


def load_vocabulary(
    path: Path, *, allow_prototype: bool = False
) -> tuple[VocabularyEntry, ...]:
    raw: object = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(raw, dict) or raw.get("schemaVersion") != 1:
        raise ValueError("Unsupported vocabulary schema")
    if not raw.get("license") or not raw.get("source"):
        raise ValueError("Vocabulary requires license and provenance")
    entries_raw = raw.get("entries")
    if not isinstance(entries_raw, list) or not entries_raw:
        raise ValueError("Vocabulary requires entries")
    entries: list[VocabularyEntry] = []
    seen: set[str] = set()
    allowed = {"editorially-approved"}
    if allow_prototype:
        allowed.add("prototype-reference-checked")
    for item in cast(list[object], entries_raw):
        if not isinstance(item, dict):
            raise ValueError("Invalid vocabulary entry")
        word = item.get("word")
        source = item.get("sourceUrl")
        review = item.get("reviewStatus")
        if (
            not isinstance(word, str)
            or not is_valid_word(word)
            or normalize_word(word) != word
        ):
            raise ValueError("Invalid or noncanonical Georgian word")
        if not isinstance(source, str) or not source.startswith("https://"):
            raise ValueError("Missing source URL")
        if not isinstance(review, str) or review not in allowed:
            raise ValueError(f"Word is not approved for this operation: {word}")
        if word in seen:
            raise ValueError("Duplicate vocabulary entry")
        seen.add(word)
        entries.append(VocabularyEntry(word, source, review))
    return tuple(entries)
