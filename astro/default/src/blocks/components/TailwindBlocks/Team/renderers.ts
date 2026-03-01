import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { TeamFullWidthVertImgsRender } from "./TeamFullWidthVertImgs";
import { TeamGridLargeRoundRender } from "./TeamGridLargeRound";
import { TeamGridRoundImgsRender } from "./TeamGridRoundImgs";
import { TeamImgShortParaRender } from "./TeamImgShortPara";
import { TeamLargeGridCardsRender } from "./TeamLargeGridCards";
import { TeamLargeImgsRender } from "./TeamLargeImgs";
import { TeamMediumImgsRender } from "./TeamMediumImgs";
import { TeamSmallImgsRender } from "./TeamSmallImgs";
import { TeamVertImgsRender } from "./TeamVertImgs";

export const teamRenderers = {
  teamFullWidthVertImgs: TeamFullWidthVertImgsRender,
  teamGridLargeRound: TeamGridLargeRoundRender,
  teamGridRoundImgs: TeamGridRoundImgsRender,
  teamImgShortPara: TeamImgShortParaRender,
  teamLargeGridCards: TeamLargeGridCardsRender,
  teamLargeImgs: TeamLargeImgsRender,
  teamMediumImgs: TeamMediumImgsRender,
  teamSmallImgs: TeamSmallImgsRender,
  teamVertImgs: TeamVertImgsRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
