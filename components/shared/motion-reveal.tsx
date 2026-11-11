"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { fadeInUp } from "@/config/motion";
import { cn } from "@/lib/utils";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

function MotionReveal({ className, children, delay = 0, ...props }: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children as React.ReactNode}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeInUp}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { MotionReveal };
