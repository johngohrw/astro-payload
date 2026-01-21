import { cls } from "rengwutils";

import { motion, type HTMLMotionProps } from "motion/react";

export const ButtonPure = ({
  children,
  className,
  ...rest
}: HTMLMotionProps<"button">) => {
  return (
    <motion.button
      className={cls(
        "py-1.5 px-6 rounded-4xl cursor-pointer select-none bg-black text-white",
        className,
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
