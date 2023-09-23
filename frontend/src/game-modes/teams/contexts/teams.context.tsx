import { createContext } from "react";

export type TeamNames = {
  purpleTeam: string;
  pinkTeam: string;
};

export const DEFAULT_TEAM_NAMES: TeamNames = {
  purpleTeam: "Purple team",
  pinkTeam: "Pink team",
};

// eslint-disable-next-line no-unused-vars
export const TeamsContext = createContext<[TeamNames, (teamNames: TeamNames) => void]>([DEFAULT_TEAM_NAMES, () => {}]);
