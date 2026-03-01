import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { statsSimpleSchema } from "./StatsSimple/schema";
import { statsSimpleGridSchema } from "./StatsSimpleGrid/schema";
import { statsSplitWithImageSchema } from "./StatsSplitWithImage/schema";
import { statsSteppedSchema } from "./StatsStepped/schema";
import { statsTimelineSchema } from "./StatsTimeline/schema";
import { statsWithBgImageSchema } from "./StatsWithBgImage/schema";
import { statsWithDescSchema } from "./StatsWithDesc/schema";
import { statsWithTwoColDescSchema } from "./StatsWithTwoColDesc/schema";

export const statsSchemas = {
  statsSimple: statsSimpleSchema,
  statsSimpleGrid: statsSimpleGridSchema,
  statsSplitWithImage: statsSplitWithImageSchema,
  statsStepped: statsSteppedSchema,
  statsTimeline: statsTimelineSchema,
  statsWithBgImage: statsWithBgImageSchema,
  statsWithDesc: statsWithDescSchema,
  statsWithTwoColDesc: statsWithTwoColDescSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
