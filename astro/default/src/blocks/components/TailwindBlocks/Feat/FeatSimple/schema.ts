import type { Block } from "payload";

export const featSimpleSchema: Block = {
  slug: "featSimple",
  labels: { singular: "Feat Simple", plural: "Feat Simples" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "All-in-one platform" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam." },
    {
      name: "features", type: "array", label: "Features",
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
  ],
};
