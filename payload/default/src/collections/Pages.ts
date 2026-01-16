// import { allBlocksArray } from "@astro-default/blocks/blockMap";
import { allBlocksArray } from "@astro-default/blocks/blockMap";
import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true, // public read for build-time fetch
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "contentBlocks",
      type: "blocks",
      blocks: allBlocksArray,
    },
  ],
};
