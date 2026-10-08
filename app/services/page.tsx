import Button from "@/components/Button";
import Image from "next/image";

export default function Services() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
            {/* -----------------------------------------
          HEADER SECTION (Cinematic Layering)
          ----------------------------------------- */}
            <div className="relative w-full max-w-5xl text-center  mb-15 md:mb-24 flex flex-col items-center">
                {/* Foreground Typography */}
                <h1 className="relative z-10 font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-text-main mb-6 leading-[1.05]">
                    <div>
                        Technical{" "}
                        <span className="text-brand drop-shadow-glow relative">
                            Precision.
                            <span className="absolute h-0.5 bottom-0 -translate-y-1 md:-translate-y-3 left-0 right-0 bg-accent"></span>
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-brand drop-shadow-glow relative">
                            Creative{" "}
                            <span className="absolute h-0.5 bottom-0 -translate-y-1 md:-translate-y-3 left-0 right-0 bg-accent"></span>
                        </span>{" "}
                        Vision.
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

                        <div className="relative z-10 mb-12">
                            <span className="font-body text-[10px] font-bold tracking-[0.2em] text-brand uppercase mb-4 block">
                                The complete wedding, beautifully put together.
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4 relative w-max">
                                Wedding Mixing
                                <span className="absolute -bottom-2 left-0 h-0.5 bg-accent w-full"></span>
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
                        </div>
                    </div>

                    {/* Card 2: Wedding Films */}
                    <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-10 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between min-h-[400px]">
                        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-linear-to-tl from-surface-high/20 to-transparent pointer-events-none z-0"></div>

                        <div>
                            <span className="font-body text-[10px] font-bold tracking-[0.2em] text-brand uppercase mb-4 block">
                                The story behind the celebration.
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4 relative w-max">
                                Wedding Films
                                <span className="absolute -bottom-2 left-0 h-0.5 bg-accent w-full"></span>
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
                        </div>
                    </div>
                </div>

                {/* ROW 2 --------------------------------- */}

                {/* Card 3: Wedding Highlights (Spans 3 columns - Full Width Feature) */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-12 hover:border-ghost-hover transition-all duration-500 lg:col-span-3 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center min-h-[350px]">
                    <div className="flex-1">
                        <span className="font-body text-[10px] font-bold tracking-[0.2em] text-brand uppercase mb-4 block">
                            Every wedding has its moments. We find them.
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4 relative w-max">
                            Wedding Highlights
                            <span className="absolute -bottom-2 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-sm text-text-muted leading-relaxed max-w-2xl">
                            A focused cinematic cut built around the strongest moments of the wedding — combining
                            visuals, music and real audio to create a film that captures the energy and emotion of the
                            day.
                        </p>
                    </div>

                    <div className="w-full md:w-auto md:border-l md:border-ghost md:pl-16">
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
                </div>

                {/* ROW 3 --------------------------------- */}

                {/* Card 4: Teasers & Reels */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                        <span className="font-body text-[9px] font-bold tracking-[0.2em] text-text-muted uppercase mb-4 block">
                            Short cuts. Strong impact.
                        </span>
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-3 relative w-max">
                            Teasers & Reels
                            <span className="absolute -bottom-2 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-xs text-text-muted leading-relaxed mb-8">
                            Short-form wedding edits designed for attention — from cinematic teasers that build
                            anticipation to vertical reels that turn memorable moments into social-ready content.
                        </p>
                    </div>
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
                </div>

                {/* Card 5: Pre-Wedding Films */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                        <span className="font-body text-[9px] font-bold tracking-[0.2em] text-text-muted uppercase mb-4 block">
                            Your story before the big day.
                        </span>
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-3 relative w-max">
                            Pre-Wedding Films
                            <span className="absolute -bottom-2 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-xs text-text-muted leading-relaxed mb-8">
                            Cinematic edits from pre-wedding sessions, shaped around the couple, location and mood of
                            the shoot — with music, pacing and colour working together to create a personal visual
                            story.
                        </p>
                    </div>
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
                </div>

                {/* Card 6: Event Highlights */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                        <span className="font-body text-[9px] font-bold tracking-[0.2em] text-text-muted uppercase mb-4 block">
                            From the occasion to the final cut.
                        </span>
                        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-text-main mb-3 relative w-max">
                            Event Highlights
                            <span className="absolute -bottom-2 left-0 h-0.5 bg-accent w-full"></span>
                        </h2>
                        <p className="font-body text-xs text-text-muted leading-relaxed mb-8">
                            Polished highlight edits for events beyond weddings — including office openings,
                            celebrations, corporate gatherings and other studio projects that need a sharp, engaging
                            final film.
                        </p>
                    </div>
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
