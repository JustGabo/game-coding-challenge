import React from "react";
import { Game } from "@/app/types/game";
import GameCard from "@/components/gameCard";

interface SimilarGamesProps {
  similarGames: Game[];
}

const SimilarGames = ({ similarGames }: SimilarGamesProps) => {
  
  if(!similarGames) return null

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
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-[8px]">
        {similarGames.map((game) => (
          <GameCard key={game.id} game={game} showDeleteButton={false} />
        ))}
      </div>
    </main>
  );
};

export default SimilarGames;
