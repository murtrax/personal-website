import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import type {
  ActionLink,
  JobHistory,
  FeaturedProject,
  ContactInfo,
  TerminalCommand,
  SkillsData,
} from "@/utils/types";

export const HEADER_FEATURE_TEXT = "hassaan.ahmed";

export const NAV_ITEMS: Array<{ label: string; href: string }> = [
  {
    label: "work",
    href: "#work",
  },
  {
    label: "projects",
    href: "#featured",
  },
  {
    label: "skills",
    href: "#skills",
  },
  {
    label: "contact",
    href: "#contact",
  },
];

export const TITLE: string = "SENIOR FULL STACK ENGINEER";

export const DEV_NAME: string = "Hassaan Ahmed";

export const DESCRIPTION: string =
  "7+ years building production systems at startup scale. I architect multi-agent AI workflows, DeFi infrastructure, and full-stack TypeScript platforms — and own them end-to-end.";

export const INTRO_LINKS: ActionLink[] = [
  {
    label: "Download resume",
    href: "/Hassaan_Ahmed_Full_Stack_Engineer.pdf",
    download: true,
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
      "Architected K3-Orchestrator: a multi-agent AI workflow platform competing with n8n/Zapier, built with LangGraph, MCP integrations, and a React Flow visual canvas.",
      "Built backend powering thousands of concurrent AI workflows — event-driven, Redis state management, horizontally scaled on GCP Cloud Run.",
      "30+ type-safe workflow functions with full TypeScript inference; natural-language to workflow generation via LLM.",
      // "Built backend infrastructure powering thousands of concurrent AI workflows with event-driven execution, Redis-based state management, and fault-tolerant orchestration across horizontally scaled services.",
      // "Deployed a decentralised execution layer operated by independent nodes, providing secure task isolation, peer-to-peer communication, automatic HTTPS tunneling, and integrated monitoring and alerting via Prometheus and Grafana.",
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
      "Decomposed a tangled monolith into a fault-tolerant, event-driven microservice architecture.",
      "Led 5-engineer team, accelerated feature delivery by 40% through improved sprint planning and technical specs.",
      "Optimized full-stack performance 50%+ (LCP, FCP, TTI) via code splitting, lazy loading, API optimization.",
      // "Refactored NestJS backend with stricter TypeScript practices, enhanced error handling, and type-safe patterns, reducing production error rates by 30% and improving code maintainability",
      // "Migrated multiple frontend applications to monorepo architecture, establishing shared component libraries and build pipelines that boosted development velocity and code consistency across products.",
      // "Promoted to Team Lead for 5-engineer team, accelerating feature delivery by 40% through improved sprint planning, code review processes, and clear technical specifications from business requirements.",
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
      "Built SEC-compliant real estate tokenization platform — $10M+ in tokenized properties, full lifecycle management",
      "Replaced Magic.link with AWS HSM-backed EVM wallet, cutting auth costs by 50%; enabled white-label wallet-as-a-service",
    ],
    link: "https://akru.com",
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "K3-Orchestrator",
    description:
      "Multi-agent orchestration platform powering thousands of concurrent AI workflows.",
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
      "RAG",
      "MCP",
      "Kafka",
      "Docker",
    ],
  },
  {
    title: "Team Finance",
    description:
      "Multi-chain DeFi platform for end to end token management at $3B+ TVL.",
    imageUrl: "/tf-icon.svg",
    link: "https://app.team.finance",
    skills: [
      "NestJS",
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Microservices",
      "Pub/Sub",
      "GraphQL",
      "Redux",
    ],
  },
  {
    title: "AKRU",
    description:
      "SEC-compliant real estate tokenization platform — $10M+ in tokenized properties, full lifecycle management.",
    // imageUrl: "/akru-logo.jpeg",
    link: "https://akru.com",
    skills: [
      "React",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Stripe",
      "Socket.io",
    ],
  },
];

export const SKILLS_DATA: SkillsData[] = [
  {
    title: "LANGUAGES",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    title: "FRONTEND",
    skills: [
      "React",
      "NextJS",
      "TailwindCSS",
      "React Flow",
      "TanStack",
      "HTML/CSS",
      "Redux",
      "React Query",
    ],
  },
  {
    title: "BACKEND",
    skills: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Distributed Systems",
      "Microservices",
      "Kafka",
      "Event-Driven Architecture",
      "Websockets",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "LangGraph",
      "LangChain",
      "MCP",
      "RAG",
      "OpenAI API",
      "Anthropic API",
      "VertexAI",
      "Vector Databases",
      "Embeddings",
      "Fine Tuning",
    ],
  },
  {
    title: "DEVOPS",
    skills: [
      "GCP",
      "AWS",
      "Docker",
      "Kubernetes",
      "CloudFare",
      "CI/CD",
      "Prometheus",
      "Grafana",
    ],
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    title: "hassaan.ahmed.work@gmail.com",
    link: "mailto:hassaan.ahmed.work@gmail.com",
    icon: MdEmail,
    external: false,
  },
  {
    title: "github.com/murtrax",
    link: "https://github.com/murtrax",
    icon: FaGithub,
    external: true,
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/hassaan-ahmed-293ba818a",
    icon: FaLinkedin,
    external: true,
  },
];

export const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    command: "whoami",
    output: "Hassaan Ahmed - Senior Full Stack Engineer, 7+ yrs exp",
  },
  {
    command: "cat stack.txt",
    output:
      "TypeScript . LangGraph . NextJS . NestJS . React . Node.js . PostgreSQL ....",
  },
  {
    command: "cat status.txt",
    output: (
      <p>
        open to senior / lead roles .{" "}
        <span className="text-green-500">Europe-focused</span>
      </p>
    ),
  },
];
