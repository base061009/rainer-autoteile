"use client";

import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { sectionNav } from "@/lib/content";

export function SectionNav() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const ids = sectionNav.map((item) => item.id);

    function sync() {
      const line = window.innerHeight * 0.38;
      let next = 0;
      ids.forEach((id, index) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= line) next = index;
      });
      setActive((current) => (current === next ? current : next));
    }

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  function goTo(id: string) {
    const node = document.getElementById(id);
    node?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav
      aria-label="Seitenabschnitte"
      className="fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] top-1/2 z-50 -translate-y-1/2 sm:right-[max(1.25rem,env(safe-area-inset-right,0px))]"
    >
      <LayoutGroup>
        <ul className="flex flex-col items-center gap-2">
          {sectionNav.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === index;

            return (
              <li key={item.id} className="relative">
                {isActive ? (
                  <motion.span
                    layoutId="section-nav-active"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 32 }
                    }
                  />
                ) : null}
                <a
                  href={`#${item.id}`}
                  aria-label={item.label}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative z-10 flex size-9 items-center justify-center rounded-full transition-colors",
                    isActive
                      ? "text-white"
                      : "bg-white/80 text-ink/40 shadow-sm ring-1 ring-ink/5 hover:text-ink",
                  )}
                  onClick={(event) => {
                    event.preventDefault();
                    goTo(item.id);
                  }}
                >
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>
    </nav>
  );
}
