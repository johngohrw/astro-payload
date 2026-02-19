import type { Block } from "payload";

export const statsWithDescSchema: Block = {
  slug: "statsWithDesc",
  labels: { singular: "Stats With Desc", plural: "Stats With Descs" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Our mission" },
    {
      name: "leadText",
      type: "textarea",
      label: "Lead Text",
      defaultValue: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.",
    },
    {
      name: "bodyText",
      type: "textarea",
      label: "Body Text",
      defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Transactions every 24 hours", value: "44 million" },
        { label: "Assets under holding", value: "$119 trillion" },
        { label: "New users annually", value: "46,000" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
