import { NextRequest, NextResponse } from "next/server";

const BASE_IGDB_URL = "https://api.igdb.com/v4";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");

  const url = `${BASE_IGDB_URL}/games`;

  if (!process.env.IGDB_CLIENT_ID || !process.env.IGDB_ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "Missing API credentials" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Client-ID": process.env.IGDB_CLIENT_ID,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
      },
      body: `search "*${search}*"; fields *,involved_companies.company.*,cover.url,screenshots.url,release_dates.*;`,
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch games" },
      { status: 500 }
    );
  }
}