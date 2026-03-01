import type { Block } from "payload";

export const featWithLargeBorderedScreenshotSchema: Block = {
  slug: "featWithLargeBorderedScreenshot",
  labels: { singular: "Feat With Large Bordered Screenshot", plural: "Feat With Large Bordered Screenshots" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Everything you need to deploy your app" },
    { name: "screenshot", type: "upload", label: "Screenshot", relationTo: "media" },
  ],
};
