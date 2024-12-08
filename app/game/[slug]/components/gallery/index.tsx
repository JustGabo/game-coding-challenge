import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Game } from "@/app/types/game";
import React from "react";
import { fixGameUrls } from "@/lib/utils";

interface GalleryProps {
  game: Game;
}

const Gallery = ({ game }: GalleryProps) => {

  const convertedGame = fixGameUrls([game])[0];

  if (!convertedGame.screenshots.length) {
    return (
      <div className="flex items-center justify-center p-4 text-gray-500">
        <p>No media available for this game.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h3 className="text-[16px] font-semibold mb-3">Media</h3>
      <Carousel className="w-full">
        <CarouselContent className="flex gap-3">
          {convertedGame.screenshots.map((screenshot) => (
            <CarouselItem
              key={screenshot.id}
              className="flex-shrink-0 w-1/3 border-red-500 relative h-[100px] lg:h-[200px]"
            >
              <Image
                src={screenshot.url}
                alt={`Screenshot from ${game.name}`}
                fill
                className="object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md" />
      </Carousel>
    </div>
  );
};

export default Gallery;
