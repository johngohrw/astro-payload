import type { Block } from "payload";

export const headerWithStatsSchema: Block = {
  slug: "headerWithStats",
  labels: {
    singular: "Header With Stats",
    plural: "Headers With Stats",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Work with us",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.",
    },
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image",
      relationTo: "media",
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
        { name: "href", type: "text", label: "URL", required: true },
      ],
    },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { value: "12", label: "Offices worldwide" },
        { value: "300+", label: "Full-time colleagues" },
        { value: "40", label: "Hours per week" },
        { value: "Unlimited", label: "Paid time off" },
      ],
      fields: [
        { name: "value", type: "text", label: "Value", required: true },
        { name: "label", type: "text", label: "Label", required: true },
      ],
    },
  ],
};
