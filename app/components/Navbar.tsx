import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 bg-nav backdrop-blur-md border-b border-ghost">
            {/* Brand / Logo */}
            <Link
                href="/"
                className="font-heading text-xl md:text-2xl font-bold tracking-[0.1em] uppercase text-text-main flex items-center gap-2"
            >
                <span >

                Twin Lens
                </span>
                <span className="text-brand drop-shadow-glow">
                    Production
                </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest uppercase text-text-muted">
                <Link
                    href="/services"
                    className="hover:text-text-main transition-colors"
                >
                    Services
                </Link>
                <Link
                    href="/about"
                    className="hover:text-text-main transition-colors"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className="hover:text-text-main transition-colors"
                >
                    Contact
                </Link>
            </div>

            {/* Book Me CTA */}
            <div className="hidden md:block">
                <Link
                    href="/contact"
                    className="bg-brand text-brand-dark font-bold uppercase tracking-wider text-xs px-6 py-2.5 rounded-sm hover:bg-brand-dim transition-colors shadow-glow"
                >
                    Book Me
                </Link>
            </div>

            {/* Mobile Hamburger Menu (Visual Placeholder) */}
            <button className="md:hidden text-text-main hover:text-brand transition-colors">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
        </nav>
    );
}
