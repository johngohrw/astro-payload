import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { ContentCenteredRender } from "./ContentCentered";
import { ContentImgTitlesRender } from "./ContentImgTitles";
import { ContentSplitImgRender } from "./ContentSplitImg";
import { ContentStickyScreenshotRender } from "./ContentStickyScreenshot";
import { ContentTestimonialRender } from "./ContentTestimonial";
import { ContentTestimonialStatsRender } from "./ContentTestimonialStats";
import { ContentTwoColScreenshotRender } from "./ContentTwoColScreenshot";

export const contentRenderers = {
  contentCentered: ContentCenteredRender,
  contentImgTitles: ContentImgTitlesRender,
  contentSplitImg: ContentSplitImgRender,
  contentStickyScreenshot: ContentStickyScreenshotRender,
  contentTestimonial: ContentTestimonialRender,
  contentTestimonialStats: ContentTestimonialStatsRender,
  contentTwoColScreenshot: ContentTwoColScreenshotRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
