#!/usr/bin/env bash
set -euo pipefail

# Downloads platform-specific PocketBase binary into this directory.
# Idempotent: skips if binary already present.

VERSION="${POCKETBASE_VERSION:-0.38.0}"
HERE="$(cd "$(dirname "$0")" && pwd)"
BIN="$HERE/pocketbase"

if [[ -x "$BIN" ]]; then
  echo "PocketBase already present: $($BIN --version 2>/dev/null || echo unknown)"
  exit 0
fi

OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "$OS-$ARCH" in
  darwin-arm64)   ASSET="pocketbase_${VERSION}_darwin_arm64.zip" ;;
  darwin-x86_64)  ASSET="pocketbase_${VERSION}_darwin_amd64.zip" ;;
  linux-x86_64)   ASSET="pocketbase_${VERSION}_linux_amd64.zip" ;;
  linux-aarch64)  ASSET="pocketbase_${VERSION}_linux_arm64.zip" ;;
  linux-armv7l)   ASSET="pocketbase_${VERSION}_linux_armv7.zip" ;;
  *) echo "Unsupported platform: $OS-$ARCH"; exit 1 ;;
esac

URL="https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/${ASSET}"
echo "Downloading $URL"

TMP="$(mktemp -d)"
curl -fSL "$URL" -o "$TMP/pb.zip"
unzip -q "$TMP/pb.zip" -d "$TMP"
mv "$TMP/pocketbase" "$BIN"
chmod +x "$BIN"
rm -rf "$TMP"

echo "Installed: $($BIN --version)"
