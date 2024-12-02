import React from "react";
import { Game } from "@/app/types/game";
import GameCard from "@/components/gameCard";

interface SimilarGamesProps {
  similarGames: Game[];
}

const SimilarGames = ({ similarGames }: SimilarGamesProps) => {
  return (
    <main className="flex flex-col gap-5 mt-[24px]">
      <h3
        style={{
          color: "linear-gradient(90deg, #6727A6 0%, #3C1661 100%)",
        }}
        className="text-[16px] font-semibold"
      >
        Similar Games
      </h3>
      <div className="grid grid-cols-3 gap-5">
        {similarGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
};

export default SimilarGames;