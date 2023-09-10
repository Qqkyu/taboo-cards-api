import { Font } from "@/design-system/font/font.component";
import { useTranslations } from "@/i18n/utils";
import { getRandomCard } from "@/lib/api";
import { Card } from "@/types/card.types";
import { CSSProperties, FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

const DEFAULT_TIMER = 60;
const MIN_TIMER = 30;
const MAX_TIMER = 240;
const TIMER_STEP = 15;

const BADGE_COLOR = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
} as const;

type Props = {
  lang: "en" | "pl";
};

export const RandomCard: FunctionComponent<Props> = ({ lang }) => {
  const previousCards = useRef<Array<Card>>([]);
  const [card, setCard] = useState<Card | undefined>(undefined);
  const [timer, setTimer] = useState<number>(DEFAULT_TIMER); // Todo: store timer in local storage
  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_TIMER);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  const t = useTranslations(lang);

  const setRandomCard = useCallback(async () => {
    const randomCard = await getRandomCard({ lang });
    setCard(randomCard);
  }, [lang]);

  useEffect(() => {
    setRandomCard();
  }, [lang, setRandomCard]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timerOn) {
        return;
      }
      setTimeLeft((timeLeft) => Math.max(0, timeLeft - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timerOn]);

  const handleNextCardClick = useCallback(() => {
    previousCards.current.push(card);
    setRandomCard();
  }, [card, setRandomCard]);

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

  return card ? (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2">
        <Font.H1 color="text-base-content">{t("play.timer")}</Font.H1>
        <input
          type="range"
          min={MIN_TIMER}
          max={MAX_TIMER}
          className="range range-secondary range-lg"
          step={TIMER_STEP}
          value={timer}
          onChange={(e) => handleSetTimer(parseInt(e.target.value))}
        />
        <div className="flex w-full justify-between px-2 text-xs">
          {Array.from({ length: (MAX_TIMER - MIN_TIMER) / TIMER_STEP + 1 }).map(() => (
            <span>|</span>
          ))}
        </div>
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": Math.floor(timeLeft / 60) } as CSSProperties}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": timeLeft % 60 } as CSSProperties}></span>
            </span>
            {t("play.sec")}
          </div>
        </div>
        <div className="flex w-full justify-between">
          <button className="btn btn-neutral" onClick={handlePausePlayClick}>
            {timerOn ? "Stop ⏸" : "Start ▶"}
          </button>
          <button className="btn btn-neutral" onClick={handleResetTime}>
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
          className={`btn btn-outline btn-secondary ${previousCards.current.length === 0 ? "btn-disabled" : ""}`}
          onClick={handlePrevCardClick}
        >
          ❮ {t("play.previous")}
        </button>
        <button className="btn btn-secondary" onClick={handleNextCardClick}>
          {t("play.next")} ❯
        </button>
      </div>
    </div>
  ) : (
    <div className="flex w-80 flex-col gap-4">
      <div className="h-[396px] w-80">
        <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--p))" height="100%" className="!rounded-2xl" />
      </div>
      <div className="flex h-[48px] w-full justify-between">
        <div className={`h-full ${lang === "en" ? "w-[110px]" : "w-[121px]"}`}>
          <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--s))" height="100%" className="!rounded-lg" />
        </div>
        <div className={`h-full ${lang === "en" ? "w-[80px]" : "w-[115px]"}`}>
          <Skeleton baseColor="hsl(var(--b2))" highlightColor="hsl(var(--s))" height="100%" className="!rounded-lg" />
        </div>
      </div>
    </div>
  );
};
