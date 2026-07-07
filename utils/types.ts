import type { IconType } from "react-icons";
import type { ReactNode } from "react";

export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface JobHistory {
  company: string;
  location: string;
  type: "On-site" | "Remote" | "Hybrid";
  title: string;
  startDate: string;
  endDate: string;
  details: string[];
  link: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  skills: string[];
}

export interface ContactInfo {
  title: string;
  link: string;
  icon: IconType;
  external: boolean;
}

export interface TerminalCommand {
  command: string;
  output: ReactNode;
}
