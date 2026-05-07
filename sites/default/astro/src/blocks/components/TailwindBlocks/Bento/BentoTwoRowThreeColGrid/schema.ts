import type { Block } from "payload";

export const bentoTwoRowThreeColGridSchema: Block = {
  slug: "bentoTwoRowThreeColGrid",
  labels: {
    singular: "Bento Two Row Three Col Grid",
    plural: "Bento Two Row Three Col Grids",
  },
  fields: [
    {
      name: "sectionEyebrow",
      type: "text",
      label: "Section Eyebrow",
      defaultValue: "Deploy faster",
    },
    {
      name: "sectionHeading",
      type: "text",
      label: "Section Heading",
      defaultValue: "Everything you need to deploy your app",
    },
    {
      name: "topCards",
      type: "array",
      label: "Top Row Cards (2 cards, spanning 3 columns each)",
      fields: [
        {
          name: "eyebrow",
          type: "text",
          label: "Eyebrow",
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
          name: "lightImage",
          type: "upload",
          label: "Light Mode Image",
          relationTo: "media",
          required: true,
        },
        {
          name: "darkImage",
          type: "upload",
          label: "Dark Mode Image",
          relationTo: "media",
        },
      ],
    },
    {
      name: "bottomCards",
      type: "array",
      label: "Bottom Row Cards (3 cards, spanning 2 columns each)",
      fields: [
        {
          name: "eyebrow",
          type: "text",
          label: "Eyebrow",
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
          name: "lightImage",
          type: "upload",
          label: "Light Mode Image",
          relationTo: "media",
          required: true,
        },
        {
          name: "darkImage",
          type: "upload",
          label: "Dark Mode Image",
          relationTo: "media",
        },
      ],
    },
  ],
};
