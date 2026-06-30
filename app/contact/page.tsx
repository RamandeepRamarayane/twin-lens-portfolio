import Button from "../components/Button";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-24 md:py-32 overflow-hidden relative">
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

            <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
                {/* -----------------------------------------
            HEADER SECTION
            ----------------------------------------- */}
                <div className="text-center mb-12 w-full">
                    <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-[1.1] mb-6 tracking-tight">
                        Let's Frame <br />
                        <span className="text-brand drop-shadow-glow">The Narrative</span>
                    </h1>
                    <p className="text-text-muted font-body text-sm md:text-base max-w-md mx-auto leading-relaxed">
                        Tell me about your project. From color grades to full editorial cuts, I'm ready to collaborate.
                    </p>
                </div>

                {/* -----------------------------------------
            FORM CONTAINER
            ----------------------------------------- */}
                <div className="w-full bg-surface-low border border-ghost rounded-xl p-8 md:p-12 shadow-ambient backdrop-blur-sm">
                    <form className="flex flex-col gap-10 font-body">
                        {/* Row 1: Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main pb-2 transition-colors w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main pb-2 transition-colors w-full"
                                />
                            </div>
                        </div>

                        {/* Row 2: Project Details */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                Project Details (Scope, Genre, Needs)
                            </label>
                            <textarea
                                rows={1}
                                className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main pb-2 transition-colors w-full resize-none"
                            ></textarea>
                        </div>

                        {/* Row 3: Timeline & Budget */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Timeline / Deadline
                                </label>
                                <input
                                    type="text"
                                    className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main pb-2 transition-colors w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-2 relative">
                                <label className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold">
                                    Estimated Budget
                                </label>
                                <select className="bg-transparent border-b border-ghost focus:border-brand outline-none text-text-main pb-2 transition-colors w-full appearance-none cursor-pointer">
                                    <option value="" className="bg-surface text-text-muted">
                                        Select a range
                                    </option>
                                    <option value="1k-3k" className="bg-surface">
                                        $1,000 - $3,000
                                    </option>
                                    <option value="3k-5k" className="bg-surface">
                                        $3,000 - $5,000
                                    </option>
                                    <option value="5k+" className="bg-surface">
                                        $5,000+
                                    </option>
                                </select>
                                {/* Custom Dropdown Arrow */}
                                <div className="absolute right-0 bottom-3 pointer-events-none text-text-muted">
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

                        {/* Submit Button */}

                        <Button
                            variant={"primary"}
                            className=" min-w-[50%] max-w-full md:max-w-[50%] flex items-center justify-center mx-auto"
                            type="submit"
                        >
                            Say Hi
                        </Button>
                    </form>
                </div>

                {/* -----------------------------------------
            FOOTER / SOCIAL LINKS
            ----------------------------------------- */}
                <div className="mt-16 text-center flex flex-col items-center">
                    <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] mb-6 font-semibold">
                        Or Find Me On
                    </p>
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
            </div>
        </div>
    );
}
