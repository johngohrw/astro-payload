import type { Block } from "payload";

export const headerCtrEyebrowSchema: Block = {
  slug: "headerCtrEyebrow",
  labels: {
    singular: "Header Ctr Eyebrow",
    plural: "Headers Ctr Eyebrow",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow",
      defaultValue: "Get the help you need",
    },
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
