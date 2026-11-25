import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recognition } from "@/lib/content";

export function Recognition() {
  return (
    <section id="recognition" className="section-dark bg-ink py-24 text-white sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="03"
            label="Recognition"
            inverted
            title={<>Selected Work, Noted.</>}
            description="A few moments where an idea was tested beyond the desk. Nothing here is a claim of professional experience."
          />
        </Reveal>

        <div className="mt-16 lg:mt-24">
          {recognition.map((item) => (
            <Reveal key={item.index}>
              <article className="group grid gap-6 border-t border-white/20 py-10 transition-colors duration-500 hover:border-white/40 lg:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)] lg:gap-12 lg:py-12">
                <div className="flex flex-col justify-between gap-10">
                  <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    <span>{item.index}</span>
                    <span className="h-px w-8 bg-white/30" />
                    <span>{item.category}</span>
                  </div>
                  <h3 className="display-type text-[clamp(2.25rem,4.6vw,4.25rem)] leading-[1.02]">
                    {item.title}
                  </h3>
                </div>

                <div className="flex flex-col justify-between gap-8 lg:items-end lg:text-right">
                  <p className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] italic text-[#A8C3B1]">
                    {item.result}
                  </p>
                  <p className="max-w-md text-[14px] leading-[1.85] text-white/65">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-7">
            <p className="max-w-xl text-[13px] leading-relaxed text-white/50">
              Supporting documents and full details are available on request.
            </p>
            <a
              href="#projects"
              className="link-underline inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[#A8C3B1]"
            >
              See related work <Arrow />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
