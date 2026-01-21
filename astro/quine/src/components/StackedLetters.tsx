import { motion } from "motion/react";

import S01 from "@/assets/images/logos/QUINESYSTEMS/01Q.svg";
import S02 from "@/assets/images/logos/QUINESYSTEMS/02U.svg";
import S03 from "@/assets/images/logos/QUINESYSTEMS/03I.svg";
import S04 from "@/assets/images/logos/QUINESYSTEMS/04N.svg";
import S05 from "@/assets/images/logos/QUINESYSTEMS/05E.svg";
import S06 from "@/assets/images/logos/QUINESYSTEMS/06S.svg";
import S07 from "@/assets/images/logos/QUINESYSTEMS/07Y.svg";
import S08 from "@/assets/images/logos/QUINESYSTEMS/08S.svg";
import S09 from "@/assets/images/logos/QUINESYSTEMS/09T.svg";
import S10 from "@/assets/images/logos/QUINESYSTEMS/10E.svg";
import S11 from "@/assets/images/logos/QUINESYSTEMS/11M.svg";
import S12 from "@/assets/images/logos/QUINESYSTEMS/12S.svg";
import { type CSSProperties } from "react";

const items = [
  { id: 1, src: S01.src },
  { id: 2, src: S02.src },
  { id: 3, src: S03.src },
  { id: 4, src: S04.src },
  { id: 5, src: S05.src },
  { id: 6, src: S06.src },
  { id: 7, src: S07.src },
  { id: 8, src: S08.src },
  { id: 9, src: S09.src },
  { id: 10, src: S10.src },
  { id: 11, src: S11.src },
  { id: 12, src: S12.src },
];

export const StackedLetters = () => {
  return (
    <motion.div
      style={styles.stackedLetterContainer}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {items.map((el) => (
        <motion.img
          key={el.id}
          style={styles.stackedLetter}
          variants={item}
          src={el.src}
        />
      ))}
    </motion.div>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      duration: 1.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "8%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 2,
    },
  },
};

const styles: Record<string, CSSProperties> = {
  stackedLetterContainer: {
    position: "relative",
    width: "100%",
    aspectRatio: 16 / 3,
  },
  stackedLetter: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
  },
};
