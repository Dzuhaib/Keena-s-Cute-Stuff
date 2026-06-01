import { NextResponse } from "next/server";
import { searchPexels } from "@/lib/pexels";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const index = parseInt(searchParams.get("index") || "0");

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  const photos = await searchPexels(query, index + 1);
  const photo = photos[index] || photos[0];

  if (!photo) {
    return NextResponse.json({ error: "No image found" }, { status: 404 });
  }

  return NextResponse.json({ 
    url: photo.src.large2x,
    alt: photo.alt,
    photographer: photo.photographer
  });
}
