"use client";

import { useEffect, useState } from "react";
import { contact, nav, site } from "@/content/site";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`no-print sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-canvas"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-white"
          >
            AS
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
            {site.name}
            <span className="text-cobalt">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const on = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={on ? "true" : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    on ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-cobalt transition-all duration-300 ${
                      on ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={contact.resume}
            download
            className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt sm:inline-flex"
          >
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-paper text-ink md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 bg-canvas px-5 pt-4 md:hidden"
        >
          <ul>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4 font-display text-2xl font-semibold text-ink"
                >
                  <span className="font-mono text-xs text-cobalt">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contact.resume}
            download
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 rounded-lg bg-ink py-3.5 text-sm font-semibold text-white"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
