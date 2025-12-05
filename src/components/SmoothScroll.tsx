"use client";

import {useEffect} from "react";

export function SmoothScroll() {
  useEffect(() => {
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

