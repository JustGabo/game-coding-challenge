"use client";
import { Button } from "../../../../../components/ui/button";
import useGamesStore from "@/stores/gamesStore";
import { Game } from "@/app/types/game";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

interface CollectButtonProps {
  game: Game;
}

const CollectButton = ({ game }: CollectButtonProps) => {
  const { addGame, isGameCollected } = useGamesStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isCollected = isMounted ? isGameCollected(game.id) : false;

  const collectGame = () => {
    addGame(game);
    toast({
      title: "Game added to collection",
      description: `${game.name} has been added to your collection`,
      variant: "success",
    });
  };

  if (!isMounted) return null;

  return (
    <Button
      onClick={collectGame}
      disabled={isCollected}
      style={{
        backgroundColor: isCollected ? "white" : "#3C1661",
        color: isCollected ? "#3C1661" : "white",
        border: isCollected ? "1px solid #3C1661" : "1px solid white",
      }}
      className={`lg:w-[300px] w-full rounded-full h-[45px] `}
    >
      {isCollected ? "Collected" : "Collect game"}
    </Button>
  );
};

export default CollectButton;
