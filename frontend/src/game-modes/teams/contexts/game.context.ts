import { createContext } from "react";

export type Game = {
  points: {
    pinkTeam: number;
    purpleTeam: number;
  };
  round: number;
};

export const DEFAULT_GAME_VALUES: Game = {
  points: {
    pinkTeam: 0,
    purpleTeam: 0,
  },
  round: 1,
};

// eslint-disable-next-line no-unused-vars
export const GameContext = createContext<[Game, (game: Game) => void]>([DEFAULT_GAME_VALUES, () => {}]);
