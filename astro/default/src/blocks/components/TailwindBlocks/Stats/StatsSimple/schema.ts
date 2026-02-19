import type { Block } from "payload";

export const statsSimpleSchema: Block = {
  slug: "statsSimple",
  labels: { singular: "Stats Simple", plural: "Stats Simples" },
  fields: [
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Transactions every 24 hours", value: "44 million" },
        { label: "Assets under holding", value: "$119 trillion" },
        { label: "New users annually", value: "46,000" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
