export type Screenshot = {
  id: number;
  url: string;
};

type Cover = {
  id: number
  url: string;
};

type InvolvedCompany = {
  id: number;
  company: {
    id: number;
    name: string;
  };
};

type Platform = {
  id: number;
  name: string;
}

type Genre = {
  id: number;
  name: string;
}

type AgeRating = {
  id: number;
  category: number;
  rating: number;
}

type ReleaseDate = {
  id: number, 
  year: number,
  month: number,
  human: string
}

type SimilarGame = {
  id: number;
  age_ratings: AgeRating[];
  artworks: number[];
  category: number;
  cover: Cover | undefined;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  game_engines: number[];
  game_modes: number[];
  genres: Genre[];
  keywords: number[];
  multiplayer_modes: number[];
  name: string;
  platforms: Platform[];
  player_perspectives: number[];
  release_dates: ReleaseDate[];
  screenshots: Screenshot[];
  involved_companies: InvolvedCompany[];
  similar_games: SimilarGame[];
  slug: string;
  summary: string;
  tags: number[];
  themes: number[];
  updated_at: number;
  url: string;
  videos: number[];
  websites: number[];
  checksum: string;
  language_supports: number[];
}
export type Game = {
  id: number;
  age_ratings: AgeRating[];
  artworks: number[];
  category: number;
  cover: Cover | undefined;
  created_at: number;
  external_games: number[];
  first_release_date: number;
  game_engines: number[];
  game_modes: number[];
  genres: Genre[];
  keywords: number[];
  multiplayer_modes: number[];
  name: string;
  platforms: Platform[];
  player_perspectives: number[];
  release_dates: ReleaseDate[];
  screenshots: Screenshot[];
  involved_companies: InvolvedCompany[];
  similar_games: SimilarGame[];
  slug: string;
  summary: string;
  tags: number[];
  themes: number[];
  updated_at: number;
  url: string;
  videos: number[];
  websites: number[];
  checksum: string;
  language_supports: number[];
}; 