import type { Block } from "payload";

export const teamFullWidthVertImgsSchema: Block = {
  slug: "teamFullWidthVertImgs",
  labels: {
    singular: "Team Full Width Vert Imgs",
    plural: "Team Full Width Vert Imgs",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Meet our leadership",
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
        {
          name: "name",
          type: "text",
          label: "Name",
          required: true,
        },
        {
          name: "role",
          type: "text",
          label: "Role",
          required: true,
        },
        {
          name: "bio",
          type: "textarea",
          label: "Bio",
        },
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
        },
        {
          name: "socialLinks",
          type: "array",
          label: "Social Links",
          fields: [
            { name: "label", type: "text", label: "Label", required: true },
            { name: "href", type: "text", label: "URL", required: true },
            { name: "iconSvg", type: "textarea", label: "Icon SVG (path content)" },
          ],
        },
      ],
    },
  ],
};
