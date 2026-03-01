import type { Block } from "payload";

export const featSimpleThreeColLgIconsSchema: Block = {
  slug: "featSimpleThreeColLgIcons",
  labels: { singular: "Feat Simple Three Col Lg Icons", plural: "Feat Simple Three Col Lg Icons" },
  fields: [
    { name: "heading", type: "text", label: "Heading", defaultValue: "Stay on top of customer support" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam." },
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
