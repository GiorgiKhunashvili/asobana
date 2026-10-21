import argparse
from pathlib import Path

from .export import export_draft
from .generator import generate_level
from .vocabulary import load_vocabulary


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate draft Georgian crosswords for review"
    )
    parser.add_argument(
        "--dictionary",
        type=Path,
        default=Path("../content/dictionaries/prototype-ka.json"),
    )
    parser.add_argument(
        "--output", type=Path, default=Path("../artifacts/draft.v1.json")
    )
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument(
        "--allow-prototype",
        action="store_true",
        help="Permit reference-checked prototype words; not editorial approval",
    )
    parser.add_argument("--max-words", type=int, default=5)
    arguments = parser.parse_args()
    try:
        entries = load_vocabulary(
            arguments.dictionary, allow_prototype=arguments.allow_prototype
        )
        words = [entry.word for entry in entries]
        result = generate_level(
            words, seed=arguments.seed, max_words=arguments.max_words
        )
        report = export_draft(result, arguments.output, set(words))
    except ValueError as error:
        parser.exit(2, f"Generation failed: {error}\n")
    print(f"Draft: {arguments.output}; review report: {report}; seed: {arguments.seed}")


if __name__ == "__main__":
    main()
