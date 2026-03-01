import type { BlockTypeEnum } from "@astro-default/blocks/blockTypes";
import type { Block } from "payload";
import { testimonialsBgImageSchema } from "./TestimonialsBgImage/schema";
import { testimonialsGridSchema } from "./TestimonialsGrid/schema";
import { testimonialsLargeAvatarSchema } from "./TestimonialsLargeAvatar/schema";
import { testimonialsOverlapImgSchema } from "./TestimonialsOverlapImg/schema";
import { testimonialsSideBySideSchema } from "./TestimonialsSideBySide/schema";
import { testimonialsSimpleCenteredSchema } from "./TestimonialsSimpleCentered/schema";
import { testimonialsStarRatingSchema } from "./TestimonialsStarRating/schema";
import { testimonialsSubtleGridSchema } from "./TestimonialsSubtleGrid/schema";

export const testimonialsSchema = {
  testimonialsBgImage: testimonialsBgImageSchema,
  testimonialsGrid: testimonialsGridSchema,
  testimonialsLargeAvatar: testimonialsLargeAvatarSchema,
  testimonialsOverlapImg: testimonialsOverlapImgSchema,
  testimonialsSideBySide: testimonialsSideBySideSchema,
  testimonialsSimpleCentered: testimonialsSimpleCenteredSchema,
  testimonialsStarRating: testimonialsStarRatingSchema,
  testimonialsSubtleGrid: testimonialsSubtleGridSchema,
} as const satisfies Partial<Record<BlockTypeEnum, Block>>;
