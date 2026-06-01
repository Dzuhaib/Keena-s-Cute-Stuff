"use client";

import { motion } from "framer-motion";
import { revealAnimation, LUXURY_EASE_OUT } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import LuxuryButton from "@/components/ui/LuxuryButton";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <article className="bg-luxury-ivory min-h-screen pt-48 pb-32">
        <div className="container-custom">
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
            className="mb-32"
          >
            <motion.p 
              variants={revealAnimation}
              className="text-[10px] uppercase tracking-[0.5em] mb-8 text-luxury-roseGold font-semibold"
            >
              Contact Us
            </motion.p>
            <motion.h1 
              variants={revealAnimation}
              className="text-5xl md:text-8xl font-serif mb-12 leading-[0.9]"
            >
              Let's Start a <br /><span className="italic">Conversation</span>
            </motion.h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-32">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: LUXURY_EASE_OUT, delay: 0.4 }}
            >
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-luxury-charcoal/40">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-roseGold transition-colors font-light" placeholder="Alexander McQueen" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-luxury-charcoal/40">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-roseGold transition-colors font-light" placeholder="alexander@luxury.com" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-luxury-charcoal/40">Subject</label>
                  <select className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-roseGold transition-colors font-light appearance-none">
                    <option>General Inquiry</option>
                    <option>VIP Membership</option>
                    <option>Grand Opening RSVP</option>
                    <option>Product Information</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-luxury-charcoal/40">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-luxury-black/10 py-4 outline-none focus:border-luxury-roseGold transition-colors font-light resize-none" placeholder="How can we assist you in your luxury journey?"></textarea>
                </div>

                <LuxuryButton className="w-full">Send Message</LuxuryButton>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: LUXURY_EASE_OUT, delay: 0.6 }}
              className="space-y-20"
            >
              <div className="space-y-12">
                <div className="flex gap-8">
                  <HiOutlineLocationMarker className="text-3xl text-luxury-roseGold shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif mb-4">Flagship Boutique</h3>
                    <p className="text-luxury-charcoal/60 font-light leading-relaxed">
                      29 Chester Pike, Collingdale, PA 19023 <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <HiOutlineMail className="text-3xl text-luxury-roseGold shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif mb-4">Email Inquiries</h3>
                    <p className="text-luxury-charcoal/60 font-light">General: info@keenascutestuff.com</p>
                    <p className="text-luxury-charcoal/60 font-light">VIP Services: concierge@keenascutestuff.com</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <HiOutlinePhone className="text-3xl text-luxury-roseGold shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif mb-4">Telephone</h3>
                    <p className="text-luxury-charcoal/60 font-light">(215) 555-0123</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-luxury-white border border-luxury-black/5 space-y-8">
                <h4 className="text-sm uppercase tracking-[0.3em] font-semibold text-luxury-roseGold">Social Identity</h4>
                <div className="flex flex-col gap-4">
                  <a href="#" className="luxury-link text-xl font-serif italic">@keenascutestuff</a>
                  <a href="#" className="luxury-link text-xl font-serif italic">#keenasluxury</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
