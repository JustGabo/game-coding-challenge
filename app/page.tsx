import Filters from "@/components/filter";
import Header from "@/components/header";
import Background from "@/components/background";
import GameList from "@/components/gamelList";

export default function Home() {
  return (
    <div className="pt-[32px] px-[16px]">
      <Background />

      <Header isHome={true} />

      <main className="flex flex-col gap-[16px]">
        <section className="flex flex-col gap-[16px]" aria-labelledby="games-section">
          <h1
            style={{
              color: "linear-gradient(to right, #6727A6, #3C1661)",
            }}
            className="text-[20px] font-semibold lg:text-center lg:text-[24px]"
          >
            Saved Games
          </h1>

          <section aria-labelledby="filters-section">
            <Filters />
          </section>

          <section aria-labelledby="game-list-section">
            <GameList />
          </section>
        </section>
      </main>
    </div>
  );
}
