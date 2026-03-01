import type { Block } from "payload";

export const testimonialsSubtleGridSchema: Block = {
  slug: "testimonialsSubtleGrid",
  labels: {
    singular: "Testimonials Subtle Grid",
    plural: "Testimonials Subtle Grids",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow",
      defaultValue: "Testimonials",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "We have worked with thousands of amazing people",
    },
    {
      name: "testimonials",
      type: "array",
      label: "Testimonials",
      fields: [
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
          name: "authorHandle",
          type: "text",
          label: "Author Handle",
          required: true,
        },
      ],
    },
  ],
};
