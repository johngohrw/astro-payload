import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";

import { contactSimpleCenteredSchema } from "./Contact/ContactSimpleCentered/schema";
import { featSimpleThreeColSchema } from "./Feature/FeatSimpleThreeCol/schema";
import { heroSimpleCenteredSchema } from "./Hero/HeroSimpleCentered/schema";
import { contactSimpleFourColSchema } from "./Contact/ContactSimpleFourCol/schema";
import { contactSplitWithFormSchema } from "./Contact/ContactSplitWithForm/schema";
import { ctaCenteredPanelSchema } from "./Cta/CtaCenteredPanel/schema";
import { ctaCenteredPlainSchema } from "./Cta/CtaCenteredPlain/schema";
import { ctaImageTilesSchema } from "./Cta/CtaImageTiles/schema";
import { ctaSimpleCenteredGradientSchema } from "./Cta/CtaSimpleCenteredGradient/schema";
import { ctaSplitWithImageSchema } from "./Cta/CtaSplitWithImage/schema";
import { headingSimpleLeftSchema } from "./Heading/HeadingSimpleLeft/schema";
import { headingWithStatsSchema } from "./Heading/HeadingWithStats/schema";
import { heroSplitWithImageSchema } from "./Hero/HeroSplitWithImage/schema";
import { heroSplitWithImageAngledSchema } from "./Hero/HeroSplitWithImageAngled/schema";
import { heroWithOffsetImgSchema } from "./Hero/HeroWithOffsetImg/schema";
import { notFoundSimpleSchema } from "./NotFound/NotFoundSimple/schema";
import { notFoundImageSplitSchema } from "./NotFound/NotFoundImageSplit/schema";
import { statsSimpleSchema } from "./Stats/StatsSimple/schema";
import { statsSimpleGridSchema } from "./Stats/StatsSimpleGrid/schema";
import { statsWithBgSchema } from "./Stats/StatsWithBg/schema";
import { statsSplitWithImgSchema } from "./Stats/StatsSplitWithImg/schema";
import { statsTwoColDescSchema } from "./Stats/StatsTwoColDesc/schema";
import { statsWithDescSchema } from "./Stats/StatsWithDesc/schema";
import { headingWithCardsSchema } from "./Heading/HeadingWithCards/schema";
import { newsletterWithDetailsSchema } from "./Newsletter/NewsletterWithDetails/schema";
import { newsletterSimpleSchema } from "./Newsletter/NewsletterSimple/schema";
import { newsletterSimpleStackedSchema } from "./Newsletter/NewsletterSimpleStacked/schema";

export const tailwindBlockSchemas = {
  heroSimpleCentered: heroSimpleCenteredSchema,
  heroSplitWithImage: heroSplitWithImageSchema,
  heroSplitWithImageAngled: heroSplitWithImageAngledSchema,
  heroWithOffsetImg: heroWithOffsetImgSchema,
  headingSimpleLeft: headingSimpleLeftSchema,
  headingWithStats: headingWithStatsSchema,
  headingWithCards: headingWithCardsSchema,
  featSimpleThreeCol: featSimpleThreeColSchema,
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
