import type { Block } from "payload";

export const contentTwoColScreenshotSchema: Block = {
  slug: "contentTwoColScreenshot",
  labels: {
    singular: "Content Two Col Screenshot",
    plural: "Content Two Col Screenshots",
  },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Deploy faster" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "A better workflow" },
    { name: "col1Paragraph1", type: "textarea", label: "Column 1 Paragraph 1", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id." },
    { name: "col1Paragraph2", type: "textarea", label: "Column 1 Paragraph 2", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas." },
    { name: "col2Paragraph1", type: "textarea", label: "Column 2 Paragraph 1", defaultValue: "Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor." },
    { name: "col2Paragraph2", type: "textarea", label: "Column 2 Paragraph 2", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." },
    {
      name: "cta",
      type: "group",
      label: "CTA",
      fields: [
        { name: "label", type: "text", required: true, defaultValue: "Get started" },
        { name: "href", type: "text", required: true, defaultValue: "#" },
      ],
    },
    { name: "screenshot", type: "upload", label: "Screenshot (Light)", relationTo: "media" },
    { name: "screenshotDark", type: "upload", label: "Screenshot (Dark)", relationTo: "media" },
  ],
};
