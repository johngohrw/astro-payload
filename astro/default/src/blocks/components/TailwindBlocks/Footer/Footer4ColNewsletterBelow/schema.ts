import type { Block } from "payload";

export const footer4ColNewsletterBelowSchema: Block = {
  slug: "footer4ColNewsletterBelow",
  labels: {
    singular: "Footer 4 Col Newsletter Below",
    plural: "Footer 4 Col Newsletter Belows",
  },
  fields: [
    {
      name: "logoSrc",
      type: "upload",
      relationTo: "media",
      label: "Logo (Light Mode)",
    },
    {
      name: "logoDarkSrc",
      type: "upload",
      relationTo: "media",
      label: "Logo (Dark Mode)",
    },
    {
      name: "logoAlt",
      type: "text",
      label: "Logo Alt Text",
      defaultValue: "Company name",
    },
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
