"use client";

import { useState } from "react";
import { capabilities } from "@/content/site";
import { BugIcon, LayersIcon, ServerIcon, SparkIcon } from "./icons";

const ICONS = [ServerIcon, LayersIcon, BugIcon, SparkIcon];

/** Accordion list of what I do — one open at a time. */
export function Capabilities() {
  const [open, setOpen] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[var(--shadow-card)]">
      <p className="border-b border-line px-6 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
        What I do
      </p>
      <ul>
        {capabilities.map((c, i) => {
          const Icon = ICONS[i % ICONS.length];
          const isOpen = open === i;
          const panelId = `cap-panel-${i}`;
          return (
            <li key={c.title} className="border-b border-line last:border-b-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center gap-4 px-6 py-5 text-left"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    isOpen ? "bg-cobalt text-white" : "bg-sand text-ink-soft group-hover:bg-cobalt-soft group-hover:text-cobalt"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1 font-display text-lg font-semibold tracking-tight text-ink">
                  {c.title}
                </span>
                <span
                  aria-hidden
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-line text-lg leading-none text-muted transition-transform duration-300 ${
                    isOpen ? "rotate-45 border-cobalt text-cobalt" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div id={panelId} className="acc" data-open={isOpen}>
                <div>
                  <div className="px-6 pb-6 pl-[5.5rem]">
                    <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {c.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-md bg-sand px-2 py-1 font-mono text-[11px] text-ink-soft"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
