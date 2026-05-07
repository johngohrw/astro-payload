import type { Block } from "payload";

export const newsletterCenteredCardSchema: Block = {
  slug: "newsletterCenteredCard",
  labels: {
    singular: "Newsletter Centered Card",
    plural: "Newsletter Centered Cards",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Get notified when we're launching",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.",
    },
    {
      name: "emailPlaceholder",
      type: "text",
      label: "Email Placeholder",
      defaultValue: "Enter your email",
    },
    {
      name: "submitLabel",
      type: "text",
      label: "Submit Button Label",
      defaultValue: "Notify me",
    },
  ],
};
