"""Check that an iOS .ipa can launch: every @rpath framework that the app or
one of its embedded frameworks links must be inside Asobana.app/Frameworks.

Build 1.0.0 (8) crashed at launch (dyld "Library not loaded:
@rpath/React.framework/React"): CocoaPods' check for React Native's prebuilt
artifacts failed during the EAS build, React Native fell back to building from
source, and Expo's precompiled ExpoModulesWorklets.framework still linked the
prebuilt React.framework, which was not embedded. The build itself succeeded.

Run on every store .ipa before `eas submit`, from the repository root:

    python3 -I scripts/check-ios-ipa.py artifacts/<build>.ipa
"""

import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path


def linked_rpath_frameworks(binary: Path) -> set[str]:
    out = subprocess.run(
        ["xcrun", "otool", "-L", str(binary)],
        check=True,
        capture_output=True,
        text=True,
    ).stdout
    names = set()
    for line in out.splitlines()[1:]:
        path = line.strip().split(" (")[0]
        if path.startswith("@rpath/") and ".framework/" in path:
            names.add(path.removeprefix("@rpath/").split("/")[0])
    return names


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    with tempfile.TemporaryDirectory() as tmp:
        with zipfile.ZipFile(sys.argv[1]) as ipa:
            ipa.extractall(tmp)
        app = next(Path(tmp, "Payload").glob("*.app"))
        frameworks = app / "Frameworks"
        embedded = {f.name for f in frameworks.glob("*.framework")}
        binaries = [app / app.stem] + [
            f / f.stem for f in sorted(frameworks.glob("*.framework"))
        ]
        missing = []
        for binary in binaries:
            for name in sorted(linked_rpath_frameworks(binary) - embedded):
                missing.append(f"{binary.name} links {name}, which is not embedded")
        listed = ", ".join(sorted(embedded))
        print(f"{app.name}: {len(embedded)} embedded frameworks: {listed}")
        for line in missing:
            print(f"MISSING: {line}")
        if missing:
            print("FAIL: this build would crash at launch. Do not submit it.")
            return 1
        print("OK: every linked framework is embedded.")
        return 0


if __name__ == "__main__":
    sys.exit(main())
