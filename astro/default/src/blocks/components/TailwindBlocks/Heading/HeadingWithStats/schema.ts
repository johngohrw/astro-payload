import type { Block } from "payload";

export const headingWithStatsSchema: Block = {
  slug: "headingWithStats",
  labels: { singular: "Heading With Stats", plural: "Heading With Stats" },
  fields: [
    { name: "lightBgImage", type: "upload", relationTo: "media", label: "Light Background Image" },
    { name: "darkBgImage", type: "upload", relationTo: "media", label: "Dark Background Image" },
    { name: "title", type: "text", label: "Title", defaultValue: "Work with us" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
    },
    {
      name: "links",
      type: "array",
      label: "Links",
      defaultValue: [
        { label: "Open roles", href: "#" },
        { label: "Internship program", href: "#" },
        { label: "Our values", href: "#" },
        { label: "Meet our leadership", href: "#" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "href", type: "text", label: "Href", required: true },
      ],
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Offices worldwide", value: "12" },
        { label: "Full-time colleagues", value: "300+" },
        { label: "Hours per week", value: "40" },
        { label: "Paid time off", value: "Unlimited" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
