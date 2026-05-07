import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { FaqCenteredAccordionRender } from "./FaqCenteredAccordion";
import { FaqOffsetWithSupportingTextRender } from "./FaqOffsetWithSupportingText";
import { FaqSideBySideRender } from "./FaqSideBySide";
import { FaqThreeColumnsRender } from "./FaqThreeColumns";
import { FaqThreeColumnsWithCenteredIntroductionRender } from "./FaqThreeColumnsWithCenteredIntroduction";
import { FaqTwoColumnsRender } from "./FaqTwoColumns";
import { FaqTwoColumnsWithCenteredIntroductionRender } from "./FaqTwoColumnsWithCenteredIntroduction";

export const faqRenderers = {
  faqCenteredAccordion: FaqCenteredAccordionRender,
  faqOffsetWithSupportingText: FaqOffsetWithSupportingTextRender,
  faqSideBySide: FaqSideBySideRender,
  faqThreeColumns: FaqThreeColumnsRender,
  faqThreeColCtrIntro: FaqThreeColumnsWithCenteredIntroductionRender,
  faqTwoColumns: FaqTwoColumnsRender,
  faqTwoColCtrIntro: FaqTwoColumnsWithCenteredIntroductionRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
