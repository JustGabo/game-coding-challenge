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

interface GalleryProps {
  game: Game;
}

const Gallery = ({ game }: GalleryProps) => {
  // fix the urls of the screenshots cause nextjs image is not working with the protocol
  const convertedScreenshotsUrls = game?.screenshots?.map((screenshot) => ({
    ...screenshot,
    url: screenshot.url.startsWith("//")
      ? `https:${screenshot.url}`
      : screenshot.url,
  }));

  return (
    <div>
      <h3 className="text-[16px] font-semibold">Media</h3>
      <Carousel className="w-full">
        <CarouselContent className="">
          {convertedScreenshotsUrls.map((screenshot) => {
            return (
              <CarouselItem
                key={screenshot.id}
                className="basis-1/3 border-red-500 mr-3 h-[100px] relative"
              >
                <Image
                  src={screenshot.url}
                  alt="Screenshot"
                  fill
                  className="object-cover rounded-lg"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery;
