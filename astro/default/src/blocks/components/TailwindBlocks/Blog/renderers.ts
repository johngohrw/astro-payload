import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { BlogFeaturedPostRender } from "./BlogFeaturedPost";
import { BlogPhotoListRender } from "./BlogPhotoList";
import { BlogSingleColRender } from "./BlogSingleCol";
import { BlogSingleColImgsRender } from "./BlogSingleColImgs";
import { BlogThreeColRender } from "./BlogThreeCol";
import { BlogThreeColBgImgsRender } from "./BlogThreeColBgImgs";
import { BlogThreeColImgsRender } from "./BlogThreeColImgs";

export const blogRenderers = {
  blogFeaturedPost: BlogFeaturedPostRender,
  blogPhotoList: BlogPhotoListRender,
  blogSingleCol: BlogSingleColRender,
  blogSingleColImgs: BlogSingleColImgsRender,
  blogThreeCol: BlogThreeColRender,
  blogThreeColBgImgs: BlogThreeColBgImgsRender,
  blogThreeColImgs: BlogThreeColImgsRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
