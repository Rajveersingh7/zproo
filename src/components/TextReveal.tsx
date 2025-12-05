"use client";

import {motion} from "framer-motion";
import {ReactNode} from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({children, delay = 0, className = ""}: TextRevealProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

