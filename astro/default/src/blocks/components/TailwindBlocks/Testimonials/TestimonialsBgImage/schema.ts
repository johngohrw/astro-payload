import type { Block } from "payload";

export const testimonialsBgImageSchema: Block = {
  slug: "testimonialsBgImage",
  labels: {
    singular: "Testimonials Bg Image",
    plural: "Testimonials Bg Images",
  },
  fields: [
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Background Image",
    },
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
