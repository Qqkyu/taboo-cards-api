import { Icon } from "@/components/icon/icon.component";
import { Font } from "@/design-system/font/font.component";
import { SettingsContext } from "@/game-modes/teams/contexts/settings.context";
import { useTranslations } from "@/i18n/utils";
import { getRandomCard } from "@/lib/api";
import { API_URL_PREFIX } from "@/paths/api.paths";
import { type Card } from "@/types/card.types";
import {
  type CSSProperties,
  type FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import Skeleton from "react-loading-skeleton";

const BADGE_COLOR = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
} as const;

type Props = {
  isReady: boolean;
  lang: "en" | "pl";
};

export const CardScreen: FunctionComponent<Props> = ({ isReady, lang }) => {
  const previousCards = useRef<Array<Card>>([]);

  const [card, setCard] = useState<Card | undefined>(undefined);
  const [nextCard, setNextCard] = useState<Card | undefined>(undefined);

  const [{ roundTime, skips }] = useContext(SettingsContext);
  const [timer, setTimer] = useState(roundTime);

  const [skipsLeft, setSkipsLeft] = useState(skips);
  const [displaySkipsInfo, setDisplaySkipsInfo] = useState(false);
  const displaySkipsTimeoutRef = useRef<number>(null);

  const t = useTranslations(lang);

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
    const interval =
      isReady &&
      setInterval(() => {
        setTimer((timeLeft) => Math.max(0, timeLeft - 1));
      }, 1000);

    return () => clearInterval(interval);
  }, [isReady]);

  const handleSkipCardClick = useCallback(() => {
    clearTimeout(displaySkipsTimeoutRef.current);
    setDisplaySkipsInfo(true);
    setSkipsLeft((prev) => prev - 1);
    const timeout = window.setTimeout(() => setDisplaySkipsInfo(false), 2000);
    displaySkipsTimeoutRef.current = timeout;
  }, []);

  const handleNextCardClick = useCallback(async () => {
    previousCards.current.push(card);
    setCard(nextCard);
    const nextRandomCard = await getRandomCard({ lang, apiUrlPrefix: API_URL_PREFIX });
    setNextCard(nextRandomCard);
  }, [card, lang, nextCard]);

  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-3xl sm:text-4xl">
              <span style={{ "--value": Math.floor(timer / 60) } as CSSProperties}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-3xl sm:text-4xl">
              <span style={{ "--value": timer % 60 } as CSSProperties}></span>
            </span>
            {t("play.sec")}
          </div>
        </div>
      </div>
      <div className="card bg-primary w-80 shadow-xl sm:w-96">
        <div className="card-body flex flex-col items-center gap-3 sm:gap-6 lg:gap-8">
          {card ? (
            <div className={`card-title text-center ${!isReady && "blur"}`}>
              <Font.H2 color="text-primary-content">{card.title}</Font.H2>
            </div>
          ) : (
            <div className="h-10 w-3/4 text-center">
              <Skeleton height="100%" baseColor="hsl(var(--p))" highlightColor="hsl(var(--pc))" />
            </div>
          )}
          <div className={`flex w-full flex-col items-center gap-3 ${card && !isReady && "blur"}`}>
            {card
              ? card.forbiddenWords.map((word) => (
                  <Font.P2 key={word} color="text-primary-content">
                    {word}
                  </Font.P2>
                ))
              : Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className="h-8 w-1/2 text-center">
                    <Skeleton key={idx} height="100%" baseColor="hsl(var(--p))" highlightColor="hsl(var(--pc))" />
                  </div>
                ))}
          </div>
          {card ? (
            <div className={`badge h-5 ${!isReady && "blur-xl"} ${BADGE_COLOR[card.difficulty]}`}>
              {t(`card.${card.difficulty}`)}
            </div>
          ) : (
            <div className="h-5 w-1/4">
              <Skeleton height="100%" baseColor="hsl(var(--p))" highlightColor="hsl(var(--pc))" />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className={`tooltip tooltip-bottom tooltip-warning ${displaySkipsInfo && "tooltip-open"}`}
          data-tip={t("play.skips_info")(skipsLeft)}
        >
          <button
            className={`btn btn-sm btn-warning sm:btn-md w-32 ${(!isReady || skipsLeft === 0) && "btn-disabled"}`}
            onClick={handleSkipCardClick}
          >
            {displaySkipsInfo ? "-1" : t("play.skip")}
          </button>
        </div>
        <button className={`btn btn-error btn-sm sm:btn-md btn-circle ${!isReady && "btn-disabled"}`}>
          <Icon type="taboo" color="hsl(var(--erc))" />
        </button>
        <button
          className={`btn btn-sm btn-success sm:btn-md w-32 ${!isReady && "btn-disabled"}`}
          onClick={handleNextCardClick}
        >
          {t("play.next")} ❯
        </button>
      </div>
    </div>
  );
};
