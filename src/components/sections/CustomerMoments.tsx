"use client";

import { motion } from "framer-motion";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation, cn } from "@/lib/utils";

const moments = [
  {
    query: "luxury fashion street style",
    size: "tall",
  },
  {
    query: "high end jewelry lifestyle",
    size: "square",
  },
  {
    query: "luxury handbag lifestyle",
    size: "wide",
  },
  {
    query: "modern boutique interior",
    size: "tall",
  },
  {
    query: "fashion model editorial",
    size: "square",
  },
  {
    query: "luxury watch close up",
    size: "wide",
  },
];

export default function CustomerMoments() {
  return (
    <section className="py-32 bg-luxury-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.p 
            variants={revealAnimation}
            className="text-[10px] uppercase tracking-[0.5em] mb-4 text-luxury-roseGold font-semibold"
          >
            Social Identity
          </motion.p>
          <motion.h2 
            variants={revealAnimation}
            className="text-5xl md:text-7xl font-serif"
          >
            Customer <span className="italic">Moments</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[350px]">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: LUXURY_EASE_OUT }}
              className={cn(
                "relative overflow-hidden group bg-luxury-ivory",
                moment.size === "tall" ? "row-span-2" : "",
                moment.size === "wide" ? "col-span-2" : ""
              )}
            >
              <PexelsImage
                query={moment.query}
                alt={`Customer Moment ${index + 1}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-luxury-ivory text-[10px] uppercase tracking-[0.3em] font-medium border border-luxury-ivory/30 px-6 py-3 backdrop-blur-sm">
                  View Story
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
