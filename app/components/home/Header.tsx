"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import Form from 'next/form'
import { performSearch } from '@/lib/search'; // Import line



// ── Types ─────────────────────────────────────────────────────────────────────
interface SubItem {
  label: string;
  href: string;
  icon: string;
  desc: string;
}

interface NavItem {
  label: string;
  href: string;
  submenu?: SubItem[];
}

// ── Nav data ──────────────────────────────────────────────────────────────────
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      {
        label: "Our Mission",
        href: "/why-choose-us/mission",
        icon: "🎯",
        desc: "Driven by compassion and excellence",
      },
      {
        label: "Expert Team",
        href: "/why-choose-us/team",
        icon: "👨‍⚕️",
        desc: "Board-certified specialists in every field",
      },
      {
        label: "Advanced Technology",
        href: "/why-choose-us/technology",
        icon: "🔬",
        desc: "State-of-the-art diagnostic equipment",
      },
      {
        label: "Patient Success",
        href: "/why-choose-us/success",
        icon: "⭐",
        desc: "Thousands of lives transformed",
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Facility", href: "/facility" },
  { label: "Virtual Tour", href: "/virtual-tour-stats" },
];

// ── Desktop dropdown item ─────────────────────────────────────────────────────
function DesktopDropdown({
  item,
  scrolled,
  pathname,
}: {
  item: NavItem;
  scrolled: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive =
    pathname === item.href ||
    item.submenu?.some((s) => pathname === s.href);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive
          ? "text-[#4ECDC4]"
          : scrolled
            ? "text-gray-800 hover:text-[#4ECDC4]"
            : "text-white/90 hover:text-[#4ECDC4]"
          }`}
      >
        {item.label}
        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 transition-all duration-200 ${open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {/* Arrow */}
        <div className="mx-auto mb-[-1px] h-2.5 w-5 overflow-hidden">
          <div className="mx-auto h-3 w-3 rotate-45 rounded-sm bg-white shadow-md" />
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
          <div className="p-2">
            {item.submenu?.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setOpen(false)}
                className={`group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#4ECDC4]/8 ${pathname === sub.href ? "bg-[#4ECDC4]/10" : ""
                  }`}
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4ECDC4]/20 to-[#45B7B8]/20 text-lg">
                  {sub.icon}
                </span>
                <div>
                  <p
                    className={`text-sm font-semibold ${pathname === sub.href
                      ? "text-[#4ECDC4]"
                      : "text-gray-800 group-hover:text-[#4ECDC4]"
                      }`}
                  >
                    {sub.label}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">{sub.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer link */}
          <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-3">
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-xs font-semibold text-[#4ECDC4] hover:text-[#45B7B8]"
            >
              View all — About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mobile accordion item ─────────────────────────────────────────────────────
function MobileAccordion({
  item,
  index,
  mobileOpen,
  pathname,
  onClose,
}: {
  item: NavItem;
  index: number;
  mobileOpen: boolean;
  pathname: string;
  onClose: () => void;
}) {
  const [subOpen, setSubOpen] = useState(false);
  const isActive =
    pathname === item.href ||
    item.submenu?.some((s) => pathname === s.href);

  return (
    <div
      style={{ transitionDelay: mobileOpen ? `${index * 40}ms` : "0ms" }}
      className={`transition-all duration-200 ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        }`}
    >
      {/* Main row */}
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onClose}
          className={`flex flex-1 items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${isActive
            ? "bg-[#4ECDC4]/10 text-[#4ECDC4]"
            : "text-gray-700 hover:bg-gray-50 hover:text-[#4ECDC4]"
            }`}
        >
          {isActive && (
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ECDC4]" />
          )}
          {item.label}
        </Link>

        {/* Chevron toggle */}
        <button
          aria-label={subOpen ? "Collapse submenu" : "Expand submenu"}
          onClick={() => setSubOpen((v) => !v)}
          className="ml-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-[#4ECDC4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Sub-items accordion */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${subOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#4ECDC4]/20 pl-4 pb-1">
          {item.submenu?.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${pathname === sub.href
                ? "bg-[#4ECDC4]/10 text-[#4ECDC4] font-medium"
                : "text-gray-600 hover:bg-gray-50 hover:text-[#4ECDC4]"
                }`}
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm">
                {sub.icon}
              </span>
              <div>
                <p className="font-medium leading-tight">{sub.label}</p>
                <p className="text-xs text-gray-400">{sub.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);


  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [])


  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrolled = mounted && isScrolled;
  const mobileOpen = mounted && menuOpen;

  return (
    <>
      <header
        ref={menuRef}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || mobileOpen
          ? "bg-white shadow-md border-gray-200"
          : "bg-white/10 backdrop-blur-sm border-white/10"
          }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#4ECDC4] to-[#45B7B8]">
                <span className="text-white">
                  <i className="ri-heart-pulse-line text-2xl text-white"></i>
                </span>
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${scrolled || mobileOpen ? "text-black" : "text-white"
                  }`}
              >
                MedCare
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.submenu ? (
                <DesktopDropdown
                  key={item.href}
                  item={item}
                  scrolled={scrolled}
                  pathname={pathname}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${pathname === item.href
                    ? "text-[#4ECDC4]"
                    : scrolled
                      ? "text-gray-800 hover:text-[#4ECDC4]"
                      : "text-white/90 hover:text-[#4ECDC4]"
                    }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions: Search + User + CTA */}
          <div className="flex items-center gap-4 lg:gap-6">

            {/* Search Group */}
            <div className="flex items-center relative">
              {/* The Search Form - Slides out to the left */}
              <div className={`transition-all duration-500 ease-in-out flex items-center ${isOpen ? 'max-w-[300px] opacity-100 mr-2' : 'max-w-0 opacity-0'
                } overflow-hidden`}>
                <Form action="/search" className="relative flex items-center">
                  <input
                    name="query"
                    placeholder="Search..."
                    className="bg-gray-50 border border-gray-200 px-4 py-2 text-sm text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/50 w-48 lg:w-64"
                    autoFocus={isOpen}
                  />
                </Form>
              </div>

              {/* Search Toggle Button */}
              <button
                onClick={() => setIsOpen(true)}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${scrolled || mobileOpen ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  }`}
              >
                <i className="ri-search-line text-xl"></i>
              </button>
                {isOpen && (
                <div className="fixed h-screen inset-0 z-[100] flex items-start justify-center pt-32 px-4">
                  
                  <div 
                    className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity cursor-pointer"
                    onClick={() => setIsOpen(false)} // This closes the popup
                  />

                  {/* 2. THE SEARCH BOX */}
                  <div 
                    className="relative w-full max-w-2xl transform transition-all"
                    onClick={(e) => e.stopPropagation()} // This prevents the popup from closing when you click INSIDE the white box
                  >
                    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
                      <Form action="/search" className="relative flex items-center p-4">
                        <i className="ri-search-line absolute left-8 text-xl text-gray-400"></i>
                        <input
                          name="query"
                          autoFocus
                          placeholder="Search for doctors, services, or news..."
                          className="w-full bg-transparent py-4 pl-12 pr-12 text-lg text-gray-900 focus:outline-none"
                        />
                        <button 
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="absolute right-8 rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 hover:bg-gray-200"
                        >
                          ESC
                        </button>
                      </Form>

                      {/* Quick Links Area */}
                      <div className="border-t border-gray-100 bg-gray-50/50 p-6">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Popular Searches</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {['Cardiology', 'Emergency', 'Our Team', 'Appointments'].map((tag) => (
                            <button 
                              key={tag}
                              onClick={() => {
                                // Handle quick search here if needed
                                setIsOpen(false);
                              }}
                              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-[#4ECDC4] hover:text-[#4ECDC4]"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* User Status Section */}
            <div className="relative group">
              {isLoggedIn ? (
                /* LOGGED IN STATE */
                <div className="flex items-center gap-2">
                  <div className="relative cursor-pointer">
                    {/* User Profile Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                      scrolled || menuOpen ? "bg-gray-100 text-gray-600 border-gray-200" : "bg-white/10 text-white border-gray-200"
                    } border overflow-hidden`}>
                     <i className="ri-user-fill text-xl"></i>
                    </div>

                    {/* Status Indicator Badge (Green because logged in) */}
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 ${
                        scrolled || menuOpen ? 'border-white' : 'border-gray-200'
                      } bg-green-500`}></span>
                    </span>
                  </div>

                  {/* Dropdown on Hover/Click to Logout */}
                  <button 
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn");
                      location.reload();
                    }} 
                    className="cursor-pointer hidden group-hover:flex items-center gap-2 absolute top-[100%] right-0 bg-white/90 backdrop-blur-md shadow-2xl rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 border border-slate-100 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ease-in-out whitespace-nowrap"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Sign Out
                  </button>
                </div>
              ) : (
                /* LOGGED OUT STATE */
                <Link href="/login">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${ scrolled || menuOpen ? "bg-gray-100 text-gray-400 border-gray-200" : "bg-white/10 text-white/50 border-white/10"
                    } border`}>
                      <i className="ri-user-line text-xl"></i>
                    </div>
                    
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 ${
                        scrolled || menuOpen ? 'border-white' : 'border-[#1a1a1a]'
                      } bg-red-500`}></span>
                    </span>
                  </div>
                </Link>
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="rounded-full bg-[#4ECDC4] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#4ECDC4]/20 transition-all duration-300 hover:bg-[#45B7B8] hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`cursor-pointer relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors duration-200 md:hidden ${scrolled || mobileOpen ? "hover:bg-gray-100" : "hover:bg-white/10"
              }`}
          >
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-gray-800" : "bg-white"} ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-gray-800" : "bg-white"} ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled || mobileOpen ? "bg-gray-800" : "bg-white"} ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col border-t border-gray-100 bg-white px-4 pb-6 pt-4 gap-1">
            {navItems.map((item, i) =>
              item.submenu ? (
                <MobileAccordion
                  key={item.href}
                  item={item}
                  index={i}
                  mobileOpen={mobileOpen}
                  pathname={pathname}
                  onClose={() => setMenuOpen(false)}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${pathname === item.href
                    ? "bg-[#4ECDC4]/10 text-[#4ECDC4]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#4ECDC4]"
                    } ${mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                >
                  {pathname === item.href && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4ECDC4]" />
                  )}
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile CTA */}
            <div className="mt-4 px-4">
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-full bg-gradient-to-r from-[#4ECDC4] to-[#45B7B8] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Book Appointment
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}