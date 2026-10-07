"use client";

import { useState, useEffect } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen width against the standard tablet breakpoint (768px)
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Run initial check on mount
        checkIsMobile();

        // Listen for screen resizing (e.g., rotating a device)
        window.addEventListener("resize", checkIsMobile);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    return isMobile;
}
