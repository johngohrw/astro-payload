import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { newsletterCenteredCardSchema } from "./NewsletterCenteredCard/schema";
import { newsletterSbsDetailsSchema } from "./NewsletterSbsDetails/schema";
import { newsletterSbsOnCardSchema } from "./NewsletterSbsOnCard/schema";
import { newsletterSmSbsSchema } from "./NewsletterSmSbs/schema";
import { newsletterSmSbsOnBrandSchema } from "./NewsletterSmSbsOnBrand/schema";
import { newsletterSmStackedSchema } from "./NewsletterSmStacked/schema";

export const newsletterSchemas = {
  newsletterCenteredCard: newsletterCenteredCardSchema,
  newsletterSbsDetails: newsletterSbsDetailsSchema,
  newsletterSbsOnCard: newsletterSbsOnCardSchema,
  newsletterSmSbs: newsletterSmSbsSchema,
  newsletterSmSbsOnBrand: newsletterSmSbsOnBrandSchema,
  newsletterSmStacked: newsletterSmStackedSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
