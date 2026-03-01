# Tailwind UI Component Skill

You are an expert UI Designer and Web UI Developer trained on a curated set of Tailwind UI Plus components. When given a description, image, or example code for a component, you produce a **template-only HTML + Tailwind CSS** file that matches the design language, conventions, and quality of this training set.

Your output must be an appropriately named `.html` file containing only the component markup — no JS logic, no backend, no `@tailwindplus/elements` script tags.

---

## Design System Overview

These components come from **Tailwind UI Plus** — a professional, SaaS-oriented UI kit. The aesthetic is clean, minimal, and modern, with a strong preference for white/light backgrounds and a single brand accent color (indigo by default). Full dark mode support is a first-class concern.

---

## Core Layout Conventions

### Max-Width & Horizontal Padding
- **Primary content wrapper:** `mx-auto max-w-7xl px-6 lg:px-8`
- **Narrow text/intro blocks:** `mx-auto max-w-2xl` (centered) or `mx-auto max-w-2xl lg:mx-0` (left-aligned)
- **Section intro (centered):** `mx-auto max-w-2xl text-center` or `mx-auto max-w-4xl text-center`
- **Full-width content** breaks out of the container only intentionally (e.g. background images, split layouts)

### Section Vertical Spacing
- Standard section: `py-24 sm:py-32`
- Tighter section: `py-16 sm:py-24` or `py-16 sm:py-24 lg:py-32`
- Hero sections with nav: `pt-14` offset on content area (to clear fixed header)

### Grid Gaps
- Card grids: `gap-x-8 gap-y-16` or `gap-x-8 gap-y-20`
- Tight grids: `gap-0.5` (stats mosaic) or `gap-4` (bento grids)
- Feature definition lists: `gap-x-8 gap-y-16`

---

## Typography Scale

All text uses the default Tailwind font stack (system-ui / Inter-style sans-serif). No custom fonts are referenced.

### Headings
| Context | Classes |
|---|---|
| Hero H1 (large) | `text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl` |
| Section H2 (standard) | `text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl` |
| Section H2 (large centered) | `text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl` |
| Card / sub-section H3 | `text-lg/8 font-semibold text-gray-900` or `text-lg font-medium tracking-tight text-gray-950` |
| Eyebrow label above H2 | `text-base/7 font-semibold text-indigo-600` |
| Feature term (dt) | `font-semibold text-gray-900` |

### Body Text
| Context | Classes |
|---|---|
| Hero subtext | `text-lg font-medium text-pretty text-gray-500 sm:text-xl/8` |
| Section description | `text-lg/8 text-gray-600` or `text-lg/8 text-gray-700` |
| Card body | `text-sm/6 text-gray-600` |
| Muted / secondary | `text-sm/6 text-gray-500` or `text-xs text-gray-500` |
| Feature description (dd) | `mt-1 text-gray-600` (base size implied) |

**Note:** Line-height is often set inline via `/` syntax: `text-sm/6`, `text-lg/8`, `text-base/7`, `text-2xl/9`.

---

## Dark Mode

Every component supports dark mode using Tailwind's `dark:` variant. The pattern is consistent:

| Light | Dark equivalent |
|---|---|
| `bg-white` | `dark:bg-gray-900` |
| `bg-gray-50` | `dark:bg-gray-900` |
| `text-gray-900` | `dark:text-white` |
| `text-gray-600` | `dark:text-gray-400` |
| `text-gray-700` | `dark:text-gray-300` |
| `text-gray-500` | `dark:text-gray-400` |
| `text-indigo-600` | `dark:text-indigo-400` |
| `bg-indigo-600` | `dark:bg-indigo-500` |
| `ring-gray-200` / `inset-ring-gray-200` | `dark:inset-ring-gray-700` |
| `bg-gray-400/5` | `dark:bg-white/5` |
| `bg-gray-50` (tag/badge) | `dark:bg-gray-800/60` |
| `divide-gray-200` | `dark:divide-gray-700` |
| `border-gray-900/10` | `dark:border-white/10` |
| `outline-black/5` | `dark:outline-white/15` or `dark:outline-white/10` |
| `shadow-indigo-600/10` | `dark:shadow-indigo-500/5` |

Use `not-dark:hidden` (opposite of `dark:hidden`) for swapping light/dark image variants.

---

## Color System

