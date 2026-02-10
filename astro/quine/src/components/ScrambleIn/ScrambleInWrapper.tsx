import { useEffect, useRef } from "react";
import type { ScrambleInHandle } from "./ScrambleIn";
import ScrambleIn from "./ScrambleIn";
import { cls } from "rengwutils";
import { css } from "@emotion/css";

export function ScrambleInWrapper({
  activeIndex,
  hoverIndex,
  setHoverIndex,
  onClick,
  items,
}: {
  activeIndex: number | undefined;
  hoverIndex: number | undefined;
  setHoverIndex?: (index: number) => void;
  onClick?: (index: number) => void;
  items: string[];
}) {
  const scrambleRefs = useRef<(ScrambleInHandle | null)[]>([]);

  useEffect(() => {
    items.forEach((_, index) => {
      const delay = index * 100;
      setTimeout(() => {
        scrambleRefs.current[index]?.start();
      }, delay);
    });
  }, []);

  return (
    <div className="flex flex-col">
      {items.map((model, index) => (
        <div
          key={index}
          className={cls(
            "py-3 duration-100",
            "border-t",
            "cursor-pointer select-none",
            hoverIndex === index && "px-4 bg-slate-400/20",
            activeIndex === index &&
              "px-4 !bg-black text-slate-100 border-transparent",
            css({
              fontSize: "1.5rem",
              ["@media (max-width: 1200px)"]: {
                fontSize: "1.25rem",
              },
            }),
          )}
          onMouseEnter={() => setHoverIndex?.(index)}
          onMouseLeave={() => setHoverIndex?.(index)}
          onClick={() => onClick?.(index)}
        >
          <ScrambleIn
            ref={(el) => {
              scrambleRefs.current[index] = el;
            }}
            text={model}
            scrambleSpeed={25}
            scrambledLetterCount={5}
            autoStart={false}
          />
        </div>
      ))}
    </div>
  );
}
