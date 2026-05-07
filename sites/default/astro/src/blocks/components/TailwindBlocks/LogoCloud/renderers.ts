import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { LogocloudGridRender } from "./LogocloudGrid";
import { LogocloudSimpleRender } from "./LogocloudSimple";
import { LogocloudSmCtaRender } from "./LogocloudSmCta";
import { LogocloudSmHeadingRender } from "./LogocloudSmHeading";
import { LogocloudSmLeftAlignedRender } from "./LogocloudSmLeftAligned";
import { LogocloudSplitLogosRightRender } from "./LogocloudSplitLogosRight";

export const logoCloudRenderers = {
  logocloudGrid: LogocloudGridRender,
  logocloudSimple: LogocloudSimpleRender,
  logocloudSmCta: LogocloudSmCtaRender,
  logocloudSmHeading: LogocloudSmHeadingRender,
  logocloudSmLeftAligned: LogocloudSmLeftAlignedRender,
  logocloudSplitLogosRight: LogocloudSplitLogosRightRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
