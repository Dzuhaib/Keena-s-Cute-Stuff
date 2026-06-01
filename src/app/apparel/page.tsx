import CollectionTemplate from "@/components/sections/CollectionTemplate";

const apparelItems = [
  {
    title: "Structural Evening Gown",
    description: "A masterclass in modern draping, this gown features architectural pleats and a structured bodice for a futuristic silhouette.",
    query: "luxury structural evening gown",
  },
  {
    title: "The Signature Trench",
    description: "Reimagined for 2050, our trench features water-resistant technical silk and sharp, defined lines.",
    query: "luxury modern trench coat fashion",
  },
  {
    title: "Monolith Knitwear",
    description: "Over-dimensioned silhouettes met with premium merino wool, providing comfort without sacrificing structural integrity.",
    query: "luxury oversized knitwear fashion",
  },
];

export default function ApparelPage() {
  return (
    <CollectionTemplate
      title="Apparel"
      subtitle="Future Silhouettes & Modern Drapery"
      description="Our apparel collection redefines the classic wardrobe. We focus on structural integrity and premium materials to create pieces that feel like wearable architecture."
      items={apparelItems}
      heroQuery="high fashion apparel runway"
    />
  );
}
