import type { Block } from "payload";

export const heroWithOffsetImgSchema: Block = {
  slug: "heroWithOffsetImg",
  labels: { singular: "Hero With Offset Img", plural: "Heroes With Offset Img" },
  fields: [
    { name: "title", type: "text", label: "Title", defaultValue: "We're changing the way people connect" },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtitle",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    { name: "buttonLabel", type: "text", label: "Button Label", defaultValue: "Get started" },
    { name: "buttonHref", type: "text", label: "Button Href", defaultValue: "#" },
    { name: "subActionLabel", type: "text", label: "Sub-Action Label", defaultValue: "Learn more" },
    { name: "subActionHref", type: "text", label: "Sub-Action Href", defaultValue: "#" },
    {
      name: "images",
      type: "array",
      label: "Images",
      fields: [
        { name: "image", type: "upload", relationTo: "media", label: "Image" },
      ],
    },
  ],
};
