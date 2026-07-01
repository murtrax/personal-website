import Link from "next/link";
import { NAV_ITEMS } from "@/utils/constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-white/10 bg-black px-8 py-5 font-mono">
      <span className="text-electric-blue font-medium text-xl">
        hassaan.ahmed
      </span>
      <nav className="flex gap-5 text-gray-400">
        {NAV_ITEMS.map(({ label, href }) => {
          return (
            <Link
              key={href}
              href={href}
              className="rounded-md px-2 py-1 hover:bg-electric-blue/10 hover:text-electric-blue transition-colors"
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
