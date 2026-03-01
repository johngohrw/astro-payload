import type { Block } from "payload";

export const statsWithTwoColDescSchema: Block = {
  slug: "statsWithTwoColDesc",
  labels: {
    singular: "Stats With Two Col Desc",
    plural: "Stats With Two Col Descs",
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
      name: "colOneParaOne",
      type: "textarea",
      label: "Column 1 — Paragraph 1",
      defaultValue:
        "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.",
    },
    {
      name: "colOneParaTwo",
      type: "textarea",
      label: "Column 1 — Paragraph 2",
      defaultValue:
        "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.",
    },
    {
      name: "colTwoParaOne",
      type: "textarea",
      label: "Column 2 — Paragraph 1",
      defaultValue:
        "Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.",
    },
    {
      name: "colTwoParaTwo",
      type: "textarea",
      label: "Column 2 — Paragraph 2",
      defaultValue:
        "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
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
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
