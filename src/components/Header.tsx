"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import RegisterButton from "./RegisterButton";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationLink {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface NavLinkProps {
  link: NavigationLink;
  isMobile?: boolean;
  onClose?: () => void;
}

const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: "ISCRS",
    href: "#",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Historic brief", href: "/" },
      { name: "Committee", href: "/committee" },
      { name: "Activities", href: "/activities" },
      { name: "Membership", href: "/membership" },
      { name: "Journal", href: "/journal" },

      { name: "Attendee Registration", href: "/attendee-registration" },
    ],
  },
  {
    name: "MOCAT5",
    href: "#",
    dropdown: [
      { name: "Abstract", href: "/abstract" },
      { name: "Sponsorship", href: "/sponsorship" },
      { name: "Program", href: "/program" },

      { name: "Attendee Registration", href: "/attendee-registration" },
    ],
  },
  { name: "Speakers", href: "/speakers" },

  { name: "Contact", href: "/contact" },
] as const;

const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) callback();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") callback();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [callback]);
};

const Dropdown = ({
  items,
  isOpen,
  onClose,
}: {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  return (
    <div className="absolute top-full left-0 mt-1 glass-dropdown rounded-lg py-2 min-w-[150px] z-50">
      {items.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="block px-4 py-2 text-sm nav-link hover:bg-white/50"
          onClick={onClose}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

const NavLink = ({ link, isMobile = false, onClose }: NavLinkProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const classes = cn(
    "nav-link",
    isMobile ? "block px-3 py-2" : "whitespace-nowrap py-1 px-3 text-sm"
  );
  const closeDropdown = useCallback(() => setIsDropdownOpen(false), []);

  useOutsideClick(dropdownRef, closeDropdown);
  useEscapeKey(closeDropdown);

  const handleClick = () => isMobile && onClose?.();
  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (link.dropdown) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className={cn(classes, "flex items-center gap-1")}
          onClick={handleDropdownToggle}
          aria-expanded={isDropdownOpen}
        >
          {link.name}
          <svg
            className={cn(
              "w-4 h-4 transition-transform",
              isDropdownOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <Dropdown
          items={link.dropdown}
          isOpen={isDropdownOpen}
          onClose={closeDropdown}
        />
      </div>
    );
  }

  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={classes} onClick={handleClick}>
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href} className={classes} onClick={handleClick}>
      {link.name}
    </Link>
  );
};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className="h-6 w-6"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useOutsideClick(menuRef, closeMenu);
  useEscapeKey(closeMenu);

  return (
    <>
      <div className="fixed top-4 left-4 md:top-6 md:left-4 z-50">
        <Link href="/" aria-label="ISCRS Home">
          <Image
            src="/images/logo.svg"
            alt="ISCRS Logo"
            width={120}
            height={100}
            className="ml-2 md:ml-8 transition-transform hover:scale-105"
            priority
          />
        </Link>
      </div>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 md:top-6 z-40 glass-panel rounded-2xl w-[calc(100%-2rem)] max-w-4xl">
        <div className="px-4 py-2 md:px-6">
          <nav className="hidden md:flex items-center justify-center">
            <ul className="flex items-center gap-6">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink link={link} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-link focus:outline-none focus:ring-2 focus:ring-slate-500 rounded-md p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-full left-0 right-0 mt-2"
          >
            <div className="px-4 py-3 space-y-3 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-white">
              <ul className="space-y-1">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.name}>
                    <NavLink link={link} isMobile onClose={closeMenu} />
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-white/30">
                <RegisterButton isMobile onClick={closeMenu} />
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="hidden md:block fixed top-8 right-4 lg:right-12 z-50">
        <RegisterButton />
      </div>
    </>
  );
};

export default Header;
