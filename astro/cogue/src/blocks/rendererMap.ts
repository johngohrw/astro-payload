import type { BlockRenderer, BlockTypeEnum } from "./_blockTypes";
import FeatSimpleThreeColRender from "./components/FeatSimpleThreeCol/FeatSimpleThreeColRender.astro";
import HeroSimpleCenteredRender from "./components/HeroSimpleCentered/HeroSimpleCenteredRender.astro";

// Register block renderers here
export const allBlockRenderersMap = {
  featSimpleThreeCol: FeatSimpleThreeColRender,
  heroSimpleCentered: HeroSimpleCenteredRender,
} as const satisfies Record<BlockTypeEnum, BlockRenderer>;
