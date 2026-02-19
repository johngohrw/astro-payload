import type { Block } from "payload";

export const contactSplitWithFormSchema: Block = {
  slug: "contactSplitWithForm",
  labels: {
    singular: "Contact Split With Form",
    plural: "Contact Split With Forms",
  },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Get in touch" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.",
    },
    { name: "addressLabel", type: "text", label: "Address Label", defaultValue: "Address" },
    { name: "addressHtml", type: "textarea", label: "Address HTML", defaultValue: "545 Mavis Island<br />Chicago, IL 99191" },
    { name: "phoneLabel", type: "text", label: "Phone Label", defaultValue: "Telephone" },
    { name: "phoneText", type: "text", label: "Phone Text", defaultValue: "+1 (555) 234-5678" },
    { name: "phoneHref", type: "text", label: "Phone Href", defaultValue: "tel:+15552345678" },
    { name: "emailLabel", type: "text", label: "Email Label", defaultValue: "Email" },
    { name: "emailText", type: "text", label: "Email Text", defaultValue: "hello@example.com" },
    { name: "emailHref", type: "text", label: "Email Href", defaultValue: "mailto:hello@example.com" },
    { name: "formAction", type: "text", label: "Form Action", defaultValue: "#" },
    { name: "submitLabel", type: "text", label: "Submit Label", defaultValue: "Send message" },
  ],
};
