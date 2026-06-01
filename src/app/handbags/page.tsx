import CollectionTemplate from "@/components/sections/CollectionTemplate";

const handbagItems = [
  {
    title: "The Sculptural Tote",
    description: "Hand-crafted from premium Italian calfskin, featuring a unique futuristic silhouette and modular internal compartments.",
    query: "luxury sculptural tote bag",
  },
  {
    title: "Prism Clutch",
    description: "An architectural masterpiece with geometric facets and a polished metallic finish, designed for high-profile evening events.",
    query: "luxury geometric clutch bag",
  },
  {
    title: "Minimalist Satchel",
    description: "Streamlined aesthetic meets daily functionality. The Minimalist Satchel features seamless edge construction and matte hardware.",
    query: "minimalist luxury leather satchel",
  },
  {
    title: "The Horizon Bucket",
    description: "A bold statement piece with a cylindrical form and adjustable rope-inspired strap, blending utility with luxury.",
    query: "luxury bucket bag fashion",
  },
];

export default function HandbagsPage() {
  return (
    <CollectionTemplate
      title="Handbags"
      subtitle="Architectural Silhouettes & Uncompromising Craft"
      description="Our handbag collection is a study in form and function. Each piece is meticulously constructed to provide a futuristic aesthetic while maintaining the timeless quality of traditional luxury leather goods."
      items={handbagItems}
      heroQuery="luxury handbags boutique display"
    />
  );
}
