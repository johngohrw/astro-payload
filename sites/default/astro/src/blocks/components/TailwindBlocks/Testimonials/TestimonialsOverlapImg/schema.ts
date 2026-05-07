import type { Block } from "payload";

export const testimonialsOverlapImgSchema: Block = {
  slug: "testimonialsOverlapImg",
  labels: {
    singular: "Testimonials Overlap Img",
    plural: "Testimonials Overlap Imgs",
  },
  fields: [
    {
      name: "personImage",
      type: "upload",
      relationTo: "media",
      label: "Person Image",
    },
    {
      name: "quote",
      type: "textarea",
      label: "Quote",
      defaultValue:
        "Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
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
