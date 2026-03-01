import type { Block } from "payload";

export const ctaSimpleStackedSchema: Block = {
  slug: "ctaSimpleStacked",
  labels: {
    singular: "Cta Simple Stacked",
    plural: "Cta Simple Stackeds",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Boost your productivity. Start using our app today.",
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
