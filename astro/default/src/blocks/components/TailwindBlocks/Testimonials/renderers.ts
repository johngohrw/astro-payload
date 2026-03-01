import type {
  BlockRenderer,
  BlockTypeEnum,
} from "@astro-default/blocks/blockTypes";
import { TestimonialsBgImageRender } from "./TestimonialsBgImage";
import { TestimonialsGridRender } from "./TestimonialsGrid";
import { TestimonialsLargeAvatarRender } from "./TestimonialsLargeAvatar";
import { TestimonialsOverlapImgRender } from "./TestimonialsOverlapImg";
import { TestimonialsSideBySideRender } from "./TestimonialsSideBySide";
import { TestimonialsSimpleCenteredRender } from "./TestimonialsSimpleCentered";
import { TestimonialsStarRatingRender } from "./TestimonialsStarRating";
import { TestimonialsSubtleGridRender } from "./TestimonialsSubtleGrid";

export const testimonialsRenderers = {
  testimonialsBgImage: TestimonialsBgImageRender,
  testimonialsGrid: TestimonialsGridRender,
  testimonialsLargeAvatar: TestimonialsLargeAvatarRender,
  testimonialsOverlapImg: TestimonialsOverlapImgRender,
  testimonialsSideBySide: TestimonialsSideBySideRender,
  testimonialsSimpleCentered: TestimonialsSimpleCenteredRender,
  testimonialsStarRating: TestimonialsStarRatingRender,
  testimonialsSubtleGrid: TestimonialsSubtleGridRender,
} as const satisfies Partial<Record<BlockTypeEnum, BlockRenderer>>;
