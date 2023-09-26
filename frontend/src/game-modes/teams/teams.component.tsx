import { useState, type FunctionComponent } from "react";
import { TeamsGameModeStep1 } from "./_components/teams-step1.component";
import { TeamNamesContext } from "./contexts/teams.context";
import { DEFAULT_SETTINGS_VALUES, type Settings, SettingsContext } from "./contexts/settings.context";
import { TeamsGameModeStep2 } from "./_components/teams-step2.component";
import { DEFAULT_GAME_VALUES, type Game, GameContext } from "./contexts/game.context";
import { useTranslations } from "@/i18n/utils";
import { useLocalStorage } from "src/hooks/use-local-storage/use-local-storage.hook";

type Props = {
  lang: "en" | "pl";
};

export const TeamsGameMode: FunctionComponent<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [purpleTeamName, setPurpleTeamName] = useLocalStorage("teams-purple-team-name", t("play.purple_team"));
  const [pinkTeamName, setPinkTeamName] = useLocalStorage("teams-pink-team-name", t("play.pink_team"));

  const settingsState = useState<Settings>(DEFAULT_SETTINGS_VALUES);
  const gameState = useState<Game>(DEFAULT_GAME_VALUES);

  return (
    <TeamNamesContext.Provider
      value={[
        { purpleTeamName, pinkTeamName },
        { setPurpleTeamName, setPinkTeamName },
      ]}
    >
      <SettingsContext.Provider value={settingsState}>
        <GameContext.Provider value={gameState}>
          {step === 1 && <TeamsGameModeStep1 onStart={() => setStep(2)} lang={lang} />}
          {step === 2 && <TeamsGameModeStep2 />}
        </GameContext.Provider>
      </SettingsContext.Provider>
    </TeamNamesContext.Provider>
  );
};
