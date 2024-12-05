import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Game } from "@/app/types/game";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fixGameUrls = (games: Game[]): Game[] => {
  return games.map((game: Game) => ({
    ...game,
    cover: game.cover ? {
      ...game.cover,
      url: game.cover.url?.startsWith("//") ? `https:${game.cover.url}` : game.cover.url
    } : undefined,
    screenshots: game.screenshots?.map((screenshot) => ({
      ...screenshot,
      url: screenshot.url.startsWith("//") ? `https:${screenshot.url}` : screenshot.url,
    })),
  }));
};
