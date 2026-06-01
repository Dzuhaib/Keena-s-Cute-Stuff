import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import EventPopup from "@/components/ui/EventPopup";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keena's Cute Stuff | Luxury Fashion Showcase",
  description: "Luxury Accessories, Jewelry & Apparel Curated For Every Occasion. Futuristic boutique experience in Collingdale, PA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-luxury-roseGold selection:text-white">
      <body
        className={cn(
          inter.variable,
          instrumentSerif.variable,
          "antialiased bg-luxury-ivory text-luxury-black font-sans overflow-x-hidden"
        )}
      >
        <EventPopup />
        <SmoothScroll>
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
