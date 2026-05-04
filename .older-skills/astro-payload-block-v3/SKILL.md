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
data), produce four output files packaged as a zip:

1. `Component.astro` — clean, prop-driven Astro component
2. `schema.ts` — Payload CMS `Block` schema
3. `Render.astro` — Payload block → Component.astro adapter
4. `index.ts` — barrel export

Always zip all four files as `<ComponentNamePascalCase>.zip`.

---

## Workflow

1. **Parse the HTML input** — identify all hardcoded/mock values (text, URLs,
   labels, SVGs, etc.) that should become props.
2. **Derive a Props interface** — group related flat values into sub-interfaces
   where it improves clarity (e.g. `label`+`href` pairs → `CtaLink`).
3. **Generate `Component.astro`** — see [Component.astro](#componentastro).
4. **Generate `schema.ts`** — see [schema.ts](#schemats).
5. **Generate `Render.astro`** — see [Renderastro](#renderastro).
6. **Generate `index.ts`** — see [index.ts](#indexts).
7. **Zip** all four files into `<PascalCaseName>.zip`.

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
  // ...
} = Astro.props;
---

<!-- HTML template with {propName} bindings -->
```

---

## schema.ts

Generate a Payload `Block` schema from the `Props` interface.

### Naming

- Block `slug` = component name in **camelCase** (e.g. `heroSimpleCentered`).
- Export constant = `<slugCamelCase>Schema` (e.g. `heroSimpleCenteredSchema`).
- `labels.singular` = slug converted to Title Case with spaces (e.g. `"Hero Simple Centered"`).
- `labels.plural` = singular with proper pluralization of the last word (e.g. `"Heroes Simple Centered"` if last word is "Hero", otherwise add "s").

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

## Zipping

After generating all four files, zip them:

```bash
cd /tmp/<PascalCaseName> && zip -r /home/claude/<PascalCaseName>.zip .
```

Then copy to `/mnt/user-data/outputs/` and present with `present_files`.

---

## Edge Cases

- **Raw SVG strings** — use `textarea` in schema; use `<Fragment set:html={...} />` in Component.
- **Image URLs** — always use `upload` with `relationTo: 'media'`; omit `defaultValue` for upload fields and arrays containing upload fields (to prevent form pre-population errors).
- **Media type checking** — in Render.astro, always check `typeof field === "object" && field !== null` before accessing `.url`, and use `?? undefined` on the url to handle null: `field.url ?? undefined`.
- **Null value handling** — Payload can return `string | null | undefined` for many fields. Always use `?? undefined` on field accesses in Render.astro, and check `field && field !== null` before accessing object properties.
- **Arrays without uploads** — Keep defaultValue for arrays that don't contain upload fields (e.g., arrays of text items, stat objects).
- **Enums** — use `select` with the observed values as options.
- **Rich text** — if the prop name suggests HTML content, use `richText` and note it.
- **All required props** — omit `defaultValue`, add `required: true`.
- **Improperly structured HTML** — clean it up structurally while preserving all classes and content.
- **Labels from slug** — convert camelCase slug to Title Case for singular label (e.g. `heroSimpleCentered` → `"Hero Simple Centered"`), then properly pluralize the last word for plural label.

---

## Reference

See `references/example.md` for a full worked example.
