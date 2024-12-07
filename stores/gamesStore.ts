import { Game } from '@/app/types/game';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameWithDate extends Game {
  dateAdded: string; // Nueva propiedad para registrar la fecha y hora de agregado
}

interface GameCollectionState {
  games: GameWithDate[];
  currentFilter: 'newest' | 'oldest' | 'last_added';
  addGame: (game: Game) => void;
  removeGame: (id: number) => void;
  isGameCollected: (id: number) => boolean;
  clearCollection: () => void;
  filterGames: (criteria: 'newest' | 'oldest' | 'last_added') => GameWithDate[];
  setFilter: (filter: 'newest' | 'oldest' | 'last_added') => void;
}

const useGamesStore = create<GameCollectionState>()(
  persist(
    (set, get) => ({
      games: [],
      currentFilter: 'last_added',
      setFilter: (filter) => set({ currentFilter: filter }),
      addGame: (game) =>
        set((state) => {
          if (!state.games.find((g) => g.id === game.id)) {
            return {
              games: [
                ...state.games,
                {
                  ...game,
                  dateAdded: new Date().toISOString(),
                },
              ],
            };
          }
          return state;
        }),
      removeGame: (id) =>
        set((state) => ({
          games: state.games.filter((game) => game.id !== id),
        })),
      isGameCollected: (id) =>
        !!get().games.find((game) => game.id === id),
      clearCollection: () => set({ games: [] }),
      filterGames: (criteria) => {
        const games = get().games;
        const parseDate = (dateString: string | undefined) => {
          if (!dateString) return new Date(0);
          try {
            return new Date(dateString.replace(',', ''));
          } catch {
            return new Date(0);
          }
        };

        switch (criteria) {
          case 'newest':
            return [...games].sort((a, b) => {
              const dateA = parseDate(a.release_dates?.[0]?.human);
              const dateB = parseDate(b.release_dates?.[0]?.human);
              return dateB.getTime() - dateA.getTime();
            });
          case 'oldest':
            return [...games].sort((a, b) => {
              const dateA = parseDate(a.release_dates?.[0]?.human);
              const dateB = parseDate(b.release_dates?.[0]?.human);
              return dateA.getTime() - dateB.getTime();
            });
          case 'last_added':
            return [...games].sort((a, b) => {
              const dateA = new Date(a.dateAdded);
              const dateB = new Date(b.dateAdded);
              return dateB.getTime() - dateA.getTime();
            });
          default:
            return games;
        }
      },
    }),
    {
      name: 'game-collection',
    }
  )
);

export default useGamesStore;
