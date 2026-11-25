import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-2 text-white">
      <div className="page-shell">
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-white/20 pt-8">
          <div>
            <p className="font-display text-4xl tracking-[-0.06em]">
              SV<span className="text-[#A8C3B1]">V</span>
            </p>
            <p className="mt-3 font-display text-lg italic text-white/50">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#home"
              className="link-underline font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 hover:text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.supportingStatement}</span>
        </div>
      </div>
    </footer>
  );
}
