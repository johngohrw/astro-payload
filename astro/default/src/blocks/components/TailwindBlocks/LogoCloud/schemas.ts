import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { logocloudGridSchema } from "./LogocloudGrid/schema";
import { logocloudSimpleSchema } from "./LogocloudSimple/schema";
import { logocloudSmCtaSchema } from "./LogocloudSmCta/schema";
import { logocloudSmHeadingSchema } from "./LogocloudSmHeading/schema";
import { logocloudSmLeftAlignedSchema } from "./LogocloudSmLeftAligned/schema";
import { logocloudSplitLogosRightSchema } from "./LogocloudSplitLogosRight/schema";

export const logoCloudSchemas = {
  logocloudGrid: logocloudGridSchema,
  logocloudSimple: logocloudSimpleSchema,
  logocloudSmCta: logocloudSmCtaSchema,
  logocloudSmHeading: logocloudSmHeadingSchema,
  logocloudSmLeftAligned: logocloudSmLeftAlignedSchema,
  logocloudSplitLogosRight: logocloudSplitLogosRightSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
