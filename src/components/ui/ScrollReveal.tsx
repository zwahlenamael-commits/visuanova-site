import { motion, useInView, UseInViewOptions } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  viewport?: UseInViewOptions;
}

export function ScrollReveal({ 
  children, 
  width = "fit-content",
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.5,
  viewport = { once: true, margin: "-50px" }
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initial = {
    opacity: 0,
    x: 0,
    y: 0,
    ...directionOffset[direction]
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        initial={initial}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
