import type { Block } from "payload";

export const heroWithOffsetImgSchema: Block = {
  slug: "heroWithOffsetImg",
  labels: {
    singular: "Hero with Images",
    plural: "Hero with Images",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      defaultValue: "We're changing the way people connect",
    },
    {
      name: "subtitle",
      type: "textarea",
      label: "Subtitle",
      defaultValue:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    {
      name: "button",
      type: "group",
      label: "Primary Button",
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
      name: "subAction",
      type: "group",
      label: "Secondary Action",
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
      name: "images",
      type: "array",
      label: "Images (5 required)",
      minRows: 5,
      maxRows: 5,
      defaultValue: [
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",
        "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
        "https://images.unsplash.com/photo-1670272188271-0fd33a0ebbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
      ],
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Image",
          required: true,
        },
      ],
    },
  ],
};
