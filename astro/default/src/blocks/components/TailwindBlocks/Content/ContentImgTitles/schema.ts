import type { Block } from "payload";

export const contentImgTitlesSchema: Block = {
  slug: "contentImgTitles",
  labels: {
    singular: "Content Img Titles",
    plural: "Content Img Titles",
  },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "About us" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "On a mission to empower remote teams" },
    { name: "intro", type: "textarea", label: "Intro", defaultValue: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas." },
    { name: "missionHeading", type: "text", label: "Mission Heading", defaultValue: "Our mission" },
    { name: "missionParagraph1", type: "textarea", label: "Mission Paragraph 1", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id." },
    { name: "missionParagraph2", type: "textarea", label: "Mission Paragraph 2", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." },
    { name: "image1", type: "upload", label: "Image 1", relationTo: "media" },
    { name: "image2", type: "upload", label: "Image 2", relationTo: "media" },
    { name: "image3", type: "upload", label: "Image 3", relationTo: "media" },
    { name: "image4", type: "upload", label: "Image 4", relationTo: "media" },
    { name: "statsEyebrow", type: "text", label: "Stats Eyebrow", defaultValue: "The numbers" },
    {
      name: "stats",
      type: "array",
      label: "Stats",
      defaultValue: [
        { label: "Raised", value: "$150M" },
        { label: "Companies", value: "30K" },
        { label: "Deals Closed", value: "1.5M" },
        { label: "Leads Generated", value: "200M" },
      ],
      fields: [
        { name: "label", type: "text", label: "Label", required: true },
        { name: "value", type: "text", label: "Value", required: true },
      ],
    },
  ],
};
