import type { Block } from "payload";

export const featSimple3x2GridSchema: Block = {
  slug: "featSimple3x2Grid",
  labels: { singular: "Feat Simple 3x2 Grid", plural: "Feat Simple 3x2 Grids" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Everything you need" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "No server? No problem." },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis." },
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
