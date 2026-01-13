import type { Block } from "payload";

export const FeatSimpleThreeColBlock: Block = {
  slug: "featSimpleThreeCol",
  labels: {
    singular: "Feature – Simple 3 Column",
    plural: "Features – Simple 3 Column",
  },
  fields: [
    {
      name: "topCaption",
      type: "text",
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },

    {
      name: "columns",
      type: "array",
      minRows: 3,
      maxRows: 3, // hard lock to 3 since the component is fixed
      required: true,
      fields: [
        {
          name: "icon",
          type: "text",
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "caption",
          type: "textarea",
        },
        {
          name: "action",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
            },
            {
              name: "href",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
