"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation } from "@/lib/utils";

const collections = [
  {
    title: "Handbags",
    subtitle: "Architectural Elegance",
    query: "luxury handbag fashion",
    href: "/handbags",
  },
  {
    title: "Jewelry",
    subtitle: "Timeless Radiance",
    query: "luxury jewelry diamond",
    href: "/jewelry",
  },
  {
    title: "Apparel",
    subtitle: "Future Silhouettes",
    query: "high fashion apparel",
    href: "/apparel",
  },
  {
    title: "Accessories",
    subtitle: "Curated Accents",
    query: "luxury fashion accessories",
    href: "/accessories",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 md:py-32 bg-luxury-ivory">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.p 
            variants={revealAnimation}
            className="text-[10px] uppercase tracking-[0.5em] mb-4 text-luxury-charcoal/60"
          >
            The Collection
          </motion.p>
          <motion.h2 
            variants={revealAnimation}
            className="text-4xl md:text-7xl font-serif"
          >
            Curated <span className="italic">Selection</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: LUXURY_EASE_OUT 
              }}
              className="group"
            >
              <Link href={collection.href} className="block relative aspect-[3/4] overflow-hidden bg-luxury-charcoal">
                <PexelsImage
                  query={collection.query}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Overlay Detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-ivory/60 mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif text-luxury-ivory">
                    {collection.title}
                  </h3>
                  
                  {/* Hover line */}
                  <div className="w-0 group-hover:w-full h-[1px] bg-luxury-roseGold transition-all duration-700 mt-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
