"use client";

import { useMemo, useState } from "react";
import { projects, type Project } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion";
import { ArrowIcon, ChevronIcon, ExternalIcon, GithubIcon, LockIcon } from "./icons";

const FILTERS = ["All", "Java", ".NET", "React", "Node.js", "Data"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  const [lead, ...rest] = filter === "All" ? shown : [undefined, ...shown];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="projects"
          index="03"
          eyebrow="Selected work"
          title="Projects built end to end."
          intro="Schema, API, authorization and frontend — each one solves a concrete workflow rather than demonstrating a framework."
        />

        {/* Filter chips */}
        <Reveal delay={60}>
          <div role="group" aria-label="Filter projects by technology" className="mt-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const count = f === "All" ? projects.length : projects.filter((p) => p.tags.includes(f)).length;
              const on = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(f)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    on
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-paper text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {f}
                  <span
                    className={`rounded-full px-1.5 text-[11px] tnum ${
                      on ? "bg-white/15 text-white" : "bg-sand text-faint"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {lead ? <LeadCard key={lead.slug} project={lead} /> : null}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.filter(Boolean).map((p) => (
              <GridCard key={(p as Project).slug} project={p as Project} />
            ))}
          </div>
          {shown.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-line-strong p-10 text-center text-sm text-muted">
              Nothing tagged {filter} yet.
            </p>
          ) : null}
        </div>

        <Reveal>
          <a
            href="https://github.com/ArmanSingh7"
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-12 inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="border-b border-ink/30 pb-0.5 group-hover:border-ink">
              More on GitHub
            </span>
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function LeadCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl [&>*]:min-w-0 border border-line bg-paper shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)] lg:grid-cols-[1.15fr_1fr]">
      <div className="relative flex items-center border-b border-line bg-sand/50 p-5 pt-14 sm:p-8 sm:pt-16 lg:border-b-0 lg:border-r">
        <Thumb project={project} />
        <span className="absolute left-5 top-5 rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white sm:left-8 sm:top-8">
          Featured
        </span>
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <Meta project={project} />
        <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.blurb}</p>

        {project.stats ? (
          <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-canvas px-3 py-3">
                <dt className="font-display text-xl font-bold text-ink">{s.value}</dt>
                <dd className="text-[11px] text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <ul className="mt-6 space-y-2.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h.slice(0, 30)} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
              {h}
            </li>
          ))}
        </ul>

        <Stack items={project.stack} />
        <div className="mt-auto pt-7">
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

function GridCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="border-b border-line bg-sand/50 p-4">
        <Thumb project={project} compact />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta project={project} />
        <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.blurb}</p>

        <details className="group/d mt-4 text-sm">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            Engineering notes
            <ChevronIcon className="h-4 w-4 transition-transform group-open/d:rotate-180" />
          </summary>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((h) => (
              <li key={h.slice(0, 30)} className="flex gap-2.5 leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                {h}
              </li>
            ))}
          </ul>
        </details>

        <Stack items={project.stack} />
        <div className="mt-auto pt-6">
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: project.accent[1] }} />
      {project.kind}
      <span aria-hidden>·</span>
      {project.year}
    </p>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded-md bg-sand px-2 py-1 font-mono text-[11px] text-ink-soft">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Links({ project }: { project: Project }) {
  if (!project.links.length) {
    return (
      <p className="inline-flex items-center gap-2 text-xs font-medium text-muted">
        <LockIcon className="h-4 w-4" />
        Private repository — walkthrough on request
      </p>
    );
  }
  return (
    <div className="flex flex-wrap gap-2.5">
      {project.links.map((l) => {
        const src = /source/i.test(l.label);
        return (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className={
              l.primary
                ? "inline-flex items-center gap-2 rounded-lg bg-cobalt px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-deep"
                : "inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            }
          >
            {src ? <GithubIcon className="h-4 w-4" /> : <ExternalIcon className="h-4 w-4" />}
            {l.label}
          </a>
        );
      })}
    </div>
  );
}

/**
 * Project thumbnail. Uses a real screenshot when `project.image` is set;
 * otherwise renders an illustrated app window in the project's accent colours.
 */
function Thumb({ project, compact = false }: { project: Project; compact?: boolean }) {
  const [a, b] = project.accent;

  const shots = project.gallery ?? (project.image ? [{ label: project.title, src: project.image }] : []);
  if (shots.length) return <Screenshot project={project} shots={shots} compact={compact} />;

  const bars = project.slug.split("").slice(0, 8).map((c) => 30 + ((c.charCodeAt(0) * 37) % 65));

  return (
    <div
      aria-hidden
      className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-paper shadow-[var(--shadow-card)] transition-transform duration-500 group-hover:scale-[1.015]"
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 h-3.5 flex-1 rounded bg-sand" />
      </div>
      <div className="flex h-full">
        <div className="w-[22%] space-y-2 border-r border-line bg-canvas/60 p-2.5">
          <div className="h-4 w-4 rounded" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />
          {Array.from({ length: compact ? 4 : 5 }).map((_, i) => (
            <div key={i} className="h-1.5 rounded-full bg-line" style={{ width: `${60 + ((i * 17) % 35)}%`, opacity: i === 1 ? 1 : 0.8, background: i === 1 ? b : undefined }} />
          ))}
        </div>
        <div className="flex-1 space-y-2.5 p-3">
          <div className="text-[10px] font-bold tracking-tight text-ink sm:text-xs">{project.title}</div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-line p-1.5">
                <div className="h-1 w-2/3 rounded-full bg-line" />
                <div className="mt-1.5 h-2 w-1/2 rounded-full" style={{ background: i === 0 ? a : i === 1 ? b : "#d4d1c8" }} />
              </div>
            ))}
          </div>
          <div className="flex h-[38%] items-end gap-1 rounded-md border border-line p-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: i % 3 === 0 ? b : a, opacity: 0.35 + (i % 4) * 0.18 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Real screenshot(s). Multiple shots get small tabs to switch between them. */
function Screenshot({
  project,
  shots,
  compact,
}: {
  project: Project;
  shots: { label: string; src: string }[];
  compact: boolean;
}) {
  const [i, setI] = useState(0);
  const shot = shots[i];
  return (
    <div className="relative w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={shot.src}
        src={shot.src}
        alt={`${project.title} — ${shot.label} screenshot`}
        loading="lazy"
        decoding="async"
        className={`w-full rounded-xl border border-line bg-paper shadow-[var(--shadow-card)] transition-transform duration-500 group-hover:scale-[1.01] ${
          compact ? "aspect-[16/10] object-cover object-left-top" : "h-auto"
        }`}
      />
      {shots.length > 1 ? (
        <div
          role="tablist"
          aria-label={`${project.title} screenshots`}
          className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1 rounded-full border border-line bg-paper/95 p-1 shadow-[var(--shadow-card)] backdrop-blur"
        >
          {shots.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
                idx === i ? "bg-ink text-white" : "text-muted hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
