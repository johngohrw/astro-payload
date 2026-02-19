import type { Block } from "payload";

export const newsletterWithDetailsSchema: Block = {
  slug: "newsletterWithDetails",
  labels: { singular: "Newsletter With Details", plural: "Newsletter With Details" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Subscribe to our newsletter" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
    },
    { name: "emailPlaceholder", type: "text", label: "Email Placeholder", defaultValue: "Enter your email" },
    { name: "subscribeLabel", type: "text", label: "Subscribe Label", defaultValue: "Subscribe" },
    {
      name: "features",
      type: "array",
      label: "Features",
      fields: [
        { name: "iconSvg", type: "textarea", label: "Icon SVG" },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
  ],
};
