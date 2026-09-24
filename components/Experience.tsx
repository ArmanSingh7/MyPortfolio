import { experience } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion";

/** Vertical timeline: dates on the left, a rail with nodes, role cards on the right. */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y border-line bg-paper py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="experience"
          index="02"
          eyebrow="Experience"
          title="Where I've shipped."
          intro="Enterprise payroll engineering at Dayforce and client web delivery at Bloom Agency."
        />

        <ol className="relative mt-16">
          <span
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-line-strong md:left-[calc(12rem+7px)]"
          />
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-12 last:pb-0">
              <Reveal delay={i * 80}>
                <div className="grid gap-4 pl-9 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0">
                  {/* Date column */}
                  <div className="md:pr-8 md:pt-6 md:text-right">
                    <p className="whitespace-nowrap font-mono text-xs font-medium text-ink">{job.period}</p>
                    <p className="mt-1 text-xs text-muted">{job.location}</p>
                  </div>

                  {/* Node */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 bg-paper md:left-[12rem] md:top-7 ${
                      i === 0 ? "border-cobalt" : "border-line-strong"
                    }`}
                  >
                    {i === 0 ? <span className="h-1.5 w-1.5 rounded-full bg-cobalt" /> : null}
                  </span>

                  {/* Card */}
                  <article className="rounded-2xl border border-line bg-canvas p-6 transition-shadow hover:shadow-[var(--shadow-card)] sm:p-7 md:ml-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-cobalt">{job.company}</p>
                      </div>
                      {i === 0 ? (
                        <span className="rounded-full bg-cobalt-soft px-2.5 py-1 text-[11px] font-semibold text-cobalt">
                          Most recent
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>

                    <ul className="mt-5 space-y-3">
                      {job.highlights.map((h) => (
                        <li key={h.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                          <svg
                            aria-hidden
                            viewBox="0 0 20 20"
                            className="mt-0.5 h-4 w-4 shrink-0 text-cobalt"
                            fill="currentColor"
                          >
                            <path d="M8.6 13.4 5.2 10l-1.1 1.1 4.5 4.5 7.8-7.8-1.1-1.1z" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                      {job.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-md border border-line bg-paper px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
