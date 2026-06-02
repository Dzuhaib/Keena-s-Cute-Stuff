"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-luxury-ivory overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: LUXURY_EASE_OUT }}
            className="relative aspect-square order-2 lg:order-1"
          >
            <Image
              src="/assets/Exterior Storefront Photo.png"
              alt="Keena's Cute Stuff Storefront"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-48 h-60 md:w-64 md:h-80 hidden sm:block">
              <PexelsImage
                query="luxury fashion atelier"
                alt="Detail Shot"
                fill
                className="object-cover border-4 md:border-8 border-luxury-ivory shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="order-1 lg:order-2"
          >
            <motion.p 
              variants={revealAnimation}
              className="text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-luxury-roseGold font-semibold"
            >
              Our Philosophy
            </motion.p>
            
            <motion.h2 
              variants={revealAnimation}
              className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 leading-tight md:leading-[1.1]"
            >
              Crafting the <br />
              <span className="italic">Future of Elegance</span>
            </motion.h2>

            <motion.div variants={revealAnimation} className="space-y-6 md:space-y-8 text-sm md:text-base text-luxury-charcoal/80 font-light leading-relaxed">
              <p>
                Founded on the intersection of avant-garde design and timeless luxury, Keena's Cute Stuff is more than a boutique—it's a curated sanctuary for the modern connoisseur.
              </p>
              <p>
                Every piece in our collection is hand-selected to embody our vision of futuristic sophistication. We believe that fashion is a silent language, and our mission is to provide you with the vocabulary to express your most authentic self.
              </p>
              <p className="italic font-serif text-lg md:text-xl text-luxury-black pt-4">
                "We don't just follow trends; we define the silhouettes of tomorrow."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
