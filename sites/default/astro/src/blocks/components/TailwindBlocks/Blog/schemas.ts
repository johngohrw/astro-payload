import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { blogFeaturedPostSchema } from "./BlogFeaturedPost/schema";
import { blogPhotoListSchema } from "./BlogPhotoList/schema";
import { blogSingleColSchema } from "./BlogSingleCol/schema";
import { blogSingleColImgsSchema } from "./BlogSingleColImgs/schema";
import { blogThreeColSchema } from "./BlogThreeCol/schema";
import { blogThreeColBgImgsSchema } from "./BlogThreeColBgImgs/schema";
import { blogThreeColImgsSchema } from "./BlogThreeColImgs/schema";

export const blogSchemas = {
  blogFeaturedPost: blogFeaturedPostSchema,
  blogPhotoList: blogPhotoListSchema,
  blogSingleCol: blogSingleColSchema,
  blogSingleColImgs: blogSingleColImgsSchema,
  blogThreeCol: blogThreeColSchema,
  blogThreeColBgImgs: blogThreeColBgImgsSchema,
  blogThreeColImgs: blogThreeColImgsSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
