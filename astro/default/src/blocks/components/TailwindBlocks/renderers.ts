import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { bentoRenderers } from "./Bento/renderers";
import { blogRenderers } from "./Blog/renderers";
import { contactRenderers } from "./Contact/renderers";
import { contentRenderers } from "./Content/renderers";
import { ctaRenderers } from "./Cta/renderers";
import { faqRenderers } from "./Faq/renderers";
import { featRenderers } from "./Feat/renderers";
import { heroRenderers } from "./Hero/renderers";
import { footerRenderers } from "./Footer/renderers";
import { headerRenderers } from "./Header/renderers";
import { logoCloudRenderers } from "./LogoCloud/renderers";
import { newsletterRenderers } from "./Newsletter/renderers";
import { statsRenderers } from "./Stats/renderers";
import { teamRenderers } from "./Team/renderers";
import { testimonialsRenderers } from "./Testimonials/renderers";

export const tailwindBlockRenderers = {
  ...bentoRenderers,
  ...blogRenderers,
  ...contactRenderers,
  ...contentRenderers,
  ...ctaRenderers,
  ...faqRenderers,
  ...featRenderers,
  ...heroRenderers,
  ...footerRenderers,
  ...headerRenderers,
  ...logoCloudRenderers,
  ...newsletterRenderers,
  ...statsRenderers,
  ...teamRenderers,
  ...testimonialsRenderers,
} as const satisfies Record<BlockTypeEnum, BlockRenderer>;
