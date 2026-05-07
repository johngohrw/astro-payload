import type { Block } from "payload";

export const headerCenteredSchema: Block = {
  slug: "headerCentered",
  labels: {
    singular: "Header Centered",
    plural: "Headers Centered",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Support center",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
    },
  ],
};
