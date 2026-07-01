import type { ActionLink } from "@/utils/types";

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
