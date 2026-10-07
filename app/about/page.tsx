import Button from "@/components/Button"; // Make sure to import your existing Button component
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
            {/* -----------------------------------------
              TOP: Hero Statement
            ----------------------------------------- */}
            <div className="max-w-4xl text-center mb-24 flex flex-col items-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-text-main mb-8 leading-[1.1]">
                    I Turn Wedding Footage <br className="hidden md:block" />
                    Into <span className="text-brand drop-shadow-glow">Stories People Remember.</span>
                </h1>
                <p className="font-body text-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                    I’m Raman, a wedding video editor focused on turning hours of raw footage into films that feel
                    intentional, emotional and cinematic — from complete wedding edits to highlights, teasers and reels.
                </p>
            </div>

            {/* -----------------------------------------
              MIDDLE: About Me & Portrait
            ----------------------------------------- */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                {/* Left: Text */}
                <div className="flex flex-col relative">
                    <h2 className="font-body text-xs md:text-sm font-bold uppercase tracking-widest text-text-main mb-1">
                        About Me
                    </h2>
                    <h3 className="font-body text-[10px] tracking-widest text-brand uppercase mb-8">
                        The person behind the edits.
                    </h3>

                    <div className="space-y-6 font-body text-text-muted text-sm leading-relaxed">
                        <p>
                            I started my creative journey in technology, but over time I found myself drawn more and
                            more towards visual storytelling. Today, I work with wedding studios and photographers to
                            turn their footage into polished films that are ready to be delivered to their clients.
                        </p>
                        <p>
                            For me, editing is more than putting good shots together. It’s about finding the right
                            moments, choosing the right music, building the rhythm and giving every part of the film a
                            reason to be there. I enjoy spending hours inside an edit, refining the small details until
                            the final film feels cohesive and complete.
                        </p>
                    </div>
                </div>

                {/* Right: The Portrait Image Placeholder */}
                {/* TIP: Replace this div with a Next.js Image component when you have a photo of yourself in the editing bay! */}
                <div className="relative  rounded-4xl border border-ghost overflow-hidden shadow-ambient flex items-center justify-center">
                    <Image src="/PNG/Ramandeep.jpg" alt="Raman in the editing bay" width={1000} height={1000} />
                </div>
            </div>

            {/* -----------------------------------------
              BOTTOM: Technical Stack (Stacked / Horizontal Cards)
            ----------------------------------------- */}
            <div className="w-full max-w-4xl flex flex-col items-center mb-32">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-body text-xs md:text-sm font-bold uppercase tracking-widest text-text-main mb-1">
                        Technical Arsenal
                    </h2>
                    <h3 className="font-body text-xs tracking-widest text-text-muted uppercase">
                        The Tools & The Craft
                    </h3>
                </div>

                {/* Stacked Cards Container */}
                <div className="flex flex-col gap-4 w-full">
                    {/* DaVinci Resolve */}
                    <div className="p-6 bg-surface-low border border-ghost rounded-xl hover:border-ghost-hover transition-colors grid grid-cols-[1fr_auto] md:flex md:flex-row md:items-center md:justify-between gap-y-4 md:gap-6">
                        {/* 1. Logo (Top Left) */}
                        <div className="w-12 h-12 rounded-lg bg-surface border border-ghost flex items-center justify-center text-text-main text-sm font-bold shadow-sm shrink-0">
                            <Image
                                src="/PNG/drs-ico.png"
                                height={24}
                                width={24}
                                alt="DaVinci Resolve Logo"
                                className="scale-130 w-6 h-6 object-contain"
                            />
                        </div>

                        {/* 2. Badge (Top Right on Mobile, Far Right on Desktop) */}
                        <div className="md:order-3 flex items-start justify-end">
                            <span className="inline-block px-3 py-1 bg-surface border border-ghost rounded-full font-body text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                                Advanced
                            </span>
                        </div>

                        {/* 3. Text (Underneath on Mobile, Middle on Desktop) */}
                        <div className="col-span-2 md:order-2 md:flex-1">
                            <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-text-main mb-1">
                                DaVinci Resolve
                            </h4>
                            <p className="font-body text-[10px] text-text-muted uppercase tracking-widest">
                                Editing · Colour · Audio · Finishing
                            </p>
                        </div>
                    </div>

                    {/* Final Cut Pro */}
                    <div className="p-6 bg-surface-low border border-ghost rounded-xl hover:border-ghost-hover transition-colors grid grid-cols-[1fr_auto] md:flex md:flex-row md:items-center md:justify-between gap-y-4 md:gap-6">
                        <div className="w-12 h-12 rounded-lg bg-surface border border-ghost flex items-center justify-center text-text-main text-sm font-bold shadow-sm shrink-0">
                            <Image
                                src="/PNG/fcp-ico.png"
                                height={24}
                                width={24}
                                alt="Final Cut Pro Logo"
                                className="scale-130 w-6 h-6 object-contain"
                            />
                        </div>
                        <div className="md:order-3 flex items-start justify-end">
                            <span className="inline-block px-3 py-1 bg-surface border border-ghost rounded-full font-body text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                                Learning
                            </span>
                        </div>
                        <div className="col-span-2 md:order-2 md:flex-1">
                            <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-text-main mb-1">
                                Final Cut Pro
                            </h4>
                            <p className="font-body text-[10px] text-text-muted uppercase tracking-widest">
                                FCP Workflow · Studio Collaboration
                            </p>
                        </div>
                    </div>

                    {/* Canva */}
                    <div className="p-6 bg-surface-low border border-ghost rounded-xl hover:border-ghost-hover transition-colors grid grid-cols-[1fr_auto] md:flex md:flex-row md:items-center md:justify-between gap-y-4 md:gap-6">
                        <div className="w-12 h-12 rounded-lg bg-surface border border-ghost flex items-center justify-center text-text-main text-sm font-bold shadow-sm shrink-0">
                            <Image
                                src="/PNG/canva-ico.png"
                                height={24}
                                width={24}
                                alt="Canva Logo"
                                className="scale-130 w-6 h-6 object-contain"
                            />
                        </div>
                        <div className="md:order-3 flex items-start justify-end">
                            <span className="inline-block px-3 py-1 bg-surface border border-ghost rounded-full font-body text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                                Creative Support
                            </span>
                        </div>
                        <div className="col-span-2 md:order-2 md:flex-1">
                            <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-text-main mb-1">
                                Canva
                            </h4>
                            <p className="font-body text-[10px] text-text-muted uppercase tracking-widest">
                                Design · Social · Visual Assets
                            </p>
                        </div>
                    </div>

                    {/* AI Video */}
                    <div className="p-6 bg-surface-low border border-ghost rounded-xl hover:border-ghost-hover transition-colors grid grid-cols-[1fr_auto] md:flex md:flex-row md:items-center md:justify-between gap-y-4 md:gap-6">
                        <div className="w-12 h-12 rounded-lg bg-surface border border-ghost flex items-center justify-center text-text-main text-sm font-bold shadow-sm shrink-0">
                            <Image
                                src="/PNG/ai-ico.png"
                                height={24}
                                width={24}
                                alt="Canva Logo"
                                className="scale-110 w-6 h-6 object-contain"
                            />
                        </div>
                        <div className="md:order-3 flex items-start justify-end">
                            <span className="inline-block px-3 py-1 bg-surface border border-ghost rounded-full font-body text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                                Exploring
                            </span>
                        </div>
                        <div className="col-span-2 md:order-2 md:flex-1">
                            <h4 className="font-heading text-lg font-bold uppercase tracking-widest text-text-main mb-1">
                                AI Video
                            </h4>
                            <p className="font-body text-[10px] text-text-muted uppercase tracking-widest">
                                Runway · Veo
                            </p>
                        </div>
                    </div>

                    {/* Special Focus Card: More Than Editing */}
                    <div className="p-8 md:p-10 mt-6 bg-surface border border-brand/40 rounded-2xl shadow-glow relative overflow-hidden flex flex-col gap-4">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand/5 blur-3xl rounded-full pointer-events-none"></div>

                        <div className="relative z-10">
                            <h4 className="font-heading text-2xl font-bold uppercase tracking-widest text-text-main mb-2">
                                More Than Editing
                            </h4>
                            <p className="font-body text-[11px] text-brand uppercase tracking-widest mb-6 font-semibold">
                                Story · Rhythm · Emotion · Detail
                            </p>
                            <p className="font-body text-sm leading-relaxed text-text-muted max-w-2xl">
                                The software is only part of the process. My focus is on understanding the footage,
                                finding the story within it and making creative decisions that serve the final film.
                            </p>
                        </div>
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
