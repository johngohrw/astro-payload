import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { BentoThreeColGridRender } from "./BentoThreeColGrid";
import { BentoTwoRowGridRender } from "./BentoTwoRowGrid";
import { BentoTwoRowThreeColGridRender } from "./BentoTwoRowThreeColGrid";

export const bentoRenderers = {
  bentoThreeColGrid: BentoThreeColGridRender,
  bentoTwoRowGrid: BentoTwoRowGridRender,
  bentoTwoRowThreeColGrid: BentoTwoRowThreeColGridRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
