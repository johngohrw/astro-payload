import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { Footer4ColCtaRender } from "./Footer4ColCta";
import { Footer4ColMissionRender } from "./Footer4ColMission";
import { Footer4ColNewsletterRender } from "./Footer4ColNewsletter";
import { Footer4ColNewsletterBelowRender } from "./Footer4ColNewsletterBelow";
import { Footer4ColSimpleRender } from "./Footer4ColSimple";
import { FooterSmCenteredRender } from "./FooterSmCentered";
import { FooterSmSocialRender } from "./FooterSmSocial";

export const footerRenderers = {
  footer4ColCta: Footer4ColCtaRender,
  footer4ColMission: Footer4ColMissionRender,
  footer4ColNewsletter: Footer4ColNewsletterRender,
  footer4ColNewsletterBelow: Footer4ColNewsletterBelowRender,
  footer4ColSimple: Footer4ColSimpleRender,
  footerSmCentered: FooterSmCenteredRender,
  footerSmSocial: FooterSmSocialRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
