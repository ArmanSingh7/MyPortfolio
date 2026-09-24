import { contact, heroBadges, metrics, site } from "@/content/site";
import { Counter, Reveal } from "./motion";
import {
  ArrowIcon,
  AwardIcon,
  BugIcon,
  CapIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
  ServerIcon,
} from "./icons";

const METRIC_ICONS = [CapIcon, ServerIcon, BugIcon, AwardIcon];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="dots dots-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12 [&>*]:min-w-0">
          {/* ---------- Copy ---------- */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint-soft px-3 py-1 text-xs font-semibold text-mint">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-mint" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                  </span>
                  Open to opportunities
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                  <PinIcon className="h-3.5 w-3.5" />
                  {site.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="mt-8 font-mono text-sm text-muted">Hi, I&apos;m</p>
              <h1 className="mt-2 font-display text-[clamp(2.75rem,6.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
                Arman <span className="text-cobalt">Singh</span>
              </h1>
              <p className="mt-4 font-mono text-[15px] text-ink-soft">
                Software Engineer <span className="text-faint">·</span> Java / Spring Boot{" "}
                <span className="text-faint">·</span> C# / .NET
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                I build <strong className="font-semibold text-ink">production software that holds up under real users</strong>{" "}
                — enterprise payroll systems serving Asia-Pacific, full-stack
                platforms, and AI-assisted engineering tooling.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-cobalt px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(36,81,255,0.7)] transition-colors hover:bg-cobalt-deep"
                >
                  View projects
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={contact.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-faint">
                  Find me on
                </span>
                <span aria-hidden className="h-px w-8 bg-line-strong" />
                <div className="flex gap-2">
                  {[
                    { href: contact.github, label: "GitHub", Icon: GithubIcon, ext: true },
                    { href: contact.linkedin, label: "LinkedIn", Icon: LinkedinIcon, ext: true },
                    { href: `mailto:${contact.email}`, label: "Email", Icon: MailIcon, ext: false },
                  ].map(({ href, label, Icon, ext }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      {...(ext ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-paper text-muted transition-all hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------- Code card with floating badges ---------- */}
          <Reveal delay={200} className="relative lg:pl-6">
            <CodeCard />
            <Badge
              className="float -top-6 right-5"
              {...heroBadges[0]}
              tone="cobalt"
            />
            <Badge
              className="float-delay -bottom-7 right-6 hidden sm:flex"
              {...heroBadges[1]}
              tone="mint"
            />
            <Badge
              className="float -bottom-7 left-10 hidden sm:flex lg:left-14"
              {...heroBadges[2]}
              tone="ink"
            />
          </Reveal>
        </div>

        {/* ---------- Stat cards ---------- */}
        <div className="mt-20 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metrics.map((m, i) => {
            const Icon = METRIC_ICONS[i % METRIC_ICONS.length];
            return (
              <Reveal key={m.label} delay={i * 60}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-line bg-paper p-4 shadow-[var(--shadow-card)] sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt-soft text-cobalt">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
                      <Counter value={m.num} decimals={m.decimals} suffix={m.suffix} />
                    </p>
                    <p className="text-xs font-medium leading-tight text-muted sm:text-[13px]">
                      {m.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Badge({
  label,
  detail,
  tone,
  className = "",
}: {
  label: string;
  detail: string;
  tone: "cobalt" | "mint" | "ink";
  className?: string;
}) {
  const dot =
    tone === "cobalt" ? "bg-cobalt" : tone === "mint" ? "bg-mint" : "bg-ink";
  return (
    <div
      className={`absolute z-10 flex items-center gap-2.5 rounded-xl border border-line bg-paper/95 px-3.5 py-2.5 shadow-[var(--shadow-lift)] backdrop-blur ${className}`}
    >
      <span aria-hidden className={`h-2 w-2 rounded-full ${dot}`} />
      <div className="leading-tight">
        <p className="text-[13px] font-semibold text-ink">{label}</p>
        <p className="text-[11px] text-muted">{detail}</p>
      </div>
    </div>
  );
}

/* GitHub-light-style token colours */
const K = "text-[#cf222e]"; // keyword
const P = "text-[#0550ae]"; // property / literal
const S = "text-[#0a3069]"; // string
const C = "text-[#6e7781]"; // comment
const F = "text-[#8250df]"; // identifier

function CodeCard() {
  const lines: React.ReactNode[] = [
    <span key="c" className={C}>{"// about.ts — the short version"}</span>,
    <>
      <span className={K}>const</span> <span className={F}>engineer</span> = {"{"}
    </>,
    <>
      {"  "}<span className={P}>name</span>: <span className={S}>&quot;Arman Singh&quot;</span>,
    </>,
    <>
      {"  "}<span className={P}>role</span>: <span className={S}>&quot;Software Engineer&quot;</span>,
    </>,
    <>
      {"  "}<span className={P}>focus</span>: [<span className={S}>&quot;Backend&quot;</span>, <span className={S}>&quot;Full-stack&quot;</span>],
    </>,
    <>
      {"  "}<span className={P}>stack</span>: [<span className={S}>&quot;Java&quot;</span>, <span className={S}>&quot;Spring&quot;</span>, <span className={S}>&quot;.NET&quot;</span>, <span className={S}>&quot;React&quot;</span>],
    </>,
    <>
      {"  "}<span className={P}>lastRole</span>: <span className={S}>&quot;Dayforce · SDE Intern&quot;</span>,
    </>,
    <>
      {"  "}<span className={P}>shipsTo</span>: <span className={S}>&quot;production&quot;</span>,
    </>,
    <>
      {"  "}<span className={P}>available</span>: <span className={P}>true</span>,
    </>,
    <>{"};"}</>,
    <>
      <span className={K}>export default</span> <span className={F}>engineer</span>;
      <span aria-hidden className="caret ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] bg-cobalt" />
    </>,
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-lift)]"
      role="img"
      aria-label="Code snippet describing Arman Singh: software engineer focused on backend and full-stack work with Java, Spring, .NET and React; currently available."
    >
      <div className="flex items-center border-b border-line bg-sand/60 px-4">
        <div className="flex self-stretch">
          <div className="flex items-center gap-1.5 py-3 pr-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex font-mono text-[11px]">
            <span className="flex items-center border-x border-line bg-paper px-3 text-ink">
              about.ts
            </span>
            <span className="hidden items-center px-3 text-faint sm:flex">projects.json</span>
          </div>
        </div>
      </div>
      <pre className="overflow-x-auto px-0 pb-8 pt-4 font-mono text-[12.5px] leading-[1.75] sm:text-[13px]">
        <code>
          {lines.map((l, i) => (
            <div key={i} className="flex">
              <span className="w-10 shrink-0 select-none pr-3 text-right text-faint/70">
                {i + 1}
              </span>
              <span className="whitespace-pre pr-4 text-ink-soft">{l}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
