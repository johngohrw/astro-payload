import { ContactSimpleFourCol } from "./ContactSimpleFourColBlock";
import { FeatSimpleThreeCol } from "./FeatSimpleThreeColBlock";
import { HeroWithOffsetImage } from "./HeroWithOffsetImage";
import { ImageGrid } from "./ImageGrid";
import { RichText } from "./RichText";

export const allBlocksMap = {
  HeroWithOffsetImage,
  RichText,
  ImageGrid,
  FeatSimpleThreeCol,
  ContactSimpleFourCol,
} as const;

export const allBlocks = Object.values(allBlocksMap);
