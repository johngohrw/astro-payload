import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { FeatSimpleRender } from "./FeatSimple";
import { FeatSimple3x2GridRender } from "./FeatSimple3x2Grid";
import { FeatCentered2x2GridRender } from "./FeatCentered2x2Grid";
import { FeatOffset2x2GridRender } from "./FeatOffset2x2Grid";
import { FeatOffsetWithFeatureListRender } from "./FeatOffsetWithFeatureList";
import { FeatSimpleThreeColumnWithSmallIconsRender } from "./FeatSimpleThreeColumnWithSmallIcons";
import { FeatSimpleThreeColumnWithLargeIconsRender } from "./FeatSimpleThreeColumnWithLargeIcons";
import { FeatContainedInPanelRender } from "./FeatContainedInPanel";
import { FeatWithCodeExamplePanelRender } from "./FeatWithCodeExamplePanel";
import { FeatWithProductScreenshotRender } from "./FeatWithProductScreenshot";
import { FeatWithProductScreenshotOnLeftRender } from "./FeatWithProductScreenshotOnLeft";
import { FeatWithProductScreenshotPanelRender } from "./FeatWithProductScreenshotPanel";
import { FeatWithLargeScreenshotRender } from "./FeatWithLargeScreenshot";
import { FeatWithLargeBorderedScreenshotRender } from "./FeatWithLargeBorderedScreenshot";
import { FeatWithTestimonialRender } from "./FeatWithTestimonial";

export const featRenderers = {
  featSimple: FeatSimpleRender,
  featSimple3x2Grid: FeatSimple3x2GridRender,
  featCentered2x2Grid: FeatCentered2x2GridRender,
  featOffset2x2Grid: FeatOffset2x2GridRender,
  featOffsetWithFeatureList: FeatOffsetWithFeatureListRender,
  featSimpleThreeColSmIcons: FeatSimpleThreeColumnWithSmallIconsRender,
  featSimpleThreeColLgIcons: FeatSimpleThreeColumnWithLargeIconsRender,
  featContainedInPanel: FeatContainedInPanelRender,
  featWithCodeExamplePanel: FeatWithCodeExamplePanelRender,
  featWithProductScreenshot: FeatWithProductScreenshotRender,
  featWithProductScreenshotOnLeft: FeatWithProductScreenshotOnLeftRender,
  featWithProductScreenshotPanel: FeatWithProductScreenshotPanelRender,
  featWithLargeScreenshot: FeatWithLargeScreenshotRender,
  featWithLargeBorderedScreenshot: FeatWithLargeBorderedScreenshotRender,
  featWithTestimonial: FeatWithTestimonialRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
