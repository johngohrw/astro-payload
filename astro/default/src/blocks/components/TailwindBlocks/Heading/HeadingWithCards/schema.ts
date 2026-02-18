import type { Block } from "payload";

export const headingWithCardsSchema: Block = {
  slug: "headingWithCards",
  labels: {
    singular: "Heading With Cards",
    plural: "Heading With Cards",
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
      name: "cards",
      type: "array",
      label: "Cards",
      fields: [
        {
          name: "iconSvg",
          type: "textarea",
          label: "Icon SVG Path(s)",
          required: true,
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
