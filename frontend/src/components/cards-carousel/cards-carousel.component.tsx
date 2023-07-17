import { FunctionComponent } from "react";

const response = await fetch("http://localhost:7777/api/cards");
const data = await response.json();
const cards = data.data;

const BADGE_COLOR = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
} as const;

export const CardsCarousel: FunctionComponent = () => {
  return (
    <div className="carousel w-72">
      {cards.slice(0, 10).map((card, i) => {
        return (
          <div id={`slide${i}`} className="carousel-item relative w-72">
            <div className="card w-72 shadow-xl bg-primary">
              <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title">
                  {card.title}
                  <div className={`badge ${BADGE_COLOR[card.difficulty]}`}>{card.difficulty}</div>
                </h2>
                <div className="flex flex-col items-center gap-4">
                  {card.forbiddenWords.map((word) => (
                    <p>{word}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between -translate-y-1/2 inset-x-2 top-1/2">
              <a href={`#slide${i === 0 ? 9 : i - 1}`} className="btn btn-outline btn-circle">
                ❮
              </a>
              <a href={`#slide${i === 9 ? 0 : i + 1}`} className="btn btn-outline btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
