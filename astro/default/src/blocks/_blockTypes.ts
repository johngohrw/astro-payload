import type { Page } from "@payload-default/payload-types";

export type BlockType = NonNullable<Page["contentBlocks"]>[number];
export type BlockTypeEnum = BlockType["blockType"];
export type BlockTypeOf<T extends BlockTypeEnum> = Extract<
  BlockType,
  { blockType: T }
>;
export type BlockRenderer = (_props: { block: BlockType }) => any;
