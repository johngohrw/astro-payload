import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { HeroAngledImgRightRender } from "./HeroAngledImgRight";
import { HeroAppScreenshotRender } from "./HeroAppScreenshot";
import { HeroBorderedAppShotRender } from "./HeroBorderedAppShot";
import { HeroImgTilesRender } from "./HeroImgTiles";
import { HeroOffsetImgRender } from "./HeroOffsetImg";
import { HeroPhoneMockupRender } from "./HeroPhoneMockup";
import { HeroSimpleCenteredRender } from "./HeroSimpleCentered";
import { HeroSmCtrBgImgRender } from "./HeroSmCtrBgImg";
import { HeroSplitBorderedShotRender } from "./HeroSplitBorderedShot";
import { HeroSplitCodeExampleRender } from "./HeroSplitCodeExample";
import { HeroSplitImgRender } from "./HeroSplitImg";
import { HeroSplitScreenshotRender } from "./HeroSplitScreenshot";

export const heroRenderers = {
  heroAngledImgRight: HeroAngledImgRightRender,
  heroAppScreenshot: HeroAppScreenshotRender,
  heroBorderedAppShot: HeroBorderedAppShotRender,
  heroImgTiles: HeroImgTilesRender,
  heroOffsetImg: HeroOffsetImgRender,
  heroPhoneMockup: HeroPhoneMockupRender,
  heroSimpleCentered: HeroSimpleCenteredRender,
  heroSmCtrBgImg: HeroSmCtrBgImgRender,
  heroSplitBorderedShot: HeroSplitBorderedShotRender,
  heroSplitCodeExample: HeroSplitCodeExampleRender,
  heroSplitImg: HeroSplitImgRender,
  heroSplitScreenshot: HeroSplitScreenshotRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
