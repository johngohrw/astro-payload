import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { StatsSimpleRender } from "./StatsSimple";
import { StatsSimpleGridRender } from "./StatsSimpleGrid";
import { StatsSplitWithImageRender } from "./StatsSplitWithImage";
import { StatsSteppedRender } from "./StatsStepped";
import { StatsTimelineRender } from "./StatsTimeline";
import { StatsWithBgImageRender } from "./StatsWithBgImage";
import { StatsWithDescRender } from "./StatsWithDesc";
import { StatsWithTwoColDescRender } from "./StatsWithTwoColDesc";

export const statsRenderers = {
  statsSimple: StatsSimpleRender,
  statsSimpleGrid: StatsSimpleGridRender,
  statsSplitWithImage: StatsSplitWithImageRender,
  statsStepped: StatsSteppedRender,
  statsTimeline: StatsTimelineRender,
  statsWithBgImage: StatsWithBgImageRender,
  statsWithDesc: StatsWithDescRender,
  statsWithTwoColDesc: StatsWithTwoColDescRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
