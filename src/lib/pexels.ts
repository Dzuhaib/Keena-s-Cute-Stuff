const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

export interface PexelsResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  next_page: string;
}

// Fallback high-quality images from Unsplash to use when Pexels is unreachable
const FALLBACK_IMAGES: Record<string, string> = {
  "luxury fashion": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600",
  "jewelry": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600",
  "handbag": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1600",
  "boutique": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1600",
  "default": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600"
};

export function getLocalFallback(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("jewelry") || q.includes("diamond")) return FALLBACK_IMAGES["jewelry"];
  if (q.includes("handbag") || q.includes("bag")) return FALLBACK_IMAGES["handbag"];
  if (q.includes("boutique") || q.includes("interior") || q.includes("store")) return FALLBACK_IMAGES["boutique"];
  return FALLBACK_IMAGES["luxury fashion"];
}

export async function searchPexels(query: string, perPage: number = 1): Promise<PexelsPhoto[]> {
  if (!PEXELS_API_KEY) {
    console.warn("PEXELS_API_KEY is not defined in environment variables");
    return [];
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second timeout

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
        signal: controller.signal,
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      if (response.status === 401) console.error("Pexels API Error: Unauthorized. Check your API Key.");
      return [];
    }

    const data: PexelsResponse = await response.json();
    return data.photos;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.error(`Pexels API Timeout for query: "${query}"`);
    } else {
      console.error("Error fetching from Pexels:", error.message || error);
    }
    return [];
  }
}

export async function getPexelsImage(query: string, index: number = 0): Promise<string | null> {
  const photos = await searchPexels(query, index + 1);
  return photos[index]?.src.large2x || photos[0]?.src.large2x || null;
}
