# Project Spec: astro-payload

**Date:** 2026-05-04  
**Project:** astro-payload  
**Type:** Monorepo — Headless CMS + Static Site Generator  

---

## 1. Overview

`astro-payload` is a pnpm workspace monorepo powering multiple brand websites (primarily **Quine Systems**, with **Teleplex** as a secondary site). It follows a **decoupled architecture**: **Payload CMS 3.x** serves as the headless content backend, and **Astro 5.x** generates static (or server-rendered) frontends. The repo is designed around a **shared block system** — reusable UI blocks are defined once with both a Payload schema (CMS editing) and an Astro renderer (frontend display), enabling rapid page assembly via the CMS.

The flagship site, **Quine Systems**, is a highly polished digital-design-studio landing page with custom shaders, GSAP animations, and bespoke React components. Teleplex is a more conventional corporate site wired to the same CMS backend.

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
├── .context/                          # Context documents (this spec)
├── .skills/                           # Pi agent skills
│   ├── architecture-review/
│   ├── generate-commit-message/
│   ├── get-up-to-speed/
│   ├── plan-and-implement/
│   └── save-session/
├── .older-skills/                     # Archived skill iterations
├── astro/                             # Frontend packages
│   ├── default/                       # Shared block library + utilities
│   │   ├── src/
│   │   │   ├── blocks/
│   │   │   │   ├── blockSchemas.ts
│   │   │   │   ├── blockTypes.ts
│   │   │   │   ├── blockRenderers.ts
│   │   │   │   ├── RenderBlocks/
│   │   │   │   └── components/TailwindBlocks/   # 100+ block families
│   │   │   ├── components/
│   │   │   ├── layouts/DefaultLayout.astro
│   │   │   ├── pages/
│   │   │   ├── styles/global.css
│   │   │   └── utils/payloadQuery.ts
│   │   └── astro.config.mjs
│   ├── quine/                         # Quine Systems marketing site
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/            # Custom React & Astro components
│   │   │   ├── disabled-pages/        # CMS-driven pages (commented out)
│   │   │   ├── layouts/QuineLayout.astro
│   │   │   ├── pages/index.astro      # Hardcoded landing page
│   │   │   ├── styles/global.css
│   │   │   └── utils/payloadQuery.ts
│   │   └── astro.config.mjs
│   └── teleplex/                      # Teleplex corporate site
│       ├── src/
│       │   ├── components/
│       │   ├── layouts/TeleplexLayout.astro
│       │   ├── pages/                 # Multiple static pages
│       │   └── utils/payloadQuery.ts
│       └── astro.config.mjs
├── payload/                           # Backend packages
│   ├── default/                       # Shared Payload config + types
│   │   ├── src/
│   │   │   ├── collections/
│   │   │   │   ├── Users.ts
│   │   │   │   ├── Media.ts
│   │   │   │   └── Pages.ts
│   │   │   ├── app/(payload)/         # Admin + API routes (Next.js app dir)
│   │   │   ├── app/(frontend)/        # Boilerplate Next.js frontend (unused)
│   │   │   ├── payload.config.ts
│   │   │   ├── payload-types.ts       # Generated TypeScript types
│   │   │   └── index.ts               # Package exports
│   │   └── package.json
│   ├── quine/                         # Quine Payload backend
│   │   ├── src/
│   │   │   ├── collections/           # Re-exports default collections
│   │   │   ├── app/(payload)/         # Admin/API routes
│   │   │   ├── app/(frontend)/        # Boilerplate Next.js frontend (unused)
│   │   │   ├── app/my-route/route.ts  # Custom API route example
│   │   │   ├── payload.config.ts
│   │   │   ├── payload-types.ts
│   │   │   └── index.ts
│   │   └── package.json
│   └── teleplex/                      # Teleplex Payload backend
│       └── src/                       # Same structure as quine
├── package.json                       # Root workspace manifest
├── pnpm-workspace.yaml                # Workspace globs
└── tsconfig.json                      # Root TypeScript paths
```

---

## 4. Schemas & Models

### Collections (Payload CMS)

All Payload backends share the same three collections, imported from `astro-default` block schemas.

#### `Users`
- **slug:** `users`
- **auth:** `true` (email + password managed by Payload)
- **fields:** none custom (email added by default)

#### `Media`
- **slug:** `media`
- **upload:** images only (`image/*`)
- **imageSizes:**
  - `thumb` — 400px width
  - `medium` — 800px width
  - `large` — 1600px width
- **fields:**
  - `alt` (text)

#### `Pages`
- **slug:** `pages`
- **access:** `read: () => true` (public read for build-time SSG)
- **fields:**
  - `title` (text, required)
  - `slug` (text, required, unique, sidebar)
  - `published` (checkbox, default `true`, sidebar)
  - `includeInNav` (checkbox, default `false`, sidebar)
  - `contentBlocks` (blocks) — dynamic block array powered by `allBlocksArray` from `@astro-default/blocks/blockSchemas`

### Block System

The shared `astro-default` package defines ~100+ UI blocks organized into families:

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

Each block follows a strict three-file convention:
- `schema.ts` — Payload `Block` config (fields, defaults)
- `Component.astro` — Pure presentational Astro component with Tailwind classes
- `Render.astro` — Data-mapping layer that transforms Payload block data into `Component` props (handles media URLs, null-safety, etc.)

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
| `/my-route` | Custom example route (`GET` only, returns JSON) |

### Astro Frontends

**Quine Systems (`astro/quine`)**
| Route | Type | Source |
|-------|------|--------|
| `/` | Static | Hardcoded in `pages/index.astro` (not CMS-driven) |
| `/[slug]` | Disabled | Commented out in `disabled-pages/` |

**Teleplex (`astro/teleplex`)**
| Route | Type | Source |
|-------|------|--------|
| `/` | SSR (`prerender = false`) | CMS-driven (`slug === "home"`) |
| `/about` | Static | Hardcoded Astro page |
| `/career` | Static | Hardcoded Astro page |
| `/contact` | Static | Hardcoded Astro page |
| `/news-events` | Static | Hardcoded Astro page |
| `/products` | Static | Hardcoded Astro page |
| `/solutions` | Static | Hardcoded Astro page |

**Default Astro (`astro/default`)**
| Route | Purpose |
|-------|---------|
| `/` | Demo landing page |
| `/all-blocks` | Showcase of all available blocks |
| `/slugs/[slug]` | Generic CMS-driven page renderer |

---

## 6. Features

### Core
- **Block-based page builder** — Compose pages in Payload CMS using 100+ pre-built Tailwind UI blocks.
- **Type-safe cross-package data flow** — Payload types are generated and consumed by Astro via `workspace:*` links.
- **Media pipeline** — Images uploaded to Payload are stored on Cloudflare R2; Astro fetches resized variants at build time.
- **Multi-tenant monorepo** — Each brand (Quine, Teleplex) owns a dedicated frontend + backend pair while sharing the block library.

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
- CMS-driven homepage with server-side rendering.

---

## 7. Key Design Decisions

1. **Shared Block Architecture**  
   The `astro-default` package is the lynchpin. It exports both the Payload field schemas (so the CMS knows what fields each block has) and the Astro renderers (so the frontend knows how to display them). This guarantees that adding a new block is a single-package change that immediately propagates to all sites.

2. **Workspace Dependency Pattern**  
   Each payload package depends on `astro-default` for block schemas, and each astro package depends on its corresponding payload package for generated types. This creates a directed graph: `astro/quine` → `payload-quine` & `astro-default`.

3. **Build-Time Data Fetching (SSG-first)**  
   Astro sites use `@payloadcms/sdk` to fetch content at build time. Only Teleplex opts into SSR (`prerender = false`). This minimizes runtime CMS load and maximizes page speed.

4. **SQLite + R2 for Simplicity**  
   SQLite keeps local development frictionless (single file, no Docker). R2 handles media durability and CDN delivery without the complexity of a full Postgres setup.

5. **Quine Hardcoded Landing**  
   The Quine homepage is intentionally hardcoded rather than CMS-driven. This enables pixel-perfect control over animations, shaders, and layout that would be difficult to express through generic block fields.

6. **Next.js as Payload Host**  
   Payload 3.x is tightly coupled to Next.js. The `(frontend)` routes in each payload package are largely unused boilerplate; the real frontends live in `astro/*`.

---

## 8. Architecture Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        astro/quine                          │
│  (Astro 5 + React + Tailwind + GSAP + Shaders)              │
│  ┌──────────────┐  ┌─────────────────────────────────────┐  │
│  │  Hardcoded   │  │  CMS-driven pages (disabled)        │  │
│  │  index.astro │  │  [slug].astro / index.astro         │  │
│  └──────────────┘  └─────────────────────────────────────┘  │
│           │                              │                  │
│           │ uses                         │ uses             │
│           ▼                              ▼                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              @astro-default/blocks                   │   │
│  │  (schemas + renderers + Tailwind components)        │   │
│  └─────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │ workspace dependency
┌──────────────────────────▼──────────────────────────────────┐
│                     payload/quine                           │
│  (Payload 3 + Next.js 15 + SQLite + R2)                     │
│  ┌────────────┐  ┌────────────┐  ┌──────────────────────┐  │
│  │   Users    │  │   Media    │  │   Pages              │  │
│  │  (auth)    │  │  (R2/S3)   │  │  (block builder)     │  │
│  └────────────┘  └────────────┘  └──────────────────────┘  │
│                           ▲                                 │
│                           │ imports schemas                 │
│              ┌────────────┴────────────┐                    │
│              │   @astro-default/blocks   │                    │
│              │   (blockSchemas.ts)       │                    │
│              └───────────────────────────┘                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. Issues & Technical Debt

| # | Issue | Severity | Details |
|---|-------|----------|---------|
| 1 | **No Tests** | High | Zero test files found across the entire monorepo. No unit, integration, or E2E tests. |
| 2 | **Quine CMS Pages Disabled** | Medium | The dynamic `[slug].astro` and CMS `index.astro` are commented out in `disabled-pages/`. The live site is fully hardcoded, defeating the purpose of the CMS for Quine. |
| 3 | **Unused Next.js Frontend** | Low | Each payload package contains a `(frontend)` Next.js app that is not used in production. It increases build time and maintenance surface area. |
| 4 | **Wueelong Site Missing** | Low | `tsconfig.json` defines `@astro-wueelong/*` and `@payload-wueelong/*` paths, but no `wueelong` packages exist in `astro/` or `payload/`. |
| 5 | **Emotion/css in Quine** | Low | Quine uses `@emotion/css` for responsive styling, which is inconsistent with the Tailwind-first approach of the shared block library. |
| 6 | **Tight Coupling: Blocks ↔ Media** | Medium | Block renderers rely on `getImageUrl`/`getImageAlt` from `@astro-default/utils/media`, which assumes the `media` collection always exists. Changing the media schema would silently break all block renderers. |
| 7 | **Environment Variable Exposure Risk** | Medium | `.env.example` files contain what appear to be real R2 credentials (access keys, secrets). These should be rotated immediately if they are valid. |
| 8 | **No CI/CD Configuration** | Medium | No GitHub Actions, Dockerfiles, or deployment manifests visible. |

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
cd payload/default
pnpm dev        # starts on port 2999
```

### Run Astro Frontend (example: quine)
```bash
cd astro/quine
pnpm dev        # starts Astro dev server
```

### Generate Payload Types
```bash
cd payload/default
pnpm generate:types
```

### Build Quine Site
```bash
cd astro/quine
pnpm build
```

### Environment Variables
Each payload package needs:
- `DATABASE_URL` — SQLite file path (e.g., `file:./data/data.db`)
- `PAYLOAD_SECRET` — Random string for session/auth encryption
- `PAYLOAD_BASE_URL` — Public API URL for Astro SDK
- `R2_*` — Cloudflare R2 credentials for media storage

---

## 11. Tests

**Status:** No tests exist.

Recommended testing strategy:
- **Unit:** Block schema validation, `Render.astro` prop mapping, utility functions (`media.ts`).
- **Integration:** Payload SDK queries against a test SQLite database.
- **E2E:** Playwright or Cypress for critical user flows (Quine navigation, Teleplex CMS page rendering).

---

## 12. Notable Files

| File | Purpose |
|------|---------|
| `astro/default/src/blocks/blockSchemas.ts` | Central registry of all Payload block schemas |
| `astro/default/src/blocks/blockRenderers.ts` | Central registry of all Astro block renderers |
| `astro/default/src/blocks/RenderBlocks/RenderBlocks.astro` | Orchestrates block list rendering |
| `astro/quine/src/pages/index.astro` | Quine Systems live landing page |
| `astro/quine/src/components/WorksSection.tsx` | Interactive portfolio component |
| `payload/default/src/payload.config.ts` | Master CMS configuration (DB, storage, collections) |
| `payload/default/src/collections/Pages.ts` | Page collection using `allBlocksArray` |
| `tsconfig.json` | Root path aliases for cross-package imports |
