import type { Block } from "payload";

export const headerCtrBgImgSchema: Block = {
  slug: "headerCtrBgImg",
  labels: {
    singular: "Header Ctr Bg Img",
    plural: "Headers Ctr Bg Img",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Support center",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
    },
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image",
      relationTo: "media",
    },
  ],
};
