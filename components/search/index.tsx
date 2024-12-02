"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDebounceCallback } from "@/lib/use-debounce";
import { Input } from "../ui/input";
import Link from "next/link";
import { SearchIcon, X } from "lucide-react";
import { Game } from "@/app/types/game";
// import RecommendedGames from "../recommendedGames";
import useGamesStore from "@/stores/gamesStore";



export function Search() {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const [isSearching, setIsSearching] = useState(false)
  const [recommendedGames, setRecommendedGames] = useState<Game[]>([])
  // const {games: existingGames} = useGamesStore()

  const [showSearch, setShowSearch] = useState(false)
  const debouncedSearch = useDebounceCallback(setSearch, 150);

  useEffect(() => {
    if (search) {
      void handleSearch(search);
    }
  }, [search]);

  // useEffect(()=>{
  //   void getRecommendedGames(existingGames[0].category)
  // },[existingGames])

  const handleSearch = async (value: string) => {
    setIsSearching(true)
    const url = `/api/games?search=${value}`;
    const response = await fetch(url);
    const data = await response.json();

    // fix the urls of the screenshots cause nextjs image is not working with the protocol
    const gamesWithFixedUrls = data.map((game: Game) => ({
      ...game,
      cover: game.cover?.url?.startsWith("//")
          ? `https:${game.cover.url}`
          : game.cover?.url,
      screenshots: game.screenshots?.map((screenshot) => ({
        ...screenshot,
        url: screenshot.url.startsWith("//")
          ? `https:${screenshot.url}`
          : screenshot.url,
      })),
    }));

    setGames(gamesWithFixedUrls);
    setIsSearching(false)
  };

  const getRecommendedGames = async (category: number) => {
    const url = `/api/recommendedGames?category=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    setRecommendedGames(data)
  }

  useEffect(()=>{
    console.log(games)
  },[games])


  return (
    <div className="">
      <div className="relative z-30">
        <SearchIcon className="absolute top-1/2 left-[18px] transform -translate-y-1/2 w-4 h-4" />
      <Input
        style={{
          boxShadow: "0px 4px 16px 0px #F2D0E766",
          border: "1px solid #FF00AE33",
        }}
        type="text"
        placeholder="Search games..."
        className={`w-full bg-white rounded-[20px] h-[40px] lg:pl-[100px] pl-[44px] placeholder:text-[#C698B8] ${
          showSearch ? "rounded-b-none" : ""
        }`}
        onChange={(e) => debouncedSearch(e.target.value)}
        onFocus={() => setShowSearch(true)}
        defaultValue={""}
      />
      <X className={`absolute top-1/2 right-[18px] transform -translate-y-1/2 w-4 h-4 cursor-pointer ${showSearch ? "block" : "hidden"}`} onClick={()=> {
        setSearch("")
        setShowSearch(false)
      }}/>
      </div>

      <div
        style={{
          boxShadow: "0px 4px 16px 0px #F2D0E766",
          border: "1px solid #FF00AE33",
          scrollbarWidth: "thin",
          scrollbarColor: "#FF00AE transparent",
        }}
        className={`w-[99.9%] h-[30dvh] overflow-y-auto  p-3 pb-6 z-10 flex flex-col rounded-b-[20px] gap-3 bg-white absolute top-[35px] left-0 ${
          showSearch ? "absolute" : "hidden"
        }`}
      >
        {games.map((game) => (
          <Link key={game.id} href={`/game/${game.id}`} className="flex items-center gap-2">
            {game.screenshots && game.screenshots.length > 0 && (
              <Image
                src={game?.cover || game?.screenshots[0].url}
                alt={game.name}
                className="size-10"
                width={100}
                height={100}
              />
            )}
            <p className="text-[14px] font-semibold line-clamp-1">{game.name}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
