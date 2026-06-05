# Project Spec: astro-payload

**Date:** 2026-05-08
**Project:** astro-payload
**Type:** Monorepo — Headless CMS + Static Site Generator

---

## 1. Overview

`astro-payload` is a pnpm workspace monorepo powering multiple brand websites (primarily **Quine Systems**, with **Teleplex** as a secondary site). It follows a **decoupled architecture**: **Payload CMS 3.x** serves as the headless content backend, and **Astro 5.x** generates static frontends. The repo is designed around a **shared block system** — reusable UI blocks are defined once with both a Payload schema (CMS editing) and an Astro renderer (frontend display), enabling rapid page assembly via the CMS.

The flagship site, **Quine Systems**, is a highly polished digital-design-studio landing page with custom shaders, GSAP animations, and bespoke React components. Teleplex is a conventional corporate site wired to the same CMS backend.

The repo was recently restructured from a per-layer layout (`astro/*`, `payload/*`) to a **per-brand layout** (`sites/{brand}/astro`, `sites/{brand}/payload`) to support per-brand Dockerization and clearer deployment boundaries. As of this spec, Teleplex Payload CMS is **Dockerized for production** using a fat-stack single-stage image with Payload migrations.

---

## 2. Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Package Manager | pnpm | 10.10.0 |
| Workspace Config | pnpm-workspace.yaml | — |
| Frontend Framework | Astro | 5.16.6 |
| Frontend UI | React | 19.2.x |
| Styling | Tailwind CSS | 4.1.18 |
| Styling (Quine) | @emotion/css | 11.13.5 |
| Animation | GSAP, motion, @paper-design/shaders-react | various |
| 3D / Shaders | three.js, @react-three/fiber, postprocessing, ogl | various |
| Backend Framework | Payload CMS | 3.69.0 |
| Backend Runtime | Next.js | 15.4.10 |
| Database | SQLite (libsql) | via `@payloadcms/db-sqlite` |
| Media Storage | Cloudflare R2 (S3-compatible) | via `@payloadcms/storage-s3` |
| Language | TypeScript | 5.7.3 |
| Build Tooling | Vite (bundled with Astro/Next) | — |
| Container Runtime | Docker + Docker Compose | — |
| Container Base | node:22-alpine | — |

---

## 3. Directory Structure

```
astro-payload/
├── .context/                          # Context documents (session notes, specs)
├── .skills/                           # Pi agent skills
│   ├── architecture-review/
│   ├── generate-commit-message/
│   ├── get-up-to-speed/
│   ├── plan-and-implement/
│   ├── project-spec-generator/
│   └── save-session/
├── sites/
│   ├── default/                       # Shared library + demo backend/frontend
│   │   ├── astro/                     # Shared block library + demo site
│   │   │   ├── src/
│   │   │   │   ├── blocks/
│   │   │   │   │   ├── blockSchemas.ts
│   │   │   │   │   ├── blockTypes.ts
│   │   │   │   │   ├── blockRenderers.ts
│   │   │   │   │   ├── RenderBlocks/
│   │   │   │   │   └── components/TailwindBlocks/   # 123 block families
│   │   │   │   ├── components/
│   │   │   │   ├── layouts/DefaultLayout.astro
│   │   │   │   ├── pages/
│   │   │   │   ├── styles/global.css
│   │   │   │   └── utils/
│   │   │   │       ├── createPayloadQuery.ts
│   │   │   │       ├── payloadQuery.ts
│   │   │   │       └── media.ts
│   │   │   └── astro.config.mjs
│   │   └── payload/                   # Shared Payload config + demo backend
│   │       ├── src/
│   │       │   ├── collections/
│   │       │   │   ├── Users.ts
│   │       │   │   ├── Media.ts
│   │       │   │   └── Pages.ts
│   │       │   ├── app/(payload)/     # Admin + API routes (Next.js app dir)
│   │       │   ├── app/(frontend)/    # Boilerplate Next.js frontend (unused)
│   │       │   ├── payload.config.ts
│   │       │   ├── payload-types.ts
│   │       │   ├── shared/payloadBase.ts
│   │       │   └── index.ts
│   │       └── package.json
│   ├── quine/                         # Quine Systems marketing site
│   │   ├── astro/
│   │   │   ├── src/
│   │   │   │   ├── components/        # Custom React & Astro components
│   │   │   │   ├── layouts/QuineLayout.astro
│   │   │   │   ├── pages/index.astro  # Hardcoded landing page
│   │   │   │   ├── styles/global.css
│   │   │   │   └── utils/
│   │   │   └── astro.config.mjs
│   │   └── payload/
│   │       ├── src/
│   │       │   ├── collections/
│   │       │   │   ├── Users.ts       # Re-export from payload-default
│   │       │   │   ├── Media.ts       # Re-export from payload-default
│   │       │   │   └── Pages.ts       # Quine-specific (adds includeInNav)
│   │       │   ├── app/(payload)/
│   │       │   ├── app/(frontend)/    # Boilerplate (unused)
│   │       │   ├── payload.config.ts
│   │       │   └── payload-types.ts
│   │       └── package.json
│   └── teleplex/                      # Teleplex corporate site
│       ├── astro/
│       │   ├── src/
│       │   │   ├── components/
│       │   │   ├── layouts/TeleplexLayout.astro
│       │   │   ├── pages/
│       │   │   │   ├── index.astro    # CMS-driven homepage (SSG)
│       │   │   │   └── [slug].astro   # CMS-driven subpages (SSG)
│       │   │   ├── styles/
│       │   │   └── utils/
│       │   └── astro.config.mjs
│       └── payload/
│           ├── src/
│           │   ├── app/
│           │   │   ├── (payload)/     # Admin + API routes
│           │   │   ├── (frontend)/    # Boilerplate (unused)
│           │   │   ├── api/health/    # Health check endpoint
│           │   │   └── my-route/      # Custom example route
│           │   ├── collections/
│           │   │   ├── Users.ts       # Re-export from payload-default
│           │   │   ├── Media.ts       # Re-export from payload-default
│           │   │   └── Pages.ts
│           │   ├── migrations/        # Payload migrations (initial)
│           │   ├── payload.config.ts
│           │   └── payload-types.ts
│           ├── Dockerfile             # Production fat-stack image
│           ├── docker-compose.yml     # Production compose with SQLite volume
│           ├── docker-entrypoint.sh   # Runs migrations before start
│           └── package.json
├── .dockerignore                      # Excludes .env, build artifacts, data/
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
```

