"use client";

import { useState } from "react";
import { Logo } from "./brand";

const LINKS = [
  { label: "About", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Help", href: "#help" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-6 lg:px-0">
        <Logo />

        <ul className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-base text-[#4F5665] transition-colors hover:text-[#F53838]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-7 lg:flex">
          <a href="#pricing" className="text-base font-medium text-[#0B132A] hover:text-[#F53838]">
            Sign In
          </a>
          <a
            href="#pricing"
            className="flex h-[45px] w-[150px] items-center justify-center rounded-full border-[1.5px] border-[#F53838] text-base font-medium text-[#F53838] transition-colors hover:bg-[#F53838] hover:text-white"
          >
            Sign Up
          </a>
        </div>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-6 bg-[#0B132A] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#0B132A] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#0B132A] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="mx-6 rounded-2xl border border-[#EEEFF2] bg-white p-6 shadow-card lg:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-[#4F5665]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href="#pricing" className="text-base font-medium text-[#0B132A]">
              Sign In
            </a>
            <a
              href="#pricing"
              className="flex h-[45px] flex-1 items-center justify-center rounded-full border-[1.5px] border-[#F53838] text-base font-medium text-[#F53838]"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
