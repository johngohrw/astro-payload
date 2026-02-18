import type { Block } from "payload";

export const statsTwoColDescSchema: Block = {
  slug: "statsTwoColDesc",
  labels: {
    singular: "Stats Two Column Description",
    plural: "Stats Two Column Descriptions",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow",
      defaultValue: "Deploy faster",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "A better workflow",
    },
    {
      name: "descriptionColumns",
      type: "array",
      label: "Description Columns",
      minRows: 2,
      maxRows: 2,
      defaultValue: [
        {
          paragraphs: [
            {
              text: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
            },
            {
              text: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.",
            },
          ],
        },
        {
          paragraphs: [
            {
              text: "Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.",
            },
            {
              text: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
            },
          ],
        },
      ],
      fields: [
        {
          name: "paragraphs",
          type: "array",
          label: "Paragraphs",
          fields: [
            {
              name: "text",
              type: "textarea",
              label: "Text",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Founded", value: "2021" },
        { label: "Employees", value: "37" },
        { label: "Countries", value: "12" },
        { label: "Raised", value: "$25M" },
      ],
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          required: true,
        },
        {
          name: "value",
          type: "text",
          label: "Value",
          required: true,
        },
      ],
    },
  ],
};
