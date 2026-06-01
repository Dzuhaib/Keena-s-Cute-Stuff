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

export async function searchPexels(query: string, perPage: number = 1): Promise<PexelsPhoto[]> {
  if (!PEXELS_API_KEY) {
    console.warn("PEXELS_API_KEY is not defined");
    return [];
  }

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.statusText}`);
    }

    const data: PexelsResponse = await response.json();
    return data.photos;
  } catch (error) {
    console.error("Error fetching from Pexels:", error);
    return [];
  }
}

export async function getPexelsImage(query: string, index: number = 0): Promise<string | null> {
  const photos = await searchPexels(query, index + 1);
  return photos[index]?.src.large2x || photos[0]?.src.large2x || null;
}