---

## 4. Schemas & Models

### Collections (Payload CMS)

All Payload backends share the same three collections. Quine's `Pages` adds an `includeInNav` field; otherwise collections are sourced from `payload-default`.

#### `Users`
- **slug:** `users`
- **auth:** `true` (email + password managed by Payload)
- **fields:** none custom (email added by default)
- **source:** `payload-default` (re-exported by quine/teleplex)

#### `Media`
- **slug:** `media`
- **access:** `read: () => true`
- **upload:** images only (`image/*`)
- **imageSizes:**
  - `thumb` — 400px width
  - `medium` — 800px width
  - `large` — 1600px width
- **fields:**
  - `alt` (text)
- **source:** `payload-default` (re-exported by quine/teleplex)

#### `Pages`
- **slug:** `pages`
- **access:** `read: () => true` (public read for build-time SSG)
- **fields:**
  - `title` (text, required)
  - `slug` (text, required, unique, sidebar)
  - `published` (checkbox, default `true`, sidebar)
  - `includeInNav` (checkbox, default `false`, sidebar) — **quine only**
  - `contentBlocks` (blocks) — dynamic block array powered by `allBlocksArray` from `@astro-default/blocks/blockSchemas`

### Database Adapter

**`sites/default/payload/src/shared/payloadBase.ts`** exports `baseDb`:

```ts
export const baseDb = sqliteAdapter({
  client: { url: process.env.DATABASE_URL || "" },
  push: true,  // Auto-creates schema tables (dev-friendly; migrations used in production Docker)
});
```

### Block System

The shared `sites/default/astro` package defines **123 UI blocks** organized into 15 families. See previous spec for full table. Each block follows a strict four-file convention (`schema.ts`, `Component.astro`, `Render.astro`, `index.ts`).

### Generated Types

`payload generate:types` produces `payload-types.ts` in each payload package. Consumed by Astro frontends via `workspace:*` dependencies.

### Migrations

Teleplex Payload has an initial migration (`20260509_075220`) generated from a working local database. The Docker entrypoint runs `pnpm payload migrate` before `pnpm start` to initialize schema tables on first boot. This is the **production-standard** approach; `push: true` alone has a race condition in `next start` production mode.

---

## 5. Routes

### Payload Admin & API (Next.js App Router)

| Route | Purpose |
|-------|---------|
| `/admin/[[...segments]]` | Payload CMS admin dashboard |
| `/api/[...slug]` | REST API auto-generated by Payload |
| `/api/graphql` | GraphQL endpoint |
| `/api/graphql-playground` | GraphQL playground |
| `/api/health` | Health check endpoint (`{ status: "ok" }`) — **teleplex only** |
| `/my-route` | Custom example route (`GET` only, returns JSON) — quine only |

