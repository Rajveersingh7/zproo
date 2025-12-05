"use client";

import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    scale: 1
  }
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  duration: 0.35
};

export function PageTransition({children}: {children: ReactNode}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      variants={pageVariants}
      transition={pageTransition}
      className="page-transition"
      style={{
        backgroundColor: "transparent",
        minHeight: "100%",
        willChange: "opacity, transform"
      }}
    >
      {children}
    </motion.div>
  );
}
