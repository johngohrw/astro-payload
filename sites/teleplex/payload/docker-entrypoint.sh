#!/bin/sh
set -e

DATA_DIR="/app/sites/teleplex/payload/data"
mkdir -p "$DATA_DIR"

cd /app/sites/teleplex/payload

# If migration files exist, run them to initialize/update schema.
# Fails fast if migrations error — don't start with a broken database.
if [ -d "src/migrations" ] && [ "$(ls -A src/migrations 2>/dev/null)" ]; then
  echo "Running migrations..."
  pnpm payload migrate
fi

exec pnpm start