### Astro Frontends

**Quine Systems (`sites/quine/astro`)**
| Route | Type | Source |
|-------|------|--------|
| `/` | Static | Hardcoded in `pages/index.astro` (not CMS-driven) |

**Teleplex (`sites/teleplex/astro`)**
| Route | Type | Source |
|-------|------|--------|
| `/` | SSG | CMS-driven (`slug === "home"`) |
| `/about` | SSG | CMS-driven (`slug === "about"`) |
| `/career` | SSG | CMS-driven (`slug === "career"`) |
| `/contact` | SSG | CMS-driven (`slug === "contact"`) |
| `/news-events` | SSG | CMS-driven (`slug === "news-events"`) |
| `/products` | SSG | CMS-driven (`slug === "products"`) |
| `/solutions` | SSG | CMS-driven (`slug === "solutions"`) |

**Default Astro (`sites/default/astro`)**
| Route | Purpose |
|-------|---------|
| `/` | Demo landing page |
| `/all-blocks` | Showcase of all available blocks |
| `/slugs/[slug]` | Generic CMS-driven page renderer |

---

## 6. Features

### Core
- **Block-based page builder** — Compose pages in Payload CMS using 123+ pre-built Tailwind UI blocks.
- **Type-safe cross-package data flow** — Payload types are generated and consumed by Astro via `workspace:*` links.
- **Media pipeline** — Images uploaded to Payload are stored on Cloudflare R2; Astro fetches resized variants at build time.
- **Site library monorepo** — Each brand (Quine, Teleplex) is an independent deployment that imports shared blocks, schemas, and utilities from `sites/default/`. No two sites run together in production.
- **Generic Payload query factory** — `createPayloadQuery<T>(baseURL)` in `sites/default/astro/src/utils/createPayloadQuery.ts` provides a single-source-of-truth SDK configuration.

### Quine Systems (Flagship Site)
- Custom shader backgrounds via `@paper-design/shaders-react` (HalftoneDots).
- Animated typography with `ScrambleIn`, `ScatterText`, `ShinyText`.
- Interactive works portfolio with hover-driven image switching.
- GSAP ScrollSmoother integration.
- Pixel-blast hover effects.
- Emotion/css for component-scoped responsive styles.
- Inverted header with `mix-blend-mode: difference`.

### Teleplex
- Standard corporate site structure (Products, Solutions, About, Career, etc.).
- CMS-driven homepage and subpages with SSG (`[slug].astro`).
- Responsive navigation with desktop/mobile toggle (mobile drawer stubbed).

### Docker Deployment (Teleplex Payload)
- **Fat-stack single-stage image** — copies full monorepo, installs deps, builds in-place, runs `next start`. Avoids Next.js `standalone` output bugs with pnpm workspace symlinks.
- **Production Docker Compose** — named volume `teleplex-data` for SQLite persistence, healthcheck, auto-restart.
- **Entrypoint script** — runs `pnpm payload migrate` before `pnpm start` to initialize schema on first boot.
- **`.dockerignore`** — excludes all `.env` files (including nested), build artifacts, local DB files.
- **Build-time isolation** — inline env vars on `RUN pnpm build` prevent copied `.env` files from affecting the build.

---

## 7. Key Design Decisions

1. **Per-Brand Folder Structure**
   Moved from `astro/*` + `payload/*` to `sites/{brand}/astro` + `sites/{brand}/payload` to support per-brand Dockerization and clearer deployment boundaries. `sites/default/` remains a shared library.

1a. **Independent Deployments (Not Multi-Tenant)**
   Each `sites/{brand}/` is a standalone deployment. They share code via `sites/default/` imports, but they never run together in production. There is no root-level orchestration. This is a site library, not a multi-tenant platform.

2. **Shared Block Architecture**
   The `sites/default/astro` package is the lynchpin. It exports both the Payload field schemas and the Astro renderers. Adding a new block is a single-package change.

3. **Workspace Dependency Pattern**
   Each payload package depends on `payload-default` for shared config. Each astro package depends on its corresponding payload package for generated types.

4. **Build-Time Data Fetching (SSG-first)**
   Astro sites use `@payloadcms/sdk` to fetch content at build time. This minimizes runtime CMS load and maximizes page speed.

5. **SQLite + R2 for Simplicity**
   SQLite keeps local development frictionless (single file, no Docker). R2 handles media durability and CDN delivery.

