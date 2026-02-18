import type { Block } from "payload";

export const notFoundSimpleSchema: Block = {
  slug: "notFoundSimple",
  labels: {
    singular: "Error Page",
    plural: "Error Pages",
  },
  fields: [
    {
      name: "errorCode",
      type: "text",
      label: "Error Code",
      defaultValue: "404",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Page not found",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Sorry, we couldn't find the page you're looking for.",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Go back home",
        },
        {
          name: "href",
          type: "text",
          label: "Link",
          defaultValue: "#",
        },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Contact support",
        },
        {
          name: "href",
          type: "text",
          label: "Link",
          defaultValue: "#",
        },
      ],
    },
  ],
};
