// ---------------------------------------------------------------------------
// Single source of truth for every piece of content on the site.
// Edit this file to update the portfolio — no component changes needed.
// ---------------------------------------------------------------------------

export const site = {
  // Change this to your real domain once deployed (used for SEO + JSON-LD).
  url: "https://armansingh.dev",
  name: "Arman Singh",
  role: "Software Engineer",
  tagline: "Java · Spring Boot · .NET · React",
  headline:
    "I build production software that holds up under real users — enterprise payroll systems, full-stack platforms, and AI-assisted engineering tooling.",
  location: "Bangalore, India",
  availability: "Open to full-time Software Engineer roles",
} as const;

export const contact = {
  email: "777armansingh@gmail.com",
  phone: "+91 7381086147",
  phoneHref: "tel:+917381086147",
  linkedin: "https://linkedin.com/in/armansingh7",
  github: "https://github.com/ArmanSingh7",
  resume: "/Arman_Singh_Resume.pdf",
} as const;

export const about = [
  "I'm a Computer Science Engineering graduate (B.Tech, CGPA 9.04) who spent the last year writing code that real customers depend on. At Dayforce I worked inside an enterprise payroll platform serving Asia-Pacific clients — the kind of system where a bug means someone doesn't get paid correctly.",
  "That work spanned the full stack and the full lifecycle: root-cause analysis across a legacy .NET and Classic ASP codebase, SQL Server data investigation, and shipping through Agile sprints with QA and UAT verification. I also built AI-assisted internal tooling — an onboarding agent that turned tribal engineering knowledge into self-service troubleshooting, and a security remediation agent wired into Atlassian and GitHub MCP servers.",
  "Outside of work I build full-stack products end to end — designing the schema, writing the API, and shipping the frontend. I care about systems that are understandable six months later: normalized data models, clear authorization boundaries, and REST APIs that behave predictably.",
] as const;

export const metrics = [
  {
    num: 9.04,
    decimals: 2,
    suffix: "",
    label: "CGPA",
    detail: "B.Tech Computer Science",
  },
  {
    num: 68,
    decimals: 0,
    suffix: "+",
    label: "REST endpoints",
    detail: "Designed & tested in Spring Boot",
  },
  {
    num: 9,
    decimals: 0,
    suffix: "+",
    label: "Defects resolved",
    detail: "Root-caused on a live payroll platform",
  },
  {
    num: 2,
    decimals: 0,
    suffix: "",
    label: "Internships",
    detail: "Enterprise + agency",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Dayforce",
    role: "Software Developer Intern",
    period: "Feb 2026 — Jul 2026",
    location: "Bangalore, India",
    stack: [".NET", "Classic ASP", "SQL Server", "FoxPro", "Git", "Jira", "Confluence"],
    summary:
      "Enterprise payroll platform serving Asia-Pacific customers, across development, QA and UAT environments.",
    highlights: [
      "Investigated and resolved 9+ production defects on a large-scale payroll platform, performing root-cause analysis across legacy .NET, Classic ASP, FoxPro and SQL Server systems.",
      "Built the PeoplePay Onboarding AI Agent, converting internal engineering knowledge into guided self-service troubleshooting and documentation discovery — measurably reducing repetitive support escalations.",
      "Developed an AI-assisted security remediation agent integrating Atlassian and GitHub MCP servers to retrieve engineering context and generate CWE-mapped remediation guidance for identified vulnerabilities.",
      "Collaborated with distributed engineering teams across Asia-Pacific in an Agile SDLC — sprint planning, code review, QA/UAT verification, regression testing and release cycles.",
    ],
  },
  {
    company: "Bloom Agency",
    role: "Web Developer Intern",
    period: "Jul 2024 — Sep 2024",
    location: "Remote",
    stack: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    summary:
      "Client-facing web development, from requirements gathering through delivery.",
    highlights: [
      "Built and maintained responsive WordPress client websites using HTML, CSS, JavaScript and PHP-based themes.",
      "Implemented on-page SEO and performance optimizations that improved organic search visibility and page load times.",
      "Worked directly with clients to translate requirements into functional web experiences, coordinating deliverables against project deadlines.",
    ],
  },
];

/** Words that scroll past in the ticker under the hero. */
export const marqueeItems = [
  "Java",
  "Spring Boot",
  ".NET 8",
  "C#",
  "React",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Entity Framework",
  "JWT Auth",
  "Node.js",
  "AWS",
  "Agile SDLC",
  "Data Structures",
];

