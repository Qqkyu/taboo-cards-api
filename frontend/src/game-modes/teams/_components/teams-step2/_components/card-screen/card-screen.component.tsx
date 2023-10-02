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

  const [{ roundTime }] = useContext(SettingsContext);
  const [timer, setTimer] = useState(roundTime);

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
        <button className="btn btn-sm sm:btn-md btn-secondary" onClick={handleNextCardClick}>
          {t("play.next")} ❯
        </button>
      </div>
    </div>
  );
};
