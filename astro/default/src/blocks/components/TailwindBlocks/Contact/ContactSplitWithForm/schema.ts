import type { Block } from "payload";

export const contactSplitWithFormSchema: Block = {
  slug: "contactSplitWithForm",
  labels: {
    singular: "Contact Form",
    plural: "Contact Forms",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Get in touch",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.",
    },
    {
      name: "address",
      type: "group",
      label: "Address",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Address",
        },
        {
          name: "html",
          type: "textarea",
          label: "Address HTML",
          defaultValue: "545 Mavis Island<br />Chicago, IL 99191",
        },
      ],
    },
    {
      name: "phone",
      type: "group",
      label: "Phone",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Telephone",
        },
        {
          name: "text",
          type: "text",
          label: "Display Text",
          defaultValue: "+1 (555) 234-5678",
        },
        {
          name: "href",
          type: "text",
          label: "Phone Link",
          defaultValue: "tel:+15552345678",
        },
      ],
    },
    {
      name: "email",
      type: "group",
      label: "Email",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Email",
        },
        {
          name: "text",
          type: "text",
          label: "Display Text",
          defaultValue: "hello@example.com",
        },
        {
          name: "href",
          type: "text",
          label: "Email Link",
          defaultValue: "mailto:hello@example.com",
        },
      ],
    },
    {
      name: "form",
      type: "group",
      label: "Form Settings",
      fields: [
        {
          name: "action",
          type: "text",
          label: "Form Action URL",
          defaultValue: "#",
        },
        {
          name: "submitLabel",
          type: "text",
          label: "Submit Button Label",
          defaultValue: "Send message",
        },
      ],
    },
  ],
};
