import type { Block } from "payload";

export const headingSimpleLeftSchema: Block = {
  slug: "headingSimpleLeft",
  labels: { singular: "Heading Simple Left", plural: "Heading Simple Lefts" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Support center" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
    },
  ],
};
