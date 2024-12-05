import React from "react";
import Image from "next/image";
import { Game } from "@/app/types/game";
import CollectButton from "../collectButton";

interface MainInfoProps {
  game: Game;
}

const MainInfo = ({ game }: MainInfoProps) => {
  const convertedCoverUrl = game?.cover?.url?.startsWith("//")
    ? `https:${game?.cover?.url}`
    : game?.cover?.url;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="w-[170px] h-[170px] relative">
          <Image
            src={convertedCoverUrl}
            alt={game?.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h1
              style={{
                color: "#3C1661",
              }}
              className="text-[24px] font-semibold"
            >
              {game?.name}
            </h1>
            <p className="text-[14px] font-medium text-[#775C90]">
              {game.involved_companies?.[0].company.name}
            </p>
          </div>
          <div className="hidden lg:block">
            <CollectButton game={game} />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <CollectButton game={game} />
      </div>
    </div>
  );
};

export default MainInfo;
