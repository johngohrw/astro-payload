import type { Block } from "payload";

export const contactCenteredSchema: Block = {
  slug: "contactCentered",
  labels: {
    singular: "Contact Centered",
    plural: "Contact Centereds",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Contact sales",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Aute magna irure deserunt veniam aliqua magna enim voluptate.",
    },
    {
      name: "privacyPolicyHref",
      type: "text",
      label: "Privacy Policy Link",
      defaultValue: "#",
    },
    {
      name: "submitLabel",
      type: "text",
      label: "Submit Button Label",
      defaultValue: "Let's talk",
    },
    {
      name: "formAction",
      type: "text",
      label: "Form Action URL",
      defaultValue: "#",
    },
  ],
};
