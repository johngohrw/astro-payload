import type { Block } from "payload";

export const ctaSimpleJustifiedOnSubtleBrandSchema: Block = {
  slug: "ctaSimpleJustifiedOnSubtleBrand",
  labels: {
    singular: "Cta Simple Justified On Subtle Brand",
    plural: "Cta Simple Justified On Subtle Brands",
  },
  fields: [
    {
      name: "headingLine1",
      type: "text",
      label: "Heading Line 1",
      defaultValue: "Ready to dive in?",
    },
    {
      name: "headingLine2",
      type: "text",
      label: "Heading Line 2",
      defaultValue: "Start your free trial today.",
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
