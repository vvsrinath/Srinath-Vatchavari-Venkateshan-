import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-white sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="08"
            label="Contact"
            inverted
            title={<>Start a Conversation.</>}
            description="For research internships, R&D roles, collaborations or a good question about an idea that crosses disciplines."
          />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <div>
              <p className="display-type text-[clamp(2.2rem,4.2vw,3.8rem)] leading-[1.05]">
                {site.name}
              </p>
              <p className="mt-6 font-display text-[clamp(1.25rem,2vw,1.7rem)] italic text-[#A8C3B1]">
                Independent Thinker | Builder | Research Explorer
              </p>
              <p className="mt-9 max-w-md text-[14px] leading-[1.9] text-white/60">
                If you are working on something that does not fit neatly into one
                discipline, I would like to hear about it.
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-4 bg-white px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-[#A8C3B1]"
              >
                Message Me on LinkedIn
                <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-white/20">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-3 border-b border-white/20 py-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">LinkedIn</span>
                <span className="link-underline font-display text-[clamp(1.1rem,1.7vw,1.5rem)] text-white">
                  View profile <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-3 border-b border-white/20 py-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">GitHub</span>
                <span className="link-underline font-display text-[clamp(1.1rem,1.7vw,1.5rem)] text-white">
                  View repositories <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="group flex flex-wrap items-baseline justify-between gap-3 border-b border-white/20 py-5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Email
                  </span>
                  <span className="link-underline break-all font-display text-[clamp(1.1rem,1.7vw,1.5rem)] text-white">
                    {site.email}{" "}
                    <Arrow className="inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              ) : (
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/20 py-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Professional email
                  </span>
                  <span className="font-display text-[clamp(1.1rem,1.7vw,1.5rem)] italic text-white/60">
                    Add your address
                  </span>
                </div>
              )}

              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-white/20 py-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                  Resume PDF
                </span>
                <span className="font-display text-[clamp(1.1rem,1.7vw,1.5rem)] italic text-white/60">
                  Add your PDF
                </span>
              </div>

              <p className="mt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-white/60">
                Resume PDF is still a placeholder — set it in lib/site.ts when a PDF is ready.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
