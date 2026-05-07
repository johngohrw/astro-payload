import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { faqCenteredAccordionSchema } from "./FaqCenteredAccordion/schema";
import { faqOffsetWithSupportingTextSchema } from "./FaqOffsetWithSupportingText/schema";
import { faqSideBySideSchema } from "./FaqSideBySide/schema";
import { faqThreeColumnsSchema } from "./FaqThreeColumns/schema";
import { faqThreeColumnsWithCenteredIntroductionSchema } from "./FaqThreeColumnsWithCenteredIntroduction/schema";
import { faqTwoColumnsSchema } from "./FaqTwoColumns/schema";
import { faqTwoColumnsWithCenteredIntroductionSchema } from "./FaqTwoColumnsWithCenteredIntroduction/schema";

export const faqSchemas = {
  faqCenteredAccordion: faqCenteredAccordionSchema,
  faqOffsetWithSupportingText: faqOffsetWithSupportingTextSchema,
  faqSideBySide: faqSideBySideSchema,
  faqThreeColumns: faqThreeColumnsSchema,
  faqThreeColCtrIntro: faqThreeColumnsWithCenteredIntroductionSchema,
  faqTwoColumns: faqTwoColumnsSchema,
  faqTwoColCtrIntro: faqTwoColumnsWithCenteredIntroductionSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
