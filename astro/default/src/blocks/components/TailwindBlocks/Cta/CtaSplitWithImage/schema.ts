import type { Block } from "payload";

export const ctaSplitWithImageSchema: Block = {
  slug: "ctaSplitWithImage",
  labels: {
    singular: "CTA Split Image",
    plural: "CTA Split Images",
  },
  fields: [
    {
      name: "badge",
      type: "text",
      label: "Badge Text",
      defaultValue: "Award winning support",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "We're here to help",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
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
          defaultValue: "Visit the help center",
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
      name: "image",
      type: "group",
      label: "Image",
      fields: [
        {
          name: "src",
          type: "upload",
          relationTo: "media",
          label: "Image",
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
