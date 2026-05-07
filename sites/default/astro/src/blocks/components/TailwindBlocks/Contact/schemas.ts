import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { contactCenteredSchema } from "./ContactCentered/schema";
import { contactSideBySideGridSchema } from "./ContactSideBySideGrid/schema";
import { contactSmCenteredSchema } from "./ContactSmCentered/schema";
import { contactSmFourColSchema } from "./ContactSmFourCol/schema";
import { contactSplitImgSchema } from "./ContactSplitImg/schema";
import { contactSplitPatternSchema } from "./ContactSplitPattern/schema";
import { contactWithTestimonialSchema } from "./ContactWithTestimonial/schema";

export const contactSchemas = {
  contactCentered: contactCenteredSchema,
  contactSideBySideGrid: contactSideBySideGridSchema,
  contactSmCentered: contactSmCenteredSchema,
  contactSmFourCol: contactSmFourColSchema,
  contactSplitImg: contactSplitImgSchema,
  contactSplitPattern: contactSplitPatternSchema,
  contactWithTestimonial: contactWithTestimonialSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
