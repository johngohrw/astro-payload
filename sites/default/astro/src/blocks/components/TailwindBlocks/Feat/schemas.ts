import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { featSimpleSchema } from "./FeatSimple/schema";
import { featSimple3x2GridSchema } from "./FeatSimple3x2Grid/schema";
import { featCentered2x2GridSchema } from "./FeatCentered2x2Grid/schema";
import { featOffset2x2GridSchema } from "./FeatOffset2x2Grid/schema";
import { featOffsetWithFeatureListSchema } from "./FeatOffsetWithFeatureList/schema";
import { featSimpleThreeColSmIconsSchema } from "./FeatSimpleThreeColumnWithSmallIcons/schema";
import { featSimpleThreeColLgIconsSchema } from "./FeatSimpleThreeColumnWithLargeIcons/schema";
import { featContainedInPanelSchema } from "./FeatContainedInPanel/schema";
import { featWithCodeExamplePanelSchema } from "./FeatWithCodeExamplePanel/schema";
import { featWithProductScreenshotSchema } from "./FeatWithProductScreenshot/schema";
import { featWithProductScreenshotOnLeftSchema } from "./FeatWithProductScreenshotOnLeft/schema";
import { featWithProductScreenshotPanelSchema } from "./FeatWithProductScreenshotPanel/schema";
import { featWithLargeScreenshotSchema } from "./FeatWithLargeScreenshot/schema";
import { featWithLargeBorderedScreenshotSchema } from "./FeatWithLargeBorderedScreenshot/schema";
import { featWithTestimonialSchema } from "./FeatWithTestimonial/schema";

export const featSchemas = {
  featSimple: featSimpleSchema,
  featSimple3x2Grid: featSimple3x2GridSchema,
  featCentered2x2Grid: featCentered2x2GridSchema,
  featOffset2x2Grid: featOffset2x2GridSchema,
  featOffsetWithFeatureList: featOffsetWithFeatureListSchema,
  featSimpleThreeColSmIcons: featSimpleThreeColSmIconsSchema,
  featSimpleThreeColLgIcons: featSimpleThreeColLgIconsSchema,
  featContainedInPanel: featContainedInPanelSchema,
  featWithCodeExamplePanel: featWithCodeExamplePanelSchema,
  featWithProductScreenshot: featWithProductScreenshotSchema,
  featWithProductScreenshotOnLeft: featWithProductScreenshotOnLeftSchema,
  featWithProductScreenshotPanel: featWithProductScreenshotPanelSchema,
  featWithLargeScreenshot: featWithLargeScreenshotSchema,
  featWithLargeBorderedScreenshot: featWithLargeBorderedScreenshotSchema,
  featWithTestimonial: featWithTestimonialSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
