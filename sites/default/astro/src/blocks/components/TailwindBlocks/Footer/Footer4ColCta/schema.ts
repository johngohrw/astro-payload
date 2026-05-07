import type { Block } from "payload";

export const footer4ColCtaSchema: Block = {
  slug: "footer4ColCta",
  labels: {
    singular: "Footer 4 Col Cta",
    plural: "Footer 4 Col Ctas",
  },
  fields: [
    {
      name: "ctaEyebrow",
      type: "text",
      label: "CTA Eyebrow",
      defaultValue: "Get started",
    },
    {
      name: "ctaHeading",
      type: "text",
      label: "CTA Heading",
      defaultValue: "Boost your productivity. Start using our app today.",
    },
    {
      name: "ctaDescription",
      type: "textarea",
      label: "CTA Description",
      defaultValue:
        "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
    },
    {
      name: "ctaButtonLabel",
      type: "text",
      label: "CTA Button Label",
      defaultValue: "Get started",
    },
    {
      name: "ctaButtonHref",
      type: "text",
      label: "CTA Button URL",
      defaultValue: "#",
    },
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
