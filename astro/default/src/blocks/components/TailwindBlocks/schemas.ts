import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { bentoSchemas } from "./Bento/schemas";
import { blogSchemas } from "./Blog/schemas";
import { contactSchemas } from "./Contact/schemas";
import { contentSchemas } from "./Content/schemas";
import { ctaSchemas } from "./Cta/schemas";
import { faqSchemas } from "./Faq/schemas";
import { featSchemas } from "./Feat/schemas";
import { heroSchemas } from "./Hero/schemas";
import { footerSchemas } from "./Footer/schemas";
import { headerSchemas } from "./Header/schemas";
import { logoCloudSchemas } from "./LogoCloud/schemas";
import { newsletterSchemas } from "./Newsletter/schemas";
import { statsSchemas } from "./Stats/schemas";
import { teamSchemas } from "./Team/schemas";
import { testimonialsSchema } from "./Testimonials/schemas";

export const tailwindBlockSchemas = {
  ...bentoSchemas,
  ...blogSchemas,
  ...contactSchemas,
  ...contentSchemas,
  ...ctaSchemas,
  ...faqSchemas,
  ...featSchemas,
  ...heroSchemas,
  ...footerSchemas,
  ...headerSchemas,
  ...logoCloudSchemas,
  ...newsletterSchemas,
  ...statsSchemas,
  ...teamSchemas,
  ...testimonialsSchema,
} as const satisfies Record<BlockTypeEnum, Block>;
