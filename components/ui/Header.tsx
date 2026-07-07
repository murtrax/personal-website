"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, HEADER_FEATURE_TEXT } from "@/utils/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2 border-white/10 bg-black px-8 py-5 font-mono">
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium text-electric-blue">
          {HEADER_FEATURE_TEXT}
        </span>

        <button
          type="button"
          className="text-gray-400 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <nav className="hidden gap-5 text-gray-400 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="mt-5 flex flex-col gap-3 text-gray-400 md:hidden">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-1 hover:bg-electric-blue/10 hover:text-electric-blue"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
