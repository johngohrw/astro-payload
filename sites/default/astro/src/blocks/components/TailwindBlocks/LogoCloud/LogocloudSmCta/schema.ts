import type { Block } from "payload";

export const logocloudSmCtaSchema: Block = {
  slug: "logocloudSmCta",
  labels: {
    singular: "Logocloud Sm Cta",
    plural: "Logocloud Sm Ctas",
  },
  fields: [
    {
      name: "logos",
      type: "array",
      label: "Logos",
      fields: [
        { name: "lightSrc", type: "upload", label: "Logo (Light Mode)", relationTo: "media" },
        { name: "darkSrc", type: "upload", label: "Logo (Dark Mode)", relationTo: "media" },
        { name: "alt", type: "text", label: "Alt Text", required: true },
      ],
    },
    {
      name: "ctaText",
      type: "text",
      label: "CTA Text",
      defaultValue: "Over 2500 companies use our tools to better their business.",
    },
    {
      name: "ctaLinkLabel",
      type: "text",
      label: "CTA Link Label",
      defaultValue: "Read our customer stories",
    },
    {
      name: "ctaLinkHref",
      type: "text",
      label: "CTA Link URL",
      defaultValue: "#",
    },
  ],
};
