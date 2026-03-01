import type { Block } from "payload";

export const newsletterSbsOnCardSchema: Block = {
  slug: "newsletterSbsOnCard",
  labels: {
    singular: "Newsletter Sbs On Card",
    plural: "Newsletter Sbs On Cards",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Want our product updates? Sign up for our newsletter.",
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
    {
      name: "privacyText",
      type: "text",
      label: "Privacy Text",
      defaultValue: "We care about your data. Read our",
    },
    {
      name: "privacyLabel",
      type: "text",
      label: "Privacy Link Label",
      defaultValue: "privacy policy",
    },
    {
      name: "privacyHref",
      type: "text",
      label: "Privacy Link URL",
      defaultValue: "#",
    },
  ],
};
