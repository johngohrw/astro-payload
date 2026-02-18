import type { Block } from "payload";

export const ctaImageTilesSchema: Block = {
  slug: "ctaImageTiles",
  labels: {
    singular: "CTA with Images",
    plural: "CTA with Images",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Our people",
    },
    {
      name: "subheading",
      type: "textarea",
      label: "Subheading",
      defaultValue:
        "Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.",
    },
    {
      name: "cta",
      type: "group",
      label: "Call to Action",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Join our team",
        },
        {
          name: "href",
          type: "text",
          label: "Link",
          defaultValue: "#",
        },
      ],
    },
    {
      name: "images",
      type: "array",
      label: "Images",
      defaultValue: [
        {
          src: "https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&q=80",
          alt: "",
        },
        {
          src: "https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80",
          alt: "",
        },
        {
          src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1152&h=842&q=80",
          alt: "",
        },
        {
          src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=768&h=604&q=80",
          alt: "",
        },
      ],
      fields: [
        {
          name: "src",
          type: "upload",
          relationTo: "media",
          label: "Image",
          required: true,
        },
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
        },
      ],
    },
  ],
};
