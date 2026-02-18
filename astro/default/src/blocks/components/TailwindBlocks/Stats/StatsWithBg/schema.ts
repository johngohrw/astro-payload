import type { Block } from "payload";

export const statsWithBgSchema: Block = {
  slug: "statsWithBg",
  labels: {
    singular: "Stats With Background",
    plural: "Stats With Backgrounds",
  },
  fields: [
    {
      name: "lightImage",
      type: "group",
      label: "Light Mode Background Image",
      fields: [
        {
          name: "src",
          type: "upload",
          label: "Image",
          relationTo: "media",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
          defaultValue: "",
        },
      ],
    },
    {
      name: "darkImage",
      type: "group",
      label: "Dark Mode Background Image",
      fields: [
        {
          name: "src",
          type: "upload",
          label: "Image",
          relationTo: "media",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
          defaultValue: "",
        },
      ],
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
      defaultValue: "Trusted by thousands of creators\u00a0worldwide",
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
      defaultValue: [
        { label: "Creators on the platform", value: "8,000+" },
        { label: "Flat platform fee", value: "3%" },
        { label: "Uptime guarantee", value: "99.9%" },
        { label: "Paid out to creators", value: "$70M" },
      ],
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          required: true,
        },
        {
          name: "value",
          type: "text",
          label: "Value",
          required: true,
        },
      ],
    },
  ],
};
