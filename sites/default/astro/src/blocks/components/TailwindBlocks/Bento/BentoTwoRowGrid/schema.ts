import type { Block } from "payload";

export const bentoTwoRowGridSchema: Block = {
  slug: "bentoTwoRowGrid",
  labels: {
    singular: "Bento Two Row Grid",
    plural: "Bento Two Row Grids",
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
      name: "cards",
      type: "array",
      label: "Cards",
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
