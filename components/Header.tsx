"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/constants";
import { fireCallClick } from "@/lib/gtm";
import CTAButton from "./CTAButton";

type NavLink = { label: string; href: string };
type NavDropdown = { label: string; items: { href: string; label: string }[] };
type NavEntry = NavLink | NavDropdown;

const navGroups: NavEntry[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    items: SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  },
  {
    label: "Locations",
    items: LOCATIONS.map((l) => ({ href: `/locations/${l.slug}`, label: l.name })),
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" id="site-header">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16" aria-label="Main navigation">
        <Link href="/" className="font-bold text-navy text-lg leading-tight">
          <span className="sr-only">Richards Rooter and Plumbing — home</span>
          <span aria-hidden="true">Richards Rooter<br /><span className="text-orange">&amp; Plumbing</span></span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navGroups.map((item) => (
            <li key={item.label} className="relative">
              {"href" in item ? (
                <Link
                  href={item.href}
                  className="flex items-center text-navy font-medium hover:text-orange transition-colors min-h-[44px] px-2"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    className="flex items-center gap-1 text-navy font-medium hover:text-orange transition-colors min-h-[44px] px-2"
                    aria-haspopup="true"
                    aria-expanded={openGroup === item.label}
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                    onBlur={() => setTimeout(() => setOpenGroup(null), 150)}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" fill="currentColor">
                      <path d="M6 8L1 3h10z" />
                    </svg>
                  </button>
                  {openGroup === item.label && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg rounded border border-gray-100 py-2 min-w-[200px] z-50" role="list">
                      {item.items.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-navy hover:bg-light-gray hover:text-orange transition-colors"
                            onClick={() => setOpenGroup(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CTAButton variant="primary" sourcePage="header" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-navy"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto" role="dialog" aria-label="Mobile navigation">
          <div className="px-4 py-6 space-y-4">
            {navGroups.map((item) => (
              <div key={item.label}>
                {"href" in item ? (
                  <Link
                    href={item.href}
                    className="block py-2 font-bold text-navy hover:text-orange transition-colors min-h-[44px] flex items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <p className="font-bold text-navy mb-2">{item.label}</p>
                    <ul className="space-y-1" role="list">
                      {item.items.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-navy hover:text-orange transition-colors min-h-[44px] flex items-center"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
            <CTAButton variant="primary" sourcePage="header" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
