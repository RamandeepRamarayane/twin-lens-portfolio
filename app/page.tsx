import Link from "next/link";
import Button from "./components/Button";

function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-background">
            {/* Container for Split Layout */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* -----------------------------------------
            LEFT SIDE: Tagline & CTAs
            ----------------------------------------- */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[1.05] mb-8">
                        Crafting <span className="text-brand drop-shadow-glow">Cinematic</span>{" "}
                        <br className="hidden md:block" />
                        Stories.
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                        {/* PRIMARY: Let's Collaborate */}
                        <Button variant="primary" href="/contact">
                            Let's Collaborate
                        </Button>

                        {/* SECONDARY: Featured Edits */}
                        <Button variant="secondary" href="#work">
                            Featured Edits
                        </Button>
                    </div>
                </div>

                {/* -----------------------------------------
            RIGHT SIDE: YouTube Embed
            ----------------------------------------- */}
                <div className="w-full relative z-10">
                    <div className="aspect-video rounded-lg overflow-hidden border border-ghost shadow-ambient bg-surface">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/x9WoMswT5E8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Decorative background ambient light */}
            <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-brand opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
}

function OurProcessSection() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface-low/30 border-y border-ghost">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-text-main mb-12">
                    Our Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface border border-ghost p-8 rounded text-left hover:border-brand/40 transition-colors">
                        <span className="text-brand font-body text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                            01 // Sorting Raw
                        </span>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Culling the raw footage to find the absolute best moments.
                        </p>
                    </div>
                    <div className="bg-surface border border-ghost p-8 rounded text-left hover:border-brand/40 transition-colors">
                        <span className="text-brand font-body text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                            02 // Pacing The Story
                        </span>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Establishing the rhythm and narrative flow to hold attention.
                        </p>
                    </div>
                    <div className="bg-surface border border-ghost p-8 rounded text-left hover:border-brand/40 transition-colors">
                        <span className="text-brand font-body text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                            03 // Delivering The Cut
                        </span>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Final color, sound, and export for any required platform.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <Button variant="primary" href="/contact">
                        Explore Services
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-text-main font-body selection:bg-brand selection:text-brand-dark">
            <HeroSection />
            {/* -----------------------------------------
          2. FEATURED WORK GRID
          ----------------------------------------- */}
            <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12 border-b border-ghost pb-6">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-main">
                            Featured Work
                        </h2>
                        <Link
                            href="/work"
                            className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted hover:text-brand transition-colors"
                        >
                            View All Archive →
                        </Link>
                    </div>

                    {/* Staggered Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project 1 (Tall) */}
                        <div className="relative group rounded-md overflow-hidden bg-surface-low border border-ghost hover:border-brand/50 transition-colors cursor-pointer md:col-span-1 md:row-span-2 min-h-[400px] md:min-h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                            {/* Placeholder for Character Image */}
                            <div className="absolute inset-0 bg-surface-high/20 group-hover:scale-105 transition-transform duration-700"></div>

                            <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                                <div>
                                    <h3 className="font-heading text-2xl font-bold uppercase text-text-main">
                                        Neon Silence
                                    </h3>
                                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted mt-1">
                                        Short Film
                                    </p>
                                </div>
                            </div>

                            {/* Patrick Hand Accent */}
                            <span
                                style={{ fontFamily: "var(--font-hand)" }}
                                className="absolute bottom-24 right-6 text-[#EAB308] text-xl transform -rotate-6 z-30 opacity-90 drop-shadow-md"
                            >
                                Director's Cut
                            </span>
                        </div>

                        {/* Project 2 (Square) */}
                        <div className="relative group rounded-md overflow-hidden bg-surface-low border border-ghost hover:border-brand/50 transition-colors cursor-pointer min-h-[300px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                            {/* Placeholder for Car Image */}
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="font-heading text-xl font-bold uppercase text-text-main">
                                    Velocity & Form
                                </h3>
                                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted mt-1">
                                    Commercial
                                </p>
                            </div>
                        </div>

                        {/* Project 3 (Square) */}
                        <div className="relative group rounded-md overflow-hidden bg-surface-low border border-ghost hover:border-brand/50 transition-colors cursor-pointer min-h-[300px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                            {/* Placeholder for Abstract Image */}
                            <div className="absolute inset-0 bg-orange-900/20 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="font-heading text-xl font-bold uppercase text-text-main">
                                    Avant-Garde Echoes
                                </h3>
                                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted mt-1">
                                    Fashion Film
                                </p>
                            </div>
                        </div>

                        {/* Project 4 (Tall) */}
                        <div className="relative group rounded-md overflow-hidden bg-surface-low border border-ghost hover:border-brand/50 transition-colors cursor-pointer md:col-span-1 lg:col-span-2 min-h-[300px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10"></div>
                            {/* Placeholder for Architecture Image */}
                            <div className="absolute inset-0 bg-cyan-900/20 group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute bottom-6 left-6 z-20">
                                <h3 className="font-heading text-2xl font-bold uppercase text-text-main">
                                    Structures of Light
                                </h3>
                                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-text-muted mt-1">
                                    Documentary
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -----------------------------------------
          3. OUR PROCESS (Bento Rows)
          ----------------------------------------- */}
            <OurProcessSection />
            {/* -----------------------------------------
          4. ABOUT TLP (Mini Section)
          ----------------------------------------- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-main mb-6">
                            About TLP
                        </h2>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                            At Twin Lens Production, our commitment to cinematic precision drives everything we do. We
                            believe that every frame counts and every cut tells a story.
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed">
                            From conceptualization to final render, our approach blends technical mastery with deep
                            narrative intuition, ensuring that your vision translates perfectly to the screen with a
                            distinctly modern, minimalist aesthetic.
                        </p>
                    </div>

                    <div className="aspect-video rounded-lg overflow-hidden border border-ghost shadow-ambient bg-surface">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/x9WoMswT5E8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            {/* -----------------------------------------
          5. BOTTOM CTA
          ----------------------------------------- */}
            <section className="py-32 px-6 text-center border-t border-ghost bg-surface-low/20">
                <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-main mb-6">
                    Ready To Start?
                </h2>
                <p className="text-text-muted text-sm mb-10 max-w-md mx-auto">
                    Bring your next project to life with precision editing and cinematic storytelling.
                </p>

                <Button variant="primary" href="/contact">
                    Let's Collaborate
                </Button>
            </section>
        </div>
    );
}
