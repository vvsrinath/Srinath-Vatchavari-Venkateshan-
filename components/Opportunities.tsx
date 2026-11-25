"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { opportunities } from "@/lib/content";

export function Opportunities() {
  const reduced = useReducedMotion();

  return (
    <section id="opportunities" className="bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="06"
            label="Opportunity"
            title={<>Let&apos;s Explore What&apos;s Possible.</>}
            description="Looking for teams where curiosity is treated as an input to the work, not a distraction from it."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <div>
              <p className="inline-flex items-center gap-3 border border-forest/40 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-forest sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                Available for internship &amp; research opportunities
              </p>
              <p className="display-type mt-10 max-w-[20ch] text-[clamp(1.8rem,3vw,2.75rem)] leading-[1.22]">
                Open to work that crosses boundaries.
              </p>
              <p className="mt-7 max-w-md text-[15px] leading-[1.9] text-ink-soft">
                I am interested in working with teams that value experimentation,
                interdisciplinary thinking, research, engineering innovation and
                practical problem-solving.
              </p>

              <motion.a
                href="#contact"
                whileHover={reduced ? undefined : { y: -2 }}
                transition={{ type: "spring", stiffness: 380, damping: 26 }}
                className="group mt-10 inline-flex items-center gap-4 bg-forest px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
              >
                Get In Touch
                <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="border-t border-line">
              {opportunities.map((opportunity, index) => (
                <li
                  key={opportunity}
                  className="group flex items-baseline gap-5 border-b border-line py-5"
                >
                  <span className="font-mono text-[10px] text-muted transition-colors group-hover:text-forest">
                    0{index + 1}
                  </span>
                  <span className="flex-1 font-display text-[clamp(1.3rem,2.1vw,1.9rem)] leading-[1.25] text-ink-soft transition-colors duration-300 group-hover:text-forest">
                    {opportunity}
                  </span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-forest opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
