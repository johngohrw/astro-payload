# syntax=docker/dockerfile:1

# ─────────────────────────────────────────────────────────────
# Fat Stack: single-stage production image
# Copies the full monorepo, builds in-place, runs next start.
# Larger image (~2GB) but avoids Next.js standalone tracing bugs.
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine

# Enable pnpm via corepack
RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

WORKDIR /app

# Copy the entire monorepo
COPY . .

# Install all workspace dependencies
RUN pnpm install --frozen-lockfile

# BULLETPROOF: delete any .env files and data.db artifacts that may have
# been copied from the host before the build runs.
RUN find /app -name ".env" -delete && \
    find /app -name ".env.*" -not -name ".env.example" -delete && \
    rm -rf /app/sites/teleplex/payload/data && \
    rm -f /tmp/build-data.db*

# Build with a temporary DB path so no data.db is created in the image.
# Inline env vars guarantee the .env file (now deleted) cannot override them.
RUN cd sites/teleplex/payload && \
    PAYLOAD_SECRET=dummy-secret-for-build \
    DATABASE_URL=file:/tmp/build-data.db \
    R2_ACCESS_KEY_ID=fake \
    R2_SECRET_ACCESS_KEY=fake \
    R2_BUCKET=fake-bucket \
    R2_ENDPOINT=fake.r2.cloudflarestorage.com \
    R2_ENDPOINT_PUBLIC=fake.r2.dev \
    NODE_ENV=production \
    pnpm build

# Nuke any DB artifacts the build may have created
RUN rm -f /tmp/build-data.db* && \
    rm -rf /app/sites/teleplex/payload/data

# Runtime environment defaults
ENV NODE_ENV=production
ENV DATABASE_URL=file:./data/data.db

# Create data directory for SQLite
RUN mkdir -p /app/sites/teleplex/payload/data

# Copy entrypoint script
COPY sites/teleplex/payload/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Declare volume for database persistence
VOLUME /app/sites/teleplex/payload/data

# Expose the application port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))"

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["sh", "-c", "cd sites/teleplex/payload && pnpm start"]
