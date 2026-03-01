import type { Block } from "payload";

export const footer4ColSimpleSchema: Block = {
  slug: "footer4ColSimple",
  labels: {
    singular: "Footer 4 Col Simple",
    plural: "Footer 4 Col Simples",
  },
  fields: [
    {
      name: "logoSrc",
      type: "upload",
      relationTo: "media",
      label: "Logo (Light Mode)",
    },
    {
      name: "logoDarkSrc",
      type: "upload",
      relationTo: "media",
      label: "Logo (Dark Mode)",
    },
    {
      name: "logoAlt",
      type: "text",
      label: "Logo Alt Text",
      defaultValue: "Company name",
    },
    {
      name: "columns",
      type: "array",
      label: "Navigation Columns",
      fields: [
        {
          name: "heading",
          type: "text",
          label: "Column Heading",
          required: true,
        },
        {
          name: "links",
          type: "array",
          label: "Links",
          fields: [
            { name: "label", type: "text", label: "Label", required: true },
            { name: "href", type: "text", label: "URL", required: true },
          ],
        },
      ],
    },
  ],
};
