import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
            {/* -----------------------------------------
          TOP: Hero Statement
          ----------------------------------------- */}
            <div className="max-w-3xl text-center mb-24 flex flex-col items-center">
                <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-6">
                    Crafting Visual Narratives.
                </h1>
                <p className="font-body text-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                    We believe in the power of precision. Every frame is a decision, every cut a pulse in the story.{" "}
                    {process.env.NEXT_PUBLIC_BRAND_NAME} operates at the intersection of raw creativity and technical
                    rigor.
                </p>
            </div>

            {/* -----------------------------------------
          MIDDLE: Philosophy & Editing Bay
          ----------------------------------------- */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                {/* Left: Text & Handwritten Note */}
                <div className="flex flex-col relative">
                    {/* Patrick Hand Director's Note */}
                    <div className="absolute -top-10 left-0 md:-left-8 flex flex-col items-start opacity-80">
                        <span
                            style={{ fontFamily: "var(--font-hand)" }}
                            className="text-[#3F3F46] text-xl md:text-2xl transform -rotate-3"
                        >
                            The core truth.
                        </span>
                        {/* Simple SVG curved arrow */}
                        <svg
                            width="40"
                            height="20"
                            viewBox="0 0 40 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 mt-1"
                        >
                            <path d="M1 1C10 15 25 18 38 10" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M32 6L39 9.5L34 15" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>

                    <h2 className="font-body text-xs md:text-sm font-bold uppercase tracking-widest text-text-main mb-6">
                        Our Philosophy
                    </h2>

                    <div className="space-y-6 font-body text-text-muted text-sm leading-relaxed">
                        <p>
                            A studio is not just a room with equipment; it's an environment engineered for focus. We
                            strip away the unnecessary to reveal the essence of the narrative.
                        </p>
                        <p>
                            High-contrast storytelling demands clarity. We don't hide behind effects; we use them to
                            articulate a specific vision. The "Studio Minimalist" approach ensures that the video work
                            remains the undisputed focal point.
                        </p>
                    </div>
                </div>

                {/* Right: The Studio Image */}
                <div className="relative aspect-[4/5] bg-surface rounded-sm border border-ghost overflow-hidden shadow-ambient">
                    {/* Replace this div with an actual <Image src="/your-studio-image.jpg" /> once you have your photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted font-body text-xs uppercase tracking-widest z-0 opacity-50">
                        [ Edit Bay Image / screen.jpg reference ]
                    </div>
                </div>
            </div>

            {/* -----------------------------------------
          BOTTOM: Technical Arsenal
          ----------------------------------------- */}
            <div className="w-full max-w-6xl flex flex-col items-center">
                {/* Section Header with Handwritten Note */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-12 relative">
                    <div className="text-center md:text-right">
                        <h2 className="font-body text-xs md:text-sm font-bold uppercase tracking-widest text-text-main mb-1">
                            Technical Arsenal.
                        </h2>
                        <h3 className="font-body text-xs tracking-widest text-text-muted uppercase">
                            The Tools We Trust
                        </h3>
                    </div>

                    <span
                        style={{ fontFamily: "var(--font-hand)" }}
                        className="text-[#3F3F46] text-xl md:text-2xl transform rotate-2 md:absolute md:left-full md:ml-6 md:top-0 whitespace-nowrap"
                    >
                        Precision instruments.
                    </span>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Premiere Pro */}
                    <div className="p-8 bg-surface-low border border-ghost rounded-sm hover:border-ghost-hover transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 rounded bg-surface border border-ghost flex items-center justify-center text-text-main text-xs font-bold">
                                Pr
                            </div>
                            <h4 className="font-body text-sm font-bold uppercase tracking-widest text-text-main">
                                Adobe Premiere Pro
                            </h4>
                        </div>
                        <p className="font-body text-xs leading-relaxed text-text-muted">
                            The backbone of our offline editing process. Premiere affords us the agility to construct
                            complex narrative architectures rapidly, handling mixed formats with robust performance.
                        </p>
                    </div>

                    {/* DaVinci Resolve */}
                    <div className="p-8 bg-surface-low border border-ghost rounded-sm hover:border-ghost-hover transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 rounded bg-surface border border-ghost flex items-center justify-center text-text-main text-xs font-bold">
                                Da
                            </div>
                            <h4 className="font-body text-sm font-bold uppercase tracking-widest text-text-main">
                                DaVinci Resolve
                            </h4>
                        </div>
                        <p className="font-body text-xs leading-relaxed text-text-muted">
                            Where the visual tone is forged. We rely on Resolve's industry-leading node-based color
                            grading to establish the high-contrast, editorial aesthetic that defines our work.
                        </p>
                    </div>

                    {/* After Effects */}
                    <div className="p-8 bg-surface-low border border-ghost rounded-sm hover:border-ghost-hover transition-colors md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 rounded bg-surface border border-ghost flex items-center justify-center text-text-main text-xs font-bold">
                                Ae
                            </div>
                            <h4 className="font-body text-sm font-bold uppercase tracking-widest text-text-main">
                                Adobe After Effects
                            </h4>
                        </div>
                        <p className="font-body text-xs leading-relaxed text-text-muted">
                            Used surgically for motion design, cleanups, and complex compositing. When the narrative
                            requires a visual solution beyond the cut, AE provides the necessary pixel-level control.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
