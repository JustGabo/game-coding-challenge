import { Game } from "../types/game";

export async function fetchGameById(id: number): Promise<Game> {
  const url = `https://api.igdb.com/v4/games`;

  if (!process.env.IGDB_CLIENT_ID || !process.env.IGDB_ACCESS_TOKEN) {
    throw new Error("Missing API credentials");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Client-ID": process.env.IGDB_CLIENT_ID,
      Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
    },
    body: `fields *,involved_companies.company.*,similar_games.*,similar_games.cover.*,platforms.*,cover.url,screenshots.url,age_ratings.*,genres.*,release_dates.*; where id = ${Number(
      id
    )};`,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch game: ${response.statusText}`);
  }

  const [data] = await response.json();
  return data;
} 