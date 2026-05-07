import type { Block } from "payload";

export const footerSmCenteredSchema: Block = {
  slug: "footerSmCentered",
  labels: {
    singular: "Footer Sm Centered",
    plural: "Footer Sm Centereds",
  },
  fields: [
    {
      name: "navLinks",
      type: "array",
      label: "Navigation Links",
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "href", type: "text", label: "URL", required: true },
      ],
      defaultValue: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Jobs", href: "#" },
        { label: "Press", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Partners", href: "#" },
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
