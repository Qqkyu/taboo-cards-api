import { useState, type FunctionComponent } from "react";
import { TeamsGameModeStep1 } from "./_components/teams-step1/teams-step1.component";
import { TeamNamesContext } from "./contexts/team-names.context";
import { DEFAULT_SETTINGS_VALUES, SettingsContext } from "./contexts/settings.context";
import { TeamsGameModeStep2 } from "./_components/teams-step2/teams-step2.component";
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

  const [roundTime, setRoundTime] = useLocalStorage("teams-round-time", DEFAULT_SETTINGS_VALUES.roundTime.toString());
  const [rounds, setRounds] = useLocalStorage("teams-rounds", DEFAULT_SETTINGS_VALUES.rounds.toString());
  const [skips, setSkips] = useLocalStorage("teams-skips", DEFAULT_SETTINGS_VALUES.skips.toString());

  const gameState = useState<Game>(DEFAULT_GAME_VALUES);

  return (
    <TeamNamesContext.Provider
      value={[
        { purpleTeamName, pinkTeamName },
        { setPurpleTeamName, setPinkTeamName },
      ]}
    >
      <SettingsContext.Provider
        value={[
          { roundTime: parseInt(roundTime), rounds: parseInt(rounds), skips: parseInt(skips) },
          { setRoundTime, setRounds, setSkips },
        ]}
      >
        <GameContext.Provider value={gameState}>
          {step === 1 && <TeamsGameModeStep1 onStart={() => setStep(2)} lang={lang} />}
          {step === 2 && <TeamsGameModeStep2 lang={lang} />}
        </GameContext.Provider>
      </SettingsContext.Provider>
    </TeamNamesContext.Provider>
  );
};
