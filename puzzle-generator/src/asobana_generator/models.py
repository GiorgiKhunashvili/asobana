from dataclasses import dataclass
from typing import Literal, TypedDict


class TileJSON(TypedDict):
    id: str
    letter: str


class WordJSON(TypedDict):
    id: str
    answer: str
    acceptedAnswers: list[str]
    row: int
    column: int
    direction: Literal["across", "down"]


class GridJSON(TypedDict):
    rows: int
    columns: int


class DifficultyJSON(TypedDict):
    tier: Literal["easy", "medium", "hard"]
    score: int


class HintsJSON(TypedDict):
    allowCell: bool
    allowWord: bool


class LevelJSON(TypedDict):
    schemaVersion: Literal[1]
    id: str
    chapterId: str
    title: str
    tiles: list[TileJSON]
    grid: GridJSON
    words: list[WordJSON]
    bonusWords: list[str]
    difficulty: DifficultyJSON
    hints: HintsJSON
    reviewStatus: Literal["prototype-reference-checked", "generated-draft"]


class ChapterJSON(TypedDict):
    id: str
    title: str


class PackJSON(TypedDict):
    schemaVersion: Literal[1]
    id: str
    revision: int
    chapters: list[ChapterJSON]
    levels: list[LevelJSON]


@dataclass(frozen=True)
class Placement:
    word: str
    row: int
    column: int
    direction: Literal["across", "down"]

    def cells(self) -> list[tuple[int, int, str]]:
        return [
            (
                self.row + (index if self.direction == "down" else 0),
                self.column + (index if self.direction == "across" else 0),
                letter,
            )
            for index, letter in enumerate(self.word)
        ]


@dataclass(frozen=True)
class VocabularyEntry:
    word: str
    source_url: str
    review_status: str


@dataclass(frozen=True)
class IngestionReport:
    candidates: tuple[str, ...]
    rejected: tuple[str, ...]
    duplicates: int
    # Candidate ingestion deliberately carries no approval bit.


@dataclass(frozen=True)
class GenerationResult:
    level: LevelJSON
    skipped_words: tuple[str, ...]
    seed: int
