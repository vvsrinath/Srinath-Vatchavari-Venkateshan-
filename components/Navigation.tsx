"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-line bg-[rgba(252,251,248,0.94)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="page-shell flex h-[72px] items-center justify-between gap-6">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex items-baseline gap-2"
          >
            <span className="font-display text-[26px] leading-none tracking-[-0.06em]">
              SV<span className="text-forest transition-colors group-hover:text-ink">V</span>
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted sm:block">
              Srinath V. V.
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-active={active === item.href}
                className={`link-underline text-[12px] tracking-[0.01em] transition-colors duration-300 ${
                  active === item.href ? "text-forest" : "text-ink-soft hover:text-forest"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest" />
            </span>
            <span className="eyebrow text-muted">Open to R&amp;D</span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="relative z-[60] flex h-10 w-10 items-center justify-center border border-line text-ink lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <motion.span
                aria-hidden="true"
                className="absolute left-0 block h-px w-full bg-current"
                animate={open ? { top: 6, rotate: 45 } : { top: 2, rotate: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              />
              <motion.span
                aria-hidden="true"
                className="absolute left-0 block h-px w-full bg-current"
                animate={open ? { top: 6, rotate: -45 } : { top: 10, rotate: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-paper px-6 pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    document.body.style.overflow = "";
                    setOpen(false);
                  }}
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : 0.06 * index + 0.1, duration: 0.5 }}
                  className="flex items-baseline justify-between border-b border-line py-4"
                >
                  <span className="font-display text-[clamp(2rem,9vw,3.25rem)] leading-none">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] text-muted">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex items-end justify-between gap-6 pt-10">
              <p className="max-w-[15rem] text-[13px] leading-relaxed text-muted">
                Open to R&amp;D engineering internship opportunities.
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[12px] uppercase tracking-[0.12em] text-forest"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
