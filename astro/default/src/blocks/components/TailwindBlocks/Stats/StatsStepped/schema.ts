import type { Block } from "payload";

export const statsSteppedSchema: Block = {
  slug: "statsStepped",
  labels: {
    singular: "Stats Stepped",
    plural: "Stats Steppeds",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "We approach work as a place to make the world better",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.",
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        {
          value: "250k",
          label: "Users on the platform",
          description: "Vel labore deleniti veniam consequuntur sunt nobis.",
        },
        {
          value: "$8.9 billion",
          label: "We're proud that our customers have made over $8 billion in total revenue.",
          description: "Eu duis porta aliquam ornare. Elementum eget magna egestas.",
        },
        {
          value: "401,093",
          label: "Transactions this year",
          description: "Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.",
        },
      ],
      fields: [
        { name: "value", type: "text", label: "Value", required: true },
        { name: "label", type: "text", label: "Label", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
  ],
};
