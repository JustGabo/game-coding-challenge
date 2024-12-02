import React from "react";

import { Game } from "@/app/types/game";
import Pills from "@/components/pills";
import { Puzzle, Star } from "lucide-react";

interface GameInfoProps {
  game: Game;
}

const GameInfo = ({ game }: GameInfoProps) => {
  const rating =
    game?.age_ratings
      .map((rating) => rating.rating)
      .reduce((sum, rating) => sum + rating, 0) / game.age_ratings.length;

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex gap-3 flex-wrap">
        <Pills label="Rating" text={rating.toFixed(2)} icon={<Star className="w-4 h-4"/>} />
        {game.genres && (
          <Pills
            label="Genre"
            text={game.genres.map((genre) => genre.name).join(" & ")}
            icon={<Puzzle className="w-4 h-4" />}
          />
        )}
        {/* <Pills label="Publisher" text={game.genres[0]} icon={<img src="/icons/publisher.svg" alt="publisher" />} /> */}
        {/* <Pills label="Publisher" text={game.created_at} icon={<img src="/icons/publisher.svg" alt="publisher" />} /> */}
      </div>

      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[16px] font-semibold">Summary</h3>
        <p className="text-[14px] font-medium text-[#666666]">{game.summary}</p>
      </div>

      <div className="flex flex-col gap-[8px]">
        <h3 className="text-[16px] font-semibold">Platforms</h3>
        <p className="text-[14px] font-medium text-[#666666]">
          {game?.platforms?.map((platform) => platform?.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
