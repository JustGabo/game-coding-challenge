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

type SimilarGame = {
  id: number;
  age_ratings: AgeRating[];
  artworks: number[];
  category: number;
  cover: Cover;
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
  release_dates: number[];
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
  cover: Cover;
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
  release_dates: number[];
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


// export interface Game {
//   id: number;
//   name: string;
//   slug: string;
//   summary?: string;
//   storyline?: string;
//   rating?: number;
//   rating_count?: number;
//   aggregated_rating?: number;
//   first_release_date?: number;
//   status?: number;
  
//   cover?: {
//     id: number;
//     url: string;
//     image_id: string;
//     width: number;
//     height: number;
//   };
//   screenshots?: {
//     id: number;
//     url: string;
//     image_id: string;
//     width: number;
//     height: number;
//   }[];
//   videos?: {
//     id: number;
//     name: string;
//     video_id: string;
//   }[];
  
//   genres?: {
//     id: number;
//     name: string;
//     slug: string;
//   }[];
//   themes?: {
//     id: number;
//     name: string;
//     slug: string;
//   }[];
  
//   platforms?: {
//     id: number;
//     name: string;
//     slug: string;
//     platform_family?: number;
//   }[];
//   game_modes?: {
//     id: number;
//     name: string;
//     slug: string;
//   }[];
  
//   release_dates?: {
//     id: number;
//     date: number;
//     human: string;
//     platform: {
//       id: number;
//       name: string;
//     };
//     region: number;
//   }[];
  
//   age_ratings?: {
//     id: number;
//     category: number;
//     rating: number;
//   }[];
//   involved_companies?: {
//     id: number;
//     company: {
//       id: number;
//       name: string;
//     };
//     developer: boolean;
//     publisher: boolean;
//   }[];
//   websites?: {
//     id: number;
//     url: string;
//     category: number;
//   }[];
  
//   game_engines?: {
//     id: number;
//     name: string;
//   }[];
//   dlcs?: {
//     id: number;
//     name: string;
//   }[];
//   expansions?: {
//     id: number;
//     name: string;
//   }[];
  
//   total_rating?: number;
//   total_rating_count?: number;
//   follows?: number;
//   hypes?: number;
// } 