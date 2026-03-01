import type { Block } from "payload";

export const ctaTwoColumnsWithPhotoSchema: Block = {
  slug: "ctaTwoColumnsWithPhoto",
  labels: {
    singular: "Cta Two Columns With Photo",
    plural: "Cta Two Columns With Photos",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Join our team",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.",
    },
    {
      name: "benefits",
      type: "array",
      label: "Benefits",
      fields: [
        {
          name: "iconSvg",
          type: "textarea",
          label: "Icon SVG",
          required: true,
        },
        {
          name: "label",
          type: "text",
          label: "Label",
          required: true,
        },
      ],
    },
    {
      name: "ctaLabel",
      type: "text",
      label: "CTA Label",
      defaultValue: "See our job postings",
    },
    {
      name: "ctaHref",
      type: "text",
      label: "CTA Link",
      defaultValue: "#",
    },
    {
      name: "image",
      type: "upload",
      label: "Photo",
      relationTo: "media",
    },
  ],
};
