import type { Block } from "payload";

export const logocloudGridSchema: Block = {
  slug: "logocloudGrid",
  labels: {
    singular: "Logocloud Grid",
    plural: "Logocloud Grids",
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
  ],
};
