import type { Block } from "payload";

export const heroWithOffsetImageBlock: Block = {
  slug: "heroWithOffsetImage",
  labels: {
    singular: "Hero – Image Split",
    plural: "Hero – Image Split",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      defaultValue: "We’re changing the way people connect",
    },
    {
      name: "description",
      type: "textarea",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },

    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          defaultValue: "Get started",
        },
        {
          name: "href",
          type: "text",
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
          defaultValue: "Learn more",
        },
        {
          name: "href",
          type: "text",
          defaultValue: "#",
        },
      ],
    },

    {
      name: "heroImage",
      type: "group",
      label: "Hero Image",
      fields: [
        {
          name: "src",
          type: "text",
          defaultValue:
            "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
        },
        {
          name: "alt",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
