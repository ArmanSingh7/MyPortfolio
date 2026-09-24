# Arman Singh — Portfolio

Personal portfolio site. Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4.
Fully static — no database, no API routes, no runtime dependencies.

## Design

Light, professional theme: warm off-white canvas, near-black ink, a single cobalt
accent. Space Grotesk for headings, Inter for body, JetBrains Mono for labels — all
self-hosted via `@fontsource` (no Google Fonts request).

Components were assembled from patterns in well-regarded developer portfolios on
Dribbble:

| Component | Where it lives |
| --- | --- |
| Availability pill + name with accent surname + mono role line | `Hero.tsx` |
| Code-editor card describing you as a TS object, with floating credential badges | `Hero.tsx` |
| Icon stat cards (CGPA, endpoints, defects, internships) | `Hero.tsx` |
| "Technologies I ship with" band | `TechStrip.tsx` |
| Quick-facts grid + expandable "What I do" accordion | `About.tsx`, `Capabilities.tsx` |
| Dated vertical timeline with role cards | `Experience.tsx` |
| Filter chips + featured project card + grid with collapsible engineering notes | `Projects.tsx` |
| Icon skill-group cards + education/certification cards | `Skills.tsx` |
| Contact channel list + message composer (opens the visitor's mail app) | `Contact.tsx` |

### Adding real project screenshots

Cards render an illustrated app window by default. To use a real screenshot, save it
to `public/projects/<name>.png` and add `image: "/projects/<name>.png"` to that project
in `content/site.ts`. 16:10 works best.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm start       # serve the production build
```

## Editing content

**Everything on the page comes from one file: `content/site.ts`.**
You do not need to touch a single component to update the site.

| What you want to change | Where |
| --- | --- |
| Name, role, tagline, headline, availability badge | `site` |
| Email, phone, LinkedIn, GitHub, resume path | `contact` |
| About paragraphs | `about` |
| The four stat tiles under the hero | `metrics` |
| Jobs and bullet points | `experience` |
| Project cards | `projects` |
| Skill groups | `skills` |
| Certifications / education | `certifications`, `education` |
| Nav links | `nav` |

### Adding a project

Append an object to the `projects` array:

```ts
{
  slug: "my-project",
  title: "My Project",
  blurb: "One or two sentences on what it does and who it's for.",
  year: "2026",
  featured: true,          // true = large card, false = "Also worth a look"
  stack: ["Spring Boot", "PostgreSQL"],
  highlights: [
    "Lead with the engineering decision, then the outcome.",
  ],
  links: [
    { label: "Live Demo", href: "https://...", primary: true },
    { label: "Source",    href: "https://github.com/..." },
  ],
}
```

A project with `links: []` automatically renders as
_"Private repository — walkthrough available on request"_.

### Replacing the resume

Drop the new PDF at `public/Arman_Singh_Resume.pdf` (keep the filename), or change
`contact.resume` in `content/site.ts` to match the new name.

## Before you deploy

1. **Set your real domain.** Change `site.url` in `content/site.ts`. It drives the
   canonical URL, `sitemap.xml`, `robots.txt` and the Open Graph tags. Leaving the
   placeholder in means Google indexes the wrong canonical.
2. Confirm the resume PDF in `public/` is the version you want recruiters to read.

## Deploying to Vercel

```bash
git init
git add .
git commit -m "Portfolio site"
git remote add origin https://github.com/ArmanSingh7/portfolio.git
git push -u origin main
```

Then at [vercel.com/new](https://vercel.com/new): import the repo → Deploy.
Vercel detects Next.js automatically; no configuration or environment variables needed.
Every push to `main` redeploys.

To use a custom domain, add it under **Project → Settings → Domains**, then update
`site.url` and redeploy.

### Deploying somewhere else

The site is fully static, so `next build` output also works on Netlify, Render,
Cloudflare Pages or any Node host running `npm start`.

## Motion & accessibility

Motion is limited to short fade-ups, gently floating badges and count-up stats, all
disabled under `prefers-reduced-motion`. Skip-to-content link, one `h1`, ordered
headings, `aria-pressed` filter chips, `aria-expanded` accordion, labelled icon links
and visible focus rings throughout.

**Theme gotcha:** never name a Tailwind v4 colour token `base` — `--color-base`
generates a `text-base` colour utility that overrides the built-in `text-base`
font-size utility and silently recolours text.

## What's already handled

- **SEO** — per-page metadata, canonical URL, `sitemap.xml`, `robots.txt`
- **Structured data** — `Person` JSON-LD in `app/layout.tsx`, so Google can read
  your job title, skills, education and social profiles
- **Link previews** — `app/opengraph-image.tsx` generates the card shown when the
  URL is shared on LinkedIn, WhatsApp or Slack. `app/icon.tsx` generates the favicon.
- **Accessibility** — skip-to-content link, single `h1`, labelled icon links,
  visible focus rings, `prefers-reduced-motion` respected
- **Responsive** — verified at 390px and 1440px with no horizontal overflow
- **Print** — a `@media print` stylesheet drops the nav and expands link URLs

## Project structure

```
app/
  layout.tsx            metadata, fonts, JSON-LD, skip link
  page.tsx              composes the sections
  globals.css           Tailwind v4 theme tokens + base styles
  icon.tsx              generated favicon
  opengraph-image.tsx   generated social share card
  sitemap.ts robots.ts  SEO routes
components/             Nav, Hero, About, Experience, Projects, Skills, Contact, Footer
content/site.ts         ← all content lives here
public/                 resume PDF
```


