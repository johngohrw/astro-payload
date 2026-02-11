import { cls } from "rengwutils";

import { motion, type HTMLMotionProps } from "motion/react";
import { css } from "@emotion/css";

type ButtonType = "primary" | "secondary" | "link";

export const ButtonPure = ({
  children,
  className,
  type = "primary",
  ...rest
}: { type?: ButtonType } & Omit<HTMLMotionProps<"button">, "type">) => {
  return (
    <motion.button
      className={cls(
        "flex flex-row items-center flex-nowrap",

        type !== "link" && "py-2 px-4",
        "rounded-4xl",
        "cursor-pointer select-none",
        type === "secondary" && secondaryStyles,
        type === "primary" && primaryStyles,
        className,
      )}
      {...(type !== "link"
        ? {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.9 },
          }
        : {})}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

const primaryStyles = css({
  background: "black",
  color: "white",
});

const secondaryStyles = css({
  background: "none",
  color: "var(--color-fg)",
  border: "1px solid var(--color-fg)",
});
