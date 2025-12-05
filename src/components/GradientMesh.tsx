"use client";

import {motion} from "framer-motion";

interface GradientMeshProps {
  className?: string;
  intensity?: number;
}

export function GradientMesh({className = "", intensity = 1}: GradientMeshProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3), transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.3), transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.3), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.3), transparent 50%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: `blur(${40 * intensity}px)`
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.2), transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.2), transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(20, 184, 166, 0.2), transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.2), transparent 50%)"
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: `blur(${60 * intensity}px)`
        }}
      />
    </div>
  );
}

