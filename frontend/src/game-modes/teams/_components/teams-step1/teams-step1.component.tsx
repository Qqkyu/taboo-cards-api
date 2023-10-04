import { useContext, type FunctionComponent, type CSSProperties, useState, useEffect } from "react";
import { TeamNamesContext } from "@/game-modes/teams/contexts/team-names.context";
import { SettingsContext } from "@/game-modes/teams/contexts/settings.context";
import { useTranslations } from "@/i18n/utils";
import { Font } from "@/design-system/font/font.component";
import Skeleton from "react-loading-skeleton";

const MIN_TIMER = 30;
const MAX_TIMER = 180;
const TIMER_STEP = 15;

type Props = {
  lang: "en" | "pl";
  onStart: () => void;
};

export const TeamsGameModeStep1: FunctionComponent<Props> = ({ lang, onStart }) => {
  const [isMounted, setIsMounted] = useState(false);

  const [{ roundTime, rounds, skips }, { setRoundTime, setRounds, setSkips }] = useContext(SettingsContext);
  const [{ purpleTeamName, pinkTeamName }, { setPurpleTeamName, setPinkTeamName }] = useContext(TeamNamesContext);

  const t = useTranslations(lang);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 sm:gap-16">
      <div className="flex flex-col items-center gap-2">
        <Font.H2 color="text-accent">{t("play.teams")}</Font.H2>
        <div className="flex h-auto flex-col items-center justify-center sm:h-28 sm:flex-row">
          {isMounted ? (
            <input
              type="text"
              value={purpleTeamName}
              onChange={(e) => setPurpleTeamName(e.target.value)}
              onBlur={() => purpleTeamName === "" && setPurpleTeamName(t("play.purple_team"))}
              className="input input-bordered !input-primary !input-md sm:!input-lg w-full max-w-xs"
            />
          ) : (
            <div className="h-12 w-[193px] sm:h-16 sm:w-[253px]">
              <Skeleton
                baseColor="hsl(var(--b2))"
                highlightColor="hsl(var(--p))"
                height="100%"
                className="!rounded-lg"
              />
            </div>
          )}
          <div className="divider sm:divider-horizontal divider-vertical">VS</div>
          {isMounted ? (
            <input
              type="text"
              value={pinkTeamName}
              onChange={(e) => setPinkTeamName(e.target.value)}
              onBlur={() => pinkTeamName === "" && setPinkTeamName(t("play.pink_team"))}
              className="input input-bordered !input-secondary !input-md sm:!input-lg w-full max-w-xs"
            />
          ) : (
            <div className="h-12 w-[193px] sm:h-16 sm:w-[253px]">
              <Skeleton
                baseColor="hsl(var(--b2))"
                highlightColor="hsl(var(--s))"
                height="100%"
                className="!rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex w-full flex-col items-center gap-2">
          <Font.H2 color="text-accent">{t("play.gameplay_settings")}</Font.H2>
          <Font.H3 color="text-base-content">{t("play.round_time")}</Font.H3>
          {isMounted ? (
            <>
              <input
                type="range"
                min={MIN_TIMER}
                max={MAX_TIMER}
                className="range !range-md sm:!range-lg"
                step={TIMER_STEP}
                value={roundTime}
                onChange={(e) => setRoundTime(e.target.value)}
              />
              <div className="flex w-full justify-between px-2 text-xs">
                {Array.from({ length: (MAX_TIMER - MIN_TIMER) / TIMER_STEP + 1 }).map((_, i) => (
                  <span key={i}>|</span>
                ))}
              </div>
            </>
          ) : (
            <div className="h-12 w-[278px] sm:h-14 sm:w-[554px]">
              <Skeleton
                baseColor="hsl(var(--b2))"
                highlightColor="hsl(var(--n))"
                height="100%"
                className="!rounded-lg"
              />
            </div>
          )}
          {isMounted ? (
            <div className="flex gap-5">
              <div>
                <span className="countdown font-mono text-3xl sm:text-4xl">
                  <span style={{ "--value": Math.floor(roundTime / 60) } as CSSProperties}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-3xl sm:text-4xl">
                  <span style={{ "--value": roundTime % 60 } as CSSProperties}></span>
                </span>
                {t("play.sec")}
              </div>
            </div>
          ) : (
            <div className="h-[31px] w-[135px] sm:h-9 sm:w-[148px]">
              <Skeleton
                baseColor="hsl(var(--b2))"
                highlightColor="hsl(var(--n))"
                height="100%"
                className="!rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-5">
          <div className="flex basis-1/2 flex-col items-center gap-2">
            <Font.H3 color="text-base-content">{t("play.rounds")}</Font.H3>
            {isMounted ? (
              <>
                <input
                  type="range"
                  min={1}
                  max={10}
                  className="range !range-md sm:!range-lg"
                  step={1}
                  value={rounds}
                  onChange={(e) => setRounds(e.target.value)}
                />
                <Font.P2 color="text-base-content">{rounds}</Font.P2>
              </>
            ) : (
              <div className="h-[60px] w-[129px] sm:h-[72px] sm:w-[267px]">
                <Skeleton
                  baseColor="hsl(var(--b2))"
                  highlightColor="hsl(var(--n))"
                  height="100%"
                  className="!rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="flex basis-1/2 flex-col items-center gap-2">
            <Font.H3 color="text-base-content">{t("play.skips")}</Font.H3>
            {isMounted ? (
              <>
                <input
                  type="range"
                  min={0}
                  max={10}
                  className="range !range-md sm:!range-lg"
                  step={1}
                  value={skips}
                  onChange={(e) => setSkips(e.target.value)}
                />
                <Font.P2 color="text-base-content">{skips}</Font.P2>
              </>
            ) : (
              <div className="h-[60px] w-[129px] sm:h-[72px] sm:w-[267px]">
                <Skeleton
                  baseColor="hsl(var(--b2))"
                  highlightColor="hsl(var(--n))"
                  height="100%"
                  className="!rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isMounted ? (
        <button onClick={onStart} className="!btn-accent btn btn-wide btn-sm sm:!btn-md ">
          Start
        </button>
      ) : (
        <div className="h-8 w-64 sm:h-12">
          <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--a))" height="100%" className="!rounded-lg" />
        </div>
      )}
    </div>
  );
};