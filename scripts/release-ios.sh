#!/usr/bin/env bash
# Build, verify and upload an iOS store build in one command, from the repo root:
#
#   scripts/release-ios.sh beta                  # tester build (demo ads) -> TestFlight
#   scripts/release-ios.sh production            # store build (live ads) -> App Store Connect
#   scripts/release-ios.sh production --no-upload
#   scripts/release-ios.sh verify <beta|production> <ipa> [<build log>]
#
# It uploads only if the build log shows React Native's prebuilt frameworks were
# used, every linked framework is embedded (scripts/check-ios-ipa.py) and the
# embedded ads mode matches the profile. Build 1.0.0 (8) passed the build but
# crashed at launch because React Native silently fell back to building from
# source (docs/TESTFLIGHT.md). Run it on its own: not alongside an Android build.
# Build or upload only when the owner asks for that release (AGENTS.md).
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
fail() {
  echo "FAIL: $*" >&2
  exit 1
}

verify() {
  local profile="$1" ipa="$2" log="${3:-}"
  [[ -f "$ipa" ]] || fail "no such IPA: $ipa"
  if [[ -n "$log" ]]; then
    local plain
    plain="$(sed $'s/\x1b\\[[0-9;]*m//g' "$log")"
    if grep -q "Building from source: true" <<<"$plain"; then
      fail "the build log shows React Native fell back to building from source."
    fi
    grep -q "\[ReactNativeCore\] Building from source: false" <<<"$plain" ||
      fail "the build log does not confirm React Native's prebuilt core."
    echo "OK: build log uses React Native's prebuilt core and dependencies."
  fi
  python3 -I "$root/scripts/check-ios-ipa.py" "$ipa" || fail "missing frameworks."
  local config live
  config="$(unzip -p "$ipa" 'Payload/*.app/EXConstants.bundle/app.config')"
  live="$(python3 -I -c 'import json, sys; print(json.load(sys.stdin)["extra"].get("liveAds"))' <<<"$config")"
  case "$profile:$live" in
    production:True | beta:False) echo "OK: liveAds is $live for the $profile profile." ;;
    *) fail "liveAds is $live, which does not match the $profile profile." ;;
  esac
}

if [[ "${1:-}" == verify ]]; then
  [[ $# -ge 3 ]] || fail "usage: scripts/release-ios.sh verify <beta|production> <ipa> [<build log>]"
  verify "$2" "$3" "${4:-}"
  echo "Verified: $3"
  exit 0
fi

profile="${1:-}"
[[ "$profile" == beta || "$profile" == production ]] ||
  fail "usage: scripts/release-ios.sh <beta|production> [--no-upload]"
upload=1
[[ "${2:-}" == --no-upload ]] && upload=0

if [[ -n "$(git -C "$root" status --porcelain)" ]]; then
  fail "the working tree has changes; store builds come from a commit."
fi

eval "$(/opt/homebrew/bin/brew shellenv)"
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8

version="$(node -p "require('$root/mobile/app.json').expo.version")"
stamp="$(date +%Y%m%d-%H%M)"
ipa="$root/artifacts/asobana-ios-$version-$profile-$stamp.ipa"
log="$root/artifacts/asobana-ios-$version-$profile-$stamp.log"
mkdir -p "$root/artifacts"

echo "Building iOS $version with the $profile profile from $(git -C "$root" rev-parse --short HEAD)..."
(cd "$root/mobile" && npx eas-cli@latest build --profile "$profile" --platform ios \
  --local --non-interactive --output "$ipa") 2>&1 | tee "$log"
[[ "${PIPESTATUS[0]}" -eq 0 ]] || fail "the EAS build failed; see $log"

verify "$profile" "$ipa" "$log"
build="$(unzip -p "$ipa" 'Payload/*.app/Info.plist' | plutil -extract CFBundleVersion raw -)"
echo "Verified iOS $version ($build): $ipa"
shasum -a 256 "$ipa"

if [[ "$upload" -eq 0 ]]; then
  echo "Not uploaded (--no-upload)."
  exit 0
fi
# The production submit profile holds the App Store Connect app ID for both.
(cd "$root/mobile" && npx eas-cli@latest submit --platform ios --profile production \
  --path "$ipa" --non-interactive)
echo "Uploaded iOS $version ($build). Record it in docs/TESTFLIGHT.md."
