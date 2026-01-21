import { motion, type Variants } from "motion/react";

import { type ComponentProps, type CSSProperties } from "react";

const letters1 = "Quine".split("");
const letters2 = "Systems".split("");

export const HeroLettersSmall = ({
  ...rest
}: ComponentProps<typeof motion.div>) => {
  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        style={styles.letterContainer1}
      >
        {letters1.map((el, i) => (
          <motion.span variants={item} key={i} style={styles.letters1}>
            {el}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        variants={container2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        style={styles.letterContainer2}
      >
        {letters2.map((el, i) => (
          <motion.span variants={item2} key={i} style={styles.letters2}>
            {el}
          </motion.span>
        ))}
      </motion.div>
    </div>
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

const container2: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      delayChildren: 0.3,
      staggerChildren: 0.05,
      duration: 1.5,
    },
  },
};

const item2: Variants = {
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
  letterContainer1: {
    width: "100%",
  },
  letterContainer2: {
    width: "100%",
    marginTop: "calc(var(--content-scale) * -5)",
  },
  letters1: {
    fontFamily: "Quintessential",
    fontSize: "calc(var(--content-width) * 0.323)",
    lineHeight: 1,
  },
  letters2: {
    fontFamily: "Quintessential",
    fontSize: "calc(var(--content-width) * 0.323)",
    lineHeight: 1,
  },
};
