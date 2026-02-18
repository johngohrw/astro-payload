import type { Block } from "payload";

export const contactSimpleFourColSchema: Block = {
  slug: "contactSimpleFourCol",
  labels: {
    singular: "Contact Section",
    plural: "Contact Sections",
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
      defaultValue:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
    },
    {
      name: "offices",
      type: "array",
      label: "Offices",
      defaultValue: [],
      fields: [
        {
          name: "name",
          type: "text",
          label: "Office Name",
          required: true,
        },
        {
          name: "lines",
          type: "array",
          label: "Address Lines",
          required: true,
          fields: [
            {
              name: "line",
              type: "text",
              label: "Line",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
