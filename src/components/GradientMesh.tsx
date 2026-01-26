"use client";

import {motion} from "framer-motion";
import {useState, useEffect} from "react";

interface GradientMeshProps {
  className?: string;
  intensity?: number;
}

export function GradientMesh({
  className = "",
  intensity = 1
}: GradientMeshProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce intensity on mobile for better performance
  const mobileIntensity = isMobile ? intensity * 0.5 : intensity;
  const blur1 = isMobile ? 20 : 40;
  const blur2 = isMobile ? 30 : 60;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(2, 132, 199, 0.3), transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(7, 89, 133, 0.3), transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(2, 132, 199, 0.3), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(2, 132, 199, 0.3), transparent 50%)"
          ]
        }}
        transition={{
          duration: isMobile ? 15 : 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: `blur(${blur1 * mobileIntensity}px)`,
          willChange: "background"
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 80% 80%, rgba(3, 105, 161, 0.2), transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(2, 132, 199, 0.2), transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(7, 89, 133, 0.2), transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(3, 105, 161, 0.2), transparent 50%)"
          ]
        }}
        transition={{
          duration: isMobile ? 20 : 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: `blur(${blur2 * mobileIntensity}px)`,
          willChange: "background"
        }}
      />
    </div>
  );
}
