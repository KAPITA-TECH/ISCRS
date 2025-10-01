"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { name: "About", href: "/about" },
  { name: "Program", href: "#program" },
  { name: "Speakers", href: "#speakers" },
  { name: "Registration", href: "#registration" },
  { name: "Sponsorship", href: "#sponsorship" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAboutPage = pathname === "/about";
  const headerBg =
    isAboutPage || isScrolled ? "bg-white shadow-lg" : "backdrop-blur-lg";

  const NavLink = ({
    link,
    isMobile = false,
  }: {
    link: (typeof navigationLinks)[0];
    isMobile?: boolean;
  }) => {
    const baseClasses =
      "text-[#3d657a] hover:text-white font-medium transition-colors duration-200";
    const desktopClasses =
      "whitespace-nowrap py-2 px-4 rounded-md hover:bg-[#94563b]";
    const mobileClasses = "block px-3 py-2 hover:text-[#37718a]";
    const classes = isMobile
      ? `${baseClasses} ${mobileClasses}`
      : `${baseClasses} ${desktopClasses}`;

    const Component = link.href.startsWith("#") ? "a" : Link;
    const props = link.href.startsWith("#")
      ? { href: link.href }
      : { href: link.href };
    const onClick = isMobile ? () => setIsMenuOpen(false) : undefined;

    return (
      <Component {...props} className={classes} onClick={onClick}>
        {link.name}
      </Component>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1 lg:py-1.5">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center ml-4 lg:ml-8 xl:ml-12"
          >
            <Image
              src="/images/ISCRS_Logo_page-0001-removebg-preview.png"
              alt="ISCRS Logo"
              width={320}
              height={160}
              className="h-16 lg:h-18 xl:h-20 w-auto transition-all duration-300 hover:scale-105"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-8">
              {navigationLinks.map((link) => (
                <NavLink key={link.name} link={link} />
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center">
            <button className="bg-[#38738c] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-[#2d5a6b] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
              Register
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#3d657a] hover:text-[#37718a] focus:outline-none focus:ring-2 focus:ring-[#38738c] rounded-md p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
              {navigationLinks.map((link) => (
                <NavLink key={link.name} link={link} isMobile />
              ))}
              <button className="w-full mt-4 bg-[#38738c] text-white px-6 py-2 rounded-md hover:bg-[#37718a] transition-colors duration-200 font-medium">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
