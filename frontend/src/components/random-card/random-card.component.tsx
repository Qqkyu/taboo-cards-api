import { Font } from "@/design-system/font/font.component";
import { useTranslations } from "@/i18n/utils";
import { getRandomCard } from "@/lib/api";
import { Card } from "@/types/card.types";
import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";

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
  const t = useTranslations(lang);

  const setRandomCard = useCallback(async () => {
    const randomCard = await getRandomCard({ lang });
    setCard(randomCard);
  }, [lang]);

  useEffect(() => {
    setRandomCard();
  }, [lang, setRandomCard]);

  const handleNextCardClick = useCallback(() => {
    previousCards.current.push(card);
    setRandomCard();
  }, [card, setRandomCard]);

  const handlePrevCardClick = useCallback(() => {
    const previousCard = previousCards.current.pop();
    previousCard && setCard(previousCard);
  }, []);

  return (
    card && (
      <div className="flex flex-col gap-4">
        <div className="card bg-primary w-80 shadow-xl">
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
    )
  );
};
