"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DisciplineArt } from "@/components/disciplines/DisciplineArt";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { disciplines } from "@/lib/content";

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];

export function Disciplines() {
  const reduced = useReducedMotion();

  return (
    <section id="exploration" className="bg-paper py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="02"
            label="Exploration"
            title={<>Fields of Curiosity.</>}
            description="Six areas where reading, experiments and building keep meeting. They are active interests, not claims of professional mastery."
            aside={
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                Interdisciplinary by choice
              </p>
            }
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-14 lg:mt-24 md:grid-cols-12">
          {disciplines.map((discipline, index) => (
            <Reveal key={discipline.index} className={spans[index]} delay={(index % 2) * 0.08}>
              <motion.article
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 340, damping: 26 }}
                className="group flex h-full flex-col justify-between border-t border-line px-1 pb-10 pt-6 transition-colors duration-500 hover:bg-paper-2"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="eyebrow text-muted">
                    {discipline.index} <span className="px-2 text-line">/</span> Exploration
                  </p>
                  <div className="h-12 w-12 shrink-0 text-forest transition-transform duration-700 ease-editorial group-hover:-rotate-6 group-hover:scale-105">
                    <DisciplineArt kind={discipline.art} />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="display-type max-w-[18ch] text-[clamp(1.55rem,2.4vw,2.25rem)] leading-[1.12]">
                    {discipline.title}
                  </h3>
                  <p className="mt-4 max-w-[34rem] text-[14px] leading-[1.85] text-ink-soft">
                    {discipline.description}
                  </p>
                </div>

                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5">
                  {discipline.keywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-forest"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
