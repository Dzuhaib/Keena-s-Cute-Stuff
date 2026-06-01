"use client";

import { motion } from "framer-motion";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation, cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface CollectionItem {
  title: string;
  description: string;
  query: string;
  price?: string;
}

interface CollectionTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  items: CollectionItem[];
  heroQuery: string;
}

export default function CollectionTemplate({
  title,
  subtitle,
  description,
  items,
  heroQuery,
}: CollectionTemplateProps) {
  return (
    <>
      <Navbar />
      <article className="bg-luxury-ivory">
        {/* Header Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <PexelsImage
            query={heroQuery}
            alt={title}
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-luxury-black/30 md:bg-luxury-black/20" />
          <div className="container-custom relative z-10 text-center text-luxury-ivory px-6">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.p 
                variants={revealAnimation}
                className="text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 font-medium"
              >
                Collection
              </motion.p>
              <motion.h1 
                variants={revealAnimation}
                className="text-5xl md:text-9xl font-serif mb-6 md:mb-8 leading-tight"
              >
                {title}
              </motion.h1>
              <motion.p 
                variants={revealAnimation}
                className="max-w-2xl mx-auto text-xs md:text-base text-luxury-ivory/80 leading-relaxed font-light italic"
              >
                {subtitle}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 md:py-32 bg-luxury-white">
          <div className="container-custom max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: LUXURY_EASE_OUT }}
              className="text-lg md:text-2xl font-serif text-luxury-charcoal/80 leading-relaxed font-light px-4"
            >
              {description}
            </motion.p>
          </div>
        </section>

        {/* Items Grid */}
        <section className="pb-20 md:pb-32 container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-32">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: LUXURY_EASE_OUT }}
                className={cn(
                  "flex flex-col group",
                  index % 2 !== 0 ? "md:mt-32" : ""
                )}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-luxury-ivory mb-8 md:mb-12">
                  <PexelsImage
                    query={item.query}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxury-black/0 group-hover:bg-luxury-black/5 transition-colors duration-700" />
                </div>
                <div className="max-w-md px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{item.title}</h3>
                  <p className="text-sm text-luxury-charcoal/60 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                  <div className="w-12 h-[1px] bg-luxury-roseGold mx-auto md:mx-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
