import type { Discipline } from "@/lib/content";

type ArtProps = {
  kind: Discipline["art"];
};

export function DisciplineArt({ kind }: ArtProps) {
  const common = {
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-full w-full",
    "aria-hidden": true,
  };

  if (kind === "mechanical") {
    return (
      <svg {...common}>
        <circle cx="50" cy="50" r="29" />
        <circle cx="50" cy="50" r="16" />
        <circle cx="50" cy="50" r="4" />
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={50 + Math.cos(angle) * 16}
              y1={50 + Math.sin(angle) * 16}
              x2={50 + Math.cos(angle) * 29}
              y2={50 + Math.sin(angle) * 29}
            />
          );
        })}
        <path d="M50 8v7M50 85v7M8 50h7M85 50h7" />
      </svg>
    );
  }

  if (kind === "materials") {
    return (
      <svg {...common}>
        <path d="M50 14 76 29v30L50 74 24 59V29L50 14Z" />
        <path d="M50 14v25m26-10L50 39 24 29m26 10v25m26-30L50 54 24 44m26 10v10m26-30L50 64 24 54" />
        <circle cx="50" cy="14" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="76" cy="59" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="24" cy="59" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="50" cy="74" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === "computation") {
    return (
      <svg {...common}>
        <path d="M28 32 50 20l22 12v26L50 70 28 58V32Z" />
        <path d="M28 32 50 44l22-12M50 44v26" />
        <circle cx="50" cy="44" r="6" />
        <circle cx="50" cy="20" r="3" fill="currentColor" stroke="none" />
        <circle cx="28" cy="58" r="3" fill="currentColor" stroke="none" />
        <circle cx="72" cy="58" r="3" fill="currentColor" stroke="none" />
        <circle cx="50" cy="70" r="3" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === "blockchain") {
    return (
      <svg {...common}>
        <path d="M50 12 78 27 50 42 22 27 50 12Z" />
        <path d="M22 27v22l28 15 28-15V27M50 42v22M22 49l28 15 28-15" />
        <path d="M22 71 50 86l28-15" />
      </svg>
    );
  }

  if (kind === "economics") {
    return (
      <svg {...common}>
        <path d="M20 16v66h64" />
        <path d="M20 76 34 62l14 6 14-20 18-12" />
        <circle cx="34" cy="62" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="48" cy="68" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="62" cy="48" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="80" cy="36" r="2.5" fill="currentColor" stroke="none" />
        <path d="M20 50h6M20 32h6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="38" cy="52" r="13" />
      <path d="M38 30V16m0 72V74M16 52H5m66 0h11M22 36l-8-8m48 48 8 8M22 68l-8 8m48-48 8-8" />
      <path d="M68 22v14m-7-7h14" />
      <circle cx="38" cy="52" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
