import type { Block } from "payload";

export const blogThreeColBgImgsSchema: Block = {
  slug: "blogThreeColBgImgs",
  labels: {
    singular: "Blog Three Col Bg Imgs",
    plural: "Blog Three Col Bg Imgs",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "From the blog",
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      defaultValue: "Learn how to grow your business with our expert advice.",
    },
    {
      name: "posts",
      type: "array",
      label: "Posts",
      fields: [
        { name: "backgroundImage", type: "upload", relationTo: "media", label: "Background Image" },
        { name: "date", type: "text", label: "Display Date", required: true },
        { name: "dateTime", type: "text", label: "Date Time (datetime attr)", required: true },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "titleHref", type: "text", label: "Post Link", required: true },
        {
          name: "author",
          type: "group",
          label: "Author",
          fields: [
            { name: "name", type: "text", label: "Name", required: true },
            { name: "image", type: "upload", relationTo: "media", label: "Image" },
          ],
        },
      ],
    },
  ],
};
