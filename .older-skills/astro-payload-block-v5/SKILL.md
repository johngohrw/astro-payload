---
name: astro-payload-block
description: >
  Converts raw HTML/Tailwind markup (with a component name) into a fully
  structured Astro + Payload CMS block. Use this skill whenever the user shares
  HTML or an Astro component and asks for a Payload block, schema, CMS
  integration, or anything related to mapping content to Payload fields. Also
  trigger when the user mentions "block schema", "Payload CMS", "CMS-friendly",
  "render component", or provides a component name alongside HTML markup.
---

# Astro → Payload CMS Block Skill

Given a component name and raw HTML (which may be messy or contain inline mock
data), produce four output files:

1. `Component.astro` — clean, prop-driven Astro component
2. `schema.ts` — Payload CMS `Block` schema
3. `Render.astro` — Payload block → Component.astro adapter
4. `index.ts` — barrel export

**Single component:** place all four files in a `<ComponentNamePascalCase>/` folder
and zip it as `<ComponentNamePascalCase>.zip`.

**Multiple components (e.g. from a zip input):** place each component's four files
in its own `<ComponentNamePascalCase>/` subfolder. Also generate `renderers.ts`
and `schemas.ts` at the pack root. Collect everything into one pack directory and
zip it as a single zip file (e.g. `Pack.zip`). Never zip each component individually.

---

## Workflow

1. **Parse the HTML input** — identify all hardcoded/mock values (text, URLs,
   labels, SVGs, etc.) that should become props.
2. **Derive a Props interface** — group related flat values into sub-interfaces
   where it improves clarity (e.g. `label`+`href` pairs → `CtaLink`).
