# syntax=docker/dockerfile:1
#
# Teleplex Payload CMS — Production Dockerfile
#
# Two-stage build:
#   1. Builder: installs deps, compiles Next.js app, prunes devDependencies
#   2. Runner:  copies only what's needed to run the server
#
# Unraid-friendly:
#   - PUID / PGID support via su-exec (no root at runtime)
#   - Bind-mount a host path to /app/sites/teleplex/payload/data
#   - Works with plain docker run (no compose required)
#
# ── Stage 1: Builder ────────────────────────────────────────
FROM node:22-alpine AS builder

# Install pnpm
RUN npm install -g pnpm@10.10.0

WORKDIR /app

# Layer 1 — Lockfile & workspace config (cache-friendly)
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Layer 2 — All workspace package manifests (cache-friendly)
# We copy every package.json so pnpm can resolve the full workspace,
# but we don't copy source code yet.
COPY sites/default/astro/package.json    sites/default/astro/
COPY sites/quine/astro/package.json      sites/quine/astro/
COPY sites/teleplex/astro/package.json   sites/teleplex/astro/
COPY sites/default/payload/package.json  sites/default/payload/
COPY sites/quine/payload/package.json    sites/quine/payload/
COPY sites/tsconfig.payload.base.json               sites/
COPY sites/teleplex/payload/package.json sites/teleplex/payload/

# Install dependencies (cached unless lockfile or a package.json changes)
RUN pnpm install --frozen-lockfile

# Layer 3 — Source code (invalidated on any code change)
COPY sites/ sites/

# Build the Teleplex Payload backend
# Dummy env vars prevent the build from creating a real data.db
ENV NODE_ENV=production
RUN cd sites/teleplex/payload && \
    PAYLOAD_SECRET=build-secret \
    DATABASE_URL=file:/tmp/build.db \
    R2_ACCESS_KEY_ID=fake \
    R2_SECRET_ACCESS_KEY=fake \
    R2_BUCKET=fake \
    R2_ENDPOINT=fake.r2.cloudflarestorage.com \
    R2_ENDPOINT_PUBLIC=fake.r2.dev \
    pnpm build

# Strip devDependencies from the entire workspace
RUN pnpm prune --prod

# Clean up build artifacts we don't need at runtime
RUN rm -rf sites/teleplex/payload/.next/cache && \
    rm -f /tmp/build.db*

# ── Stage 2: Runner ────────────────────────────────────────
FROM node:22-alpine AS runner

# Install pnpm (needed for pnpm start / pnpm payload migrate)
# and su-exec (for privilege dropping in Unraid)
RUN npm install -g pnpm@10.10.0 && \
    apk add --no-cache su-exec

# The node:22-alpine base image already has a 'node' user (uid=1000).
# Just ensure it has a home directory.
RUN mkdir -p /home/node && chown node:node /home/node

WORKDIR /app

# Copy the pruned workspace from the builder stage
COPY --from=builder /app/node_modules            /app/node_modules
COPY --from=builder /app/package.json            /app/package.json
COPY --from=builder /app/pnpm-workspace.yaml     /app/pnpm-workspace.yaml
COPY --from=builder /app/pnpm-lock.yaml          /app/pnpm-lock.yaml
COPY --from=builder /app/sites/default/astro     /app/sites/default/astro
COPY --from=builder /app/sites/quine/astro       /app/sites/quine/astro
COPY --from=builder /app/sites/teleplex/astro    /app/sites/teleplex/astro
COPY --from=builder /app/sites/default/payload   /app/sites/default/payload
COPY --from=builder /app/sites/quine/payload     /app/sites/quine/payload
COPY --from=builder /app/sites/teleplex/payload  /app/sites/teleplex/payload
COPY --from=builder /app/sites/tsconfig.payload.base.json /app/sites/tsconfig.payload.base.json

# Runtime environment
ENV NODE_ENV=production
ENV DATABASE_URL=file:./data/data.db
ENV HOME=/home/node

# Ensure data directory exists
RUN mkdir -p /app/sites/teleplex/payload/data

EXPOSE 3000

# Copy entrypoint
COPY sites/teleplex/payload/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

WORKDIR /app/sites/teleplex/payload
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["pnpm", "start"]
