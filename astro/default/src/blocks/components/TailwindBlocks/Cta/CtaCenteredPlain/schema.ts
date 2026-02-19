import type { Block } from "payload";

export const ctaCenteredPlainSchema: Block = {
  slug: "ctaCenteredPlain",
  labels: { singular: "Cta Centered Plain", plural: "Cta Centered Plains" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Boost your productivity. Start using our app today." },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
    },
    { name: "primaryCtaLabel", type: "text", label: "Primary CTA Label", defaultValue: "Get started" },
    { name: "primaryCtaHref", type: "text", label: "Primary CTA Href", defaultValue: "#" },
    { name: "secondaryCtaLabel", type: "text", label: "Secondary CTA Label", defaultValue: "Learn more" },
    { name: "secondaryCtaHref", type: "text", label: "Secondary CTA Href", defaultValue: "#" },
  ],
};
