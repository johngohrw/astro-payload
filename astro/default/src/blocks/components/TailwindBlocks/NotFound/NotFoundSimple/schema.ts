import type { Block } from "payload";

export const notFoundSimpleSchema: Block = {
  slug: "notFoundSimple",
  labels: { singular: "Not Found Simple", plural: "Not Found Simples" },
  fields: [
    { name: "errorCode", type: "text", label: "Error Code", defaultValue: "404" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Page not found" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Sorry, we couldn't find the page you're looking for.",
    },
    { name: "primaryCtaLabel", type: "text", label: "Primary CTA Label", defaultValue: "Go back home" },
    { name: "primaryCtaHref", type: "text", label: "Primary CTA Href", defaultValue: "#" },
    { name: "secondaryCtaLabel", type: "text", label: "Secondary CTA Label", defaultValue: "Contact support" },
    { name: "secondaryCtaHref", type: "text", label: "Secondary CTA Href", defaultValue: "#" },
  ],
};
