// The runner inserts NativeProxy's actual Kotlin reflection/update methods.
// Android/Fabric and the buffer decoder are fakes; the code under test is not.
annotation class DoNotStrip
object BuildConfig { var IS_REACT_NATIVE_86_OR_NEWER = true }
object Log {
    val warnings = mutableListOf<Pair<String, Throwable?>>()
    fun w(tag: String, message: String, error: Throwable? = null) {
        warnings.add(message to error)
    }
}
object SynchronousPropsBufferParser {
    fun parse(tags: IntArray, values: DoubleArray, apply: (Int, Any) -> Unit) {
        tags.forEach { apply(it, values) }
    }
}
class FabricUIManager(private val mMountingManager: Any) {
    val legacyUpdates = mutableListOf<Int>()
    fun synchronouslyUpdateViewOnUIThread(tag: Int, props: Any) {
        legacyUpdates.add(tag)
    }
}
open class MountingManager {
    val mounted = mutableSetOf(2, 4)
    val updates = mutableListOf<Int>()
    var missingCalls = 0
    var failTag = -1
    fun getViewExists(tag: Int): Boolean = tag in mounted
    fun updatePropsSynchronously(tag: Int, props: Any) {
        if (tag !in mounted) {
            missingCalls++
            error("Unable to find SurfaceMountingManager for tag: [$tag]")
        }
        if (tag == failTag) error("Unexpected native failure")
        updates.add(tag)
    }
}
class OlderMountingManager {
    val updates = mutableListOf<Int>()
    fun updatePropsSynchronously(tag: Int, props: Any) { updates.add(tag) }
}
class NativeProxy(private val mFabricUIManager: FabricUIManager) {
    // NATIVE_PROXY_METHODS
}
fun main() {
    val manager = MountingManager()
    val fabric = FabricUIManager(manager)
    val proxy = NativeProxy(fabric)
    repeat(100) { proxy.synchronouslyUpdateUIProps(intArrayOf(1, 2, 3, 4), doubleArrayOf()) }
    check(manager.missingCalls == 0) { "Stale views reached the mounting layer ${manager.missingCalls} times" }
    check(Log.warnings.isEmpty()) { "Stale updates logged ${Log.warnings.size} warnings on the UI thread" }
    check(manager.updates == List(100) { listOf(2, 4) }.flatten()) { "Mounted updates were dropped" }

    manager.mounted.remove(2)
    manager.updates.clear()
    proxy.synchronouslyUpdateUIProps(intArrayOf(2, 4), doubleArrayOf())
    check(manager.updates == listOf(4)) { "Unmounting one view must not skip the rest of the buffer" }
    check(Log.warnings.isEmpty())

    // A not-yet-mounted tag must become eligible on a later batch, not be blacklisted.
    manager.mounted.add(2)
    manager.updates.clear()
    proxy.synchronouslyUpdateUIProps(intArrayOf(2, 4), doubleArrayOf())
    check(manager.updates == listOf(2, 4))

    manager.failTag = 2
    manager.updates.clear()
    proxy.synchronouslyUpdateUIProps(intArrayOf(2, 4), doubleArrayOf())
    check(manager.updates == listOf(4))
    check(Log.warnings.size == 1 && Log.warnings.single().second == null) {
        "Unexpected errors should produce a concise warning, not a UI-thread stack dump"
    }
    check(Log.warnings.single().first.contains("Unexpected native failure"))

    val older = OlderMountingManager()
    NativeProxy(FabricUIManager(older)).synchronouslyUpdateUIProps(intArrayOf(8, 9), doubleArrayOf())
    check(older.updates == listOf(8, 9)) { "Missing optional guard must retain the update path" }

    BuildConfig.IS_REACT_NATIVE_86_OR_NEWER = false
    proxy.synchronouslyUpdateUIProps(intArrayOf(10), doubleArrayOf())
    check(fabric.legacyUpdates == listOf(10)) { "Pre-0.86 behavior changed" }
    println("PASS: stale tags, mounted tags, unmount/remount, error isolation, reflection fallback, legacy path")
}
