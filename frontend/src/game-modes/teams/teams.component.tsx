import { useState, type FunctionComponent } from "react";
import { TeamsGameModeStep1 } from "./_components/teams-step1.component";
import { DEFAULT_TEAM_NAMES, type TeamNames, TeamsContext } from "./contexts/teams.context";
import { DEFAULT_SETTINGS_VALUES, type Settings, SettingsContext } from "./contexts/settings.context";
import { TeamsGameModeStep2 } from "./_components/teams-step2.component";
import { DEFAULT_GAME_VALUES, type Game, GameContext } from "./contexts/game.context";

type Props = {
  lang: "en" | "pl";
};

export const TeamsGameMode: FunctionComponent<Props> = ({ lang }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const teamNamesState = useState<TeamNames>(DEFAULT_TEAM_NAMES);
  const settingsState = useState<Settings>(DEFAULT_SETTINGS_VALUES);
  const gameState = useState<Game>(DEFAULT_GAME_VALUES);

  return (
    <TeamsContext.Provider value={teamNamesState}>
      <SettingsContext.Provider value={settingsState}>
        <GameContext.Provider value={gameState}>
          {step === 1 && <TeamsGameModeStep1 onStart={() => setStep(2)} lang={lang} />}
          {step === 2 && <TeamsGameModeStep2 />}
        </GameContext.Provider>
      </SettingsContext.Provider>
    </TeamsContext.Provider>
  );
};
