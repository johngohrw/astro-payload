import type { Block } from "payload";

export const testimonialsSimpleCenteredSchema: Block = {
  slug: "testimonialsSimpleCentered",
  labels: {
    singular: "Testimonials Simple Centered",
    plural: "Testimonials Simple Centereds",
  },
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
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
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
      defaultValue: "Judith Black",
    },
    {
      name: "authorTitle",
      type: "text",
      label: "Author Title",
      defaultValue: "CEO of Workcation",
    },
  ],
};
