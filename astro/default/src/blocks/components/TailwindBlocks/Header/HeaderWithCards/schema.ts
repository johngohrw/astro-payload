import type { Block } from "payload";

export const headerWithCardsSchema: Block = {
  slug: "headerWithCards",
  labels: {
    singular: "Header With Cards",
    plural: "Headers With Cards",
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
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image",
      relationTo: "media",
    },
    {
      name: "cards",
      type: "array",
      label: "Cards",
      fields: [
        {
          name: "iconSvg",
          type: "textarea",
          label: "Icon SVG",
        },
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
        },
      ],
    },
  ],
};
