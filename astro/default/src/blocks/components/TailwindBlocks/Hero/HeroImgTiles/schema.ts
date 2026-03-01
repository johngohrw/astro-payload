import type { Block } from "payload";

export const heroImgTilesSchema: Block = {
  slug: "heroImgTiles",
  labels: {
    singular: "Hero Img Tiles",
    plural: "Heroes Img Tiles",
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
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "We're changing the way people connect",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.",
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
        { name: "label", type: "text", required: true, defaultValue: "Live demo" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "tileImages",
      type: "array",
      label: "Tile Images",
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Image",
          required: true,
          relationTo: "media",
        },
      ],
    },
  ],
};
