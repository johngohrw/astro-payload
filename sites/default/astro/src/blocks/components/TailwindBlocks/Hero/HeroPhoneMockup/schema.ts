import type { Block } from "payload";

export const heroPhoneMockupSchema: Block = {
  slug: "heroPhoneMockup",
  labels: {
    singular: "Hero Phone Mockup",
    plural: "Heroes Phone Mockup",
  },
  fields: [
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      relationTo: "media",
    },
    {
      name: "navLinks",
      type: "array",
      label: "Nav Links",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Link" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    {
      name: "login",
      type: "group",
      label: "Login Link",
      fields: [
        { name: "label", type: "text", defaultValue: "Log in" },
        { name: "href", type: "text", defaultValue: "#" },
      ],
    },
    {
      name: "badge",
      type: "group",
      label: "Badge",
      fields: [
        { name: "highlight", type: "text", label: "Highlight Text", defaultValue: "We're hiring" },
        { name: "text", type: "text", defaultValue: "See open positions" },
        { name: "href", type: "text", defaultValue: "#" },
      ],
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "A better way to ship your projects",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.",
    },
    {
      name: "mobileScreenshot",
      type: "upload",
      label: "Mobile App Screenshot",
      relationTo: "media",
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
