import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { bentoThreeColGridSchema } from "./BentoThreeColGrid/schema";
import { bentoTwoRowGridSchema } from "./BentoTwoRowGrid/schema";
import { bentoTwoRowThreeColGridSchema } from "./BentoTwoRowThreeColGrid/schema";

export const bentoSchemas = {
  bentoThreeColGrid: bentoThreeColGridSchema,
  bentoTwoRowGrid: bentoTwoRowGridSchema,
  bentoTwoRowThreeColGrid: bentoTwoRowThreeColGridSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
