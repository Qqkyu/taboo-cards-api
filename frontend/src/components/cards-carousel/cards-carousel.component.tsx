import { FunctionComponent } from "react";
import { Card } from "src/types/card.types";

const CARDS_IN_CAROUSEL = 1000;

const response = await fetch("http://localhost:7777/api/cards");
const data = await response.json();
const cards: Array<Card> = data.data;

const BADGE_COLOR = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
} as const;

export const CardsCarousel: FunctionComponent = () => {
  return (
    <div className="carousel w-80">
      {cards.slice(0, CARDS_IN_CAROUSEL).map(({ title, forbiddenWords, difficulty }, i) => {
        return (
          <div key={title} id={`slide${i}`} className="carousel-item relative w-80 m-5">
            <div className="card w-80 shadow-xl bg-primary">
              <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title flex justify-between">
                  {title}
                  <div className={`badge ${BADGE_COLOR[difficulty]}`}>{difficulty}</div>
                </h2>
                <div className="flex flex-col items-center gap-4">
                  {forbiddenWords.map((word) => (
                    <p>{word}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between -translate-y-1/2 inset-x-2 top-1/2">
              <a href={`#slide${i === 0 ? CARDS_IN_CAROUSEL - 1 : i - 1}`} className="btn btn-outline btn-circle">
                ❮
              </a>
              <a href={`#slide${i === CARDS_IN_CAROUSEL - 1 ? 0 : i + 1}`} className="btn btn-outline btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
