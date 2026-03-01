import type { Block } from "payload";

export const testimonialsStarRatingSchema: Block = {
  slug: "testimonialsStarRating",
  labels: {
    singular: "Testimonials Star Rating",
    plural: "Testimonials Star Ratings",
  },
  fields: [
    {
      name: "starCount",
      type: "number",
      label: "Star Count",
      defaultValue: 5,
    },
    {
      name: "quote",
      type: "textarea",
      label: "Quote",
      defaultValue:
        "Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.",
    },
    {
      name: "authorImage",
      type: "upload",
      relationTo: "media",
      label: "Author Image",
    },
    {
      name: "authorName",
      type: "text",
      label: "Author Name",
      defaultValue: "Judith Black",
    },
    {
      name: "authorTitle",
      type: "text",
      label: "Author Title",
      defaultValue: "CEO of Workcation",
    },
  ],
};
