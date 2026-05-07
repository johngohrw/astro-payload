import type { Block } from "payload";

export const heroSplitImgSchema: Block = {
  slug: "heroSplitImg",
  labels: {
    singular: "Hero Split Img",
    plural: "Heroes Split Img",
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
    },
    {
      name: "announcement",
      type: "group",
      label: "Announcement",
      fields: [
        { name: "text", type: "text", defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt." },
        { name: "href", type: "text", defaultValue: "#" },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Data to enrich your business",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    },
    {
      name: "image",
      type: "upload",
      label: "Side Image",
      relationTo: "media",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Get started" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Learn more" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
  ],
};
