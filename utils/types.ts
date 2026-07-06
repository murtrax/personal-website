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
