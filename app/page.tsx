import Link from "next/link";
import Button from "@/components/Button";
import { PROCESS_STEPS } from "./constants";
import { getSocialLinks } from "./utility";

function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center pt-24 px-6 md:px-12 lg:px-24 overflow-hidden ">
            {/* Container for Split Layout */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                {/* -----------------------------------------
            LEFT SIDE: Tagline & CTAs
            ----------------------------------------- */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                    <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[1.05] mb-6">
                        Crafting <span className="text-brand drop-shadow-glow">Cinematic</span>{" "}
                        <br className="hidden md:block" />
                        Stories.
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
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
                <div className="w-full relative z-10 mt-6 md:mt-0">
                    <VerticalVideoEmbed url={"https://www.youtube.com/embed/stTMvfFTLzg"} />
                </div>
            </div>

            {/* Decorative background ambient light */}
            <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-brand opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    );
}

function OurProcessSection() {
    return (
        <section className="py-15 px-6 md:px-12 md:py-24 lg:px-24 bg-transparent border-y border-gray-200">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-text-main mb-16">
                    Our Process
                </h2>

                {/* Changed to flex-col on mobile, grid on md+ */}
                <div className="relative flex flex-col md:grid md:grid-cols-5 gap-10 md:gap-8">
                    {/* Mobile-only vertical connector line */}
                    {/* left-6 centers it exactly behind the w-12 (48px) circle */}
                    <div className="absolute top-6 bottom-6 left-6 w-[1px] bg-gray-200 md:hidden z-0"></div>

                    {PROCESS_STEPS.map((item, index) => (
                        <div
                            key={item.step}
                            className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center group"
                        >
                            {/* Desktop-only horizontal connector line */}
                            {index < PROCESS_STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-gray-200 group-hover:bg-brand transition-colors z-0"></div>
                            )}

                            {/* Number Circle */}
                            <div className="relative z-10 shrink-0 w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center font-heading text-sm text-text-muted mr-6 md:mr-0 md:mb-6 group-hover:border-brand group-hover:text-brand transition-all">
                                {item.step}
                            </div>

                            {/* Text Block (Title & Subtext) */}
                            {/* pt-2 on mobile shifts the title down slightly so it aligns perfectly parallel with the number */}
                            <div className="flex flex-col pt-2 md:pt-0">
                                <h3 className="font-heading text-lg uppercase tracking-wider text-text-main mb-2 md:mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-xs text-text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="primary" href="/services">
                        Explore Services
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FeaturedSection() {
    return (
        <section id="work" className="py-15 px-6 md:px-12 md:py-24 lg:px-24 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-4 md:mb-12 border-b border-ghost pb-4 md:pb-6">
                    <h2 className="font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-text-main">
                        Featured Work
                    </h2>
                    <Link
                        href="/gallery"
                        className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted hover:text-brand transition-colors"
                    >
                        View All Archive →
                    </Link>
                </div>

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project 1 (Tall) */}
                    <div className="relative group rounded-xl overflow-hidden  border-ghost  cursor-pointer md:col-span-1 md:row-span-2">
                        <VerticalVideoEmbed vertical={true} url={"https://www.youtube.com/embed/ffuWFlS3riE"} />
                    </div>

                    {/* Project 2 (Square) */}
                    <div className="relative group rounded-xl overflow-hidden  cursor-pointer">
                        <VerticalVideoEmbed url={"https://www.youtube.com/embed/x9WoMswT5E8"} />
                    </div>

                    {/* Project 3 (Square) */}
                    <div className="relative group rounded-xl overflow-hidden  cursor-pointer">
                        <VerticalVideoEmbed url={"https://www.youtube.com/embed/hcfCX-ioMLI"} />
                    </div>

                    {/* Project 4 (Tall) */}
                    <div className="relative group rounded-xl overflow-hidden  cursor-pointer md:col-span-1 lg:col-span-2 min-h-[300px]">
                        <VerticalVideoEmbed url={"https://www.youtube.com/embed/fZoRKnToIew"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function AboutTlpSection() {
    return (
        <section className="py-15 px-6 md:px-12 md:py-24 lg:px-24 bg-background">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
                <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight text-text-main mb-6">
                        About TLP
                    </h2>

                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                        At {process.env.NEXT_PUBLIC_BRAND_NAME}, we pair sophisticated technical precision with a deep
                        understanding of the story.
                    </p>

                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                        We believe that the best collaborations are built on transparency and clear communication. From
                        initial concept to the final frame, we work closely with you to ensure every edit aligns with
                        your objective—delivering a final product that doesn’t just meet the brief, but elevates it.
                    </p>

                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                        Your vision deserves more than just an edit,
                        <br className="inline md:hidden" />
                        <span className="font-bold text-text-main"> it deserves a narrative.</span>
                    </p>
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

                <div className="aspect-video rounded-2xl overflow-hidden border border-ghost shadow-ambient bg-surface">
                    <VerticalVideoEmbed url={"https://www.youtube.com/embed/x9WoMswT5E8"} />
                </div>
            </div>
        </section>
    );
}

function VerticalVideoEmbed({ vertical = false, url = "" }: { vertical?: boolean; url: string }) {
    return (
        <div
            className={`${vertical ? "aspect-9/16" : "aspect-video"} rounded-xl overflow-hidden border border-gray-200 shadow-xl bg-surface`}
        >
            <iframe
                className="w-full h-full"
                src={url}
                title="YouTube Vertical Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-text-main font-body ">
            <HeroSection />
            <FeaturedSection />
            <OurProcessSection />
            <AboutTlpSection />
            <section className="py-15 px-15 md:px-6 text-center border-t border-ghost ">
                <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-text-main mb-6">
                    Ready To Start?
                </h2>
                <p className="text-text-muted text-sm mb-10 max-w-md mx-auto">
                    Transform your raw footage into a cinematic narrative that commands attention and drives results.
                </p>
                <Button variant="primary" href="/contact">
                    Let's Collaborate
                </Button>
            </section>
        </div>
    );
}
