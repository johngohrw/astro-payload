import type { Block } from "payload";

export const headingWithCardsSchema: Block = {
  slug: "headingWithCards",
  labels: { singular: "Heading With Cards", plural: "Heading With Cards" },
  fields: [
    { name: "lightImage", type: "upload", relationTo: "media", label: "Light Background Image" },
    { name: "lightImageAlt", type: "text", label: "Light Image Alt" },
    { name: "darkImage", type: "upload", relationTo: "media", label: "Dark Background Image" },
    { name: "darkImageAlt", type: "text", label: "Dark Image Alt" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Support center" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
    },
    {
      name: "cards",
      type: "array",
      label: "Cards",
      fields: [
        { name: "iconSvg", type: "textarea", label: "Icon SVG" },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
  ],
};
