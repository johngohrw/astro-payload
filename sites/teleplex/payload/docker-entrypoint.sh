#!/bin/sh
set -e

DATA_DIR="/app/sites/teleplex/payload/data"
mkdir -p "$DATA_DIR"

cd /app/sites/teleplex/payload

# ── Unraid PUID/PGID support ────────────────────────────────
# If PUID and PGID are set, create a matching user/group and
# chown the data directory so SQLite files are owned correctly
# on the host bind-mount. Set HOME to /tmp so pnpm doesn't try
# to write to /root (which is inaccessible to non-root users).
# ────────────────────────────────────────────────────────────
if [ -n "$PUID" ] && [ -n "$PGID" ]; then
  addgroup -g "$PGID" appgroup 2>/dev/null || true
  adduser -u "$PUID" -G appgroup -D appuser 2>/dev/null || true
  chown -R "$PUID:$PGID" "$DATA_DIR"
  export HOME=/tmp
fi

# Run migrations if they exist.
# Fails fast if migrations error — don't start with a broken database.
if [ -d "src/migrations" ] && [ "$(ls -A src/migrations 2>/dev/null)" ]; then
  echo "Running migrations..."
  if [ -n "$PUID" ] && [ -n "$PGID" ]; then
    su-exec "$PUID:$PGID" pnpm payload migrate
  else
    pnpm payload migrate
  fi
fi

# Start the server (or run the user-provided command for debugging).
if [ $# -eq 0 ]; then
  if [ -n "$PUID" ] && [ -n "$PGID" ]; then
    exec su-exec "$PUID:$PGID" pnpm start
  else
    exec pnpm start
  fi
else
  if [ -n "$PUID" ] && [ -n "$PGID" ]; then
    exec su-exec "$PUID:$PGID" "$@"
  else
    exec "$@"
  fi
fi
