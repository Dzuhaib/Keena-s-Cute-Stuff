import CollectionTemplate from "@/components/sections/CollectionTemplate";

const accessoryItems = [
  {
    title: "The Prism Scarf",
    description: "Technical silk with a subtle holographic weave that shifts color in different lighting conditions.",
    query: "luxury silk scarf fashion",
  },
  {
    title: "Architectural Belt",
    description: "A geometric masterpiece in matte-black steel and full-grain leather, defining the waist with futuristic precision.",
    query: "luxury designer leather belt",
  },
  {
    title: "Signature Eyewear",
    description: "Minimalist frames hand-crafted from titanium, featuring Zeiss lenses and seamless hinge design.",
    query: "luxury minimalist sunglasses",
  },
];

export default function AccessoriesPage() {
  return (
    <CollectionTemplate
      title="Accessories"
      subtitle="Curated Accents & Technical Precision"
      description="The details define the whole. Our accessories collection is curated to provide the finishing touches to a modern, sophisticated aesthetic."
      items={accessoryItems}
      heroQuery="luxury fashion accessories flatlay"
    />
  );
}
