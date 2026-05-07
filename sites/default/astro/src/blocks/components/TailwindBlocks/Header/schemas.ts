import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { headerCenteredSchema } from "./HeaderCentered/schema";
import { headerCtrBgImgSchema } from "./HeaderCtrBgImg/schema";
import { headerCtrEyebrowSchema } from "./HeaderCtrEyebrow/schema";
import { headerSimpleSchema } from "./HeaderSimple/schema";
import { headerSmBgImgSchema } from "./HeaderSmBgImg/schema";
import { headerSmEyebrowSchema } from "./HeaderSmEyebrow/schema";
import { headerWithCardsSchema } from "./HeaderWithCards/schema";
import { headerWithStatsSchema } from "./HeaderWithStats/schema";

export const headerSchemas = {
  headerCentered: headerCenteredSchema,
  headerCtrBgImg: headerCtrBgImgSchema,
  headerCtrEyebrow: headerCtrEyebrowSchema,
  headerSimple: headerSimpleSchema,
  headerSmBgImg: headerSmBgImgSchema,
  headerSmEyebrow: headerSmEyebrowSchema,
  headerWithCards: headerWithCardsSchema,
  headerWithStats: headerWithStatsSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
