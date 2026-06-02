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
    primary: "bg-luxury-roseGold text-luxury-ivory hover:opacity-90",
    outline: "border border-luxury-roseGold text-luxury-roseGold hover:bg-luxury-roseGold hover:text-luxury-ivory",
    ghost: "text-luxury-roseGold hover:bg-luxury-roseGold/10",
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
