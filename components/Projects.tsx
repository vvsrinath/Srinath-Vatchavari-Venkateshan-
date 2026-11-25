"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/content";

function statusClass(tone: string) {
  if (tone === "research") return "border-forest/40 text-forest";
  if (tone === "completed") return "border-ink/30 text-ink";
  return "border-line text-muted";
}

export function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0].index);
  const reduced = useReducedMotion();

  return (
    <section id="projects" className="bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="04"
            label="Research & Projects"
            title={<>Ideas, Put to Work.</>}
            description="Research, prototypes and concepts at different stages. Each one is labelled honestly: ongoing, completed or still an idea on paper."
          />
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {projects.map((project) => {
            const expanded = open === project.index;

            return (
              <Reveal key={project.index}>
                <article className="border-t border-line py-10 last:border-b lg:py-14">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="eyebrow text-muted">
                      {project.index} <span className="px-2 text-line">/</span> Project
                    </p>
                    <span
                      className={`border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] ${statusClass(project.statusTone)}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
                    <div>
                      <h3 className="display-type text-[clamp(2rem,3.7vw,3.4rem)] leading-[1.05]">
                        {project.title}
                      </h3>
                      <p className="mt-5 max-w-[26ch] font-display text-[clamp(1.15rem,1.7vw,1.45rem)] italic leading-[1.45] text-forest">
                        {project.subtitle}
                      </p>
                    </div>

                    <div>
                      <p className="max-w-[38rem] text-[14px] leading-[1.9] text-ink-soft sm:text-[15px]">
                        {project.summary}
                      </p>

                      <button
                        type="button"
                        onClick={() => setOpen(expanded ? null : project.index)}
                        aria-expanded={expanded}
                        aria-controls={`project-detail-${project.index}`}
                        className="group mt-7 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-forest"
                      >
                        <span className="link-underline">{expanded ? "Close detail" : "Read the detail"}</span>
                        <motion.span
                          aria-hidden="true"
                          animate={{ rotate: expanded ? 45 : 0 }}
                          transition={{ duration: reduced ? 0 : 0.35 }}
                          className="text-base leading-none"
                        >
                          +
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            id={`project-detail-${project.index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-6 space-y-3 border-l border-forest/40 pl-5">
                              {project.detail.map((line) => (
                                <li key={line} className="text-[13px] leading-[1.8] text-ink-soft">
                                  {line}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-5">
                        {project.topics.map((topic) => (
                          <li
                            key={topic}
                            className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>

                      {project.links && project.links.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                          {project.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="link-underline inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-forest"
                            >
                              {link.label} <Arrow />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
