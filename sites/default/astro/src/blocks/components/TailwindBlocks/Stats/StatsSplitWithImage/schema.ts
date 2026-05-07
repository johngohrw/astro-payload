import type { Block } from "payload";

export const statsSplitWithImageSchema: Block = {
  slug: "statsSplitWithImage",
  labels: {
    singular: "Stats Split With Image",
    plural: "Stats Split With Images",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      label: "Image",
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
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
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