6. **Quine Hardcoded Landing**
   The Quine homepage is intentionally hardcoded rather than CMS-driven. This enables pixel-perfect control over animations, shaders, and layout.

7. **Fat-Stack Docker Image**
   Next.js `output: 'standalone'` was attempted but abandoned because pnpm workspace symlinks (`next`, `sharp`, `libsql`) broke in the standalone runner stage. The fat-stack approach (full `node_modules` in the image) is larger (~3.5GB) but reliable.

8. **Migrations for Production Schema Init**
   `push: true` on the SQLite adapter has a known race condition in Payload 3.x production mode — the first query may execute before schema tables exist. Migrations (`payload migrate`) are the production-standard fix and run automatically in the Docker entrypoint.

---

## 8. Architecture Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    sites/quine/astro                          │
│  (Astro 5 + React + Tailwind + GSAP + Shaders)              │
│  ┌──────────────┐                                           │
│  │  Hardcoded   │                                           │
│  │  index.astro │  ← No CMS dependency                     │
│  └──────────────┘                                           │
│           │                                                  │
│           │ uses (workspace dep)                             │
│           ▼                                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              sites/default/astro                      │   │
│  │  (schemas + renderers + Tailwind components)         │   │
│  └─────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │ workspace dependency
┌──────────────────────────▼──────────────────────────────────┐
│                    sites/quine/payload                        │
│  (Payload 3 + Next.js 15 + SQLite + R2)                     │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐  │
│  │   Users    │  │   Media    │  │   Pages              │  │
│  │  (re-export│  │  (re-export│  │  (includeInNav)      │  │
│  │ from deflt)│  │ from deflt)│  │                      │  │
│  └────────────┘  └────────────┘  └──────────────────────┘  │
│                           ▲                                 │
│                           │ imports schemas                 │
│              ┌────────────┴────────────┐                    │
│              │   sites/default/astro     │                    │
│              │   (blockSchemas.ts)       │                    │
│              └───────────────────────────┘                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    sites/teleplex/payload                     │
│  (Dockerized Production — Fat Stack Image)                  │
│                                                             │
│  ┌─────────────────────────────────────────────┐           │
│  │  Docker Compose                               │           │
│  │  ├── Dockerfile (single-stage, full deps)    │           │
│  │  ├── docker-entrypoint.sh (migrate → start)  │           │
│  │  ├── docker-compose.yml (port 3000, volume)  │           │
│  │  └── named volume: teleplex-data (SQLite)    │           │
│  └─────────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. Issues & Technical Debt

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| 1 | **No Tests** | High | Zero test files found across the entire monorepo. No unit, integration, or E2E tests. |
| 2 | **Quine CMS Pages Disabled** | Medium | Quine has no CMS-driven pages. The live site is fully hardcoded, defeating the purpose of the CMS for Quine. |
| 3 | **Unused Next.js Frontend** | Low | Each payload package contains `app/(frontend)/` boilerplate that is not used in production. |
| 4 | **Quine payload backend unused** | Medium | Quine's Payload backend is configured but the frontend never queries it. The `payloadQuery.ts` was deleted as dead code. |
| 5 | **Emotion/css in Quine** | Low | Quine uses `@emotion/css` for responsive styling, inconsistent with the Tailwind-first approach. Adds ~130KB gzipped. |
| 6 | **Tight Coupling: Blocks ↔ Media** | Medium | Block renderers rely on `getImageUrl`/`getImageAlt` from `@astro-default/utils/media`, which assumes the `media` collection always exists with `url` and `alt` fields. |
| 7 | **Container runs as root** | Medium | The Docker image runs as root because corepack's pnpm cache lives in `/root/.cache/`. Fix: install pnpm via `npm install -g pnpm` instead of corepack, then switch to `USER node`. |
| 8 | **Large Docker image** | Medium | ~3.5GB fat-stack image. Could be optimized by filtering workspace packages or resolving pnpm symlinks for standalone output. |
| 9 | **MobileNavButton is a stub** | Low | `sites/teleplex/astro/src/components/MobileNavButton/MobileNavButton.tsx` logs `"click!!"` and does nothing. |
| 10 | **Button.tsx uses window.location.href** | Low | `sites/quine/astro/src/components/Button/Button.tsx` navigates via `window.location.href`, breaking accessibility and SEO. |
| 11 | **All-blocks demo is brittle** | Low | `sites/default/astro/src/pages/all-blocks/index.astro` creates empty blocks with no field data. Relies entirely on Component defaults. |
| ~~12~~ | ~~**Payload default/quine/teleplex port collision**~~ | ~~Low~~ | ~~*Not an issue.* Sites are independently deployed and never run simultaneously. Each can use its preferred default port.~~ |
| 13 | **Sass @import deprecation** | Low | Teleplex layout uses `@import "../styles/breakpoints.scss"` which is deprecated in Dart Sass 3.0.0. |
| 14 | **Missing root tsconfig.json** | Low | After restructure, no root `tsconfig.json` exists. All packages are self-contained via child tsconfigs. |
| 15 | **Docker only for teleplex payload** | Low | Quine and default backends have no Dockerfiles. Teleplex Astro frontend has no Dockerfile. Per-brand Dockerization is incomplete. |

