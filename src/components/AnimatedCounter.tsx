"use client";

import {useInView, useMotionValue, useSpring} from "framer-motion";
import {useEffect, useRef} from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = ""
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = useInView(ref, {once: true, margin: "0px"});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }).format(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return <span ref={ref} className={className} />;
}
