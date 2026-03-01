import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { HeaderCenteredRender } from "./HeaderCentered";
import { HeaderCtrBgImgRender } from "./HeaderCtrBgImg";
import { HeaderCtrEyebrowRender } from "./HeaderCtrEyebrow";
import { HeaderSimpleRender } from "./HeaderSimple";
import { HeaderSmBgImgRender } from "./HeaderSmBgImg";
import { HeaderSmEyebrowRender } from "./HeaderSmEyebrow";
import { HeaderWithCardsRender } from "./HeaderWithCards";
import { HeaderWithStatsRender } from "./HeaderWithStats";

export const headerRenderers = {
  headerCentered: HeaderCenteredRender,
  headerCtrBgImg: HeaderCtrBgImgRender,
  headerCtrEyebrow: HeaderCtrEyebrowRender,
  headerSimple: HeaderSimpleRender,
  headerSmBgImg: HeaderSmBgImgRender,
  headerSmEyebrow: HeaderSmEyebrowRender,
  headerWithCards: HeaderWithCardsRender,
  headerWithStats: HeaderWithStatsRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
