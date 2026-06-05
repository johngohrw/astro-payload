# astro-payload

A pnpm workspace monorepo containing a collection of independently-deployable brand websites. Each site follows the same architectural pattern: **Astro 5** static frontend + **Payload CMS 3** headless backend, with a shared block system for rapid page assembly.

> **Important architectural note:** The sites in this repo are **not** meant to run simultaneously. Each `sites/{brand}/` is a standalone, self-contained deployment. Think of this repo as a **site library** or **template collection** — each brand is Dockerized and deployed independently in production. The only cross-site dependency is `sites/default/`, which exports reusable blocks, schemas, and utilities consumed by the other sites.

---

## Architecture

```
sites/
├── default/          # Shared library (blocks, schemas, utilities)
│   ├── astro/        # 123 reusable Tailwind UI blocks + demo site
│   └── payload/      # Shared Payload collections + config helpers
│
├── quine/            # Quine Systems (standalone deployment)
│   ├── astro/        # Hardcoded landing page (custom shaders, GSAP)
│   └── payload/      # Payload backend (configured but unused by frontend)
│
└── teleplex/         # Teleplex corporate site (standalone deployment)
    ├── astro/        # CMS-driven SSG pages
    └── payload/      # Dockerized production backend
```

### Key Principles

1. **Each site is independent.** `quine` and `teleplex` never share a runtime. They may share code via `sites/default/`, but they are deployed to separate hosts/containers.
2. **`sites/default/` is a library, not a production site.** It exports block schemas, Astro renderers, and utility factories. Its own `astro/` and `payload/` packages are for local development and demos only.
3. **Per-site Dockerization.** Each site brings its own `Dockerfile`, `docker-compose.yml`, and deployment strategy. There is no root-level orchestration trying to run all sites at once.
4. **No port coordination needed.** Since sites don't run together, each payload backend can default to port 3000 (or whatever) without conflict.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Package Manager | pnpm 10.10.0 |
| Frontend | Astro 5.16.6 + React 19 + Tailwind CSS 4 |
| Animation | GSAP, @paper-design/shaders-react, @emotion/css |
| Backend | Payload CMS 3.69.0 + Next.js 15.4.10 |
| Database | SQLite (libsql) via `@payloadcms/db-sqlite` |
| Media Storage | Cloudflare R2 via `@payloadcms/storage-s3` |
| Container | Docker (node:22-alpine) + Docker Compose |
| Language | TypeScript 5.7.3 |

---

## Shared Block System

The centerpiece of this repo is the block system in `sites/default/astro/src/blocks/`:

- **123 UI blocks** organized into 15 families
- Each block exports a **Payload schema** (for CMS editing) and an **Astro renderer** (for frontend display)
- Brand sites import blocks from `@astro-default/blocks` and compose pages in Payload CMS
- Type-safe cross-package data flow via generated `payload-types.ts`

---

## Adding a New Site

1. `cp -r sites/teleplex sites/{newbrand}` (or quine, depending on CMS needs)
2. Rename package names in `package.json` files
3. Customize collections in `payload/src/collections/`
4. Customize frontend in `astro/src/`
5. Add your own `Dockerfile` and `docker-compose.yml`
6. Import shared blocks from `@astro-default/blocks` as needed

---

## Running a Site Locally

Since sites are independent, you work on one at a time:

```bash
# Example: Teleplex

# 1. Start the Payload backend
cd sites/teleplex/payload
pnpm dev        # starts on port 3000

# 2. In another terminal, start the Astro frontend
cd sites/teleplex/astro
pnpm dev        # starts Astro dev server
```

No need to spin up other sites. They are irrelevant to the one you're working on.

---

## Docker Deployment (per site)

Each site handles its own deployment. See `sites/teleplex/payload/` for the reference implementation:

```bash
cd sites/teleplex/payload
docker compose up --build -d
```

Other sites will follow the same pattern when they are productionized.

---

## Environment Variables

Each payload package needs:
- `DATABASE_URL` — SQLite file path (e.g., `file:./data/data.db`)
- `PAYLOAD_SECRET` — Random string for session/auth encryption
- `PAYLOAD_BASE_URL` — Public API URL for Astro SDK
- `R2_*` — Cloudflare R2 credentials for media storage

Each astro package needs:
- `PAYLOAD_BASE_URL` — URL of its corresponding Payload backend

---

## Agent Context

This project uses the [Agent Skills](https://agentskills.io) convention. See `.skills/` for available skills and `.context/` for session history and architecture decisions.
