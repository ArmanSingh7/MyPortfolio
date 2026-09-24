import { contact, nav, site } from "@/content/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold">
              {site.name}
              <span className="text-cobalt">.</span>
            </p>
            <p className="mt-1 text-sm text-white/60">{site.role} · {site.location}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
