import type { Block } from "payload";

export const heroAngledImgRightSchema: Block = {
  slug: "heroAngledImgRight",
  labels: {
    singular: "Hero Angled Img Right",
    plural: "Heroes Angled Img Right",
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
    },
    {
      name: "navLinks",
      type: "array",
      label: "Nav Links",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Link" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
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
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    {
      name: "image",
      type: "upload",
      label: "Right Image",
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
