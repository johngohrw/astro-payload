import type { Block } from "payload";

export const featCentered2x2GridSchema: Block = {
  slug: "featCentered2x2Grid",
  labels: { singular: "Feat Centered 2x2 Grid", plural: "Feat Centered 2x2 Grids" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Everything you need to deploy your app" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc." },
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
