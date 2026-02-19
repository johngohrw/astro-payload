import type { Block } from "payload";

export const statsTwoColDescSchema: Block = {
  slug: "statsTwoColDesc",
  labels: { singular: "Stats Two Col Desc", plural: "Stats Two Col Descs" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "A better workflow" },
    {
      name: "descriptionColumns",
      type: "array",
      label: "Description Columns",
      fields: [
        {
          name: "paragraphs",
          type: "array",
          label: "Paragraphs",
          fields: [
            { name: "text", type: "textarea", label: "Paragraph Text", required: true },
          ],
        },
      ],
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Founded", value: "2021" },
        { label: "Employees", value: "37" },
        { label: "Countries", value: "12" },
        { label: "Raised", value: "$25M" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
