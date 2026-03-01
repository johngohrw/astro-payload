import type { Block } from "payload";

export const bentoThreeColGridSchema: Block = {
  slug: "bentoThreeColGrid",
  labels: {
    singular: "Bento Three Col Grid",
    plural: "Bento Three Col Grids",
  },
  fields: [
    {
      name: "sectionEyebrow",
      type: "text",
      label: "Section Eyebrow",
      defaultValue: "Deploy faster",
    },
    {
      name: "sectionHeading",
      type: "text",
      label: "Section Heading",
      defaultValue: "Everything you need to deploy your app",
    },
    {
      name: "leftCard",
      type: "group",
      label: "Left Card (Mobile Friendly, tall)",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          defaultValue: "Mobile friendly",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          defaultValue: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        },
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
        },
      ],
    },
    {
      name: "topMidCard",
      type: "group",
      label: "Top Middle Card (Performance)",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          defaultValue: "Performance",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
        },
        {
          name: "lightImage",
          type: "upload",
          label: "Light Mode Image",
          relationTo: "media",
        },
        {
          name: "darkImage",
          type: "upload",
          label: "Dark Mode Image",
          relationTo: "media",
        },
      ],
    },
    {
      name: "bottomMidCard",
      type: "group",
      label: "Bottom Middle Card (Security)",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          defaultValue: "Security",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          defaultValue: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
        },
        {
          name: "lightImage",
          type: "upload",
          label: "Light Mode Image",
          relationTo: "media",
        },
        {
          name: "darkImage",
          type: "upload",
          label: "Dark Mode Image",
          relationTo: "media",
        },
      ],
    },
    {
      name: "rightCard",
      type: "group",
      label: "Right Card (Powerful APIs, tall)",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
          required: true,
          defaultValue: "Powerful APIs",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          defaultValue: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
        },
        {
          name: "codeTab1",
          type: "text",
          label: "Code Editor Tab 1",
          defaultValue: "NotificationSetting.jsx",
        },
        {
          name: "codeTab2",
          type: "text",
          label: "Code Editor Tab 2",
          defaultValue: "App.jsx",
        },
      ],
    },
  ],
};
