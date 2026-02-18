import type { Block } from "payload";

export const notFoundImageSplitSchema: Block = {
  slug: "notFoundImageSplit",
  labels: {
    singular: "Error Page Split",
    plural: "Error Pages Split",
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      label: "Company Name",
      defaultValue: "Your Company",
    },
    {
      name: "logo",
      type: "group",
      label: "Logo",
      fields: [
        {
          name: "light",
          type: "upload",
          relationTo: "media",
          label: "Light Mode Logo",
        },
        {
          name: "dark",
          type: "upload",
          relationTo: "media",
          label: "Dark Mode Logo",
        },
        {
          name: "href",
          type: "text",
          label: "Logo Link",
          defaultValue: "#",
        },
      ],
    },
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
      name: "back",
      type: "group",
      label: "Back Link",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Back to home",
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
      name: "footerLinks",
      type: "array",
      label: "Footer Links",
      defaultValue: [
        { label: "Contact support", href: "#" },
        { label: "Status", href: "#" },
      ],
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          required: true,
        },
        {
          name: "href",
          type: "text",
          label: "Link",
          required: true,
        },
      ],
    },
    {
      name: "backgroundImage",
      type: "group",
      label: "Background Images",
      fields: [
        {
          name: "light",
          type: "upload",
          relationTo: "media",
          label: "Light Mode Image",
        },
        {
          name: "dark",
          type: "upload",
          relationTo: "media",
          label: "Dark Mode Image",
        },
      ],
    },
  ],
};
