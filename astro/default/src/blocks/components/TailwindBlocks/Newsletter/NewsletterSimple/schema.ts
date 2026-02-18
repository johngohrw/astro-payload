import type { Block } from "payload";

export const newsletterSimpleSchema: Block = {
  slug: "newsletterSimple",
  labels: {
    singular: "Newsletter Simple",
    plural: "Newsletter Simples",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Want product news and updates? Sign up for our newsletter.",
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
      name: "privacyText",
      type: "text",
      label: "Privacy Text",
      defaultValue: "We care about your data. Read our",
    },
    {
      name: "privacyLink",
      type: "group",
      label: "Privacy Policy Link",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Link Label",
          defaultValue: "privacy policy",
        },
        {
          name: "href",
          type: "text",
          label: "Link URL",
          defaultValue: "#",
        },
      ],
    },
  ],
};