/** Faux shell transcript rendered in the hero panel. */
export const terminal = {
  prompt: "arman@portfolio",
  lines: [
    { cmd: "whoami", out: "software engineer · backend-leaning full-stack" },
    { cmd: "cat focus.txt", out: "Java / Spring Boot · C# / .NET · React" },
    { cmd: "git log --oneline -1", out: "feat: shipped payroll fix to production" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  /** Short category label shown above the title. */
  kind: string;
  blurb: string;
  year: string;
  featured: boolean;
  /** Two hex stops driving the card's accent gradient. */
  accent: [string, string];
  stack: string[];
  highlights: string[];
  /** Headline numbers rendered as a small stat row on the card. */
  stats?: { value: string; label: string }[];
  /** Filter categories for the project grid. */
  tags: string[];
  /** Optional real screenshot in /public, e.g. "/projects/clinicforge.webp". */
  image?: string;
  /** Several screenshots shown as switchable tabs on the card (overrides `image`). */
  gallery?: { label: string; src: string }[];
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "clinicforge",
    image: "/projects/clinicforge.webp",
    tags: ["Java", "React", "Full-stack"],
    title: "ClinicForge",
    kind: "Healthcare platform",
    accent: ["#0ea5e9", "#2451ff"],
    stats: [
      { value: "68+", label: "REST endpoints" },
      { value: "12", label: "DB entities" },
      { value: "3", label: "User roles" },
    ],
    blurb:
      "Full-stack clinic management platform covering appointment scheduling, prescriptions, medical records and real-time notifications across three user roles.",
    year: "2026",
    featured: true,
    stack: ["Spring Boot", "Java 17", "React", "MySQL", "JWT", "Spring Security"],
    highlights: [
      "Designed a normalized relational schema of 12 interconnected entities supporting multiple concurrent clinical workflows.",
      "Implemented JWT-based authentication with Spring Security, BCrypt password hashing and role-based authorization across Patient, Doctor and Admin roles.",
      "Developed and tested 68+ RESTful API endpoints in Spring Boot and integrated them with a React frontend.",
      "Built real-time notification flows for appointment status changes and prescription updates.",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://clinic-forge-doctor-appointment.vercel.app",
        primary: true,
      },
      {
        label: "Source",
        href: "https://github.com/ArmanSingh7/Clinic-Forge-Doctor-Appointment-App",
      },
    ],
  },
  {
    slug: "forgeleave",
    tags: [".NET", "React", "Full-stack"],
    title: "ForgeLeave",
    kind: "Enterprise HR system",
    accent: ["#a855f7", "#6d28d9"],
    stats: [
      { value: "4", label: "Architecture layers" },
      { value: ".NET 8", label: "Runtime" },
      { value: "2", label: "Domain entities" },
    ],
    blurb:
      "Employee leave management system built as a layered ASP.NET Core 8 Web API with a React admin dashboard for tracking headcount, leave balances and approval workflow.",
    year: "2026",
    featured: true,
    stack: [
      "C#",
      ".NET 8",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "MySQL",
      "React",
      "Vite",
      "Swagger",
    ],
    highlights: [
      "Architected the API in clean layers — Controllers → Services → Repositories → EF Core DbContext — with interface-based dependency injection, so business rules stay independent of both HTTP and persistence.",
      "Isolated the domain model from the API surface using dedicated request/response DTOs, preventing over-posting and keeping entity changes from breaking clients.",
      "Modelled the Employee → LeaveRequest one-to-many relationship in EF Core with Pomelo/MySQL, applying pending migrations automatically at startup for reproducible environments.",
      "Enforced approval business rules in the service layer (status transitions restricted to Approved/Rejected, employee existence validated before a request is created) with correct REST semantics — 201 Created, 204 No Content, 404 Not Found.",
      "Built a React + Vite admin dashboard consuming the API via Axios, with live workforce statistics, status badges and full CRUD for employees and leave requests.",
      "Documented the full API surface with Swagger/OpenAPI and configured a scoped CORS policy for the React client.",
    ],
    links: [],
  },
  {
    slug: "trading-platform",
    tags: ["Node.js", "React", "Full-stack"],
    title: "Trading Platform",
    kind: "Fintech · MERN",
    accent: ["#22c55e", "#0f766e"],
    stats: [
      { value: "MERN", label: "Stack" },
      { value: "AWS", label: "Deployed on" },
      { value: "Live", label: "Market data" },
    ],
    blurb:
      "Zerodha-style trading web application with authenticated portfolio management, live market data and cloud deployment.",
    year: "2025",
    featured: true,
    stack: ["React", "Node.js", "Express.js", "MongoDB", "AWS"],
    highlights: [
      "Built a full-stack trading platform with secure user authentication and role-based access control.",
      "Implemented CRUD workflows for trade execution and portfolio management backed by MongoDB.",
      "Integrated third-party market data APIs to deliver real-time price and portfolio updates.",
      "Deployed and configured the application on AWS for cloud-based execution.",
    ],
    links: [{ label: "Source", href: "https://github.com/ArmanSingh7/zerodhaclonee" }],
  },
  {
    slug: "credit-card-dashboard",
    gallery: [
      { label: "Transactions", src: "/projects/cc-transactions.webp" },
      { label: "Customers", src: "/projects/cc-customers.webp" },
    ],
    tags: ["Data"],
    title: "Credit Card Financial Dashboard",
    kind: "Business intelligence",
    accent: ["#f59e0b", "#ea580c"],
    blurb:
      "Two-page Power BI report analysing 57M in credit card revenue across 667K transactions — transaction performance on one page, customer demographics on the other.",
    year: "2025",
    featured: false,
    stack: ["Power BI", "DAX", "SQL", "Data Modelling"],
    highlights: [
      "Transaction report: KPIs for revenue, interest, transaction amount and count, plus quarterly revenue vs. volume and breakdowns by card tier, expenditure type, job and education.",
      "Customer report: income, satisfaction score and age KPIs with revenue split by gender, age group, state, salary group, marital status and dependents.",
      "Built DAX measures for the KPI cards and added slicers for quarter, gender, income band, card category and week start date.",
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/ArmanSingh7/Credit_Card_Financial_Dashboard",
      },
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["Java", "C#", "Python", "JavaScript", "SQL"] },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Hibernate / JPA",
      "REST APIs",
      ".NET",
      "ASP.NET",
      "Node.js",
      "Express.js",
    ],
  },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Responsive UI"] },
  { title: "Databases", items: ["MySQL", "SQL Server", "MongoDB"] },
  {
    title: "Cloud & Tools",
    items: ["AWS", "Git / GitHub", "Jira", "Confluence", "Power BI", "Katalon"],
  },
  {
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Agile SDLC",
    ],
  },
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    detail: "Valid through 2027",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Apna College",
    detail: "Java-based DSA training with extensive problem-solving practice",
  },
] as const;

