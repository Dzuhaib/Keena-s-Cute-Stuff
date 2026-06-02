"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PexelsImage from "@/components/ui/PexelsImage";
import { LUXURY_EASE_OUT, revealAnimation } from "@/lib/utils";
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone } from "react-icons/hi";

export default function VisitBoutique() {
  return (
    <section className="py-32 bg-luxury-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: LUXURY_EASE_OUT }}
            className="lg:col-span-5 bg-luxury-ivory p-12 md:p-16 relative z-10 lg:-mr-20"
          >
            <motion.p 
              variants={revealAnimation}
              className="text-[10px] uppercase tracking-[0.4em] mb-8 text-luxury-roseGold font-semibold"
            >
              The Boutique
            </motion.p>
            
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Visit Our <br /><span className="italic">Flagship Store</span></h2>

            <div className="space-y-10">
              <div className="flex gap-6">
                <HiOutlineLocationMarker className="text-luxury-roseGold text-2xl shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1">Address</h4>
                  <p className="text-sm text-luxury-charcoal/70 font-light">29 Chester Pike, Collingdale, PA 19023</p>
                </div>
              </div>

              <div className="flex gap-6">
                <HiOutlineClock className="text-luxury-roseGold text-2xl shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1">Store Hours</h4>
                  <p className="text-sm text-luxury-charcoal/70 font-light">Mon - Sat: 11:00 AM - 7:00 PM</p>
                  <p className="text-sm text-luxury-charcoal/70 font-light">Sun: 12:00 PM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6">
                <HiOutlinePhone className="text-luxury-roseGold text-2xl shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1">Contact</h4>
                  <p className="text-sm text-luxury-charcoal/70 font-light">Inquiries: info@keenascutestuff.com</p>
                  <p className="text-sm text-luxury-charcoal/70 font-light">Phone: (215) 555-0123</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: LUXURY_EASE_OUT }}
            className="lg:col-span-7 relative aspect-video lg:aspect-square overflow-hidden"
          >
            <Image
              src="/assets/Interior Shop Photo.webp"
              alt="Keena's Cute Stuff Flagship Boutique Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-luxury-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
