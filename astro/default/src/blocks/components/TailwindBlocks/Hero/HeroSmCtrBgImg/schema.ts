import type { Block } from "payload";

export const heroSmCtrBgImgSchema: Block = {
  slug: "heroSmCtrBgImg",
  labels: {
    singular: "Hero Sm Ctr Bg Img",
    plural: "Heroes Sm Ctr Bg Img",
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
      name: "login",
      type: "group",
      label: "Login Link",
      fields: [
        { name: "label", type: "text", defaultValue: "Log in" },
        { name: "href", type: "text", defaultValue: "#" },
      ],
    },
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image",
      relationTo: "media",
    },
    {
      name: "announcement",
      type: "group",
      label: "Announcement",
      fields: [
        { name: "text", type: "text", defaultValue: "Announcing our next round of funding." },
        { name: "href", type: "text", defaultValue: "#" },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Data to enrich your online business",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
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
