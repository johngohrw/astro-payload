import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

function splitToChars(text: string) {
  return Array.from(text).map((char, i) => ({
    char,
    id: `${char}-${i}`,
  }));
}

export default function ScatterText({ text }: { text: string }) {
  const containerRef = useRef(null);

  const chars = splitToChars(text);

  // Track pointer position in container
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const box = containerRef.current.getBoundingClientRect();
    pointerX.set(e.clientX - box.left);
    pointerY.set(e.clientY - box.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        cursor: "none",
      }}
    >
      {chars.map(({ char, id }, index) => {
        // derive offsets based on pointer proximity
        const xOffset = useTransform(pointerX, (px) => {
          const charCenter = (index + 0.5) * 16;
          return (px - charCenter) * 0.2;
        });
        const yOffset = useTransform(pointerY, (py) => {
          const baseline = 20;
          return (py - baseline) * 0.15;
        });

        return (
          <motion.span
            key={id}
            style={{
              display: "inline-block",
              x: xOffset,
              y: yOffset,
              fontSize: "2rem",
              pointerEvents: "none",
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
