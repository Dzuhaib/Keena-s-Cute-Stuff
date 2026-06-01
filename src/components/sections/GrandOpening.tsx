"use client";

import { motion } from "framer-motion";
import PexelsImage from "@/components/ui/PexelsImage";
import { revealAnimation, LUXURY_EASE_OUT } from "@/lib/utils";
import LuxuryButton from "@/components/ui/LuxuryButton";

const schedule = [
  { time: "2:00 PM", event: "VIP Customers Exclusive Access" },
  { time: "3:30 PM", event: "Grand Ribbon Cutting Ceremony" },
  { time: "4:00 PM", event: "Shopping, Music & Giveaways" },
];

export default function GrandOpening() {
  return (
    <section className="py-20 md:py-32 bg-luxury-black text-luxury-ivory overflow-hidden relative">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 grayscale hover:grayscale-0 transition-all duration-1000">
        <PexelsImage
          query="luxury event party gala"
          alt="Luxury Event Atmosphere"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: Event Details */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
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
              className="text-luxury-roseGold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-8 font-semibold"
            >
              Exclusive Invitation
            </motion.p>
            
            <motion.h2 
              variants={revealAnimation}
              className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 leading-tight md:leading-[1.1]"
            >
              The Grand <br />
              <span className="italic">Opening Event</span>
            </motion.h2>

            <motion.div variants={revealAnimation} className="space-y-6 md:space-y-8 mb-12 md:mb-16">
              <div className="flex items-start gap-4 md:gap-6 border-b border-luxury-ivory/10 pb-6 md:pb-8">
                <div className="text-3xl md:text-4xl font-serif text-luxury-roseGold">13</div>
                <div>
                  <h4 className="text-lg md:text-xl font-serif mb-1">June 2026</h4>
                  <p className="text-xs md:text-sm text-luxury-ivory/60">Mark your calendar for an unforgettable luxury experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-6 border-b border-luxury-ivory/10 pb-6 md:pb-8">
                <div className="text-lg md:text-xl font-serif text-luxury-roseGold uppercase tracking-widest pt-1">Location</div>
                <div>
                  <h4 className="text-lg md:text-xl font-serif mb-1">29 Chester Pike</h4>
                  <p className="text-xs md:text-sm text-luxury-ivory/60">Collingdale, PA — The new heart of futuristic fashion.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={revealAnimation}>
              <LuxuryButton className="w-full sm:w-auto bg-luxury-ivory text-luxury-black hover:bg-luxury-roseGold hover:text-luxury-ivory transition-colors duration-500">
                RSVP For VIP Access
              </LuxuryButton>
            </motion.div>
          </motion.div>

          {/* Right: Schedule & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: LUXURY_EASE_OUT }}
            className="bg-luxury-charcoal p-8 md:p-16 relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 border-t border-r border-luxury-roseGold/30 -mt-2 -mr-2 md:-mt-4 md:-mr-4" />
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 border-b border-l border-luxury-roseGold/30 -mb-2 -ml-2 md:-mb-4 md:-ml-4" />

            <h3 className="text-xl md:text-2xl font-serif mb-8 md:mb-12 italic">Event Schedule</h3>
            
            <div className="space-y-8 md:space-y-10">
              {schedule.map((item, index) => (
                <div key={index} className="flex gap-6 md:gap-8 group">
                  <span className="text-luxury-roseGold font-mono text-xs md:text-sm pt-1">{item.time}</span>
                  <div>
                    <h5 className="text-base md:text-lg font-serif group-hover:text-luxury-roseGold transition-colors duration-300">{item.event}</h5>
                    <div className="w-0 group-hover:w-full h-[1px] bg-luxury-roseGold/30 transition-all duration-700 mt-2" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-luxury-ivory/10">
              <p className="text-xs md:text-sm font-light leading-relaxed text-luxury-ivory/70 italic">
                "The first 20 customers will receive a curated VIP Gift Bag containing exclusive signature pieces."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
