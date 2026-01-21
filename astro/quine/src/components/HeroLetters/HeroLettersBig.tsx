import { motion, type Variants } from "motion/react";

import { type ComponentProps, type CSSProperties } from "react";

const letters = "Quine Systems".split("");

export const HeroLettersBig = ({
  ...rest
}: ComponentProps<typeof motion.div>) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ ...styles.letterContainer, ...rest.style }}
      {...rest}
    >
      {letters.map((el, i) => (
        <motion.span variants={item} key={i} style={styles.letter}>
          {el}
        </motion.span>
      ))}
    </motion.div>
  );
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.05,
      duration: 1.5,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: "8%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
};

const styles: Record<string, CSSProperties> = {
  letterContainer: {
    width: "100%",
    whiteSpace: "nowrap",
  },
  letter: {
    fontFamily: "Quintessential",
    fontSize: "calc(var(--content-width) * 0.173)",
    lineHeight: 1,
  },
  letter2: {
    fontFamily: "Charm",
    fontSize: "calc(var(--content-width) * 0.185)",
    lineHeight: 1,
  },
  letter3: {
    fontFamily: "Syne Tactile",
    fontSize: "calc(var(--content-width) * 0.170)",
    lineHeight: 1,
  },
  letter4: {
    fontFamily: "Belanosima",
    fontSize: "calc(var(--content-width) * 0.168)",
    lineHeight: 1,
  },
  letter5: {
    fontFamily: "Cookie",
    fontSize: "calc(var(--content-width) * 0.230)",
    lineHeight: 1,
  },
  letter6: {
    fontFamily: "Geist",
    fontSize: "calc(var(--content-width) * 0.145)",
    lineHeight: 1,
  },
};
