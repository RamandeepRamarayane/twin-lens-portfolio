import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

// Define the styles for each variant
const buttonVariants = cva(
    "inline-flex items-center justify-center font-heading uppercase tracking-[0.15em] transition-all duration-300",
    {
        variants: {
            variant: {
                primary: "bg-brand text-background px-10 py-5 rounded shadow-glow hover:bg-brand-dim",
                secondary: "border border-button-border text-text-main hover:bg-ghost-hover px-10 py-5 rounded",
                plain: "text-text-muted hover:text-brand border-b border-transparent hover:border-brand pb-1 text-xs",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string; // Optional: if provided, it renders as a <Link> instead of a <button>
    children: React.ReactNode;
    handler?: () => void; // Optional: click handler for the button
    className?: string; // Optional: additional classes for customization
}

export default function Button({ variant, href, children, className, handler, ...props }: ButtonProps) {
    // If an href is provided, render as a Link (for navigation)
    if (href) {
        return (
            <Link href={href} className={buttonVariants({ variant, className })}>
                {children}
            </Link>
        );
    }

    // Otherwise render as a standard button
    return (
        <button className={buttonVariants({ variant, className })} onClick={handler} {...props}>
            {children}
        </button>
    );
}
