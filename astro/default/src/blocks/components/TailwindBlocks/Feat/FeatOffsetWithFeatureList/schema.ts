import type { Block } from "payload";

export const featOffsetWithFeatureListSchema: Block = {
  slug: "featOffsetWithFeatureList",
  labels: { singular: "Feat Offset With Feature List", plural: "Feat Offset With Feature Lists" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Everything you need" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "All-in-one platform" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." },
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
