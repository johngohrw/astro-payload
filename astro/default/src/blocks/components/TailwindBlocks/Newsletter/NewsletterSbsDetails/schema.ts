import type { Block } from "payload";

export const newsletterSbsDetailsSchema: Block = {
  slug: "newsletterSbsDetails",
  labels: {
    singular: "Newsletter Sbs Details",
    plural: "Newsletter Sbs Details",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Subscribe to our newsletter",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
    },
    {
      name: "emailPlaceholder",
      type: "text",
      label: "Email Placeholder",
      defaultValue: "Enter your email",
    },
    {
      name: "subscribeLabel",
      type: "text",
      label: "Subscribe Button Label",
      defaultValue: "Subscribe",
    },
    {
      name: "details",
      type: "array",
      label: "Details",
      defaultValue: [
        { iconSvg: "", title: "Weekly articles", description: "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet." },
        { iconSvg: "", title: "No spam", description: "Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim." },
      ],
      fields: [
        {
          name: "iconSvg",
          type: "textarea",
          label: "Icon SVG",
          required: true,
        },
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          required: true,
        },
      ],
    },
  ],
};
