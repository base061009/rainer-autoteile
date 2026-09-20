"use client";

import { useEffect, useRef } from "react";
import { sectionNav } from "@/lib/content";

const ITEM_STEP_REM = 2.75;
const SECTION_IDS = new Set(sectionNav.map((item) => item.id));

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function sectionTop(node: HTMLElement) {
  const margin = Number.parseFloat(getComputedStyle(node).scrollMarginTop) || 0;
  return Math.max(
    0,
    Math.round(window.scrollY + node.getBoundingClientRect().top - margin),
  );
}

function hashId(href: string | null) {
  if (!href) return null;
  try {
    const url = new URL(href, window.location.href);
    if (url.pathname !== "/" && url.pathname !== "") return null;
    const id = url.hash.replace("#", "");
    return id || null;
  } catch {
    return null;
  }
}

export function SectionNav() {
  const scrollingRef = useRef(false);
  const cancelScrollRef = useRef<(() => void) | null>(null);
  const frameRef = useRef(0);
  const activeRef = useRef(0);
  const pillRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ids = sectionNav.map((item) => item.id);

    function applyActive(index: number) {
      if (activeRef.current === index) return;
      activeRef.current = index;
      const pill = pillRef.current;
      if (pill) {
        pill.style.transform = `translate3d(0, ${index * ITEM_STEP_REM}rem, 0)`;
      }
      linksRef.current.forEach((link, i) => {
        if (!link) return;
        const on = i === index;
        link.classList.toggle("is-active", on);
        if (on) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }

    function sync() {
      if (scrollingRef.current) return;
      const line = window.innerHeight * 0.38;
      let next = 0;
      ids.forEach((id, index) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= line) next = index;
      });
      applyActive(next);
    }

    function onScroll() {
      if (scrollingRef.current || frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0;
        sync();
      });
    }

    let viewportWidth = window.innerWidth;
    function onResize() {
      if (window.innerWidth === viewportWidth) return;
      viewportWidth = window.innerWidth;
      sync();
    }

    function goTo(id: string, index: number) {
      const node = document.getElementById(id);
      if (!node) return;

      applyActive(index);
      scrollingRef.current = true;
      cancelScrollRef.current?.();

      const targetY = sectionTop(node);
      const instant =
        prefersReducedMotion() || Math.abs(targetY - window.scrollY) < 2;

      const finish = () => {
        scrollingRef.current = false;
        cancelScrollRef.current = null;
        if (window.location.hash !== `#${id}`) {
          window.history.replaceState(null, "", `#${id}`);
        }
      };

      if (instant) {
        window.scrollTo(0, targetY);
        finish();
        return;
      }

      window.scrollTo({ top: targetY, behavior: "smooth" });

      const onEnd = () => {
        window.removeEventListener("scrollend", onEnd);
        window.clearTimeout(timeout);
        finish();
      };
      const timeout = window.setTimeout(onEnd, 1100);
      window.addEventListener("scrollend", onEnd, { once: true });
      cancelScrollRef.current = () => {
        window.removeEventListener("scrollend", onEnd);
        window.clearTimeout(timeout);
      };
    }

    function onDocClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const target = (event.target as Element | null)?.closest("a");
      if (!target) return;
      const id = hashId(target.getAttribute("href"));
      if (!id || !SECTION_IDS.has(id)) return;
      event.preventDefault();
      goTo(id, ids.indexOf(id));
    }

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("click", onDocClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", onDocClick, true);
      window.cancelAnimationFrame(frameRef.current);
      cancelScrollRef.current?.();
    };
  }, []);

  return (
    <nav
      aria-label="Seitenabschnitte"
      className="section-nav fixed right-[max(0.75rem,env(safe-area-inset-right,0px))] top-1/2 z-50 sm:right-[max(1.25rem,env(safe-area-inset-right,0px))]"
    >
      <ul className="relative flex w-9 flex-col items-center gap-2">
        <span
          ref={pillRef}
          aria-hidden
          className="section-nav-pill absolute left-0 top-0 size-9 rounded-full bg-primary"
        />
        {sectionNav.map((item, index) => {
          const Icon = item.icon;

          return (
            <li key={item.id} className="relative">
              <a
                ref={(node) => {
                  linksRef.current[index] = node;
                }}
                href={`#${item.id}`}
                aria-label={item.label}
                aria-current={index === 0 ? "true" : undefined}
                className={index === 0 ? "is-active" : undefined}
              >
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
