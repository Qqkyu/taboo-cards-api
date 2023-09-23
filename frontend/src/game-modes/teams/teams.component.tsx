import { useState, type FunctionComponent } from "react";
import { TeamsGameModeStep1 } from "./_components/teams-step1.component";
import { DEFAULT_TEAM_NAMES, type TeamNames, TeamsContext } from "./contexts/teams.context";

type Props = {
  lang: "en" | "pl";
};

export const TeamsGameMode: FunctionComponent<Props> = () => {
  const teamNamesState = useState<TeamNames>(DEFAULT_TEAM_NAMES);

  return (
    <TeamsContext.Provider value={teamNamesState}>
      <TeamsGameModeStep1 />
    </TeamsContext.Provider>
  );
};
