import type { Page } from "payload-instance";

export type BlockType = NonNullable<Page["layout"]>[number];
export type BlockTypeEnum = BlockType["blockType"];
export type BlockTypeOf<T extends BlockTypeEnum> = Extract<
  BlockType,
  { blockType: T }
>;
export type BlockComponent = (_props: { block: BlockType }) => any;
