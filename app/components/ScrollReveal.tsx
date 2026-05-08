"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade"
    );

    if (reduced) {
      targets.forEach((el) => el.classList.add("is-revealed"));
    } else if (typeof IntersectionObserver !== "undefined" && targets.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => observer.observe(el));
    }

    const bar = document.getElementById("scroll-progress-bar");
    if (!bar) return;

    let ticking = false;
    const update = () => {
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const ratio = docH > 0 ? Math.min(Math.max(scrollY / docH, 0), 1) : 0;
      bar.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      id="scroll-progress-bar"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#45B8E8] via-[#F5A52B] to-[#E8342E] shadow-[0_0_10px_rgba(245,165,43,0.45)]"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
