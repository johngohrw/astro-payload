# Project Spec: astro-payload

**Date:** 2026-05-06  
**Project:** astro-payload  
**Type:** Monorepo — Headless CMS + Static Site Generator  

---

## 1. Overview

`astro-payload` is a pnpm workspace monorepo powering multiple brand websites (primarily **Quine Systems**, with **Teleplex** as a secondary site). It follows a **decoupled architecture**: **Payload CMS 3.x** serves as the headless content backend, and **Astro 5.x** generates static frontends. The repo is designed around a **shared block system** — reusable UI blocks are defined once with both a Payload schema (CMS editing) and an Astro renderer (frontend display), enabling rapid page assembly via the CMS.

The flagship site, **Quine Systems**, is a highly polished digital-design-studio landing page with custom shaders, GSAP animations, and bespoke React components. Teleplex is a conventional corporate site wired to the same CMS backend.

The repo was recently restructured from a per-layer layout (`astro/*`, `payload/*`) to a **per-brand layout** (`sites/{brand}/astro`, `sites/{brand}/payload`) to support per-brand Dockerization and clearer deployment boundaries.

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
│           └── src/                   # Same structure as quine payload
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

### Block System

The shared `sites/default/astro` package defines **123 UI blocks** organized into 15 families:

| Family | Count | Examples |
|--------|-------|----------|
| Bento | 3 | `BentoThreeColGrid`, `BentoTwoRowGrid` |
| Blog | 8 | `BlogFeaturedPost`, `BlogThreeCol` |
| Contact | 8 | `ContactCentered`, `ContactSplitImg` |
| Content | 7 | `ContentCentered`, `ContentStickyScreenshot` |
| CTA | 12 | `CtaSimpleCentered`, `CtaSplitWithImage` |
| FAQ | 8 | `FaqCenteredAccordion`, `FaqThreeColumns` |
| Features | 12 | `FeatSimple`, `FeatWithLargeScreenshot` |
| Footer | 7 | `Footer4ColCta`, `FooterSmSocial` |
| Header | 8 | `HeaderCentered`, `HeaderWithStats` |
| Hero | 13 | `HeroSimpleCentered`, `HeroSplitImg` |
| Logo Cloud | 7 | `LogocloudSimple`, `LogocloudSplitLogosRight` |
| Newsletter | 7 | `NewsletterCenteredCard`, `NewsletterSbsDetails` |
| Stats | 8 | `StatsSimple`, `StatsTimeline` |
| Team | 9 | `TeamGridLargeRound`, `TeamLargeImgs` |
| Testimonials | 10 | `TestimonialsGrid`, `TestimonialsStarRating` |

Each block follows a strict four-file convention:
- `schema.ts` — Payload `Block` config (fields, defaults)
- `Component.astro` — Pure presentational Astro component with Tailwind classes
- `Render.astro` — Data-mapping layer that transforms Payload block data into `Component` props
- `index.ts` — Barrel export

### Generated Types

`payload generate:types` produces `payload-types.ts` in each payload package. These are exported and consumed by Astro frontends via `workspace:*` dependencies and TypeScript path aliases.

---

## 5. Routes

### Payload Admin & API (Next.js App Router)

| Route | Purpose |
|-------|---------|
| `/admin/[[...segments]]` | Payload CMS admin dashboard |
| `/api/[...slug]` | REST API auto-generated by Payload |
| `/api/graphql` | GraphQL endpoint |
| `/api/graphql-playground` | GraphQL playground |
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
- **Multi-tenant monorepo** — Each brand (Quine, Teleplex) owns a dedicated frontend + backend pair while sharing the block library.
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
- CMS-driven homepage and subpages with server-side rendering converted to SSG.
- Responsive navigation with desktop/mobile toggle (mobile drawer stubbed).

---

## 7. Key Design Decisions

1. **Per-Brand Folder Structure (recent refactor)**  
   Moved from `astro/*` + `payload/*` to `sites/{brand}/astro` + `sites/{brand}/payload` to support per-brand Dockerization and clearer deployment boundaries. `sites/default/` remains a shared library.

