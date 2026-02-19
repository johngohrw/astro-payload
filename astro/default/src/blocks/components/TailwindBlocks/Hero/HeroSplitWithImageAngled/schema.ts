import type { Block } from "payload";

export const heroSplitWithImageAngledSchema: Block = {
  slug: "heroSplitWithImageAngled",
  labels: { singular: "Hero Split With Image Angled", plural: "Heroes Split With Image Angled" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "We're changing the way people connect" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    { name: "primaryCtaLabel", type: "text", label: "Primary CTA Label", defaultValue: "Get started" },
    { name: "primaryCtaHref", type: "text", label: "Primary CTA Href", defaultValue: "#" },
    { name: "secondaryCtaLabel", type: "text", label: "Secondary CTA Label", defaultValue: "Learn more" },
    { name: "secondaryCtaHref", type: "text", label: "Secondary CTA Href", defaultValue: "#" },
    { name: "heroImage", type: "upload", relationTo: "media", label: "Hero Image" },
  ],
};
