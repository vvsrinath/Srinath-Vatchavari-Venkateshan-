"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/content";

type Filter = "all" | "research" | "built" | "concept";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "research", label: "Research" },
  { id: "built", label: "Built & live" },
  { id: "concept", label: "Concepts" },
];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "research") return project.statusTone === "research";
  if (filter === "built") return project.statusTone === "completed";
  return project.statusTone === "concept";
}

function statusClass(tone: string) {
  if (tone === "research") return "border-forest/40 text-forest";
  if (tone === "completed") return "border-ink/30 text-ink";
  return "border-line text-muted";
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<string[]>([]);
  const reduced = useReducedMotion();

  const visible = useMemo(() => projects.filter((project) => matchesFilter(project, filter)), [filter]);
  const allExpanded = visible.length > 0 && visible.every((project) => open.includes(project.index));

  const toggle = (index: string) =>
    setOpen((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );

  const toggleAll = () => setOpen(allExpanded ? [] : visible.map((project) => project.index));

  return (
    <section id="projects" className="bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="04"
            label="Research & Projects"
            title={<>Ideas, Put to Work.</>}
            description="Research, live tools, prototypes and concepts. Filter by stage, then open only the detail you need."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-y border-line py-4 sm:mt-16">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by stage">
              {filters.map((item) => {
                const count = projects.filter((project) => matchesFilter(project, item.id)).length;
                const active = filter === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setFilter(item.id);
                      setOpen([]);
                    }}
                    className={`inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors duration-300 sm:text-[10px] ${
                      active
                        ? "border-forest bg-forest text-white"
                        : "border-line text-ink-soft hover:border-forest hover:text-forest"
                    }`}
                  >
                    {item.label}
                    <span className={active ? "text-white/60" : "text-muted"}>
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={toggleAll}
              aria-pressed={allExpanded}
              className="link-underline inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-forest"
            >
              {allExpanded ? "Collapse all" : "Expand all"}
              <span aria-hidden="true" className="text-sm leading-none">
                {allExpanded ? "−" : "+"}
              </span>
            </button>
          </div>
        </Reveal>

        <p className="eyebrow mt-5 text-muted">
          Showing {String(visible.length).padStart(2, "0")} of {String(projects.length).padStart(2, "0")} projects
        </p>

        <div className="mt-8 lg:mt-10">
          {visible.map((project) => {
            const expanded = open.includes(project.index);
            const detailId = `project-detail-${project.index}`;

            return (
              <Reveal key={project.index}>
                <article className="border-t border-line py-9 transition-colors duration-500 hover:border-forest/30 last:border-b lg:py-12">
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

                  <div className="mt-7 grid gap-7 lg:mt-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
                    <div>
                      <h3 className="display-type text-[clamp(2rem,3.7vw,3.4rem)] leading-[1.05]">
                        <button
                          type="button"
                          onClick={() => toggle(project.index)}
                          aria-expanded={expanded}
                          aria-controls={detailId}
                          className="text-left transition-colors duration-300 hover:text-forest"
                        >
                          {project.title}
                        </button>
                      </h3>
                      <p className="mt-5 max-w-[26ch] font-display text-[clamp(1.15rem,1.7vw,1.45rem)] italic leading-[1.45] text-forest">
                        {project.subtitle}
                      </p>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => toggle(project.index)}
                        aria-expanded={expanded}
                        aria-controls={detailId}
                        className="group block w-full text-left"
                      >
                        <span className="block max-w-[38rem] text-[14px] leading-[1.9] text-ink-soft sm:text-[15px]">
                          {project.summary}
                        </span>
                        <span className="mt-6 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-forest">
                          <span className="link-underline">{expanded ? "Close detail" : "Read the detail"}</span>
                          <motion.span
                            aria-hidden="true"
                            animate={{ rotate: expanded ? 45 : 0 }}
                            transition={{ duration: reduced ? 0 : 0.35 }}
                            className="text-base leading-none"
                          >
                            +
                          </motion.span>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            id={detailId}
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
