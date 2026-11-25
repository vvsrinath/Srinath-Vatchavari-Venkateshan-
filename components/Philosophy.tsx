"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/content";

export function Philosophy() {
  const [active, setActive] = useState(principles[0].index);
  const reduced = useReducedMotion();
  const selected = principles.find((principle) => principle.index === active) ?? principles[0];

  return (
    <section id="philosophy" className="bg-paper py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="05"
            label="Working Philosophy"
            title={<>How I Think. How I Build.</>}
            description="Six habits that matter more to me than any single tool or technology."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-16 sm:grid-cols-2 lg:mt-20">
          {principles.map((principle) => {
            const isActive = principle.index === active;
            return (
              <button
                key={principle.index}
                type="button"
                onClick={() => setActive(principle.index)}
                aria-expanded={isActive}
                className="group flex items-center gap-5 border-t border-line py-5 text-left"
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${isActive ? "text-forest" : "text-muted"}`}
                >
                  {principle.index}
                </span>
                <span
                  className={`flex-1 font-display text-[clamp(1.35rem,2.1vw,1.85rem)] leading-none transition-colors duration-300 ${
                    isActive ? "text-forest" : "text-ink group-hover:text-forest"
                  }`}
                >
                  {principle.title}
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-xl leading-none ${isActive ? "text-forest" : "text-muted"}`}
                >
                  +
                </motion.span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.index}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduced ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-[minmax(0,.3fr)_minmax(0,.7fr)] md:gap-12"
          >
            <p className="eyebrow text-muted">Principle {selected.index} / 06</p>
            <p className="display-type max-w-[34ch] text-[clamp(1.5rem,2.6vw,2.35rem)] leading-[1.3]">
              {selected.explanation}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
