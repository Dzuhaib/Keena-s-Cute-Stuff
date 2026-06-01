"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PexelsImage from "@/components/ui/PexelsImage";
import { useRef } from "react";
import { LUXURY_EASE_OUT, revealAnimation, cn } from "@/lib/utils";

const signaturePieces = [
  {
    title: "The Monolith Handbag",
    category: "Handbags",
    description: "An architectural masterpiece hand-carved from structural leather. Designed to be a silhouette of the future.",
    query: "minimalist luxury leather handbag",
  },
  {
    title: "Luminous Orbit",
    category: "Jewelry",
    description: "Floating spheres of 18k rose gold and captured starlight. A piece that redefines the concept of adornment.",
    query: "modern luxury gold jewelry",
  },
  {
    title: "Avant-Garde Drape",
    category: "Apparel",
    description: "Fluid silk silhouettes met with technical structural elements. Fashion for the year 2050.",
    query: "avant garde high fashion model",
  },
];

export default function SignatureShowcase() {
  return (
    <section className="bg-luxury-black text-luxury-ivory overflow-hidden">
      {/* Section Header */}
      <div className="container-custom py-20 md:py-32 border-b border-luxury-ivory/5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <motion.p 
            variants={revealAnimation}
            className="text-luxury-roseGold text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 md:mb-8 font-semibold"
          >
            The Masterpieces
          </motion.p>
          <motion.h2 
            variants={revealAnimation}
            className="text-4xl md:text-8xl lg:text-9xl font-serif leading-[0.9]"
          >
            Signature <br />
            <span className="italic">Pieces</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Alternating Sections */}
      {signaturePieces.map((piece, index) => (
        <SignatureSection key={piece.title} piece={piece} index={index} />
      ))}
    </section>
  );
}

function SignatureSection({ piece, index }: { piece: any; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center py-16 md:py-20 border-b border-luxury-ivory/5"
    >
      <div className="container-custom grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className={cn("order-2", isEven ? "lg:order-1" : "lg:order-2")}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: LUXURY_EASE_OUT }}
            className="relative aspect-[3/4] overflow-hidden bg-luxury-charcoal shadow-2xl"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] -top-[10%]">
              <PexelsImage
                query={piece.query}
                alt={piece.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-luxury-black/10 group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
        </div>

        <div className={cn("order-1 space-y-6 md:space-y-8", isEven ? "lg:order-2" : "lg:order-1")}>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.p 
              variants={revealAnimation}
              className="text-[10px] uppercase tracking-[0.4em] text-luxury-roseGold font-medium mb-3 md:mb-4"
            >
              {piece.category} — 00{index + 1}
            </motion.p>
            <motion.h3 
              variants={revealAnimation}
              className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight"
            >
              {piece.title}
            </motion.h3>
            <motion.p 
              variants={revealAnimation}
              className="text-sm md:text-lg text-luxury-ivory/60 font-light leading-relaxed max-w-md mb-8 md:mb-12"
            >
              {piece.description}
            </motion.p>
            <motion.div variants={revealAnimation}>
              <button className="luxury-link text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium pb-2 border-b border-luxury-roseGold/30 hover:border-luxury-roseGold transition-colors">
                View Details
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
