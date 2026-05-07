import type { Block } from "payload";

export const blogFeaturedPostSchema: Block = {
  slug: "blogFeaturedPost",
  labels: {
    singular: "Blog Featured Post",
    plural: "Blog Featured Posts",
  },
  fields: [
    {
      name: "featuredPost",
      type: "group",
      label: "Featured Post",
      fields: [
        { name: "date", type: "text", label: "Display Date", defaultValue: "Mar 16, 2020" },
        { name: "dateTime", type: "text", label: "Date Time (datetime attr)", defaultValue: "2020-03-16" },
        { name: "title", type: "text", label: "Title", defaultValue: "We're incredibly proud to announce we have secured $75m in Series B" },
        {
          name: "excerpt",
          type: "textarea",
          label: "Excerpt",
          defaultValue:
            "Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.",
        },
        { name: "readMoreHref", type: "text", label: "Read More Link", defaultValue: "#" },
        { name: "authorName", type: "text", label: "Author Name", defaultValue: "Michael Foster" },
        { name: "authorHref", type: "text", label: "Author Link", defaultValue: "#" },
        { name: "authorImage", type: "upload", relationTo: "media", label: "Author Image" },
      ],
    },
    {
      name: "posts",
      type: "array",
      label: "Post List",
      fields: [
        { name: "date", type: "text", label: "Display Date", required: true },
        { name: "dateTime", type: "text", label: "Date Time (datetime attr)", required: true },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "titleHref", type: "text", label: "Post Link", required: true },
        { name: "excerpt", type: "textarea", label: "Excerpt", required: true },
        { name: "authorName", type: "text", label: "Author Name", required: true },
        { name: "authorHref", type: "text", label: "Author Link", required: true },
        { name: "authorImage", type: "upload", relationTo: "media", label: "Author Image" },
      ],
    },
  ],
};
