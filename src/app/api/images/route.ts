import { NextResponse } from "next/server";
import { searchPexels, getLocalFallback } from "@/lib/pexels";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const index = parseInt(searchParams.get("index") || "0");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const photos = await searchPexels(query, index + 1);
    const photo = photos[index] || photos[0];

    if (!photo) {
      // If no photo found or API failed (timeout/network), return a high-quality fallback
      console.log(`Using fallback image for query: "${query}"`);
      return NextResponse.json({ 
        url: getLocalFallback(query),
        alt: query,
        photographer: "Unsplash Fallback",
        isFallback: true
      });
    }

    return NextResponse.json({ 
      url: photo.src.large2x,
      alt: photo.alt,
      photographer: photo.photographer,
      isFallback: false
    });
  } catch (error) {
    console.error("Critical API Route Error:", error);
    return NextResponse.json({ 
      url: getLocalFallback(query),
      alt: query,
      isFallback: true
    });
  }
}