export const education = {
  institution: "Siksha 'O' Anusandhan University (ITER)",
  degree: "Bachelor of Technology (B.Tech), Computer Science Engineering",
  period: "Aug 2022 — Jul 2026",
  detail: "CGPA: 9.04 / 10",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

/** Expandable capability list in the About section. */
export const capabilities = [
  {
    title: "Backend engineering",
    body: "REST APIs in Spring Boot and ASP.NET Core with layered architecture, DTO boundaries and business rules that live in the service layer — not the controller.",
    stack: ["Java", "Spring Boot", "C#", ".NET 8", "EF Core", "Hibernate"],
  },
  {
    title: "Full-stack product development",
    body: "Owning a feature end to end: normalized schema, authenticated API, and a React frontend that consumes it. ClinicForge and ForgeLeave were built this way.",
    stack: ["React", "MySQL", "MongoDB", "Node.js", "JWT"],
  },
  {
    title: "Production support & debugging",
    body: "Root-cause analysis on a live enterprise payroll platform — tracing defects across .NET, Classic ASP, FoxPro and SQL Server through QA and UAT to release.",
    stack: ["SQL Server", "Classic ASP", "Git", "Jira"],
  },
  {
    title: "AI-assisted engineering tooling",
    body: "Internal agents that turn engineering knowledge into self-service help, including a security remediation agent wired to Atlassian and GitHub MCP servers.",
    stack: ["MCP", "Atlassian", "GitHub", "OCI AI"],
  },
];

/** Short labels floated around the hero code card. */
export const heroBadges = [
  { label: "Dayforce", detail: "SDE Intern · 2026" },
  { label: "CGPA 9.04", detail: "B.Tech CSE" },
  { label: "Oracle Certified", detail: "OCI AI Foundations" },
];
