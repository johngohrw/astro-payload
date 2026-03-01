import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { teamFullWidthVertImgsSchema } from "./TeamFullWidthVertImgs/schema";
import { teamGridLargeRoundSchema } from "./TeamGridLargeRound/schema";
import { teamGridRoundImgsSchema } from "./TeamGridRoundImgs/schema";
import { teamImgShortParaSchema } from "./TeamImgShortPara/schema";
import { teamLargeGridCardsSchema } from "./TeamLargeGridCards/schema";
import { teamLargeImgsSchema } from "./TeamLargeImgs/schema";
import { teamMediumImgsSchema } from "./TeamMediumImgs/schema";
import { teamSmallImgsSchema } from "./TeamSmallImgs/schema";
import { teamVertImgsSchema } from "./TeamVertImgs/schema";

export const teamSchemas = {
  teamFullWidthVertImgs: teamFullWidthVertImgsSchema,
  teamGridLargeRound: teamGridLargeRoundSchema,
  teamGridRoundImgs: teamGridRoundImgsSchema,
  teamImgShortPara: teamImgShortParaSchema,
  teamLargeGridCards: teamLargeGridCardsSchema,
  teamLargeImgs: teamLargeImgsSchema,
  teamMediumImgs: teamMediumImgsSchema,
  teamSmallImgs: teamSmallImgsSchema,
  teamVertImgs: teamVertImgsSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
