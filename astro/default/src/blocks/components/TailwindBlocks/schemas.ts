import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { statsWithDescSchema } from "./Stats/StatsWithDesc/schema";
import { statsSimpleSchema } from "./Stats/StatsSimple/schema";
import { statsSimpleGridSchema } from "./Stats/StatsSimpleGrid/schema";
import { statsSplitWithImgSchema } from "./Stats/StatsSplitWithImg/schema";
import { statsTwoColDescSchema } from "./Stats/StatsTwoColDesc/schema";
import { statsWithBgSchema } from "./Stats/StatsWithBg/schema";

import { headingSimpleLeftSchema } from "./Heading/HeadingSimpleLeft/schema";
import { headingWithCardsSchema } from "./Heading/HeadingWithCards/schema";
import { headingWithStatsSchema } from "./Heading/HeadingWithStats/schema";
import { heroSimpleCenteredSchema } from "./Hero/HeroSimpleCentered/schema";
import { heroSplitWithImageSchema } from "./Hero/HeroSplitWithImage/schema";
import { heroSplitWithImageAngledSchema } from "./Hero/HeroSplitWithImageAngled/schema";
import { heroWithOffsetImgSchema } from "./Hero/HeroWithOffsetImg/schema";
import { contactSimpleCenteredSchema } from "./Contact/ContactSimpleCentered/schema";
import { contactSimpleFourColSchema } from "./Contact/ContactSimpleFourCol/schema";
import { contactSplitWithFormSchema } from "./Contact/ContactSplitWithForm/schema";
import { ctaCenteredPanelSchema } from "./Cta/CtaCenteredPanel/schema";
import { ctaCenteredPlainSchema } from "./Cta/CtaCenteredPlain/schema";
import { ctaImageTilesSchema } from "./Cta/CtaImageTiles/schema";
import { ctaSimpleCenteredGradientSchema } from "./Cta/CtaSimpleCenteredGradient/schema";
import { ctaSplitWithImageSchema } from "./Cta/CtaSplitWithImage/schema";
import { newsletterSimpleSchema } from "./Newsletter/NewsletterSimple/schema";
import { newsletterSimpleStackedSchema } from "./Newsletter/NewsletterSimpleStacked/schema";
import { newsletterWithDetailsSchema } from "./Newsletter/NewsletterWithDetails/schema";
import { notFoundImageSplitSchema } from "./NotFound/NotFoundImageSplit/schema";
import { notFoundSimpleSchema } from "./NotFound/NotFoundSimple/schema";
import { heroWithOffsetImgV2Schema } from "./Hero/HeroWithOffsetImgV2/schema";

export const tailwindBlockSchemas = {
  heroSimpleCentered: heroSimpleCenteredSchema,
  heroSplitWithImage: heroSplitWithImageSchema,
  heroSplitWithImageAngled: heroSplitWithImageAngledSchema,
  heroWithOffsetImg: heroWithOffsetImgSchema,
  heroWithOffsetImgV2: heroWithOffsetImgV2Schema,
  headingSimpleLeft: headingSimpleLeftSchema,
  headingWithStats: headingWithStatsSchema,
  headingWithCards: headingWithCardsSchema,
  statsSimple: statsSimpleSchema,
  statsSimpleGrid: statsSimpleGridSchema,
  statsWithBg: statsWithBgSchema,
  statsSplitWithImg: statsSplitWithImgSchema,
  statsTwoColDesc: statsTwoColDescSchema,
  statsWithDesc: statsWithDescSchema,
  ctaCenteredPanel: ctaCenteredPanelSchema,
  ctaCenteredPlain: ctaCenteredPlainSchema,
  ctaImageTiles: ctaImageTilesSchema,
  ctaSimpleCenteredGradient: ctaSimpleCenteredGradientSchema,
  ctaSplitWithImage: ctaSplitWithImageSchema,
  contactSimpleCentered: contactSimpleCenteredSchema,
  contactSimpleFourCol: contactSimpleFourColSchema,
  contactSplitWithForm: contactSplitWithFormSchema,
  newsletterWithDetails: newsletterWithDetailsSchema,
  newsletterSimple: newsletterSimpleSchema,
  newsletterSimpleStacked: newsletterSimpleStackedSchema,
  notFoundSimple: notFoundSimpleSchema,
  notFoundImageSplit: notFoundImageSplitSchema,
} as const satisfies Record<BlockTypeEnum, Block>;
