"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
        <div className="page-shell flex h-[72px] items-center justify-between gap-5 xl:gap-8">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group flex shrink-0 items-baseline gap-2"
          >
            <span className="font-display text-[26px] leading-none tracking-[-0.06em]">
              SV<span className="text-forest transition-colors group-hover:text-ink">V</span>
            </span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted sm:block">
              Srinath V. V.
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-active={active === item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={`link-underline whitespace-nowrap text-[11px] tracking-[0.01em] transition-colors duration-300 xl:text-[12px] ${
                  active === item.href ? "text-forest" : "text-ink-soft hover:text-forest"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
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
            className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center border border-line text-ink lg:hidden"
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

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px">
          <div
            className="h-full bg-forest transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper px-6 pb-10 pt-28 lg:hidden"
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
                  aria-current={active === item.href ? "true" : undefined}
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : 0.04 * index + 0.08, duration: 0.45 }}
                  className={`flex items-baseline justify-between border-b border-line py-3.5 ${
                    active === item.href ? "text-forest" : "text-ink"
                  }`}
                >
                  <span className="font-display text-[clamp(1.65rem,7vw,2.6rem)] leading-none">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-wrap items-end justify-between gap-5 pt-10">
              <p className="max-w-[15rem] text-[13px] leading-relaxed text-muted">
                Open to R&amp;D engineering internship opportunities.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {site.email && (
                  <a
                    href={`mailto:${site.email}`}
                    className="link-underline text-[12px] uppercase tracking-[0.12em] text-forest"
                  >
                    Email
                  </a>
                )}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-[12px] uppercase tracking-[0.12em] text-forest"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
