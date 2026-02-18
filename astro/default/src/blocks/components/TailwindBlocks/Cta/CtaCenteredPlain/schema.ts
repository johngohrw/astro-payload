import type { Block } from "payload";

export const ctaCenteredPlainSchema: Block = {
  slug: "ctaCenteredPlain",
  labels: {
    singular: "CTA Section",
    plural: "CTA Sections",
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
        "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
    },
    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Get started",
        },
        {
          name: "href",
          type: "text",
          label: "Link",
          defaultValue: "#",
        },
      ],
    },
    {
      name: "secondaryCta",
      type: "group",
      label: "Secondary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
          defaultValue: "Learn more",
        },
        {
          name: "href",
          type: "text",
          label: "Link",
          defaultValue: "#",
        },
      ],
    },
  ],
};
