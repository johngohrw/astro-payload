import type { Block } from "payload";

export const featWithLargeScreenshotSchema: Block = {
  slug: "featWithLargeScreenshot",
  labels: { singular: "Feat With Large Screenshot", plural: "Feat With Large Screenshots" },
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
    { name: "screenshot", type: "upload", label: "Screenshot", relationTo: "media" },
  ],
};
