import type { Block } from "payload";

import { featSimpleThreeColBlock } from "./components/FeatSimpleThreeCol/schema";
import { heroSimpleCenteredBlock } from "./components/HeroSimpleCentered/schema";
import { heroWithOffsetImageBlock } from "./components/HeroWithOffsetImage/schema";
import type { BlockTypeEnum } from "./_blockTypes";

// Register blocks here
export const allBlocksMap = {
  featSimpleThreeCol: featSimpleThreeColBlock,
  heroSimpleCentered: heroSimpleCenteredBlock,
  heroWithOffsetImage: heroWithOffsetImageBlock,
} as const satisfies Record<BlockTypeEnum, Block>;

export const allBlocksArray = Object.values(allBlocksMap);
