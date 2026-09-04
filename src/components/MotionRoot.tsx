"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el, i) => {
      el.style.setProperty("--d", `${(i % 5) * 70}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );

    els.forEach((el) => io.observe(el));

    // Safety net: [data-reveal] starts at opacity 0, so anything that never gets
    // an intersection callback would stay invisible. Reveal the stragglers.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-in");
        }
      });
    }, 1200);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
