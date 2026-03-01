import type { Block } from "payload";

export const ctaWithImageTilesSchema: Block = {
  slug: "ctaWithImageTiles",
  labels: {
    singular: "Cta With Image Tiles",
    plural: "Cta With Image Tiles",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Our people",
    },
    {
      name: "descriptionPrimary",
      type: "textarea",
      label: "Primary Description",
      defaultValue:
        "Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.",
    },
    {
      name: "descriptionSecondary",
      type: "textarea",
      label: "Secondary Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.",
    },
    {
      name: "ctaLabel",
      type: "text",
      label: "CTA Label",
      defaultValue: "Join our team",
    },
    {
      name: "ctaHref",
      type: "text",
      label: "CTA Link",
      defaultValue: "#",
    },
    {
      name: "imageLarge",
      type: "upload",
      label: "Large Image",
      relationTo: "media",
    },
    {
      name: "imageTopLeft",
      type: "upload",
      label: "Top Left Image",
      relationTo: "media",
    },
    {
      name: "imageMiddle",
      type: "upload",
      label: "Middle Image",
      relationTo: "media",
    },
    {
      name: "imageBottomRight",
      type: "upload",
      label: "Bottom Right Image",
      relationTo: "media",
    },
  ],
};
