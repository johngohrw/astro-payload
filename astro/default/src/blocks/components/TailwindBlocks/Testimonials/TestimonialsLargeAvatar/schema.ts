import type { Block } from "payload";

export const testimonialsLargeAvatarSchema: Block = {
  slug: "testimonialsLargeAvatar",
  labels: {
    singular: "Testimonials Large Avatar",
    plural: "Testimonials Large Avatars",
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      label: "Quote",
      defaultValue:
        "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
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
