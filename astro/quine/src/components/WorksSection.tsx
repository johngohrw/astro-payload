import { useState } from "react";
import { ScrambleInWrapper } from "./ScrambleIn/ScrambleInWrapper";
import { Button } from "./Button/Button";
import { Icon } from "astro-icon/components";
import { cls } from "rengwutils";
import { css } from "@emotion/css";

const sites = [
  {
    title: "Flanksource Website",
    year: "2022",
    href: "https://flanksource.com/",
    image: "https://i.imgur.com/ERW4Iox.png",
  },
  {
    title: "Flash Coach Landing",
    year: "2021",
    href: "https://flashcoach.tdcx.com/",
    image: "https://i.imgur.com/xWWtd1y.png",
  },
  {
    title: "TDCX Website",
    year: "2020",
    href: "https://tdcx.com/",
    image: "https://i.imgur.com/eSmz1Ga.png",
  },
].map((s, i) => ({ ...s, title: `${i + 1}. ${s.title} - ${s.year}` }));

export const WorksSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  return (
    <div
      className={cls(
        "flex flex-row gap-6",
        css({
          ["@media (max-width: 987px)"]: {
            flexFlow: "column-reverse nowrap",
            alignItems: "end",
          },
        }),
      )}
    >
      <div
        className={cls(
          css({
            width: "45%",
            ["@media (max-width: 987px)"]: {
              width: "100%",
            },
          }),
        )}
      >
        <ScrambleInWrapper
          hoverIndex={hoveredIndex}
          setHoverIndex={(index) => setHoveredIndex(index)}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
          items={sites.map((s) => s.title)}
        />
      </div>
      <div
        className={cls(
          "bg-white/20",
          css({
            width: "55%",
            ["@media (max-width: 987px)"]: {
              width: "100%",
            },
          }),
        )}
      >
        <div
          className={cls(
            "bg-gray-300 duration-200 w-full h-full relative",
            activeIndex === undefined && "opacity-0",
            css({
              aspectRatio: 1,
              ["@media (max-width: 987px)"]: { aspectRatio: 1.3 },
              ["@media (max-width: 720px)"]: { aspectRatio: 1 },
            }),
          )}
        >
          {sites.map((s, i) => (
            <img
              key={i}
              className={cls(
                "absolute w-full h-full duration-200 opacity-0",
                activeIndex === i && "opacity-100",
                css({
                  objectFit: "cover",
                  ["@media (max-width: 987px)"]: {
                    objectFit: "contain",
                    padding: "2rem",
                  },
                  ["@media (max-width: 720px)"]: {
                    objectFit: "cover",
                    padding: "0",
                  },
                }),
              )}
              src={s.image}
            />
          ))}
          <div
            className={cls(
              "absolute bottom-4 right-4",
              "flex flex-row flex-nowrap gap-4 justify-end",
            )}
          >
            <Button
              href={activeIndex !== undefined ? sites[activeIndex].href : "#"}
            >
              Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
