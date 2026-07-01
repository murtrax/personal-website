import Link from "next/link";
import { NAV_ITEMS } from "@/utls/constants";

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-5">
      <span className="text-electric-blue font-medium text-xl">
        hassaan.ahmed
      </span>
      <div className="flex gap-5 text-gray-300">
        {NAV_ITEMS.map(({ label, href }) => {
          return (
            <Link
              key={label}
              href={href}
              className="hover:text-electric-blue transition-colors"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
