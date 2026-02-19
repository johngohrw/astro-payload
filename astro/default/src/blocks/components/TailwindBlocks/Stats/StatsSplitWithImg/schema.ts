import type { Block } from "payload";

export const statsSplitWithImgSchema: Block = {
  slug: "statsSplitWithImg",
  labels: { singular: "Stats Split With Img", plural: "Stats Split With Imgs" },
  fields: [
    { name: "image", type: "upload", relationTo: "media", label: "Image" },
    { name: "imageAlt", type: "text", label: "Image Alt" },
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Our track record" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Trusted by thousands of creators worldwide" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Creators on the platform", value: "8,000+" },
        { label: "Flat platform fee", value: "3%" },
        { label: "Uptime guarantee", value: "99.9%" },
        { label: "Paid out to creators", value: "$70M" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
