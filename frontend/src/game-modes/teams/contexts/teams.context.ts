import { createContext } from "react";
import { noop } from "@/utils/noop";

export type TeamNames = {
  purpleTeamName: string;
  pinkTeamName: string;
};

export const TeamNamesContext = createContext<
  readonly [
    TeamNames,
    // eslint-disable-next-line no-unused-vars
    { setPurpleTeamName: (purpleTeamName: string) => void; setPinkTeamName: (pinkTeamName: string) => void },
  ]
>([
  { purpleTeamName: "", pinkTeamName: "" },
  { setPurpleTeamName: noop, setPinkTeamName: noop },
]);
