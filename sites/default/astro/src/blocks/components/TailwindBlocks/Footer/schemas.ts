import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { footer4ColCtaSchema } from "./Footer4ColCta/schema";
import { footer4ColMissionSchema } from "./Footer4ColMission/schema";
import { footer4ColNewsletterSchema } from "./Footer4ColNewsletter/schema";
import { footer4ColNewsletterBelowSchema } from "./Footer4ColNewsletterBelow/schema";
import { footer4ColSimpleSchema } from "./Footer4ColSimple/schema";
import { footerSmCenteredSchema } from "./FooterSmCentered/schema";
import { footerSmSocialSchema } from "./FooterSmSocial/schema";

export const footerSchemas = {
  footer4ColCta: footer4ColCtaSchema,
  footer4ColMission: footer4ColMissionSchema,
  footer4ColNewsletter: footer4ColNewsletterSchema,
  footer4ColNewsletterBelow: footer4ColNewsletterBelowSchema,
  footer4ColSimple: footer4ColSimpleSchema,
  footerSmCentered: footerSmCenteredSchema,
  footerSmSocial: footerSmSocialSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
