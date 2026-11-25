import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  aside?: ReactNode;
  inverted?: boolean;
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  aside,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-8 border-t pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)]"
      style={{ borderColor: inverted ? "rgba(255,255,255,.22)" : "var(--line)" }}
    >
      <div>
        <p className={`eyebrow flex items-center gap-3 ${inverted ? "text-white/55" : "text-muted"}`}>
          <span>{index}</span>
          <span className="h-px w-6 bg-current opacity-50" />
          <span>{label}</span>
        </p>
        <h2
          className={`display-type mt-7 text-[clamp(2.5rem,5.2vw,5rem)] ${
            inverted ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {(description || aside) && (
        <div className="flex flex-col justify-end gap-6 pb-1 md:items-end md:text-right">
          {description && (
            <p
              className={`max-w-md text-[15px] leading-[1.8] md:ml-auto ${
                inverted ? "text-white/65" : "text-ink-soft"
              }`}
            >
              {description}
            </p>
          )}
          {aside}
        </div>
      )}
    </div>
  );
}
