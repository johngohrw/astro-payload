import type { Block } from "payload";

export const heroWithOffsetImgV2Schema: Block = {
  slug: "heroWithOffsetImgV2",
  labels: {
    singular: "Hero With Offset Img V2",
    plural: "Heroes With Offset Img V2",
  },
  fields: [
    {
      name: "logo",
      type: "group",
      label: "Logo",
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Logo Image (Light)",
          relationTo: "media",
        },
        {
          name: "darkImage",
          type: "upload",
          label: "Logo Image (Dark)",
          relationTo: "media",
        },
        {
          name: "companyName",
          type: "text",
          label: "Company Name",
          defaultValue: "Your Company",
        },
      ],
    },
    {
      name: "navLinks",
      type: "array",
      label: "Navigation Links",
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "href", type: "text", label: "URL", required: true },
      ],
    },
    {
      name: "login",
      type: "group",
      label: "Login Link",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Login Label",
          defaultValue: "Log in",
        },
        {
          name: "href",
          type: "text",
          label: "Login URL",
          defaultValue: "#",
        },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "We're changing the way people connect",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.",
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
        { name: "label", type: "text", required: true, defaultValue: "Live demo" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "galleryCol1Images",
      type: "array",
      label: "Gallery Column 1 Images",
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "galleryCol2Images",
      type: "array",
      label: "Gallery Column 2 Images",
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "galleryCol3Images",
      type: "array",
      label: "Gallery Column 3 Images",
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
