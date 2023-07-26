import { FunctionComponent, KeyboardEvent, useCallback, useState } from "react";
import ReactJson from "react-json-view";
import { Icon } from "@/components/icon/icon.component";
import { Card } from "@/types/card.types";
import { API_URL_PREFIX, CARDS_PATHS } from "@/paths/api.paths";

const response = await fetch(CARDS_PATHS.random);
const data = await response.json();
const randomCard: Card = data.data;

export const Playground: FunctionComponent = () => {
  const [value, setValue] = useState("cards/random");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Card | Record<string, Card> | "error">(randomCard);

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL_PREFIX}${value}`);
      const json = await response.json();
      setResponse(json);
    } catch (e) {
      setResponse("error");
    }
    setIsLoading(false);
  }, [value]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div id="playground" className="flex flex-col gap-8">
      <h2 className="prose prose-2xl font-semibold">Playground</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="join">
          <span className="bg-base-300 join-item flex h-12 items-center px-4">{API_URL_PREFIX}</span>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleKeyUp}
            value={value}
            className="input join-item input-bordered !rounded-r-lg focus:outline-none md:!rounded-r-none"
            style={{ borderColor: "hsl(var(--b3))" }}
          />
          <button
            onClick={handleClick}
            className="btn bg-base-300 join-item hidden w-24 border md:block"
            style={{ borderColor: "hsl(var(--b3))" }}
          >
            {isLoading ? <span className="loading loading-spinner" /> : "Request"}
          </button>
        </div>
        <button
          onClick={handleClick}
          className="btn bg-base-300 join-item block border md:hidden"
          style={{ borderColor: "hsl(var(--b3))" }}
        >
          Request
        </button>
      </div>
      {response &&
        (response === "error" ? (
          <div className="alert alert-error">
            <Icon type="error" className="h-6 w-6 shrink-0" color="hsl(var(--b3))" />
            <span>Error! Invalid URL.</span>
          </div>
        ) : (
          <ReactJson src={response} theme="ocean" style={{ padding: "16px" }} />
        ))}
    </div>
  );
};
