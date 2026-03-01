import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { ctaCenteredOnDarkPanelSchema } from "./CtaCenteredOnDarkPanel/schema";
import { ctaDarkPanelWithAppScreenshotSchema } from "./CtaDarkPanelWithAppScreenshot/schema";
import { ctaSimpleCenteredSchema } from "./CtaSimpleCentered/schema";
import { ctaSimpleCenteredOnBrandSchema } from "./CtaSimpleCenteredOnBrand/schema";
import { ctaSimpleCenteredWithGradientSchema } from "./CtaSimpleCenteredWithGradient/schema";
import { ctaSimpleJustifiedSchema } from "./CtaSimpleJustified/schema";
import { ctaSimpleJustifiedOnSubtleBrandSchema } from "./CtaSimpleJustifiedOnSubtleBrand/schema";
import { ctaSimpleStackedSchema } from "./CtaSimpleStacked/schema";
import { ctaSplitWithImageSchema } from "./CtaSplitWithImage/schema";
import { ctaTwoColumnsWithPhotoSchema } from "./CtaTwoColumnsWithPhoto/schema";
import { ctaWithImageTilesSchema } from "./CtaWithImageTiles/schema";

export const ctaSchemas = {
  ctaCenteredOnDarkPanel: ctaCenteredOnDarkPanelSchema,
  ctaDarkPanelWithAppScreenshot: ctaDarkPanelWithAppScreenshotSchema,
  ctaSimpleCentered: ctaSimpleCenteredSchema,
  ctaSimpleCenteredOnBrand: ctaSimpleCenteredOnBrandSchema,
  ctaSimpleCenteredWithGradient: ctaSimpleCenteredWithGradientSchema,
  ctaSimpleJustified: ctaSimpleJustifiedSchema,
  ctaSimpleJustifiedOnSubtleBrand: ctaSimpleJustifiedOnSubtleBrandSchema,
  ctaSimpleStacked: ctaSimpleStackedSchema,
  ctaSplitWithImage: ctaSplitWithImageSchema,
  ctaTwoColumnsWithPhoto: ctaTwoColumnsWithPhotoSchema,
  ctaWithImageTiles: ctaWithImageTilesSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
