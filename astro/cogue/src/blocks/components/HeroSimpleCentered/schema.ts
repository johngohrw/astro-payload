import type { Block } from "payload";

export const heroSimpleCenteredBlock: Block = {
  slug: "heroSimpleCentered",
  labels: {
    singular: "Hero CTA",
    plural: "Hero CTAs",
  },
  fields: [
    {
      name: "announcement",
      type: "group",
      label: "Announcement",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Announcement Text",
          defaultValue: "Announcing our next round of funding.",
        },
        {
          name: "href",
          type: "text",
          label: "Announcement Link",
          defaultValue: "#",
        },
      ],
    },

    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Data to enrich your online business",
    },

    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
    },

    {
      name: "primaryCta",
      type: "group",
      label: "Primary CTA",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          defaultValue: "Get started",
        },
        {
          name: "href",
          type: "text",
          required: true,
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
          required: true,
          defaultValue: "Learn more",
        },
        {
          name: "href",
          type: "text",
          required: true,
          defaultValue: "#",
        },
      ],
    },
  ],
};
