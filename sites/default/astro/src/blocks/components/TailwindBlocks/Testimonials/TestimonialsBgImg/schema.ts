import type { Block } from "payload";

export const testimonialsBgImgSchema: Block = {
  slug: "testimonialsBgImg",
  labels: {
    singular: "Testimonials Bg Img",
    plural: "Testimonials Bg Imgs",
  },
  fields: [
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image",
      relationTo: "media",
    },
    {
      name: "backgroundAlt",
      type: "text",
      label: "Background Image Alt Text",
      defaultValue: "",
    },
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
    },
    {
      name: "logoAlt",
      type: "text",
      label: "Logo Alt Text",
      defaultValue: "",
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
