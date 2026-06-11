# Design — Quine Systems

> Captured from existing codebase (`sites/quine/astro/`). Treat this as the canonical visual system for all future Quine design work. Update when tokens change.

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#e6e0dd` | Page background (warm beige / taupe) |
| `--color-fg` | `#222` | Primary text (near-black) |
| Primary accent | `oklch(0.72 0.11 178)` | Tailwind theme primary (teal-cyan) |
| Contact bg | `#030303` | Contacts section background (near-black) |
| Contact fg | `#e7e7e7` | Contacts section text (off-white) |
| Button primary bg | `black` | Primary CTA fill |
| Button primary text | `white` | Primary CTA text |
| Button secondary border | `var(--color-fg)` | Outlined CTA stroke |
| Works hover | `bg-slate-400/20` | Works list row hover state |
| Works active | `bg-black text-slate-100` | Works list selected row |
| Shader back (services) | `#4c4343` | HalftoneDots background layer |
| Shader front (services) | `#1a1709` | HalftoneDots foreground layer |
| Shader back (contact) | `#525652` | HalftoneDots background layer |
| Shader front (contact) | `#0a1509` | HalftoneDots foreground layer |

**Notes:**
- No dark mode strategy is active. A commented-out `class="dark"` exists in `QuineLayout.astro`.
- The contact section inverts the palette locally (dark bg, light fg). This is the only dark surface.

---

## Typography

### Font Families

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Body / UI | DM Sans | 100–1000 | All body text, nav, buttons |
| Display / Headings | Alegreya | 400–900 | Section headers (`SectionHeaderText`, `SectionHeaderTextSmaller`) |
| Mono / Captions | Chivo Mono | 100–900 | Uppercase captions, labels (`SectionCaptionText`) |
| Hero / Brand | Quintessential | 400 | Hero title, footer brand letters |

**Loaded but currently unused:** Belanosima, Charm, Cookie, Geist, Spline Sans Mono, Syne Tactile.

### Type Scale

| Element | Desktop | ≤978px | ≤768px |
|---------|---------|--------|--------|
| Hero display | `calc(var(--content-width) * 0.173)` | — | `* 0.323` (≤867px) |
| SectionHeaderText | 2.5rem | 2.25rem | 2rem |
| SectionHeaderTextSmaller | 1.75rem | 1.625rem | 1.5rem |
| SectionBodyText | 1.2rem | 1.1rem | 1rem |
| SectionCaptionText | 0.85rem | 0.8rem | 0.75rem |
| Works list items | 1.5rem | 1.25rem (≤1200px) | — |
| Contact email link | 1.5rem | — | 1.3rem (≤576px) |
| Base / root | 16px | 16px | 16px |

**Line heights:**
- Hero: `1`
- Headings: `1.15`
- Smaller headings: `1.25`
- Body: `1.4`
- Captions: `1.25`

---

## Spacing System

### Layout Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `--content-padding-x` | `2rem` (desktop) → `1rem` (≤678px) | Horizontal page padding |
| `--scrollbar-width` | `15px` | Scrollbar width deduction |
| `--vw-safe` | `calc(100dvw - var(--scrollbar-width))` | Safe viewport width |
| `--side-margins` | `calc(2 * var(--content-padding-x))` | Total lateral padding |
| `--content-width` | `min(calc(var(--vw-safe) - var(--side-margins)), 1440px)` | Max content width |
| `--content-scale` | `calc(var(--content-width) * 0.01)` | Responsive scaling unit |
| `--site-header-height` | `80px` | Fixed header height |

### Section Spacing

- Generous vertical rhythm. Sections use `py-8`, `py-16`, `pb-24`, `pb-48`, and `pt-[var(--site-header-height)]` to clear the fixed header.
- No explicit token scale (e.g., 4px/8px grid). Currently mixes Tailwind utilities with SCSS custom properties and arbitrary values.

---

## Component Patterns

### Buttons

- **Primary:** Black fill, white text, `rounded-4xl`, `py-2 px-4`
- **Secondary:** Transparent fill, `--color-fg` border, `rounded-4xl`, `py-2 px-4`
- **Link:** No padding/border, plain text, used in nav
- **Motion:** Framer Motion `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.9 }}`
- **Behavior:** Smooth-scroll anchors or `window.location.href` (see technical debt: should use `<a>`)

### PageFrame

- Full-width outer div with horizontal padding (`--content-padding-x`)
- Inner content capped at `1440px`, centered
- Supports `prefix` / `suffix` slots for full-bleed backgrounds

### Cards

- `rounded-xl bg-gray-100 shadow-4xl/10 p-6`
- Barely used in current page; defined in `CardSection.astro`

### Navigation

- Fixed top, full width, `80px` height
- `filter: invert(1)` + `mix-blend-mode: difference` — creates an inverted header that adapts to any background
- Logo left, nav links center (desktop), CTA right
- Mobile: nav links hidden, CTA only

### Hover Links

- Pill-shaped (`border-radius: 2rem`, `padding: 0.25rem 1rem`)
- Hover inverts background/foreground with `transition-duration: 100ms`

---

## Motion & Interaction

### Philosophy
Motion is **expressive but purposeful**. The interface should feel alive without being distracting. Every animation demonstrates craft.

