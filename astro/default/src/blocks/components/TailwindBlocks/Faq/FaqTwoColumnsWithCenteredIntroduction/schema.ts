import type { Block } from "payload";

export const faqTwoColumnsWithCenteredIntroductionSchema: Block = {
  slug: "faqTwoColCtrIntro",
  labels: {
    singular: "Faq Two Col Ctr Intro",
    plural: "Faq Two Col Ctr Intros",
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
      defaultValue: "Have a different question and can't find the answer you're looking for? Reach out to our support team by",
    },
    {
      name: "supportLinkLabel",
      type: "text",
      label: "Support Link Label",
      defaultValue: "sending us an email",
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
