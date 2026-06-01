import CollectionTemplate from "@/components/sections/CollectionTemplate";

const jewelryItems = [
  {
    title: "Orbital Necklace",
    description: "A futuristic composition of interlocking spheres in 18k rose gold, symbolizing the eternal connection between time and space.",
    query: "luxury rose gold orbital necklace",
  },
  {
    title: "Celestial Drop Earrings",
    description: "Hand-set with ethically sourced diamonds that capture and refract light with every movement.",
    query: "luxury diamond drop earrings",
  },
  {
    title: "Stellar Cuff",
    description: "Architectural metalwork meets high-jewelry. The Stellar Cuff is a bold statement piece with a high-polish finish.",
    query: "luxury gold cuff bracelet",
  },
];

export default function JewelryPage() {
  return (
    <CollectionTemplate
      title="Jewelry"
      subtitle="Timeless Radiance & Celestial Inspiration"
      description="Explore our jewelry atelier, where light meets form. Our collection features meticulously hand-crafted pieces designed to be cherished for generations, blending celestial motifs with modern luxury."
      items={jewelryItems}
      heroQuery="luxury jewelry display diamonds"
    />
  );
}
