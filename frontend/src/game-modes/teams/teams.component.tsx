import { useState, type FunctionComponent } from "react";
import { TeamsGameModeStep1 } from "./_components/teams-step1.component";
import { DEFAULT_TEAM_NAMES, type TeamNames, TeamsContext } from "./contexts/teams.context";
import { DEFAULT_SETTINGS_VALUES, type Settings, SettingsContext } from "./contexts/settings.context";

type Props = {
  lang: "en" | "pl";
};

export const TeamsGameMode: FunctionComponent<Props> = ({ lang }) => {
  const teamNamesState = useState<TeamNames>(DEFAULT_TEAM_NAMES);
  const settingsState = useState<Settings>(DEFAULT_SETTINGS_VALUES);

  return (
    <TeamsContext.Provider value={teamNamesState}>
      <SettingsContext.Provider value={settingsState}>
        <TeamsGameModeStep1 lang={lang} />
      </SettingsContext.Provider>
    </TeamsContext.Provider>
  );
};