2. **Shared Block Architecture**  
   The `sites/default/astro` package is the lynchpin. It exports both the Payload field schemas (so the CMS knows what fields each block has) and the Astro renderers (so the frontend knows how to display them). Adding a new block is a single-package change that propagates to all sites.

3. **Workspace Dependency Pattern**  
   Each payload package depends on `payload-default` for shared config. Each astro package depends on its corresponding payload package for generated types. The dependency graph: `sites/quine/astro` → `payload-quine` & `astro-default`.

4. **Build-Time Data Fetching (SSG-first)**  
   Astro sites use `@payloadcms/sdk` to fetch content at build time. Only the default site uses SSR for its demo pages. This minimizes runtime CMS load and maximizes page speed.

5. **SQLite + R2 for Simplicity**  
   SQLite keeps local development frictionless (single file, no Docker). R2 handles media durability and CDN delivery.

6. **Quine Hardcoded Landing**  
   The Quine homepage is intentionally hardcoded rather than CMS-driven. This enables pixel-perfect control over animations, shaders, and layout that would be difficult to express through generic block fields.

7. **Next.js as Payload Host**  
   Payload 3.x is tightly coupled to Next.js. The `(frontend)` routes in each payload package are largely unused boilerplate; the real frontends live in `sites/*/astro`.

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
```

---

## 9. Issues & Technical Debt

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| 1 | **No Tests** | High | Zero test files found across the entire monorepo. No unit, integration, or E2E tests. |
| 2 | **Quine CMS Pages Disabled** | Medium | Quine has no CMS-driven pages. The live site is fully hardcoded, defeating the purpose of the CMS for Quine. |
| 3 | **Unused Next.js Frontend** | Low | Each payload package contains `app/(frontend)/` boilerplate that is not used in production. |
| 4 | **Quine payload backend unused** | Medium | Quine's Payload backend is configured but the frontend never queries it. The `payloadQuery.ts` was deleted as dead code. |
| 5 | **Emotion/css in Quine** | Low | Quine uses `@emotion/css` for responsive styling, inconsistent with the Tailwind-first approach of the shared block library. Adds ~130KB gzipped to the bundle. |
| 6 | **Tight Coupling: Blocks ↔ Media** | Medium | Block renderers rely on `getImageUrl`/`getImageAlt` from `@astro-default/utils/media`, which assumes the `media` collection always exists with `url` and `alt` fields. |
| 7 | **No CI/CD Configuration** | Medium | No GitHub Actions, Dockerfiles, or deployment manifests visible. |
| 8 | **MobileNavButton is a stub** | Low | `sites/teleplex/astro/src/components/MobileNavButton/MobileNavButton.tsx` logs `"click!!"` and does nothing. |
| 9 | **Button.tsx uses window.location.href** | Low | `sites/quine/astro/src/components/Button/Button.tsx` navigates via `window.location.href` inside an `onClick`, breaking accessibility and SEO. |
| 10 | **All-blocks demo is brittle** | Low | `sites/default/astro/src/pages/all-blocks/index.astro` creates empty blocks with no field data. Relies entirely on Component defaults. |
| 11 | **Payload default/quine/teleplex port collision** | Low | `payload-quine` and `payload-teleplex` both default to port 3000. Cannot run simultaneously without explicit port assignment. |
| 12 | **Sass @import deprecation** | Low | Teleplex layout uses `@import "../styles/breakpoints.scss"` which is deprecated in Dart Sass 3.0.0. |
| 13 | **Missing root tsconfig.json** | Low | After restructure, no root `tsconfig.json` exists. All packages are self-contained via child tsconfigs. |

---

## 10. Usage

### Prerequisites
- Node.js `^18.20.2 || >=20.9.0`
- pnpm `^9 || ^10`

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

### Build Quine Site
```bash
cd sites/quine/astro
pnpm build
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
| `sites/default/payload/src/payload.config.ts` | Master CMS configuration (DB, storage, collections) |
| `sites/default/payload/src/shared/payloadBase.ts` | Shared config helpers (db, editor, storage, admin) |
| `sites/default/payload/src/collections/Pages.ts` | Page collection using `allBlocksArray` |
| `sites/tsconfig.payload.base.json` | Shared TypeScript config for all payload packages |
