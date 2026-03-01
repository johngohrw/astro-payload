import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { heroAngledImgRightSchema } from "./HeroAngledImgRight/schema";
import { heroAppScreenshotSchema } from "./HeroAppScreenshot/schema";
import { heroBorderedAppShotSchema } from "./HeroBorderedAppShot/schema";
import { heroImgTilesSchema } from "./HeroImgTiles/schema";
import { heroOffsetImgSchema } from "./HeroOffsetImg/schema";
import { heroPhoneMockupSchema } from "./HeroPhoneMockup/schema";
import { heroSimpleCenteredSchema } from "./HeroSimpleCentered/schema";
import { heroSmCtrBgImgSchema } from "./HeroSmCtrBgImg/schema";
import { heroSplitBorderedShotSchema } from "./HeroSplitBorderedShot/schema";
import { heroSplitCodeExampleSchema } from "./HeroSplitCodeExample/schema";
import { heroSplitImgSchema } from "./HeroSplitImg/schema";
import { heroSplitScreenshotSchema } from "./HeroSplitScreenshot/schema";

export const heroSchemas = {
  heroAngledImgRight: heroAngledImgRightSchema,
  heroAppScreenshot: heroAppScreenshotSchema,
  heroBorderedAppShot: heroBorderedAppShotSchema,
  heroImgTiles: heroImgTilesSchema,
  heroOffsetImg: heroOffsetImgSchema,
  heroPhoneMockup: heroPhoneMockupSchema,
  heroSimpleCentered: heroSimpleCenteredSchema,
  heroSmCtrBgImg: heroSmCtrBgImgSchema,
  heroSplitBorderedShot: heroSplitBorderedShotSchema,
  heroSplitCodeExample: heroSplitCodeExampleSchema,
  heroSplitImg: heroSplitImgSchema,
  heroSplitScreenshot: heroSplitScreenshotSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
