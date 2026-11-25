import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const traits = [
  "Independent learning",
  "Cross-disciplinary thinking",
  "Research curiosity",
  "Building & experimentation",
  "Adaptability",
  "Strong work ethic",
];

export function About() {
  return (
    <section id="about" className="bg-paper-2 py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title={<>Beyond a Single Discipline.</>}
            description="My interests move between mechanical systems, materials, computation, energy and emerging technology."
          />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:gap-20">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-white">
                <Image
                  src="/images/srinath-portrait.png"
                  alt="Portrait of Srinath Vatchavari Venkateshan"
                  fill
                  sizes="(max-width: 1024px) 90vw, 36vw"
                  className="object-cover object-top grayscale"
                  priority
                />
                <span className="absolute bottom-0 right-0 bg-forest px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                  SVV / 01
                </span>
              </div>
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                <span>Srinath Vatchavari Venkateshan</span>
                <span className="text-forest">Independent Thinker</span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="display-type max-w-[22ch] text-[clamp(1.7rem,2.9vw,2.7rem)] leading-[1.25]">
                I would rather understand how something works than stay inside the box it was taught in.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-9 max-w-[42rem] text-[15px] leading-[1.9] text-ink-soft">
                I am an independent thinker and interdisciplinary learner. My work
                often begins with a question that does not belong to one subject.
                Following it means reading outside a syllabus, learning a tool from
                scratch, testing an idea in a small way and being willing to be wrong.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[42rem] text-[15px] leading-[1.9] text-ink-soft">
                I am interested in the space where a theory becomes a test, and a test
                becomes something I can hold or measure. The areas below are
                directions of exploration, not claims of mastery in every field.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-12 border-t border-line">
                {traits.map((trait, index) => (
                  <div
                    key={trait}
                    className="group flex items-baseline justify-between gap-6 border-b border-line py-4"
                  >
                    <span className="font-mono text-[10px] text-muted transition-colors group-hover:text-forest">
                      0{index + 1}
                    </span>
                    <span className="flex-1 text-[15px] text-ink-soft transition-colors group-hover:text-ink">
                      {trait}
                    </span>
                    <span className="h-px w-6 bg-line transition-all duration-500 ease-editorial group-hover:w-12 group-hover:bg-forest" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
