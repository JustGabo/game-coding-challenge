import { Game } from "@/app/types/game";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fixGameUrls } from "@/lib/utils";

interface GameSearchCardProps {
  game: Game;
}

const GameSearchCard = ({ game }: GameSearchCardProps) => {

  const convertedGame = fixGameUrls([game])

    return (
    <Link
      key={game.id}
      href={`/game/${game.slug}`}
      className="flex items-center gap-2"
    >
      {game.screenshots && game.screenshots.length > 0 && (
        <Image
          src={convertedGame[0].cover?.url || convertedGame[0].screenshots[0].url}
          alt={game.name}
          className="size-10"
          width={100}
          height={100}
        />
      )}
      <p className="text-[14px] font-semibold line-clamp-1">{game.name}</p>
    </Link>
  );
};

export default GameSearchCard;
