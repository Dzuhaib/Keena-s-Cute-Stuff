"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn, LUXURY_EASE_OUT } from "@/lib/utils";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { RiInstagramLine, RiFacebookCircleLine } from "react-icons/ri";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Handbags", href: "/handbags" },
  { name: "Jewelry", href: "/jewelry" },
  { name: "Apparel", href: "/apparel" },
  { name: "Accessories", href: "/accessories" },
  { name: "About", href: "/about" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/keenascutestuff/", icon: RiInstagramLine },
  { name: "Facebook", href: "https://www.facebook.com/keena.woods/", icon: RiFacebookCircleLine },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: LUXURY_EASE_OUT }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-700",
          isOpen 
            ? "bg-transparent" 
            : scrolled 
              ? "bg-luxury-ivory/95 backdrop-blur-md border-b border-luxury-black/5 py-2 shadow-sm" 
              : "bg-transparent py-6"
        )}
      >
        <div className="container-custom h-12 md:h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className={cn(
              "font-serif text-2xl tracking-tighter hover:opacity-90 transition-all duration-500 px-4 py-1.5 rounded-[10px]",
              !scrolled && !isOpen ? "bg-luxury-roseGold text-luxury-ivory" : "bg-luxury-roseGold text-luxury-ivory"
            )}>
              KEENA'S
            </Link>

            {/* Desktop Socials */}
            <div className="hidden lg:flex items-center gap-4 border-l border-luxury-black/10 pl-8 ml-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-all duration-500 hover:text-luxury-roseGold",
                    !scrolled ? "text-luxury-ivory/70" : "text-luxury-charcoal/60"
                  )}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-500 hover:text-luxury-roseGold",
                  !scrolled ? "text-luxury-ivory/90" : "text-luxury-charcoal"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 -mr-2 lg:hidden transition-all duration-500",
              !scrolled && !isOpen ? "text-luxury-ivory" : "text-luxury-black"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt4 size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-luxury-ivory flex flex-col items-center justify-center p-8"
          >
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-col items-center space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 10 }
                  }}
                  transition={{ duration: 0.5, ease: LUXURY_EASE_OUT }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl md:text-5xl hover:text-luxury-roseGold transition-colors text-luxury-black"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
                }}
                transition={{ delay: 0.6 }}
                className="pt-12 flex flex-col items-center gap-6"
              >
                <div className="flex gap-8">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury-charcoal hover:text-luxury-roseGold transition-colors flex flex-col items-center gap-2"
                    >
                      <social.icon size={32} />
                      <span className="text-[9px] uppercase tracking-widest opacity-50">{social.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
