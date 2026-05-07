import type { BlockRenderer, BlockTypeEnum } from "./blockTypes";
import { tailwindBlockRenderers } from "./components/TailwindBlocks/renderers";

// Register block renderers here
export const allBlockRenderersMap = {
  ...tailwindBlockRenderers,
} as const satisfies Record<BlockTypeEnum, BlockRenderer>;
