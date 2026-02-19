import type { Block } from "payload";

export const contactSimpleFourColSchema: Block = {
  slug: "contactSimpleFourCol",
  labels: {
    singular: "Contact Simple Four Col",
    plural: "Contact Simple Four Cols",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      defaultValue: "Our offices",
    },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtitle",
      defaultValue: "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
    {
      name: "offices",
      type: "array",
      label: "Offices",
      fields: [
        { name: "name", type: "text", label: "Office Name", required: true },
        {
          name: "lines",
          type: "array",
          label: "Address Lines",
          fields: [
            { name: "line", type: "text", label: "Line", required: true },
          ],
        },
      ],
    },
  ],
};
