import type { BlockRenderer, BlockTypeEnum } from "./_blockTypes";
import FeatSimpleThreeColRender from "./components/FeatSimpleThreeCol/FeatSimpleThreeColRender.astro";

// Register block renderers here
export const allBlockRenderersMap = {
  featSimpleThreeCol: FeatSimpleThreeColRender,
} as const satisfies Record<BlockTypeEnum, BlockRenderer>;
