"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./motion";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, SendIcon } from "./icons";

/**
 * Contact: channels on the left, a message composer on the right. The site is
 * static, so the form opens the visitor's mail client with everything prefilled
 * rather than posting to a server.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Opportunity for Arman Singh${company ? ` — ${company}` : ""}`;
    const body = `${message}\n\n— ${name}${company ? `, ${company}` : ""}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const channels = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, Icon: MailIcon, ext: false },
    { label: "Phone", value: contact.phone, href: contact.phoneHref, Icon: PhoneIcon, ext: false },
    { label: "LinkedIn", value: "linkedin.com/in/armansingh", href: contact.linkedin, Icon: LinkedinIcon, ext: true },
    { label: "GitHub", value: "github.com/ArmanSingh7", href: contact.github, Icon: GithubIcon, ext: true },
  ];

  const field =
    "w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-cobalt focus:bg-paper focus:outline-none";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="contact"
          index="05"
          eyebrow="Contact"
          title="Let's talk about your team's next hire."
          intro={`${site.availability}. I reply to every message within a day.`}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr] [&>*]:min-w-0">
          <Reveal>
            <ul className="space-y-3">
              {channels.map(({ label, value, href, Icon, ext }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(ext ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-all hover:border-ink hover:shadow-[var(--shadow-card)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand text-ink-soft transition-colors group-hover:bg-cobalt group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={contact.resume}
              download
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong p-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              <DownloadIcon className="h-4 w-4" />
              Download resume (PDF)
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl border border-line bg-paper p-6 shadow-[var(--shadow-card)] sm:p-8"
            >
              <p className="font-display text-xl font-semibold text-ink">Send a message</p>
              <p className="mt-1 text-sm text-muted">Opens in your email app, prefilled.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-ink-soft">Your name</span>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Jane Doe" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-ink-soft">Company</span>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} className={field} placeholder="Acme Corp" autoComplete="organization" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-semibold text-ink-soft">Message</span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${field} resize-none`}
                  placeholder="Tell me about the role and the team…"
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cobalt px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-deep sm:w-auto"
              >
                <SendIcon className="h-4 w-4" />
                Compose email
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
