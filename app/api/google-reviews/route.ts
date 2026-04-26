import { NextResponse } from 'next/server';

// CACHE: Guardamos las reseñas en memoria por 24 horas para evitar excesos de API
let cachedReviews: any = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

export async function GET() {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  if (!API_KEY || !PLACE_ID) {
    return NextResponse.json(
      { error: 'Server configuration error: Missing API Key or Place ID' },
      { status: 500 }
    );
  }

  // Si tenemos datos en caché y no han expirado, los usamos
  const now = Date.now();
  if (cachedReviews && (now - lastFetchTime < CACHE_DURATION)) {
    console.log('Utilizando reseñas de Google desde la caché');
    return NextResponse.json(cachedReviews);
  }

  try {
    // Campos que queremos obtener de Google
    const fields = 'name,rating,user_ratings_total,reviews';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=${fields}&key=${API_KEY}&language=es`;

    const response = await fetch(url, { next: { revalidate: 86400 } }); // Next.js cache revalidate
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('❌ Google API Error:', data.status, data.error_message);
      return NextResponse.json({ error: data.status, message: data.error_message }, { status: 200 });
    }

    const reviewsData = {
      name: data.result.name,
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
      lastUpdated: new Date().toISOString()
    };

    cachedReviews = reviewsData;
    lastFetchTime = now;

    return NextResponse.json(reviewsData);
  } catch (error: any) {
    console.error('Error al obtener reseñas de Google:', error);
    return NextResponse.json({ error: 'Exception', message: error.message }, { status: 200 });
  }
}
