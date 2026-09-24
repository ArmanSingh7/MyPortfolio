import { marqueeItems } from "@/content/site";

/** A quiet "trusted stack" band between the hero and About. */
export function TechStrip() {
  return (
    <section aria-label="Technologies" className="border-y border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
        <p className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
          Technologies I ship with
        </p>
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {marqueeItems.slice(0, 12).map((t) => (
            <li
              key={t}
              className="font-display text-[15px] font-semibold tracking-tight text-muted/80 transition-colors hover:text-ink"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
