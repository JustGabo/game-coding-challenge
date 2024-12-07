import Background  from "@/components/background";
import Header from "@/components/header";
import GameInfo from "./components/gameInfo";
import Gallery from "./components/gallery";
import SimilarGames from "./components/similarGames";
import MainInfo from "./components/mainInfo";
import { fetchGameById } from "@/app/lib/igdb";

const GameDetails = async ({ params }: { params: { id: string } }) => {
  const gameId = await params.id;
  const game = await fetchGameById(Number(gameId));

  if (!game || !gameId) {
    return (
      <div className="text-center py-[32px] px-[16px] ">
        <Background />
        <Header isHome={false} />
        <div className="flex flex-col w-full h-full items-center justify-center">
          <h1 className="text-[24px] font-semibold text-[#3C1661]">
            No game found
          </h1>
        </div>
      </div>
    );
  }


  return (
    <div className="py-[32px] px-[16px]">
      <Background />
      <Header isHome={false} />
        <main className="flex flex-col w-full lg:w-[65dvw] lg:mx-auto gap-[24px]">
          <MainInfo game={game} />
          {game?.age_ratings && <GameInfo game={game} />}
          {game?.screenshots && <Gallery game={game} />}
          {game?.similar_games && (
            <SimilarGames similarGames={game?.similar_games} />
          )}
        </main>
    </div>
  );
};

export default GameDetails;
