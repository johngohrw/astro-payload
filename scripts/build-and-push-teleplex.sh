#!/usr/bin/env bash
#
# Build and push the teleplex-payload Docker image to GHCR.
#
# Usage:
#   ./scripts/build-and-push-teleplex.sh [version]
#
#   version   Image tag (default: latest). Use "v1.2.3" for releases.
#
# Prerequisites:
#   1. Log in to GHCR:
#      echo $GHCR_PAT | docker login ghcr.io -u USERNAME --password-stdin
#
# The image is always built for linux/amd64 (Unraid).
# To build for your local architecture (e.g. ARM64 Mac) instead:
#   PLATFORM=linux/arm64 ./scripts/build-and-push-teleplex.sh --local
#
# Unraid pull:
#   docker pull ghcr.io/johngohrw/teleplex-payload:latest

set -euo pipefail

# ── Configuration ───────────────────────────────────────────
REPO_OWNER="johngohrw"
IMAGE_NAME="teleplex-payload"
REGISTRY="ghcr.io"
FULL_IMAGE="${REGISTRY}/${REPO_OWNER}/${IMAGE_NAME}"

DOCKERFILE="sites/teleplex/payload/Dockerfile"
BUILD_CONTEXT="."

# ── Arguments ───────────────────────────────────────────────
VERSION="${1:-latest}"
PLATFORM="${PLATFORM:-linux/amd64}"

# ── Helpers ────────────────────────────────────────────────
error() { echo "❌ Error: $1" >&2; exit 1; }
info()  { echo "ℹ️  $1"; }
success() { echo "✅ $1"; }

# ── Checks ──────────────────────────────────────────────────
if [ ! -f "$DOCKERFILE" ]; then
  error "Dockerfile not found at ${DOCKERFILE}. Run this script from the repo root."
fi

if ! command -v docker &> /dev/null; then
  error "docker is not installed."
fi

if ! docker buildx version &> /dev/null; then
  error "docker buildx is required."
fi

info "Target image: ${FULL_IMAGE}:${VERSION}"
info "Platform:     ${PLATFORM}"
echo ""

# ── Build & Push ───────────────────────────────────────────
info "Building and pushing..."

docker buildx build \
  --platform "${PLATFORM}" \
  --file "${DOCKERFILE}" \
  --tag "${FULL_IMAGE}:${VERSION}" \
  --tag "${FULL_IMAGE}:latest" \
  --push \
  "${BUILD_CONTEXT}"

success "Pushed ${FULL_IMAGE}:${VERSION}"

echo ""
echo "─────────────────────────────────────────────────────────────"
echo "In Unraid, set:"
echo ""
echo "  Repository: ghcr.io/johngohrw/teleplex-payload:${VERSION}"
echo "─────────────────────────────────────────────────────────────"
