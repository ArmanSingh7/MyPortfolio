import { about, education, site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Capabilities } from "./Capabilities";
import { Reveal } from "./motion";

export function About() {
  const facts = [
    { k: "Based in", v: site.location },
    { k: "Education", v: "B.Tech CSE · ITER, SOA University" },
    { k: "CGPA", v: "9.04 / 10" },
    { k: "Focus", v: "Backend & full-stack engineering" },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="about"
          index="01"
          eyebrow="About me"
          title="Engineering for systems people actually depend on."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 [&>*]:min-w-0">
          <Reveal>
            <div className="space-y-5">
              {about.map((p) => (
                <p key={p.slice(0, 24)} className="text-[15.5px] leading-[1.75] text-muted">
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {facts.map((f) => (
                <div key={f.k} className="bg-paper px-5 py-4">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
                    {f.k}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
            <p className="sr-only">{education.institution}</p>
          </Reveal>

          <Reveal delay={100}>
            <Capabilities />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
