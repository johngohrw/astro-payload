import type { Block } from "payload";

export const ctaSplitWithImageSchema: Block = {
  slug: "ctaSplitWithImage",
  labels: { singular: "Cta Split With Image", plural: "Cta Split With Images" },
  fields: [
    { name: "badge", type: "text", label: "Badge", defaultValue: "Award winning support" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "We're here to help" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
    },
    { name: "ctaLabel", type: "text", label: "CTA Label", defaultValue: "Visit the help center" },
    { name: "ctaHref", type: "text", label: "CTA Href", defaultValue: "#" },
    { name: "image", type: "upload", relationTo: "media", label: "Image" },
    { name: "imageAlt", type: "text", label: "Image Alt" },
  ],
};
