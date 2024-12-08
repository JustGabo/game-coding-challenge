"use client";
import { Game } from "@/app/types/game";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import useGamesStore from "@/stores/gamesStore";
import { useToast } from "@/hooks/use-toast";
import { fixGameUrls } from "@/lib/utils";

interface GameCardProps {
  game: Game;
  showDeleteButton?: boolean;
}

const GameCard = ({ game, showDeleteButton = false }: GameCardProps) => {
  const { removeGame, games } = useGamesStore();
  const { toast } = useToast();

  const convertedCoverUrl = fixGameUrls([game]);

  const isGameInCollection = games.some((g) => g.id === game.id);

  const removeGameFromCollection = () => {
    removeGame(game.id);
    toast({
      title: "Game removed from collection",
      description: `${game.name} has been removed from your collection`,
      variant: "delete",
    });
  };

  return (
    <article className="relative w-[30dvw] h-[155px] lg:h-[300px] lg:w-[15dvw]">
      <Link href={`/game/${game.slug}`} className="block">
        <Image
          src={
            convertedCoverUrl[0]?.cover?.url ||
            convertedCoverUrl[0]?.screenshots[0]?.url
          }
          alt={game.name}
          fill
          className="object-cover rounded-lg"
        />
      </Link>

      {isGameInCollection && showDeleteButton && (
        <Button
          onClick={removeGameFromCollection}
          size="delete"
          variant="delete"
          className="absolute flex items-center justify-center bottom-3 right-3"
        >
          <Trash className="cursor-pointer text-black" strokeWidth={2.5} />
        </Button>
      )}
    </article>
  );
};

export default GameCard;
