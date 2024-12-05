"use client";
import { Game } from "@/app/types/game";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import useGamesStore from "@/stores/gamesStore";
import { useToast } from "@/hooks/use-toast";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const { removeGame, games } = useGamesStore();
  const { toast } = useToast();

  const convertedCoverUrl = game.cover.url.startsWith("//")
    ? `https:${game.cover.url}`
    : game.cover.url;

  const isGameInCollection = games.some((g) => g.id === game.id);

  const removeGameFromCollection = () => {
    removeGame(game.id);
    toast({
      title: "Game removed from collection",

    });
  };

  return (
    <div className="relative w-[30dvw] h-[155px] lg:h-[300px] lg:w-[15dvw]">
      <Link href={`/game/${game.id}`}>
        <Image
          src={convertedCoverUrl}
          alt={game.name}
          fill
          className="object-cover rounded-lg"
        />
      </Link>

      {isGameInCollection && (
        <Button
          onClick={removeGameFromCollection}
          size="delete"
          variant="delete"
          className="absolute flex items-center justify-center bottom-3 right-3  "
        >
          <Trash className=" cursor-pointer text-black" strokeWidth={2.5} />
        </Button>
      )}
    </div>
  );
};

export default GameCard;
