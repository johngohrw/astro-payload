import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { contentCenteredSchema } from "./ContentCentered/schema";
import { contentImgTitlesSchema } from "./ContentImgTitles/schema";
import { contentSplitImgSchema } from "./ContentSplitImg/schema";
import { contentStickyScreenshotSchema } from "./ContentStickyScreenshot/schema";
import { contentTestimonialSchema } from "./ContentTestimonial/schema";
import { contentTestimonialStatsSchema } from "./ContentTestimonialStats/schema";
import { contentTwoColScreenshotSchema } from "./ContentTwoColScreenshot/schema";

export const contentSchemas = {
  contentCentered: contentCenteredSchema,
  contentImgTitles: contentImgTitlesSchema,
  contentSplitImg: contentSplitImgSchema,
  contentStickyScreenshot: contentStickyScreenshotSchema,
  contentTestimonial: contentTestimonialSchema,
  contentTestimonialStats: contentTestimonialStatsSchema,
  contentTwoColScreenshot: contentTwoColScreenshotSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
