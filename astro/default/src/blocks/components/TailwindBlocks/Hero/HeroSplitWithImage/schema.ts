import type { Block } from "payload";

export const heroSplitWithImageSchema: Block = {
  slug: "heroSplitWithImage",
  labels: {
    singular: "Hero Split Image",
    plural: "Hero Split Images",
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      label: "Company Name",
      defaultValue: "Your Company",
    },
    {
      name: "logo",
      type: "group",
      label: "Logo",
      fields: [
        {
          name: "light",
          type: "upload",
          relationTo: "media",
          label: "Light Mode Logo",
        },
        {
          name: "dark",
          type: "upload",
          relationTo: "media",
          label: "Dark Mode Logo",
        },
      ],
    },
    {
      name: "badge",
      type: "group",
      label: "Badge",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Badge Text",
          defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt.",
        },
        {
          name: "link",
          type: "text",
          label: "Badge Link",
          defaultValue: "#",
        },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Data to enrich your business",
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
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      label: "Hero Image",
    },
  ],
};
