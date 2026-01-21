import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

let rafId: number | null = null;
let nextProg = 1;

function setScrollProgress(value: number) {
  nextProg = value;

  if (rafId == null) {
    rafId = requestAnimationFrame(() => {
      document.body.style.setProperty("--scroll-progress", String(nextProg));
      rafId = null;
    });
  }
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const ScrollSmootherInit = () => {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.8, // page-level smoothing
      effects: true, // enables data-lag / data-speed
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return null;
};
