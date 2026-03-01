import type { Block } from "payload";

export const footer4ColMissionSchema: Block = {
  slug: "footer4ColMission",
  labels: {
    singular: "Footer 4 Col Mission",
    plural: "Footer 4 Col Missions",
  },
  fields: [
    {
      name: "logoSrc",
      type: "upload",
      relationTo: "media",
      label: "Logo (Light Mode)",
    },
    {
      name: "logoDarkSrc",
      type: "upload",
      relationTo: "media",
      label: "Logo (Dark Mode)",
    },
    {
      name: "logoAlt",
      type: "text",
      label: "Logo Alt Text",
      defaultValue: "Company name",
    },
    {
      name: "missionText",
      type: "textarea",
      label: "Mission Text",
      defaultValue: "Making the world a better place through constructing elegant hierarchies.",
    },
    {
      name: "socialLinks",
      type: "array",
      label: "Social Links",
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "href", type: "text", label: "URL", required: true },
        { name: "iconSvg", type: "textarea", label: "Icon SVG", required: true },
      ],
    },
    {
      name: "columns",
      type: "array",
      label: "Navigation Columns",
      fields: [
        { name: "heading", type: "text", label: "Column Heading", required: true },
        {
          name: "links",
          type: "array",
          label: "Links",
          fields: [
            { name: "label", type: "text", label: "Label", required: true },
            { name: "href", type: "text", label: "URL", required: true },
          ],
        },
      ],
    },
    {
      name: "copyrightText",
      type: "text",
      label: "Copyright Text",
      defaultValue: "© 2024 Your Company, Inc. All rights reserved.",
    },
  ],
};
