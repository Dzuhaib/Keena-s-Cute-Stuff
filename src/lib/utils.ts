import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LUXURY_EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
export const LUXURY_EASE_IN_OUT: [number, number, number, number] = [0.77, 0, 0.175, 1];

export const staggerTransition = (staggerChildren: number = 0.05, delayChildren: number = 0) => ({
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

import { Variants } from "framer-motion";

export const revealAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE_OUT,
    }
  },
};
