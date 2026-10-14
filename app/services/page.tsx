"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

function RenderServiceButton({
    text,
    setSelectedService,
}: {
    text: string;
    setSelectedService: (service: string) => void;
}) {
    return (
        <button
            onClick={() => setSelectedService(text)}
            className="rounded-4xl border px-3 py-1 mt-8 font-body text-xs font-medium capitalize tracking-[0.2em] text-text-main hover:text-brand transition-colors group flex items-center gap-2"
        >
            Request Pricing
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 zoom-90" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.89 18.25C15.86 18.25 18.47 16.29 19.3 13.44C20.13 10.59 18.97 7.54 16.46 5.95C13.95 4.36 10.69 4.62 8.47 6.59C6.25 8.56 5.59 11.76 6.86 14.44L5.27 18.25L9.45 17.3C10.49 17.92 11.68 18.25 12.89 18.25Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.02 10.68C10.48 10.68 10.04 10.24 10.04 9.7C10.04 9.16 10.48 8.72 11.02 8.72C11.56 8.72 12 9.16 12 9.7C12 10.24 11.56 10.68 11.02 10.68Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.76 13.4C13.76 13.8 14 14.16 14.37 14.32C14.74 14.48 15.17 14.4 15.45 14.12C15.73 13.84 15.82 13.41 15.67 13.04C15.52 12.67 15.16 12.43 14.76 12.43C14.21 12.43 13.76 12.87 13.76 13.4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.04 9.7C10.04 13 13.2 14.74 14.76 14.38"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default function Services() {
    // State to control which service modal is currently open
    const [selectedService, setSelectedService] = useState<string | null>(null);

    // Helper function to generate the WhatsApp link
    const getWhatsAppUrl = () => {
        if (!selectedService) return "#";
        const message = `Hi, I would like to know more about ${selectedService}`;
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden relative">
            {/* -----------------------------------------
              MODAL COMPONENT
            ----------------------------------------- */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-surface border border-ghost rounded-2xl p-8 max-w-md w-full shadow-ambient relative animate-in zoom-in-95 duration-300">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 text-text-muted hover:text-text-main p-2 transition-colors"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-2">
                            Get Quote For <br />
                            <span className="text-brand drop-shadow-glow">{selectedService}</span>
                        </h3>

                        <p className="font-body text-sm text-text-muted mb-6 leading-relaxed">
                            You will be redirected to WhatsApp with a pre-filled message to discuss your project details
                            directly with us.
                        </p>

                        {/* Message Preview Box */}
                        <div className="p-4 bg-surface-low border border-ghost rounded-lg mb-8 relative mt-4">
                            <span className="absolute -top-3 left-4 bg-surface px-2 font-body text-[10px] text-text-muted uppercase tracking-widest">
                                Message Preview
                            </span>
                            <p className="font-body text-sm text-text-main italic">
                                "Hi, I would like to know more about {selectedService}"
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setSelectedService(null)}
                                className="flex-1 inline-flex items-center justify-center px-8 py-3 text-xs font-heading uppercase tracking-[0.2em] font-bold transition-all duration-300 bg-brand text-background hover:bg-brand/90 hover:shadow-glow rounded-md"
                            >
                                Open WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* -----------------------------------------
              HEADER SECTION (Cinematic Layering)
            ----------------------------------------- */}
            <div className="relative w-full max-w-5xl text-center mb-15 md:mb-24 flex flex-col items-center">
                {/* Foreground Typography */}
                <h1 className="relative z-10 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-brand mb-6 leading-[1.05]">
                    <div>
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Technical Precision.</span>
                    </div>
                    <div className="">
                        <span className="text-text-main drop-shadow-glow relative">Creative Vision</span> .
                    </div>
                </h1>

                <p className="relative z-10 font-body text-text-muted text-sm md:text-base leading-relaxed max-w-2xl mt-4">
                    End-to-end post-production services designed to elevate narrative and commercial video work. We
                    treat every frame as an essential part of the story.
                </p>
            </div>

            {/* -----------------------------------------
              BENTO GRID: SERVICES
            ----------------------------------------- */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32 relative z-10">
                {/* ROW 1 WRAPPER: Takes up all 3 columns, but splits its own children 55% and 45% */}
                <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-6">
                    {/* Card 1: Wedding Mixing (Visually Strong Anchor) */}
                    <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-12 overflow-hidden hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between min-h-[400px]">
                        {/* Note: Kept your background gradient at 55% as requested */}
                        <div className="absolute right-0 bottom-0 w-[55%] h-2/3 bg-linear-to-tl from-surface-high/20 to-transparent pointer-events-none z-0"></div>

                        <div className="relative z-10">
                            <span className="font-accent text-[12px] font-bold tracking-[0.3em] text-brand uppercase mb-4 block">
                                The complete wedding, beautifully put together.
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4 relative w-max">
                                Wedding Mixing
                                <span className="absolute -bottom-1 left-0 h-0.5 bg-accent w-full"></span>
                            </h2>
                            <p className="font-body text-sm text-text-muted leading-relaxed max-w-lg">
                                Multi-event wedding edits crafted from your complete footage — structured ceremony by
                                ceremony with clean multicam editing, music, natural audio, colour correction and a
                                consistent visual flow.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-ghost">
                            <ul className="space-y-3 font-body text-xs text-text-muted">
                                <li className="flex items-center gap-1">
                                    <span className="text-accent">
                                        <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                    </span>
                                    Multi-Event Editing
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="text-accent">
                                        <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                    </span>
                                    Multicam & Sync
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="text-accent">
                                        <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                    </span>
                                    Complete Wedding Coverage
                                </li>
                            </ul>
                            <span className="w-full flex justify-end align-baseline">
                                <RenderServiceButton text="Wedding Mixing" setSelectedService={setSelectedService} />
                            </span>
                        </div>
                    </div>

                    {/* Card 2: Wedding Films */}
                    <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-10 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between min-h-[400px]">
                        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-linear-to-tl from-surface-high/20 to-transparent pointer-events-none z-0"></div>

                        <div>
                            <span className="font-accent text-[12px] font-bold tracking-[0.3em] text-brand uppercase mb-4 block">
                                The story behind the celebration.
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4 relative w-max">
                                Wedding Films
                                <span className="absolute -bottom-1 left-0 h-0.5 bg-accent w-full"></span>
                            </h2>
                            <p className="font-body text-sm text-text-muted leading-relaxed">
                                A longer-form cinematic edit that brings together the important moments, emotions,
                                people and atmosphere of the wedding into one cohesive film that feels complete and
                                meaningful.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-ghost">
                            <ul className="space-y-4 font-body text-xs text-text-muted">
                                <li className="flex items-center gap-1">
                                    <span className="text-accent">
                                        <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                    </span>
                                    Story-Driven Edit
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="text-accent">
                                        <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                    </span>
                                    Emotional Pacing
                                </li>
                                <li className="flex items-center gap-1">
                                    <span className="text-accent">
                                        <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                    </span>
                                    Cinematic Colour
                                </li>
                            </ul>
                            <span className="w-full flex justify-end align-baseline">
                                <RenderServiceButton text="Wedding Films" setSelectedService={setSelectedService} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* ROW 2 --------------------------------- */}

                {/* Card 3: Wedding Highlights (Spans 3 columns - Full Width Feature) */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-12 hover:border-ghost-hover transition-all duration-500 lg:col-span-3 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center min-h-[350px]">
                    <div className="flex-1">
                        <span className="font-accent text-[12px] font-bold tracking-[0.3em] text-brand uppercase mb-4 block">
                            Every wedding has its moments. We find them.
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4 relative w-max">
                            Wedding Highlights
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-sm text-text-muted leading-relaxed max-w-2xl">
                            A focused cinematic cut built around the strongest moments of the wedding — combining
                            visuals, music and real audio to create a film that captures the energy and emotion of the
                            day.
                        </p>
                    </div>

                    <div className="w-full md:w-auto border-t md:border-l md:border-t-0 border-ghost pt-8 md:pl-16 md:pt-0 mb-15 md:mb-0">
                        <ul className="space-y-4 font-body text-sm text-text-muted">
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Story Curation
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Music & Rhythm
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Emotional Moments
                            </li>
                        </ul>
                    </div>
                    <span className=" absolute bottom-0 right-0 -translate-7  w-full flex justify-end align-baseline">
                        <RenderServiceButton text="Wedding Highlights" setSelectedService={setSelectedService} />
                    </span>
                </div>

                {/* ROW 3 --------------------------------- */}

                {/* Card 4: Teasers & Reels */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                        <span className="font-accent text-[11px] font-bold tracking-[0.3em] text-text-muted uppercase mb-4 block">
                            Short cuts. Strong impact.
                        </span>
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-3 relative w-max">
                            Teasers & Reels
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-xs text-text-muted leading-relaxed mb-8">
                            Short-form wedding edits designed for attention — from cinematic teasers that build
                            anticipation to vertical reels that turn memorable moments into social-ready content.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-2 font-body text-[11px] text-text-muted border-t border-ghost pt-4">
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Cinematic Teasers
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Instagram Reels
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Social-Ready Edits
                            </li>
                        </ul>
                        <span className="w-full flex justify-end align-baseline">
                            <RenderServiceButton text="Teasers & Reels" setSelectedService={setSelectedService} />
                        </span>
                    </div>
                </div>

                {/* Card 5: Pre-Wedding Films */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                        <span className="font-accent text-[11px] font-bold tracking-[0.3em] text-text-muted uppercase mb-4 block">
                            Your story before the big day.
                        </span>
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-3 relative w-max">
                            Pre-Wedding Films
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-xs text-text-muted leading-relaxed mb-8">
                            Cinematic edits from pre-wedding sessions, shaped around the couple, location and mood of
                            the shoot — with music, pacing and colour working together to create a personal visual
                            story.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-2 font-body text-[11px] text-text-muted border-t border-ghost pt-4">
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Couple Story
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Music-Led Editing
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Cinematic Look
                            </li>
                        </ul>

                        <span className="w-full flex justify-end align-baseline">
                            <RenderServiceButton text="Pre-Wedding Films" setSelectedService={setSelectedService} />
                        </span>
                    </div>
                </div>

                {/* Card 6: Event Highlights */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                        <span className="font-accent text-[11px] font-bold tracking-[0.3em] text-text-muted uppercase mb-4 block">
                            From the occasion to the final cut.
                        </span>
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-3 relative w-max">
                            Event Highlights
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-xs text-text-muted leading-relaxed mb-8">
                            Polished highlight edits for events beyond weddings — including office openings,
                            celebrations, corporate gatherings and other studio projects that need a sharp, engaging
                            final film.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-2 font-body text-[11px] text-text-muted border-t border-ghost pt-4">
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Event Storytelling
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Highlights & Recaps
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="text-accent">
                                    <Image src="/SVG/ChevronForward.svg" alt="Logo" width={14} height={14} />
                                </span>
                                Corporate Events
                            </li>
                        </ul>
                        <span className="w-full flex justify-end align-baseline">
                            <RenderServiceButton text="Event Highlights" setSelectedService={setSelectedService} />
                        </span>
                    </div>
                </div>
            </div>

            {/* -----------------------------------------
              BOTTOM CTA
            ----------------------------------------- */}
            <div className="text-center w-full max-w-2xl flex flex-col items-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-main mb-8">
                    Ready To Start?
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button variant="primary" href="/contact">
                        Discuss A Project
                    </Button>

                    <Button variant="secondary" href="/#work">
                        View Portfolio
                    </Button>
                </div>
            </div>
        </div>
    );
}
