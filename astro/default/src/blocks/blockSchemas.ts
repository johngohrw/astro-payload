import type { Block } from "payload";

import type { BlockTypeEnum } from "./blockTypes";
import { tailwindBlockSchemas } from "./components/TailwindBlocks/schemas";

// Register blocks here
export const allBlocksMap = {
  ...tailwindBlockSchemas,
} as const satisfies Record<BlockTypeEnum, Block>;

export const allBlocksArray = Object.values(allBlocksMap);
