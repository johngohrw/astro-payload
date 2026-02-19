import type { Block } from "payload";

export const ctaImageTilesSchema: Block = {
  slug: "ctaImageTiles",
  labels: { singular: "Cta Image Tiles", plural: "Cta Image Tiles" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Our people" },
    {
      name: "subheading",
      type: "textarea",
      label: "Subheading",
      defaultValue: "Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.",
    },
    { name: "ctaLabel", type: "text", label: "CTA Label", defaultValue: "Join our team" },
    { name: "ctaHref", type: "text", label: "CTA Href", defaultValue: "#" },
    {
      name: "images",
      type: "array",
      label: "Images",
      fields: [
        { name: "image", type: "upload", relationTo: "media", label: "Image" },
        { name: "alt", type: "text", label: "Alt Text" },
      ],
    },
  ],
};
