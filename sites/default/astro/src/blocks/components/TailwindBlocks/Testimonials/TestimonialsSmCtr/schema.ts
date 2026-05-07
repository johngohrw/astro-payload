import type { Block } from "payload";

export const testimonialsSmCtrSchema: Block = {
  slug: "testimonialsSmCtr",
  labels: {
    singular: "Testimonials Sm Ctr",
    plural: "Testimonials Sm Ctrs",
  },
  fields: [
    {
      name: "logoLight",
      type: "upload",
      label: "Logo (Light Mode)",
      relationTo: "media",
    },
    {
      name: "logoDark",
      type: "upload",
      label: "Logo (Dark Mode)",
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
      name: "avatar",
      type: "upload",
      label: "Author Avatar",
      relationTo: "media",
    },
    {
      name: "avatarAlt",
      type: "text",
      label: "Avatar Alt Text",
      defaultValue: "",
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
