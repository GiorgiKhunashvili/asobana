#!/usr/bin/env python3
"""Run NativeProxy's installed Kotlin methods on the JVM, without Android mocks.

Requires Java 17+ and Kotlin 2.1.20 artifacts cached by an Android Gradle build.
JAVA_HOME and GRADLE_USER_HOME are respected. No emulator or device is used.
"""

import os
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = (
    Path(os.environ.get("GRADLE_USER_HOME", Path.home() / ".gradle"))
    / "caches/modules-2/files-2.1"
)
JAVA = (
    str(Path(os.environ["JAVA_HOME"]) / "bin/java")
    if "JAVA_HOME" in os.environ
    else "java"
)


def jar(group, name, version):
    matches = list((CACHE / group / name / version).glob("*/*.jar"))
    if len(matches) != 1:
        raise SystemExit(f"Build Android once to cache {group}:{name}:{version}")
    return str(matches[0])


kotlin = [
    jar("org.jetbrains.kotlin", name, "2.1.20")
    for name in (
        "kotlin-compiler-embeddable",
        "kotlin-stdlib",
        "kotlin-script-runtime",
        "kotlin-reflect",
    )
]
deps = [
    jar("org.jetbrains.intellij.deps", "trove4j", "1.0.20200330"),
    jar("org.jetbrains", "annotations", "13.0"),
    jar("org.jetbrains.kotlinx", "kotlinx-coroutines-core-jvm", "1.8.0"),
]
source = (
    ROOT
    / "node_modules/react-native-reanimated/android/src/main/java/com/swmansion/reanimated/NativeProxy.kt"
).read_text()
start = source.index("    private val mountingManager: Any by lazy {")
end = source.index("    @DoNotStrip\n    fun setGestureState(", start)
methods = source[start:end]
fixture = (ROOT / "tests/native/ReanimatedSyncProps.kt").read_text()
with tempfile.TemporaryDirectory(prefix="asobana-native-test-") as tmp:
    test = Path(tmp) / "ReanimatedSyncProps.kt"
    test.write_text(fixture.replace("    // NATIVE_PROXY_METHODS", methods))
    classes = str(Path(tmp) / "classes")
    classpath = os.pathsep.join(kotlin + deps)
    subprocess.run(
        [
            JAVA,
            "-cp",
            classpath,
            "org.jetbrains.kotlin.cli.jvm.K2JVMCompiler",
            "-no-stdlib",
            "-no-reflect",
            "-nowarn",
            "-classpath",
            classpath,
            "-d",
            classes,
            str(test),
        ],
        check=True,
    )
    subprocess.run(
        [JAVA, "-cp", classes + os.pathsep + classpath, "ReanimatedSyncPropsKt"],
        check=True,
    )
