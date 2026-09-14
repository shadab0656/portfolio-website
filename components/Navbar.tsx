"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          to="home"
          smooth
          duration={400}
          className="cursor-pointer font-mono text-sm text-teal"
        >
          shadab<span className="text-paper">.dev</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={400}
                offset={-80}
                spy
                activeClass="text-amber"
                className="cursor-pointer text-sm text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/Shadab_Hussain_Frontend_Resume.pdf"
          className="hidden rounded-md border border-line px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-teal hover:text-teal md:inline-block"
        >
          Resume
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-paper md:hidden"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/60 bg-ink px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={400}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-base text-muted transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Shadab_Hussain_Frontend_Resume.pdf"
                className="inline-block rounded-md border border-line px-4 py-2 text-sm font-medium text-paper hover:border-teal hover:text-teal"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
