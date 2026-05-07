import type { Block } from "payload";

export const faqCenteredAccordionSchema: Block = {
  slug: "faqCenteredAccordion",
  labels: {
    singular: "Faq Centered Accordion",
    plural: "Faq Centered Accordions",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Frequently asked questions",
    },
    {
      name: "faqs",
      type: "array",
      label: "FAQs",
      fields: [
        {
          name: "question",
          type: "text",
          label: "Question",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
          label: "Answer",
          required: true,
        },
        {
          name: "defaultOpen",
          type: "checkbox",
          label: "Open by default",
        },
      ],
    },
  ],
};
