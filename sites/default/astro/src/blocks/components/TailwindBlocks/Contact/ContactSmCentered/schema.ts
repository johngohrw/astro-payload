import type { Block } from "payload";

export const contactSmCenteredSchema: Block = {
  slug: "contactSmCentered",
  labels: {
    singular: "Contact Sm Centered",
    plural: "Contact Sm Centereds",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Contact sales",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Aute magna irure deserunt veniam aliqua magna enim voluptate.",
    },
    {
      name: "items",
      type: "array",
      label: "Contact Items",
      fields: [
        {
          name: "iconSvg",
          type: "textarea",
          label: "Icon SVG Path",
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
        {
          name: "linkLabel",
          type: "text",
          label: "Link Label",
          required: true,
        },
        {
          name: "linkHref",
          type: "text",
          label: "Link URL",
          required: true,
        },
      ],
    },
  ],
};
