"use client";

import {useEffect} from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Disable scroll restoration to prevent browser from restoring scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Reset scroll position to top on mount/reload
    // Use multiple methods to ensure it works
    if (typeof window !== "undefined") {
      // Immediate reset
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Reset on next frame to catch any layout shifts
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // One more reset after a short delay to catch any late animations
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 50);
      });
    }

    // Enhanced smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add momentum scrolling for iOS
    let lastTouchEnd = 0;
    const handleTouchEnd = (event: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      document.removeEventListener("touchend", handleTouchEnd, false);
    };
  }, []);

  return null;
}

