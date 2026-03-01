import type { Block } from "payload";

export const logocloudSmHeadingSchema: Block = {
  slug: "logocloudSmHeading",
  labels: {
    singular: "Logocloud Sm Heading",
    plural: "Logocloud Sm Headings",
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
