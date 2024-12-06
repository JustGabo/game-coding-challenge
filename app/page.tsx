"use client"
import Filters from "@/components/filter";
import Header from "@/components/header";
import Background from "@/components/background";
import GameList from "@/components/gamelList";
import useGamesStore from "@/stores/gamesStore";

export default function Home() {

  const {clearCollection} = useGamesStore()

  return (
    <div className="pt-[32px] px-[16px]">
      <Background/>
      <Header isHome={true}/>

      <main className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px]">
        <h1
          style={{
            color: "linear-gradient(to right, #6727A6, #3C1661)",
          }}
          className="text-[20px] font-semibold lg:text-center lg:text-[24px]"
        >
          Saved Games
        </h1>
        <Filters />
        <GameList />
        <button onClick={()=> clearCollection()}>Clear collection</button>
        </div>
      </main>
    </div>
  );
}
