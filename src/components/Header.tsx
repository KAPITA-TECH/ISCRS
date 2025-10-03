"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Types
interface NavigationLink {
	name: string;
	href: string;
	isExternal?: boolean;
	dropdown?: DropdownItem[];
}

interface DropdownItem {
	name: string;
	href: string;
}

interface NavLinkProps {
	link: NavigationLink;
	isMobile?: boolean;
	onClose?: () => void;
}

// Constants
const navigationLinks: NavigationLink[] = [
	{ name: "About ISCRS", href: "/about" },
	{
		name: "MOCAT5",
		href: "#",
		dropdown: [
			{ name: "Program", href: "/program" },
			{ name: "Membership", href: "/membership" },
			{ name: "Abstract", href: "/abstract" }
		]
	},
	{ name: "Speakers", href: "/speakers" },
	{ name: "Committee", href: "/committee" },
	{ name: "Sponsorship", href: "/sponsorship" },
	{ name: "Contact", href: "/contact" },
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const closeMenu = useCallback(() => setIsMenuOpen(false), []);
	const closeDropdown = useCallback(() => setActiveDropdown(null), []);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				if (isMenuOpen) closeMenu();
				if (activeDropdown) closeDropdown();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isMenuOpen, activeDropdown, closeMenu, closeDropdown]);

	// Handle click outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				closeMenu();
			}
			if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
				closeDropdown();
			}
		};

		if (isMenuOpen || activeDropdown) {
			document.addEventListener("mousedown", handleClickOutside);
			return () =>
				document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [isMenuOpen, activeDropdown, closeMenu, closeDropdown]);

	const NavLink = ({ link, isMobile = false, onClose }: NavLinkProps) => {
		const baseClasses = "text-[#1d5875] hover:text-[#37718a] font-medium transition-colors duration-200";
		const desktopClasses = "whitespace-nowrap py-1 px-3 text-sm";
		const mobileClasses = "block px-3 py-2 hover:text-[#37718a]";
		const classes = isMobile
			? `${baseClasses} ${mobileClasses}`
			: `${baseClasses} ${desktopClasses}`;

		const handleClick = () => {
			if (isMobile && onClose) {
				onClose();
			}
		};

		const handleDropdownToggle = (e: React.MouseEvent) => {
			e.preventDefault();
			setActiveDropdown(activeDropdown === link.name ? null : link.name);
		};

		// If it's a dropdown link
		if (link.dropdown) {
			return (
				<div className="relative" ref={dropdownRef}>
					<button
						className={`${classes} flex items-center gap-1`}
						onClick={handleDropdownToggle}
						aria-expanded={activeDropdown === link.name}
					>
						{link.name}
						<svg
							className={`w-4 h-4 transition-transform duration-200 ${
								activeDropdown === link.name ? 'rotate-180' : ''
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					</button>

					{activeDropdown === link.name && (
						<div className="absolute top-full left-0 mt-1 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg border border-white py-2 min-w-[150px] z-50">
							{link.dropdown.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block px-4 py-2 text-sm text-[#1d5875] hover:text-[#37718a] hover:bg-white/50 transition-colors duration-200"
									onClick={() => {
										closeDropdown();
										if (isMobile && onClose) onClose();
									}}
								>
									{item.name}
								</Link>
							))}
						</div>
					)}
				</div>
			);
		}

		// Regular link
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
		<>
			{/* Logo - Separate from header container */}
			<div className="fixed top-6 left-4 z-50">
				<Link
					href="/"
					className="flex-shrink-0 flex items-center"
					aria-label="ISCRS Home"
				>
					<Image
						src="/images/logo.svg"
						alt="ISCRS Logo"
						width={70}
						height={70}
						className="ml-8 w-auto transition-all duration-300 hover:scale-105"
						priority
					/>
				</Link>
			</div>

			{/* Thin Header with blurry background and white border */}
			<header
				className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/20 backdrop-blur-md border border-white/60 rounded-2xl shadow-lg"
				role="banner"
			>
				<div className="px-6 py-2">
					<nav
						className="hidden md:flex items-center justify-center"
						role="navigation"
						aria-label="Main navigation"
					>
						<ul className="flex items-center gap-6 list-none">
							{navigationLinks.map((link) => (
								<li key={link.name}>
									<NavLink link={link} />
								</li>
							))}
						</ul>
					</nav>

					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-[#1d5875] hover:text-[#37718a] focus:outline-none focus:ring-2 focus:ring-[#38738c] rounded-md p-2"
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
						className="md:hidden absolute top-full left-0 right-0 mt-2"
						ref={menuRef}
						id="mobile-menu"
						role="navigation"
						aria-label="Mobile navigation"
					>
						<div className="px-4 py-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-white">
							<ul className="space-y-1 list-none">
								{navigationLinks.map((link) => (
									<li key={link.name}>
										<NavLink link={link} isMobile onClose={closeMenu} />
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</header>

			{/* Register Button - Separate from header container */}
			<div className="fixed top-6 right-12 z-50">
				<button
					className="bg-[#38738c] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-[#2d5a6b] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
					aria-label="Register for the event"
				>
					Register
				</button>
			</div>
		</>
	);
};

export default Header;
