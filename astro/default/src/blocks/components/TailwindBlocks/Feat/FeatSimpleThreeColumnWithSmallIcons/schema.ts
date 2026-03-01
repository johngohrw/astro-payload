import type { Block } from "payload";

export const featSimpleThreeColSmIconsSchema: Block = {
  slug: "featSimpleThreeColSmIcons",
  labels: { singular: "Feat Simple Three Col Sm Icons", plural: "Feat Simple Three Col Sm Icons" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "Everything you need to deploy your app" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc." },
    {
      name: "features", type: "array", label: "Features",
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
        { name: "iconSvg", type: "textarea", label: "Icon SVG", required: true },
        { name: "linkLabel", type: "text", label: "Link Label" },
        { name: "linkHref", type: "text", label: "Link URL" },
      ],
    },
  ],
};