### Patterns

| Element | Tech | Behavior |
|---------|------|----------|
| Page scroll | GSAP ScrollSmoother | `smooth: 0.8`, effects enabled, `--scroll-progress` CSS variable updated via RAF |
| Hero letters | Framer Motion | Staggered reveal, `delay: 1s`, `stagger: 0.1s`, `ease-out`, `duration: 2s`, `whileInView` once |
| Scramble text | Custom React (`ScrambleIn`) | Character scramble reveal, 25ms tick, 5 trailing scrambled chars |
| Works list | React state + CSS | Hover sets preview image; click locks selection; `duration-200` opacity transitions |
| Buttons | Framer Motion | Scale 1.05 hover / 0.95 tap |
| Shader bg (services) | `@paper-design/shaders-react` (HalftoneDots) | Gooey hex-grid halftone shader with image input |
| Shader bg (contact) | `@paper-design/shaders-react` (HalftoneDots) | Same component, different color params |
| Interactive bg | Custom WebGL (`PixelBlast`) | FBM noise pixel pattern with click ripples, liquid distortion, offscreen auto-pause |

### Easing & Timing
- Default ease: `ease-out` (Framer Motion)
- Button transitions: 100ms
- Works transitions: 200ms
- Scroll smoothing: 0.8 factor (GSAP)

### Accessibility
- **All motion must respect `prefers-reduced-motion`.** Currently not implemented — flagged for future work.
- `ScrambleIn` includes `sr-only` text for screen readers.

---

## Responsive Breakpoints

| Breakpoint | Key Changes |
|------------|-------------|
| `≤1439.99px` | Font size lock at 16px; nav subcontent shifts to flex-end |
| `≤1200px` | Works list font shrinks to 1.25rem |
| `≤987px` | WorksSection switches to column-reverse; image aspect ratio changes |
| `≤978px` | Type scale step-down (headings, body, captions) |
| `≤867px` | Hero letters switch to mobile layout (stacked); contact section stacks vertically |
| `≤768px` | Further type scale step-down |
| `≤720px` | Works image aspect ratio changes again |
| `≤678px` | Mobile nav visible; content padding drops to 1rem |
| `≤672px` | ServicesSection table stacks vertically |
| `≤576px` | Contact email link shrinks to 1.3rem |

**Mobile-first vs desktop-first:** Desktop-first. Media queries use `max-width`.

---

## Dark Mode

**Status:** Not implemented.

The contact section uses a local dark inversion (`#030303` bg, `#e7e7e7` fg). A commented-out `<html class="dark">` exists in the layout. If dark mode is added later, it should be class-based and preserve the warm analog feel — avoid pure black (`#000`) and cold grays.

---

## Known Inconsistencies & Technical Debt

1. **Three styling systems** — Emotion/css, SCSS (`<style>` blocks), and Tailwind CSS coexist. Long-term goal: converge on Tailwind + CSS custom properties.
2. **Heavy font load** — 10 Google Font families are loaded; only 4 are used. Trim unused weights/families.
3. **No token scale** — Spacing is ad-hoc (Tailwind utilities + SCSS variables). Consider adopting a 4px/8px grid or Tailwind spacing scale.
4. **Non-standard Tailwind** — `shadow-4xl/10` in `CardSection` is not valid Tailwind v4 syntax.
5. **Button accessibility** — `Button.tsx` uses `window.location.href` inside `onClick`; should be `<a>` or `<button>` with proper semantics.
6. **Missing reduced-motion** — No `prefers-reduced-motion` guards on GSAP, Framer Motion, or shaders.

---

## File Map

| Component | File |
|-----------|------|
| Layout | `sites/quine/astro/src/layouts/QuineLayout.astro` |
| Global styles | `sites/quine/astro/src/styles/global.css` |
| Header | `sites/quine/astro/src/components/QuineSiteHeader.astro` |
| Page frame | `sites/quine/astro/src/components/PageFrame.astro` |
| Hero letters | `sites/quine/astro/src/components/HeroLetters/HeroLettersBig.tsx` |
| Section header (large) | `sites/quine/astro/src/components/SectionHeaderText.astro` |
| Section header (small) | `sites/quine/astro/src/components/SectionHeaderTextSmaller.astro` |
| Section body | `sites/quine/astro/src/components/SectionBodyText.astro` |
| Section caption | `sites/quine/astro/src/components/SectionCaptionText.astro` |
| Button | `sites/quine/astro/src/components/Button/Button.tsx` + `ButtonPure.tsx` |
| Works | `sites/quine/astro/src/components/WorksSection.tsx` |
| Services | `sites/quine/astro/src/components/ServicesSection.astro` |
| Contact | `sites/quine/astro/src/components/ContactsSection.astro` |
| Scramble text | `sites/quine/astro/src/components/ScrambleIn/ScrambleIn.tsx` + `ScrambleInWrapper.tsx` |
| Scroll smoother | `sites/quine/astro/src/components/ScrollSmoother/ScrollSmootherInit.tsx` |
| PixelBlast shader | `sites/quine/astro/src/components/PixelBlast.tsx` |
| Brand letters | `sites/quine/astro/src/components/PageWidthBrandLetters.astro` |
