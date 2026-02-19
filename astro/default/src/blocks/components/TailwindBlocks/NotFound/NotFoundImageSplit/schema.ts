import type { Block } from "payload";

export const notFoundImageSplitSchema: Block = {
  slug: "notFoundImageSplit",
  labels: { singular: "Not Found Image Split", plural: "Not Found Image Splits" },
  fields: [
    { name: "companyName", type: "text", label: "Company Name", defaultValue: "Your Company" },
    { name: "logoLight", type: "upload", relationTo: "media", label: "Logo (Light)" },
    { name: "logoDark", type: "upload", relationTo: "media", label: "Logo (Dark)" },
    { name: "logoHref", type: "text", label: "Logo Href", defaultValue: "#" },
    { name: "errorCode", type: "text", label: "Error Code", defaultValue: "404" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Page not found" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Sorry, we couldn't find the page you're looking for.",
    },
    { name: "backLabel", type: "text", label: "Back Label", defaultValue: "Back to home" },
    { name: "backHref", type: "text", label: "Back Href", defaultValue: "#" },
    {
      name: "footerLinks",
      type: "array",
      label: "Footer Links",
      defaultValue: [
        { label: "Contact support", href: "#" },
        { label: "Status", href: "#" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "href", type: "text", label: "Href", required: true },
      ],
    },
    { name: "backgroundImageLight", type: "upload", relationTo: "media", label: "Background Image (Light)" },
    { name: "backgroundImageDark", type: "upload", relationTo: "media", label: "Background Image (Dark)" },
  ],
};
