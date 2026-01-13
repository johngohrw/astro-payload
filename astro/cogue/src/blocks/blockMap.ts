import type { Block } from "payload";
import type { BlockTypeEnum } from "./_blockTypes";
import { FeatSimpleThreeColBlock } from "./components/FeatSimpleThreeCol/schema";

// Register blocks here
export const allBlocksMap = {
  featSimpleThreeCol: FeatSimpleThreeColBlock,
} as const satisfies Record<BlockTypeEnum, Block>;

export const allBlocksArray = Object.values(allBlocksMap);
