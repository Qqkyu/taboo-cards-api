import { Font } from "@/design-system/font/font.component";
import { useTranslations } from "@/i18n/utils";
import { getRandomCard } from "@/lib/api";
import { API_URL_PREFIX } from "@/paths/api.paths";
import { type Card } from "@/types/card.types";
import { type CSSProperties, type FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useLocalStorage } from "src/hooks/use-local-storage/use-local-storage.hook";

const DEFAULT_TIMER = 60;
const MIN_TIMER = 30;
const MAX_TIMER = 180;
const TIMER_STEP = 15;

const BADGE_COLOR = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
} as const;

type Props = {
  lang: "en" | "pl";
};

export const Game: FunctionComponent<Props> = ({ lang }) => {
  const previousCards = useRef<Array<Card>>([]);

  const [card, setCard] = useState<Card | undefined>(undefined);
  const [nextCard, setNextCard] = useState<Card | undefined>(undefined);

  const roundTimeState = useLocalStorage("timer", DEFAULT_TIMER.toString());
  const [timer, setTimer] = [parseInt(roundTimeState[0]), (timer: number) => roundTimeState[1](timer.toString())];
  const [timeLeft, setTimeLeft] = useState<number | undefined>(undefined);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const t = useTranslations(lang);

  useEffect(() => {
    setTimeLeft(timer);
  }, [timer]);

  useEffect(() => {
    const setRandomCards = async () => {
      const randomCard = await getRandomCard({ lang, apiUrlPrefix: API_URL_PREFIX });
      setCard(randomCard);
      const nextRandomCard = await getRandomCard({ lang, apiUrlPrefix: API_URL_PREFIX });
      setNextCard(nextRandomCard);
    };
    setRandomCards();
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timerOn) {
        return;
      }
      setTimeLeft((timeLeft) => Math.max(0, timeLeft - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleNextCardClick = useCallback(async () => {
    previousCards.current.push(card);
    setCard(nextCard);
    const nextRandomCard = await getRandomCard({ lang, apiUrlPrefix: API_URL_PREFIX });
    setNextCard(nextRandomCard);
  }, [card, lang, nextCard]);

  const handlePrevCardClick = useCallback(() => {
    const previousCard = previousCards.current.pop();
    previousCard && setCard(previousCard);
  }, []);

  const handlePausePlayClick = () => {
    if (timerOn) {
      setTimerOn(false);
    } else {
      if (!timeLeft) {
        setTimeLeft(timer);
      }
      setTimerOn(true);
    }
  };

  const handleResetTime = () => {
    setTimeLeft(timer);
    setTimerOn(false);
  };

  const handleSetTimer = (timer: number) => {
    setTimer(timer);
    setTimeLeft(timer);
    setTimerOn(false);
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      {card ? (
        <>
          <div className="flex flex-col items-center gap-2">
            <Font.H1 color="text-base-content">{t("play.timer")}</Font.H1>
            <input
              type="range"
              min={MIN_TIMER}
              max={MAX_TIMER}
              className="range range-secondary range-md sm:range-lg"
              step={TIMER_STEP}
              value={timer}
              onChange={(e) => handleSetTimer(parseInt(e.target.value))}
            />
            <div className="flex w-full justify-between px-2 text-xs">
              {Array.from({ length: (MAX_TIMER - MIN_TIMER) / TIMER_STEP + 1 }).map((_, i) => (
                <span key={i}>|</span>
              ))}
            </div>
            <div className="flex gap-5">
              <div>
                <span className="countdown font-mono text-3xl sm:text-4xl">
                  <span style={{ "--value": Math.floor(timeLeft / 60) } as CSSProperties}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-3xl sm:text-4xl">
                  <span style={{ "--value": timeLeft % 60 } as CSSProperties}></span>
                </span>
                {t("play.sec")}
              </div>
            </div>
            <div className="flex w-full justify-between">
              <button className="btn btn-sm sm:btn-md btn-neutral w-28" onClick={handlePausePlayClick}>
                {timerOn ? "Stop ⏸" : "Start ▶"}
              </button>
              <button
                className={`btn btn-sm sm:btn-md btn-neutral w-28 ${timeLeft === timer ? "btn-disabled" : ""}`}
                onClick={handleResetTime}
              >
                Reset 🔄
              </button>
            </div>
          </div>
          <div className="card bg-primary w-80 shadow-xl sm:w-96">
            <div className="card-body flex flex-col items-center gap-3 sm:gap-6 lg:gap-8">
              <div className="card-title text-center">
                <Font.H2 color="text-primary-content">{card.title}</Font.H2>
              </div>
              <div className="flex flex-col items-center gap-3">
                {card.forbiddenWords.map((word) => (
                  <Font.P2 key={word} color="text-primary-content">
                    {word}
                  </Font.P2>
                ))}
              </div>
              <div className={`badge h-5 ${BADGE_COLOR[card.difficulty]}`}>{t(`card.${card.difficulty}`)}</div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className={`btn btn-sm sm:btn-md btn-outline btn-secondary ${
                previousCards.current.length === 0 ? "btn-disabled" : ""
              }`}
              onClick={handlePrevCardClick}
            >
              ❮ {t("play.previous")}
            </button>
            <button className="btn btn-sm sm:btn-md btn-secondary" onClick={handleNextCardClick}>
              {t("play.next")} ❯
            </button>
          </div>
        </>
      ) : (
        <div className="flex w-80 flex-col gap-6 sm:w-96 sm:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className={`h-9 sm:h-10 ${lang === "en" ? "w-[55px] sm:w-[65px]" : "w-[107px] sm:w-[128px]"}`}>
              <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--n))" height="100%" />
            </div>
            <div className="h-12 w-full sm:h-14">
              <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--s))" height="100%" />
            </div>
            <div className="h-[31px] w-[135px] sm:h-9 sm:w-[149px]">
              <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--n))" height="100%" />
            </div>
            <div className="flex h-[32px] w-full justify-between sm:h-[48px]">
              <div className="h-full w-28">
                <Skeleton
                  baseColor="hsl(var(--b2))"
                  highlightColor="hsl(var(--n))"
                  height="100%"
                  className="!rounded-lg"
                />
              </div>
              <div className="h-full w-28">
                <Skeleton
                  baseColor="hsl(var(--b2))"
                  highlightColor="hsl(var(--n))"
                  height="100%"
                  className="!rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="h-[332px] w-80 sm:h-[396px] sm:w-96">
            <Skeleton
              baseColor="hsl(var(--b2))"
              highlightColor="hsl(var(--p))"
              height="100%"
              className="!rounded-2xl"
            />
          </div>
          <div className="flex h-[32px] w-full justify-between sm:h-[48px]">
            <div className={`h-full ${lang === "en" ? "w-[102px] sm:w-[110px]" : "w-[113px] sm:w-[121px]"}`}>
              <Skeleton
                baseColor="hsl(var(--b2))"
                highlightColor="hsl(var(--s))"
                height="100%"
                className="!rounded-lg"
              />
            </div>
            <div className={`h-full ${lang === "en" ? "w-[72px] sm:w-[80px]" : "w-[107px] sm:w-[115px]"}`}>
              <Skeleton
                baseColor="hsl(var(--b2))"
                highlightColor="hsl(var(--s))"
                height="100%"
                className="!rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
