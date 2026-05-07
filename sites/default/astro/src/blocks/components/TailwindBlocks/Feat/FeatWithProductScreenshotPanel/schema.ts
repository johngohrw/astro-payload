import type { Block } from "payload";

export const featWithProductScreenshotPanelSchema: Block = {
  slug: "featWithProductScreenshotPanel",
  labels: { singular: "Feat With Product Screenshot Panel", plural: "Feat With Product Screenshot Panels" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "A better workflow" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." },
    {
      name: "features", type: "array", label: "Features",
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
        { name: "iconSvg", type: "textarea", label: "Icon SVG", required: true },
      ],
    },
    { name: "screenshot", type: "upload", label: "Screenshot", relationTo: "media" },
  ],
};
