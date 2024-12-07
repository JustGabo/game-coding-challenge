"use client";

import { useEffect, useState } from "react";
import { useDebounceCallback } from "@/lib/use-debounce";
import { Input } from "../ui/input";
import { LoaderIcon, SearchIcon, X } from "lucide-react";
import { Game } from "@/app/types/game";
import useGamesStore from "@/stores/gamesStore";
import RecommendedGames from "../recommendedGames";
import GameSearchCard from "../gameSearchCard";
import { fixGameUrls } from "@/lib/utils";

export function Search() {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recommendedGames, setRecommendedGames] = useState<Game[]>([]);
  const {games: existingGames} = useGamesStore()

  const [showSearch, setShowSearch] = useState(false);
  const debouncedSearch = useDebounceCallback(setSearch, 150);

  useEffect(() => {
    if (search) {
      void handleSearch(search);
    }
  }, [search]);

  const handleSearch = async (value: string) => {
    setIsSearching(true);
    const url = `/api/games?search=${value}`;
    const response = await fetch(url);
    const data = await response.json();

    setGames(fixGameUrls(data));
    setIsSearching(false);
  };

  const getRecommendedGames = async (category: number) => {
    setIsSearching(true);

    if(existingGames.length && existingGames[0].similar_games.length) {
      setRecommendedGames(existingGames[0].similar_games)
      setIsSearching(false)
      return
    }

    const url = `/api/recommendedGames?category=${category}`;
    const response = await fetch(url);
    const data = await response.json();

    setRecommendedGames(fixGameUrls(data));
    setIsSearching(false);
  }; 

  useEffect(()=>{
    if(!search && existingGames.length > 0){  
      void getRecommendedGames(existingGames[0].category || 1)
      setGames([])
    }
  },[search, existingGames])
  
  return (
    <div className="">
      <div className="relative z-30">
        <SearchIcon className="absolute text-[#E7C0DB] top-1/2 left-[18px] transform -translate-y-1/2 w-4 h-4" />
        <Input
          style={{
            boxShadow: "0px 4px 16px 0px #F2D0E766",
            border: "1px solid #FF00AE33",
          }}
          type="text"
          placeholder="Search games..."
          className={`w-full bg-white rounded-[20px] h-[40px] pl-[44px] lg:pl-[40px] placeholder:text-[#C698B8] ${
            showSearch ? "rounded-b-none" : ""
          }`}
          onChange={(e) => debouncedSearch(e.target.value)}
          onFocus={() => setShowSearch(true)}
          defaultValue={""}
        />
        <X
          className={`absolute top-1/2 right-[18px] text-[#E7C0DB] transform -translate-y-1/2 w-4 h-4 cursor-pointer ${
            showSearch ? "block" : "hidden"
          }`}
          onClick={() => {
            setSearch("");
            setGames([])
            setShowSearch(false);
          }}
        />
      </div>

      <div
        style={{
          boxShadow: "0px 4px 16px 0px #F2D0E766",
          border: "1px solid #FF00AE33",
          scrollbarWidth: "thin",
          scrollbarColor: "#FF00AE transparent",
        }}
        className={`w-[99.9%] h-[30dvh] overflow-y-auto  p-3 pb-6 z-[200] flex flex-col rounded-b-[20px] gap-3 bg-white absolute top-[35px] left-0 ${
          showSearch ? "absolute" : "hidden"
        }`}
      >
        {isSearching ? (
          <>
          <div className="w-full h-full flex items-center justify-center">
          <LoaderIcon className="animate-spin" />
          </div>
          </>
        ) : null}

        {games.length > 0 && !isSearching && search ? (
          <>
            {games.map((game) => (
              <GameSearchCard key={game.id} game={game} />
            ))}
          </>
        ) : null}

        {!isSearching && !games.length && search ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-[14px] font-semibold text-[#f383d1]">No games found.</p>
            <p className="text-[14px] font-semibold text-[#f383d1]">
              Try adding something else.
            </p>
          </div>
        ) : null}

        {recommendedGames.length && !isSearching && !games.length && !search ? (
          <div className="flex flex-col gap-1">
            <p className="text-[14px] font-semibold text-center text-[#f383d1]">
              Recommended for you
            </p>
            <RecommendedGames games={recommendedGames} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
