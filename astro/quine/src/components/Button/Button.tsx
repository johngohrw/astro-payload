import type { HTMLMotionProps } from "motion/react";
import { ButtonPure } from "./ButtonPure";

export const Button = ({
  children,
  href,
  ...rest
}: { href?: string } & HTMLMotionProps<"button">) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
      return;
    }
  };

  return (
    <ButtonPure onClick={handleClick} {...rest}>
      {children}
    </ButtonPure>
  );
};
