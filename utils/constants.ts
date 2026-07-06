import type { ActionLink, JobHistory, FeaturedProject } from "@/utils/types";

export const HEADER_FEATURE_TEXT = "hassaan.ahmed";

export const NAV_ITEMS: Array<{ label: string; href: string }> = [
  {
    label: "work",
    href: "/",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "skills",
    href: "/skills",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

export const TITLE: string = "SENIOR FULL STACK ENGINEER";

export const DEV_NAME: string = "Hassaan Ahmed";

export const DESCRIPTION: string =
  "7+ years building production systems at startup scale. I architect multi-agent AI workflows, DeFi infrastructure, and full-stack TypeScript platforms — and own them end-to-end.";

export const INTRO_LINKS: ActionLink[] = [
  {
    label: "View resume ↓",
    href: "/resume.pdf",
  },
  {
    label: "github.com/murtrax",
    href: "https://github.com/murtrax",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hassaan-ahmed-293ba818a",
    external: true,
  },
];

export const TAG_LINE = "open to opportunities . relocating to Europe";

export const JOB_HISTORY: JobHistory[] = [
  {
    company: "K3-Labs",
    location: "New York",
    type: "Remote",
    title: "Senior Full Stack Engineer . Founding Engineer",
    startDate: "March  2024",
    endDate: "Present",
    details: [
      "Joined as a founding engineer and engineered the architecture and MVP before the company's initial funding round.",
      "Architected a large-scale multi-agent AI system enabling natural-language creation and deployment of complex automation workflows with deterministic structure, dependency, and intent resolution.",
      "Built AI workflow automation system with 30+ type-safe functions and full TypeScript inference, enabling LangGraph agents, MCP server integrations, and multi-agent orchestration.",
      "Built backend infrastructure powering thousands of concurrent AI workflows with event-driven execution, Redis-based state management, and fault-tolerant orchestration across horizontally scaled services.",
      "Deployed a decentralised execution layer operated by independent nodes, providing secure task isolation, peer-to-peer communication, automatic HTTPS tunneling, and integrated monitoring and alerting via Prometheus and Grafana.",
    ],
    link: "https://app.k3-labs.com",
  },
  {
    company: "Team Finance",
    location: "Canada",
    type: "Remote",
    title: "Full Stack Engineer → Team Lead",
    startDate: "June 2022",
    endDate: "March  2024",
    details: [
      "Architected NestJS-based blockchain indexers, improving query performance by 90% and eliminating third-party data provider dependencies to power real-time DeFi dashboards.",
      "Optimized NestJS full-stack web application performance by 50%+, reducing LCP , FCP , and TTI through code splitting, lazy loading, and API optimization strategies.",
      "Led product transition from pay-per-use to multi-tier subscription model, implementing tiered pricing logic, payment gateway integrations, and usage tracking systems.",
      "Refactored NestJS backend with stricter TypeScript practices, enhanced error handling, and type-safe patterns, reducing production error rates by 30% and improving code maintainability",
      "Migrated multiple frontend applications to monorepo architecture, establishing shared component libraries and build pipelines that boosted development velocity and code consistency across products.",
      "Promoted to Team Lead for 5-engineer team, accelerating feature delivery by 40% through improved sprint planning, code review processes, and clear technical specifications from business requirements.",
    ],
    link: "https://team.finance",
  },
  {
    company: "AKRU",
    location: "Islamabad, Pakistan",
    type: "On-site",
    title: "Full Stack Engineer",
    startDate: "July 2019",
    endDate: "June  2022",
    details: [
      "Created a full-stack real estate tokenization platform enabling SEC-compliant fractional ownership, primary and secondary sales/transfers, and end-to-end property lifecycle management for $10M+ in tokenized properties.",
      "Built AWS HSM-backed EVM wallet solution replacing external providers like Magic.link, cutting authentication costs by 50% and enabling white-label wallet-as-a-service offerings to clients.",
      "Built scalable backend systems and blockchain indexing pipelines delivering real-time dashboards, reducing API latency from seconds to milliseconds through query optimization and caching strategies.",
    ],
    link: "https://akru.com",
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "K3-Orchestrator",
    description:
      "a large-scale multi-agent AI system enabling natural-language creation and deployment of complex automation workflows with deterministic structure, dependency, and intent resolution",
    imageUrl: "/k3-logo.svg",
    link: "https://app.k3-labs.com",
    skills: [
      "LangGraph",
      "TypeScript",
      "Node.js",
      "React",
      "Redis",
      "GCP",
      "VertexAI",
    ],
  },
  {
    title: "Team Finance",
    description:
      "a DeFi analytics platform providing real-time dashboards, portfolio tracking, and insights for decentralized finance users",
    imageUrl: "/tf-icon.svg",
    link: "https://app.team.finance",
    skills: [
      "NestJS",
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Microservices",
    ],
  },
  {
    title: "AKRU",
    description:
      "a full-stack real estate tokenization platform enabling SEC-compliant fractional ownership, primary and secondary sales/transfers, and end-to-end property lifecycle management for tokenized properties",
    // imageUrl: "/akru-logo.jpeg",
    link: "https://akru.com",
    skills: ["React", "NestJS", "TypeScript", "PostgreSQL", "Redis", "AWS"],
  },
];
