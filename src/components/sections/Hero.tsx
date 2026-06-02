"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import PexelsImage from "@/components/ui/PexelsImage";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { LUXURY_EASE_OUT, revealAnimation } from "@/lib/utils";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const rsvpLink = "https://docs.google.com/forms/d/e/1FAIpQLSfqkcVqGLwHq9GR36-rxEX6kI0gCe3h8xz1w7h1IpoNHImE7g/viewform";

  return (
    <section 
      ref={containerRef}
      className="relative h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden bg-luxury-black"
    >
      {/* Background Image with Parallax & Scale */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <PexelsImage
          query="luxury fashion high end editorial minimalist"
          alt="Keena's Cute Stuff Luxury Fashion"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/20 to-luxury-black/80" />
      </motion.div>

      {/* Content - Precision Centering with Header/Footer Clearance */}
      <div className="container-custom relative z-10 text-center text-luxury-ivory pt-32 pb-24 md:pt-40 md:pb-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col items-center"
        >
          <motion.p 
            variants={revealAnimation}
            className="text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 md:mb-10 font-semibold text-luxury-roseGold"
          >
            ESTABLISHED 2026
          </motion.p>
          
          <motion.h1 
            variants={revealAnimation}
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-serif leading-[0.8] mb-10 md:mb-14"
          >
            Luxury <br />
            <span className="italic">Redefined.</span>
          </motion.h1>

          <motion.p 
            variants={revealAnimation}
            className="max-w-md md:max-w-xl mx-auto text-xs md:text-base text-luxury-ivory/80 leading-relaxed mb-12 md:mb-16 font-light px-6"
          >
            Curating the future of boutique fashion. Discover architectural accessories, 
            celestial jewelry, and avant-garde apparel.
          </motion.p>

          <motion.div 
            variants={revealAnimation}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 w-full px-10"
          >
            <a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <LuxuryButton className="w-full min-w-[220px] py-6 text-xs tracking-[0.3em]">
                RSVP NOW
              </LuxuryButton>
            </a>
            <Link href="/about" className="w-full sm:w-auto">
              <LuxuryButton variant="outline" className="w-full min-w-[220px] py-6 text-xs tracking-[0.3em] border-luxury-ivory text-luxury-ivory hover:bg-luxury-ivory hover:text-luxury-black">
                OUR STORY
              </LuxuryButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-6"
      >
        <span className="text-[7px] md:text-[8px] uppercase tracking-[0.5em] text-luxury-ivory/40">Scroll to explore</span>
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-luxury-ivory/0 via-luxury-roseGold/60 to-luxury-ivory/0" />
      </motion.div>
    </section>
  );
}
