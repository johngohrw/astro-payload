import type { Block } from "payload";

export const blogThreeColSchema: Block = {
  slug: "blogThreeCol",
  labels: {
    singular: "Blog Three Col",
    plural: "Blog Three Cols",
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
        { name: "date", type: "text", label: "Display Date", required: true },
        { name: "dateTime", type: "text", label: "Date Time (datetime attr)", required: true },
        { name: "categoryLabel", type: "text", label: "Category Label", required: true },
        { name: "categoryHref", type: "text", label: "Category Link", required: true },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "titleHref", type: "text", label: "Post Link", required: true },
        { name: "excerpt", type: "textarea", label: "Excerpt", required: true },
        {
          name: "author",
          type: "group",
          label: "Author",
          fields: [
            { name: "name", type: "text", label: "Name", required: true },
            { name: "href", type: "text", label: "Link", required: true },
            { name: "image", type: "upload", relationTo: "media", label: "Image" },
            { name: "role", type: "text", label: "Role", required: true },
          ],
        },
      ],
    },
  ],
};