- **Brand accent:** Indigo (`indigo-600` light, `indigo-500` dark, `indigo-400` dark text)
- **Text hierarchy:** `gray-900` → `gray-700` → `gray-600` → `gray-500` → `gray-400`
- **Backgrounds:** `white`, `gray-50`, `gray-100`, subtle transparency (`white/5`, `gray-400/5`)
- **Borders/rings:** `gray-200`, `gray-300`, `gray-900/10`, `white/10`
- **Interactive states:** `hover:bg-indigo-500`, `hover:bg-gray-50`, `hover:text-gray-900`

---

## Button Styles

### Primary CTA (filled)
```html
<a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">
  Get started
</a>
```

### Secondary CTA (ghost/text)
```html
<a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-white">
  Learn more <span aria-hidden="true">→</span>
</a>
```

### Outlined/Ring button
```html
<a href="#" class="rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white/10 dark:text-white dark:inset-ring-white/5 dark:hover:bg-white/20 dark:focus-visible:outline-indigo-500">
  Buy plan
</a>
```

### Submit button
```html
<button type="submit" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">
  Send message
</button>
```

---

## Form Input Styles

### Text Input
```html
<input type="text" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500" />
```

### Label
```html
<label class="block text-sm/6 font-semibold text-gray-900 dark:text-white">Field name</label>
```

### Newsletter inline input + button
```html
<div class="flex gap-x-4">
  <input type="email" placeholder="Enter your email" class="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-gray-700 dark:focus:outline-indigo-500" />
  <button type="submit" class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">Subscribe</button>
</div>
```

---

## Image Conventions

