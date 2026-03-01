import type { Block } from "payload";

export const featWithTestimonialSchema: Block = {
  slug: "featWithTestimonial",
  labels: { singular: "Feat With Testimonial", plural: "Feat With Testimonials" },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "A better workflow" },
    { name: "description", type: "textarea", label: "Description", defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." },
    { name: "ctaLabel", type: "text", label: "CTA Label", defaultValue: "Get started" },
    { name: "ctaHref", type: "text", label: "CTA URL", defaultValue: "#" },
    {
      name: "testimonial", type: "group", label: "Testimonial",
      fields: [
        { name: "quote", type: "textarea", label: "Quote", defaultValue: "Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique." },
        { name: "authorName", type: "text", label: "Author Name", defaultValue: "Maria Hill" },
        { name: "authorTitle", type: "text", label: "Author Title", defaultValue: "Marketing Manager" },
        { name: "authorAvatar", type: "upload", label: "Author Avatar", relationTo: "media" },
      ],
    },
    { name: "screenshot", type: "upload", label: "Screenshot", relationTo: "media" },
  ],
};
