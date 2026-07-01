"use client";

import Button from "../components/Button";
import { useState } from "react";

function ContactMeBottomSection() {
    return (
        <div className="mt-16 text-center flex flex-col items-center">
            <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] mb-6 font-semibold">Or Find Me On</p>
            <div className="flex gap-8 text-text-muted">
                {/* YouTube / Play Icon */}
                <a
                    href="https://www.youtube.com/@TwinLens4Productions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors hover:shadow-glow rounded-full flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6" // Added size classes here
                    >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                </a>
                {/* LinkedIn / Briefcase Icon */}{" "}
                <a
                    href=" https://www.instagram.com/tlp.creations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors hover:shadow-glow rounded-full flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5.5 h-5." // Added size classes here
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/twin-lens-production"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors hover:shadow-glow rounded-full flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5" // Fixed to camelCase
                        strokeLinecap="round" // Fixed to camelCase
                        strokeLinejoin="round" // Fixed to camelCase
                        className="w-6 h-6" // Added size classes here
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            details: formData.get("details"),
            timeline: formData.get("timeline"),
            budget: formData.get("budget"),
            _honey: formData.get("_honey"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setErrorMessage("");
            } else {
                setErrorMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setErrorMessage("A network error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 py-20 md:py-32 overflow-hidden relative">
            <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-6 md:mb-12 w-full">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-[1.1] mb-4 md:mb-6 tracking-tight">
                        Let's Frame <br />
                        <span className="text-brand drop-shadow-glow">The Narrative</span>
                    </h1>
                </div>

                {/* Form Container: Adjusted padding for mobile (p-6) vs desktop (p-12) */}
                <div className="w-full bg-surface-low border border-ghost rounded-xl p-6 sm:p-8 md:p-12 shadow-ambient backdrop-blur-sm relative overflow-hidden">
                    {/* SUCCESS OVERLAY */}
                    {isSuccess ? (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface-low backdrop-blur-md text-center p-6 md:p-8">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand/20 flex items-center justify-center mb-6 text-brand">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="font-heading text-xl md:text-2xl uppercase tracking-widest text-text-main mb-2">
                                Message Received
                            </h3>
                            <p className="text-text-muted text-sm max-w-sm font-body">
                                I'll review your project details and get back to you shortly.
                            </p>
                        </div>
                    ) : null}

                    {/* ACTUAL FORM */}
                    {/* Changed gap-10 to gap-8 md:gap-10 for tighter mobile spacing */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 font-body">
                        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            <div className="flex flex-col gap-2">
                                {/* Added font-heading for crisper small caps */}
                                <label className="font-heading text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Name
                                </label>
                                {/* Added text-base (prevents iOS zoom), rounded-none (prevents Apple styling), and font-body */}
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main text-base font-body pb-2 transition-colors w-full rounded-none"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="font-heading text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main text-base font-body pb-2 transition-colors w-full rounded-none"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-heading text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                Project Details
                            </label>
                            <textarea
                                name="details"
                                required
                                rows={2}
                                className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main text-base font-body pb-2 transition-colors w-full resize-none rounded-none"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-end">
                            <div className="flex flex-col gap-2">
                                <label className="font-heading text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Timeline
                                </label>
                                <input
                                    type="text"
                                    name="timeline"
                                    required
                                    className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main text-base font-body pb-2 transition-colors w-full rounded-none"
                                />
                            </div>

                            <div className="flex flex-col gap-2 relative">
                                <label className="font-heading text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Estimated Budget
                                </label>
                                {/* Updated Select Options & added custom SVG arrow for consistent styling */}
                                <div className="relative w-full">
                                    <select
                                        name="budget"
                                        required
                                        className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main text-base font-body pb-2 transition-colors w-full appearance-none cursor-pointer rounded-none pr-8"
                                    >
                                        <option value="" className="bg-surface text-text-muted">
                                            Select a range
                                        </option>
                                        <option value="50" className="bg-surface">
                                            $50+
                                        </option>
                                        <option value="100-200" className="bg-surface">
                                            $100 - $200
                                        </option>
                                        <option value="200-400" className="bg-surface">
                                            $200 - $400
                                        </option>
                                        <option value="500-800" className="bg-surface">
                                            $500 - $800
                                        </option>
                                        <option value="1000+" className="bg-surface">
                                            $1,000+
                                        </option>
                                    </select>
                                    {/* Custom Dropdown Arrow to replace the ugly browser default */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted pb-2">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 text-xs text-center font-semibold tracking-wide uppercase mt-2">
                                {errorMessage}
                            </p>
                        )}

                        <Button
                            variant="primary"
                            className="w-full sm:w-auto min-w-full md:min-w-[50%] mx-auto mt-4"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Say Hi"}
                        </Button>
                    </form>
                </div>
            </div>
            <ContactMeBottomSection />
        </div>
    );
}
