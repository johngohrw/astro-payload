import type { Block } from "payload";

export const featOffset2x2GridSchema: Block = {
  slug: "featOffset2x2Grid",
  labels: { singular: "Feat Offset 2x2 Grid", plural: "Feat Offset 2x2 Grids" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Stay on top of customer support" },
    {
      name: "features", type: "array", label: "Features",
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
        { name: "iconSvg", type: "textarea", label: "Icon SVG", required: true },
      ],
    },
  ],
};
