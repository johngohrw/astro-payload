import type { Block } from "payload";

export const newsletterSmSbsOnBrandSchema: Block = {
  slug: "newsletterSmSbsOnBrand",
  labels: {
    singular: "Newsletter Sm Sbs On Brand",
    plural: "Newsletter Sm Sbs On Brands",
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
