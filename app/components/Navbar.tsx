"use client";

import Link from "next/link";
import { useState } from "react";
import { getSocialLinks } from "../utility";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-2 md:py-4  lg:px-24 bg-white/70 supports-[backdrop-filter]:bg-white/50 backdrop-blur-md border-b border-gray-200/50">
            {/* Brand / Logo */}
            <Link
                href="/"
                onClick={closeMenu}
                className="font-heading text-xl md:text-2xl font-bold tracking-widest uppercase text-text-main flex items-center relative z-20"
            >
                {process.env.NEXT_PUBLIC_BRAND_NAME}
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-text-muted">
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="hover:text-text-main transition-colors"
                        onClick={closeMenu}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Hamburger / Close Button */}
            <button
                type="button"
                onClick={toggleMenu}
                // FIXED: Changed invalid z-100 to z-[100] so it stays above the overlay
                className="md:hidden text-text-main hover:text-gray-600 transition-colors relative z-[100] p-3 -mr-3 bg-white/50 rounded-md backdrop-blur-sm border border-gray-200/50 cursor-pointer touch-manipulation"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    // 'X' Close Icon
                    <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                ) : (
                    // Hamburger Icon
                    <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4 7h16M4 12h16m-7 5h7"
                        ></path>
                    </svg>
                )}
            </button>

            {/* -----------------------------------------
                MOBILE NAVIGATION BACKDROP (Click to close)
                ----------------------------------------- */}
            <div
                // FIXED: Set explicitly to z-[80]
                className={`fixed inset-0 z-80 transition-opacity duration-500 md:hidden ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
            ></div>

            {/* -----------------------------------------
                MOBILE NAVIGATION OVERLAY (80% Width Liquid Glass)
                ----------------------------------------- */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[80%] h-screen z-90 flex flex-col items-center justify-center transition-transform duration-700 
        ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden 
        bg-white/30 backdrop-blur-3xl border-l border-white/30 shadow-[0_0_50px_rgba(0,0,0,0.1)]
     ${isOpen ? "translate-x-0 " : "translate-x-[125%]"}`}
            >
                {/* This is your "Liquid" layer. 
        Instead of a solid background, we use the blur effect 
        and a subtle white reflection to simulate glass.
    */}
                // bg-linear-to-br from-brand-dark to-brand-light
                <div
                    className="absolute inset-0 z-0 
                bg-brand-light backdrop-blur-3xl border-l border-brand-light shadow-2xl"
                ></div>
                <div className="flex flex-col h-[60vh] items-center justify-between -mt-20 space-y-10 text-center relative z-10 w-full">
                    <div className="flex flex-col items-center justify-between space-y-8 text-center relative z-10 w-full">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-body text-2xl  font-bold uppercase tracking-widest text-text-main hover:scale-105 transition-all duration-300 drop-shadow-sm"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-8 text-text-muted">
                        {getSocialLinks().map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-brand transition-colors hover:shadow-glow rounded-full flex items-center justify-center"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
