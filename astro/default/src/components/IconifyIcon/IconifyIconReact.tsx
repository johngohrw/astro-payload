import type { CSSProperties, HTMLAttributes } from "react";
import type { IconName } from "./icon-names";

import { Icon } from "@iconify-icon/react";

interface IconifyIconProps extends HTMLAttributes<HTMLElement> {
  name: IconName;
  style?: CSSProperties;
  color?: string;
  size?: string | number;
}

export function IconifyIconReact({
  name,
  style,
  color,
  size,
  ...rest
}: IconifyIconProps) {
  return (
    <Icon
      icon={name}
      {...rest}
      style={{
        color,
        fontSize: size,
        display: "block",
        ...style,
      }}
    />
  );
}
