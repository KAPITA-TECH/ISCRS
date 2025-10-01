"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Types
interface NavigationLink {
	name: string;
	href: string;
	isExternal?: boolean;
}

interface NavLinkProps {
	link: NavigationLink;
	isMobile?: boolean;
	onClose?: () => void;
}

// Constants
const SCROLL_THRESHOLD = 10;
const THEME = {
	colors: {
		primary: "#3d657a",
		primaryHover: "#37718a",
		secondary: "#94563b",
		accent: "#38738c",
		accentHover: "#2d5a6b",
	},
} as const;

const navigationLinks: NavigationLink[] = [
	{ name: "About", href: "/about" },
	{ name: "Program", href: "/program" },
	{ name: "Speakers", href: "/speakers" },
	{ name: "Registration", href: "/registration" },
	{ name: "Sponsorship", href: "/sponsorship" },
	{ name: "Contact", href: "/contact" },
];

// Custom hook for scroll detection
const useScrollDetection = (threshold: number) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					setIsScrolled(window.scrollY > threshold);
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [threshold]);

	return isScrolled;
};

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isScrolled = useScrollDetection(SCROLL_THRESHOLD);
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);

	const isAboutPage = pathname === "/about";
	const headerBg =
		isAboutPage || isScrolled ? "bg-white shadow-lg" : "backdrop-blur-lg";

	const closeMenu = useCallback(() => setIsMenuOpen(false), []);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isMenuOpen) {
				closeMenu();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMenuOpen, closeMenu]);

	// Handle click outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				closeMenu();
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
			return () =>
				document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [isMenuOpen, closeMenu]);

	const NavLink = ({ link, isMobile = false, onClose }: NavLinkProps) => {
		const baseClasses = `text-[${THEME.colors.primary}] hover:text-white font-medium transition-colors duration-200`;
		const desktopClasses =
			"whitespace-nowrap py-2 px-4 rounded-md hover:bg-[#94563b]";
		const mobileClasses = `block px-3 py-2 hover:text-[${THEME.colors.primaryHover}]`;
		const classes = isMobile
			? `${baseClasses} ${mobileClasses}`
			: `${baseClasses} ${desktopClasses}`;

		const handleClick = () => {
			if (isMobile && onClose) {
				onClose();
			}
		};

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

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerBg}`}
			role="banner"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-1 lg:py-1.5">
					<Link
						href="/"
						className="flex-shrink-0 flex items-center ml-4 lg:ml-8 xl:ml-12"
						aria-label="ISCRS Home"
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

					<nav
						className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2"
						role="navigation"
						aria-label="Main navigation"
					>
						<ul className="flex items-center gap-8 list-none">
							{navigationLinks.map((link) => (
								<li key={link.name}>
									<NavLink link={link} />
								</li>
							))}
						</ul>
					</nav>

					<div className="hidden md:flex items-center">
						<button
							className={`bg-[${THEME.colors.accent}] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-[${THEME.colors.accentHover}] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200`}
							aria-label="Register for the event"
						>
							Register
						</button>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`text-[${THEME.colors.primary}] hover:text-[${THEME.colors.primaryHover}] focus:outline-none focus:ring-2 focus:ring-[${THEME.colors.accent}] rounded-md p-2`}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMenuOpen}
							aria-controls="mobile-menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
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
					<div
						className="md:hidden"
						ref={menuRef}
						id="mobile-menu"
						role="navigation"
						aria-label="Mobile navigation"
					>
						<div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
							<ul className="space-y-1 list-none">
								{navigationLinks.map((link) => (
									<li key={link.name}>
										<NavLink link={link} isMobile onClose={closeMenu} />
									</li>
								))}
							</ul>
							<button
								className={`w-full mt-4 bg-[${THEME.colors.accent}] text-white px-6 py-2 rounded-md hover:bg-[${THEME.colors.accentHover}] transition-colors duration-200 font-medium`}
								aria-label="Register for the event"
							>
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
