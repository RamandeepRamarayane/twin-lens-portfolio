import Button from "@/components/Button"; // Make sure to import your existing Button component

export default function Gallery() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 py-20 md:py-32 overflow-hidden relative">
            {/* -----------------------------------------
              BACKGROUND TEXTURE (Subtle dot grid effect)
              Keeps it consistent with your Contact page
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
            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
                {/* Floating Film/Camera Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-ghost bg-surface-low/50 backdrop-blur-sm flex items-center justify-center mb-8 shadow-ambient animate-pulse-slow">
                    <svg
                        className="w-8 h-8 text-brand drop-shadow-glow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                    </svg>
                </div>

                {/* Cinematic Heading */}
                <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-[0.3em] font-semibold mb-4">
                    Status Update
                </p>
                <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-text-main mb-6 leading-[1.1]">
                    In <span className="text-brand drop-shadow-glow">Post</span>
                </h1>

                {/* Subtext */}
                <p className="font-body text-sm md:text-base text-text-muted max-w-md mx-auto leading-relaxed mb-12">
                    The gallery is currently in the editing bay. I am curating a collection of my finest cinematic cuts
                    and commercial narratives to showcase here.
                </p>

                {/* Call to Action (Return Home) */}
                <Button variant="primary" href="/">
                    Return to Set
                </Button>
            </div>
        </div>
    );
}
