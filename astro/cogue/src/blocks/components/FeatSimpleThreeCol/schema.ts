import type { Block } from "payload";

export const featSimpleThreeColBlock: Block = {
  slug: "featSimpleThreeCol",
  labels: {
    singular: "Feature – Simple 3 Column",
    plural: "Features – Simple 3 Column",
  },
  fields: [
    {
      name: "topCaption",
      type: "text",
      defaultValue: "Features",
    },
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Everything you need to get started",
    },
    {
      name: "subtitle",
      type: "text",
      defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      name: "columns",
      type: "array",
      minRows: 3,
      maxRows: 3,
      required: true,
      defaultValue: [
        {
          icon: "Zap",
          title: "Fast setup",
          caption: "Get up and running in minutes with sensible defaults.",
          action: {
            label: "Learn more",
            href: "#",
          },
        },
        {
          icon: "Shield",
          title: "Secure by default",
          caption: "Built with security best practices from day one.",
          action: {
            label: "Learn more",
            href: "#",
          },
        },
        {
          icon: "Sparkle",
          title: "Modern stack",
          caption: "Designed for performance, scalability, and clarity.",
          action: {
            label: "Learn more",
            href: "#",
          },
        },
      ],
      fields: [
        {
          name: "icon",
          type: "text",
          defaultValue: "Sparkle",
        },
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Feature title",
        },
        {
          name: "caption",
          type: "textarea",
          defaultValue: "Short description of this feature.",
        },
        {
          name: "action",
          type: "group",
          fields: [
            {
              name: "label",
              type: "text",
              defaultValue: "Learn more",
            },
            {
              name: "href",
              type: "text",
              defaultValue: "#",
            },
          ],
        },
      ],
    },
  ],
};
