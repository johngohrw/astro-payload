import type { Block } from "payload";

export const testimonialsGridSchema: Block = {
  slug: "testimonialsGrid",
  labels: {
    singular: "Testimonials Grid",
    plural: "Testimonials Grids",
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
      name: "featuredTestimonial",
      type: "group",
      label: "Featured Testimonial",
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
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Logo",
        },
      ],
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
