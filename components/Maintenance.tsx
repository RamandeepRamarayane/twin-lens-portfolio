import Image from "next/image";

export default function Maintenance() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
            {/* -----------------------------------------
              BACKGROUND TEXTURE (Subtle dot grid effect)
            ----------------------------------------- */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(var(--color-ghost) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            ></div>

            {/* -----------------------------------------
              MAIN CONTENT CONTAINER
            ----------------------------------------- */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                {/* TLP Logo */}

                <div className="w-30 h-25 md:w-35 md:h-30 mb-8 overflow-hidden flex items-center justify-center rounded-lg">
                    <Image
                        src="/PNG/TLP_1000_nosub.png"
                        alt="Twin Lens Production Logo"
                        width={512}
                        height={512}
                        priority
                        className="scale-140 w-full h-full object-contain drop-shadow-glow transition-transform duration-500 ease-out hover:scale-145 animate-in fade-in duration-700"
                    />
                </div>
                {/* Cinematic Pre-Heading */}
                <p className="font-heading text-[10px] md:text-xs text-text-muted uppercase tracking-[0.3em] font-semibold mb-4">
                    Twin Lens Production
                </p>

                {/* Main Heading */}
                <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-text-main mb-6 leading-[1.1]">
                    Big Changes <br />
                    <span className="text-brand drop-shadow-glow">Coming</span>
                </h1>

                {/* Subtext */}
                <p className="font-body text-base md:text-lg text-text-muted max-w-md mx-auto leading-relaxed mb-12">
                    Stay tuned. We are re-framing the narrative and will be back shortly with an entirely new
                    experience.
                </p>

                {/* Contact Fallback so business doesn't stop */}
                <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                    <p className="font-heading text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                        Need to reach out?
                    </p>
                    <a
                        href="mailto:hello@twinlensproduction.com"
                        className="font-body text-brand hover:text-white transition-colors underline underline-offset-4 decoration-brand/30 hover:decoration-white"
                    >
                        hello@twinlensproduction.com
                    </a>
                </div>
            </div>
        </div>
    );
}
