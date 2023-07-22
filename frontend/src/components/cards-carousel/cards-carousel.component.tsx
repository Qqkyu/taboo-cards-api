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

export const Cards: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="carousel w-80">
        {cards.slice(0, CARDS_IN_CAROUSEL).map(({ title, forbiddenWords, difficulty }, i) => {
          return (
            <div key={title} id={`slide${i}`} className="carousel-item relative m-5 w-80">
              <div className="card bg-primary w-80 shadow-xl">
                <div className="card-body flex flex-col items-center gap-8">
                  <h2 className="card-title">
                    <p className="prose prose-2xl">{title}</p>
                  </h2>
                  <div className="flex flex-col items-center gap-3">
                    {forbiddenWords.map((word) => (
                      <p key={word} className="prose">
                        {word}
                      </p>
                    ))}
                  </div>
                  <div className={`badge h-5 ${BADGE_COLOR[difficulty]}`}>{difficulty}</div>
                </div>
              </div>
              <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
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
      <p className="prose prose-lg">Cards: {cards.length}</p>
    </div>
  );
};
