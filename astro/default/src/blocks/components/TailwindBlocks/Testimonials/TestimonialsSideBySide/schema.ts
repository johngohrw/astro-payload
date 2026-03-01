import type { Block } from "payload";

export const testimonialsSideBySideSchema: Block = {
  slug: "testimonialsSideBySide",
  labels: {
    singular: "Testimonials Side By Side",
    plural: "Testimonials Side By Sides",
  },
  fields: [
    {
      name: "testimonials",
      type: "array",
      label: "Testimonials",
      minRows: 2,
      maxRows: 2,
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Logo",
        },
        {
          name: "quote",
          type: "textarea",
          label: "Quote",
          required: true,
        },
        {
          name: "authorImage",
          type: "upload",
          relationTo: "media",
          label: "Author Image",
        },
        {
          name: "authorName",
          type: "text",
          label: "Author Name",
          required: true,
        },
        {
          name: "authorTitle",
          type: "text",
          label: "Author Title",
          required: true,
        },
      ],
    },
  ],
};
