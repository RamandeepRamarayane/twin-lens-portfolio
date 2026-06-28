export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-24 md:py-32 overflow-hidden relative">
      
      {/* -----------------------------------------
          BACKGROUND TEXTURE (Subtle dot grid effect)
          ----------------------------------------- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-ghost) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

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
                  <option value="" className="bg-surface text-text-muted">Select a range</option>
                  <option value="1k-3k" className="bg-surface">$1,000 - $3,000</option>
                  <option value="3k-5k" className="bg-surface">$3,000 - $5,000</option>
                  <option value="5k+" className="bg-surface">$5,000+</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="absolute right-0 bottom-3 pointer-events-none text-text-muted">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="mt-4 w-full bg-brand hover:bg-brand-dim text-brand-dark font-heading text-sm font-bold uppercase tracking-[0.15em] py-5 rounded transition-all shadow-glow flex items-center justify-center gap-3 group"
            >
              Initialize Transmission
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
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
            {/* Instagram / Camera Icon */}
            <a href="#" className="hover:text-brand transition-colors hover:shadow-glow rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Portfolio / Briefcase Icon */}
            <a href="#" className="hover:text-brand transition-colors hover:shadow-glow rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </a>
            {/* Video / Play Icon */}
            <a href="#" className="hover:text-brand transition-colors hover:shadow-glow rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </a>
            {/* Cinema / Clapperboard Icon */}
            <a href="#" className="hover:text-brand transition-colors hover:shadow-glow rounded-full">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.4-2.2 1.5-2.5l13.5-4c1.1-.3 2.2.4 2.5 1.5l.6 2.4z"></path>
                <path d="m2.6 10.6 17.6-5.2"></path>
                <path d="M3 11l1.9 5.3c.3 1.1 1.4 1.7 2.5 1.3L21 12.8"></path>
                <path d="m8.5 4.5 3 10"></path>
                <path d="m13.5 3 3 10"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}