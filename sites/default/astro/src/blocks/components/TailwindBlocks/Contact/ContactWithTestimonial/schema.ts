import type { Block } from "payload";

export const contactWithTestimonialSchema: Block = {
  slug: "contactWithTestimonial",
  labels: {
    singular: "Contact With Testimonial",
    plural: "Contact With Testimonials",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "Let's talk about your project",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "We help companies and individuals build out their brand guidelines.",
    },
    {
      name: "submitLabel",
      type: "text",
      label: "Submit Button Label",
      defaultValue: "Let's talk",
    },
    {
      name: "privacyPolicyHref",
      type: "text",
      label: "Privacy Policy Link",
      defaultValue: "#",
    },
    {
      name: "formAction",
      type: "text",
      label: "Form Action URL",
      defaultValue: "#",
    },
    {
      name: "logoLight",
      type: "upload",
      label: "Logo (Light Mode)",
      relationTo: "media",
    },
    {
      name: "logoDark",
      type: "upload",
      label: "Logo (Dark Mode)",
      relationTo: "media",
    },
    {
      name: "testimonialQuote",
      type: "textarea",
      label: "Testimonial Quote",
      defaultValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    },
    {
      name: "testimonialAuthorName",
      type: "text",
      label: "Testimonial Author Name",
      defaultValue: "Brenna Goyette",
    },
    {
      name: "testimonialAuthorRole",
      type: "text",
      label: "Testimonial Author Role",
      defaultValue: "CEO of Workcation",
    },
    {
      name: "testimonialAuthorImage",
      type: "upload",
      label: "Testimonial Author Photo",
      relationTo: "media",
    },
  ],
};
