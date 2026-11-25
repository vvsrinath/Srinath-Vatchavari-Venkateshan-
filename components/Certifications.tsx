"use client";

import { useEffect, useState } from "react";
import type { Certification } from "@/lib/certifications";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

type CertificationsResponse = {
  items: Certification[];
  source: "live" | "local";
  syncedAt: string | null;
};

export function Certifications() {
  const [data, setData] = useState<CertificationsResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/certifications", { signal: controller.signal })
      .then((response) => response.json())
      .then((payload: CertificationsResponse) => setData(payload))
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  const items = data?.items ?? [];
  const live = data?.source === "live";

  return (
    <section id="credentials" className="bg-paper py-24 sm:py-28 lg:py-36">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="07"
            label="Credentials"
            title={<>Learning, Recorded.</>}
            description="Certifications and licences are maintained on LinkedIn. When a credential is added there, this section can mirror it automatically."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-10">
              <p className="display-type max-w-[18ch] text-[clamp(1.8rem,3vw,2.75rem)] leading-[1.2]">
                The current list always lives on LinkedIn.
              </p>
              <div>
                <p className="max-w-md text-[14px] leading-[1.9] text-ink-soft">
                  LinkedIn does not expose a public, unauthenticated feed of
                  certifications. The complete and most up-to-date record is the
                  profile itself; this page shows mirrored entries when a sync
                  provider is connected.
                </p>
                <p className="eyebrow mt-7 text-muted">Certifications &amp; licences</p>
                <a
                  href={site.certificationsLinkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-2 block break-all font-mono text-[10px] leading-relaxed tracking-[0.06em] text-forest"
                >
                  {site.certificationsLinkedin}
                </a>
                <a
                  href={site.certificationsLinkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-7 inline-flex items-center gap-4 border border-forest px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-forest transition-colors duration-300 hover:bg-forest hover:text-white"
                >
                  View All Credentials
                  <Arrow className="transition-transform duration-300 ease-editorial group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-line bg-paper-2 px-6 py-7 sm:px-9 sm:py-9">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
                <p className="eyebrow text-ink">Certifications &amp; Licences</p>
                {live && (
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-forest">
                    Synced from LinkedIn
                  </p>
                )}
              </div>

              {items.length > 0 ? (
                <ul>
                  {items.map((item, index) => (
                    <li
                      key={`${item.title}-${index}`}
                      className="grid gap-2 border-b border-line py-5 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline"
                    >
                      <div>
                        <p className="font-display text-[1.35rem] leading-tight">{item.title}</p>
                        <p className="mt-1 text-[13px] text-ink-soft">
                          {item.issuer}
                          {item.date ? <span className="text-muted"> · {item.date}</span> : null}
                        </p>
                      </div>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-forest"
                        >
                          Credential <Arrow className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-8">
                  <p className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] italic leading-snug text-ink-soft">
                    Credentials appear here as they are added.
                  </p>
                  <p className="mt-4 max-w-md text-[13px] leading-[1.85] text-muted">
                    {data === null
                      ? "Checking for mirrored credentials…"
                      : "No mirrored credentials are configured yet. The LinkedIn profile remains the authoritative list."}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
