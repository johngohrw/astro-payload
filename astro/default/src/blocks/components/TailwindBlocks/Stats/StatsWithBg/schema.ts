import type { Block } from "payload";

export const statsWithBgSchema: Block = {
  slug: "statsWithBg",
  labels: { singular: "Stats With Bg", plural: "Stats With Bgs" },
  fields: [
    { name: "lightImage", type: "upload", relationTo: "media", label: "Light Background Image" },
    { name: "lightImageAlt", type: "text", label: "Light Image Alt" },
    { name: "darkImage", type: "upload", relationTo: "media", label: "Dark Background Image" },
    { name: "darkImageAlt", type: "text", label: "Dark Image Alt" },
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Our track record" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Trusted by thousands of creators worldwide" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.",
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
