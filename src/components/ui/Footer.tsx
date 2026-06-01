import Link from "next/link";

const footerLinks = [
  {
    title: "Collection",
    links: [
      { name: "Handbags", href: "/handbags" },
      { name: "Jewelry", href: "/jewelry" },
      { name: "Apparel", href: "/apparel" },
      { name: "Accessories", href: "/accessories" },
    ],
  },
  {
    title: "Boutique",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "The Event", href: "/event" },
      { name: "Location", href: "/contact" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Shipping Info", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-luxury-ivory pt-24 md:pt-32 pb-12 border-t border-luxury-black/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-16 mb-24 md:mb-32">
          {/* Logo & Newsletter */}
          <div className="lg:col-span-3">
            <Link href="/" className="font-serif text-3xl md:text-4xl tracking-tighter mb-6 md:mb-8 block">
              KEENA'S CUTE STUFF
            </Link>
            <p className="text-xs md:text-sm text-luxury-charcoal/60 max-w-sm mb-10 md:mb-12 font-light leading-relaxed">
              Sign up for exclusive invitations to our private events and early access to our curated collections.
            </p>
            <form className="flex max-w-md border-b border-luxury-black/20 pb-2 focus-within:border-luxury-roseGold transition-colors duration-500">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none outline-none w-full text-[10px] tracking-widest uppercase py-2 placeholder:text-luxury-charcoal/40"
              />
              <button type="submit" className="text-[10px] tracking-[0.2em] uppercase hover:text-luxury-roseGold transition-colors font-medium">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-12 lg:gap-8">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-6 md:space-y-8">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-roseGold">
                  {column.title}
                </h4>
                <ul className="space-y-4 md:space-y-5">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[11px] md:text-xs text-luxury-charcoal/70 hover:text-luxury-black transition-colors luxury-link font-light tracking-wide"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-luxury-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/40 text-center md:text-left">
            © 2026 KEENA'S CUTE STUFF. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6 md:gap-10">
            <a href="#" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/40 hover:text-luxury-roseGold transition-all">Instagram</a>
            <a href="#" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/40 hover:text-luxury-roseGold transition-all">TikTok</a>
            <a href="#" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/40 hover:text-luxury-roseGold transition-all">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
