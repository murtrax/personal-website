import Link from "next/link";
import type { ActionLink } from "@/utils/types";

interface ActionLinksProps {
  links: ActionLink[];
}

const ActionLinks = ({ links }: ActionLinksProps) => {
  return (
    <nav
      className="flex gap-5 text-lg flex-col sm:flex-row"
      aria-label="Profile links"
    >
      {links.map(({ label, href, external }) => {
        return (
          <Link
            key={href}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className=" border-gray-500 border rounded-md px-2 py-1 hover:text-electric-blue transition-colors hover:bg-electric-blue/10"
          >
            <p className="font-bold text-base px-2 text-center sm:text-start">
              {label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default ActionLinks;
