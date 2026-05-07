import type { Block } from "payload";

export const contactSplitImgSchema: Block = {
  slug: "contactSplitImg",
  labels: {
    singular: "Contact Split Img",
    plural: "Contact Split Imgs",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      label: "Side Image",
      relationTo: "media",
    },
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Let's work together",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue:
        "Proin volutpat consequat porttitor cras nullam gravida at orci molestie a eu arcu sed ut tincidunt magna.",
    },
    {
      name: "submitLabel",
      type: "text",
      label: "Submit Button Label",
      defaultValue: "Send message",
    },
    {
      name: "formAction",
      type: "text",
      label: "Form Action URL",
      defaultValue: "#",
    },
  ],
};
