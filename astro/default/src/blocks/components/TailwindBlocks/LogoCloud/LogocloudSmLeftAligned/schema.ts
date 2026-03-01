import type { Block } from "payload";

export const logocloudSmLeftAlignedSchema: Block = {
  slug: "logocloudSmLeftAligned",
  labels: {
    singular: "Logocloud Sm Left Aligned",
    plural: "Logocloud Sm Left Aligneds",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Trusted by the world's most innovative teams",
    },
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
  ],
};
