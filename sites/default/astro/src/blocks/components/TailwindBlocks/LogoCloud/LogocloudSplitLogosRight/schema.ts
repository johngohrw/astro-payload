import type { Block } from "payload";

export const logocloudSplitLogosRightSchema: Block = {
  slug: "logocloudSplitLogosRight",
  labels: {
    singular: "Logocloud Split Logos Right",
    plural: "Logocloud Split Logos Rights",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Trusted by the most innovative teams",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Create account" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Contact us" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "logos",
      type: "array",
      label: "Logos",
      fields: [
        { name: "lightSrc", type: "upload", label: "Logo (Light Mode)", relationTo: "media" },
        { name: "darkSrc", type: "upload", label: "Logo (Dark Mode)", relationTo: "media" },
        { name: "alt", type: "text", label: "Alt Text", required: true },
      ],
    },
  ],
};
