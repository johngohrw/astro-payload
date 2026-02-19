import type { Block } from "payload";

export const ctaCenteredPanelSchema: Block = {
  slug: "ctaCenteredPanel",
  labels: { singular: "Cta Centered Panel", plural: "Cta Centered Panels" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Boost your productivity today" },
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
