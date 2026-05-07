import type { Block } from "payload";

export const heroSplitCodeExampleSchema: Block = {
  slug: "heroSplitCodeExample",
  labels: {
    singular: "Hero Split Code Example",
    plural: "Heroes Split Code Example",
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
    },
    {
      name: "badge",
      type: "group",
      label: "Badge",
      fields: [
        { name: "label", type: "text", defaultValue: "What's new" },
        { name: "text", type: "text", defaultValue: "Just shipped v1.0" },
        { name: "href", type: "text", defaultValue: "#" },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Supercharge your web app",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Documentation" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "View on GitHub" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "codeTab1",
      type: "text",
      label: "Code Tab 1 Filename",
      defaultValue: "NotificationSetting.jsx",
    },
    {
      name: "codeTab2",
      type: "text",
      label: "Code Tab 2 Filename",
      defaultValue: "App.jsx",
    },
  ],
};
