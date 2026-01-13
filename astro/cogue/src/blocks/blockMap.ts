import type { Block } from "payload";
import type { BlockTypeEnum } from "./_blockTypes";
import { featSimpleThreeColBlock } from "./components/FeatSimpleThreeCol/schema";
import { heroSimpleCenteredBlock } from "./components/HeroSimpleCentered/schema";

// Register blocks here
export const allBlocksMap = {
  featSimpleThreeCol: featSimpleThreeColBlock,
  heroSimpleCentered: heroSimpleCenteredBlock,
} as const satisfies Record<BlockTypeEnum, Block>;

export const allBlocksArray = Object.values(allBlocksMap);
