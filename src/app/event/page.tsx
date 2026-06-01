"use client";

import { motion } from "framer-motion";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import LuxuryButton from "@/components/ui/LuxuryButton";

const schedule = [
  { time: "2:00 PM", title: "VIP Access", description: "Exclusive first look for our VIP members and fashion press." },
  { time: "3:30 PM", title: "Ribbon Cutting", description: "Official opening of our Collingdale flagship boutique." },
  { time: "4:00 PM", title: "Aperitif & Music", description: "Signature cocktails and live ambient electronic sets." },
  { time: "5:00 PM", title: "Signature Giveaway", description: "Unveiling the first 20 VIP Gift Bags for early arrivals." },
];

export default function EventPage() {
  return (
    <>
      <Navbar />
      <article className="bg-luxury-black text-luxury-ivory">
        {/* Cinematic Header */}
        <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
          <PexelsImage
            query="luxury party gala atmosphere"
            alt="Grand Opening Event Atmosphere"
            fill
            className="object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
          
          <div className="container-custom relative z-10 text-center px-6">
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
                className="text-luxury-roseGold text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 md:mb-8 font-semibold"
              >
                The Celebration
              </motion.p>
              <motion.h1 
                variants={revealAnimation}
                className="text-5xl md:text-[10rem] font-serif leading-tight md:leading-[0.9] mb-8 md:mb-12"
              >
                Grand <br /><span className="italic">Opening</span>
              </motion.h1>
              <motion.div 
                variants={revealAnimation}
                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-xl md:text-2xl font-serif italic opacity-80"
              >
                <span>June 13, 2026</span>
                <span className="hidden md:block w-2 h-2 rounded-full bg-luxury-roseGold" />
                <span>2:00 PM — Late</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 md:py-32 bg-luxury-white text-luxury-black">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
              <div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-8 text-luxury-roseGold font-semibold"
                >
                  The Experience
                </motion.p>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 md:mb-12 leading-tight">An Evening of <br /><span className="italic">Pure Sophistication</span></h2>
                <p className="text-sm md:text-base text-luxury-charcoal/70 font-light leading-relaxed max-w-lg mb-10 md:mb-12">
                  Join us for the official unveiling of Keena's Cute Stuff. Our flagship boutique will be transformed into an immersive gallery experience, showcasing our debut collections alongside curated music and refreshments.
                </p>
                <div className="aspect-square md:aspect-[4/3] relative overflow-hidden bg-luxury-ivory shadow-2xl">
                  <PexelsImage
                    query="luxury boutique interior evening"
                    alt="Boutique Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-12 md:space-y-16">
                <h3 className="text-2xl md:text-3xl font-serif italic mb-8 md:mb-12">Event Schedule</h3>
                <div className="space-y-10 md:space-y-12">
                  {schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: LUXURY_EASE_OUT }}
                      className="flex gap-8 md:gap-12 group pb-8 md:pb-12 border-b border-luxury-black/5"
                    >
                      <span className="text-luxury-roseGold font-mono text-xs md:text-sm pt-2 shrink-0">{item.time}</span>
                      <div>
                        <h4 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-luxury-roseGold transition-colors">{item.title}</h4>
                        <p className="text-xs md:text-sm text-luxury-charcoal/60 font-light leading-relaxed max-w-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="pt-8">
                  <LuxuryButton className="w-full">Request Invitation</LuxuryButton>
                  <p className="text-[10px] text-center mt-6 uppercase tracking-[0.2em] text-luxury-charcoal/40 font-medium">
                    Limited Capacity — VIP Members Prioritized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
