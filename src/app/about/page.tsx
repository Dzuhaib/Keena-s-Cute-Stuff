"use client";

import { motion } from "framer-motion";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <article className="bg-luxury-ivory">
        {/* Narrative Header */}
        <section className="py-24 md:py-32 container-custom pt-40 md:pt-48">
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
            className="max-w-4xl"
          >
            <motion.p 
              variants={revealAnimation}
              className="text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 text-luxury-roseGold font-semibold"
            >
              The Vision
            </motion.p>
            <motion.h1 
              variants={revealAnimation}
              className="text-4xl md:text-8xl font-serif mb-12 md:mb-16 leading-tight md:leading-[1.1]"
            >
              Defining the <br />
              <span className="italic">Luxury of Tomorrow</span>
            </motion.h1>
            <motion.p 
              variants={revealAnimation}
              className="text-lg md:text-3xl font-serif text-luxury-charcoal/80 leading-relaxed font-light italic"
            >
              "We believe that fashion is the ultimate expression of the human spirit—a bridge between our current reality and our futuristic aspirations."
            </motion.p>
          </motion.div>
        </section>

        {/* Brand Story Sections */}
        <section className="py-20 md:py-32 bg-luxury-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: LUXURY_EASE_OUT }}
                className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden shadow-2xl"
              >
                <PexelsImage
                  query="luxury boutique exterior"
                  alt="Inside the Boutique"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="space-y-6 md:space-y-8 text-sm md:text-base text-luxury-charcoal/80 font-light leading-relaxed">
                <h3 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">Our Genesis</h3>
                <p>
                  Keena's Cute Stuff was born from a singular desire: to create a space where fashion meets architectural precision. We saw a world of generic retail and decided to build something different—a curated sanctuary for those who seek the extraordinary.
                </p>
                <p>
                  Our journey began in 2026, with a flagship location in Collingdale, PA. From the outset, we've focused on sourcing pieces that don't just follow trends but define them. We work with artisans who share our commitment to futuristic silhouettes and uncompromising quality.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-sm md:text-base text-luxury-charcoal/80 font-light leading-relaxed">
                <h3 className="text-3xl md:text-4xl font-serif text-luxury-black mb-6">The Boutique Experience</h3>
                <p>
                  Our flagship store at 29 Chester Pike is designed as an immersive gallery. We've removed the clutter of traditional retail to allow the pieces to speak for themselves. The minimalist aesthetic, combined with futuristic accents, creates an environment of calm and focus.
                </p>
                <p>
                  When you visit us, you're not just shopping; you're entering a world curated for every occasion. Our team of stylists is here to help you navigate our collections and find the pieces that resonate with your personal vision of luxury.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: LUXURY_EASE_OUT }}
                className="order-1 lg:order-2 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden shadow-2xl"
              >
                <PexelsImage
                  query="luxury boutique interior showroom"
                  alt="Boutique Architecture"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
