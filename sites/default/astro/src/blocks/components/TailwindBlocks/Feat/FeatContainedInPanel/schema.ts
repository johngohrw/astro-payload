import type { Block } from "payload";

export const featContainedInPanelSchema: Block = {
  slug: "featContainedInPanel",
  labels: { singular: "Feat Contained In Panel", plural: "Feat Contained In Panels" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Boost your productivity. Start using our app today." },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla. Ac euismod vel sit maecenas." },
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
