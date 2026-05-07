import type { Block } from "payload";

export const ctaCenteredOnDarkPanelSchema: Block = {
  slug: "ctaCenteredOnDarkPanel",
  labels: {
    singular: "Cta Centered On Dark Panel",
    plural: "Cta Centered On Dark Panels",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Boost your productivity today",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
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
  ],
};
