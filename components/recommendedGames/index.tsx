"use client"
import { Game } from "@/app/types/game";
import GameSearchCard from "../gameSearchCard";

interface RecommendedGamesProps {
  games: Game[];
}

const RecommendedGames = ({ games }: RecommendedGamesProps) => {
  return (
    <>
      {games.map((game) => (
        <GameSearchCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default RecommendedGames;
