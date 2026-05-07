import type { Block } from "payload";

export const faqSideBySideSchema: Block = {
  slug: "faqSideBySide",
  labels: {
    singular: "Faq Side By Side",
    plural: "Faq Side By Sides",
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
        { name: "question", type: "text", label: "Question", required: true },
        { name: "answer", type: "textarea", label: "Answer", required: true },
      ],
    },
  ],
};
