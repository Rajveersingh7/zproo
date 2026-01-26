"use client";

import {motion, useInView, useAnimation} from "framer-motion";
import {useEffect, useRef, ReactNode} from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = ""
}: RevealOnScrollProps) {
  const ref = useRef(null);
  // Reduce margin on mobile for better performance
  const isInView = useInView(ref, {
    once: true,
    margin: typeof window !== "undefined" && window.innerWidth < 1024 ? "-50px" : "-100px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Simplified animation - just opacity fade for smoother performance
  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
