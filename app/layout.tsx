import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { site, contact, skills } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Arman Singh — Software Engineer specialising in Java/Spring Boot and .NET. Enterprise payroll engineering at Dayforce, full-stack platforms, and AI-assisted developer tooling.",
  keywords: [
    "Arman Singh",
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    ".NET Developer",
    "Full Stack Developer",
    "React",
    "Backend Engineer",
    "Bangalore",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.headline,
    url: site.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.headline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  description: site.headline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Siksha 'O' Anusandhan University (ITER)",
  },
  knowsAbout: skills.flatMap((group) => group.items),
  sameAs: [contact.github, contact.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // Static, author-controlled data — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="no-print sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
