import type { Block } from "payload";

export const statsWithBgImageSchema: Block = {
  slug: "statsWithBgImage",
  labels: {
    singular: "Stats With Bg Image",
    plural: "Stats With Bg Images",
  },
  fields: [
    {
      name: "lightImage",
      type: "upload",
      label: "Light Mode Background Image",
      relationTo: "media",
    },
    {
      name: "darkImage",
      type: "upload",
      label: "Dark Mode Background Image",
      relationTo: "media",
    },
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow",
      defaultValue: "Our track record",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Trusted by thousands of creators worldwide",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.",
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
