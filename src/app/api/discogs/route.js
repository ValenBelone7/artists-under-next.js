import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q) return NextResponse.json([]);

  const res = await fetch(
    `https://api.discogs.com/database/search?q=${q}&type=artist&per_page=6`,
    { headers: { "User-Agent": "UnderFechas/1.0" } }
  );
  const data = await res.json();
  return NextResponse.json(data.results || []);
}