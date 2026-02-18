import type { Block } from "payload";

export const statsSimpleGridSchema: Block = {
  slug: "statsSimpleGrid",
  labels: {
    singular: "Stats Simple Grid",
    plural: "Stats Simple Grids",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Trusted by creators worldwide",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Lorem ipsum dolor sit amet consect adipisicing possimus.",
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
