import { motion, stagger, type Variants } from "motion/react";
import { css } from "@emotion/css";

import { type ComponentProps, type CSSProperties } from "react";
import { cls } from "rengwutils";

const letters = "Quine Systems".split("");

const lettersMob1 = "Quine".split("");
const lettersMob2 = "Systems".split("");

export const HeroLettersBig = ({
  className,
  ...rest
}: ComponentProps<typeof motion.div>) => {
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={cls(styles.desktopContainer, className)}
        {...rest}
      >
        {letters.map((el, i) => (
          <motion.div variants={item} key={i} className={styles.letter}>
            {el}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={cls(styles.mobileContainer, className)}
        {...rest}
      >
        <div>
          {lettersMob1.map((el, i) => (
            <motion.div variants={item} key={i} className={styles.letter}>
              {el}
            </motion.div>
          ))}
        </div>
        <div>
          {lettersMob2.map((el, i) => (
            <motion.div variants={item} key={i} className={styles.letter}>
              {el}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      delayChildren: stagger(0.1, { from: "first" }),
      duration: 1.5,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 2,
    },
  },
};

const styles = {
  letter: css({
    flex: "1 0",
    display: "inline-block",
    fontFamily: "Quintessential",
    fontSize: "calc(var(--content-width) * 0.173)",
    lineHeight: 1,
    ["@media (max-width: 867px)"]: {
      fontSize: "calc(var(--content-width) * 0.323)",
    },
  }),
  desktopContainer: css({
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    whiteSpace: "nowrap",
    ["@media (max-width: 867px)"]: {
      display: "none",
    },
  }),
  mobileContainer: css({
    display: "none",
    flexFlow: "row nowrap",
    width: "100%",
    whiteSpace: "nowrap",
    ["@media (max-width: 867px)"]: {
      display: "block",
    },
  }),
};

// letter2: {
//   fontFamily: "Charm",
//   fontSize: "calc(var(--content-width) * 0.185)",
//   lineHeight: 1,
// },
// letter3: {
//   fontFamily: "Syne Tactile",
//   fontSize: "calc(var(--content-width) * 0.170)",
//   lineHeight: 1,
// },
// letter4: {
//   fontFamily: "Belanosima",
//   fontSize: "calc(var(--content-width) * 0.168)",
//   lineHeight: 1,
// },
// letter5: {
//   fontFamily: "Cookie",
//   fontSize: "calc(var(--content-width) * 0.230)",
//   lineHeight: 1,
// },
// letter6: {
//   fontFamily: "Geist",
//   fontSize: "calc(var(--content-width) * 0.145)",
//   lineHeight: 1,
// },
