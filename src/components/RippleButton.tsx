"use client";

import {motion} from "framer-motion";
import {ReactNode, useState} from "react";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export function RippleButton({
  children,
  className = "",
  onClick,
  ...props
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    Array<{x: number; y: number; id: number}>
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now()
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          initial={{
            width: 0,
            height: 0,
            left: ripple.x,
            top: ripple.y,
            x: "-50%",
            y: "-50%"
          }}
          animate={{
            width: 300,
            height: 300,
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