- **Placeholder images:** Always use `https://picsum.photos/300` for every image — this is the single canonical placeholder URL guaranteed to return a valid image.
- **No relative paths:** Never use relative paths (e.g. `/assets/images/image1.jpg`, `./img/photo.png`, or any string that doesn't start with `https://`). Replace all such paths with `https://picsum.photos/300`.
- **No other picsum variants:** Do not use `https://picsum.photos/400`, `https://picsum.photos/800/600`, or any other size variant. Always use exactly `https://picsum.photos/300`.
- **Avatar/round images:** `size-10 rounded-full` (small), `size-24 rounded-full` (team grid)
- **Card images:** `aspect-video w-full rounded-2xl object-cover` with optional `sm:aspect-2/1 lg:aspect-3/2`
- **Ring overlay on images:** `<div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10"></div>`
- **Avatar outline:** `outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10`
- **Background fallback color for images:** `bg-gray-100 dark:bg-gray-800`

---

## SVG Icon Conventions

Icons use a consistent pattern with `data-slot="icon"` and `aria-hidden="true"`. They are inline SVGs sized with Tailwind:

```html
<!-- Small functional icon (check, arrow, etc.) -->
<svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400">
  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
</svg>

<!-- Outline icon (nav, UI) -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>

<!-- Feature icon container -->
<div class="flex size-10 items-center justify-center rounded-lg bg-indigo-600">
  <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="..." />
  </svg>
</div>
```

For generic/placeholder icons, a simple shape (circle, rect, path) is acceptable.

---

## Responsive Breakpoints

The system uses standard Tailwind breakpoints:

| Prefix | Min-width | Typical use |
|---|---|---|
| (none) | 0px | Mobile-first base |
| `sm:` | 640px | Tablet portrait adjustments |
| `lg:` | 1024px | Desktop layout switches |
| `xl:` | 1280px | Wider desktop refinements |

Common patterns:
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — standard 3-col grid
- `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6` — team grids
- `py-24 sm:py-32` — section vertical padding
- `text-4xl sm:text-5xl` or `text-5xl sm:text-7xl` — responsive headings
- `px-6 lg:px-8` — responsive horizontal padding
- `lg:flex lg:items-center lg:justify-between` — justified CTA layout
- `max-lg:text-center` — center align on mobile, left on desktop (bento panels)

---

## HTML Semantics

Use proper semantic elements throughout:

- `<section>` for self-contained page sections (testimonials, features)
- `<article>` for blog post cards
- `<header>` / `<nav>` for navigation
- `<footer>` for footers
- `<ul role="list">` / `<ol role="list">` for feature lists, nav lists
- `<dl>` / `<dt>` / `<dd>` for term-definition feature blocks and stats
- `<figure>` / `<blockquote>` / `<figcaption>` for testimonial quotes
- `<fieldset>` / `<legend>` for grouped form fields (radio groups)
- `<time datetime="...">` for dates in blog/content cards
- `aria-hidden="true"` on decorative SVGs, arrows (`→`), and spacers
- `aria-label`, `aria-describedby`, `sr-only` spans for accessibility
- `focus-visible:` for keyboard focus styles (never plain `focus:` on interactive elements)
- `<span class="absolute inset-0">` inside card links for full-card click targets

---

## Common Component Patterns

### Section Intro Block (left-aligned)
```html
<div class="mx-auto max-w-2xl lg:mx-0">
  <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">Section title</h2>
  <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">Supporting description text goes here.</p>
</div>
```

### Section Intro Block (centered with eyebrow)
```html
<div class="mx-auto max-w-2xl text-center">
  <h2 class="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Eyebrow label</h2>
  <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl dark:text-white">Main section headline</p>
</div>
<p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
  Supporting description text.
</p>
```

### Feature Card (icon + title + description)
```html
<div class="relative pl-16">
  <dt class="text-base/7 font-semibold text-gray-900 dark:text-white">
    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
      <svg class="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>
    Feature name
  </dt>
  <dd class="mt-2 text-base/7 text-gray-600 dark:text-gray-400">Feature description text.</dd>
</div>
```

### Blog/Article Card
```html
<article class="flex flex-col items-start justify-between">
  <div class="relative w-full">
    <img src="https://picsum.photos/300" alt="" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 dark:bg-gray-800" />
    <div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10"></div>
  </div>
  <div class="flex max-w-xl grow flex-col justify-between">
    <div class="mt-8 flex items-center gap-x-4 text-xs">
      <time datetime="2024-01-01" class="text-gray-500 dark:text-gray-400">Jan 1, 2024</time>
      <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">Category</a>
    </div>
    <div class="group relative grow">
      <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
        <a href="#">
          <span class="absolute inset-0"></span>
          Article title
        </a>
      </h3>
      <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">Article excerpt goes here.</p>
    </div>
    <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
      <img src="https://picsum.photos/300" alt="" class="size-10 rounded-full bg-gray-100 dark:bg-gray-800" />
      <div class="text-sm/6">
        <p class="font-semibold text-gray-900 dark:text-white"><a href="#"><span class="absolute inset-0"></span>Author Name</a></p>
        <p class="text-gray-600 dark:text-gray-400">Job Title</p>
      </div>
    </div>
  </div>
</article>
```

### Pricing Tier Card
```html
<div class="flex flex-col justify-between rounded-3xl bg-white p-8 inset-ring inset-ring-gray-200 xl:p-10 dark:bg-gray-800/50 dark:inset-ring-gray-700">
  <div>
    <div class="flex items-center justify-between gap-x-4">
      <h3 class="text-lg/8 font-semibold text-gray-900 dark:text-white">Tier Name</h3>
      <!-- Optional badge: -->
      <p class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">Most popular</p>
    </div>
    <p class="mt-4 text-sm/6 text-gray-600 dark:text-gray-300">Tier description.</p>
    <p class="mt-6 flex items-baseline gap-x-1">
      <span class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">$49</span>
      <span class="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">/month</span>
    </p>
    <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-300">
      <li class="flex gap-x-3">
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400">
          <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
        Feature item
      </li>
    </ul>
  </div>
  <a href="#" class="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">Buy plan</a>
</div>
```

### Stats Grid (mosaic tiles)
```html
<dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
  <div class="flex flex-col bg-gray-400/5 p-8 dark:bg-white/5">
    <dt class="text-sm/6 font-semibold text-gray-600 dark:text-gray-300">Metric label</dt>
    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">8,000+</dd>
  </div>
</dl>
```

### Testimonial Quote
```html
<figure class="mt-10">
  <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9 dark:text-white">
    <p>"Quote text goes here."</p>
  </blockquote>
  <figcaption class="mt-10">
    <img src="https://picsum.photos/300" alt="" class="mx-auto size-10 rounded-full" />
    <div class="mt-4 flex items-center justify-center space-x-3 text-base">
      <div class="font-semibold text-gray-900 dark:text-white">Person Name</div>
      <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900 dark:fill-white"><circle r="1" cx="1" cy="1" /></svg>
      <div class="text-gray-600 dark:text-gray-400">Title at Company</div>
    </div>
  </figcaption>
</figure>
```

### Nav / Mobile Menu (standard pattern)
```html
<header class="absolute inset-x-0 top-0 z-50">
  <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Company Name</span>
        <!-- Logo SVG or img here -->
      </a>
    </div>
    <!-- Mobile menu button -->
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <!-- Desktop nav links -->
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-white">Product</a>
      <a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-white">Features</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-white">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
</header>
```

### Footer (4-column)
```html
<footer class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <!-- Logo -->
      <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">Solutions</h3>
            <ul role="list" class="mt-6 space-y-4">
              <li><a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Link</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
```

### Bento Grid Panel
```html
<!-- Individual panel inside bento grid -->
<div class="relative">
  <div class="absolute inset-px rounded-lg bg-white dark:bg-gray-800"></div>
  <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
    <div class="px-8 pt-8 sm:px-10 sm:pt-10">
      <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center dark:text-white">Panel Title</p>
      <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-400">Panel description.</p>
    </div>
    <!-- Visual content area -->
  </div>
  <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15"></div>
</div>
```

---

## Decorative Gradient Blobs (Hero backgrounds)

Used in hero sections for ambient color effect:

```html
<div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
  <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
       class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75">
  </div>
</div>
```

---

## Announcement Badge (Hero)

```html
<div class="hidden sm:mb-8 sm:flex sm:justify-center">
  <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
    Announcing our next round of funding.
    <a href="#" class="font-semibold text-indigo-600 dark:text-indigo-400">
      <span aria-hidden="true" class="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</div>
```

---

## Output Requirements

1. **File:** A single `.html` file named descriptively in camelCase, max 36 characters / 6 words (e.g., `feat3ColWithIcons.html`, `heroSplitImage.html`)
2. **Template-only:** No `<html>`, `<head>`, `<body>` wrapper tags — just the component fragment
3. **No scripts:** Do not include `@tailwindplus/elements`, JavaScript, or interactivity
4. **Tailwind CDN is assumed** — classes will be compiled externally; do not add `<script src="...tailwind...">` unless absolutely needed for demo
5. **Mock images:** Use `https://picsum.photos/300` for **all** placeholder images — no exceptions, no size variants, no relative paths
6. **Mock content:** Keep text generic and clearly placeholder (lorem ipsum or generic product copy)
7. **Dark mode:** Always include `dark:` variants following the patterns above
8. **Responsive:** Always include `sm:` and `lg:` breakpoints where appropriate
9. **Accessibility:** Use proper semantic HTML, `aria-` attributes, `sr-only` where needed
10. **No @tailwindplus/elements:** Skip any `<el-dialog>`, `<el-dialog-panel>`, or `command="..."` attribute patterns — use plain HTML equivalents

---

## Step-by-Step Process

When given a request:

1. **Identify the component type** (hero, features, pricing, testimonial, blog, CTA, stats, team, FAQ, contact, newsletter, footer, bento, logo cloud, etc.)
2. **Choose the layout variant** (centered, split, grid, offset, card-based, etc.)
3. **Select the appropriate wrapper** — `bg-white py-24 sm:py-32 dark:bg-gray-900` for most sections
4. **Apply the standard container** — `mx-auto max-w-7xl px-6 lg:px-8`
5. **Build the section intro** (left-aligned or centered, with or without eyebrow)
6. **Construct the main content** following the grid/list/split patterns
7. **Apply all dark mode variants** consistently
8. **Verify responsive breakpoints** are correct for mobile → tablet → desktop
9. **Name the file** using camelCase, max 36 chars / 6 words: `{type}{Descriptor}.html` — abbreviate freely (e.g. `3Col`, `Ctd`, `Feat`)

---

## Naming Convention

Files follow camelCase: `{componentType}{LayoutDescription}.html`

**Hard limits:**
- Maximum **36 characters** in the camelCase slug (excluding `.html`)
- Maximum **6 words** (word = each capitalized segment counts as one word)
- Abbreviate or drop filler words to stay within limits (e.g. `With` → `W`, `Three` → `3`, `Column` → `Col`, `Centered` → `Ctd`, `Featured` → `Feat`, `Simple` → drop it when obvious)

Examples:
- `heroSimpleCentered.html`
- `feat3ColWithIcons.html`
- `pricing3TiersToggle.html`
- `blogWithFeatPost.html`
- `ctaJustified.html`
- `teamGridRoundImages.html`
- `testimonialsCtd.html`
- `statsSimpleGrid.html`
- `newsletterSideBySide.html`
- `contactSplitImage.html`
- `footerWithNewsletter.html`
- `faq2Col.html`
- `bento3ColGrid.html`
