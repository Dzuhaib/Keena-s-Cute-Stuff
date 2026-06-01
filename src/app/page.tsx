import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import AboutSection from "@/components/sections/AboutSection";
import SignatureShowcase from "@/components/sections/SignatureShowcase";
import CustomerMoments from "@/components/sections/CustomerMoments";
import GrandOpening from "@/components/sections/GrandOpening";
import VisitBoutique from "@/components/sections/VisitBoutique";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <AboutSection />
      <SignatureShowcase />
      <CustomerMoments />
      <GrandOpening />
      <VisitBoutique />
      <Footer />
    </>
  );
}
