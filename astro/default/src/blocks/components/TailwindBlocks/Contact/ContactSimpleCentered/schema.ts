import type { Block } from "payload";

export const contactSimpleCenteredSchema: Block = {
  slug: "contactSimpleCentered",
  labels: {
    singular: "Contact Simple Centered",
    plural: "Contact Simple Centereds",
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
      label: "Support Items",
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
        { name: "linkLabel", type: "text", label: "Link Label", required: true },
        { name: "linkHref", type: "text", label: "Link Href", required: true },
        { name: "iconSvg", type: "textarea", label: "Icon SVG" },
      ],
    },
  ],
};
