"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface PexelsImageProps extends Omit<ImageProps, "src" | "alt"> {
  query: string;
  index?: number;
  fallbackSrc?: string;
  alt?: string;
}

export default function PexelsImage({ 
  query, 
  index = 0, 
  fallbackSrc = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1600",
  alt,
  ...props 
}: PexelsImageProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [imageAlt, setImageAlt] = useState<string>(alt || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const fetchImage = async () => {
      try {
        const response = await fetch(`/api/images?query=${encodeURIComponent(query)}&index=${index}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        
        if (isMounted) {
          setSrc(data.url);
          if (!alt) setImageAlt(data.alt || query);
        }
      } catch (error) {
        console.error("Error fetching Pexels image:", error);
        if (isMounted) setSrc(fallbackSrc);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [query, index, fallbackSrc, alt]);

  if (loading && !src) {
    return (
      <div 
        className={`bg-luxury-charcoal/20 animate-pulse ${props.className}`} 
        style={{ width: props.width, height: props.height, ...((props.fill && { position: 'absolute', inset: 0 }) as any) }}
      />
    );
  }

  return (
    <Image
      {...props}
      src={src || fallbackSrc}
      alt={imageAlt || query}
    />
  );
}
