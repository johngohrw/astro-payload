import type { Block } from "payload";

export const contentTestimonialStatsSchema: Block = {
  slug: "contentTestimonialStats",
  labels: {
    singular: "Content Testimonial Stats",
    plural: "Content Testimonial Stats",
  },
  fields: [
    { name: "testimonialImage", type: "upload", label: "Testimonial Background Image", relationTo: "media" },
    { name: "testimonialLogo", type: "upload", label: "Testimonial Logo", relationTo: "media" },
    { name: "testimonialQuote", type: "textarea", label: "Testimonial Quote", defaultValue: "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor." },
    { name: "testimonialAuthorName", type: "text", label: "Testimonial Author Name", defaultValue: "Judith Rogers" },
    { name: "testimonialAuthorRole", type: "text", label: "Testimonial Author Role", defaultValue: "CEO at Workcation" },
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Company values" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "On a mission to empower remote teams" },
    { name: "bodyParagraph1", type: "textarea", label: "Body Paragraph 1", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id." },
    { name: "bodyParagraph2", type: "textarea", label: "Body Paragraph 2", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." },
    { name: "bodyParagraph3", type: "textarea", label: "Body Paragraph 3", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Founded", value: "2021" },
        { label: "Employees", value: "37" },
        { label: "Countries", value: "12" },
        { label: "Raised", value: "$25M" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
    {
      name: "cta",
      type: "group",
      label: "CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Learn more about our company" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
  ],
};
