import { Card } from "@/types/card.types";
import { FunctionComponent } from "react";
import { Font } from "@/design-system/font/font.component";

const CARDS_IN_CAROUSEL = 10;

const BADGE_COLOR = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
} as const;

type Props = {
  cards: Array<Card>;
};

export const CardsCarousel: FunctionComponent<Props> = ({ cards }) => {
  return (
    <div className="flex flex-col items-center">
      <Font.H2 color="text-base-content">Recently added</Font.H2>
      <div className="carousel w-64 sm:w-72 lg:w-80">
        {cards.slice(-CARDS_IN_CAROUSEL).map(({ title, forbiddenWords, difficulty }, i) => {
          return (
            <div key={title} id={`slide${i}`} className="carousel-item relative m-3 w-64 sm:w-72 lg:m-5 lg:w-80">
              <div className="card bg-primary w-80 shadow-xl">
                <div className="card-body flex flex-col items-center gap-3 sm:gap-6 lg:gap-8">
                  <div className="card-title">
                    <Font.H2 color="text-primary-content">{title}</Font.H2>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    {forbiddenWords.map((word) => (
                      <Font.P2 key={word} color="text-primary-content">
                        {word}
                      </Font.P2>
                    ))}
                  </div>
                  <div className={`badge h-5 ${BADGE_COLOR[difficulty]}`}>{difficulty}</div>
                </div>
              </div>
              <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
                <a
                  href={`#slide${i === 0 ? CARDS_IN_CAROUSEL - 1 : i - 1}`}
                  className="btn btn-primary btn-circle text-primary-content"
                >
                  ❮
                </a>
                <a
                  href={`#slide${i === CARDS_IN_CAROUSEL - 1 ? 0 : i + 1}`}
                  className="btn btn-primary btn-circle text-primary-content"
                >
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
