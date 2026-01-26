"use client";

import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

const pageVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  duration: 0.43
};

export function PageTransition({children}: {children: ReactNode}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="page-transition"
      style={{
        backgroundColor: "transparent",
        minHeight: "100%",
        willChange: "opacity"
      }}
      onAnimationComplete={() => {
        // Remove will-change after animation for better performance
        if (typeof document !== "undefined") {
          const element = document.querySelector(".page-transition");
          if (element) {
            (element as HTMLElement).style.willChange = "auto";
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
