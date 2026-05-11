#!/bin/sh
set -e

DATA_DIR="/app/sites/teleplex/payload/data"
mkdir -p "$DATA_DIR"

cd /app/sites/teleplex/payload

# ── Privilege dropping ──────────────────────────────────────
# If PUID/PGID are set (Unraid), drop to that user.
# Otherwise fall back to the built-in node user (1000:1000).
# If the container was already started with --user, run as-is.
# ────────────────────────────────────────────────────────────

if [ "$(id -u)" != "0" ]; then
  # Already non-root (e.g. docker run --user). Just run.
  TARGET_UID="$(id -u)"
  TARGET_GID="$(id -g)"
  SUEXEC=""
else
  if [ -n "${PUID:-}" ] && [ -n "${PGID:-}" ]; then
    TARGET_UID="$PUID"
    TARGET_GID="$PGID"
  else
    TARGET_UID="1000"
    TARGET_GID="1000"
  fi
  SUEXEC="su-exec ${TARGET_UID}:${TARGET_GID}"

  # Fix ownership of the data directory (only if we're root)
  if [ "$(stat -c '%u:%g' "$DATA_DIR" 2>/dev/null || echo 'unknown')" != "${TARGET_UID}:${TARGET_GID}" ]; then
    chown -R "${TARGET_UID}:${TARGET_GID}" "$DATA_DIR"
  fi
fi

# ── Migrations ──────────────────────────────────────────────
if [ -d "src/migrations" ] && [ "$(ls -A src/migrations 2>/dev/null)" ]; then
  echo "Running migrations..."
  if [ -n "$SUEXEC" ]; then
    $SUEXEC pnpm payload migrate
  else
    pnpm payload migrate
  fi
fi

# ── Start ───────────────────────────────────────────────────
if [ -n "$SUEXEC" ]; then
  exec $SUEXEC "$@"
else
  exec "$@"
fi
