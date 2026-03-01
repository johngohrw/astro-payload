import type { Block } from "payload";

export const footer4ColNewsletterSchema: Block = {
  slug: "footer4ColNewsletter",
  labels: {
    singular: "Footer 4 Col Newsletter",
    plural: "Footer 4 Col Newsletters",
  },
  fields: [
    {
      name: "columns",
      type: "array",
      label: "Navigation Columns",
      fields: [
        { name: "heading", type: "text", label: "Column Heading", required: true },
        {
          name: "links",
          type: "array",
          label: "Links",
          fields: [
            { name: "label", type: "text", label: "Label", required: true },
            { name: "href", type: "text", label: "URL", required: true },
          ],
        },
      ],
    },
    {
      name: "newsletterHeading",
      type: "text",
      label: "Newsletter Heading",
      defaultValue: "Subscribe to our newsletter",
    },
    {
      name: "newsletterDescription",
      type: "textarea",
      label: "Newsletter Description",
      defaultValue: "The latest news, articles, and resources, sent to your inbox weekly.",
    },
    {
      name: "newsletterButtonLabel",
      type: "text",
      label: "Newsletter Button Label",
      defaultValue: "Subscribe",
    },
    {
      name: "socialLinks",
      type: "array",
      label: "Social Links",
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "href", type: "text", label: "URL", required: true },
        { name: "iconSvg", type: "textarea", label: "Icon SVG", required: true },
      ],
    },
    {
      name: "copyrightText",
      type: "text",
      label: "Copyright Text",
      defaultValue: "© 2024 Your Company, Inc. All rights reserved.",
    },
  ],
};
