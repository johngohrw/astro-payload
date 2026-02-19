import type { Block } from "payload";

export const heroSplitWithImageSchema: Block = {
  slug: "heroSplitWithImage",
  labels: { singular: "Hero Split With Image", plural: "Heroes Split With Image" },
  fields: [
    { name: "companyName", type: "text", label: "Company Name", defaultValue: "Your Company" },
    { name: "logoLight", type: "upload", relationTo: "media", label: "Logo (Light)" },
    { name: "logoDark", type: "upload", relationTo: "media", label: "Logo (Dark)" },
    {
      name: "badge",
      type: "group",
      label: "Badge",
      fields: [
        { name: "text", type: "text", label: "Badge Text", defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt." },
        { name: "link", type: "text", label: "Badge Link", defaultValue: "#" },
      ],
    },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Data to enrich your business" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    },
    { name: "primaryCtaLabel", type: "text", label: "Primary CTA Label", defaultValue: "Get started" },
    { name: "primaryCtaHref", type: "text", label: "Primary CTA Href", defaultValue: "#" },
    { name: "secondaryCtaLabel", type: "text", label: "Secondary CTA Label", defaultValue: "Learn more" },
    { name: "secondaryCtaHref", type: "text", label: "Secondary CTA Href", defaultValue: "#" },
    { name: "heroImage", type: "upload", relationTo: "media", label: "Hero Image" },
  ],
};