---

## 10. Usage

### Prerequisites
- Node.js `^18.20.2 || >=20.9.0`
- pnpm `^9 || ^10`
- Docker (for production deployment)

### Install Dependencies
```bash
pnpm install
```

### Run Payload Backend (example: default)
```bash
cd sites/default/payload
pnpm dev        # starts on port 2999
```

### Run Astro Frontend (example: quine)
```bash
cd sites/quine/astro
pnpm dev        # starts Astro dev server
```

### Generate Payload Types
```bash
cd sites/default/payload
pnpm generate:types
```

### Generate Migrations
```bash
cd sites/teleplex/payload
pnpm dev        # start with a working data.db
# In another terminal:
pnpm payload migrate:create
```

### Build Quine Site
```bash
cd sites/quine/astro
pnpm build
```

### Docker: Teleplex Payload (Production)
```bash
cd sites/teleplex/payload

# Build and start
docker compose up --build -d

# View logs
docker compose logs -f

# Check status
docker compose ps

# Stop and remove
docker compose down

# Stop and remove including SQLite volume (⚠️ destroys data)
docker compose down -v
```

### Environment Variables
Each payload package needs:
- `DATABASE_URL` — SQLite file path (e.g., `file:./data/data.db`)
- `PAYLOAD_SECRET` — Random string for session/auth encryption
- `PAYLOAD_BASE_URL` — Public API URL for Astro SDK
- `R2_*` — Cloudflare R2 credentials for media storage

Each astro package needs:
- `PAYLOAD_BASE_URL` — URL of its corresponding Payload backend

---

## 11. Tests

**Status:** No tests exist.

Recommended testing strategy:
- **Unit:** Block schema validation, `Render.astro` prop mapping, utility functions (`media.ts`, `createPayloadQuery.ts`).
- **Integration:** Payload SDK queries against a test SQLite database.
- **E2E:** Playwright or Cypress for critical user flows (Quine navigation, Teleplex CMS page rendering).

---

## 12. Notable Files

| File | Purpose |
|------|---------|
| `sites/default/astro/src/blocks/blockSchemas.ts` | Central registry of all Payload block schemas |
| `sites/default/astro/src/blocks/blockRenderers.ts` | Central registry of all Astro block renderers |
| `sites/default/astro/src/blocks/RenderBlocks/RenderBlocks.astro` | Orchestrates block list rendering |
| `sites/default/astro/src/utils/createPayloadQuery.ts` | Generic Payload SDK factory |
| `sites/quine/astro/src/pages/index.astro` | Quine Systems live landing page |
| `sites/quine/astro/src/components/WorksSection.tsx` | Interactive portfolio component |
| `sites/teleplex/astro/src/pages/[slug].astro` | Teleplex SSG dynamic route for subpages |
| `sites/teleplex/payload/Dockerfile` | Production fat-stack Docker image |
| `sites/teleplex/payload/docker-compose.yml` | Production Docker Compose with SQLite volume |
| `sites/teleplex/payload/docker-entrypoint.sh` | Entrypoint — runs migrations before server start |
| `sites/teleplex/payload/src/app/api/health/route.ts` | Health check endpoint for Docker |
| `sites/teleplex/payload/src/migrations/` | Payload schema migrations (initial migration committed) |
| `sites/default/payload/src/payload.config.ts` | Master CMS configuration (DB, storage, collections) |
| `sites/default/payload/src/shared/payloadBase.ts` | Shared config helpers (db, editor, storage, admin) |
| `sites/default/payload/src/collections/Pages.ts` | Page collection using `allBlocksArray` |
| `sites/default/payload/next.config.mjs` | Shared Next.js config with `output: 'standalone'` + tracing fixes |
| `.dockerignore` | Excludes all `.env` files, build artifacts, local DB from Docker context |
| `sites/tsconfig.payload.base.json` | Shared TypeScript config for all payload packages |
