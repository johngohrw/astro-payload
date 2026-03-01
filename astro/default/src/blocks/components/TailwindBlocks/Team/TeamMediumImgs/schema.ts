import type { Block } from "payload";

export const teamMediumImgsSchema: Block = {
  slug: "teamMediumImgs",
  labels: {
    singular: "Team Medium Imgs",
    plural: "Team Medium Imgs",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Our team",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
    },
    {
      name: "members",
      type: "array",
      label: "Members",
      fields: [
        { name: "name", type: "text", label: "Name", required: true },
        { name: "role", type: "text", label: "Role", required: true },
        { name: "location", type: "text", label: "Location" },
        { name: "image", type: "upload", label: "Image", relationTo: "media" },
      ],
    },
  ],
};
