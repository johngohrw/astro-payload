# ADR-001: Sites Are Independent Deployments, Not Multi-Tenant

**Date:** 2026-06-05
**Status:** Accepted

## Context
The `astro-payload` monorepo contains multiple brand sites (`quine`, `teleplex`, `default`) under `sites/`. Early agent sessions assumed these were multi-tenant sites meant to run simultaneously, leading to false concerns about port collisions and shared runtime state.

## Decision
Each `sites/{brand}/` is a **standalone, independently-deployable site**. They share code via `sites/default/` (blocks, schemas, utilities), but they are never deployed together. Think of this repo as a **site library** or **template collection** — each brand is Dockerized and hosted separately.

## Consequences
- **No port coordination needed.** Each payload backend can use its preferred default port (e.g., 3000).
- **No shared runtime state.** Each site has its own SQLite database, its own R2 bucket (or bucket prefix), and its own environment.
- **`sites/default/` is a library, not a production site.** Its `astro/` and `payload/` packages are for local development and as the source of truth for reusable blocks. It is never deployed alongside another site.
- **Docker per site.** Each site that needs production deployment brings its own `Dockerfile` and `docker-compose.yml`. There is no root-level `docker-compose.yml` trying to orchestrate all sites.
- **Developing one site at a time.** When working locally, you spin up one site's payload backend and one site's astro frontend. Other sites are irrelevant.

## Related
- `README.md` — Project overview
- `.context/project-spec-2026-05-08.md` — Full architecture spec
