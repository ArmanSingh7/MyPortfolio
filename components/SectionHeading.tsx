import type { ReactNode } from "react";
import { Reveal } from "./motion";

/** Numbered section heading: "01 / ABOUT" eyebrow, display title, optional intro. */
export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  action,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <Reveal>
      <div
        className={`flex flex-col gap-6 ${
          align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
        }`}
      >
        <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
          <p className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted">
            <span className="text-cobalt">{index}</span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-4 text-3xl font-semibold leading-[1.1] text-ink sm:text-[2.6rem]"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}
