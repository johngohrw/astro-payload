import type { Block } from "payload";

export const newsletterSimpleStackedSchema: Block = {
  slug: "newsletterSimpleStacked",
  labels: {
    singular: "Newsletter Simple Stacked",
    plural: "Newsletter Simple Stacked",
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
