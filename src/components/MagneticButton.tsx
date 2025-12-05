"use client";

import {motion, useMotionValue, useSpring, useTransform} from "framer-motion";
import {ReactNode, useRef} from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  [key: string]: unknown;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [strength * 7.5, -strength * 7.5]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-strength * 7.5, strength * 7.5]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
