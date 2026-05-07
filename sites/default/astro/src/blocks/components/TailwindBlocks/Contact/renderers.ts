import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { ContactCenteredRender } from "./ContactCentered";
import { ContactSideBySideGridRender } from "./ContactSideBySideGrid";
import { ContactSmCenteredRender } from "./ContactSmCentered";
import { ContactSmFourColRender } from "./ContactSmFourCol";
import { ContactSplitImgRender } from "./ContactSplitImg";
import { ContactSplitPatternRender } from "./ContactSplitPattern";
import { ContactWithTestimonialRender } from "./ContactWithTestimonial";

export const contactRenderers = {
  contactCentered: ContactCenteredRender,
  contactSideBySideGrid: ContactSideBySideGridRender,
  contactSmCentered: ContactSmCenteredRender,
  contactSmFourCol: ContactSmFourColRender,
  contactSplitImg: ContactSplitImgRender,
  contactSplitPattern: ContactSplitPatternRender,
  contactWithTestimonial: ContactWithTestimonialRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