3. **Shorten the slug** — see [Slug Naming](#slug-naming).
4. **Generate `Component.astro`** — see [Component.astro](#componentastro).
5. **Generate `schema.ts`** — see [schema.ts](#schemats).
6. **Generate `Render.astro`** — see [Renderastro](#renderastro).
7. **Generate `index.ts`** — see [index.ts](#indexts).
8. **Output** — see [Output & Zipping](#output--zipping).

---

## Slug Naming

Before generating any files, derive a concise slug from the component name:

- The camelCase slug **must not exceed 36 characters or 6 words**.
- If the raw name is too long, apply these strategies in order until it fits:
  1. **Remove filler words** — drop articles, prepositions, and conjunctions
     (e.g. `with`, `and`, `the`, `for`, `of`).
  2. **Use standard abbreviations** — e.g. `Centered` → `Ctr`, `Simple` → `Sm`,
     `Section` → `Sec`, `Feature` → `Feat`, `Navigation` → `Nav`,
     `Description` → `Desc`, `Introduction` → `Intro`, `Button` → `Btn`,
     `Image` → `Img`, `Content` → `Cont`, `Background` → `Bg`,
     `Container` → `Ctnr`, `Component` → `Comp`.
  3. **Drop obvious/redundant words** — e.g. if the component is clearly a hero,
     dropping "Block" or "Component" suffix is fine.
  4. **Rephrase** — choose a shorter synonym for a long word if all else fails.
- All derived names (PascalCase folder, export names, etc.) must use this
  shortened slug consistently.

### Slug examples

| Original name                            | Shortened slug           |
| ---------------------------------------- | ------------------------ |
| `HeroSimpleCenteredWithAnnouncement`     | `heroSmCtrAnnouncement`  |
| `FeatureSectionWithThreeColumnsAndIcons` | `featThreeColIcons`      |
| `TestimonialSectionWithLargeAvatar`      | `testimonialLargeAvatar` |
| `NavigationHeaderWithDropdownMenus`      | `navHeaderDropdown`      |
| `PricingTableWithMonthlyAndYearlyToggle` | `pricingTableToggle`     |

---

## Component.astro

Convert the raw HTML into a clean Astro component:

- Extract all mock/hardcoded values as typed props with sensible defaults.
- Export all necessary sub-interfaces (e.g. `CtaLink`, `SupportItem`) above `Props`.
- Use `Astro.props` destructuring with inline defaults.
- Replace hardcoded content in the template with `{propName}` expressions.
- For arrays of objects, use `.map()` in the template.
- For raw SVG strings, use `<Fragment set:html={item.iconSvg} />`.
- Keep all Tailwind classes intact — do not modify styling.
- All props should be optional (`?`) with default values unless they are
  structurally required (e.g. required fields inside an array item).
- **Replace all mock image URLs** — any hardcoded image path or URL (including
  relative paths like `/assets/images/foo.jpg`, absolute URLs, placeholder
  paths, etc.) must be replaced with `https://picsum.photos/300` as the default
  value for that prop. Never preserve original image strings as defaults.

### Component.astro template

```astro
---
export interface SubInterface {
  field: string;
  // ...
}

export interface Props {
  propName?: string;
  // ...
}

const {
  propName = "Default value",
  imageSrc = "https://picsum.photos/300",
  // ...
} = Astro.props;
---

<!-- HTML template with {propName} bindings -->
```

---

## schema.ts

Generate a Payload `Block` schema from the `Props` interface.

### Naming

- Block `slug` = shortened component name in **camelCase** (see [Slug Naming](#slug-naming)).
- Export constant = `<slugCamelCase>Schema` (e.g. `heroSmCtrSchema`).
- `labels.singular` = slug converted to Title Case with spaces.
- `labels.plural` = singular with proper pluralization of the last word.

### Field mapping

| Prop type                                                             | Payload field type                                                  |
| --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `string` (short)                                                      | `text`                                                              |
| `string` (description/body/content/caption/bio, or >80 chars default) | `textarea`                                                          |
| `string` (raw SVG/HTML)                                               | `textarea`                                                          |
| `boolean`                                                             | `checkbox`                                                          |
| `number`                                                              | `number`                                                            |
| `object` / sub-interface                                              | `group`                                                             |
| `object[]` / array of sub-interface                                   | `array`                                                             |
| `string[]`                                                            | `array` with a single `text` field                                  |
| image URL string                                                      | `upload` with `relationTo: 'media'` (always use "media" collection) |
| string union / enum                                                   | `select` with options                                               |

- Optional props → no `required: true`.
- Props with defaults → add `defaultValue` matching the Astro default, **except for:**
  - `upload` fields (omit `defaultValue`)
  - Arrays containing `upload` fields (omit `defaultValue` to avoid Payload CMS errors on form pre-population)
- Required sub-fields (inside `array` or `group`) → add `required: true`.
- Collapse obviously paired flat props into a `group`
  (e.g. `announcementText` + `announcementHref` → `announcement.text` + `announcement.href`).

### schema.ts template

```typescript
import type { Block } from "payload";

export const <slugCamelCase>Schema: Block = {
  slug: "<slugCamelCase>",
  labels: {
    singular: "<Human Readable>",
    plural: "<Human Readable Plural>",
  },
  fields: [
    // ...
  ],
};
```

---

## Render.astro

Bridge between Payload's block API response and `Component.astro`.

- Imports `BlockTypeOf` from `@/blocks/blockTypes` (note: no underscore prefix).
- Types `block` as `BlockTypeOf<"slug">`.
- Destructures all top-level fields from `blockProps`.
- Remaps Payload field names → Component prop names where they differ.
- Ensures no runtime errors when props are absent (all optional).

### Media field type handling

When dealing with `upload` fields that relate to the `media` collection, Payload returns either:

- A `number` (the media ID) when the relation is not populated
- A `Media` object with structure: `{ id, url, alt, filename, mimeType, ... }`

The `url` property can also be `null`, so always check both the object and the url:

```astro
const imageUrl = typeof image === "object" && image !== null ? image.url ?? undefined : undefined;
```

Or for array of media items:

```astro
items: items?.map((item) => ({
  imageSrc: typeof item.image === "object" && item.image !== null ? item.image.url ?? undefined : undefined,
  imageAlt: typeof item.image === "object" && item.image !== null ? item.image.alt ?? undefined : undefined,
})),
```

This ensures the field type is `string | undefined` instead of `string | null | undefined`.

### Remapping rules

- `null` → `undefined`: always use `?? undefined` on all fields to handle both null and undefined.
- Grouped fields (e.g. `announcement.text`) → flat props (e.g. `announcementText`).
- Optional groups → ternary guard with null check:
  `groupField && groupField !== null ? { label: groupField.label ?? undefined, href: groupField.href ?? undefined } : undefined`
- Arrays → `.map()` over items, using `?? undefined` on all sub-fields to handle null values.
- All field accesses must handle null: Payload can return `string | null | undefined` for many fields.

### Render.astro template

```astro
---
import type { BlockTypeOf } from "@/blocks/blockTypes";
import Component from "./Component.astro";

const { block } = Astro.props;

const blockProps: BlockTypeOf<"<slug>"> = block;

const { field1, field2, items } = blockProps;

const remappedProps = {
  propName: field1 ?? undefined,
  // ...
  items: items?.map((item) => ({
    // Always use ?? undefined to handle null values from Payload
    field: item.field ?? undefined,
  })),
};
---

<Component {...remappedProps} />
```

---

## index.ts

Simple barrel export. Export name = `<PascalCaseName>Render`.

```typescript
export { default as <PascalCaseName>Render } from "./Render.astro";
```

---

## Output & Zipping

### Single component

```bash
cd /tmp/<PascalCaseName> && zip -r /tmp/<PascalCaseName>.zip .
cp /tmp/<PascalCaseName>.zip /mnt/user-data/outputs/
```

### Multiple components (e.g. input is a zip of HTML files)

Place each component in its own subfolder inside a shared pack directory. Also
generate two aggregate files at the pack root — `renderers.ts` and `schemas.ts`
— then zip the entire pack as one file:

```bash
mkdir -p /tmp/Pack/BentoTwoRowGrid /tmp/Pack/BentoThreeColGrid
# ... write files into each subfolder ...
# ... write /tmp/Pack/renderers.ts and /tmp/Pack/schemas.ts ...
cd /tmp/Pack && zip -r /tmp/Pack.zip .
cp /tmp/Pack.zip /mnt/user-data/outputs/
```

Never produce individual per-component zips when processing multiple components.

#### renderers.ts

Place at the pack root. Imports each component's `Render.astro` default export
via its `index.ts` barrel, then assembles a `renderers` map keyed by slug:

```typescript
import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { <PascalCaseName>Render } from "./<PascalCaseName>";
// ... one import per component

export const renderers = {
  <slugCamelCase>: <PascalCaseName>Render,
  // ... one entry per component, keys sorted alphabetically
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
```

#### schemas.ts

Place at the pack root. Imports each component's schema export directly from its
`schema.ts` file, then assembles a `schemas` map keyed by slug:

```typescript
import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { <slugCamelCase>Schema } from "./<PascalCaseName>/schema";
// ... one import per component

export const schemas = {
  <slugCamelCase>: <slugCamelCase>Schema,
  // ... one entry per component, keys sorted alphabetically
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
```

Then present the final zip(s) with `present_files`.

---

## Response length for multiple components

When processing multiple components in one request, keep the response succinct.
A brief one-line note per component (slug + key design decision) is sufficient.
No explanation at all is also acceptable. Avoid lengthy per-component breakdowns.

---

## Edge Cases

- **Raw SVG strings** — use `textarea` in schema; use `<Fragment set:html={...} />` in Component.
- **Image URLs** — always use `upload` with `relationTo: 'media'`; omit `defaultValue` for upload fields and arrays containing upload fields (to prevent form pre-population errors). In `Component.astro`, replace all mock/relative/hardcoded image src values with `https://picsum.photos/300` as the prop default.
- **Media type checking** — in Render.astro, always check `typeof field === "object" && field !== null` before accessing `.url`, and use `?? undefined` on the url to handle null: `field.url ?? undefined`.
- **Null value handling** — Payload can return `string | null | undefined` for many fields. Always use `?? undefined` on field accesses in Render.astro, and check `field && field !== null` before accessing object properties.
- **Arrays without uploads** — Keep defaultValue for arrays that don't contain upload fields (e.g., arrays of text items, stat objects).
- **Enums** — use `select` with the observed values as options.
- **Rich text** — if the prop name suggests HTML content, use `richText` and note it.
- **All required props** — omit `defaultValue`, add `required: true`.
- **Improperly structured HTML** — clean it up structurally while preserving all classes and content.
- **Labels from slug** — convert shortened camelCase slug to Title Case for singular label, then properly pluralize the last word for plural label.
- **Slug length** — always apply the [Slug Naming](#slug-naming) rules before generating any files. A slug over 36 characters or 6 words is never acceptable.

---

## Reference

See `references/example.md` for a full worked example.
