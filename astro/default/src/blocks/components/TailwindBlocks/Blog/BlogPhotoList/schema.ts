import type { Block } from "payload";

export const blogPhotoListSchema: Block = {
  slug: "blogPhotoList",
  labels: {
    singular: "Blog Photo List",
    plural: "Blog Photo Lists",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "We're always looking for awesome people to join us",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Photo",
    },
    {
      name: "openings",
      type: "array",
      label: "Job Openings",
      fields: [
        { name: "title", type: "text", label: "Job Title", required: true },
        { name: "titleHref", type: "text", label: "Link", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
        { name: "salary", type: "text", label: "Salary", required: true },
        { name: "location", type: "text", label: "Location", required: true },
      ],
    },
    {
      name: "viewAllHref",
      type: "text",
      label: "View All Link",
      defaultValue: "#",
    },
    {
      name: "viewAllLabel",
      type: "text",
      label: "View All Label",
      defaultValue: "View all openings",
    },
  ],
};
