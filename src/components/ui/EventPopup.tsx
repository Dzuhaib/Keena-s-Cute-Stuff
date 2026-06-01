"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PexelsImage from "./PexelsImage";
import LuxuryButton from "./LuxuryButton";
import { LUXURY_EASE_OUT } from "@/lib/utils";

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("hasSeenEventPopup");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEventPopup", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-luxury-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.6, ease: LUXURY_EASE_OUT }}
            className="relative w-full max-w-4xl bg-luxury-ivory overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 p-2 text-luxury-black hover:text-luxury-roseGold transition-colors md:text-luxury-ivory"
            >
              <X size={24} />
            </button>

            {/* Image Side */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <PexelsImage
                query="luxury fashion gala event"
                alt="Grand Opening Celebration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-luxury-black/20" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-luxury-ivory text-luxury-black">
              <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-roseGold font-semibold mb-4">
                Exclusive Invitation
              </p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                The Grand <br />
                <span className="italic">Opening</span>
              </h2>
              <p className="text-sm text-luxury-charcoal/70 font-light leading-relaxed mb-8">
                Be the first to experience the future of luxury. Join us for an evening of avant-garde fashion, curated music, and signature refreshments at our new Collingdale flagship.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 border-b border-luxury-black/5 pb-4">
                  <span className="text-xl font-serif text-luxury-roseGold">13</span>
                  <span className="text-xs uppercase tracking-widest">June 2026</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-luxury-roseGold">Location</span>
                  <span className="text-xs uppercase tracking-widest">29 Chester Pike, Collingdale</span>
                </div>
              </div>

              <LuxuryButton 
                onClick={closePopup}
                className="w-full"
              >
                RSVP FOR VIP ACCESS
              </LuxuryButton>
              
              <button 
                onClick={closePopup}
                className="mt-6 text-[10px] uppercase tracking-[0.3em] text-luxury-charcoal/40 hover:text-luxury-black transition-colors"
              >
                Remind me later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
