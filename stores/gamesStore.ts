import { Game } from '@/app/types/game';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameWithDate extends Game {
  dateAdded: string; // Nueva propiedad para registrar la fecha y hora de agregado
}

interface GameCollectionState {
  games: GameWithDate[];
  addGame: (game: Game) => void;
  removeGame: (id: number) => void;
  isGameCollected: (id: number) => boolean;
  clearCollection: () => void;
  filterGames: (criteria: 'newest' | 'oldest') => GameWithDate[];
}

const useGamesStore = create<GameCollectionState>()(
  persist(
    (set, get) => ({
      games: [],
      addGame: (game) =>
        set((state) => {
          if (!state.games.find((g) => g.id === game.id)) {
            return {
              games: [
                ...state.games,
                {
                  ...game,
                  dateAdded: new Date().toISOString(), // Agregamos la fecha actual
                },
              ],
            };
          }
          return state;
        }),
      removeGame: (id) =>
        set((state) => ({
          games: state.games.filter((game) => game.id !== id)
        })),
      isGameCollected: (id) =>
        !!get().games.find((game) => game.id === id),
      clearCollection: () => set({ games: [] }),
      filterGames: (criteria) => {
        const games = get().games;
        if (criteria === 'newest') {
          return [...games].sort(
            (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          );
        } else if (criteria === 'oldest') {
          return [...games].sort(
            (a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
          );
        }
        return games; // Si no hay criterio válido, devuelve la lista sin modificar
      },
    }),
    {
      name: 'game-collection'
    }
  )
);

export default useGamesStore;
