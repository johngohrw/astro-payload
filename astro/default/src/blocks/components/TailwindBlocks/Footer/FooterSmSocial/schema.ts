import type { Block } from "payload";

export const footerSmSocialSchema: Block = {
  slug: "footerSmSocial",
  labels: {
    singular: "Footer Sm Social",
    plural: "Footer Sm Socials",
  },
  fields: [
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
