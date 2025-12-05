"use client";

import {motion} from "framer-motion";
import {ReactNode, useRef, useState, useEffect} from "react";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function Spotlight({
  children,
  className = "",
  intensity = 0.3
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, ${intensity}), transparent 40%)`
        }}
        animate={{
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0
        }}
      />
      {children}
    </div>
  );
}

