"use client";

import { motion } from "motion/react";
import React from "react";

type FadeInMotionProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function FadeInMotion({ children, delay = 0, className = "" }: FadeInMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
