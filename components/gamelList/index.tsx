"use client";
import React from "react";
import useGamesStore from "@/stores/gamesStore";
import GameCard from "../gameCard";
import EmptyState from "../emptyState";

const GameList = () => {
  const { games, filterGames, currentFilter } = useGamesStore();

  const filteredGames = filterGames(currentFilter);

  return (
    <section className="flex flex-col gap-10 lg:w-[65dvw] lg:mx-auto">
      <main className="flex gap-5">
        {games.length === 0 ? (
          <div className="w-full h-[50dvh] flex items-center justify-center">
            <EmptyState />
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-[8px]">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} showDeleteButton={true} />
            ))}
          </div>
        )}
      </main>
    </section>
  );
};

export default GameList;
