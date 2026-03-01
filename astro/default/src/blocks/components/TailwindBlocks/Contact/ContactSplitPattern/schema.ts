import type { Block } from "payload";

export const contactSplitPatternSchema: Block = {
  slug: "contactSplitPattern",
  labels: {
    singular: "Contact Split Pattern",
    plural: "Contact Split Patterns",
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
      type: "text",
      label: "Address",
      defaultValue: "545 Mavis Island, Chicago, IL 99191",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone",
      defaultValue: "+1 (555) 234-5678",
    },
    {
      name: "email",
      type: "text",
      label: "Email",
      defaultValue: "hello@example.com",
    },
    {
      name: "submitLabel",
      type: "text",
      label: "Submit Button Label",
      defaultValue: "Send message",
    },
    {
      name: "formAction",
      type: "text",
      label: "Form Action URL",
      defaultValue: "#",
    },
  ],
};
