import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { NewsletterCenteredCardRender } from "./NewsletterCenteredCard";
import { NewsletterSbsDetailsRender } from "./NewsletterSbsDetails";
import { NewsletterSbsOnCardRender } from "./NewsletterSbsOnCard";
import { NewsletterSmSbsRender } from "./NewsletterSmSbs";
import { NewsletterSmSbsOnBrandRender } from "./NewsletterSmSbsOnBrand";
import { NewsletterSmStackedRender } from "./NewsletterSmStacked";

export const newsletterRenderers = {
  newsletterCenteredCard: NewsletterCenteredCardRender,
  newsletterSbsDetails: NewsletterSbsDetailsRender,
  newsletterSbsOnCard: NewsletterSbsOnCardRender,
  newsletterSmSbs: NewsletterSmSbsRender,
  newsletterSmSbsOnBrand: NewsletterSmSbsOnBrandRender,
  newsletterSmStacked: NewsletterSmStackedRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
