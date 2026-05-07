import type { Block } from "payload";

export const faqOffsetWithSupportingTextSchema: Block = {
  slug: "faqOffsetWithSupportingText",
  labels: {
    singular: "Faq Offset With Supporting Text",
    plural: "Faq Offset With Supporting Texts",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Frequently asked questions",
    },
    {
      name: "supportText",
      type: "text",
      label: "Support Text",
      defaultValue: "Can't find the answer you're looking for? Reach out to our",
    },
    {
      name: "supportLinkLabel",
      type: "text",
      label: "Support Link Label",
      defaultValue: "customer support",
    },
    {
      name: "supportLinkHref",
      type: "text",
      label: "Support Link URL",
      defaultValue: "#",
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
