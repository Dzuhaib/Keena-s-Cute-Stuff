"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn, LUXURY_EASE_OUT } from "@/lib/utils";

interface LuxuryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  type?: "button" | "submit";
}

export default function LuxuryButton({
  children,
  onClick,
  className,
  variant = "primary",
  type = "button",
}: LuxuryButtonProps) {
  const variants = {
    primary: "bg-luxury-black text-luxury-ivory hover:bg-luxury-charcoal",
    outline: "border border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-ivory",
    ghost: "text-luxury-black hover:bg-luxury-charcoal/10",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.16, ease: LUXURY_EASE_OUT }}
      className={cn(
        "px-8 py-4 text-sm uppercase tracking-widest transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
