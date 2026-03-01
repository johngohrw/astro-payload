import type { Block } from "payload";

export const logocloudSimpleSchema: Block = {
  slug: "logocloudSimple",
  labels: {
    singular: "Logocloud Simple",
    plural: "Logocloud Simples",
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
