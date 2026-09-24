import { certifications, education, skills } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion";
import {
  AwardIcon,
  CapIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  MonitorIcon,
  ServerIcon,
} from "./icons";

const ICONS: Record<string, typeof CodeIcon> = {
  Languages: CodeIcon,
  Backend: ServerIcon,
  Frontend: MonitorIcon,
  Databases: DatabaseIcon,
  "Cloud & Tools": CloudIcon,
  "Core CS": CpuIcon,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-line bg-paper py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="skills"
          index="04"
          eyebrow="Skills"
          title="The toolkit behind the work."
          intro="Grouped by what I actually build with."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => {
            const Icon = ICONS[g.title] ?? CodeIcon;
            return (
              <Reveal key={g.title} delay={(i % 3) * 60}>
                <div className="h-full rounded-2xl border border-line bg-canvas p-6 transition-all hover:border-line-strong hover:bg-paper hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-paper text-cobalt">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">{g.title}</h3>
                    <span className="ml-auto font-mono text-[11px] text-faint">
                      {String(g.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-lg border border-line bg-paper px-2.5 py-1.5 text-[13px] font-medium text-ink-soft"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Credentials */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <div className="flex h-full flex-col rounded-2xl bg-ink p-7 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <CapIcon className="h-5 w-5" />
              </span>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                Education
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug">
                {education.institution}
              </p>
              <p className="mt-1.5 text-sm text-white/70">{education.degree}</p>
              <div className="mt-auto flex items-end justify-between pt-8">
                <span className="font-mono text-xs text-white/60">{education.period}</span>
                <span className="font-display text-3xl font-bold">
                  9.04<span className="text-base font-medium text-white/50"> / 10</span>
                </span>
              </div>
            </div>
          </Reveal>
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i + 1) * 60}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-canvas p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cobalt-soft text-cobalt">
                  <AwardIcon className="h-5 w-5" />
                </span>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  Certification · {c.issuer}
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                  {c.title}
                </p>
                <p className="mt-auto pt-6 text-sm text-muted">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
