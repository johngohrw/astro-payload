import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { CtaCenteredOnDarkPanelRender } from "./CtaCenteredOnDarkPanel";
import { CtaDarkPanelWithAppScreenshotRender } from "./CtaDarkPanelWithAppScreenshot";
import { CtaSimpleCenteredRender } from "./CtaSimpleCentered";
import { CtaSimpleCenteredOnBrandRender } from "./CtaSimpleCenteredOnBrand";
import { CtaSimpleCenteredWithGradientRender } from "./CtaSimpleCenteredWithGradient";
import { CtaSimpleJustifiedRender } from "./CtaSimpleJustified";
import { CtaSimpleJustifiedOnSubtleBrandRender } from "./CtaSimpleJustifiedOnSubtleBrand";
import { CtaSimpleStackedRender } from "./CtaSimpleStacked";
import { CtaSplitWithImageRender } from "./CtaSplitWithImage";
import { CtaTwoColumnsWithPhotoRender } from "./CtaTwoColumnsWithPhoto";
import { CtaWithImageTilesRender } from "./CtaWithImageTiles";

export const ctaRenderers = {
  ctaCenteredOnDarkPanel: CtaCenteredOnDarkPanelRender,
  ctaDarkPanelWithAppScreenshot: CtaDarkPanelWithAppScreenshotRender,
  ctaSimpleCentered: CtaSimpleCenteredRender,
  ctaSimpleCenteredOnBrand: CtaSimpleCenteredOnBrandRender,
  ctaSimpleCenteredWithGradient: CtaSimpleCenteredWithGradientRender,
  ctaSimpleJustified: CtaSimpleJustifiedRender,
  ctaSimpleJustifiedOnSubtleBrand: CtaSimpleJustifiedOnSubtleBrandRender,
  ctaSimpleStacked: CtaSimpleStackedRender,
  ctaSplitWithImage: CtaSplitWithImageRender,
  ctaTwoColumnsWithPhoto: CtaTwoColumnsWithPhotoRender,
  ctaWithImageTiles: CtaWithImageTilesRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
