# Example: HeroSimpleCentered

Input: raw HTML with mock data + component name `HeroSimpleCentered`
Output: `HeroSimpleCentered.zip` containing 4 files.

---

## Component.astro

```astro
---
export interface CtaLink {
  label: string;
  href: string;
}

export interface Props {
  announcementText?: string;
  announcementHref?: string;
  heading?: string;
  description?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
}

const {
  announcementText = "Announcing our next round of funding.",
  announcementHref = "#",
  heading = "Data to enrich your online business",
  description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  primaryCta = { label: "Get started", href: "#" },
  secondaryCta = { label: "Learn more", href: "#" },
} = Astro.props;
---

<div class="bg-white dark:bg-gray-900">
  <!-- ... full template with {propName} bindings ... -->
</div>
```

---

## schema.ts

Note: export name is `<camelCaseSlug>Schema`, not `Block`.

```typescript
import type { Block } from "payload";

export const heroSimpleCenteredSchema: Block = {
  slug: "heroSimpleCentered",
  labels: {
    singular: "Hero Simple Centered",
    plural: "Heroes Simple Centered",
  },
  fields: [
    {
      name: "announcement",
      type: "group",
      label: "Announcement",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Announcement Text",
          defaultValue: "Announcing our next round of funding.",
        },
        {
          name: "href",
          type: "text",
          label: "Announcement Link",
          defaultValue: "#",
        },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Data to enrich your online business",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Get started" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Learn more" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
  ],
};
```

---

## Render.astro

Note: imports from `@/blocks/blockTypes` (no underscore).

```astro
---
import type { BlockTypeOf } from "@/blocks/blockTypes";
import Component from "./Component.astro";

const { block } = Astro.props;

const blockProps: BlockTypeOf<"heroSimpleCentered"> = block;

const { announcement, heading, description, primaryCta, secondaryCta } = blockProps;

const remappedProps = {
  announcementText: announcement?.text ?? undefined,
  announcementHref: announcement?.href ?? undefined,
  heading: heading ?? undefined,
  description: description ?? undefined,
  primaryCta: primaryCta
    ? { label: primaryCta.label, href: primaryCta.href }
    : undefined,
  secondaryCta: secondaryCta
    ? { label: secondaryCta.label, href: secondaryCta.href }
    : undefined,
};
---

<Component {...remappedProps} />
```

---

## index.ts

```typescript
export { default as HeroSimpleCenteredRender } from "./Render.astro";
```

---

## Key decisions in this example

- `announcementText` + `announcementHref` → collapsed into `announcement` group
  with `text` + `href` sub-fields (Render remaps back to flat props).
- `description` → `textarea` (long default value).
- `primaryCta` / `secondaryCta` → `group` matching the `CtaLink` interface.
- All props optional → no `required: true` at top level; CTA sub-fields are
  `required: true` since they're structural within the group.
- Render.astro imports `BlockTypeOf` from `@/blocks/blockTypes` (no underscore).
- Labels are derived directly from slug: `heroSimpleCentered` → `"Hero Simple Centered"`.
