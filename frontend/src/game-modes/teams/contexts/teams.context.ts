import { createContext } from "react";

export type TeamNames = {
  purpleTeam: string;
  pinkTeam: string;
};

// eslint-disable-next-line no-unused-vars
export const TeamsContext = createContext<[TeamNames, (teamNames: TeamNames) => void]>([
  { purpleTeam: "", pinkTeam: "" },
  () => {},
]);
