import type { Block } from "payload";

export const contentTestimonialSchema: Block = {
  slug: "contentTestimonial",
  labels: {
    singular: "Content Testimonial",
    plural: "Content Testimonials",
  },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "A better workflow" },
    { name: "intro", type: "textarea", label: "Intro", defaultValue: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien." },
    { name: "quoteText", type: "textarea", label: "Quote Text", defaultValue: "Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique." },
    { name: "quoteAuthorImage", type: "upload", label: "Quote Author Image", relationTo: "media" },
    { name: "quoteAuthorName", type: "text", label: "Quote Author Name", defaultValue: "Brenna Goyette" },
    { name: "quoteAuthorHandle", type: "text", label: "Quote Author Handle", defaultValue: "@brenna" },
    { name: "bodyParagraph1", type: "textarea", label: "Body Paragraph 1", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id." },
    {
      name: "featureItems",
      type: "array",
      label: "Feature Items",
      fields: [
        { name: "iconSvg", type: "textarea", label: "Icon SVG", required: true },
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
    { name: "bodyParagraph2", type: "textarea", label: "Body Paragraph 2", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." },
    { name: "subheading", type: "text", label: "Subheading", defaultValue: "No server? No problem." },
    { name: "subheadingBody", type: "textarea", label: "Subheading Body", defaultValue: "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam." },
  ],
};
