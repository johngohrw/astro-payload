import type { Block } from "payload";

export const contentCenteredSchema: Block = {
  slug: "contentCentered",
  labels: {
    singular: "Content Centered",
    plural: "Content Centereds",
  },
  fields: [
    { name: "eyebrow", type: "text", label: "Eyebrow", defaultValue: "Introducing" },
    { name: "heading", type: "text", label: "Heading", defaultValue: "JavaScript for beginners" },
    { name: "intro", type: "textarea", label: "Intro", defaultValue: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien." },
    { name: "bodyParagraph1", type: "textarea", label: "Body Paragraph 1", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id." },
    {
      name: "checklistItems",
      type: "array",
      label: "Checklist Items",
      defaultValue: [
        { title: "Data types.", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione." },
        { title: "Loops.", description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo." },
        { title: "Events.", description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." },
      ],
      fields: [
        { name: "title", type: "text", label: "Title", required: true },
        { name: "description", type: "textarea", label: "Description", required: true },
      ],
    },
    { name: "bodyParagraph2", type: "textarea", label: "Body Paragraph 2", defaultValue: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." },
    { name: "subheading1", type: "text", label: "Subheading 1", defaultValue: "From beginner to expert in 3 hours" },
    { name: "subheading1Body", type: "textarea", label: "Subheading 1 Body", defaultValue: "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam." },
    { name: "quoteText", type: "textarea", label: "Quote Text", defaultValue: "Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim tristique." },
    { name: "quoteAuthorName", type: "text", label: "Quote Author Name", defaultValue: "Maria Hill" },
    { name: "quoteAuthorRole", type: "text", label: "Quote Author Role", defaultValue: "Marketing Manager" },
    { name: "quoteAuthorImage", type: "upload", label: "Quote Author Image", relationTo: "media" },
    { name: "bodyParagraph3", type: "textarea", label: "Body Paragraph 3", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit." },
    { name: "mainImage", type: "upload", label: "Main Image", relationTo: "media" },
    { name: "mainImageAlt", type: "text", label: "Main Image Alt", defaultValue: "" },
    { name: "mainImageCaption", type: "text", label: "Main Image Caption", defaultValue: "Faucibus commodo massa rhoncus, volutpat." },
    { name: "subheading2", type: "text", label: "Subheading 2", defaultValue: "Everything you need to get up and running" },
    { name: "subheading2Body", type: "textarea", label: "Subheading 2 Body", defaultValue: "Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam." },
    { name: "bodyParagraph4", type: "textarea", label: "Body Paragraph 4", defaultValue: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit." },
  ],
};
