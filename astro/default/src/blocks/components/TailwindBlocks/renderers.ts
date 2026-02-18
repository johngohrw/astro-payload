import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";

import { FeatSimpleThreeColRender } from "./Feature/FeatSimpleThreeCol";
import { ContactSimpleCenteredRender } from "./Contact/ContactSimpleCentered";
import { HeroSimpleCenteredRender } from "./Hero/HeroSimpleCentered";
import { ContactSimpleFourColRender } from "./Contact/ContactSimpleFourCol";
import { ContactSplitWithFormRender } from "./Contact/ContactSplitWithForm";
import { CtaCenteredPanelRender } from "./Cta/CtaCenteredPanel";
import { CtaCenteredPlainRender } from "./Cta/CtaCenteredPlain";
import { CtaImageTilesRender } from "./Cta/CtaImageTiles";
import { CtaSimpleCenteredGradientRender } from "./Cta/CtaSimpleCenteredGradient";
import { CtaSplitWithImageRender } from "./Cta/CtaSplitWithImage";
import { HeadingSimpleLeftRender } from "./Heading/HeadingSimpleLeft";
import { HeadingWithStatsRender } from "./Heading/HeadingWithStats";
import { HeroSplitWithImageRender } from "./Hero/HeroSplitWithImage";
import { HeroSplitWithImageAngledRender } from "./Hero/HeroSplitWithImageAngled";
import { HeroWithOffsetImgRender } from "./Hero/HeroWithOffsetImg";
import { NotFoundSimpleRender } from "./NotFound/NotFoundSimple";
import { NotFoundImageSplitRender } from "./NotFound/NotFoundImageSplit";
import { StatsSimpleRender } from "./Stats/StatsSimple";
import { StatsSimpleGridRender } from "./Stats/StatsSimpleGrid";
import { StatsWithBgRender } from "./Stats/StatsWithBg";
import { StatsSplitWithImgRender } from "./Stats/StatsSplitWithImg";
import { StatsTwoColDescRender } from "./Stats/StatsTwoColDesc";
import { StatsWithDescRender } from "./Stats/StatsWithDesc";
import { HeadingWithCardsRender } from "./Heading/HeadingWithCards";
import { NewsletterWithDetailsRender } from "./Newsletter/NewsletterWithDetails";
import { NewsletterSimpleRender } from "./Newsletter/NewsletterSimple";
import { NewsletterSimpleStackedRender } from "./Newsletter/NewsletterSimpleStacked";

export const tailwindBlockRenderers = {
  featSimpleThreeCol: FeatSimpleThreeColRender,
  contactSimpleCentered: ContactSimpleCenteredRender,
  heroSimpleCentered: HeroSimpleCenteredRender,
  heroSplitWithImage: HeroSplitWithImageRender,
  heroSplitWithImageAngled: HeroSplitWithImageAngledRender,
  heroWithOffsetImg: HeroWithOffsetImgRender,
  contactSimpleFourCol: ContactSimpleFourColRender,
  contactSplitWithForm: ContactSplitWithFormRender,
  ctaCenteredPanel: CtaCenteredPanelRender,
  ctaCenteredPlain: CtaCenteredPlainRender,
  ctaImageTiles: CtaImageTilesRender,
  ctaSimpleCenteredGradient: CtaSimpleCenteredGradientRender,
  ctaSplitWithImage: CtaSplitWithImageRender,
  headingSimpleLeft: HeadingSimpleLeftRender,
  headingWithStats: HeadingWithStatsRender,
  notFoundSimple: NotFoundSimpleRender,
  notFoundImageSplit: NotFoundImageSplitRender,
  statsSimple: StatsSimpleRender,
  statsSimpleGrid: StatsSimpleGridRender,
  statsWithBg: StatsWithBgRender,
  statsSplitWithImg: StatsSplitWithImgRender,
  statsTwoColDesc: StatsTwoColDescRender,
  statsWithDesc: StatsWithDescRender,
  headingWithCards: HeadingWithCardsRender,
  newsletterWithDetails: NewsletterWithDetailsRender,
  newsletterSimple: NewsletterSimpleRender,
  newsletterSimpleStacked: NewsletterSimpleStackedRender,
} as const satisfies Record<BlockTypeEnum, BlockRenderer>;
