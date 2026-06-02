#!/bin/sh
# Teleplex Astro — Dev/Staging Entrypoint
# Supports PUID/PGID for Unraid compatibility

set -e

PUID="${PUID:-1000}"
PGID="${PGID:-1000}"

# Create a matching group if it doesn't exist
if ! getent group "$PGID" > /dev/null 2>&1; then
    addgroup -g "$PGID" appgroup 2>/dev/null || true
    GROUP_NAME="appgroup"
else
    GROUP_NAME="$(getent group "$PGID" | cut -d: -f1)"
fi

# Create a matching user if it doesn't exist
if ! getent passwd "$PUID" > /dev/null 2>&1; then
    adduser -u "$PUID" -G "$GROUP_NAME" -s /bin/sh -D appuser 2>/dev/null || true
    USER_NAME="appuser"
else
    USER_NAME="$(getent passwd "$PUID" | cut -d: -f1)"
fi

# Ensure the working directory is writable by the runtime user
chown -R "${PUID}:${PGID}" /app/sites/teleplex/astro 2>/dev/null || true

export HOME="/tmp"

echo "Starting Teleplex Astro dev server as UID=${PUID} GID=${PGID} on port ${PORT:-4321}"

# Drop privileges and run the provided command (default: pnpm dev --host)
exec su-exec "$USER_NAME:$GROUP_NAME" "$@"
