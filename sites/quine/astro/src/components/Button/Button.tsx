import type { HTMLMotionProps } from "motion/react";
import { ButtonPure } from "./ButtonPure";
import { cls } from "rengwutils";
import type { ComponentProps, MouseEventHandler } from "react";

export const Button = ({
  children,
  href,
  smoothScrollTo,
  ...rest
}: { smoothScrollTo?: string; href?: string } & ComponentProps<
  typeof ButtonPure
>) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (href) window.location.href = href;
    if (smoothScrollTo) scrollIntoView(smoothScrollTo);
  };

  return (
    <ButtonPure onClick={handleClick} {...rest} className={cls(rest.className)}>
      {children}
    </ButtonPure>
  );
};

const scrollIntoView = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};
