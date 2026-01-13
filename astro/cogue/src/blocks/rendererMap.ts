import type { BlockRenderer, BlockTypeEnum } from "./_blockTypes";
import FeatSimpleThreeColRender from "./components/FeatSimpleThreeCol/FeatSimpleThreeColRender.astro";
import HeroSimpleCenteredRender from "./components/HeroSimpleCentered/HeroSimpleCenteredRender.astro";
import HeroWithOffsetImageRender from "./components/HeroWithOffsetImage/HeroWithOffsetImageRender.astro";

// Register block renderers here
export const allBlockRenderersMap = {
  featSimpleThreeCol: FeatSimpleThreeColRender,
  heroSimpleCentered: HeroSimpleCenteredRender,
  heroWithOffsetImage: HeroWithOffsetImageRender,
} as const satisfies Record<BlockTypeEnum, BlockRenderer>;
