import type { Block } from "payload";

export const ctaDarkPanelWithAppScreenshotSchema: Block = {
  slug: "ctaDarkPanelWithAppScreenshot",
  labels: {
    singular: "Cta Dark Panel With App Screenshot",
    plural: "Cta Dark Panel With App Screenshots",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Boost your productivity. Start using our app today.",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Get started" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Learn more" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "screenshot",
      type: "upload",
      label: "App Screenshot",
      relationTo: "media",
    },
  ],
};
