import Button from "@/components/Button";

export default function Services() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden">
            {/* -----------------------------------------
          HEADER SECTION (Cinematic Layering)
          ----------------------------------------- */}
            <div className="relative w-full max-w-5xl text-center  mb-15 md:mb-24 flex flex-col items-center">
                {/* Foreground Typography */}
                <h1 className="relative z-10 font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-text-main mb-6 leading-[1.05]">
                    Technical
                    <span className="text-brand drop-shadow-glow"> Precision.</span>
                    <br />
                    <span className="text-[#a87b1e]">Creative</span> Vision.
                </h1>

                <p className="relative z-10 font-body text-text-muted text-sm md:text-base leading-relaxed max-w-2xl mt-4">
                    End-to-end post-production services designed to elevate narrative and commercial video work. We
                    treat every frame as an essential part of the story.
                </p>
            </div>

            {/* -----------------------------------------
          BENTO GRID: SERVICES
          ----------------------------------------- */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 mb-32 relative z-10">
                {/* Card 1: Commercial Editing (Spans 2 columns) */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-12 overflow-hidden hover:border-ghost-hover transition-all duration-500 lg:col-span-2 flex flex-col justify-between min-h-[400px]">
                    {/* Faint Background Image Simulator */}
                    <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-to-tl from-surface-high/20 to-transparent pointer-events-none z-0"></div>

                    <div className="relative z-10 mb-12">
                        <span className="font-body text-[10px] font-bold tracking-[0.2em] text-brand uppercase mb-4 block">
                            01 // Post-Production
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-4">
                            Commercial <br /> Editing
                        </h2>
                        <p className="font-body text-sm text-text-muted leading-relaxed max-w-md">
                            Transforming raw footage into cohesive, rhythmic narratives. We specialize in fast-paced
                            commercial cuts, brand documentaries, and narrative short forms.
                        </p>
                    </div>

                    <div className="relative z-10">
                        <h3 className="font-body text-[10px] font-bold tracking-[0.15em] text-brand uppercase mb-4">
                            Deliverables
                        </h3>
                        <ul className="space-y-3 font-body text-xs text-text-muted">
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 rounded-full border border-brand flex items-center justify-center text-brand">
                                    ▶
                                </span>
                                Offline & Online Edits
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 rounded-2xl border border-brand flex items-center justify-center text-brand">
                                    ◩
                                </span>
                                Social Media Cut-downs
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-brand">ılı</span>
                                Sound Design & Mix Prep
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Card 2: Color Grading (Spans 1 column) */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-10 hover:border-ghost-hover transition-all duration-500 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <span className="font-body text-[10px] font-bold tracking-[0.2em] text-[#a87b1e] uppercase mb-4 block">
                            02 // Finishing
                        </span>
                        <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-text-main mb-4 leading-none">
                            Color <br /> Grading
                        </h2>
                        <p className="font-body text-sm text-text-muted leading-relaxed">
                            Crafting visual tone and mood. Our grading suite ensures color accuracy and creative
                            expression, establishing the defining look for your project.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-ghost">
                        <ul className="space-y-4 font-body text-xs text-text-muted">
                            <li className="flex items-center gap-3">
                                <span className="text-[#a87b1e]">◐</span>
                                Look Development
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#a87b1e]">◧</span>
                                Shot Matching
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#a87b1e] font-bold text-[10px]">HDR</span>
                                HDR Delivery
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Card 3: Motion Graphics (Spans full width - 3 columns) */}
                <div className="relative group bg-surface-low border border-ghost rounded-2xl p-8 md:p-12 hover:border-ghost-hover transition-all duration-500 lg:col-span-3 flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                    <div className="flex-1">
                        <span className="font-body text-[10px] font-bold tracking-[0.2em] text-brand uppercase mb-4 block">
                            03 // Animation
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-main mb-4">
                            Motion Graphics
                        </h2>
                        <p className="font-body text-sm text-text-muted leading-relaxed max-w-xl">
                            Elevating narratives with kinetic typography, 2D animations, and seamless UI/UX screen
                            replacements. We integrate graphics invisibly or make them the star of the show.
                        </p>
                    </div>

                    <div className="w-full md:w-auto md:border-l md:border-ghost md:pl-16">
                        <ul className="space-y-4 font-body text-xs text-text-muted">
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 border border-brand rounded-full flex items-center justify-center text-brand">
                                    ∞
                                </span>
                                Kinetic Typography
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 border border-brand flex items-center justify-center text-brand">
                                    ⬡
                                </span>
                                Screen Tracking & Comp
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-4 h-4 border border-brand flex items-center justify-center text-brand">
                                    T
                                </span>
                                Title Sequences
                            </li>
                        </ul>
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
