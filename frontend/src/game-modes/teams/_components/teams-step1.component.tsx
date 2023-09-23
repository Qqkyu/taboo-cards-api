import { useContext, type FunctionComponent, type CSSProperties } from "react";
import { DEFAULT_TEAM_NAMES, TeamsContext, type TeamNames } from "@/game-modes/teams/contexts/teams.context";
import { SettingsContext } from "@/game-modes/teams/contexts/settings.context";
import { useTranslations } from "@/i18n/utils";
import { Font } from "@/design-system/font/font.component";

const MIN_TIMER = 30;
const MAX_TIMER = 180;
const TIMER_STEP = 15;

type Props = {
  lang: "en" | "pl";
};

export const TeamsGameModeStep1: FunctionComponent<Props> = ({ lang }) => {
  const [{ roundTime }, setSettings] = useContext(SettingsContext);
  const [{ purpleTeam, pinkTeam }, setNames] = useContext(TeamsContext);

  const t = useTranslations(lang);

  const handleTeamNameChange = (team: keyof TeamNames, value: string) => {
    if (team === "purpleTeam") {
      setNames({ purpleTeam: value, pinkTeam });
    } else {
      setNames({ purpleTeam, pinkTeam: value });
    }
  };

  const handleTeamNameInputBlur = (team: keyof TeamNames) => {
    if (team === "purpleTeam" && purpleTeam === "") {
      setNames({ purpleTeam: DEFAULT_TEAM_NAMES.purpleTeam, pinkTeam });
    } else if (team === "pinkTeam" && pinkTeam === "") {
      setNames({ purpleTeam, pinkTeam: DEFAULT_TEAM_NAMES.pinkTeam });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-auto flex-col items-center justify-center sm:h-28 sm:flex-row">
        <input
          type="text"
          value={purpleTeam}
          onChange={(e) => handleTeamNameChange("purpleTeam", e.target.value)}
          onBlur={() => handleTeamNameInputBlur("purpleTeam")}
          className="input input-bordered !input-primary !input-lg w-full max-w-xs"
        />
        <div className="divider sm:divider-horizontal divider-vertical">VS</div>
        <input
          type="text"
          value={pinkTeam}
          onChange={(e) => handleTeamNameChange("pinkTeam", e.target.value)}
          onBlur={() => handleTeamNameInputBlur("pinkTeam")}
          className="input input-bordered !input-secondary !input-lg w-full max-w-xs"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Font.H2 color="text-base-content">{t("play.round_time")}</Font.H2>
        <input
          type="range"
          min={MIN_TIMER}
          max={MAX_TIMER}
          className="range range-lg"
          step={TIMER_STEP}
          value={roundTime}
          onChange={(e) => setSettings({ roundTime: parseInt(e.target.value) })}
        />
        <div className="flex w-full justify-between px-2 text-xs">
          {Array.from({ length: (MAX_TIMER - MIN_TIMER) / TIMER_STEP + 1 }).map((_, i) => (
            <span key={i}>|</span>
          ))}
        </div>
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": Math.floor(roundTime / 60) } as CSSProperties}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": roundTime % 60 } as CSSProperties}></span>
            </span>
            {t("play.sec")}
          </div>
        </div>
      </div>
    </div>
  );
};
